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
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
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

	version = "2.1.4",

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

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
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
// version 2.0.13 Build: 335
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

    /**
     * Main plugin constructor
     *
     * @param input {object}
     * @param options {object}
     * @param plugin_count {number}
     * @constructor
     */
    var IonRangeSlider = function (input, options, plugin_count) {
        this.VERSION = "2.0.13";
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
        this.is_finish = false;
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
            edge: null,
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

                // callbacks called
                this.callOnUpdate();
            } else {
                this.force_redraw = true;
                this.calc(true);

                // callbacks called
                this.callOnStart();
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
                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
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
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            } else {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));

                this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
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

            // callbacks call
            if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
                this.is_finish = true;
                this.callOnFinish();
            }

            this.$cache.cont.find(".state_hover").removeClass("state_hover");

            this.force_redraw = true;
            this.dragging = false;

            if (is_old_ie) {
                $("*").prop("unselectable", false);
            }

            this.updateScene();
        },

        changeLevel: function (target) {
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
            this.changeLevel(target);

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
                this.coords.p_gap = this.coords.p_handle / 2;
                real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
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

                // callbacks call
                if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
                    this.callOnChange();
                }
                if (this.is_key || this.is_click) {
                    this.callOnFinish();
                }

                this.is_update = false;
                this.is_resize = false;
                this.is_finish = false;
            }

            this.is_start = false;
            this.is_key = false;
            this.is_click = false;
            this.force_redraw = false;
        },

        // callbacks
        callOnStart: function () {
            if (this.options.onStart && typeof this.options.onStart === "function") {
                this.options.onStart(this.result);
            }
        },
        callOnChange: function () {
            if (this.options.onChange && typeof this.options.onChange === "function") {
                this.options.onChange(this.result);
            }
        },
        callOnFinish: function () {
            if (this.options.onFinish && typeof this.options.onFinish === "function") {
                this.options.onFinish(this.result);
            }
        },
        callOnUpdate: function () {
            if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                this.options.onUpdate(this.result);
            }
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
                    from_min = this.calcPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.calcPercent(is_from_max ? o.from_max : o.max) - from_min;
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
                    from_min = this.calcPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.calcPercent(is_from_max ? o.from_max : o.max) - from_min;
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
                    to_min = this.calcPercent(is_to_min ? o.to_min : o.min);
                    to_max = this.calcPercent(is_to_max ? o.to_max : o.max) - to_min;
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
                min_decimals = min.toString().split(".")[1],
                max_decimals = max.toString().split(".")[1],
                min_length, max_length,
                avg_decimals = 0,
                abs = 0;

            if (percent === 0) {
                return this.options.min;
            }
            if (percent === 100) {
                return this.options.max;
            }


            if (min_decimals) {
                min_length = min_decimals.length;
                avg_decimals = min_length;
            }
            if (max_decimals) {
                max_length = max_decimals.length;
                avg_decimals = max_length;
            }
            if (min_length && max_length) {
                avg_decimals = (min_length >= max_length) ? min_length : max_length;
            }

            if (min < 0) {
                abs = Math.abs(min);
                min = +(min + abs).toFixed(avg_decimals);
                max = +(max + abs).toFixed(avg_decimals);
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

            if (typeof min !== "number") {
                min = o.min;
            }

            if (typeof max !== "number") {
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
            num = num.toFixed(9);
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

            if (typeof o.from_min === "number" && o.from < o.from_min) {
                o.from = o.from_min;
            }

            if (typeof o.from_max === "number" && o.from > o.from_max) {
                o.from = o.from_max;
            }

            if (typeof o.to_min === "number" && o.to < o.to_min) {
                o.to = o.to_min;
            }

            if (typeof o.to_max === "number" && o.from > o.to_max) {
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

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3.js
// @output_wrapper (function() {%output%})();
// ==/ClosureCompiler==

/**
 * @license
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A RichMarker that allows any HTML/DOM to be added to a map and be draggable.
 *
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
function RichMarker(opt_options) {
  var options = opt_options || {};

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.dragging_ = false;

  if (opt_options['visible'] == undefined) {
    opt_options['visible'] = true;
  }

  if (opt_options['shadow'] == undefined) {
    opt_options['shadow'] = '7px -3px 5px rgba(88,88,88,0.7)';
  }

  if (opt_options['anchor'] == undefined) {
    opt_options['anchor'] = RichMarkerPosition['BOTTOM'];
  }

  this.setValues(options);
}
RichMarker.prototype = new google.maps.OverlayView();
window['RichMarker'] = RichMarker;


/**
 * Returns the current visibility state of the marker.
 *
 * @return {boolean} The visiblity of the marker.
 */
RichMarker.prototype.getVisible = function() {
  return /** @type {boolean} */ (this.get('visible'));
};
RichMarker.prototype['getVisible'] = RichMarker.prototype.getVisible;


/**
 * Sets the visiblility state of the marker.
 *
 * @param {boolean} visible The visiblilty of the marker.
 */
RichMarker.prototype.setVisible = function(visible) {
  this.set('visible', visible);
};
RichMarker.prototype['setVisible'] = RichMarker.prototype.setVisible;


/**
 *  The visible changed event.
 */
RichMarker.prototype.visible_changed = function() {
  if (this.ready_) {
    this.markerWrapper_.style['display'] = this.getVisible() ? '' : 'none';
    this.draw();
  }
};
RichMarker.prototype['visible_changed'] = RichMarker.prototype.visible_changed;


/**
 * Sets the marker to be flat.
 *
 * @param {boolean} flat If the marker is to be flat or not.
 */
RichMarker.prototype.setFlat = function(flat) {
  this.set('flat', !!flat);
};
RichMarker.prototype['setFlat'] = RichMarker.prototype.setFlat;


/**
 * If the makrer is flat or not.
 *
 * @return {boolean} True the marker is flat.
 */
RichMarker.prototype.getFlat = function() {
  return /** @type {boolean} */ (this.get('flat'));
};
RichMarker.prototype['getFlat'] = RichMarker.prototype.getFlat;


/**
 * Get the width of the marker.
 *
 * @return {Number} The width of the marker.
 */
RichMarker.prototype.getWidth = function() {
  return /** @type {Number} */ (this.get('width'));
};
RichMarker.prototype['getWidth'] = RichMarker.prototype.getWidth;


/**
 * Get the height of the marker.
 *
 * @return {Number} The height of the marker.
 */
RichMarker.prototype.getHeight = function() {
  return /** @type {Number} */ (this.get('height'));
};
RichMarker.prototype['getHeight'] = RichMarker.prototype.getHeight;


/**
 * Sets the marker's box shadow.
 *
 * @param {string} shadow The box shadow to set.
 */
RichMarker.prototype.setShadow = function(shadow) {
  this.set('shadow', shadow);
  this.flat_changed();
};
RichMarker.prototype['setShadow'] = RichMarker.prototype.setShadow;


/**
 * Gets the marker's box shadow.
 *
 * @return {string} The box shadow.
 */
RichMarker.prototype.getShadow = function() {
  return /** @type {string} */ (this.get('shadow'));
};
RichMarker.prototype['getShadow'] = RichMarker.prototype.getShadow;


/**
 * Flat changed event.
 */
RichMarker.prototype.flat_changed = function() {
  if (!this.ready_) {
    return;
  }

  this.markerWrapper_.style['boxShadow'] =
      this.markerWrapper_.style['webkitBoxShadow'] =
      this.markerWrapper_.style['MozBoxShadow'] =
      this.getFlat() ? '' : this.getShadow();
};
RichMarker.prototype['flat_changed'] = RichMarker.prototype.flat_changed;


/**
 * Sets the zIndex of the marker.
 *
 * @param {Number} index The index to set.
 */
RichMarker.prototype.setZIndex = function(index) {
  this.set('zIndex', index);
};
RichMarker.prototype['setZIndex'] = RichMarker.prototype.setZIndex;


/**
 * Gets the zIndex of the marker.
 *
 * @return {Number} The zIndex of the marker.
 */
RichMarker.prototype.getZIndex = function() {
  return /** @type {Number} */ (this.get('zIndex'));
};
RichMarker.prototype['getZIndex'] = RichMarker.prototype.getZIndex;


/**
 * zIndex changed event.
 */
RichMarker.prototype.zIndex_changed = function() {
  if (this.getZIndex() && this.ready_) {
    this.markerWrapper_.style.zIndex = this.getZIndex();
  }
};
RichMarker.prototype['zIndex_changed'] = RichMarker.prototype.zIndex_changed;

/**
 * Whether the marker is draggable or not.
 *
 * @return {boolean} True if the marker is draggable.
 */
RichMarker.prototype.getDraggable = function() {
  return /** @type {boolean} */ (this.get('draggable'));
};
RichMarker.prototype['getDraggable'] = RichMarker.prototype.getDraggable;


/**
 * Sets the marker to be draggable or not.
 *
 * @param {boolean} draggable If the marker is draggable or not.
 */
RichMarker.prototype.setDraggable = function(draggable) {
  this.set('draggable', !!draggable);
};
RichMarker.prototype['setDraggable'] = RichMarker.prototype.setDraggable;


/**
 * Draggable property changed callback.
 */
RichMarker.prototype.draggable_changed = function() {
  if (this.ready_) {
    if (this.getDraggable()) {
      this.addDragging_(this.markerWrapper_);
    } else {
      this.removeDragListeners_();
    }
  }
};
RichMarker.prototype['draggable_changed'] =
    RichMarker.prototype.draggable_changed;


/**
 * Gets the postiton of the marker.
 *
 * @return {google.maps.LatLng} The position of the marker.
 */
RichMarker.prototype.getPosition = function() {
  return /** @type {google.maps.LatLng} */ (this.get('position'));
};
RichMarker.prototype['getPosition'] = RichMarker.prototype.getPosition;


/**
 * Sets the position of the marker.
 *
 * @param {google.maps.LatLng} position The position to set.
 */
RichMarker.prototype.setPosition = function(position) {
  this.set('position', position);
};
RichMarker.prototype['setPosition'] = RichMarker.prototype.setPosition;


/**
 * Position changed event.
 */
RichMarker.prototype.position_changed = function() {
  this.draw();
};
RichMarker.prototype['position_changed'] =
    RichMarker.prototype.position_changed;


/**
 * Gets the anchor.
 *
 * @return {google.maps.Size} The position of the anchor.
 */
RichMarker.prototype.getAnchor = function() {
  return /** @type {google.maps.Size} */ (this.get('anchor'));
};
RichMarker.prototype['getAnchor'] = RichMarker.prototype.getAnchor;


/**
 * Sets the anchor.
 *
 * @param {RichMarkerPosition|google.maps.Size} anchor The anchor to set.
 */
RichMarker.prototype.setAnchor = function(anchor) {
  this.set('anchor', anchor);
};
RichMarker.prototype['setAnchor'] = RichMarker.prototype.setAnchor;


/**
 * Anchor changed event.
 */
RichMarker.prototype.anchor_changed = function() {
  this.draw();
};
RichMarker.prototype['anchor_changed'] = RichMarker.prototype.anchor_changed;


/**
 * Converts a HTML string to a document fragment.
 *
 * @param {string} htmlString The HTML string to convert.
 * @return {Node} A HTML document fragment.
 * @private
 */
RichMarker.prototype.htmlToDocumentFragment_ = function(htmlString) {
  var tempDiv = document.createElement('DIV');
  tempDiv.innerHTML = htmlString;
  if (tempDiv.childNodes.length == 1) {
    return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));
  } else {
    var fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};


/**
 * Removes all children from the node.
 *
 * @param {Node} node The node to remove all children from.
 * @private
 */
RichMarker.prototype.removeChildren_ = function(node) {
  if (!node) {
    return;
  }

  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};


/**
 * Sets the content of the marker.
 *
 * @param {string|Node} content The content to set.
 */
RichMarker.prototype.setContent = function(content) {
  this.set('content', content);
};
RichMarker.prototype['setContent'] = RichMarker.prototype.setContent;


/**
 * Get the content of the marker.
 *
 * @return {string|Node} The marker content.
 */
RichMarker.prototype.getContent = function() {
  return /** @type {Node|string} */ (this.get('content'));
};
RichMarker.prototype['getContent'] = RichMarker.prototype.getContent;


/**
 * Sets the marker content and adds loading events to images
 */
RichMarker.prototype.content_changed = function() {
  if (!this.markerContent_) {
    // Marker content area doesnt exist.
    return;
  }

  this.removeChildren_(this.markerContent_);
  var content = this.getContent();
  if (content) {
    if (typeof content == 'string') {
      content = content.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
      content = this.htmlToDocumentFragment_(content);
    }
    this.markerContent_.appendChild(content);

    var that = this;
    var images = this.markerContent_.getElementsByTagName('IMG');
    for (var i = 0, image; image = images[i]; i++) {
      // By default, a browser lets a image be dragged outside of the browser,
      // so by calling preventDefault we stop this behaviour and allow the image
      // to be dragged around the map and now out of the browser and onto the
      // desktop.
      google.maps.event.addDomListener(image, 'mousedown', function(e) {
        if (that.getDraggable()) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          e.returnValue = false;
        }
      });

      // Because we don't know the size of an image till it loads, add a
      // listener to the image load so the marker can resize and reposition
      // itself to be the correct height.
      google.maps.event.addDomListener(image, 'load', function() {
        that.draw();
      });
    }

    google.maps.event.trigger(this, 'domready');
  }

  if (this.ready_) {
    this.draw();
  }
};
RichMarker.prototype['content_changed'] = RichMarker.prototype.content_changed;

/**
 * Sets the cursor.
 *
 * @param {string} whichCursor What cursor to show.
 * @private
 */
RichMarker.prototype.setCursor_ = function(whichCursor) {
  if (!this.ready_) {
    return;
  }

  var cursor = '';
  if (navigator.userAgent.indexOf('Gecko/') !== -1) {
    // Moz has some nice cursors :)
    if (whichCursor == 'dragging') {
      cursor = '-moz-grabbing';
    }

    if (whichCursor == 'dragready') {
      cursor = '-moz-grab';
    }

    if (whichCursor == 'draggable') {
      cursor = 'pointer';
    }
  } else {
    if (whichCursor == 'dragging' || whichCursor == 'dragready') {
      cursor = 'move';
    }

    if (whichCursor == 'draggable') {
      cursor = 'pointer';
    }
  }

  if (this.markerWrapper_.style.cursor != cursor) {
    this.markerWrapper_.style.cursor = cursor;
  }
};

/**
 * Start dragging.
 *
 * @param {Event} e The event.
 */
RichMarker.prototype.startDrag = function(e) {
  if (!this.getDraggable()) {
    return;
  }

  if (!this.dragging_) {
    this.dragging_ = true;
    var map = this.getMap();
    this.mapDraggable_ = map.get('draggable');
    map.set('draggable', false);

    // Store the current mouse position
    this.mouseX_ = e.clientX;
    this.mouseY_ = e.clientY;

    this.setCursor_('dragready');

    // Stop the text from being selectable while being dragged
    this.markerWrapper_.style['MozUserSelect'] = 'none';
    this.markerWrapper_.style['KhtmlUserSelect'] = 'none';
    this.markerWrapper_.style['WebkitUserSelect'] = 'none';

    this.markerWrapper_['unselectable'] = 'on';
    this.markerWrapper_['onselectstart'] = function() {
      return false;
    };

    this.addDraggingListeners_();

    google.maps.event.trigger(this, 'dragstart');
  }
};


/**
 * Stop dragging.
 */
RichMarker.prototype.stopDrag = function() {
  if (!this.getDraggable()) {
    return;
  }

  if (this.dragging_) {
    this.dragging_ = false;
    this.getMap().set('draggable', this.mapDraggable_);
    this.mouseX_ = this.mouseY_ = this.mapDraggable_ = null;

    // Allow the text to be selectable again
    this.markerWrapper_.style['MozUserSelect'] = '';
    this.markerWrapper_.style['KhtmlUserSelect'] = '';
    this.markerWrapper_.style['WebkitUserSelect'] = '';
    this.markerWrapper_['unselectable'] = 'off';
    this.markerWrapper_['onselectstart'] = function() {};

    this.removeDraggingListeners_();

    this.setCursor_('draggable');
    google.maps.event.trigger(this, 'dragend');

    this.draw();
  }
};


/**
 * Handles the drag event.
 *
 * @param {Event} e The event.
 */
RichMarker.prototype.drag = function(e) {
  if (!this.getDraggable() || !this.dragging_) {
    // This object isn't draggable or we have stopped dragging
    this.stopDrag();
    return;
  }

  var dx = this.mouseX_ - e.clientX;
  var dy = this.mouseY_ - e.clientY;

  this.mouseX_ = e.clientX;
  this.mouseY_ = e.clientY;

  var left = parseInt(this.markerWrapper_.style['left'], 10) - dx;
  var top = parseInt(this.markerWrapper_.style['top'], 10) - dy;

  this.markerWrapper_.style['left'] = left + 'px';
  this.markerWrapper_.style['top'] = top + 'px';

  var offset = this.getOffset_();

  // Set the position property and adjust for the anchor offset
  var point = new google.maps.Point(left - offset.width, top - offset.height);
  var projection = this.getProjection();
  this.setPosition(projection.fromDivPixelToLatLng(point));

  this.setCursor_('dragging');
  google.maps.event.trigger(this, 'drag');
};


/**
 * Removes the drag listeners associated with the marker.
 *
 * @private
 */
RichMarker.prototype.removeDragListeners_ = function() {
  if (this.draggableListener_) {
    google.maps.event.removeListener(this.draggableListener_);
    delete this.draggableListener_;
  }
  this.setCursor_('');
};


/**
 * Add dragability events to the marker.
 *
 * @param {Node} node The node to apply dragging to.
 * @private
 */
RichMarker.prototype.addDragging_ = function(node) {
  if (!node) {
    return;
  }

  var that = this;
  this.draggableListener_ =
    google.maps.event.addDomListener(node, 'mousedown', function(e) {
      that.startDrag(e);
    });

  this.setCursor_('draggable');
};


/**
 * Add dragging listeners.
 *
 * @private
 */
RichMarker.prototype.addDraggingListeners_ = function() {
  var that = this;
  if (this.markerWrapper_.setCapture) {
    this.markerWrapper_.setCapture(true);
    this.draggingListeners_ = [
      google.maps.event.addDomListener(this.markerWrapper_, 'mousemove', function(e) {
        that.drag(e);
      }, true),
      google.maps.event.addDomListener(this.markerWrapper_, 'mouseup', function() {
        that.stopDrag();
        that.markerWrapper_.releaseCapture();
      }, true)
    ];
  } else {
    this.draggingListeners_ = [
      google.maps.event.addDomListener(window, 'mousemove', function(e) {
        that.drag(e);
      }, true),
      google.maps.event.addDomListener(window, 'mouseup', function() {
        that.stopDrag();
      }, true)
    ];
  }
};


/**
 * Remove dragging listeners.
 *
 * @private
 */
RichMarker.prototype.removeDraggingListeners_ = function() {
  if (this.draggingListeners_) {
    for (var i = 0, listener; listener = this.draggingListeners_[i]; i++) {
      google.maps.event.removeListener(listener);
    }
    this.draggingListeners_.length = 0;
  }
};


/**
 * Get the anchor offset.
 *
 * @return {google.maps.Size} The size offset.
 * @private
 */
RichMarker.prototype.getOffset_ = function() {
  var anchor = this.getAnchor();
  if (typeof anchor == 'object') {
    return /** @type {google.maps.Size} */ (anchor);
  }

  var offset = new google.maps.Size(0, 0);
  if (!this.markerContent_) {
    return offset;
  }

  var width = this.markerContent_.offsetWidth;
  var height = this.markerContent_.offsetHeight;

  switch (anchor) {
   case RichMarkerPosition['TOP_LEFT']:
     break;
   case RichMarkerPosition['TOP']:
     offset.width = -width / 2;
     break;
   case RichMarkerPosition['TOP_RIGHT']:
     offset.width = -width;
     break;
   case RichMarkerPosition['LEFT']:
     offset.height = -height / 2;
     break;
   case RichMarkerPosition['MIDDLE']:
     offset.width = -width / 2;
     offset.height = -height / 2;
     break;
   case RichMarkerPosition['RIGHT']:
     offset.width = -width;
     offset.height = -height / 2;
     break;
   case RichMarkerPosition['BOTTOM_LEFT']:
     offset.height = -height;
     break;
   case RichMarkerPosition['BOTTOM']:
     offset.width = -width / 2;
     offset.height = -height;
     break;
   case RichMarkerPosition['BOTTOM_RIGHT']:
     offset.width = -width;
     offset.height = -height;
     break;
  }

  return offset;
};


/**
 * Adding the marker to a map.
 * Implementing the interface.
 */
RichMarker.prototype.onAdd = function() {
  if (!this.markerWrapper_) {
    this.markerWrapper_ = document.createElement('DIV');
    this.markerWrapper_.style['position'] = 'absolute';
  }

  if (this.getZIndex()) {
    this.markerWrapper_.style['zIndex'] = this.getZIndex();
  }

  this.markerWrapper_.style['display'] = this.getVisible() ? '' : 'none';

  if (!this.markerContent_) {
    this.markerContent_ = document.createElement('DIV');
    this.markerWrapper_.appendChild(this.markerContent_);

    var that = this;
    google.maps.event.addDomListener(this.markerContent_, 'click', function(e) {
      google.maps.event.trigger(that, 'click');
    });
    google.maps.event.addDomListener(this.markerContent_, 'mouseover', function(e) {
      google.maps.event.trigger(that, 'mouseover');
    });
    google.maps.event.addDomListener(this.markerContent_, 'mouseout', function(e) {
      google.maps.event.trigger(that, 'mouseout');
    });
  }

  this.ready_ = true;
  this.content_changed();
  this.flat_changed();
  this.draggable_changed();

  var panes = this.getPanes();
  if (panes) {
    panes.overlayMouseTarget.appendChild(this.markerWrapper_);
  }

  google.maps.event.trigger(this, 'ready');
};
RichMarker.prototype['onAdd'] = RichMarker.prototype.onAdd;


/**
 * Impelementing the interface.
 */
RichMarker.prototype.draw = function() {
  if (!this.ready_ || this.dragging_) {
    return;
  }

  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  var latLng = /** @type {google.maps.LatLng} */ (this.get('position'));
  var pos = projection.fromLatLngToDivPixel(latLng);

  var offset = this.getOffset_();
  this.markerWrapper_.style['top'] = (pos.y + offset.height) + 'px';
  this.markerWrapper_.style['left'] = (pos.x + offset.width) + 'px';

  var height = this.markerContent_.offsetHeight;
  var width = this.markerContent_.offsetWidth;

  if (width != this.get('width')) {
    this.set('width', width);
  }

  if (height != this.get('height')) {
    this.set('height', height);
  }
};
RichMarker.prototype['draw'] = RichMarker.prototype.draw;


/**
 * Removing a marker from the map.
 * Implementing the interface.
 */
RichMarker.prototype.onRemove = function() {
  if (this.markerWrapper_ && this.markerWrapper_.parentNode) {
    this.markerWrapper_.parentNode.removeChild(this.markerWrapper_);
  }
  this.removeDragListeners_();
};
RichMarker.prototype['onRemove'] = RichMarker.prototype.onRemove;


/**
 * RichMarker Anchor positions
 * @enum {number}
 */
var RichMarkerPosition = {
  'TOP_LEFT': 1,
  'TOP': 2,
  'TOP_RIGHT': 3,
  'LEFT': 4,
  'MIDDLE': 5,
  'RIGHT': 6,
  'BOTTOM_LEFT': 7,
  'BOTTOM': 8,
  'BOTTOM_RIGHT': 9
};
window['RichMarkerPosition'] = RichMarkerPosition;

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/*! iNoBounce - v0.1.0
* https://github.com/lazd/iNoBounce/
* Copyright (c) 2013 Larry Davis <lazdnet@gmail.com>; Licensed BSD */
(function(global) {
	// Stores the Y position where the touch started
	var startY = 0;

	// Store enabled status
	var enabled = false;

	var handleTouchmove = function(evt) {
		// Get the element that was scrolled upon
		var el = evt.target;

		// Check all parent elements for scrollability
		while (el !== document.body) {
			// Get some style properties
			var style = window.getComputedStyle(el);

			if (!style) {
				// If we've encountered an element we can't compute the style for, get out
				break;
			}

			var scrolling = style.getPropertyValue('-webkit-overflow-scrolling');
			var overflowY = style.getPropertyValue('overflow-y');
			var height = parseInt(style.getPropertyValue('height'), 10);

			// Determine if the element should scroll
			var isScrollable = scrolling === 'touch' && (overflowY === 'auto' || overflowY === 'scroll');
			var canScroll = el.scrollHeight > el.offsetHeight;

			if (isScrollable && canScroll) {
				// Get the current Y position of the touch
				var curY = evt.touches ? evt.touches[0].screenY : evt.screenY;

				// Determine if the user is trying to scroll past the top or bottom
				// In this case, the window will bounce, so we have to prevent scrolling completely
				var isAtTop = (startY <= curY && el.scrollTop === 0);
				var isAtBottom = (startY >= curY && el.scrollHeight - el.scrollTop === height);

				// Stop a bounce bug when at the bottom or top of the scrollable element
				if (isAtTop || isAtBottom) {
					evt.preventDefault();
				}

				// No need to continue up the DOM, we've done our job
				return;
			}

			// Test the next parent
			el = el.parentNode;
		}

		// Stop the bouncing -- no parents are scrollable
		evt.preventDefault();
	};

	var handleTouchstart = function(evt) {
		// Store the first Y position of the touch
		startY = evt.touches ? evt.touches[0].screenY : evt.screenY;
	};

	var enable = function() {
		// Listen to a couple key touch events
		window.addEventListener('touchstart', handleTouchstart, false);
		window.addEventListener('touchmove', handleTouchmove, false);
		enabled = true;
	};

	var disable = function() {
		// Stop listening
		window.removeEventListener('touchstart', handleTouchstart, false);
		window.removeEventListener('touchmove', handleTouchmove, false);
		enabled = false;
	};

	var isEnabled = function() {
		return enabled;
	};

	// Enable by default if the browser supports -webkit-overflow-scrolling
	// Test this by setting the property with JavaScript on an element that exists in the DOM
	// Then, see if the property is reflected in the computed style
	var testDiv = document.createElement('div');
	document.documentElement.appendChild(testDiv);
	testDiv.style.WebkitOverflowScrolling = 'touch';
	var scrollSupport = 'getComputedStyle' in window && window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
	document.documentElement.removeChild(testDiv);

	if (scrollSupport) {
		enable();
	}

	// A module to support enabling/disabling iNoBounce
	var iNoBounce = {
		enable: enable,
		disable: disable,
		isEnabled: isEnabled
	};

	if (typeof module !== 'undefined' && module.exports) {
		// Node.js Support
		module.exports = iNoBounce;
	}
	if (typeof global.define === 'function') {
		// AMD Support
		(function(define) {
			define(function() { return iNoBounce; });
		}(global.define));
	}
	else {
		// Browser support
		global.iNoBounce = iNoBounce;
	}
}(this));


//#region "Defaults"

var koAnimate =
{
    defaults:
    {
        hoverScale:
        {
            duration: 250,
            scaleOut: 1.0,
            durationOut: 100,
            durationFinal: 100,
            easing: 'ease-in',
            easingOut: 'ease-out'
        },
        
        hoverRotate:
        {
            degrees: 30,
            duration: 250,
            degreesOut: 0,
            durationOut: 100,
            easing: 'ease-in',
            easingOut: 'ease-out'
        },
        
        fadeVisible:
        {
            duration: 500,
            durationOut: 500,
            easing: 'ease-in',
            easingOut: 'ease-out',
            delay: 50,
            delayOut: 0
        },
        
        scaleVisible:
        {
            scale: 1.0,
            scaleHide: 0,
            scaleHideOut: 0,
            duration: 500,
            durationOut: 500,
            easing: 'ease-in',
            easingOut: 'ease-out',
            delay: 50,
            delayOut: 0
        },
        
        slideVisible:
        {
            duration: 500,
            durationOut: 500,
            direction: 'left',
            directionOut: 'left',
            easing: 'ease-in',
            easingOut: 'ease-out',
            delay: 50,
            delayOut: 50
        },
        
        cssAnimate:
        {
            animation: 'tada',
            event: 'click',
            duration: 1000,
            callback: null
        },
        
        cssAnimateVisible:
        {
            animation: 'bounceIn',
            animationOut: 'bounceOut',
            duration: 1000,
            durationOut: 1000,
            delay: 1,
            delayOut: 1
        },


        cssAnimateReveal:
        {
            animation: 'bounceIn',
            duration: 1000,
            offset: 0,
            callback: null,
            delay: 1
        }
        
    }

};


//#endregion "Defaults"

//#region "Helpers"

koAnimate.helpers =
{
    cssVendors: ['-webkit-', '-moz-', '-o-,', '-ms-', ''],

    getDirectionX: function(direction)
    {
        switch (direction)
        {
            case "left":
                return "-2000px";
            case "right":
                return "2000px";
            default:
                return '0px';
        }
    },

    getDirectionY: function(direction)
    {
        switch (direction)
        {
            case "top":
                return "-2000px";
            case "bottom":
                return "2000px";
            default:
                return '0px';
        }
    },

    isElementInViewport: function(element, offset)
    {
        var rectangle = element.getBoundingClientRect();

        return (
            rectangle.top >= 0 &&
            rectangle.left >= 0 &&
            rectangle.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - offset) &&
            rectangle.right <= (window.innerWidth || document.documentElement.clientWidth) 
        );
    }

};

//#endregion "Helpers"

//#region "Animations"

koAnimate.animations =
{
    animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    
    transitionEnd: 'transitionend webkitTransitionEnd oTransitionEnd otransitionend',
    
    animationInitializationName: 'ko-animate-initialization',
    
    setDuration: function (element, duration)
    {
        //Overrides the Animate.css animated class

        var seconds = duration / 1000;

        $("#koAnimateAnimated").remove();
        var style = $('<style id="koAnimateAnimated">.animated { ' +
            '-webkit-animation-duration: ' + seconds + 's !important; ' +
            'animation-duration: ' + seconds + 's !important' +
            ' }</style>');
        $('html > head').append(style);
    },

    removeDuration: function (element)
    {
        $.each(koAnimate.helpers.cssVendors, function (index, item)
        {
            $(element).css(item + 'transition-duration', '');
            $(element).css(item + 'animation-fill-mode', '');
        });
    },

    stopAnimation: function (element)
    {
        $(element).css('-moz-transition', 'none');
        $(element).css('-webkit-transition', 'none');
        $(element).css('-o-transition', 'color 0 ease-in');
        $(element).css('transition', 'none');
    },

    scale: function (element, scale, duration, easing)
    {
        var seconds = duration / 1000;
        $.each(koAnimate.helpers.cssVendors, function (index, item)
        {
            $(element).css(item + 'transform', 'scale(' + scale + ')').css(item + 'transition', seconds + 's ' + easing);
        });
    },

    rotate: function (element, degrees, duration, easing)
    {
        var seconds = duration / 1000;
        $.each(koAnimate.helpers.cssVendors, function (index, item)
        {
            $(element).css(item + 'transform', 'rotate(' + degrees + 'deg)').css(item + 'transition', seconds + 's ' + easing);
        });
    },

    opacity: function (element, opacity, duration, easing)
    {
        var seconds = duration / 1000;
        $.each(koAnimate.helpers.cssVendors, function (index, item)
        {
            $(element).css("opacity", opacity).css(item + 'transition', 'opacity ' + seconds + 's ' + easing);
        });
    },

    slide: function (element, pixelsX, pixelsY, duration, easing)
    {
        var seconds = duration / 1000;
        $.each(koAnimate.helpers.cssVendors, function (index, item)
        {
            $(element).css(item + 'transform', 'translate(' + pixelsX + ',' + pixelsY + ')').css(item + 'transition', seconds + 's ' + easing);
        });
    },

    cssAnimateReveal: function (element, animation, offset, delay, duration, callback) {

        if (koAnimate.helpers.isElementInViewport($(element)[0], offset) && !$(element).hasClass("animated")) {
            
            setTimeout(function () {
                element.style.visibility = "";
                koAnimate.animations.setDuration(element, duration);
                $(element).addClass("animated " + animation);

                $(element).one(koAnimate.animations.animationEnd, function () {
                    if (callback) {
                        callback();
                    }

                    $(window).off("scroll", element.koAnimateScrollHandler);
                });

            }, delay);
        }
    }


};

//#endregion "Animations"

//#region "Hovering"

ko.bindingHandlers.hoverScale =
{
    init: function (element, valueAccessor, allBindings)
    {
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.hoverScale.duration;
        var durationOut = allBindings['has']('durationOut') ? allBindings.get('durationOut') : koAnimate.defaults.hoverScale.durationOut;
        var easing = allBindings['has']('easing') ? allBindings.get('easing') : koAnimate.defaults.hoverScale.easing;
        var easingOut = allBindings['has']('easingOut') ? allBindings.get('easingOut') : koAnimate.defaults.hoverScale.easingOut;
        var scale = valueAccessor();
        var scaleOut = allBindings['has']('scaleOut') ? allBindings.get('scaleOut') : koAnimate.defaults.hoverScale.scaleOut;

        ko.utils.registerEventHandler(element, "mouseenter", function ()
        {

            koAnimate.animations.scale(element, scale, duration, easing);
        });

        ko.utils.registerEventHandler(element, "mouseleave", function ()
        {
            koAnimate.animations.scale(element, scaleOut, durationOut, easingOut);
        });
    }
};

ko.bindingHandlers.hoverRotate =
{
    init: function (element, valueAccessor, allBindings)
    {
        var degrees = valueAccessor();
        var degreesOut = allBindings['has']('degreesOut') ? allBindings.get('degreesOut') : koAnimate.defaults.hoverRotate.degreesOut;
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.hoverRotate.duration;
        var durationOut = allBindings['has']('durationOut') ? allBindings.get('durationOut') : koAnimate.defaults.hoverRotate.durationOut;
        var easing = allBindings['has']('easing') ? allBindings.get('easing') : koAnimate.defaults.hoverRotate.easing;
        var easingOut = allBindings['has']('easingOut') ? allBindings.get('easingOut') : koAnimate.defaults.hoverRotate.easingOut;

        ko.utils.registerEventHandler(element, "mouseenter", function ()
        {
            koAnimate.animations.rotate(element, degrees, duration, easing);
        });

        ko.utils.registerEventHandler(element, "mouseleave", function ()
        {
            koAnimate.animations.rotate(element, degreesOut, durationOut, easingOut);
        });
    }
};


//#endregion "Hovering"

//#region "Visibility"

ko.bindingHandlers.fadeVisible =
{
    init: function (element, valueAccessor)
    {
        if (ko.utils.unwrapObservable(valueAccessor()))
        {
            $(element).show();
        }
        else
        {
            $(element).hide();
            
            //Set initial opacity
            koAnimate.animations.opacity(element, 0, 0, 'ease');
        }
    },
    update: function (element, valueAccessor, allBindings)
    {
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.fadeVisible.duration;
        var durationOut = allBindings['has']('durationOut') ? allBindings.get('durationOut') : koAnimate.defaults.fadeVisible.durationOut;
        var easing = allBindings['has']('easing') ? allBindings.get('easing') : koAnimate.defaults.fadeVisible.easing;
        var easingOut = allBindings['has']('easingOut') ? allBindings.get('easingOut') : koAnimate.defaults.fadeVisible.easingOut;
        var delay = allBindings['has']('delay') ? allBindings.get('delay') : koAnimate.defaults.fadeVisible.delay;
        var delayOut = allBindings['has']('delayOut') ? allBindings.get('delayOut') : koAnimate.defaults.fadeVisible.delayOut;
        
        $(element).off(koAnimate.animations.transitionEnd);
        clearTimeout(element.koAnimateFadeVisible);
        
        if (ko.utils.unwrapObservable(valueAccessor()))
        {
            $(element).show();
            
            element.koAnimateFadeVisible = setTimeout(function()
            {
                koAnimate.animations.opacity(element, 1, duration, easing);
                
                $(element).on(koAnimate.animations.transitionEnd, function ()
                {
                    $(element).show();
                });
                
            }, delay);

        }
        else
        {
            setTimeout(function()
            {
                $(element).show();
            
                koAnimate.animations.opacity(element, 0, durationOut, easingOut);
            
                $(element).on(koAnimate.animations.transitionEnd, function ()
                {
                    $(element).hide();
                });
            }, delayOut);
        }
    }
};

ko.bindingHandlers.scaleVisible =
{
    init: function (element, valueAccessor)
    {
        if (ko.utils.unwrapObservable(valueAccessor()))
        {
            $(element).show();
        }
        else
        {
            $(element).hide();
        }

    },
    update: function (element, valueAccessor, allBindings)
    {
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.scaleVisible.duration;
        var durationOut = allBindings['has']('durationOut') ? allBindings.get('durationOut') : koAnimate.defaults.scaleVisible.durationOut;
        var easing = allBindings['has']('easing') ? allBindings.get('easing') : koAnimate.defaults.scaleVisible.easing;
        var easingOut = allBindings['has']('easingOut') ? allBindings.get('easingOut') : koAnimate.defaults.scaleVisible.easingOut;
        var scale = allBindings['has']('scale') ? allBindings.get('scale') : koAnimate.defaults.scaleVisible.scale;
        var scaleHide = allBindings['has']('scaleHide') ? allBindings.get('scaleHide') : koAnimate.defaults.scaleVisible.scaleHide;
        var scaleHideOut = allBindings['has']('scaleHideOut') ? allBindings.get('scaleHideOut') : koAnimate.defaults.scaleVisible.scaleHideOut;
        var delay = allBindings['has']('delay') ? allBindings.get('delay') : koAnimate.defaults.scaleVisible.delay;
        var delayOut = allBindings['has']('delayOut') ? allBindings.get('delayOut') : koAnimate.defaults.scaleVisible.delayOut;
        
        $(element).off(koAnimate.animations.transitionEnd);
        
        clearTimeout(element.koAnimateScaleVisible);

        if (ko.utils.unwrapObservable(valueAccessor()))
        {
            koAnimate.animations.scale(element, scaleHide, 0);
            $(element).show();
            koAnimate.animations.stopAnimation(element);

            element.koAnimateScaleVisible = setTimeout(function ()
            {

                koAnimate.animations.scale(element, scale, duration, easing);

                $(element).on(koAnimate.animations.transitionEnd, function ()
                {
                    $(element).show();
                });


            }, delay);
        }
        else
        {
            setTimeout(function()
            {

                koAnimate.animations.scale(element, scaleHideOut, durationOut, easingOut);

                $(element).on(koAnimate.animations.transitionEnd, function()
                {
                    $(element).hide();
                });
            }, delayOut);
        }

    }
};

ko.bindingHandlers.slideVisible =
{
    init: function (element, valueAccessor, allBindings)
    {
        if (ko.utils.unwrapObservable(valueAccessor()))
        {
            $(element).show();
        }
        else
        {
            $(element).hide();
        }
    },
    update: function (element, valueAccessor, allBindings)
    {
        var value = ko.utils.unwrapObservable(valueAccessor());
        
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.slideVisible.duration;
        var durationOut = allBindings['has']('durationOut') ? allBindings.get('durationOut') : koAnimate.defaults.slideVisible.durationOut;
        var easing = allBindings['has']('easing') ? allBindings.get('easing') : koAnimate.defaults.slideVisible.easing;
        var easingOut = allBindings['has']('easingOut') ? allBindings.get('easingOut') : koAnimate.defaults.slideVisible.easingOut;
        var directionOut = allBindings['has']('directionOut') ? allBindings.get('directionOut') : koAnimate.defaults.slideVisible.directionOut;
        var delay = allBindings['has']('delay') ? allBindings.get('delay') : koAnimate.defaults.slideVisible.delay;
        var delayOut = allBindings['has']('delayOut') ? allBindings.get('delayOut') : koAnimate.defaults.slideVisible.delayOut;
        
        $(element).off(koAnimate.animations.transitionEnd);
        clearTimeout(element.koAnimateSlideVisible);
        clearTimeout(element.koAnimateSlideVisible2);

        element.koAnimateSlideVisible = setTimeout(function ()
        {
            if (value)
            {
                $(element).show();

                element.koAnimateSlideVisible2 = setTimeout(function ()
                {
                    koAnimate.animations.slide(element, '0px', '0px', duration, easing);
                }, delay);
            }
            else
            {
                element.koAnimateSlideVisible2 = setTimeout(function ()
                {
                    koAnimate.animations.slide(element, koAnimate.helpers.getDirectionX(directionOut), koAnimate.helpers.getDirectionY(directionOut), durationOut, easingOut);

                    $(element).on(koAnimate.animations.transitionEnd, function ()
                    {
                        $(element).hide();
                    });

                }, delayOut);

            }

        }, 50);

    }
};

//#endregion "Visibility

//#region "Animate.CSS"

ko.bindingHandlers.cssAnimate =
{
    init: function (element, valueAccessor, allBindings)
    {
        var event = allBindings['has']('event') ? allBindings.get('event') : koAnimate.defaults.cssAnimate.event;
        var callback = allBindings['has']('callback') ? allBindings.get('callback') : koAnimate.defaults.cssAnimate.callback;
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.cssAnimate.duration;
        var animation = valueAccessor();        

        $(element).on(event, function()
        {
            koAnimate.animations.setDuration(element, duration);


            $(element).addClass("animated " + animation);

            $(element).one(koAnimate.animations.animationEnd, function ()
            {
                $(element).removeClass("animated " + animation);
                koAnimate.animations.removeDuration(element);
                
                if (callback)
                {
                    callback();
                }
                
            });

        });

    }
};

ko.bindingHandlers.cssAnimateVisible =
{
    init: function (element, valueAccessor, allBindings)
    {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value)
        {
            $(element).show();
        }
        else
        {
            $(element).hide();
        }
    },

    update: function (element, valueAccessor, allBindings)
    {
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.cssAnimateVisible.duration;
        var durationOut = allBindings['has']('durationOut') ? allBindings.get('durationOut') : koAnimate.defaults.cssAnimateVisible.durationOut;
        var animation = allBindings['has']('animation') ? allBindings.get('animation') : koAnimate.defaults.cssAnimateVisible.animation;
        var animationOut = allBindings['has']('animationOut') ? allBindings.get('animationOut') : koAnimate.defaults.cssAnimateVisible.animationOut;
        var delay = allBindings['has']('delay') ? allBindings.get('delay') : koAnimate.defaults.cssAnimateVisible.delay;
        var delayOut = allBindings['has']('delayOut') ? allBindings.get('delayOut') : koAnimate.defaults.cssAnimateVisible.delayOut;

        var value = ko.utils.unwrapObservable(valueAccessor());
        var isCurrentlyVisible = !(element.style.display == "none");


        $(element).off(koAnimate.animations.animationEnd);
        $(element).removeClass(animation);
        $(element).removeClass(animationOut);

        setTimeout(function()
        {
            if (value)
            {
                $(element).hide(); 

                koAnimate.animations.setDuration(element, duration);
                
                setTimeout(function ()
                {
                    $(element).show();
                    $(element).addClass("animated " + animation);

                    $(element).on(koAnimate.animations.animationEnd, function ()
                    {
                        $(element).removeClass("animated " + animation);
                        koAnimate.animations.removeDuration(element);
                    });
                }, delay);

            }
            else if ($(element).is(':visible') && value === false)
            {

                koAnimate.animations.setDuration(element, durationOut);
                setTimeout(function ()
                {
                    $(element).addClass("animated " + animationOut);

                    $(element).on(koAnimate.animations.animationEnd, function ()
                    {
                        $(element).removeClass("animated " + animationOut);
                        koAnimate.animations.removeDuration(element);
                        $(element).hide();
                    });
                }, delayOut);
            }


        }, 1);
    }
};

ko.bindingHandlers.cssAnimateReveal =
{
    init: function (element, valueAccessor, allBindings)
    {
        var callback = allBindings['has']('callback') ? allBindings.get('callback') : koAnimate.defaults.cssAnimateReveal.callback;
        var duration = allBindings['has']('duration') ? allBindings.get('duration') : koAnimate.defaults.cssAnimateReveal.duration;
        var offset = allBindings['has']('offset') ? allBindings.get('offset') : koAnimate.defaults.cssAnimateReveal.offset;
        var delay = allBindings['has']('delay') ? allBindings.get('delay') : koAnimate.defaults.cssAnimateReveal.delay;
        var animation = valueAccessor() || koAnimate.defaults.cssAnimateReveal.animation;

        element.style.visibility = "hidden";

        element.koAnimateScrollTimeout = null;

       element.koAnimateScrollHandler = $(window).scroll(function ()
       {
           if (element.koAnimateScrollTimeout) {

               clearTimeout(element.koAnimateScrollTimeout);
               element.koAnimateScrollTimeout = null;
           }

           element.koAnimateScrollTimeout = setTimeout(koAnimate.animations.cssAnimateReveal(element, animation, offset, delay, duration, callback), 60);

        });
    }
};

//#endregion "Animate.CSS


/**
 * @name InfoBox
 * @version 1.1.13 [March 19, 2014]
 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
 * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
 *  <p>
 *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
 *  additional properties for advanced styling. An InfoBox can also be used as a map label.
 *  <p>
 *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global google */

/**
 * @name InfoBoxOptions
 * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
 * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
 * @property {boolean} [disableAutoPan=false] Disable auto-pan on <tt>open</tt>.
 * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
 * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
 *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
 *  to the map pixel corresponding to <tt>position</tt>.
 * @property {LatLng} position The geographic location at which to display the InfoBox.
 * @property {number} zIndex The CSS z-index style value for the InfoBox.
 *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
 * @property {string} [boxClass="infoBox"] The name of the CSS class defining the styles for the InfoBox container.
 * @property {Object} [boxStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the InfoBox. Style values defined here override those that may
 *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
 *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the InfoBox before the new style values are applied.
 * @property {string} closeBoxMargin The CSS margin style value for the close box.
 *  The default is "2px" (a 2-pixel margin on all sides).
 * @property {string} closeBoxURL The URL of the image representing the close box.
 *  Note: The default is the URL for Google's standard close box.
 *  Set this property to "" if no close box is required.
 * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
 *  map edge after an auto-pan.
 * @property {boolean} [isHidden=false] Hide the InfoBox on <tt>open</tt>.
 *  [Deprecated in favor of the <tt>visible</tt> property.]
 * @property {boolean} [visible=true] Show the InfoBox on <tt>open</tt>.
 * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
 *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
 * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
 *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
 *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
 * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
 *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
 *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
 *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
 */

/**
 * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
 *  Call <tt>InfoBox.open</tt> to add the box to the map.
 * @constructor
 * @param {InfoBoxOptions} [opt_opts]
 */
function InfoBox(opt_opts) {

    opt_opts = opt_opts || {};

    google.maps.OverlayView.apply(this, arguments);

    // Standard options (in common with google.maps.InfoWindow):
    //
    this.content_ = opt_opts.content || "";
    this.disableAutoPan_ = opt_opts.disableAutoPan || false;
    this.maxWidth_ = opt_opts.maxWidth || 0;
    this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
    this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
    this.zIndex_ = opt_opts.zIndex || null;

    // Additional options (unique to InfoBox):
    //
    this.boxClass_ = opt_opts.boxClass || "infoBox";
    this.boxStyle_ = opt_opts.boxStyle || {};
    this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
    this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
    if (opt_opts.closeBoxURL === "") {
        this.closeBoxURL_ = "";
    }
    this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);

    if (typeof opt_opts.visible === "undefined") {
        if (typeof opt_opts.isHidden === "undefined") {
            opt_opts.visible = true;
        } else {
            opt_opts.visible = !opt_opts.isHidden;
        }
    }
    this.isHidden_ = !opt_opts.visible;

    this.alignBottom_ = opt_opts.alignBottom || false;
    this.pane_ = opt_opts.pane || "floatPane";
    this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;

    this.div_ = null;
    this.closeListener_ = null;
    this.moveListener_ = null;
    this.contextListener_ = null;
    this.eventListeners_ = null;
    this.fixedWidthSet_ = null;
}

/* InfoBox extends OverlayView in the Google Maps API v3.
 */
InfoBox.prototype = new google.maps.OverlayView();

/**
 * Creates the DIV representing the InfoBox.
 * @private
 */
InfoBox.prototype.createInfoBoxDiv_ = function () {

    var i;
    var events;
    var bw;
    var me = this;

    // This handler prevents an event in the InfoBox from being passed on to the map.
    //
    var cancelHandler = function (e) {
        e.cancelBubble = true;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
    };

    // This handler ignores the current event in the InfoBox and conditionally prevents
    // the event from being passed on to the map. It is used for the contextmenu event.
    //
    var ignoreHandler = function (e) {

        e.returnValue = false;

        if (e.preventDefault) {

            e.preventDefault();
        }

        if (!me.enableEventPropagation_) {

            cancelHandler(e);
        }
    };

    if (!this.div_) {

        this.div_ = document.createElement("div");

        this.setBoxStyle_();

        if (typeof this.content_.nodeType === "undefined") {
            this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
        } else {
            this.div_.innerHTML = this.getCloseBoxImg_();
            this.div_.appendChild(this.content_);
        }

        // Add the InfoBox DIV to the DOM
        this.getPanes()[this.pane_].appendChild(this.div_);

        this.addClickHandler_();

        if (this.div_.style.width) {

            this.fixedWidthSet_ = true;

        } else {

            if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

                this.div_.style.width = this.maxWidth_;
                this.div_.style.overflow = "auto";
                this.fixedWidthSet_ = true;

            } else { // The following code is needed to overcome problems with MSIE

                bw = this.getBoxWidths_();

                this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
                this.fixedWidthSet_ = false;
            }
        }

        this.panBox_(this.disableAutoPan_);

        if (!this.enableEventPropagation_) {

            this.eventListeners_ = [];

            // Cancel event propagation.
            //
            // Note: mousemove not included (to resolve Issue 152)
            events = ["mousedown", "mouseover", "mouseout", "mouseup",
                "click", "dblclick", "touchstart", "touchend", "touchmove"];

            for (i = 0; i < events.length; i++) {

                this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
            }

            // Workaround for Google bug that causes the cursor to change to a pointer
            // when the mouse moves over a marker underneath InfoBox.
            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
                this.style.cursor = "default";
            }));
        }

        this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);

        /**
         * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
         * @name InfoBox#domready
         * @event
         */
        google.maps.event.trigger(this, "domready");
    }
};

/**
 * Returns the HTML <IMG> tag for the close box.
 * @private
 */
InfoBox.prototype.getCloseBoxImg_ = function () {

    var img = "";

    if (this.closeBoxURL_ !== "") {

        img  = "<img";
        img += " src='" + this.closeBoxURL_ + "'";
        img += " align=right"; // Do this because Opera chokes on style='float: right;'
        img += " style='";
        img += " position: relative;"; // Required by MSIE
        img += " cursor: pointer;";
        img += " margin: " + this.closeBoxMargin_ + ";";
        img += "'>";
    }

    return img;
};

/**
 * Adds the click handler to the InfoBox close box.
 * @private
 */
InfoBox.prototype.addClickHandler_ = function () {

    var closeBox;

    if (this.closeBoxURL_ !== "") {

        closeBox = this.div_.firstChild;
        this.closeListener_ = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler_());

    } else {

        this.closeListener_ = null;
    }
};

/**
 * Returns the function to call when the user clicks the close box of an InfoBox.
 * @private
 */
InfoBox.prototype.getCloseClickHandler_ = function () {

    var me = this;

    return function (e) {

        // 1.0.3 fix: Always prevent propagation of a close box click to the map:
        e.cancelBubble = true;

        if (e.stopPropagation) {

            e.stopPropagation();
        }

        /**
         * This event is fired when the InfoBox's close box is clicked.
         * @name InfoBox#closeclick
         * @event
         */
        google.maps.event.trigger(me, "closeclick");

        me.close();
    };
};

/**
 * Pans the map so that the InfoBox appears entirely within the map's visible area.
 * @private
 */
InfoBox.prototype.panBox_ = function (disablePan) {

    var map;
    var bounds;
    var xOffset = 0, yOffset = 0;

    if (!disablePan) {

        map = this.getMap();

        if (map instanceof google.maps.Map) { // Only pan if attached to map, not panorama

            if (!map.getBounds().contains(this.position_)) {
                // Marker not in visible area of map, so set center
                // of map to the marker position first.
                map.setCenter(this.position_);
            }

            bounds = map.getBounds();

            var mapDiv = map.getDiv();
            var mapWidth = mapDiv.offsetWidth;
            var mapHeight = mapDiv.offsetHeight;
            var iwOffsetX = this.pixelOffset_.width;
            var iwOffsetY = this.pixelOffset_.height;
            var iwWidth = this.div_.offsetWidth;
            var iwHeight = this.div_.offsetHeight;
            var padX = this.infoBoxClearance_.width;
            var padY = this.infoBoxClearance_.height;
            var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);

            if (pixPosition.x < (-iwOffsetX + padX)) {
                xOffset = pixPosition.x + iwOffsetX - padX;
            } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
                xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
            }
            if (this.alignBottom_) {
                if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
                    yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
                    yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                }
            } else {
                if (pixPosition.y < (-iwOffsetY + padY)) {
                    yOffset = pixPosition.y + iwOffsetY - padY;
                } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
                    yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                }
            }

            if (!(xOffset === 0 && yOffset === 0)) {

                // Move the map to the shifted center.
                //
                var c = map.getCenter();
                map.panBy(xOffset, yOffset);
            }
        }
    }
};

/**
 * Sets the style of the InfoBox by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
InfoBox.prototype.setBoxStyle_ = function () {

    var i, boxStyle;

    if (this.div_) {

        // Apply style values from the style sheet defined in the boxClass parameter:
        this.div_.className = this.boxClass_;

        // Clear existing inline style values:
        this.div_.style.cssText = "";

        // Apply style values defined in the boxStyle parameter:
        boxStyle = this.boxStyle_;
        for (i in boxStyle) {

            if (boxStyle.hasOwnProperty(i)) {

                this.div_.style[i] = boxStyle[i];
            }
        }

        // Fix for iOS disappearing InfoBox problem.
        // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
        this.div_.style.WebkitTransform = "translateZ(0)";

        // Fix up opacity style for benefit of MSIE:
        //
        if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {
            // See http://www.quirksmode.org/css/opacity.html
            this.div_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (this.div_.style.opacity * 100) + ")\"";
            this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
        }

        // Apply required styles:
        //
        this.div_.style.position = "absolute";
        this.div_.style.visibility = 'hidden';
        if (this.zIndex_ !== null) {

            this.div_.style.zIndex = this.zIndex_;
        }
    }
};

/**
 * Get the widths of the borders of the InfoBox.
 * @private
 * @return {Object} widths object (top, bottom left, right)
 */
InfoBox.prototype.getBoxWidths_ = function () {

    var computedStyle;
    var bw = {top: 0, bottom: 0, left: 0, right: 0};
    var box = this.div_;

    if (document.defaultView && document.defaultView.getComputedStyle) {

        computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

        if (computedStyle) {

            // The computed styles are always in pixel units (good!)
            bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
            bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
            bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
            bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
        }

    } else if (document.documentElement.currentStyle) { // MSIE

        if (box.currentStyle) {

            // The current styles may not be in pixel units, but assume they are (bad!)
            bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
            bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
            bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
            bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
        }
    }

    return bw;
};

/**
 * Invoked when <tt>close</tt> is called. Do not call it directly.
 */
InfoBox.prototype.onRemove = function () {

    if (this.div_) {

        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};

/**
 * Draws the InfoBox based on the current map projection and zoom level.
 */
InfoBox.prototype.draw = function () {

    this.createInfoBoxDiv_();

    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

    this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";

    if (this.alignBottom_) {
        this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
    } else {
        this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
    }

    if (this.isHidden_) {

        this.div_.style.visibility = "hidden";

    } else {

        this.div_.style.visibility = "visible";
    }
};

/**
 * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
 *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
 *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
 *  is <tt>open</tt>ed.
 * @param {InfoBoxOptions} opt_opts
 */
InfoBox.prototype.setOptions = function (opt_opts) {
    if (typeof opt_opts.boxClass !== "undefined") { // Must be first

        this.boxClass_ = opt_opts.boxClass;
        this.setBoxStyle_();
    }
    if (typeof opt_opts.boxStyle !== "undefined") { // Must be second

        this.boxStyle_ = opt_opts.boxStyle;
        this.setBoxStyle_();
    }
    if (typeof opt_opts.content !== "undefined") {

        this.setContent(opt_opts.content);
    }
    if (typeof opt_opts.disableAutoPan !== "undefined") {

        this.disableAutoPan_ = opt_opts.disableAutoPan;
    }
    if (typeof opt_opts.maxWidth !== "undefined") {

        this.maxWidth_ = opt_opts.maxWidth;
    }
    if (typeof opt_opts.pixelOffset !== "undefined") {

        this.pixelOffset_ = opt_opts.pixelOffset;
    }
    if (typeof opt_opts.alignBottom !== "undefined") {

        this.alignBottom_ = opt_opts.alignBottom;
    }
    if (typeof opt_opts.position !== "undefined") {

        this.setPosition(opt_opts.position);
    }
    if (typeof opt_opts.zIndex !== "undefined") {

        this.setZIndex(opt_opts.zIndex);
    }
    if (typeof opt_opts.closeBoxMargin !== "undefined") {

        this.closeBoxMargin_ = opt_opts.closeBoxMargin;
    }
    if (typeof opt_opts.closeBoxURL !== "undefined") {

        this.closeBoxURL_ = opt_opts.closeBoxURL;
    }
    if (typeof opt_opts.infoBoxClearance !== "undefined") {

        this.infoBoxClearance_ = opt_opts.infoBoxClearance;
    }
    if (typeof opt_opts.isHidden !== "undefined") {

        this.isHidden_ = opt_opts.isHidden;
    }
    if (typeof opt_opts.visible !== "undefined") {

        this.isHidden_ = !opt_opts.visible;
    }
    if (typeof opt_opts.enableEventPropagation !== "undefined") {

        this.enableEventPropagation_ = opt_opts.enableEventPropagation;
    }

    if (this.div_) {

        this.draw();
    }
};

/**
 * Sets the content of the InfoBox.
 *  The content can be plain text or an HTML DOM node.
 * @param {string|Node} content
 */
InfoBox.prototype.setContent = function (content) {
    this.content_ = content;

    if (this.div_) {

        if (this.closeListener_) {

            google.maps.event.removeListener(this.closeListener_);
            this.closeListener_ = null;
        }

        // Odd code required to make things work with MSIE.
        //
        if (!this.fixedWidthSet_) {

            this.div_.style.width = "";
        }

        if (typeof content.nodeType === "undefined") {
            this.div_.innerHTML = this.getCloseBoxImg_() + content;
        } else {
            this.div_.innerHTML = this.getCloseBoxImg_();
            this.div_.appendChild(content);
        }

        // Perverse code required to make things work with MSIE.
        // (Ensures the close box does, in fact, float to the right.)
        //
        if (!this.fixedWidthSet_) {
            this.div_.style.width = this.div_.offsetWidth + "px";
            if (typeof content.nodeType === "undefined") {
                this.div_.innerHTML = this.getCloseBoxImg_() + content;
            } else {
                this.div_.innerHTML = this.getCloseBoxImg_();
                this.div_.appendChild(content);
            }
        }

        this.addClickHandler_();
    }

    /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */
    google.maps.event.trigger(this, "content_changed");
};

/**
 * Sets the geographic location of the InfoBox.
 * @param {LatLng} latlng
 */
InfoBox.prototype.setPosition = function (latlng) {

    this.position_ = latlng;

    if (this.div_) {

        this.draw();
    }

    /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */
    google.maps.event.trigger(this, "position_changed");
};

/**
 * Sets the zIndex style for the InfoBox.
 * @param {number} index
 */
InfoBox.prototype.setZIndex = function (index) {

    this.zIndex_ = index;

    if (this.div_) {

        this.div_.style.zIndex = index;
    }

    /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */
    google.maps.event.trigger(this, "zindex_changed");
};

/**
 * Sets the visibility of the InfoBox.
 * @param {boolean} isVisible
 */
InfoBox.prototype.setVisible = function (isVisible) {

    this.isHidden_ = !isVisible;
    if (this.div_) {
        this.div_.style.visibility = (this.isHidden_ ? "hidden" : "visible");
    }
};

/**
 * Returns the content of the InfoBox.
 * @returns {string}
 */
InfoBox.prototype.getContent = function () {

    return this.content_;
};

/**
 * Returns the geographic location of the InfoBox.
 * @returns {LatLng}
 */
InfoBox.prototype.getPosition = function () {

    return this.position_;
};

/**
 * Returns the zIndex for the InfoBox.
 * @returns {number}
 */
InfoBox.prototype.getZIndex = function () {

    return this.zIndex_;
};

/**
 * Returns a flag indicating whether the InfoBox is visible.
 * @returns {boolean}
 */
InfoBox.prototype.getVisible = function () {

    var isVisible;

    if ((typeof this.getMap() === "undefined") || (this.getMap() === null)) {
        isVisible = false;
    } else {
        isVisible = !this.isHidden_;
    }
    return isVisible;
};

/**
 * Shows the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
 */
InfoBox.prototype.show = function () {

    this.isHidden_ = false;
    if (this.div_) {
        this.div_.style.visibility = "visible";
    }
};

/**
 * Hides the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
 */
InfoBox.prototype.hide = function () {

    this.isHidden_ = true;
    if (this.div_) {
        this.div_.style.visibility = "hidden";
    }
};

/**
 * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
 *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
 *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
 *  anchor is dragged to a new location, the InfoBox moves as well.
 * @param {Map|StreetViewPanorama} map
 * @param {MVCObject} [anchor]
 */
InfoBox.prototype.open = function (map, anchor) {

    var me = this;

    if (anchor) {

        this.position_ = anchor.getPosition();
        this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
            me.setPosition(this.getPosition());
        });
    }

    this.setMap(map);

    if (this.div_) {

        this.panBox_();
    }
};

/**
 * Removes the InfoBox from the map.
 */
InfoBox.prototype.close = function () {

    var i;

    if (this.closeListener_) {

        google.maps.event.removeListener(this.closeListener_);
        this.closeListener_ = null;
    }

    if (this.eventListeners_) {

        for (i = 0; i < this.eventListeners_.length; i++) {

            google.maps.event.removeListener(this.eventListeners_[i]);
        }
        this.eventListeners_ = null;
    }

    if (this.moveListener_) {

        google.maps.event.removeListener(this.moveListener_);
        this.moveListener_ = null;
    }

    if (this.contextListener_) {

        google.maps.event.removeListener(this.contextListener_);
        this.contextListener_ = null;
    }

    this.setMap(null);
};
/*
== malihu jquery custom scrollbar plugin == 
Version: 3.0.9 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright 2010 Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/

(function(factory){
	if(typeof module!=="undefined" && module.exports){
		module.exports=factory;
	}else{
		factory(jQuery,window,document);
	}
}(function($){
(function(init){
	var _rjs=typeof define==="function" && define.amd, /* RequireJS */
		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */
		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
		_url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
	if(!_rjs){
		if(_njs){
			require("jquery-mousewheel")($);
		}else{
			/* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
			(works when mCustomScrollbar fn is called on window load) */
			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
		}
	}
	init();
}(function(){
	
	/* 
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
	----------------------------------------
	*/
	
	var pluginNS="mCustomScrollbar",
		pluginPfx="mCS",
		defaultSelector=".mCustomScrollbar",
	
	
		
	
	
	/* 
	----------------------------------------
	DEFAULT OPTIONS 
	----------------------------------------
	*/
	
		defaults={
			/*
			set element/content width/height programmatically 
			values: boolean, pixels, percentage 
				option						default
				-------------------------------------
				setWidth					false
				setHeight					false
			*/
			/*
			set the initial css top property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setTop:0,
			/*
			set the initial css left property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setLeft:0,
			/* 
			scrollbar axis (vertical and/or horizontal scrollbars) 
			values (string): "y", "x", "yx"
			*/
			axis:"y",
			/*
			position of scrollbar relative to content  
			values (string): "inside", "outside" ("outside" requires elements with position:relative)
			*/
			scrollbarPosition:"inside",
			/*
			scrolling inertia
			values: integer (milliseconds)
			*/
			scrollInertia:950,
			/* 
			auto-adjust scrollbar dragger length
			values: boolean
			*/
			autoDraggerLength:true,
			/*
			auto-hide scrollbar when idle 
			values: boolean
				option						default
				-------------------------------------
				autoHideScrollbar			false
			*/
			/*
			auto-expands scrollbar on mouse-over and dragging
			values: boolean
				option						default
				-------------------------------------
				autoExpandScrollbar			false
			*/
			/*
			always show scrollbar, even when there's nothing to scroll 
			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
			*/
			alwaysShowScrollbar:0,
			/*
			scrolling always snaps to a multiple of this number in pixels
			values: integer
				option						default
				-------------------------------------
				snapAmount					null
			*/
			/*
			when snapping, snap with this number in pixels as an offset 
			values: integer
			*/
			snapOffset:0,
			/* 
			mouse-wheel scrolling
			*/
			mouseWheel:{
				/* 
				enable mouse-wheel scrolling
				values: boolean
				*/
				enable:true,
				/* 
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto",
				/* 
				mouse-wheel scrolling axis 
				the default scrolling direction when both vertical and horizontal scrollbars are present 
				values (string): "y", "x" 
				*/
				axis:"y",
				/* 
				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
				values: boolean
					option						default
					-------------------------------------
					preventDefault				null
				*/
				/*
				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
				values: "auto", integer 
				"auto" uses the default OS/browser value 
				*/
				deltaFactor:"auto",
				/*
				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
				values: boolean
					option						default
					-------------------------------------
					normalizeDelta				null
				*/
				/*
				invert mouse-wheel scrolling direction 
				values: boolean
					option						default
					-------------------------------------
					invert						null
				*/
				/*
				the tags that disable mouse-wheel when cursor is over them
				*/
				disableOver:["select","option","keygen","datalist","textarea"]
			},
			/* 
			scrollbar buttons
			*/
			scrollButtons:{ 
				/*
				enable scrollbar buttons
				values: boolean
					option						default
					-------------------------------------
					enable						null
				*/
				/*
				scrollbar buttons scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
				/*
				tabindex of the scrollbar buttons
				values: false, integer
					option						default
					-------------------------------------
					tabindex					null
				*/
			},
			/* 
			keyboard scrolling
			*/
			keyboard:{ 
				/*
				enable scrolling via keyboard
				values: boolean
				*/
				enable:true,
				/*
				keyboard scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
			},
			/*
			enable content touch-swipe scrolling 
			values: boolean, integer, string (number)
			integer values define the axis-specific minimum amount required for scrolling momentum
			*/
			contentTouchScroll:25,
			/*
			advanced option parameters
			*/
			advanced:{
				/*
				auto-expand content horizontally (for "x" or "yx" axis) 
				values: boolean
					option						default
					-------------------------------------
					autoExpandHorizontalScroll	null
				*/
				/*
				auto-scroll to elements with focus
				*/
				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				/*
				auto-update scrollbars on content, element or viewport resize 
				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
				values: boolean
				*/
				updateOnContentResize:true,
				/*
				auto-update scrollbars each time each image inside the element is fully loaded 
				values: boolean
				*/
				updateOnImageLoad:true,
				/*
				auto-update scrollbars based on the amount and size changes of specific selectors 
				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
				a value of true (boolean) will auto-update scrollbars each time any element is changed
					option						default
					-------------------------------------
					updateOnSelectorChange		null
				*/
				/*
				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					releaseDraggableSelectors	null
				*/
				/*
				auto-update timeout 
				values: integer (milliseconds)
				*/
				autoUpdateTimeout:60
			},
			/* 
			scrollbar theme 
			values: string (see CSS/plugin URI for a list of ready-to-use themes)
			*/
			theme:"light",
			/*
			user defined callback functions
			*/
			callbacks:{
				/*
				Available callbacks: 
					callback					default
					-------------------------------------
					onInit						null
					onScrollStart				null
					onScroll					null
					onTotalScroll				null
					onTotalScrollBack			null
					whileScrolling				null
					onOverflowY					null
					onOverflowX					null
					onOverflowYNone				null
					onOverflowXNone				null
					onImageLoad					null
					onSelectorChange			null
					onUpdate					null
				*/
				onTotalScrollOffset:0,
				onTotalScrollBackOffset:0,
				alwaysTriggerOffsets:true
			}
			/*
			add scrollbar(s) on all elements matching the current selector, now and in the future 
			values: boolean, string 
			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
			liveSelector values: string (selector)
				option						default
				-------------------------------------
				live						false
				liveSelector				null
			*/
		},
	
	
	
	
	
	/* 
	----------------------------------------
	VARS, CONSTANTS 
	----------------------------------------
	*/
	
		totalInstances=0, /* plugin instances amount */
		liveTimers={}, /* live option timers */
		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
		/* general plugin classes */
		classes=[
			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
		],
		
	
	
	
	
	/* 
	----------------------------------------
	METHODS 
	----------------------------------------
	*/
	
		methods={
			
			/* 
			plugin initialization method 
			creates the scrollbar(s), plugin data object and options
			----------------------------------------
			*/
			
			init:function(options){
				
				var options=$.extend(true,{},defaults,options),
					selector=_selector.call(this); /* validate selector */
				
				/* 
				if live option is enabled, monitor for elements matching the current selector and 
				apply scrollbar(s) when found (now and in the future) 
				*/
				if(options.live){
					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */
					if(options.live==="off"){
						/* 
						disable live if requested 
						usage: $(selector).mCustomScrollbar({live:"off"}); 
						*/
						removeLiveTimers(liveSelector);
						return;
					}
					liveTimers[liveSelector]=setTimeout(function(){
						/* call mCustomScrollbar fn on live selector(s) every half-second */
						$liveSelector.mCustomScrollbar(options);
						if(options.live==="once" && $liveSelector.length){
							/* disable live after first invocation */
							removeLiveTimers(liveSelector);
						}
					},500);
				}else{
					removeLiveTimers(liveSelector);
				}
				
				/* options backward compatibility (for versions < 3.0.0) and normalization */
				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
				}
				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType); 
				
				_theme(options); /* theme-specific options */
				
				/* plugin constructor */
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */
					
						/* store options and create objects in jquery data */
						$this.data(pluginPfx,{
							idx:++totalInstances, /* instance index */
							opt:options, /* options */
							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
							overflowed:null, /* overflowed axis */
							contentReset:{y:null,x:null}, /* object to check when content resets */
							bindEvents:false, /* object to check if events are bound */
							tweenRunning:false, /* object to check if tween is running */
							sequential:{}, /* sequential scrolling object */
							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
							cbOffsets:null, /* object to check whether callback offsets always trigger */
							/* 
							object to check how scrolling events where last triggered 
							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
							usage: object.data("mCS").trigger
							*/
							trigger:null
						});
						
						var d=$this.data(pluginPfx),o=d.opt,
							/* HTML data attributes */
							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");
						 
						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
							o.theme=htmlDataTheme;
							_theme(o); /* theme-specific options */
						}
						
						_pluginMarkup.call(this); /* add plugin markup */
						
						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */
						
						methods.update.call(null,$this); /* call the update method */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin update method 
			updates content and scrollbar(s) values, events and status 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("update");
			*/
			
			update:function(el,cb){
				
				var selector=el || _selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx),o=d.opt,
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
						
						if(!mCSB_container.length){return;}
						
						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */
						
						/* if element was disabled or destroyed, remove class(es) */
						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}
						
						_maxHeight.call(this); /* detect/set css max-height value */
						
						_expandContentHorizontally.call(this); /* expand content horizontally */
						
						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
							mCSB_container.css("width",_contentWidth(mCSB_container.children()));
						}
						
						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */
						
						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */
						
						/* auto-adjust scrollbar dragger length analogous to content */
						if(o.autoDraggerLength){_setDraggerLength.call(this);}
						
						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */
						
						_bindEvents.call(this); /* bind scrollbar events */
						
						/* reset scrolling position and/or events */
						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
						if(o.axis!=="x"){ /* y/yx axis */
							if(!d.overflowed[0]){ /* y scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="y"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[1]){
									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* y scrolling is required */
								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								d.contentReset.y=null;
							}
						}
						if(o.axis!=="y"){ /* x/yx axis */
							if(!d.overflowed[1]){ /* x scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="x"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[0]){
									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* x scrolling is required */
								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								d.contentReset.x=null;
							}
						}
						
						/* callbacks: onImageLoad, onSelectorChange, onUpdate */
						if(cb && d){
							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
								o.callbacks.onImageLoad.call(this);
							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
								o.callbacks.onSelectorChange.call(this);
							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
								o.callbacks.onUpdate.call(this);
							}
						}
						
						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin scrollTo method 
			triggers a scrolling event to a specific value
			----------------------------------------
			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
			*/
		
			scrollTo:function(val,options){
				
				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
				if(typeof val=="undefined" || val==null){return;}
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							/* method default options */
							methodDefaults={
								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
								scrollEasing:"mcsEaseInOut", /* animation easing */
								moveDragger:false, /* move dragger instead of content */
								timeout:60, /* scroll-to delay */
								callbacks:true, /* enable/disable callbacks */
								onStart:true,
								onUpdate:true,
								onComplete:true
							},
							methodOptions=$.extend(true,{},methodDefaults,options),
							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;
						
						/* translate yx values to actual scroll-to positions */
						to[0]=_to.call(this,to[0],"y");
						to[1]=_to.call(this,to[1],"x");
						
						/* 
						check if scroll-to value moves the dragger instead of content. 
						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
						*/
						if(methodOptions.moveDragger){
							to[0]*=d.scrollRatio.y;
							to[1]*=d.scrollRatio.x;
						}
						
						methodOptions.dur=dur;
						
						setTimeout(function(){ 
							/* do the scrolling */
							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
								methodOptions.dir="y";
								methodOptions.overwrite="all";
								_scrollTo($this,to[0].toString(),methodOptions);
							}
							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
								methodOptions.dir="x";
								methodOptions.overwrite="none";
								_scrollTo($this,to[1].toString(),methodOptions);
							}
						},methodOptions.timeout);
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin stop method 
			stops scrolling animation
			----------------------------------------
			usage: $(selector).mCustomScrollbar("stop");
			*/
			stop:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
										
						_stop($this);
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin disable method 
			temporarily disables the scrollbar(s) 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("disable",reset); 
			reset (boolean): resets content position to 0 
			*/
			disable:function(r){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx);
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						if(r){_resetContentPosition.call(this);} /* reset content position */
						
						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */
						
						$this.addClass(classes[3]); /* add disable class */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin destroy method 
			completely removes the scrollbar(s) and returns the element to its original state
			----------------------------------------
			usage: $(selector).mCustomScrollbar("destroy"); 
			*/
			destroy:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");
					
						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						_resetContentPosition.call(this); /* reset content position */
						
						$this.removeData(pluginPfx); /* remove plugin data object */
						
						_delete(this,"mcs"); /* delete callbacks object */
						
						/* remove plugin markup */
						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
						/* remove plugin classes from the element and add destroy class */
						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);
					
					}
					
				});
				
			}
			/* ---------------------------------------- */
			
		},
	
	
	
	
		
	/* 
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/
	
		/* validates selector (if selector is invalid or undefined uses the default one) */
		_selector=function(){
			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
		},
		/* -------------------- */
		
		
		/* changes options according to theme */
		_theme=function(obj){
			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
				disabledScrollButtonsThemes=["minimal","minimal-dark"],
				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
		},
		/* -------------------- */
		
		
		/* live option timers removal */
		removeLiveTimers=function(selector){
			if(liveTimers[selector]){
				clearTimeout(liveTimers[selector]);
				_delete(liveTimers,selector);
			}
		},
		/* -------------------- */
		
		
		/* normalizes axis option to valid values: "y", "x", "yx" */
		_findAxis=function(val){
			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
		},
		/* -------------------- */
		
		
		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
		_findScrollButtonsType=function(val){
			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
		},
		/* -------------------- */
		
		
		/* generates plugin markup */
		_pluginMarkup=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
				scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
				contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir="+d.langDir+" /></div>");
			var mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
				mCSB_container.css("width",_contentWidth(mCSB_container.children()));
			}
			if(o.scrollbarPosition==="outside"){
				if($this.css("position")==="static"){ /* requires elements with non-static position */
					$this.css("position","relative");
				}
				$this.css("overflow","visible");
				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
			}else{
				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
				mCSB_container.wrap(contentWrapper);
			}
			_scrollButtons.call(this); /* add scrollbar buttons */
			/* minimum dragger length */
			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
		},
		/* -------------------- */
		
		
		/* calculates content width */
		_contentWidth=function(el){
			return Math.max.apply(Math,el.map(function(){return $(this).outerWidth(true);}).get());
		},
		/* -------------------- */
		
		
		/* expands content horizontally */
		_expandContentHorizontally=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
				/* 
				wrap content with an infinite width div and set its position to absolute and width to auto. 
				Setting width to auto before calculating the actual width is important! 
				We must let the browser set the width as browser zoom values are impossible to calculate.
				*/
				mCSB_container.css({"position":"absolute","width":"auto"})
					.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
					.css({ /* set actual width, original position and un-wrap */
						/* 
						get the exact width (with decimals) and then round-up. 
						Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
						*/
						"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
						"position":"relative"
					}).unwrap();
			}
		},
		/* -------------------- */
		
		
		/* adds scrollbar buttons */
		_scrollButtons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
				btnHTML=[
					"<a href='#' class='"+classes[13]+"' oncontextmenu='return false;' "+tabindex+" />",
					"<a href='#' class='"+classes[14]+"' oncontextmenu='return false;' "+tabindex+" />",
					"<a href='#' class='"+classes[15]+"' oncontextmenu='return false;' "+tabindex+" />",
					"<a href='#' class='"+classes[16]+"' oncontextmenu='return false;' "+tabindex+" />"
				],
				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
			if(o.scrollButtons.enable){
				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
			}
		},
		/* -------------------- */
		
		
		/* detects/sets css max-height value */
		_maxHeight=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mh=$this.css("max-height") || "none",pct=mh.indexOf("%")!==-1,
				bs=$this.css("box-sizing");
			if(mh!=="none"){
				var val=pct ? $this.parent().height()*parseInt(mh)/100 : parseInt(mh);
				/* if element's css box-sizing is "border-box", subtract any paddings and/or borders from max-height value */
				if(bs==="border-box"){val-=(($this.innerHeight()-$this.height())+($this.outerHeight()-$this.innerHeight()));}
				mCustomScrollBox.css("max-height",Math.round(val));
			}
		},
		/* -------------------- */
		
		
		/* auto-adjusts scrollbar dragger length */
		_setDraggerLength=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
				l=[
					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
				],
				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
			mCSB_dragger[0].css({
				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
			mCSB_dragger[1].css({
				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
			});
		},
		/* -------------------- */
		
		
		/* calculates scrollbar to content ratio */
		_scrollRatio=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
				ratio=[
					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
				];
			d.scrollRatio={y:ratio[0],x:ratio[1]};
		},
		/* -------------------- */
		
		
		/* toggles scrolling classes */
		_onDragClasses=function(el,action,xpnd){
			var expandClass=xpnd ? classes[0]+"_expanded" : "",
				scrollbar=el.closest(".mCSB_scrollTools");
			if(action==="active"){
				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]); 
				el[0]._draggable=el[0]._draggable ? 0 : 1;
			}else{
				if(!el[0]._draggable){
					if(action==="hide"){
						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
					}else{
						el.addClass(classes[0]); scrollbar.addClass(classes[1]);
					}
				}
			}
		},
		/* -------------------- */
		
		
		/* checks if content overflows its container to determine if scrolling is required */
		_overflowed=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false);
			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
		},
		/* -------------------- */
		
		
		/* resets content position to 0 */
		_resetContentPosition=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			_stop($this); /* stop any current scrolling before resetting */
			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
				mCSB_dragger[0].add(mCSB_container).css("top",0);
				_scrollTo($this,"_resetY");
			}
			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
				var cx=dx=0;
				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
					dx=Math.abs(cx/d.scrollRatio.x);
				}
				mCSB_container.css("left",cx);
				mCSB_dragger[1].css("left",dx);
				_scrollTo($this,"_resetX");
			}
		},
		/* -------------------- */
		
		
		/* binds scrollbar events */
		_bindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
			if(!d.bindEvents){ /* check if events are already bound */
				_draggable.call(this);
				if(o.contentTouchScroll){_contentDraggable.call(this);}
				_selectable.call(this);
				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
					function _mwt(){
						mousewheelTimeout=setTimeout(function(){
							if(!$.event.special.mousewheel){
								_mwt();
							}else{
								clearTimeout(mousewheelTimeout);
								_mousewheel.call($this[0]);
							}
						},100);
					}
					var mousewheelTimeout;
					_mwt();
				}
				_draggerRail.call(this);
				_wrapperScroll.call(this);
				if(o.advanced.autoScrollOnFocus){_focus.call(this);}
				if(o.scrollButtons.enable){_buttons.call(this);}
				if(o.keyboard.enable){_keyboard.call(this);}
				d.bindEvents=true;
			}
		},
		/* -------------------- */
		
		
		/* unbinds scrollbar events */
		_unbindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				sb=".mCSB_"+d.idx+"_scrollbar",
				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
			if(d.bindEvents){ /* check if events are bound */
				/* unbind namespaced events from document/selectors */
				$(document).unbind("."+namespace);
				sel.each(function(){
					$(this).unbind("."+namespace);
				});
				/* clear and delete timeouts/objects */
				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
				clearTimeout(d.sequential.step); _delete(d.sequential,"step");
				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
				d.bindEvents=false;
			}
		},
		/* -------------------- */
		
		
		/* toggles scrollbar visibility */
		_scrollbarVisibility=function(disabled){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
			if(o.axis!=="x"){
				if(d.overflowed[0] && !disabled){
					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
					content.removeClass(classes[8]+" "+classes[10]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
						content.removeClass(classes[10]);
					}else{
						scrollbar[0].css("display","none");
						content.addClass(classes[10]);
					}
					content.addClass(classes[8]);
				}
			}
			if(o.axis!=="y"){
				if(d.overflowed[1] && !disabled){
					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
					content.removeClass(classes[9]+" "+classes[11]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
						content.removeClass(classes[11]);
					}else{
						scrollbar[1].css("display","none");
						content.addClass(classes[11]);
					}
					content.addClass(classes[9]);
				}
			}
			if(!d.overflowed[0] && !d.overflowed[1]){
				$this.addClass(classes[5]);
			}else{
				$this.removeClass(classes[5]);
			}
		},
		/* -------------------- */
		
		
		/* returns input coordinates of pointer, touch and mouse events (relative to document) */
		_coordinates=function(e){
			var t=e.type;
			switch(t){
				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
					return e.target.ownerDocument!==document ? [e.originalEvent.screenY,e.originalEvent.screenX,false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
					break;
				case "touchstart": case "touchmove": case "touchend":
					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
					break;
				default:
					return [e.pageY,e.pageX,false];
			}
		},
		/* -------------------- */
		
		
		/* 
		SCROLLBAR DRAG EVENTS
		scrolls content via scrollbar dragging 
		*/
		_draggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
				draggable,dragY,dragX,
				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger;
			mCSB_dragger.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				touchActive=true;
				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
				_iframe(false); /* enable scrollbar dragging over iframes by disabling their events */
				_stop($this);
				draggable=$(this);
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
					h=draggable.height()+offset.top,w=draggable.width()+offset.left;
				if(y<h && y>0 && x<w && x>0){
					dragY=y; 
					dragX=x;
				}
				_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
			}).bind("touchmove."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				_drag(dragY,dragX,y,x);
			});
			$(document).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
				if(draggable){
					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
					if(dragY===y){return;} /* has it really moved? */
					_drag(dragY,dragX,y,x);
				}
			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				if(draggable){
					_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
					draggable=null;
				}
				touchActive=false;
				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
				_iframe(true); /* enable iframes events */
			});
			function _iframe(evt){
				var el=mCSB_container.find("iframe");
				if(!el.length){return;} /* check if content contains iframes */
				var val=!evt ? "none" : "auto";
				el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
			}
			function _drag(dragY,dragX,y,x){
				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
				if(draggable.attr("id")===draggerId[1]){
					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
				}else{
					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
				}
				_scrollTo($this,to.toString(),{dir:dir,drag:true});
			}
		},
		/* -------------------- */
		
		
		/* 
		TOUCH SWIPE EVENTS
		scrolls content via touch swipe 
		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
		*/
		_contentDraggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
				iframe=mCSB_container.find("iframe"),
				events=[
					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
				];
			mCSB_container.bind(events[0],function(e){
				_onTouchstart(e);
			}).bind(events[1],function(e){
				_onTouchmove(e);
			});
			mCustomScrollBox.bind(events[0],function(e){
				_onTouchstart2(e);
			}).bind(events[2],function(e){
				_onTouchend(e);
			});
			if(iframe.length){
				iframe.each(function(){
					$(this).load(function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onTouchstart(e);
								_onTouchstart2(e);
							}).bind(events[1],function(e){
								_onTouchmove(e);
							}).bind(events[2],function(e){
								_onTouchend(e);
							});
						}
					});
				});
			}
			function _onTouchstart(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1; touchDrag=0; docDrag=0;
				$this.removeClass("mCS_touch_action");
				var offset=mCSB_container.offset();
				dragY=_coordinates(e)[0]-offset.top;
				dragX=_coordinates(e)[1]-offset.left;
				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
			}
			function _onTouchmove(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				e.stopImmediatePropagation();
				if(docDrag && !touchDrag){return;}
				runningTime=_getTime();
				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
					easing="mcsLinearOut";
				touchMoveY.push(y);
				touchMoveX.push(x);
				touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
				if(d.overflowed[0]){
					var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
						prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
				}
				if(d.overflowed[1]){
					var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
						preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
				}
				if(prevent || preventX){ /* prevent native document scrolling */
					e.preventDefault(); 
					touchDrag=1;
				}else{
					docDrag=1;
					$this.addClass("mCS_touch_action");
				}
				amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
				mCSB_container[0].idleTimer=250;
				if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
				if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
			}
			function _onTouchstart2(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1;
				e.stopImmediatePropagation();
				_stop($this);
				startTime=_getTime();
				var offset=mCustomScrollBox.offset();
				touchStartY=_coordinates(e)[0]-offset.top;
				touchStartX=_coordinates(e)[1]-offset.left;
				touchMoveY=[]; touchMoveX=[];
			}
			function _onTouchend(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				e.stopImmediatePropagation();
				touchDrag=0; docDrag=0;
				endTime=_getTime();
				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				if((endTime-runningTime)>30){return;}
				speed=1000/(endTime-startTime);
				var easing="mcsEaseOut",slow=speed<2.5,
					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
				var a=[
					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
				];
				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
				amount[0]=absDistance[0]>md ? amount[0] : 0;
				amount[1]=absDistance[1]>md ? amount[1] : 0;
				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
			}
			function _m(ds,s){
				var r=[s*1.5,s*2,s/1.5,s/2];
				if(ds>90){
					return s>4 ? r[0] : r[3];
				}else if(ds>60){
					return s>3 ? r[3] : r[2];
				}else if(ds>30){
					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
				}else{
					return s>8 ? s : r[3];
				}
			}
			function _drag(amount,dur,easing,dir,overwrite,drag){
				if(!amount){return;}
				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
			}
		},
		/* -------------------- */
		
		
		/* 
		SELECT TEXT EVENTS 
		scrolls content when text is selected 
		*/
		_selectable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				action;
			mCSB_container.bind("mousedown."+namespace,function(e){
				if(touchable){return;}
				if(!action){action=1; touchActive=true;}
			}).add(document).bind("mousemove."+namespace,function(e){
				if(!touchable && action && _sel()){
					var offset=mCSB_container.offset(),
						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
						if(seq.step){_seq("off",null,"stepped");}
					}else{
						if(o.axis!=="x" && d.overflowed[0]){
							if(y<0){
								_seq("on",38);
							}else if(y>wrapper.height()){
								_seq("on",40);
							}
						}
						if(o.axis!=="y" && d.overflowed[1]){
							if(x<0){
								_seq("on",37);
							}else if(x>wrapper.width()){
								_seq("on",39);
							}
						}
					}
				}
			}).bind("mouseup."+namespace,function(e){
				if(touchable){return;}
				if(action){action=0; _seq("off",null);}
				touchActive=false;
			});
			function _sel(){
				return 	window.getSelection ? window.getSelection().toString() : 
						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
			}
			function _seq(a,c,s){
				seq.type=s && action ? "stepped" : "stepless";
				seq.scrollAmount=10;
				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
			}
		},
		/* -------------------- */
		
		
		/* 
		MOUSE WHEEL EVENT
		scrolls content via mouse-wheel 
		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
		*/
		_mousewheel=function(){
			if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
			if(iframe.length){
				iframe.each(function(){
					$(this).load(function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
								_onMousewheel(e,delta);
							});
						}
					});
				});
			}
			mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
				_onMousewheel(e,delta);
			});
			function _onMousewheel(e,delta){
				_stop($this);
				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100;
				if(o.axis==="x" || o.mouseWheel.axis==="x"){
					var dir="x",
						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
						draggerPos=mCSB_dragger[1][0].offsetLeft,
						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
						dlt=e.deltaX || e.deltaY || delta;
				}else{
					var dir="y",
						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
						draggerPos=mCSB_dragger[0][0].offsetTop,
						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
						dlt=e.deltaY || delta;
				}
				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
				if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
					e.stopImmediatePropagation();
					e.preventDefault();
				}
				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir});
			}
		},
		/* -------------------- */
		
		
		/* checks if iframe can be accessed */
		_canAccessIFrame=function(iframe){
			var html=null;
			try{
				var doc=iframe.contentDocument || iframe.contentWindow.document;
				html=doc.body.innerHTML;
			}catch(err){/* do nothing */}
			return(html!==null);
		},
		/* -------------------- */
		
		
		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
		_disableMousewheel=function(el,target){
			var tag=target.nodeName.toLowerCase(),
				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
				/* elements that require focus */
				focusTags=["select","textarea"];
			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
		},
		/* -------------------- */
		
		
		/* 
		DRAGGER RAIL CLICK EVENT
		scrolls content via dragger rail 
		*/
		_draggerRail=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]);
			mCSB_draggerContainer.bind("touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				touchActive=true;
			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				touchActive=false;
			}).bind("click."+namespace,function(e){
				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
					_stop($this);
					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
					if(el.parent(".mCSB_scrollTools_horizontal").length>0){
						if(!d.overflowed[1]){return;}
						var dir="x",
							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
					}else{
						if(!d.overflowed[0]){return;}
						var dir="y",
							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
					}
					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		FOCUS EVENT
		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
		*/
		_focus=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent();
			mCSB_container.bind("focusin."+namespace,function(e){
				var el=$(document.activeElement),
					nested=mCSB_container.find(".mCustomScrollBox").length,
					dur=0;
				if(!el.is(o.advanced.autoScrollOnFocus)){return;}
				_stop($this);
				clearTimeout($this[0]._focusTimeout);
				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;
				$this[0]._focusTimeout=setTimeout(function(){
					var	to=[_childPos(el)[0],_childPos(el)[1]],
						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
						isVisible=[
							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
						],
						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
					if(o.axis!=="x" && !isVisible[0]){
						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
					if(o.axis!=="y" && !isVisible[1]){
						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
				},$this[0]._focusTimer);
			});
		},
		/* -------------------- */
		
		
		/* sets content wrapper scrollTop/scrollLeft always to 0 */
		_wrapperScroll=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				wrapper=$("#mCSB_"+d.idx+"_container").parent();
			wrapper.bind("scroll."+namespace,function(e){
				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		BUTTONS EVENTS
		scrolls content via up, down, left and right buttons 
		*/
		_buttons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				sel=".mCSB_"+d.idx+"_scrollbar",
				btn=$(sel+">a");
			btn.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				var btnClass=$(this).attr("class");
				seq.type=o.scrollButtons.scrollType;
				switch(e.type){
					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
						if(seq.type==="stepped"){return;}
						touchActive=true;
						d.tweenRunning=false;
						_seq("on",btnClass);
						break;
					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
					case "mouseout": case "pointerout": case "MSPointerOut":
						if(seq.type==="stepped"){return;}
						touchActive=false;
						if(seq.dir){_seq("off",btnClass);}
						break;
					case "click":
						if(seq.type!=="stepped" || d.tweenRunning){return;}
						_seq("on",btnClass);
						break;
				}
				function _seq(a,c){
					seq.scrollAmount=o.snapAmount || o.scrollButtons.scrollAmount;
					_sequentialScroll($this,a,c);
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		KEYBOARD EVENTS
		scrolls content via keyboard 
		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
		*/
		_keyboard=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
				iframe=mCSB_container.find("iframe"),
				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
			if(iframe.length){
				iframe.each(function(){
					$(this).load(function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onKeyboard(e);
							});
						}
					});
				});
			}
			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
				_onKeyboard(e);
			});
			function _onKeyboard(e){
				switch(e.type){
					case "blur":
						if(d.tweenRunning && seq.dir){_seq("off",null);}
						break;
					case "keydown": case "keyup":
						var code=e.keyCode ? e.keyCode : e.which,action="on";
						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
							/* up (38), down (40), left (37), right (39) arrows */
							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
							if(e.type==="keyup"){action="off";}
							if(!$(document.activeElement).is(editables)){
								e.preventDefault();
								e.stopImmediatePropagation();
								_seq(action,code);
							}
						}else if(code===33 || code===34){
							/* PgUp (33), PgDn (34) */
							if(d.overflowed[0] || d.overflowed[1]){
								e.preventDefault();
								e.stopImmediatePropagation();
							}
							if(e.type==="keyup"){
								_stop($this);
								var keyboardDir=code===34 ? -1 : 1;
								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
								}else{
									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
								}
								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
							}
						}else if(code===35 || code===36){
							/* End (35), Home (36) */
							if(!$(document.activeElement).is(editables)){
								if(d.overflowed[0] || d.overflowed[1]){
									e.preventDefault();
									e.stopImmediatePropagation();
								}
								if(e.type==="keyup"){
									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
									}else{
										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
									}
									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
								}
							}
						}
						break;
				}
				function _seq(a,c){
					seq.type=o.keyboard.scrollType;
					seq.scrollAmount=o.snapAmount || o.keyboard.scrollAmount;
					if(seq.type==="stepped" && d.tweenRunning){return;}
					_sequentialScroll($this,a,c);
				}
			}
		},
		/* -------------------- */
		
		
		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
		_sequentialScroll=function(el,action,trigger,e,s){
			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				once=seq.type==="stepped" ? true : false,
				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
			switch(action){
				case "on":
					seq.dir=[
						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
					];
					_stop(el);
					if(_isNumeric(trigger) && seq.type==="stepped"){return;}
					_on(once);
					break;
				case "off":
					_off();
					if(once || (d.tweenRunning && seq.dir)){
						_on(true);
					}
					break;
			}
			/* starts sequence */
			function _on(once){
				var c=seq.type!=="stepped", /* continuous scrolling */
					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
					to=seq.scrollAmount!=="auto" ? px : amount,
					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
					onComplete=!once ? false : true;
				if(once && t<17){
					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
				}
				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
				if(once){
					seq.dir=false;
					return;
				}
				clearTimeout(seq.step);
				seq.step=setTimeout(function(){
					_on();
				},t);
			}
			/* stops sequence */
			function _off(){
				clearTimeout(seq.step);
				_delete(seq,"step");
				_stop(el);
			}
		},
		/* -------------------- */
		
		
		/* returns a yx array from value */
		_arr=function(val){
			var o=$(this).data(pluginPfx).opt,vals=[];
			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
			/* check if value is object or array, its length and create an array with yx values */
			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
			}else{ /* array value (e.g. [100,100]) */
				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
			}
			/* check if array values are anonymous functions */
			if(typeof vals[0]==="function"){vals[0]=vals[0]();}
			if(typeof vals[1]==="function"){vals[1]=vals[1]();}
			return vals;
		},
		/* -------------------- */
		
		
		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
		_to=function(val,dir){
			if(val==null || typeof val=="undefined"){return;}
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				t=typeof val;
			if(!dir){dir=o.axis==="x" ? "x" : "y";}
			var contentLength=dir==="x" ? mCSB_container.outerWidth(false) : mCSB_container.outerHeight(false),
				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
				cssProp=dir==="x" ? "left" : "top";
			switch(t){
				case "function": /* this currently is not used. Consider removing it */
					return val();
					break;
				case "object": /* js/jquery object */
					var obj=val.jquery ? val : $(val);
					if(!obj.length){return;}
					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
					break;
				case "string": case "number":
					if(_isNumeric(val)){ /* numeric value */
						return Math.abs(val);
					}else if(val.indexOf("%")!==-1){ /* percentage value */
						return Math.abs(contentLength*parseInt(val)/100);
					}else if(val.indexOf("-=")!==-1){ /* decrease value */
						return Math.abs(contentPos-parseInt(val.split("-=")[1]));
					}else if(val.indexOf("+=")!==-1){ /* inrease value */
						var p=(contentPos+parseInt(val.split("+=")[1]));
						return p>=0 ? 0 : Math.abs(p);
					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
						return Math.abs(val.split("px")[0]);
					}else{
						if(val==="top" || val==="left"){ /* special strings */
							return 0;
						}else if(val==="bottom"){
							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
						}else if(val==="right"){
							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
						}else if(val==="first" || val==="last"){
							var obj=mCSB_container.find(":"+val);
							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
						}else{
							if($(val).length){ /* jquery selector */
								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
							}else{ /* other values (e.g. "100em") */
								mCSB_container.css(cssProp,val);
								methods.update.call(null,$this[0]);
								return;
							}
						}
					}
					break;
			}
		},
		/* -------------------- */
		
		
		/* calls the update method automatically */
		_autoUpdate=function(rem){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(rem){
				/* 
				removes autoUpdate timer 
				usage: _autoUpdate.call(this,"remove");
				*/
				clearTimeout(mCSB_container[0].autoUpdate);
				_delete(mCSB_container[0],"autoUpdate");
				return;
			}
			var	wrapper=mCSB_container.parent(),
				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
				scrollbarSize=function(){return [
					scrollbar[0].is(":visible") ? scrollbar[0].outerHeight(true) : 0, /* returns y-scrollbar height */
					scrollbar[1].is(":visible") ? scrollbar[1].outerWidth(true) : 0 /* returns x-scrollbar width */
				]},
				oldSelSize=sizesSum(),newSelSize,
				os=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false),wrapper.height(),wrapper.width(),scrollbarSize()[0],scrollbarSize()[1]],ns,
				oldImgsLen=imgSum(),newImgsLen;
			upd();
			function upd(){
				clearTimeout(mCSB_container[0].autoUpdate);
				if($this.parents("html").length===0){
					/* check element in dom tree */
					$this=null;
					return;
				}
				mCSB_container[0].autoUpdate=setTimeout(function(){
					/* update on specific selector(s) length and size change */
					if(o.advanced.updateOnSelectorChange){
						newSelSize=sizesSum();
						if(newSelSize!==oldSelSize){
							doUpd(3);
							oldSelSize=newSelSize;
							return;
						}
					}
					/* update on main element and scrollbar size changes */
					if(o.advanced.updateOnContentResize){
						ns=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false),wrapper.height(),wrapper.width(),scrollbarSize()[0],scrollbarSize()[1]];
						if(ns[0]!==os[0] || ns[1]!==os[1] || ns[2]!==os[2] || ns[3]!==os[3] || ns[4]!==os[4] || ns[5]!==os[5]){
							doUpd(ns[0]!==os[0] || ns[1]!==os[1]);
							os=ns;
						}
					}
					/* update on image load */
					if(o.advanced.updateOnImageLoad){
						newImgsLen=imgSum();
						if(newImgsLen!==oldImgsLen){
							mCSB_container.find("img").each(function(){
								imgLoader(this);
							});
							oldImgsLen=newImgsLen;
						}
					}
					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
				},o.advanced.autoUpdateTimeout);
			}
			/* returns images amount */
			function imgSum(){
				var total=0
				if(o.advanced.updateOnImageLoad){total=mCSB_container.find("img").length;}
				return total;
			}
			/* a tiny image loader */
			function imgLoader(el){
				if($(el).hasClass(classes[2])){doUpd(); return;}
				var img=new Image();
				function createDelegate(contextObject,delegateMethod){
					return function(){return delegateMethod.apply(contextObject,arguments);}
				}
				function imgOnLoad(){
					this.onload=null;
					$(el).addClass(classes[2]);
					doUpd(2);
				}
				img.onload=createDelegate(img,imgOnLoad);
				img.src=el.src;
			}
			/* returns the total height and width sum of all elements matching the selector */
			function sizesSum(){
				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=$(this).height()+$(this).width();});}
				return total;
			}
			/* calls the update method */
			function doUpd(cb){
				clearTimeout(mCSB_container[0].autoUpdate); 
				methods.update.call(null,$this[0],cb);
			}
		},
		/* -------------------- */
		
		
		/* snaps scrolling to a multiple of a pixels number */
		_snapAmount=function(to,amount,offset){
			return (Math.round(to/amount)*amount-offset); 
		},
		/* -------------------- */
		
		
		/* stops content and scrollbar animations */
		_stop=function(el){
			var d=el.data(pluginPfx),
				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
			sel.each(function(){
				_stopTween.call(this);
			});
		},
		/* -------------------- */
		
		
		/* 
		ANIMATES CONTENT 
		This is where the actual scrolling happens
		*/
		_scrollTo=function(el,to,options){
			var d=el.data(pluginPfx),o=d.opt,
				defaults={
					trigger:"internal",
					dir:"y",
					scrollEasing:"mcsEaseOut",
					drag:false,
					dur:o.scrollInertia,
					overwrite:"all",
					callbacks:true,
					onStart:true,
					onUpdate:true,
					onComplete:true
				},
				options=$.extend(defaults,options),
				dur=[options.dur,(options.drag ? 0 : options.dur)],
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
			d.trigger=options.trigger;
			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
				wrapper.scrollTop(0).scrollLeft(0);
			}
			if(to==="_resetY" && !d.contentReset.y){
				/* callbacks: onOverflowYNone */
				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
				d.contentReset.y=1;
			}
			if(to==="_resetX" && !d.contentReset.x){
				/* callbacks: onOverflowXNone */
				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
				d.contentReset.x=1;
			}
			if(to==="_resetY" || to==="_resetX"){return;}
			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
				/* callbacks: onOverflowY */
				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
				d.contentReset.x=null;
			}
			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
				/* callbacks: onOverflowX */
				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
				d.contentReset.x=null;
			}
			if(o.snapAmount){to=_snapAmount(to,o.snapAmount,o.snapOffset);} /* scrolling snapping */
			switch(options.dir){
				case "x":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
						property="left",
						contentPos=mCSB_container[0].offsetLeft,
						limit=[
							mCustomScrollBox.width()-mCSB_container.outerWidth(false),
							mCSB_dragger.parent().width()-mCSB_dragger.width()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
						tso=totalScrollOffsets[1],
						tsbo=totalScrollBackOffsets[1],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
					break;
				case "y":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
						property="top",
						contentPos=mCSB_container[0].offsetTop,
						limit=[
							mCustomScrollBox.height()-mCSB_container.outerHeight(false),
							mCSB_dragger.parent().height()-mCSB_dragger.height()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
						tso=totalScrollOffsets[0],
						tsbo=totalScrollBackOffsets[0],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
					break;
			}
			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
				scrollTo=[0,0];
			}else if(scrollTo[1]>=limit[1]){
				scrollTo=[limit[0],limit[1]];
			}else{
				scrollTo[0]=-scrollTo[0];
			}
			if(!el[0].mcs){
				_mcs();  /* init mcs object (once) to make it available before callbacks */
				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
			}
			clearTimeout(mCSB_container[0].onCompleteTimeout);
			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
				onStart:function(){
					if(options.callbacks && options.onStart && !d.tweenRunning){
						/* callbacks: onScrollStart */
						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
						d.tweenRunning=true;
						_onDragClasses(mCSB_dragger);
						d.cbOffsets=_cbOffsets();
					}
				},onUpdate:function(){
					if(options.callbacks && options.onUpdate){
						/* callbacks: whileScrolling */
						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
					}
				},onComplete:function(){
					if(options.callbacks && options.onComplete){
						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
						var t=mCSB_container[0].idleTimer || 0;
						mCSB_container[0].onCompleteTimeout=setTimeout(function(){
							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
							d.tweenRunning=false;
							mCSB_container[0].idleTimer=0;
							_onDragClasses(mCSB_dragger,"hide");
						},t);
					}
				}
			});
			/* checks if callback function exists */
			function _cb(cb){
				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
			}
			/* checks whether callback offsets always trigger */
			function _cbOffsets(){
				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
			}
			/* 
			populates object with useful values for the user 
			values: 
				content: this.mcs.content
				content top position: this.mcs.top 
				content left position: this.mcs.left 
				dragger top position: this.mcs.draggerTop 
				dragger left position: this.mcs.draggerLeft 
				scrolling y percentage: this.mcs.topPct 
				scrolling x percentage: this.mcs.leftPct 
				scrolling direction: this.mcs.direction
			*/
			function _mcs(){
				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
				el[0].mcs={
					content:mCSB_container, /* original content wrapper as jquery object */
					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
					direction:options.dir
				};
				/* 
				this refers to the original element containing the scrollbar(s)
				usage: this.mcs.top, this.mcs.leftPct etc. 
				*/
			}
		},
		/* -------------------- */
		
		
		/* 
		CUSTOM JAVASCRIPT ANIMATION TWEEN 
		Lighter and faster than jquery animate() and css transitions 
		Animates top/left properties and includes easings 
		*/
		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			tobj.stop=0;
			if(overwrite!=="none"){_cancelTween();}
			_startTween();
			function _step(){
				if(tobj.stop){return;}
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=tobj.time){
					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
					if(tobj.time<progress+1){tobj.time=progress+1;}
				}
				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
					elStyle[prop]=Math.round(tobj.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				tobj.time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				tobj.id=_request(_step);
			}
			function _cancelTween(){
				if(tobj.id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(tobj.id);
				}else{window.cancelAnimationFrame(tobj.id);}
				tobj.id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear": case "mcsLinear":
						return c*t/d + b;
						break;
					case "mcsLinearOut":
						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeInOutSmooth":
						t/=d/2;
						if(t<1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeInOutStrong":
						t/=d/2;
						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
						t--;
						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
						break;
					case "easeInOut": case "mcsEaseInOut":
						t/=d/2;
						if(t<1) return c/2*t*t*t + b;
						t-=2;
						return c/2*(t*t*t + 2) + b;
						break;
					case "easeOutSmooth":
						t/=d; t--;
						return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutStrong":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "easeOut": case "mcsEaseOut": default:
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
				}
			}
		},
		/* -------------------- */
		
		
		/* returns current time */
		_getTime=function(){
			if(window.performance && window.performance.now){
				return window.performance.now();
			}else{
				if(window.performance && window.performance.webkitNow){
					return window.performance.webkitNow();
				}else{
					if(Date.now){return Date.now();}else{return new Date().getTime();}
				}
			}
		},
		/* -------------------- */
		
		
		/* stops a tween */
		_stopTween=function(){
			var el=this;
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var props=["top","left"];
			for(var i=0; i<props.length; i++){
				var prop=props[i];
				if(el._mTween[prop].id){
					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
					}else{window.cancelAnimationFrame(el._mTween[prop].id);}
					el._mTween[prop].id=null;
					el._mTween[prop].stop=1;
				}
			}
		},
		/* -------------------- */
		
		
		/* deletes a property (avoiding the exception thrown by IE) */
		_delete=function(c,m){
			try{delete c[m];}catch(e){c[m]=null;}
		},
		/* -------------------- */
		
		
		/* detects left mouse button */
		_mouseBtnLeft=function(e){
			return !(e.which && e.which!==1);
		},
		/* -------------------- */
		
		
		/* detects if pointer type event is touch */
		_pointerTouch=function(e){
			var t=e.originalEvent.pointerType;
			return !(t && t!=="touch" && t!==2);
		},
		/* -------------------- */
		
		
		/* checks if value is numeric */
		_isNumeric=function(val){
			return !isNaN(parseFloat(val)) && isFinite(val);
		},
		/* -------------------- */
		
		
		/* returns element position according to content */
		_childPos=function(el){
			var p=el.parents(".mCSB_container");
			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
		};
		/* -------------------- */
		
	
	
	
	
	/* 
	----------------------------------------
	PLUGIN SETUP 
	----------------------------------------
	*/
	
	/* plugin constructor functions */
	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	
	/* 
	allow setting plugin default options. 
	usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
	to apply any changed default options on default selectors (below), use inside document ready fn 
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
	$[pluginNS].defaults=defaults;
	
	/* 
	add window object (window.mCustomScrollbar) 
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
	window[pluginNS]=true;
	
	$(window).load(function(){
		
		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */
		
		/* extend jQuery expressions */
		$.extend($.expr[":"],{
			/* checks if element is within scrollable viewport */
			mcsInView:$.expr[":"].mcsInView || function(el){
				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
				if(!content.length){return;}
				wrapper=content.parent();
				cPos=[content[0].offsetTop,content[0].offsetLeft];
				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) && 
						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
			},
			/* checks if element is overflowed having visible scrollbar(s) */
			mcsOverflow:$.expr[":"].mcsOverflow || function(el){
				var d=$(el).data(pluginPfx);
				if(!d){return;}
				return d.overflowed[0] || d.overflowed[1];
			}
		});
	
	});

}))}));

// Font Awesome Map Markers

/* 
 * Git Respository: http://github.com/project 
 */

var fontawesome={};fontawesome.markers={"GLASS":"M60.68-57.357q0 1.25-1.537 2.786L36.57-32v27.43H48q.93 0 1.607.677t.68 1.607-.68 1.607T48 0H16q-.93 0-1.607-.68t-.68-1.606.68-1.607T16-4.57h11.43V-32L4.856-54.57Q3.32-56.108 3.32-57.358q0-.822.644-1.304t1.357-.626 1.537-.143h50.286q.82 0 1.536.144t1.356.625.643 1.303z","MUSIC":"M54.857-56v40q0 1.786-1.214 3.18t-3.072 2.16-3.695 1.142-3.446.375-3.448-.375-3.696-1.143-3.072-2.16T32-16t1.214-3.18 3.072-2.16 3.696-1.142 3.447-.375q3.75 0 6.856 1.393v-19.18l-27.43 8.465v25.323q0 1.786-1.213 3.178T18.57-1.517 14.876-.375 11.43 0 7.98-.375 4.286-1.518t-3.072-2.16T0-6.86t1.214-3.178 3.072-2.16 3.696-1.143 3.447-.374q3.75 0 6.856 1.393v-34.537q0-1.107.678-2.018t1.75-1.268l29.715-9.143q.427-.143 1-.143 1.427 0 2.427 1t1 2.43z","SEARCH":"M41.143-34.286q0-6.607-4.697-11.303t-11.303-4.696T13.84-45.59 9.142-34.285t4.696 11.304 11.303 4.696 11.303-4.696 4.697-11.304zM59.43-4.57q0 1.856-1.36 3.213T54.858 0q-1.928 0-3.214-1.357L39.393-13.57Q33-9.144 25.143-9.144q-5.107 0-9.768-1.982T7.34-16.482 1.98-24.518 0-34.286t1.982-9.768T7.34-52.09t8.035-5.356 9.768-1.983 9.768 1.984 8.036 5.357 5.358 8.036 1.982 9.768q0 7.857-4.43 14.25l12.25 12.25Q59.43-6.464 59.43-4.57z","ENVELOPE_O":"M59.43-10.286v-27.428q-1.144 1.285-2.466 2.357Q47.394-28 41.75-23.287q-1.82 1.537-2.964 2.394t-3.09 1.732-3.66.874h-.072q-1.714 0-3.66-.875t-3.09-1.733-2.964-2.393Q16.607-28 7.036-35.356 5.714-36.43 4.57-37.715v27.428q0 .465.34.804t.804.34h52.572q.464 0 .803-.34t.34-.804zm0-37.535v-.876l-.02-.465-.106-.447-.197-.322-.32-.266-.5-.09H5.713q-.464 0-.803.34t-.34.803q0 6 5.25 10.143 6.894 5.43 14.323 11.32.214.18 1.25 1.055t1.643 1.34 1.59 1.124 1.803.98 1.534.323h.072q.714 0 1.535-.322t1.805-.98 1.59-1.126 1.642-1.34 1.25-1.053Q47.287-33.57 54.18-39q1.927-1.536 3.588-4.125t1.66-4.696zM64-49.144v38.857q0 2.357-1.68 4.036t-4.034 1.68H5.714q-2.357 0-4.035-1.68T0-10.286v-38.857Q0-51.5 1.68-53.18t4.034-1.677h52.572q2.357 0 4.035 1.678T64-49.142z","HEART":"M32-4.57q-.93 0-1.57-.644l-22.287-21.5q-.357-.286-.982-.93T5.18-29.98t-2.43-3.482-1.91-4.322T0-42.714Q0-50.57 4.536-55t12.535-4.43q2.216 0 4.52.77t4.285 2.07 3.41 2.447T32-51.713q1.286-1.287 2.714-2.43t3.41-2.446 4.287-2.07 4.52-.77q8 0 12.534 4.43T64-42.714q0 7.893-8.18 16.07L33.57-5.213q-.64.643-1.57.643z","STAR":"M59.43-40.893q0 .786-.93 1.714L45.536-26.535l3.07 17.857q.037.25.037.716 0 .75-.375 1.268t-1.09.517q-.678 0-1.428-.427l-16.036-8.43-16.035 8.43q-.787.428-1.43.428-.75 0-1.125-.516t-.375-1.268q0-.215.07-.715l3.073-17.856-13-12.643Q0-40.142 0-40.892q0-1.32 2-1.643l17.93-2.607 8.034-16.25q.68-1.464 1.75-1.464t1.75 1.464l8.036 16.25 17.93 2.607q2 .322 2 1.643z","STAR_O":"M40.607-28.143l10.93-10.607-15.073-2.214-6.75-13.643-6.75 13.643-15.07 2.214L18.82-28.143l-2.606 15.036 13.5-7.107 13.465 7.107zm18.822-12.75q0 .786-.93 1.714L45.536-26.535l3.07 17.857q.037.25.037.716 0 1.785-1.464 1.785-.68 0-1.43-.427l-16.036-8.43-16.035 8.43q-.787.428-1.43.428-.75 0-1.125-.516t-.375-1.268q0-.215.07-.715l3.073-17.856-13-12.643Q0-40.142 0-40.892q0-1.32 2-1.643l17.93-2.607 8.034-16.25q.68-1.464 1.75-1.464t1.75 1.464l8.036 16.25 17.93 2.607q2 .322 2 1.643z","USER":"M50.286-13.82q0 4.284-2.607 6.766T40.75-4.57H9.536q-4.322 0-6.93-2.484T0-13.82q0-1.894.125-3.698t.5-3.893.946-3.876 1.537-3.482T5.32-31.66t3.055-1.91 3.982-.716q.322 0 1.5.768t2.66 1.714 3.858 1.715 4.768.77 4.768-.77 3.858-1.714 2.66-1.714 1.5-.768q2.18 0 3.983.715t3.054 1.91 2.215 2.892 1.534 3.482.947 3.875.5 3.892.126 3.697zm-11.43-31.894q0 5.678-4.017 9.696T25.142-32t-9.697-4.018-4.017-9.696 4.016-9.697 9.697-4.02 9.696 4.02 4.017 9.696z","FILM":"M13.714-6.857v-4.572q0-.927-.678-1.606t-1.607-.678H6.856q-.928 0-1.607.678t-.68 1.607v4.573q0 .928.68 1.607t1.607.68h4.572q.927 0 1.606-.68t.678-1.607zm0-13.714v-4.573q0-.928-.678-1.607t-1.607-.68H6.856q-.928 0-1.607.68t-.68 1.607v4.572q0 .927.68 1.606t1.607.678h4.572q.927 0 1.606-.678t.678-1.607zm0-13.716v-4.57q0-.93-.678-1.608t-1.607-.68H6.856q-.928 0-1.607.68t-.68 1.607v4.57q0 .93.68 1.608t1.607.68h4.572q.927 0 1.606-.68t.678-1.606zm36.572 27.43v-18.287q0-.928-.68-1.607T48-27.43H20.57q-.927 0-1.606.68t-.678 1.607v18.286q0 .928.678 1.607t1.607.68H48q.93 0 1.607-.68t.68-1.607zM13.714-48v-4.57q0-.93-.678-1.61t-1.607-.677H6.856q-.928 0-1.607.678t-.68 1.61V-48q0 .93.68 1.607t1.607.68h4.572q.927 0 1.606-.68T13.714-48zM64-6.857v-4.572q0-.927-.68-1.606t-1.606-.678h-4.57q-.93 0-1.608.678t-.68 1.607v4.573q0 .928.68 1.607t1.607.68h4.57q.93 0 1.608-.68T64-6.857zm-13.714-27.43V-52.57q0-.93-.68-1.61T48-54.856H20.57q-.927 0-1.606.678t-.678 1.61v18.284q0 .93.678 1.607t1.607.68H48q.93 0 1.607-.68t.68-1.606zM64-20.57v-4.573q0-.928-.68-1.607t-1.606-.68h-4.57q-.93 0-1.608.68t-.68 1.607v4.572q0 .927.68 1.606t1.607.678h4.57q.93 0 1.608-.678T64-20.57zm0-13.716v-4.57q0-.93-.68-1.608t-1.606-.68h-4.57q-.93 0-1.608.68t-.68 1.607v4.57q0 .93.68 1.608t1.607.68h4.57q.93 0 1.608-.68t.68-1.606zM64-48v-4.57q0-.93-.68-1.61t-1.606-.677h-4.57q-.93 0-1.608.678t-.68 1.61V-48q0 .93.68 1.607t1.607.68h4.57q.93 0 1.608-.68T64-48zm4.57-5.714v48q0 2.357-1.677 4.035T62.857 0H5.714Q3.357 0 1.68-1.68T0-5.713v-48q0-2.357 1.68-4.036t4.034-1.68h57.143q2.357 0 4.036 1.68t1.678 4.036z","TH_LARGE":"M27.43-27.43v13.716q0 1.857-1.36 3.214t-3.213 1.357H4.57q-1.856 0-3.213-1.357T0-13.714V-27.43q0-1.856 1.357-3.213T4.57-32h18.287q1.857 0 3.214 1.357t1.36 3.214zm0-27.427v13.714q0 1.857-1.36 3.214t-3.213 1.36H4.57q-1.856 0-3.213-1.36T0-41.142v-13.714q0-1.857 1.357-3.214t3.214-1.36h18.287q1.857 0 3.214 1.36t1.36 3.213zm32 27.428v13.716q0 1.857-1.36 3.214t-3.213 1.357H36.57q-1.856 0-3.213-1.357T32-13.714V-27.43q0-1.856 1.357-3.213T36.57-32h18.287q1.857 0 3.214 1.357t1.36 3.214zm0-27.427v13.714q0 1.857-1.36 3.214t-3.213 1.36H36.57q-1.856 0-3.213-1.36T32-41.142v-13.714q0-1.857 1.357-3.214t3.214-1.36h18.287q1.857 0 3.214 1.36t1.36 3.213z","TH":"M18.286-19.43v6.86q0 1.427-1 2.427t-2.43 1H3.43q-1.43 0-2.43-1T0-12.57v-6.86q0-1.427 1-2.427t2.43-1h11.427q1.43 0 2.43 1t1 2.428zm0-18.284v6.857q0 1.428-1 2.428t-2.43 1H3.43q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h11.427q1.43 0 2.43 1t1 2.43zM41.143-19.43v6.86q0 1.427-1 2.427t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.428v-6.86q0-1.427 1-2.427t2.43-1h11.428q1.43 0 2.43 1t1 2.428zM18.286-56v6.857q0 1.43-1 2.43t-2.43 1H3.43q-1.43 0-2.43-1t-1-2.43V-56q0-1.43 1-2.43t2.43-1h11.427q1.43 0 2.43 1t1 2.43zm22.857 18.286v6.857q0 1.428-1 2.428t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h11.428q1.43 0 2.43 1t1 2.43zM64-19.43v6.86q0 1.427-1 2.427t-2.43 1H49.144q-1.43 0-2.43-1t-1-2.428v-6.86q0-1.427 1-2.427t2.43-1H60.57q1.43 0 2.43 1t1 2.428zM41.143-56v6.857q0 1.43-1 2.43t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.43V-56q0-1.43 1-2.43t2.43-1h11.428q1.43 0 2.43 1t1 2.43zM64-37.714v6.857q0 1.428-1 2.428t-2.43 1H49.144q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1H60.57q1.43 0 2.43 1t1 2.43zM64-56v6.857q0 1.43-1 2.43t-2.43 1H49.144q-1.43 0-2.43-1t-1-2.43V-56q0-1.43 1-2.43t2.43-1H60.57q1.43 0 2.43 1T64-56z","TH_LIST":"M18.286-19.43v6.86q0 1.427-1 2.427t-2.43 1H3.43q-1.43 0-2.43-1T0-12.57v-6.86q0-1.427 1-2.427t2.43-1h11.427q1.43 0 2.43 1t1 2.428zm0-18.284v6.857q0 1.428-1 2.428t-2.43 1H3.43q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h11.427q1.43 0 2.43 1t1 2.43zM64-19.43v6.86q0 1.427-1 2.427t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.428v-6.86q0-1.427 1-2.427t2.43-1H60.57q1.43 0 2.43 1t1 2.428zM18.286-56v6.857q0 1.43-1 2.43t-2.43 1H3.43q-1.43 0-2.43-1t-1-2.43V-56q0-1.43 1-2.43t2.43-1h11.427q1.43 0 2.43 1t1 2.43zM64-37.714v6.857q0 1.428-1 2.428t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1H60.57q1.43 0 2.43 1t1 2.43zM64-56v6.857q0 1.43-1 2.43t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.43V-56q0-1.43 1-2.43t2.43-1H60.57q1.43 0 2.43 1T64-56z","CHECK":"M59.68-43.786q0 1.43-1 2.43L32.82-15.5l-4.856 4.857q-1 1-2.428 1t-2.43-1L18.25-15.5 5.32-28.43q-1-1-1-2.427t1-2.43l4.86-4.856q1-1 2.427-1t2.43 1l10.5 10.536L48.963-51.07q1-1 2.43-1t2.427 1l4.86 4.856q1 1 1 2.428z","TIMES":"M46.357-16.786q0 1.43-1 2.43L40.5-9.5q-1 1-2.43 1t-2.427-1L25.143-20l-10.5 10.5q-1 1-2.43 1t-2.427-1L4.93-14.357q-1-1-1-2.43t1-2.427l10.5-10.5-10.5-10.5q-1-1-1-2.43t1-2.427l4.856-4.86q1-1 2.428-1t2.43 1l10.5 10.5 10.5-10.5q1-1 2.427-1t2.43 1l4.857 4.86q1 1 1 2.427t-1 2.43l-10.5 10.5 10.5 10.5q1 1 1 2.427z","SEARCH_PLUS":"M36.57-35.43v2.287q0 .464-.338.804t-.803.34h-8v8q0 .464-.34.804t-.804.34H24q-.464 0-.804-.34t-.34-.804v-8h-8q-.463 0-.802-.34t-.34-.803v-2.286q0-.463.34-.802t.803-.34h8v-8q0-.464.34-.803t.803-.34h2.286q.464 0 .803.34t.34.804v8h8q.463 0 .802.338t.34.803zm4.573 1.144q0-6.607-4.697-11.303t-11.303-4.696T13.84-45.59 9.142-34.285t4.696 11.304 11.303 4.696 11.303-4.696 4.697-11.304zM59.43-4.57q0 1.89-1.34 3.23T54.856 0q-1.928 0-3.214-1.357L39.393-13.57Q33-9.144 25.143-9.144q-5.107 0-9.768-1.982T7.34-16.482 1.98-24.518 0-34.286t1.982-9.768T7.34-52.09t8.035-5.356 9.768-1.983 9.768 1.984 8.036 5.357 5.358 8.036 1.982 9.768q0 7.857-4.43 14.25l12.25 12.25Q59.43-6.464 59.43-4.57z","SEARCH_MINUS":"M36.57-35.43v2.287q0 .464-.338.804t-.803.34H14.856q-.464 0-.803-.34t-.34-.803v-2.286q0-.463.34-.802t.803-.34H35.43q.463 0 .802.34t.34.803zm4.573 1.144q0-6.607-4.697-11.303t-11.303-4.696T13.84-45.59 9.142-34.285t4.696 11.304 11.303 4.696 11.303-4.696 4.697-11.304zM59.43-4.57q0 1.89-1.34 3.23T54.856 0q-1.928 0-3.214-1.357L39.393-13.57Q33-9.144 25.143-9.144q-5.107 0-9.768-1.982T7.34-16.482 1.98-24.518 0-34.286t1.982-9.768T7.34-52.09t8.035-5.356 9.768-1.983 9.768 1.984 8.036 5.357 5.358 8.036 1.982 9.768q0 7.857-4.43 14.25l12.25 12.25Q59.43-6.464 59.43-4.57z","POWER_OFF":"M54.857-32q0 5.57-2.178 10.643t-5.86 8.75-8.75 5.857-10.64 2.18-10.644-2.18-8.75-5.857-5.857-8.75T0-32q0-6.5 2.875-12.25t8.09-9.643q1.535-1.143 3.41-.893T17.357-53q1.143 1.5.875 3.375t-1.768 3.018q-3.5 2.643-5.41 6.464T9.144-32q0 3.714 1.445 7.09t3.91 5.84 5.84 3.91 7.09 1.446 7.088-1.447 5.84-3.91 3.91-5.84T45.714-32q0-4.32-1.91-8.143t-5.41-6.464q-1.5-1.143-1.77-3.018T37.5-53q1.107-1.536 3-1.786t3.393.893q5.214 3.893 8.09 9.643T54.856-32zM32-59.43v22.86q0 1.856-1.357 3.213T27.43-32t-3.216-1.357-1.357-3.214v-22.86q0-1.856 1.357-3.213T27.43-64t3.213 1.357T32-59.43z","SIGNAL":"M9.143-12.57v6.856q0 .5-.322.82T8-4.57H1.143q-.5 0-.822-.323T0-5.713v-6.858q0-.5.32-.823t.823-.32H8q.5 0 .82.32t.323.822zm13.714-4.573v11.43q0 .5-.32.82t-.823.322h-6.857q-.5 0-.82-.323t-.323-.82v-11.43q0-.5.322-.82t.82-.323h6.858q.5 0 .822.322t.32.82zm13.714-9.143v20.572q0 .5-.32.82t-.82.323h-6.86q-.5 0-.82-.323t-.32-.82v-20.573q0-.5.32-.82t.82-.323h6.86q.5 0 .82.323t.32.82zM50.287-40v34.286q0 .5-.322.82t-.82.323h-6.858q-.5 0-.822-.323t-.32-.82V-40q0-.5.32-.82t.822-.323h6.857q.5 0 .82.322t.323.82zM64-58.286v52.572q0 .5-.32.82t-.823.323H56q-.5 0-.82-.323t-.323-.82v-52.573q0-.5.322-.82t.82-.323h6.857q.5 0 .822.323t.32.82z","GEAR":"M36.57-32q0-3.786-2.677-6.464t-6.464-2.68-6.466 2.68T18.286-32t2.678 6.464 6.465 2.68 6.463-2.68T36.57-32zm18.287-3.893v7.93q0 .427-.286.82t-.713.464l-6.607 1q-.68 1.93-1.393 3.25 1.25 1.787 3.822 4.93.356.43.356.893t-.322.82q-.964 1.323-3.535 3.858t-3.36 2.537q-.427 0-.927-.32l-4.93-3.858q-1.57.82-3.25 1.356-.57 4.857-1.034 6.643-.25 1-1.287 1h-7.93q-.5 0-.874-.305t-.41-.768l-1-6.57q-1.75-.573-3.216-1.323L12.93-9.714q-.36.32-.894.32-.5 0-.893-.392-4.5-4.07-5.893-6-.25-.357-.25-.82 0-.43.286-.823.535-.75 1.82-2.374t1.93-2.517q-.965-1.787-1.465-3.537l-6.534-.964q-.465-.073-.75-.448T0-28.108v-7.928q0-.428.286-.82t.678-.465l6.643-1q.5-1.644 1.393-3.287-1.43-2.036-3.82-4.93-.36-.427-.36-.856 0-.357.323-.82.928-1.287 3.518-3.84t3.376-2.554q.464 0 .928.357l4.93 3.82q1.57-.82 3.25-1.356.57-4.857 1.035-6.643.25-1 1.284-1h7.93q.5 0 .874.305t.41.768l1 6.57q1.75.573 3.215 1.323l5.07-3.822q.323-.32.858-.32.466 0 .894.356 4.607 4.25 5.893 6.07.25.287.25.787 0 .43-.286.822-.534.75-1.82 2.374t-1.93 2.517q.93 1.787 1.466 3.5l6.535 1q.466.073.75.448t.287.84z","TRASH_O":"M18.286-37.714v20.57q0 .5-.322.823t-.82.32h-2.287q-.5 0-.82-.32t-.323-.823v-20.57q0-.5.322-.823t.82-.32h2.287q.5 0 .82.32t.323.822zm9.143 0v20.57q0 .5-.323.823t-.82.32H24q-.5 0-.82-.32t-.323-.823v-20.57q0-.5.322-.823t.82-.32h2.286q.5 0 .82.32t.323.822zm9.14 0v20.57q0 .5-.32.823t-.82.32h-2.287q-.5 0-.822-.32t-.32-.823v-20.57q0-.5.32-.823t.823-.32h2.286q.5 0 .82.32t.32.822zm4.573 25.857v-33.857h-32v33.857q0 .786.25 1.446t.518.964.376.303H40q.107 0 .375-.303t.518-.965.25-1.447zm-24-38.43h16l-1.714-4.177q-.25-.322-.61-.393H19.5q-.357.07-.607.393zm33.143 1.144v2.286q0 .5-.322.82t-.82.323h-3.43v33.857q0 2.964-1.678 5.125T40-4.572H10.286q-2.357 0-4.036-2.09t-1.68-5.052v-34H1.144q-.5 0-.822-.322t-.32-.82v-2.287q0-.5.32-.82t.823-.323H12.18l2.5-5.964q.534-1.32 1.927-2.25t2.822-.93h11.427q1.43 0 2.822.93t1.927 2.25l2.5 5.964h11.036q.5 0 .82.322t.323.82z","HOME":"M50.286-28.57v17.14q0 .93-.68 1.61T48-9.144H34.286v-13.714h-9.143v13.714H11.43q-.93 0-1.61-.678t-.677-1.61v-17.14q0-.037.018-.11t.02-.106l20.534-16.928L50.25-28.786q.036.072.036.215zm7.964-2.466l-2.214 2.643q-.286.322-.75.393h-.107q-.466 0-.75-.25L29.713-48.857 5-28.25q-.43.286-.857.25-.464-.07-.75-.393L1.18-31.036q-.287-.357-.25-.84t.39-.767L27-54.036q1.143-.928 2.714-.928t2.715.928l8.713 7.286v-6.964q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.822v14.57l7.82 6.5q.358.287.394.77t-.25.838z","FILE_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716z","CLOCK_O":"M32-44.57v16q0 .5-.32.82t-.823.32H19.43q-.5 0-.823-.32t-.32-.82v-2.287q0-.5.32-.822t.822-.32h8v-12.57q0-.5.32-.823t.82-.32h2.287q.5 0 .822.32t.32.822zM46.857-32q0-5.286-2.607-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ROAD":"M39.68-28.43v-.14L38.82-40q-.034-.464-.39-.804t-.823-.34h-6.643q-.464 0-.82.34T29.75-40l-.857 11.43v.14q-.036.43.286.716t.75.285h8.713q.428 0 .75-.284t.286-.715zm27.106 16.68q0 2.607-1.643 2.607H40q.464 0 .786-.34t.285-.803l-.713-9.143q-.036-.463-.393-.802t-.82-.34h-9.715q-.466 0-.823.34t-.393.803l-.714 9.144q-.036.465.286.804t.785.34H3.43q-1.644 0-1.644-2.608 0-1.93.928-4.143L17.607-53.18q.286-.677.93-1.177t1.356-.5H32q-.464 0-.82.34t-.394.803l-.536 6.857q-.036.5.286.82t.785.323h5.93q.464 0 .786-.322t.285-.82l-.534-6.858q-.036-.465-.393-.804t-.822-.34h12.11q.713 0 1.356.5t.928 1.18l14.893 37.285q.93 2.214.93 4.143z","DOWNLOAD":"M45.714-16q0-.93-.678-1.607t-1.607-.68-1.61.68T41.144-16t.678 1.607 1.61.68 1.606-.68.678-1.607zm9.143 0q0-.93-.678-1.607t-1.61-.68-1.606.68T50.286-16t.678 1.607 1.607.68 1.61-.68.677-1.607zm4.572-8v11.43q0 1.427-1 2.427t-2.43 1H3.43q-1.43 0-2.43-1T0-12.57V-24q0-1.43 1-2.43t2.43-1h16.606l4.82 4.86q2.073 2 4.858 2t4.857-2l4.86-4.86H56q1.43 0 2.43 1t1 2.43zM47.82-44.32q.61 1.463-.5 2.5l-16 16q-.64.677-1.606.677t-1.607-.678l-16-16q-1.107-1.037-.5-2.5.607-1.394 2.107-1.394h9.143v-16q0-.93.68-1.607t1.606-.68h9.143q.928 0 1.607.68t.678 1.606v16h9.144q1.5 0 2.107 1.393z","ARROW_CIRCLE_O_DOWN":"M40-30.857q0 .428-.357.857L28.25-18.607q-.393.32-.82.32t-.823-.32L15.18-30.037q-.537-.57-.25-1.25Q15.213-32 16-32h6.857v-12.57q0-.5.322-.823t.82-.32h6.857q.5 0 .822.32t.32.822V-32h6.857q.5 0 .822.32t.32.823zM27.43-51.43q-5.287 0-9.75 2.61t-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32t-2.607-9.75-7.07-7.07-9.75-2.61zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ARROW_CIRCLE_O_UP":"M39.93-32.714q-.287.714-1.073.714H32v12.57q0 .5-.32.823t-.823.32H24q-.5 0-.82-.32t-.323-.822V-32H16q-.5 0-.82-.32t-.323-.823q0-.428.357-.857l11.393-11.393q.393-.32.822-.32t.82.32l11.43 11.43q.534.57.25 1.25zM27.43-51.43q-5.287 0-9.75 2.61t-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32t-2.607-9.75-7.07-7.07-9.75-2.61zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","INBOX":"M36.536-29.714H47.82q-.034-.107-.088-.286t-.09-.286L40.073-48H14.785L7.214-30.286q-.035.072-.09.286t-.088.286H18.32l3.394 6.857h11.43zm18.32 1.07v17.215q0 .93-.677 1.61t-1.61.677H2.287q-.93 0-1.607-.678T0-11.43v-17.213q0-2.214.893-4.393l8.5-19.714q.357-.893 1.303-1.5t1.875-.607h29.716q.928 0 1.875.607t1.304 1.5l8.5 19.714q.893 2.18.893 4.393z","PLAY_CIRCLE_O":"M42.286-32q0 1.32-1.143 1.964l-19.43 11.43q-.534.32-1.142.32-.57 0-1.14-.285-1.144-.68-1.144-2v-22.86q0-1.32 1.143-2 1.177-.64 2.284.037l19.43 11.43q1.142.642 1.142 1.963zm4.57 0q0-5.286-2.606-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ROTATE_RIGHT":"M54.857-54.857v16q0 .928-.678 1.607t-1.61.68h-16q-1.5 0-2.106-1.43-.607-1.393.5-2.464l4.93-4.93q-5.287-4.892-12.465-4.892-3.716 0-7.09 1.447t-5.84 3.91-3.91 5.84T9.142-32t1.446 7.09 3.91 5.84 5.84 3.91 7.09 1.446q4.25 0 8.034-1.857t6.393-5.25q.25-.36.822-.43.5 0 .89.32L48.465-16q.322.286.34.732t-.268.804q-3.893 4.714-9.43 7.303T27.43-4.57q-5.573 0-10.644-2.18t-8.75-5.857-5.857-8.75T0-32t2.18-10.643 5.856-8.75 8.75-5.857 10.643-2.18q5.25 0 10.16 1.984t8.73 5.59l4.644-4.608q1.036-1.107 2.5-.5 1.393.607 1.393 2.107z","REFRESH":"M53.964-26.286q0 .18-.035.25-2.287 9.572-9.573 15.518T27.287-4.57q-5.216 0-10.09-1.966T8.5-12.143L3.893-7.536q-.68.68-1.607.68T.68-7.537 0-9.143v-16q0-.928.68-1.607t1.606-.68h16q.928 0 1.607.68t.678 1.607-.677 1.607L15-18.643q2.536 2.357 5.75 3.643t6.68 1.286q4.784 0 8.927-2.322T43-22.43q.393-.606 1.893-4.177.286-.822 1.07-.822h6.858q.466 0 .805.34t.34.804zm.893-28.57v16q0 .927-.678 1.606t-1.61.68h-16q-.927 0-1.606-.68t-.678-1.607.678-1.607l4.93-4.93q-5.287-4.892-12.465-4.892-4.787 0-8.93 2.322t-6.643 6.393q-.393.606-1.893 4.177-.285.822-1.07.822H1.785q-.465 0-.804-.34t-.34-.804v-.25q2.322-9.572 9.644-15.518T27.43-59.43q5.213 0 10.14 1.984t8.75 5.59l4.644-4.608q.68-.68 1.607-.68t1.61.68.677 1.607z","LIST_ALT":"M13.714-21.714v2.285q0 .466-.34.805t-.803.34h-2.284q-.465 0-.804-.34t-.34-.804v-2.284q0-.465.34-.804t.804-.34h2.285q.466 0 .805.34t.34.804zm0-9.143v2.286q0 .463-.34.802t-.803.34h-2.284q-.465 0-.804-.34t-.34-.803v-2.287q0-.464.34-.804t.804-.34h2.285q.466 0 .805.34t.34.803zm0-9.143v2.286q0 .464-.34.803t-.803.34h-2.284q-.465 0-.804-.34t-.34-.804V-40q0-.464.34-.804t.804-.34h2.285q.466 0 .805.34t.34.804zm41.143 18.286v2.285q0 .466-.34.805t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-2.284q0-.465.34-.804t.804-.34h34.284q.465 0 .804.34t.34.804zm0-9.143v2.286q0 .463-.34.802t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-2.287q0-.464.34-.804t.804-.34h34.284q.465 0 .804.34t.34.803zm0-9.143v2.286q0 .464-.34.803t-.803.34H19.43q-.466 0-.805-.34t-.34-.804V-40q0-.464.34-.804t.804-.34h34.284q.465 0 .804.34t.34.804zm4.572 25.143V-44.57q0-.466-.34-.805t-.804-.34H5.714q-.464 0-.803.34t-.34.804v29.713q0 .464.34.803t.804.34h52.572q.464 0 .803-.34t.34-.803zM64-53.714v38.857q0 2.357-1.68 4.036t-4.034 1.677H5.714q-2.357 0-4.035-1.678T0-14.858v-38.857q0-2.357 1.68-4.036t4.034-1.68h52.572q2.357 0 4.035 1.68T64-53.714z","LOCK":"M11.43-36.57h18.284v-6.86q0-3.784-2.678-6.463T20.57-52.57t-6.463 2.677-2.678 6.464v6.86zm29.713 3.427v20.572q0 1.427-1 2.427t-2.43 1H3.43q-1.43 0-2.43-1T0-12.57v-20.573q0-1.428 1-2.428t2.43-1h1.14v-6.86q0-6.57 4.716-11.284T20.57-59.43t11.287 4.716T36.57-43.43v6.86h1.144q1.43 0 2.43 1t1 2.427z","FLAG":"M11.43-54.857q0 2.57-2.287 3.928v45.216q0 .464-.34.803T8-4.57H5.714q-.464 0-.803-.34t-.34-.804V-50.93q-2.284-1.356-2.284-3.927 0-1.893 1.34-3.232t3.23-1.34 3.233 1.34 1.34 3.233zM64-52.57v27.25q0 .89-.446 1.374t-1.41.982q-7.68 4.143-13.18 4.143-2.178 0-4.41-.787T40.68-21.32t-4.126-1.716-5.09-.785q-6.857 0-16.57 5.213-.608.32-1.18.32-.928 0-1.607-.677t-.678-1.607v-26.5q0-1.144 1.106-1.966.75-.5 2.82-1.535 8.43-4.287 15.037-4.287 3.82 0 7.143 1.036t7.82 3.14q1.358.68 3.144.68 1.93 0 4.196-.75t3.93-1.68 3.142-1.677 1.946-.75q.93 0 1.607.678t.68 1.61z","HEADPHONES":"M59.43-32.357q0 5.928-2.144 11.214l-.715 1.75-6.606 1.18q-.785 2.963-3.232 4.874t-5.59 1.91v1.144q0 .5-.32.822t-.822.32h-2.286q-.5 0-.82-.32t-.323-.822v-20.57q0-.5.323-.823t.82-.32H40q.5 0 .82.32t.323.823v1.143q2.536 0 4.643 1.268t3.32 3.41l2.43-.428q1.035-3.393 1.035-6.893 0-5.286-3.14-9.964t-8.448-7.466-11.268-2.785-11.268 2.784T10-42.32t-3.143 9.963q0 3.5 1.036 6.893l2.428.428q1.216-2.143 3.323-3.41t4.643-1.268v-1.143q0-.5.32-.822t.823-.32h2.284q.5 0 .822.32t.32.823v20.57q0 .5-.32.823t-.822.32H19.43q-.5 0-.823-.32t-.32-.822v-1.143q-3.144 0-5.59-1.91t-3.233-4.874l-6.607-1.18-.714-1.75Q0-26.428 0-32.356 0-37.75 2.393-42.75t6.393-8.66 9.5-5.84 11.428-2.18 11.43 2.18 9.5 5.84 6.392 8.66 2.393 10.393z","VOLUME_OFF":"M27.43-51.43v38.86q0 .927-.68 1.606t-1.607.678-1.607-.678L11.643-22.857H2.286q-.93 0-1.607-.68T0-25.142v-13.714q0-.93.68-1.607t1.606-.68h9.357l11.893-11.892q.678-.678 1.607-.678t1.607.678.68 1.607z","VOLUME_DOWN":"M27.43-51.43v38.86q0 .927-.68 1.606t-1.607.678-1.607-.678L11.643-22.857H2.286q-.93 0-1.607-.68T0-25.142v-13.714q0-.93.68-1.607t1.606-.68h9.357l11.893-11.892q.678-.678 1.607-.678t1.607.678.68 1.607zM41.142-32q0 2.714-1.518 5.054t-4.018 3.34q-.357.177-.893.177-.928 0-1.607-.66t-.678-1.624q0-.75.427-1.268t1.036-.893 1.214-.82 1.036-1.27T36.57-32t-.427-2.036-1.036-1.268-1.214-.82-1.036-.894-.428-1.268q0-.964.677-1.625t1.607-.66q.536 0 .893.177 2.5.964 4.018 3.322T41.143-32z","VOLUME_UP":"M27.43-51.43v38.86q0 .927-.68 1.606t-1.607.678-1.607-.678L11.643-22.857H2.286q-.93 0-1.607-.68T0-25.142v-13.714q0-.93.68-1.607t1.606-.68h9.357l11.893-11.892q.678-.678 1.607-.678t1.607.678.68 1.607zM41.142-32q0 2.714-1.518 5.054t-4.018 3.34q-.357.177-.893.177-.928 0-1.607-.66t-.678-1.624q0-.75.427-1.268t1.036-.893 1.214-.82 1.036-1.27T36.57-32t-.427-2.036-1.036-1.268-1.214-.82-1.036-.894-.428-1.268q0-.964.677-1.625t1.607-.66q.536 0 .893.177 2.5.964 4.018 3.322T41.143-32zm9.143 0q0 5.464-3.036 10.09t-8.036 6.73q-.464.18-.893.18-.963 0-1.64-.68T36-17.285q0-1.393 1.393-2.107 2-1.036 2.714-1.57 2.643-1.93 4.125-4.84T45.714-32t-1.482-6.196-4.125-4.84q-.714-.535-2.714-1.57Q36-45.322 36-46.715q0-.93.68-1.607t1.606-.68q.464 0 .928.18 5 2.106 8.036 6.73T50.286-32zm9.143 0q0 8.214-4.537 15.09T42.82-6.787q-.463.18-.927.18-.93 0-1.607-.68t-.68-1.607Q39.607-10.18 41-11q.25-.143.804-.375t.803-.375q1.643-.893 2.93-1.82 4.392-3.25 6.856-8.11T54.857-32t-2.464-10.32-6.857-8.11q-1.286-.927-2.93-1.82-.25-.143-.802-.375T41-53q-1.393-.82-1.393-2.107 0-.93.68-1.607t1.606-.68q.464 0 .928.18 7.537 3.25 12.073 10.125T59.43-32z","QRCODE":"M13.714-22.857v4.57h-4.57v-4.57h4.57zm0-27.43v4.573h-4.57v-4.572h4.57zm27.43 0v4.573H36.57v-4.572h4.573zM4.57-13.75h13.716v-13.68H4.57v13.68zm0-27.393h13.716v-13.714H4.57v13.714zm27.43 0h13.714v-13.714H32v13.714zM22.857-32v22.857H0V-32h22.857zm18.286 18.286v4.57H36.57v-4.57h4.573zm9.143 0v4.57h-4.572v-4.57h4.572zm0-18.286v13.714H36.57v-4.57H32v13.713h-4.57V-32h13.713v4.57h4.57V-32h4.573zm-27.43-27.43v22.86H0v-22.86h22.857zm27.43 0v22.86H27.43v-22.86h22.856z","BARCODE":"M2.25-9.143H0V-59.43h2.25v50.287zM4.5-9.18H3.357v-50.25H4.5v50.25zm3.357 0H6.75v-50.25h1.107v50.25zm5.607 0h-1.107v-50.25h1.107v50.25zm5.607 0h-2.213v-50.25h2.214v50.25zm4.5 0h-1.106v-50.25h1.107v50.25zm2.25 0h-1.106v-50.25h1.107v50.25zm2.25 0h-1.106v-50.25h1.107v50.25zm5.61 0h-2.25v-50.25h2.25v50.25zm5.606 0h-2.25v-50.25h2.25v50.25zm4.5 0h-2.25v-50.25h2.25v50.25zm4.5 0h-2.25v-50.25h2.25v50.25zm3.357 0h-2.25v-50.25h2.25v50.25zm6.75 0h-3.357v-50.25h3.357v50.25zm2.25 0H59.5v-50.25h1.143v50.25zM64-9.142h-2.25V-59.43H64v50.287z","TAG":"M16-48q0-1.893-1.34-3.232t-3.23-1.34-3.234 1.34T6.856-48t1.34 3.232 3.233 1.34 3.23-1.34T16-48zm38.107 20.57q0 1.894-1.32 3.216L35.25-6.644Q33.857-5.32 32-5.32q-1.893 0-3.214-1.323L3.25-32.213Q1.893-33.537.946-35.822T0-40v-14.857q0-1.857 1.357-3.214t3.214-1.36h14.86q1.89 0 4.177.948t3.643 2.303l25.536 25.5q1.32 1.394 1.32 3.25z","TAGS":"M16-48q0-1.893-1.34-3.232t-3.23-1.34-3.234 1.34T6.856-48t1.34 3.232 3.233 1.34 3.23-1.34T16-48zm38.107 20.57q0 1.894-1.32 3.216L35.25-6.644Q33.857-5.32 32-5.32q-1.893 0-3.214-1.323L3.25-32.213Q1.893-33.537.946-35.822T0-40v-14.857q0-1.857 1.357-3.214t3.214-1.36h14.86q1.89 0 4.177.948t3.643 2.303l25.536 25.5q1.32 1.394 1.32 3.25zm13.714 0q0 1.894-1.32 3.216L48.964-6.644Q47.57-5.32 45.714-5.32q-1.285 0-2.107-.5t-1.893-1.61L58.5-24.213q1.32-1.322 1.32-3.215 0-1.856-1.32-3.25l-25.536-25.5q-1.357-1.356-3.643-2.302t-4.177-.947h8q1.893 0 4.178.948t3.644 2.303L66.5-30.68q1.32 1.394 1.32 3.25z","BOOK":"M58.536-46.93q1.428 2.037.643 4.61L49.356-9.965q-.678 2.285-2.732 3.84T42.25-4.572H9.286q-2.75 0-5.304-1.912T.43-11.18q-.86-2.39-.073-4.534 0-.143.107-.965T.607-18q.036-.286-.107-.768t-.107-.696q.07-.393.286-.75t.588-.84.59-.84q.82-1.356 1.606-3.267t1.072-3.27q.107-.356.018-1.07t-.018-1q.107-.393.607-1t.607-.82q.75-1.287 1.5-3.287t.893-3.214q.036-.323-.09-1.144t.018-1q.144-.465.787-1.09t.786-.803q.678-.93 1.518-3.018t.983-3.446q.036-.287-.107-.912t-.072-.947q.072-.284.322-.64t.643-.823.606-.75q.285-.428.59-1.09t.535-1.25.572-1.285.697-1.143.945-.84 1.286-.41 1.697.196l-.036.107q1.36-.322 1.823-.322H48.82q2.644 0 4.073 2t.643 4.644L43.75-20.43q-1.286 4.25-2.554 5.484t-4.59 1.232H5.572q-.963 0-1.356.535-.393.573-.035 1.537.856 2.5 5.14 2.5h32.966q1.035 0 2-.553t1.25-1.483L56.25-46.43q.25-.784.18-2.034 1.356.535 2.106 1.535zm-38 .073q-.143.464.07.803t.715.34h21.716q.464 0 .91-.34t.59-.803l.75-2.286q.143-.464-.072-.803t-.714-.34H22.786q-.465 0-.91.34t-.59.803zm-2.965 9.143q-.14.464.073.803t.714.34H40.07q.466 0 .912-.34t.59-.804L42.32-40q.142-.464-.072-.804t-.714-.34H19.82q-.463 0-.91.34t-.59.804z","BOOKMARK":"M41.57-59.43q.823 0 1.573.323 1.178.464 1.875 1.464t.696 2.214v46.037q0 1.214-.696 2.214t-1.875 1.466q-.68.285-1.572.285-1.713 0-2.963-1.14l-15.75-15.144L7.107-6.57Q5.82-5.394 4.143-5.394q-.822 0-1.572-.32Q1.394-6.18.697-7.18T0-9.392V-55.43q0-1.213.696-2.213t1.875-1.464q.75-.322 1.573-.322H41.57z","PRINT":"M13.714-9.143h32v-9.143h-32v9.143zm0-22.857h32v-13.714H40q-1.43 0-2.43-1t-1-2.43v-5.713H13.715V-32zm41.143 2.286q0-.93-.678-1.607T52.57-32t-1.606.68-.678 1.606.678 1.607 1.607.678 1.61-.677.677-1.607zm4.572 0v14.857q0 .464-.34.803t-.804.34h-8V-8q0 1.43-1 2.43t-2.43 1H12.572q-1.427 0-2.427-1t-1-2.43v-5.714h-8q-.464 0-.804-.34T0-14.857v-14.857q0-2.822 2.018-4.84t4.84-2.017h2.285V-56q0-1.43 1-2.43t2.428-1h24q1.43 0 3.144.716T42.43-57l5.427 5.43q1 1 1.714 2.713t.716 3.143v9.143h2.285q2.823 0 4.84 2.016t2.02 4.84z","CAMERA":"M34.286-40q4.25 0 7.268 3.018t3.017 7.268-3.016 7.268-7.268 3.017-7.268-3.016T24-29.714t3.018-7.268T34.286-40zM59.43-54.857q3.784 0 6.463 2.678t2.678 6.466v32q0 3.785-2.677 6.464T59.43-4.57H9.142q-3.786 0-6.464-2.68T0-13.714v-32Q0-49.5 2.68-52.18t6.463-2.677h8l1.82-4.857q.68-1.75 2.483-3.018T25.143-64H43.43q1.89 0 3.695 1.268t2.482 3.018l1.822 4.857h8zM34.285-13.714q6.607 0 11.303-4.697t4.696-11.304-4.697-11.304-11.304-4.696-11.304 4.696-4.696 11.304 4.696 11.303 11.304 4.696z","FONT":"M25.893-44.036L19.82-27.964q1.18 0 4.876.07t5.733.073q.677 0 2.034-.073-3.107-9.036-6.57-16.143zM0-4.57l.07-2.823q.823-.25 2-.446t2.037-.374 1.768-.518 1.59-1.036T8.57-11.57l8.466-22 10-25.86h4.571q.286.5.393.75l7.32 17.144q1.18 2.786 3.787 9.197t4.072 9.804q.534 1.215 2.07 5.16t2.57 6.02q.716 1.606 1.25 2.035.68.534 3.144 1.052t3 .732q.215 1.357.215 2.036 0 .143-.02.464t-.017.465q-2.25 0-6.786-.287t-6.82-.286q-2.716 0-7.68.25t-6.357.286q0-1.536.143-2.786l4.678-1q.037 0 .448-.09t.553-.124.52-.16.535-.233.393-.286.32-.393.09-.5q0-.57-1.107-3.445t-2.57-6.34-1.5-3.57l-16.07-.072q-.93 2.07-2.734 6.982t-1.803 5.804q0 .784.5 1.338t1.553.875 1.733.482 2.034.304 1.465.14q.034.68.034 2.073 0 .32-.07.964-2.073 0-6.233-.357t-6.23-.357q-.287 0-.948.143t-.768.143q-2.857.5-6.714.5z","BOLD":"M19.82-9.68q2.644 1.144 5 1.144 13.43 0 13.43-11.964 0-4.07-1.464-6.43-.965-1.57-2.197-2.64t-2.41-1.662-2.876-.893-3-.375-3.375-.07q-2.61 0-3.61.356 0 1.893-.016 5.678t-.018 5.643q0 .286-.036 2.41t-.018 3.447.16 2.982.43 2.375zm-.5-26.64q1.5.25 3.894.25 2.93 0 5.107-.466t3.93-1.59 2.66-3.195.91-5.073q0-2.5-1.034-4.375t-2.822-2.928-3.857-1.554-4.428-.5q-1.787 0-4.644.464 0 1.786.143 5.393t.14 5.43q0 .963-.016 2.856t-.018 2.82q0 1.644.035 2.466zM0-4.57l.07-3.36q.537-.14 3.037-.57t3.786-.964q.25-.43.446-.965t.303-1.195.196-1.16.106-1.34.018-1.214v-2.339q0-35.07-.785-36.606-.144-.285-.787-.518t-1.59-.392-1.767-.25-1.732-.16-1.09-.108L.07-58.68q3.5-.07 12.144-.41t13.322-.34q.82 0 2.446.02t2.41.017q2.5 0 4.876.464t4.59 1.5 3.856 2.537 2.643 3.732 1 4.91q0 1.857-.59 3.41t-1.392 2.572-2.304 2.054-2.606 1.607-3 1.428q5.5 1.25 9.16 4.787t3.662 8.857q0 3.572-1.25 6.41t-3.34 4.662-4.928 3.053-5.84 1.73-6.285.5q-1.572 0-4.714-.106t-4.716-.107Q15.43-5.393 8.25-5T0-4.57z","ITALIC":"M0-4.643L.607-7.68q.214-.07 2.91-.766T7.5-9.786q1-1.25 1.464-3.607.036-.25 2.215-10.32t4.07-19.412 1.857-10.59v-.892q-.857-.464-1.946-.66t-2.48-.287-2.073-.196l.68-3.68q1.177.073 4.284.234t5.34.25 4.304.09q1.715 0 3.518-.09t4.322-.25 3.517-.233q-.177 1.394-.677 3.18-1.072.357-3.625 1.018t-3.875 1.196q-.286.68-.5 1.518t-.322 1.43-.266 1.624-.233 1.5q-.963 5.285-3.124 14.982T21.18-20.286q-.073.322-.466 2.072T20-15t-.57 2.982-.216 2.054l.036.643q.607.14 6.607 1.106-.107 1.57-.57 3.535-.394 0-1.162.055t-1.16.054q-1.036 0-3.108-.36t-3.07-.356q-4.93-.07-7.358-.07-1.823 0-5.11.32T0-4.643z","TEXT_HEIGHT":"M62.286-13.714q1.178 0 1.5.66t-.393 1.59l-4.5 5.785q-.714.93-1.75.93t-1.75-.93l-4.5-5.784q-.714-.93-.393-1.59t1.5-.66h2.857v-36.572H52q-1.18 0-1.5-.66t.393-1.59l4.5-5.785q.714-.93 1.75-.93t1.75.93l4.5 5.784q.714.93.393 1.59t-1.5.66H59.43v36.572h2.856zM2.893-59.394l1.928.965q.43.18 7.537.18 1.572 0 4.714-.07t4.716-.073q1.285 0 3.84.018t3.838.018H39.93q.213 0 .75.018t.73 0 .572-.106.625-.322.536-.625l1.5-.036q.143 0 .5.02t.5.017q.07 4 .07 12 0 2.857-.177 3.893-1.393.5-2.43.643-.892-1.572-1.927-4.572-.11-.32-.394-1.713t-.518-2.625T40-53.036q-.214-.285-.43-.446t-.552-.214-.464-.09-.643-.018-.59.018q-.606 0-2.374-.018t-2.66-.017-2.286.07-2.536.214q-.32 2.893-.285 4.857 0 3.36.07 13.86t.07 16.25q0 .57-.088 2.552t0 3.268.447 2.464q1.427.75 4.427 1.518t4.286 1.34Q36.57-6 36.57-5.644q0 .5-.106 1.036l-1.214.036q-2.714.07-7.786-.287t-7.393-.357q-1.784 0-5.39.32t-5.43.323q-.107-1.823-.107-1.86v-.32q.607-.964 2.196-1.536t3.517-1.035 2.786-.966q.678-1.5.678-13.678 0-3.607-.106-10.822t-.107-10.82v-4.18q0-.07.018-.553t.018-.892-.036-.91T18-53t-.18-.5q-.39-.43-5.784-.43-1.18 0-3.322.43t-2.857.93q-.678.463-1.214 2.588t-1.125 3.964T2-44.108q-1.5-.928-2-1.57v-13.68z","TEXT_WIDTH":"M2.893-59.393l1.928.964q.43.18 7.537.18 1.572 0 4.714-.07t4.716-.073q2.5 0 8.803-.036t10.874-.016 8.822.16q1.178.036 2-1.107l1.5-.036q.143 0 .5.02t.5.017q.07 4 .07 12 0 2.857-.177 3.893-1.394.5-2.43.643-.893-1.572-1.93-4.572-.106-.32-.39-1.695t-.537-2.625-.25-1.286q-.357-.464-.964-.678-.18-.072-2.36-.072-1.07 0-3.32-.035t-3.68-.037-3.356.07-3.428.25q-.322 2.894-.286 4.858l.036 5.43v-1.857q0 1.964.035 5.5t.055 6.428.018 5.466q0 .57-.09 2.553t0 3.267.447 2.464q1.43.75 4.43 1.52t4.284 1.34q.18 1.427.18 1.784 0 .5-.108 1.036l-1.215.036q-2.713.07-7.784-.286t-7.393-.357q-1.786 0-5.393.32t-5.43.323q-.106-1.822-.106-1.857v-.323q.607-.964 2.197-1.536t3.52-1.034 2.784-.965q.25-.57.41-2.64t.215-5.198.053-5.536-.018-5.482-.018-3.178q0-.25-.09-.768t-.088-.804q0-.25.016-1.57t.036-2.608 0-2.732-.107-2.41-.232-1.144q-.393-.43-5.786-.43-1.464 0-5.82.484t-4.93.875q-.678.427-1.214 2.552t-1.125 3.982T2-44.106q-1.5-.93-2-1.573v-13.677zm43.893 45.786q.428 0 1.5.696t2.053 1.48 2.124 1.75 1.286 1.073q.93.75.93 1.75t-.93 1.75q-.143.107-1.286 1.07t-2.125 1.75-2.054 1.483-1.5.697q-.465 0-.732-.375T45.696-1.5t-.09-1.196.055-1.18.054-.695H9.144q0 .07.052.695t.054 1.18T9.16-1.5 8.805-.482t-.733.375q-.427 0-1.5-.697T4.52-2.286t-2.125-1.75-1.286-1.07Q.18-5.857.18-6.857t.927-1.75q.143-.108 1.286-1.073t2.125-1.75 2.053-1.48 1.5-.697q.466 0 .734.375t.357 1.018.09 1.196-.054 1.18-.053.695h36.57q0-.07-.052-.696t-.053-1.178.09-1.196.357-1.018.732-.375z","ALIGN_LEFT":"M64-16v4.57q0 .93-.68 1.61t-1.606.677H2.286q-.93 0-1.607-.678T0-11.43V-16q0-.93.68-1.607t1.606-.68h59.428q.93 0 1.607.68T64-16zM50.286-29.714v4.57q0 .93-.68 1.608t-1.606.68H2.286q-.93 0-1.607-.68T0-25.143v-4.57q0-.93.68-1.608T2.285-32H48q.93 0 1.607.68t.68 1.606zM59.43-43.43v4.573q0 .928-.68 1.607t-1.607.68H2.286q-.93 0-1.607-.68T0-38.857v-4.572q0-.927.68-1.606t1.606-.678h54.857q.928 0 1.607.678t.68 1.607zM45.713-57.142v4.572q0 .927-.678 1.606t-1.607.678H2.285q-.93 0-1.607-.678T0-52.57v-4.573q0-.928.68-1.607t1.606-.68H43.43q.927 0 1.606.68t.678 1.607z","ALIGN_CENTER":"M64-16v4.57q0 .93-.68 1.61t-1.606.677H2.286q-.93 0-1.607-.678T0-11.43V-16q0-.93.68-1.607t1.606-.68h59.428q.93 0 1.607.68T64-16zM50.286-29.714v4.57q0 .93-.68 1.608t-1.606.68H16q-.93 0-1.607-.68t-.68-1.607v-4.57q0-.93.68-1.608T16-32h32q.93 0 1.607.68t.68 1.606zM59.43-43.43v4.573q0 .928-.68 1.607t-1.607.68H6.857q-.928 0-1.607-.68t-.68-1.607v-4.572q0-.927.68-1.606t1.607-.678h50.286q.928 0 1.607.678t.68 1.607zM45.713-57.142v4.572q0 .927-.678 1.606t-1.607.678H20.57q-.927 0-1.606-.678t-.678-1.607v-4.573q0-.928.678-1.607t1.607-.68h22.86q.927 0 1.606.68t.678 1.607z","ALIGN_RIGHT":"M64-16v4.57q0 .93-.68 1.61t-1.606.677H2.286q-.93 0-1.607-.678T0-11.43V-16q0-.93.68-1.607t1.606-.68h59.428q.93 0 1.607.68T64-16zm0-13.714v4.57q0 .93-.68 1.608t-1.606.68H16q-.93 0-1.607-.68t-.68-1.607v-4.57q0-.93.68-1.608T16-32h45.714q.93 0 1.607.68t.68 1.606zm0-13.715v4.573q0 .928-.68 1.607t-1.606.68H6.857q-.928 0-1.607-.68t-.68-1.607v-4.572q0-.927.68-1.606t1.607-.678h54.857q.93 0 1.607.678T64-43.43zm0-13.713v4.572q0 .927-.68 1.606t-1.606.678H20.57q-.927 0-1.606-.678t-.678-1.607v-4.573q0-.928.678-1.607t1.607-.68h41.144q.93 0 1.607.68t.68 1.607z","ALIGN_JUSTIFY":"M64-16v4.57q0 .93-.68 1.61t-1.606.677H2.286q-.93 0-1.607-.678T0-11.43V-16q0-.93.68-1.607t1.606-.68h59.428q.93 0 1.607.68T64-16zm0-13.714v4.57q0 .93-.68 1.608t-1.606.68H2.286q-.93 0-1.607-.68T0-25.143v-4.57q0-.93.68-1.608T2.285-32h59.428q.93 0 1.607.68t.68 1.606zm0-13.715v4.573q0 .928-.68 1.607t-1.606.68H2.286q-.93 0-1.607-.68T0-38.857v-4.572q0-.927.68-1.606t1.606-.678h59.428q.93 0 1.607.678T64-43.43zm0-13.713v4.572q0 .927-.68 1.606t-1.606.678H2.286q-.93 0-1.607-.678T0-52.57v-4.573q0-.928.68-1.607t1.606-.68h59.428q.93 0 1.607.68t.68 1.607z","LIST":"M9.143-17.143v6.857q0 .465-.34.804T8-9.142H1.143q-.464 0-.804-.34T0-10.286v-6.857q0-.464.34-.803t.803-.34H8q.464 0 .804.34t.34.803zm0-13.714V-24q0 .464-.34.804t-.803.34H1.143q-.464 0-.804-.34T0-24v-6.857q0-.464.34-.804t.803-.34H8q.464 0 .804.34t.34.803zm0-13.714v6.856q0 .464-.34.803T8-36.57H1.143q-.464 0-.804-.34T0-37.715v-6.857q0-.466.34-.805t.803-.34H8q.464 0 .804.34t.34.804zM64-17.144v6.857q0 .465-.34.804t-.803.34h-48q-.464 0-.803-.34t-.34-.804v-6.857q0-.464.34-.803t.803-.34h48q.464 0 .804.34t.34.803zM9.143-58.286v6.857q0 .466-.34.805t-.803.34H1.143q-.464 0-.804-.34T0-51.43v-6.856q0-.464.34-.803t.803-.34H8q.464 0 .804.34t.34.804zM64-30.856V-24q0 .464-.34.804t-.803.34h-48q-.464 0-.803-.34t-.34-.804v-6.857q0-.464.34-.804t.803-.34h48q.464 0 .804.34t.34.803zm0-13.715v6.856q0 .464-.34.803t-.803.34h-48q-.464 0-.803-.34t-.34-.804v-6.857q0-.466.34-.805t.803-.34h48q.464 0 .804.34t.34.804zm0-13.716v6.857q0 .466-.34.805t-.803.34h-48q-.464 0-.803-.34t-.34-.804v-6.856q0-.464.34-.803t.803-.34h48q.464 0 .804.34t.34.804z","OUTDENT":"M13.714-44.57V-24q0 .464-.34.804t-.803.34q-.5 0-.82-.323L1.464-33.463q-.32-.322-.32-.822t.32-.82L11.75-45.394q.32-.32.82-.32.466 0 .805.338t.34.804zM64-17.144v6.857q0 .465-.34.804t-.803.34H1.143q-.464 0-.804-.34T0-10.286v-6.857q0-.464.34-.803t.803-.34h61.714q.464 0 .804.34t.34.803zm0-13.714V-24q0 .464-.34.804t-.803.34H24q-.464 0-.804-.34t-.34-.804v-6.857q0-.464.34-.804T24-32h38.857q.464 0 .804.34t.34.803zm0-13.714v6.856q0 .464-.34.803t-.803.34H24q-.464 0-.804-.34t-.34-.804v-6.857q0-.466.34-.805t.804-.34h38.857q.464 0 .804.34t.34.804zm0-13.716v6.857q0 .466-.34.805t-.803.34H1.143q-.464 0-.804-.34T0-51.43v-6.856q0-.464.34-.803t.803-.34h61.714q.464 0 .804.34t.34.804z","INDENT":"M12.57-34.286q0 .5-.32.822L1.964-23.18q-.32.323-.82.323-.465 0-.805-.34T0-24v-20.57q0-.466.34-.805t.803-.34q.5 0 .82.322L12.25-35.107q.32.32.32.82zM64-17.143v6.857q0 .465-.34.804t-.803.34H1.143q-.464 0-.804-.34T0-10.286v-6.857q0-.464.34-.803t.803-.34h61.714q.464 0 .804.34t.34.803zm0-13.714V-24q0 .464-.34.804t-.803.34H24q-.464 0-.804-.34t-.34-.804v-6.857q0-.464.34-.804T24-32h38.857q.464 0 .804.34t.34.803zm0-13.714v6.856q0 .464-.34.803t-.803.34H24q-.464 0-.804-.34t-.34-.804v-6.857q0-.466.34-.805t.804-.34h38.857q.464 0 .804.34t.34.804zm0-13.716v6.857q0 .466-.34.805t-.803.34H1.143q-.464 0-.804-.34T0-51.43v-6.856q0-.464.34-.803t.803-.34h61.714q.464 0 .804.34t.34.804z","VIDEO_CAMERA":"M64-51.43v38.86q0 1.5-1.393 2.106-.464.178-.893.178-.964 0-1.607-.678L45.714-25.357v5.928q0 4.25-3.018 7.27T35.43-9.144H10.285q-4.25 0-7.268-3.018T0-19.43v-25.14q0-4.25 3.018-7.27t7.268-3.017H35.43q4.25 0 7.266 3.018t3.018 7.27v5.89l14.393-14.356q.643-.678 1.607-.678.43 0 .893.178Q64-52.93 64-51.43z","PICTURE_O":"M22.857-43.43q0 2.86-2 4.86t-4.857 2-4.857-2-2-4.86 2-4.856 4.857-2 4.857 2 2 4.857zM59.43-29.713v16H9.142v-6.857L20.57-32l5.716 5.714L44.57-44.57zm3.427-25.143H5.714q-.464 0-.803.34t-.34.803v43.428q0 .465.34.804t.804.34h57.143q.464 0 .804-.34t.34-.804v-43.428q0-.465-.34-.804t-.803-.34zm5.714 1.143v43.428q0 2.357-1.677 4.036t-4.036 1.68H5.714q-2.357 0-4.035-1.68T0-10.286v-43.428q0-2.357 1.68-4.036t4.034-1.68h57.143q2.357 0 4.036 1.68t1.678 4.036z","PENCIL":"M12.964-9.143l3.25-3.25-8.393-8.393-3.25 3.25v3.822h4.573v4.57h3.82zm18.68-33.143q0-.785-.787-.785-.357 0-.607.25L10.893-23.465q-.25.25-.25.607 0 .786.786.786.356 0 .606-.25l19.357-19.36q.25-.25.25-.606zm-1.93-6.857L44.57-34.286 14.858-4.57H0v-14.86zm24.393 3.43q0 1.892-1.32 3.213l-5.93 5.93L32-51.43l5.93-5.89q1.284-1.36 3.213-1.36 1.893 0 3.25 1.36l8.393 8.356q1.32 1.393 1.32 3.25z","MAP_MARKER":"M27.43-41.143q0-3.786-2.68-6.464t-6.464-2.68-6.465 2.68-2.677 6.464 2.678 6.464T18.287-32t6.464-2.68 2.68-6.463zm9.14 0q0 3.893-1.177 6.393l-13 27.643Q21.82-5.93 20.696-5.25t-2.41.68-2.41-.68-1.662-1.857L1.18-34.75Q0-37.25 0-41.143q0-7.57 5.357-12.928t12.93-5.36 12.927 5.36 5.357 12.927z","ADJUST":"M27.43-12.57v-38.86q-5.287 0-9.75 2.61t-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","TINT":"M18.286-22.857q0-1.286-.715-2.464-.034-.037-.552-.805t-.91-1.357-.894-1.572-.75-1.803q-.143-.572-.75-.572t-.75.573q-.25.82-.75 1.803t-.893 1.572-.91 1.357-.553.804q-.714 1.177-.714 2.463 0 1.893 1.34 3.232t3.23 1.34 3.233-1.34 1.34-3.232zM36.57-27.43q0 7.573-5.356 12.93T18.286-9.143 5.356-14.5 0-27.43q0-5.177 2.893-9.82.214-.32 2.232-3.232t3.607-5.393 3.554-6.357 2.964-7.197q.32-1.07 1.214-1.677t1.822-.607 1.84.607 1.195 1.678q1 3.323 2.966 7.198t3.553 6.357 3.606 5.393 2.233 3.232q2.89 4.536 2.89 9.82z","PENCIL_SQUARE_O":"M31.714-21.714l4.143-4.143-5.428-5.43-4.144 4.144v2h3.428v3.43h2zM47.43-47.43q-.573-.57-1.18.037l-12.5 12.5q-.607.607-.036 1.18t1.18-.037l12.5-12.5q.606-.607.035-1.18zm2.856 21.216v6.785q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02H40q2.25 0 4.18.894.534.25.64.822.11.607-.32 1.035l-1.75 1.75q-.5.5-1.143.287-.82-.214-1.607-.214H10.286q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036v-4.5q0-.463.322-.784L48.32-27q.537-.536 1.25-.25t.716 1.036zm-3.43-26.357l10.287 10.284-24 24H22.857V-28.57zm15.858 4.713L59.43-44.57 49.142-54.858l3.286-3.286q1-1 2.427-1t2.43 1l5.427 5.43q1 1 1 2.427t-1 2.43z","SHARE_SQUARE_O":"M50.286-28.68v9.25q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02h9.107q.464 0 .803.34t.34.804q0 .965-.93 1.143-2.75.93-4.75 2.143-.356.143-.57.143h-4q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036v-7.64q0-.68.643-1.037 1-.464 1.93-1.322.57-.57 1.25-.284.75.32.75 1.035zm8.464-17.713L45.036-32.68q-.643.68-1.607.68-.43 0-.894-.18-1.393-.606-1.393-2.106v-6.857H35.43q-11.537 0-15.644 4.68-4.25 4.892-2.643 16.892.107.82-.714 1.213-.287.07-.43.07-.57 0-.93-.463-.356-.5-.75-1.107t-1.41-2.447-1.767-3.553-1.375-4.072-.625-4.356q0-1.75.125-3.25t.5-3.214 1-3.143 1.678-2.91 2.447-2.643 3.375-2.197 4.446-1.732 5.697-1.09 7.02-.392h5.713v-6.857q0-1.5 1.393-2.107Q43-64 43.43-64q.927 0 1.606.68L58.75-49.608q.68.678.68 1.607t-.68 1.607z","CHECK_SQUARE_O":"M50.286-30.786v11.357q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02H40q2.25 0 4.18.894.534.25.64.822.11.607-.32 1.035l-1.75 1.75q-.357.36-.82.36-.11 0-.323-.073-.82-.214-1.607-.214H10.286q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036v-9.07q0-.464.322-.786l2.285-2.285q.36-.36.823-.36.214 0 .428.11.716.284.716 1.034zm8.25-17.464L29.464-19.18q-.857.86-2.035.86t-2.037-.86L10.036-34.535q-.857-.857-.857-2.035t.856-2.037l3.928-3.93q.857-.856 2.036-.856t2.036.857l9.393 9.393L50.535-56.25q.857-.857 2.035-.857t2.037.857l3.93 3.93q.856.856.856 2.034t-.857 2.036z","ARROWS":"M64-32q0 .93-.68 1.607l-9.14 9.143q-.68.68-1.61.68t-1.606-.68-.678-1.607v-4.572H36.57v13.716h4.573q.928 0 1.607.678t.68 1.607-.68 1.61L33.607-.68Q32.93 0 32 0t-1.607-.68L21.25-9.82q-.68-.68-.68-1.61t.68-1.606 1.607-.678h4.572V-27.43H13.713v4.573q0 .928-.678 1.607t-1.607.68-1.61-.68L.68-30.393Q0-31.07 0-32t.68-1.607l9.14-9.143q.68-.68 1.61-.68t1.606.68.678 1.607v4.572H27.43v-13.716h-4.573q-.928 0-1.607-.678t-.68-1.607.68-1.61l9.143-9.14Q31.07-64 32-64t1.607.68l9.143 9.14q.68.68.68 1.61t-.68 1.606-1.607.678H36.57v13.715h13.716v-4.573q0-.928.678-1.607t1.607-.68 1.61.68l9.14 9.143Q64-32.93 64-32z","STEP_BACKWARD":"M34.964-58.964q.68-.68 1.143-.465t.464 1.144v52.572q0 .928-.463 1.143t-1.143-.466L9.607-30.393q-.32-.32-.464-.678v24.213q0 .928-.68 1.607t-1.606.68h-4.57q-.93 0-1.608-.68T0-6.857v-50.286q0-.928.68-1.607t1.606-.68h4.57q.93 0 1.608.68t.68 1.607v24.214q.142-.39.463-.677z","FAST_BACKWARD":"M62.393-58.964q.678-.68 1.143-.465T64-58.285v52.572q0 .928-.464 1.143t-1.143-.466L37.036-30.393q-.322-.32-.465-.678v25.356q0 .928-.463 1.143t-1.143-.466L9.607-30.393q-.32-.32-.464-.678v24.213q0 .928-.68 1.607t-1.606.68h-4.57q-.93 0-1.608-.68T0-6.857v-50.286q0-.928.68-1.607t1.606-.68h4.57q.93 0 1.608.68t.68 1.607v24.214q.142-.39.463-.677l25.357-25.357q.68-.68 1.143-.465t.464 1.144v25.357q.144-.39.466-.677z","BACKWARD":"M57.82-58.964q.68-.68 1.144-.465t.465 1.144v52.572q0 .928-.466 1.143t-1.143-.466L32.465-30.393q-.285-.32-.464-.678v25.356q0 .928-.464 1.143t-1.143-.466L5.036-30.393q-.68-.678-.68-1.607t.68-1.607l25.357-25.357q.678-.68 1.143-.465T32-58.285v25.357q.18-.39.464-.677z","PLAY":"M49.43-30.893L2-4.536q-.82.465-1.41.107T0-5.713v-52.572q0-.928.59-1.285t1.41.106l47.43 26.357q.82.464.82 1.107t-.82 1.107z","PAUSE":"M54.857-57.143v50.286q0 .928-.678 1.607t-1.61.68H34.287q-.93 0-1.607-.68T32-6.857v-50.286q0-.928.68-1.607t1.606-.68H52.57q.93 0 1.61.68t.677 1.607zm-32 0v50.286q0 .928-.678 1.607t-1.61.68H2.287q-.93 0-1.607-.68T0-6.857v-50.286q0-.928.68-1.607t1.606-.68H20.57q.93 0 1.61.68t.677 1.607z","STOP":"M54.857-57.143v50.286q0 .928-.678 1.607t-1.61.68H2.287q-.93 0-1.607-.68T0-6.857v-50.286q0-.928.68-1.607t1.606-.68H52.57q.93 0 1.61.68t.677 1.607z","FORWARD":"M1.607-5.036q-.678.68-1.143.465T0-5.715v-52.572q0-.928.464-1.143t1.143.466l25.357 25.357q.286.286.465.678v-25.356q0-.928.463-1.143t1.143.466l25.357 25.357q.678.678.678 1.607t-.677 1.607L29.036-5.036q-.68.68-1.143.465t-.464-1.144V-31.07q-.18.356-.466.677z","FAST_FORWARD":"M1.607-5.036q-.678.68-1.143.465T0-5.715v-52.572q0-.928.464-1.143t1.143.466l25.357 25.357q.286.286.465.678v-25.356q0-.928.463-1.143t1.143.466l25.357 25.357q.286.286.464.678v-24.213q0-.928.68-1.607t1.606-.68h4.57q.93 0 1.608.68t.68 1.607v50.286q0 .928-.68 1.607t-1.606.68h-4.57q-.93 0-1.608-.68t-.68-1.607V-31.07q-.177.356-.463.677L29.036-5.036q-.68.68-1.143.465t-.464-1.144V-31.07q-.18.356-.466.677z","STEP_FORWARD":"M1.607-5.036q-.678.68-1.143.465T0-5.715v-52.572q0-.928.464-1.143t1.143.466l25.357 25.357q.286.286.465.678v-24.213q0-.928.677-1.607t1.607-.68h4.572q.928 0 1.607.68t.678 1.607v50.286q0 .928-.677 1.607t-1.607.68h-4.572q-.928 0-1.607-.68t-.678-1.607V-31.07q-.18.356-.466.677z","EJECT":"M.5-29.036l25.357-25.357q.68-.678 1.607-.678t1.607.677l25.36 25.357q.677.68.463 1.143t-1.143.464H1.18q-.93 0-1.144-.463T.5-29.036zM52.607-9.143H2.32q-.927 0-1.606-.678t-.678-1.61v-9.14q0-.93.678-1.61t1.607-.677h50.287q.93 0 1.607.678t.68 1.61v9.14q0 .93-.68 1.61t-1.607.677z","CHEVRON_LEFT":"M41.82-53.25L22.858-34.286 41.82-15.32q.68.677.68 1.606t-.68 1.607L35.894-6.18q-.68.68-1.607.68t-1.607-.68l-26.5-26.5q-.68-.677-.68-1.606t.68-1.607l26.5-26.5q.677-.678 1.606-.678t1.607.677l5.928 5.93q.68.677.68 1.606t-.68 1.607z","CHEVRON_RIGHT":"M39.536-32.68l-26.5 26.5q-.68.68-1.607.68t-1.61-.68l-5.927-5.927q-.68-.68-.68-1.607t.68-1.607l18.964-18.966L3.893-53.25q-.68-.68-.68-1.607t.68-1.607l5.928-5.93q.68-.677 1.61-.677t1.606.677l26.5 26.5q.678.68.678 1.607t-.678 1.607z","PLUS_CIRCLE":"M43.43-29.714v-4.572q0-.928-.68-1.607t-1.607-.678H32v-9.144q0-.93-.68-1.607T29.715-48h-4.57q-.93 0-1.608.68t-.68 1.606v9.143h-9.142q-.928 0-1.607.677t-.678 1.607v4.572q0 .928.677 1.607t1.607.678h9.143v9.144q0 .93.68 1.607t1.606.68h4.57q.93 0 1.608-.68t.68-1.606v-9.143h9.143q.928 0 1.607-.677t.68-1.607zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","MINUS_CIRCLE":"M43.43-29.714v-4.572q0-.928-.68-1.607t-1.607-.678h-27.43q-.927 0-1.606.677t-.678 1.607v4.572q0 .928.677 1.607t1.607.678h27.43q.927 0 1.606-.677t.68-1.607zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","TIMES_CIRCLE":"M41.036-23.93q0-.927-.68-1.606L33.894-32l6.464-6.464q.68-.68.68-1.607 0-.966-.68-1.644l-3.214-3.215q-.68-.677-1.643-.677-.93 0-1.607.678l-6.464 6.466-6.466-6.465q-.678-.677-1.607-.677-.964 0-1.643.678L14.5-41.713q-.68.678-.68 1.643 0 .927.68 1.606L20.964-32 14.5-25.536q-.68.68-.68 1.607 0 .966.68 1.644l3.214 3.215q.68.677 1.643.677.93 0 1.607-.678l6.465-6.466 6.463 6.465q.678.677 1.607.677.964 0 1.643-.678l3.214-3.216q.68-.678.68-1.643zM54.856-32q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","CHECK_CIRCLE":"M45.857-37.786q0-1-.643-1.643l-3.25-3.213q-.678-.678-1.607-.678t-1.607.677L24.18-28.107l-8.073-8.072q-.678-.677-1.607-.677t-1.607.678l-3.25 3.216Q9-32.32 9-31.32q0 .963.643 1.606L22.57-16.786q.68.68 1.61.68.963 0 1.64-.68L45.215-36.18q.643-.64.643-1.606zm9 5.786q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","QUESTION_CIRCLE":"M32-14.857v-6.857q0-.5-.32-.822t-.823-.32H24q-.5 0-.82.32t-.323.822v6.857q0 .5.322.82t.82.323h6.857q.5 0 .822-.322t.32-.82zm9.143-24q0-3.143-1.982-5.822t-4.946-4.14-6.07-1.466q-8.68 0-13.25 7.607-.537.86.285 1.5l4.713 3.573q.25.214.678.214.573 0 .894-.428 1.893-2.43 3.072-3.287 1.214-.857 3.07-.857 1.715 0 3.055.928T32-38.93q0 1.36-.714 2.18t-2.43 1.607q-2.25 1-4.124 3.09t-1.875 4.482v1.284q0 .5.322.822t.82.32h6.857q.5 0 .822-.32t.32-.822q0-.678.768-1.768t1.946-1.767q1.143-.644 1.75-1.02t1.643-1.25 1.59-1.714 1-2.16.446-2.893zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","INFO_CIRCLE":"M36.57-14.857v-5.714q0-.5-.32-.823t-.82-.32H32V-40q0-.5-.32-.82t-.823-.323H19.43q-.5 0-.823.322t-.32.82v5.714q0 .5.32.822t.822.32h3.427v11.43H19.43q-.5 0-.823.32t-.32.823v5.713q0 .5.32.82t.822.323h16q.5 0 .82-.322t.32-.82zm-4.57-32v-5.714q0-.5-.32-.823t-.823-.32H24q-.5 0-.82.32t-.323.822v5.713q0 .5.322.82t.82.323h6.857q.5 0 .822-.322t.32-.82zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","CROSSHAIRS":"M42.75-27.43h-3.893q-.928 0-1.607-.677t-.68-1.607v-4.572q0-.928.68-1.607t1.607-.678h3.893q-1.143-3.86-4.018-6.734T32-47.32v3.89q0 .93-.68 1.61t-1.606.677h-4.57q-.93 0-1.608-.678t-.68-1.61v-3.89q-3.856 1.14-6.73 4.016t-4.02 6.733H16q.93 0 1.607.677t.68 1.607v4.572q0 .928-.68 1.607T16-27.43h-3.893q1.143 3.86 4.018 6.734t6.732 4.017v-3.89q0-.93.68-1.61t1.606-.677h4.57q.93 0 1.608.678t.68 1.61v3.89q3.857-1.14 6.732-4.016t4.018-6.733zm12.107-6.856v4.572q0 .928-.678 1.607t-1.61.678h-5.106q-1.32 5.75-5.518 9.948T32-11.964v5.107q0 .928-.68 1.607t-1.606.68h-4.57q-.93 0-1.608-.68t-.68-1.607v-5.107q-5.75-1.322-9.945-5.518T7.394-27.43H2.286q-.93 0-1.607-.677T0-29.714v-4.572q0-.928.68-1.607t1.606-.678h5.107q1.32-5.75 5.518-9.948t9.947-5.518v-5.107q0-.928.68-1.607t1.606-.68h4.57q.93 0 1.608.68t.68 1.607v5.107q5.75 1.322 9.946 5.518t5.518 9.947h5.107q.93 0 1.61.677t.677 1.607z","TIMES_CIRCLE_O":"M39.18-25.464l-5.216 5.214q-.357.357-.82.357t-.823-.357l-4.89-4.893-4.894 4.893q-.357.357-.822.357t-.82-.357l-5.215-5.214q-.36-.357-.36-.822t.36-.82L20.57-32l-4.89-4.893q-.36-.357-.36-.82t.36-.823l5.213-5.214q.357-.357.82-.357t.823.357l4.893 4.893 4.89-4.893q.36-.357.823-.357t.82.357l5.216 5.214q.356.357.356.822t-.357.82L34.285-32l4.893 4.893q.356.357.356.82t-.357.823zM46.856-32q0-5.286-2.607-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","CHECK_CIRCLE_O":"M41.82-34.964l-15.07 15.07q-.68.68-1.607.68t-1.607-.68l-10.5-10.5q-.68-.677-.68-1.606t.68-1.607l3.643-3.643q.677-.68 1.606-.68t1.607.68l5.25 5.25 9.82-9.82q.68-.68 1.608-.68t1.61.68l3.64 3.64q.68.68.68 1.61t-.68 1.606zM46.858-32q0-5.286-2.607-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","BAN":"M46.857-32.107q0-5.75-3.107-10.536L16.82-15.75q4.894 3.18 10.61 3.18 3.963 0 7.552-1.555t6.197-4.16 4.14-6.233 1.537-7.59zM11.18-21.43l26.963-26.927q-4.822-3.25-10.714-3.25-5.287 0-9.75 2.607t-7.073 7.107T8-32.107q0 5.786 3.18 10.678zm43.677-10.677q0 5.607-2.178 10.714t-5.84 8.786-8.75 5.857-10.66 2.18-10.662-2.18-8.75-5.857-5.84-8.786T0-32.107t2.18-10.697 5.838-8.767 8.75-5.86 10.66-2.177 10.66 2.178 8.75 5.86 5.84 8.766 2.18 10.697z","ARROW_LEFT":"M54.857-32v4.57q0 1.894-1.16 3.234t-3.018 1.34H25.535L36-12.357q1.357 1.285 1.357 3.213T36-5.93l-2.68 2.716q-1.32 1.32-3.213 1.32-1.857 0-3.25-1.32L3.607-26.5q-1.32-1.32-1.32-3.214 0-1.857 1.32-3.25l23.25-23.215q1.357-1.356 3.25-1.356 1.857 0 3.214 1.357L36-53.535q1.357 1.357 1.357 3.25T36-47.036L25.536-36.57H50.68q1.856 0 3.016 1.338T54.856-32z","ARROW_RIGHT":"M52.57-29.714q0 1.928-1.32 3.25L28-3.214q-1.393 1.32-3.25 1.32-1.82 0-3.214-1.32l-2.68-2.68Q17.5-7.25 17.5-9.143t1.357-3.25L29.32-22.856H4.18q-1.86 0-3.02-1.34T0-27.428V-32q0-1.893 1.16-3.232t3.02-1.34h25.14l-10.463-10.5Q17.5-48.356 17.5-50.285t1.357-3.214l2.68-2.68q1.356-1.356 3.213-1.356 1.893 0 3.25 1.357l23.25 23.25q1.32 1.25 1.32 3.216z","ARROW_UP":"M57.536-29.32q0 1.82-1.322 3.213l-2.678 2.678q-1.357 1.36-3.25 1.36-1.93 0-3.215-1.36l-10.5-10.463V-8.75q0 1.857-1.338 3.018T32-4.572h-4.57q-1.894 0-3.234-1.16t-1.34-3.018v-25.143l-10.5 10.464q-1.285 1.36-3.213 1.36T5.93-23.43l-2.68-2.677q-1.357-1.357-1.357-3.214 0-1.894 1.357-3.25L26.5-55.82q1.25-1.323 3.214-1.323 1.93 0 3.25 1.322l23.25 23.25q1.322 1.39 1.322 3.25z","ARROW_DOWN":"M57.536-34.286q0 1.893-1.322 3.215L32.964-7.787q-1.393 1.322-3.25 1.322-1.893 0-3.214-1.322L3.25-31.07q-1.357-1.287-1.357-3.216 0-1.893 1.357-3.25l2.643-2.678q1.393-1.322 3.25-1.322 1.893 0 3.214 1.322l10.5 10.5v-25.143q0-1.857 1.357-3.214t3.215-1.36H32q1.857 0 3.214 1.36t1.357 3.213v25.143l10.5-10.5q1.323-1.322 3.216-1.322 1.857 0 3.25 1.322l2.678 2.678q1.322 1.393 1.322 3.25z","SHARE":"M64-41.143q0 .93-.68 1.607L45.037-21.25q-.68.68-1.607.68t-1.61-.68-.677-1.607V-32h-8q-3.5 0-6.268.214t-5.5.768-4.75 1.518-3.768 2.482T10-23.41t-1.732 4.946T7.643-12q0 1.964.178 4.393 0 .214.09.84t.09.946q0 .534-.304.89t-.84.36q-.57 0-1-.61-.25-.32-.463-.784T4.91-7.036t-.374-.857Q0-18.07 0-24q0-7.107 1.893-11.893 5.786-14.393 31.25-14.393h8v-9.143q0-.927.678-1.606t1.61-.678 1.606.678L63.32-42.75q.68.68.68 1.607z","EXPAND":"M26.964-26.286q0 .465-.357.822L14.75-13.607l5.143 5.143q.678.678.678 1.607t-.677 1.607-1.607.68h-16q-.93 0-1.607-.68T0-6.857v-16q0-.93.68-1.607t1.606-.68 1.607.68l5.143 5.143 11.857-11.86q.357-.356.82-.356t.823.357l4.07 4.073q.358.357.358.82zm27.893-30.857v16q0 .93-.678 1.607t-1.61.68-1.606-.68L45.82-44.68 33.965-32.82q-.357.356-.82.356t-.823-.357l-4.07-4.073q-.357-.357-.357-.82t.357-.823l11.857-11.857-5.143-5.143q-.678-.678-.678-1.607t.678-1.607 1.607-.68h16q.93 0 1.61.68t.677 1.607z","COMPRESS":"M27.43-29.714v16q0 .928-.68 1.607t-1.607.678-1.607-.677l-5.143-5.143L6.536-5.393q-.357.357-.822.357t-.82-.357L.82-9.463q-.356-.358-.356-.823t.357-.82l11.86-11.858-5.144-5.143q-.68-.68-.68-1.607t.68-1.607T9.143-32h16q.928 0 1.607.68t.68 1.606zm26.963-24q0 .464-.357.82L42.18-41.035l5.14 5.143q.68.68.68 1.607t-.68 1.607-1.606.68h-16q-.928 0-1.607-.68t-.678-1.606v-16q0-.928.677-1.607t1.607-.678 1.607.677l5.144 5.143L48.32-58.607q.36-.357.823-.357t.82.357l4.073 4.07q.357.358.357.823z","PLUS":"M50.286-37.714v6.857q0 1.428-1 2.428t-2.43 1H32v14.86q0 1.427-1 2.427t-2.43 1h-6.856q-1.428 0-2.428-1t-1-2.428v-14.86H3.43q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h14.856V-56q0-1.43 1-2.43t2.428-1h6.857q1.43 0 2.43 1T32-56v14.857h14.857q1.43 0 2.43 1t1 2.43z","MINUS":"M50.286-37.714v6.857q0 1.428-1 2.428t-2.43 1H3.43q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h43.427q1.43 0 2.43 1t1 2.43z","ASTERISK":"M52.93-26.5q1.64.93 2.124 2.768t-.447 3.482l-2.286 3.93q-.927 1.64-2.766 2.124t-3.483-.447l-9.5-5.464v10.964q0 1.857-1.356 3.214T32-4.57h-4.57q-1.86 0-3.216-1.36t-1.357-3.213v-10.964l-9.5 5.464q-1.643.93-3.482.447T7.107-16.32L4.82-20.25q-.927-1.643-.445-3.482T6.5-26.5L16-32l-9.5-5.5q-1.643-.93-2.125-2.768t.446-3.482l2.287-3.93q.93-1.64 2.768-2.124t3.482.447l9.5 5.464v-10.964q0-1.857 1.357-3.214t3.215-1.36H32q1.857 0 3.214 1.36t1.357 3.213v10.964l9.5-5.464q1.644-.93 3.484-.447t2.767 2.125l2.287 3.93q.93 1.643.447 3.482T52.93-37.5l-9.5 5.5z","EXCLAMATION_CIRCLE":"M27.43-59.43q7.463 0 13.766 3.68t9.983 9.982T54.856-32 51.18-18.232 41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68zM32-14.892v-6.786q0-.5-.32-.838t-.787-.34h-6.857q-.465 0-.822.358t-.357.82v6.787q0 .464.357.822t.822.356h6.857q.464 0 .786-.34t.32-.84zm-.07-12.286l.64-22.177q0-.43-.356-.643-.357-.286-.857-.286H23.5q-.5 0-.857.286-.357.214-.357.643l.607 22.178q0 .36.357.626t.857.268h6.607q.5 0 .84-.268t.375-.625z","GIFT":"M33.143-15.57v-25.573h-11.43v25.572q0 .89.644 1.374t1.643.482h6.857q1 0 1.643-.482t.643-1.375zM16.857-45.715h6.964l-4.5-5.75q-.927-1.107-2.463-1.107-1.428 0-2.428 1t-1 2.427 1 2.43 2.427 1zm24.572-3.43q0-1.427-1-2.427t-2.43-1q-1.536 0-2.464 1.106l-4.465 5.75H38q1.43 0 2.43-1t1-2.43zM54.856-40v11.43q0 .5-.32.82t-.823.32h-3.428v14.86q0 1.427-1 2.427t-2.43 1H8q-1.43 0-2.43-1t-1-2.428v-14.86H1.144q-.5 0-.822-.32T0-28.57V-40q0-.5.32-.82t.823-.323h15.714q-3.32 0-5.66-2.34t-2.34-5.66 2.34-5.66 5.66-2.34q3.822 0 6 2.75L27.43-48.5 32-54.393q2.18-2.75 6-2.75 3.32 0 5.66 2.34t2.34 5.66-2.34 5.66-5.66 2.34h15.714q.5 0 .822.322t.32.82z","LEAF":"M45.714-38.857q0-.93-.678-1.607t-1.607-.68q-6.144 0-11.36 1.77t-9.266 4.785-8.41 7.84q-.68.75-.68 1.607 0 .93.68 1.607t1.606.68q.857 0 1.607-.68.964-.857 2.643-2.535t2.393-2.36q4.893-4.427 9.59-6.284t11.196-1.857q.927 0 1.606-.68t.678-1.607zM64-45.93q0 3.394-.714 6.894-1.643 8-6.59 13.68t-12.767 9.57q-7.644 3.857-15.644 3.857-5.286 0-10.215-1.677-.534-.18-3.14-1.5T11.5-16.43q-.57 0-1.41 1.144t-1.608 2.5-1.875 2.5-2.143 1.143q-1.07 0-1.82-.393t-1.108-.857-.965-1.5q-.07-.143-.213-.393t-.196-.357-.106-.34-.054-.48q0-1.25 1.107-2.626t2.43-2.34 2.427-2 1.107-1.713q0-.143-.5-1.357T6-25.07q-.32-1.823-.32-3.716 0-4.107 1.552-7.857t4.25-6.59 6.09-4.963 7.285-3.41q1.964-.644 5.18-.912t6.41-.32 6.374-.216 5.84-.857 4.054-2.02l1.054-1.052 1.053-1 .966-.714 1.303-.572 1.553-.16q1.393 0 2.518 1.642t1.697 4 .857 4.43T64-45.93z","FIRE":"M50.286-3.43v2.287q0 .464-.34.804t-.803.34h-48Q.68 0 .34-.34T0-1.142V-3.43q0-.463.34-.802t.803-.34h48q.464 0 .803.34t.34.803zm-9.143-37.713q0 2.786-.875 5.143t-2.286 4.018-3.125 3.143-3.428 2.77-3.126 2.57-2.286 2.91-.875 3.447q0 3.43 2.393 8l-.143-.036.036.037q-3.216-1.464-5.716-2.964t-4.946-3.572-4.054-4.374-2.59-5.375-.98-6.57q0-2.786.874-5.143t2.286-4.018 3.125-3.144 3.427-2.767 3.125-2.573 2.286-2.91.875-3.447q0-3.357-2.357-8l.107.036-.036-.036q3.214 1.464 5.714 2.964t4.948 3.572 4.053 4.375 2.59 5.376.983 6.57z","EYE":"M59.43-29.714Q54-38.144 45.82-42.32 48-38.608 48-34.287q0 6.607-4.696 11.304T32-18.286t-11.304-4.696T16-34.286q0-4.32 2.18-8.035Q10-38.144 4.57-29.715q4.75 7.32 11.912 11.66T32-13.714t15.518-4.34 11.91-11.66zM33.713-43.43q0-.713-.5-1.213t-1.214-.5q-4.464 0-7.66 3.197t-3.197 7.66q0 .715.5 1.215t1.214.5 1.214-.5.5-1.216q0-3.07 2.18-5.25T32-41.714q.714 0 1.214-.5t.5-1.215zM64-29.713q0 1.214-.714 2.464-5 8.214-13.447 13.16T32-9.142t-17.84-4.964T.715-27.25Q0-28.5 0-29.714t.714-2.465q5-8.177 13.447-13.14T32-50.287t17.84 4.965 13.446 13.14Q64-30.93 64-29.713z","EYE_SLASH":"M19.82-16.32l2.787-5.037q-3.107-2.25-4.857-5.68T16-34.286q0-4.32 2.18-8.034Q10-38.144 4.57-29.715 10.537-20.5 19.82-16.32zm13.894-27.11q0-.713-.5-1.213t-1.214-.5q-4.464 0-7.66 3.197t-3.197 7.66q0 .715.5 1.215t1.214.5 1.214-.5.5-1.216q0-3.07 2.18-5.25T32-41.714q.714 0 1.214-.5t.5-1.215zm12.965-6.82q0 .25-.037.32-3.75 6.716-11.25 20.216T24.107-9.464l-1.75 3.178q-.357.572-1 .572-.428 0-4.786-2.5-.57-.357-.57-1 0-.43 1.57-3.107-5.106-2.323-9.41-6.18T.715-27.25Q0-28.357 0-29.714t.714-2.465q5.465-8.39 13.572-13.25T32-50.285q3.18 0 6.43.607l1.927-3.463q.357-.57 1-.57.18 0 .643.213t1.107.554 1.18.66 1.124.66.697.412q.572.357.572.964zM48-34.286q0 4.965-2.82 9.054t-7.466 5.875l10-17.93q.286 1.608.286 3zm16 4.572q0 1.25-.714 2.464-1.393 2.286-3.893 5.18-5.357 6.14-12.41 9.534T32-9.143l2.643-4.714q7.57-.643 14.018-4.893t10.77-10.964q-4.11-6.393-10.073-10.5l2.25-4Q55-41.93 58.125-38.75t5.16 6.57Q64-30.963 64-29.713z","WARNING":"M36.57-14.893v-6.786q0-.5-.338-.838t-.803-.34h-6.86q-.463 0-.802.34t-.34.84v6.785q0 .5.34.84t.803.34h6.86q.463 0 .802-.34t.34-.84zM36.5-28.25l.643-16.393q0-.428-.357-.678-.465-.394-.857-.394h-7.86q-.39 0-.856.393-.357.25-.357.75l.607 16.32q0 .357.357.59t.86.23h6.606q.5 0 .84-.23t.374-.59zM36-61.607L63.43-11.32q1.25 2.25-.073 4.5-.607 1.034-1.66 1.64t-2.268.61H4.57q-1.213 0-2.266-.61T.644-6.82Q-.68-9.07.57-11.32L28-61.608q.607-1.107 1.68-1.75T32-64t2.32.643 1.68 1.75z","PLANE":"M49.143-58.286q1.57 1.857.428 5.286t-3.856 6.143l-5.75 5.75L45.68-16.25q.177.68-.43 1.18l-4.57 3.427q-.25.214-.68.214-.143 0-.25-.034-.536-.107-.75-.572L29.036-30.18l-9.25 9.25L21.68-14q.177.607-.287 1.107l-3.43 3.43q-.32.32-.82.32h-.072q-.534-.07-.856-.464l-6.75-9-9-6.75Q.07-25.607 0-26.18q-.036-.463.32-.89l3.43-3.466q.32-.32.82-.32.216 0 .287.035l6.93 1.89 9.25-9.25-18.144-9.963q-.5-.286-.607-.857-.072-.57.32-.964l4.573-4.572q.5-.464 1.07-.285L32-49.144l5.714-5.714q2.715-2.714 6.143-3.857t5.286.428z","CALENDAR":"M4.57-4.57h10.287v-10.287H4.57V-4.57zm12.573 0H28.57v-10.287H17.144V-4.57zM4.57-17.144h10.287V-28.57H4.57v11.427zm12.573 0H28.57V-28.57H17.144v11.427zM4.57-30.857h10.287v-10.286H4.57v10.286zM30.858-4.57h11.43v-10.287h-11.43V-4.57zM17.143-30.858H28.57v-10.286H17.144v10.286zM44.57-4.57h10.287v-10.287H44.57V-4.57zM30.858-17.144h11.43V-28.57h-11.43v11.427zM18.287-48v-10.286q0-.464-.34-.803t-.804-.34h-2.286q-.464 0-.803.34t-.34.804V-48q0 .464.34.804t.803.34h2.286q.464 0 .803-.34t.34-.804zM44.57-17.143h10.287V-28.57H44.57v11.427zM30.858-30.857h11.43v-10.286h-11.43v10.286zm13.714 0h10.287v-10.286H44.57v10.286zM45.715-48v-10.286q0-.464-.34-.803t-.803-.34h-2.284q-.465 0-.804.34t-.34.804V-48q0 .464.34.804t.804.34h2.285q.466 0 .805-.34t.34-.804zm13.715-2.286V-4.57q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-45.716q0-1.857 1.357-3.214t3.214-1.357h4.573v-3.43q0-2.356 1.678-4.034T14.858-64h2.286q2.357 0 4.036 1.68t1.677 4.034v3.43H36.57v-3.43q0-2.357 1.68-4.035T42.286-64h2.285q2.36 0 4.037 1.68t1.68 4.034v3.43h4.57q1.857 0 3.214 1.356t1.36 3.214z","RANDOM":"M23.786-46.82q-2.143 3.284-4.893 9.75-.786-1.61-1.322-2.59t-1.445-2.27-1.82-2.016-2.25-1.25-2.912-.518h-8q-.5 0-.822-.322t-.32-.82v-6.858q0-.5.32-.822t.823-.32h8q8.928 0 14.643 8.035zM64-18.287q0 .5-.32.822L52.25-6.036q-.32.322-.82.322-.466 0-.805-.34t-.34-.803v-6.857q-1.142 0-3.035.018t-2.893.035-2.607-.036-2.536-.18-2.285-.374-2.25-.66-2.073-1.02-2.107-1.427-1.964-1.91-2-2.483q2.107-3.32 4.857-9.75.786 1.607 1.32 2.59t1.448 2.267 1.822 2.018 2.25 1.25 2.91.518h9.144v-6.857q0-.5.32-.822t.823-.32q.427 0 .856.356L63.68-19.107q.32.32.32.82zm0-32q0 .5-.32.822L52.25-38.036q-.32.322-.82.322-.466 0-.805-.34t-.34-.803v-6.857h-9.142q-1.714 0-3.107.535t-2.465 1.61-1.82 2.195-1.607 2.768Q31-36.393 29.357-32.5q-1.036 2.357-1.768 3.964t-1.93 3.75-2.285 3.572-2.643 2.964-3.214 2.446-3.804 1.5-4.57.59h-8q-.5 0-.823-.322t-.32-.82v-6.858q0-.5.32-.822t.823-.32h8q1.714 0 3.107-.537T14.714-25t1.822-2.196 1.607-2.768q1.143-2.215 2.786-6.107 1.034-2.36 1.766-3.966t1.93-3.75 2.285-3.57 2.644-2.965 3.214-2.448 3.803-1.5 4.573-.59h9.143v-6.856q0-.5.32-.822t.823-.32q.427 0 .856.356L63.68-51.107q.32.32.32.82z","COMMENT":"M64-32q0 6.214-4.286 11.482T48.07-12.196 32-9.143q-2.5 0-5.18-.286-7.07 6.25-16.427 8.644-1.75.5-4.072.786-.606.07-1.088-.32t-.625-1.037v-.036Q4.5-1.536 4.59-1.82t.07-.36.16-.338l.216-.32.25-.305.285-.32q.25-.287 1.11-1.233t1.23-1.358 1.108-1.41 1.16-1.822.965-2.107.928-2.714q-5.606-3.18-8.838-7.857T0-32q0-4.643 2.536-8.875t6.82-7.304 10.215-4.874T32-54.857q8.714 0 16.07 3.053t11.644 8.322T64-32z","MAGNET":"M54.857-34.286v4.572q0 7.178-3.518 12.928t-9.786 8.982T27.43-4.57 13.303-7.805t-9.786-8.982T0-29.714v-4.572q0-.928.68-1.607t1.606-.678H16q.93 0 1.607.677t.68 1.607v4.572q0 1.857.838 3.214t1.91 2.036 2.536 1.07 2.287.465 1.572.073T29-22.93t2.286-.463 2.535-1.07 1.912-2.037.84-3.214v-4.572q0-.928.678-1.607t1.607-.678H52.57q.93 0 1.61.677t.677 1.607zm-36.57-22.857v13.714q0 .93-.68 1.61T16-41.144H2.286q-.93 0-1.607-.678T0-43.43v-13.713q0-.928.68-1.607t1.606-.68H16q.93 0 1.607.68t.68 1.607zm36.57 0v13.714q0 .93-.678 1.61t-1.61.677H38.858q-.928 0-1.607-.678t-.68-1.61v-13.713q0-.928.68-1.607t1.607-.68H52.57q.93 0 1.61.68t.677 1.607z","CHEVRON_UP":"M60.107-16.464L54.18-10.57q-.68.677-1.61.677t-1.606-.678L32-29.537 13.036-10.57q-.68.677-1.607.677t-1.61-.678l-5.927-5.894q-.68-.68-.68-1.625t.68-1.624l26.5-26.465q.678-.677 1.607-.677t1.607.678l26.5 26.466q.68.678.68 1.625t-.68 1.626z","CHEVRON_DOWN":"M60.107-35.143L33.607-8.68Q32.93-8 32-8t-1.607-.68l-26.5-26.463q-.68-.678-.68-1.625t.68-1.625l5.928-5.893q.68-.678 1.61-.678t1.606.678L32-25.32l18.964-18.966q.68-.678 1.607-.678t1.61.678l5.927 5.893q.68.68.68 1.625t-.68 1.625z","RETWEET":"M45.714-10.286q0 .465-.34.804t-.803.34H10.287q-.286 0-.482-.072t-.322-.25-.196-.286-.107-.41-.037-.41V-32H2.286q-.93 0-1.607-.68T0-34.285q0-.857.536-1.464l11.428-13.714q.68-.786 1.75-.786t1.75.786l11.43 13.714q.535.607.535 1.464 0 .93-.68 1.607t-1.607.68h-6.857v13.714h20.57q.573 0 .894.393l5.714 6.857q.25.393.25.75zM68.57-25.143q0 .857-.534 1.464L56.606-9.963q-.713.82-1.75.82t-1.75-.82L41.68-23.68q-.537-.606-.537-1.463 0-.928.678-1.607t1.61-.68h6.856v-13.713H29.714q-.57 0-.893-.428l-5.713-6.86q-.25-.32-.25-.713 0-.464.34-.803t.803-.34h34.286q.285 0 .482.072t.32.25.198.285.107.412.036.41V-27.428h6.856q.928 0 1.607.68t.678 1.607z","SHOPPING_CART":"M22.857-9.143q0 1.857-1.357 3.214t-3.214 1.36-3.215-1.36-1.356-3.213 1.357-3.214 3.216-1.357 3.214 1.357 1.357 3.214zm32 0q0 1.857-1.357 3.214t-3.214 1.36-3.215-1.36-1.356-3.213 1.357-3.214 3.216-1.357 3.214 1.357 1.357 3.214zM59.43-48v18.286q0 .857-.59 1.518t-1.447.767l-37.286 4.36q.464 2.14.464 2.5 0 .57-.856 2.284H52.57q.93 0 1.61.68T54.856-16t-.678 1.607-1.61.68H16q-.93 0-1.607-.68T13.713-16q0-.393.287-1.125t.57-1.286.77-1.43.553-1.053L9.57-50.286H2.287q-.93 0-1.607-.678T0-52.57t.68-1.61 1.606-.677h9.143q.57 0 1.016.232t.697.554.464.874.286.928.196 1.054.16.928h42.893q.928 0 1.607.68T59.43-48z","FOLDER":"M59.43-42.286v25.143q0 3.286-2.36 5.643t-5.64 2.357H8q-3.286 0-5.643-2.357T0-17.143V-51.43q0-3.284 2.357-5.64T8-59.43h11.43q3.284 0 5.64 2.36t2.36 5.64v1.144h24q3.284 0 5.64 2.357t2.36 5.644z","FOLDER_OPEN":"M67.107-30q0 1.107-1.107 2.357L54-13.5q-1.536 1.82-4.304 3.09T44.57-9.144H5.715q-1.214 0-2.16-.464t-.947-1.536q0-1.107 1.107-2.357l12-14.143q1.536-1.82 4.304-3.09T25.143-32H64q1.214 0 2.16.464T67.108-30zm-12.25-12.286v5.715H25.143q-3.357 0-7.036 1.695t-5.857 4.268L.214-16.464l-.178.214q0-.143-.018-.446T0-17.143V-51.43q0-3.284 2.357-5.64T8-59.43h11.43q3.284 0 5.64 2.36t2.36 5.64v1.144h19.427q3.286 0 5.643 2.357t2.357 5.644z","ARROWS_V":"M25.143-52.57q0 .927-.68 1.606t-1.606.678h-4.57v36.572h4.57q.93 0 1.607.678t.68 1.607-.68 1.61L15.32-.68q-.677.68-1.606.68t-1.607-.68L2.964-9.82q-.678-.68-.678-1.61t.678-1.606 1.607-.678h4.573v-36.572H4.57q-.927 0-1.606-.678t-.678-1.607.678-1.61l9.143-9.14q.68-.68 1.607-.68t1.607.68l9.144 9.14q.68.68.68 1.61z","ARROWS_H":"M64-32q0 .93-.68 1.607l-9.14 9.143q-.68.68-1.61.68t-1.606-.68-.678-1.607v-4.572H13.714v4.573q0 .928-.678 1.607t-1.607.68-1.61-.68L.68-30.393Q0-31.07 0-32t.68-1.607l9.14-9.143q.68-.68 1.61-.68t1.606.68.678 1.607v4.572h36.572v-4.573q0-.928.678-1.607t1.607-.68 1.61.68l9.14 9.143Q64-32.93 64-32z","BAR_CHART_O":"M22.857-32v18.286h-9.143V-32h9.143zM36.57-50.286v36.572h-9.14v-36.572h9.14zM73.144-9.143v4.572H0v-54.86h4.57v50.287h68.573zm-22.857-32v27.43h-9.143v-27.43h9.143zM64-54.857v41.143h-9.143v-41.143H64z","TWITTER_SQUARE":"M45.714-42.214q-2 .893-4.32 1.214 2.427-1.43 3.32-4.18-2.32 1.36-4.785 1.823-2.18-2.357-5.466-2.357-3.107 0-5.303 2.196t-2.196 5.304q0 1.035.18 1.714-4.608-.25-8.644-2.32t-6.857-5.537q-1.036 1.786-1.036 3.786 0 4.07 3.25 6.25-1.678-.037-3.57-.93v.07q0 2.68 1.784 4.77t4.394 2.59q-1.035.284-1.82.284-.465 0-1.394-.143.75 2.25 2.66 3.716t4.34 1.5q-4.143 3.214-9.32 3.214-.93 0-1.787-.107Q14.43-16 20.643-16q4 0 7.5-1.268t6-3.393 4.303-4.894 2.68-5.785.874-6.017q0-.643-.036-.964 2.25-1.61 3.75-3.894zm9.143-6.93v34.287q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","FACEBOOK_SQUARE":"M44.57-59.43q4.25 0 7.27 3.02t3.017 7.267v34.286q0 4.25-3.018 7.268t-7.27 3.02h-6.713v-21.25h7.107l1.072-8.287h-8.18v-5.286q0-2 .84-3t3.268-1l4.357-.036v-7.39q-2.25-.323-6.356-.323-4.857 0-7.768 2.857t-2.91 8.072v6.107h-7.143v8.286h7.143v21.25h-19q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57z","CAMERA_RETRO":"M33.143-34.286q0-.5-.322-.82T32-35.43q-2.357 0-4.036 1.68t-1.678 4.036q0 .5.32.82t.823.323.82-.323.32-.82q0-1.43 1-2.43t2.43-1q.5 0 .82-.32t.323-.823zm8 4.643q0 3.786-2.68 6.464T32-20.5t-6.464-2.68-2.68-6.463 2.68-6.464T32-38.787t6.464 2.68 2.68 6.464zM4.57-9.143h54.86v-4.57H4.57v4.57zm41.144-20.5q0-5.678-4.018-9.696T32-43.356t-9.696 4.018-4.018 9.697 4.018 9.697T32-15.93t9.696-4.016 4.018-9.697zM9.144-52.57h13.713v-4.573H9.143v4.572zM4.57-45.715h54.86v-9.142H29.856l-2.286 4.57h-23v4.573zM64-54.857v45.714q0 1.893-1.34 3.232t-3.23 1.34H4.57q-1.89 0-3.23-1.34T0-9.144v-45.714q0-1.893 1.34-3.232t3.23-1.34h54.86q1.89 0 3.23 1.34T64-54.856z","KEY":"M29.714-45.714q0-2.857-2-4.857t-4.857-2-4.857 2-2 4.856q0 1.5.68 2.964-1.466-.68-2.966-.68-2.857 0-4.857 2t-2 4.86 2 4.856 4.857 2 4.857-2 2-4.857q0-1.5-.677-2.966 1.464.68 2.964.68 2.857 0 4.857-2t2-4.858zM60.107-20.57q0 .606-1.75 2.356T56-16.464q-.32 0-1.018-.572t-1.303-1.178-1.376-1.43-.875-.927L48-17.144l7.857 7.857q1 1 1 2.43 0 1.5-1.393 2.892T52.57-2.57q-1.427 0-2.427-1L26.18-27.537q-6.287 4.68-13.037 4.68-5.822 0-9.482-3.662T0-36q0-5.714 3.393-11.18t8.857-8.856 11.18-3.393q5.82 0 9.48 3.662t3.66 9.482q0 6.75-4.677 13.036L44.57-20.57 48-24q-.107-.107-.93-.875t-1.427-1.375-1.18-1.304-.57-1.017q0-.61 1.75-2.36T48-32.68q.464 0 .82.36.216.213 1.644 1.588t2.93 2.84 3.088 3.07 2.607 2.786 1.017 1.465z","GEARS":"M32-32q0-3.786-2.68-6.464t-6.463-2.68-6.464 2.68T13.713-32t2.68 6.464 6.464 2.68 6.464-2.68T32-32zm27.43 18.286q0-1.857-1.36-3.215t-3.213-1.356-3.214 1.357-1.357 3.216q0 1.893 1.34 3.232t3.23 1.34 3.233-1.34 1.34-3.232zm0-36.572q0-1.857-1.36-3.214t-3.213-1.357-3.214 1.357-1.357 3.214q0 1.893 1.34 3.232t3.23 1.34 3.233-1.34 1.34-3.232zM45.713-35.25v6.607q0 .357-.25.697t-.57.375l-5.537.856q-.393 1.25-1.143 2.714 1.215 1.714 3.215 4.107.25.357.25.714 0 .43-.25.68-.823 1.07-2.948 3.196T35.68-13.18q-.394 0-.75-.25l-4.11-3.213q-1.32.68-2.75 1.107-.39 3.857-.82 5.536-.25.857-1.07.857h-6.644q-.393 0-.715-.268t-.356-.626l-.82-5.464q-1.215-.357-2.68-1.107L10.75-13.43q-.25.25-.714.25-.393 0-.75-.284-5.143-4.75-5.143-5.715 0-.32.25-.677.357-.5 1.464-1.893t1.68-2.18q-.823-1.57-1.25-2.927l-5.43-.857Q.5-27.75.25-28.054T0-28.75v-6.607q0-.357.25-.697t.57-.375l5.537-.856Q6.75-38.536 7.5-40q-1.214-1.714-3.214-4.107-.25-.393-.25-.714 0-.43.25-.716.785-1.07 2.928-3.178t2.822-2.107q.393 0 .75.25l4.107 3.213q1.214-.643 2.75-1.143.393-3.857.82-5.5.25-.857 1.073-.857h6.643q.39 0 .713.268t.357.626l.82 5.464q1.216.357 2.68 1.107l4.214-3.178q.286-.25.715-.25.39 0 .75.284 5.14 4.75 5.14 5.715 0 .32-.25.677-.427.572-1.5 1.93t-1.606 2.142q.822 1.713 1.215 2.927l5.427.822q.357.07.607.374t.25.696zM68.57-16.214v5q0 .57-5.32 1.107-.43.964-1.07 1.857Q64-4.214 64-3.32q0 .14-.143.25Q59.5-.537 59.43-.537q-.287 0-1.644-1.678t-1.857-2.43q-.716.073-1.073.073t-1.07-.073q-.5.75-1.858 2.43T50.285-.537q-.072 0-4.43-2.535-.142-.11-.142-.25 0-.894 1.822-4.93-.643-.893-1.072-1.857-5.32-.536-5.32-1.107v-5q0-.572 5.32-1.107.465-1.037 1.072-1.86-1.822-4.034-1.822-4.927 0-.143.143-.25.143-.072 1.25-.714t2.107-1.216 1.072-.57q.285 0 1.643 1.66t1.856 2.41q.714-.07 1.07-.07t1.073.07q1.82-2.535 3.284-4l.215-.07q.14 0 4.427 2.5.143.106.143.25 0 .892-1.82 4.927.606.823 1.07 1.86 5.32.534 5.32 1.106zm0-36.572v5q0 .572-5.32 1.107-.43.966-1.07 1.86Q64-40.787 64-39.894q0 .143-.143.25-4.357 2.536-4.428 2.536-.287 0-1.644-1.68t-1.857-2.427q-.716.07-1.073.07t-1.07-.07q-.5.75-1.858 2.428t-1.644 1.68q-.072 0-4.43-2.537-.142-.107-.142-.25 0-.893 1.822-4.928-.643-.894-1.072-1.86-5.32-.534-5.32-1.106v-5q0-.57 5.32-1.107.465-1.036 1.072-1.857-1.822-4.036-1.822-4.93 0-.14.143-.25.143-.07 1.25-.713t2.107-1.214 1.072-.572q.285 0 1.643 1.662t1.856 2.41q.714-.07 1.07-.07t1.073.07q1.82-2.535 3.284-4l.215-.07q.14 0 4.427 2.5.143.107.143.25 0 .892-1.82 4.928.606.82 1.07 1.857 5.32.536 5.32 1.107z","COMMENTS":"M50.286-36.57q0 4.963-3.357 9.177t-9.162 6.66-12.625 2.447q-3.072 0-6.286-.57-4.428 3.142-9.928 4.57-1.287.322-3.073.572H5.75q-.393 0-.732-.286t-.41-.75q-.037-.107-.037-.232t.02-.232.07-.215l.09-.177.125-.197.143-.178.16-.18.143-.16q.18-.214.823-.892t.928-1.054.805-1.036.893-1.375.732-1.57q-4.43-2.57-6.964-6.32T0-36.57q0-4.966 3.357-9.18t9.16-6.66 12.626-2.447 12.625 2.446 9.16 6.66 3.358 9.18zM64-27.43q0 4.287-2.536 8.02T54.5-13.108q.357.857.732 1.57t.893 1.376.804 1.035.927 1.054.822.89q.034.037.14.162t.162.18.143.177.125.196l.09.178.07.215.02.23-.037.233q-.107.5-.464.786t-.787.25q-1.786-.25-3.072-.573-5.5-1.428-9.927-4.57-3.214.57-6.286.57-9.678 0-16.857-4.714 2.07.143 3.143.143 5.75 0 11.036-1.607t9.427-4.61q4.464-3.284 6.857-7.57t2.393-9.07q0-2.75-.82-5.43 4.606 2.536 7.284 6.357T64-27.43z","THUMBS_O_UP":"M9.143-16q0-.93-.68-1.607t-1.606-.68-1.607.68T4.57-16t.68 1.607 1.607.68 1.607-.68.68-1.607zm41.143-20.57q0-1.823-1.393-3.198t-3.18-1.375h-12.57q0-2.07 1.714-5.696t1.714-5.73q0-3.5-1.14-5.18t-4.573-1.68q-.928.93-1.357 3.037t-1.09 4.482T26.287-48q-.786.82-2.75 3.25-.143.18-.822 1.07t-1.125 1.466-1.233 1.518-1.428 1.57-1.376 1.27-1.43.963-1.267.322h-1.143v22.856h1.143q.464 0 1.125.107t1.18.232 1.356.393 1.25.41 1.268.447 1.035.375q7.537 2.607 12.216 2.607h4.32q6.858 0 6.858-5.964 0-.93-.178-2 1.07-.572 1.696-1.875t.625-2.625-.643-2.464q1.893-1.787 1.893-4.25 0-.894-.357-1.984T47.607-32q1.143-.036 1.91-1.68t.77-2.89zm4.57-.037q0 3.178-1.75 5.82.323 1.18.323 2.466 0 2.75-1.36 5.14.11.75.11 1.537 0 3.607-2.144 6.357.035 4.965-3.036 7.84T38.893-4.57h-4.606q-3.43 0-6.77-.805t-7.73-2.34q-4.144-1.428-4.93-1.428H4.57q-1.89 0-3.23-1.34T0-13.712v-22.858q0-1.894 1.34-3.234t3.23-1.34h9.787q1.286-.856 4.893-5.535 2.07-2.677 3.82-4.57.86-.893 1.27-3.054t1.09-4.517 2.213-3.86Q29.036-64 30.857-64q3 0 5.393 1.16t3.643 3.626 1.25 6.643q0 3.32-1.714 6.856h6.284q3.715 0 6.43 2.714t2.713 6.393z","THUMBS_O_DOWN":"M9.143-48q0-.93-.68-1.607t-1.606-.68-1.607.68T4.57-48t.68 1.607 1.607.68 1.607-.68.68-1.607zm41.143 20.57q0-1.25-.768-2.89T47.608-32q.535-.607.892-1.696t.357-1.983q0-2.463-1.893-4.25.643-1.14.643-2.463t-.625-2.625-1.696-1.875q.178-1.07.178-2 0-3.036-1.75-4.5t-4.857-1.464h-4.57q-4.68 0-12.216 2.607-.177.07-1.034.375t-1.268.446-1.25.412-1.357.393-1.178.232-1.125.107h-1.143v22.857h1.143q.572 0 1.268.323t1.43.964 1.374 1.268 1.427 1.57 1.232 1.52 1.124 1.464.822 1.07q1.964 2.43 2.75 3.25 1.464 1.536 2.125 3.91t1.09 4.483 1.357 3.036q3.43 0 4.572-1.68t1.14-5.18q0-2.106-1.713-5.73t-1.714-5.697h12.57q1.787 0 3.18-1.375t1.393-3.197zm4.57.037q0 3.68-2.713 6.393t-6.43 2.714H39.43q1.713 3.536 1.713 6.857 0 4.216-1.25 6.644-1.25 2.465-3.643 3.625T30.857 0q-1.82 0-3.214-1.32-1.214-1.18-1.93-2.93t-.91-3.232-.624-3.018-1.11-2.286q-1.713-1.785-3.82-4.535-3.607-4.68-4.893-5.537H4.57q-1.89 0-3.23-1.34T0-27.428v-22.856q0-1.893 1.34-3.232t3.23-1.34h10.287q.786 0 4.93-1.428 4.57-1.57 7.963-2.357t7.143-.786h4q5 0 8.09 2.823t3.053 7.714v.18q2.143 2.75 2.143 6.356 0 .786-.11 1.536 1.36 2.39 1.36 5.14 0 1.287-.323 2.466 1.75 2.643 1.75 5.82z","STAR_HALF":"M29.714-62.857v47.82L13.68-6.606q-.787.428-1.43.428-.75 0-1.125-.516t-.375-1.268q0-.215.07-.715l3.073-17.856-13-12.643Q0-40.142 0-40.892q0-1.32 2-1.643l17.93-2.607 8.034-16.25q.68-1.464 1.75-1.464z","HEART_O":"M59.43-42.714q0-2.893-.77-5.107t-1.964-3.52-2.91-2.124-3.357-1.107-3.5-.287-4 .91-3.948 2.286-3.09 2.57-2.142 2.197q-.643.786-1.75.786t-1.75-.786q-.857-1-2.143-2.196t-3.09-2.57-3.946-2.286-4-.91-3.5.285-3.356 1.106-2.91 2.125-1.965 3.52-.77 5.106q0 6 6.68 12.678l20.75 20L52.714-30q6.715-6.714 6.715-12.714zm4.57 0q0 7.893-8.18 16.07L33.57-5.213q-.64.643-1.57.643t-1.57-.644l-22.287-21.5q-.357-.286-.982-.93T5.18-29.98t-2.43-3.482-1.91-4.322T0-42.714Q0-50.57 4.536-55t12.535-4.43q2.216 0 4.52.77t4.285 2.07 3.41 2.447T32-51.713q1.286-1.287 2.714-2.43t3.41-2.446 4.287-2.07 4.52-.77q8 0 12.534 4.43T64-42.714z","SIGN_OUT":"M22.857-12.57q0 .14.036.713t.018.946-.106.84-.358.695-.732.232H10.286q-4.25 0-7.268-3.018T0-19.43v-25.14q0-4.25 3.018-7.27t7.268-3.017h11.428q.465 0 .804.34t.34.803q0 .143.035.714t.018.946-.106.84-.358.696-.732.232H10.286q-2.357 0-4.036 1.68t-1.68 4.035v25.14q0 2.36 1.68 4.037t4.036 1.68H21.43l.41.034.41.11.286.195.25.32.07.484zM56-32q0 .93-.68 1.607l-19.427 19.43q-.68.677-1.607.677t-1.607-.678T32-12.57v-10.287H16q-.93 0-1.607-.68t-.68-1.606v-13.714q0-.93.68-1.607t1.607-.68h16v-10.285q0-.927.68-1.606t1.606-.678 1.607.678l19.428 19.43Q56-32.93 56-32z","LINKEDIN_SQUARE":"M8.464-13.5h8.25v-24.786h-8.25V-13.5zm8.786-32.43q-.036-1.856-1.286-3.07t-3.32-1.214T9.267-49t-1.304 3.07q0 1.823 1.268 3.055t3.304 1.232h.035q2.11 0 3.394-1.232t1.286-3.054zM38.143-13.5h8.25v-14.214q0-5.5-2.607-8.322t-6.893-2.82q-4.857 0-7.464 4.177h.07v-3.606h-8.25q.107 2.357 0 24.786h8.25v-13.857q0-1.357.25-2 .536-1.25 1.607-2.125T34-32.357q4.143 0 4.143 5.607v13.25zm16.714-35.643v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","THUMB_TACK":"M17.143-33.143v-16q0-.5-.322-.82t-.82-.323-.82.322-.323.82v16q0 .5.322.823T16-32t.82-.32.323-.823zm24 12.572q0 .927-.68 1.606t-1.606.678h-15.32l-1.823 17.25q-.07.43-.375.732T20.606 0h-.036q-.963 0-1.14-.964l-2.716-17.322H2.286q-.93 0-1.607-.678T0-20.57q0-4.394 2.804-7.912T9.144-32v-18.286q-1.858 0-3.215-1.357t-1.36-3.214 1.36-3.214 3.213-1.36H32q1.857 0 3.214 1.36t1.357 3.213-1.356 3.214T32-50.286V-32q3.536 0 6.34 3.518t2.803 7.91z","EXTERNAL_LINK":"M50.286-30.857v11.428q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02H35.43q.5 0 .82.323t.32.82V-56q0 .5-.32.82t-.82.323H10.285q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036v-11.427q0-.5.322-.822t.82-.32h2.287q.5 0 .82.32t.323.823zM64-61.714v18.285q0 .93-.68 1.61t-1.606.677-1.607-.678l-6.286-6.287L30.537-24.82q-.357.356-.822.356t-.82-.357l-4.073-4.073q-.356-.357-.356-.82t.357-.823L48.108-53.82l-6.286-6.287q-.677-.68-.677-1.607t.678-1.607 1.61-.68h18.284q.93 0 1.607.68t.68 1.606z","SIGN_IN":"M42.286-32q0 .93-.68 1.607L22.18-10.963q-.68.677-1.61.677t-1.606-.678-.678-1.607v-10.287h-16q-.93 0-1.607-.68T0-25.142v-13.714q0-.93.68-1.607t1.606-.68h16v-10.285q0-.927.678-1.606t1.607-.678 1.61.678l19.427 19.43q.68.677.68 1.606zm12.57-12.57v25.14q0 4.25-3.017 7.27t-7.27 3.017H33.144q-.464 0-.804-.34t-.34-.803q0-.143-.036-.714t-.018-.946.108-.84.357-.696.733-.232H44.57q2.36 0 4.037-1.68t1.68-4.035v-25.14q0-2.36-1.68-4.037t-4.036-1.68H33.43l-.412-.034-.41-.11-.287-.195-.25-.32-.07-.484q0-.14-.036-.713t-.018-.946.108-.84.357-.695.733-.232H44.57q4.25 0 7.27 3.018t3.017 7.27z","TROPHY":"M16.357-32.464q-2.643-5.786-2.643-13.25H4.57v3.428q0 2.786 3.376 5.786t8.41 4.036zm38.5-9.822v-3.428h-9.143q0 7.464-2.643 13.25 5.037-1.036 8.412-4.036t3.375-5.786zm4.572-4.57v4.57q0 2.536-1.484 5.107t-4 4.644-6.178 3.482-7.697 1.59q-1.5 1.928-3.39 3.393-1.36 1.213-1.876 2.588t-.518 3.196q0 1.93 1.09 3.25t3.48 1.322q2.68 0 4.77 1.625T45.713-8v2.286q0 .5-.32.82t-.823.323H14.858q-.5 0-.82-.323t-.323-.82V-8q0-2.464 2.09-4.09t4.767-1.624q2.394 0 3.484-1.322t1.09-3.25q0-1.82-.52-3.196t-1.874-2.59q-1.893-1.464-3.393-3.392-4.036-.18-7.696-1.59t-6.178-3.482-4-4.643T0-42.285v-4.57q0-1.43 1-2.43t2.43-1h10.284v-3.428q0-2.357 1.68-4.036t4.035-1.68H40q2.357 0 4.036 1.68t1.678 4.036v3.428H56q1.43 0 2.43 1t1 2.43z","GITHUB_SQUARE":"M14.07-15.714q-.284.32-.713-.107-.464-.394-.143-.68.286-.32.715.107.427.393.14.68zm-1.5-2.18q.323.43 0 .68-.284.214-.606-.25t0-.643q.322-.25.607.214zm-2.177-2.142q-.18.25-.464.072-.36-.18-.25-.43.106-.177.463-.07.357.178.25.428zM11.5-18.82q-.214.25-.57-.11-.323-.39-.073-.57.214-.214.572.107.32.393.07.572zm4.607 4q-.143.427-.678.213-.61-.143-.466-.536t.68-.25q.57.18.463.572zm2.25.177q0 .393-.57.393-.608.07-.608-.393 0-.393.57-.393.607-.07.607.393zM20.43-15q.07.357-.5.5t-.644-.286.5-.535q.57-.073.643.32zm34.427-34.143v34.286q0 4.25-3.018 7.268t-7.27 3.02h-8q-.57 0-.874-.037T35-4.787t-.57-.517-.18-.982v-8.535q0-3.466-1.857-5.073 2.036-.214 3.66-.643t3.358-1.393 2.894-2.374 1.892-3.75.733-5.375q0-4.32-2.823-7.356 1.322-3.25-.286-7.285-1-.323-2.89.39t-3.287 1.573l-1.357.857q-3.322-.93-6.857-.93t-6.86.93q-.57-.393-1.516-.964T16.07-47.59 13-48.07q-1.57 4.034-.25 7.284-2.82 3.036-2.82 7.357 0 3.037.73 5.36t1.876 3.75 2.875 2.39 3.358 1.394 3.66.643q-1.428 1.286-1.75 3.68-.75.356-1.607.534t-2.034.18-2.34-.768-1.982-2.232q-.678-1.143-1.732-1.857t-1.768-.857L8.5-21.32q-.75 0-1.036.16t-.178.41.32.5.465.43l.25.177q.787.357 1.555 1.357T11-16.464l.357.82q.464 1.358 1.572 2.198t2.39 1.07 2.484.25 1.982-.124l.82-.143q0 1.357.02 3.68t.017 2.427q0 .786-.393 1.197t-.786.465-1.178.054h-8q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","UPLOAD":"M45.714-11.43q0-.927-.678-1.606t-1.607-.678-1.61.678-.677 1.607.678 1.61 1.61.677 1.606-.678.678-1.61zm9.143 0q0-.927-.678-1.606t-1.61-.678-1.606.678-.678 1.607.678 1.61 1.607.677 1.61-.678.677-1.61zm4.572-8V-8q0 1.43-1 2.43t-2.43 1H3.43Q2-4.57 1-5.57T0-8v-11.43q0-1.427 1-2.427t2.43-1h15.25q.75 2 2.516 3.286t3.947 1.284h9.143q2.178 0 3.946-1.285t2.518-3.287H56q1.43 0 2.43 1t1 2.428zM47.82-42.57q-.606 1.427-2.106 1.427H36.57v16q0 .93-.677 1.607t-1.607.68h-9.143q-.93 0-1.607-.68t-.68-1.607v-16h-9.142q-1.5 0-2.107-1.428-.607-1.394.5-2.466l16-16q.643-.678 1.607-.678t1.607.678l16 16q1.11 1.072.5 2.465z","LEMON_O":"M50.25-34.5q0-1.57-.25-4.054T49.357-42q-.428-1.07-.607-1.57t-.32-1.305-.144-1.732q0-.822.178-2.447t.18-2.41q0-1.322-.358-1.965-.143-.034-.465-.034-.677 0-2.07.16t-2.107.16q-2.143 0-6.286-.856t-6.25-.857q-1.536 0-3.375.41t-3.036.84-3.196 1.214q-4.893 1.93-7.214 3.68-3.43 2.606-5.697 6.767t-3.144 8.428-.875 8.875q0 1.43.448 4.286t.446 4.32q0 .823-.393 2.376t-.39 2.34.427 1.302T6.32-9.5q.86 0 2.59-.393t2.626-.393q2.035 0 6.053.554t6.053.553q6.464 0 10.143-1.284 4.607-1.607 8.41-5.447t5.93-8.77 2.124-9.82zm4.57-.07q0 5.89-2.5 11.695t-7 10.286-10.034 6.447Q30.856-4.57 23.643-4.57q-2.036 0-6.072-.52t-6.034-.517q-.857 0-2.59.518t-2.625.52q-2.606 0-4.41-1.984t-1.803-4.59q0-.856.393-2.427t.393-2.394q0-1.43-.447-4.304T0-24.608q0-3.963.643-7.767t1.946-7.482 3.59-6.93 5.356-5.57q2.785-2.107 8.285-4.286 6.93-2.786 11.287-2.786 2.143 0 6.268.86t6.196.856q.68 0 2.037-.18t2.072-.177q2.89 0 4.213 1.802t1.32 4.804q0 .82-.177 2.428t-.18 2.43q0 .356.037.66t.107.607.143.483.232.57.232.608q.572 1.43.893 4.234t.32 4.875z","PHONE":"M50.286-19.714q0 .964-.357 2.518t-.75 2.446q-.75 1.786-4.36 3.786-3.356 1.82-6.64 1.82-.966 0-1.876-.124t-2.054-.446-1.696-.518-1.983-.732-1.75-.643q-3.5-1.25-6.25-2.964-4.57-2.823-9.445-7.698T5.43-31.714q-1.716-2.75-2.966-6.25-.107-.322-.643-1.75t-.73-1.982-.52-1.697-.445-2.053T0-47.32q0-3.287 1.82-6.644 2-3.607 3.787-4.357.893-.394 2.447-.75t2.517-.36q.5 0 .75.11.644.213 1.894 2.713.393.678 1.072 1.928t1.25 2.27 1.107 1.91q.107.143.625.893t.768 1.268.25 1.02q0 .713-1.018 1.784t-2.214 1.965-2.215 1.89-1.02 1.644q0 .322.18.804t.304.732.5.857.41.68q2.715 4.892 6.215 8.392t8.39 6.213q.073.036.68.41t.857.5.732.304.803.18q.643 0 1.643-1.02t1.893-2.213 1.963-2.215 1.786-1.02q.5 0 1.016.25t1.268.77.893.624q.893.536 1.91 1.107t2.27 1.25 1.927 1.073q2.5 1.25 2.715 1.893.106.25.106.75z","SQUARE_O":"M40-54.857H10.286q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036v-29.713q0-2.357-1.678-4.036T40-54.856zm10.286 5.714v29.714q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02H40q4.25 0 7.268 3.02t3.018 7.267z","BOOKMARK_O":"M41.143-54.857H4.57V-10.5L19.68-25l3.177-3.036L26.037-25l15.106 14.5v-44.357zm.428-4.572q.823 0 1.573.323 1.178.464 1.875 1.464t.696 2.214v46.037q0 1.214-.696 2.214t-1.875 1.466q-.68.285-1.572.285-1.713 0-2.963-1.14l-15.75-15.144L7.107-6.57Q5.82-5.394 4.143-5.394q-.822 0-1.572-.32Q1.394-6.18.697-7.18T0-9.392V-55.43q0-1.213.696-2.213t1.875-1.464q.75-.322 1.573-.322H41.57z","PHONE_SQUARE":"M45.714-21.393q0-.393-.07-.57-.108-.287-1.376-1.055t-3.16-1.768l-1.894-1.035q-.178-.11-.678-.466t-.893-.535-.75-.18q-.643 0-1.68 1.16T33.18-23.5t-1.573 1.18q-.25 0-.59-.126t-.553-.233-.607-.338-.5-.303q-3.536-1.966-6.09-4.52t-4.517-6.09q-.07-.106-.304-.5t-.34-.606-.23-.553-.126-.59q0-.463.732-1.195t1.607-1.375 1.606-1.41.733-1.304q0-.357-.18-.75t-.536-.893-.464-.68q-.107-.213-.536-1.017t-.893-1.625-.945-1.695-.893-1.446-.59-.644-.57-.072q-1.715 0-3.608.786-1.643.75-2.857 3.375t-1.214 4.66q0 .572.09 1.215t.178 1.09.322 1.178.357 1.053.446 1.18.393 1.07q2.14 5.86 7.73 11.448T30.108-15.5q.214.07 1.072.393t1.177.446 1.054.356 1.18.322 1.09.178 1.213.09q2.036 0 4.66-1.215t3.376-2.856q.784-1.893.784-3.607zm9.143-27.75v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TWITTER":"M57.857-49.43q-2.393 3.5-5.786 5.966.037.5.037 1.5 0 4.643-1.357 9.268t-4.125 8.875-6.59 7.516-9.214 5.215-11.534 1.947q-9.68 0-17.715-5.178 1.25.14 2.787.14 8.036 0 14.322-4.927-3.75-.072-6.716-2.304t-4.07-5.697q1.177.178 2.177.178 1.537 0 3.037-.39-4-.823-6.625-3.984t-2.625-7.34v-.142q2.43 1.357 5.214 1.465-2.356-1.573-3.75-4.11t-1.39-5.5q0-3.14 1.57-5.82 4.32 5.32 10.518 8.518t13.268 3.553Q29-42.035 29-43.32q0-4.787 3.375-8.162t8.16-3.375q5 0 8.43 3.643 3.892-.75 7.32-2.786-1.32 4.107-5.07 6.357 3.32-.357 6.642-1.786z","FACEBOOK_F":"M34.25-63.57v9.427h-5.607q-3.072 0-4.143 1.286T23.43-49v6.75h10.463L32.5-31.68h-9.07v27.11H12.5v-27.11H3.393v-10.57H12.5v-7.786q0-6.643 3.714-10.303T26.107-64q5.25 0 8.143.43z","GITHUB":"M54.857-32q0 8.964-5.232 16.125t-13.518 9.91q-.964.18-1.41-.25t-.447-1.07v-7.536q0-3.466-1.857-5.073 2.036-.214 3.66-.643t3.358-1.393 2.894-2.374 1.892-3.75.733-5.375q0-4.32-2.823-7.356 1.322-3.25-.286-7.285-1-.323-2.89.39t-3.287 1.573l-1.357.857q-3.322-.93-6.857-.93t-6.86.93q-.57-.393-1.516-.964T16.07-47.59 13-48.07q-1.57 4.034-.25 7.284-2.82 3.036-2.82 7.357 0 3.037.73 5.36t1.876 3.75 2.875 2.39 3.358 1.394 3.66.643q-1.428 1.286-1.75 3.68-.75.356-1.607.534t-2.034.18-2.34-.768-1.982-2.232q-.678-1.143-1.732-1.857t-1.768-.857L8.5-21.32q-.75 0-1.036.16t-.178.41.32.5.465.43l.25.177q.787.357 1.555 1.357T11-16.464l.357.82q.464 1.358 1.572 2.198t2.39 1.07 2.484.25 1.982-.124l.82-.143q0 1.357.02 3.18t.017 1.927q0 .643-.464 1.072t-1.43.25q-8.286-2.75-13.518-9.91T0-32q0-7.464 3.68-13.768t9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","UNLOCK":"M59.43-43.43v9.144q0 .93-.68 1.607t-1.607.68h-2.286q-.928 0-1.607-.68t-.68-1.606v-9.143q0-3.784-2.677-6.463T43.43-52.57t-6.466 2.677-2.678 6.464v6.86h3.428q1.43 0 2.43 1t1 2.427v20.572q0 1.427-1 2.427t-2.43 1H3.43q-1.43 0-2.43-1T0-12.57v-20.573q0-1.428 1-2.428t2.43-1h24v-6.86q0-6.606 4.695-11.302T43.43-59.43 54.73-54.73 59.43-43.43z","CREDIT_CARD":"M62.857-59.43q2.357 0 4.036 1.68t1.678 4.036v43.428q0 2.357-1.677 4.036t-4.036 1.68H5.714q-2.357 0-4.035-1.68T0-10.286v-43.428q0-2.357 1.68-4.036t4.034-1.68h57.143zM5.714-54.856q-.464 0-.803.34t-.34.803v8H64v-8q0-.465-.34-.804t-.803-.34H5.714zM62.857-9.143q.464 0 .804-.34t.34-.803V-32H4.57v21.714q0 .465.34.804t.804.34h57.143zm-53.714-4.57v-4.573h9.143v4.572H9.143zm13.714 0v-4.573H36.57v4.572H22.858z","RSS":"M13.714-16q0 2.857-2 4.857t-4.857 2-4.857-2T0-16t2-4.857 4.857-2 4.857 2 2 4.857zM32-11.607q.07 1-.607 1.714-.643.75-1.68.75h-4.82q-.893 0-1.536-.59t-.714-1.48q-.786-8.18-6.59-13.983t-13.982-6.59q-.89-.07-1.48-.714T0-34.036v-4.82q0-1.037.75-1.68.607-.607 1.536-.607h.178q5.715.464 10.93 2.875t9.25 6.482q4.07 4.036 6.48 9.25T32-11.606zm18.286.07q.07.966-.643 1.68Q49-9.143 48-9.143h-5.107q-.93 0-1.59-.625t-.696-1.518Q40.18-18.964 37-25.876t-8.268-12-12-8.267-14.59-3.643q-.892-.035-1.517-.696T0-52.036v-5.107q0-1 .714-1.643.643-.643 1.572-.643h.107q9.357.466 17.91 4.287t15.197 10.5Q42.18-38 46-29.446t4.286 17.91z","HDD_O":"M37.143-20.57q0 1.177-.84 2.016t-2.017.84-2.018-.84-.84-2.017.84-2.02 2.018-.84 2.018.84.84 2.02zm9.143 0q0 1.177-.84 2.016t-2.017.84-2.02-.84-.84-2.017.84-2.02 2.02-.84 2.016.84.84 2.02zm4 5.713v-11.43q0-.463-.34-.802t-.803-.34H5.713q-.463 0-.802.34t-.34.804v11.43q0 .463.34.802t.804.34h43.43q.463 0 .802-.34t.34-.803zM6.356-32H48.5l-5.607-17.214q-.143-.465-.572-.768t-.927-.304h-27.93q-.5 0-.927.304t-.572.768zm48.5 5.714v11.43q0 2.356-1.677 4.035t-4.037 1.677H5.713q-2.356 0-4.034-1.678T0-14.858v-11.43q0-.892.57-2.677l7.037-21.643q.607-1.893 2.25-3.072t3.607-1.177h27.93q1.963 0 3.606 1.178t2.25 3.073l7.036 21.643q.57 1.785.57 2.678z","BULLHORN":"M59.43-41.143q1.89 0 3.23 1.34T64-36.572t-1.34 3.23T59.43-32v13.714q0 1.857-1.36 3.215t-3.213 1.356q-14.893-12.393-29-13.572-2.07.68-3.25 2.357T21.5-21.34t1.43 3.304q-.716 1.18-.823 2.34t.214 2.07 1.198 1.965 1.714 1.785T27.43-8.07Q26.392-6 23.445-5.108t-6.017.41-4.716-1.982q-.25-.82-1.053-3.124T10.52-13.18t-.822-3.177-.535-3.607.126-3.518.785-3.947H5.715q-2.357 0-4.035-1.677T0-33.143V-40q0-2.357 1.68-4.036t4.034-1.678h17.143q15.536 0 32-13.715 1.857 0 3.214 1.36t1.36 3.213v13.714zM54.856-19.57v-34.073q-14.07 10.786-27.428 12.25v9.643q13.463 1.5 27.427 12.18z","BELL_O":"M32.57-3.43Q32.57-4 32-4q-2.107 0-3.625-1.518t-1.518-3.625q0-.57-.57-.57t-.573.57q0 2.607 1.84 4.447T32-2.856q.57 0 .57-.573zM8.787-13.713h46.428q-9.5-10.715-9.5-29.715 0-1.82-.857-3.75t-2.464-3.677-4.34-2.875T32-54.857t-6.054 1.125-4.34 2.875-2.463 3.678-.857 3.75q0 19-9.5 29.716zm52.928 0q0 1.857-1.357 3.214t-3.214 1.357h-16q0 3.786-2.68 6.464T32 0t-6.464-2.68-2.68-6.463h-16Q5-9.143 3.644-10.5t-1.357-3.214q1.785-1.5 3.25-3.143t3.035-4.268 2.662-5.66 1.786-7.358.696-9.286q0-5.427 4.18-10.088t10.963-5.66q-.286-.68-.286-1.393 0-1.43 1-2.43T32-64t2.43 1 1 2.43q0 .713-.287 1.39 6.786 1 10.964 5.662t4.18 10.09q0 4.964.695 9.285t1.786 7.357 2.66 5.66 3.036 4.27 3.25 3.142z","CERTIFICATE":"M49.143-32l4.928 4.82q1.073 1 .716 2.5-.43 1.466-1.857 1.823l-6.716 1.714 1.893 6.643q.43 1.464-.678 2.5-1.037 1.107-2.5.68l-6.644-1.894L36.57-6.5q-.356 1.43-1.82 1.857-.43.072-.68.072-1.106 0-1.82-.787l-4.82-4.93-4.823 4.93q-1 1.07-2.5.714-1.464-.393-1.82-1.857l-1.716-6.714-6.64 1.893q-1.466.427-2.5-.68-1.11-1.036-.68-2.5l1.893-6.643-6.714-1.714Q.5-23.214.07-24.68q-.356-1.5.716-2.5L5.714-32 .786-36.82q-1.072-1-.715-2.5.43-1.466 1.86-1.823l6.713-1.714L6.75-49.5q-.43-1.464.68-2.5 1.034-1.107 2.5-.68l6.64 1.894 1.716-6.714q.357-1.464 1.82-1.82 1.465-.43 2.5.677l4.823 4.964 4.82-4.963q1.036-1.07 2.5-.678 1.464.356 1.82 1.82l1.716 6.714 6.643-1.893q1.463-.427 2.5.68 1.106 1.036.677 2.5l-1.893 6.643 6.715 1.714q1.427.357 1.856 1.822.357 1.5-.715 2.5z","HAND_O_RIGHT":"M9.143-16q0-.93-.68-1.607t-1.606-.68-1.607.68T4.57-16t.68 1.607 1.607.68 1.607-.68.68-1.607zM59.43-36.57q0-1.823-1.394-3.198t-3.18-1.375h-20.57q0-.714.535-1.732T36-44.84t1.18-2.428.534-3.018q0-2.393-1.59-3.482T32-54.858q-.857 0-3.214 4.965-.857 1.572-1.322 2.322-1.428 2.284-4 5.177-2.535 2.893-3.607 3.786-2.464 2.036-5 2.036h-1.143v22.856h1.143q2.572 0 5.964 1.143t6.912 2.284 6.41 1.143q6.75 0 6.75-5.964 0-.93-.178-2 1.072-.572 1.697-1.875t.626-2.625-.643-2.464q1.893-1.787 1.893-4.25 0-.894-.357-1.984T43.035-32h11.82q1.858 0 3.215-1.357t1.36-3.214zm4.57-.037q0 3.75-2.696 6.464t-6.447 2.714H48.82q-.14 2.216-1.32 4.25.107.75.107 1.537 0 3.607-2.143 6.357.036 4.965-3.035 7.84T34.32-4.57q-4.75 0-11.5-2.466-5.856-2.107-7.963-2.107H4.57q-1.89 0-3.23-1.34T0-13.712v-22.858q0-1.894 1.34-3.234t3.23-1.34h10.287q.357 0 .768-.16t.84-.5.803-.642.857-.804.732-.768.68-.768.5-.607q2.32-2.643 3.57-4.607.464-.75 1.18-2.214t1.32-2.572 1.447-2.25 1.964-1.768T32-59.43q4.464 0 7.375 2.394t2.91 6.75q0 2.43-.785 4.572h13.357q3.714 0 6.43 2.714T64-36.607z","HAND_O_LEFT":"M49.143-13.714h1.143V-36.57h-1.143q-1.25 0-2.41-.43T44.5-38.32t-1.786-1.644-1.75-1.93q-.07-.106-.125-.16t-.144-.16-.16-.18q-2.572-2.892-4-5.177-.5-.787-1.357-2.43-.037-.107-.376-.804t-.66-1.285-.715-1.267-.77-1.09-.66-.41q-2.536 0-4.125 1.09t-1.59 3.48q0 1.537.536 3.02T28-44.84t1.18 1.965.534 1.732H9.144q-1.787 0-3.18 1.375T4.57-36.57q0 1.856 1.36 3.213T9.142-32h11.82q-.534.607-.892 1.696t-.356 1.983q0 2.463 1.893 4.25-.643 1.14-.643 2.463t.625 2.625 1.696 1.875q-.143.857-.143 2 0 3.036 1.732 4.5t4.84 1.464q3 0 6.535-1.143t6.93-2.285 5.963-1.144zM59.43-16q0-.93-.68-1.607t-1.607-.68-1.607.68-.68 1.607.68 1.607 1.607.68 1.607-.68.68-1.607zM64-36.57v22.856q0 1.893-1.34 3.232t-3.23 1.34H49.142q-2.107 0-7.964 2.106Q34.392-4.57 29.856-4.57q-5.07 0-8.214-2.77t-3.107-7.767l.035-.18Q16.394-18 16.394-21.642q0-.786.107-1.536-1.18-2.034-1.32-4.25H9.142q-3.75 0-6.447-2.713T0-36.607Q0-40.287 2.714-43t6.43-2.714H22.5q-.786-2.143-.786-4.572 0-4.357 2.91-6.75T32-59.43q1.357 0 2.482.626t1.964 1.768 1.447 2.25 1.32 2.572T40.394-50q1.25 1.964 3.57 4.607.073.107.5.607t.68.768.732.768.857.804.804.642.84.5.767.16H59.43q1.89 0 3.23 1.34T64-36.57z","HAND_O_UP":"M45.714-6.857q0-.93-.678-1.607t-1.607-.68-1.61.68-.677 1.607.678 1.607 1.61.68 1.606-.68.678-1.607zm4.572-27.286q0-6.75-5.965-6.75-.927 0-2 .18-.57-1.073-1.874-1.698t-2.625-.626-2.463.643q-1.786-1.893-4.25-1.893-.893 0-1.982.357t-1.696.894v-11.82q0-1.858-1.36-3.215t-3.213-1.36q-1.82 0-3.196 1.394t-1.374 3.18v20.57q-.715 0-1.732-.535T14.59-36t-2.43-1.18-3.017-.534q-2.393 0-3.482 1.59T4.57-32q0 .857 4.966 3.214 1.57.857 2.32 1.322 2.287 1.428 5.18 4 2.893 2.535 3.785 3.607 2.037 2.464 2.037 5v1.143h22.857v-1.143q0-2.572 1.143-5.964t2.286-6.912 1.143-6.41zm4.57-.178q0 4.75-2.463 11.5-2.107 5.856-2.107 7.963V-4.57q0 1.89-1.34 3.23T45.714 0H22.857q-1.893 0-3.232-1.34t-1.34-3.23v-10.287q0-.357-.16-.768t-.5-.84-.643-.803-.803-.857-.77-.732-.767-.68-.607-.5q-2.643-2.32-4.607-3.57-.75-.464-2.216-1.18t-2.57-1.32-2.25-1.447-1.77-1.964T0-32q0-4.464 2.393-7.375t6.75-2.91q2.428 0 4.57.785v-13.357q0-3.714 2.716-6.43T22.82-64q3.75 0 6.466 2.696T32-54.857v6.036q2.214.14 4.25 1.32.75-.107 1.536-.107 3.607 0 6.357 2.143 4.964-.036 7.84 3.035t2.874 8.11z","HAND_O_DOWN":"M50.286-29.714q0-3-1.143-6.536t-2.286-6.93-1.143-5.963v-1.143H22.857v1.143q0 1.25-.428 2.41T21.106-44.5t-1.643 1.786-1.928 1.75q-.322.285-.5.428-2.893 2.572-5.18 4-.785.5-2.427 1.357-.11.037-.805.376t-1.286.66-1.27.715-1.088.77-.41.66q0 2.536 1.09 4.125t3.48 1.59q1.537 0 3.02-.536T14.588-28t1.964-1.18 1.732-.534v20.57q0 1.787 1.375 3.18t3.197 1.393q1.857 0 3.214-1.36t1.36-3.213v-11.82q1.64 1.25 3.677 1.25 2.464 0 4.25-1.894 1.143.643 2.464.643t2.626-.625 1.875-1.696q.86.143 2 .143 3.037 0 4.5-1.732t1.466-4.84zm-4.572-27.43q0-.927-.678-1.606t-1.607-.68-1.61.68-.677 1.607.678 1.607 1.61.68 1.606-.68.678-1.607zm9.143 27.287q0 5.07-2.768 8.214t-7.77 3.107l-.177-.035q-2.714 2.177-6.357 2.177-.786 0-1.536-.107-1.93 1.07-4.25 1.32v6.037q0 3.75-2.714 6.447T22.82 0q-3.677 0-6.39-2.714t-2.716-6.43V-22.5q-1.928.786-4.57.786-4.323 0-6.733-2.91T0-32q0-1.357.625-2.482t1.768-1.964 2.25-1.447 2.57-1.32 2.216-1.18q1.963-1.25 4.606-3.57.107-.073.607-.5t.768-.68.77-.732.802-.857.643-.804.5-.84.16-.767V-59.43q0-1.89 1.34-3.23T22.857-64h22.857q1.893 0 3.232 1.34t1.34 3.23v10.287q0 2.107 2.107 7.964 2.464 6.787 2.464 11.323z","ARROW_CIRCLE_LEFT":"M45.714-29.714v-4.572q0-.928-.678-1.607t-1.607-.678H25.5l6.75-6.75q.68-.68.68-1.61t-.68-1.606L29-49.786q-.643-.643-1.607-.643t-1.607.644l-12.93 12.93-3.25 3.25q-.642.642-.642 1.606t.643 1.607l3.25 3.25 12.93 12.93q.642.642 1.606.642T29-14.215l3.25-3.25q.643-.643.643-1.607t-.643-1.61l-6.75-6.75h17.93q.927 0 1.606-.677t.678-1.607zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ARROW_CIRCLE_RIGHT":"M45.893-32q0-.964-.643-1.607L42-36.857l-12.93-12.93q-.64-.642-1.606-.642t-1.607.644l-3.25 3.25q-.643.643-.643 1.607t.643 1.61l6.75 6.75H11.43q-.93 0-1.61.677t-.677 1.607v4.572q0 .928.678 1.607t1.61.678h17.927l-6.75 6.75q-.678.68-.678 1.61t.677 1.606l3.25 3.25q.643.643 1.607.643t1.607-.644L42-27.144l3.25-3.25q.643-.642.643-1.606zm8.964 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ARROW_CIRCLE_UP":"M45.857-32.036q0-.964-.643-1.607L32.286-46.57l-3.25-3.25q-.643-.644-1.607-.644t-1.61.643l-3.25 3.25L9.644-33.644Q9-33 9-32.036t.643 1.607l3.25 3.25q.643.644 1.607.644t1.607-.643l6.75-6.75V-16q0 .93.68 1.607t1.606.68h4.57q.93 0 1.608-.68T32-16v-17.93l6.75 6.75q.68.68 1.607.68t1.607-.68l3.25-3.25q.643-.64.643-1.606zm9 .036q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ARROW_CIRCLE_DOWN":"M45.857-31.964q0-.965-.643-1.607l-3.25-3.25q-.643-.644-1.607-.644t-1.607.643L32-30.07V-48q0-.93-.68-1.607t-1.606-.68h-4.57q-.93 0-1.608.68T22.856-48v17.93l-6.75-6.75q-.677-.68-1.606-.68t-1.607.68l-3.25 3.25Q9-32.93 9-31.965t.643 1.607L22.57-17.43l3.25 3.25q.644.644 1.61.644t1.606-.643l3.25-3.25 12.928-12.927q.643-.643.643-1.607zm9-.036q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","GLOBE":"M27.43-59.43q7.463 0 13.766 3.68t9.983 9.982T54.856-32 51.18-18.232 41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68zm9.784 18.61q-.07.034-.34.338t-.48.34q.07 0 .16-.18t.178-.392.125-.25q.214-.25.786-.536.5-.214 1.857-.43 1.214-.284 1.82.394-.07-.07.34-.464t.52-.43q.106-.07.534-.16t.536-.267l.07-.786q-.427.036-.624-.25t-.232-.75q0 .072-.214.286 0-.25-.16-.286t-.41.036-.323.036q-.357-.11-.536-.27t-.284-.59-.143-.534q-.072-.18-.34-.375t-.34-.374q-.034-.072-.088-.197t-.107-.233-.143-.196-.196-.09-.25.18-.27.357-.16.18q-.107-.073-.214-.055t-.16.036-.162.107-.178.125q-.107.07-.304.107t-.303.072q.534-.18-.037-.394-.357-.143-.572-.107.323-.144.27-.43t-.304-.5h.178q-.035-.143-.303-.304t-.624-.303-.465-.214q-.284-.18-1.213-.34t-1.178-.02q-.18.216-.162.376t.143.5.126.447q.035.214-.197.464t-.233.43q0 .25.5.552t.357.767q-.107.286-.57.572t-.573.427q-.177.286-.052.66t.375.59q.07.072.053.143t-.125.16-.195.144-.232.125l-.107.07q-.393.18-.732-.214t-.483-.93q-.25-.892-.57-1.07-.82-.286-1.036.035-.178-.463-1.464-.927-.893-.322-2.07-.143.213-.036 0-.536-.25-.535-.68-.428.107-.215.143-.625t.036-.48q.106-.466.427-.823.036-.036.25-.303t.34-.483.017-.213q1.25.143 1.786-.393.18-.178.41-.607t.376-.607q.32-.214.5-.196t.518.196.517.18q.5.034.555-.394t-.268-.715q.43.037.107-.606-.178-.25-.285-.32-.43-.144-.966.177-.285.144.072.287-.036-.036-.34.375t-.59.625-.57-.178q-.036-.037-.197-.484t-.34-.482q-.286 0-.57.536.106-.286-.394-.536t-.857-.285q.677-.43-.287-.966-.25-.143-.732-.178t-.696.143q-.178.25-.196.41t.178.285.375.196.412.144.304.107q.5.36.285.5-.07.037-.302.126t-.41.16-.215.144q-.107.143 0 .5t-.072.5q-.177-.18-.32-.625t-.25-.59q.25.322-.893.215l-.357-.036q-.143 0-.57.072t-.734.035-.482-.284q-.143-.286 0-.715.036-.14.143-.07-.143-.107-.393-.34t-.357-.303q-1.643.536-3.357 1.464.214.037.43-.034.177-.072.463-.232t.357-.197q1.214-.5 1.5-.25l.18-.178q.5.57.713.89-.25-.14-1.072-.034-.713.214-.784.428.25.43.178.643-.143-.107-.41-.357t-.518-.393-.536-.178q-.57 0-.786.034-5.214 2.857-8.393 7.93.25.25.43.285.143.034.18.32t.088.393.41-.107q.322.285.108.678.035-.035 1.57.965.68.606.75.75.108.39-.356.64-.036-.07-.32-.32t-.323-.143q-.107.18.018.66t.375.447q-.25 0-.34.572t-.09 1.268-.034.84l.07.035q-.106.427.198 1.23t.767.697q-.463.107.716 1.536.214.286.285.32.11.073.43.27t.536.356.357.374q.143.18.357.804t.5.84q-.07.213.34.713t.374.823q-.035 0-.09.036t-.088.034q.107.25.553.5t.553.465q.036.106.07.356t.108.393.287.07q.072-.714-.857-2.214-.536-.893-.607-1.036-.107-.18-.197-.554t-.16-.517q.07 0 .214.052t.304.125.267.143.073.107q-.107.25.07.625t.43.66.607.68.43.464q.213.214.5.696t0 .482q.32 0 .713.357t.607.716q.18.285.286.928t.178.857q.072.25.304.484t.446.34l.572.285.464.25q.18.07.66.374t.77.41q.356.143.57.143t.518-.09.482-.124q.536-.072 1.036.536t.75.75q1.285.677 1.964.39-.07.037.018.27t.286.553.32.518.197.304q.18.215.644.536t.643.536q.214-.143.25-.322-.107.286.25.715t.643.356q.5-.107.5-1.143-1.107.536-1.75-.643 0-.036-.09-.196t-.142-.304-.09-.304 0-.267.18-.11q.32 0 .356-.124t-.07-.446-.144-.464q-.036-.286-.393-.715t-.428-.534q-.18.32-.573.285t-.57-.32q0 .036-.055.196t-.053.233q-.466 0-.537-.037.036-.107.09-.625t.124-.804q.036-.143.197-.428t.267-.518.144-.447-.16-.338-.625-.09q-.68.037-.93.715-.036.107-.107.375t-.18.41-.32.25q-.25.108-.857.072t-.857-.178q-.466-.286-.805-1.036t-.34-1.32q0-.36.09-.948t.107-.893-.196-.876q.107-.07.32-.34t.358-.374q.072-.036.16-.054t.162 0 .143-.053.106-.214q-.036-.037-.143-.11-.107-.106-.143-.106.25.107 1.018-.053t.982.054q.536.393.786-.07 0-.037-.09-.34t-.017-.483q.177.966 1.034.323.107.107.554.178t.625.18q.107.07.25.196t.196.16.178-.017.303-.233q.36.5.43.857.393 1.43.68 1.572.25.107.39.07t.162-.338 0-.5-.053-.447l-.037-.284v-.643l-.036-.286q-.536-.107-.66-.428t.053-.662.536-.66q.035-.037.285-.126t.555-.232.446-.286q.75-.678.537-1.25.25 0 .393-.32-.036 0-.18-.108t-.266-.18-.16-.07q.32-.18.07-.572.18-.107.268-.393t.268-.356q.32.43.75.072.25-.286.036-.572.178-.25.732-.375t.66-.34q.25.07.286-.07t.036-.43.107-.43q.143-.177.536-.32t.464-.18l.607-.39q.107-.144 0-.144.643.07 1.107-.393.36-.393-.213-.714.107-.216-.107-.34t-.536-.197q.107-.036.41-.018T39-40.68q.536-.356-.25-.57-.607-.18-1.536.43zM31.394-9.5q7.356-1.286 12.535-6.75-.11-.107-.448-.16t-.446-.126q-.643-.25-.857-.285.034-.25-.09-.466t-.286-.32-.447-.287-.393-.25q-.07-.07-.25-.214t-.25-.197-.268-.16-.303-.072-.357.036l-.107.036q-.11.035-.198.09t-.196.106-.143.107 0 .09q-.75-.61-1.286-.787-.178-.036-.393-.197t-.375-.25-.358-.053-.41.25q-.18.178-.215.536t-.07.463q-.25-.18 0-.625t.07-.66q-.107-.215-.375-.162t-.428.16-.41.305-.323.233-.302.196-.304.267q-.107.143-.214.43t-.18.392q-.07-.144-.41-.234t-.34-.196q.073.357.144 1.25t.18 1.357q.25 1.107-.43 1.714-.964.894-1.035 1.43-.144.786.427.93 0 .25-.286.73t-.25.77q0 .213.073.57z","WRENCH":"M13.714-11.43q0-.927-.678-1.606t-1.607-.678-1.61.678-.677 1.607.678 1.61 1.61.677 1.606-.678.678-1.61zm23-15L12.357-2.07Q11.037-.75 9.143-.75q-1.857 0-3.25-1.32L2.107-5.93Q.75-7.213.75-9.142q0-1.893 1.357-3.25l24.322-24.32q1.39 3.5 4.088 6.195t6.196 4.09zm22.643-15.534q0 1.393-.82 3.785-1.68 4.787-5.876 7.77t-9.23 2.98q-6.61 0-11.305-4.695T27.43-43.43t4.695-11.302T43.43-59.43q2.07 0 4.338.59t3.84 1.66q.57.394.57 1t-.57 1l-10.465 6.037v8l6.893 3.822q.178-.11 2.82-1.734t4.84-2.892 2.518-1.268q.536 0 .84.357t.303.893z","TASKS":"M36.57-13.714h22.86v-4.572H36.57v4.572zM22.858-32H59.43v-4.57H22.856V-32zm22.857-18.286H59.43v-4.57H45.713v4.57zM64-20.57v9.14q0 .93-.68 1.61t-1.606.677H2.286q-.93 0-1.607-.678T0-11.43v-9.14q0-.93.68-1.61t1.606-.677h59.428q.93 0 1.607.678t.68 1.61zm0-18.287v9.143q0 .928-.68 1.607t-1.606.678H2.286q-.93 0-1.607-.677T0-29.714v-9.143q0-.93.68-1.607t1.606-.68h59.428q.93 0 1.607.68t.68 1.607zm0-18.286V-48q0 .93-.68 1.607t-1.606.68H2.286q-.93 0-1.607-.68T0-48v-9.143q0-.928.68-1.607t1.606-.68h59.428q.93 0 1.607.68t.68 1.607z","FILTER":"M50.107-53.464q.607 1.464-.5 2.5L32-33.357v26.5q0 1.5-1.393 2.107-.464.18-.893.18-.964 0-1.607-.68l-9.143-9.143q-.678-.678-.678-1.607v-17.357L.68-50.964q-1.11-1.036-.5-2.5.606-1.393 2.106-1.393H48q1.5 0 2.107 1.393z","BRIEFCASE":"M22.857-54.857h18.286v-4.572H22.857v4.573zM64-32v17.143q0 2.357-1.68 4.036t-4.034 1.677H5.714q-2.357 0-4.035-1.678T0-14.858V-32h24v5.714q0 .93.68 1.607t1.606.68h11.428q.93 0 1.607-.68t.68-1.606V-32h24zm-27.43 0v4.57h-9.14V-32h9.14zM64-49.143v13.714H0v-13.713Q0-51.5 1.68-53.18t4.034-1.677h12.572v-5.714q0-1.43 1-2.43t2.428-1h20.572q1.428 0 2.428 1t1 2.43v5.713h12.572q2.357 0 4.035 1.678T64-49.142z","ARROWS_ALT":"M45.82-44.68L33.144-32 45.82-19.32l5.144-5.144q1.036-1.107 2.5-.5 1.393.607 1.393 2.107v16q0 .928-.678 1.607t-1.61.68h-16q-1.5 0-2.106-1.43-.607-1.393.5-2.464l5.143-5.143-12.678-12.68-12.68 12.68 5.143 5.143Q21-7.394 20.393-6q-.607 1.43-2.107 1.43h-16q-.93 0-1.607-.68T0-6.857v-16q0-1.5 1.43-2.107 1.39-.607 2.463.5l5.143 5.143L21.714-32 9.036-44.68l-5.143 5.144q-.68.68-1.607.68-.43 0-.857-.18Q0-39.643 0-41.143v-16q0-.928.68-1.607t1.606-.68h16q1.5 0 2.107 1.43.607 1.393-.5 2.464l-5.143 5.143 12.68 12.68 12.677-12.68-5.143-5.143q-1.107-1.07-.5-2.464.607-1.43 2.107-1.43h16q.93 0 1.61.68t.677 1.607v16q0 1.5-1.393 2.107-.464.18-.893.18-.927 0-1.606-.68z","USERS":"M21.18-32q-5.787.18-9.466 4.57H6.93Q4-27.43 2-28.874t-2-4.232q0-12.607 4.43-12.607.213 0 1.552.75t3.482 1.518 4.25.767q2.393 0 4.75-.82-.178 1.32-.178 2.357 0 4.964 2.893 9.143zM59.43-9.25q0 4.286-2.61 6.768T49.894 0H18.68q-4.323 0-6.93-2.482T9.143-9.25q0-1.893.125-3.696t.5-3.893.946-3.874 1.536-3.482 2.214-2.893T17.518-29t3.982-.714q.357 0 1.536.768t2.607 1.714 3.82 1.714 4.823.768 4.82-.768 3.823-1.714 2.606-1.714 1.535-.768q2.18 0 3.984.714t3.053 1.91 2.214 2.894 1.537 3.482.947 3.875.5 3.894.125 3.696zM22.856-54.857q0 3.786-2.678 6.464t-6.466 2.68-6.464-2.68-2.68-6.464 2.68-6.464T13.714-64t6.465 2.68 2.677 6.463zM48-41.143q0 5.68-4.018 9.697t-9.696 4.017-9.697-4.016-4.02-9.697 4.02-9.696 9.696-4.017 9.696 4.018T48-41.142zm20.57 8.036q0 2.786-2 4.232t-4.927 1.446h-4.786Q53.18-31.82 47.393-32q2.893-4.18 2.893-9.143 0-1.036-.18-2.357 2.358.82 4.75.82 2.108 0 4.25-.766t3.483-1.518 1.553-.75q4.428 0 4.428 12.607zM64-54.857q0 3.786-2.68 6.464t-6.463 2.68-6.464-2.68-2.68-6.464 2.68-6.464T54.857-64t6.464 2.68T64-54.858z","LINK":"M52-20.57Q52-22 51-23l-7.43-7.43q-1-1-2.427-1-1.5 0-2.572 1.144.11.107.68.66t.768.77.536.677.464.912.125.982q0 1.43-1 2.43t-2.43 1q-.534 0-.98-.126t-.912-.464-.677-.536-.768-.768-.66-.68q-1.18 1.11-1.18 2.61 0 1.427 1 2.427L40.894-13q.964.964 2.428.964 1.43 0 2.43-.928L51-18.18q1-1 1-2.39zM26.893-45.75q0-1.43-1-2.43l-7.357-7.39q-1-1-2.43-1-1.392 0-2.427.963l-5.25 5.214q-1 1-1 2.393 0 1.43 1 2.43l7.427 7.427q.964.964 2.43.964 1.5 0 2.57-1.106-.107-.107-.678-.66t-.77-.768-.535-.68-.464-.91-.124-.982q0-1.428 1-2.428t2.428-1q.536 0 .982.125t.91.465.68.536.768.77.66.677q1.18-1.107 1.18-2.607zm31.964 25.18q0 4.284-3.036 7.25l-5.25 5.213q-2.963 2.964-7.25 2.964-4.32 0-7.284-3.036l-7.357-7.39q-2.966-2.966-2.966-7.25 0-4.394 3.143-7.466l-3.143-3.143q-3.07 3.144-7.428 3.144-4.286 0-7.286-3l-7.43-7.428q-3-3-3-7.286t3.037-7.25l5.25-5.214q2.964-2.965 7.25-2.965 4.322 0 7.286 3.037L30.75-53q2.964 2.964 2.964 7.25 0 4.393-3.143 7.464l3.144 3.143q3.072-3.143 7.43-3.143 4.285 0 7.285 3l7.427 7.43q3 3 3 7.285z","CLOUD":"M68.57-22.857q0 5.678-4.016 9.696t-9.697 4.017H16q-6.607 0-11.304-4.696T0-25.142q0-4.714 2.536-8.625t6.678-5.84q-.07-1-.07-1.535 0-7.57 5.356-12.928t12.93-5.36q5.64 0 10.23 3.144t6.697 8.215q2.5-2.216 5.93-2.216 3.784 0 6.463 2.68t2.68 6.463q0 2.68-1.466 4.93 4.607 1.07 7.607 4.802t3 8.553z","FLASK":"M54.536-12.286q2 3.18.768 5.447t-5.018 2.27H9.143q-3.786 0-5.018-2.27t.768-5.446l17.964-28.32v-14.25H20.57q-.927 0-1.606-.68t-.678-1.607.678-1.607 1.607-.68h18.287q.93 0 1.607.68t.68 1.607-.68 1.607-1.607.68H36.57v14.25zM26.714-38.18L17-22.856h25.43L32.713-38.18 32-39.285v-15.57h-4.57v15.57z","SCISSORS":"M34.286-32q.928 0 1.607.68t.678 1.606-.677 1.607-1.607.678-1.607-.677-.68-1.607.68-1.607 1.606-.68zM45-29.714L63.107-15.5q1 .714.893 2-.18 1.25-1.25 1.82l-4.57 2.287q-.466.25-1.037.25-.607 0-1.107-.286L31.393-23.25l-3.93 2.357q-.284.143-.427.18.5 1.75.357 3.463-.25 2.75-2 5.268t-4.714 4.41q-4.716 3-9.894 3-4.857 0-7.93-2.785-3.213-3-2.82-7.393.25-2.714 2-5.25t4.678-4.43q4.715-3 9.93-3 2.963 0 5.392 1.11.32-.466.785-.787l4.36-2.607-4.36-2.607q-.463-.323-.784-.787Q19.606-32 16.643-32q-5.214 0-9.93-3-2.927-1.893-4.677-4.43t-2-5.25q-.18-2.106.553-4.034t2.267-3.322q3.036-2.82 7.93-2.82 5.177 0 9.892 3 2.963 1.856 4.713 4.392t2 5.285q.143 1.716-.357 3.466.143.035.428.178l3.93 2.357L56.035-50q.5-.286 1.107-.286.57 0 1.036.25l4.57 2.286q1.07.57 1.25 1.82.107 1.287-.893 2zM20.68-39q1.64-1.5.75-3.857t-3.787-4.18q-3.286-2.106-6.857-2.106-2.643 0-4.036 1.286Q5.107-46.357 6-44t3.786 4.18q3.285 2.106 6.857 2.106 2.643 0 4.036-1.286zm-3.037 26.607q2.893-1.82 3.786-4.178t-.75-3.86q-1.394-1.284-4.037-1.284-3.572 0-6.857 2.107Q6.893-17.787 6-15.43t.75 3.86q1.393 1.284 4.036 1.284 3.57 0 6.857-2.107zM24-34.286l3.43 2.072v-.393q0-1.286 1.177-2l.5-.286-2.82-1.678-.93.927q-.107.107-.357.393t-.43.43q-.07.07-.14.124t-.11.09zm8 8l3.43 1.143 26.284-20.57L57.144-48l-27.43 15.393v4.036L24-25.144l.32.286q.073.07.25.214.144.143.394.43t.393.427l.93.93zM57.143-11.43l4.57-2.284-18.57-14.572-6.322 4.93q-.07.106-.463.25z","FILES_O":"M60.57-50.286q1.43 0 2.43 1t1 2.43V-3.43Q64-2 63-1t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.43v-10.284H3.43q-1.43 0-2.43-1t-1-2.43v-24q0-1.427.714-3.142T2.43-47L17-61.57q1-1 2.714-1.716T22.857-64h14.857q1.43 0 2.43 1t1 2.43v11.713q2.427-1.43 4.57-1.43H60.57zM41.144-42.68L30.463-32h10.68v-10.68zM18.286-56.392l-10.68 10.68h10.68v-10.68zm7 23.107L36.57-44.57v-14.86H22.858v14.86q0 1.427-1 2.427t-2.428 1H4.57v22.857h18.287v-9.143q0-1.427.714-3.14t1.716-2.716zM59.43-4.57v-41.144H45.713v14.857q0 1.428-1 2.428t-2.428 1H27.43v22.86h32z","PAPERCLIP":"M50.143-14.536q0 4.18-2.822 7t-7 2.822q-4.82 0-8.39-3.572L4.18-36Q.142-40.107.142-45.68q0-5.677 3.928-9.64t9.61-3.966q5.64 0 9.75 4.036l21.606 21.643q.357.357.357.786 0 .57-1.09 1.66t-1.66 1.09q-.464 0-.822-.36L20.18-52.106q-2.823-2.75-6.466-2.75-3.785 0-6.393 2.678t-2.606 6.466q0 3.75 2.715 6.464L35.142-11.5q2.25 2.25 5.178 2.25 2.287 0 3.787-1.5t1.5-3.786q0-2.928-2.25-5.178l-20.75-20.75q-.928-.857-2.143-.857-1.035 0-1.714.677t-.68 1.714q0 1.144.894 2.11l14.643 14.64q.357.36.357.787 0 .572-1.107 1.68t-1.678 1.106q-.43 0-.787-.357L15.75-33.607q-2.25-2.18-2.25-5.322 0-2.927 2.036-4.963T20.5-45.93q3.143 0 5.32 2.25l20.75 20.75q3.573 3.5 3.573 8.394z","SAVE":"M13.714-9.143h27.43v-13.714h-27.43v13.714zm32 0h4.572v-32q0-.5-.357-1.375t-.716-1.232L39.18-53.786q-.36-.357-1.216-.714t-1.393-.357V-40q0 1.43-1 2.43t-2.427 1H12.57q-1.427 0-2.427-1t-1-2.43v-14.857H4.57v45.714h4.573V-24q0-1.43 1-2.43t2.428-1h29.716q1.428 0 2.428 1t1 2.43v14.857zM32-42.286v-11.428q0-.465-.34-.804t-.803-.34H24q-.464 0-.804.34t-.34.804v11.428q0 .465.34.804t.804.34h6.857q.464 0 .804-.34t.34-.804zm22.857 1.143V-8q0 1.43-1 2.43t-2.428 1h-48Q2-4.57 1-5.57T0-8v-48q0-1.43 1-2.43t2.43-1h33.14q1.43 0 3.144.716T42.43-57l10 10q1 1 1.713 2.714t.714 3.143z","SQUARE":"M54.857-49.143v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","REORDER":"M54.857-16v4.57q0 .93-.678 1.61t-1.61.677H2.287q-.93 0-1.607-.678T0-11.43V-16q0-.93.68-1.607t1.606-.68H52.57q.93 0 1.61.68T54.856-16zm0-18.286v4.572q0 .928-.678 1.607t-1.61.678H2.287q-.93 0-1.607-.677T0-29.714v-4.572q0-.928.68-1.607t1.606-.678H52.57q.93 0 1.61.677t.677 1.607zm0-18.285V-48q0 .93-.678 1.607t-1.61.68H2.287q-.93 0-1.607-.68T0-48v-4.57q0-.93.68-1.61t1.606-.677H52.57q.93 0 1.61.678t.677 1.61z","LIST_UL":"M13.714-13.714q0 2.857-2 4.857t-4.857 2-4.857-2-2-4.857 2-4.857 4.857-2 4.857 2 2 4.856zm0-18.286q0 2.857-2 4.857t-4.857 2-4.857-2T0-32t2-4.857 4.857-2 4.857 2 2 4.857zM64-17.143v6.857q0 .465-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-6.857q0-.464.34-.803t.804-.34h43.427q.464 0 .804.34t.34.803zM13.714-50.286q0 2.857-2 4.857t-4.857 2-4.857-2-2-4.856 2-4.857 4.857-2 4.857 2 2 4.857zM64-35.43v6.86q0 .463-.34.802t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-6.86q0-.463.34-.802t.804-.34h43.427q.464 0 .804.34t.34.803zm0-18.284v6.857q0 .464-.34.803t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-6.857q0-.465.34-.804t.804-.34h43.427q.464 0 .804.34t.34.804z","LIST_OL":"M13.607-6.143q0 2.857-1.946 4.5T6.82 0Q3.037 0 .68-2.357L2.713-5.5Q4.464-3.893 6.5-3.893q1.036 0 1.804-.518t.767-1.52q0-2.284-3.75-2l-.927-2q.286-.356 1.16-1.552t1.518-1.93 1.323-1.374v-.035q-.572 0-1.732.034t-1.73.036v1.893H1.142v-5.43h11.893v3.144l-3.393 4.107q1.82.43 2.893 1.75t1.07 3.143zm.072-22.393v5.68H.75q-.214-1.287-.214-1.93 0-1.82.84-3.32t2.017-2.43 2.357-1.696 2.018-1.554.84-1.607q0-.893-.52-1.375t-1.41-.482q-1.642 0-2.892 2.07L.75-37.285q.857-1.82 2.554-2.84t3.767-1.017q2.61 0 4.394 1.482t1.786 4.017q0 1.786-1.214 3.268t-2.68 2.304-2.695 1.802-1.267 1.875H9.93v-2.143h3.75zM64-17.143v6.857q0 .465-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-6.857q0-.5.322-.82t.822-.323h43.427q.464 0 .804.34t.34.803zM13.714-49.25v3.536H1.75v-3.536h3.82q0-1.464.02-4.357t.017-4.322v-.427h-.07q-.287.607-1.787 1.928l-2.536-2.713L6.07-63.68h3.787v14.43h3.857zM64-35.43v6.86q0 .463-.34.802t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-6.86q0-.5.322-.82t.822-.32h43.427q.464 0 .804.338t.34.803zm0-18.284v6.857q0 .464-.34.803t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-6.857q0-.465.34-.804t.804-.34h43.427q.464 0 .804.34t.34.804z","STRIKETHROUGH":"M62.857-32q.5 0 .822.32t.32.823v2.286q0 .5-.32.82t-.823.32H1.143q-.5 0-.822-.32T0-28.57v-2.287q0-.5.32-.822t.823-.32h61.714zM17.25-34.286q-1-1.25-1.82-2.857-1.716-3.464-1.716-6.714 0-6.464 4.786-11.036 4.75-4.536 14.036-4.536 1.785 0 5.964.68 2.357.43 6.32 1.714.36 1.357.75 4.215.5 4.39.5 6.534 0 .643-.177 1.607l-.43.11-3-.216-.5-.07q-1.784-5.323-3.677-7.323-3.143-3.25-7.5-3.25-4.072 0-6.5 2.11-2.393 2.07-2.393 5.213 0 2.607 2.357 5t9.964 4.607q2.465.714 6.18 2.357 2.07 1 3.392 1.857H17.25zm18.107 9.143h14.68q.25 1.393.25 3.286 0 3.964-1.466 7.57-.82 1.966-2.534 3.716-1.322 1.25-3.893 2.89-2.857 1.716-5.464 2.36-2.86.75-7.25.75-4.073 0-6.966-.823l-5-1.428q-2.035-.573-2.57-1-.287-.287-.287-.787v-.464q0-3.86-.07-5.573-.037-1.07 0-2.428l.07-1.323v-1.57l3.643-.073q.536 1.215 1.07 2.536t.805 2 .446.964q1.25 2.036 2.86 3.357 1.534 1.287 3.75 2.037 2.106.786 4.713.786 2.286 0 4.964-.964 2.75-.93 4.357-3.073 1.68-2.178 1.68-4.607 0-3-2.894-5.607-1.214-1.036-4.893-2.536z","UNDERLINE":"M1.714-56.036q-1.32-.07-1.607-.143L0-59.32q.464-.037 1.43-.037 2.14 0 4 .143 4.713.25 5.927.25 3.072 0 6-.107l5.214-.18q2 0 3.073-.07l-.036.5.072 2.284v.322q-2.144.32-4.43.32-2.143 0-2.82.894-.466.5-.466 4.714 0 .465.018 1.16t.018.912l.036 8.178.5 10q.214 4.43 1.82 7.215 1.25 2.106 3.43 3.284 3.143 1.68 6.32 1.68 3.715 0 6.823-1 2-.644 3.534-1.823 1.715-1.284 2.322-2.284 1.285-2 1.893-4.072.75-2.607.75-8.178 0-2.822-.126-4.572t-.393-4.375-.48-5.697l-.144-2.107q-.18-2.393-.857-3.143-1.216-1.25-2.75-1.214l-3.573.07-.5-.107.072-3.072h3l7.32.36q2.714.106 7-.36l.643.073q.214 1.357.214 1.82 0 .25-.143 1.108-1.607.43-3 .466-2.607.393-2.82.607-.537.536-.537 1.464 0 .25.054.964t.054 1.11q.286.677.786 14.14.214 6.966-.536 10.86-.535 2.713-1.464 4.356-1.357 2.32-4 4.393-2.68 2.034-6.5 3.177-3.893 1.18-9.107 1.18-5.964 0-10.143-1.644-4.25-1.68-6.393-4.357Q8.93-22.43 8.143-26.68q-.572-2.856-.572-8.463v-11.893q0-6.714-.606-7.607-.893-1.286-5.25-1.393zM54.857-5.714V-8q0-.5-.32-.82t-.823-.323H1.144q-.5 0-.823.322T0-8v2.286q0 .5.32.82t.823.323h52.57q.5 0 .823-.323t.32-.82z","TABLE":"M18.286-14.857v-6.857q0-.5-.322-.822t-.82-.32H5.713q-.5 0-.82.32t-.323.822v6.857q0 .5.323.82t.82.323h11.43q.5 0 .82-.322t.323-.82zm0-13.714v-6.86q0-.5-.322-.82t-.82-.32H5.713q-.5 0-.82.32t-.323.82v6.86q0 .5.323.82t.82.32h11.43q.5 0 .82-.32t.323-.82zM36.57-14.858v-6.857q0-.5-.32-.822t-.82-.32H24q-.5 0-.82.32t-.323.822v6.857q0 .5.322.82t.82.323h11.43q.5 0 .82-.322t.32-.82zm-18.284-27.43v-6.856q0-.5-.322-.82t-.82-.323H5.713q-.5 0-.82.322t-.323.82v6.858q0 .5.323.822t.82.32h11.43q.5 0 .82-.32t.323-.822zM36.57-28.57v-6.86q0-.5-.32-.82t-.82-.32H24q-.5 0-.82.32t-.323.82v6.86q0 .5.322.82t.82.32h11.43q.5 0 .82-.32t.32-.82zm18.287 13.713v-6.857q0-.5-.32-.822t-.823-.32H42.286q-.5 0-.822.32t-.32.822v6.857q0 .5.32.82t.822.323h11.428q.5 0 .822-.322t.32-.82zM36.57-42.287v-6.856q0-.5-.32-.82t-.82-.323H24q-.5 0-.82.322t-.323.82v6.858q0 .5.322.822t.82.32h11.43q.5 0 .82-.32t.32-.822zM54.858-28.57v-6.86q0-.5-.32-.82t-.823-.32H42.286q-.5 0-.822.32t-.32.82v6.86q0 .5.32.82t.822.32h11.428q.5 0 .822-.32t.32-.82zm0-13.716v-6.857q0-.5-.32-.82t-.823-.323H42.286q-.5 0-.822.322t-.32.82v6.858q0 .5.32.822t.822.32h11.428q.5 0 .822-.32t.32-.822zm4.572-11.428v38.857q0 2.357-1.68 4.036t-4.036 1.677h-48q-2.357 0-4.035-1.678T0-14.858v-38.857q0-2.357 1.68-4.036t4.034-1.68h48q2.357 0 4.036 1.68t1.68 4.036z","MAGIC":"M42.5-43.25l10.464-10.464-3.82-3.822L38.678-47.07zm15.964-10.464q0 .964-.643 1.607L11.894-6.18q-.643.644-1.607.644T8.68-6.18l-7.073-7.07q-.643-.643-.643-1.607t.643-1.607l45.93-45.93q.642-.642 1.606-.642t1.607.643l7.07 7.072q.644.64.644 1.606zM10.214-60.5l3.5 1.07-3.5 1.073-1.07 3.5-1.073-3.5-3.5-1.072 3.5-1.07L9.144-64zm12.5 5.786l7 2.143-7 2.14-2.143 7-2.14-7-7-2.14 7-2.144 2.14-7zm33.215 17.07l3.5 1.073-3.5 1.07-1.073 3.5-1.07-3.5-3.5-1.07 3.5-1.073 1.07-3.5zM33.07-60.5l3.5 1.07-3.5 1.073-1.07 3.5-1.07-3.5-3.5-1.072 3.5-1.07L32-64z","TRUCK":"M22.857-13.714q0-1.857-1.357-3.215t-3.214-1.356-3.215 1.357-1.356 3.216T15.07-10.5t3.216 1.357T21.5-10.5t1.357-3.214zM9.143-32h13.714v-9.143h-5.643q-.464 0-.785.322l-6.966 6.963q-.32.32-.32.786V-32zm45.714 18.286q0-1.857-1.357-3.215t-3.214-1.356-3.215 1.357-1.356 3.216T47.07-10.5t3.216 1.357T53.5-10.5t1.357-3.214zM64-52.57V-16q0 .536-.143.946t-.482.66-.59.412-.84.214-.802.072-.91 0-.804-.018q0 3.785-2.68 6.464t-6.464 2.68-6.465-2.68-2.677-6.464H27.43q0 3.785-2.68 6.464t-6.464 2.68-6.465-2.68-2.677-6.464H6.857q-.107 0-.803.018t-.91 0-.805-.072-.84-.214-.59-.41-.48-.662T2.285-16q0-.93.678-1.607t1.607-.68v-11.427q0-.286-.016-1.25t0-1.357.09-1.234.23-1.32.5-1.09.805-1.072l7.07-7.07q.68-.68 1.804-1.144t2.09-.464h5.713v-6.857q0-.93.68-1.61t1.606-.677h36.57q.93 0 1.608.678t.68 1.61z","PINTEREST":"M54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57q-3.966 0-7.787-1.144 2.107-3.322 2.786-5.857.32-1.216 1.927-7.537.714 1.393 2.607 2.41t4.072 1.018q4.32 0 7.714-2.445T44-24.857t1.857-9.643q0-4.07-2.125-7.643t-6.16-5.82-9.108-2.25q-3.75 0-7 1.034t-5.518 2.75-3.892 3.948-2.393 4.625-.767 4.786q0 3.713 1.428 6.534t4.18 3.965q1.07.427 1.357-.716.072-.25.286-1.107t.286-1.07q.213-.823-.394-1.537-1.822-2.18-1.822-5.393 0-5.393 3.732-9.268t9.768-3.876q5.393 0 8.41 2.93T39.145-35q0 6.07-2.448 10.32t-6.267 4.25q-2.18 0-3.5-1.552t-.823-3.732q.286-1.25.947-3.34t1.07-3.678.412-2.697q0-1.784-.965-2.963t-2.75-1.178q-2.213 0-3.75 2.034t-1.534 5.072q0 2.607.893 4.357L16.892-13.18q-.607 2.5-.464 6.323-7.36-3.25-11.894-10.036T0-32q0-7.464 3.68-13.768t9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","PINTEREST_SQUARE":"M44.57-59.43q4.25 0 7.27 3.02t3.017 7.267v34.286q0 4.25-3.018 7.268t-7.27 3.02H18.68q3.034-4.36 3.856-7.5.32-1.216 1.893-7.466.75 1.393 2.624 2.393t4.017 1q6.466 0 10.555-5.268t4.09-13.34q0-3-1.25-5.804t-3.447-4.964-5.447-3.464-7.034-1.304q-3.715 0-6.947 1.018t-5.465 2.732-3.84 3.91-2.374 4.572-.767 4.733q0 3.64 1.41 6.427t4.16 3.93q.466.177.84 0t.518-.68q.36-1.57.537-2.178.214-.823-.393-1.5-1.785-2.216-1.785-5.36 0-5.356 3.695-9.16t9.66-3.803q5.322 0 8.304 2.893t2.98 7.5q0 6-2.41 10.214t-6.196 4.215q-2.143 0-3.464-1.555t-.82-3.696q.284-1.216.945-3.305t1.054-3.643.39-2.66q0-1.75-.945-2.91T24.93-39.75q-2.18 0-3.698 2.018t-1.518 4.982q0 2.57.857 4.32l-3.5 14.787q-.856 3.572-.25 9.072h-6.534q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57z","GOOGLE_PLUS_SQUARE":"M29.607-20.5q0 2.714-2.09 4.018t-4.98 1.303q-1.466 0-2.876-.338t-2.696-1.018-2.07-1.893-.787-2.784q0-1.643.893-2.857t2.34-1.84 2.928-.894 3.018-.267q.714 0 1.107.07.07.036.82.59t.93.678.82.643.876.786.678.804.607.93.32.945.162 1.125zm-2.643-19.464q0 2.143-1.178 3.553T22.5-35q-1.893 0-3.32-1.518t-2.055-3.446-.625-3.786q0-2.18 1.143-3.714T20.93-49q1.89 0 3.338 1.607t2.07 3.607.626 3.822zm3.786-9.18l3.143-2.285H24.43q-3.037 0-5.75 1.144t-4.555 3.5-1.84 5.465q0 3.32 2.304 5.516t5.66 2.197q.786 0 1.536-.107-.465 1.035-.465 1.928 0 1.572 1.43 3.357-6.25.43-9.18 2.25-1.677 1.037-2.695 2.61t-1.018 3.39q0 1.537.66 2.77t1.733 2.017 2.464 1.322 2.768.75 2.732.213q2.143 0 4.304-.554t4.053-1.644 3.073-2.946 1.178-4.18q0-1.75-.713-3.195T30.357-28t-2.07-1.696-1.75-1.572-.716-1.59.555-1.517 1.34-1.41 1.57-1.5 1.34-2.126.554-2.947q0-2.143-.805-3.554t-2.59-3.233h2.965zm10.393 16h4.57v-2.285h-4.57V-40h-2.286v4.57h-4.57v2.287h4.57v5.714h2.286v-5.713zm13.714-16v34.287q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","GOOGLE_PLUS":"M26.25-35.57q0 1.284 1.143 2.516t2.768 2.43T33.394-28t2.75 3.714 1.143 5.072q0 3.214-1.715 6.178Q33-8.68 28.037-6.626T17.393-4.57q-4.714 0-8.804-1.484t-6.126-4.91q-1.32-2.143-1.32-4.68 0-2.892 1.588-5.356t4.232-4.107q4.68-2.93 14.43-3.572-1.144-1.5-1.698-2.64t-.553-2.61q0-1.284.75-3.034-1.643.143-2.43.143-5.284 0-8.91-3.448T4.93-49q0-2.93 1.284-5.68t3.536-4.677q2.75-2.357 6.518-3.5T24.036-64h14.928l-4.928 3.143h-4.68q2.644 2.25 4 4.75t1.358 5.714q0 2.572-.875 4.625t-2.108 3.322-2.482 2.32-2.125 2.197-.875 2.36zM21.036-39q1.357 0 2.785-.59t2.36-1.553q1.89-2.036 1.89-5.678 0-2.073-.606-4.466t-1.732-4.625-3.018-3.697-4.178-1.464q-1.5 0-2.947.695T13.25-58.5q-1.68 2.107-1.68 5.714 0 1.643.36 3.482t1.124 3.68 1.857 3.303 2.68 2.39 3.446.93zm.07 31.18q2.073 0 3.983-.466t3.535-1.393 2.607-2.606.982-3.893q0-.89-.25-1.75t-.518-1.5-.964-1.48-1.053-1.25-1.376-1.233-1.304-1.036-1.482-1.07-1.304-.93q-.57-.07-1.714-.07-1.893 0-3.75.25t-3.84.893-3.464 1.643-2.446 2.66-.964 3.768q0 2.5 1.25 4.41t3.268 2.965 4.25 1.57 4.553.52zm28.93-31.287h7.607v3.857h-7.607v7.82h-3.75v-7.82h-7.572v-3.857h7.572v-7.75h3.75v7.75z","MONEY":"M27.43-22.857h13.713v-3.43H36.57v-16H32.5l-5.286 4.894 2.75 2.857q1.5-1.32 1.965-2.035H32v10.284h-4.57v3.43zM45.713-32q0 2.5-.75 5.07t-2.125 4.787-3.626 3.607-4.928 1.393-4.93-1.393-3.624-3.607-2.125-4.786-.75-5.07.75-5.07 2.125-4.787 3.625-3.607 4.93-1.393 4.927 1.393 3.625 3.607 2.124 4.786.75 5.07zM64-22.857v-18.286q-3.786 0-6.464-2.678t-2.68-6.466H13.715q0 3.786-2.678 6.465T4.57-41.144v18.286q3.787 0 6.466 2.678t2.678 6.466h41.143q0-3.786 2.68-6.465T64-22.856zm4.57-29.714v41.14q0 .93-.677 1.61t-1.607.677h-64q-.93 0-1.607-.678T0-11.43v-41.14q0-.93.68-1.61t1.606-.677h64q.928 0 1.607.678t.678 1.61z","CARET_DOWN":"M36.57-38.857q0 .928-.677 1.607l-16 16q-.68.68-1.607.68t-1.607-.68l-16-16Q0-37.93 0-38.857t.68-1.607 1.606-.68h32q.928 0 1.607.68t.678 1.607z","CARET_UP":"M36.57-20.57q0 .927-.677 1.606t-1.607.678h-32q-.93 0-1.607-.678T0-20.57t.68-1.61l16-16q.677-.677 1.606-.677t1.607.678l16 16q.678.68.678 1.61z","CARET_LEFT":"M22.857-48v32q0 .93-.678 1.607t-1.61.68-1.606-.68l-16-16Q2.286-31.07 2.286-32t.678-1.607l16-16q.68-.68 1.607-.68t1.61.68.677 1.607z","CARET_RIGHT":"M20.57-32q0 .93-.677 1.607l-16 16q-.68.68-1.607.68t-1.607-.68T0-16v-32q0-.93.68-1.607t1.606-.68 1.607.68l16 16q.678.678.678 1.607z","COLUMNS":"M5.714-9.143H27.43v-41.143H4.57v40q0 .465.34.804t.804.34zm49.143-1.143v-40H32v41.143h21.714q.465 0 .804-.34t.34-.803zm4.572-43.428v43.428q0 2.357-1.68 4.036t-4.036 1.68h-48q-2.357 0-4.035-1.68T0-10.286v-43.428q0-2.357 1.68-4.036t4.034-1.68h48q2.357 0 4.036 1.68t1.68 4.036z","UNSORTED":"M36.57-25.143q0 .93-.677 1.607l-16 16q-.68.68-1.607.68t-1.607-.68l-16-16Q0-24.214 0-25.143t.68-1.607 1.606-.68h32q.928 0 1.607.68t.678 1.607zm0-13.714q0 .928-.677 1.607t-1.607.68h-32q-.93 0-1.607-.68T0-38.857t.68-1.607l16-16q.677-.68 1.606-.68t1.607.68l16 16q.678.678.678 1.607z","SORT_DOWN":"M36.57-25.143q0 .93-.677 1.607l-16 16q-.68.68-1.607.68t-1.607-.68l-16-16Q0-24.214 0-25.143t.68-1.607 1.606-.68h32q.928 0 1.607.68t.678 1.607z","SORT_UP":"M36.57-38.857q0 .928-.677 1.607t-1.607.68h-32q-.93 0-1.607-.68T0-38.857t.68-1.607l16-16q.677-.68 1.606-.68t1.607.68l16 16q.678.678.678 1.607z","ENVELOPE":"M64-38.643v28.357q0 2.357-1.68 4.036t-4.034 1.68H5.714q-2.357 0-4.035-1.68T0-10.286v-28.357q1.57 1.75 3.607 3.107 12.93 8.786 17.75 12.322 2.036 1.5 3.304 2.34t3.376 1.713 3.928.874h.072q1.82 0 3.928-.875t3.375-1.715 3.303-2.34q6.07-4.392 17.786-12.32 2.034-1.394 3.57-3.108zm0-10.5q0 2.822-1.75 5.393t-4.357 4.393q-13.43 9.32-16.714 11.607-.36.25-1.52 1.09t-1.928 1.356-1.857 1.16-2.054.965-1.784.323h-.072q-.82 0-1.785-.322t-2.055-.963-1.857-1.16-1.93-1.358-1.517-1.09q-3.25-2.286-9.356-6.518t-7.32-5.09q-2.215-1.5-4.18-4.124T0-48.357Q0-51.143 1.482-53t4.232-1.857h52.572q2.32 0 4.018 1.678T64-49.142z","LINKEDIN":"M12.464-41.68v35.394H.68V-41.68h11.784zm.75-10.927Q13.25-50 11.41-48.25T6.57-46.5H6.5q-2.93 0-4.714-1.75T0-52.607q0-2.643 1.84-4.375t4.803-1.732 4.75 1.732 1.82 4.375zM54.857-26.57v20.284h-11.75v-18.928q0-3.75-1.446-5.875t-4.517-2.124q-2.25 0-3.768 1.232t-2.268 3.053q-.393 1.073-.393 2.894v19.75h-11.75q.072-14.25.072-23.107T19-39.963l-.036-1.716h11.75v5.144h-.07q.713-1.143 1.463-2t2.018-1.857 3.107-1.553 4.09-.554q6.107 0 9.82 4.054t3.715 11.875z","UNDO":"M54.857-32q0 5.57-2.178 10.643t-5.86 8.75-8.75 5.857-10.64 2.18q-6.144 0-11.68-2.59t-9.43-7.304q-.25-.357-.23-.804T6.392-16l4.893-4.93q.357-.32.893-.32.57.07.82.43 2.607 3.39 6.393 5.25t8.036 1.856q3.713 0 7.088-1.447t5.84-3.91 3.91-5.84T45.714-32t-1.446-7.09-3.91-5.84-5.84-3.91-7.09-1.446q-3.5 0-6.714 1.268T15-45.393l4.893 4.93q1.107 1.07.5 2.463-.607 1.43-2.107 1.43h-16q-.93 0-1.607-.68T0-38.857v-16q0-1.5 1.43-2.107 1.39-.607 2.463.5l4.643 4.607q3.82-3.607 8.732-5.59t10.16-1.982q5.572 0 10.643 2.18t8.75 5.857 5.86 8.75T54.856-32z","LEGAL":"M63.25-9.143q0 1.893-1.32 3.214l-3.823 3.86q-1.393 1.32-3.25 1.32-1.893 0-3.214-1.32l-12.964-13q-1.36-1.287-1.36-3.216 0-1.893 1.537-3.428l-9.143-9.143-4.5 4.5q-.5.5-1.214.5t-1.214-.5q.07.07.446.428t.447.466.356.41.357.483.214.48.197.59.053.643q0 1.357-1 2.428-.107.11-.59.644t-.678.732-.66.59-.787.553-.786.32-.928.16q-1.43 0-2.43-1L2.43-33q-1-1-1-2.43 0-.463.16-.927t.32-.786.554-.786.59-.66.732-.678.643-.59q1.07-1 2.427-1 .357 0 .643.054t.59.197.48.214.484.357.41.357.465.448.427.446q-.5-.5-.5-1.214t.5-1.214l12.43-12.43q.5-.5 1.213-.5t1.214.5q-.07-.07-.446-.427t-.447-.466-.356-.41-.357-.483-.214-.48-.197-.59-.053-.643q0-1.357 1-2.428.107-.11.59-.644t.678-.732.66-.59.787-.553.786-.32.928-.16q1.43 0 2.43 1L45.57-47q1 1 1 2.43 0 .463-.16.927t-.32.786-.554.786-.59.66-.732.678-.643.59q-1.07 1-2.427 1-.357 0-.643-.054t-.59-.197-.48-.214-.484-.357-.41-.357-.465-.448-.427-.446q.5.5.5 1.214t-.5 1.214l-4.5 4.5 9.143 9.143q1.535-1.536 3.428-1.536 1.857 0 3.25 1.323L61.93-12.393q1.32 1.393 1.32 3.25z","TACHOMETER":"M13.714-22.857q0-1.893-1.34-3.232t-3.23-1.34-3.233 1.34-1.34 3.233 1.34 3.232 3.233 1.34 3.232-1.34 1.34-3.232zm6.857-16q0-1.893-1.338-3.232T16-43.43t-3.232 1.34-1.34 3.233 1.34 3.232T16-34.285t3.232-1.34 1.34-3.232zM35.858-21.68l3.607-13.64q.215-.93-.268-1.734t-1.375-1.053-1.713.232-1.07 1.41L31.428-22.82q-2.144.177-3.823 1.552t-2.25 3.518q-.714 2.75.714 5.214t4.18 3.18 5.214-.715 3.18-4.18q.57-2.143-.215-4.18t-2.573-3.25zm23.572-1.177q0-1.893-1.34-3.232t-3.233-1.34-3.232 1.34-1.34 3.233 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.232zM36.57-45.714q0-1.893-1.338-3.232T32-50.286t-3.232 1.34-1.34 3.232 1.34 3.232T32-41.142t3.232-1.34 1.34-3.232zm16 6.857q0-1.893-1.338-3.232T48-43.43t-3.232 1.34-1.34 3.233 1.34 3.232T48-34.285t3.232-1.34 1.34-3.232zm11.43 16q0 9.32-5.036 17.25-.678 1.036-1.928 1.036H6.964q-1.25 0-1.928-1.037Q0-13.5 0-22.857q0-6.5 2.536-12.43T9.356-45.5t10.215-6.82T32-54.858t12.43 2.536 10.213 6.82 6.82 10.214T64-22.856z","COMMENT_O":"M32-50.286q-7.286 0-13.625 2.482t-10.07 6.697T4.57-32q0 4 2.555 7.625t7.196 6.268l3.11 1.786-.966 3.427q-.857 3.25-2.5 6.143 5.43-2.25 9.822-6.107l1.535-1.357 2.037.214q2.464.286 4.643.286 7.286 0 13.625-2.482t10.07-6.697T59.43-32t-3.734-9.107-10.07-6.697T32-50.286zM64-32q0 6.214-4.286 11.482T48.07-12.196 32-9.143q-2.5 0-5.18-.286-7.07 6.25-16.427 8.644-1.75.5-4.072.786h-.177q-.536 0-.964-.375t-.573-.982v-.036Q4.5-1.536 4.59-1.82t.07-.36.16-.338l.216-.32.25-.305.285-.32q.25-.287 1.11-1.233t1.23-1.358 1.108-1.41 1.16-1.822.965-2.107.928-2.714q-5.606-3.18-8.838-7.857T0-32q0-6.214 4.286-11.482t11.643-8.322T32-54.857t16.07 3.053 11.644 8.322T64-32z","COMMENTS_O":"M25.143-50.286q-5.464 0-10.214 1.857t-7.555 5.037T4.57-36.57q0 2.927 1.894 5.64t5.322 4.716l3.464 2-1.25 3q1.214-.715 2.214-1.393l1.572-1.107 1.893.357q2.784.5 5.463.5 5.464 0 10.214-1.857t7.554-5.036 2.804-6.82-2.803-6.823-7.553-5.036-10.214-1.856zm0-4.57q6.82 0 12.625 2.445t9.16 6.66 3.358 9.18-3.357 9.177-9.162 6.66-12.625 2.447q-3.072 0-6.286-.57-4.428 3.142-9.928 4.57-1.287.322-3.073.572H5.75q-.393 0-.732-.286t-.41-.75q-.037-.107-.037-.232t.02-.232.07-.215l.09-.177.125-.197.143-.178.16-.18.143-.16q.18-.214.823-.892t.928-1.054.805-1.036.893-1.375.732-1.57q-4.43-2.57-6.964-6.32T0-36.57q0-4.966 3.357-9.18t9.16-6.66 12.626-2.447zM54.5-13.107q.357.856.732 1.57t.893 1.375.804 1.035.927 1.054.822.89q.034.037.14.162t.162.18.143.177.125.196l.09.178.07.215.02.23-.037.233q-.107.5-.464.786t-.787.25q-1.786-.25-3.072-.573-5.5-1.428-9.927-4.57-3.214.57-6.286.57-9.678 0-16.857-4.714 2.07.143 3.143.143 5.75 0 11.036-1.607t9.427-4.61q4.464-3.284 6.857-7.57t2.393-9.07q0-2.75-.82-5.43 4.606 2.536 7.284 6.357T64-27.43q0 4.287-2.536 8.02T54.5-13.108z","FLASH":"M31.607-43.786q.643.715.25 1.572L12.57-.894Q12.108 0 11.07 0q-.14 0-.5-.07-.606-.18-.91-.68T9.5-1.82l7.036-28.86-14.5 3.61q-.143.034-.43.034-.642 0-1.106-.393-.643-.534-.464-1.39l7.178-29.466q.143-.5.572-.82t1-.323H20.5q.68 0 1.143.448t.464 1.053q0 .287-.178.644L15.82-40.75l14.144-3.5q.286-.07.43-.07.677 0 1.213.534z","SITEMAP":"M64-19.43V-8q0 1.43-1 2.43t-2.43 1H49.144q-1.43 0-2.43-1t-1-2.43v-11.43q0-1.427 1-2.427t2.43-1h3.428v-6.857H34.287v6.857h3.428q1.43 0 2.43 1t1 2.428V-8q0 1.43-1 2.43t-2.43 1H26.286q-1.43 0-2.43-1t-1-2.43v-11.43q0-1.427 1-2.427t2.43-1h3.428v-6.857H11.43v6.857h3.427q1.43 0 2.43 1t1 2.428V-8q0 1.43-1 2.43t-2.43 1H3.43Q2-4.57 1-5.57T0-8v-11.43q0-1.427 1-2.427t2.43-1h3.427v-6.857q0-1.857 1.357-3.215t3.215-1.356h18.284v-6.857h-3.428q-1.43 0-2.43-1t-1-2.428V-56q0-1.43 1-2.43t2.43-1h11.428q1.43 0 2.43 1t1 2.43v11.43q0 1.427-1 2.427t-2.43 1h-3.428v6.857H52.57q1.86 0 3.216 1.357t1.357 3.216v6.857h3.428q1.43 0 2.43 1t1 2.428z","UMBRELLA":"M32-34.43v20.716Q32-10 29.286-7.286t-6.43 2.715-6.427-2.716-2.716-6.428q0-.93.68-1.607T16-16t1.607.68.68 1.606q0 1.785 1.392 3.178t3.177 1.393 3.18-1.393 1.392-3.178V-34.43q1.177-.39 2.284-.39t2.286.39zm27.43.966q0 .464-.34.803t-.804.34q-.393 0-.822-.36-1.75-1.64-3.32-2.463t-3.644-.82q-2.43 0-4.57 1.32t-3.68 3.464q-.25.36-.625 1t-.518.86q-.393.606-1 .606-.643 0-1.036-.607-.14-.216-.516-.86t-.625-1q-1.537-2.14-3.662-3.463t-4.554-1.32-4.553 1.32-3.66 3.464q-.25.36-.625 1t-.518.86q-.393.606-1.036.606-.606 0-1-.607-.14-.216-.516-.86t-.625-1q-1.537-2.14-3.68-3.463t-4.57-1.32q-2.073 0-3.644.82T1.964-32.68q-.428.36-.82.36-.465 0-.805-.34T0-33.465q0-.18.036-.25 1.607-6.536 6.16-11.41T16.84-52.43t12.874-2.427q5 0 9.804 1.428t8.803 4.055 6.948 6.68 4.125 8.98q.036.072.036.25zM32-59.43v3.5Q30.5-56 29.714-56t-2.285.07v-3.5q0-.927.677-1.606t1.607-.678 1.607.678.68 1.607z","PASTE":"M27.43-4.57h32v-22.86H44.57q-1.427 0-2.427-1t-1-2.427v-14.857H27.43V-4.57zM36.57-56v-2.286q0-.464-.338-.803t-.803-.34H10.285q-.465 0-.804.34t-.34.804V-56q0 .464.34.804t.804.34H35.43q.463 0 .802-.34t.34-.804zm9.144 24h10.68l-10.68-10.68V-32zM64-27.43v24Q64-2 63-1t-2.43 1H26.287q-1.43 0-2.43-1t-1-2.43v-5.713H3.43q-1.43 0-2.43-1T0-12.57v-48Q0-62 1-63t2.43-1h38.856q1.428 0 2.428 1t1 2.43v11.713q.75.464 1.286 1l14.57 14.57q1 1 1.716 2.716T64-27.43z","LIGHTBULB_O":"M26.286-43.43q0 .466-.34.805t-.803.34-.804-.34-.34-.804q0-1.64-1.93-2.534t-3.784-.893q-.465 0-.804-.34t-.34-.803.34-.804.804-.34q1.785 0 3.553.573t3.106 1.927 1.34 3.214zm5.714 0q0-2.57-1.232-4.784t-3.214-3.625-4.393-2.214-4.874-.803-4.875.803T9.02-51.84t-3.214 3.626T4.57-43.43Q4.57-39.82 7-37q.357.393 1.09 1.18t1.09 1.177Q13.75-29.18 14.213-24h8.143q.464-5.18 5.036-10.643.357-.393 1.09-1.178T29.57-37Q32-39.82 32-43.43zm4.57 0q0 5.537-3.677 9.573-1.607 1.75-2.66 3.107t-2.126 3.41-1.214 3.84q1.678 1 1.678 2.93 0 1.32-.89 2.284.89.965.89 2.286 0 1.857-1.606 2.893.465.82.465 1.678 0 1.644-1.126 2.537T23.536-8q-.715 1.57-2.143 2.5t-3.107.93-3.107-.93T13.035-8q-1.643 0-2.768-.893T9.143-11.43q0-.856.464-1.677Q8-14.143 8-16q0-1.32.893-2.286Q8-19.25 8-20.57q0-1.93 1.68-2.93-.144-1.786-1.216-3.84T6.34-30.75t-2.66-3.107Q0-37.893 0-43.43q0-3.534 1.59-6.588t4.178-5.07 5.857-3.18 6.66-1.16 6.66 1.16 5.86 3.18 4.177 5.07 1.59 6.59z","EXCHANGE":"M64-21.714v6.857q0 .464-.34.803t-.803.34H13.714v6.857q0 .464-.34.803t-.803.34q-.427 0-.856-.357L.32-17.5Q0-17.82 0-18.286q0-.5.32-.82l11.43-11.43q.32-.32.82-.32.466 0 .805.338t.34.804v6.857h49.142q.464 0 .804.34t.34.803zm0-19.43q0 .5-.32.823L52.25-28.894q-.32.322-.82.322-.466 0-.805-.34t-.34-.804v-6.857H1.144q-.464 0-.804-.34T0-37.715v-6.857q0-.466.34-.805t.803-.34h49.143v-6.856q0-.5.32-.823t.823-.32q.427 0 .856.356L63.68-41.964q.32.32.32.82z","CLOUD_DOWNLOAD":"M45.714-30.857q0-.5-.32-.822T44.57-32h-8v-12.57q0-.466-.338-.805t-.803-.34h-6.86q-.463 0-.802.34t-.34.804V-32h-8q-.464 0-.803.34t-.34.803q0 .5.322.82L31.18-17.463q.32.32.82.32t.82-.32L45.358-30q.357-.43.357-.857zm22.857 8q0 5.678-4.016 9.696t-9.697 4.017H16q-6.607 0-11.304-4.696T0-25.142q0-4.643 2.5-8.57t6.714-5.894q-.07-1.072-.07-1.536 0-7.57 5.356-12.928t12.93-5.36q5.57 0 10.195 3.11t6.732 8.25q2.536-2.216 5.93-2.216 3.784 0 6.463 2.68t2.68 6.463q0 2.714-1.466 4.93 4.643 1.106 7.625 4.838t2.98 8.518z","CLOUD_UPLOAD":"M45.714-33.143q0-.5-.32-.82L32.82-46.537q-.32-.32-.82-.32t-.82.32L18.642-34q-.357.43-.357.857 0 .5.32.822t.823.32h8v12.57q0 .466.338.805t.803.34h6.86q.463 0 .802-.34t.34-.804V-32h8q.464 0 .803-.34t.34-.803zM68.57-22.857q0 5.678-4.016 9.696t-9.697 4.017H16q-6.607 0-11.304-4.696T0-25.142q0-4.643 2.5-8.57t6.714-5.894q-.07-1.072-.07-1.536 0-7.57 5.356-12.928t12.93-5.36q5.57 0 10.195 3.11t6.732 8.25q2.536-2.216 5.93-2.216 3.784 0 6.463 2.68t2.68 6.463q0 2.714-1.466 4.93 4.643 1.106 7.625 4.838t2.98 8.518z","USER_MD":"M13.714-16q0 .93-.678 1.607t-1.607.68-1.61-.68T9.144-16t.678-1.607 1.61-.68 1.606.68.678 1.607zm36.572 2.18q0 4.32-2.607 6.784T40.75-4.57H9.536q-4.322 0-6.93-2.466T0-13.82q0-2.43.196-4.68t.858-4.93 1.696-4.73 2.893-3.68T9.93-34q-.787 1.857-.787 4.286v7.25q-2.072.714-3.322 2.5T4.57-16q0 2.857 2 4.857t4.86 2 4.856-2 2-4.857q0-2.18-1.268-3.964t-3.304-2.5v-7.25q0-2.215.893-3.322 4.714 3.715 10.536 3.715t10.536-3.716q.89 1.107.89 3.322v2.285q-3.784 0-6.463 2.68t-2.678 6.464v3.18q-1.144 1.035-1.144 2.535 0 1.427 1 2.427t2.428 1 2.43-1 1-2.428q0-1.5-1.144-2.537v-3.18q0-1.856 1.357-3.213t3.214-1.357 3.216 1.357 1.357 3.214v3.18Q40-14.072 40-12.572q0 1.427 1 2.427t2.43 1 2.427-1 1-2.428q0-1.5-1.143-2.537v-3.18q0-2.427-1.232-4.552t-3.34-3.34q0-.356.02-1.516t0-1.715-.09-1.483-.25-1.678-.465-1.43q2.43.536 4.286 2.16t2.893 3.68 1.696 4.73.857 4.93.196 4.68zm-11.43-31.894q0 5.678-4.017 9.696T25.142-32t-9.697-4.018-4.017-9.696 4.016-9.697 9.697-4.02 9.696 4.02 4.017 9.696z","STETHOSCOPE":"M45.714-38.857q0-.93-.678-1.607t-1.607-.68-1.61.68-.677 1.607.678 1.607 1.61.68 1.606-.68.678-1.607zm4.572 0q0 2.214-1.268 3.964t-3.304 2.5v14.107q0 5.68-4.696 9.697T29.714-4.57 18.41-8.59t-4.696-9.696V-23q-5.857-.714-9.785-4.57t-3.93-9v-18.287q0-.93.68-1.607t1.606-.68q.214 0 .57.073.608-1.073 1.68-1.716t2.32-.643q1.894 0 3.233 1.34t1.34 3.233-1.34 3.232-3.233 1.34q-1.178 0-2.286-.644v14.36q0 3.784 3.36 6.463T16-27.43t8.07-2.677 3.36-6.464v-14.36q-1.11.644-2.287.644-1.893 0-3.232-1.34t-1.34-3.23 1.34-3.233 3.233-1.34q1.25 0 2.32.644t1.68 1.715q.357-.073.57-.073.93 0 1.608.68t.68 1.606v18.286q0 5.14-3.93 9T18.287-23v4.714q0 3.786 3.357 6.465t8.07 2.677 8.073-2.678 3.357-6.466v-14.107q-2.036-.75-3.304-2.5t-1.27-3.964q0-2.857 2-4.857t4.86-2 4.856 2 2 4.857z","SUITCASE":"M22.857-50.286h18.286v-4.57H22.857v4.57zm-12.57 0V-4.57H8q-3.286 0-5.643-2.36T0-12.57v-29.716q0-3.285 2.357-5.643T8-50.285h2.286zm40 0V-4.57H13.713v-45.716h4.572V-56q0-1.43 1-2.43t2.428-1h20.572q1.428 0 2.428 1t1 2.43v5.714h4.572zm13.713 8v29.715q0 3.284-2.357 5.64T56-4.57h-2.286v-45.716H56q3.286 0 5.643 2.357T64-42.285z","BELL":"M32.57-3.43Q32.57-4 32-4q-2.107 0-3.625-1.518t-1.518-3.625q0-.57-.57-.57t-.573.57q0 2.607 1.84 4.447T32-2.856q.57 0 .57-.573zm29.144-10.284q0 1.857-1.357 3.214t-3.214 1.357h-16q0 3.786-2.68 6.464T32 0t-6.464-2.68-2.68-6.463h-16Q5-9.143 3.644-10.5t-1.357-3.214q1.785-1.5 3.25-3.143t3.035-4.268 2.662-5.66 1.786-7.358.696-9.286q0-5.427 4.18-10.088t10.963-5.66q-.286-.68-.286-1.393 0-1.43 1-2.43T32-64t2.43 1 1 2.43q0 .713-.287 1.39 6.786 1 10.964 5.662t4.18 10.09q0 4.964.695 9.285t1.786 7.357 2.66 5.66 3.036 4.27 3.25 3.142z","COFFEE":"M59.43-41.143q0-2.857-2-4.857t-4.86-2h-2.284v13.714h2.285q2.86 0 4.86-2t2-4.857zM0-13.713h64q0 3.784-2.68 6.463t-6.463 2.68H9.143q-3.786 0-6.464-2.68T0-13.714zm66.286-27.43q0 5.68-4.018 9.697T52.57-27.43h-2.284v1.144q0 3.286-2.357 5.643t-5.644 2.357H17.143q-3.286 0-5.643-2.357t-2.357-5.643V-52.57q0-.93.678-1.61t1.61-.677h41.14q5.68 0 9.698 4.018t4.018 9.697z","CUTLERY":"M22.857-61.714v22.857q0 2.178-1.268 3.964t-3.304 2.5V-4.57q0 1.856-1.357 3.213T13.713 0h-4.57Q7.285 0 5.928-1.357T4.57-4.57v-27.823q-2.034-.714-3.302-2.5T0-38.857v-22.857q0-.93.68-1.607T2.285-64t1.607.68.678 1.606v14.857q0 .928.68 1.607t1.607.68 1.607-.68.68-1.607v-14.857q0-.93.677-1.607t1.61-.68 1.606.68.678 1.606v14.857q0 .928.68 1.607t1.606.68 1.607-.68.68-1.607v-14.857q0-.93.677-1.607T20.57-64t1.61.68.677 1.606zm27.43 0V-4.57q0 1.856-1.358 3.213T45.713 0h-4.57q-1.858 0-3.215-1.357T36.57-4.57v-18.287h-8q-.463 0-.802-.34t-.34-.803v-28.57q0-4.716 3.358-8.073T38.856-64H48q.93 0 1.607.68t.68 1.606z","FILE_TEXT_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zM13.714-35.43q0-.5.322-.82t.82-.32H40q.5 0 .82.32t.323.82v2.287q0 .5-.322.822T40-32H14.857q-.5 0-.82-.32t-.323-.823v-2.286zm26.286 8q.5 0 .82.323t.323.82V-24q0 .5-.322.82t-.82.323H14.857q-.5 0-.82-.322t-.323-.82v-2.286q0-.5.322-.82t.82-.323H40zm0 9.144q.5 0 .82.322t.323.82v2.287q0 .5-.322.82t-.82.323H14.857q-.5 0-.82-.322t-.323-.82v-2.287q0-.5.322-.82t.82-.323H40z","BUILDING_O":"M13.714-17.143v2.286q0 .464-.34.803t-.803.34h-2.284q-.465 0-.804-.34t-.34-.803v-2.286q0-.464.34-.803t.804-.34h2.285q.466 0 .805.34t.34.803zm0-9.143V-24q0 .464-.34.804t-.803.34h-2.284q-.465 0-.804-.34T9.142-24v-2.286q0-.464.34-.803t.804-.34h2.285q.466 0 .805.34t.34.804zm9.143 0V-24q0 .464-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-2.286q0-.464.34-.803t.804-.34h2.284q.465 0 .804.34t.34.804zm-9.143-9.143v2.287q0 .464-.34.804t-.803.34h-2.284q-.465 0-.804-.34t-.34-.803v-2.286q0-.463.34-.802t.804-.34h2.285q.466 0 .805.34t.34.803zm27.43 18.287v2.286q0 .464-.34.803t-.804.34h-2.286q-.464 0-.803-.34t-.34-.803v-2.286q0-.464.34-.803t.804-.34H40q.464 0 .804.34t.34.803zM32-26.286V-24q0 .464-.34.804t-.803.34H28.57q-.463 0-.802-.34t-.34-.804v-2.286q0-.464.34-.803t.803-.34h2.287q.464 0 .804.34t.34.804zm-9.143-9.143v2.287q0 .464-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-2.286q0-.463.34-.802t.804-.34h2.284q.465 0 .804.34t.34.803zm-9.143-9.14v2.284q0 .465-.34.804t-.803.34h-2.284q-.465 0-.804-.34t-.34-.804v-2.285q0-.466.34-.805t.804-.34h2.285q.466 0 .805.34t.34.804zm27.43 18.284V-24q0 .464-.34.804t-.804.34h-2.286q-.464 0-.803-.34T36.57-24v-2.286q0-.464.34-.803t.804-.34H40q.464 0 .804.34t.34.804zM32-35.43v2.287q0 .464-.34.804t-.803.34H28.57q-.463 0-.802-.34t-.34-.803v-2.286q0-.463.34-.802t.803-.34h2.287q.464 0 .804.34t.34.803zm-9.143-9.14v2.284q0 .465-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-2.285q0-.466.34-.805t.804-.34h2.284q.465 0 .804.34t.34.804zm-9.143-9.144v2.285q0 .466-.34.805t-.803.34h-2.284q-.465 0-.804-.34t-.34-.804v-2.284q0-.465.34-.804t.804-.34h2.285q.466 0 .805.34t.34.804zm27.43 18.285v2.287q0 .464-.34.804T40-32h-2.286q-.464 0-.803-.34t-.34-.803v-2.286q0-.463.34-.802t.804-.34H40q.464 0 .804.34t.34.803zM32-44.57v2.284q0 .465-.34.804t-.803.34H28.57q-.463 0-.802-.34t-.34-.804v-2.285q0-.466.34-.805t.803-.34h2.287q.464 0 .804.34t.34.804zm-9.143-9.144v2.285q0 .466-.34.805t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-2.284q0-.465.34-.804t.804-.34h2.284q.465 0 .804.34t.34.804zm18.286 9.143v2.284q0 .465-.34.804t-.803.34h-2.286q-.464 0-.803-.34t-.34-.804v-2.285q0-.466.34-.805t.804-.34H40q.464 0 .804.34t.34.804zM32-53.715v2.285q0 .466-.34.805t-.803.34H28.57q-.463 0-.802-.34t-.34-.804v-2.284q0-.465.34-.804t.803-.34h2.287q.464 0 .804.34t.34.804zm9.143 0v2.285q0 .466-.34.805t-.803.34h-2.286q-.464 0-.803-.34t-.34-.804v-2.284q0-.465.34-.804t.804-.34H40q.464 0 .804.34t.34.804zM32-4.57h13.714v-54.86H4.57v54.86h13.716v-8q0-.466.34-.805t.803-.34h11.427q.464 0 .804.34t.34.804v8zm18.286-57.144v59.428q0 .93-.68 1.607T48 0H2.286Q1.356 0 .68-.68T0-2.285v-59.428q0-.93.68-1.607T2.285-64H48q.93 0 1.607.68t.68 1.606z","HOSPITAL_O":"M13.714-17.143v2.286q0 .464-.34.803t-.803.34h-2.284q-.465 0-.804-.34t-.34-.803v-2.286q0-.464.34-.803t.804-.34h2.285q.466 0 .805.34t.34.803zm0-9.143V-24q0 .464-.34.804t-.803.34h-2.284q-.465 0-.804-.34T9.142-24v-2.286q0-.464.34-.803t.804-.34h2.285q.466 0 .805.34t.34.804zm9.143 0V-24q0 .464-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.804v-2.286q0-.464.34-.803t.804-.34h2.284q.465 0 .804.34t.34.804zm-9.143-9.143v2.287q0 .464-.34.804t-.803.34h-2.284q-.465 0-.804-.34t-.34-.803v-2.286q0-.463.34-.802t.804-.34h2.285q.466 0 .805.34t.34.803zm27.43 18.287v2.286q0 .464-.34.803t-.804.34h-2.286q-.464 0-.803-.34t-.34-.803v-2.286q0-.464.34-.803t.804-.34H40q.464 0 .804.34t.34.803zM32-26.286V-24q0 .464-.34.804t-.803.34H28.57q-.463 0-.802-.34t-.34-.804v-2.286q0-.464.34-.803t.803-.34h2.287q.464 0 .804.34t.34.804zm-9.143-9.143v2.287q0 .464-.34.804t-.803.34H19.43q-.466 0-.805-.34t-.34-.803v-2.286q0-.463.34-.802t.804-.34h2.284q.465 0 .804.34t.34.803zm18.286 9.144V-24q0 .464-.34.804t-.803.34h-2.286q-.464 0-.803-.34T36.57-24v-2.286q0-.464.34-.803t.804-.34H40q.464 0 .804.34t.34.804zM32-35.43v2.287q0 .464-.34.804t-.803.34H28.57q-.463 0-.802-.34t-.34-.803v-2.286q0-.463.34-.802t.803-.34h2.287q.464 0 .804.34t.34.803zm9.143 0v2.287q0 .464-.34.804T40-32h-2.286q-.464 0-.803-.34t-.34-.803v-2.286q0-.463.34-.802t.804-.34H40q.464 0 .804.34t.34.803zM32-4.57h13.714v-41.144H36.57v1.143q0 1.427-1 2.427t-2.427 1h-16q-1.43 0-2.43-1t-1-2.428v-1.144H4.572V-4.57h13.716v-8q0-.466.34-.805t.803-.34h11.427q.464 0 .804.34t.34.804v8zm0-42.287v-11.43q0-.463-.34-.802t-.803-.34H28.57q-.463 0-.802.34t-.34.804v3.43h-4.57v-3.43q0-.464-.34-.803t-.804-.34H19.43q-.466 0-.805.34t-.34.804v11.43q0 .463.34.802t.804.34h2.284q.465 0 .804-.34t.34-.803v-3.43h4.57v3.43q0 .464.34.803t.803.34h2.287q.464 0 .804-.34t.34-.803zM50.286-48v45.714q0 .93-.68 1.607T48 0H2.286Q1.356 0 .68-.68T0-2.285V-48q0-.93.68-1.607t1.606-.68h11.428V-60.57q0-1.43 1-2.43t2.43-1h16q1.427 0 2.427 1t1 2.43v10.284H48q.93 0 1.607.68t.68 1.606z","AMBULANCE":"M22.857-13.714q0-1.893-1.34-3.232t-3.23-1.34-3.233 1.34-1.34 3.232 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.232zM9.143-32h13.714v-9.143h-5.643q-.5.072-.785.322l-6.966 6.963q-.25.428-.32.786V-32zm45.714 18.286q0-1.893-1.34-3.232t-3.23-1.34-3.233 1.34-1.34 3.232 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.232zm4.572-24v-6.857q0-.5-.323-.823t-.82-.32h-8v-8q0-.5-.323-.823t-.82-.32h-6.858q-.5 0-.822.32t-.32.822v8h-8q-.5 0-.823.32t-.32.823v6.856q0 .5.32.82t.823.323h8v8q0 .5.32.82t.823.32h6.857q.5 0 .82-.32t.323-.82v-8h8q.5 0 .82-.323t.323-.82zm9.14-19.43V-16q0 .93-.677 1.607t-1.607.68H59.43q0 3.784-2.68 6.463t-6.464 2.68-6.465-2.68-2.677-6.464H27.43q0 3.785-2.68 6.464t-6.464 2.68-6.465-2.68-2.677-6.464H4.57q-.927 0-1.606-.68T2.286-16t.678-1.607 1.607-.68v-14.856q0-.928.466-2.07t1.143-1.823l7.07-7.07q.68-.68 1.82-1.144t2.073-.464h5.714v-11.43q0-.927.68-1.606t1.606-.68h41.143q.928 0 1.607.68t.678 1.607z","MEDKIT":"M45.714-24v-6.857q0-.5-.32-.822T44.57-32h-8v-8q0-.5-.32-.82t-.82-.323h-6.86q-.5 0-.82.322t-.32.82v8h-8q-.5 0-.823.32t-.32.823V-24q0 .5.32.82t.822.323h8v8q0 .5.32.82t.82.323h6.86q.5 0 .82-.322t.32-.82v-8h8q.5 0 .823-.323t.32-.82zM22.857-50.286h18.286v-4.57H22.857v4.57zm-13.714 0V-4.57H8q-3.286 0-5.643-2.36T0-12.57v-29.716q0-3.285 2.357-5.643T8-50.285h1.143zm42.286 0V-4.57H12.57v-45.716h5.716V-56q0-1.43 1-2.43t2.428-1h20.572q1.428 0 2.428 1t1 2.43v5.714h5.715zm12.57 8v29.715q0 3.284-2.357 5.64T56-4.57h-1.143v-45.716H56q3.286 0 5.643 2.357T64-42.285z","FIGHTER_JET":"M68.57-29.714q-.034 1.143-10.284 3.428l-12.572 1.143-8 2.286H35.43l-10.466 12.57h2.465q.927 0 1.606.162t.678.41-.678.41-1.607.162H16v-1.143h2.286v-14.857H12.57l-6.856 8H2.286l-1.143-1.143v-6.857h1.143v-1.143h4.57v-.285L0-27.43V-32l6.857-.857v-.286h-4.57v-1.143H1.142v-6.857l1.143-1.143h3.428l6.857 8h5.716v-14.857H16v-1.143h11.43q.927 0 1.606.16t.678.412-.678.41-1.607.16h-2.466L35.43-36.57h2.284l8 2.284 12.572 1.143q9.32 2.072 10.25 3.322z","BEER":"M22.857-32v-13.714h-9.143v9.143q0 1.89 1.34 3.23T18.286-32h4.57zM59.43-16v6.857H18.285V-16l4.57-6.857h-4.57q-5.68 0-9.697-4.018T4.57-36.57V-48l-2.284-2.286 1.143-4.57h17.14l1.144-4.573H56l1.143 6.86-2.286 1.14v28.573z","H_SQUARE":"M45.714-16v-32q0-.93-.678-1.607t-1.607-.68h-4.573q-.928 0-1.607.68T36.57-48v11.43H18.287V-48q0-.93-.68-1.607T16-50.287h-4.57q-.93 0-1.61.68T9.144-48v32q0 .93.678 1.607t1.61.68H16q.93 0 1.607-.68t.68-1.607v-11.43H36.57V-16q0 .93.68 1.607t1.607.68h4.572q.927 0 1.606-.68T45.714-16zm9.143-33.143v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","PLUS_SQUARE":"M45.714-29.714v-4.572q0-.928-.678-1.607t-1.607-.678H32V-48q0-.93-.68-1.607t-1.606-.68h-4.57q-.93 0-1.608.68T22.856-48v11.43H11.43q-.93 0-1.61.677t-.677 1.607v4.572q0 .928.678 1.607t1.61.678h11.427V-16q0 .93.68 1.607t1.606.68h4.57q.93 0 1.608-.68T32-16v-11.43h11.43q.927 0 1.606-.677t.678-1.607zm9.143-19.43v34.287q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","ANGLE_DOUBLE_LEFT":"M22.393-14.857q0 .464-.357.82L20.25-12.25q-.357.357-.82.357t-.823-.357L1.964-28.893q-.357-.357-.357-.82t.357-.823L18.607-47.18q.357-.356.822-.356t.82.357l1.786 1.787q.357.357.357.822t-.357.82L8-29.714 22.036-15.68q.357.36.357.823zm13.714 0q0 .464-.357.82l-1.786 1.787q-.357.357-.82.357t-.823-.357L15.68-28.893q-.36-.357-.36-.82t.36-.823L32.32-47.18q.36-.356.823-.356t.82.357l1.787 1.787q.357.357.357.822t-.357.82L21.714-29.714 35.75-15.68q.357.36.357.823z","ANGLE_DOUBLE_RIGHT":"M21.25-29.714q0 .464-.357.82L4.25-12.25q-.357.357-.82.357t-.823-.357L.82-14.036q-.356-.357-.356-.82t.357-.823l14.037-14.034L.82-43.75q-.356-.357-.356-.82t.357-.823l1.787-1.786q.357-.356.822-.356t.82.357l16.643 16.644q.357.357.357.822zm13.714 0q0 .464-.357.82L17.964-12.25q-.357.357-.82.357t-.823-.357l-1.784-1.786q-.357-.357-.357-.82t.356-.823L28.57-29.713 14.537-43.75q-.357-.357-.357-.82t.356-.823l1.785-1.786q.36-.356.823-.356t.82.357l16.644 16.644q.357.357.357.822z","ANGLE_DOUBLE_UP":"M38.393-17.143q0 .464-.357.822l-1.786 1.784q-.357.357-.82.357t-.823-.356L20.57-28.57 6.537-14.537q-.357.357-.822.357t-.82-.356L3.106-16.32q-.357-.36-.357-.823t.357-.82L19.75-34.608q.357-.357.82-.357t.823.357l16.643 16.643q.357.357.357.82zm0-13.714q0 .464-.357.82L36.25-28.25q-.357.357-.82.357t-.823-.357L20.57-42.286 6.537-28.25q-.357.357-.822.357t-.82-.357l-1.787-1.786q-.357-.357-.357-.82t.357-.823L19.75-48.32q.357-.36.82-.36t.823.36l16.643 16.64q.357.36.357.823z","ANGLE_DOUBLE_DOWN":"M38.393-33.143q0 .464-.357.822L21.393-15.68q-.357.36-.822.36t-.82-.36L3.107-32.32q-.357-.36-.357-.823t.357-.82l1.786-1.787q.357-.357.82-.357t.823.357L20.57-21.714 34.608-35.75q.357-.357.822-.357t.82.357l1.786 1.786q.357.357.357.82zm0-13.714q0 .464-.357.82L21.393-29.392q-.357.357-.822.357t-.82-.357L3.107-46.036q-.357-.357-.357-.82t.357-.823l1.786-1.784q.357-.357.82-.357t.823.356L20.57-35.43l14.037-14.034q.357-.357.822-.357t.82.356l1.786 1.785q.357.36.357.823z","ANGLE_LEFT":"M22.393-44.57q0 .463-.357.82L8-29.714 22.036-15.68q.357.36.357.823t-.357.82L20.25-12.25q-.357.357-.82.357t-.823-.357L1.964-28.893q-.357-.357-.357-.82t.357-.823L18.607-47.18q.357-.356.822-.356t.82.357l1.786 1.787q.357.357.357.822z","ANGLE_RIGHT":"M21.25-29.714q0 .464-.357.82L4.25-12.25q-.357.357-.82.357t-.823-.357L.82-14.036q-.356-.357-.356-.82t.357-.823l14.037-14.034L.82-43.75q-.356-.357-.356-.82t.357-.823l1.787-1.786q.357-.356.822-.356t.82.357l16.643 16.644q.357.357.357.822z","ANGLE_UP":"M38.393-21.714q0 .464-.357.82l-1.786 1.787q-.357.357-.82.357t-.823-.357L20.57-33.143 6.537-19.107q-.357.357-.822.357t-.82-.357l-1.787-1.786q-.357-.357-.357-.82t.357-.823L19.75-39.18q.357-.356.82-.356t.823.357l16.643 16.644q.357.357.357.822z","ANGLE_DOWN":"M38.393-37.714q0 .464-.357.82L21.393-20.25q-.357.357-.822.357t-.82-.357L3.107-36.893q-.357-.357-.357-.82t.357-.823l1.786-1.785q.357-.36.82-.36t.823.36L20.57-26.287 34.608-40.32q.357-.36.822-.36t.82.36l1.786 1.784q.357.357.357.822z","DESKTOP":"M64-28.57v-29.716q0-.464-.34-.803t-.803-.34H5.714q-.464 0-.803.34t-.34.804v29.715q0 .463.34.802t.804.34h57.143q.464 0 .804-.34t.34-.803zm4.57-29.716v38.857q0 2.36-1.677 4.037t-4.036 1.68H43.43q0 1.32.57 2.767t1.143 2.535.57 1.553q0 .928-.677 1.607t-1.607.68H25.142q-.93 0-1.607-.68t-.68-1.607q0-.5.573-1.572t1.14-2.5.573-2.784H5.713q-2.356 0-4.034-1.68T0-19.428v-38.856q0-2.357 1.68-4.035T5.713-64h57.143q2.357 0 4.036 1.68t1.678 4.034z","LAPTOP":"M14.857-18.286q-2.357 0-4.036-1.678T9.144-24v-25.143q0-2.357 1.678-4.036t4.037-1.677h38.857q2.357 0 4.036 1.678t1.68 4.037V-24q0 2.357-1.68 4.036t-4.036 1.678H14.857zm-1.143-30.857V-24q0 .464.34.804t.803.34h38.857q.465 0 .804-.34t.34-.804v-25.143q0-.464-.34-.803t-.804-.34H14.857q-.464 0-.803.34t-.34.803zM62.857-16h5.714v3.43q0 1.427-1.677 2.427t-4.036 1H5.714q-2.357 0-4.035-1T0-12.57V-16h62.857zm-25.714 3.43q.57 0 .57-.573t-.57-.57H31.43q-.573 0-.573.57t.572.572h5.713z","TABLET":"M22.857-13.714q0-.93-.678-1.607T20.57-16t-1.606.68-.678 1.606.678 1.607 1.607.678 1.61-.677.677-1.607zM36.57-19.43v-34.284q0-.465-.338-.804t-.803-.34H5.713q-.464 0-.803.34t-.34.804v34.285q0 .466.34.805t.804.34H35.43q.463 0 .802-.34t.34-.804zm4.573-34.284v38.857q0 2.357-1.68 4.036T35.43-9.144H5.713q-2.357 0-4.035-1.678T0-14.858v-38.857q0-2.357 1.68-4.036t4.034-1.68H35.43q2.356 0 4.034 1.68t1.68 4.036z","MOBILE_PHONE":"M16.57-13.714q0-1.18-.838-2.018t-2.018-.84-2.018.84-.84 2.018.84 2.018 2.018.84 2.018-.84.84-2.018zM24-19.43v-25.14q0-.466-.34-.805t-.803-.34H4.57q-.463 0-.802.34t-.34.804v25.14q0 .466.34.805t.803.34h18.287q.464 0 .804-.34t.34-.804zm-6.857-30.284q0-.572-.572-.572h-5.713q-.57 0-.57.572t.57.57h5.714q.573 0 .573-.57zm10.286-.572v36.572q0 1.857-1.36 3.214t-3.213 1.357H4.57q-1.856 0-3.213-1.357T0-13.714v-36.572q0-1.857 1.357-3.214t3.214-1.357h18.287q1.857 0 3.214 1.357t1.36 3.214z","CIRCLE_O":"M27.43-51.43q-5.287 0-9.75 2.61t-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32t-2.607-9.75-7.07-7.07-9.75-2.61zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","QUOTE_LEFT":"M27.43-29.714V-16q0 2.857-2 4.857t-4.86 2H6.858q-2.857 0-4.857-2T0-16v-25.143q0-3.714 1.446-7.09t3.91-5.838 5.84-3.912 7.09-1.447h2.285q.93 0 1.61.68t.677 1.607v4.572q0 .927-.678 1.606t-1.61.678h-2.284q-3.786 0-6.465 2.68t-2.677 6.463V-40q0 1.43 1 2.43t2.428 1h8q2.86 0 4.86 2t2 4.856zm32 0V-16q0 2.857-2 4.857t-4.86 2H38.858q-2.857 0-4.857-2T32-16v-25.143q0-3.714 1.446-7.09t3.91-5.838 5.84-3.912 7.09-1.447h2.285q.93 0 1.61.68t.677 1.607v4.572q0 .927-.678 1.606t-1.61.678h-2.284q-3.786 0-6.465 2.68t-2.677 6.463V-40q0 1.43 1 2.43t2.428 1h8q2.86 0 4.86 2t2 4.856z","QUOTE_RIGHT":"M27.43-52.57v25.14q0 3.716-1.448 7.09t-3.91 5.84-5.84 3.91-7.09 1.447H6.858q-.928 0-1.607-.678t-.68-1.61V-16q0-.93.68-1.607t1.607-.68h2.286q3.786 0 6.464-2.677t2.68-6.465v-1.14q0-1.43-1-2.43t-2.43-1h-8Q4-32 2-34t-2-4.857V-52.57q0-2.86 2-4.86t4.857-2H20.57q2.86 0 4.86 2t2 4.86zm32 0v25.14q0 3.716-1.448 7.09t-3.91 5.84-5.84 3.91-7.09 1.447h-2.285q-.928 0-1.607-.678t-.68-1.61V-16q0-.93.68-1.607t1.607-.68h2.286q3.786 0 6.464-2.677t2.68-6.465v-1.14q0-1.43-1-2.43t-2.43-1h-8Q36-32 34-34t-2-4.857V-52.57q0-2.86 2-4.86t4.857-2H52.57q2.86 0 4.86 2t2 4.86z","SPINNER":"M18.786-14.214q0 1.893-1.34 3.232t-3.232 1.34Q12.357-9.643 11-11t-1.357-3.214q0-1.893 1.34-3.232t3.23-1.34 3.233 1.34 1.34 3.232zM36.57-6.857q0 1.893-1.338 3.232T32-2.285t-3.232-1.34-1.34-3.232 1.34-3.232T32-11.43t3.232 1.34 1.34 3.233zM11.43-32q0 1.893-1.34 3.232t-3.233 1.34-3.232-1.34T2.285-32t1.34-3.232 3.232-1.34 3.232 1.34T11.43-32zm42.927 17.786q0 1.857-1.357 3.214t-3.214 1.357q-1.893 0-3.232-1.34t-1.34-3.23 1.34-3.233 3.232-1.34 3.232 1.34 1.34 3.232zM19.93-49.786q0 2.357-1.68 4.036t-4.036 1.68-4.035-1.68-1.68-4.036 1.68-4.035 4.034-1.68 4.036 1.68 1.68 4.034zM61.713-32q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34T52.57-32t1.34-3.232 3.233-1.34 3.232 1.34T61.715-32zM38.857-57.143q0 2.857-2 4.857t-4.857 2-4.857-2-2-4.857 2-4.857T32-64t4.857 2 2 4.857zm18.93 7.357q0 3.322-2.358 5.66t-5.644 2.34q-3.322 0-5.66-2.34t-2.34-5.66q0-3.285 2.34-5.643t5.66-2.356q3.285 0 5.643 2.357t2.356 5.644z","CIRCLE":"M54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","REPLY":"M64-24q0 5.93-4.536 16.107-.107.25-.375.857t-.483 1.072-.464.785q-.43.61-1 .61-.536 0-.84-.36T56-5.82q0-.323.09-.948t.09-.84q.177-2.428.177-4.392 0-3.607-.625-6.464T54-23.41t-2.857-3.608-3.768-2.482-4.75-1.518-5.5-.768T30.857-32h-8v9.143q0 .928-.678 1.607t-1.61.68-1.606-.68L.68-39.536Q0-40.214 0-41.143t.68-1.607l18.284-18.286q.68-.678 1.607-.678t1.61.678.677 1.607v9.144h8q25.464 0 31.25 14.393Q64-31.107 64-24z","GITHUB_ALT":"M22.857-20.57q0 1.427-.446 2.927t-1.535 2.714-2.59 1.216-2.59-1.215-1.534-2.713-.446-2.928.447-2.93 1.536-2.714 2.59-1.215 2.59 1.216T22.41-23.5t.447 2.93zm22.857 0q0 1.427-.446 2.927t-1.536 2.714-2.59 1.216-2.588-1.215-1.536-2.713-.447-2.928.448-2.93 1.536-2.714 2.59-1.215 2.588 1.216 1.536 2.714.446 2.93zm5.715 0q0-4.287-2.466-7.287t-6.678-3q-1.465 0-6.965.75-2.534.393-5.606.393t-5.607-.393q-5.428-.75-6.964-.75-4.214 0-6.68 3T8-20.57q0 3.14 1.143 5.48t2.893 3.68 4.357 2.142 5 1.054 5.32.25h6q2.93 0 5.323-.25t5-1.054 4.357-2.143 2.893-3.68 1.143-5.48zm8-6.287q0 7.393-2.18 11.82-1.357 2.75-3.768 4.75t-5.036 3.073-6.07 1.696-6.126.786-5.964.16q-2.786 0-5.072-.107t-5.268-.445-5.446-1.07-4.893-1.84-4.32-2.894-3.073-4.106Q0-19.43 0-26.856 0-35.322 4.857-41q-.964-2.93-.964-6.07 0-4.144 1.82-7.787 3.858 0 6.787 1.41t6.75 4.41q5.25-1.25 11.036-1.25 5.285 0 10 1.144 3.75-2.928 6.678-4.32t6.75-1.394q1.822 3.643 1.822 7.786 0 3.106-.965 6 4.86 5.713 4.86 14.213z","FOLDER_O":"M54.857-17.143v-25.143q0-1.428-1-2.428t-2.428-1H26.285q-1.43 0-2.43-1t-1-2.43v-2.285q0-1.427-1-2.427t-2.427-1H8q-1.43 0-2.43 1t-1 2.428v34.287q0 1.43 1 2.43t2.43 1h43.43q1.427 0 2.427-1t1-2.43zm4.572-25.143v25.143q0 3.286-2.36 5.643t-5.64 2.357H8q-3.286 0-5.643-2.357T0-17.143V-51.43q0-3.284 2.357-5.64T8-59.43h11.43q3.284 0 5.64 2.36t2.36 5.64v1.144h24q3.284 0 5.64 2.357t2.36 5.644z","FOLDER_OPEN_O":"M63.607-30.75q0-1.25-1.893-1.25H22.857q-1.428 0-3.053.768t-2.554 1.875L6.75-16.393q-.643.857-.643 1.43 0 1.25 1.893 1.25h38.857q1.43 0 3.072-.787t2.534-1.893l10.5-12.964q.643-.786.643-1.393zm-40.75-5.82h27.43v-5.716q0-1.428-1-2.428t-2.43-1h-20.57q-1.43 0-2.43-1t-1-2.43v-2.285q0-1.427-1-2.427t-2.428-1H8q-1.43 0-2.43 1t-1 2.428v30.466l9.144-11.25q1.572-1.893 4.143-3.125t5-1.23zm45.322 5.82q0 2.214-1.644 4.286L56-13.5q-1.536 1.893-4.143 3.125t-5 1.232H8q-3.286 0-5.643-2.357T0-17.143V-51.43q0-3.284 2.357-5.64T8-59.43h11.43q3.284 0 5.64 2.36t2.36 5.64v1.144h19.427q3.286 0 5.643 2.357t2.357 5.644v5.715h6.857q1.93 0 3.536.874t2.393 2.517q.536 1.144.536 2.43z","SMILE_O":"M40.5-25.607q-1.32 4.32-4.93 6.964T27.43-16t-8.144-2.643-4.93-6.964q-.285-.893.144-1.732t1.357-1.124q.893-.286 1.732.143t1.124 1.356q.893 2.857 3.304 4.625t5.41 1.77 5.41-1.77 3.305-4.624q.286-.93 1.143-1.357t1.75-.144 1.32 1.125.144 1.733zM22.857-41.143q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zm18.286 0q0 1.893-1.34 3.232t-3.232 1.34-3.23-1.34T32-41.144t1.34-3.232 3.23-1.34 3.234 1.34 1.34 3.232zM50.286-32q0-4.643-1.822-8.875T43.59-48.16t-7.286-4.876-8.875-1.82-8.876 1.82-7.286 4.875-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82 8.874-1.82 7.285-4.875 4.874-7.285T50.286-32zm4.57 0q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","FROWN_O":"M40.5-20.107q.286.893-.143 1.732t-1.32 1.125-1.75-.143-1.144-1.357q-.893-2.857-3.304-4.625t-5.41-1.768-5.412 1.768-3.304 4.625q-.285.93-1.125 1.357t-1.733.143q-.928-.286-1.357-1.125t-.143-1.732q1.322-4.322 4.93-6.964t8.142-2.644 8.14 2.643 4.93 6.963zM22.857-41.143q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zm18.286 0q0 1.893-1.34 3.232t-3.232 1.34-3.23-1.34T32-41.144t1.34-3.232 3.23-1.34 3.234 1.34 1.34 3.232zM50.286-32q0-4.643-1.822-8.875T43.59-48.16t-7.286-4.876-8.875-1.82-8.876 1.82-7.286 4.875-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82 8.874-1.82 7.285-4.875 4.874-7.285T50.286-32zm4.57 0q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","MEH_O":"M41.143-25.143q0 .93-.68 1.607t-1.606.68H16q-.93 0-1.607-.68t-.68-1.607.68-1.607T16-27.43h22.857q.93 0 1.607.68t.68 1.607zm-18.286-16q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zm18.286 0q0 1.893-1.34 3.232t-3.232 1.34-3.23-1.34T32-41.144t1.34-3.232 3.23-1.34 3.234 1.34 1.34 3.232zM50.286-32q0-4.643-1.822-8.875T43.59-48.16t-7.286-4.876-8.875-1.82-8.876 1.82-7.286 4.875-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82 8.874-1.82 7.285-4.875 4.874-7.285T50.286-32zm4.57 0q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","GAMEPAD":"M29.714-25.143v-4.57q0-.5-.32-.823t-.823-.32h-6.856v-6.858q0-.5-.32-.822t-.823-.32H16q-.5 0-.82.32t-.323.822v6.857H8q-.5 0-.82.32t-.323.823v4.57q0 .5.322.823T8-24h6.857v6.857q0 .5.322.822T16-16h4.57q.5 0 .823-.32t.32-.823V-24h6.858q.5 0 .823-.32t.32-.823zm20.572 2.286q0-1.893-1.34-3.232t-3.232-1.34-3.232 1.34-1.34 3.233 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.232zM59.43-32q0-1.893-1.34-3.232t-3.233-1.34-3.232 1.34T50.285-32t1.34 3.232 3.232 1.34 3.232-1.34T59.43-32zm9.14 4.57q0 7.573-5.356 12.93T50.286-9.143q-6.857 0-12.072-4.57h-7.857q-5.214 4.57-12.07 4.57-7.573 0-12.93-5.357T0-27.43t5.357-12.927 12.93-5.357h32q7.57 0 12.927 5.357T68.57-27.43z","KEYBOARD_O":"M13.714-22.286v3.43q0 .57-.57.57h-3.43q-.57 0-.57-.57v-3.43q0-.57.57-.57h3.43q.57 0 .57.57zm4.572-9.143V-28q0 .57-.572.57h-8q-.57 0-.57-.57v-3.43q0-.57.57-.57h8q.572 0 .572.57zm-4.572-9.14v3.427q0 .572-.57.572h-3.43q-.57 0-.57-.573v-3.428q0-.573.57-.573h3.43q.57 0 .57.572zm36.572 18.284v3.43q0 .57-.572.57H18.857q-.57 0-.57-.57v-3.43q0-.57.57-.57h30.857q.572 0 .572.57zM27.43-31.43V-28q0 .57-.573.57H23.43q-.573 0-.573-.57v-3.43q0-.57.572-.57h3.427q.572 0 .572.57zm-4.573-9.14v3.427q0 .572-.57.572h-3.43q-.57 0-.57-.573v-3.428q0-.573.57-.573h3.43q.57 0 .57.572zm13.714 9.14V-28q0 .57-.57.57h-3.43q-.57 0-.57-.57v-3.43q0-.57.57-.57H36q.57 0 .57.57zM32-40.57v3.427q0 .572-.57.572H28q-.57 0-.57-.573v-3.428q0-.573.57-.573h3.43q.57 0 .57.572zm13.714 9.14V-28q0 .57-.57.57h-3.43q-.57 0-.57-.57v-3.43q0-.57.57-.57h3.43q.57 0 .57.57zm13.715 9.144v3.43q0 .57-.573.57H55.43q-.573 0-.573-.57v-3.43q0-.57.572-.57h3.427q.572 0 .572.57zM41.142-40.57v3.427q0 .572-.572.572h-3.427q-.572 0-.572-.573v-3.428q0-.573.573-.573h3.428q.573 0 .573.572zm9.143 0v3.427q0 .572-.572.572h-3.428q-.572 0-.572-.573v-3.428q0-.573.572-.573h3.428q.572 0 .572.572zm9.143 0V-28q0 .57-.573.57h-8q-.57 0-.57-.57v-3.43q0-.57.57-.57h4v-8.57q0-.573.572-.573h3.427q.572 0 .572.572zM64-13.715v-32H4.57v32H64zm4.57-32v32q0 1.893-1.338 3.232T64-9.142H4.57q-1.89 0-3.23-1.34T0-13.714v-32q0-1.893 1.34-3.232t3.23-1.34H64q1.893 0 3.232 1.34t1.34 3.232z","FLAG_O":"M59.43-26.68v-22q-6.037 3.25-10.93 3.25-2.93 0-5.18-1.14-3.57-1.75-6.57-2.734t-6.357-.982q-6.18 0-14.393 4.536v21.393q8.75-4.036 15.464-4.036 1.965 0 3.697.268t3.5.93 2.75 1.106 2.947 1.41l1 .5q1.572.787 3.607.787 4.286 0 10.465-3.286zm-48-28.177q0 1.25-.626 2.286t-1.66 1.64v45.216q0 .5-.323.82T8-4.57H5.714q-.5 0-.82-.323t-.323-.82V-50.93q-1.034-.606-1.66-1.64t-.624-2.287q0-1.893 1.34-3.232t3.23-1.34 3.233 1.34 1.34 3.233zM64-52.57v27.25q0 1.39-1.25 2.034-.357.18-.607.322-7.786 4.143-13.18 4.143-3.142 0-5.642-1.25l-1-.5q-2.284-1.18-3.534-1.716t-3.25-1.035-4.072-.5q-3.643 0-8.41 1.57t-8.16 3.643q-.537.32-1.18.32-.57 0-1.143-.284-1.14-.68-1.14-2v-26.5q0-1.25 1.106-1.966 1.25-.75 2.803-1.518t4.07-1.857 5.447-1.77 5.536-.677q4 0 7.464 1.107t7.464 3.07q1.36.68 3.18.68 4.357 0 11.07-4l1.11-.607q1.106-.572 2.213.07Q64-53.82 64-52.57z","FLAG_CHECKERED":"M29.714-28.286v-6.857Q23.25-34.57 16-30.963v6.606q7.32-3.43 13.714-3.93zm0-14.928v-7.036q-6.143.286-13.714 4.5V-39q7.68-3.964 13.714-4.214zM59.43-26.68v-6.57q-8.394 4.143-13.716 2.536v-8Q45-38.93 44.32-39.25q-.177-.107-1.177-.607t-1.232-.607T40.787-41t-1.232-.554-1.16-.464-1.287-.446-1.25-.304-1.41-.268-1.41-.143-1.573-.07q-.82 0-1.75.107v7.93h.68q3.642 0 6.874 1.034t7.053 2.93q.68.32 1.394.536V-24q1.5.607 3.25.607 4.286 0 10.465-3.286zm0-15.25v-6.75q-6.037 3.25-10.93 3.25-1.607 0-2.786-.284v7Q51-37.214 59.43-41.93zm-48-12.927q0 1.25-.626 2.286t-1.66 1.64v45.216q0 .5-.323.82T8-4.57H5.714q-.5 0-.82-.323t-.323-.82V-50.93q-1.034-.606-1.66-1.64t-.624-2.287q0-1.893 1.34-3.232t3.23-1.34 3.233 1.34 1.34 3.233zM64-52.57v27.25q0 1.39-1.25 2.034-.357.18-.607.322-7.786 4.143-13.18 4.143-3.142 0-5.642-1.25l-1-.5q-2.284-1.18-3.534-1.716t-3.25-1.035-4.072-.5q-3.643 0-8.41 1.57t-8.16 3.643q-.537.32-1.18.32-.57 0-1.143-.284-1.14-.68-1.14-2v-26.5q0-1.25 1.106-1.966 1.25-.75 2.803-1.518t4.07-1.857 5.447-1.77 5.536-.677q4 0 7.464 1.107t7.464 3.07q1.36.68 3.18.68 4.357 0 11.07-4l1.11-.607q1.106-.572 2.213.07Q64-53.82 64-52.57z","TERMINAL":"M20.893-28.893L4.25-12.25q-.357.357-.82.357t-.823-.357L.82-14.036q-.356-.357-.356-.82t.357-.823l14.037-14.034L.82-43.75q-.356-.357-.356-.82t.357-.823l1.787-1.786q.357-.356.822-.356t.82.357l16.643 16.644q.357.357.357.822t-.357.82zM59.43-12.57v2.284q0 .5-.323.822t-.82.32H24q-.5 0-.82-.32t-.323-.822v-2.285q0-.5.322-.823t.82-.32h34.286q.5 0 .82.32t.323.822z","CODE":"M22.036-14.036L20.25-12.25q-.357.357-.82.357t-.823-.357L1.964-28.893q-.357-.357-.357-.82t.357-.823L18.607-47.18q.357-.356.822-.356t.82.357l1.786 1.787q.357.357.357.822t-.357.82L8-29.714 22.036-15.68q.357.36.357.823t-.357.82zm21.107-38.107L29.82-6.036q-.14.465-.552.697t-.84.09l-2.214-.607Q25.75-6 25.518-6.41t-.09-.876L38.75-53.393q.143-.464.554-.696t.84-.09l2.213.61q.464.14.697.552t.09.875zm23.464 23.25L49.964-12.25q-.357.357-.82.357t-.823-.357l-1.784-1.786q-.357-.357-.357-.82t.356-.823L60.57-29.713 46.537-43.75q-.357-.357-.357-.82t.356-.823l1.785-1.786q.36-.356.823-.356t.82.357l16.644 16.644q.357.357.357.822t-.357.82z","REPLY_ALL":"M22.857-25.357v2.5q0 1.5-1.393 2.107-.464.18-.893.18-.963 0-1.606-.68L.68-39.536Q0-40.214 0-41.143t.68-1.607l18.284-18.286q1.036-1.107 2.5-.5 1.393.607 1.393 2.107v2.466L8.68-42.75Q8-42.07 8-41.143t.68 1.607zM64-24q0 2.07-.607 4.768t-1.375 4.928-1.714 4.465-1.447 3.233l-.714 1.428q-.286.61-1 .61-.214 0-.322-.037-.89-.286-.82-1.214Q57.536-20.108 52.214-26q-2.285-2.536-6.09-3.946t-9.553-1.875v8.963q0 1.5-1.39 2.107-.466.18-.894.18-.965 0-1.607-.68L14.392-39.536q-.68-.678-.68-1.607t.68-1.607L32.68-61.036q1.034-1.107 2.5-.5 1.39.607 1.39 2.107v9.36q14.68 1 21.394 7.89Q64-36 64-24z","STAR_HALF_O":"M42.357-29.82l9.18-8.93-12.716-1.857-2.356-.357-1.07-2.143-5.68-11.5v34.393l2.107 1.107 11.36 6-2.144-12.68-.43-2.356zM58.5-39.18L45.536-26.535l3.07 17.857q.18 1.18-.213 1.84t-1.214.66q-.61 0-1.43-.427l-16.036-8.43-16.035 8.43q-.823.428-1.43.428-.82 0-1.214-.66t-.215-1.84l3.073-17.856-13-12.643Q-.25-40.32.07-41.303T2-42.536l17.93-2.607 8.034-16.25q.715-1.464 1.75-1.464 1 0 1.75 1.464l8.036 16.25 17.93 2.607q1.606.25 1.927 1.232T58.5-39.18z","LOCATION_ARROW":"M50.036-51.536L27.18-5.82q-.61 1.25-2.037 1.25-.18 0-.536-.073-.786-.178-1.268-.803t-.483-1.41V-27.43H2.287q-.787 0-1.412-.48T.07-29.18t.144-1.5 1.036-1.07l45.714-22.857q.465-.25 1.036-.25.964 0 1.607.678.536.5.66 1.234t-.23 1.41z","CROP":"M19.893-18.286h21.25v-21.25zm-1.607-1.607l21.25-21.25h-21.25v21.25zm41.143 2.75v6.857q0 .5-.323.822t-.82.32h-8v8q0 .5-.323.823t-.82.32h-6.858q-.5 0-.822-.32t-.32-.823v-8H10.285q-.5 0-.822-.32t-.32-.823v-30.857h-8q-.5 0-.823-.32T0-42.287v-6.857q0-.5.32-.82t.823-.323h8v-8q0-.5.32-.82t.823-.323h6.857q.5 0 .82.323t.323.82v8H48.68l8.784-8.82q.357-.322.822-.322t.82.323q.323.357.323.82t-.323.823l-8.82 8.785v30.394h8q.5 0 .82.322t.322.82z","CODE_FORK":"M10.286-11.43q0-1.427-1-2.427t-2.43-1-2.427 1-1 2.428 1 2.43 2.427 1 2.43-1 1-2.43zm0-41.14q0-1.43-1-2.43t-2.43-1-2.427 1-1 2.43 1 2.427 2.427 1 2.43-1 1-2.428zM33.143-48q0-1.43-1-2.43t-2.43-1-2.427 1-1 2.43 1 2.43 2.428 1 2.43-1 1-2.43zm3.428 0q0 1.857-.927 3.446t-2.5 2.483q-.072 10.25-8.072 14.784-2.427 1.357-7.25 2.893-4.57 1.43-6.052 2.536t-1.482 3.57v.93q1.57.893 2.5 2.482t.928 3.446q0 2.86-2 4.86t-4.857 2T2-6.57t-2-4.86q0-1.856.93-3.445t2.5-2.482v-29.286q-1.573-.893-2.5-2.482T0-52.57q0-2.86 2-4.86t4.857-2 4.857 2 2 4.86q0 1.856-.928 3.445t-2.5 2.482v17.75q1.928-.928 5.5-2.036 1.964-.606 3.125-1.052t2.52-1.107 2.106-1.41 1.446-1.82 1-2.484.304-3.267q-1.572-.894-2.5-2.484T22.856-48q0-2.857 2-4.857t4.858-2 4.857 2 2 4.857z","UNLINK":"M15.68-18.607L6.535-9.464q-.357.32-.822.32-.428 0-.82-.32-.323-.357-.323-.822t.323-.82l9.143-9.144q.357-.32.82-.32t.823.32q.32.357.32.82t-.32.823zm6.034 1.464v11.43q0 .5-.32.82t-.823.322-.82-.323-.32-.82v-11.43q0-.5.32-.82t.82-.323.823.322.32.82zm-8-8q0 .5-.32.822t-.823.32H1.144q-.5 0-.822-.32T0-25.144t.32-.82.823-.323H12.57q.5 0 .823.322t.32.82zm45.143 4.572q0 4.284-3.036 7.25l-5.25 5.213q-2.963 2.964-7.25 2.964-4.32 0-7.284-3.036l-11.93-11.963q-.75-.75-1.5-2l8.537-.643L40.893-13q.964.964 2.428.982t2.43-.946L51-18.18q1-1 1-2.39Q52-22 51-23l-9.786-9.82.643-8.537q1.25.75 2 1.5l12 12q3 3.07 3 7.286zM36.82-46.43l-8.534.644-9.75-9.785q-1-1-2.43-1-1.392 0-2.427.963l-5.25 5.214q-1 1-1 2.393 0 1.43 1 2.43l9.784 9.784-.643 8.572q-1.25-.75-2-1.5l-12-12q-3-3.072-3-7.286 0-4.286 3.037-7.25l5.25-5.214q2.964-2.965 7.25-2.965 4.322 0 7.286 3.037L35.32-48.43q.75.75 1.5 2zm22.61 3q0 .5-.323.823t-.82.32h-11.43q-.5 0-.82-.32t-.323-.822.322-.82.82-.32h11.43q.5 0 .82.32t.323.82zM40-62.856v11.428q0 .5-.32.823t-.823.32-.82-.32-.323-.822v-11.427q0-.5.322-.822t.82-.32.823.32.32.823zm14.536 5.393l-9.143 9.143Q45-48 44.57-48t-.82-.32q-.32-.36-.32-.823t.32-.82l9.143-9.144q.357-.322.82-.322t.823.323q.32.357.32.82t-.32.823z","QUESTION":"M25.143-19.143v8.572q0 .57-.43 1t-1 .427h-8.57q-.572 0-1-.428t-.43-1v-8.573q0-.57.43-1t1-.428h8.57q.573 0 1 .427t.43 1zM36.43-40.57q0 1.927-.555 3.606t-1.25 2.732-1.964 2.125-2.053 1.553-2.178 1.268q-1.466.822-2.448 2.322T25-24.57q0 .606-.43 1.16t-1 .553H15q-.536 0-.91-.66t-.376-1.34v-1.607q0-2.965 2.322-5.59t5.107-3.875q2.107-.963 3-2t.893-2.713q0-1.5-1.66-2.643t-3.84-1.143q-2.322 0-3.857 1.037-1.25.893-3.823 4.107-.464.572-1.107.572-.43 0-.893-.286L4-43.464q-.464-.357-.554-.893t.197-1q5.714-9.5 16.57-9.5 2.858 0 5.75 1.107t5.216 2.964 3.784 4.554 1.465 5.66z","INFO":"M22.857-16v4.57q0 .93-.678 1.61t-1.61.677H2.287q-.93 0-1.607-.678T0-11.43V-16q0-.93.68-1.607t1.606-.68H4.57V-32H2.287q-.93 0-1.607-.68T0-34.285v-4.57q0-.93.68-1.608t1.606-.68H16q.93 0 1.607.68t.68 1.607v20.57h2.284q.93 0 1.61.68T22.856-16zm-4.57-41.143v6.857q0 .93-.68 1.607T16-48H6.857q-.928 0-1.607-.68t-.68-1.606v-6.857q0-.928.68-1.607t1.607-.68H16q.93 0 1.607.68t.68 1.607z","EXCLAMATION":"M18.286-19.43v8q0 .93-.68 1.61T16-9.144H6.857q-.928 0-1.607-.678t-.68-1.61v-8q0-.927.68-1.606t1.607-.678H16q.93 0 1.607.678t.68 1.607zm1.07-37.713l-1 27.43q-.035.927-.73 1.606T16-27.43H6.857q-.928 0-1.625-.677T4.5-29.714l-1-27.43q-.036-.927.625-1.606t1.59-.68h11.428q.928 0 1.59.68t.624 1.607z","SUPERSCRIPT":"M32.036-15.107v5.964H23.18l-5.68-9-.857-1.5q-.286-.32-.393-.75h-.107l-.322.75q-.356.714-.89 1.572L9.392-9.144H.18v-5.964h4.57L11.786-25.5 5.18-35.214H.285v-6h9.857l4.964 8.143q.072.14.822 1.5.284.32.39.75h.11q.106-.323.39-.75l.894-1.5 5-8.144h9.18v6h-4.465l-6.573 9.535 7.286 10.573h3.893zm22.75-24.25V-32H36.43l-.11-.964q-.14-1-.14-1.643 0-2.286.927-4.18t2.322-3.088 3-2.32 3-1.948 2.32-1.928.93-2.287q0-1.357-1.055-2.232t-2.518-.874q-1.82 0-3.464 1.393-.5.39-1.286 1.356L36.607-54q.93-1.32 2.25-2.357 2.964-2.322 6.714-2.322 3.93 0 6.36 2.126t2.427 5.66q0 2-.875 3.68t-2.214 2.732-2.91 2.09-2.93 1.803-2.34 1.84T42-36.5h8.286v-2.857h4.5z","SUBSCRIPT":"M32.036-15.107v5.964H23.18l-5.68-9-.857-1.5q-.286-.32-.393-.75h-.107l-.322.75q-.356.714-.89 1.572L9.392-9.144H.18v-5.964h4.57L11.786-25.5 5.18-35.214H.285v-6h9.857l4.964 8.143q.072.14.822 1.5.284.32.39.75h.11q.106-.323.39-.75l.894-1.5 5-8.144h9.18v6h-4.465l-6.573 9.535 7.286 10.573h3.893zm22.82 7.75V0H36.5l-.143-.964q-.107-1.607-.107-1.643 0-2.286.93-4.18t2.32-3.088 3-2.32 3-1.948 2.32-1.928.93-2.287q0-1.357-1.054-2.232t-2.517-.874q-1.823 0-3.466 1.393-.5.39-1.285 1.356L36.68-22q.927-1.32 2.25-2.357 2.856-2.322 6.713-2.322 3.928 0 6.357 2.126t2.43 5.66q0 2.358-1.234 4.233t-3 3.07-3.553 2.233-3.107 2.25T42.07-4.5h8.287v-2.857h4.5z","ERASER":"M32-13.714L44-27.43H16.57l-12 13.716H32zM68.18-52.18q.534 1.216.338 2.555t-1.09 2.34l-32 36.57Q34.072-9.142 32-9.142H4.57q-1.356 0-2.48-.732T.392-11.82q-.536-1.216-.34-2.555t1.09-2.34l32-36.57q1.357-1.572 3.428-1.572H64q1.357 0 2.482.732t1.697 1.946z","PUZZLE_PIECE":"M59.43-24.786q0 2.893-1.59 4.822t-4.41 1.928q-1.466 0-2.77-.625t-2.106-1.358-2.018-1.357T44-22q-3.93 0-3.93 4.43 0 1.39.573 4.106t.536 4.107v.178q-.787 0-1.18.037-1.214.107-3.482.41t-4.125.483-3.5.18q-2.18 0-3.68-.948T23.714-12q0-1.32.626-2.536t1.356-2.018 1.358-2.107.625-2.77q0-2.82-1.93-4.41t-4.82-1.59q-3 0-5.11 1.626t-2.106 4.554q0 1.536.536 2.964t1.196 2.304 1.197 1.893.536 1.804q0 1.607-1.644 3.18-1.322 1.25-4.18 1.25-3.392 0-8.75-.858-.32-.072-.98-.143T.642-9L.18-9.07q-.037 0-.11-.037-.07 0-.07-.036v-36.57q.07.034.625.124t1.214.18.767.124q5.357.857 8.75.857 2.857 0 4.18-1.25 1.642-1.57 1.642-3.177 0-.786-.537-1.804t-1.197-1.894-1.196-2.303-.536-2.964q0-2.93 2.107-4.555T20.965-64q2.857 0 4.786 1.59T27.68-58q0 1.464-.626 2.768t-1.358 2.107-1.357 2.018-.626 2.536q0 2.034 1.5 2.98t3.68.947q2.285 0 6.427-.536t5.823-.606v.072q-.036.07-.125.625t-.18 1.215-.124.768q-.857 5.357-.857 8.75 0 2.857 1.25 4.178 1.572 1.644 3.18 1.644.784 0 1.802-.535t1.892-1.198 2.304-1.196T53.25-32q2.93 0 4.554 2.107t1.625 5.107z","MICROPHONE":"M41.143-38.857v4.57q0 7.894-5.268 13.733t-13.018 6.697v4.714H32q.93 0 1.607.68t.68 1.606-.68 1.607T32-4.57H9.143q-.93 0-1.607-.68t-.68-1.607.68-1.607 1.607-.68h9.143v-4.713q-7.75-.857-13.018-6.697T0-34.286v-4.57q0-.93.68-1.608t1.606-.68 1.607.68.678 1.607v4.57q0 6.608 4.698 11.305t11.303 4.696 11.305-4.696 4.696-11.304v-4.57q0-.93.68-1.608t1.607-.68 1.607.68.68 1.607zM32-52.57v18.284q0 4.715-3.357 8.072t-8.072 3.357-8.07-3.357-3.357-8.072V-52.57q0-4.716 3.357-8.073T20.57-64t8.073 3.357T32-52.57z","MICROPHONE_SLASH":"M9.68-30.25l-3.61 3.607q-1.5-3.678-1.5-7.643v-4.57q0-.93.68-1.608t1.607-.68 1.607.68.68 1.607v4.57q0 1.894.535 4.037zm39.784-21.5L36.57-38.857v4.57q0 4.716-3.356 8.073t-8.07 3.357q-1.965 0-3.894-.68l-3.43 3.43q3.466 1.82 7.323 1.82 6.607 0 11.303-4.695t4.697-11.304v-4.57q0-.93.678-1.608t1.61-.68 1.606.68.678 1.607v4.57q0 7.894-5.268 13.733T27.43-13.857v4.714h9.14q.93 0 1.61.68t.677 1.606-.678 1.607-1.61.68H13.715q-.928 0-1.607-.68t-.678-1.607.677-1.607 1.607-.68h9.143v-4.713q-4.464-.464-8.393-2.893l-9.07 9.07q-.358.36-.823.36t-.82-.36L.82-10.606q-.356-.357-.356-.822t.357-.82l44.073-44.07q.357-.36.82-.36t.823.36l2.928 2.927q.357.357.357.822t-.356.82zm-13.57-4.714l-22.18 22.178V-52.57q0-4.716 3.357-8.073T25.144-64q3.643 0 6.59 2.107t4.16 5.43z","SHIELD":"M38.857-29.714V-52.57h-16v40.606q4.25-2.25 7.607-4.893 8.393-6.572 8.393-12.857zm6.857-27.43v27.43q0 3.07-1.196 6.09t-2.964 5.356-4.215 4.554-4.52 3.678-4.32 2.768T25.304-5.5t-1.518.714q-.43.215-.93.215t-.927-.216q-.573-.25-1.52-.714t-3.196-1.768-4.32-2.768-4.52-3.678-4.213-4.554-2.964-5.357T0-29.715v-27.428q0-.928.68-1.607t1.606-.68H43.43q.927 0 1.606.68t.678 1.607z","CALENDAR_O":"M4.57-4.57h50.287v-36.573H4.57V-4.57zM18.287-48v-10.286q0-.5-.322-.82t-.82-.323h-2.287q-.5 0-.82.323t-.323.82V-48q0 .5.322.82t.82.323h2.287q.5 0 .82-.322t.323-.82zm27.428 0v-10.286q0-.5-.32-.82t-.823-.323h-2.284q-.5 0-.822.323t-.32.82V-48q0 .5.32.82t.822.323h2.285q.5 0 .823-.322t.32-.82zm13.715-2.286V-4.57q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-45.716q0-1.857 1.357-3.214t3.214-1.357h4.573v-3.43q0-2.356 1.678-4.034T14.858-64h2.286q2.357 0 4.036 1.68t1.677 4.034v3.43H36.57v-3.43q0-2.357 1.68-4.035T42.286-64h2.285q2.36 0 4.037 1.68t1.68 4.034v3.43h4.57q1.857 0 3.214 1.356t1.36 3.214z","FIRE_EXTINGUISHER":"M18.286-57.143q0-.928-.68-1.607T16-59.43t-1.607.68-.68 1.607.68 1.607 1.607.68 1.607-.68.68-1.607zm32-1.143v11.43q0 .57-.43.892-.285.25-.713.25-.143 0-.25-.036l-16-3.43q-.393-.07-.643-.39t-.25-.716h-9.143v3.643q3.964.822 6.554 3.964T32-35.43v28.573q0 .928-.68 1.607t-1.606.68H11.43q-.93 0-1.61-.68t-.677-1.607V-35.43q0-3.784 2.232-6.802t5.768-4.09v-3.964H16q-2.107 0-4.107.84t-3.268 1.892-2.357 2.375-1.447 1.912-.5.875q-.606 1.25-2.034 1.25-.572 0-1.036-.25-.82-.428-1.125-1.32t.125-1.75q.18-.358.518-.93t1.34-1.91 2.16-2.5 3.036-2.393 3.875-1.875q-.894-1.5-.894-3.073 0-2.357 1.678-4.036T16-62.856t4.036 1.678 1.678 4.037q0 1.18-.5 2.286H32q0-.393.25-.714t.643-.394l16-3.43q.107-.035.25-.035.428 0 .714.25.43.323.43.894z","ROCKET":"M51.43-48q0-1.43-1-2.43t-2.43-1-2.43 1-1 2.43 1 2.43 2.43 1 2.43-1 1-2.43zm8-10.286q0 8.893-2.698 15.375T47.68-30.037q-2.894 2.857-6.966 6.286L40-10.214q-.07.57-.57.928l-13.716 8q-.25.143-.57.143-.43 0-.823-.32L22.037-3.75q-.465-.5-.286-1.143l3.036-9.857L14.75-24.786 4.893-21.75q-.107.036-.322.036-.5 0-.82-.322L1.464-24.32q-.607-.68-.178-1.394l8-13.715q.357-.5.928-.57l13.536-.714q3.43-4.072 6.286-6.965 6.714-6.677 12.785-9.213t15.394-2.536q.5 0 .857.34t.36.804z","MAXCDN":"M62.32-36.393l-5.856 27.25H44.536l6.357-29.714q.464-2-.536-3.143-.964-1.18-2.964-1.18h-6.036L34.07-9.142H22.144L29.43-43.18H19.213L11.93-9.142H0L7.286-43.18 1.82-54.856h45.573q3.607 0 6.768 1.446t5.27 4.053q2.14 2.607 2.89 6.018t0 6.947z","CHEVRON_CIRCLE_LEFT":"M32.464-14.18l3.643-3.64q.68-.68.68-1.61t-.68-1.606L25.143-32l10.964-10.964q.68-.68.68-1.607t-.68-1.61l-3.643-3.64q-.678-.68-1.607-.68t-1.607.68L13.036-33.608q-.68.678-.68 1.607t.68 1.607L29.25-14.18q.68.68 1.607.68t1.607-.68zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","CHEVRON_CIRCLE_RIGHT":"M25.607-14.18L41.82-30.392q.68-.678.68-1.607t-.68-1.607L25.608-49.82Q24.93-50.5 24-50.5t-1.607.68l-3.643 3.64q-.68.68-.68 1.61t.68 1.606L29.714-32 18.75-21.036q-.68.68-.68 1.607t.68 1.61l3.643 3.64q.678.68 1.607.68t1.607-.68zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","CHEVRON_CIRCLE_UP":"M41.607-23.32l3.643-3.644q.68-.68.68-1.607t-.68-1.61L29.036-46.392q-.68-.678-1.607-.678t-1.61.677L9.608-30.18q-.678.68-.678 1.61t.677 1.606l3.643 3.643q.68.677 1.607.677t1.607-.678L27.43-34.287 38.392-23.32q.678.677 1.607.677t1.607-.678zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","CHEVRON_CIRCLE_DOWN":"M29.036-17.607L45.25-33.82q.68-.68.68-1.61t-.68-1.606l-3.643-3.643q-.678-.677-1.607-.677t-1.607.678L27.43-29.713 16.463-40.68q-.678-.677-1.607-.677t-1.607.678l-3.643 3.644q-.678.68-.678 1.607t.677 1.61L25.82-17.608q.68.678 1.61.678t1.606-.677zM54.856-32q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","HTML5":"M40.357-42.68l.572-6.25H9.356l1.68 19.073h21.856l-.786 8.143-7.036 1.893-7-1.894-.463-5h-6.25l.786 9.928 12.928 3.572h.144v-.036l12.822-3.536 1.785-19.428h-23l-.534-6.465h24.07zM0-59.43h50.286L45.714-8.07 25.07-2.287 4.57-8.07z","CSS3":"M9.82-59.43h53.75l-9.5 47.61-28.713 9.534L.43-11.82l2.534-12.716H13.57l-1.034 5.25 15.07 5.75 17.358-5.75 2.43-12.107H4.25L6.32-42H49.5l1.357-6.82H7.714z","ANCHOR":"M34.286-54.857q0-.93-.68-1.607T32-57.144t-1.607.68-.68 1.607.68 1.607 1.607.68 1.607-.68.68-1.607zM64-21.714v12.57q0 .787-.714 1.073Q63-8 62.856-8q-.463 0-.82-.32l-3.322-3.323q-4.25 5.107-11.375 8.09T32-.572 16.66-3.555t-11.374-8.09L1.964-8.32q-.32.32-.82.32Q1-8 .713-8.07 0-8.358 0-9.144v-12.57q0-.5.32-.823t.823-.32h12.57q.787 0 1.073.713.285.68-.25 1.25l-3.572 3.572q2.393 3.25 6.768 5.48t9.697 2.947V-32h-6.86q-.927 0-1.606-.68t-.678-1.606v-4.57q0-.93.678-1.608t1.607-.68h6.86v-5.82q-2.073-1.215-3.323-3.304t-1.25-4.59q0-3.785 2.68-6.463T32-64t6.464 2.68 2.68 6.463q0 2.5-1.25 4.59t-3.323 3.303v5.82h6.86q.927 0 1.606.68t.678 1.607v4.57q0 .93-.678 1.608T43.43-32h-6.86v23.107q5.323-.714 9.698-2.946t6.768-5.48l-3.572-3.573q-.535-.57-.25-1.25.286-.714 1.072-.714h12.57q.5 0 .823.32t.32.823z","UNLOCK_ALT":"M37.714-36.57q1.43 0 2.43 1t1 2.427v20.572q0 1.427-1 2.427t-2.43 1H3.43q-1.43 0-2.43-1T0-12.57v-20.573q0-1.428 1-2.428t2.43-1h1.14V-48q0-6.607 4.698-11.304T20.57-64t11.305 4.696T36.57-48q0 .93-.677 1.607t-1.607.68H32q-.93 0-1.607-.68T29.713-48q0-3.786-2.677-6.464t-6.465-2.68-6.463 2.68T11.43-48v11.43h26.284z","BULLSEYE":"M36.57-32q0 3.786-2.677 6.464t-6.464 2.68-6.466-2.68T18.286-32t2.678-6.464 6.465-2.68 6.463 2.68T36.57-32zm4.573 0q0-5.68-4.018-9.696t-9.696-4.018-9.698 4.018T13.714-32t4.018 9.696 9.697 4.018 9.695-4.018T41.143-32zm4.57 0q0 7.57-5.356 12.93T27.43-13.715 14.5-19.07 9.143-32 14.5-44.93t12.93-5.356 12.927 5.357T45.714-32zm4.573 0q0-4.643-1.822-8.875T43.59-48.16t-7.286-4.876-8.875-1.82-8.876 1.82-7.286 4.875-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82 8.874-1.82 7.285-4.875 4.874-7.285T50.286-32zm4.57 0q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ELLIPSIS_H":"M13.714-37.714v6.857q0 1.428-1 2.428t-2.428 1H3.43q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h6.856q1.428 0 2.428 1t1 2.43zm18.286 0v6.857q0 1.428-1 2.428t-2.43 1h-6.856q-1.428 0-2.428-1t-1-2.427v-6.857q0-1.43 1-2.43t2.428-1h6.857q1.43 0 2.43 1t1 2.43zm18.286 0v6.857q0 1.428-1 2.428t-2.43 1H40q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h6.857q1.43 0 2.43 1t1 2.43z","ELLIPSIS_V":"M13.714-19.43v6.86q0 1.427-1 2.427t-2.428 1H3.43q-1.43 0-2.43-1T0-12.57v-6.86q0-1.427 1-2.427t2.43-1h6.856q1.428 0 2.428 1t1 2.428zm0-18.284v6.857q0 1.428-1 2.428t-2.428 1H3.43q-1.43 0-2.43-1t-1-2.427v-6.857q0-1.43 1-2.43t2.43-1h6.856q1.428 0 2.428 1t1 2.43zm0-18.286v6.857q0 1.43-1 2.43t-2.428 1H3.43q-1.43 0-2.43-1t-1-2.43V-56q0-1.43 1-2.43t2.43-1h6.856q1.428 0 2.428 1t1 2.43z","RSS_SQUARE":"M18.286-18.286q0-1.893-1.34-3.232t-3.232-1.34-3.232 1.34-1.34 3.232 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.232zM30.82-14.93q-.463-8.284-6.32-14.14t-14.143-6.323q-.5-.036-.857.322t-.357.82v4.57q0 .466.303.787t.768.357q5.5.393 9.43 4.322t4.32 9.428q.036.465.357.768t.787.304h4.572q.463 0 .82-.357t.32-.86zm13.716.037q-.18-5.5-2-10.625t-4.982-9.286-7.322-7.32-9.286-4.983-10.625-2q-.5-.036-.82.32-.357.358-.357.823v4.57q0 .465.32.787t.787.357q7.286.25 13.5 3.982t9.946 9.947 3.983 13.5q.034.463.356.784t.785.322h4.573q.464 0 .82-.357.394-.323.323-.823zm10.32-34.25v34.286q0 4.25-3.017 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","PLAY_CIRCLE":"M27.43-59.43q7.463 0 13.766 3.68t9.983 9.982T54.856-32 51.18-18.232 41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68zm13.713 29.394q1.143-.643 1.143-1.964t-1.143-1.964l-19.43-11.43q-1.106-.677-2.284-.035-1.144.68-1.144 2v22.86q0 1.32 1.143 2 .57.284 1.14.284.61 0 1.144-.32z","TICKET":"M36.57-47.857L47.858-36.57 27.43-16.144 16.142-27.43zm-7.534 34.964l22.07-22.07q.68-.68.68-1.608t-.68-1.61L38.18-51.106q-.644-.643-1.61-.643t-1.606.643l-22.07 22.07q-.68.68-.68 1.608t.68 1.61L25.82-12.894q.644.643 1.61.643t1.606-.643zm31.75-22.75L28.393-3.213q-1.322 1.32-3.232 1.32t-3.23-1.32l-4.5-4.5q2-2 2-4.858t-2-4.86-4.86-2-4.856 2l-4.464-4.5q-1.32-1.32-1.32-3.23t1.32-3.233L35.643-60.75q1.32-1.32 3.232-1.32t3.232 1.32l4.464 4.464q-2 2-2 4.857t2 4.86 4.86 2 4.856-2l4.5 4.463q1.32 1.32 1.32 3.232t-1.32 3.232z","MINUS_SQUARE":"M45.714-29.714v-4.572q0-.928-.678-1.607t-1.607-.678h-32q-.93 0-1.61.677t-.677 1.607v4.572q0 .928.678 1.607t1.61.678h32q.927 0 1.606-.677t.678-1.607zm9.143-19.43v34.287q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","MINUS_SQUARE_O":"M41.143-35.43v2.287q0 .5-.322.822T40-32H10.286q-.5 0-.822-.32t-.32-.823v-2.286q0-.5.32-.82t.822-.32H40q.5 0 .82.32t.323.82zm4.57 16v-29.713q0-2.357-1.677-4.036T40-54.856H10.286q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036zm4.573-29.713v29.714q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02H40q4.25 0 7.268 3.02t3.018 7.267z","LEVEL_UP":"M36.357-42.464q-.643 1.32-2.07 1.32h-6.858v30.858q0 .5-.323.822t-.82.32H1.142q-.75 0-1.036-.642-.286-.714.143-1.25l5.714-6.857q.322-.393.893-.393h11.43v-22.857h-6.858q-1.43 0-2.073-1.32-.607-1.323.322-2.43l11.427-13.714q.643-.786 1.75-.786t1.75.786l11.43 13.714q.963 1.143.32 2.43z","LEVEL_DOWN":"M1.143-54.857h25.143q.464 0 .803.34t.34.838v30.823h6.856q1.428 0 2.07 1.32t-.32 2.466L24.606-5.358q-.642.786-1.75.786t-1.75-.787L9.68-19.07q-.93-1.11-.323-2.466.643-1.32 2.072-1.32h6.856v-22.858H6.856q-.5 0-.892-.393L.25-52.964q-.464-.5-.143-1.215.322-.677 1.036-.677z","CHECK_SQUARE":"M24.464-17.607l21.93-21.93q.677-.677.677-1.606t-.677-1.607l-3.643-3.643q-.68-.678-1.607-.678t-1.607.677l-16.68 16.68-7.535-7.537q-.677-.68-1.606-.68t-1.607.68l-3.643 3.643q-.678.678-.678 1.607t.678 1.607L21.25-17.607q.68.678 1.607.678t1.607-.677zm30.393-31.536v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","PENCIL_SQUARE":"M14.43-24.43L19.856-19 18-17.143h-2v-3.428h-3.43v-2zm14.784-13.927q.5.464-.107 1.07L18.714-26.892q-.607.607-1.07.107-.5-.464.106-1.07L28.143-38.25q.607-.607 1.07-.107zM19.43-13.714l19.427-19.43L28.57-43.428 9.144-24v10.286H19.43zM41.142-35.43l3.286-3.284q1-1 1-2.43t-1-2.427L39-49q-1-1-2.43-1t-2.427 1l-3.286 3.286zm13.714-13.713v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","EXTERNAL_LINK_SQUARE":"M45.714-30.857V-48q0-.93-.678-1.607t-1.607-.68H26.285q-1.5 0-2.107 1.394-.61 1.464.5 2.5l5.14 5.143-19.07 19.07q-.68.68-.68 1.61t.68 1.606l3.643 3.643q.678.677 1.607.677t1.607-.678L36.68-34.394l5.14 5.143q.644.68 1.61.68.427 0 .89-.18 1.394-.607 1.394-2.107zm9.143-18.286v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","SHARE_SQUARE":"M35.893-24.68l12.57-12.57q.68-.68.68-1.607t-.68-1.607l-12.57-12.572q-1.072-1.107-2.464-.5Q32-52.93 32-51.43v5.716q-4.25 0-7.714.696t-5.804 1.822-4.07 2.82-2.733 3.412-1.59 3.893-.77 3.98-.177 3.947q0 6.464 5.964 14.43.357.427.893.427.25 0 .464-.107.786-.32.68-1.178-1.573-12.644 2.213-16.894Q21-30.32 24-31.16t8-.84v5.714q0 1.5 1.43 2.107.427.18.856.18.928 0 1.607-.68zm18.964-24.463v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","COMPASS":"M22.857-25.143L32-29.713l-9.143-4.573v9.143zM36.57-46.25v19.357L18.287-17.75v-19.357zM46.858-32q0-5.286-2.607-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","TOGGLE_DOWN":"M40.893-39.893q.643 1.25-.18 2.357l-11.427 16q-.68.965-1.857.965t-1.86-.966l-11.427-16q-.822-1.107-.18-2.357.608-1.25 2.037-1.25h22.857q1.43 0 2.036 1.25zm4.82 25.036v-34.286q0-.464-.338-.803t-.804-.34H10.287q-.465 0-.804.34t-.34.803v34.286q0 .464.34.803t.804.34H44.57q.466 0 .805-.34t.34-.803zm9.144-34.286v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TOGGLE_UP":"M40.893-24.107q-.607 1.25-2.036 1.25H16q-1.43 0-2.036-1.25-.643-1.25.18-2.357l11.427-16q.68-.965 1.86-.965t1.856.966l11.428 16q.822 1.107.18 2.357zm4.82 9.25v-34.286q0-.464-.338-.803t-.804-.34H10.287q-.465 0-.804.34t-.34.803v34.286q0 .464.34.803t.804.34H44.57q.466 0 .805-.34t.34-.803zm9.144-34.286v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TOGGLE_RIGHT":"M38.857-32q0 1.18-.964 1.857l-16 11.43q-1.107.82-2.357.177-1.25-.607-1.25-2.035v-22.86q0-1.427 1.25-2.034 1.25-.643 2.357.178l16 11.43q.964.677.964 1.856zm6.857 17.143v-34.286q0-.5-.32-.82t-.823-.323H10.287q-.5 0-.822.322t-.32.82v34.287q0 .5.32.82t.822.323H44.57q.5 0 .823-.322t.32-.82zm9.143-34.286v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","EURO":"M34.857-17.32l1.25 5.677q.107.43-.107.804t-.607.52l-.18.034q-.142.072-.374.125t-.572.16-.768.196-.91.18-1.072.178-1.197.16-1.302.107-1.375.037q-8.357 0-14.607-4.66t-8.5-12.554H1.143q-.464 0-.804-.34T0-27.5v-4.036q0-.464.34-.803t.803-.34H3.5q-.07-2.034.036-3.75H1.143q-.5 0-.822-.32T0-37.57v-4.073q0-.5.32-.82t.823-.323h3.5q2.393-7.5 8.696-12.07t14.303-4.573q3.643 0 6.928.823.394.107.716.536.214.39.107.856l-1.536 5.678q-.107.465-.5.697t-.857.09l-.143-.036q-.143-.035-.41-.09L31.32-51l-.802-.125-.93-.107-1.034-.09-1.054-.035q-4.5 0-8.07 2.286t-5.36 6.284h16.716q.57 0 .893.43.356.427.25.927l-.86 4.073q-.177.928-1.14.928H12.5q-.107 1.323 0 3.75h16.393q.536 0 .893.43.32.43.214.964l-.857 4q-.072.393-.393.66t-.714.27H14.214q1.715 4.177 5.34 6.624t8.16 2.446q.643 0 1.286-.053t1.196-.124 1.054-.16.875-.18.66-.16l.43-.107.178-.073q.464-.178.928.072.43.25.537.75z","GBP":"M36.43-23.393v13.107q0 .5-.323.822t-.82.32H1.142q-.5 0-.822-.32T0-10.286v-5.357q0-.464.34-.803t.803-.34h3.464v-13.678H1.214q-.5 0-.82-.34t-.323-.803v-4.68q0-.5.323-.82t.82-.322h3.394v-7.963q0-6.107 4.41-10.07T20.25-59.43q6.607 0 11.964 4.466.322.285.357.732t-.25.803l-3.677 4.537q-.322.393-.786.43-.464.07-.82-.25-.18-.18-.93-.68t-2.464-1.143-3.322-.643q-3.034 0-4.89 1.68t-1.86 4.393v7.678h10.894q.465 0 .804.323t.34.82v4.68q0 .464-.34.803t-.804.34H13.57v13.535h14.787v-6.463q0-.464.322-.803t.82-.34h5.786q.5 0 .82.34t.323.803z","USD":"M34.93-21.68q0 5.466-3.555 9.412t-9.232 4.875v6.25q0 .5-.322.822T21 0h-4.82q-.466 0-.805-.34t-.34-.803v-6.25q-2.356-.32-4.553-1.107t-3.625-1.59-2.643-1.714-1.66-1.34-.625-.642q-.61-.75-.073-1.464l3.68-4.82q.25-.36.82-.43.536-.07.857.32l.072.073q4.035 3.536 8.678 4.464 1.322.286 2.643.286 2.893 0 5.09-1.536t2.196-4.357q0-1-.536-1.893t-1.196-1.5-2.09-1.34-2.356-1.142-2.857-1.16q-1.393-.572-2.196-.894t-2.196-.945-2.232-1.107T8.214-32.5t-1.91-1.518-1.554-1.75-1.268-2.07-.75-2.376T2.43-43q0-4.93 3.5-8.643t9.106-4.786v-6.427q0-.464.34-.804t.803-.34H21q.5 0 .82.32t.323.823v6.286q2.036.213 3.946.82t3.106 1.196 2.268 1.34 1.393 1.035.536.5q.607.644.178 1.36l-2.89 5.213q-.287.536-.823.57-.5.108-.964-.25-.107-.106-.518-.427t-1.393-.947-2.09-1.144-2.66-.928-3.053-.41q-3.394 0-5.537 1.535T11.5-43.143q0 .93.304 1.714t1.053 1.484 1.41 1.178 2 1.107 2.162.964 2.5.982q1.89.714 2.89 1.125t2.716 1.25 2.696 1.52 2.214 1.784 1.893 2.268 1.124 2.732.465 3.357z","RUPEE":"M32.07-47.214v3.643q0 .5-.32.82t-.82.32h-6q-.823 5.144-4.61 8.36t-9.856 3.927Q16.43-23.786 26.857-11q.5.57.143 1.214-.286.643-1.036.643H19q-.57 0-.893-.428Q7.18-22.68.32-29.965 0-30.286 0-30.75v-4.536q0-.464.34-.803t.803-.34h4q4.714 0 7.59-1.534t3.66-4.465H1.143q-.5 0-.822-.32T0-43.57v-3.644q0-.5.32-.822t.823-.32h14.75q-2.036-4.037-9.572-4.037H1.144q-.464 0-.804-.34T0-53.535v-4.75q0-.5.32-.82t.823-.323h29.714q.5 0 .822.323t.32.82v3.644q0 .5-.32.822t-.823.32h-8.32q1.677 2.18 2.284 5.143h6.11q.5 0 .82.32t.32.823z","YEN":"M21.536-9.143h-6.143q-.464 0-.804-.32t-.34-.823V-22.07H3.964q-.464 0-.803-.323t-.34-.82v-3.68q0-.464.34-.803t.804-.34H14.25v-3.035H3.964q-.464 0-.803-.323t-.34-.82v-3.716q0-.463.34-.802t.804-.34h7.643L.143-57.713q-.286-.572 0-1.143.357-.572 1-.572H8.07q.68 0 1.037.644l7.68 15.18q.677 1.356 2 4.463.356-.857 1.088-2.428t.982-2.18l6.822-15q.284-.68 1.034-.68h6.822q.607 0 .964.573.32.5.036 1.107l-11.18 20.68h7.68q.464 0 .803.338t.34.803v3.716q0 .5-.34.82t-.804.323H22.68v3.034h10.356q.464 0 .803.34t.34.803v3.68q0 .5-.34.82t-.804.322H22.68v11.784q0 .465-.34.804t-.804.34z","RUBLE":"M37.25-43.82q0-3.573-2.32-5.787t-6.11-2.214H17.394v16H28.82q3.787 0 6.11-2.216t2.32-5.785zm8.464 0q0 6.89-4.518 11.25t-11.66 4.356H17.393V-24H35.43q.5 0 .82.32t.32.823v4.57q0 .5-.32.823t-.82.32H17.392v6.858q0 .5-.34.822t-.803.32h-5.964q-.5 0-.822-.32t-.32-.822v-6.857h-8q-.5 0-.823-.32T0-18.287v-4.57q0-.5.32-.823t.823-.32h8v-4.214h-8q-.5 0-.822-.322t-.32-.82v-5.323q0-.463.32-.802t.823-.34h8v-22.464q0-.5.32-.82t.823-.323h19.25q7.143 0 11.66 4.36t4.518 11.25z","WON":"M18.357-21.32L21.25-32h-5.68l2.68 10.714q.036.036.036.107t.035.11q0-.037.02-.126t.017-.125zM22.5-36.57l1.25-4.573H13.32l1.144 4.572H22.5zm6.857 0h4.964l-1.25-4.573h-2.5zm16.036 15.284L48.18-32h-5.787l2.893 10.68q0 .034.018.124t.053.125q0-.037.018-.11t.018-.106zm3.964-15.285l1.18-4.573H39.928l1.213 4.572h8.214zM64-35.43v2.287q0 .5-.32.822t-.823.32H55.25l-5.857 22q-.25.857-1.107.857h-5.68q-.856 0-1.106-.857l-5.93-22h-7.463l-5.964 22q-.25.857-1.107.857h-5.68q-.392 0-.695-.25T14.287-10L8.57-32H1.144q-.5 0-.822-.32T0-33.144v-2.286q0-.5.32-.82t.823-.32h6.25l-1.18-4.573h-5.07q-.5 0-.822-.32T0-42.287v-2.285q0-.5.32-.823t.823-.32h3.893L1.856-58q-.177-.536.18-1 .357-.43.928-.43h4.893q.93 0 1.107.86l3.215 12.856H25l3.464-12.857q.25-.86 1.107-.86h4.5q.86 0 1.11.86l3.5 12.856h13.034l3.322-12.857q.178-.86 1.107-.86h4.893q.57 0 .928.43.357.464.18 1l-3.25 12.286h3.963q.5 0 .822.32t.32.823v2.284q0 .5-.32.822t-.823.32H57.68l-1.216 4.573h6.393q.5 0 .822.32t.32.82z","BTC":"M41.68-41.143q.64 6.5-4.68 9.214 4.18 1 6.25 3.68t1.607 7.643q-.25 2.536-1.16 4.464t-2.304 3.18-3.464 2.088-4.34 1.232-5.197.536V0h-5.5v-8.964q-2.857 0-4.357-.036v9h-5.5v-9.107q-.643 0-1.93-.018t-1.963-.018H2l1.107-6.536H7.07q1.787 0 2.073-1.82v-14.357h.57q-.213-.036-.57-.036v-10.25q-.464-2.428-3.18-2.428H2v-5.86l7.57.037q2.287 0 3.466-.036v-9h5.5v8.823q2.928-.072 4.357-.072v-8.75h5.5v9q2.82.25 5 .805t4.036 1.607 2.945 2.786 1.304 4.09zM34-21.68q0-1.284-.536-2.284t-1.32-1.643-2.055-1.09-2.34-.66-2.643-.322-2.464-.106-2.304.036-1.697.036v12.07q.286 0 1.32.02t1.716.017 1.89-.054 2.09-.144 2.036-.303 1.983-.5 1.695-.75 1.41-1.072.876-1.427.34-1.822zm-2.536-17q0-1.177-.446-2.088t-1.09-1.5-1.714-1-1.964-.59-2.196-.285-2.072-.09-1.928.037-1.41.017v10.966q.177 0 1.23.018t1.662 0 1.785-.072 1.966-.196 1.84-.393 1.73-.66 1.323-.965.963-1.375.32-1.822z","FILE":"M36.57-45.714V-62.57q.787.5 1.287 1L52.43-47q.5.5 1 1.286H36.57zM32-44.57q0 1.427 1 2.427t2.43 1h19.427V-3.43q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1H32v19.43z","FILE_TEXT":"M52.43-47q.5.5 1 1.286H36.57V-62.57q.787.5 1.287 1zm-17 5.857h19.427V-3.43q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1H32v19.43q0 1.427 1 2.427t2.43 1zm5.713 26.286v-2.286q0-.5-.322-.82t-.82-.323H14.857q-.5 0-.82.322t-.323.82v2.287q0 .5.322.82t.82.323H40q.5 0 .82-.322t.323-.82zm0-9.143v-2.286q0-.5-.322-.82T40-27.43H14.857q-.5 0-.82.323t-.323.82V-24q0 .5.322.82t.82.323H40q.5 0 .82-.322t.323-.82zm0-9.143v-2.286q0-.5-.322-.82t-.82-.32H14.857q-.5 0-.82.32t-.323.82v2.287q0 .5.322.822t.82.32H40q.5 0 .82-.32t.323-.823z","SORT_ALPHA_ASC":"M42.536-49.43h6.32l-2.57-7.784-.43-1.68q-.07-.57-.07-.713h-.143l-.107.714q0 .036-.125.643t-.267 1.036zm-16.25 36.86q0 .427-.357.856L14.535-.32q-.357.32-.822.32-.428 0-.82-.32L1.463-11.75q-.535-.57-.25-1.25.286-.714 1.072-.714h6.857v-49.143q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v49.143h6.857q.5 0 .82.32t.323.823zm29.857 4.25V0H35.286v-3.214l13.178-18.893q.43-.643.75-.964l.393-.323v-.107q-.07 0-.232.018t-.268.018q-.428.107-1.07.107H39.75v4.107h-4.286v-8.18h20.25v3.18L42.536-5.32q-.215.284-.75.927L41.393-4v.07l.5-.07q.32-.07 1.07-.07h8.858v-4.25h4.323zm3.178-32.037v3.786H49.037v-3.787h2.678L50.036-45.5h-8.68l-1.677 5.143h2.677v3.786h-10.25v-3.787h2.5L42.82-64h5.787l8.214 23.643h2.5z","SORT_ALPHA_DESC":"M42.536-12.857h6.32l-2.57-7.786-.43-1.678q-.07-.573-.07-.716h-.143l-.107.715q0 .034-.125.64t-.267 1.037zm-16.25.286q0 .427-.357.856L14.535-.32q-.357.32-.822.32-.428 0-.82-.32L1.463-11.75q-.535-.57-.25-1.25.286-.714 1.072-.714h6.857v-49.143q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v49.143h6.857q.5 0 .82.32t.323.823zM59.32-3.787V0H49.037v-3.786h2.678L50.036-8.93h-8.68L39.68-3.785h2.677V0h-10.25v-3.786h2.5L42.82-27.43h5.787L56.82-3.785h2.5zm-3.177-41.107v8.322H35.286v-3.216L48.464-58.68q.43-.64.75-.963l.393-.32v-.108q-.07 0-.232.016t-.268.018q-.428.107-1.07.107H39.75v4.11h-4.286V-64h20.25v3.18L42.536-41.894q-.215.286-.75.93l-.393.356v.107l.5-.107q.32-.036 1.07-.036h8.858v-4.25h4.323z","SORT_AMOUNT_ASC":"M26.286-12.57q0 .427-.357.856L14.535-.32q-.357.32-.822.32-.428 0-.82-.32L1.463-11.75q-.535-.57-.25-1.25.286-.714 1.072-.714h6.857v-49.143q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v49.143h6.857q.5 0 .82.32t.323.823zM64-8v6.857q0 .5-.32.822t-.823.32H33.143q-.5 0-.822-.32T32-1.144V-8q0-.5.32-.82t.823-.323h29.714q.5 0 .822.322T64-8zm-6.857-18.286v6.857q0 .5-.322.823t-.82.32H33.143q-.5 0-.822-.32T32-19.43v-6.856q0-.5.32-.82t.823-.323H56q.5 0 .82.323t.323.82zM50.286-44.57v6.856q0 .5-.322.82t-.82.323h-16q-.5 0-.823-.323t-.32-.82v-6.858q0-.5.32-.823t.823-.32h16q.5 0 .82.32t.323.822zM43.43-62.858V-56q0 .5-.323.82t-.82.323h-9.144q-.5 0-.822-.322T32-56v-6.857q0-.5.32-.822t.823-.32h9.143q.5 0 .82.32t.323.823z","SORT_AMOUNT_DESC":"M43.43-8v6.857q0 .5-.323.822t-.82.32h-9.144q-.5 0-.822-.32T32-1.144V-8q0-.5.32-.82t.823-.323h9.143q.5 0 .82.322t.323.82zm-17.144-4.57q0 .427-.357.856L14.535-.32q-.357.32-.822.32-.428 0-.82-.32L1.463-11.75q-.535-.57-.25-1.25.286-.714 1.072-.714h6.857v-49.143q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v49.143h6.857q.5 0 .82.32t.323.823zm24-13.716v6.857q0 .5-.322.823t-.82.32h-16q-.5 0-.823-.32T32-19.43v-6.856q0-.5.32-.82t.823-.323h16q.5 0 .82.323t.323.82zm6.857-18.285v6.856q0 .5-.322.82t-.82.323H33.143q-.5 0-.822-.323t-.32-.82v-6.858q0-.5.32-.823t.823-.32H56q.5 0 .82.32t.323.822zM64-62.858V-56q0 .5-.32.82t-.823.323H33.143q-.5 0-.822-.322T32-56v-6.857q0-.5.32-.822t.823-.32h29.714q.5 0 .822.32t.32.823z","SORT_NUMERIC_ASC":"M48.07-17.107q0-2.25-1.57-4.143t-3.68-1.893q-1.856 0-2.963 1.322t-1.107 3.356 1.304 3.393 3.732 1.356q1.785 0 3.035-.965t1.25-2.427zM26.287-12.57q0 .427-.357.856L14.535-.32q-.357.32-.822.32-.428 0-.82-.32L1.463-11.75q-.535-.57-.25-1.25.286-.714 1.072-.714h6.857v-49.143q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v49.143h6.857q.5 0 .82.32t.323.823zm26.785-2.466q0 2.215-.463 4.34t-1.464 4.07-2.43 3.412-3.517 2.34T40.643 0q-2.214 0-3.857-.57-.857-.287-1.5-.537l1.393-4.036q.534.25 1.106.393 1.32.464 2.678.464 3 0 4.804-2.09t2.375-5.195h-.072q-.75.82-2.195 1.32t-3.018.5q-3.786 0-6.178-2.554t-2.394-6.16q0-3.75 2.57-6.357t6.465-2.61q4.394 0 7.323 3.376t2.928 9.018zM52-40.643v4.072H35.25v-4.073h5.964V-56.07q0-.25.018-.68t.018-.607v-.572h-.07l-.25.43q-.287.464-.93 1.107l-2.214 2.072-2.93-3.073L41.715-64h4.393v23.357H52z","SORT_NUMERIC_DESC":"M48.07-53.68q0-2.25-1.57-4.14t-3.68-1.894q-1.856 0-2.963 1.32t-1.107 3.358 1.304 3.393 3.732 1.357q1.785 0 3.035-.964t1.25-2.43zM26.287-12.57q0 .427-.357.856L14.535-.32q-.357.32-.822.32-.428 0-.82-.32L1.463-11.75q-.535-.57-.25-1.25.286-.714 1.072-.714h6.857v-49.143q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v49.143h6.857q.5 0 .82.32t.323.823zM52-4.07V0H35.25v-4.07h5.964V-19.5q0-.25.018-.68t.018-.606v-.57h-.07l-.25.427q-.287.466-.93 1.11l-2.214 2.07-2.93-3.07 6.858-6.61h4.393v23.36H52zm1.07-47.537q0 2.214-.463 4.34t-1.464 4.07-2.43 3.41-3.517 2.34-4.553.876q-2.214 0-3.857-.573-.857-.286-1.5-.536l1.393-4.034q.534.25 1.106.393 1.32.463 2.678.463 3 0 4.804-2.09t2.375-5.196h-.072q-.75.822-2.195 1.322t-3.018.5q-3.786 0-6.178-2.555t-2.394-6.16q0-3.75 2.57-6.358T42.822-64q4.394 0 7.323 3.375t2.928 9.018z","THUMBS_UP":"M9.143-16q0-.93-.68-1.607t-1.606-.68q-.964 0-1.625.68T4.572-16q0 .964.66 1.625t1.625.66q.93 0 1.607-.66T9.144-16zm5.714-18.286v22.857q0 .93-.678 1.61t-1.61.677H2.287q-.93 0-1.607-.678T0-11.43v-22.856q0-.928.68-1.607t1.606-.678H12.57q.93 0 1.61.677t.677 1.607zm42.286 0q0 3.072-1.964 5.322.534 1.57.534 2.714.107 2.714-1.535 4.893.606 2 0 4.178-.537 2.037-1.93 3.36.32 4-1.75 6.463-2.286 2.714-7.036 2.786H38.856q-2.357 0-5.143-.555t-4.34-1.036-4.303-1.41q-4.39-1.537-5.64-1.573-.93-.036-1.61-.696t-.677-1.59v-22.89q0-.894.643-1.555t1.535-.732q.86-.072 2.716-2.107t3.607-4.322q2.428-3.107 3.607-4.285.643-.644 1.107-1.716t.625-1.732.482-2.16q.25-1.393.447-2.18t.697-1.856 1.214-1.786q.68-.68 1.61-.68 1.64 0 2.945.376t2.143.93 1.428 1.445.858 1.61.428 1.784.18 1.607.017 1.394q0 1.357-.34 2.715t-.68 2.14-.98 2q-.11.216-.36.644t-.39.786-.287.857h9.893q2.785 0 4.82 2.036t2.037 4.82z","THUMBS_DOWN":"M9.143-43.43q0 .93-.68 1.61t-1.606.677q-.964 0-1.625-.678t-.66-1.61q0-.963.66-1.624t1.625-.66q.93 0 1.607.66t.68 1.625zm5.714 18.287V-48q0-.93-.678-1.607t-1.61-.68H2.287q-.93 0-1.607.68T0-48v22.857q0 .93.68 1.607t1.606.68H12.57q.93 0 1.61-.68t.677-1.607zm40.322-5.32q1.963 2.177 1.963 5.32-.036 2.786-2.054 4.822t-4.804 2.034h-9.893q.143.5.286.857t.39.787.36.643q.64 1.32.963 2.036t.678 2.09.36 2.73q0 .858-.02 1.394t-.178 1.607-.428 1.786-.858 1.607-1.428 1.446-2.143.93T35.43 0q-.93 0-1.61-.68-.713-.713-1.213-1.784T31.91-4.32t-.446-2.18q-.32-1.5-.482-2.16t-.625-1.733-1.107-1.714q-1.18-1.18-3.607-4.286-1.75-2.286-3.607-4.32t-2.715-2.108q-.89-.073-1.534-.734t-.643-1.553V-48q0-.93.678-1.59t1.61-.696q1.25-.035 5.64-1.57 2.75-.93 4.305-1.412t4.34-1.036 5.142-.553h4.606q4.75.07 7.036 2.786 2.07 2.463 1.75 6.463 1.393 1.32 1.93 3.357.606 2.18 0 4.18 1.64 2.177 1.534 4.89 0 1.144-.535 2.716z","YOUTUBE_SQUARE":"M32.82-17.464v-5.607q0-1.787-1.034-1.787-.607 0-1.18.57v8q.573.573 1.18.573 1.035 0 1.035-1.75zm6.573-4.357h2.357v-1.216q0-1.82-1.18-1.82t-1.177 1.82v1.215zM19-31.32v2.5h-2.857v15.106H13.5V-28.82h-2.786v-2.5H19zm7.18 4.5v13.106h-2.394v-1.43q-1.393 1.608-2.715 1.608-1.177 0-1.5-1-.213-.57-.213-1.928V-26.82h2.357v9.64q0 .86.036.93.036.536.536.536.714 0 1.5-1.107v-10h2.393zm9 3.963v5.214q0 1.857-.25 2.607-.43 1.5-1.894 1.5-1.25 0-2.43-1.464v1.286h-2.392V-31.32h2.393v5.75Q31.75-27 33.037-27q1.463 0 1.892 1.5.25.75.25 2.643zm8.963 4.607v.32q0 1.037-.072 1.537-.106.786-.534 1.43-.965 1.427-2.857 1.427-1.86 0-2.894-1.357-.75-.964-.75-3.07v-4.608q0-2.11.714-3.073Q38.786-27 40.607-27t2.786 1.357q.75 1 .75 3.072v2.713h-4.75v2.32q0 1.823 1.214 1.823.857 0 1.072-.93 0-.035.016-.25t.018-.588v-.768h2.43zM28.036-47.68v5.573q0 1.82-1.143 1.82t-1.143-1.82v-5.572q0-1.856 1.143-1.856t1.143 1.857zM47.07-22.213q0-6.322-.677-9.286-.357-1.57-1.536-2.625t-2.714-1.232q-4.857-.536-14.714-.536-9.823 0-14.68.536-1.57.178-2.732 1.232T8.5-31.5q-.714 3.107-.714 9.286 0 6.285.714 9.285.357 1.537 1.518 2.61t2.696 1.25q4.893.534 14.715.534t14.713-.535q1.536-.18 2.696-1.25t1.517-2.61q.714-3 .714-9.284zm-26.963-23.25l3.214-10.572h-2.677L18.82-49.07l-1.89-6.966h-2.787L15-53.57l.82 2.463q1.25 3.678 1.644 5.643v7.178h2.643v-7.178zM30.43-42.57v-4.644q0-2.072-.75-3.107-1.037-1.36-2.787-1.36-1.822 0-2.786 1.36-.75 1.034-.75 3.106v4.643q0 2.07.75 3.106.964 1.357 2.786 1.357 1.75 0 2.786-1.357.75-.965.75-3.107zm6.463 4.284h2.393V-51.5h-2.393v10.107q-.786 1.107-1.5 1.107-.536 0-.572-.57-.034-.073-.034-.93V-51.5h-2.393v10.464q0 1.322.214 1.965.393.963 1.536.963 1.286 0 2.75-1.607v1.428zm17.964-10.857v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","YOUTUBE":"M34.68-19.57v7.534q0 2.393-1.394 2.393-.822 0-1.607-.786v-10.75q.784-.784 1.606-.784 1.393 0 1.393 2.393zm12.07.034v1.643h-3.214v-1.643q0-2.428 1.607-2.428t1.607 2.428zm-34.5-7.785h3.82v-3.36H4.93v3.36h3.75V-7h3.57v-20.32zM22.536-7h3.178v-17.643h-3.178v13.5q-1.072 1.5-2.036 1.5-.643 0-.75-.75-.036-.107-.036-1.25v-13h-3.178v13.964q0 1.75.285 2.61.43 1.32 2.073 1.32 1.714 0 3.643-2.18V-7zm15.32-5.286v-7.035q0-2.61-.32-3.537-.607-2-2.536-2-1.786 0-3.32 1.928v-7.75H28.5V-7h3.18v-1.714Q33.285-6.75 35-6.75q1.93 0 2.536-1.964.32-.965.32-3.572zm12.073-.357v-.464h-3.25q0 1.82-.073 2.178-.25 1.287-1.428 1.287-1.644 0-1.644-2.464v-3.107h6.393v-3.68q0-2.82-.966-4.142-1.393-1.82-3.785-1.82-2.43 0-3.823 1.82-1 1.322-1 4.143v6.18q0 2.82 1.036 4.142 1.393 1.82 3.857 1.82 2.57 0 3.857-1.893.643-.964.75-1.928.072-.323.072-2.073zM28.213-45.25v-7.5q0-2.464-1.535-2.464t-1.537 2.464v7.5q0 2.5 1.536 2.5t1.534-2.5zm25.68 26.82q0 8.36-.93 12.5-.5 2.11-2.07 3.537T47.25-.75Q40.68 0 27.43 0T7.606-.75q-2.07-.214-3.66-1.643T1.892-5.93q-.93-4-.93-12.5 0-8.356.93-12.5.5-2.106 2.07-3.534t3.68-1.68q6.536-.713 19.786-.713t19.82.714q2.07.25 3.66 1.68t2.054 3.534q.93 4 .93 12.5zM18.25-64h3.643L17.57-49.75v9.68H14v-9.68q-.5-2.643-2.18-7.57Q10.5-61 9.5-64h3.786l2.535 9.393zm13.214 11.893v6.25q0 2.893-1 4.214-1.32 1.822-3.785 1.822-2.394 0-3.75-1.823-1-1.357-1-4.214v-6.25q0-2.857 1-4.18 1.356-1.82 3.75-1.82 2.463 0 3.784 1.82 1 1.323 1 4.18zm11.965-5.786v17.822h-3.25v-1.966q-1.894 2.215-3.68 2.215-1.643 0-2.107-1.323-.286-.857-.286-2.678v-14.073h3.25v13.107q0 1.18.036 1.25.107.786.75.786.964 0 2.036-1.536v-13.607h3.25z","XING":"M21.32-40.18q-.356.644-9.177 16.287-.964 1.643-2.322 1.643H1.287q-.75 0-1.107-.607t0-1.286l9.034-16q.036 0 0-.036l-5.75-9.963q-.428-.786-.035-1.32Q3.75-52 4.57-52h8.537q1.43 0 2.357 1.607zm28.787-22.927q.393.57 0 1.32L31.25-28.428v.037l12 21.964q.393.716.036 1.323-.357.536-1.143.536h-8.536q-1.5 0-2.357-1.61L19.143-28.392q.643-1.143 18.964-33.643.893-1.607 2.286-1.607H49q.786 0 1.107.536z","XING_SQUARE":"M24.464-36.68q0-.034-4.5-7.927-.75-1.214-1.857-1.214h-6.57q-.644 0-.93.39-.25.43.036 1.037l4.464 7.714v.037l-7 12.357q-.32.5 0 1 .286.465.857.465h6.607q1.11 0 1.787-1.287zM46.75-54.43q-.25-.427-.857-.427h-6.68q-1.07 0-1.75 1.25L22.787-27.57q.035.07 9.357 17.177.714 1.25 1.857 1.25h6.57q.644 0 .894-.428.286-.466-.035-1l-9.287-17v-.037L46.75-53.43q.286-.57 0-1zm8.107 5.287v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","YOUTUBE_PLAY":"M45.714-32q0-1.32-1.07-1.93L26.356-45.356q-1.107-.714-2.32-.072-1.18.644-1.18 2v22.86q0 1.356 1.18 2 .57.284 1.106.284.714 0 1.214-.357L44.643-30.07q1.07-.61 1.07-1.93zM64-32q0 3.43-.036 5.357t-.303 4.875-.803 5.268q-.57 2.607-2.464 4.393t-4.43 2.07q-7.927.894-23.963.894t-23.964-.893Q5.5-10.32 3.59-12.106T1.106-16.5q-.5-2.32-.768-5.268t-.304-4.875T0-32t.036-5.357.303-4.875.803-5.268q.57-2.607 2.464-4.393t4.43-2.07q7.927-.894 23.963-.894t23.964.893q2.536.285 4.447 2.07t2.483 4.394q.5 2.32.768 5.268t.304 4.875T64-32z","DROPBOX":"M14.357-38.75L32-27.857 19.786-17.68l-17.5-11.39zM49.57-18.93v3.86L32.07-4.608v.036l-.034-.037L32-4.57v-.037L14.536-15.07v-3.86l5.25 3.43L32-25.643v-.07l.036.034.035-.034v.07L44.32-15.5zM19.787-59.785L32-49.606 14.357-38.75l-12.07-9.643zM49.643-38.75l12.07 9.68L44.25-17.68 32-27.856zM44.25-59.786l17.464 11.393-12.07 9.643L32-49.607z","STACK_OVERFLOW":"M33.143-13.964v5.393l-25.25.034v-5.393zM41.75-26.32v25.034l-.036 1.25V0H1.286L.036-.036H0V-26.32h4.32v22.07h33.144v-22.07h4.286zM8.607-23.18l25.143 2.323-.464 5.357-25.18-2.32zm2.43-11.284l24.392 6.535-1.394 5.216L9.643-29.25zm5.82-12.465l21.75 12.86-2.75 4.64-21.75-12.856zm12.857-11.82L43.93-37.857 39.5-34.82 25.25-55.68zM45.894-64l4.32 24.893-5.32.928-4.323-24.89z","INSTAGRAM":"M48.643-13.07v-23.144H43.82q.716 2.25.716 4.678 0 4.5-2.286 8.304t-6.214 6.018T27.464-15q-7.035 0-12.035-4.84t-5-11.696q0-2.428.713-4.678H6.107v23.143q0 .927.625 1.552t1.554.625h38.178q.893 0 1.536-.625t.643-1.553zM38.5-32.108q0-4.43-3.232-7.554t-7.804-3.126q-4.535 0-7.768 3.125t-3.232 7.553 3.232 7.553 7.768 3.125q4.572 0 7.804-3.124t3.232-7.553zm10.143-12.857v-5.893q0-1-.714-1.732t-1.75-.73h-6.216q-1.035 0-1.75.73t-.714 1.733v5.893q0 1.035.714 1.75t1.75.714h6.215q1.034 0 1.75-.714t.713-1.75zm6.214-7.43v40.787q0 2.893-2.07 4.964T47.82-4.57H7.037q-2.893 0-4.965-2.073T0-11.607v-40.786q0-2.893 2.07-4.964t4.966-2.072H47.82q2.894 0 4.966 2.073t2.07 4.964z","FLICKR":"M44.57-59.43q4.25 0 7.27 3.02t3.017 7.267v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57zM24.93-32q0-3.143-2.216-5.357t-5.357-2.214T12-37.358 9.786-32 12-26.643t5.357 2.214 5.357-2.213T24.93-32zm20.14 0q0-3.143-2.213-5.357T37.5-39.57t-5.357 2.213T29.93-32t2.213 5.357T37.5-24.43t5.357-2.213T45.07-32z","ADN":"M27.43-41.786l7.177 10.93H20.25zm13.034 18.93h3.357l-16.39-24.68-16.394 24.68h3.357l3.714-5.715H36.75zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","BITBUCKET":"M29.107-33.32q.286 2.25-1.803 3.606t-3.983.214q-1.39-.607-1.91-2.07t-.017-2.93 1.857-2.07q1.286-.644 2.59-.43t2.285 1.268.982 2.41zm3.964-.75q-.5-3.823-4.034-5.86T22-40.392q-2.25 1-3.59 3.16t-1.23 4.626q.14 3.25 2.766 5.536t5.91 2q3.25-.287 5.43-3t1.785-6zm8.537-19.36q-.714-.963-2-1.588t-2.07-.786T35-56.25q-10.393-1.68-20.214.07-1.536.25-2.357.43t-1.966.786T8.68-53.43q1.07 1 2.713 1.626t2.625.786 3.125.41q8.143 1.037 16 .037 2.25-.287 3.196-.43t2.59-.768 2.677-1.66zm2.036 36.966q-.286.928-.554 2.732t-.5 3-1.02 2.5-2.07 2.018Q36.43-4.5 32.732-3.66t-7.214.785-7.197-.66q-1.64-.286-2.91-.644t-2.73-.963-2.61-1.553-1.856-2.197Q7.32-12.32 6.18-19.32l.213-.573.643-.32Q15-14.93 25.126-14.93t18.124-5.284q.75.214.857.82t-.178 1.608-.287 1.322zm6.464-34.322q-.928 5.965-3.964 23.393-.18 1.072-.964 2t-1.555 1.43-1.946 1.106q-9 4.5-21.787 3.143-8.857-.965-14.072-4.965-.534-.427-.91-.945t-.606-1.25-.322-1.214-.214-1.41-.197-1.25q-.32-1.786-.945-5.357t-1-5.768-.84-5.268T0-52.786q.107-.928.625-1.732t1.125-1.34 1.607-1.07T5-57.733t1.714-.66q4.465-1.644 11.18-2.287Q31.428-62 42.035-58.892q5.535 1.643 7.678 4.357.572.715.59 1.822t-.197 1.928z","BITBUCKET_SQUARE":"M30.286-32.93q0-1.534-1.465-2.356t-2.75-.035q-1.534.713-1.516 2.588t1.553 2.518q1.393.82 2.893-.143t1.286-2.572zm2.857-.57q.286 2.357-1.286 4.32T27.93-27t-4.25-1.43-2-4.034q-.073-1.75.91-3.322t2.59-2.285q2.5-1.11 5.052.356t2.91 4.214zm6.143-13.964q-.715.75-1.91 1.214t-1.894.57-2.268.287q-5.535.714-11.57 0-1.573-.214-2.25-.34t-1.876-.57-1.947-1.16q.466-.68 1.287-1.108t1.43-.555 1.677-.304q7.072-1.25 14.572-.034 1.178.178 1.82.303t1.537.57 1.393 1.126zm1.5 26.643q0-.25.196-.948t.107-1.143-.626-.59q-5.75 3.786-13.035 3.786T14.356-23.5l-.428.214-.18.43q.93 5.5 1.464 7.5 1.68 2.892 7.286 3.856 8.893 1.643 15.286-1.893 1.214-.678 1.75-1.84t.803-3.053.446-2.535zm4.643-24.75q.32-1.894-.287-2.68-1.536-1.964-5.536-3.143-7.714-2.25-17.393-1.286-4.714.43-8.07 1.644-1.358.536-2.126.893t-1.68 1.214T9.287-47q.285 2.43.678 4.93T11-35.965t.857 4.893q.036.177.18 1.106t.25 1.285.427.966.786 1q3.75 2.857 10.143 3.57 9.25 1 15.714-2.25.857-.463 1.41-.82t1.108-1.036.696-1.43q1.716-9.534 2.86-16.89zm9.427-3.573v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TUMBLR":"M33.714-16.536L36.57-8.07q-.82 1.25-3.963 2.356t-6.32 1.143q-3.716.07-6.805-.93t-5.09-2.643T11-11.93t-1.982-4.284-.59-4.215v-19.427h-6v-7.68q2.572-.927 4.608-2.48t3.25-3.215 2.07-3.643 1.215-3.536.537-3.16q.036-.18.16-.305t.27-.125h8.713v15.143h11.893v9h-11.93v18.5q0 1.07.233 2t.804 1.875T26.018-16t2.91.5q2.786-.07 4.786-1.036z","TUMBLR_SQUARE":"M40.57-11.82l-2.213-6.537q-1.57.786-3.678.786-1.287.034-2.216-.376T31.09-19.07t-.626-1.448-.178-1.553v-14.216h9.178v-6.928H30.32v-11.643h-6.713q-.286 0-.32.357-.18 1.57-.626 3.107T21.27-48t-2.75 3.393-4.232 2.428v5.894h4.643v14.93q0 2.035.766 4.106t2.322 3.964 4.32 3.054 6.305 1.09q2.464-.037 4.875-.894t3.053-1.785zm14.287-37.323v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","LONG_ARROW_DOWN":"M27.32-17.607q.287.678-.177 1.25l-12.5 13.714q-.357.357-.822.357-.5 0-.856-.357L.286-16.357q-.465-.572-.18-1.25.323-.68 1.037-.68h8v-44.57q0-.5.32-.822t.823-.32h6.857q.5 0 .82.32t.323.823v44.57h8q.75 0 1.035.68z","LONG_ARROW_UP":"M27.32-46.393q-.32.68-1.034.68h-8v44.57q0 .5-.322.822t-.82.32h-6.858q-.5 0-.822-.32t-.32-.823v-44.57h-8q-.75 0-1.037-.68t.18-1.25l12.5-13.714q.356-.357.82-.357.5 0 .857.357l12.68 13.714q.463.572.177 1.25z","LONG_ARROW_LEFT":"M64-35.43v6.86q0 .5-.32.82t-.823.32h-44.57v8q0 .75-.68 1.037t-1.25-.178L2.643-31.07q-.357-.36-.357-.823 0-.5.357-.857l13.714-12.643q.572-.5 1.25-.214.68.32.68 1.036v8h44.57q.5 0 .822.32t.32.82z","LONG_ARROW_RIGHT":"M61.714-32.107q0 .5-.357.857L47.643-18.607q-.572.5-1.25.214-.68-.32-.68-1.036v-8H1.144q-.5 0-.822-.32T0-28.57v-6.86q0-.5.32-.82t.823-.32h44.57v-8q0-.75.68-1.037t1.25.178l13.714 12.5q.357.36.357.823z","APPLE":"M49.75-20.607q-1.393 4.464-4.393 8.928-4.607 7-9.178 7-1.75 0-5-1.14-3.073-1.144-5.394-1.144-2.18 0-5.072 1.178Q17.82-4.57 16-4.57q-5.43 0-10.75-9.25Q0-23.144 0-31.787q0-8.143 4.036-13.357 4-5.143 10.143-5.143 2.57 0 6.32 1.072 3.714 1.07 4.93 1.07 1.606 0 5.106-1.213 3.643-1.214 6.178-1.214 4.25 0 7.607 2.32 1.86 1.286 3.716 3.57-2.822 2.394-4.072 4.216-2.32 3.357-2.32 7.393 0 4.427 2.463 7.963t5.643 4.5zM36.32-62.5q0 2.18-1.034 4.857-1.072 2.68-3.322 4.93-1.928 1.927-3.857 2.57-1.32.393-3.714.607.107-5.32 2.786-9.178 2.64-3.822 8.927-5.286.036.107.09.393t.09.393q0 .143.017.357t.017.357z","WINDOWS":"M24.357-28.07v23.25L0-8.18v-19.89h24.357zm0-26.537v23.536H0v-20.18zM59.43-28.07V0L27.035-4.464V-28.07H59.43zm0-31.36v28.36H27.035v-23.894z","ANDROID":"M17.607-46.75q.572 0 .982-.41t.41-.983-.41-.982-.983-.41-.964.41-.393.982.393.982.964.41zm15.072 0q.57 0 .963-.41t.393-.983-.393-.982-.964-.41-.984.41-.41.982.41.982.983.41zm-29 6.57q1.5 0 2.57 1.073t1.07 2.57v15.358q0 1.537-1.052 2.61t-2.59 1.07-2.607-1.07T0-21.18v-15.356q0-1.5 1.07-2.57t2.61-1.073zm37.856.68v23.786q0 1.643-1.143 2.785t-2.75 1.144h-2.68v8.107q0 1.537-1.07 2.61T31.286 0 28.68-1.07t-1.073-2.61v-8.106H22.68v8.107q0 1.537-1.073 2.61T19 0q-1.5 0-2.57-1.07t-1.073-2.61l-.036-8.106h-2.64q-1.644 0-2.787-1.143T8.75-15.713V-39.5h32.786zM33.25-53.964q3.82 1.964 6.107 5.482t2.286 7.696H8.607q0-4.178 2.286-7.696t6.143-5.482l-2.536-4.68q-.25-.463.18-.713.463-.214.713.214l2.57 4.714q3.394-1.5 7.18-1.5t7.178 1.5l2.573-4.713q.25-.428.714-.214.43.25.18.714zm17.036 17.428v15.357q0 1.537-1.072 2.61t-2.607 1.07q-1.5 0-2.57-1.07t-1.073-2.61v-15.356q0-1.535 1.072-2.59t2.57-1.053q1.537 0 2.608 1.055t1.072 2.59z","LINUX":"M23.68-49.32q-.394.034-.555.374t-.304.34q-.177.035-.177-.18 0-.428.678-.535h.36zm3.106.5q-.143.034-.41-.234t-.626-.16q.857-.393 1.143.07.107.215-.107.323zM14.25-33.57q-.143-.037-.214.106t-.16.446-.197.482-.36.465q-.25.356-.034.427.143.036.446-.25t.447-.643q.034-.107.07-.25t.07-.214.055-.16.018-.144v-.107l-.036-.09-.107-.07zm30.536 12.82q0-.643-1.965-1.5.144-.536.27-.982t.178-.93.107-.767.018-.802-.036-.697-.125-.784-.143-.732-.18-.893-.196-.946q-.357-1.714-1.678-3.678t-2.572-2.68q.857.715 2.036 2.965 3.107 5.787 1.93 9.93-.394 1.43-1.787 1.5-1.107.143-1.375-.66t-.286-2.983-.41-3.82q-.322-1.394-.697-2.466t-.696-1.624-.555-.875-.464-.534-.267-.25q-.5-2.215-1.107-3.68t-1.054-2-.84-1.177-.535-1.43q-.143-.75.214-1.91t.162-1.77-1.59-.89q-.535-.11-1.588-.644t-1.268-.572q-.286-.035-.393-.928t.286-1.822 1.284-.964q1.322-.107 1.822 1.07t.143 2.073q-.394.678-.073.946t1.072.017q.463-.143.463-1.286v-1.32q-.18-1.07-.482-1.786t-.75-1.09-.84-.535-.963-.27q-3.82.287-3.178 4.787 0 .536-.037.536-.322-.322-1.054-.375t-1.18.018-.553-.18q.036-2.035-.57-3.213t-1.608-1.214q-.966-.037-1.484.98t-.59 2.126q-.035.535.126 1.32t.464 1.34.554.483q.357-.11.57-.5.144-.323-.25-.287-.25 0-.552-.518t-.34-1.196q-.035-.787.322-1.323t1.214-.5q.607 0 .965.75t.338 1.393-.054.786q-.785.535-1.107 1.035-.286.43-.982.84t-.732.447q-.464.5-.554.964t.267.644q.5.286.893.697t.57.68.662.464 1.268.232q1.68.07 3.643-.536.07-.036.82-.25t1.233-.375T30-45.34t.75-.624q.32-.5.714-.286.18.107.232.304t-.107.428-.59.34q-.714.214-2.018.767t-1.625.696q-1.57.678-2.5.82-.893.18-2.82-.07-.358-.072-.323.07t.607.68q.894.82 2.394.785.607-.034 1.286-.25t1.286-.5 1.196-.624 1.072-.607.875-.43.624-.09.303.394q0 .072-.036.16t-.14.18-.216.16-.303.18-.32.16-.358.178-.34.16q-1 .5-2.41 1.572t-2.375 1.536-1.75.036q-.75-.393-2.25-2.607-.786-1.11-.893-.787-.035.107-.035.357 0 .893-.537 2.018T18.34-38.25t-.75 2.07.41 2.25q-.82.216-2.232 3.216T14.07-25.68q-.07.644-.052 2.466t-.197 2.107q-.284.857-1.034.107-1.143-1.107-1.286-3.357-.07-1 .143-2 .143-.68-.036-.643l-.143.18q-1.285 2.32.357 5.927.18.43.894 1t.857.714q.716.823 3.716 3.234t3.32 2.732q.573.535.626 1.357t-.5 1.536-1.625.82q.286.536 1.036 1.59t1 1.928.25 2.518q1.643-.857.25-3.286-.143-.286-.375-.57t-.34-.43-.07-.214q.106-.18.463-.34t.716.09q1.643 1.857 5.928 1.285 4.75-.534 6.322-3.106.82-1.357 1.214-1.07.43.213.357 1.856-.036.893-.82 3.286-.323.82-.216 1.34t.86.553q.106-.68.516-2.75t.483-3.216q.07-.75-.234-2.625t-.267-3.465.82-2.518q.536-.643 1.82-.643.037-1.32 1.234-1.893t2.59-.374 2.142.804zm-22.43-29.536q.108-.607-.088-1.07t-.41-.537q-.322-.07-.322.25.07.18.178.214.357 0 .25.537-.107.714.286.714.107 0 .107-.106zm14.965 7.036q-.07-.286-.23-.41t-.465-.18-.518-.196q-.178-.107-.34-.285t-.25-.287-.196-.232-.14-.142-.144.053q-.5.573.25 1.555t1.393 1.125q.32.036.516-.286t.125-.714zm-6.356-7.607q0-.393-.178-.697T30.393-52t-.322-.107q-.5.036-.25.25l.144.07q.5.144.643 1.108 0 .11.286-.07zm1.93-8.322q0-.07-.09-.177t-.322-.25-.34-.214q-.535-.537-.856-.537-.322.036-.41.268t-.037.465-.02.446q-.034.144-.213.376t-.214.322.107.303q.143.11.286 0t.393-.32.534-.32q.036-.037.322-.037t.535-.072.323-.25zM53.07-11.285q.716.43 1.11.875t.427.856-.09.804-.553.786-.84.696-1.07.66-1.125.59-1.144.554T48.82-5q-1.356.68-3.052 2T43.07-.714q-.606.57-2.427.696t-3.18-.518q-.642-.32-1.052-.84t-.59-.91-.784-.696-1.68-.34q-1.57-.035-4.642-.035-.678 0-2.035.053t-2.073.09q-1.57.035-2.84.535t-1.91 1.073T18.304-.59t-1.91.41q-1.037-.034-3.965-1.106T7.213-2.82q-.678-.144-1.82-.34t-1.787-.322-1.41-.34T1-4.338t-.607-.696q-.357-.82.25-2.375t.643-1.947q.035-.572-.143-1.43t-.357-1.517-.16-1.303T1-14.57q.5-.43 2.036-.5t2.143-.43q1.07-.643 1.5-1.25t.427-1.82q.75 2.606-1.143 3.784Q4.82-14.07 3-14.25q-1.214-.107-1.536.357-.464.536.18 2.036.07.214.285.643t.302.643.16.606.037.785q0 .537-.61 1.75t-.5 1.716q.11.607 1.323.928.714.215 3.018.66t3.554.733q.857.214 2.643.786t2.947.82 1.982.144q1.535-.214 2.303-1t.82-1.714-.267-2.09-.68-1.857-.713-1.303q-4.32-6.786-6.036-8.643-2.428-2.643-4.035-1.43-.394.323-.537-.534-.107-.572-.072-1.357.037-1.037.36-1.86t.856-1.677.785-1.5q.287-.75.948-2.572t1.053-2.784 1.073-2.18 1.393-1.927q3.928-5.11 4.428-6.966-.428-4-.57-11.07-.073-3.215.856-5.412t3.786-3.732Q23.93-64 26.25-64q1.893-.036 3.786.482t3.178 1.482q2.036 1.5 3.268 4.34t1.054 5.267q-.18 3.394 1.07 7.644 1.215 4.036 4.75 7.786 1.965 2.107 3.555 5.82t2.126 6.823q.285 1.75.178 3.018t-.428 1.983-.715.786q-.356.07-.838.677t-.964 1.268-1.447 1.196-2.177.5q-.643-.034-1.125-.177t-.804-.482-.482-.553-.41-.732-.322-.696q-.786-1.323-1.464-1.073t-1 1.75.25 3.464q.714 2.5.035 6.966-.356 2.32.644 3.59t2.607 1.178 3.037-1.268q2.107-1.75 3.197-2.375T50.5-6.856q1.893-.643 2.75-1.304t.66-1.233-.892-1.018-1.84-.84q-1.178-.393-1.767-1.714t-.535-2.59.554-1.696q.034 1.107.284 2.018t.518 1.446.732 1.018.75.68.768.463.59.34z","DRIBBBLE":"M36.57-10.43q-1.5-8.606-5-17.784h-.07l-.07.035q-.573.216-1.537.59t-3.607 1.75-4.893 2.93-4.68 4.09-3.677 5.284l-.536-.393q6.57 5.36 14.93 5.36 4.713 0 9.14-1.86zm-6.606-21.677q-.75-1.75-1.893-3.964-11.106 3.32-24.034 3.32Q4-32.5 4-32q0 4.43 1.57 8.446T10-16.357q1.786-3.18 4.41-5.947t5.09-4.446 4.66-2.893 3.554-1.714l1.322-.464q.143-.037.464-.126t.464-.16zm-3.82-7.572q-4.287-7.606-8.715-13.5-4.93 2.323-8.36 6.644T4.5-36.82q10.786 0 21.643-2.86zM50.57-28.285q-7.5-2.143-14.606-1.035 3.107 8.534 4.572 16.75 3.964-2.68 6.607-6.77t3.428-8.946zM21.82-54.75q-.034 0-.07.036.036-.036.07-.036zm21.073 5.18q-6.607-5.86-15.464-5.86-2.716 0-5.537.68 4.678 6.07 8.786 13.643 2.463-.93 4.64-2.16t3.448-2.197 2.34-2.036 1.338-1.446zm7.964 17.32q-.107-8.286-5.32-14.643l-.037.036q-.32.428-.68.875t-1.552 1.59-2.536 2.16-3.57 2.32-4.698 2.305q.893 1.893 1.572 3.393.07.214.232.625t.268.59q1.285-.18 2.66-.25t2.625-.07 2.466.052 2.285.143 2.02.196 1.714.234 1.303.214.893.16zm4 .25q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","SKYPE":"M41.893-26.036q0-1.785-.697-3.268t-1.732-2.446-2.607-1.75-2.946-1.214-3.124-.822l-3.715-.857q-1.07-.25-1.57-.375t-1.25-.41-1.07-.572-.59-.75-.27-1.07q0-2.75 5.144-2.75 1.536 0 2.75.427t1.93 1.018T33.5-39.68t1.43 1.037 1.713.43q1.678 0 2.696-1.144t1.017-2.75q0-1.964-2-3.554t-5.07-2.41-6.5-.823q-2.43 0-4.716.554t-4.266 1.68-3.18 3.106-1.195 4.59q0 2.178.677 3.803t2 2.696 2.857 1.732 3.68 1.16l5.213 1.286q3.214.786 4 1.286Q33-26.286 33-24.857q0 1.393-1.43 2.303t-3.75.91q-1.82 0-3.266-.57t-2.322-1.375-1.625-1.606-1.643-1.375-1.928-.573q-1.786 0-2.697 1.072t-.91 2.677q0 3.286 4.356 5.625t10.393 2.34q2.606 0 5-.66T37.553-18t3.16-3.34 1.18-4.696zm12.964 7.75q0 5.68-4.018 9.697t-9.697 4.02q-4.643 0-8.357-2.86-2.75.573-5.357.573-5.11 0-9.77-1.982t-8.035-5.356-5.357-8.036T2.286-32q0-2.607.57-5.357Q0-41.07 0-45.714q0-5.68 4.018-9.697t9.696-4.02q4.643 0 8.357 2.86 2.75-.573 5.36-.573 5.106 0 9.766 1.982t8.036 5.356 5.357 8.036T52.57-32q0 2.607-.57 5.357 2.857 3.714 2.857 8.357z","FOURSQUARE":"M35.714-48.5l1.322-6.93q.178-.82-.322-1.427t-1.25-.607H10.036q-.822 0-1.375.607t-.553 1.32v39.323q0 .25.214.035l10.394-12.57q.822-.93 1.357-1.196t1.716-.268h8.535q.787 0 1.323-.518t.643-1.054q.857-4.643 1.32-6.82.144-.75-.41-1.43t-1.303-.678h-10.5q-1.036 0-1.714-.68T19-43.106v-1.5q0-1.036.68-1.697t1.713-.66H33.75q.643 0 1.25-.482t.714-1.054zm8.107-7.93q-.534 2.61-1.91 9.52t-2.48 12.5-1.25 6.196q-.216.785-.323 1.16t-.5 1.16-.875 1.18-1.375.75-2.07.357h-9.68q-.464 0-.786.357-.284.32-15.213 17.643-.786.893-2.09 1.018t-1.73-.196Q1.57-5.57 1.57-8.286v-50.357q0-1.964 1.36-3.66T7.213-64H38.93q3.39 0 4.534 1.893t.357 5.678zm0 0l-5.64 28.216q.14-.607 1.25-6.197t2.48-12.5 1.91-9.52z","TRELLO":"M25.143-16v-36.57q0-.5-.322-.823t-.82-.32H6.857q-.5 0-.82.32t-.323.822V-16q0 .5.322.82t.82.323H24q.5 0 .82-.322t.323-.82zm24-13.714V-52.57q0-.5-.322-.823t-.82-.32H30.857q-.5 0-.82.32t-.323.822v22.856q0 .5.322.82t.82.323H48q.5 0 .82-.323t.323-.82zm5.714-27.43v50.287q0 .928-.678 1.607t-1.61.68H2.287q-.93 0-1.607-.68T0-6.857v-50.286q0-.928.68-1.607t1.606-.68H52.57q.93 0 1.61.68t.677 1.607z","FEMALE":"M45.714-26.286q0 1.43-1 2.43t-2.428 1q-1.822 0-2.857-1.537L31.32-36.57h-1.606v4.713l8.822 14.678q.32.537.32 1.18 0 .93-.677 1.607t-1.61.68h-6.856V-4q0 1.643-1.178 2.82T25.714 0H20q-1.643 0-2.82-1.18T16-4v-9.714H9.143q-.93 0-1.607-.68T6.856-16q0-.643.323-1.18L16-31.856v-4.714h-1.607L6.286-24.394Q5.25-22.857 3.43-22.857q-1.43 0-2.43-1t-1-2.43q0-1.034.57-1.892l9.144-13.713q2.607-3.82 6.286-3.82h13.714q3.68 0 6.286 3.82l9.143 13.714q.57.86.57 1.894zm-14.857-28.57q0 3.32-2.34 5.66t-5.66 2.34-5.66-2.34-2.34-5.66 2.34-5.662 5.66-2.34 5.66 2.34 2.34 5.66z","MALE":"M36.57-38.857V-24q0 1.43-1 2.43t-2.427 1-2.43-1-1-2.43v-12.57H27.43V-4q0 1.643-1.18 2.82T23.43 0t-2.823-1.18T19.43-4v-16.57h-2.287V-4q0 1.643-1.18 2.82T13.144 0 10.32-1.18 9.144-4v-32.57H6.857V-24q0 1.43-1 2.43t-2.428 1-2.43-1T0-24v-14.857q0-2.857 2-4.857t4.857-2h22.857q2.857 0 4.857 2t2 4.857zm-10.284-16q0 3.32-2.34 5.66t-5.66 2.34-5.66-2.34-2.34-5.66 2.34-5.66 5.66-2.34 5.66 2.34 2.34 5.66z","GRATIPAY":"M27.607-17.5l12.5-16.893q.572-.786.875-2.107t-.214-3.036-2.197-2.82q-1.427-.93-2.963-.912t-2.625.625-1.946 1.607q-1.286 1.43-3.43 1.43-2.106 0-3.392-1.43-.857-1-1.946-1.607t-2.625-.625-3 .91Q15-41.25 14.483-39.535t-.215 3.036.875 2.107zM54.857-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","SUN_O":"M52.57-32q0-4.18-1.624-7.982t-4.392-6.572-6.572-4.392T32-52.57t-7.982 1.624-6.572 4.392-4.392 6.572T11.43-32t1.624 7.982 4.392 6.572 6.572 4.392T32-11.43t7.982-1.624 6.572-4.392 4.392-6.572T52.57-32zm9.86 9.893q-.144.536-.716.714l-10.428 3.43v10.927q0 .572-.465.93-.534.356-1.034.142L39.356-9.32 32.93-.465Q32.57 0 32 0t-.93-.464L24.644-9.32l-10.43 3.356q-.5.214-1.034-.143-.466-.357-.466-.93v-10.927l-10.428-3.43q-.572-.177-.715-.713-.177-.607.144-1.036L8.144-32l-6.43-8.857q-.32-.464-.143-1.036.144-.536.716-.714l10.428-3.43v-10.927q0-.572.465-.93.534-.356 1.034-.142l10.43 3.357 6.427-8.856q.323-.428.93-.428t.93.428l6.427 8.857 10.43-3.356q.5-.214 1.034.143.466.357.466.93v10.927l10.428 3.43q.572.177.715.713.177.572-.144 1.036L55.856-32l6.43 8.857q.32.43.143 1.036z","MOON_O":"M45.07-17.464q-1.927.32-3.927.32-6.5 0-12.036-3.213t-8.75-8.75-3.214-12.036q0-6.857 3.714-12.75-7.178 2.143-11.732 8.18T4.57-32q0 4.643 1.823 8.875t4.875 7.286 7.286 4.876 8.875 1.82q5.14 0 9.766-2.195t7.875-6.124zm7.25-3.036q-3.356 7.25-10.124 11.59T27.43-4.57q-5.573 0-10.644-2.18t-8.75-5.857-5.857-8.75T0-32q0-5.464 2.054-10.446t5.57-8.625 8.412-5.876 10.357-2.447q1.57-.07 2.178 1.393.644 1.464-.534 2.57-3.072 2.787-4.697 6.484t-1.626 7.803q0 5.286 2.607 9.75t7.073 7.072 9.75 2.606q4.214 0 8.143-1.822 1.464-.643 2.57.465.5.5.626 1.213t-.16 1.357z","ARCHIVE":"M38.857-34.286q0-.928-.678-1.607t-1.61-.678h-9.14q-.93 0-1.61.677t-.677 1.607.678 1.607 1.61.68h9.14q.93 0 1.61-.68t.677-1.606zm20.572-6.857v34.286q0 .928-.68 1.607t-1.607.68H6.857q-.928 0-1.607-.68t-.68-1.607v-34.286q0-.928.68-1.607t1.607-.68h50.286q.928 0 1.607.68t.68 1.607zm2.284-16V-48q0 .93-.678 1.607t-1.607.68H4.57q-.927 0-1.606-.68T2.286-48v-9.143q0-.928.678-1.607t1.607-.68h54.86q.927 0 1.606.68t.678 1.607z","BUG":"M58.286-29.714q0 .928-.68 1.607T56-27.43h-8q0 6.11-2.393 10.36l7.43 7.463q.677.678.677 1.607t-.678 1.607q-.643.68-1.607.68t-1.61-.68l-7.07-7.036q-.18.18-.536.466t-1.5 1.018-2.32 1.303-2.93 1.036T32-9.143v-32h-4.57v32q-1.823 0-3.626-.482t-3.108-1.18-2.357-1.39-1.554-1.162l-.536-.5-6.536 7.393Q9-5.714 8-5.714q-.857 0-1.536-.572-.678-.643-.732-1.59t.554-1.66l7.214-8.107q-2.07-4.07-2.07-9.786h-8q-.93 0-1.61-.677t-.677-1.607.678-1.607T3.43-32h8v-10.5l-6.18-6.18q-.68-.677-.68-1.606t.68-1.607 1.607-.678 1.607.677l6.18 6.18h30.142l6.178-6.18q.68-.678 1.607-.678t1.61.677.677 1.607-.678 1.607L48-42.5V-32h8q.93 0 1.607.68t.68 1.606zM41.143-50.286H18.286q0-4.75 3.34-8.09t8.088-3.338 8.09 3.34 3.34 8.088z","VK":"M68.464-45.43q.822 2.287-5.357 10.5-.857 1.144-2.32 3.037Q58-28.32 57.57-27.213q-.606 1.463.5 2.892.61.75 2.894 2.927H61l.036.036.035.036.073.07q5.036 4.68 6.82 7.893.108.178.233.446t.25.946-.017 1.214-.894.982-2.107.447l-9.144.14q-.857.18-2-.177t-1.857-.786l-.716-.428q-1.07-.75-2.5-2.287t-2.446-2.768-2.18-2.07-2.017-.555q-.106.036-.284.125t-.607.518-.77 1.053-.606 1.858-.233 2.767q0 .537-.124.984t-.267.66l-.144.18q-.643.677-1.893.785h-4.107Q31-9.18 28.32-9.91t-4.695-1.894-3.68-2.357-2.516-2.054l-.894-.857q-.357-.36-.982-1.073T13-21.393t-3.786-5.393T4.84-34.32.18-44.037q-.216-.57-.216-.964t.107-.57l.144-.216q.536-.678 2.036-.678l9.786-.072q.428.072.82.232t.573.304l.177.107q.572.393.857 1.143.715 1.786 1.643 3.696t1.464 2.91l.573 1.037q1.036 2.143 2 3.714t1.732 2.447 1.482 1.375 1.214.5.966-.18q.07-.036.178-.18t.43-.784.48-1.68.34-2.892 0-4.464q-.07-1.43-.32-2.607t-.5-1.643l-.215-.43q-.894-1.213-3.037-1.534-.464-.072.178-.857.61-.68 1.36-1.073 1.89-.928 8.534-.857 2.93.036 4.822.464.714.18 1.196.482t.732.858.375 1.142.124 1.625-.035 1.966-.09 2.518-.054 2.946q0 .393-.036 1.5t-.018 1.714.125 1.447.41 1.394.804.875q.287.07.61.14t.927-.39 1.357-1.234 1.857-2.392 2.43-3.84q2.143-3.714 3.82-8.035.144-.36.36-.626t.39-.375l.144-.11.18-.088.463-.107.714-.018 10.287-.07q1.393-.18 2.286.088t1.107.59z","WEIBO":"M24.107-18.143q.75-1.214.393-2.464t-1.607-1.786q-1.214-.5-2.607-.036t-2.143 1.644q-.786 1.215-.464 2.447t1.534 1.804 2.66.09 2.233-1.697zm3.357-4.32q.286-.466.125-.948t-.626-.66q-.5-.18-1.018.016t-.767.66q-.61 1.108.463 1.608.5.18 1.036-.018t.784-.66zm6.215 3.82Q32.07-15 28.035-13.286t-8 .43q-3.822-1.215-5.268-4.52T15-24.07q1.68-3.323 5.41-4.966t7.52-.678q3.963 1.035 5.66 4.268t.09 6.803zm11.14-5.714q-.32-3.43-3.177-6.072t-7.447-3.89-9.803-.75q-7.964.82-13.197 5.052T6.464-20.57q.322 3.427 3.18 6.07t7.445 3.893 9.803.75q7.964-.822 13.196-5.054t4.73-9.447zm11 .143q0 2.428-1.32 4.982t-3.893 4.893-6.018 4.197-8.072 2.964-9.66 1.11-9.822-1.198-8.59-3.32-6.125-5.394T0-23.107q0-4.107 2.482-8.75t7.054-9.214q6.035-6.037 12.196-8.43t8.804.25q2.32 2.286.714 7.464-.143.5-.036.715t.357.25.52-.02.48-.124l.216-.072q4.964-2.107 8.785-2.107t5.466 2.18q1.607 2.25 0 6.356-.072.464-.16.714t.16.447.428.267.607.216q2.037.643 3.68 1.678t2.857 2.91 1.214 4.162zM53.18-46.5q1.5 1.68 1.945 3.875t-.232 4.196q-.286.823-1.054 1.216t-1.59.143q-.82-.287-1.214-1.055t-.143-1.59q.714-2.25-.857-3.964t-3.822-1.25q-.857.18-1.607-.284t-.893-1.322q-.178-.857.286-1.59t1.32-.91q2.144-.464 4.25.197t3.61 2.34zm6.463-5.82q3.107 3.427 4.018 7.945t-.48 8.625q-.323.964-1.216 1.43t-1.857.14-1.428-1.213-.18-1.857q1-2.93.357-6.143T56-49.036q-2.214-2.464-5.286-3.41t-6.178-.304q-1 .214-1.857-.34t-1.073-1.553.34-1.84 1.553-1.053q4.393-.928 8.714.41t7.43 4.805z","RENREN":"M40.464-7.93Q34.357-4.57 27.32-4.57q-7 0-13.106-3.36 4.93-3.106 8.41-7.534t4.697-9.572q1.25 5.143 4.734 9.572t8.41 7.535zm-17.678-51v17.323q0 9-4.518 16.41T6.464-14.25Q0-21.93 0-31.93q0-6.677 2.982-12.48t8.197-9.626 11.606-4.893zm32.07 27q0 10-6.463 17.68-7.286-3.536-11.804-10.946t-4.52-16.41V-58.93q6.394 1.073 11.61 4.894t8.195 9.625 2.982 12.48z","PAGELINES":"M50.07-24.607q-1.14 2.857-2.713 4.928t-3.25 3.162-3.536 1.66-3.624.52-3.446-.305-3.09-.786-2.48-.98-1.644-.804l-.607-.357Q21.642-9.43 15.34-4.733T1.606 0Q.93 0 .464-.464T0-1.607t.464-1.125 1.143-.447q6.18-.034 11.518-3.838t8.982-10.518q-1.286.5-2.57.822t-2.966.464-3.25-.09T10-17.356t-3.286-2.107-3.018-3.572-2.66-5.214q4.07-1.68 7.643-2.036t5.98.268T19.108-28t3.16 2.75 2.02 2.93q1.892-4.68 2.82-10.394-.25.035-.643.09t-1.66.088-2.483-.018-2.91-.357-3.16-.822-3-1.518-2.68-2.32-1.945-3.376T7.607-45.5q2.5-1 4.768-1.304t4.018.036 3.286 1.072 2.624 1.785 2 2.178 1.5 2.25.982 2 .57 1.41l.144.572q.43-4.357.43-6.964-.287-.215-.77-.572t-1.75-1.59-2.267-2.553-1.93-3.32-1.177-4.018.428-4.536 2.5-4.946q2.607.893 4.554 2.196t3.018 2.733 1.714 3.034.732 3.18-.018 3.052-.464 2.733-.68 2.213-.606 1.5l-.25.536q.036.177.036 1.802t-.036 2.554q.107-.25.357-.66t1.09-1.537 1.804-2.072 2.536-1.982 3.268-1.59 4-.517 4.732.856q-.07 2.785-.768 5.053t-1.786 3.73-2.482 2.555T40.804-33t-3.018.857-2.857.34-2.412-.036-1.66-.16l-.608-.107q-.82 5.25-2.607 10.107.214-.25.643-.66t1.768-1.465T32.82-26t3.555-1.5 4.196-.714 4.61.84 4.89 2.767z","STACK_EXCHANGE":"M44.964-19.25v2.357q0 3.036-2.053 5.16t-4.946 2.126H35.93L26.642 0v-9.607H7.75q-2.893 0-4.946-2.125T.75-16.892v-2.358h44.214zm0-11.643v9.107H.75v-9.107h44.214zm0-11.714v9.107H.75v-9.107h44.214zm0-5v2.393H.75v-2.393q0-3 2.054-5.125t4.946-2.125h30.214q2.893 0 4.947 2.125t2.054 5.125z","ARROW_CIRCLE_O_RIGHT":"M41.143-32q0 .5-.322.82L29.394-19.75q-.322.32-.822.32-.463 0-.802-.338t-.34-.803v-6.86H14.86q-.465 0-.804-.338t-.34-.803v-6.86q0-.463.34-.802t.803-.34H27.43v-6.857q0-.5.32-.82t.82-.32q.43 0 .86.356L40.82-32.82q.323.32.323.82zm5.714 0q0-5.286-2.607-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","ARROW_CIRCLE_O_LEFT":"M41.143-35.43v6.86q0 .463-.34.802t-.803.34H27.43v6.857q0 .5-.323.82t-.82.32q-.43 0-.858-.356L14.035-31.18q-.322-.32-.322-.82t.322-.82l11.428-11.43q.322-.32.822-.32.464 0 .803.338t.34.803v6.86H40q.464 0 .804.338t.34.803zM46.857-32q0-5.286-2.607-9.75t-7.07-7.07-9.75-2.61-9.75 2.61-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32zm8 0q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","TOGGLE_LEFT":"M36.57-43.43v22.86q0 .927-.677 1.606t-1.607.678q-.715 0-1.322-.428l-16-11.43Q16-30.82 16-32t.964-1.857l16-11.43q.607-.427 1.322-.427.928 0 1.607.678t.678 1.607zm9.144 28.573v-34.286q0-.464-.34-.803t-.803-.34H10.287q-.465 0-.804.34t-.34.803v34.286q0 .464.34.803t.804.34H44.57q.466 0 .805-.34t.34-.803zm9.143-34.286v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","DOT_CIRCLE_O":"M36.57-32q0 3.786-2.677 6.464t-6.464 2.68-6.466-2.68T18.286-32t2.678-6.464 6.465-2.68 6.463 2.68T36.57-32zm-9.14-19.43q-5.287 0-9.75 2.61t-7.073 7.07T8-32t2.607 9.75 7.072 7.07 9.75 2.61 9.75-2.61 7.07-7.07T46.857-32t-2.607-9.75-7.07-7.07-9.75-2.61zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","WHEELCHAIR":"M36.536-21.607l3.643 7.286q-2.073 6.39-7.5 10.356T20.57 0Q15 0 10.27-2.768t-7.5-7.5T0-20.57q0-6.466 3.732-11.787t9.804-7.536l.607 4.68q-4.357 1.927-6.964 5.91t-2.61 8.732q0 6.606 4.698 11.302T20.57-4.57q4.5 0 8.305-2.323t5.893-6.268 1.768-8.447zm19.57 3.57l2.073 4.073-9.144 4.57q-.465.25-1.036.25-1.43 0-2.036-1.25L37.43-27.428H20.57q-.856 0-1.516-.588t-.768-1.446l-3.43-27.822q-.07-.57.215-1.5.5-1.82 2.037-2.946t3.464-1.125q2.36 0 4.037 1.678t1.68 4.037q0 2.464-1.858 4.197t-4.287 1.482l1.32 10.32h15.108v4.573H22.037l.57 4.57h16.25q1.43 0 2.037 1.25l8.143 16.25z","VIMEO_SQUARE":"M46.143-41.214q.357-7.715-5.75-7.93-8.25-.285-11.143 9.323 1.57-.68 2.93-.68 3.034 0 2.64 3.43-.14 2.034-2.64 5.963t-3.75 3.928q-1.537 0-2.93-6.034-.464-1.93-1.607-9.107-1.072-6.75-5.714-6.323-2.11.25-5.86 3.572L9.43-42.5l-2.894 2.57 1.857 2.394q2.714-1.857 3.107-1.857 2.036 0 3.82 6.393.537 1.964 1.61 5.875t1.606 5.875q2.428 6.393 5.857 6.393 5.607 0 13.678-10.5 7.86-10.107 8.073-15.857zm8.714-7.93v34.287q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TURKISH_LIRA":"M41.143-34.286q0 6.822-3.375 12.607t-9.16 9.162T16-9.143h-5.714q-.5 0-.822-.32t-.32-.823v-21.82l-7.68 2.356q-.107.036-.32.036-.358 0-.68-.215Q0-30.285 0-30.856v-4.572q0-.82.82-1.106l8.323-2.535v-3.323l-7.68 2.357q-.106.036-.32.036-.357 0-.68-.214Q0-40.57 0-41.144v-4.57q0-.822.82-1.107l8.323-2.537v-8.93q0-.5.32-.82t.823-.322H16q.5 0 .82.323t.323.82v6.466l13.393-4.144q.535-.18 1 .178t.464.93v4.57q0 .822-.82 1.107l-14.037 4.323v3.32l13.393-4.142q.535-.177 1 .18t.464.93V-40q0 .82-.82 1.107L17.142-34.57v17.39q6.714-.463 11.357-5.39t4.643-11.716q0-.5.32-.82t.823-.323H40q.5 0 .82.323t.323.82z","PLUS_SQUARE_O":"M41.143-35.43v2.287q0 .5-.322.822T40-32H27.43v12.57q0 .5-.323.823t-.82.32H24q-.5 0-.82-.32t-.323-.822V-32h-12.57q-.5 0-.823-.32t-.32-.823v-2.286q0-.5.32-.82t.822-.32h12.57v-12.573q0-.5.323-.82t.82-.323h2.286q.5 0 .82.322t.323.82v12.573H40q.5 0 .82.32t.323.82zm4.57 16v-29.713q0-2.357-1.677-4.036T40-54.856H10.286q-2.357 0-4.036 1.678t-1.68 4.037v29.714q0 2.36 1.68 4.037t4.036 1.68H40q2.357 0 4.036-1.68t1.678-4.036zm4.573-29.713v29.714q0 4.25-3.018 7.27T40-9.144H10.286q-4.25 0-7.268-3.018T0-19.43v-29.713q0-4.25 3.018-7.268t7.268-3.02H40q4.25 0 7.268 3.02t3.018 7.267z","SPACE_SHUTTLE":"M22.143-24q-3.93 2.286-9.572 2.286H8V-24H5.714q-.464 0-.803-.84t-.34-2.017q0-.857.25-1.75-2.07-.072-3.445-.375T0-29.714t1.375-.732 3.446-.375q-.25-.894-.25-1.75 0-1.18.34-2.02t.804-.84H8v-2.284h4.57q5.644 0 9.573 2.285h39.75q1.5.25 3.803.644t2.875.5q3.18.536 5.36 1.447t2.98 1.697.804 1.43-.803 1.427-2.98 1.697-5.36 1.447q-.57.107-2.874.5T61.893-24h-39.75zm39.964-9Q64-31.714 64-29.714t-1.893 3.285L65-25.356q2.43-1.714 2.43-4.357T65-34.07zM22.32-23.43h36.25q-7.75 1.36-16.284 2.86-2.036 0-4.036.856T35.286-18l-1 .857L24-6.857q-.93.928-2.518 1.607t-3.196.68h-3.43l-3.32-16.573h1.035q5.61 0 9.75-2.286zm-9.75-14.856h-1.034l3.32-16.57h3.43q1.643 0 3.214.677t2.5 1.61l10.286 10.284q.143.143.393.375t1.088.82 1.732 1.036 2.196.822 2.59.375L58.57-36H22.32q-4.14-2.286-9.75-2.286z","SLACK":"M54.25-36.286q2.214 0 3.696 1.447t1.483 3.626q0 3.464-3.323 4.643l-6.143 2.106 2 5.964q.25.75.25 1.68 0 2.106-1.5 3.64t-3.607 1.537q-1.678 0-3.053-.964t-1.91-2.572l-1.965-5.89-11.073 3.784 1.964 5.857q.287.86.287 1.68 0 2.107-1.5 3.643T26.214-4.57q-1.678 0-3.035-.966t-1.894-2.57L19.32-13.93l-5.463 1.894q-1.036.322-1.786.322-2.177 0-3.624-1.43T7-16.75q0-1.68.982-3.036t2.554-1.893l5.57-1.89-3.75-11.18-5.57 1.93q-.93.284-1.715.284-2.14 0-3.606-1.446T0-37.572q0-1.678.982-3.035T3.536-42.5l5.607-1.893L7.25-50.07q-.286-.86-.286-1.68 0-2.143 1.5-3.66t3.643-1.52q1.68 0 3.036.966t1.893 2.57l1.928 5.715 11.072-3.75-1.93-5.713q-.285-.857-.285-1.678 0-2.11 1.52-3.644T32.963-64q1.68 0 3.054.982t1.91 2.554l1.893 5.75 5.787-1.965q.75-.213 1.536-.213 2.143 0 3.66 1.41t1.518 3.52q0 1.606-1.07 2.91t-2.643 1.84L43-45.287 46.75-34l5.857-2q.857-.286 1.643-.286zM25.893-26.93l11.07-3.75-3.75-11.25-11.07 3.823z","ENVELOPE_SQUARE":"M44.57-59.43q4.25 0 7.27 3.02t3.017 7.267v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57zm1.144 37.716v-15.572q-1.107 1.25-2.285 1.965-1.216.784-4.734 3.034t-5.41 3.536q-3.5 2.464-5.857 2.464-2.36 0-5.86-2.464-1.64-1.143-5.052-3.304t-5.09-3.303q-.428-.286-1.178-.964t-1.107-.966v15.572q0 1.428 1 2.428t2.428 1h29.716q1.428 0 2.428-1t1-2.428zm0-20.465q0-1.463-.982-2.5t-2.446-1.034H12.57q-1.427 0-2.427 1t-1 2.428q0 1.322 1.09 2.732t2.41 2.304q1.678 1.143 4.91 3.18t4.626 2.963q.106.07.606.41t.75.5.75.465.84.464.767.34.803.267.733.09.73-.09.804-.27.768-.338.84-.464.75-.464.75-.5.607-.41l9.534-6.215q1.25-.823 2.375-2.234t1.124-2.625z","WORDPRESS":"M4.536-32q0-5.82 2.393-11.18L20.035-7.285q-7-3.393-11.25-10.035T4.536-32zm46-1.393q0 .68-.09 1.375t-.357 1.768-.41 1.57-.626 2.11-.625 2.07l-2.716 9.143-9.928-29.5q1.643-.107 3.143-.286.677-.07.927-.66t-.09-1.108-1.017-.483l-7.32.357q-2.68-.035-7.216-.357-.428-.036-.732.18t-.41.534-.054.662.32.59.698.285l2.857.286 4.286 11.714-6 18-10-29.714q1.64-.107 3.14-.286.68-.07.93-.66t-.09-1.108-1.017-.483l-7.322.357q-.25 0-.82-.018t-.93-.017q3.75-5.716 9.805-9.055T32-59.465q5.25 0 10.018 1.894t8.518 5.32h-.357q-1.966 0-3.287 1.446t-1.322 3.41q0 .43.073.858t.143.768.285.822.323.75.428.803.448.75.518.857.5.822q2.25 3.82 2.25 7.57zm-18.072 3.786L40.93-6.5q.034.214.177.393-4.5 1.57-9.107 1.57-4 0-7.75-1.142zM56.07-45.18q3.394 6.216 3.394 13.18 0 7.464-3.714 13.768t-9.964 9.946L54.18-32.5q2.106-6.036 2.106-9.857 0-1.5-.215-2.822zM32-64q6.5 0 12.43 2.536t10.213 6.82 6.82 10.215T64-32t-2.536 12.43-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64zm0 62.536q6.18 0 11.84-2.43t9.75-6.517 6.517-9.75T62.537-32t-2.43-11.84-6.518-9.75-9.75-6.517T32-62.537t-11.84 2.43-9.75 6.518-6.517 9.75T1.463-32t2.43 11.84 6.518 9.75 9.75 6.517T32-1.463z","OPENID":"M38.786-64v54.857L29.07-4.57q-8.14-.716-14.784-3.644T3.82-15.66 0-25.394q0-5 3.59-9.41t9.82-7.34T27.394-46v6.143Q19.643-38.5 14.66-34.5t-4.98 9.107q0 5.43 5.516 9.536T29.07-10.68v-48.57zM62.68-43.214L64-29.286l-18.75-4.07 5.25-2.965q-4.25-2.5-10-3.537V-46q9.893 1.18 17.18 5.607z","UNIVERSITY":"M34.286-64L68.57-50.286v4.572H64q0 .928-.732 1.607t-1.732.678h-54.5q-1 0-1.732-.677t-.733-1.607H0v-4.572zM9.143-41.143h9.143v27.43h4.57v-27.43H32v27.43h4.57v-27.43h9.144v27.43h4.572v-27.43h9.143v27.43h2.106q1 0 1.732.677T64-11.43v2.287H4.57v-2.286q0-.927.734-1.606t1.732-.678h2.107v-27.43zM66.107-6.857q1 0 1.732.678t.73 1.61V0H0v-4.57q0-.93.732-1.61t1.732-.677h63.643z","MORTAR_BOARD":"M63.357-34.143L64-22.857q.143 2.464-2.93 4.57t-8.39 3.34-11.537 1.233-11.536-1.232-8.393-3.34-2.928-4.57l.643-11.287 20.5 6.464q.784.25 1.713.25t1.714-.25zm18.93-11.57q0 .82-.787 1.106l-40 12.57q-.143.037-.357.037t-.357-.036L17.5-39.393q-1.536 1.214-2.536 3.982t-1.214 6.374Q16-27.75 16-25.143q0 2.464-2.07 3.822L16-5.858q.07.5-.286.893-.32.393-.857.393H8q-.536 0-.857-.394-.357-.393-.286-.893L8.93-21.32q-2.073-1.36-2.073-3.823 0-2.607 2.322-3.964.39-7.393 3.5-11.786L.785-44.607Q0-44.893 0-45.714t.786-1.107l40-12.573q.143-.036.357-.036t.357.037l40 12.572q.786.284.786 1.106z","YAHOO":"M30.68-29.82l.463 25.25q-2.214-.394-3.75-.394-1.464 0-3.75.393l.464-25.25q-1.428-2.466-6.018-10.555T10.356-53.75 3.893-64q2.07.536 3.857.536 1.536 0 3.964-.536 2.25 3.964 4.768 8.196t5.964 9.875 4.947 8.11q1.32-2.18 3.91-6.34t4.197-6.786 3.75-6.286T43.07-64q1.93.5 3.823.5 2 0 4.07-.5-1 1.393-2.142 3.16t-1.766 2.804-2.018 3.43-1.75 3Q38.07-42.75 30.68-29.822z","GOOGLE":"M35.036-16.18q0-.89-.25-1.75t-.518-1.5-.964-1.48-1.054-1.25-1.375-1.233-1.304-1.036-1.48-1.07-1.304-.93q-.572-.07-1.75-.07-1.893 0-3.732.25t-3.822.893-3.464 1.643-2.447 2.66-.963 3.768q0 2 .84 3.643t2.178 2.697 3.107 1.785 3.572 1.035 3.625.304q2.07 0 3.98-.466t3.536-1.393 2.608-2.606.982-3.893zm-4.18-30.64q0-2.11-.606-4.484t-1.714-4.607-3-3.697-4.18-1.464q-1.5 0-2.945.695T16.037-58.5q-1.643 2.107-1.643 5.714 0 1.643.357 3.482t1.125 3.68 1.857 3.303 2.68 2.39 3.445.93q1.322 0 2.768-.59t2.34-1.553q1.892-2 1.892-5.678zm-4-17.18H41.75l-4.893 3.143h-4.714q2.678 2.25 4.036 4.75t1.356 5.714q0 2.572-.875 4.625t-2.124 3.322-2.482 2.32-2.108 2.197-.875 2.36q0 1.284 1.144 2.516t2.75 2.43T36.196-28t2.768 3.714 1.143 5.072q0 3.25-1.75 6.178-2.536 4.357-7.482 6.41T20.215-4.57q-4.715 0-8.804-1.484t-6.16-4.91q-1.286-2.107-1.286-4.68 0-2.892 1.59-5.356t4.232-4.107q4.678-2.93 14.428-3.572-1.143-1.463-1.696-2.624t-.554-2.625q0-1.427.75-3.034-1.643.143-2.428.143-5.286 0-8.91-3.448T7.75-49q0-2.93 1.286-5.68t3.535-4.677q2.716-2.357 6.5-3.5T26.858-64z","REDDIT":"M39.107-22.32q.572.57 0 1.106Q36.893-19 32-19t-7.107-2.214q-.572-.536 0-1.107.214-.216.536-.216t.534.215Q27.68-20.57 32-20.57q4.286 0 6.036-1.75.214-.216.535-.216t.537.215zm-10.964-6.466q0 1.322-.93 2.25t-2.25.93-2.267-.93-.946-2.25q0-1.357.946-2.285t2.268-.93 2.25.946.93 2.268zm14.107 0q0 1.322-.946 2.25t-2.268.93-2.25-.93-.93-2.25.93-2.268 2.25-.946 2.268.93.946 2.284zm8.964-4.285q0-1.75-1.25-3t-3.035-1.25-3.073 1.284q-4.643-3.214-11.107-3.428L35-49.57l7.143 1.606q0 1.32.928 2.25t2.25.928 2.27-.946.946-2.268-.947-2.268-2.27-.946q-1.927 0-2.856 1.785l-7.893-1.75q-.677-.177-.89.573l-2.466 11.143q-6.428.25-11.035 3.464-1.25-1.32-3.11-1.32-1.784 0-3.034 1.25t-1.25 3q0 1.25.66 2.284t1.768 1.572q-.214.964-.214 2 0 5.07 5 8.678t12.036 3.607q7.07 0 12.07-3.606t5-8.678q0-1.143-.25-2.036 1.073-.536 1.715-1.554t.644-2.267zM64-32q0 6.5-2.536 12.43t-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64t12.43 2.536 10.213 6.82 6.82 10.215T64-32z","REDDIT_SQUARE":"M33.536-23.68q.464.466 0 .93-1.893 1.893-6.107 1.893t-6.11-1.893q-.463-.464 0-.93.18-.213.466-.213t.464.214q1.5 1.5 5.18 1.5t5.177-1.5q.18-.213.464-.213t.466.214zm-9.393-5.57q0 1.107-.822 1.93t-1.927.82-1.93-.82-.82-1.93q0-1.143.803-1.946T21.393-32t1.946.804.803 1.946zm12.07 0q0 1.107-.82 1.93t-1.93.82-1.927-.82-.822-1.93q0-1.143.804-1.946T33.464-32t1.947.804.804 1.946zm7.68-3.68q0-1.5-1.072-2.57t-2.606-1.07q-1.5 0-2.607 1.106-4.036-2.786-9.536-2.93L30-47.07l6.107 1.39q.036 1.144.84 1.93t1.91.786q1.143 0 1.947-.804t.803-1.946-.803-1.947-1.947-.804q-1.714 0-2.464 1.535l-6.75-1.5q-.607-.177-.75.466l-2.143 9.57q-5.5.215-9.464 2.965-1.072-1.14-2.643-1.14-1.536 0-2.607 1.07t-1.072 2.57q0 1.073.572 1.966t1.5 1.357q-.18.893-.18 1.714 0 4.357 4.287 7.447t10.32 3.09q6.073 0 10.358-3.09t4.287-7.447q0-.893-.214-1.75.893-.464 1.446-1.34t.553-1.946zm10.964-16.213v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","STUMBLEUPON_CIRCLE":"M30.93-34.036L34.142-35v-2.214q0-2.822-2.072-4.822t-4.927-2-4.93 1.982-2.07 4.804v10.107q0 .714-.5 1.197t-1.18.482-1.16-.482-.482-1.197v-4.286h-5.39v4.36q0 2.927 2.052 4.963t4.982 2.036q2.893 0 4.947-2.02t2.054-4.874v-10q0-.68.482-1.18t1.197-.5q.678 0 1.16.5t.483 1.18v1.928zm11.89 6.965v-4.36h-5.356v4.5q0 .716-.482 1.198t-1.196.482q-.68 0-1.16-.5t-.483-1.18v-4.39l-3.214.927-2.144-1V-27q0 2.857 2.07 4.893t4.965 2.036 4.948-2.037 2.053-4.964zM54.858-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","STUMBLEUPON":"M37.93-38.57v-4.216q0-1.5-1.073-2.57t-2.57-1.073-2.573 1.073-1.07 2.57v21.858q0 6.25-4.5 10.68T15.32-5.82q-6.356 0-10.838-4.484T0-21.144v-9.5h11.714v9.358q0 1.536 1.072 2.59t2.57 1.053 2.573-1.053 1.07-2.59V-43.43q0-6.106 4.518-10.427t10.768-4.322q6.285 0 10.785 4.36t4.5 10.5v4.856l-6.963 2.07zm18.927 7.927H68.57v9.5q0 6.357-4.48 10.84T53.25-5.822q-6.32 0-10.82-4.448T37.93-21v-9.57l4.677 2.177 6.964-2.07v9.642q0 1.5 1.073 2.552t2.57 1.054 2.573-1.054 1.07-2.553v-9.823z","DELICIOUS":"M52.57-14.857V-32H27.43v-25.143H10.285q-3.322 0-5.66 2.34t-2.34 5.66V-32H27.43v25.143h17.14q3.323 0 5.662-2.34t2.34-5.66zm2.287-34.286v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","DIGG":"M11.714-53.93H19v35.11H0v-24.894h11.714V-53.93zm0 29.25v-13.177H7.32v13.178h4.394zM21.93-43.713v24.893h7.32v-24.894h-7.32zm0-10.215v7.287h7.32v-7.286h-7.32zm10.25 10.216h19.034v33.643H32.18v-5.823h11.713v-2.928H32.18v-24.894zM43.892-24.68v-13.177H39.5v13.178h4.393zm10.25-19.034h19v33.643h-19v-5.823H65.82v-2.928H54.144v-24.894zM65.82-24.68v-13.177h-4.39v13.178h4.39z","PIED_PIPER":"M37.357-27.57q0 2.284-1.357 3.89t-3.25 1.61q-1.536 0-2.5-.537V-32.5q1-.607 2.5-.607 1.893 0 3.25 1.625t1.357 3.91zm-12.25-15.287q0 2.286-1.357 3.91T20.5-37.32q-1.536 0-2.5-.537v-9.893q1-.607 2.5-.607 1.893 0 3.25 1.607t1.357 3.893zM45.18-27.464q0-4.786-3.144-8.18t-7.607-3.392q-.716 0-1.394.107-.822 2.787-2.786 4.86-3.107 3.39-7.536 3.606V-7.75l7.536-1.464v-7.357q1.82.677 4.18.677 4.463 0 7.606-3.393t3.143-8.178zm-12.25-15.25q0-4.786-3.162-8.18t-7.625-3.392q-2.643 0-5.036 1.286h-6.643v30L18-24.464v-7.357q1.964.677 4.143.677 4.464 0 7.625-3.393t3.16-8.178zm21.927-6.43v34.287q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","PIED_PIPER_ALT":"M43.643-30.82q2.678-.11 5.125.73T52.982-28t3.607 3.375 3 3.857 2.696 4.304q1.178 2 2.803 3.893t2.696 2.874 3.535 3.16q-1.713 1.072-3.874 2.054T62.5-2.375 58.43-.68Q56.856-2 55.785-4.785t-1.554-5.875-1.178-6.447-1.518-6.018-2.59-4.393-4.375-1.732l-.356.07-.214.144q.143.18.464.5.215.18 1 .84t.91.785.68.642.642.732.41.75.376.982.16 1.108.144 1.446l.035 1.18q.037.927-.088 2.052t-.268 1.857-.446 2.09-.41 1.89q-1.25-.034-3.608.34t-3.5.376q-1.393 0-2.57-.357-.073-.573-.073-1.68 0-2.643.107-3.43.072-.463 1.125-1.48t2.035-2.108.946-1.84q-.856-.07-1.534.858-1.286 1.893-3.982 3.554t-4.875 1.66q-.894 0-2.698-2.25t-3.803-4.982-3-3.446q-.216-.143-.966-1.072-17.214 4-18.32 4-.573 0-1-.393t-.43-.963q0-.536.304-.946t.803-.517l17.36-3.786q-.287-.5-.287-.893t.196-.625.57-.41.715-.25.82-.162.662-.16q.143-.037.554-.27t.626-.23q.535 0 1 .57t.714 1.18q5.82-1.322 6.143-1.322.607 0 1.053.393t.447 1q0 .534-.304.927t-.84.5l-6.5 1.43-.036.57q-.035.93 2.91 4.197t3.733 3.267q1.68 0 4.25-2.856t2.572-4.607q0-1.286-.84-1.893t-1.822-.66-1.822-.41-.84-1.215q0-.573.358-1.216l-2.428-.678q1.535-1.572 1.535-4.18 0-.927-.177-2.07 2.928-.572 5.143-.572 1.57 0 2.553.054t1.73.303 1.11.484.73.875.554 1.195.607 1.696.86 2.144l1.784-.893q-.107 1.43-.82 2.144t-1.52.75-1.428.232-.59.733zm2.143-8.394q-.18-.18-.482-.554t-.43-.518-.374-.41-.357-.375l-.286-.287-.303-.268-.286-.18-.304-.16q-.25-.106-.518-.178t-.732-.09-.785-.017h-2.502q-4.5 0-7.75 1.536.572-1.072 1.286-1.66t1.93-1.055 2.338-1.284 1.643-1.304 1.786-1.964 1.554-1.804q.43.322 1 1.125t1.143 1.303 1.357.464l.43-.036v2.716l.785.035q8.82-3.39 13.25-6.784 1-.75 1.784-1.393t1.518-1.34 1.18-1.107 1.052-1.214.857-1.107.876-1.32.822-1.36.964-1.695 1.054-1.893l.25-.32Q69.464-61.822 68-58.75q-2.82 5.893-7.32 9.43t-10.93 5.07q-.5.107-1.5.268t-1.786.34-1.393.5q.11.678.876 1.642t.768 1.214q0 .393-.928 1.072zM37.893-6.32q1.393-.93 4.696-1.698t5.23-.768q.323 0 .805.554t1 1.518.93 1.785.856 1.823.52 1.178Q47.606-.32 43.213-.32q-2.178 0-4.464-.394zm-8.536-23.11l1.714-.427 3.894 6.32-2.607 1.716zM47.25-10.963q.107.535.107.57 0 .25-.625.52t-1.643.463-1.93.34-1.91.266-1.143.16l-.25-1.535q.75-.07 2.16-.302t2.572-.357 2.16-.124h.5zm-16.32-22.43l-3.43.715-.214-.606q.357-.035 1.16-.25t1.233-.214q.677 0 1.25.357zm6.963 22.644H39l.357 2.964-1.464.43v-3.394zm31.75-53.214V-64v.036zm0 0l-.036.178-.07.072.034-.107zm0 0L69.68-64z","DRUPAL":"M41.68-7.357q-.18-.68-.86-.18-1.07.787-3.106 1.394t-4.678.607q-4.607 0-6.893-1.75-.18-.143-.464-.143-.394 0-.93.43-.25.214-.268.57t.268.716q1.214 1.143 3.125 1.643t3.66.445 3.536-.16q1.466-.144 3.02-.733t2.32-1.07 1.02-.733q.427-.43.25-1.037zm-1.394-4.107q-.68-1.68-1.393-2.18-.822-.535-2.714-.535-1.68 0-2.537.36-1.036.427-2.786 2-.928.856-.428 1.57.32.286.624.16t1.125-.84q.106-.07.374-.302t.375-.304.356-.25.41-.25.447-.178.536-.16.588-.09T36-12.5q.964 0 1.59.268t.82.518.483.785q.357.61.446.716t.446-.036q.82-.43.5-1.214zM52.964-21.5q0-.786-.178-1.59t-.59-1.606T50.982-26t-1.875-.5q-1.178 0-3.464 1.482t-4.607 2.982-3.607 1.5q-.966.036-2.27-.678t-2.714-1.75-2.982-2.072-3.57-1.75-3.965-.678q-4.11.035-7.037 2.803t-3 6.374q-.072 4 2.643 5.857 1.035.716 2.232 1.02t3.696.303q2.036 0 4.715-1.16t4.784-2.537 4.286-2.517 3.32-1.11q.93.037 2.323 1.126t2.553 2.393 2.43 2.41 1.98 1.143q1.25.107 2.09-.5t1.983-2.25q1-1.464 1.516-3.607t.518-3.786zm1.893-5.714q0 5.857-2.214 10.875t-5.93 8.43-8.66 5.34T27.68-.644 17.213-2.696t-8.84-5.608-6.088-8.625T0-27.713q0-3.18.696-6.16t1.75-5.197 2.518-4.234 2.804-3.357 2.803-2.483 2.305-1.66 1.518-.876q.5-.284 1.82-.945t1.948-1.018 1.715-1.07 2.16-1.573q1.286-1 2.072-2.59t1.072-4.48q4.606 5.535 6.64 6.892 1.573 1.035 4.644 2.428t4.607 2.357q.75.466 1.394.894t2.16 1.66 2.715 2.52 2.678 3.392 2.464 4.357 1.68 5.303.695 6.34z","JOOMLA":"M38.214-25.68L32.5-19.963l-5.393 5.428-1.07 1.072q-2.323 2.285-5.412 3.107t-6.125.07q-.57 2.5-2.57 4.108T7.32-4.57q-3.034 0-5.177-2.162T0-11.93q0-2.57 1.59-4.57t4.053-2.57q-.786-3.073.036-6.18t3.14-5.43l.43-.427 5.393 5.428-.393.394q-1.32 1.322-1.32 3.18t1.32 3.213q1.32 1.322 3.18 1.322t3.177-1.323l1.072-1.07 5.39-5.43 5.75-5.714zM26.036-50.035l.428.43-5.428 5.427-.43-.427q-1.32-1.322-3.177-1.322t-3.18 1.323-1.32 3.196 1.32 3.196l1.036 1.035 5.428 5.43 5.715 5.714-5.394 5.43-5.75-5.715-5.393-5.43-1.072-1.07q-2.427-2.394-3.213-5.698t.18-6.41q-2.5-.536-4.108-2.536T.07-52.07q0-3.037 2.144-5.198t5.18-2.16q2.713 0 4.767 1.75t2.483 4.392q3-.714 6.053.125t5.34 3.124zm28.82 38.107q0 3.037-2.142 5.198t-5.178 2.16q-2.643 0-4.68-1.678t-2.535-4.214q-3.07 1-6.41.214t-5.767-3.214l-.393-.43 5.393-5.427.428.427q1.323 1.322 3.18 1.322t3.18-1.323 1.32-3.178-1.32-3.18l-1.073-1.07-5.428-5.43-5.716-5.714 5.43-5.43 5.713 5.715 5.43 5.43 1.034 1.07q2.287 2.287 3.126 5.376t.09 6.125q2.714.394 4.518 2.448t1.803 4.803zm-.07-40.14q0 2.75-1.822 4.82t-4.535 2.464q.927 3.036.106 6.304t-3.215 5.66l-.427.43-5.393-5.43.43-.428q1.32-1.32 1.32-3.18t-1.32-3.177-3.18-1.322-3.18 1.323l-1.07 1.07-5.43 5.43-5.713 5.714-5.428-5.428 5.75-5.716 5.427-5.428 1.036-1.072q2.393-2.393 5.678-3.196t6.36.125q.39-2.68 2.445-4.5t4.84-1.822q3.035 0 5.178 2.162t2.143 5.197z","LANGUAGE":"M23.357-25.5q-.036.107-.446-.018t-1.124-.41l-.715-.322q-1.57-.714-3.106-1.75-.25-.18-1.464-1.125t-1.357-1.018q-2.393 3.68-4.786 6.464-2.893 3.394-3.75 3.93-.143.07-.696.143t-.66 0q.214-.143 2.93-3.286.75-.857 3.052-4.107t2.804-4.214q.607-1.072 1.82-3.518t1.287-2.768q-.286-.036-3.93 1.18-.284.07-.98.266t-1.233.34-.607.178q-.072.072-.072.375t-.034.34q-.18.356-1.107.534-.823.25-1.68 0-.643-.143-1-.75-.143-.214-.18-.82.216-.073.876-.18t1.054-.214q2.07-.57 3.75-1.143 3.57-1.25 3.643-1.25.357-.07 1.536-.696t1.57-.767q.32-.107.768-.286t.518-.196.214.02q.07.427-.036 1.177 0 .072-.446.964t-.947 1.912-.606 1.197q-.893 1.784-2.75 4.677l2.286 1q.43.214 2.66 1.143t2.41 1q.144.036.376.91t.16 1.09zm-7.32-17.357q.106.536-.144 1-.43.82-1.786 1.357-1.07.43-2.143.43-.928-.11-1.75-.93-.5-.536-.643-1.464l.037-.107q.107.106.697.177t.946 0 2.07-.57q1.287-.43 1.966-.5.607 0 .75.606zm24.927 4.607l2.25 8.107-4.964-1.5zM1.394-9.68l24.785-8.284V-54.82L1.392-46.5v36.82zM45.713-21l3.643 1.107-6.464-23.464-3.572-1.107-7.713 19.143 3.643 1.106 1.607-3.93 7.536 2.323zM27.75-55.357l20.464 6.57v-13.57zm11.107 47.25l5.643.464-1.93 5.714-1.427-2.356Q36.5-1.32 31.286-.43q-2.072.43-3.25.43h-3q-2.822 0-7.125-1.393T11.358-4.43q-.286-.25-.286-.57 0-.286.18-.482t.464-.197q.143 0 .643.27t1.09.59.732.39q2.606 1.323 5.695 2.198t5.625.875q3.393 0 5.964-.518T37.07-3.68q.537-.25 1.09-.552t1.215-.68 1.018-.588zm16-38.536v38.536l-27.643-8.786q-.5.214-13.393 4.554T.68-8q-.466 0-.644-.464Q.036-8.5 0-8.57v-38.5q.107-.323.143-.36.178-.213.714-.39 3.786-1.25 5.322-1.787V-63.32l19.927 7.07q.072 0 5.732-1.964t11.285-3.875T48.893-64q.714 0 .714.75v14.93z","FAX":"M10.286-50.286q2.357 0 4.035 1.68T16-44.572v38.856q0 2.357-1.68 4.035T10.287 0H5.714Q3.357 0 1.68-1.68T0-5.713V-44.57q0-2.36 1.68-4.037t4.034-1.68h4.572zm49.143 5.822q2.07 1.214 3.32 3.32T64-36.57v27.427q0 3.786-2.68 6.464T54.858 0H24q-2.357 0-4.036-1.68t-1.678-4.034V-60.57q0-1.43 1-2.43t2.428-1h24q1.43 0 3.143.714t2.714 1.715L57-56.144q1 1 1.714 2.714t.715 3.144v5.822zM33.142-9.144v-4.57q0-.5-.322-.822t-.82-.32h-4.57q-.5 0-.823.32t-.32.822v4.57q0 .5.32.823t.822.32H32q.5 0 .82-.32t.323-.823zm0-9.142v-4.57q0-.5-.322-.823T32-24h-4.57q-.5 0-.823.32t-.32.823v4.57q0 .5.32.823t.822.32H32q.5 0 .82-.32t.323-.822zm0-9.143V-32q0-.5-.322-.82t-.82-.323h-4.57q-.5 0-.823.322t-.32.82v4.57q0 .5.32.823t.822.32H32q.5 0 .82-.32t.323-.822zm9.143 18.287v-4.57q0-.5-.322-.823t-.82-.32H36.57q-.5 0-.82.32t-.32.822v4.57q0 .5.32.823t.82.32h4.573q.5 0 .82-.32t.323-.823zm0-9.143v-4.57q0-.5-.322-.823t-.82-.32H36.57q-.5 0-.82.32t-.32.823v4.57q0 .5.32.823t.82.32h4.573q.5 0 .82-.32t.323-.822zm0-9.143V-32q0-.5-.322-.82t-.82-.323H36.57q-.5 0-.82.322t-.32.82v4.57q0 .5.32.823t.82.32h4.573q.5 0 .82-.32t.323-.822zM51.43-9.142v-4.57q0-.5-.323-.823t-.82-.32h-4.573q-.5 0-.82.32t-.323.822v4.57q0 .5.323.823t.82.32h4.573q.5 0 .82-.32t.323-.823zm0-9.143v-4.57q0-.5-.323-.823t-.82-.32h-4.573q-.5 0-.82.32t-.323.823v4.57q0 .5.323.823t.82.32h4.573q.5 0 .82-.32t.323-.822zm0-9.143V-32q0-.5-.323-.82t-.82-.323h-4.573q-.5 0-.82.322t-.323.82v4.57q0 .5.323.823t.82.32h4.573q.5 0 .82-.32t.323-.822zm3.427-13.713v-9.143h-5.714q-1.43 0-2.43-1t-1-2.428v-5.715H22.858v18.287h32z","BUILDING":"M48-64q.93 0 1.607.68t.68 1.606v59.428q0 .93-.68 1.607T48 0H2.286Q1.356 0 .68-.68T0-2.285v-59.428q0-.93.68-1.607T2.285-64H48zM18.286-53.714v2.285q0 .5.32.823t.823.32h2.284q.5 0 .822-.32t.32-.822v-2.284q0-.5-.32-.822t-.822-.32H19.43q-.5 0-.823.32t-.32.822zm0 9.143v2.284q0 .5.32.822t.823.32h2.284q.5 0 .822-.32t.32-.822v-2.285q0-.5-.32-.823t-.822-.32H19.43q-.5 0-.823.32t-.32.822zm0 9.14v2.287q0 .5.32.822t.823.32h2.284q.5 0 .822-.32t.32-.823v-2.286q0-.5-.32-.82t-.822-.32H19.43q-.5 0-.823.32t-.32.82zm0 9.144V-24q0 .5.32.82t.823.323h2.284q.5 0 .822-.322t.32-.82v-2.286q0-.5-.32-.82t-.822-.323H19.43q-.5 0-.823.323t-.32.82zm-4.572 11.43v-2.287q0-.5-.32-.82t-.823-.323h-2.284q-.5 0-.822.322t-.32.82v2.287q0 .5.32.82t.822.323h2.285q.5 0 .823-.322t.32-.82zm0-9.144v-2.286q0-.5-.32-.82t-.823-.323h-2.284q-.5 0-.822.323t-.32.82V-24q0 .5.32.82t.822.323h2.285q.5 0 .823-.322t.32-.82zm0-9.143v-2.286q0-.5-.32-.82t-.823-.32h-2.284q-.5 0-.822.32t-.32.82v2.287q0 .5.32.822t.822.32h2.285q.5 0 .823-.32t.32-.823zm0-9.143v-2.285q0-.5-.32-.823t-.823-.32h-2.284q-.5 0-.822.32t-.32.822v2.284q0 .5.32.822t.822.32h2.285q.5 0 .823-.32t.32-.822zm0-9.143v-2.284q0-.5-.32-.822t-.823-.32h-2.284q-.5 0-.822.32t-.32.822v2.285q0 .5.32.823t.822.32h2.285q.5 0 .823-.32t.32-.822zM32-5.713v-6.857q0-.5-.32-.823t-.823-.32H19.43q-.5 0-.823.32t-.32.822v6.856q0 .5.32.82t.822.323h11.427q.5 0 .822-.323t.32-.82zM32-24v-2.286q0-.5-.32-.82t-.823-.323H28.57q-.5 0-.82.323t-.32.82V-24q0 .5.32.82t.82.323h2.287q.5 0 .822-.322T32-24zm0-9.143v-2.286q0-.5-.32-.82t-.823-.32H28.57q-.5 0-.82.32t-.32.82v2.287q0 .5.32.822t.82.32h2.287q.5 0 .822-.32t.32-.823zm0-9.143v-2.285q0-.5-.32-.823t-.823-.32H28.57q-.5 0-.82.32t-.32.822v2.284q0 .5.32.822t.82.32h2.287q.5 0 .822-.32t.32-.822zm0-9.143v-2.284q0-.5-.32-.822t-.823-.32H28.57q-.5 0-.82.32t-.32.822v2.285q0 .5.32.823t.82.32h2.287q.5 0 .822-.32t.32-.822zm9.143 36.573v-2.286q0-.5-.322-.82t-.82-.323h-2.286q-.5 0-.82.322t-.323.82v2.287q0 .5.323.82t.82.323H40q.5 0 .82-.322t.323-.82zm0-9.143v-2.286q0-.5-.322-.82T40-27.43h-2.286q-.5 0-.82.323t-.323.82V-24q0 .5.323.82t.82.323H40q.5 0 .82-.322t.323-.82zm0-9.143v-2.286q0-.5-.322-.82t-.82-.32h-2.286q-.5 0-.82.32t-.323.82v2.287q0 .5.323.822t.82.32H40q.5 0 .82-.32t.323-.823zm0-9.143v-2.285q0-.5-.322-.823t-.82-.32h-2.286q-.5 0-.82.32t-.323.822v2.284q0 .5.323.822t.82.32H40q.5 0 .82-.32t.323-.822zm0-9.143v-2.284q0-.5-.322-.822t-.82-.32h-2.286q-.5 0-.82.32t-.323.822v2.285q0 .5.323.823t.82.32H40q.5 0 .82-.32t.323-.822z","CHILD":"M42.43-44.43L32-34v29.43q0 1.64-1.18 2.82T28-.57t-2.82-1.18T24-4.57v-13.716h-2.286V-4.57q0 1.64-1.178 2.82T17.714-.57t-2.82-1.18-1.18-2.82V-34L3.286-44.43q-1-1-1-2.427t1-2.43 2.428-1 2.43 1l8.142 8.144H29.43l8.14-8.143q1-1 2.43-1t2.43 1 1 2.43-1 2.427zm-11.573-5.856q0 3.322-2.34 5.66t-5.66 2.34-5.66-2.34-2.34-5.66 2.34-5.66 5.66-2.34 5.66 2.34 2.34 5.66z","PAW":"M27.857-47.143q0 2.143-.678 4.054t-2.25 3.304-3.75 1.393q-2.716 0-4.93-2.053t-3.286-4.84-1.07-5.393q0-2.14.677-4.052t2.25-3.304 3.75-1.393q2.75 0 4.948 2.055t3.268 4.82 1.07 5.412zm-12.214 17.25q0 2.857-1.5 4.964t-4.25 2.11q-2.714 0-5.054-1.984T1.25-29.57 0-35q0-2.857 1.5-4.982t4.25-2.125q2.714 0 5.054 1.982t3.59 4.786 1.25 5.447zm14.07-.964q4.216 0 9.108 3.482T47-18.91t3.286 9.09q0 1.64-.607 2.73T47.945-5.48t-2.303.714-2.714.197q-2.43 0-6.698-1.61t-6.518-1.606q-2.357 0-6.875 1.59t-7.16 1.59q-6.537 0-6.537-5.215 0-3.073 2-6.84t4.982-6.876 6.696-5.214 6.894-2.107zm8.537-7.536q-2.18 0-3.75-1.393t-2.25-3.303-.68-4.053q0-2.643 1.073-5.41t3.268-4.822 4.947-2.054q2.18 0 3.75 1.394t2.25 3.304.68 4.053q0 2.61-1.073 5.394t-3.285 4.84-4.93 2.053zm15.43-3.714q2.75 0 4.25 2.125T59.43-35q0 2.643-1.25 5.43t-3.59 4.766-5.054 1.983q-2.75 0-4.25-2.11t-1.5-4.963q0-2.643 1.25-5.446t3.59-4.785 5.053-1.982z","SPOON":"M25.143-45.143q0 5.18-2.036 8.697t-5.428 4.84l1.606 29.32q.07.93-.572 1.607t-1.57.68h-6.858q-.93 0-1.572-.68t-.57-1.606l1.606-29.32q-3.393-1.323-5.43-4.84t-2.034-8.697q0-4.57 1.518-8.91T8-61.197 13.714-64t5.715 2.804 4.195 7.142 1.518 8.91z","CUBE":"M32-5.82l22.857-12.466V-41L32-32.68v26.86zm-2.286-30.894l24.93-9.072-24.93-9.07-24.928 9.07zm29.715-9v27.428q0 1.25-.644 2.322t-1.75 1.678L31.893-.57q-1 .57-2.18.57t-2.177-.57L2.393-14.287q-1.107-.607-1.75-1.678T0-18.286v-27.428q0-1.43.82-2.607T3-50l25.143-9.143q.786-.286 1.57-.286t1.573.287L56.43-50q1.356.5 2.177 1.68t.822 2.606z","CUBES":"M22.857-5.714L36.57-12.57v-11.216L22.858-17.93v12.216zM20.57-21.93L35-28.106l-14.43-6.18-14.427 6.18zM59.43-5.713l13.713-6.857v-11.216L59.43-17.93v12.216zM57.142-21.93l14.428-6.177-14.427-6.18-14.43 6.18zm-16-10.463l13.714-5.893v-9.5L41.143-41.93v9.537zM38.857-45.93l15.75-6.75-15.75-6.75-15.75 6.75zm38.857 18.5v14.86q0 1.284-.678 2.39T75.18-8.5l-16 8q-.894.5-2.037.5t-2.036-.5l-16-8q-.178-.07-.25-.143-.07.072-.25.143l-16 8q-.893.5-2.036.5t-2.034-.5l-16-8Q1.356-9.07.68-10.18T0-12.57v-14.86q0-1.356.768-2.5t2.018-1.713l15.5-6.643V-52.57q0-1.36.768-2.5t2.017-1.716l16-6.857Q37.894-64 38.858-64t1.786.357l16 6.857q1.25.572 2.018 1.715t.77 2.5v14.284l15.5 6.643q1.284.572 2.034 1.714t.75 2.5z","BEHANCE":"M66-51.893H47.75v4.43H66v-4.43zM57-36.68q-3.214 0-5.214 1.876t-2.215 5.09h14.573Q63.5-36.68 57-36.68zm.57 20.894q2.25 0 4.36-1.143t2.713-3.106h7.893Q68.964-9.07 57.286-9.07q-7.643 0-12.16-4.716t-4.52-12.393q0-7.427 4.662-12.338t12.018-4.91q4.928 0 8.59 2.428t5.463 6.393 1.803 8.857q0 .607-.072 1.68h-23.5q0 3.963 2.055 6.124t5.946 2.16zM9.894-17.57h10.57q7.323 0 7.323-5.966 0-6.428-7.107-6.428H9.892v12.393zm0-19.18H19.93q2.784 0 4.41-1.304t1.624-4.053q0-5.143-6.785-5.143H9.892v10.5zM0-54.93h21.214q3.107 0 5.536.5t4.518 1.698 3.214 3.446 1.125 5.5q0 6.465-6.143 9.393 4.072 1.143 6.143 4.107T37.68-23q0 2.68-.876 4.875t-2.358 3.696-3.517 2.537-4.323 1.5-4.786.464H0v-45z","BEHANCE_SQUARE":"M44.57-59.43q4.25 0 7.27 3.02t3.017 7.267v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57zM17.82-46.32H4.57v28.106h13.644q4.18 0 7.036-2.054t2.857-6.09Q28.107-32 23-33.5q3.82-1.857 3.82-5.857 0-2.036-.695-3.447t-2.018-2.16-2.82-1.054-3.466-.303zm-.784 11.356H10.75v-6.572h5.82q4.25 0 4.25 3.215 0 3.356-3.784 3.356zM17.356-23H10.75v-7.75h6.75q4.43 0 4.43 4.036Q21.93-23 17.356-23zm23.215 1.143q-2.427 0-3.713-1.357t-1.286-3.822h14.68q.036-.357.036-1.07 0-4.715-2.66-7.876t-7.27-3.16q-4.57 0-7.5 3.07t-2.927 7.715q0 4.82 2.82 7.75t7.607 2.928q7.322 0 9.536-6.82h-4.93q-.392 1.214-1.695 1.93t-2.697.713zm-.356-13.072q4.036 0 4.43 4.36H35.57q.144-2 1.394-3.18t3.25-1.18zm-5.785-9.5h11.39v2.75H34.43v-2.75z","STEAM":"M56.5-43.214q0 3.607-2.554 6.16t-6.16 2.554-6.16-2.554-2.555-6.16 2.555-6.16 6.16-2.555 6.16 2.555 2.555 6.16zM29-16.714q0-3.715-2.607-6.322t-6.322-2.607q-.963 0-1.927.214l3.714 1.5q2.75 1.11 3.91 3.805t.054 5.41q-1.106 2.75-3.82 3.894t-5.43.034q-.75-.285-2.213-.875t-2.178-.876q1.14 2.143 3.25 3.447t4.64 1.304q3.716 0 6.323-2.607T29-16.713zM58.643-43.18q0-4.5-3.197-7.695T47.75-54.07q-4.536 0-7.732 3.195T36.82-43.18q0 4.537 3.198 7.716t7.732 3.178q4.5 0 7.696-3.178t3.197-7.715zm5.357 0q0 6.75-4.768 11.5T47.75-26.93L32.143-15.535q-.43 4.607-3.893 7.786t-8.18 3.18q-4.32 0-7.64-2.716t-4.216-6.857L0-17.43v-15.32l13.893 5.607q2.82-1.714 6.178-1.714.466 0 1.25.07L31.465-43.32q.072-6.68 4.84-11.394T47.75-59.43q6.714 0 11.482 4.77T64-43.18z","STEAM_SQUARE":"M44.357-40.893q0-2.857-2.036-4.875t-4.89-2.018-4.876 2.036-2.018 4.857q0 2.857 2.018 4.875T37.43-34t4.89-2.018 2.037-4.875zm-21.786 21q0 2.964-2.07 5.018t-5 2.054q-2 0-3.68-1.037t-2.57-2.75q1.857.714 3.5 1.428 2.143.86 4.286-.052t3.035-3.09q.86-2.142-.052-4.285t-3.09-3L14-26.787q.786-.177 1.5-.177 2.93 0 5 2.053t2.07 5.017zm32.287-29.25v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-5.464l6.143 2.463q.714 3.286 3.34 5.428t6.017 2.144q3.714 0 6.464-2.5t3.107-6.178l12.323-9q5.357 0 9.125-3.768t3.768-9.09q0-5.357-3.768-9.124t-9.125-3.768q-5.286 0-9.036 3.732t-3.82 9.018l-8.037 11.5q-.32-.036-1-.036-2.68 0-4.893 1.32L0-32.43v-16.713q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267zm-8.82 8.322q0 3.57-2.537 6.088t-6.107 2.518-6.09-2.518-2.517-6.09 2.518-6.107 6.09-2.534q3.606 0 6.124 2.518t2.518 6.125z","RECYCLE":"M29.857-22.25L29.32-9.107l-.07.786-15-1.037q-1.286-.107-2.393-1.125t-1.678-2.34q-.394-.964-.52-1.964t.144-2.32.428-1.965.768-2.287.68-1.893q2.784.43 18.177 1zm-13.82-20.93l6.427 13.537-5.25-3.286q-2.25 2.573-3.982 5.162t-2.59 4.464-1.41 3.375-.66 2.25l-.143.75-6.787-12.75q-.607-.927-.643-2t.214-1.677L1.5-34q1.25-2.25 4.07-6.714l-5-3.072zM60-24.713l-6.714 12.82q-.43 1.037-1.304 1.662T50.43-9.5l-.644.143q-2.536.25-7.822.428l.286 5.86-8.214-13.11 7.535-12.927.25 6.178q6.073.573 10.11.18T58-23.93zm-28.036-33q-1.678 2.25-9.464 15.535l-11.32-6.677-.68-.43L18.536-62q.714-1.107 2.143-1.607t2.856-.357q.857.07 1.732.428t1.5.75 1.482 1.18 1.286 1.23 1.285 1.412 1.144 1.25zM55.357-46.75l7.572 12.964q.64 1.322.445 2.715t-.982 2.64q-.464.716-1.18 1.323t-1.356 1-1.732.786-1.68.57-1.838.5-1.643.43Q51.75-26.394 43.5-39.394l11.18-6.964zm-5.107-8.07l5.07-2.966-7.856 13.322L32.5-45.18l5.393-3.07q-1.214-3.18-2.68-5.93t-2.695-4.41-2.304-2.856-1.678-1.66l-.607-.465 14.463.034q1.107-.107 2.07.375t1.394 1.017l.393.536q1.393 2.178 4 6.786z","CAR":"M17.143-25.143q0-2.357-1.68-4.036t-4.034-1.677-4.037 1.678-1.68 4.037 1.68 4.036 4.036 1.678 4.034-1.677 1.68-4.036zM18.43-36.57h36.284l-3.178-12.75q-.072-.287-.5-.626t-.75-.34h-27.43q-.32 0-.75.34t-.5.625zm49 11.427q0-2.357-1.68-4.036t-4.036-1.677-4.035 1.678T56-25.142t1.68 4.036 4.034 1.678 4.036-1.677 1.68-4.036zm5.713-3.428v13.713q0 .5-.322.82t-.82.323h-3.43v4.57q0 2.858-2 4.858t-4.856 2-4.857-2-2-4.857v-4.57h-36.57v4.57q0 2.857-2 4.857t-4.858 2-4.86-2-2-4.857v-4.57H1.144q-.5 0-.822-.323t-.32-.82v-13.715q0-3.323 2.34-5.662T8-36.572h1l3.75-14.964q.82-3.357 3.714-5.625t6.393-2.27h27.43q3.5 0 6.392 2.27t3.713 5.624l3.75 14.965h1q3.32 0 5.66 2.338t2.34 5.66z","TAXI":"M65.143-32q3.32 0 5.66 2.34t2.34 5.66v13.714q0 .5-.322.822t-.82.32h-3.43v2.287q0 2.857-2 4.857t-4.856 2-4.857-2-2-4.857v-2.286h-36.57v2.286q0 2.857-2 4.857t-4.858 2-4.86-2-2-4.857v-2.286H1.144q-.5 0-.822-.32T0-10.287V-24q0-3.32 2.34-5.66T8-32h1l3.75-14.964q.82-3.357 3.714-5.625t6.393-2.267h4.572v-8q0-.5.32-.822t.82-.32h16q.5 0 .823.32t.32.823v8h4.573q3.5 0 6.393 2.268t3.713 5.626L64.143-32h1zM11.43-14.857q2.356 0 4.034-1.68t1.68-4.034-1.68-4.037-4.035-1.68-4.037 1.68-1.68 4.036 1.68 4.034 4.036 1.68zm7-17.143h36.284l-3.178-12.75q-.072-.286-.5-.625t-.75-.34h-27.43q-.32 0-.75.34t-.5.625zm43.284 17.143q2.357 0 4.036-1.68t1.68-4.034-1.68-4.037-4.036-1.68-4.035 1.68T56-20.57t1.68 4.034 4.034 1.68z","TREE":"M53.714-11.43q0 .93-.678 1.61t-1.607.677h-16.5q.034.607.213 3.125t.178 3.875q0 .893-.64 1.518T33.142 0h-11.43q-.892 0-1.534-.625t-.644-1.518q0-1.357.178-3.875t.215-3.125H3.43q-.93 0-1.61-.678t-.677-1.61.678-1.606L16.18-27.43H8q-.93 0-1.607-.677t-.68-1.607.68-1.607L20.75-45.715h-7.036q-.928 0-1.607-.68T11.43-48t.677-1.607L25.82-63.32q.68-.68 1.61-.68t1.606.68L42.75-49.608q.68.678.68 1.607t-.68 1.607-1.607.68h-7.036l14.357 14.392q.68.677.68 1.606t-.68 1.607-1.607.678H38.68l14.356 14.394q.678.68.678 1.607z","SPOTIFY":"M40.25-20.786q0-1.143-1.07-1.82-6.894-4.108-15.966-4.108-4.75 0-10.25 1.214-1.5.32-1.5 1.857 0 .714.482 1.232t1.268.517q.18 0 1.322-.286 4.714-.963 8.678-.963 8.072 0 14.18 3.68.677.392 1.177.392.68 0 1.18-.484t.5-1.232zm3.43-7.678q0-1.43-1.25-2.18-8.466-5.035-19.573-5.035-5.464 0-10.82 1.5-1.716.466-1.716 2.287 0 .893.626 1.518t1.518.625q.25 0 1.322-.286 4.357-1.178 8.964-1.178 9.964 0 17.43 4.428.856.465 1.356.465.893 0 1.518-.626t.625-1.518zm3.856-8.857q0-1.68-1.43-2.5-4.5-2.61-10.463-3.948t-12.25-1.34q-7.286 0-13 1.68-.822.25-1.375.91t-.554 1.732q0 1.107.732 1.857t1.84.75q.393 0 1.428-.284 4.75-1.322 10.965-1.322 5.677 0 11.052 1.215t9.054 3.39q.75.43 1.428.43 1.036 0 1.804-.732t.768-1.84zm7.32 5.32q0 7.464-3.677 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","DEVIANTART":"M36.57-53.18L25.75-32.392l.857 1.107h9.964v14.822H18.465l-1.57 1.07-5.073 9.75-1.07 1.073H0v-10.823l10.82-20.82-.856-1.073H0v-14.82h18.107l1.572-1.073 5.07-9.75L25.82-64h10.75v10.82z","SOUNDCLOUD":"M28-15l.57-8.607-.57-18.68q-.036-.356-.268-.606t-.59-.25q-.32 0-.57.25t-.25.607l-.5 18.68.5 8.606q.035.357.267.59t.553.23q.786 0 .857-.82zm10.57-1.036l.394-7.535-.428-20.93q0-.57-.465-.857-.284-.18-.57-.18t-.57.18q-.466.286-.466.857l-.035.214-.36 20.68q0 .035.394 8.427v.037q0 .357.215.607.32.393.82.393.393 0 .714-.32.322-.25.322-.716zM1.25-28.18l.714 4.573-.714 4.5q-.07.32-.32.32t-.323-.32L0-23.607l.607-4.572q.072-.32.322-.32t.32.32zM4.32-31l.93 7.393-.93 7.25q-.07.32-.356.32-.32 0-.32-.356l-.823-7.214L3.644-31q0-.32.32-.32.287 0 .358.32zm10 16.18zM7.608-32.358l.893 8.75-.893 8.464q0 .393-.393.393-.357 0-.428-.393l-.75-8.464.75-8.75q.07-.43.428-.43.393 0 .393.43zm3.357-.25l.822 9-.822 8.714q-.07.464-.5.464-.464 0-.464-.463l-.75-8.714.75-9q0-.464.464-.464.43 0 .5.463zm3.357.643l.75 8.357-.75 8.786q-.07.57-.57.57-.214 0-.375-.16t-.16-.41l-.715-8.787.714-8.357q0-.215.16-.375t.376-.16q.5 0 .57.536zM28-15zM17.68-37.18l.75 13.573-.75 8.786q0 .25-.18.445t-.43.196q-.57 0-.64-.64l-.644-8.787.643-13.572q.07-.64.64-.64.25 0 .43.195t.18.446zm3.356-3.07l.678 16.714-.678 8.715q0 .284-.197.48t-.483.197q-.643 0-.714-.678l-.572-8.716.573-16.714q.07-.68.714-.68.286 0 .482.198t.196.482zm3.5-1.43l.643 18.073-.644 8.643q-.072.75-.786.75-.68 0-.75-.75l-.57-8.643L23-41.68q0-.32.232-.552t.518-.232q.32 0 .536.232t.25.553zm14 26.5zm-7.072-26.64L32-23.608l-.536 8.536q0 .356-.268.624t-.625.267-.606-.25-.285-.64l-.5-8.537.5-18.214q0-.394.266-.644t.625-.25.626.25.268.643zm3.536.677l.5 17.572-.5 8.427q0 .393-.286.68t-.678.284-.68-.284-.32-.68l-.43-8.427.43-17.573q.035-.428.32-.714t.68-.286.66.286.304.714zm7.57 17.572l-.5 8.25q0 .463-.32.784t-.786.322-.785-.322-.36-.785l-.213-4.073-.214-4.178.428-22.716v-.107q.073-.536.43-.857.32-.25.714-.25.286 0 .536.18.5.284.57.927zm39.716-.68q0 4.18-2.965 7.125t-7.14 2.946H44.106q-.464-.07-.786-.39t-.32-.787v-32.107q0-.822 1-1.18 3.036-1.213 6.464-1.213 6.965 0 12.072 4.696t5.714 11.553q1.893-.786 3.93-.786 4.177 0 7.14 2.964t2.966 7.18z","DATABASE":"M27.43-36.57q8.463 0 15.82-1.537t11.607-4.536v6.072q0 2.463-3.678 4.57t-10 3.34-13.75 1.23-13.75-1.23-10-3.34T0-36.57v-6.073q4.25 3 11.607 4.536T27.43-36.57zm0 27.427q8.463 0 15.82-1.536t11.607-4.534v6.07q0 2.465-3.678 4.573t-10 3.338T27.43 0 13.68-1.232t-10-3.34T0-9.14v-6.072q4.25 3 11.607 4.535T27.43-9.142zm0-13.714q8.463 0 15.82-1.536t11.607-4.536v6.073q0 2.464-3.678 4.57t-10 3.34-13.75 1.233-13.75-1.232-10-3.34T0-22.856v-6.073q4.25 3 11.607 4.537t15.822 1.536zm0-41.143q7.427 0 13.75 1.232t10 3.34 3.677 4.57v4.572q0 2.465-3.678 4.572t-10 3.34-13.75 1.23-13.75-1.23-10-3.34T0-50.286v-4.57q0-2.465 3.68-4.573t10-3.338T27.43-64z","FILE_PDF_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zM31.93-25.75q1.177.93 3 2 2.106-.25 4.177-.25 5.25 0 6.322 1.75.57.786.07 1.857 0 .036-.036.072l-.07.07v.036q-.215 1.357-2.537 1.357-1.714 0-4.107-.714t-4.643-1.894q-7.893.857-14 2.964-5.464 9.357-8.643 9.357-.535 0-1-.25l-.857-.428q-.036-.037-.214-.18-.357-.357-.214-1.286.32-1.428 2-3.268T15.892-18q.5-.32.82.214.073.072.073.143 1.857-3.036 3.82-7.036 2.43-4.856 3.715-9.356-.856-2.928-1.088-5.696t.232-4.554q.393-1.428 1.5-1.428h.786q.82 0 1.25.535.643.75.32 2.43-.07.214-.14.286.034.107.034.285v1.073q-.07 4.393-.5 6.857 1.965 5.857 5.215 8.5zM11.356-11.07q1.857-.86 4.893-5.644-1.82 1.428-3.125 3t-1.768 2.643zM25.57-43.93q-.534 1.5-.07 4.716.036-.25.25-1.572 0-.107.25-1.535.036-.144.143-.287-.036-.036-.036-.072t-.018-.052-.02-.054q-.034-.785-.463-1.285 0 .034-.036.07v.07zm-4.427 23.61q4.82-1.93 10.143-2.894-.072-.036-.465-.34t-.57-.482q-2.714-2.393-4.536-6.285-.964 3.07-2.964 7.034-1.07 2-1.607 2.965zm23.07-.573q-.856-.857-5-.857 2.716 1 4.43 1 .5 0 .643-.036 0-.035-.072-.107z","FILE_WORD_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zm-41.965-32v3.82h2.5l5.86 23.607h5.677l4.572-17.32q.25-.716.356-1.644.07-.572.07-.857h.144l.107.857q.036.107.125.714t.197.93l4.57 17.32h5.68l5.856-23.607h2.5v-3.82H35.82v3.82h3.216L35.5-17.107q-.18.714-.25 1.643l-.07.75h-.144l-.107-.75q-.037-.18-.144-.75t-.18-.893L29.465-36.57h-4.07L20.25-17.108q-.07.32-.16.875t-.126.768l-.143.75h-.14l-.073-.75q-.07-.93-.25-1.643L15.82-32.75h3.216v-3.82H8.32z","FILE_EXCEL_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zM15.32-12.93v3.787h10.037v-3.786H22.68l3.677-5.75q.18-.25.357-.588t.268-.482.125-.143h.072q.034.143.177.357.072.143.16.268t.215.286.232.303l3.822 5.75H29.07v3.787h10.394v-3.786h-2.428l-6.857-9.75 6.963-10.07h2.393v-3.82H29.57v3.82h2.644l-3.678 5.68q-.143.25-.357.588t-.323.482l-.07.107h-.073q-.035-.143-.178-.357-.215-.393-.607-.82l-3.787-5.68h2.714v-3.82H15.5v3.82h2.43l6.75 9.714-6.93 10.107h-2.43z","FILE_POWERPOINT_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zm-35.43-8.36v3.787h11.68v-3.786h-3.322v-5.963h4.893q2.714 0 4.214-.536 2.394-.82 3.805-3.106t1.41-5.214q0-2.893-1.32-5.036t-3.572-3.107Q30.93-36.57 28-36.57H14.857v3.82h3.286v19.82h-3.286zm12.608-10h-4.25v-9.57H27.5q1.857 0 2.964.643 2 1.178 2 4.107 0 3.18-2.214 4.286-1.107.535-2.786.535z","FILE_PICTURE_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zm-4.572-16v11.427H9.144V-16L16-22.857l4.57 4.57L34.287-32zM16-27.43q-2.857 0-4.857-2t-2-4.856 2-4.857 4.857-2 4.857 2 2 4.857-2 4.857-4.857 2z","FILE_ZIP_O":"M22.857-50.286v-4.57h-4.57v4.57h4.57zm4.572 4.572v-4.572h-4.573v4.572h4.572zm-4.573 4.57v-4.57h-4.57v4.57h4.57zm4.572 4.573v-4.573h-4.573v4.572h4.572zm25-13.86q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86h-4.57v4.573h-4.573v-4.572H4.57v54.86h45.716zM27.893-30.32l3.82 12.463Q32-16.893 32-16q0 2.964-2.59 4.91t-6.553 1.947-6.553-1.946-2.59-4.91q0-.893.286-1.857.75-2.25 4.286-14.143v-4.57h4.57V-32h2.823q.784 0 1.39.464t.823 1.215zm-5.036 16.606q1.893 0 3.232-.68T27.43-16t-1.34-1.607-3.233-.68-3.232.68T18.285-16t1.34 1.607 3.232.68z","FILE_SOUND_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zM22.143-33.644q.714.286.714 1.072v19.427q0 .786-.714 1.072-.286.07-.43.07-.427 0-.82-.32l-5.93-5.966h-4.677q-.5 0-.822-.32t-.32-.823v-6.856q0-.5.32-.82t.822-.323h4.678l5.93-5.963q.57-.536 1.25-.25zM37.036-9.036q1.107 0 1.785-.857 4.61-5.678 4.61-12.964T38.82-35.82q-.57-.75-1.534-.86t-1.68.5q-.75.61-.838 1.555t.518 1.696q3.57 4.394 3.57 10.073t-3.57 10.07q-.607.75-.518 1.698t.84 1.52q.642.534 1.428.534zM29.5-14.32q.964 0 1.68-.716 3.106-3.32 3.106-7.82T31.18-30.68q-.644-.677-1.61-.713t-1.64.607-.716 1.59.643 1.66q1.857 2.036 1.857 4.68t-1.857 4.677q-.678.716-.643 1.662t.715 1.59q.713.607 1.57.607z","FILE_VIDEO_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zm-22.857-32q1.856 0 3.213 1.356T32-32v13.714q0 1.857-1.357 3.215t-3.214 1.356H13.713q-1.857 0-3.214-1.357t-1.357-3.216V-32q0-1.857 1.357-3.214t3.214-1.357H27.43zM45-36.5q.714.286.714 1.07v20.573q0 .786-.714 1.07-.286.073-.43.073-.5 0-.82-.322l-9.464-9.5v-3.214l9.464-9.5q.32-.32.82-.32.144 0 .43.07z","FILE_CODE_O":"M52.43-50.43q1 1 1.713 2.716t.714 3.143v41.14q0 1.43-1 2.43T51.43 0h-48Q2 0 1-1T0-3.43v-57.14Q0-62 1-63t2.43-1h32q1.427 0 3.14.714t2.716 1.715zm-15.86-8.713v13.43H50q-.357-1.037-.786-1.466L38.036-58.356q-.43-.43-1.465-.786zM50.287-4.57v-36.573H35.43q-1.43 0-2.43-1t-1-2.428v-14.86H4.57v54.86h45.716zm-33.143-32q.286-.394.75-.448t.857.232l1.82 1.357q.394.287.448.75t-.232.86l-6.5 8.677 6.5 8.68q.285.392.232.856t-.447.75L18.75-13.5q-.393.286-.857.232t-.75-.446L9.07-24.464q-.5-.68 0-1.357zm28.643 10.75q.5.677 0 1.356l-8.072 10.75q-.285.393-.75.446t-.857-.232l-1.82-1.357q-.394-.286-.448-.75t.23-.857l6.5-8.68-6.5-8.677q-.284-.394-.23-.86t.446-.75l1.82-1.356q.394-.285.858-.232t.75.447zM23.643-9.358q-.464-.072-.732-.464t-.196-.86l4.93-29.677q.07-.464.463-.732t.857-.196l2.25.357q.465.073.732.466t.197.857L27.213-9.93q-.07.466-.463.734T25.893-9z","VINE":"M53.464-34.464v7.07q-3.607.823-7.07.823-2.323 4.856-5.912 9.677T34-9.196t-4.57 3.803q-2.86 1.607-5.787-.107-1-.607-2.16-1.554t-3.037-2.982-3.66-4.59-3.84-6.57T7.18-29.91 3.91-41.144 1.394-55.07H11.5q.93 7.784 2.5 14.23t3.732 11.322 4.34 8.41 5 6.965q6.035-6.036 10.25-14.5-5.072-2.57-7.965-7.857t-2.893-11.893q0-6.857 3.715-11.232T40.32-64q6.36 0 9.75 3.768t3.394 10.625q0 5.678-2.07 10.214-.25.036-.698.107t-1.642.072-2.25-.215-2.215-.91-1.804-1.84q1.107-3.677 1.107-6.57 0-3.107-1.036-4.714t-2.82-1.607q-1.894 0-3.037 1.766t-1.143 5.018q0 6.643 3.75 10.482t9.536 3.84q2.214 0 4.32-.5z","CODEPEN":"M7.714-22.25L29.25-7.893v-12.82L17.32-28.68zM5.5-27.393L12.393-32 5.5-36.607v9.214zm29.25 19.5L56.286-22.25l-9.607-6.43-11.93 7.966v12.82zM32-25.5l9.714-6.5L32-38.5 22.286-32zm-14.68-9.82l11.93-7.966v-12.82L7.714-41.75zM51.608-32l6.893 4.607v-9.214zm-4.928-3.32l9.606-6.43L34.75-56.107v12.82zM64-41.75v19.5q0 1.464-1.214 2.286l-29.25 19.5Q32.786 0 32 0t-1.536-.464l-29.25-19.5Q0-20.786 0-22.25v-19.5q0-1.464 1.214-2.286l29.25-19.5Q31.214-64 32-64t1.536.464l29.25 19.5Q64-43.214 64-41.75z","JSFIDDLE":"M64.286-36.43q3.964 1.644 6.41 5.198t2.447 7.91q0 5.858-4.214 10.018t-10.18 4.16q-.143 0-.41-.017t-.376-.02H14.5q-6.07-.356-10.286-4.48T0-23.68q0-3.927 1.964-7.25t5.25-5.25q-.428-1.39-.428-2.927 0-4.107 2.928-7T16.82-49q3.394 0 6.144 2.07 2.68-5.5 7.947-8.856t11.66-3.357q5.93 0 10.93 2.875t7.91 7.804 2.91 10.75q0 .214-.016.643t-.018.64zm-47.572 9.5q0 4.36 3 6.894t7.43 2.536q4.892 0 8.57-3.536-.57-.714-1.696-2.018t-1.554-1.803q-2.393 2.32-5.143 2.32-1.963 0-3.338-1.195t-1.375-3.125q0-1.893 1.375-3.107t3.268-1.215q1.57 0 3.018.75t2.607 1.966 2.32 2.678 2.466 2.93 2.75 2.677 3.465 1.966 4.34.75q4.32 0 7.303-2.554T58.5-26.82q0-4.323-3-6.86t-7.393-2.534q-5.107 0-8.607 3.464.5.57 1.054 1.214t1.232 1.43 1.035 1.213q2.36-2.286 5.073-2.286 1.857 0 3.286 1.18t1.427 3q0 2.036-1.32 3.268T47.928-22.5q-1.537 0-2.948-.75t-2.57-1.964-2.34-2.68-2.483-2.927-2.77-2.68-3.445-1.964-4.232-.75q-4.357 0-7.393 2.518t-3.036 6.767z","SUPPORT":"M32-64q6.5 0 12.43 2.536t10.213 6.82 6.82 10.215T64-32t-2.536 12.43-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64zm0 4.57q-6.786 0-12.893 3.216l6.93 6.928q2.927-1 5.963-1t5.964 1l6.93-6.928Q38.785-59.43 32-59.43zM7.786-19.106l6.928-6.93q-1-2.927-1-5.963t1-5.964l-6.928-6.93Q4.57-38.785 4.57-32t3.216 12.893zM32-4.57q6.786 0 12.893-3.216l-6.93-6.928q-2.927 1-5.963 1t-5.964-1l-6.93 6.928Q25.215-4.57 32-4.57zm0-13.716q5.68 0 9.696-4.018T45.714-32t-4.018-9.696T32-45.714t-9.696 4.018T18.286-32t4.018 9.696T32-18.286zm17.286-7.75l6.928 6.93Q59.43-25.215 59.43-32t-3.216-12.893l-6.928 6.93q1 2.927 1 5.963t-1 5.964z","CIRCLE_O_NOTCH":"M64-32q0 6.5-2.536 12.43t-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32q0-7.93 3.607-14.804t9.875-11.32T27.43-63.68v9.287q-7.894 1.607-13.09 7.893T9.142-32q0 4.643 1.82 8.875t4.876 7.286 7.285 4.876T32-9.144t8.875-1.82 7.286-4.875 4.876-7.285T54.856-32q0-8.214-5.195-14.5t-13.09-7.893v-9.286q7.68 1.11 13.948 5.555t9.875 11.32T64-32z","REBEL":"M.68-32.786q.284-7.75 4.14-14.5t10.894-11.357h.18q0 .036-.037.107-.286.286-1 1.197T13-54.606t-2.143 3.946-1.59 4.84-.5 5.374 1.394 5.625 3.876 5.5q1.785 1.784 3.643 2.48t3.23.41 2.483-.838 1.678-1.16l.573-.572q1.393-1.82 1.893-4.16t.232-4.376-.75-3.82-.947-2.858l-.5-1.036q-.356-.893-1.088-1.768t-1.536-1.464-1.553-1.054-1.25-.678l-.464-.215 3.713-4.106q1.393.607 2.786 1.857t2.106 2.18l.678.964q.036-1.714-.66-3.696t-1.447-3.125l-.714-1.107L31.893-64l5.714 6.464q-1.178 1.643-1.875 3.66t-.803 3.233l-.144 1.18q.785-1.323 2.196-2.59t2.41-1.876l1-.606 3.68 4.107q-1.572.5-3.036 1.787t-2.143 2.322l-.68 1.034q-1.106 2-1.713 4.768t-.25 6.072 2.036 5.59q1.178 1.606 2.768 2.16t3.035.196 2.714-.946 2.053-1.197l.75-.57q2.143-1.894 3.447-4.108t1.732-4.34.357-4.34-.643-4.214-1.32-3.84-1.626-3.32-1.608-2.572-1.232-1.697l-.464-.607q-.5-.464-.25-.464l.357.107q1.43 1.036 2.232 1.643t2.214 1.785 2.285 2.073 2.09 2.32 1.98 2.75 1.626 3.144 1.357 3.68.84 4.177.374 4.857q.107 9.25-3.857 16.61T48.357-4.108 32.07 0q-6.606 0-12.534-2.643T9.41-9.713 2.84-20.18.68-32.785z","GE":"M31.214-5.5v2.357q-7.428-.214-13.75-3.91t-10.107-9.84l2.072-1.214q1.034 1.75 2.606 3.536l2.32-2.037q5.287 6 13.144 7.57l-.607 3.073q2.32.428 4.32.464zM9.857-24.43l-2.964 1q.786 2.144 1.75 4l-2.036 1.18q-3.5-6.43-3.5-13.75t3.5-13.75l2.036 1.18q-1.072 2-1.75 4l2.928 1Q8.57-36 8.57-32q0 3.893 1.287 7.57zm44.714 6.323l2.073 1.214q-3.786 6.143-10.107 9.84t-13.75 3.91V-5.5q2-.036 4.32-.464L36.5-9.036q7.857-1.57 13.143-7.57l2.32 2.035q1.573-1.787 2.608-3.537zm-5.39-19.786l-8.323 2.857q.5 1.5.5 3.036t-.5 3.036l8.286 2.857q-1.107 3.286-3.5 6.036l-6.607-5.787Q37-23.464 33.786-22.82l1.714 8.606q-1.857.357-3.5.357t-3.5-.357l1.714-8.607q-3.214-.644-5.25-3.037l-6.607 5.786q-2.393-2.75-3.5-6.037l8.286-2.857q-.5-1.5-.5-3.036t.5-3.036l-8.322-2.857q1.18-3.32 3.537-6.036l6.607 5.787q2.107-2.428 5.25-3.07L28.5-49.787q1.57-.357 3.5-.357t3.5.357l-1.714 8.572q3.143.643 5.25 3.07l6.607-5.785Q48-41.213 49.18-37.892zM31.213-60.857v2.357q-2.32.07-4.32.464l.606 3.072q-7.857 1.5-13.143 7.535l-2.32-2q-1.358 1.5-2.608 3.5l-2.037-1.177q3.786-6.143 10.07-9.84t13.75-3.91zM60.894-32q0 7.32-3.5 13.75l-2.037-1.18q.964-1.856 1.75-4l-2.964-1Q55.43-28.106 55.43-32q0-4-1.25-7.57l2.927-1q-.678-2-1.75-4l2.036-1.18q3.5 6.43 3.5 13.75zm-4.287-15.107L54.57-45.93q-1.25-2-2.606-3.5l-2.32 2q-5.287-6.034-13.144-7.534l.607-3.072q-2-.393-4.32-.464v-2.357q7.463.214 13.75 3.91t10.07 9.84zM62.43-32q0-6.18-2.412-11.82t-6.482-9.716-9.715-6.482T32-62.428t-11.82 2.41-9.716 6.482-6.482 9.715T1.572-32t2.41 11.82 6.482 9.716 9.715 6.482T32-1.572t11.82-2.41 9.716-6.482 6.482-9.715T62.428-32zM64-32q0 6.5-2.536 12.43t-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64t12.43 2.536 10.213 6.82 6.82 10.215T64-32z","GIT_SQUARE":"M20.786-17.286q0 2.357-3.322 2.357-3.82 0-3.82-2.25 0-2.284 3.5-2.284 3.642 0 3.642 2.178zM19.5-33.93q0 3.037-2.643 3.037-2.75 0-2.75-3 0-3.214 2.75-3.214 1.286 0 1.964.91t.68 2.268zm5.93-2.677v-4.464q-2.787 1.034-4.823 1.034-1.786-1.035-3.928-1.035-3.073 0-5.18 2.034T9.393-33.93q0 1.787 1.053 3.644t2.625 2.393v.107q-1.356.607-1.356 3.036 0 1.893 1.465 2.75v.107Q9.142-20.57 9.142-16.93q0 1.61.714 2.805t1.93 1.82 2.57.912 2.893.286q8 0 8-6.714 0-2.394-1.714-3.537T19.036-23q-.965-.18-1.84-.732t-.875-1.41q0-1.572 1.75-1.858 2.75-.536 4.36-2.5t1.606-4.786q0-.857-.357-1.857 1.32-.32 1.75-.464zm2.106 14.964h4.893q-.073-.964-.073-2.928v-13.823q0-1.643.072-2.464h-4.894q.107.82.107 2.536v14q0 1.784-.107 2.677zm18.178-.57v-4.323q-1.07.75-2.428.75-1.893 0-1.893-2.928v-8.036h1.857q.32 0 .946.036t.947.035v-4.177h-3.75q0-2.93.107-3.643h-5q.143.857.143 1.964v1.68H34.5v4.177q1.286-.106 1.32-.106.11 0 .394.018t.43.018v.07h-.073v7.75q0 1.323.09 2.287t.41 2.018.876 1.732 1.554 1.107 2.357.43q2.286 0 3.857-.858zM33-47.43q0-1.284-.857-2.266T30-50.68t-2.16.966-.876 2.285q0 1.287.893 2.234T30-44.25t2.125-.964T33-47.43zm21.857-1.713v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","GIT":"M21.25-9.93q0-3.57-5.893-3.57-5.643 0-5.643 3.714 0 3.607 6.143 3.607 5.393 0 5.393-3.75zm-2.107-26.963q0-2.178-1.072-3.643T14.894-42q-4.43 0-4.43 5.18 0 4.82 4.43 4.82 4.25 0 4.25-4.893zm9.607-11.57v7.213q-1.286.43-2.82.786.57 1.535.57 3 0 4.535-2.607 7.732t-7.036 4.018q-1.428.285-2.125.964t-.696 2.07q0 1.11.803 1.84t2.07 1.144 2.804.785 3.072.91 2.803 1.34 2.07 2.285.804 3.518Q28.464 0 15.5 0q-2.464 0-4.643-.446T6.714-1.91 3.59-4.84 2.43-9.392q0-5.893 6.5-8.036v-.14q-2.394-1.466-2.394-4.5 0-3.894 2.25-4.894v-.143q-2.572-.857-4.268-3.875t-1.697-5.91q0-4.965 3.394-8.27t8.393-3.302q3.43 0 6.357 1.678 3.5 0 7.786-1.678zM40.107-17H32.18q.14-1.607.14-4.786v-21.75q0-3.357-.14-4.57h7.927q-.143 1.177-.143 4.427v21.894q0 3.18.143 4.786zm21.464-7.93v7q-2.534 1.394-6.213 1.394-2.214 0-3.82-.714t-2.5-1.786-1.412-2.785-.66-3.287-.144-3.68V-41.32h.073v-.144q-.25 0-.68-.036t-.642-.036q-.75 0-2.106.215v-6.787h3.43v-2.714q0-1.93-.215-3.18h8.106q-.215 1.464-.215 5.893h6.11v6.786q-.537 0-1.555-.073t-1.518-.07H54.57v13.034q0 4.68 3.11 4.68 2.177 0 3.89-1.18zM41-58.75q0 2.07-1.393 3.625T36.18-53.57q-2.073 0-3.5-1.555t-1.43-3.625q0-2.107 1.41-3.68T36.18-64q2.07 0 3.445 1.59T41-58.75z","YC_SQUARE":"M28.893-28.143l9.5-17.82h-4l-5.607 11.142q-.857 1.713-1.572 3.284l-1.5-3.285-5.535-11.144h-4.287l9.393 17.607v11.57h3.607v-11.356zm25.964-21v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TENCENT_WEIBO":"M30.07-43.57q0 2.856-2.034 4.874T23.18-36.68q-2.144 0-3.966-1.25-2.214 2.394-4.107 5.216-8.82 13.25-7.214 30.678.036.786-.447 1.375T6.214 0h-.178q-.715 0-1.25-.482T4.18-1.68q-.5-4.5-.126-8.838t1.053-7.75 1.93-6.643T9.5-30.465t2.643-4.465q2.178-3.213 4.714-5.89-.57-1.25-.57-2.75 0-2.86 2.017-4.876t4.875-2.018 4.874 2.018 2.017 4.875zm13.61.39q0 5.644-2.787 10.43t-7.59 7.57-10.446 2.787q-2.286 0-4.678-.5-.75-.178-1.162-.84t-.232-1.41q.178-.714.82-1.125T19-26.536q1.82.465 3.857.465 3.464 0 6.643-1.36t5.464-3.64 3.643-5.466 1.357-6.643-1.357-6.64-3.643-5.466T29.5-58.93t-6.643-1.356-6.643 1.357-5.464 3.644-3.643 5.465-1.357 6.64q0 4.073 1.857 7.787.357.714.125 1.43t-.91 1.07-1.41.107-1.09-.928q-2.286-4.393-2.286-9.465 0-4.25 1.66-8.106t4.447-6.643 6.643-4.427T22.856-64q5.644 0 10.448 2.786t7.59 7.59 2.785 10.445z","QQ":"M9.643-35.214q-.286-.68-.286-1.857 0-.716.393-1.75t.857-1.61q-.036-.784.268-1.89t.804-1.537q0-4.964 3.302-10.304t7.768-7.483Q27.714-64 34.32-64q4.75 0 9.5 1.964 1.75.75 3.216 1.715t2.535 2 1.966 2.427 1.5 2.643 1.16 3.018.91 3.196.787 3.5l.036.18q1.963 2.963 1.963 5.356 0 .5-.322 1.43t-.32 1.356q0 .035.054.125t.125.18.07.124q2.75 4.072 4.304 7.66t1.553 7.447q0 1.537-.696 3.573t-1.98 2.036q-.323 0-.698-.27t-.678-.624-.68-.93-.57-.945-.483-.928-.32-.625q-.036-.036-.107-.036l-.18.144q-2.106 5.5-4.713 7.965.714.713 2.196 1.374t2.465 1.482 1.27 2.32q-.073.144-.144.573t-.25.64Q55.5-.463 47-.463q-1.893 0-3.946-.322t-3.5-.714-3.733-1.07q-.534-.18-.82-.25-.5-.144-1.643-.162t-1.428-.054Q30.463-1.43 27.374-.714T21.357 0q-1.25 0-2.464-.054t-3.322-.32-3.606-.733-2.66-1.43-1.16-2.284q0-1.43.356-2.126T9.964-8.68q.393-.07 1.447-.463t1.77-.428q.14 0 .5-.073.07-.07.07-.143l-.07-.107q-1.716-.393-3.86-3.768t-2.606-5.59l-.178-.107q-.143 0-.43.714-.642 1.464-1.945 2.66t-2.767 1.34h-.036q-.143 0-.214-.16T1.463-15q-.82-1.93-.82-3.57 0-9.823 9-16.644z","WEIXIN":"M20.714-47.536q0-1.464-.893-2.357t-2.356-.893q-1.535 0-2.714.91t-1.18 2.34q0 1.393 1.18 2.304t2.714.91q1.465 0 2.357-.874t.894-2.34zM47.25-29.43q0-1-.91-1.784T44-32q-.964 0-1.768.804t-.803 1.767q0 1 .802 1.805T44-26.82q1.43 0 2.34-.787t.91-1.822zm-8.43-18.106q0-1.464-.874-2.357t-2.34-.893q-1.535 0-2.713.91t-1.18 2.34q0 1.393 1.18 2.304t2.714.91q1.464 0 2.34-.874t.874-2.34zM61.5-29.43q0-1-.93-1.784T58.25-32q-.964 0-1.768.804t-.803 1.767q0 1 .802 1.805t1.768.804q1.393 0 2.32-.787t.93-1.822zM52-43.606q-1.107-.143-2.5-.143-6.036 0-11.107 2.75t-7.982 7.446-2.91 10.268q0 2.786.82 5.43-1.25.106-2.427.106-.93 0-1.786-.054t-1.964-.232-1.59-.25-1.946-.375-1.786-.376L7.787-14.5l2.57-7.786Q0-29.536 0-39.786q0-6.035 3.482-11.107t9.43-7.982 12.98-2.91q6.287 0 11.876 2.356t9.357 6.52T52-43.608zM73.143-23.57q0 4.177-2.447 7.98T64.07-8.68l1.966 6.466-7.107-3.893q-5.36 1.32-7.787 1.32-6.036 0-11.107-2.517t-7.982-6.84-2.91-9.427 2.91-9.43 7.982-6.84 11.107-2.517q5.75 0 10.82 2.518t8.126 6.858 3.053 9.41z","SEND":"M63-63.607q1.18.857.964 2.286L54.82-6.465q-.177 1.035-1.14 1.607-.5.286-1.11.286-.39 0-.856-.18l-16.178-6.607L26.893-.82q-.643.82-1.75.82-.464 0-.786-.143-.678-.25-1.09-.84t-.41-1.303V-14.75l30.857-37.82-38.178 33.034L1.43-25.32Q.106-25.82 0-27.287q-.07-1.428 1.143-2.107L60.57-63.68q.537-.32 1.144-.32.715 0 1.286.393z","SEND_O":"M63-63.607q1.18.857.964 2.286L54.82-6.465q-.177 1.035-1.14 1.607-.5.286-1.11.286-.39 0-.856-.18l-18.82-7.68L22.25-.75q-.643.75-1.68.75-.5 0-.82-.143-.68-.25-1.07-.84t-.394-1.303V-18.43L1.43-25.32Q.106-25.82 0-27.287q-.107-1.393 1.143-2.107L60.57-63.68q1.25-.75 2.43.073zM50.786-10.07l7.893-47.25L7.463-27.787l12 4.893 30.822-22.82L33.214-17.25z","HISTORY":"M54.857-32q0 5.57-2.178 10.643t-5.86 8.75-8.75 5.857-10.64 2.18q-6.144 0-11.68-2.59t-9.43-7.304q-.25-.357-.23-.804T6.392-16l4.893-4.93q.357-.32.893-.32.57.07.82.43 2.607 3.39 6.393 5.25t8.036 1.856q3.713 0 7.088-1.447t5.84-3.91 3.91-5.84T45.714-32t-1.446-7.09-3.91-5.84-5.84-3.91-7.09-1.446q-3.5 0-6.714 1.268T15-45.393l4.893 4.93q1.107 1.07.5 2.463-.607 1.43-2.107 1.43h-16q-.93 0-1.607-.68T0-38.857v-16q0-1.5 1.43-2.107 1.39-.607 2.463.5l4.643 4.607q3.82-3.607 8.732-5.59t10.16-1.982q5.572 0 10.643 2.18t8.75 5.857 5.86 8.75T54.856-32zM32-42.286v16q0 .5-.32.822t-.823.32H19.43q-.5 0-.823-.32t-.32-.822v-2.285q0-.5.32-.823t.822-.32h8v-12.573q0-.5.32-.82t.82-.323h2.287q.5 0 .822.323t.32.82z","CIRCLE_THIN":"M27.43-54.857q-4.644 0-8.876 1.82t-7.286 4.876-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82 8.874-1.82 7.285-4.875 4.874-7.285T50.286-32t-1.822-8.875-4.875-7.286-7.286-4.876-8.875-1.82zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","HEADER":"M60.07-4.57q-1.57 0-4.73-.126t-4.77-.125q-1.57 0-4.713.124t-4.714.125q-.857 0-1.322-.734t-.463-1.625q0-1.106.607-1.64t1.393-.61 1.822-.25 1.606-.534q1.178-.75 1.178-5L45.93-28.93q0-.75-.037-1.106-.464-.143-1.786-.143H20q-1.357 0-1.82.144-.037.357-.037 1.107l-.036 13.25q0 5.073 1.322 5.86.57.356 1.713.463t2.036.125 1.606.536.714 1.625q0 .927-.446 1.713t-1.304.786q-1.68 0-4.982-.126T13.82-4.82q-1.534 0-4.57.124t-4.536.125q-.82 0-1.268-.75T3-6.93Q3-8 3.554-8.535T4.84-9.16t1.696-.27 1.5-.534q1.178-.822 1.178-5.107l-.035-2.037v-29.036q0-.107.016-.928t0-1.305-.053-1.375-.125-1.5-.232-1.304-.393-1.125-.572-.64q-.534-.36-1.606-.43t-1.893-.07-1.463-.5-.643-1.61q0-.927.43-1.713t1.285-.786q1.64 0 4.945.126t4.946.125q1.5 0 4.52-.124t4.517-.125q.893 0 1.34.787t.446 1.714q0 1.073-.607 1.555t-1.375.518-1.767.143-1.536.464q-1.25.75-1.25 5.714l.036 11.43q0 .75.036 1.142.463.107 1.39.107h24.966q.893 0 1.357-.107.036-.393.036-1.143l.034-11.43q0-4.963-1.25-5.713-.643-.393-2.09-.446t-2.356-.465-.91-1.77q0-.927.446-1.713t1.34-.786q1.57 0 4.713.126t4.714.125q1.537 0 4.61-.124t4.606-.125q.893 0 1.34.787t.445 1.714q0 1.073-.624 1.573t-1.428.518-1.84.108-1.57.446q-1.25.822-1.25 5.75l.035 33.68q0 4.25 1.214 5 .572.356 1.643.48t1.91.162 1.483.553.643 1.59q0 .927-.43 1.713t-1.285.786z","PARAGRAPH":"M45.643-57.25v2.607q0 1.036-.66 2.18t-1.52 1.142q-1.784 0-1.927.034-.93.215-1.143 1.107-.107.394-.107 2.287V-6.75q0 .893-.643 1.536t-1.536.643H34.25q-.893 0-1.536-.644T32.07-6.75v-43.5h-5.106v43.5q0 .893-.625 1.536t-1.554.643H20.93q-.93 0-1.555-.644T18.75-6.75v-17.714q-5.25-.43-8.75-2.107-4.5-2.073-6.857-6.394-2.286-4.18-2.286-9.25 0-5.93 3.143-10.215 3.143-4.213 7.464-5.677 3.965-1.322 14.893-1.322h17.107q.893 0 1.536.644t.643 1.536z","SLIDERS":"M12.57-13.714v4.57H0v-4.57h12.57zm12.573-4.572q.928 0 1.607.68T27.43-16v9.143q0 .928-.68 1.607t-1.607.68H16q-.93 0-1.607-.68t-.68-1.607V-16q0-.93.68-1.607t1.607-.68h9.143zM30.857-32v4.57H0V-32h30.857zM8-50.286v4.572H0v-4.572h8zm46.857 36.572v4.57H28.57v-4.57h26.287zM20.57-54.857q.93 0 1.61.678t.677 1.61v9.14q0 .93-.678 1.61t-1.61.677h-9.14q-.93 0-1.61-.678t-.677-1.61v-9.14q0-.93.678-1.61t1.61-.677h9.14zM43.43-36.57q.927 0 1.606.677t.678 1.607v9.143q0 .93-.678 1.607t-1.607.68h-9.144q-.93 0-1.607-.68T32-25.143v-9.143q0-.928.68-1.607t1.606-.678h9.143zM54.856-32v4.57h-8V-32h8zm0-18.286v4.572H24v-4.572h30.857z","SHARE_ALT":"M43.43-27.43q4.75 0 8.088 3.34t3.34 8.09-3.34 8.09-8.09 3.34-8.09-3.34T32-16q0-.43.07-1.214l-12.856-6.43Q15.93-20.57 11.43-20.57q-4.75 0-8.09-3.34T0-32t3.34-8.09 8.09-3.34q4.5 0 7.784 3.073l12.857-6.43Q32-47.57 32-48q0-4.75 3.34-8.09t8.09-3.34 8.088 3.34 3.34 8.09-3.34 8.09-8.09 3.34q-4.5 0-7.785-3.073l-12.857 6.43q.07.784.07 1.213t-.07 1.214l12.857 6.43q3.286-3.073 7.786-3.073z","SHARE_ALT_SQUARE":"M45.714-21.32q0-3.144-2.232-5.394t-5.375-2.25q-3 0-5.178 2.07l-8.61-4.285q.073-.57.073-.82t-.072-.82l8.61-4.287q2.177 2.07 5.177 2.07 3.143 0 5.375-2.25t2.232-5.392-2.232-5.374-5.375-2.232-5.393 2.232-2.25 5.375q0 .25.072.823L21.93-37.57q-2.216-2.037-5.18-2.037-3.143 0-5.375 2.232T9.143-32t2.232 5.375 5.375 2.232q2.964 0 5.18-2.036l8.606 4.287q-.072.572-.072.822 0 3.14 2.25 5.374t5.393 2.232 5.375-2.232 2.232-5.375zm9.143-27.823v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","BOMB":"M20.393-42.964q-.357-.893-1.214-1.25t-1.75 0q-3.86 1.57-6.823 4.535T6.07-32.856q-.356.893 0 1.75t1.25 1.214q.466.18.86.18 1.5 0 2.14-1.43 1.216-3 3.52-5.303t5.303-3.518q.893-.393 1.25-1.25t0-1.75zM54.036-55.68l1.643 1.644-8.716 8.68 2.43 2.427q.677.68.677 1.626t-.677 1.625l-2.286 2.287q3.18 5.75 3.18 12.25 0 5.107-1.983 9.768T42.946-7.34 34.91-1.98 25.144 0t-9.768-1.982T7.34-7.34 1.98-15.374 0-25.143t1.982-9.768 5.357-8.036 8.035-5.358 9.768-1.982q6.5 0 12.25 3.18l2.286-2.287q.677-.678 1.624-.678t1.625.677l2.427 2.43zm.285-2q-.356.36-.784.36-.465 0-.822-.36l-3.25-3.213q-.32-.357-.32-.82t.32-.823q.357-.32.822-.32t.82.32l3.215 3.25q.36.322.36.804t-.36.803zm8.216 8.216q-.393.32-.822.32t-.82-.32l-3.215-3.25q-.36-.322-.36-.804t.36-.803q.32-.36.802-.36t.804.36l3.25 3.213q.32.357.32.82t-.32.823zM64-56q0 .5-.32.82t-.823.323H59.43q-.5 0-.823-.322t-.32-.82.32-.82.822-.323h3.427q.5 0 .822.322T64-56zm-6.857-6.857v3.428q0 .5-.322.823t-.82.32-.82-.32-.323-.822v-3.427q0-.5.322-.822T56-64t.82.32.323.823zm5.393 1.964l-3.25 3.214q-.357.36-.786.36-.464 0-.82-.36-.36-.32-.36-.802t.36-.804l3.213-3.25q.357-.32.82-.32t.823.32q.32.357.32.822t-.32.82z","SOCCER_BALL_O":"M21.75-34.857L32-42.287l10.25 7.43-3.893 12H25.68zM32-64q6.5 0 12.43 2.536t10.213 6.82 6.82 10.215T64-32t-2.536 12.43-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64zm22.107 48.214Q59.43-23.036 59.43-32v-.107l-3.644 3.178-8.572-8 2.25-11.534 4.786.428q-5.357-7.357-13.893-10.07l1.893 4.427L32-48l-10.25-5.68 1.893-4.427q-8.536 2.714-13.893 10.07l4.82-.427 2.216 11.535-8.572 8-3.643-3.177V-32q0 8.964 5.323 16.214l1.07-4.714 11.644 1.43L27.57-8.43l-4.14 2.466Q27.606-4.57 32-4.57t8.57-1.394L36.43-8.43l4.963-10.64 11.643-1.43z","TTY":"M16-17.143v6.857q0 .5-.32.822t-.823.32H8q-.5 0-.82-.32t-.323-.822v-6.857q0-.5.322-.82t.82-.323h6.857q.5 0 .822.322t.32.82zM9.143-30.857V-24q0 .5-.322.82t-.82.323H1.143q-.5 0-.822-.322T0-24v-6.857q0-.5.32-.822t.823-.32H8q.5 0 .82.32t.323.823zm20.57 13.714v6.857q0 .5-.32.822t-.822.32h-6.856q-.5 0-.82-.32t-.323-.822v-6.857q0-.5.323-.82t.82-.323h6.858q.5 0 .823.322t.32.82zm-6.856-13.714V-24q0 .5-.32.82t-.823.323h-6.857q-.5 0-.82-.322t-.323-.82v-6.857q0-.5.322-.822t.82-.32h6.858q.5 0 .822.32t.32.823zm-20.5-5.714q-1 0-1.678-.68T0-38.893V-43.5h18.357v4.607q0 .964-.678 1.643t-1.644.68H2.356zM43.43-17.144v6.857q0 .5-.323.822t-.82.32h-6.858q-.5 0-.823-.32t-.32-.822v-6.857q0-.5.32-.82t.822-.323h6.856q.5 0 .82.322t.323.82zm-6.86-13.714V-24q0 .5-.32.82t-.82.323h-6.86q-.5 0-.82-.322t-.32-.82v-6.857q0-.5.32-.822t.82-.32h6.86q.5 0 .82.32t.32.823zm20.573 13.714v6.857q0 .5-.322.822t-.82.32h-6.857q-.5 0-.822-.32t-.32-.822v-6.857q0-.5.32-.82t.823-.323H56q.5 0 .82.322t.323.82zm-6.857-13.714V-24q0 .5-.322.82t-.82.323h-6.858q-.5 0-.822-.322t-.32-.82v-6.857q0-.5.32-.822t.822-.32h6.857q.5 0 .82.32t.323.823zM64-45.43v.466H45.643v-.357q0-3.716-13.643-3.644-13.643.035-13.643 3.643v.356H0v-.465q0-.606.304-1.534t1.214-2.286 2.34-2.696 3.946-2.715 5.714-2.41 8-1.698T32-59.428t10.464.66 8 1.697 5.732 2.41 3.947 2.714 2.34 2.696 1.213 2.286T64-45.43zm0 14.573V-24q0 .5-.32.82t-.823.323H56q-.5 0-.82-.322t-.323-.82v-6.857q0-.5.322-.822T56-32h6.857q.5 0 .822.32t.32.823zM64-43.5v4.607q0 .964-.68 1.643t-1.64.68H47.963q-.964 0-1.643-.68t-.677-1.643V-43.5H64z","BINOCULARS":"M25.143-52.57v27.427q0 .93-.68 1.607t-1.606.68v20.57q0 .93-.678 1.607T20.57 0H2.287Q1.356 0 .68-.68T0-2.285V-20.57l8.893-31.18q.25-.82 1.107-.82h15.143zm11.428 0v25.14h-9.14v-25.14h9.14zm27.43 32v18.284q0 .93-.68 1.607T61.715 0H43.43q-.93 0-1.61-.68t-.677-1.606v-20.57q-.93 0-1.607-.68t-.68-1.607V-52.57H54q.857 0 1.107.82zM26.286-62.858v8H13.714v-8q0-.5.322-.822t.82-.32h10.287q.5 0 .82.32t.323.823zm24 0v8H37.714v-8q0-.5.322-.822t.82-.32h10.287q.5 0 .82.32t.323.823z","PLUG":"M62.68-47.82Q64-46.5 64-44.608t-1.32 3.25L48.356-27.07l5.357 5.356L48-16q-5.82 5.82-13.91 6.66t-14.697-3.59L6.463 0H0v-6.464l12.93-12.93Q8.5-26 9.34-34.088T16-48l5.714-5.714 5.357 5.357L41.358-62.68Q42.714-64 44.607-64t3.214 1.32 1.323 3.234-1.322 3.232l-14.284 14.32 8.357 8.358 14.32-14.285q1.358-1.323 3.25-1.323t3.216 1.322z","SLIDESHARE":"M31.18-37.57q0 2.963-2.27 5.088t-5.446 2.125-5.446-2.125-2.268-5.09q0-3 2.268-5.107t5.446-2.106 5.447 2.107 2.27 5.11zm17.927 0q0 2.963-2.25 5.088t-5.464 2.125q-3.18 0-5.447-2.125t-2.267-5.09q0-3 2.266-5.107t5.447-2.106q3.214 0 5.464 2.107t2.25 5.11zm8.036 6.427v-23.82q0-3.108-1.143-4.412t-3.964-1.304H12.32q-2.963 0-4.016 1.216t-1.054 4.5v24.035q1.536.823 3.16 1.43t2.894 1 2.892.66 2.536.394 2.5.142 2.09.018 2.017-.07 1.59-.073q2.427-.034 3.39.966.216.214.36.32.927.894 2.177 1.823.25-3.25 4.214-3.11.18 0 1.305.055t1.536.07 1.626.037 1.893-.036 1.945-.16 2.18-.304 2.213-.482 2.393-.696 2.41-.965 2.573-1.233zm5.82-.178q-4.32 5.32-13.284 9 3 10.177-.823 16.606Q46.5-1.68 42.32-.43q-3.713 1.144-6.5-.534-3.07-1.822-2.927-5.857l-.036-11.644v-.036q-.286-.07-.875-.214t-.84-.18L31.108-6.82q.143 4.07-2.964 5.856Q25.32.714 21.607-.43q-4.178-1.284-6.5-5.356-3.75-6.428-.786-16.535-8.963-3.68-13.284-9-.893-1.323-.143-2.25t2.143.034q.107.072.393.25t.39.286v-24.786q0-2.57 1.68-4.393T9.57-64h44.894q2.393 0 4.072 1.82t1.678 4.394V-33l.75-.536q1.393-.964 2.143-.035t-.143 2.25z","TWITCH":"M32-48.5V-33h-5.18v-15.5H32zm14.214 0V-33h-5.178v-15.5h5.178zm0 27.143l9.036-9.072v-28.39H12.607v37.463H24.25v7.75l7.75-7.75h14.214zM60.43-64v36.18l-15.5 15.5H33.285l-7.75 7.75h-7.75v-7.75H3.57v-41.36L7.465-64H60.43z","YELP":"M27.607-16.893v4.536Q27.57-1.93 27.393-1.464 26.963-.32 25.57-.036q-1.927.322-6.48-1.357T13.285-4.57q-.465-.537-.607-1.287-.037-.43.14-.93.144-.356 1.216-1.677T20.5-16.18q.036 0 2.143-2.5.536-.677 1.41-.874t1.768.125q.86.36 1.34 1.037t.447 1.5zm-5.32-8.964q-.108 1.964-1.858 2.5l-4.287 1.393Q6.32-18.82 5.713-18.82q-1.25-.073-1.927-1.287-.43-.893-.607-2.68-.287-2.713.034-5.945t1.072-4.447 2-1.14q.464 0 7.214 2.75 2.5 1.034 4.107 1.677l3 1.214q.822.323 1.268 1.09t.41 1.733zm29.5 10.607q-.25 1.93-3.27 5.75T43.68-4.964q-1.323.5-2.25-.25-.5-.357-6.573-10.25l-1.678-2.75q-.5-.75-.412-1.643t.696-1.643q1.25-1.536 2.965-.93.034.037 4.25 1.43 7.25 2.357 8.64 2.84t1.68.73q1 .787.786 2.18zm-24-22.57q.177 3.64-1.93 4.356-2.07.607-4.07-2.536l-13.5-21.357q-.287-1.25.677-2.214 1.465-1.537 7.41-3.198t8.02-1.125q1.427.357 1.75 1.607.106.643.785 10.91t.856 13.555zm23.642 3.856q.106 1.393-.93 2.107-.536.357-11.75 3.07-2.393.537-3.25.823l.036-.072q-.822.215-1.643-.143t-1.322-1.14q-1.07-1.68 0-3.11.037-.034 2.68-3.64 4.464-6.11 5.357-7.287t1.214-1.393q1-.68 2.323-.07 1.714.82 4.393 4.766t2.893 5.983v.106z","NEWSPAPER_O":"M36.57-45.714H22.858V-32H36.57v-13.714zm4.573 22.857v4.57H18.286v-4.57h22.857zm0-27.43v22.858H18.286v-22.856h22.857zM64-22.856v4.57H45.714v-4.57H64zM64-32v4.57H45.714V-32H64zm0-9.143v4.572H45.714v-4.573H64zm0-9.143v4.572H45.714v-4.572H64zM9.143-16v-34.286H4.57V-16q0 .93.68 1.607t1.607.68 1.607-.68.68-1.607zm59.428 0v-38.857H13.715V-16q0 1.18-.393 2.286h52.966q.928 0 1.607-.68T68.57-16zm4.573-43.43V-16q0 2.857-2 4.857t-4.857 2H6.856q-2.856 0-4.856-2T0-16v-38.857h9.143v-4.572h64z","WIFI":"M36.57-9.607q-.713 0-3.32-2.625t-2.607-3.34q0-1.142 2.232-1.928t3.696-.786 3.698.786 2.232 1.93q0 .713-2.607 3.338T36.57-9.607zm9.644-9.68q-.07 0-1.428-.892t-3.625-1.784-4.59-.893-4.588.893-3.607 1.785-1.446.894q-.644 0-3.34-2.678t-2.697-3.322q0-.464.357-.82 2.786-2.75 7-4.323T36.57-32t8.323 1.57 7 4.323q.357.357.357.82 0 .644-2.696 3.323t-3.34 2.678zM55.964-29q-.393 0-.82-.286-4.858-3.75-9-5.518T36.57-36.57q-3.034 0-6.088.784t-5.32 1.893-4.055 2.214-2.82 1.894-1.108.786q-.61 0-3.287-2.68T11.213-35q0-.43.358-.786Q16.287-40.5 23-43.106t13.57-2.608 13.573 2.607 11.428 7.32q.36.358.36.787 0 .643-2.68 3.32T55.964-29zm9.68-9.68q-.394 0-.787-.32-6.393-5.607-13.268-8.446t-15.02-2.84-15.016 2.84T8.286-39q-.393.32-.786.32-.607 0-3.304-2.677T1.5-44.68q0-.463.357-.82 6.68-6.643 15.893-10.286t18.82-3.643 18.823 3.644T71.286-45.5q.357.357.357.82 0 .644-2.697 3.323t-3.303 2.678z","CALCULATOR":"M13.714-9.143q0-1.893-1.34-3.232t-3.23-1.34-3.233 1.34-1.34 3.232T5.91-5.91t3.233 1.34 3.232-1.34 1.34-3.233zm13.715 0q0-1.893-1.34-3.232t-3.233-1.34-3.232 1.34-1.34 3.232 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.233zM13.713-22.857q0-1.893-1.34-3.232t-3.23-1.34-3.233 1.34-1.34 3.233 1.34 3.232 3.233 1.34 3.232-1.34 1.34-3.232zm27.43 13.714q0-1.893-1.34-3.232t-3.233-1.34-3.23 1.34T32-9.143t1.34 3.232 3.23 1.34 3.234-1.34 1.34-3.233zM27.428-22.857q0-1.893-1.34-3.232t-3.233-1.34-3.232 1.34-1.34 3.233 1.34 3.232 3.232 1.34 3.232-1.34 1.34-3.232zM13.713-36.57q0-1.894-1.34-3.234t-3.23-1.34-3.233 1.34-1.34 3.233 1.34 3.23T9.144-32t3.232-1.34 1.34-3.23zm27.43 13.713q0-1.893-1.34-3.232t-3.233-1.34-3.23 1.34T32-22.856t1.34 3.232 3.23 1.34 3.234-1.34 1.34-3.232zM27.428-36.57q0-1.894-1.34-3.234t-3.233-1.34-3.232 1.34-1.34 3.233 1.34 3.23T22.857-32t3.232-1.34 1.34-3.23zM54.856-9.144v-13.714q0-1.857-1.357-3.214t-3.214-1.36-3.215 1.36-1.356 3.213v13.714q0 1.857 1.357 3.214t3.216 1.36T53.5-5.93t1.357-3.213zM41.143-36.57q0-1.894-1.34-3.234t-3.232-1.34-3.23 1.34T32-36.57t1.34 3.23T36.57-32t3.234-1.34 1.34-3.23zM54.857-48v-9.143q0-.928-.678-1.607t-1.61-.68H6.858q-.928 0-1.607.68t-.68 1.607V-48q0 .93.68 1.607t1.607.68H52.57q.93 0 1.61-.68T54.856-48zm0 11.43q0-1.894-1.34-3.234t-3.23-1.34-3.233 1.34-1.34 3.233 1.34 3.23T50.286-32t3.232-1.34 1.34-3.23zm4.572-22.86v54.86q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-54.86q0-1.856 1.357-3.213T4.57-64h50.287q1.857 0 3.214 1.357t1.36 3.214z","PAYPAL":"M54.25-40.93q.643 3-.143 7.287Q51-17.786 33.93-17.786h-1.573q-.893 0-1.57.59t-.858 1.517l-.144.68L27.82-2.643l-.07.536q-.18.928-.875 1.518t-1.59.59h-8.964q-.75 0-1.177-.536T14.82-1.82q.323-2 .948-6t.946-6 .965-5.984.963-5.982q.178-1.32 1.536-1.32h4.677q4.75.07 8.43-.75 6.25-1.394 10.25-5.144 3.642-3.393 5.534-8.786.86-2.5 1.25-4.75.037-.214.09-.268t.126-.035.214.126q2.82 2.107 3.5 5.785zM48.107-51q0 3.82-1.643 8.43-2.857 8.32-10.785 11.25-4.037 1.427-9 1.5 0 .034-3.216.034l-3.214-.035q-3.57 0-4.214 3.427-.072.286-3.036 18.93-.036.356-.43.356H2.037q-.786 0-1.304-.59T.322-9.07l8.285-52.537q.18-1.036.982-1.714t1.84-.68h21.356q1.214 0 3.482.464t3.982 1.143Q44.07-60.93 46.09-58t2.017 7z","GOOGLE_WALLET":"M21.5-43.036q.68 2.18 1.107 4.41t.607 5.055-.5 5.677-2.214 5.18q-.75-2.894-2.393-5.608t-3.41-4.537-3.536-3.232-2.803-2.053-1.178-.678q-2.216-1.216-2.912-3.573t.518-4.57 3.607-2.912 4.607.518q4.93 2.964 8.5 6.32zm11.607-10.25q.393.893.732 1.643t1.303 3.59 1.518 5.374.91 6.412 0 7.34-1.695 7.482T32.107-14q-1.82 2.57-4.928 2.57-1.93 0-3.5-1.106-2.037-1.428-2.466-3.893t1-4.534Q24.357-24 25.107-27.93t.464-7.124-1.14-6.446-1.394-4.57-.786-1.86q-1.107-2.25-.304-4.624T25-56.036q1.214-.607 2.68-.607 1.677 0 3.16.893t2.267 2.464zM44.57-29.393Q43.965-23.68 42-18.286q-.607-4.678-2.25-8.785.893-6.216-.18-12.894-.963-6.357-3.356-12.215 4.072 3.216 7.572 7.537.32 1.322.535 2.857.93 6.393.25 12.393zm9.716-31.178q.32.606.84 1.766t1.553 4.197 1.802 6.357 1.214 8.125.18 9.607-1.68 10.714T54.18-8.25q-.787 1.714-2.36 2.696t-3.39.983q-1.394 0-2.644-.573-2.393-1.107-3.304-3.57t.16-4.858q2.072-4.5 3.215-9.198t1.34-8.553-.126-7.626-.945-6.447-1.375-4.946-1.16-3.214-.554-1.16q-1.215-2.322-.41-4.84t3.124-3.732Q47.07-64 48.643-64q1.75 0 3.268.91t2.376 2.52z","CC_VISA":"M70.536-28.643h-4.93q.5-1.32 2.358-6.393l.107-.32q.144-.358.36-.93t.32-.928l.43 1.964zm-51.572-2.32L16.894-41.5q-.394-1.93-2.68-1.93h-9.57l-.073.466q11.11 2.82 14.394 12zm6.393-12.466L19.57-27.785l-.606-3.178q-.928-2.5-3.035-4.625t-4.68-3.16l4.82 18.214h6.25l9.323-22.893h-6.286zM30.32-20.5h5.93l3.714-22.93h-5.928zm27.43-22.357q-2.464-.964-5.32-.964-4.394 0-7.18 2.106t-2.82 5.464q-.037 3.643 5.177 6.214 1.714.822 2.393 1.465t.68 1.39q0 1.073-1.073 1.644t-2.464.572q-3.072 0-5.572-1.18l-.784-.392-.822 5.143q2.643 1.214 6.607 1.214 4.644.037 7.448-2.106T56.893-28q0-3.786-5-6.214-1.75-.893-2.536-1.5t-.786-1.357q0-.787.876-1.376t2.518-.59q2.5-.035 4.43.857l.535.287zm15.18-.572h-4.573q-2.32 0-3.107 1.93l-8.786 21h6.215l1.25-3.43h7.57q.18.787.714 3.43h5.5zm9.356-11.427v45.714q0 1.857-1.357 3.214t-3.216 1.36H4.57q-1.856 0-3.213-1.36T0-9.142v-45.714q0-1.857 1.357-3.214t3.214-1.36h73.144q1.857 0 3.215 1.36t1.356 3.213z","CC_MASTERCARD":"M23.964-30.68H23.5q-1.68 0-1.68 1.144 0 .786.716.786.607 0 1-.536t.428-1.393zm14.107-1.284h2.216v-.107q.035-.144.018-.234t-.036-.25-.072-.285-.16-.23-.268-.18-.41-.07q-1 0-1.287 1.356zm19.287 1.285h-.428q-1.716 0-1.716 1.144 0 .786.715.786.606 0 1-.536t.427-1.393zm11.393-.927q0-1.464-1.07-1.464-.68 0-1.11.713t-.427 1.82q0 1.5 1 1.5.714 0 1.16-.713t.447-1.857zm-51.607-5.036h3.107l-1.57 9.357h-2l1.14-7.178-2.534 7.178h-1.393l-.143-7.143-1.214 7.144h-1.893l1.57-9.357h2.894l.072 5.822zm9.036 3.822q0 .213-.144 1.5-.572 3.606-.607 4.034h-1.68l.036-.785q-.715.927-2.072.927-.82 0-1.34-.57t-.517-1.5q0-1.394.93-2.162t2.606-.768q.5 0 .82.036 0-.107.02-.197t.035-.16.018-.107q0-.716-1.286-.716-1.036 0-2.107.357 0-.14.25-1.713 1.357-.393 2.393-.393 2.643 0 2.643 2.215zm5.57-2.073l-.286 1.75Q30.68-33.25 30-33.25q-.964 0-.964.607 0 .286.16.43t.768.392q1.43.677 1.43 2.14 0 2.573-3.108 2.537-1.215 0-2.072-.214 0-.072.25-1.75 1.036.286 1.822.286 1.143 0 1.143-.68 0-.25-.162-.41t-.768-.447q-1.536-.714-1.536-2.107 0-2.572 3-2.572 1.072 0 1.786.143zm3.143 0h1l-.25 1.857h-1.036q-.07.607-.232 1.447t-.25 1.376-.09.643q0 .57.68.57.285 0 .57-.07L35-27.394q-.75.25-1.43.25-1.534 0-1.606-1.678 0-.43.286-2 .107-.716.893-5.216h1.964zm7.25 2.607q0 .822-.25 1.857H37.93q-.11.787.356 1.18t1.357.393q1.07 0 2.07-.5l-.32 1.928q-1.072.287-2.036.287-3.393 0-3.393-3.393 0-1.964.982-3.232t2.483-1.268q1.25 0 1.98.75t.733 2zm4.964-2.643q-.464.823-.786 2.216-.784-.072-1.106.857t-.893 4.57h-2l.11-.5q.784-4.642 1.034-7.106h1.822l-.107 1.18q.5-.75.91-1.055t1.017-.16zm6.68-1.463l-.323 2.036q-1-.5-1.785-.5-1.11 0-1.823.982t-.714 2.518q0 1.07.482 1.678t1.375.61q.75 0 1.714-.466l-.357 2.107q-1 .287-1.786.287-1.606 0-2.552-1.09t-.947-2.946q0-2.5 1.27-4.088t3.267-1.59q.93 0 2.18.465zm5.784 3.572q0 .64-.14 1.5-.466 2.82-.61 4.034h-1.64l.034-.785q-.714.927-2.107.927-.82 0-1.32-.57t-.5-1.5q0-1.394.91-2.162t2.59-.768q.534 0 .82.036.072-.25.072-.464 0-.716-1.287-.716-1.036 0-2.107.357 0-.14.285-1.713 1.36-.393 2.394-.393 2.607 0 2.607 2.215zm5.037-2.11q-.5.86-.75 2.216-.82-.072-1.125.82t-.91 4.608h-2l.107-.5q.677-3.714 1.034-7.107h1.857q0 .393-.14 1.18.534-.75.945-1.055t.982-.16zm5.036-1.713h2l-1.536 9.357h-1.893l.107-.678q-.82.82-1.856.82-1.107 0-1.768-.856t-.66-2.286q0-1.893.982-3.285t2.303-1.394q1.11 0 1.894 1.035zM73.607-32q0-5.286-2.59-9.75t-7.07-7.07-9.768-2.61q-6.466 0-11.716 3.93Q47-43.357 48.57-37.357h-1.784q-1.572-5.357-5.643-9.036-4.072 3.68-5.643 9.036h-1.786q1.572-6 6.107-10.143-5.25-3.93-11.713-3.93-5.286 0-9.768 2.61t-7.072 7.07T8.678-32t2.59 9.75 7.07 7.07 9.77 2.61q6.463 0 11.713-3.93-4.284-3.964-5.89-9.43h1.784q1.643 4.93 5.43 8.323Q44.928-21 46.57-25.93h1.787q-1.607 5.466-5.893 9.43 5.25 3.93 11.715 3.93 5.284 0 9.766-2.61t7.072-7.07 2.59-9.75zm8.68-22.857v45.714q0 1.857-1.358 3.214t-3.216 1.36H4.57q-1.856 0-3.213-1.36T0-9.142v-45.714q0-1.857 1.357-3.214t3.214-1.36h73.144q1.857 0 3.215 1.36t1.356 3.213z","CC_DISCOVER":"M11.18-36.25q0 1.82-1.287 3-1.036.93-3.18.93h-.606v-7.86h.607q2.18 0 3.18.966 1.285 1.107 1.285 2.964zm63.427-2.32q0 1.856-2.286 1.856h-.677v-3.607h.714q2.25 0 2.25 1.75zM13.57-36.25q0-2.643-1.784-4.304t-4.607-1.66H3.785v11.893H7.18q2.64 0 4.25-1.36 2.14-1.82 2.14-4.57zm1.073 5.93h2.32v-11.894h-2.32v11.893zm11.428-3.61q0-1.427-.73-2.213t-2.697-1.5q-1.036-.357-1.41-.678t-.376-.823q0-.57.482-.946t1.23-.374q1.037 0 1.894.964l1.215-1.57q-1.466-1.323-3.5-1.323-1.573 0-2.644.982T18.464-39q0 1.25.643 1.982t2.286 1.304q1.32.464 1.607.678.68.43.68 1.215 0 .713-.5 1.195t-1.287.482q-1.714 0-2.536-1.57l-1.5 1.427Q19.43-30 21.964-30q1.822 0 2.965-1.09t1.14-2.84zM36-30.713v-2.75q-1.32 1.32-2.786 1.32-1.75 0-2.875-1.16t-1.126-2.946q0-1.714 1.125-2.91t2.767-1.197q1.536 0 2.893 1.357v-2.75q-1.43-.714-2.857-.714-2.643 0-4.482 1.803t-1.84 4.41 1.823 4.41 4.464 1.804q1.5 0 2.893-.678zm44 21.57v-18.82q-2.32 1.428-5.16 3t-8.483 4.178-11.768 4.91-14.91 4.805-18 4.213h56.034q.93 0 1.607-.68T80-9.142zM49.607-36.178q0-2.677-1.893-4.57t-4.57-1.893-4.573 1.893-1.89 4.57 1.89 4.573 4.573 1.893 4.57-1.893 1.894-4.572zm5.43 6.18l5.142-12.214h-2.537l-3.214 8-3.18-8h-2.536L53.786-30h1.25zm6.177-.32h6.572v-2h-4.25v-3.216h4.107v-2h-4.107v-2.643h4.25v-2.034h-6.572v11.893zm13.965 0h2.856l-3.75-5Q77-35.894 77-38.68q0-1.677-1.107-2.606t-3.107-.928H69.32v11.893h2.323v-4.75h.32zm7.106-24.323v45.286q0 2-1.375 3.393T77.57-4.57H4.715q-1.964 0-3.34-1.394T0-9.357v-45.286q0-2 1.375-3.393t3.34-1.393H77.57q1.966 0 3.34 1.394t1.376 3.393z","CC_AMEX":"M4.25-39.643h3.18L5.82-43.5zm22.18 18.786l2.64-2.822-2.5-2.82h-5.82v1.75h5.07v1.964h-5.07v1.93h5.68zm5.64-2.786l3.537 3.93v-7.75zm10.287-1.678q0-1.18-1.428-1.18h-3v2.464h2.963q1.464 0 1.464-1.285zm10.322-.144q0-1.036-1.5-1.036h-2.93v2.18h2.893q1.536 0 1.536-1.144zm-9.93-16.643q0-1.036-1.5-1.036h-2.93V-41h2.894q1.536 0 1.536-1.107zm16.393 2.464h3.178L60.75-43.5zm-34.18-5.536v9.68h-2.356v-7.57L19.25-35.5h-2.036l-3.357-7.57v7.57H9.143l-.893-2.143H3.43L2.535-35.5h-2.5l4.143-9.68h3.427l3.93 9.18v-9.18h3.784l3.037 6.573 2.75-6.572h3.857zm19.858 19.86q0 .713-.195 1.25t-.5.89-.804.59-.927.358-1.125.16-1.125.036-1.16-.018-1.054-.017v3.25h-4.5l-2.86-3.216-2.963 3.215h-9.143v-9.68h9.286l2.857 3.18 2.93-3.18h7.392q3.89 0 3.89 3.18zM34.43-37.5v2h-7.75v-9.68h7.75v2.037H29v1.75h5.286v1.964H29v1.93h5.43zm47.856 19.964v8.18q0 1.963-1.375 3.374t-3.34 1.41H4.715q-1.964 0-3.34-1.41T0-9.357V-33.57h3.964l.893-2.18H6.82l.894 2.18H15.5v-1.644l.68 1.643h4.034l.715-1.68v1.68h19.32v-3.537l.357-.036q.357 0 .357.5v3.072h9.965v-.823q.82.43 1.963.643t1.875.232 2.25-.018 1.84-.035l.892-2.18h2l.893 2.18h8.107v-2.073l1.214 2.072h6.5v-13.5h-6.428v1.57l-.893-1.57h-6.607v1.57l-.822-1.57H54.82q-2.463 0-3.89.784v-.785h-6.144v.784q-.857-.785-2.607-.785H19.75l-1.536 3.463-1.535-3.464H9.606v1.57l-.786-1.57H2.787L0-40.68v-13.963q0-1.964 1.375-3.375t3.34-1.41H77.57q1.966 0 3.34 1.41t1.376 3.375v24.214H78q-1.82 0-2.893.787v-.786h-6.32q-1.966 0-2.787.787v-.786H54.714v.787q-1.107-.786-3.107-.786h-7.464v.787q-.822-.786-3.25-.786h-8.357l-1.93 2.073-1.785-2.072H16.358v13.5h12.25l1.964-2.106 1.86 2.107h7.534v-3.177h.75q2.107 0 3.215-.464v3.64h6.213v-3.534h.286q.284 0 .356.07t.07.358v3.107H69.75q2.036 0 3.143-.856v.857h6q2.143 0 3.393-.606zm-27.072-8.357q0 .822-.428 1.536T53.57-23.32q.894.32 1.216.927t.32 1.643v1.93h-2.32v-1.61q0-1.177-.43-1.552t-1.642-.375H48.25v3.536h-2.32v-9.68h5.5q1.713 0 2.75.536t1.034 2.07zM45.32-42.57q0 .856-.445 1.57t-1.196 1.036q.927.32 1.23.91t.304 1.66v1.894h-2.32q0-.32.017-.946t0-.893-.106-.66-.304-.57-.625-.305T40.82-39h-2.5v3.5h-2.284v-9.68l5.464.037q1.75 0 2.786.518t1.035 2.054zm18.894 21.75v2H56.5v-9.68h7.714v2H58.82v1.75h5.287v1.964H58.82v1.93zM49-45.18v9.68h-2.357v-9.68H49zm24.75 23.287q0 3.072-3.643 3.072h-4.5v-2.073h4.5q1.214 0 1.214-.893 0-.57-.606-.75t-1.482-.178-1.768-.125-1.5-.803-.607-1.964q0-1.393.93-2.143t2.356-.75h4.643v2.036h-4.25q-1.286 0-1.286.893 0 .57.625.73t1.5.144 1.75.09 1.5.767.625 1.947zm8.536-1.786v3.61q-.857 1.25-3.143 1.25H74.68v-2.073h4.463q1.178 0 1.178-.893 0-.464-.445-.678t-1.107-.197-1.43-.072-1.427-.286-1.106-.857-.447-1.732q0-1.393.947-2.143t2.375-.75h4.606v2.036H78.07q-1.284 0-1.284.893 0 .713 1.035.784t2.448.18 2.018.927zm-5.893-21.463v9.643h-3.286l-4.357-7.25v7.25h-4.714l-.93-2.143h-4.785l-.89 2.143h-2.68q-4.607 0-4.607-4.75 0-4.93 4.75-4.93h2.25v2.11q-.25 0-1-.037t-1.018-.018-.82.07-.77.234-.517.48-.41.822-.108 1.197q0 1.356.482 2.07t1.768.714h1.036l3.285-7.607h3.466L66.43-36v-9.143h3.534l4.072 6.714v-6.713h2.357z","CC_PAYPAL":"M26.607-31.643q0 1.322-.91 2.197t-2.233.875q-1.035 0-1.66-.573t-.625-1.57q0-1.323.89-2.233t2.216-.91q1 0 1.66.588t.66 1.625zm28.036-5.32q0 1.5-.786 2.034t-2.357.537l-1.143.036.607-3.822q.072-.39.465-.39h.64q.787 0 1.25.07t.894.446.43 1.09zm12.536 5.32q0 1.286-.912 2.18t-2.197.892q-1.034 0-1.677-.573t-.643-1.57q0-1.323.893-2.233t2.214-.91q1 0 1.66.588t.662 1.625zM18.32-37.75q0-2.107-1.374-3.054t-3.59-.946H7.644q-.68 0-.75.68L4.57-26.5q-.034.214.11.393t.356.178H7.75q.714 0 .786-.677l.643-3.93q.034-.284.25-.463t.534-.232.607-.054.68.036.5.036q3.07 0 4.82-1.732t1.75-4.804zm11.037 11.143l1.464-9.322q.037-.213-.106-.39t-.357-.18h-2.714q-.5 0-.607 1.18-.965-1.43-3.393-1.43-2.572 0-4.375 1.93t-1.804 4.534q0 2.107 1.232 3.357T22-25.68q1 0 2.07-.427t1.716-1.143q-.143.43-.143.75 0 .57.464.57h2.464q.68 0 .787-.677zM45.32-36q0-.18-.14-.34t-.323-.16h-2.75q-.393 0-.643.357L37.68-30.57l-1.573-5.36q-.178-.57-.786-.57h-2.677q-.18 0-.322.16t-.14.34q0 .07.695 2.107t1.5 4.393.84 2.5q-2.93 4-2.93 4.286 0 .464.465.464h2.75q.393 0 .643-.357L45.25-35.75q.07-.07.07-.25zm13.573-1.75q0-2.107-1.375-3.054t-3.59-.946H48.25q-.714 0-.786.68l-2.32 14.57q-.037.214.106.393t.357.178h2.93q.427 0 .57-.463l.643-4.143q.036-.285.25-.464t.536-.232.607-.054.678.036.5.036q3.073 0 4.823-1.732t1.75-4.804zM69.93-26.607l1.463-9.322q.036-.213-.107-.39t-.357-.18h-2.716q-.5 0-.607 1.18-.928-1.43-3.393-1.43-2.57 0-4.375 1.93t-1.804 4.534q0 2.107 1.232 3.357t3.303 1.25q1.037 0 2.11-.427t1.677-1.143q0 .036-.07.32t-.073.43q0 .57.465.57h2.463q.678 0 .786-.677zm7.784-14.607v-.036q0-.5-.464-.5h-2.643q-.393 0-.464.393L71.82-26.5l-.034.07q0 .18.143.34t.356.16h2.357q.678 0 .75-.677zM14-36.43q-.18 1.25-.93 1.644t-2.14.393l-1.18.036.607-3.822q.072-.39.464-.39h.68q1.43 0 2.07.41t.43 1.73zm68.286-18.427v45.714q0 1.857-1.357 3.214t-3.216 1.36H4.57q-1.856 0-3.213-1.36T0-9.142v-45.714q0-1.857 1.357-3.214t3.214-1.36h73.144q1.857 0 3.215 1.36t1.356 3.213z","CC_STRIPE":"M57.036-31.75q0 2.464-.75 3.786-.68 1.25-1.857 1.25-.823 0-1.466-.322v-8Q54-36.106 55-36.106q2.036 0 2.036 4.356zm15.643-1.286h-3.93q.214-3.5 2-3.5 1.82 0 1.93 3.5zM17-28.214q0-2.107-1.18-3.268t-3.606-2.054q-1.285-.464-1.857-.857t-.57-.893q0-.928 1.356-.928 2.07 0 4.428 1.178l.644-4q-2.393-1.143-5.32-1.143-2.75 0-4.394 1.36-1.714 1.39-1.714 3.89 0 2.073 1.16 3.234T9.5-29.68q1.393.5 1.946.912t.554.982q0 1.107-1.714 1.107-1.036 0-2.5-.445t-2.572-1.09l-.643 4.036q2.573 1.466 6 1.466 2.894 0 4.61-1.322Q17-25.5 17-28.214zm10.536-7.68l.678-3.963h-3.428v-4.822l-4.607.75-.644 4.073-1.643.286-.607 3.677H19.5v7.822q0 3 1.57 4.284 1.36 1.072 3.966 1.072 1.143 0 2.82-.393v-4.214q-1.142.25-1.57.25-1.5 0-1.5-1.787v-7.036h2.75zM38.82-35v-4.964q-.534-.107-1-.107-1.14 0-1.98.57t-1.197 1.643l-.357-2h-4.68v16.82h5.358v-10.927q.93-1.107 2.93-1.107.57 0 .927.07zm1.323 11.964H45.5v-16.82h-5.357v16.82zm22.214-8.893q0-4.356-1.607-6.39-1.43-1.86-3.964-1.86-2.286 0-4.18 2l-.285-1.677h-4.713v23.036l5.357-.894v-5.393q1.286.393 2.43.393 2.963 0 4.785-2 2.177-2.322 2.177-7.215zM45.643-44.356q0-1.18-.822-2t-2-.822-2 .823-.82 2 .82 2.018 2 .84 2-.84.823-2.017zm32.07 12.75q0-4.036-1.713-6.286-1.786-2.286-5.143-2.286-3.428 0-5.41 2.36t-1.983 6.427q0 4.572 2.25 6.714 1.965 1.966 5.75 1.966 3.607 0 5.715-1.43l-.573-3.677q-2.036 1.106-4.57 1.106-1.537 0-2.25-.68-.823-.677-1-2.356h8.856q.07-.5.07-1.857zm4.573-23.25v45.714q0 1.857-1.357 3.214t-3.216 1.36H4.57q-1.856 0-3.213-1.36T0-9.142v-45.714q0-1.857 1.357-3.214t3.214-1.36h73.144q1.857 0 3.215 1.36t1.356 3.213z","BELL_SLASH":"M55.643-33.57q2.178 12.713 10.643 19.856 0 1.857-1.357 3.214t-3.216 1.357h-16q0 3.786-2.678 6.464T36.57 0t-6.445-2.66-2.696-6.447zM36.57-2.858q.573 0 .573-.572T36.57-4q-2.106 0-3.624-1.518T31.43-9.143q0-.57-.573-.57t-.57.57q0 2.607 1.838 4.447t4.446 1.84zM72.358-60q.286.357.268.84t-.375.803L5.393-.43q-.357.287-.84.25t-.767-.39L.786-4Q.5-4.357.518-4.84t.375-.767l6.643-5.75q-.68-1.143-.68-2.357 1.787-1.5 3.25-3.143t3.037-4.268 2.66-5.66 1.786-7.358.696-9.286q0-5.427 4.178-10.088t10.965-5.66q-.287-.68-.287-1.393 0-1.43 1-2.43t2.428-1T39-63t1 2.43q0 .713-.286 1.39 4.43.644 7.822 2.948t5.285 5.625L67.75-63.57q.357-.287.84-.25t.767.39z","BELL_SLASH_O":"M37.143-3.43q0-.57-.572-.57-2.106 0-3.624-1.518T31.43-9.143q0-.57-.573-.57t-.57.57q0 2.607 1.838 4.447t4.446 1.84q.573 0 .573-.573zm-19.18-16.963l31.323-27.143q-1.5-3.143-4.732-5.232t-7.983-2.09q-3.32 0-6.052 1.126t-4.34 2.875-2.464 3.678-.857 3.75q0 13.716-4.893 23.037zm48.323 6.68q0 1.856-1.357 3.213t-3.216 1.357h-16q0 3.786-2.678 6.464T36.57 0t-6.445-2.66-2.696-6.447l5.32-4.607h27.036q-5.93-6.68-8.107-16.393l3.963-3.464q2.178 12.713 10.643 19.856zm3.07-49.716l3 3.43q.287.357.27.84t-.376.803L5.393-.43q-.357.287-.84.25t-.767-.39L.786-4Q.5-4.357.518-4.84t.375-.767l6.643-5.75q-.68-1.143-.68-2.357 1.787-1.5 3.25-3.143t3.037-4.268 2.66-5.66 1.786-7.358.696-9.286q0-5.427 4.178-10.088t10.965-5.66q-.287-.68-.287-1.393 0-1.43 1-2.43t2.428-1T39-63t1 2.43q0 .713-.286 1.39 4.43.644 7.822 2.948t5.285 5.625L67.75-63.57q.357-.287.84-.25t.767.39z","TRASH":"M18.286-14.857V-40q0-.5-.322-.82t-.82-.323h-2.287q-.5 0-.82.322t-.323.82v25.143q0 .5.322.82t.82.323h2.287q.5 0 .82-.322t.323-.82zm9.143 0V-40q0-.5-.323-.82t-.82-.323H24q-.5 0-.82.322t-.323.82v25.143q0 .5.322.82t.82.323h2.286q.5 0 .82-.322t.323-.82zm9.14 0V-40q0-.5-.32-.82t-.82-.323h-2.287q-.5 0-.822.322T32-40v25.143q0 .5.32.82t.823.323h2.286q.5 0 .82-.322t.32-.82zm-19.427-35.43h16l-1.714-4.177q-.25-.322-.61-.393H19.5q-.357.07-.607.393zm33.143 1.144v2.286q0 .5-.322.82t-.82.323h-3.43v33.857q0 2.964-1.678 5.125T40-4.572H10.286q-2.357 0-4.036-2.09t-1.68-5.052v-34H1.144q-.5 0-.822-.322t-.32-.82v-2.287q0-.5.32-.82t.823-.323H12.18l2.5-5.964q.534-1.32 1.927-2.25t2.822-.93h11.427q1.43 0 2.822.93t1.927 2.25l2.5 5.964h11.036q.5 0 .82.322t.323.82z","COPYRIGHT":"M41.07-25.643v3.893q0 1.786-1.302 3.18t-3.357 2.16-4.214 1.16-4.196.393q-7.32 0-12.232-4.964t-4.91-12.36q0-7.25 4.856-12.106t12.107-4.857q1.216 0 2.698.16t3.32.644 3.305 1.215 2.464 2.018 1 2.893v3.893q0 .57-.57.57H35.82q-.57 0-.57-.57v-2.5q0-1.537-2.34-2.412T28-44.107q-5 0-8.16 3.268t-3.16 8.483q0 5.393 3.266 8.91t8.34 3.518q2.428 0 4.928-.856t2.5-2.357v-2.5q0-.25.16-.41t.376-.16h4.25q.214 0 .393.16t.178.41zM27.43-54.857q-4.644 0-8.876 1.82t-7.286 4.876-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82 8.874-1.82 7.285-4.875 4.874-7.285T50.286-32t-1.822-8.875-4.875-7.286-7.286-4.876-8.875-1.82zM54.856-32q0 7.464-3.678 13.768T41.195-8.25 27.43-4.57 13.66-8.25t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68 13.766 3.68 9.983 9.982T54.856-32z","AT":"M34.714-36.32q0-3.86-1.91-6.037t-5.268-2.18q-2.25 0-4.43 1.09t-3.927 3.018-2.84 4.894-1.09 6.43q0 4 1.91 6.177t5.376 2.18q3.428 0 6.285-2.375t4.376-5.93 1.518-7.266zM54.857-32q0 3.964-1.32 7.036t-3.52 4.82-4.696 2.662-5.177.982q-.214 0-.554.018t-.59.018q-3.393 0-5.07-1.893-1-1.18-1.18-2.964-1.857 2.356-4.696 3.927t-6.197 1.572q-5.75 0-8.91-3.412t-3.16-9.625q0-5.607 2.356-10.357t6.393-7.518T27.32-49.5q3.11 0 5.537 1.268t3.786 3.553l.07-.677.394-2q.036-.214.197-.43t.34-.213h4.213q.18 0 .464.393.18.178.11.57l-4.287 21.93q-.18.857-.18 1.714 0 1.393.448 1.857t1.59.465q1-.037 2.036-.198t2.607-.857 2.75-1.786 2.036-3.197.856-4.893q0-10.43-6.215-16.643t-16.64-6.214q-4.644 0-8.876 1.82t-7.286 4.876-4.875 7.285T4.57-32t1.823 8.875 4.875 7.286 7.286 4.876 8.875 1.82q8.14 0 14.463-5.142.393-.32.857-.285t.75.427l1.464 1.75q.286.43.25.857-.07.465-.428.786-3.643 2.964-8.125 4.57t-9.23 1.61q-5.573 0-10.644-2.18t-8.75-5.857-5.857-8.75T0-32t2.18-10.643 5.856-8.75 8.75-5.857 10.643-2.18q12.284 0 19.856 7.573T54.856-32z","EYEDROPPER":"M60.643-60.643Q64-57.286 64-52.553T60.643-44.5l-8.036 7.964 3.714 3.715q.36.356.36.82t-.36.82l-7.5 7.5q-.356.36-.82.36t-.82-.36l-3.75-3.75L21.892-5.892Q20.57-4.57 18.68-4.57h-7.25L2.285 0 0-2.286l4.57-9.143v-7.25q0-1.89 1.323-3.213L27.43-43.43l-3.75-3.75q-.36-.356-.36-.82t.36-.82l7.5-7.5q.356-.36.82-.36t.82.36l3.716 3.713 7.964-8.036Q47.82-64 52.554-64t8.09 3.357zM18.286-11.43L38.856-32 32-38.857l-20.57 20.57v6.858h6.856z","PAINT_BRUSH":"M57.68-64q2.5 0 4.374 1.66t1.875 4.16q0 2.25-1.61 5.394Q50.465-30.32 45.715-25.93q-3.464 3.25-7.785 3.25-4.5 0-7.734-3.302t-3.232-7.84q0-4.57 3.286-7.57l22.786-20.68Q55.143-64 57.68-64zM25.213-27.07q1.393 2.713 3.804 4.64t5.375 2.716l.036 2.535q.14 7.61-4.626 12.394T17.357 0Q12.964 0 9.57-1.66T4.126-6.215t-3.09-6.536T0-20.607q.25.178 1.464 1.07t2.215 1.59 2.106 1.304 1.643.607q1.463 0 1.963-1.32.893-2.358 2.053-4.02t2.483-2.713 3.14-1.696 3.68-.91 4.464-.375z","BIRTHDAY_CAKE":"M64-13.714V0H0v-13.714q1.607 0 3.036-.5t2.107-.982 1.678-1.34q1.073-.964 1.84-1.357t2.02-.393 1.98.393 1.876 1.357q1.035.893 1.678 1.357t2.072.966 3.07.5q1.608 0 3.037-.518t2.07-.964 1.716-1.34q.75-.678 1.16-.964t1.106-.536 1.554-.25q1.25 0 2.018.393t1.84 1.357q1 .857 1.678 1.34t2.107.982 3.036.5 3.034-.5 2.107-.982 1.68-1.34q1.07-.964 1.84-1.357t2.017-.393q1.214 0 1.982.393t1.84 1.357q1 .857 1.677 1.34t2.107.982 3.036.5zm0-11.43v6.858q-1.25 0-1.982-.393t-1.875-1.356q-1.036-.893-1.68-1.357t-2.07-.964-3.036-.5q-1.643 0-3.07.5t-2.073.964-1.678 1.357q-.786.68-1.18.965t-1.106.534-1.57.25q-1.25 0-2.02-.393t-1.84-1.356q-1.034-.893-1.677-1.357t-2.072-.964-3.07-.5q-1.607 0-3.036.518t-2.07.965-1.715 1.34q-.75.678-1.162.964t-1.107.534-1.553.25q-1.25 0-2.018-.393t-1.84-1.356q-1-.857-1.68-1.34t-2.106-.98-3.035-.5q-1.644 0-3.073.5t-2.07.963-1.68 1.357q-1.07.965-1.84 1.357T0-18.285v-6.857Q0-28 2-30t4.857-2h2.286v-16h9.143v16h9.143v-16h9.14v16h9.144v-16h9.143v16h2.286Q60-32 62-30t2 4.857zM18.286-56q0 2.75-1.286 4.232t-3.286 1.482q-1.893 0-3.232-1.34t-1.34-3.23q0-1.037.34-1.823t.84-1.213 1.107-1 1.106-1.125.84-1.59.338-2.392q1.357 0 2.965 2.643T18.285-56zm18.285 0q0 2.75-1.284 4.232T32-50.286q-1.893 0-3.232-1.34t-1.34-3.23q0-1.037.34-1.823t.84-1.213 1.106-1 1.107-1.125.84-1.59T32-64q1.357 0 2.964 2.643T36.57-56zm18.287 0q0 2.75-1.286 4.232t-3.284 1.482q-1.893 0-3.232-1.34t-1.34-3.23q0-1.037.34-1.823t.84-1.213 1.106-1 1.107-1.125.84-1.59.34-2.392q1.356 0 2.963 2.643T54.857-56z","AREA_CHART":"M73.143-9.143v4.572H0v-54.86h4.57v50.287h68.573zM59.43-45.713l9.14 32H9.144v-20.573l16-20.57 20.57 20.57z","PIE_CHART":"M27.43-32.214l19.5 19.5q-3.787 3.857-8.84 6T27.43-4.57q-7.466 0-13.77-3.68t-9.98-9.982T0-32t3.68-13.768 9.98-9.982 13.77-3.68v27.216zm6.677.214h27.607q0 5.607-2.143 10.66t-6 8.84zm25.322-4.57H32V-64q7.464 0 13.768 3.68t9.982 9.98 3.68 13.77z","LINE_CHART":"M73.143-9.143v4.572H0v-54.86h4.57v50.287h68.573zm-4.572-44.57v15.534q0 .75-.695 1.055t-1.268-.268l-4.32-4.32-22.608 22.606q-.36.357-.823.357t-.82-.357l-8.323-8.322-14.857 14.86L8-19.43l20.893-20.89q.357-.36.82-.36t.823.36l8.32 8.32L55.43-48.57l-4.323-4.323q-.57-.57-.268-1.268t1.053-.697H67.43q.5 0 .82.32t.32.823z","LASTFM":"M46.143-38.857q0 .214.357 1.464.357 1.036.893 1.768t1.464 1.214 1.572.714 1.963.59Q64-29.857 64-21.25q0 5.214-3.768 8.66t-9.09 3.447q-2.106 0-3.98-.66t-3.27-1.626-2.75-2.66-2.25-3.124-1.91-3.697-1.553-3.68-1.412-3.803-1.268-3.393q-1.143-2.893-2.196-4.768T27.93-40t-3.716-2.286-5.07-.714q-3.43 0-6.537 1.982t-4.928 5.16-1.823 6.608q0 5.714 3.804 9.982T19.07-15q6.323 0 9.216-3.393 2-2.25 2.964-4.143l3 5.43q-.536 1.213-1.57 2.5l.034.035q-4.678 5.427-13.857 5.427-5.25 0-9.625-2.82T2.43-19.376 0-29.18q0-3.75 1.554-7.356t4.142-6.303 6.143-4.34 7.303-1.64q3.107 0 5.678.677t4.412 1.786 3.393 2.857 2.59 3.536 2.09 4.178 1.802 4.447 1.786 4.66 1.964 4.537Q46.287-15 51.18-15q2.89 0 4.945-1.732t2.054-4.59q0-1.5-.68-2.57t-1.804-1.644-2.59-1.125-3.017-.965-3.126-1.214-2.893-1.856-2.32-2.93T40.357-38q-.107-.57-.107-1.18 0-3.927 3.125-6.856t7.09-2.785q2.785.106 4.303.516T58-46.394h-.036q.43.394.822.876t.928 1.286.68.982l-4.608 3.536q-.93-1.75-1.93-2.5v-.036q-.82-.75-3.463-.75-1.75 0-3 1.18t-1.25 2.963z","LASTFM_SQUARE":"M51.143-26.43q0-6.177-8.357-8.534-1.25-.357-1.893-.59t-1.357-.892-1.036-1.66q0-.073-.07-.305t-.11-.43-.034-.267q0-1.286.875-2.125t2.16-.84q1.93 0 2.537.536h-.036q.716.536 1.394 1.822l3.322-2.536q-1.393-1.93-1.75-2.286-1.18-1.035-2.41-1.393t-3.055-.356q-2.856 0-5.07 2.054t-2.214 4.91q0 .25.07.822.573 3.43 2.305 5t5.304 2.607q1.036.286 1.75.554t1.607.77 1.376 1.23.483 1.66v.18q.034 2.07-1.448 3.32t-3.59 1.25q-3.463 0-5.963-5.14-.823-1.68-1.84-4.34t-1.715-4.483-1.93-3.946-2.64-3.41-3.698-2.16-5.25-.876q-3.607 0-6.857 2T6.857-39 5.07-32.143v.036Q5.215-28.25 6.876-25t4.768 5.268 7 2.018q6.643 0 9.964-3.93.714-.963 1.107-1.82l-2.143-3.893q-1.5 2.857-3.534 4.143T18.82-21.93q-4.106 0-6.82-3.106T9.286-32.32q0-3.75 2.928-6.75t6.643-3q4 0 6.072 1.91T28.642-34q.286.75.91 2.446t1.018 2.733 1.126 2.66 1.375 2.642 1.626 2.232 1.983 1.91 2.356 1.18 2.857.482q3.82 0 6.536-2.482t2.713-6.233zm3.714-22.713v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","TOGGLE_OFF":"M41.143-32q0-3.714-1.447-7.09t-3.91-5.84-5.84-3.91-7.09-1.446-7.088 1.447-5.84 3.91-3.91 5.84T4.57-32t1.448 7.09 3.91 5.84 5.84 3.91 7.09 1.446 7.088-1.447 5.84-3.91 3.91-5.84T41.143-32zm27.428 0q0-3.714-1.445-7.09t-3.91-5.84-5.84-3.91-7.09-1.446H36.5q4.25 3.215 6.732 8T45.714-32t-2.482 10.286-6.732 8h13.786q3.714 0 7.09-1.447t5.838-3.91 3.91-5.84T68.572-32zm4.573 0q0 4.643-1.822 8.875t-4.874 7.286-7.285 4.876-8.874 1.82h-27.43q-4.642 0-8.874-1.82T6.696-15.84 1.82-23.124 0-32t1.82-8.875 4.876-7.286 7.286-4.876 8.875-1.82h27.43q4.642 0 8.874 1.82t7.286 4.875 4.875 7.285T73.144-32z","TOGGLE_ON":"M0-32q0-4.643 1.82-8.875t4.876-7.286 7.286-4.876 8.875-1.82h27.43q4.642 0 8.874 1.82t7.286 4.875 4.875 7.285T73.144-32t-1.822 8.875-4.874 7.286-7.285 4.876-8.874 1.82h-27.43q-4.642 0-8.874-1.82T6.696-15.84 1.82-23.124 0-32zm50.286 18.286q3.714 0 7.09-1.447t5.838-3.91 3.91-5.84T68.572-32t-1.445-7.09-3.91-5.84-5.84-3.91-7.09-1.446-7.09 1.447-5.838 3.91-3.91 5.84T32-32t1.446 7.09 3.91 5.84 5.84 3.91 7.09 1.446z","BICYCLE":"M27.214-22.857H16q-1.43 0-2.054-1.25t.233-2.393l6.713-8.964Q18.57-36.57 16-36.57q-4.714 0-8.07 3.356t-3.36 8.07 3.36 8.073T16-13.715q4.107 0 7.25-2.59t3.964-6.553zM20.57-27.43h6.644q-.643-3.034-2.678-5.284zm17.144 0L48-41.142H30.857L27.32-36.43q3.75 3.68 4.5 9h5.894zm40 2.287q0-4.714-3.357-8.07t-8.07-3.358q-2.144 0-4.323.856l6.215 9.285q.534.823.356 1.75t-.965 1.43q-.534.393-1.284.393-1.25 0-1.893-1.036L58.18-33.18q-3.323 3.394-3.323 8.037 0 4.714 3.357 8.072t8.072 3.356 8.07-3.357 3.358-8.073zm4.572 0q0 6.607-4.697 11.304T66.285-9.142 54.982-13.84t-4.696-11.303q0-3.464 1.41-6.553t3.91-5.34l-2.32-3.5-12.607 16.75q-.644.93-1.823.93H31.82Q31-17 26.5-13.072T16-9.144q-6.607 0-11.304-4.696T0-25.142t4.696-11.303T16-41.143q4.07 0 7.68 1.964l4.89-6.534h-8q-.927 0-1.606-.68T18.286-48t.678-1.607 1.607-.68h13.716v4.573H49.82l-3.034-4.572h-7.93q-.927 0-1.606-.678t-.68-1.607.68-1.61 1.607-.677H48q1.18 0 1.893 1L59.43-39.57q3.25-1.573 6.856-1.573 6.607 0 11.303 4.697t4.696 11.303z","BUS":"M13.714-20.57q0-1.894-1.34-3.234t-3.23-1.34-3.233 1.34-1.34 3.233 1.34 3.23T9.144-16t3.232-1.34 1.34-3.23zm36.572 0q0-1.894-1.34-3.234t-3.232-1.34-3.232 1.34-1.34 3.233 1.34 3.23T45.714-16t3.232-1.34 1.34-3.23zm-1.643-14.144L46.07-48.43q-.177-.82-.802-1.338t-1.447-.518H11.037q-.822 0-1.447.518t-.804 1.34L6.214-34.715q-.178 1.07.5 1.893t1.75.82h37.93q1.07 0 1.75-.82t.5-1.894zM40.57-56.57q0-.716-.5-1.216t-1.213-.5H16q-.714 0-1.214.5t-.5 1.215.5 1.213 1.214.5h22.857q.714 0 1.214-.5t.5-1.214zm14.287 25.89v21.537h-4.57v4.572q0 1.89-1.34 3.23T45.713 0t-3.232-1.34-1.34-3.23v-4.573H13.715v4.572q0 1.89-1.34 3.23T9.145 0 5.91-1.34 4.57-4.57v-4.573H0V-30.68q0-4 .893-7.963L4.57-54.857q.323-2.786 3.484-4.893t8.214-3.18T27.428-64t11.16 1.07 8.216 3.18 3.482 4.893l3.75 16.214q.82 3.643.82 7.964z","IOXHOST":"M52.25-34.286q0 1.25-.893 2.16t-2.178.912H24.106q-1.286 0-2.178-.91t-.894-2.162.893-2.16 2.177-.91H49.18q1.284 0 2.177.91t.893 2.16zm7.643 0q0-3.07-.822-6.07H24q-1.286 0-2.18-.894t-.89-2.143q0-1.286.89-2.178t2.18-.894h32.43q-3.144-5.107-8.394-8.107t-11.43-3q-6.32 0-11.695 3.124t-8.5 8.482-3.124 11.678q0 3.072.82 6.072H49.18q1.284 0 2.177.893t.893 2.14q0 1.287-.893 2.18t-2.178.893H16.75Q19.893-17 25.16-14t11.447 3q4.714 0 9.036-1.84t7.428-4.964 4.966-7.428 1.857-9.054zm13.25-9.107q0 1.25-.893 2.143t-2.18.893h-4.677Q66-37.32 66-34.287q0 5.966-2.34 11.412t-6.267 9.393-9.375 6.286-11.41 2.34q-8.787 0-16.02-4.75t-10.767-12.5H3.07q-1.284 0-2.177-.894T0-25.18q0-1.25.893-2.14t2.178-.894h4.716q-.607-3.036-.607-6.072 0-5.964 2.338-11.41t6.268-9.393 9.375-6.285 11.447-2.34q8.75 0 15.982 4.75t10.767 12.5h6.714q1.287 0 2.18.894t.893 2.177z","ANGELLIST":"M34.036-50.5l-4.072 11.714 4.18.75q5.892-16.107 5.892-18.5 0-2-1.357-2-2.037 0-4.644 8.036zm-10.68 24.536l1.18 3.143q1.32-1.5 2.535-2.394l-1.177-.197-1.375-.25-1.16-.304zm-10.427-32q0 3.5 5.677 18.607.643-.357 1.75-.357.536 0 2.68.178L18.713-52.07q-2.678-7.86-4.393-7.86-.677 0-1.034.626t-.357 1.34zm-2.823 27.107q0 1.286 1.84 4.25t4.196 5.464 3.57 2.5q.5 0 .912-.464t.41-.964q0-.86-1.142-3.644-.464-1.143-1.143-2.572t-1.696-3.178-2.197-2.893-2.214-1.143q-.714 0-1.625.964t-.91 1.68zM4.464-18.893q0 1.464.893 3.714Q7.464-10 11.91-7.07t10.054 2.927q8.107 0 13.643-6.07 5.43-6.037 5.43-15.25 0-1.537-.037-2.394t-.41-2.214-1.09-2q-2-1.75-7.554-2.698t-9.66-.946q-1.322 0-1.75.393-.43.177-.43 1.25 0 1.213.77 2.14t1.98 1.43 2.77.84 3.124.41 3.036.143 2.5 0h.82q.858 0 1.43.678.535.68.678 1.966-1 1-3.428 1.928-2.18.786-3.322 1.643-2.285 1.643-3.875 4.072T25-13.93q0 1.11.66 3.162t.66 3.125l-.106.43q-.143.427-.143.5-4.89-.358-5.213-7.716-.286.073-1.464.073.07.25.07.75 0 1.893-1.445 3.196t-3.375 1.303q-2.93 0-5.947-2.786T5.68-17.57q0-1.216 1.177-2.394Q8.714-17.68 9-17.25q2.75 3.714 4.75 3.714.43 0 .946-.303t.518-.73q0-1.216-3.125-5.18t-4.16-3.964q-1.537 0-2.5 1.59t-.966 3.23zm-4.07.322q0-3.61 1.517-5.823t4.876-3.143q-1-2.643-1-3.714 0-2.214 2.178-4.393t4.357-2.178q1.037 0 2.5.534Q9-53.786 9-57.536q0-2.857 1.464-4.66T14.714-64q4.68 0 11.607 20.75.216.607.287.82.214-.57 1.036-2.838t1.553-4.232 1.93-4.554 2.303-4.392 2.516-3.09 2.733-1.285q2.534 0 4 1.75t1.463 4.356q0 3.857-5.68 19.643 2.18.534 3.59 1.64t2.09 2.787.928 3.34.25 3.946q0 5.357-1.677 10T38.93-7.32t-7.537 5.356T21.463 0Q17.5 0 13.5-1.5 8.18-3.536 4.286-8.34T.393-18.57z","CC":"M28.036-28h7.393q-.5 5.643-3.52 8.875t-7.66 3.232q-5.786 0-9.09-4.143T11.858-31.32q0-6.93 3.322-11.126t8.32-4.197q5.286 0 8.286 3.107t3.464 8.822H28Q27.82-37 26.732-38.25t-2.91-1.25q-2.036 0-3.16 2.16T19.535-31q0 1.714.178 3t.643 2.482 1.43 1.84 2.356.642q3.393 0 3.893-4.964zm25.428 0h7.357q-.5 5.643-3.5 8.875t-7.64 3.232q-5.787 0-9.09-4.143T37.285-31.32q0-6.93 3.32-11.126t8.323-4.197q5.284 0 8.284 3.107t3.465 8.822h-7.287Q53.25-37 52.143-38.25T49.25-39.5q-2.036 0-3.16 2.16T44.963-31q0 1.714.18 3t.642 2.482 1.41 1.84 2.34.642q1.75 0 2.732-1.357T53.464-28zm12.822-4.25q0-7.393-.554-10.964t-2.16-5.75q-.215-.286-.483-.5T62.32-50t-.57-.393q-3.07-2.25-24.893-2.25-22.32 0-25.357 2.25-.18.143-.625.41t-.75.5-.518.52Q8-46.822 7.464-43.27T6.93-32.25q0 7.43.534 10.982t2.143 5.732q.214.286.536.536t.732.5.625.43q1.57 1.177 8.554 1.75t16.803.57q21.786 0 24.893-2.32.18-.144.607-.394t.732-.5.48-.572q1.644-2.143 2.18-5.678t.536-11.036zm6.857-27.18v54.86H0v-54.86h73.143z","SHEQEL":"M35.43-41.714V-24q0 .5-.323.82t-.82.323H28.57q-.5 0-.82-.322t-.32-.82v-17.714q0-4-2.86-6.857t-6.856-2.86H8v41.144q0 .5-.32.822t-.823.32H1.143q-.5 0-.822-.32T0-10.286v-48q0-.5.32-.82t.823-.323h16.57q4.823 0 8.894 2.376t6.447 6.447 2.375 8.893zm13.713-16.572v31.43q0 4.82-2.375 8.892t-6.447 6.446-8.89 2.375H14.856q-.5 0-.82-.32t-.323-.823V-44.57q0-.5.322-.823t.82-.32h5.715q.5 0 .823.32t.32.822v27.427h9.716q4 0 6.856-2.857t2.857-6.857v-31.43q0-.5.32-.82t.823-.322H48q.5 0 .82.323t.323.82z","MEANPATH":"M46.82-33.93v4.073q0 .857-.48 1.357T45-28h-7.214q-.857 0-1.357-.5t-.5-1.357v-4.072q0-.856.5-1.356t1.356-.5H45q.857 0 1.34.5t.48 1.357zm-17.5 8.216v-8.93q0-1.892-1.16-3.052t-3.053-1.16h-4.75q-2.428 0-3.428 1.856-1-1.857-3.43-1.857H8.857q-1.893 0-3.053 1.16t-1.16 3.054v8.93q0 .784.75.784h1.963q.786 0 .786-.784v-8.215q0-.856.482-1.356t1.375-.5h3.357q.857 0 1.357.5t.5 1.357v8.216q0 .785.75.785h1.93q.785 0 .785-.784v-8.215q0-.856.5-1.356t1.356-.5H24q.857 0 1.34.5t.48 1.357v8.216q0 .785.787.785h1.964q.75 0 .75-.784zm21.037-3.43v-5.5q0-1.892-1.178-3.052t-3.073-1.16H36.68q-1.894 0-3.073 1.16t-1.178 3.053V-20q0 .75.784.75h1.965q.75 0 .75-.75v-6.43q1.106 1.5 3.356 1.5h6.82q1.894 0 3.073-1.16t1.177-3.053zm4.5-22v38.287q0 3.428-2.428 5.857t-5.86 2.43H8.287Q4.856-4.57 2.43-7T0-12.857v-38.286Q0-54.57 2.43-57t5.856-2.43H46.57q3.43 0 5.86 2.43t2.427 5.857z","BUYSELLADS":"M32.68-25.214h-10.5l5.25-19.68zm3.07 11.5h11.107l-11.57-36.572H19.57L8-13.714h11.107l13.68-11.215zm19.107-35.43v34.287q0 4.214-3.036 7.25T44.57-4.57H10.287q-4.215 0-7.25-3.037T0-14.857v-34.286q0-4.214 3.036-7.25t7.25-3.036H44.57q4.216 0 7.25 3.037t3.037 7.25z","CONNECTDEVELOP":"M73.143-32.036q0 .75-.464 1.304t-1.18.696L64.18-17.32q.106.32.106.64 0 .716-.447 1.27t-1.16.696L55.785-2.68q.107.287.107.573 0 .82-.59 1.428t-1.446.61q-.893 0-1.464-.644H38.107Q37.5 0 36.57 0t-1.534-.714h-14.25Q20.18 0 19.25 0q-.82 0-1.43-.59t-.606-1.446q0-.285.143-.714l-6.893-11.964q-.714-.143-1.16-.697t-.447-1.27q0-.32.107-.64L1.607-30.037q-.714-.178-1.16-.732T0-32.036q0-.75.482-1.303t1.197-.696L8.785-46.32q0-.037-.018-.11t-.018-.106q0-1.285 1.214-1.82l7.465-12.965q-.144-.36-.144-.644 0-.857.607-1.447T19.32-64q.93 0 1.573.75h14.143q.57-.75 1.535-.75t1.537.75H52.32q.644-.75 1.573-.75.82 0 1.428.59t.61 1.446q0 .214-.144.643l7.393 12.784q.82.036 1.39.625t.573 1.374q0 .465-.25.965L71.57-34q.68.143 1.126.696t.447 1.268zM37.963-3.5h13.894L39.643-16.143h-5.107L22.32-3.5h12.86q.64-.57 1.39-.57t1.394.57zM4-32.5q.036.143.036.464 0 .357-.072.536l7.43 12.857q.07 0 .16.036t.196.09l.18.088 6.713-7.106V-37.93l-6.68-6.927q-.463.286-1.034.357zm31.214-28H21.357l6.786 7.143L47.93-60.5h-10q-.573.57-1.36.57t-1.356-.57zM60.32-17.214q.037-.215.18-.393l-2.286-2.43-.607 2.823h2.714zm-3.784 0l.785-3.75-9-9.5L37.75-19.5 40-17.214h16.536zM53.393-4.07l.57-1 2.323-11.073h-15.25L52.93-3.893q.284-.143.463-.178zm-32.75.57h.178l12.216-12.643H19.714V-4.18l.143.216q.5.178.786.464zm-.93-13.714h14.358l2.287-2.357L25.32-31.037l-5.606 5.93v7.892zm-6.892 0h5.823v-6.75l-6 6.32q.143.287.178.43zm-.034-29.465q0 .037.018.073t.017.07q0 .573-.284 1.037l6.107 6.32v-9.606zm6.928-2.5v11.11l5.465 5.606L35.785-43.68l-7.965-8.427zm.143-10.856l-.143.286v9.43l7.322-2.644-6.822-7.18q-.214.073-.357.108zM51.68-60.5h-.573l-22.178 8 7.606 8.036zM36.535-42.93L25.93-31.68l11.106 11.394 10.57-10.964zM24.57-31.785l-4.856-5.035v10.14zm12.5 13l-1.5 1.572h3.037zm12-12.428l8.5 8.964 4.716-22.286-.107-.178-.037-.036zM61.358-45.5q-.286-.464-.286-1.036v-.07l-7.713-13.43q-.178-.035-.464-.178L37.286-43.68 48.356-32zm-42.714-4.43v-7.963L12.82-47.82zm0 33.787H12.82l5.823 10.107v-10.107zm38.75 0L55.68-8.036l4.64-8.107h-2.927zm4.357-2.5l7.393-12.893q-.072-.357-.072-.5 0-.035.11-.57L63.07-43.18l-4.606 21.86 2.75 2.927q.18-.107.536-.25z","DASHCUBE":"M0-39.714q0-4.68 3.268-8.09t7.946-3.41h26.5L50.286-64v52.5q0 4.714-3.268 8.107T39.07 0H11.215Q6.536 0 3.268-3.393T0-11.5v-28.214zm44 26.928l-6.286-6.428v-15.18q0-1.642-1.143-2.82t-2.784-1.18H16.5q-1.643 0-2.786 1.18t-1.143 2.82v17.573q0 1.64 1.162 2.838t2.768 1.196H44z","FORUMBEE":"M33.357-58.643Q22.037-54.32 13.5-45.696T.714-25.68Q0-28.856 0-31.963q0-7.43 3.66-13.732t9.947-9.965 13.714-3.66q2.93 0 6.037.677zm9.607 4.25q3.322 2.322 5.857 5.536-13.89 4.036-24.088 14.303t-14.16 24.16q-3.322-2.57-5.536-5.785 4-13.784 14.107-23.963t23.82-14.25zM16.786-6.75q4.107-12.714 13.553-22.214T52.463-42.68q1.43 3.287 1.93 6.966-10.43 4.285-18.43 12.32t-12.25 18.5q-3.678-.5-6.928-1.856zm38.07 2.07Q47.965-6.463 41.75-8.785q-4.82 3-10.357 3.822 3.893-7.322 9.786-13.232t13.177-9.84q-.75 5.43-3.607 10.143 2.32 6.25 4.107 13.214z","LEANPUB":"M67.607-50l5.536 45.43q-4.68 0-9.18-2.037-7.142-3.25-14.034-3.25-8.073 0-13.36 5.286-5.284-5.287-13.356-5.287-6.893 0-14.035 3.25Q4.606-4.57.18-4.57H0L5.536-50q8-4.536 17.214-4.536 8.32 0 13.82 3.786 5.5-3.786 13.823-3.786 9.214 0 17.214 4.536zM49.93-14.75q4.606 0 8.284 1.018t9.286 3.34l-4.43-36.465q-6.106-2.786-13.14-2.786-8 0-13.36 5.036-5.356-5.036-13.356-5.036-7.035 0-13.143 2.786L5.644-10.393q3.75-1.536 5.91-2.32t5.304-1.412 6.357-.625q7.215 0 13.357 3.857 6.144-3.857 13.36-3.857zm1.427-1.214l-1.964-32.393q-7.536.143-12.822 5.536-5.427-5.537-13.356-5.537-6.285 0-12 2.357l-4.07 33.607q4.427-1.82 8.16-2.714t7.91-.893q7.465 0 13.357 3.643Q42.715-16.18 49.93-16z","SELLSY":"M53.57-15.036v-26.178q0-.75-.534-1.286t-1.25-.536h-3.322q-.714 0-1.25.536t-.535 1.286v26.178q0 .715.534 1.25t1.25.536h3.322q.714 0 1.25-.536t.535-1.25zm-10.14 0V-34q0-.714-.537-1.25t-1.25-.536h-3.607q-.715 0-1.25.536T36.25-34v18.964q0 .715.536 1.25t1.25.536h3.607q.714 0 1.25-.536t.536-1.25zm-10.43 0v-15.32q0-.715-.536-1.25t-1.25-.537h-3.607q-.714 0-1.25.536t-.536 1.25v15.32q0 .716.537 1.25t1.25.537h3.607q.715 0 1.25-.536t.536-1.25zm-10.43 0v-12.928q0-.715-.534-1.25t-1.25-.536H17.18q-.716 0-1.25.536t-.537 1.25v12.928q0 .715.536 1.25t1.25.536h3.606q.714 0 1.25-.536t.535-1.25zm50.573-5.214q0 5.93-4.214 10.143T58.785-5.893h-44.43q-5.927 0-10.142-4.214T0-20.25q0-4.143 2.25-7.66t6-5.304q-.357-1.215-.357-2.607 0-4.037 2.875-6.912t6.91-2.875q3.643 0 6.43 2.393 1.606-6.536 6.928-10.715t12.07-4.177q5.323 0 9.823 2.625t7.124 7.125 2.625 9.82q0 2.358-.5 4.358Q67-33 70.07-29.09t3.073 8.84z","SHIRTSINBULK":"M0-64h54.857v49.714L27.143-2.214 0-14.286V-64zm51.286 47.393V-49.68H3.57v33.073l23.61 10.5zm0-36.643v-7.18H3.57v7.18h47.716zM6.464-42.607v4.107h-1.32v-4.107h1.32zm0 5.286v4.106h-1.32v-4.107h1.32zm0 5.284v4.107h-1.32v-4.106h1.32zm0 5.286v4.107h-1.32v-4.107h1.32zm0 5.286v4.107h-1.32v-4.107h1.32zm.93 5.107l.535-1.214 3.75 1.677-.537 1.18zm4.856 2.143l.536-1.215 3.75 1.644L16-12.57zm4.82 2.143l.537-1.216 3.75 1.643-.536 1.214zm4.86 2.106l.534-1.18L26.18-9.5l-.537 1.214zm6.534.464l3.75-1.643.536 1.18L29-8.287zm4.822-2.143l3.75-1.643.535 1.215-3.75 1.64zm4.857-2.143l3.75-1.643.536 1.216-3.75 1.643zm4.82-2.107l3.75-1.678.537 1.213-3.75 1.643zM9.25-58.75v1.286H5.18v-1.286h4.07zm5.786 0v1.286H10.93v-1.286h4.106zm5.785 0v1.286h-4.106v-1.286h4.107zm5.75 0v1.286H22.5v-1.286h4.07zm5.787 0v1.286h-4.07v-1.286h4.07zm5.786 0v1.286h-4.107v-1.286h4.107zm5.786 0v1.286h-4.11v-1.286h4.11zm5.75 0v1.286h-4.073v-1.286h4.072zM6.463-46.607v2.82h-1.32v-4.106H9.25v1.286H6.464zm8.572-1.286v1.286H10.93v-1.286h4.106zm5.785 0v1.286h-4.106v-1.286h4.107zm5.75 0v1.286H22.5v-1.286h4.07zm5.787 0v1.286h-4.07v-1.286h4.07zm5.786 0v1.286h-4.107v-1.286h4.107zm5.786 0v1.286h-4.11v-1.286h4.11zm4.463 4.107v-2.82h-2.786v-1.287h4.107v4.107h-1.32zm0 5.286v-4.107h1.32v4.107h-1.32zm0 5.286v-4.107h1.32v4.106h-1.32zm0 5.285v-4.106h1.32v4.107h-1.32zm0 5.287v-4.107h1.32v4.107h-1.32zm0 5.286v-4.107h1.32v4.107h-1.32zm-21.25-1.25q-4.607 0-7.893-3.268t-3.286-7.91q0-4.608 3.286-7.894t7.893-3.284q4.643 0 7.91 3.285t3.268 7.894q0 4.643-3.266 7.91t-7.91 3.27zM21.25-32.214q0 1.285.696 2.018t1.768.892 2.286.25 2.286.072 1.768.32.696 1.09q0 1.75-4 1.75-3.464 0-4.393-1.82h-.107l-1.107 2.25q2.393 1.5 5.786 1.5 1.034 0 2.016-.18t1.983-.57 1.624-1.18.625-1.892q0-1.643-.984-2.482t-2.41-.965-2.84-.108-2.392-.178-.983-.91q0-.75.734-1.18t1.446-.535 1.464-.11q1.215 0 2.518.394t1.84 1.215h.107l1.07-2.073q-.107-.036-.75-.303t-.804-.322-.696-.25-.786-.25-.714-.16-.857-.143-.822-.037q-1.034 0-2.016.178t-1.93.59-1.535 1.215-.59 1.91z","SIMPLYBUILT":"M30.82-27.143q0-4-2.838-6.84t-6.84-2.838-6.82 2.838-2.822 6.84 2.82 6.82 6.823 2.822 6.84-2.82 2.838-6.823zm30.823-.036q0-4-2.822-6.82T52-36.82 45.16-34t-2.84 6.82q0 4.037 2.84 6.86T52-17.5t6.82-2.84 2.823-6.84zm11.5-28.89v48.14q0 1.573-1.125 2.698t-2.732 1.125H3.856q-1.606 0-2.73-1.125T0-7.93v-48.14q0-1.573 1.125-2.698t2.732-1.125H19.25q1.57 0 2.714 1.125t1.143 2.697v5.75h26.93v-5.75q0-1.573 1.142-2.698t2.713-1.125h15.393q1.607 0 2.732 1.125t1.125 2.697z","SKYATLAS":"M51.07-43.18zm9.287 7.287q5.286 0 9.036 3.518t3.75 8.732q0 5.607-3.893 9.34t-9.536 3.732q-3.035 0-5.785-.984T49-14.18t-4.214-3.784-3.893-4.518-3.697-4.732-3.875-4.5-4.177-3.786-4.857-2.625-5.68-.982q-5.5 0-8.98 3.268t-3.483 8.733q0 5.607 3.714 8.928t9.393 3.323q3.57 0 7.43-1.34t6.89-3.517q.18-.143.75-.66t1.073-.858.786-.34q.5 0 .874.376t.375.875q0 .856-2.144 2.75-3.607 3.14-8.375 5.07t-9.303 1.93q-4.75 0-8.768-2.073t-6.43-5.893T0-27.143q0-7.32 5.054-12.178t12.41-4.86q4.286 0 8.09 1.555t6.625 4.036 5.41 5.465 4.964 5.982 4.767 5.482 5.34 4.035 6.16 1.554q3.644 0 6.02-2.198t2.374-5.803q0-3.394-2.303-5.68t-5.696-2.286q-1.07 0-2.91.66t-2.447.662q-.714 0-1.268-.536t-.554-1.25q0-.643.303-2.036t.303-2.107q0-5.678-3.84-9.393t-9.517-3.714q-2.072 0-3.982.66t-3 1.447-1.983 1.447-1.177.66q-.536 0-.91-.375t-.376-.91q0-.68.893-1.644 2.107-2.393 5.25-3.697t6.5-1.304q6.82 0 11.357 4.482t4.536 11.268q0 1.32-.143 2.357 2.036-.536 4.107-.536z","CART_PLUS":"M43.43-38.857q0-.93-.68-1.607t-1.607-.68H36.57v-4.57q0-.93-.677-1.607T34.286-48t-1.607.68-.68 1.606v4.57h-4.57q-.93 0-1.61.68t-.677 1.607.678 1.607 1.61.68H32V-32q0 .93.68 1.607t1.606.68 1.607-.68T36.57-32v-4.57h4.573q.928 0 1.607-.68t.68-1.607zM22.856-9.143q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zm32 0q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zM59.43-48v18.286q0 .857-.573 1.518t-1.464.767l-37.286 4.36q.036.25.16.766t.215.947.09.786q0 .57-.858 2.284H52.57q.93 0 1.61.68T54.856-16t-.678 1.607-1.61.68H16q-.93 0-1.607-.68T13.713-16q0-.5.394-1.41t1.054-2.126.733-1.357L9.57-50.286H2.287q-.93 0-1.607-.678T0-52.57t.68-1.61 1.606-.677h9.143q.57 0 1.016.232t.715.554.465.874.268.946.196 1.054.16.91h42.893q.928 0 1.607.68T59.43-48z","CART_ARROW_DOWN":"M45.714-38.857q0-.93-.678-1.607t-1.607-.68-1.61.68l-5.25 5.214v-10.464q0-.93-.677-1.607T34.286-48t-1.607.68-.68 1.606v10.464l-5.25-5.214q-.68-.68-1.607-.68t-1.607.68-.68 1.607.68 1.607l9.143 9.143q.677.678 1.606.678t1.607-.677l9.143-9.143q.678-.68.678-1.607zM22.857-9.143q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zm32 0q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34-1.34-3.233 1.34-3.232 3.232-1.34 3.232 1.34 1.34 3.232zM59.43-48v18.286q0 .857-.573 1.518t-1.464.767l-37.286 4.36q.036.25.16.766t.215.947.09.786q0 .57-.858 2.284H52.57q.93 0 1.61.68T54.856-16t-.678 1.607-1.61.68H16q-.93 0-1.607-.68T13.713-16q0-.5.394-1.41t1.054-2.126.733-1.357L9.57-50.286H2.287q-.93 0-1.607-.678T0-52.57t.68-1.61 1.606-.677h9.143q.57 0 1.016.232t.715.554.465.874.268.946.196 1.054.16.91h42.893q.928 0 1.607.68T59.43-48z","DIAMOND":"M7.57-36.57l22.25 23.75-10.713-23.75H7.57zM36.57-9l12.466-27.57h-24.93zM19.215-41.143L26.5-54.857h-9.357L6.857-41.143h12.357zM43.32-12.82l22.25-23.75H54.037zM24.394-41.144H48.75l-7.286-13.714H31.68zm29.536 0h12.356L56-54.857h-9.357zM58.963-58.5L72.68-40.214q.5.643.463 1.482t-.607 1.446L38.25-.714Q37.607 0 36.57 0t-1.677-.714L.607-37.286q-.57-.607-.607-1.446t.464-1.482L14.18-58.5q.64-.93 1.82-.93h41.143q1.178 0 1.82.93z","SHIP":"M64.68-8.464q.677-.68 1.606-.68t1.607.68l4.57 4.57L69.25-.678l-2.964-2.963L63.32-.68q-.64.68-1.606.68t-1.607-.68l-2.964-2.963L54.18-.68Q53.5 0 52.57 0t-1.606-.68L48-3.642 45.036-.68q-.68.68-1.607.68t-1.61-.68l-2.963-2.963L35.893-.68q-.68.68-1.607.68T32.68-.68l-2.966-2.963L26.75-.68q-.68.68-1.607.68t-1.607-.68L20.57-3.642 17.608-.68Q16.93 0 16 0t-1.607-.68L11.43-3.642 8.463-.68Q7.786 0 6.857 0T5.25-.68L.68-5.25l3.213-3.214L6.857-5.5 9.82-8.464q.68-.68 1.61-.68t1.606.68L16-5.5l2.964-2.964q.68-.68 1.607-.68t1.61.68L25.142-5.5l2.964-2.964q.68-.68 1.607-.68t1.607.68L34.287-5.5l2.964-2.964q.68-.68 1.607-.68t1.607.68L43.43-5.5l2.963-2.964q.678-.68 1.607-.68t1.607.68L52.57-5.5l2.966-2.964q.678-.68 1.607-.68t1.607.68L61.714-5.5zM8.463-9.82q-.678.677-1.607.677T5.25-9.82L.68-14.394l3.213-3.214 2.964 2.928 2.964-2.927q.68-.68 1.61-.68t1.606.68L16-14.68l2.286-2.284V-27.43l-7.5-11.213q-.607-.928-.25-2.018t1.428-1.447l6.322-2.072v-10.677h4.57v-4.572H32V-64h9.143v4.57h9.143v4.573h4.57v10.678l6.323 2.073q1.07.357 1.427 1.446t-.25 2.017l-7.5 11.214v10.466l.68-.643q.677-.68 1.606-.68t1.607.68l2.964 2.928 2.965-2.927q.677-.68 1.606-.68t1.607.68l4.57 4.57L69.25-9.82l-2.964-2.966L63.32-9.82q-.64.677-1.606.677t-1.607-.678l-2.964-2.966L54.18-9.82q-.68.677-1.61.677t-1.606-.678L48-12.787 45.036-9.82q-.68.677-1.607.677t-1.61-.678l-2.963-2.966-2.964 2.965q-.68.677-1.607.677T32.68-9.82l-2.966-2.966L26.75-9.82q-.68.677-1.607.677t-1.607-.678l-2.965-2.966-2.963 2.965q-.678.677-1.607.677t-1.607-.678l-2.964-2.966zm14.393-40.466v4.572l13.714-4.572 13.716 4.572v-4.572h-4.572v-4.57H27.43v4.57h-4.573z","USER_SECRET":"M20.57-9.143l3.43-16-3.43-4.57L16-32zm9.144 0L34.286-32l-4.572 2.286-3.428 4.57zm5.715-36.07q-.073-.144-.144-.216-.357-.284-3.43-.284-2.5 0-5.963.678-.25.072-.75.072t-.75-.072q-3.464-.678-5.964-.678-3.073 0-3.43.285-.07.073-.143.216.072.643.143.964.07.107.268.232t.268.375q.07.143.268.732t.25.73.267.61.305.606.32.5.43.482.5.34.625.285.732.143.875.07q1.286 0 2.107-.445t1.16-1.07.52-1.233.41-1.053.625-.447h.427q.393 0 .625.447t.41 1.053.52 1.232 1.16 1.07 2.107.447q.463 0 .874-.07t.732-.144.625-.286.5-.34.43-.48.32-.5.304-.608.268-.61.25-.73.268-.733q.07-.25.268-.375t.268-.232q.07-.32.143-.964zm14.856 31.392q0 4.32-2.607 6.784T40.75-4.57H9.536q-4.322 0-6.93-2.466T0-13.82q0-2.18.16-4.216t.68-4.482 1.34-4.41 2.266-3.697 3.34-2.66L4.57-41.144h7.644q-.785-2.286-.785-4.57 0-.43.07-1.144-6.93-1.43-6.93-3.43 0-2.034 7.5-3.534.61-2.216 1.84-4.787t2.52-4.072Q17.57-64 19.142-64q1.07 0 3 1.107t3 1.107 3-1.107 3-1.107q1.57 0 2.714 1.32 1.286 1.5 2.518 4.073t1.84 4.786q7.5 1.5 7.5 3.534 0 2-6.93 3.43.25 2.892-.714 5.713h7.644l-2.928 8.036q2.25 1.178 3.84 3.446t2.338 5.124T50-19.126t.286 5.305z","MOTORCYCLE":"M82.18-27q.427 3.68-.787 7.09t-3.536 5.84-5.66 3.784-7.018 1.107q-5.75-.39-9.984-4.463t-4.803-9.786q-.43-3.963.982-7.516t4.232-6.09l-2.536-3.82Q49.644-38 47.68-33.93t-1.966 8.716q0 .964-.66 1.66t-1.625.697H31.82Q31-17 26.5-13.07T16-9.144q-6.607 0-11.304-4.696T0-25.142t4.696-11.303T16-41.143q2.714 0 5.43.964l.856-1.606q-4.393-3.928-10.857-3.928H9.142q-.93 0-1.607-.68T6.856-48t.68-1.607 1.607-.68h4.57q2.787 0 5.18.483t4.16 1.375 2.554 1.412 1.822 1.304H49.82l-3.034-4.572h-7.93q-1.07 0-1.75-.803t-.5-1.874q.144-.822.823-1.357t1.534-.537H48q1.18 0 1.893 1l2.5 3.75 4.07-4.072q.68-.677 1.644-.677h3.607q.93 0 1.607.678t.68 1.61V-48q0 .93-.68 1.607t-1.606.68H55.32l4.11 6.142q4.677-2.25 9.82-1.287 5.107.928 8.714 4.803T82.18-27zM16-13.714q4.107 0 7.25-2.59t3.964-6.553H16q-1.25 0-1.964-1.107-.643-1.143-.036-2.25l5.25-9.893q-1.68-.464-3.25-.464-4.714 0-8.07 3.356t-3.36 8.07 3.36 8.073T16-13.715zm50.286 0q4.714 0 8.07-3.357t3.358-8.073-3.357-8.07-8.07-3.358q-2.144 0-4.323.856l6.215 9.285q.534.823.356 1.75t-.965 1.43q-.534.393-1.284.393-1.25 0-1.893-1.036L58.18-33.18q-3.323 3.394-3.323 8.037 0 4.714 3.357 8.072t8.072 3.356z","STREET_VIEW":"M50.286-9.143q0 2.25-2.197 4.054T42.23-2.195 34.196-.554 25.143 0 16.09-.554 8.053-2.196 2.196-5.09 0-9.142q0-1.75 1.18-3.16t3.25-2.376 4.213-1.588 4.678-1.053q.93-.18 1.716.374t.928 1.482q.18.928-.375 1.714t-1.483.93q-2.07.356-3.786.838t-2.73.91-1.733.84-.982.696-.304.43q.11.392.966.945t2.607 1.178 4.07 1.16 5.733.893 7.197.36 7.196-.36 5.73-.89T42.144-7t2.607-1.196.964-.983q-.035-.14-.303-.39t-.98-.68-1.734-.84-2.732-.892-3.785-.84q-.93-.142-1.484-.928t-.375-1.714q.144-.93.93-1.482t1.714-.375q2.536.427 4.68 1.052t4.213 1.59 3.25 2.374 1.18 3.16zm-13.715-32v13.714q0 .93-.677 1.61t-1.607.677H32v13.714q0 .93-.68 1.61t-1.606.677H20.57q-.927 0-1.606-.678t-.678-1.61v-13.713H16q-.93 0-1.607-.678t-.68-1.61v-13.713q0-1.893 1.34-3.232t3.233-1.34H32q1.893 0 3.232 1.34t1.34 3.232zm-3.427-13.714q0 3.32-2.34 5.66t-5.66 2.34-5.66-2.34-2.34-5.66 2.34-5.66 5.66-2.34 5.66 2.34 2.34 5.66z","HEARTBEAT":"M45.714-27.43h10.893q-.178.216-.357.376t-.32.268l-.11.143-22.25 21.43q-.64.642-1.57.642t-1.57-.644l-22.287-21.5q-.18-.072-.75-.715H20.57q.787 0 1.412-.48t.804-1.233l2.5-10.036 6.785 23.823q.216.714.823 1.178t1.393.466q.75 0 1.357-.465t.82-1.177L41.68-32.68l2 4q.64 1.25 2.034 1.25zM64-42.713Q64-37.536 60.32-32H47.144l-3.964-7.893q-.287-.607-.912-.964t-1.304-.286q-1.607.18-2 1.643l-4.607 15.357-7-24.5q-.214-.714-.84-1.178t-1.41-.466-1.393.482-.785 1.233L18.785-32H3.68Q0-37.536 0-42.714 0-50.57 4.536-55t12.535-4.43q2.216 0 4.52.77t4.285 2.07 3.41 2.447T32-51.713q1.286-1.287 2.714-2.43t3.41-2.446 4.287-2.07 4.52-.77q8 0 12.534 4.43T64-42.714z","VENUS":"M41.143-43.43q0 7.894-5.268 13.734T22.857-23v9.286h8q.5 0 .822.32t.32.823v2.284q0 .5-.32.822t-.823.32h-8v8q0 .5-.32.823t-.823.32H19.43q-.5 0-.823-.32t-.32-.823v-8h-8q-.5 0-.823-.32t-.32-.823v-2.285q0-.5.32-.823t.822-.32h8V-23q-5.357-.57-9.697-3.68t-6.644-8T.07-45.106Q.465-49.893 2.947-54t6.5-6.714 8.768-3.143q6.072-.68 11.393 1.928t8.43 7.573 3.106 10.928zm-36.572 0q0 6.61 4.698 11.305T20.57-27.43t11.305-4.695T36.57-43.43 31.876-54.73 20.57-59.43 9.27-54.73 4.57-43.43z","MARS":"M52.57-59.43q.93 0 1.61.68t.677 1.607v14.857q0 .5-.32.822t-.823.32H51.43q-.5 0-.823-.32t-.32-.822v-9.357l-13.644 13.68q4.5 5.57 4.5 12.82 0 4.18-1.625 7.982t-4.393 6.57-6.57 4.394T20.57-4.57t-7.98-1.626-6.572-4.393-4.393-6.57T0-25.144t1.625-7.982 4.393-6.57 6.57-4.394 7.983-1.624q7.25 0 12.823 4.5l13.643-13.643h-9.322q-.5 0-.82-.322T36.57-56v-2.286q0-.5.323-.82t.82-.323h14.858zm-32 50.287q6.61 0 11.305-4.696t4.696-11.303-4.695-11.303-11.304-4.697T9.27-36.446 4.57-25.143 9.27-13.84 20.57-9.142z","MERCURY":"M29.643-52.714q5.178 2.57 8.34 7.518t3.16 10.91q0 7.893-5.268 13.732t-13.018 6.697v4.714h3.43q.5 0 .82.322t.322.82v2.286q0 .5-.323.82t-.82.323h-3.43v3.427q0 .5-.32.822t-.823.32H19.43q-.5 0-.823-.32t-.32-.823V-4.57h-3.43q-.5 0-.82-.323t-.323-.82V-8q0-.5.322-.82t.82-.323h3.43v-4.714q-7.75-.857-13.018-6.697T0-34.286q0-5.964 3.16-10.91t8.34-7.518q-5.893-3.43-8.143-9.75-.214-.572.125-1.054T4.43-64h2.463q.75 0 1.036.714 1.57 3.786 5 6.107t7.64 2.323 7.644-2.322 5-6.106Q33.5-64 34.536-64h2.178q.607 0 .947.482t.126 1.054q-2.25 6.32-8.143 9.75zM20.57-18.286q6.61 0 11.305-4.696t4.696-11.304-4.695-11.303-11.304-4.696T9.27-45.59 4.57-34.285 9.27-22.982t11.303 4.696z","TRANSGENDER":"M36.57-62.857q0-.5.323-.822t.82-.32H48q.93 0 1.607.68t.68 1.606v10.285q0 .5-.323.823t-.82.32h-2.287q-.5 0-.82-.32t-.323-.822v-4.784l-9.07 9.107q4.5 5.643 4.5 12.82 0 7.894-5.27 13.733t-13.017 6.697v4.714h3.43q.5 0 .82.322t.322.82v2.286q0 .5-.323.82t-.82.323h-3.43v3.427q0 .5-.32.822t-.823.32H19.43q-.5 0-.823-.32t-.32-.823V-4.57h-3.43q-.5 0-.82-.323t-.323-.82V-8q0-.5.322-.82t.82-.323h3.43v-4.714q-5.322-.572-9.66-3.68t-6.662-7.98T.07-35.93q.573-7.284 5.716-12.624t12.393-6.16q4.213-.5 8.14.678t7.073 3.68L42.5-59.43h-4.786q-.5 0-.82-.32t-.323-.82v-2.287zm-16 44.57q6.61 0 11.305-4.695t4.696-11.304-4.695-11.303-11.304-4.696T9.27-45.59 4.57-34.285 9.27-22.982t11.303 4.696z","TRANSGENDER_ALT":"M45.714-62.857q0-.5.322-.822t.82-.32h10.287q.928 0 1.607.68t.68 1.606v10.285q0 .5-.323.823t-.82.32H56q-.5 0-.82-.32t-.323-.822v-4.784l-9.07 9.107q4.5 5.643 4.5 12.82 0 7.894-5.27 13.733T32-13.857v4.714h3.43q.5 0 .82.322t.32.82v2.286q0 .5-.32.82t-.82.323H32v3.427q0 .5-.32.822t-.823.32H28.57q-.5 0-.82-.32t-.32-.823V-4.57H24q-.5 0-.82-.323t-.323-.82V-8q0-.5.322-.82t.82-.323h3.43v-4.714q-7.75-.857-13.02-6.697T9.144-34.286q0-7.178 4.5-12.82L11.786-49 8.18-45.036q-.323.357-.787.375t-.822-.27L4.858-46.5q-.357-.286-.375-.768t.304-.84l3.75-4.106-3.965-4v4.785q0 .5-.32.823t-.82.32H1.142q-.5 0-.822-.32T0-51.43v-10.284q0-.93.68-1.607T2.285-64H12.57q.5 0 .823.32t.32.823v2.286q0 .5-.32.82t-.822.32H7.82l3.787 3.823 3.072-3.357q.32-.357.784-.375t.822.27L18-57.5q.357.286.375.768t-.304.84l-3.213 3.535 2.036 2q5.643-4.5 12.82-4.5t12.823 4.5l9.107-9.072h-4.786q-.5 0-.82-.32t-.323-.82v-2.287zm-16 44.57q6.607 0 11.304-4.695t4.696-11.304-4.696-11.303-11.304-4.696T18.41-45.59t-4.696 11.304 4.697 11.304 11.304 4.696z","VENUS_DOUBLE":"M63.93-45.107q.427 5.536-1.876 10.428t-6.643 8T45.715-23v9.286h8q.5 0 .822.32t.32.823v2.284q0 .5-.32.822t-.822.32h-8v8q0 .5-.32.823T44.57 0h-2.284q-.5 0-.822-.32t-.32-.823v-8H22.856v8q0 .5-.32.822t-.823.32H19.43q-.5 0-.823-.32t-.32-.823v-8h-8q-.5 0-.823-.32t-.32-.823v-2.285q0-.5.32-.823t.822-.32h8V-23q-5.357-.57-9.697-3.68t-6.644-8T.07-45.106q.61-7.357 5.876-12.732t12.59-6.053q7.357-.75 13.464 3.357 6.107-4.107 13.464-3.357 7.322.68 12.59 6.054t5.875 12.733zM32-32.25q4.57-4.68 4.57-11.18T32-54.606q-4.57 4.678-4.57 11.178T32-32.25zm-11.43 4.82q4.11 0 7.787-2.034-5.5-5.893-5.5-13.965 0-8 5.5-13.963-3.678-2.036-7.786-2.036-6.606 0-11.302 4.698T4.57-43.43 9.27-32.124 20.57-27.43zm20.573 13.716V-23Q36.25-23.536 32-26.357q-4.25 2.82-9.143 3.357v9.286h18.286zM43.43-27.43q6.606 0 11.302-4.695T59.43-43.43 54.73-54.73 43.43-59.43q-4.11 0-7.787 2.037 5.5 5.964 5.5 13.964 0 8.073-5.5 13.966 3.678 2.035 7.786 2.035z","MARS_DOUBLE":"M54.857-49.143q0-.5.322-.82t.82-.323h10.286q.928 0 1.607.68T68.57-48v10.286q0 .5-.32.82t-.82.323h-2.287q-.5 0-.822-.323t-.32-.82V-42.5l-9.07 9.107Q57.642-30 58.767-25.75t.34 8.82Q58-10.43 53.177-5.785T41.822-.214Q34.32.82 28.09-3.07t-8.626-10.716Q15.286-14 11.57-15.84t-6.338-4.75-4.053-6.874T.035-35.68q.32-4.82 2.785-9t6.5-6.838 8.86-3.196q4.213-.5 8.124.678t7.09 3.68L42.5-59.43h-4.786q-.5 0-.82-.32t-.323-.82v-2.287q0-.5.323-.822t.82-.32H48q.93 0 1.607.68t.68 1.606v10.285q0 .5-.323.823t-.82.32h-2.287q-.5 0-.82-.32t-.323-.822v-4.784l-9.07 9.107q2.106 2.643 3.32 6.036 6.5.32 11.715 4.427l9.106-9.07H56q-.5 0-.82-.323t-.323-.82v-2.287zM36.57-34.286q0-.714-.14-2.07-5.787.892-9.68 5.356t-3.893 10.43q0 .713.143 2.07 5.786-.893 9.68-5.357t3.89-10.43zm-32 0q0 6 3.966 10.5t9.857 5.322q-.107-1.036-.107-2.107 0-7.5 4.82-13.198t12.073-7.018q-1.894-4.285-5.84-6.893t-8.77-2.606q-6.606 0-11.302 4.697T4.57-34.285zM38.858-4.57q6.607 0 11.304-4.698t4.697-11.303q0-6-3.964-10.5t-9.857-5.323q.107 1.036.107 2.107 0 7.5-4.822 13.197t-12.07 7.02q1.893 4.284 5.84 6.89t8.767 2.61z","VENUS_MARS":"M59.43-62.857q0-.5.32-.822t.82-.32h10.287q.93 0 1.607.68t.68 1.606v10.285q0 .5-.323.823t-.82.32h-2.286q-.5 0-.82-.32t-.323-.822v-4.784l-9.07 9.107q2.714 3.393 3.84 7.643t.34 8.82q-1.144 6.43-5.876 11.073t-11.197 5.606Q38.643-12.75 32-17.18q-4.18 2.787-9.143 3.323v4.714h3.43q.5 0 .82.322t.322.82v2.286q0 .5-.323.82t-.82.323h-3.43v3.427q0 .5-.32.822t-.823.32H19.43q-.5 0-.823-.32t-.32-.823V-4.57h-3.43q-.5 0-.82-.323t-.323-.82V-8q0-.5.322-.82t.82-.323h3.43v-4.714q-5.536-.607-9.982-3.91t-6.68-8.483-1.41-10.964q.893-6.68 5.697-11.518t11.447-5.875q8-1.214 14.643 3.214 5.214-3.464 11.43-3.464 7.177 0 12.82 4.5l9.107-9.072H60.57q-.5 0-.82-.32t-.32-.82v-2.287zM32-23.107q4.57-4.68 4.57-11.18T32-45.463q-4.57 4.678-4.57 11.178T32-23.106zM4.57-34.287q0 6.608 4.698 11.305t11.303 4.696q4.18 0 7.787-2.035-5.5-5.966-5.5-13.966t5.5-13.964q-3.607-2.036-7.786-2.036-6.606 0-11.302 4.697T4.57-34.285zm38.86 16q6.606 0 11.302-4.695t4.697-11.304T54.73-45.59 43.43-50.285q-4.18 0-7.787 2.036 5.5 5.964 5.5 13.964t-5.5 13.965q3.607 2.034 7.786 2.034z","MARS_STROKE":"M52.57-59.43q.93 0 1.61.68t.677 1.607v14.857q0 .5-.32.822t-.823.32H51.43q-.5 0-.823-.32t-.32-.822v-9.357L42.678-44l5 5q.32.357.32.82t-.32.787l-1.644 1.643q-.322.32-.786.32t-.82-.32l-5-5.036-2.787 2.822q4.5 5.57 4.5 12.82 0 4.18-1.625 7.983t-4.393 6.57-6.57 4.394T20.57-4.57t-7.98-1.626-6.572-4.393-4.393-6.57T0-25.144t1.625-7.982 4.393-6.57 6.57-4.394 7.983-1.624q7.25 0 12.823 4.5L36.18-44l-6.144-6.143q-.322-.357-.322-.82t.322-.787l1.643-1.643q.32-.32.784-.32t.822.32l6.143 6.143 7.606-7.607h-9.322q-.5 0-.82-.322T36.57-56v-2.286q0-.5.323-.82t.82-.323h14.858zm-32 50.287q6.61 0 11.305-4.696t4.696-11.303-4.695-11.303-11.304-4.697T9.27-36.446 4.57-25.143 9.27-13.84 20.57-9.142z","MARS_STROKE_V":"M22.857-41q7.75.857 13.018 6.696t5.268 13.733q0 5.963-3.107 10.927t-8.43 7.572T18.215-.144q-4.75-.536-8.768-3.143T2.946-10 .07-18.893Q-.356-24.43 1.947-29.32t6.643-8T18.285-41v-4.714H12.57q-.5 0-.82-.322t-.32-.82v-2.287q0-.5.32-.82t.82-.323h5.716v-5.893L15-52.892q-.357.322-.82.322t-.787-.323l-1.643-1.643q-.32-.32-.32-.785t.32-.823l7.214-7.178q.68-.68 1.607-.68t1.61.68l7.213 7.177q.32.357.32.822t-.32.784l-1.643 1.643q-.32.322-.786.322t-.82-.323l-3.287-3.286v5.894h5.714q.5 0 .823.322t.32.82v2.287q0 .5-.32.82t-.822.323h-5.713V-41zM20.57-4.57q6.61 0 11.305-4.698T36.57-20.57t-4.695-11.305T20.57-36.57 9.27-31.876 4.57-20.57 9.27-9.27 20.57-4.57z","MARS_STROKE_H":"M67.893-31.32q.678.677.678 1.606t-.677 1.607l-10.5 10.5q-.322.357-.804.357t-.804-.357l-1.607-1.607q-.36-.322-.36-.804t.36-.803l6.606-6.61h-10.5v8q0 .5-.322.823t-.82.32h-2.287q-.5 0-.82-.32t-.323-.822v-8H41q-.857 7.75-6.696 13.02T20.57-9.144q-5.963 0-10.927-3.107T2.07-20.68.144-32.07q.536-4.75 3.143-8.77T10-47.34t8.893-2.874q5.536-.43 10.428 1.875t8 6.644T41-32h4.714v-8q0-.5.322-.82t.82-.323h2.287q.5 0 .82.322t.323.82v8h10.5l-6.607-6.607q-.36-.322-.36-.804t.36-.804l1.606-1.607q.32-.36.803-.36t.803.36zM20.57-13.715q6.61 0 11.305-4.697t4.696-11.304-4.695-11.304-11.304-4.696T9.27-41.018 4.57-29.714 9.27-18.41t11.303 4.696z","NEUTER":"M41.143-43.43q0 7.894-5.268 13.734T22.857-23v21.857q0 .5-.32.822t-.823.32H19.43q-.5 0-.823-.32t-.32-.823V-23q-7.75-.857-13.02-6.696T0-43.43q0-4.177 1.625-7.98t4.393-6.572 6.57-4.393T20.572-64t7.984 1.625 6.57 4.393 4.394 6.57 1.625 7.983zm-20.572 16q6.61 0 11.305-4.695T36.57-43.43 31.876-54.73 20.57-59.43 9.27-54.73 4.57-43.43 9.27-32.124 20.57-27.43z","GENDERLESS":"M36.57-29.714q0-6.607-4.695-11.304T20.57-45.714 9.27-41.018 4.57-29.714 9.27-18.41t11.303 4.696 11.305-4.697 4.696-11.304zm4.573 0q0 4.178-1.625 7.982t-4.393 6.57-6.57 4.394-7.984 1.625-7.98-1.625-6.572-4.393-4.393-6.572T0-29.714t1.625-7.982 4.393-6.572 6.57-4.393 7.983-1.626 7.984 1.625 6.57 4.392 4.394 6.572 1.625 7.982z","FACEBOOK_OFFICIAL":"M51.82-59.43q1.25 0 2.144.894t.893 2.143v48.786q0 1.25-.893 2.143t-2.143.893H37.858v-21.25h7.107l1.072-8.287h-8.18v-5.286q0-2 .84-3t3.268-1l4.357-.036v-7.39q-2.25-.323-6.356-.323-4.857 0-7.768 2.857t-2.91 8.072v6.107h-7.143v8.286h7.143v21.25H3.036q-1.25 0-2.143-.894T0-7.607v-48.786q0-1.25.893-2.143t2.143-.893H51.82z","PINTEREST_P":"M0-42.68q0-3.856 1.34-7.266t3.696-5.947 5.428-4.393 6.607-2.785 7.216-.93q5.643 0 10.5 2.375t7.893 6.91 3.034 10.25q0 3.43-.678 6.715t-2.143 6.32-3.572 5.34-5.177 3.68-6.75 1.374q-2.43 0-4.822-1.143t-3.427-3.14q-.357 1.39-1 4.016t-.84 3.393-.732 2.535-.927 2.536-1.143 2.233-1.643 2.768-2.214 3.09l-.5.18-.322-.36q-.534-5.606-.534-6.713 0-3.286.768-7.375t2.375-10.268 1.856-7.25q-1.143-2.32-1.143-6.035 0-2.966 1.857-5.573t4.714-2.607q2.18 0 3.393 1.446t1.214 3.66q0 2.358-1.57 6.823t-1.57 6.677q0 2.25 1.606 3.732t3.893 1.48q1.963 0 3.64-.89t2.805-2.43 2-3.393 1.357-3.946.714-3.964.233-3.553q0-6.18-3.912-9.625T23.32-58.18q-7.14 0-11.927 4.626T6.607-41.82q0 1.57.447 3.034t.964 2.322.964 1.625.447 1.09q0 1-.537 2.607T7.57-29.536q-.07 0-.606-.107-1.82-.536-3.232-2t-2.178-3.375-1.16-3.857T0-42.68z","WHATSAPP":"M35.18-29.214q.463 0 3.48 1.57t3.197 1.894q.072.18.072.536 0 1.178-.61 2.714-.57 1.393-2.534 2.34t-3.643.946q-2.036 0-6.786-2.215-3.5-1.606-6.07-4.213T17-32.25q-2.57-3.82-2.536-6.93v-.284q.107-3.25 2.643-5.643.857-.786 1.857-.786.215 0 .643.054t.68.054q.677 0 .945.232t.554.983q.285.713 1.178 3.14t.893 2.68q0 .75-1.232 2.054t-1.232 1.66q0 .25.178.536 1.216 2.607 3.644 4.893 2 1.893 5.393 3.607.43.25.786.25.536 0 1.928-1.732t1.86-1.732zm-7.25 18.928q4.534 0 8.695-1.785t7.16-4.787 4.786-7.16 1.787-8.697-1.786-8.697-4.784-7.16-7.16-4.787-8.697-1.786-8.698 1.786-7.16 4.786-4.786 7.16T5.5-32.715q0 7.25 4.286 13.143l-2.822 8.32L15.607-14q5.643 3.714 12.322 3.714zm0-49.357q5.463 0 10.445 2.143t8.59 5.75 5.75 8.59 2.142 10.446-2.143 10.446-5.75 8.59-8.59 5.75T27.93-5.787q-6.966 0-13.037-3.357L0-4.357 4.857-18.82Q1-25.18 1-32.715 1-38.18 3.143-43.16t5.75-8.59 8.59-5.75 10.446-2.143z","SERVER":"M4.57-13.714h36.573v-4.572H4.57v4.572zM4.57-32h36.573v-4.57H4.57V-32zm56 16q0-1.43-1-2.43t-2.427-1-2.43 1-1 2.43 1 2.43 2.43 1 2.428-1 1-2.43zm-56-34.286h36.573v-4.57H4.57v4.57zm56 16q0-1.428-1-2.428t-2.427-1-2.43 1-1 2.428 1 2.43 2.43 1 2.428-1 1-2.43zm0-18.285q0-1.43-1-2.43t-2.427-1-2.43 1-1 2.43 1 2.427 2.43 1 2.428-1 1-2.428zM64-22.858v13.714H0v-13.714h64zm0-18.286v13.714H0v-13.713h64zm0-18.286v13.716H0V-59.43h64z","USER_PLUS":"M25.143-32q-5.68 0-9.697-4.018t-4.017-9.696 4.016-9.697 9.697-4.02 9.696 4.02 4.017 9.696-4.018 9.696T25.142-32zm34.286 4.57H72q.464 0 .804.34t.34.804v6.857q0 .466-.34.805t-.804.34H59.43v12.57q0 .465-.34.804t-.804.34H51.43q-.466 0-.805-.34t-.34-.804v-12.572h-12.57q-.465 0-.804-.34t-.34-.803v-6.856q0-.464.34-.803t.804-.34h12.572V-40q0-.464.34-.804t.803-.34h6.856q.464 0 .803.34t.34.804v12.57zm-26.287 8q0 1.86 1.357 3.216t3.214 1.357h9.143v8.5Q44.43-4.57 40.75-4.57H9.536q-4.322 0-6.93-2.466T0-13.82q0-1.894.125-3.698t.5-3.893.946-3.876 1.537-3.482T5.32-31.66t3.055-1.91 3.982-.716q.68 0 1.393.607 2.82 2.18 5.518 3.27t5.875 1.09 5.875-1.09 5.518-3.27q.714-.606 1.393-.606 4.713 0 7.75 3.43h-7.966q-1.857 0-3.214 1.356t-1.357 3.214v6.857z","USER_TIMES":"M25.143-32q-5.68 0-9.697-4.018t-4.017-9.696 4.016-9.697 9.697-4.02 9.696 4.02 4.017 9.696-4.018 9.696T25.142-32zm38.464 11.43l8.893 8.89q.32.323.32.823 0 .464-.32.786l-4.857 4.856q-.322.32-.786.32-.5 0-.82-.32l-8.894-8.893-8.893 8.893q-.32.32-.82.32-.466 0-.787-.32l-4.857-4.857q-.322-.323-.322-.787 0-.5.322-.822l8.893-8.89-8.894-8.894q-.322-.322-.322-.822 0-.464.322-.785l4.857-4.86q.32-.32.786-.32.5 0 .82.32l8.893 8.894 8.893-8.893q.32-.32.82-.32.465 0 .787.32l4.857 4.86q.32.32.32.784 0 .5-.32.822zm-17.786 0l-6.463 6.463q-1.32 1.32-1.32 3.25 0 1.893 1.32 3.214L42.32-4.68q-.75.11-1.57.11H9.536q-4.322 0-6.93-2.466T0-13.82q0-1.894.125-3.698t.5-3.893.946-3.876 1.537-3.482T5.32-31.66t3.055-1.91 3.982-.716q.68 0 1.393.607 5.5 4.36 11.393 4.36t11.393-4.36q.714-.606 1.393-.606 1 0 2.034.215-1 .963-1.464 1.784t-.464 2q0 1.93 1.32 3.25z","HOTEL":"M9.143-27.43h61.714q.93 0 1.607.68t.68 1.607v16H64v-9.143H9.143v9.143H0V-52.57q0-.93.68-1.61t1.606-.677h4.57q.93 0 1.608.678t.68 1.61v25.14zm20.57-11.427q0-3.786-2.677-6.464T20.57-48t-6.463 2.68-2.678 6.463 2.677 6.464 6.464 2.68 6.466-2.68 2.678-6.464zm43.43 9.143V-32q0-5.68-4.018-9.696t-9.696-4.018H34.285q-.93 0-1.607.678T32-43.43v13.716h41.143z","VIACOIN":"M54.857-64L48-48h6.857v6.857H45.07l-1.963 4.572h11.75v6.856H40.18L27.43 0 14.68-29.714H0v-6.857h11.75l-1.964-4.573H0V-48h6.857L0-64h9.143L20.68-36.57h13.5L45.713-64h9.143zM27.43-20.57l3.856-9.144H23.57z","TRAIN":"M38.857-64q6.607 0 11.304 3.34t4.697 8.09v32q0 4.64-4.482 7.927T39.465-9.18l7.606 7.216q.573.535.287 1.25T46.287 0H8.57Q7.787 0 7.5-.714t.286-1.25l7.607-7.215q-6.43-.177-10.91-3.463T0-20.57v-32q0-4.75 4.696-8.09T16-64h22.857zM27.43-16q2.856 0 4.856-2t2-4.857-2-4.857-4.857-2-4.86 2-2 4.857 2 4.857 4.86 2zM48-36.57v-18.287H6.857v18.286H48z","SUBWAY":"M38.857-64q6.607 0 11.304 3.34t4.697 8.09v32q0 4.64-4.482 7.927T39.465-9.18l7.606 7.216q.573.535.287 1.25T46.287 0H8.57Q7.787 0 7.5-.714t.286-1.25l7.607-7.215q-6.43-.177-10.91-3.463T0-20.57v-32q0-4.75 4.696-8.09T16-64h22.857zm-28.57 46.857q2.356 0 4.034-1.678T16-22.858t-1.68-4.036-4.034-1.678-4.036 1.677-1.68 4.036 1.68 4.036 4.036 1.677zM25.142-36.57v-18.287H5.713v18.286h19.43zM44.57-17.144q2.36 0 4.037-1.678t1.68-4.037-1.68-4.036-4.036-1.678-4.034 1.677-1.68 4.036 1.68 4.036 4.035 1.677zm5.716-19.428v-18.287H29.714v18.286h20.572z","MEDIUM":"M64-16.43v7.466H41.07v-7.465h4.787V-49.5h-.214L34.43-8.964h-8.68L14.68-49.5h-.287v33.07h4.82v7.466H0v-7.465h2.464q.75 0 1.536-.695t.786-1.34v-31.464q0-.64-.786-1.427t-1.536-.786H0v-7.464h24l7.893 29.32h.214l7.964-29.32H64v7.464h-2.536q-.678 0-1.464.786t-.786 1.428v31.466q0 .643.768 1.34t1.482.695H64z","YC":"M28.893-28.143l9.5-17.82h-4l-5.607 11.142q-.857 1.713-1.572 3.284l-1.5-3.285-5.535-11.144h-4.287l9.393 17.607v11.57h3.607v-11.356zM54.857-59.43v54.86H0v-54.86h54.857z","OPTIN_MONSTER":"M17.07-4.18q-.284.573-.963 1.234t-1.32.91q-.894.322-1.84-.125t-1.018-1.126q-.037-.785 1.427-1.964t2.43-1.357q.82-.143 1.213.768t.07 1.66zm47.894 0q.25.573.93 1.234t1.356.91q.893.322 1.84-.125t.98-1.126q.073-.785-1.41-1.964t-2.446-1.357q-.785-.143-1.178.768t-.072 1.66zm1.715-3.89q.463.963 2.016 2.124t2.768 1.482q1.607.464 2.93-.16t1.32-1.805q0-1.64-2.41-3.588t-4.125-2.125q-1.43-.178-2.27 1.34t-.23 2.732zm-51.394 0q-.465.963-2 2.124t-2.75 1.482Q8.93-4 7.606-4.624T6.287-6.43q0-1.64 2.41-3.588t4.125-2.125q1.43-.178 2.25 1.34t.216 2.732zm26.07-40.144h.037q-1.464 0-2.714.535.963.287 1.57 1.09t.607 1.77q0 1.25-.964 2.14t-2.322.894q-1.856 0-2.856-1.535-.178.82-.178 1.5 0 2.64 2 4.516t4.82 1.875q2.858 0 4.858-1.874t2-4.517-2-4.52-4.857-1.874zM52.215-56q-3.535-3.893-7.875-4.696t-8.77 1.59q.966-2.144 2.948-3.448t4.214-1.41 4.34.607 3.553 2.66T52.215-56zM79-11.75q.286.393-.393 1.5.25.82.25 1.43.036 2-1.59 4.016t-3.91 3.268-4.214 1.322q-1.714.07-3.286-.768T63.5-3.322q-24.536.893-44.964 0Q17.714-1.856 16.16-1t-3.303.786Q9.787-.32 6.447-3.09T3.142-8.82q.07-.787.25-1.43-.68-1.107-.393-1.5.214-.357 1.107-.036.5-.785 1.464-1.82-.25-1.037.073-1.358.393-.357 1.393.143 1.035-.716 2.107-1.216 0-1.035.464-1.32.822-.43 1.822.57 1.25-.178 2.177.072.643.143 1.357.678v-2.607q-.393 0-.643-.07-1.89-.358-3.463-1.59T8.893-23.43q-.322-1.356 0-2.89.536-2.216 3.32-3.394.073-.607.68-1.268t1.286-.84 1.177.268.68 1.09h.463q1.643.178 2.143.82.107.108.178.25.36-.035 1.09-.124t1.09-.125q-.536-.393-1.07-.607-.823-1.43-3.25-1.536 0-.214.034-.357-2.214-.07-4.232-.66T9.464-34.5q-1.143-1.286-1.518-3.286t-.09-4q.573-4.5 3.215-6.393.823-.57 1.86-.16t1.14 1.447q0 .036.055.5t.09.75.106.714.198.68.303.357q.966.5 2.716.43 1.714-1.644 3.5-2.644-1.43-.143-5.786.5l1.68-1.643q2.177-2.07 5.82-3.964 5.18-2.607 10.07-3.072-.713-.285-1.463-.553t-1.678-.5-1.52-.374-1.696-.393-1.535-.357q21.25-4.5 32.284 4.964 3.5 3 5.643 7.93 3.036.356 4.322-.323h.034q.18-.107.304-.357t.196-.68.107-.695.11-.768l.034-.5q.107-1 1.143-1.428t1.857.177q2.607 1.857 3.25 6.357.25 2.036-.125 4.036t-1.52 3.25q-1 1.143-2.98 1.732t-4.126.66v.358q-2.535.07-3.393 1.536-.5.178-1.106.607.393.036 1.143.125t1.072.125q.034-.143.177-.286.572-.643 2.143-.82h.464q.18-.644.68-1.073t1.177-.285 1.287.82.68 1.286q2.82 1.143 3.32 3.393.322 1.427.036 2.89-.43 1.894-2 3.144t-3.464 1.572q-.36.07-.61.07 0 1.75-.034 2.608.714-.535 1.357-.678.928-.25 2.178-.072 1-1 1.823-.57.5.32.5 1.32 1.178.572 2.107 1.215.964-.466 1.357-.144.357.357.072 1.357 1 1.07 1.463 1.82.82-.284 1.107.037zm-9.82-34q0 1.036-.323 1.93 2.93 1.14 4 4.713.143-1.322-.34-3.518t-1.48-3.232q-.716-.68-1.287-.607t-.57.714zm-2.787 3.57q1.25 1.5 1.696 3.876t-.02 4.447q2.394-.464 3.466-1.607.464-.5.643-1-.11-2.286-1.11-4.09t-2.82-2.375q-.536.537-1.857.75zm-1.322.144q-1.07 0-1.57-.035 1.5 4.106 1.893 8.534.75 0 1.536-.107.57-2.428.034-4.82t-1.893-3.573zm-55.856 2.93q1.072-3.573 4-4.715-.32-.894-.32-1.93 0-.643-.59-.714t-1.268.607q-1 1.036-1.482 3.232t-.34 3.518zm1.286 3.642q1.036 1.107 3.464 1.607-.464-2.072-.018-4.447t1.697-3.875q-1.322-.213-1.857-.75-1.822.573-2.804 2.36t-1.125 4.106q.322.607.643 1zm6.32 1.928q.5-4.428 2.61-8.393-.68.144-1.966.644l-1.607.68v-.037q-1.643 3.18-.714 7 .893.107 1.678.107zm34.394 1.393q.286 1.357.59 3.875t.41 3.197q.107.64.34.766t.84-.16q1.427-.715 2.213-3.054T56.43-32q-.86-.07-5.216-.143zm-10.07-22.893q-4.144 0-7.108 2.947T31.07-45q0 4.18 2.966 7.125t7.107 2.946 7.107-2.945T51.214-45q0-4.143-2.964-7.09t-7.107-2.946zm8.142 22.822q-3.786-.072-7.536 0v-.036q-.036.964.09 3.07t.48 2.36q1.037.5 3.34.516t3.41-.375q.323-.106.394-1.39t-.018-2.484-.16-1.66zm-9.572 7.107q.286-.143.34-1.714t-.018-3.144-.143-2.25v-.036l-7.643.107q-.143.714-.25 2.214t0 2.966.5 1.643q1.214.534 3.607.57t3.607-.357zm-14.07-6.75q-.573 2.107.16 4.232t2.767 3.018q.537.286.86.178t.427-.75q.107-.57.286-3.213t.357-3.678q-2.464.07-4.857.213zm-4.537 4.5q.107.82-1.214 1.286 4.714 5.034 9.696 8.57T40.5-12q6.143-1.75 11.09-5.214t10.48-8.93q-1.177-.463-1.07-1.213l.107-.322v-.034.035q-.607-.07-1.786-.195t-1.713-.16q-.928 3.214-2.928 4.714-1.823 1.356-2.93-.037-.18-.214-.32-.5-.25-.464-.61-2.214-.07.177-.177.32t-.268.25-.286.196-.34.143l-.357.09-.43.07-.427.054-.482.035-.483.017q-3.784.322-5.82-.393-.143.607-.357.947t-.75.536-.822.25-1.284.125q-.072 0-.107.02t-.11.017h-.106q-6.393.607-7.25-1.428-.07 2.25-2 1.927-1.678-.286-3.25-1.928-.428-.466-.714-.93-.607-1.036-.93-2.32-2.07.213-3.106.356.036.07.143.357zm-3 22.428q.107-.5.107-1.07-.607-2.536-1.82-4.643t-2.608-2.5q-1.465-.428-3.625.518T6.43-9.768t-1.394 3.84q1.25 1.892 3.57 3.32t4.25 1.5q1.823.072 3.358-1t1.893-2.82zm.107-6.106q.822 2.25.965 4.25 6.963-4.035 14-6.214-3.5-1.857-6.448-4.286t-6.41-5.893q-.215.144-1.036.466 0 .07-.036.178t-.036.143q1.107.643.786 1.322-.43.82-2 1.213-.357.464-1.036.857h-.035q-.073 2.964.034 5.357.68 1.214 1.25 2.607zm2.465 5.93q19 .75 40.89 0-9.07-5.25-15.284-7-2.715 1.25-5.572 2.035-.285.106-.57 0-2.323-.75-4.608-1.75-7.43 2.14-14.857 6.713h-.037v.036q.036 0 .036-.037zM62.963-6.75q.143-1.93 1-4.286.5-1.357 1.18-2.535l-.037.034q.107-2.75.107-5.464-.535-.286-1.07-.893-1.5-.32-2-1.178-.323-.716.785-1.36-.073-.14-.073-.32-.57-.143-1-.43-7.286 6.787-13.678 10.144 7.07 2.107 14.784 6.286zm14 .82q.18-1.927-1.393-3.838t-3.713-2.857-3.643-.518q-1.357.393-2.59 2.518T63.787-6q0 .57.107 1.07.357 1.75 1.893 2.823t3.357 1q1.928-.072 4.25-1.5t3.57-3.322z","OPENCART":"M54.43-8.25q0 2.43-1.716 4.143T48.57-2.393t-4.16-1.714-1.73-4.143 1.73-4.16 4.16-1.733 4.144 1.732 1.715 4.16zm-26.75 0q0 2.43-1.734 4.143t-4.16 1.714-4.143-1.714T15.93-8.25t1.713-4.16 4.143-1.733 4.16 1.732 1.733 4.16zM0-61.607q2.036 2.143 3.946 3.732t4.322 2.93 4.857 2.25 5.93 1.624 7.14 1.124 8.93.66 10.857.34 13.304.09q4.964 0 8.732.177t6.464.59 4.43.983 2.534 1.41.858 1.84-.697 2.286-2.018 2.73-3.197 3.25-4.143 3.733-4.964 4.25Q60.68-22 57.07-18.787q1.037-1.82 2.734-3.892t3.357-3.766 3.376-3.518 2.964-3.268 1.93-2.875.463-2.5-1.625-1.982-4.16-1.464-7.287-.84-10.856-.177q-6 .07-11.214-.216t-9.143-.82-7.303-1.465-5.697-1.84-4.375-2.233-3.268-2.375-2.428-2.553-1.804-2.484-1.428-2.428T0-61.607z","EXPEDITEDSSL":"M32-61.714q-6.036 0-11.536 2.357t-9.482 6.34-6.34 9.48T2.287-32t2.357 11.536 6.34 9.482 9.48 6.34T32-2.287t11.536-2.357 9.482-6.34 6.34-9.48T61.713-32t-2.357-11.536-6.34-9.482-9.48-6.34T32-61.713zM32-64q6.5 0 12.43 2.536t10.213 6.82 6.82 10.215T64-32t-2.536 12.43-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64zM17.714-34.286q.572 0 .572.572v17.143q0 .57-.572.57H16.57q-.57 0-.57-.57v-17.144q0-.572.57-.572h1.144zM32-32q1.893 0 3.232 1.34t1.34 3.23q0 1.25-.626 2.287t-1.66 1.643v4.07q0 .5-.322.823t-.82.32h-2.287q-.5 0-.82-.32t-.323-.822v-4.07q-1.035-.607-1.66-1.643t-.625-2.286q0-1.89 1.338-3.23T32-32zm0-27.43q7.464 0 13.768 3.68t9.982 9.982T59.43-32t-3.68 13.768-9.982 9.982T32-4.57 18.232-8.25 8.25-18.232 4.57-32t3.68-13.768 9.982-9.982T32-59.43zM19.43-42.285v3.43q0 .5.32.82t.82.322h2.287q.5 0 .822-.322t.32-.82v-3.43q0-3.32 2.34-5.66t5.66-2.34 5.66 2.34 2.34 5.66v3.43q0 .5.32.82t.823.322h2.286q.5 0 .82-.322t.32-.82v-3.43q0-5.214-3.677-8.893T32-54.856t-8.893 3.678-3.678 8.894zM50.285-16v-18.286q0-.928-.68-1.607T48-36.57H16q-.93 0-1.607.677t-.68 1.607V-16q0 .93.68 1.607t1.607.68h32q.93 0 1.607-.68t.68-1.607z","BATTERY_FULL":"M68.57-45.714v27.428H9.144v-27.428H68.57zm4.573 20.57h4.57v-13.713h-4.57v-10.286q0-.5-.322-.82t-.82-.323H5.714q-.5 0-.82.322t-.323.82v34.287q0 .5.323.82t.82.323H72q.5 0 .82-.322t.323-.82v-10.287zm9.143-13.713v13.714q0 1.893-1.34 3.232t-3.232 1.34v5.713q0 2.357-1.678 4.036T72-9.144H5.714q-2.357 0-4.035-1.678T0-14.858v-34.286Q0-51.5 1.68-53.18t4.034-1.677H72q2.357 0 4.036 1.678t1.678 4.037v5.714q1.893 0 3.232 1.34t1.34 3.233z","BATTERY_THREE_QUARTERS":"M9.143-18.286v-27.428h45.714v27.428H9.143zm68.57-25.143q1.894 0 3.233 1.34t1.34 3.233v13.714q0 1.893-1.34 3.232t-3.232 1.34v5.713q0 2.357-1.678 4.036T72-9.144H5.714q-2.357 0-4.035-1.678T0-14.858v-34.286Q0-51.5 1.68-53.18t4.034-1.677H72q2.357 0 4.036 1.678t1.678 4.037v5.714zm0 18.287v-13.714h-4.57v-10.286q0-.5-.322-.82t-.82-.323H5.714q-.5 0-.82.322t-.323.82v34.287q0 .5.323.82t.82.323H72q.5 0 .82-.322t.323-.82v-10.287h4.57z","BATTERY_HALF":"M9.143-18.286v-27.428h32v27.428h-32zm68.57-25.143q1.894 0 3.233 1.34t1.34 3.233v13.714q0 1.893-1.34 3.232t-3.232 1.34v5.713q0 2.357-1.678 4.036T72-9.144H5.714q-2.357 0-4.035-1.678T0-14.858v-34.286Q0-51.5 1.68-53.18t4.034-1.677H72q2.357 0 4.036 1.678t1.678 4.037v5.714zm0 18.287v-13.714h-4.57v-10.286q0-.5-.322-.82t-.82-.323H5.714q-.5 0-.82.322t-.323.82v34.287q0 .5.323.82t.82.323H72q.5 0 .82-.322t.323-.82v-10.287h4.57z","BATTERY_QUARTER":"M9.143-18.286v-27.428H27.43v27.428H9.142zm68.57-25.143q1.894 0 3.233 1.34t1.34 3.233v13.714q0 1.893-1.34 3.232t-3.232 1.34v5.713q0 2.357-1.678 4.036T72-9.144H5.714q-2.357 0-4.035-1.678T0-14.858v-34.286Q0-51.5 1.68-53.18t4.034-1.677H72q2.357 0 4.036 1.678t1.678 4.037v5.714zm0 18.287v-13.714h-4.57v-10.286q0-.5-.322-.82t-.82-.323H5.714q-.5 0-.82.322t-.323.82v34.287q0 .5.323.82t.82.323H72q.5 0 .82-.322t.323-.82v-10.287h4.57z","BATTERY_EMPTY":"M77.714-43.43q1.893 0 3.232 1.34t1.34 3.233v13.714q0 1.893-1.34 3.232t-3.232 1.34v5.713q0 2.357-1.678 4.036T72-9.144H5.714q-2.357 0-4.035-1.678T0-14.858v-34.286Q0-51.5 1.68-53.18t4.034-1.677H72q2.357 0 4.036 1.678t1.678 4.037v5.714zm0 18.287v-13.714h-4.57v-10.286q0-.5-.323-.82t-.82-.323H5.714q-.5 0-.82.322t-.323.82v34.287q0 .5.323.82t.82.323H72q.5 0 .82-.322t.323-.82v-10.287h4.57z","MOUSE_POINTER":"M40.464-26.75q1.107 1.07.5 2.464-.607 1.43-2.107 1.43H25.214l7.18 17q.356.892 0 1.75t-1.215 1.25L24.856-.18q-.893.36-1.75 0t-1.25-1.213l-6.82-16.143L3.892-6.393q-.68.68-1.607.68-.43 0-.857-.18Q0-6.5 0-8v-53.714q0-1.5 1.43-2.107.427-.18.856-.18.964 0 1.607.68z","I_CURSOR":"M29.714-59.43q-11.428 0-11.428 8v14.86h4.57V-32h-4.57v19.43q0 8 11.428 8H32V0h-2.286Q20 0 16-5.214 12 0 2.286 0H0v-4.57h2.286q11.428 0 11.428-8V-32h-4.57v-4.57h4.57v-14.86q0-8-11.428-8H0V-64h2.286Q12-64 16-58.786 20-64 29.714-64H32v4.57h-2.286z","OBJECT_GROUP":"M73.143-50.286H68.57v36.572h4.573V0H59.43v-4.57H13.713V0H0v-13.714h4.57v-36.572H0V-64h13.714v4.57H59.43V-64h13.713v13.714zM64-59.43v4.573h4.57v-4.572H64zm-59.43 0v4.573h4.573v-4.572H4.57zM9.144-4.57v-4.573H4.57v4.572h4.573zM59.43-9.144v-4.57H64v-36.573h-4.57v-4.57H13.713v4.57h-4.57v36.572h4.57v4.57H59.43zm9.14 4.572v-4.573H64v4.572h4.57zM45.715-41.144H59.43v27.43h-32v-9.144H13.713v-27.43h32v9.144zM18.286-27.43h22.857v-18.284H18.286v18.285zm36.57 9.144V-36.57h-9.142v13.713H32v4.57h22.857z","OBJECT_UNGROUP":"M82.286-36.57h-4.572v22.856h4.572V0H68.57v-4.57h-32V0H22.858v-13.714h4.572v-4.572H13.713v4.572H0V-27.43h4.57v-22.856H0V-64h13.714v4.57h32V-64H59.43v13.714h-4.573v4.572H68.57v-4.572h13.716v13.715zm-9.143-9.144v4.57h4.57v-4.57h-4.57zM50.286-59.43v4.573h4.57v-4.572h-4.57zm-45.715 0v4.573h4.573v-4.572H4.57zm4.573 41.144v-4.57H4.57v4.57h4.573zm45.714-4.57h-4.57v4.57h4.57v-4.57zm-41.143 0h32v-4.573h4.572v-22.856h-4.572v-4.57h-32v4.57h-4.57v22.857h4.57v4.573zM32-4.572v-4.573h-4.57v4.572H32zm45.714 0v-4.573h-4.57v4.572h4.57zm-4.57-9.144V-36.57H68.57v-4.573H54.858v13.714h4.572v13.716H45.713v-4.572H32v4.572h4.57v4.57h32v-4.57h4.573z","STICKY_NOTE":"M36.57-19.43v14.86H3.43Q2-4.57 1-5.57T0-8v-48q0-1.43 1-2.43t2.43-1h48q1.427 0 2.427 1t1 2.43v33.143H40q-1.43 0-2.43 1t-1 2.428zm4.573 1.144H54.75q-.536 2.93-2.32 4.715L45.856-7q-1.786 1.786-4.714 2.32v-13.606z","STICKY_NOTE_O":"M50-18.286h-8.857v8.857q1.036-.356 1.464-.784l6.607-6.607q.43-.43.786-1.466zm-10-4.57h10.286v-32H4.57v45.713h32V-19.43q0-1.427 1-2.427t2.43-1zM54.857-56v36.57q0 1.43-.714 3.144T52.43-13.57L45.856-7q-1 1-2.714 1.714T40-4.57H3.43Q2-4.57 1-5.57T0-8v-48q0-1.43 1-2.43t2.43-1h48q1.427 0 2.427 1t1 2.43z","CC_JCB":"M69.68-28.357q0 .928-.555 1.59t-1.375.838q-.286.073-.643.073h-5.464v-5h5.464q.357 0 .643.07.82.18 1.375.84t.554 1.59zm-.644-7.607q0 .893-.536 1.5t-1.357.75q-.107.035-.536.035h-4.964v-4.606h4.964q.107 0 .304.018t.233.018q.82.143 1.357.768t.536 1.518zM26-30.107v-11h-8.143v11q0 2.07-1.357 3.375t-3.75 1.303q-3.857 0-8.18-2.106v4q1.894.536 4.323.822t3.893.32l1.5.037Q26-22.357 26-30.107zm25.5 6.57v-4.034q-3.536 1.856-7.143 2.106-3.857.285-6.036-1.465T36.144-32t2.178-5.07 6.037-1.466q3.607.25 7.143 2.072v-4q-1.714-.43-3.57-.697t-2.86-.34l-1-.07q-4.534-.216-7.802.5t-5.018 2.14-2.536 3.144T27.93-32t.784 3.786 2.536 3.143 5.018 2.14 7.803.5q3.61-.14 7.43-1.106zm26.214-4.106q0-1.928-1.535-3.16t-3.894-1.41v-.108q2.035-.287 3.178-1.484t1.143-2.84q0-1.963-1.464-3.142T71.32-41.07q-.106 0-.427-.02t-.5-.017h-16.25v18.214H71.68q2.64 0 4.338-1.303t1.696-3.447zm4.572-27.214v45.714q0 1.857-1.357 3.214t-3.216 1.36H4.57q-1.856 0-3.213-1.36T0-9.142v-45.714q0-1.857 1.357-3.214t3.214-1.36h73.144q1.857 0 3.215 1.36t1.356 3.213z","CC_DINERS_CLUB":"M30.643-19.68v-24.75q-3.786 1.466-6.143 4.84t-2.357 7.554 2.357 7.554 6.143 4.803zm18-12.356q0-4.178-2.357-7.553t-6.143-4.84v24.787q3.786-1.464 6.143-4.84t2.357-7.553zm7.678 0q0 5.68-2.802 10.5t-7.625 7.625-10.5 2.803q-4.25 0-8.125-1.66t-6.68-4.465-4.463-6.68-1.66-8.124q0-5.678 2.803-10.5t7.625-7.625 10.5-2.804 10.5 2.803 7.625 7.624 2.803 10.5zm13.68.25q0-4.964-1.982-9.34t-5.268-7.338-7.625-4.68-9.018-1.713h-10.75q-6.286 0-11.553 2.893T15.41-43.75t-3.124 11.964q0 6.107 3.107 11.34t8.428 8.267 11.537 3.037h10.75q4.607 0 8.982-1.803t7.66-4.822T68.018-23 70-31.786zm12.286-23.07v45.713q0 1.857-1.357 3.214t-3.216 1.36H4.57q-1.856 0-3.213-1.36T0-9.142v-45.714q0-1.857 1.357-3.214t3.214-1.36h73.144q1.857 0 3.215 1.36t1.356 3.213z","CLONE":"M59.43-5.714V-44.57q0-.466-.34-.805t-.804-.34H19.43q-.466 0-.805.34t-.34.804v38.856q0 .464.34.803t.804.34h38.856q.464 0 .803-.34t.34-.804zM64-44.57v38.856q0 2.357-1.68 4.035T58.287 0H19.43q-2.36 0-4.037-1.68t-1.68-4.034V-44.57q0-2.36 1.68-4.037t4.036-1.68h38.856q2.357 0 4.035 1.68T64-44.57zM50.286-58.287v5.715h-4.572v-5.716q0-.464-.34-.803t-.803-.34H5.715q-.464 0-.803.34t-.34.804v38.857q0 .466.34.805t.804.34h5.715v4.57H5.713q-2.357 0-4.035-1.678T0-19.43v-38.856q0-2.357 1.68-4.035T5.713-64H44.57q2.36 0 4.037 1.68t1.68 4.034z","BALANCE_SCALE":"M61.714-48L48-22.857h27.43zM16-48L2.286-22.857h27.428zm29.32-6.857q-.5 1.428-1.624 2.553t-2.553 1.625v46.11h21.714q.5 0 .822.32t.32.82v2.287q0 .5-.32.822t-.823.32h-48q-.5 0-.82-.32t-.323-.823V-3.43q0-.5.322-.82t.82-.32h21.715v-46.11q-1.427-.5-2.552-1.624t-1.625-2.553H14.857q-.5 0-.82-.322t-.323-.82v-2.286q0-.5.322-.82t.82-.323h17.537q.75-2.034 2.5-3.302T38.857-64t3.964 1.268 2.5 3.303h17.537q.5 0 .822.323t.32.82V-56q0 .5-.32.82t-.823.323H45.32zm-6.463.57q1.18 0 2.018-.838t.84-2.018-.84-2.018-2.018-.84-2.018.84-.84 2.017.84 2.018 2.017.84zm38.857 31.43q0 2.607-1.66 4.678t-4.197 3.25-5.16 1.77-4.983.59-4.982-.59-5.16-1.77-4.197-3.25-1.66-4.677q0-.393 1.25-2.893t3.285-6.232 3.82-6.982 3.644-6.572 2-3.57q.643-1.18 2-1.18t2 1.18q.143.25 2 3.57t3.643 6.572 3.822 6.982 3.284 6.232 1.25 2.893zm-45.714 0q0 2.607-1.66 4.678t-4.197 3.25-5.16 1.77-4.983.59-4.982-.59-5.16-1.77-4.197-3.25T0-22.856q0-.393 1.25-2.893t3.286-6.232 3.82-6.982T12-45.536t2-3.57q.643-1.18 2-1.18t2 1.18q.143.25 2 3.57t3.643 6.572 3.82 6.982 3.287 6.232T32-22.857z","HOURGLASS_O":"M50.286-59.43q0 9.323-3.804 16.484T36.964-32q5.715 3.786 9.518 10.946T50.286-4.57h3.428q.5 0 .822.32t.32.82v2.287q0 .5-.32.822t-.822.32H1.144q-.5 0-.823-.32T0-1.144V-3.43q0-.5.32-.82t.823-.32H4.57q0-9.323 3.805-16.484T17.893-32q-5.714-3.786-9.518-10.946T4.57-59.43H1.144q-.5 0-.822-.32T0-60.57v-2.287q0-.5.32-.822t.823-.32h52.57q.5 0 .823.32t.32.823v2.286q0 .5-.32.82t-.822.32h-3.428zM31.214-34.142q2.75-1.036 5.322-3.303t4.625-5.447 3.304-7.5 1.25-9.036H9.144q0 4.716 1.25 9.037t3.302 7.5 4.625 5.447 5.323 3.303q.678.25 1.09.84t.41 1.303-.41 1.304-1.09.84q-2.75 1.035-5.322 3.302t-4.624 5.447-3.303 7.5-1.25 9.036h36.57q0-4.716-1.25-9.037t-3.302-7.5-4.624-5.447-5.322-3.303q-.678-.25-1.09-.84T29.715-32t.41-1.304 1.09-.84z","HOURGLASS_START":"M50.286-59.43q0 9.323-3.804 16.484T36.964-32q5.715 3.786 9.518 10.946T50.286-4.57h3.428q.5 0 .822.32t.32.82v2.287q0 .5-.32.822t-.822.32H1.144q-.5 0-.823-.32T0-1.144V-3.43q0-.5.32-.82t.823-.32H4.57q0-9.323 3.805-16.484T17.893-32q-5.714-3.786-9.518-10.946T4.57-59.43H1.144q-.5 0-.822-.32T0-60.57v-2.287q0-.5.32-.822t.823-.32h52.57q.5 0 .823.32t.32.823v2.286q0 .5-.32.82t-.822.32h-3.428zm-4.572 0H9.144q0 2.36.32 4.573h35.93q.32-2.18.32-4.572zm0 54.86q0-4.644-1.214-8.912t-3.232-7.43-4.518-5.427-5.214-3.374H23.32q-2.713 1.107-5.213 3.375t-4.518 5.43-3.233 7.428-1.214 8.91h36.57z","HOURGLASS_HALF":"M50.286-59.43q0 9.323-3.804 16.484T36.964-32q5.715 3.786 9.518 10.946T50.286-4.57h3.428q.5 0 .822.32t.32.82v2.287q0 .5-.32.822t-.822.32H1.144q-.5 0-.823-.32T0-1.144V-3.43q0-.5.32-.82t.823-.32H4.57q0-9.323 3.805-16.484T17.893-32q-5.714-3.786-9.518-10.946T4.57-59.43H1.144q-.5 0-.822-.32T0-60.57v-2.287q0-.5.32-.822t.823-.32h52.57q.5 0 .823.32t.32.823v2.286q0 .5-.32.82t-.822.32h-3.428zm-4.572 0H9.144q0 7.36 3.035 13.716h30.5q3.034-6.357 3.034-13.715zM43.68-16q-1.93-5.036-5.198-8.625t-6.946-5.09H23.32q-3.677 1.5-6.945 5.09T11.18-16h32.5z","HOURGLASS_END":"M50.286-59.43q0 9.323-3.804 16.484T36.964-32q5.715 3.786 9.518 10.946T50.286-4.57h3.428q.5 0 .822.32t.32.82v2.287q0 .5-.32.822t-.822.32H1.144q-.5 0-.823-.32T0-1.144V-3.43q0-.5.32-.82t.823-.32H4.57q0-9.323 3.805-16.484T17.893-32q-5.714-3.786-9.518-10.946T4.57-59.43H1.144q-.5 0-.822-.32T0-60.57v-2.287q0-.5.32-.822t.823-.32h52.57q.5 0 .823.32t.32.823v2.286q0 .5-.32.82t-.822.32h-3.428zM31.214-34.142q2.75-1.036 5.322-3.303t4.625-5.447 3.304-7.5 1.25-9.036H9.144q0 4.716 1.25 9.037t3.302 7.5 4.625 5.447 5.323 3.303q.678.25 1.09.84t.41 1.303-.41 1.304-1.09.84q-4.893 1.82-8.714 7h25q-3.823-5.18-8.716-7-.678-.25-1.09-.84T29.715-32t.41-1.304 1.09-.84z","HOURGLASS":"M53.714-6.857q.5 0 .822.32t.32.823v4.57q0 .5-.32.823t-.822.32H1.144q-.5 0-.823-.32T0-1.144v-4.57q0-.5.32-.823t.823-.32h52.57zM4.644-9.143q.106-1.964.57-3.82t1.072-3.394 1.643-3.107 1.91-2.715 2.303-2.48 2.357-2.144 2.518-1.964 2.375-1.696T21.713-32q-1.534-1-2.32-1.536t-2.375-1.696-2.518-1.964-2.357-2.143-2.304-2.48-1.91-2.716-1.644-3.107-1.072-3.393-.57-3.82h45.57q-.107 1.963-.57 3.82t-1.073 3.393-1.64 3.107-1.912 2.715-2.304 2.48-2.357 2.144-2.518 1.964-2.376 1.696T33.144-32q1.535 1 2.32 1.536t2.375 1.696 2.517 1.964 2.357 2.143 2.304 2.48 1.91 2.716 1.643 3.107 1.073 3.393.57 3.82H4.644zM53.713-64q.5 0 .822.32t.32.823v4.57q0 .5-.32.823t-.822.32H1.144q-.5 0-.823-.32T0-58.286v-4.57q0-.5.32-.823t.823-.32h52.57z","HAND_ROCK_O":"M27.43-50.286q-1.894 0-3.234 1.34t-1.34 3.232v4.57h-1.142v-3.32q0-1.715-1.143-2.91t-2.856-1.197q-1.643 0-2.82 1.177t-1.18 2.822v15.32l-1.143-1.07v-6.144q0-1.715-1.14-2.91t-2.86-1.197q-1.64 0-2.82 1.177T4.57-36.57v8q0 1.677 1.25 2.927L16.894-15.07q1.393 1.39 1.393 3.64 0 .93.678 1.61t1.607.677h22.86q.927 0 1.606-.678t.678-1.61v-.89q0-1.466.357-2.75l3.86-15.573q.356-1.286.356-2.75v-8.786q0-1.713-1.143-2.91t-2.857-1.196q-1.643 0-2.822 1.18t-1.178 2.82v1.143h-1.143v-4.464q0-1.43-.893-2.59t-2.286-1.446q-.5-.07-.82-.07-1.644 0-2.823 1.177t-1.177 2.822v4.57H32V-45.5q0-1.82-1.16-3.196t-2.947-1.554q-.18-.036-.464-.036zm0-4.57q3 0 5.32 1.785 2.036-1.216 4.393-1.216 2.107 0 3.964.965t3.072 2.713q.963-.25 2.106-.25 3.57 0 6.07 2.553t2.5 6.125v8.787q0 1.822-.463 3.857L50.5-13.964q-.214.857-.214 2.535 0 2.86-2 4.86t-4.857 2H20.57q-3 0-4.927-2.09t-1.93-5.09l-11-10.57Q0-24.93 0-28.57v-8q0-3.537 2.518-6.055t6.053-2.518q.394 0 .573.036.214-3.393 2.696-5.714t5.874-2.323q1.857 0 3.5.75 2.572-2.464 6.215-2.464z","HAND_STOP_O":"M31.43-59.43q-1.644 0-2.823 1.18t-1.178 2.82V-32h-1.144v-18.857q0-1.643-1.18-2.822t-2.82-1.177-2.822 1.178-1.178 2.823v28l-5.5-7.322Q11.43-32 9.143-32 7.25-32 5.91-30.66t-1.34 3.23q0 1.537.93 2.75L19.214-6.392Q20.57-4.57 22.857-4.57H47.43q1.213 0 2.177-.787t1.214-2l2.716-14.464q.178-1.144.178-2.11v-17.784q0-1.643-1.178-2.822t-2.822-1.178-2.82 1.178-1.18 2.822V-32H44.57v-18.857q0-1.643-1.177-2.822t-2.822-1.177-2.82 1.178-1.18 2.823V-32h-1.14v-23.43q0-1.64-1.18-2.82t-2.82-1.18zm0-4.57q2.427 0 4.48 1.268t3.16 3.446q.68-.143 1.5-.143 3.537 0 6.055 2.52t2.518 6.053v.607q3.75-.214 6.446 2.286t2.696 6.25v17.785q0 1.43-.286 2.966L55.286-6.536q-.5 2.822-2.732 4.68T47.43 0H22.856q-2.143 0-4.09-.982t-3.23-2.66L1.82-21.93Q0-24.356 0-27.43q0-3.784 2.68-6.463t6.463-2.678q2.786 0 4.57 1.213v-15.5q0-3.536 2.52-6.054t6.053-2.52q.82 0 1.5.144 1.107-2.178 3.16-3.446T31.43-64z","HAND_SCISSORS_O":"M38.32-4.57H32q-5.82 0-8.07-5.037-.823-1.75-.823-3.643v-.18q-2.214-1.07-3.518-3.16t-1.304-4.553q0-1.357.178-1.714h-9.32q-3.787 0-6.465-2.68T0-32t2.68-6.464 6.463-2.68h4.036l-1.573-.606q-2.643-1-4.268-3.34t-1.626-5.196q0-3.785 2.68-6.464t6.463-2.68q1.643 0 3.25.61l22.43 8.534h14.32q3.786 0 6.464 2.68T64-41.144v23.857q0 3.143-1.93 5.625t-5 3.23L44.965-5.392q-3.285.822-6.643.822zm-1.75-25.394l-5.534 2.535-5.822 2.644q-1.07.5-1.714 1.482t-.643 2.16q0 1.644 1.18 2.823t2.82 1.177q.93 0 1.643-.357L40.57-23q-1.75-.357-2.874-1.786T36.57-28v-1.964zM48-18.857q0-1.643-1.18-2.822T44-22.856q-.93 0-1.643.357L32-17.786q-1 .465-1.32.607t-1.09.61-1.054.838-.572 1.036-.285 1.446q0 1.786 1.124 2.93t2.91 1.14q.715 0 1.357-.32l12.573-5.714q1.07-.5 1.714-1.482t.643-2.16zm-8.286-26.857L16.5-54.57q-.857-.287-1.643-.287-1.893 0-3.232 1.34t-1.34 3.23q0 1.43.804 2.608T13.213-46L32-38.857v2.286H9.143q-1.893 0-3.232 1.338T4.57-32t1.34 3.232 3.233 1.34H28.25l8.32-3.786v-7.072q0-2.25 1.644-3.785l3.965-3.644h-2.466zM38.32-9.144q2.93 0 5.537-.677l12.107-3.037q1.536-.393 2.5-1.625t.965-2.804v-23.857q0-1.893-1.34-3.232t-3.233-1.34h-11L39-41.214q-1.286 1.18-1.286 2.93v10.57q0 1.644 1.18 2.75t2.82 1.108 2.822-1.25T45.714-28v-7.43h1.143V-28q0 2.5-2.036 4.07 1.86.287 3.09 1.734t1.233 3.34q0 1.5-.822 2.785t-2.177 1.89L35.07-9.142h3.25z","HAND_LIZARD_O":"M41.107-64q2.18 0 4.143 1t3.25 2.75l20.43 27.893q4.213 5.678 4.213 12.82v12.68q0 2.857-2 4.857t-4.857 2H52.57q-2.856 0-4.856-2t-2-4.857v-6.322L35.5-18.285H16q-2.857 0-4.857-2t-2-4.857v-1.143q0-4.25 3.018-7.268t7.27-3.017h15l1.5-4.573h-24.5q-3.573 0-6.198-2.41T2.322-49.5Q0-52.32 0-56v-1.143Q0-60 2-62t4.857-2h34.25zM68.57-6.857v-12.68q0-5.606-3.32-10.142L44.786-57.57q-1.393-1.86-3.68-1.86H6.857q-.927 0-1.606.68t-.68 1.607q0 1.143.055 1.768t.34 1.446.892 1.537q.357-1.107 1.268-1.786t2.018-.677h29.714v1.143H9.143q-.93 0-1.607.678t-.68 1.607q0 1.573.108 2.073.286 1.57 1.572 2.607t2.893 1.036h26.106q1.428 0 2.428 1t1 2.428q0 .536-.178 1.072L38.5-34.357q-.357 1.036-1.25 1.696t-2 .66H19.43q-2.36 0-4.037 1.68t-1.68 4.034v1.143q0 .93.68 1.607t1.607.68h20.036q.57 0 1.035.25l11.323 5.642q.857.464 1.375 1.285t.518 1.787v7.036q0 .928.678 1.607t1.607.68h13.716q.928 0 1.607-.68t.678-1.607z","HAND_SPOCK_O":"M29.143-59.43q-1.714 0-2.84 1.216t-1.124 2.928q0 .5.106 1L30.643-32h-.93l-4.142-17.214q-.32-1.357-1.41-2.215t-2.48-.856q-1.68 0-2.823 1.215t-1.143 2.89q0 .394.143 1.037.107.464 1.393 5.75t2.43 10.072 1.14 4.927v8.107L11.858-26.5q-1.214-.93-2.75-.93-1.857 0-3.196 1.305t-1.34 3.16q0 2.394 2 3.93L24.68-5.5q1.213.93 2.713.93H52.18q1.177 0 2.106-.734T55.5-7.18l3.57-14.32q.287-1.07.36-3.143t.32-3.07l4.143-17.073q.107-.428.107-.928 0-1.643-1.18-2.822t-2.856-1.178q-1.357 0-2.464.91t-1.43 2.233L52.537-32h-.93l4.715-19.536q.11-.5.11-1 0-1.678-1.144-2.857T52.43-56.57q-1.36 0-2.448.856t-1.41 2.214L43.39-32h-4.535L33-56.357q-.32-1.357-1.41-2.214t-2.447-.86zM52.18 0H27.392q-3.036 0-5.464-1.82L3.82-15.394Q2.037-16.75 1.02-18.75T0-22.964q0-3.75 2.68-6.393T9.106-32q.893 0 1.768.196t1.482.393 1.464.73 1.25.823 1.376 1.053 1.34 1.018L13.393-46.07q-.25-1.25-.25-2.11 0-3.32 2.143-5.784t5.428-2.822q.5-3.107 2.875-5.16T29.142-64q2.964 0 5.286 1.84t3.034 4.73l3.68 15.287 2.963-12.428q.714-2.894 3.036-4.734t5.286-1.84q3.106 0 5.445 1.93t2.946 4.964q3.323.357 5.537 2.786t2.214 5.75q0 1.07-.25 2.035l-4.14 17.037q-.18.786-.18 2.393 0 1.82-.464 3.857L59.93-6.07q-.68 2.677-2.84 4.374T52.18 0z","HAND_POINTER_O":"M22.857-59.43q-1.893 0-3.232 1.34t-1.34 3.233V-22.858l-5.392-7.214Q11.43-32 9.07-32q-1.856 0-3.177 1.357T4.57-27.43q0 1.537.93 2.75L19.214-6.392Q20.57-4.57 22.857-4.57H48.5q.786 0 1.41-.484t.804-1.232L54-19.43q.857-3.427.857-6.927v-7.75q0-1.464-1-2.536t-2.428-1.07-2.43 1-1 2.427h-1.143v-2.178q0-1.715-1.143-2.91t-2.857-1.197q-1.643 0-2.82 1.177t-1.18 2.822v2.284h-1.143V-37.5q0-1.964-1.32-3.375t-3.25-1.41q-1.894 0-3.233 1.34t-1.34 3.23v3.43h-1.14v-20.358q0-1.964-1.323-3.375t-3.25-1.41zm0-4.57q3.822 0 6.482 2.768t2.66 6.59v7.856q.786-.07 1.143-.07 3.536 0 6.178 2.463 1.68-.75 3.537-.75 4.036 0 6.572 3.107.963-.25 2-.25 3.356 0 5.677 2.41t2.322 5.77v7.75q0 4.142-1 8.035L55.142-5.18q-.572 2.287-2.43 3.734T48.5 0H22.857q-2.143 0-4.09-.982t-3.23-2.66L1.82-21.93Q0-24.356 0-27.43q0-3.75 2.66-6.445t6.41-2.696q2.537 0 4.644 1.25v-19.537q0-3.786 2.68-6.464T22.856-64zm4.572 50.286V-27.43h-1.144v13.716h1.143zm9.14 0V-27.43h-1.14v13.716h1.14zm9.144 0V-27.43H44.57v13.716h1.144z","HAND_PEACE_O":"M46-40.893q2.143 0 3.82.822 5.037 2.25 5.037 8.07v6.32q0 3.36-.82 6.644L51-6.93q-.75 3.073-3.232 5T42.143 0H18.286Q14.5 0 11.82-2.68T9.144-9.142v-14.32L.607-45.894Q0-47.5 0-49.143q0-3.786 2.68-6.464t6.463-2.68q2.857 0 5.196 1.626t3.34 4.267l.606 1.572v-4.037q0-3.786 2.678-6.464T27.43-64t6.463 2.68 2.678 6.463v9.32q.966-.177 1.716-.177 2.464 0 4.553 1.303T46-40.894zm-7.714-.25q-1.18 0-2.16.643t-1.483 1.714L32-32.964l-2.536 5.535h1.965q1.784 0 3.213 1.126t1.786 2.875l5.5-12.07q.356-.714.356-1.643 0-1.643-1.18-2.82t-2.82-1.18zm7.893 4.822q-.787 0-1.448.284t-1.036.572-.84 1.053-.606 1.09-.607 1.32L36.93-21.643q-.36.714-.36 1.643 0 1.643 1.18 2.82T40.57-16q1.18 0 2.162-.643t1.482-1.714L49.93-30.93q.32-.64.32-1.356 0-1.785-1.143-2.91T46.18-36.32zM4.57-49.144q0 .786.287 1.643l8.857 23.214v2.465l3.643-3.966q1.536-1.643 3.786-1.643h7.07L32-35.75v-19.107q0-1.893-1.34-3.232t-3.23-1.34-3.234 1.34-1.34 3.233V-32h-2.285l-7.14-18.786q-.5-1.32-1.68-2.125t-2.607-.804q-1.893 0-3.232 1.34t-1.34 3.23zM42.144-4.57q1.57 0 2.803-.966t1.625-2.5l3.037-12.107q.68-2.607.68-5.536v-3.25L45.25-17.856q-.607 1.357-1.893 2.178t-2.786.823q-1.89 0-3.338-1.232T35.5-19.18q-1.57 2.037-4.07 2.037H24v-1.143h7.43q1.64 0 2.89-1.178t1.25-2.822-1.106-2.82-2.75-1.18h-10.57q-1.75 0-2.93 1.286l-4.5 4.857v11q0 1.893 1.34 3.232t3.232 1.34h23.857z","TRADEMARK":"M30.607-44.57v4.177q0 .464-.34.786t-.803.32H18.82v29q0 .466-.32.805t-.786.34h-4.82q-.465 0-.805-.322t-.34-.822v-29H1.143q-.464 0-.804-.32T0-40.394v-4.178q0-.5.32-.823t.823-.32h28.32q.466 0 .805.338t.34.804zm37.072-.11l2.75 34.323q.034.464-.287.857-.357.357-.822.357h-4.784q-.43 0-.75-.303t-.357-.733l-1.644-21L55.036-16q-.286.68-1.036.68h-4.286q-.714 0-1.035-.68l-6.716-15.25-1.607 21.07q-.036.43-.357.734t-.75.303h-4.82q-.466 0-.823-.357-.32-.357-.32-.857L36.07-44.68q.037-.427.36-.73t.75-.304h5.07q.714 0 1.036.678l7.857 18.572q.357.857.714 1.82.107-.25.34-.874t.374-.946l7.894-18.572q.322-.678 1.036-.678h5.036q.464 0 .785.303t.36.73z","REGISTERED":"M37.214-38.893q0-3.143-2.143-4.32-1.177-.644-4.177-.644H26.5v10.036h5.786q2.357 0 3.643-1.323t1.284-3.75zm1.857 10.18l7.323 13.32q.286.607-.036 1.107-.286.572-.964.572h-5.43q-.713 0-1-.607l-6.927-13.037H26.5v12.5q0 .5-.32.82t-.823.323H20.57q-.5 0-.82-.322t-.32-.82v-34.287q0-.5.32-.82t.82-.323h10.5q4.573 0 6.787.857 3.036 1.11 4.786 3.894t1.75 6.43q0 3.285-1.518 5.91t-4.125 3.91q.214.357.32.572zM32-58.287q-5.357 0-10.214 2.09T13.41-50.59t-5.606 8.376T5.714-32t2.09 10.214 5.607 8.375 8.376 5.606T32-5.714t10.214-2.09 8.375-5.607 5.606-8.376T58.286-32t-2.09-10.214-5.607-8.375-8.376-5.606T32-58.286zM64-32q0 6.5-2.536 12.43t-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64t12.43 2.536 10.213 6.82 6.82 10.215T64-32z","CREATIVE_COMMONS":"M21.607-19.964q5.464 0 9.18-3.715.5-.64.106-1.284l-1.607-2.93q-.215-.463-.857-.606-.573-.07-.966.393L27.32-28q-.14.143-.41.357t-.624.464-.84.52-1.017.48-1.198.34-1.34.126q-2.713 0-4.463-1.786t-1.75-4.536q0-2.714 1.713-4.482t4.357-1.768q1.32 0 2.554.5t1.803 1l.572.5q.39.393.927.357.572-.07.857-.5l1.893-2.784q.464-.715-.07-1.393-.108-.143-.394-.43t-1.072-.838-1.73-1-2.41-.804-3.073-.356q-5.286 0-8.786 3.447T9.32-32q0 5.214 3.466 8.625t8.82 3.41zm22.5 0q5.464 0 9.18-3.715.5-.64.142-1.284l-1.61-2.93q-.284-.5-.89-.606-.573-.07-.966.393L49.82-28q-.14.143-.41.357t-.624.464-.84.52-1.017.48-1.198.34-1.34.126q-2.713 0-4.463-1.786t-1.75-4.536q0-2.714 1.713-4.482t4.357-1.768q1.32 0 2.554.5t1.803 1l.572.5q.39.393.927.357.572-.07.857-.5l1.893-2.784q.464-.715-.07-1.393-.108-.143-.394-.43t-1.072-.838-1.73-1-2.41-.804-3.073-.356q-5.25 0-8.768 3.447T31.82-32q0 5.214 3.466 8.625t8.82 3.41zM32-58.286q-5.357 0-10.214 2.09T13.41-50.59t-5.606 8.376T5.714-32t2.09 10.214 5.607 8.375 8.376 5.606T32-5.714t10.214-2.09 8.375-5.607 5.606-8.376T58.286-32t-2.09-10.214-5.607-8.375-8.376-5.606T32-58.286zM32-64q6.5 0 12.43 2.536t10.213 6.82 6.82 10.215T64-32t-2.536 12.43-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64z","GG":"M26.286-35.43L40-21.713 26.286-8l-24-24 24-24 6 6-3.43 3.43-2.57-2.573L9.143-32l17.143 17.143 6.893-6.893L22.856-32zM46.856-56l24 24-24 24-6-6 3.43-3.43 2.57 2.573L64-32 46.857-49.143l-6.893 6.893L50.286-32l-3.43 3.43-13.713-13.716z","GG_CIRCLE":"M25.607-15.643l9.68-9.678-9.966-9.966-3.14 3.143 6.856 6.822-3.43 3.427-9.963-9.964 9.964-9.964 1.43 1.427 3.106-3.107-4.536-4.57L9.393-31.858zm12.786-.286l16.214-16.213-16.214-16.214-9.68 9.678 9.966 9.966 3.14-3.143-6.856-6.822 3.43-3.427 9.963 9.964-9.964 9.964-1.43-1.427-3.106 3.143zM64-32q0 6.5-2.536 12.43t-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64t12.43 2.536 10.213 6.82 6.82 10.215T64-32z","TRIPADVISOR":"M23.25-28.393q0 1.393-.982 2.375t-2.34.982q-1.392 0-2.374-.982t-.983-2.375q0-1.357.984-2.34t2.375-.98q1.356 0 2.338.98t.982 2.34zm41.214-.036q0 1.394-.982 2.376t-2.375.983-2.375-.984-.982-2.375.982-2.356 2.375-.964 2.375.964.982 2.357zm-37.143.037q0-2.82-2.016-4.857t-4.875-2.036-4.876 2.018-2.018 4.875 2.018 4.875T20.43-21.5t4.874-2.018 2.017-4.875zm41.18-.036q0-2.856-2.018-4.874t-4.875-2.017q-2.82 0-4.857 2.016t-2.036 4.875 2.018 4.876 4.875 2.018 4.875-2.018T68.5-28.43zm-38.143.037q0 4.143-2.91 7.054t-7.018 2.91q-4.144 0-7.055-2.927t-2.91-7.036 2.928-7.018 7.036-2.91 7.016 2.91 2.91 7.017zm41.214-.036q0 4.11-2.91 7.02t-7.053 2.91q-4.107 0-7.018-2.91t-2.91-7.02 2.91-7.016 7.017-2.91q4.143 0 7.054 2.91t2.91 7.017zm-34.427.11q0-6.823-4.84-11.662t-11.66-4.84q-4.464 0-8.25 2.215t-6 6.018-2.214 8.27 2.213 8.266 6 6.018 8.25 2.215q6.82 0 11.66-4.84t4.84-11.66zM61-48.787q-9.07-3.964-19.857-3.964-11.393 0-20.464 3.93 4.177 0 7.963 1.624t6.518 4.375 4.358 6.534 1.625 7.965q0-4.11 1.553-7.84t4.215-6.447T53.25-47 61-48.786zM78.107-28.32q0-6.823-4.82-11.662t-11.644-4.84-11.66 4.84-4.84 11.66 4.84 11.66 11.66 4.84 11.643-4.84 4.82-11.66zm-9.5-20.216h13.68q-1.573 1.822-2.68 4.09t-1.428 4.09q3.927 5.392 3.927 12.035 0 5.57-2.75 10.284t-7.464 7.447-10.25 2.733q-4.75 0-8.893-2t-7-5.536q-1.68 2-4.607 6.393-.393-.786-1.91-2.946T36.57-15.43q-2.856 3.537-7.016 5.555t-8.91 2.018q-5.537 0-10.25-2.732t-7.465-7.446T.18-28.32q0-6.644 3.927-12.037-.32-1.822-1.428-4.09T0-48.536h13.036q5.32-3.57 12.678-5.588t15.43-2.018q8 0 15.035 2t12.427 5.607z","ODNOKLASSNIKI":"M22.857-31.607q-6.714 0-11.464-4.75t-4.75-11.43q0-6.713 4.75-11.463T22.857-64t11.464 4.75 4.75 11.464q0 6.68-4.75 11.43t-11.463 4.75zm0-24.18q-3.286 0-5.625 2.34t-2.34 5.66q0 3.287 2.34 5.626t5.625 2.34 5.625-2.34 2.34-5.626q0-3.32-2.34-5.66t-5.625-2.34zm18.68 26.144q.463.964.534 1.768t-.16 1.446-.946 1.376-1.518 1.322-2.196 1.482Q33.143-19.643 26-18.893l2.607 2.572 9.536 9.534q1.07 1.107 1.07 2.643t-1.07 2.607l-.43.465Q36.608 0 35.072 0t-2.64-1.07q-2.394-2.43-9.537-9.573L13.357-1.07Q12.25 0 10.714 0T8.107-1.07l-.428-.466q-1.11-1.07-1.11-2.607t1.11-2.643l9.534-9.535 2.572-2.573q-7.25-.75-11.322-3.357-1.393-.893-2.196-1.482T4.75-25.054t-.946-1.375-.16-1.445.535-1.768q.356-.714 1-1.25t1.5-.786 2 .073 2.32 1.25q.18.143.536.393t1.535.875T15.537-28t3.285.857 4.037.393q3.25 0 6.214-.91t4.287-1.804l1.357-.893q1.18-.93 2.322-1.25t2-.072 1.5.787 1 1.25z","ODNOKLASSNIKI_SQUARE":"M33.107-43.286q0 2.357-1.66 4.018t-4.018 1.66-4.02-1.66-1.66-4.018 1.66-4.018 4.02-1.66 4.016 1.66 1.66 4.018zM40.75-30.32q-.357-.716-1-1.144t-1.696-.34-2.16.983q-.358.284-1.037.713t-2.893 1.143-4.535.714-4.43-.643-3.07-1.286l-.966-.64q-1.107-.894-2.16-.984t-1.697.34-1 1.143q-.786 1.606-.07 2.66t3.106 2.624q2.964 1.893 8.07 2.393l-1.82 1.857Q18.32-15.714 16.57-14q-.784.786-.784 1.875t.785 1.875l.323.32q.786.787 1.875.787t1.875-.786l6.82-6.82q4.073 4.107 6.823 6.82.785.787 1.875.787t1.876-.786l.32-.32q.787-.786.787-1.875T38.357-14l-6.82-6.786-1.858-1.857q5.034-.5 8.034-2.393 2.393-1.57 3.107-2.625t-.07-2.66zM39-43.287q0-4.785-3.393-8.178t-8.178-3.393-8.18 3.393-3.393 8.178 3.393 8.18 8.18 3.392 8.177-3.393T39-43.287zm15.857-5.857v34.286q0 4.25-3.018 7.268t-7.27 3.02H10.287q-4.25 0-7.268-3.02T0-14.856v-34.286q0-4.25 3.018-7.268t7.268-3.02H44.57q4.25 0 7.27 3.02t3.017 7.267z","GET_POCKET":"M55.893-59.43q2.32 0 3.928 1.626t1.61 3.947v18.536q0 6.284-2.43 12t-6.518 9.82-9.786 6.518-11.946 2.41q-6.286 0-11.982-2.41T8.964-13.5 2.43-23.32 0-35.32v-18.537q0-2.286 1.643-3.93t3.928-1.642h50.323zm-25.143 38q1.68 0 2.93-1.177l14.427-13.857q1.322-1.25 1.322-3.036 0-1.75-1.234-2.982t-2.982-1.232q-1.678 0-2.928 1.178L30.75-31.464 19.214-42.536q-1.25-1.178-2.893-1.178-1.75 0-2.98 1.232T12.106-39.5q0 1.82 1.286 3.036l14.464 13.857q1.18 1.178 2.893 1.178z","WIKIPEDIA_W":"M53.357-5.464L42.82-30.286q-.89 1.75-5.66 10.91T30.07-5.463q-.034.035-.98.018t-.947-.054q-2.93-6.893-9.125-20.964T9.75-47.75Q9-49.536 7.375-51.59T3.68-55.18.035-56.713q0-.18-.018-.857T0-58.537h20.82v1.786q-1.39.07-2.838.57t-2.375 1.537-.357 2.286q.93 2.107 7.732 17.82t8.41 19.287q1.108-2.18 5-9.518t4.68-8.84q-.68-1.392-4.5-10.035T31.713-54.18q-1.357-2.463-7.178-2.534V-58.5l18.32.036v1.678q-2.142.072-3.338.893t-.447 2.464q1.18 2.5 3.11 6.77t3.07 6.696q3.93-7.643 6.18-12.965.856-1.963-.36-2.838t-4.606-.946q.036-.25.036-.893v-.857q2.286 0 6.09-.018t6.428-.036 3.303-.018v1.75q-2.213.072-4.25 1.18t-3.213 2.892L47.25-36.93q.464 1.18 4.554 10.36t4.34 9.784l15.75-36.32q-.5-1.358-1.77-2.233t-2.32-1.124-1.983-.286v-1.786l16.43.143.036.072-.036 1.57q-4.964.143-7.18 5.18Q56.287-8.144 55.108-5.465h-1.75z","SAFARI":"M33.893-32.107q0 .928-.59 1.607t-1.482.68q-.927 0-1.606-.59t-.678-1.483q0-.928.607-1.607t1.5-.68 1.57.59.68 1.483zm.536 2.07l12.5-20.75q-.323.287-2.412 2.233t-4.482 4.16-4.875 4.537-4.178 3.946-1.803 1.84L16.713-13.358q.25-.25 2.393-2.214t4.5-4.162 4.857-4.536 4.18-3.964 1.785-1.804zM57.535-32q0 7.18-3.715 13.25-.106-.07-.606-.393t-.946-.59-.59-.267q-.464 0-.464.464 0 .357 2.107 1.572-2.64 4-6.588 6.803t-8.625 3.946l-.57-2.393Q37.5-9.964 37-9.964q-.18 0-.286.196t-.07.34L37.213-7q-2.57.536-5.214.536-7.107 0-13.286-3.75.036-.072.465-.732t.766-1.197.34-.678q0-.466-.465-.466-.213 0-.606.518t-.803 1.232-.48.822q-4.037-2.68-6.86-6.697t-3.927-8.733l2.464-.536q.357-.106.357-.534 0-.18-.196-.286t-.375-.07l-2.43.534q-.5-2.57-.5-4.964 0-7.357 3.894-13.536.072.036.66.43t1.072.677.624.287q.465 0 .465-.428 0-.216-.448-.555t-1.16-.768l-.715-.428q2.75-4 6.75-6.75t8.714-3.823l.537 2.393q.072.357.536.357.178 0 .286-.196t.07-.374l-.536-2.357q2.536-.466 4.786-.466 7.286 0 13.536 3.893-1.393 2-1.393 2.322 0 .463.428.463.394 0 1.716-2.286 3.964 2.68 6.696 6.643t3.84 8.607l-2 .43q-.358.07-.358.57 0 .18.197.286t.34.07L57.036-37q.5 2.57.5 5zm3.035 0q0-5.82-2.266-11.107t-6.09-9.107-9.107-6.09T32-60.57t-11.107 2.266-9.107 6.09-6.09 9.107T3.43-32t2.266 11.107 6.09 9.107 9.107 6.09T32-3.43t11.107-2.266 9.107-6.09 6.09-9.107T60.57-32zM64-32q0 6.5-2.536 12.43t-6.82 10.213-10.215 6.82T32 0 19.57-2.536 9.358-9.356t-6.82-10.215T0-32t2.536-12.43 6.82-10.213 10.215-6.82T32-64t12.43 2.536 10.213 6.82 6.82 10.215T64-32z","CHROME":"M31.893-64q8.57-.07 16.107 4.286 8.286 4.785 12.57 13.285l-26.5-1.39q-5.713-.323-10.5 2.66t-6.606 8.196L7.107-52.107q4.572-5.68 11.107-8.768T31.894-64zM5.213-49.536l12.037 23.68q2.57 5.106 7.536 7.75T35.25-16.5L27.036-.393q-7.572-1.178-13.75-5.625T3.554-17.304 0-32q0-9.536 5.214-17.536zM61.858-43.5q2.072 5.357 2.125 11.09T62.25-21.483t-5.464 9.714T48-4.286Q39.786.464 30.214-.036l14.465-22.25q3.14-4.678 2.945-10.375t-3.804-9.91zM32-42.786q4.464 0 7.625 3.16T42.785-32t-3.16 7.625T32-21.215t-7.625-3.16T21.215-32t3.16-7.625T32-42.785z","FIREFOX":"M32.25 0Q22.143 0 14.232-5.375T2.464-19.607Q.394-24.287.07-30.357T1-42.232t3.964-11.143 6.393-8.66L10.964-52q.393-.5 2.43-.554t2.5.554q1.5-2.893 5.73-4.93T30-59.035q-1.93 1.607-4.268 5.304t-2.09 5.84q.894.285 2.233.48t2.25.27 2.43.142 1.802.107q.536.18.34 1.625t-1.09 2.697q-.178.25-.59.66T29-40.644t-3.607 1.214l.536 6.75-4.966-2.39q-.643 1.534-.268 2.91t1.286 2.374 2.34 1.482 2.892.233q1.822-.323 3.5-1.234t2.982-1.607 2.625-.626q2.18.143 3.198 1.18t.696 2.32q-.035.072-.09.197t-.303.447-.64.554-1.126.376-1.66.035q-2.144 3.394-5.162 4.84t-7.482 1.054q2.643 2.18 5.804 2.947t6.017.215 5.52-1.857 4.57-3.125 2.876-3.714q1.535-3.25 1.393-6.876t-1.34-6.733-2.804-4.463q3.107 1.357 4.893 2.84t2.75 4.017q.534-6.07-2.055-12.25T43.893-59.68q9.464 2.75 14.714 9.984T64-31.214q.07 4.535-1.446 9.107t-4.41 8.5-6.75 7-8.84 4.84T32.25 0z","OPERA":"M27.43-5.857q2.75 0 4.98-2.25t3.59-5.93 2.107-8.374.75-9.59-.75-9.59T36-49.963t-3.59-5.93-4.98-2.25-4.984 2.25-3.59 5.93-2.106 8.375T16-32t.75 9.59 2.107 8.374 3.59 5.93 4.982 2.25zm0 5.857q-6.573 0-11.894-2.75T6.964-10 1.93-20.25.142-32 1.93-43.75 6.963-54t8.572-7.25T27.43-64q5.284 0 9.784 1.786t7.66 4.857 5.412 7.178 3.303 8.716T54.642-32t-1.054 9.464-3.304 8.715-5.41 7.177-7.662 4.857T27.43 0z","INTERNET_EXPLORER":"M25.57-6.68q-5.106-1.25-9.338-4.07T9.18-17.57Q4.213-6.858 8.57-3.358q.93.75 3.037.875t4.554-.34 5.036-1.482T25.57-6.68zm-.82-29.677h16.143q0-3.857-2.197-6.036T32.68-44.57q-3.68 0-5.805 2.23t-2.125 5.983zM61.57-49.75h-1.213q.93-3.643.804-6.07t-.892-3.93T58-61.786t-3.34-.393-4.106.948-4.59 2.018-4.785 2.82q4.606 1.323 8.516 4.055t6.608 6.394 3.928 8.267.554 9.36H24.893q0 2.14.357 3.784t1.214 3.036 2.482 2.143 4.018.75q3.107 0 5.09-1.572t2.59-4.356h19.285Q57.392-16.32 49.874-11.07T32.82-5.82q-2.963 0-5.677-.537Q25.893-4.93 21.75-3T12.893-.214 5.07-1.464Q2.287-3.607 1.5-7.144t.25-7.642 3.143-8.643 5.125-8.856 6.196-8.09 6.34-6.553 5.59-4v-.856q-4.287 1.322-9.233 4.91t-8.59 7.394T4.644-32.5q.143-3.786 1.214-7.18t2.857-6.034 4.215-4.84 5.266-3.59 6-2.338 6.447-1.054 6.607.286Q48.32-63.893 55.214-64h.25q2.036 0 3.68.643 2.856 1.07 3.5 4.732T61.57-49.75z","TV":"M64-19.43v-34.284q0-.465-.34-.804t-.803-.34H5.714q-.464 0-.803.34t-.34.804v34.285q0 .466.34.805t.804.34h57.143q.464 0 .804-.34t.34-.804zm4.57-34.284v34.285q0 2.36-1.677 4.037t-4.036 1.68H36.57v4.57h12.573q.5 0 .82.322t.323.82v2.286q0 .5-.322.82t-.82.323H19.428q-.5 0-.823-.323t-.32-.82V-8q0-.5.32-.82t.822-.323H32v-4.57H5.714q-2.357 0-4.035-1.68T0-19.43v-34.284q0-2.357 1.68-4.036t4.034-1.68h57.143q2.357 0 4.036 1.68t1.678 4.036z","CONTAO":"M4.93-59.43h7.034q-2.5 2.287-4.5 5.323-1.285 2-2.107 4.107t-1.07 4.482-.305 4.286.375 4.714.75 4.5 1 4.875q.143.68.214 1 1.823 8.5 2.894 11.75 2.036 6.107 5.43 9.822H4.928Q3.213-4.57 2-5.787T.786-8.714v-46.572Q.786-57 2-58.214t2.93-1.215zm43.14 0h11q1.716 0 2.93 1.216t1.214 2.928v46.572Q63.214-7 62-5.786T59.07-4.57h-6.356q7.572-7.5 7-20.18l-16.75 3.607q-.07 1.607-.428 2.93t-1.107 2.57-2.126 2.125-3.34 1.304q-4.393.928-7.107-1.43-1.143-.963-1.893-2.177t-1.84-4.61-2.303-9.213q-1.25-5.82-1.624-9.393T21-44t.82-2.75q.716-1.464 2.234-2.607t3.66-1.607q1.607-.43 2.982-.232t2.393.607 1.928 1.25 1.536 1.715 1.232 2.018L54.5-49.18q-2.43-6.25-6.43-10.25z","500PX":"M49.68-23.07l-.037-.037q-.536-.643-1.232-1.34T46.18-26.5t-3.34-2.214-3.41-.857q-1.716 0-2.966.766t-1.82 1.93-.823 2.106-.25 1.697q0 .75.25 1.713t.823 2.107 1.82 1.91 2.966.77q1.606 0 3.41-.86t3.356-2.23 2.215-2.036 1.233-1.34zm25.427 0q0-.75-.25-1.698t-.82-2.107-1.823-1.93-2.964-.766q-1.607 0-3.41.856t-3.358 2.232-2.214 2.036-1.232 1.34l-.036.035.036.034q.535.643 1.232 1.34t2.232 2.053 3.34 2.214 3.41.86q1.714 0 2.964-.77t1.822-1.91.82-2.107.25-1.714zm7.18-.11q0 2.466-.858 4.912t-2.43 4.5-4.143 3.34-5.678 1.285q-2.43 0-4.787-.857t-4.054-2.09-3.02-2.48-2.124-2.11-.91-.856-.804.857-1.946 2.09-2.91 2.483T44.517-10t-5.125.857q-2.322 0-4.41-.803t-3.447-1.93-2.375-2.374-1.464-2.125-.446-1.16q0 .285-.304.946t-.892 1.626T24.374-13t-2.463 1.875-3.446 1.43T14-9.144q-2.536 0-4.643-.553t-3.518-1.41-2.52-2.02-1.713-2.267-.982-2.268-.5-1.93T0-20.892h7.75q0 1.964 1.75 3.84T14-15.18q2.82 0 4.804-2.39t1.982-5.287q0-2.857-1.857-4.875T14-29.75q-.18 0-.464.018t-1.107.178-1.537.43-1.5.874-1.214 1.43H1.213l3.643-20.823h21.5v6.214H10.464Q9.5-35.75 9-32.57q.143 0 .59-.466t1.124-1.018 2.322-1.017 3.857-.466 4.07.732 2.948 1.768 1.84 2.09 1.107 1.785.393.73.464-.89 1.304-2.162 2.16-2.554 3.465-2.178 4.75-.893 5.018.893 4.126 2.16 2.982 2.554 2.018 2.18.75.89q.07 0 .785-.89t2-2.162 2.984-2.554 4.125-2.178 5-.893q3.284 0 5.874 1.25t4.125 3.32 2.32 4.466.786 4.89z","AMAZON":"M55.393-11.286q.536-.214.928-.107t.394.625-.535 1.197q-.466.57-1.573 1.552t-3.41 2.43-5.036 2.642-6.714 2.07T31.25 0Q27 0 22.75-1.107T15.286-3.84t-6.16-3.714-4.733-3.75-3-3.125q-.286-.32-.357-.588t.035-.428.287-.25.41-.072.412.16q6.856 4.18 10.713 5.93Q26.786-3.394 41.43-6.465q6.784-1.43 13.963-4.822zm7.393-4.107q.393.572.09 2.482t-1.02 3.66q-1.213 2.964-3.035 4.43-.606.5-.927.32t0-.857q.75-1.607 1.59-4.34t.23-3.517q-.177-.25-.552-.41t-.964-.215-1.053-.09-1.25 0-1.125.073-1.107.107-.803.07q-.214.037-.464.055T52-13.59t-.304.036-.25.018h-.356l-.108-.018-.07-.053-.055-.107q-.214-.572 1.68-1.43t3.677-1.07q1.643-.25 3.857-.036t2.716.857zm-14.072-15.82q0 1.106.482 2.284t1.143 2.073 1.34 1.643 1.177 1.143l.464.39-8.106 8q-1.428-1.32-2.82-2.695t-2.073-2.09l-.677-.714q-.393-.39-.893-1.177-1.357 2.107-3.482 3.66t-4.554 2.268-5 .823-4.91-.75-4.197-2.34-2.964-4.035-1.107-5.804q0-3 1-5.5t2.57-4.16 3.805-2.965 4.376-2.036 4.643-1.233 4.266-.66 3.554-.23v-4.537q0-2.322-.75-3.464-1.214-1.894-4.32-1.894-.216 0-.59.035t-1.447.43-2 1.054-2 2.125-1.714 3.427l-10.5-.964q0-2.143.784-4.25t2.393-4.036 3.857-3.393 5.41-2.34T32.68-64q3.57 0 6.463.893t4.625 2.196 2.893 2.964 1.608 3.07.446 2.626v21.036zm-24 .75q0 3.07 2.5 4.75 2.357 1.57 4.965.784 3-.89 4.07-4.39.5-1.61.5-3.61v-5.784q-2.107.07-3.964.428t-3.804 1.197-3.107 2.536-1.16 4.09z","CALENDAR_PLUS_O":"M54.857-54.857q1.857 0 3.214 1.357t1.36 3.214V-4.57q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-45.716q0-1.857 1.357-3.214t3.214-1.357h4.573v-3.43q0-2.356 1.678-4.034T14.858-64h2.286q2.357 0 4.036 1.68t1.677 4.034v3.43H36.57v-3.43q0-2.357 1.68-4.035T42.286-64h2.285q2.36 0 4.037 1.68t1.68 4.034v3.43h4.57zm-13.714-3.43V-48q0 .5.32.82t.823.323h2.285q.5 0 .823-.322t.32-.82v-10.286q0-.5-.32-.82t-.822-.323h-2.284q-.5 0-.822.323t-.32.82zm-27.43 0V-48q0 .5.323.82t.82.323h2.287q.5 0 .82-.322t.323-.82v-10.286q0-.5-.322-.82t-.82-.323h-2.287q-.5 0-.82.323t-.323.82zM54.858-4.57v-36.573H4.57V-4.57h50.287zM32-25.144h8q.5 0 .82.322t.323.82v2.286q0 .5-.322.82t-.82.323h-8v8q0 .5-.32.82t-.823.32H28.57q-.5 0-.82-.32t-.32-.82v-8h-8q-.5 0-.823-.323t-.32-.82V-24q0-.5.32-.82t.822-.323h8v-8q0-.5.32-.82t.82-.323h2.287q.5 0 .822.322t.32.82v8z","CALENDAR_MINUS_O":"M41.143-24v2.286q0 .5-.322.82t-.82.323H19.43q-.5 0-.823-.323t-.32-.82V-24q0-.5.32-.82t.822-.323H40q.5 0 .82.322t.323.82zM4.57-4.57h50.287v-36.573H4.57V-4.57zM18.287-48v-10.286q0-.5-.322-.82t-.82-.323h-2.287q-.5 0-.82.323t-.323.82V-48q0 .5.322.82t.82.323h2.287q.5 0 .82-.322t.323-.82zm27.428 0v-10.286q0-.5-.32-.82t-.823-.323h-2.284q-.5 0-.822.323t-.32.82V-48q0 .5.32.82t.822.323h2.285q.5 0 .823-.322t.32-.82zm13.715-2.286V-4.57q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-45.716q0-1.857 1.357-3.214t3.214-1.357h4.573v-3.43q0-2.356 1.678-4.034T14.858-64h2.286q2.357 0 4.036 1.68t1.677 4.034v3.43H36.57v-3.43q0-2.357 1.68-4.035T42.286-64h2.285q2.36 0 4.037 1.68t1.68 4.034v3.43h4.57q1.857 0 3.214 1.356t1.36 3.214z","CALENDAR_TIMES_O":"M39.68-14.536l-1.644 1.643q-.322.322-.786.322t-.82-.323l-6.716-6.75L23-12.893q-.357.322-.82.322t-.787-.323l-1.643-1.643q-.32-.32-.32-.785t.32-.823l6.75-6.714-6.75-6.714q-.32-.36-.32-.823t.32-.786l1.643-1.64q.32-.323.786-.323t.82.322l6.714 6.713 6.715-6.714q.356-.323.82-.323t.786.322l1.643 1.64q.32.323.32.787t-.32.822l-6.716 6.713 6.715 6.714q.32.357.32.822t-.32.784zM4.57-4.57h50.287v-36.573H4.57V-4.57zM18.287-48v-10.286q0-.5-.322-.82t-.82-.323h-2.287q-.5 0-.82.323t-.323.82V-48q0 .5.322.82t.82.323h2.287q.5 0 .82-.322t.323-.82zm27.428 0v-10.286q0-.5-.32-.82t-.823-.323h-2.284q-.5 0-.822.323t-.32.82V-48q0 .5.32.82t.822.323h2.285q.5 0 .823-.322t.32-.82zm13.715-2.286V-4.57q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-45.716q0-1.857 1.357-3.214t3.214-1.357h4.573v-3.43q0-2.356 1.678-4.034T14.858-64h2.286q2.357 0 4.036 1.68t1.677 4.034v3.43H36.57v-3.43q0-2.357 1.68-4.035T42.286-64h2.285q2.36 0 4.037 1.68t1.68 4.034v3.43h4.57q1.857 0 3.214 1.356t1.36 3.214z","CALENDAR_CHECK_O":"M46.536-29.57L28.25-11.287q-.357.322-.82.322t-.823-.322L16.32-21.57q-.32-.36-.32-.823t.32-.786l1.644-1.64q.322-.323.786-.323t.82.322l7.86 7.856L43.285-32.82q.357-.323.82-.323t.787.322l1.643 1.64q.32.323.32.787t-.32.822zM4.57-4.57h50.287v-36.573H4.57V-4.57zM18.287-48v-10.286q0-.5-.322-.82t-.82-.323h-2.287q-.5 0-.82.323t-.323.82V-48q0 .5.322.82t.82.323h2.287q.5 0 .82-.322t.323-.82zm27.428 0v-10.286q0-.5-.32-.82t-.823-.323h-2.284q-.5 0-.822.323t-.32.82V-48q0 .5.32.82t.822.323h2.285q.5 0 .823-.322t.32-.82zm13.715-2.286V-4.57q0 1.856-1.36 3.213T54.858 0H4.57Q2.715 0 1.358-1.357T0-4.57v-45.716q0-1.857 1.357-3.214t3.214-1.357h4.573v-3.43q0-2.356 1.678-4.034T14.858-64h2.286q2.357 0 4.036 1.68t1.677 4.034v3.43H36.57v-3.43q0-2.357 1.68-4.035T42.286-64h2.285q2.36 0 4.037 1.68t1.68 4.034v3.43h4.57q1.857 0 3.214 1.356t1.36 3.214z","INDUSTRY":"M16-64q.93 0 1.607.68t.68 1.606v31.82l19.142-15.32q.606-.5 1.427-.5.93 0 1.607.678t.68 1.607v13.537l19.142-15.32q.607-.5 1.428-.5.93 0 1.607.677T64-43.43v41.144q0 .93-.68 1.607T61.715 0H2.286Q1.356 0 .68-.68T0-2.285v-59.428q0-.93.68-1.607T2.285-64H16z","MAP_PIN":"M18.286-25.143q2.357 0 4.57-.536v23.394q0 .93-.677 1.607T20.57 0H16q-.93 0-1.607-.68t-.68-1.606V-25.68q2.18.537 4.573.537zm0-38.857q7.57 0 12.928 5.357t5.357 12.93-5.356 12.927-12.928 5.357-12.93-5.356T0-45.714t5.357-12.93T18.287-64zm0 8q.5 0 .82-.32t.323-.823-.323-.82-.82-.323q-5.216 0-8.894 3.68t-3.68 8.892q0 .5.323.82t.82.323.823-.323.32-.82q0-4.25 3.018-7.27T18.286-56z","MAP_SIGNS":"M62.32-53.393q.36.357.36.822t-.36.82l-5.034 5.036q-1 1-2.43 1h-48q-.927 0-1.606-.68T4.57-48v-9.143q0-.928.68-1.607t1.607-.68H27.43v-2.284q0-.93.677-1.607t1.607-.68h4.572q.928 0 1.607.68t.678 1.606v2.285h18.287q1.43 0 2.43 1zM27.43-20.57h9.14v18.284q0 .93-.677 1.607T34.286 0h-4.572q-.928 0-1.607-.68t-.678-1.606V-20.57zm29.713-16q.928 0 1.607.677t.68 1.607v9.143q0 .93-.68 1.607t-1.607.68h-48q-1.43 0-2.43-1L1.68-28.894q-.36-.357-.36-.82t.36-.823l5.034-5.035q1-1 2.43-1h18.285v-6.86h9.14v6.86h20.573z","MAP_O":"M72.143-63.607q1 .714 1 1.893v50.285q0 .716-.393 1.287t-1.036.822L48.857-.18q-.857.394-1.714 0l-22-8.784-22 8.785Q2.786 0 2.286 0 1.606 0 1-.393q-1-.714-1-1.893V-52.57q0-.716.393-1.287t1.036-.822l22.856-9.14q.857-.394 1.714 0l22 8.784 22-8.785q1.143-.466 2.143.213zm-45.857 4.82v45.358l20.57 8.216V-50.57zM4.57-51.036v45.358L24-13.43v-45.356zm64 38.073V-58.32l-19.427 7.75v45.356z","MAP":"M18.286-64q.464 0 .803.34t.34.803v52.57q0 .716-.61 1L1.68-.142Q1.43 0 1.142 0 .68 0 .34-.34T0-1.142v-52.57q0-.716.607-1l17.143-9.144Q18-64 18.286-64zm44.57 0q.465 0 .805.34t.34.803v52.57q0 .716-.607 1L46.25-.142Q46 0 45.714 0q-.464 0-.803-.34t-.34-.803v-52.57q0-.716.61-1l17.14-9.144q.25-.143.537-.143zm-40 0q.287 0 .5.107l18.287 9.143q.643.357.643 1.036v52.57q0 .465-.34.805t-.803.34q-.286 0-.5-.107L22.357-9.25q-.643-.357-.643-1.036v-52.57q0-.465.34-.805t.803-.34z","COMMENTING":"M22.857-32q0-1.893-1.34-3.232t-3.23-1.34-3.233 1.34T13.714-32t1.34 3.232 3.232 1.34 3.232-1.34T22.858-32zm13.714 0q0-1.893-1.338-3.232T32-36.572t-3.232 1.34T27.428-32t1.34 3.232T32-27.428t3.232-1.34T36.572-32zm13.716 0q0-1.893-1.34-3.232t-3.232-1.34-3.232 1.34T41.142-32t1.34 3.232 3.232 1.34 3.232-1.34T50.286-32zM64-32q0 6.214-4.286 11.482T48.07-12.196 32-9.143q-3.93 0-7.536-.643-6.178 6.18-15.535 8.18-1.86.356-3.073.463-.428.036-.786-.214T4.608-2q-.143-.536.714-1.32.18-.18.84-.77t.91-.84.84-.91.858-1.124.732-1.322.714-1.714.518-2.054.447-2.59q-5.216-3.213-8.198-7.73T0-32q0-6.214 4.286-11.482t11.643-8.322T32-54.857t16.07 3.053 11.644 8.322T64-32z","COMMENTING_O":"M22.857-32q0 1.893-1.34 3.232t-3.23 1.34-3.233-1.34T13.714-32t1.34-3.232 3.232-1.34 3.232 1.34T22.858-32zm13.714 0q0 1.893-1.338 3.232T32-27.428t-3.232-1.34T27.428-32t1.34-3.232T32-36.572t3.232 1.34T36.572-32zm13.716 0q0 1.893-1.34 3.232t-3.232 1.34-3.232-1.34T41.142-32t1.34-3.232 3.232-1.34 3.232 1.34T50.286-32zM32-50.286q-7.286 0-13.625 2.482t-10.07 6.697T4.57-32q0 4 2.555 7.625t7.196 6.268l3.11 1.786-.966 3.427q-.857 3.25-2.5 6.143 5.43-2.25 9.822-6.107l1.535-1.357 2.037.214q2.464.286 4.643.286 7.286 0 13.625-2.482t10.07-6.697T59.43-32t-3.734-9.107-10.07-6.697T32-50.286zM64-32q0 6.214-4.286 11.482T48.07-12.196 32-9.143q-2.5 0-5.18-.286-7.07 6.25-16.427 8.644-1.75.5-4.072.786h-.177q-.536 0-.964-.375t-.573-.982v-.036Q4.5-1.536 4.59-1.82t.07-.36.16-.338l.216-.32.25-.305.285-.32q.25-.287 1.11-1.233t1.23-1.358 1.108-1.41 1.16-1.822.965-2.107.928-2.714q-5.606-3.18-8.838-7.857T0-32q0-4.643 2.536-8.875t6.82-7.304 10.215-4.874T32-54.857t12.43 1.803 10.213 4.875 6.82 7.305T64-32z","HOUZZ":"M18.286-21.464L36.57-32v21.107L18.287-.32v-21.144zM0-32v21.107l18.286-10.57zm18.286-31.68v21.11L0-32v-21.107zm0 21.11L36.57-53.108V-32z","VIMEO":"M61.036-45.5q-.357 8.43-11.857 23.25Q37.285-6.857 29.106-6.857q-5.07 0-8.57-9.393-1.573-5.714-4.716-17.214-2.57-9.357-5.606-9.357-.643 0-4.535 2.713l-2.75-3.5q.856-.75 3.856-3.447t4.643-4.125q5.57-4.927 8.606-5.213 3.393-.32 5.464 1.982t2.893 7.267q1.57 10.25 2.357 13.322 1.964 8.89 4.286 8.89 1.82 0 5.5-5.75 3.607-5.75 3.893-8.784.463-4.965-3.894-4.965-2.036 0-4.322.93Q40.5-57.536 52.607-57.143q8.964.286 8.43 11.643z","BLACK_TIE":"M0-59.43h54.857v54.86H0v-54.86zm38.75 39.823l-7.893-22.536L38.75-52.75H16.107L24-42.143l-7.893 22.536L27.43-8.75z","FONTICONS":"M0-59.43h54.857v54.86H0v-54.86zM32.43-48L32-46.82l2.68 2.963-1.11 4.07.894.894 3.822-2.036 3.82 2.037.894-.893-1.107-4.07 2.678-2.965-.427-1.18H40.75l-1.893-3.43h-1.143L35.82-48h-3.39zm-9.537 5.82q1.143 0 1.59.573t.41 2.25l6.214-.75q0-1.964-.625-3.304t-1.803-2-2.466-.91-3.035-.25q-4.75 0-7.11 2.052T13.715-38v2.57h-3.428v4.573H13q.714 0 .714.286v13.64q0 .5-.178.716t-.643.25l-2.607.25v3.143h16v-3.073l-5.322-.5q-.214-.036-.303-.053t-.124-.09-.018-.143.036-.25.017-.356v-13.82h6.823l1.357-4.573H20.5q-.214 0-.07-.213t.14-.32v-2.858q0-.966.055-1.448t.268-1 .696-.714 1.303-.197zM44.57-12.57v-3.073l-1.927-.32q-.25-.037-.34-.09t-.09-.108.037-.27.036-.427V-35.43h-9.822l-.82 3.61 2.963.784q.822.25.822.965v13.213q0 .5-.216.66t-.714.233l-2.5.32v3.073h12.57z"};

// Data Model

var dataModel = {};

/* Places Data
 * - Name: The name of the place
 * - Description: A short description of the place
 * - Type: The has to be from the Google Places API
 * - Icon: Font Awesome CSS class
 * - Marker: Font Awesome SVG map marker
 */

dataModel.places = [
	{
		name: 'Airports',
		description: 'description text',
		type: 'airport', 
		icon: 'fa-plane',
		marker: { path: fontawesome.markers.PLANE,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Amusement Parks',
		description: 'description text',
		type: 'amusement_park',
		icon: 'fa-ticket',
		marker: { path: fontawesome.markers.TICKET,
								fillColor: '#2980b9',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},	{
		name: 'Art Galleries',
		description: 'description text',
		type: 'art_gallery',
		icon: 'fa-paint-brush',
		marker: { path: fontawesome.markers.PAINT_BRUSH,
								fillColor: '#2980b9',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'ATMs',
		description: 'description text',
		type: 'atm',
		icon: 'fa-credit-card',
		marker: { path: fontawesome.markers.CREDIT_CARD,
								fillColor: '#4183D7',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.2 }
	},
	{
		name: 'Banks',
		description: 'description text',
		type: 'bank',
		icon: 'fa-university',
		marker: { path: fontawesome.markers.UNIVERSITY,
								fillColor: '#4183D7',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.2 }
	},
	{
		name: 'Bars',
		description: 'description text',
		type: 'bar',
		icon: 'fa-beer',
		marker: { path: fontawesome.markers.BEER,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Bicycle Stores',
		description: 'description text',
		type: 'bicycle_store',
		icon: 'fa-bicycle',
		marker: { path: fontawesome.markers.BICYCLE,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Book Stores',
		description: 'description text',
		type: 'book_store',
		icon: 'fa-book',
		marker: { path: fontawesome.markers.BOOK,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Bus Stations',
		description: 'description text',
		type: 'bus_station',
		icon: 'fa-bus',
		marker: { path: fontawesome.markers.BUS,
								fillColor: '#3A539B',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Cafes',
		description: 'description text',
		type: 'cafe',
		icon: 'fa-coffee',
		marker: { path: fontawesome.markers.COFFEE,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Parks',
		description: 'description text',
		type: 'parking',
		icon: 'fa-car',
		marker: { path: fontawesome.markers.CAR,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Repair',
		description: 'description text',
		type: 'car_repair',
		icon: 'fa-wrench',
		marker: { path: fontawesome.markers.WRENCH,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Car Washes',
		description: 'description text',
		type: 'car_wash',
		icon: 'fa-tint',
		marker: { path: fontawesome.markers.TINT,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Department Stores',
		description: 'description text',
		type: 'department_store',
		icon: 'fa-building-o',
		marker: { path: fontawesome.markers.BUILDING_O,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Doctors',
		description: 'description text',
		type: 'doctor',
		icon: 'fa-stethoscope',
		marker: { path: fontawesome.markers.STETHOSCOPE,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Electricians',
		description: 'description text',
		type: 'electrician',
		icon: 'fa-flash',
		marker: { path: fontawesome.markers.FLASH,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Electronic Stores',
		description: 'description text',
		type: 'electronics_store',
		icon: 'fa-tv',
		marker: { path: fontawesome.markers.TV,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Fire Stations',
		description: 'description text',
		type: 'fire_station',
		icon: 'fa-fire-extinguisher',
		marker: { path: fontawesome.markers.FIRE_EXTINGUISHER,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},	
	{
		name: 'Groceries',
		description: 'description text',
		type: 'grocery_or_supermarket',
		icon: 'fa-shopping-cart',
		marker: { path: fontawesome.markers.SHOPPING_CART,
								fillColor: '#7f8c8d',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.2 }
	},
	{
		name: 'Hairdressers',
		description: 'description text',
		type: 'hair_care',
		icon: 'fa-scissors',
		marker: { path: fontawesome.markers.SCISSORS,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Hospitals',
		description: 'description text',
		type: 'hospital',
		icon: 'fa-h-square',
		marker: { path: fontawesome.markers.H_SQUARE,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Jewelry Stores',
		description: 'description text',
		type: 'jewelry_store',
		icon: 'fa-diamond',
		marker: { path: fontawesome.markers.DIAMOND,
								fillColor: '#9b59b6',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Lawyers',
		description: 'description text',
		type: 'lawyer',
		icon: 'fa-legal',
		marker: { path: fontawesome.markers.LEGAL,
								fillColor: '#404040',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Locksmiths',
		description: 'description text',
		type: 'locksmith',
		icon: 'fa-key',
		marker: { path: fontawesome.markers.KEY,
								fillColor: '#404040',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Lodgings',
		description: 'description text',
		type: 'lodging',
		icon: 'fa-bed',
		marker: { path: fontawesome.markers.HOTEL,
								fillColor: '#3A539B',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#f9f9f9',
								strokeWeight: 1 }
	},
	{
		name: 'Movie Theaters',
		description: 'description text',
		type: 'movie_theater',
		icon: 'fa-film',
		marker: { path: fontawesome.markers.FILM,
								fillColor: '#22313F',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0 }
	},
	{
		name: 'Moving Companies',
		description: 'description text',
		type: 'moving_company',
		icon: 'fa-truck',
		marker: { path: fontawesome.markers.TRUCK,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Night Clubs',
		description: 'description text',
		type: 'night_club',
		icon: 'fa-glass',
		marker: { path: fontawesome.markers.GLASS,
								fillColor: '#22313F',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0 }
	},
	{
		name: 'Parks',
		description: 'description text',
		type: 'park',
		icon: 'fa-tree',
		marker: { path: fontawesome.markers.TREE,
								fillColor: '#27ae60',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Pharmacies',
		description: 'description text',
		type: 'pharmacy',
		icon: 'fa-medkit',
		marker: { path: fontawesome.markers.MEDKIT,
								fillColor: '#e74c3c',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 0.4 }
	},
	{
		name: 'Restaurants',
		description: 'description text',
		type: 'restaurant',
		icon: 'fa-cutlery',
		marker: { path: fontawesome.markers.CUTLERY,
								fillColor: '#d35400',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Subway Stations',
		description: 'description text',
		type: 'pharmacy',
		icon: 'fa-subway',
		marker: { path: fontawesome.markers.SUBWAY,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Taxi Stands',
		description: 'description text',
		type: 'taxi_stand',
		icon: 'fa-taxi',
		marker: { path: fontawesome.markers.TAXI,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Train Stations',
		description: 'description text',
		type: 'train_station',
		icon: 'fa-train',
		marker: { path: fontawesome.markers.TRAIN,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Travel Agencies',
		description: 'description text',
		type: 'travel_agency',
		icon: 'fa-map-signs',
		marker: { path: fontawesome.markers.MAP_SIGNS,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Universities',
		description: 'description text',
		type: 'university',
		icon: 'fa-mortar-board',
		marker: { path: fontawesome.markers.MORTAR_BOARD,
								fillColor: '#34495e',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	},
	{
		name: 'Vets',
		description: 'description text',
		type: 'veterinary_care',
		icon: 'fa-paw',
		marker: { path: fontawesome.markers.PAW,
								fillColor: '#966F33',
								fillOpacity: 1,
								scale: 0.3,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	}
]

// Foursquare Data
dataModel.foursquare = function(request) {

	var foursquareAPI = 'https://api.foursquare.com/v2/venues/search';

	return Promise.resolve($.ajax({
		url: foursquareAPI,
		dataType: 'json',
		data: {
			ll: request.venueLat+','+request.venueLng,
			query: request.venueName,
			intent: 'match',
			client_id: 'T3NSPSCOLUQ5R0OGEZCKUX0MOEUOEPW1HGFXYOF3ZKCYDQXD',
			client_secret: 'J2LN1WHKPT2MAQAP3POZP1REU2AWLYGM3S24B0DSLHZNHKJR',
			v: '20151230',
			m: 'foursquare' 
		}
	}));

}

// Uber Data 
dataModel.uber = function(request) {

	var uberAPI = 'https://api.uber.com/v1/estimates/price';
	var uberClientId = 't4nJf4oEHYCwFZ_TvGsnIDc_raF7rFOn';
	var uberServerToken = 'YXPNrYuvPMqZT5LYF_xIWzjs-yxFQfCRSLbve56l';

	return Promise.resolve($.ajax({
		url: uberAPI,
		headers: {
			Authorization: "Token "	+ uberServerToken
		},
		data: {
			start_latitude: request.startLat,
			start_longitude: request.startLng,
			end_latitude: request.endLat,
			end_longitude: request.endLng
		}
	}));

}


// View Model

/**
 * @file overview : Map project for Udacity's FEND
 * @author : contact@mikejoyce.io (Mike Joyce)
 */

/* TODO:
 * - Set default notication keep alive to 'true' 
 * - Remove redundant code
 * - Rename modal info observables
 * - Move menu SCSS partial to modules
 * - Set map location when Geo Location fails
 */

// Global Namespace
var globals = {
	map: '',
	latLang: '',
	places: [],
	markers: [],
	debug: true
};

// Encapsulate the ViewModel
(function(global) {

	// View Model 
	var ViewModel = function() {

		// Save a pointer reference to 'this'
		var self = this;

		// App Observables
		this.appName = "App Name";
		this.appDescription = "App Description";

		// Notifcation Observables
		this.notificationMessage = ko.observable('');
		this.notificationKeepAlive = ko.observable(false);
		this.notificationFadeDuration = ko.observable(1000);

		// Map Observables
		this.mapInfo = ko.observable(false);
		this.showMapLoader = ko.observable(false);
		this.mapCurrentLat = ko.observable();
		this.mapCurrentLng = ko.observable();

		// Place List Observable
		this.placeList = ko.observableArray([]); 

		// Search Observables
		this.searchQuery = ko.observable();
		this.searchRadius = ko.observable(5000);

		// Modal Observables
		this.modalVisibilty = ko.observable(false);
		this.modalOverlayVisibility = ko.observable(false);
		this.modalLoading = ko.observable(true);
		this.modalInfoPhoto = ko.observable();
		this.modalInfoRating = ko.observable();
		this.modalInfoName = ko.observable();
		this.modalInfoAddress = ko.observable();
		this.modalInfoLat = ko.observable();
		this.modalInfoLng = ko.observable();
		this.modalInfoPhone = ko.observable();
		this.modalInfoPhoneCall = ko.observable();
		this.modalInfoFoursquareVisibility = ko.observable(false);
		this.modalInfoFoursquareURL = ko.observable();
		this.modalUberEstimate = ko.observable();
		this.modalUberLoading = ko.observable(false);


		this.searchFoursquare = ko.computed(function() {

			var request = {
				venueLat: self.modalInfoLat(),
				venueLng: self.modalInfoLng(),
				venueName: self.modalInfoName()
			}

		  var response = dataModel.foursquare(request);

		  response.then(function(data) {
				if (data.response.venues.length > 0) {		
					self.modalInfoFoursquareURL('https://foursquare.com/v/'+data.response.venues[0]['id']);
			  	self.modalInfoFoursquareVisibility(true);
				}	else {
					self.modalInfoFoursquareURL('#');
					self.modalInfoFoursquareVisibility(false);
				}
		  }, function(xhrObj) {
		  	console.log(xhrObj);
		  });

		}).extend({ notify: 'always', rateLimit: 500 });


		this.uberRide = ko.computed(function() {
			self.modalUberLoading(true);

			var request = {
				startLat: self.mapCurrentLat(),
				startLng: self.mapCurrentLng(),
				endLat: self.modalInfoLat(),
				endLng: self.modalInfoLng() 
			}

			var response = dataModel.uber(request);

			response.then(function(data) {
				var estimate;

				data['prices'].length > 0 ? estimate = data['prices'][0]['estimate'] : estimate = 'Unavailable';

				self.modalUberEstimate(estimate);
				self.modalUberLoading(false);
			}, function(xhrObj) {
				console.log(xhrObj);
			});

		}).extend({ notify: 'always', rateLimit: 500 });

		// Loop through each place object in the dataModel.places array
		dataModel.places.forEach(function(placeItem) {
			self.placeList.push(new Place(placeItem));
		});

		// Set the current place
		this.currentPlace = ko.observable( this.placeList()[0] );

		// Select the current place
		this.selectPlace = function(place) {
			self.notificationKeepAlive(false);
			self.notificationFadeDuration(0);
			self.currentPlace(place);
			for(i=0;i<self.placeList().length;i++) {
				self.placeList()[i].isActive(false);
				self.mapInfo(false);
			}
			place.isActive(!place.isActive());
			// if (self.showMapLoader()) {
			// 	$('.place-list li').click(false);
			// } else {
			// 	console('false');
			// }
			self.mapInfo(true);
		}

		// Filter place types in the place list
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

		// Clear the filter
		this.clearSearch = function() {
			for (i=0;i<self.placeList().length;i++) {
				self.placeList()[i].isHidden(false);
			}
		}

		// Pan to the current location on the map
		this.panTo = function() {
			global.map.panTo(global.latLang);
		}

		// Zoom the map in
		this.zoomIn = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 21){
			global.map.setZoom(currentZoomLevel + 1);}
		}

		// Zoom the map out
		this.zoomOut = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 0){
			global.map.setZoom(currentZoomLevel - 1);}
		}
	
		// Close modal 
	 	this.closeModal = function() {
	 		self.modalVisibilty(false);
	 	} 

	 	// Open modal overlay
	 	this.openModalOverlay = function() {
	 		self.modalOverlayVisibility(true);
	 	}

	 	// Close modal overlay
	 	this.closeModalOverlay = function() {
	 		self.modalOverlayVisibility(false);
	 	}

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

	// KO Custom Binding for Map
	ko.bindingHandlers.map = {

		// Init function - ran once
	  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

	    var mapOptions = {
	      zoom: 15,
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

		    		// Update the current lat / long
		    		bindingContext.$root.mapCurrentLat(position.coords.latitude);
		    		bindingContext.$root.mapCurrentLng(position.coords.longitude);
		
						// Instantiate a new Google Map object	
			      global.latLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			 
			      // var infowindow = new google.maps.InfoWindow({
			      //   map: global.map,
			      //   position: global.latLang,
			      //   center: global.latLang,
			      //   content: 'Location found using HTML5.'
			      // });

		    		// Center map on current location
			      global.map.setCenter(global.latLang);

			      // Add a custom HTML current position marker to the map
				    var marker = new RichMarker({
				    	position: global.latLang,
				    	map: global.map,
				    	flat: true,
				    	content: '<div class="gm-current-location"><div class="radial-pulse"></div></div>'
				    });

			  }, function() {
		  		// Browser supports Geo-location but hasn't been enabled
		      handleNoGeolocation(true);
			}, 
				// Enable high accuracy Geo-location
				{maximumAge:600000, timeout:5000, enableHighAccuracy: true});
			  
			} else {
		    // Browser doesn't support Geo-location
		    handleNoGeolocation(false);
			}

			// Handle no Geo-location
			function handleNoGeolocation(errorFlag) {

			  if (errorFlag) {

			  	// If the global.debug variable is set to true, console.log the error
					if (global.debug) console.log('Error: The Geolocation service failed.');
					// Show the user notification message 
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Error: The Geolocation service failed.');

			  } else {

			  	// If the global.debug variable is set to true, console.log the error
					if (global.debug) console.log('Error: Your browser doesn\'t support geolocation.');
					// Show the user notification message 
					bindingContext.$root.notificationKeepAlive(true);
					bindingContext.$root.notificationMessage('Error: Your browser doesn\'t support geolocation.');

			  }

			  // var options = {
			  //   map: global.map,
			  //   position: new google.maps.LatLng(60, 105),
			  //   content: content
			  // };

			  // var infowindow = new google.maps.InfoWindow(options);
			  // map.setCenter(options.position);
			}

		},

		// Update function - ran every times an observable changes
		update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		  
	  	var value = valueAccessor();

	  	// If the markers array contains values, clear them from the map
	  	if (global.markers) {
	  		for (var i=0; i < global.markers.length; i++) {
					global.markers[i].setMap(null);
				}
				global.markers.length = 0;
	  	}

	  	// If the current place is active, perform a search
	  	if (value.currentPlace().isActive()) {

	  		var performSearch = function() {

	  			// Google Maps places search request object
			    var request = {
			    	location: global.latLang,
			    	radius: value.searchRadius(),
			    	types: []
			    };

			    // Push the current place type into the request object types array
			    request.types.push(value.currentPlace().type());

			    // // Instatiate a new Google Maps info window
			    // var infoBox = new InfoBox();

			    // Instantiate a new places service object
			    var mapPlaces = new google.maps.places.PlacesService(global.map);

			    // Set a variable to hold error messages for debugging purposes
			    var statusMessage;

			    // Set a variable to hold error messages visible to the user
			    var notificationMessage;

			    // Search nearby places
			    mapPlaces.nearbySearch(request, callback);

			    // Show the map loading animation
			    showMapLoader();

			    // Google Maps places search callback function
			    function callback(results, status) {
			    	console.log(results);
			    	if (status === google.maps.places.PlacesServiceStatus.OK) {

			    		// Clear all markers from the map
			    		clearMarkers();

			    		// Set the places array length to 0
			    		global.places.length = 0;

			    		// Hide user notification messages
			    		bindingContext.$root.notificationKeepAlive(false);
			    		bindingContext.$root.notificationFadeDuration(0);

			    		// Loop through the results and push intot the places array
			    		for (var i=0; i < results.length; i++) {
			    			global.places.push(results[i]);
			    		}	

			    		// Set place markers, info windows and modals	
			    		setPlaces();

			    		// Hide the map loading animation
			    		hideMapLoader();

			    	/* Callback Error Handling
						 * Error status and messages will be passed the the callbackError function.
						 */

			    	} else if (status === google.maps.places.PlacesServiceStatus.ERROR) {
			    		statusMessage = status+' There was a problem contacting the Google servers.';
			    		notificationMessage = 'There was a problem contacting the Google servers.';
			    		callbackError(statusMessage, notificationMessage);
			    	} else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
			    		statusMessage = status+' This request was invalid.';
			    		notificationMessage = 'This request was invalid.';
			    		callbackError(statusMessage, notificationMessage);
			    	} else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
				    	statusMessage = status+' The webpage has gone over its request quota.';
			    		notificationMessage = 'This webpage has gone over its request quota.';
			    		callbackError(statusMessage, notificationMessage);		    		
			    	} else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
			    		statusMessage = status+' This webpage is not allowed to use the PlacesService.';
			    		notificationMessage = 'This webpage is not allowed to use the PlacesService.';
			    		callbackError(statusMessage, notificationMessage);	
			    	} else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
			    		statusMessage = status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.';
			    		notificationMessage = 'Server Error. Please try again.';
			    		callbackError(statusMessage, notificationMessage);	
			    	} else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) { 
			    		statusMessage = status+' No result was found for this request.';
			    		notificationMessage = 'No Results';
			    		callbackError(statusMessage, notificationMessage);	
			    	} else {
			    		callbackError('Error', 'Error');
			    	}
			    }


			    /* Callback Error Function
			     * This function will create both an error message for debugging purposes and a
					 * more readable, jargon-free error message for the user.
			     */
			    function callbackError(statusMessage, notificationMessage) {
			    	// If the global.debug variable is set to true, console log the error
			    	if (global.debug) console.log(statusMessage);
			    	// Show the user notification message
				    bindingContext.$root.showMapLoader(false);
				   	bindingContext.$root.notificationKeepAlive(true);
		    		bindingContext.$root.notificationMessage(notificationMessage);	  	    	
			    }

			    // Set places function
			    function setPlaces() {

			    	// Loop thought the places array
				    for (var i=0; i < global.places.length; i++) {

				    	// Create a marker and set marker's icon
				    	global.markers[i] = new google.maps.Marker({
				    		map: global.map,
				    		position: global.places[i].geometry.location,
				    		icon: value.currentPlace().marker()
				    	});

				    	// Add the marker to the map
				    	global.markers[i].setMap(global.map);

				    	// Create an object to hold data for the place
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

				    	// Add an Info Box
				    	addInfoBox(placeData);

				    	// Add an Info Modal
				    	addInfoModal(placeData);

				    }

				    // Automagically zoom the map in / out to show all the markers 
				    var bounds = new google.maps.LatLngBounds();
				    for(i=0; i<global.markers.length; i++) {
				    	bounds.extend(global.markers[i].getPosition());
				    }
				    global.map.fitBounds(bounds);

				 	}

				 	// Add Info Box function
					function addInfoBox(data) {

						var infoBoxOptions = {
							boxClass: 'info-box',
							content: '<div class="info-box-content">' + '<div class="info-box-title">'+data.name+'</div>' + '<div class="info-box-image" style="background-image: url('+data.photo+');"></div>' + '<i class="info-box-icon fa '+value.currentPlace().icon()+'"></i></div>',
							alignBottom: true,
							disableAutoPan: false,
							maxWidth: 0,
							pixelOffset: new google.maps.Size(-90, -30),
							zIndex: null,
							boxStyle: { 
							  opacity: 0.75,
							  width: "200px"
							 },
							closeBoxURL: "",
							infoBoxClearance: new google.maps.Size(1, 1),
							isHidden: false,
							pane: "floatPane",
							enableEventPropagation: false
						};

						var infoBox = new InfoBox(infoBoxOptions);

						// Add event listener to show Info Box on marker mouseover
					 	google.maps.event.addListener(data.marker, 'mouseover', function() {
					 		infoBox.open(global.map, this);
					  });

					 	// Add event listener to hide Info Box on marker mouseout
					  google.maps.event.addListener(data.marker, 'mouseout', function() {
					  	infoBox.close(global.map, this);
					  });

					}

					// Add Info Modal function
					function addInfoModal(data) {

						// Add event listener to show Info Modal on marker click
						google.maps.event.addListener(data.marker, 'click', function() {

							// Reset the marker icons
							for (i=0; i < global.markers.length; i++) {
								global.markers[i].setIcon(value.currentPlace().marker());
							}

							// Set the selected marker icon
					 		data.marker.setIcon({ path: fontawesome.markers.CIRCLE_O,
								fillColor: '#ed5565',
								fillOpacity: 1,
								scale: 0.4,
								strokeColor: '#ffffff',
								strokeWeight: 1.5
							});

							// Pan to the markers position on the map
							global.map.panTo(data.position);

							// Show the modal
							bindingContext.$root.modalVisibilty(true);
							// Show the modal loading animation
							bindingContext.$root.modalLoading(true);

							// Google Maps places search request object 
							var request = { 
					  		placeId: data.placeId
							};

							// Instatiate a Google Maps Places Service object
							var service = new google.maps.places.PlacesService(global.map);
							service.getDetails(request, callback);

							// Google Maps places search callback function
							function callback(place, status) {

								// If the request if OK, set the Info Window content
							  if (status == google.maps.places.PlacesServiceStatus.OK) {

							  	var placeInfo = {
										id: place.id,
										name: place.name,
										address: place.formatted_address,
										lat: place.geometry.location.lat(),
										lng: place.geometry.location.lng(),
										phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'No Number',
										phoneCall: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number.replace(/ /g, '') : false,
										photo: typeof place.photos !== 'undefined' ? place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : 'dist/images/default.png',
										rating: typeof place.rating !== 'undefined' ? place.rating : '-'
									};

									bindingContext.$root.modalInfoPhoto("url('"+placeInfo.photo+"')");
									bindingContext.$root.modalInfoRating(placeInfo.rating);
									bindingContext.$root.modalInfoName(placeInfo.name);
									bindingContext.$root.modalInfoAddress(placeInfo.address);
									bindingContext.$root.modalInfoLat(placeInfo.lat);							
									bindingContext.$root.modalInfoLng(placeInfo.lng);
									bindingContext.$root.modalInfoPhone(placeInfo.phone);
									bindingContext.$root.modalInfoPhoneCall(placeInfo.phoneCall);

									setTimeout(function() {
										bindingContext.$root.modalLoading(false);
									}, 1000);

								// If the request failed, console log the error if the global.debug variable is set to true
							  } else {

						  		if (global.debug) console.log(status);

							  }
							}

						});

					}

					// Clear map markers function
					function clearMarkers() {
						for (var i=0; i < global.markers.length; i++) {
							global.markers[i].setMap(null);
						}
						global.markers.length = 0;
					}

				} 
				performSearch();

				// Show map loader function
				function showMapLoader() {
			    bindingContext.$root.showMapLoader(true);
			   }

			  // Hide map loader function
			  function hideMapLoader() {
	    		google.maps.event.addListener(global.map, 'idle', function() {
	    			setTimeout(function() {
	    				bindingContext.$root.showMapLoader(false);
	    			}, 1000);
	    		});
			  }

			}

		} 

	};

	// KO Custom Binding for Notifications
	ko.bindingHandlers.notification = {

		// Update function - ran everytime an observable changes
		update: function(element, valueAccessor, allBindingsAccessor, viewModel) {

			var rawValue = valueAccessor(),

			/* The Notification binding can be passed a string or an object with properties: 
			 * - message
			 * - duration (default fade out is 4 seconds)
			 * - fadeoutDuration (default duration is 200 miliseconds)
			 * - hide (hidden by default)
			 * - fade (fade out by default if jQuery is present)
			 * - callback 
			 */
			options = typeof rawValue == 'object' ? rawValue : {message: rawValue},
			message = ko.utils.unwrapObservable(options.message),
			duration = options.duration !== undefined ? ko.utils.unwrapObservable(options.duration) : 5000,
			fadeoutDuration = options.fadeoutDuration !== undefined ? ko.utils.unwrapObservable(options.fadeoutDuration) : 200,
			hide = options.hide !== undefined ? ko.utils.unwrapObservable(options.hide) : true, 
			fade = options.fade !== undefined ? ko.utils.unwrapObservable(options.fade) : true,
            callback = options.callback !== undefined ? ko.utils.unwrapObservable(options.callback) : function() {},
			jQueryExists = typeof jQuery != 'undefined';

			// Set the element's text to the value of the message
			if (message === null || message === undefined)
				message = "";

			element.innerHTML = message;

			// Clear any outstanding timeouts
			clearTimeout(element.notificationTimer);

			if (message == '') {
				element.style.display = 'none';
				return;
			}

			// If there are any animations going on, stop them and show the element, otherwise just show the element
			if (jQueryExists)
				jQuery(element).stop(true, true).show();
			else
				element.style.display = '';

			if (!hide) {

				// Run a timeout to make it disappear
				element.notificationTimer = setTimeout(function() {

					// If jQuery is there, run the fadeOut, otherwise do old-timey js
					if (jQueryExists) {
						if (fade)
							jQuery(element).fadeOut(fadeoutDuration, function() {
                options.message('');
                callback();
	            });
						else {
							jQuery(element).hide();
							options.message('');
	            callback();
						}
					} else {
						element.style.display = 'none';
	          callback();
					}
				}, duration);
			} else {
	      callback();
			}
		}
	};

	// KO Custom Binding for Range Slider
	ko.bindingHandlers.rangeSlider = {

		// Init function - ran once
		init: function(element, valueAccessor, allBindingsAccessor) {
			$(element).ionRangeSlider({
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
			ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor);
		},

		// Update function - ran everytime an observable is updated
		update: function(element, valueAccessor) {
			var value = valueAccessor();
			if (global.debug) console.log(ko.unwrap(value));
			ko.bindingHandlers.value.update(element, valueAccessor)
		}
	};

	// KO Custom Binding for Scroll Bar
	ko.bindingHandlers.scrollBar = {

		// Init function - ran once
		init: function(element, valueAccessor, allBindingsAccessor) {

			// Check for mobile devices
			var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

			// If the device not a mobile device, instatiate the custom scroll bar
			if (!isMobile) {
				$(element).mCustomScrollbar({
					keyboard:{scrollType:"stepped"},
					mouseWheel:{scrollAmount:10}
				});
			}
		}
	};

	// // KO Custom Binding for Modal
	// ko.bindingHandlers.modal = {

	// 	// Update function - ran everytime an observable changes
	// 	update: function(element, valueAccessor) {



	// 		// var stage01 = 'modal-stage-01';
	// 		// var stage02 = 'modal-stage-02';
	// 		// var stage03 = 'modal-stage-03';
	// 		// var loader = '.modal-loader';
	// 		// var overlay = '.modal-overlay';
	// 		// var overlayOpen = 'modal-overlay-open';

	// 		if (valueAccessor().modal()) {	
	// 			console.log('true');
	// 		} else {
	// 			console.log('false');
	// 			valueAccessor().loading(false);
	// 		}

	// 		// if (valueAccessor().overlay()) {
	// 		// 	$(element).find(overlay).addClass(overlayOpen);
	// 		// } else {
	// 		// 	$(element).find(overlay).removeClass(overlayOpen);
	// 		// }

	// 		// if (valueAccessor().loading()) {
	// 		// 	$(element).removeClass(stage01+' '+stage02+' '+stage03);
	// 		// 	$(element).find(loader).show();
	// 		// 	valueAccessor().overlay(false);
	// 		// } else {
	// 		// 	$(element).addClass(stage01);
	// 		// 	setTimeout(function() {
	// 		// 		$(element).find(loader).hide().promise().done(function() {
	// 		// 			$(element).addClass(stage02+' '+stage03);
	// 		// 		});
	// 		// 	}, 1000);
	// 		// }

	// 	}
	// }

	// Apply Knockout Bindings
	ko.applyBindings(new ViewModel());

})(globals);
