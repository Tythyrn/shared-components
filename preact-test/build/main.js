(()=>{var e={686:e=>{self,e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var _ in n)e.o(n,_)&&!e.o(t,_)&&Object.defineProperty(t,_,{enumerable:!0,get:n[_]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n});const n=function(){return h("h1",null,"Hello World!")};return t})()}},t={};function n(_){var l=t[_];if(void 0!==l)return l.exports;var o=t[_]={exports:{}};return e[_](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var _ in t)n.o(t,_)&&!n.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:t[_]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t,_,l,o,r,u,i={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=Array.isArray;function p(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function d(t,n,_){var l,o,r,u={};for(r in n)"key"==r?l=n[r]:"ref"==r?o=n[r]:u[r]=n[r];if(arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===u[r]&&(u[r]=t.defaultProps[r]);return h(t,u,l,o,null)}function h(e,n,l,o,r){var u={type:e,props:n,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++_:r};return null==r&&null!=t.vnode&&t.vnode(u),u}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!k.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(k)}function k(){var e,t,n,_,o,r,i,s,c;for(l.sort(u);e=l.shift();)e.__d&&(t=l.length,_=void 0,o=void 0,r=void 0,s=(i=(n=e).__v).__e,(c=n.__P)&&(_=[],o=[],(r=p({},i)).__v=i.__v+1,M(c,i,r,n.__n,void 0!==c.ownerSVGElement,null!=i.__h?[s]:null,_,null==s?m(i):s,i.__h,o),O(_,i,o),i.__e!=s&&g(i)),l.length>t&&l.sort(u));k.__r=0}function S(e,t,n,_,l,o,r,u,c,p,a){var d,y,m,g,b,k,S,C,T,D,E=0,O=_&&_.__k||s,U=O.length,W=U,j=t.length;for(n.__k=[],d=0;d<j;d++)null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g||"function"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?h(null,g,null,null,g):f(g)?h(v,{children:g},null,null,null):g.__b>0?h(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)&&(g.__=n,g.__b=n.__b+1,-1===(C=w(g,O,S=d+E,W))?m=i:(m=O[C]||i,O[C]=void 0,W--),M(e,g,m,l,o,r,u,c,p,a),b=g.__e,(y=g.ref)&&m.ref!=y&&(m.ref&&L(m.ref,null,g),a.push(y,g.__c||b,g)),null!=b&&(null==k&&(k=b),D=!(T=m===i||null===m.__v)&&C===S,T?-1==C&&E--:C!==S&&(C===S+1?(E++,D=!0):C>S?W>j-S?(E+=C-S,D=!0):E--:E=C<S&&C==S-1?C-S:0),S=d+E,D=D||C==d&&!T,"function"!=typeof g.type||C===S&&m.__k!==g.__k?"function"==typeof g.type||D?void 0!==g.__d?(c=g.__d,g.__d=void 0):c=b.nextSibling:c=P(e,b,c):c=x(g,c,e),"function"==typeof n.type&&(n.__d=c)));for(n.__e=k,d=U;d--;)null!=O[d]&&("function"==typeof n.type&&null!=O[d].__e&&O[d].__e==n.__d&&(n.__d=O[d].__e.nextSibling),N(O[d],O[d]))}function x(e,t,n){for(var _,l=e.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=e,t="function"==typeof _.type?x(_,t,n):P(n,_.__e,t));return t}function P(e,t,n){return null==n||n.parentNode!==e?e.insertBefore(t,null):t==n&&null!=t.parentNode||e.insertBefore(t,n),t.nextSibling}function w(e,t,n,_){var l=e.key,o=e.type,r=n-1,u=n+1,i=t[n];if(null===i||i&&l==i.key&&o===i.type)return n;if(_>(null!=i?1:0))for(;r>=0||u<t.length;){if(r>=0){if((i=t[r])&&l==i.key&&o===i.type)return r;r--}if(u<t.length){if((i=t[u])&&l==i.key&&o===i.type)return u;u++}}return-1}function C(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function T(e,t,n,_,l){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||C(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||C(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?E:D,o):e.removeEventListener(t,o?E:D,o);else if("dangerouslySetInnerHTML"!==t){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function D(e){return this.l[e.type+!1](t.event?t.event(e):e)}function E(e){return this.l[e.type+!0](t.event?t.event(e):e)}function M(e,n,_,l,o,r,u,i,s,c){var a,d,h,m,g,b,k,x,P,w,C,T,D,E,M,O=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(s=_.__h,i=n.__e=_.__e,n.__h=null,r=[i]),(a=t.__b)&&a(n);try{e:if("function"==typeof O){if(x=n.props,P=(a=O.contextType)&&l[a.__c],w=a?P?P.props.value:a.__:l,_.__c?k=(d=n.__c=_.__c).__=d.__E:("prototype"in O&&O.prototype.render?n.__c=d=new O(x,w):(n.__c=d=new y(x,w),d.constructor=O,d.render=W),P&&P.sub(d),d.props=x,d.state||(d.state={}),d.context=w,d.__n=l,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=O.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=p({},d.__s)),p(d.__s,O.getDerivedStateFromProps(x,d.__s))),m=d.props,g=d.state,d.__v=n,h)null==O.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==O.getDerivedStateFromProps&&x!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(x,w),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(x,d.__s,w)||n.__v===_.__v)){for(n.__v!==_.__v&&(d.props=x,d.state=d.__s,d.__d=!1),n.__e=_.__e,n.__k=_.__k,n.__k.forEach((function(e){e&&(e.__=n)})),C=0;C<d._sb.length;C++)d.__h.push(d._sb[C]);d._sb=[],d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(x,d.__s,w),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,g,b)}))}if(d.context=w,d.props=x,d.__P=e,d.__e=!1,T=t.__r,D=0,"prototype"in O&&O.prototype.render){for(d.state=d.__s,d.__d=!1,T&&T(n),a=d.render(d.props,d.state,d.context),E=0;E<d._sb.length;E++)d.__h.push(d._sb[E]);d._sb=[]}else do{d.__d=!1,T&&T(n),a=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++D<25);d.state=d.__s,null!=d.getChildContext&&(l=p(p({},l),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(m,g)),S(e,f(M=null!=a&&a.type===v&&null==a.key?a.props.children:a)?M:[M],n,_,l,o,r,u,i,s,c),d.base=n.__e,n.__h=null,d.__h.length&&u.push(d),k&&(d.__E=d.__=null)}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=U(_.__e,n,_,l,o,r,u,s,c);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(s||null!=r)&&(n.__e=i,n.__h=!!s,r[r.indexOf(i)]=null),t.__e(e,n,_)}}function O(e,n,_){for(var l=0;l<_.length;l++)L(_[l],_[++l],_[++l]);t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function U(t,n,_,l,o,r,u,s,c){var p,d,h,v=_.props,y=n.props,g=n.type,b=0;if("svg"===g&&(o=!0),null!=r)for(;b<r.length;b++)if((p=r[b])&&"setAttribute"in p==!!g&&(g?p.localName===g:3===p.nodeType)){t=p,r[b]=null;break}if(null==t){if(null===g)return document.createTextNode(y);t=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,y.is&&y),r=null,s=!1}if(null===g)v===y||s&&t.data===y||(t.data=y);else{if(r=r&&e.call(t.childNodes),d=(v=_.props||i).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!s){if(null!=r)for(v={},b=0;b<t.attributes.length;b++)v[t.attributes[b].name]=t.attributes[b].value;(h||d)&&(h&&(d&&h.__html==d.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(function(e,t,n,_,l){var o;for(o in n)"children"===o||"key"===o||o in t||T(e,o,null,n[o],_);for(o in t)l&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||T(e,o,t[o],n[o],_)}(t,y,v,o,s),h)n.__k=[];else if(S(t,f(b=n.props.children)?b:[b],n,_,l,o&&"foreignObject"!==g,r,u,r?r[0]:_.__k&&m(_,0),s,c),null!=r)for(b=r.length;b--;)null!=r[b]&&a(r[b]);s||("value"in y&&void 0!==(b=y.value)&&(b!==t.value||"progress"===g&&!b||"option"===g&&b!==v.value)&&T(t,"value",b,v.value,!1),"checked"in y&&void 0!==(b=y.checked)&&b!==t.checked&&T(t,"checked",b,v.checked,!1))}return t}function L(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function N(e,n,_){var l,o;if(t.unmount&&t.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||L(l,null,n)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){t.__e(e,n)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&N(l[o],n,_||"function"!=typeof e.type);_||null==e.__e||a(e.__e),e.__=e.__e=e.__d=void 0}function W(e,t,n){return this.constructor(e,n)}e=s.slice,t={__e:function(e,t,n,_){for(var l,o,r;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),r=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,_||{}),r=l.__d),r)return l.__E=l}catch(t){e=t}throw e}},_=0,y.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),b(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},y.prototype.render=v,l=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,t){return e.__v.__b-t.__v.__b},k.__r=0;var j=n(686);!function(n,_,l){var o,r,u,s;t.__&&t.__(n,_),r=(o="function"==typeof l)?null:l&&l.__k||_.__k,u=[],s=[],M(_,n=(!o&&l||_).__k=d(v,null,[n]),r||i,i,void 0!==_.ownerSVGElement,!o&&l?[l]:r?null:_.firstChild?e.call(_.childNodes):null,u,!o&&l?l:r?r.__e:_.firstChild,o,s),O(u,n,s)}(d("main",null,d(n.n(j)(),null)),document.body)})()})();