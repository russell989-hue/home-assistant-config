/*! camera-gallery-card v3.1.0 | MIT */
!function(){"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}};const r=e=>new s("string"==typeof e?e:e+"",void 0,i),o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return r(t)})(e):e,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!a(e,t),y={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const r=n?.call(this);s?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(t)i.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of n){const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=n;const r=s.fromAttribute(t,e.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(e,t,i,n=!1,s){if(void 0!==e){const r=this.constructor;if(!1===n&&(s=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??b)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,f?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,k=e=>e,S=x.trustedTypes,$=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+A,M=`<${L}>`,P=document,T=()=>P.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,I="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,R=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,O=/"/g,V=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),N=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Y=new WeakMap,U=P.createTreeWalker(P,129);function W(e,t){if(!E(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,n=[];let s,r=2===t?"<svg>":3===t?"<math>":"",o=F;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===F?"!--"===l[1]?o=H:void 0!==l[1]?o=D:void 0!==l[2]?(V.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=R):void 0!==l[3]&&(o=R):o===R?">"===l[0]?(o=s??F,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?R:'"'===l[3]?O:j):o===O||o===j?o=R:o===H||o===D?o=F:(o=R,s=void 0);const h=o===R&&e[t+1].startsWith("/>")?" ":"";r+=o===F?i+M:c>=0?(n.push(a),i.slice(0,c)+C+i.slice(c)+A+h):i+A+(-2===c?t:h)}return[W(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class Z{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,r=0;const o=e.length-1,a=this.parts,[l,c]=K(e,t);if(this.el=Z.createElement(l,i),U.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=U.nextNode())&&a.length<o;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(C)){const t=c[r++],i=n.getAttribute(e).split(A),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?ee:"?"===o[1]?te:"@"===o[1]?ie:Q}),n.removeAttribute(e)}else e.startsWith(A)&&(a.push({type:6,index:s}),n.removeAttribute(e));if(V.test(n.tagName)){const e=n.textContent.split(A),t=e.length-1;if(t>0){n.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],T()),U.nextNode(),a.push({type:2,index:++s});n.append(e[t],T())}}}else if(8===n.nodeType)if(n.data===L)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(A,e+1));)a.push({type:7,index:s}),e+=A.length-1}s++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,n){if(t===N)return t;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const r=z(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(t=G(e,s._$AS(e,t.values),s,n)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??P).importNode(t,!0);U.currentNode=n;let s=U.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new J(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new ne(s,this,e)),this._$AV.push(t),a=i[++o]}r!==a?.index&&(s=U.nextNode(),r++)}return U.currentNode=P,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),z(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==N&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>E(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new X(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Z(e)),t}k(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new J(this.O(T()),this.O(T()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(e,t=this,i,n){const s=this.strings;let r=!1;if(void 0===s)e=G(this,e,t,0),r=!z(e)||e!==this._$AH&&e!==N,r&&(this._$AH=e);else{const n=e;let o,a;for(e=s[0],o=0;o<s.length-1;o++)a=G(this,n[i+o],t,o),a===N&&(a=this._$AH[o]),r||=!z(a)||a!==this._$AH[o],a===B?e=B:e!==B&&(e+=(a??"")+s[o+1]),this._$AH[o]=a}r&&!n&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class te extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class ie extends Q{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??B)===N)return;const i=this._$AH,n=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==B&&(i===B||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const se=x.litHtmlPolyfillSupport;se?.(Z,J),(x.litHtmlVersions??=[]).push("3.3.2");const re=globalThis;let oe=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let s=n._$litPart$;if(void 0===s){const e=i?.renderBefore??null;n._$litPart$=s=new J(t.insertBefore(T(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};oe._$litElement$=!0,oe.finalized=!0,re.litElementHydrateSupport?.({LitElement:oe});const ae=re.litElementPolyfillSupport;
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */
function le(e){return null==e}ae?.({LitElement:oe}),(re.litElementVersions??=[]).push("4.2.2");var ce=function(e,t){var i,n="";for(i=0;i<t;i+=1)n+=e;return n},de={isNothing:le,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:le(e)?[]:[e]},repeat:ce,isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var i,n,s,r;if(t)for(i=0,n=(r=Object.keys(t)).length;i<n;i+=1)e[s=r[i]]=t[s];return e}};function he(e,t){var i="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),n+" "+i):n}function pe(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=he(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}pe.prototype=Object.create(Error.prototype),pe.prototype.constructor=pe,pe.prototype.toString=function(e){return this.name+": "+he(this,e)};var ue=pe;function me(e,t,i,n,s){var r="",o="",a=Math.floor(s/2)-1;return n-t>a&&(t=n-a+(r=" ... ").length),i-n>a&&(i=n+a-(o=" ...").length),{str:r+e.slice(t,i).replace(/\t/g,"→")+o,pos:n-t+r.length}}function ge(e,t){return de.repeat(" ",t-e.length)+e}var fe=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,s=[0],r=[],o=-1;i=n.exec(e.buffer);)r.push(i.index),s.push(i.index+i[0].length),e.position<=i.index&&o<0&&(o=s.length-2);o<0&&(o=s.length-1);var a,l,c="",d=Math.min(e.line+t.linesAfter,r.length).toString().length,h=t.maxLength-(t.indent+d+3);for(a=1;a<=t.linesBefore&&!(o-a<0);a++)l=me(e.buffer,s[o-a],r[o-a],e.position-(s[o]-s[o-a]),h),c=de.repeat(" ",t.indent)+ge((e.line-a+1).toString(),d)+" | "+l.str+"\n"+c;for(l=me(e.buffer,s[o],r[o],e.position,h),c+=de.repeat(" ",t.indent)+ge((e.line+1).toString(),d)+" | "+l.str+"\n",c+=de.repeat("-",t.indent+d+3+l.pos)+"^\n",a=1;a<=t.linesAfter&&!(o+a>=r.length);a++)l=me(e.buffer,s[o+a],r[o+a],e.position-(s[o]-s[o+a]),h),c+=de.repeat(" ",t.indent)+ge((e.line+a+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")},ve=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],_e=["scalar","sequence","mapping"];var be=function(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===ve.indexOf(t))throw new ue('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}(t.styleAliases||null),-1===_e.indexOf(this.kind))throw new ue('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function ye(e,t){var i=[];return e[t].forEach(function(e){var t=i.length;i.forEach(function(i,n){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=n)}),i[t]=e}),i}function we(e){return this.extend(e)}we.prototype.extend=function(e){var t=[],i=[];if(e instanceof be)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new ue("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof be))throw new ue("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new ue("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new ue("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(e){if(!(e instanceof be))throw new ue("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(we.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=ye(n,"implicit"),n.compiledExplicit=ye(n,"explicit"),n.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var xe=we,ke=new be("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),Se=new be("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),$e=new be("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),Ce=new xe({explicit:[ke,Se,$e]});var Ae=new be("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var Le=new be("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Me(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Pe(e){return 48<=e&&e<=55}function Te(e){return 48<=e&&e<=57}var ze=new be("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i=e.length,n=0,s=!1;if(!i)return!1;if("-"!==(t=e[n])&&"+"!==t||(t=e[++n]),"0"===t){if(n+1===i)return!0;if("b"===(t=e[++n])){for(n++;n<i;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;s=!0}return s&&"_"!==t}if("x"===t){for(n++;n<i;n++)if("_"!==(t=e[n])){if(!Me(e.charCodeAt(n)))return!1;s=!0}return s&&"_"!==t}if("o"===t){for(n++;n<i;n++)if("_"!==(t=e[n])){if(!Pe(e.charCodeAt(n)))return!1;s=!0}return s&&"_"!==t}}if("_"===t)return!1;for(;n<i;n++)if("_"!==(t=e[n])){if(!Te(e.charCodeAt(n)))return!1;s=!0}return!(!s||"_"===t)},construct:function(e){var t,i=e,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(n=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!de.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ee=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Ie=/^[-+]?[0-9]+e/;var Fe=new be("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Ee.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||de.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(de.isNegativeZero(e))return"-0.0";return i=e.toString(10),Ie.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),He=Ce.extend({implicit:[Ae,Le,ze,Fe]}),De=He,Re=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),je=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Oe=new be("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Re.exec(e)||null!==je.exec(e))},construct:function(e){var t,i,n,s,r,o,a,l,c=0,d=null;if(null===(t=Re.exec(e))&&(t=je.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],n=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(i,n,s));if(r=+t[4],o=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(i,n,s,r,o,a,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}});var Ve=new be("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Ne=new be("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,n=0,s=e.length,r=qe;for(i=0;i<s;i++)if(!((t=r.indexOf(e.charAt(i)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,i,n=e.replace(/[\r\n=]/g,""),s=n.length,r=qe,o=0,a=[];for(t=0;t<s;t++)t%4==0&&t&&(a.push(o>>16&255),a.push(o>>8&255),a.push(255&o)),o=o<<6|r.indexOf(n.charAt(t));return 0===(i=s%4*6)?(a.push(o>>16&255),a.push(o>>8&255),a.push(255&o)):18===i?(a.push(o>>10&255),a.push(o>>2&255)):12===i&&a.push(o>>4&255),new Uint8Array(a)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,n="",s=0,r=e.length,o=qe;for(t=0;t<r;t++)t%3==0&&t&&(n+=o[s>>18&63],n+=o[s>>12&63],n+=o[s>>6&63],n+=o[63&s]),s=(s<<8)+e[t];return 0===(i=r%3)?(n+=o[s>>18&63],n+=o[s>>12&63],n+=o[s>>6&63],n+=o[63&s]):2===i?(n+=o[s>>10&63],n+=o[s>>4&63],n+=o[s<<2&63],n+=o[64]):1===i&&(n+=o[s>>2&63],n+=o[s<<4&63],n+=o[64],n+=o[64]),n}}),Be=Object.prototype.hasOwnProperty,Ye=Object.prototype.toString;var Ue=new be("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,n,s,r,o=[],a=e;for(t=0,i=a.length;t<i;t+=1){if(n=a[t],r=!1,"[object Object]"!==Ye.call(n))return!1;for(s in n)if(Be.call(n,s)){if(r)return!1;r=!0}if(!r)return!1;if(-1!==o.indexOf(s))return!1;o.push(s)}return!0},construct:function(e){return null!==e?e:[]}}),We=Object.prototype.toString;var Ke=new be("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,n,s,r,o=e;for(r=new Array(o.length),t=0,i=o.length;t<i;t+=1){if(n=o[t],"[object Object]"!==We.call(n))return!1;if(1!==(s=Object.keys(n)).length)return!1;r[t]=[s[0],n[s[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,n,s,r,o=e;for(r=new Array(o.length),t=0,i=o.length;t<i;t+=1)n=o[t],s=Object.keys(n),r[t]=[s[0],n[s[0]]];return r}}),Ze=Object.prototype.hasOwnProperty;var Ge=new be("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(Ze.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),Xe=De.extend({implicit:[Oe,Ve],explicit:[Ne,Ue,Ke,Ge]}),Je=Object.prototype.hasOwnProperty,Qe=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,et=/[\x85\u2028\u2029]/,tt=/[,\[\]\{\}]/,it=/^(?:!|!!|![a-z\-]+!)$/i,nt=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function st(e){return Object.prototype.toString.call(e)}function rt(e){return 10===e||13===e}function ot(e){return 9===e||32===e}function at(e){return 9===e||32===e||10===e||13===e}function lt(e){return 44===e||91===e||93===e||123===e||125===e}function ct(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function dt(e){return 120===e?2:117===e?4:85===e?8:0}function ht(e){return 48<=e&&e<=57?e-48:-1}function pt(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function ut(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}function mt(e,t,i){"__proto__"===t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[t]=i}for(var gt=new Array(256),ft=new Array(256),vt=0;vt<256;vt++)gt[vt]=pt(vt)?1:0,ft[vt]=pt(vt);function _t(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Xe,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function bt(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=fe(i),new ue(t,i)}function yt(e,t){throw bt(e,t)}function wt(e,t){e.onWarning&&e.onWarning.call(null,bt(e,t))}var xt={YAML:function(e,t,i){var n,s,r;null!==e.version&&yt(e,"duplication of %YAML directive"),1!==i.length&&yt(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&yt(e,"ill-formed argument of the YAML directive"),s=parseInt(n[1],10),r=parseInt(n[2],10),1!==s&&yt(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=r<2,1!==r&&2!==r&&wt(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var n,s;2!==i.length&&yt(e,"TAG directive accepts exactly two arguments"),n=i[0],s=i[1],it.test(n)||yt(e,"ill-formed tag handle (first argument) of the TAG directive"),Je.call(e.tagMap,n)&&yt(e,'there is a previously declared suffix for "'+n+'" tag handle'),nt.test(s)||yt(e,"ill-formed tag prefix (second argument) of the TAG directive");try{s=decodeURIComponent(s)}catch(t){yt(e,"tag prefix is malformed: "+s)}e.tagMap[n]=s}};function kt(e,t,i,n){var s,r,o,a;if(t<i){if(a=e.input.slice(t,i),n)for(s=0,r=a.length;s<r;s+=1)9===(o=a.charCodeAt(s))||32<=o&&o<=1114111||yt(e,"expected valid JSON character");else Qe.test(a)&&yt(e,"the stream contains non-printable characters");e.result+=a}}function St(e,t,i,n){var s,r,o,a;for(de.isObject(i)||yt(e,"cannot merge mappings; the provided source object is unacceptable"),o=0,a=(s=Object.keys(i)).length;o<a;o+=1)r=s[o],Je.call(t,r)||(mt(t,r,i[r]),n[r]=!0)}function $t(e,t,i,n,s,r,o,a,l){var c,d;if(Array.isArray(s))for(c=0,d=(s=Array.prototype.slice.call(s)).length;c<d;c+=1)Array.isArray(s[c])&&yt(e,"nested arrays are not supported inside keys"),"object"==typeof s&&"[object Object]"===st(s[c])&&(s[c]="[object Object]");if("object"==typeof s&&"[object Object]"===st(s)&&(s="[object Object]"),s=String(s),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(r))for(c=0,d=r.length;c<d;c+=1)St(e,t,r[c],i);else St(e,t,r,i);else e.json||Je.call(i,s)||!Je.call(t,s)||(e.line=o||e.line,e.lineStart=a||e.lineStart,e.position=l||e.position,yt(e,"duplicated mapping key")),mt(t,s,r),delete i[s];return t}function Ct(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):yt(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function At(e,t,i){for(var n=0,s=e.input.charCodeAt(e.position);0!==s;){for(;ot(s);)9===s&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),s=e.input.charCodeAt(++e.position);if(t&&35===s)do{s=e.input.charCodeAt(++e.position)}while(10!==s&&13!==s&&0!==s);if(!rt(s))break;for(Ct(e),s=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position)}return-1!==i&&0!==n&&e.lineIndent<i&&wt(e,"deficient indentation"),n}function Lt(e){var t,i=e.position;return!(45!==(t=e.input.charCodeAt(i))&&46!==t||t!==e.input.charCodeAt(i+1)||t!==e.input.charCodeAt(i+2)||(i+=3,0!==(t=e.input.charCodeAt(i))&&!at(t)))}function Mt(e,t){1===t?e.result+=" ":t>1&&(e.result+=de.repeat("\n",t-1))}function Pt(e,t){var i,n,s=e.tag,r=e.anchor,o=[],a=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,yt(e,"tab characters must not be used in indentation")),45===n)&&at(e.input.charCodeAt(e.position+1));)if(a=!0,e.position++,At(e,!0,-1)&&e.lineIndent<=t)o.push(null),n=e.input.charCodeAt(e.position);else if(i=e.line,Et(e,t,3,!1,!0),o.push(e.result),At(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==n)yt(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!a&&(e.tag=s,e.anchor=r,e.kind="sequence",e.result=o,!0)}function Tt(e){var t,i,n,s,r=!1,o=!1;if(33!==(s=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&yt(e,"duplication of a tag property"),60===(s=e.input.charCodeAt(++e.position))?(r=!0,s=e.input.charCodeAt(++e.position)):33===s?(o=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",t=e.position,r){do{s=e.input.charCodeAt(++e.position)}while(0!==s&&62!==s);e.position<e.length?(n=e.input.slice(t,e.position),s=e.input.charCodeAt(++e.position)):yt(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==s&&!at(s);)33===s&&(o?yt(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),it.test(i)||yt(e,"named tag handle cannot contain such characters"),o=!0,t=e.position+1)),s=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),tt.test(n)&&yt(e,"tag suffix cannot contain flow indicator characters")}n&&!nt.test(n)&&yt(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){yt(e,"tag name is malformed: "+n)}return r?e.tag=n:Je.call(e.tagMap,i)?e.tag=e.tagMap[i]+n:"!"===i?e.tag="!"+n:"!!"===i?e.tag="tag:yaml.org,2002:"+n:yt(e,'undeclared tag handle "'+i+'"'),!0}function zt(e){var t,i;if(38!==(i=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&yt(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!at(i)&&!lt(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&yt(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Et(e,t,i,n,s){var r,o,a,l,c,d,h,p,u,m=1,g=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,r=o=a=4===i||3===i,n&&At(e,!0,-1)&&(g=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;Tt(e)||zt(e);)At(e,!0,-1)?(g=!0,a=r,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):a=!1;if(a&&(a=g||s),1!==m&&4!==i||(p=1===i||2===i?t:t+1,u=e.position-e.lineStart,1===m?a&&(Pt(e,u)||function(e,t,i){var n,s,r,o,a,l,c,d=e.tag,h=e.anchor,p={},u=Object.create(null),m=null,g=null,f=null,v=!1,_=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),c=e.input.charCodeAt(e.position);0!==c;){if(v||-1===e.firstTabInLine||(e.position=e.firstTabInLine,yt(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),r=e.line,63!==c&&58!==c||!at(n)){if(o=e.line,a=e.lineStart,l=e.position,!Et(e,i,2,!1,!0))break;if(e.line===r){for(c=e.input.charCodeAt(e.position);ot(c);)c=e.input.charCodeAt(++e.position);if(58===c)at(c=e.input.charCodeAt(++e.position))||yt(e,"a whitespace character is expected after the key-value separator within a block mapping"),v&&($t(e,p,u,m,g,null,o,a,l),m=g=f=null),_=!0,v=!1,s=!1,m=e.tag,g=e.result;else{if(!_)return e.tag=d,e.anchor=h,!0;yt(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=d,e.anchor=h,!0;yt(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(v&&($t(e,p,u,m,g,null,o,a,l),m=g=f=null),_=!0,v=!0,s=!0):v?(v=!1,s=!0):yt(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n;if((e.line===r||e.lineIndent>t)&&(v&&(o=e.line,a=e.lineStart,l=e.position),Et(e,t,4,!0,s)&&(v?g=e.result:f=e.result),v||($t(e,p,u,m,g,f,o,a,l),m=g=f=null),At(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===r||e.lineIndent>t)&&0!==c)yt(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return v&&$t(e,p,u,m,g,null,o,a,l),_&&(e.tag=d,e.anchor=h,e.kind="mapping",e.result=p),_}(e,u,p))||function(e,t){var i,n,s,r,o,a,l,c,d,h,p,u,m=!0,g=e.tag,f=e.anchor,v=Object.create(null);if(91===(u=e.input.charCodeAt(e.position)))o=93,c=!1,r=[];else{if(123!==u)return!1;o=125,c=!0,r={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=r),u=e.input.charCodeAt(++e.position);0!==u;){if(At(e,!0,t),(u=e.input.charCodeAt(e.position))===o)return e.position++,e.tag=g,e.anchor=f,e.kind=c?"mapping":"sequence",e.result=r,!0;m?44===u&&yt(e,"expected the node content, but found ','"):yt(e,"missed comma between flow collection entries"),p=null,a=l=!1,63===u&&at(e.input.charCodeAt(e.position+1))&&(a=l=!0,e.position++,At(e,!0,t)),i=e.line,n=e.lineStart,s=e.position,Et(e,t,1,!1,!0),h=e.tag,d=e.result,At(e,!0,t),u=e.input.charCodeAt(e.position),!l&&e.line!==i||58!==u||(a=!0,u=e.input.charCodeAt(++e.position),At(e,!0,t),Et(e,t,1,!1,!0),p=e.result),c?$t(e,r,v,h,d,p,i,n,s):a?r.push($t(e,null,v,h,d,p,i,n,s)):r.push(d),At(e,!0,t),44===(u=e.input.charCodeAt(e.position))?(m=!0,u=e.input.charCodeAt(++e.position)):m=!1}yt(e,"unexpected end of the stream within a flow collection")}(e,p)?f=!0:(o&&function(e,t){var i,n,s,r,o=1,a=!1,l=!1,c=t,d=0,h=!1;if(124===(r=e.input.charCodeAt(e.position)))n=!1;else{if(62!==r)return!1;n=!0}for(e.kind="scalar",e.result="";0!==r;)if(43===(r=e.input.charCodeAt(++e.position))||45===r)1===o?o=43===r?3:2:yt(e,"repeat of a chomping mode identifier");else{if(!((s=ht(r))>=0))break;0===s?yt(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?yt(e,"repeat of an indentation width identifier"):(c=t+s-1,l=!0)}if(ot(r)){do{r=e.input.charCodeAt(++e.position)}while(ot(r));if(35===r)do{r=e.input.charCodeAt(++e.position)}while(!rt(r)&&0!==r)}for(;0!==r;){for(Ct(e),e.lineIndent=0,r=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),rt(r))d++;else{if(e.lineIndent<c){3===o?e.result+=de.repeat("\n",a?1+d:d):1===o&&a&&(e.result+="\n");break}for(n?ot(r)?(h=!0,e.result+=de.repeat("\n",a?1+d:d)):h?(h=!1,e.result+=de.repeat("\n",d+1)):0===d?a&&(e.result+=" "):e.result+=de.repeat("\n",d):e.result+=de.repeat("\n",a?1+d:d),a=!0,l=!0,d=0,i=e.position;!rt(r)&&0!==r;)r=e.input.charCodeAt(++e.position);kt(e,i,e.position,!1)}}return!0}(e,p)||function(e,t){var i,n,s;if(39!==(i=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=s=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(kt(e,n,e.position,!0),39!==(i=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,s=e.position}else rt(i)?(kt(e,n,s,!0),Mt(e,At(e,!1,t)),n=s=e.position):e.position===e.lineStart&&Lt(e)?yt(e,"unexpected end of the document within a single quoted scalar"):(e.position++,s=e.position);yt(e,"unexpected end of the stream within a single quoted scalar")}(e,p)||function(e,t){var i,n,s,r,o,a;if(34!==(a=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=n=e.position;0!==(a=e.input.charCodeAt(e.position));){if(34===a)return kt(e,i,e.position,!0),e.position++,!0;if(92===a){if(kt(e,i,e.position,!0),rt(a=e.input.charCodeAt(++e.position)))At(e,!1,t);else if(a<256&&gt[a])e.result+=ft[a],e.position++;else if((o=dt(a))>0){for(s=o,r=0;s>0;s--)(o=ct(a=e.input.charCodeAt(++e.position)))>=0?r=(r<<4)+o:yt(e,"expected hexadecimal character");e.result+=ut(r),e.position++}else yt(e,"unknown escape sequence");i=n=e.position}else rt(a)?(kt(e,i,n,!0),Mt(e,At(e,!1,t)),i=n=e.position):e.position===e.lineStart&&Lt(e)?yt(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}yt(e,"unexpected end of the stream within a double quoted scalar")}(e,p)?f=!0:!function(e){var t,i,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!at(n)&&!lt(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&yt(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),Je.call(e.anchorMap,i)||yt(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],At(e,!0,-1),!0}(e)?function(e,t,i){var n,s,r,o,a,l,c,d,h=e.kind,p=e.result;if(at(d=e.input.charCodeAt(e.position))||lt(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(at(n=e.input.charCodeAt(e.position+1))||i&&lt(n)))return!1;for(e.kind="scalar",e.result="",s=r=e.position,o=!1;0!==d;){if(58===d){if(at(n=e.input.charCodeAt(e.position+1))||i&&lt(n))break}else if(35===d){if(at(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Lt(e)||i&&lt(d))break;if(rt(d)){if(a=e.line,l=e.lineStart,c=e.lineIndent,At(e,!1,-1),e.lineIndent>=t){o=!0,d=e.input.charCodeAt(e.position);continue}e.position=r,e.line=a,e.lineStart=l,e.lineIndent=c;break}}o&&(kt(e,s,r,!1),Mt(e,e.line-a),s=r=e.position,o=!1),ot(d)||(r=e.position+1),d=e.input.charCodeAt(++e.position)}return kt(e,s,r,!1),!!e.result||(e.kind=h,e.result=p,!1)}(e,p,1===i)&&(f=!0,null===e.tag&&(e.tag="?")):(f=!0,null===e.tag&&null===e.anchor||yt(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(f=a&&Pt(e,u))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&yt(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((h=e.implicitTypes[l]).resolve(e.result)){e.result=h.construct(e.result),e.tag=h.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(Je.call(e.typeMap[e.kind||"fallback"],e.tag))h=e.typeMap[e.kind||"fallback"][e.tag];else for(h=null,l=0,c=(d=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,d[l].tag.length)===d[l].tag){h=d[l];break}h||yt(e,"unknown tag !<"+e.tag+">"),null!==e.result&&h.kind!==e.kind&&yt(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+h.kind+'", not "'+e.kind+'"'),h.resolve(e.result,e.tag)?(e.result=h.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):yt(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function It(e){var t,i,n,s,r=e.position,o=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(s=e.input.charCodeAt(e.position))&&(At(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==s));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;0!==s&&!at(s);)s=e.input.charCodeAt(++e.position);for(n=[],(i=e.input.slice(t,e.position)).length<1&&yt(e,"directive name must not be less than one character in length");0!==s;){for(;ot(s);)s=e.input.charCodeAt(++e.position);if(35===s){do{s=e.input.charCodeAt(++e.position)}while(0!==s&&!rt(s));break}if(rt(s))break;for(t=e.position;0!==s&&!at(s);)s=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==s&&Ct(e),Je.call(xt,i)?xt[i](e,i,n):wt(e,'unknown document directive "'+i+'"')}At(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,At(e,!0,-1)):o&&yt(e,"directives end mark is expected"),Et(e,e.lineIndent-1,4,!1,!0),At(e,!0,-1),e.checkLineBreaks&&et.test(e.input.slice(r,e.position))&&wt(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Lt(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,At(e,!0,-1)):e.position<e.length-1&&yt(e,"end of the stream or a document separator is expected")}function Ft(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var i=new _t(e,t),n=e.indexOf("\0");for(-1!==n&&(i.position=n,yt(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)It(i);return i.documents}var Ht={loadAll:function(e,t,i){null!==t&&"object"==typeof t&&void 0===i&&(i=t,t=null);var n=Ft(e,i);if("function"!=typeof t)return n;for(var s=0,r=n.length;s<r;s+=1)t(n[s])},load:function(e,t){var i=Ft(e,t);if(0!==i.length){if(1===i.length)return i[0];throw new ue("expected a single document in the stream, but found more")}}},Dt=Object.prototype.toString,Rt=Object.prototype.hasOwnProperty,jt=65279,Ot={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Vt=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],qt=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Nt(e){var t,i,n;if(t=e.toString(16).toUpperCase(),e<=255)i="x",n=2;else if(e<=65535)i="u",n=4;else{if(!(e<=4294967295))throw new ue("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+de.repeat("0",n-t.length)+t}function Bt(e){this.schema=e.schema||Xe,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=de.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,n,s,r,o,a,l;if(null===t)return{};for(i={},s=0,r=(n=Object.keys(t)).length;s<r;s+=1)o=n[s],a=String(t[o]),"!!"===o.slice(0,2)&&(o="tag:yaml.org,2002:"+o.slice(2)),(l=e.compiledTypeMap.fallback[o])&&Rt.call(l.styleAliases,a)&&(a=l.styleAliases[a]),i[o]=a;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Yt(e,t){for(var i,n=de.repeat(" ",t),s=0,r=-1,o="",a=e.length;s<a;)-1===(r=e.indexOf("\n",s))?(i=e.slice(s),s=a):(i=e.slice(s,r+1),s=r+1),i.length&&"\n"!==i&&(o+=n),o+=i;return o}function Ut(e,t){return"\n"+de.repeat(" ",e.indent*t)}function Wt(e){return 32===e||9===e}function Kt(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==jt||65536<=e&&e<=1114111}function Zt(e){return Kt(e)&&e!==jt&&13!==e&&10!==e}function Gt(e,t,i){var n=Zt(e),s=n&&!Wt(e);return(i?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!s)||Zt(t)&&!Wt(t)&&35===e||58===t&&s}function Xt(e,t){var i,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function Jt(e){return/^\n* /.test(e)}function Qt(e,t,i,n,s,r,o,a){var l,c=0,d=null,h=!1,p=!1,u=-1!==n,m=-1,g=function(e){return Kt(e)&&e!==jt&&!Wt(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(Xt(e,0))&&function(e){return!Wt(e)&&58!==e}(Xt(e,e.length-1));if(t||o)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!Kt(c=Xt(e,l)))return 5;g=g&&Gt(c,d,a),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(10===(c=Xt(e,l)))h=!0,u&&(p=p||l-m-1>n&&" "!==e[m+1],m=l);else if(!Kt(c))return 5;g=g&&Gt(c,d,a),d=c}p=p||u&&l-m-1>n&&" "!==e[m+1]}return h||p?i>9&&Jt(e)?5:o?2===r?5:2:p?4:3:!g||o||s(e)?2===r?5:2:1}function ei(e,t,i,n,s){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Vt.indexOf(t)||qt.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var r=e.indent*Math.max(1,i),o=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-r),a=n||e.flowLevel>-1&&i>=e.flowLevel;switch(Qt(t,a,e.indent,o,function(t){return function(e,t){var i,n;for(i=0,n=e.implicitTypes.length;i<n;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!n,s)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+ti(t,e.indent)+ii(Yt(t,r));case 4:return">"+ti(t,e.indent)+ii(Yt(function(e,t){var i,n,s=/(\n+)([^\n]*)/g,r=(a=e.indexOf("\n"),a=-1!==a?a:e.length,s.lastIndex=a,ni(e.slice(0,a),t)),o="\n"===e[0]||" "===e[0];var a;for(;n=s.exec(e);){var l=n[1],c=n[2];i=" "===c[0],r+=l+(o||i||""===c?"":"\n")+ni(c,t),o=i}return r}(t,o),r));case 5:return'"'+function(e){for(var t,i="",n=0,s=0;s<e.length;n>=65536?s+=2:s++)n=Xt(e,s),!(t=Ot[n])&&Kt(n)?(i+=e[s],n>=65536&&(i+=e[s+1])):i+=t||Nt(n);return i}(t)+'"';default:throw new ue("impossible error: invalid scalar style")}}()}function ti(e,t){var i=Jt(e)?String(t):"",n="\n"===e[e.length-1];return i+(n&&("\n"===e[e.length-2]||"\n"===e)?"+":n?"":"-")+"\n"}function ii(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function ni(e,t){if(""===e||" "===e[0])return e;for(var i,n,s=/ [^ ]/g,r=0,o=0,a=0,l="";i=s.exec(e);)(a=i.index)-r>t&&(n=o>r?o:a,l+="\n"+e.slice(r,n),r=n+1),o=a;return l+="\n",e.length-r>t&&o>r?l+=e.slice(r,o)+"\n"+e.slice(o+1):l+=e.slice(r),l.slice(1)}function si(e,t,i,n){var s,r,o,a="",l=e.tag;for(s=0,r=i.length;s<r;s+=1)o=i[s],e.replacer&&(o=e.replacer.call(i,String(s),o)),(oi(e,t+1,o,!0,!0,!1,!0)||void 0===o&&oi(e,t+1,null,!0,!0,!1,!0))&&(n&&""===a||(a+=Ut(e,t)),e.dump&&10===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump);e.tag=l,e.dump=a||"[]"}function ri(e,t,i){var n,s,r,o,a,l;for(r=0,o=(s=i?e.explicitTypes:e.implicitTypes).length;r<o;r+=1)if(((a=s[r]).instanceOf||a.predicate)&&(!a.instanceOf||"object"==typeof t&&t instanceof a.instanceOf)&&(!a.predicate||a.predicate(t))){if(i?a.multi&&a.representName?e.tag=a.representName(t):e.tag=a.tag:e.tag="?",a.represent){if(l=e.styleMap[a.tag]||a.defaultStyle,"[object Function]"===Dt.call(a.represent))n=a.represent(t,l);else{if(!Rt.call(a.represent,l))throw new ue("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');n=a.represent[l](t,l)}e.dump=n}return!0}return!1}function oi(e,t,i,n,s,r,o){e.tag=null,e.dump=i,ri(e,i,!1)||ri(e,i,!0);var a,l=Dt.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var d,h,p="[object Object]"===l||"[object Array]"===l;if(p&&(h=-1!==(d=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||h||2!==e.indent&&t>0)&&(s=!1),h&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(p&&h&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(!function(e,t,i,n){var s,r,o,a,l,c,d="",h=e.tag,p=Object.keys(i);if(!0===e.sortKeys)p.sort();else if("function"==typeof e.sortKeys)p.sort(e.sortKeys);else if(e.sortKeys)throw new ue("sortKeys must be a boolean or a function");for(s=0,r=p.length;s<r;s+=1)c="",n&&""===d||(c+=Ut(e,t)),a=i[o=p[s]],e.replacer&&(a=e.replacer.call(i,o,a)),oi(e,t+1,o,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=Ut(e,t)),oi(e,t+1,a,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=e.dump));e.tag=h,e.dump=d||"{}"}(e,t,e.dump,s),h&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var n,s,r,o,a,l="",c=e.tag,d=Object.keys(i);for(n=0,s=d.length;n<s;n+=1)a="",""!==l&&(a+=", "),e.condenseFlow&&(a+='"'),o=i[r=d[n]],e.replacer&&(o=e.replacer.call(i,r,o)),oi(e,t,r,!1,!1)&&(e.dump.length>1024&&(a+="? "),a+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),oi(e,t,o,!1,!1)&&(l+=a+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),h&&(e.dump="&ref_"+d+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!o&&t>0?si(e,t-1,e.dump,s):si(e,t,e.dump,s),h&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var n,s,r,o="",a=e.tag;for(n=0,s=i.length;n<s;n+=1)r=i[n],e.replacer&&(r=e.replacer.call(i,String(n),r)),(oi(e,t,r,!1,!1)||void 0===r&&oi(e,t,null,!1,!1))&&(""!==o&&(o+=","+(e.condenseFlow?"":" ")),o+=e.dump);e.tag=a,e.dump="["+o+"]"}(e,t,e.dump),h&&(e.dump="&ref_"+d+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new ue("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&ei(e,e.dump,t,r,c)}null!==e.tag&&"?"!==e.tag&&(a=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),a="!"===e.tag[0]?"!"+a:"tag:yaml.org,2002:"===a.slice(0,18)?"!!"+a.slice(18):"!<"+a+">",e.dump=a+" "+e.dump)}return!0}function ai(e,t){var i,n,s=[],r=[];for(li(e,s,r),i=0,n=r.length;i<n;i+=1)t.duplicates.push(s[r[i]]);t.usedDuplicates=new Array(n)}function li(e,t,i){var n,s,r;if(null!==e&&"object"==typeof e)if(-1!==(s=t.indexOf(e)))-1===i.indexOf(s)&&i.push(s);else if(t.push(e),Array.isArray(e))for(s=0,r=e.length;s<r;s+=1)li(e[s],t,i);else for(s=0,r=(n=Object.keys(e)).length;s<r;s+=1)li(e[n[s]],t,i)}function ci(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var di={Type:be,Schema:xe,FAILSAFE_SCHEMA:Ce,JSON_SCHEMA:He,CORE_SCHEMA:De,DEFAULT_SCHEMA:Xe,load:Ht.load,loadAll:Ht.loadAll,dump:{dump:function(e,t){var i=new Bt(t=t||{});i.noRefs||ai(e,i);var n=e;return i.replacer&&(n=i.replacer.call({"":n},"",n)),oi(i,0,n,!0,!0)?i.dump+"\n":""}}.dump,YAMLException:ue,types:{binary:Ne,float:Fe,map:$e,null:Ae,pairs:Ke,set:Ge,timestamp:Oe,bool:Le,int:ze,merge:Ve,omap:Ue,seq:Se,str:ke},safeLoad:ci("safeLoad","load"),safeLoadAll:ci("safeLoadAll","loadAll"),safeDump:ci("safeDump","dump")};const hi=["up","down","left","right"],pi="fileList",ui=100,mi="undefined"!=typeof navigator&&Number.isFinite(navigator.hardwareConcurrency)?navigator.hardwareConcurrency:4,gi=Math.min(16,Math.max(4,mi)),fi=["bicycle","bird","bus","car","cat","dog","motorcycle","person","truck","visitor"],vi=!0,_i=!1,bi=30,yi="/config/www/",wi=(()=>{const e=(yi.startsWith("/")?yi:"/"+yi).replace(/\/{2,}/g,"/");return e.endsWith("/")?e:e+"/"})(),xi=!0,ki=50,Si=[],$i="0px",Ci="0px",Ai=[{id:"card",label:"Card",icon:"mdi:card-outline",controls:[{type:"color",hostId:"bgcolor-host",variable:"--cgc-card-bg",label:"Background"},{type:"color",hostId:"bordercolor-host",variable:"--cgc-card-border-color",label:"Border color"},{type:"radius",variable:"--cgc-card-radius",label:"Border radius",min:0,max:32,default:10},{type:"slider",id:"cardheight",valId:"cardheightval",configKey:"card_height",label:"Height",min:0,max:1200,default:0,unit:"px"}]},{id:"preview",label:"Pills",icon:"mdi:image-outline",controls:[{type:"color",hostId:"tsbar-txt-host",variable:"--cgc-tsbar-txt",label:"Text / icon color"},{type:"color",hostId:"pill-bg-host",variable:"--cgc-pill-bg",label:"Background"},{type:"radius",variable:"--cgc-pill-size",label:"Size",min:10,max:28,default:14},{type:"slider",id:"barop",valId:"barval",configKey:"bar_opacity",label:"Opacity",min:0,max:ui,default:bi,unit:"%"}]},{id:"thumbs",label:"Thumbnails",icon:"mdi:view-grid-outline",controls:[{type:"color",hostId:"tbarbg-host",variable:"--cgc-tbar-bg",label:"Bar background"},{type:"color",hostId:"tbar-txt-host",variable:"--cgc-tbar-txt",label:"Bar text color"},{type:"radius",variable:"--cgc-thumb-radius",label:"Border radius",min:0,max:20,default:10},{type:"slider",id:"thumboffop",valId:"thumboffopval",configKey:"thumb_off_opacity",label:"Unselected opacity",min:0,max:ui,default:30,unit:"%"}]},{id:"filters",label:"Filter buttons",icon:"mdi:filter-outline",controls:[{type:"color",hostId:"filterbg-host",variable:"--cgc-obj-btn-bg",label:"Background"},{type:"color",hostId:"iconcolor-host",variable:"--cgc-obj-icon-color",label:"Icon color"},{type:"color",hostId:"btnactive-host",variable:"--cgc-obj-btn-active-bg",label:"Active background"},{type:"color",hostId:"iconactive-host",variable:"--cgc-obj-icon-active-color",label:"Active icon color"},{type:"radius",variable:"--cgc-obj-btn-radius",label:"Border radius",min:0,max:14,default:10}]},{id:"controls",label:"Today / Date / Live",icon:"mdi:calendar-outline",controls:[{type:"color",hostId:"ctrl-txt-host",variable:"--cgc-ctrl-txt",label:"Text color"},{type:"color",hostId:"ctrl-chevron-host",variable:"--cgc-ctrl-chevron",label:"Chevron color"},{type:"color",hostId:"live-active-host",variable:"--cgc-live-active-bg",label:"Live active color"},{type:"color",hostId:"delete-bg-host",variable:"--cgc-delete-bg",label:"Delete button color"},{type:"radius",variable:"--cgc-ctrl-radius",label:"Border radius",min:0,max:16,default:10}]},{id:"talkback",label:"Two-way audio",icon:"mdi:microphone-outline",controls:[{type:"color",hostId:"talkback-bg-host",variable:"--cgc-talkback-bg",label:"Background"},{type:"slider",id:"talkbackop",valId:"talkbackopval",configKey:"talkback_opacity",label:"Opacity",min:0,max:ui,default:bi,unit:"%"}]},{id:"live_navigation",label:"Live navigation",icon:"mdi:chevron-right",controls:[{type:"color",hostId:"chevron-bg-host",variable:"--cgc-chevron-bg",label:"Background"},{type:"slider",id:"chevronop",valId:"chevronopval",configKey:"chevron_opacity",label:"Opacity",min:0,max:ui,default:bi,unit:"%"}]},{id:"layout",label:"Layout",icon:"mdi:format-line-spacing",controls:[{type:"slider",id:"rowgap",valId:"rowgapval",configKey:"row_gap",label:"Row spacing",min:0,max:40,default:8,unit:"px"}]}];const Li=((e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new s(n,e,i)})`
  /*
      * ──────────────────────────────────────────────────────────────
      * Theme tokens
      * ──────────────────────────────────────────────────────────────
      */
  :host {
    display: block;
    ${r(function(){const e=[];for(const t of Ai)for(const i of t.controls)"radius"===i.type&&e.push(`${i.variable}: ${i.default}px;`);return e.join("\n")}())}

    /* ── text ── */
        --cgc-txt:          var(--primary-text-color,   rgba(0,0,0,0.87));
    --cgc-txt2: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
    --cgc-txt-dis: var(--disabled-text-color, rgba(0, 0, 0, 0.38));

    /* ── surfaces ── */
    --cgc-card-bg: var(--card-background-color, #fff);
    --cgc-preview-bg: var(--card-background-color, #fff);

    /* ── controls / chrome ── */
    --cgc-ui-bg: var(--secondary-background-color, rgba(0, 0, 0, 0.08));
    --cgc-ui-stroke: var(--divider-color, rgba(0, 0, 0, 0.12));
    --cgc-divider: var(--divider-color, rgba(0, 0, 0, 0.1));
    --cgc-thumb-bg: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
    --cgc-tbar-bg: var(--secondary-background-color, rgba(0, 0, 0, 0.16));

    /* ── nav overlay buttons ── */
    --cgc-nav-bg: rgba(0, 0, 0, 0.18);
    --cgc-nav-border: rgba(0, 0, 0, 0.18);

    /* ── selection overlay ── */
    --cgc-sel-ov-a: rgba(0, 0, 0, 0.1);
    --cgc-sel-ov-b: rgba(0, 0, 0, 0.22);

    /* ── bulk bar ── */
    --cgc-bulk-bg: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
    --cgc-bulk-border: var(--divider-color, rgba(0, 0, 0, 0.1));

    --cgc-ts-r: 0;
    --cgc-ts-g: 0;
    --cgc-ts-b: 0;
    --cgc-tsbar-txt: #fff;
    --cgc-pill-bg: #000;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --cgc-nav-bg: rgba(0, 0, 0, 0.45);
      --cgc-nav-border: rgba(255, 255, 255, 0.18);
      --cgc-sel-ov-a: rgba(0, 0, 0, 0.18);
      --cgc-sel-ov-b: rgba(0, 0, 0, 0.32);
    }
  }

  :host-context(.dark-mode) {
    --cgc-nav-bg: rgba(0, 0, 0, 0.45);
    --cgc-nav-border: rgba(255, 255, 255, 0.18);
    --cgc-sel-ov-a: rgba(0, 0, 0, 0.18);
    --cgc-sel-ov-b: rgba(0, 0, 0, 0.32);
  }

  /* ──────────────────────────────────────────────────────────── */

  .root {
    display: block;
    background: transparent;
    border-radius: 0;
    min-height: 0;
    padding: 0;
    position: relative;
  }

  :host([data-live-fs]) {
    position: fixed !important;
    inset: 0 !important;
    z-index: 9999 !important;
    width: 100vw !important;
    height: 100vh !important;

    & .root {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #000;
    }
    & .panel {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      border-radius: 0 !important;
    }
    & .preview {
      flex: 1 !important;
      height: auto !important;
      min-height: 0;
      border-radius: 0 !important;
      overflow: hidden;
    }
    & :is(.divider, .objfilters, .tthumbs, .datepill, .seg) {
      display: none !important;
    }
  }

  .panel {
    background: var(--cgc-card-bg, var(--card-background-color, #fff));
    border: none;
    border-radius: var(--cgc-card-radius);
    box-sizing: border-box;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--cgc-row-gap, 8px);
  }
  .divider {
    display: none;
  }

  .preview {
    position: relative;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    background: var(--cgc-preview-bg);
    border-radius: var(--cgc-card-radius);
    overflow: hidden;
    transform: translateZ(0);
    width: 100%;
  }

  .pimg {
    display: block;
    height: 100%;
    object-fit: var(--cgc-object-fit, cover);
    width: 100%;
    pointer-events: none;
  }

  .img-fs-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 100dvh;
  }
  .img-fs-overlay img,
  .img-fs-overlay video {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .img-fs-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .live-stage {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .live-offline {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .live-offline-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) opacity(0.35);
  }
  .live-offline-badge {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 13px;
    font-weight: 600;
  }
  .live-offline-badge ha-icon {
    --ha-icon-size: 36px;
    --mdc-icon-size: 36px;
    width: 36px;
    height: 36px;
  }
  .live-offline-state {
    font-size: 11px;
    font-weight: 400;
    opacity: 0.6;
  }

  .live-card-host {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: inherit;
    overflow: hidden;

    & > * {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
    }
    & ha-card {
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      box-shadow: none !important;
      background: transparent !important;
      border-radius: 0 !important;
      overflow: hidden !important;
    }
    & video {
      width: 100% !important;
      height: 100% !important;
      object-fit: var(--cgc-object-fit, cover) !important;
    }
    /* Per-camera crop — when the live entry has a crop the host element
     * picks up a .has-crop class plus --crop-x/--crop-y/--crop-w/--crop-h
     * vars. HA's ha-camera-stream forces itself to width:100% via inline
     * style so we can't resize the wrapper; a CSS transform is the only
     * reliable lever. The container's aspect-ratio is set to the crop's
     * real shape in _getPreviewAspectRatio (driven by the persisted
     * source_ar), so the scale factors line up and the crop region fills
     * the container without distortion. */
    &.has-crop {
      overflow: hidden !important;
    }
    &.has-crop > * {
      transform: scale(calc(100 / var(--crop-w, 100)), calc(100 / var(--crop-h, 100)))
        translate(calc(var(--crop-x, 0%) * -1), calc(var(--crop-y, 0%) * -1)) !important;
      transform-origin: 0 0 !important;
    }
    /* Multi-camera grid layout (live_layout: grid). Disable pinch-zoom and
     * double-tap-zoom on the grid surface via touch-action. */
    &.live-grid-host {
      display: grid !important;
      grid-template-columns: repeat(var(--cgc-grid-cols, 2), 1fr);
      grid-template-rows: repeat(var(--cgc-grid-rows, 2), 1fr);
      gap: 4px;
      padding: 0;
      background: #000;
      touch-action: manipulation;
    }
  }

  .live-host-hidden {
    display: none !important;
  }

  /* Snapshot error toast — fades in at the top of the preview, auto-
   * hides after 4.5s. Success cases never render a toast: the browser
   * download is its own feedback. The tappable variant wraps the text
   * in an <a> for the "open in tab" fallback when the download was
   * refused by the browser. */
  .snapshot-toast {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    background: rgba(180, 40, 40, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 7px 14px;
    border-radius: 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    animation: snapshotToastIn 0.18s ease;
    max-width: 90%;
    text-align: center;
  }
  .snapshot-toast-link {
    color: inherit;
    text-decoration: underline;
    pointer-events: auto;
  }
  @keyframes snapshotToastIn {
    from {
      opacity: 0;
      transform: translate(-50%, -8px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  .live-grid-tile {
    position: relative;
    background: #000;
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    touch-action: manipulation;
  }

  .live-grid-tile > ha-camera-stream {
    width: 100% !important;
    height: 100% !important;
    display: block !important;
    object-fit: cover !important;
  }

  .live-grid-host.live-grid-no-labels .live-grid-label {
    display: none;
  }

  .live-grid-label {
    position: absolute;
    bottom: 6px;
    left: 6px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    line-height: 1.4;
    pointer-events: none;
    max-width: calc(100% - 12px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .segbtn.livebtn {
    width: 60px;
  }

  .segbtn.livebtn.on {
    background: var(--cgc-live-active-bg, var(--error-color, #c62828));
    color: var(--text-primary-color, #fff);
  }

  .preview-video-host {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .preview-video-host > video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: var(--cgc-object-fit, cover);
    pointer-events: auto;
  }

  @keyframes livePulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.55);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  .live-picker-backdrop {
    position: absolute;
    inset: 0;
    z-index: 23;
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  /* ─── Diagnostics modal ─── */
  .cgc-debug-backdrop {
    position: absolute;
    inset: 0;
    z-index: 30;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  .cgc-debug-modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(94%, 540px);
    max-height: min(88%, 680px);
    z-index: 31;
    background: var(--card-background-color, #16191e);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    box-shadow: 0 24px 56px rgba(0, 0, 0, 0.55);
    color: var(--primary-text-color, #e6edf3);
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    overflow: hidden;
  }
  .cgc-debug-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .cgc-debug-head-title {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  .cgc-debug-head-title ha-icon {
    --mdc-icon-size: 22px;
    color: #f0883e;
  }
  .cgc-debug-close {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    padding: 6px;
    border-radius: 8px;
    opacity: 0.7;
    display: inline-flex;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      opacity: 1;
    }
  }
  .cgc-debug-body {
    overflow-y: auto;
    padding: 8px 20px 16px;
  }
  .cgc-debug-section {
    margin-top: 18px;

    &:first-child {
      margin-top: 8px;
    }
  }
  .cgc-debug-section-head {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--primary-text-color);

    & ha-icon {
      --mdc-icon-size: 16px;
      opacity: 0.65;
    }
  }
  .cgc-debug-rows {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
  }
  .cgc-debug-row {
    display: grid;
    grid-template-columns: minmax(0, 0.55fr) minmax(0, 1fr);
    gap: 14px;
    padding: 9px 14px;
    font-size: 13px;
    line-height: 1.4;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    &:last-child {
      border-bottom: 0;
    }
  }
  .cgc-debug-key {
    opacity: 0.62;
    font-weight: 500;
    word-break: break-word;
  }
  .cgc-debug-val {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace;
    font-size: 12.5px;
    word-break: break-all;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cgc-debug-val-text {
    flex: 1;
    min-width: 0;
    word-break: break-all;
  }
  .cgc-debug-dot {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #768390;
  }
  .cgc-debug-foot {
    padding: 12px 20px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  .cgc-debug-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 11px 14px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition:
      background 120ms ease,
      border-color 120ms ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.16);
    }
    &.copied {
      background: rgba(45, 164, 78, 0.15);
      border-color: rgba(45, 164, 78, 0.45);
      color: #56d364;
    }
    & ha-icon {
      --mdc-icon-size: 16px;
    }
  }

  .live-picker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(78%, 360px);
    max-height: min(80%, 500px);
    overflow: hidden;
    border-radius: 18px;
    z-index: 24;
    background: var(--card-background-color, rgba(24, 24, 28, 0.94));
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.1));
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.34);
    color: var(--primary-text-color);
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: var(--cgc-pill-bg);
      opacity: calc(var(--cgc-bar-opacity, 30) / 100);
      backdrop-filter: blur(4px);
      z-index: 0;
      pointer-events: none;
      border-radius: inherit;
    }
    & .live-picker-head,
    & .live-picker-list {
      position: relative;
      z-index: 1;
    }
    & .live-picker-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 16px 18px;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
    }
    & .live-picker-title {
      font-size: 16px;
      font-weight: 900;
      color: var(--primary-text-color);
    }
    & .live-picker-close {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      border: 0;
      background: var(--cgc-ui-bg);
      color: var(--primary-text-color);
      display: grid;
      place-items: center;
      cursor: pointer;
      padding: 0;

      & ha-icon {
        --ha-icon-size: 18px;
        --mdc-icon-size: var(--ha-icon-size);
        width: var(--ha-icon-size);
        height: var(--ha-icon-size);
      }
    }
    & .live-picker-list {
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
    }
    & .live-picker-item {
      width: 100%;
      border: 0;
      background: transparent;
      color: var(--primary-text-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 16px 18px;
      cursor: pointer;
      text-align: left;
      border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.05));

      &:first-child {
        border-top: 0;
      }
      &:hover {
        background: var(--cgc-ui-bg);
      }
      &.on {
        background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.16);
      }
    }
    & .live-picker-item-left {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
      flex: 1 1 auto;

      & ha-icon {
        --ha-icon-size: 20px;
        --mdc-icon-size: var(--ha-icon-size);
        width: var(--ha-icon-size);
        height: var(--ha-icon-size);
        color: var(--primary-color, #4da3ff);
        flex: 0 0 auto;
      }
    }
    & .live-picker-item-name {
      display: flex;
      flex-direction: column;
      min-width: 0;

      & span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:first-child {
          font-size: 15px;
          font-weight: 800;
        }
      }
    }
    & .live-picker-item-entity {
      font-size: 11px;
      font-weight: 500;
      opacity: 0.55;
    }
    & .live-picker-check {
      --ha-icon-size: 22px;
      --mdc-icon-size: var(--ha-icon-size);
      width: var(--ha-icon-size);
      height: var(--ha-icon-size);
      color: var(--primary-color, #4da3ff);
      flex: 0 0 auto;
    }
  }

  .tthumbs-wrap {
    width: calc(100% + 8px);
    box-sizing: border-box;
    margin-top: 0;
    margin-left: -4px;
    margin-right: -4px;
    position: relative;

    &.horizontal {
      min-height: var(--cgc-thumb-row-h, 86px);
    }
    &.vertical {
      min-height: var(--cgc-thumbs-max-h, 320px);
    }
    &.empty.horizontal {
      height: var(--cgc-thumb-empty-h, 86px);
      min-height: var(--cgc-thumb-empty-h, 86px);
      max-height: var(--cgc-thumb-empty-h, 86px);
      display: flex;
      align-items: stretch;
      background: transparent;
    }
    &.empty.vertical {
      min-height: var(--cgc-thumbs-max-h, 320px);
      display: flex;
      align-items: stretch;
      background: transparent;
    }
  }

  .scroll-time-pill {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    color: #fff;
    padding: 5px 12px;
    border-radius: 14px;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.02em;
    pointer-events: none;
    z-index: 20;
    opacity: 0;
    transition:
      opacity 220ms ease-out,
      transform 220ms ease-out;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }
  .scroll-time-pill.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .scroll-time-pill {
      transition: opacity 0s;
      transform: translateX(-50%);
    }
  }

  .thumbs-empty-state {
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 16px;
    box-sizing: border-box;
    border-radius: 14px;
    background: transparent;
    color: var(--cgc-txt);
    font-size: 14px;
    font-weight: 700;
  }

  .preview-empty {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
    box-sizing: border-box;
    color: var(--cgc-txt);
    font-size: 15px;
    font-weight: 700;
    background: var(--cgc-preview-bg);
  }

  .objfilters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    gap: 6px;
    width: 100%;
  }

  .objbtn {
    width: 100%;
    height: 28px;
    border: 0;
    border-radius: var(--cgc-obj-btn-radius, 10px);
    padding: 0;
    background: var(--cgc-obj-btn-bg, var(--cgc-ui-bg));
    color: var(--cgc-obj-icon-color, var(--cgc-txt));
    display: grid;
    place-items: center;
    cursor: pointer;

    &.on {
      background: var(--cgc-obj-btn-active-bg, var(--primary-color, #2196f3));
      color: var(--cgc-obj-icon-active-color, var(--text-primary-color, #fff));
    }
    & ha-icon {
      --ha-icon-size: 22px;
      --mdc-icon-size: var(--ha-icon-size);
      width: var(--ha-icon-size);
      height: var(--ha-icon-size);
    }
  }

  .pnav {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    pointer-events: none;
    z-index: 3;
  }

  .pnavbtn {
    pointer-events: auto;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: none;
    background: transparent;
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
    color: #fff;
    display: grid;
    place-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
  }
  .pnavbtn::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--cgc-chevron-bg, var(--cgc-pill-bg));
    opacity: calc(var(--cgc-chevron-opacity, var(--cgc-bar-opacity, 30)) / 100);
    pointer-events: none;
  }

  .pnavbtn[disabled] {
    opacity: 0;
    cursor: default;
  }

  .pnavbtn ha-icon {
    --ha-icon-size: 26px;
    --mdc-icon-size: var(--ha-icon-size);
    width: var(--ha-icon-size);
    height: var(--ha-icon-size);
    position: relative;
    z-index: 1;
  }

  .tsbar {
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    padding: 0 10px 0 12px;
    background: rgba(
      var(--cgc-ts-r, 0),
      var(--cgc-ts-g, 0),
      var(--cgc-ts-b, 0),
      calc(var(--cgc-bar-opacity, 45) / 100)
    );
    color: var(--cgc-tsbar-txt, #fff);
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 2;
    backdrop-filter: blur(calc(8px * min(1, var(--cgc-bar-opacity, 45))));
    -webkit-backdrop-filter: blur(calc(8px * min(1, var(--cgc-bar-opacity, 45))));
  }

  .tsbar.top {
    top: 0;
  }

  .tsbar.bottom {
    bottom: 0;
  }

  .live-controls-bar {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
    z-index: 10;
  }
  .live-controls-bar.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .live-controls-bar:not(.visible) .live-pill-btn {
    pointer-events: none;
  }
  .live-controls-bar.bottom {
    top: auto;
    bottom: 8px;
  }
  .live-controls-bar.hidden {
    display: none;
  }
  .live-controls-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
  }
  .live-controls-main--fixed {
    justify-content: center;
  }
  .controls-bar-fixed {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 0;
    margin: 0;
    gap: 6px;
    position: relative;

    & :is(.live-controls-main--fixed, .live-pills-left, .live-pills-right) {
      display: contents;
    }
    & :is(.gallery-pill, .live-pill-btn) {
      flex: 1;
      height: calc(var(--cgc-pill-size, 14px) * 2);
      min-width: 0;
      background: var(--cgc-obj-btn-bg, var(--cgc-ui-bg));
      border-radius: var(--cgc-obj-btn-radius, 10px);
      color: var(--cgc-txt);
      padding: 0;
      font-size: var(--cgc-pill-size, 14px);
      font-weight: 600;
    }
    & .gallery-pill::before {
      display: none;
    }
    & .live-pill-btn.active {
      background: var(--primary-color, #2196f3);
      border-radius: var(--cgc-obj-btn-radius, 10px);
    }
    & .live-hamburger-wrap {
      flex: 1;
      display: flex;

      & > .gallery-pill {
        flex: 1;
        width: 100%;
      }
    }
  }
  .live-pills-left,
  .live-pills-right {
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
  }
  .live-hamburger-wrap {
    position: relative;
  }
  .live-menu-backdrop {
    position: absolute;
    inset: 0;
    z-index: 22;
  }
  .live-menu-panel {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.88);
    opacity: 0;
    z-index: 23;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-radius: 16px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 160px;
    animation: cgc-panel-in 0.2s ease-out forwards;
  }
  @keyframes cgc-panel-in {
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  .live-menu-panel-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 7px 8px;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.92);
    transition:
      background 0.15s ease,
      opacity 0.15s ease;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    text-align: left;
    opacity: 0.5;
  }
  .live-menu-panel-btn.active {
    opacity: 1;
  }
  .live-menu-panel-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    opacity: 1;
  }
  .panel-btn-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition:
      background 0.15s ease,
      color 0.15s ease;
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.7);
  }
  .live-menu-panel-btn.active .panel-btn-icon {
    background: var(--primary-color, #2196f3);
    color: #fff;
  }
  .live-menu-panel-lbl {
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.01em;
  }
  /* Custom video progress bar — bottom-anchored, scrub via pointer.
   * Track tint mirrors the pill glass look (::after holds the bg-var +
   * bar-opacity); ::before stays as the extended touch hit-area. The
   * white fill sits above both. */
  .vid-progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5px;
    background: transparent;
    cursor: pointer;
    z-index: 9;
    touch-action: none;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }
  .vid-progress.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .vid-progress::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
    bottom: -2px;
  }
  .vid-progress::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--cgc-pill-bg);
    opacity: calc(var(--cgc-bar-opacity, 30) / 100);
    pointer-events: none;
  }
  .vid-progress-fill {
    position: relative;
    z-index: 1;
    height: 100%;
    background: #fff;
    pointer-events: none;
  }

  /* Big centered play/pause button for the gallery video preview.
   * Glass look matches the pill row (--cgc-pill-bg + --cgc-bar-opacity
   * via ::before, same blur amount), just at a larger diameter. */
  .vid-bigplay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: none;
    background: transparent;
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    color: var(--cgc-tsbar-txt, #fff);
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 11;
    opacity: 0;
    transition:
      opacity 0.25s ease,
      transform 0.15s ease;
    pointer-events: none;
    -webkit-tap-highlight-color: transparent;
  }
  .vid-bigplay::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--cgc-pill-bg);
    opacity: calc(var(--cgc-bar-opacity, 30) / 100);
    pointer-events: none;
  }
  .vid-bigplay.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .vid-bigplay:active {
    transform: translate(-50%, -50%) scale(0.94);
  }
  .vid-bigplay ha-icon {
    position: relative;
    z-index: 1;
    --mdc-icon-size: 26px;
  }

  /* Bottom-right time read-out — same glass treatment as the pill row
   * for visual consistency. */
  .vid-time {
    position: absolute;
    right: 8px;
    bottom: 9px;
    z-index: 10;
    padding: 3px 7px;
    border-radius: 999px;
    background: transparent;
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    color: var(--cgc-tsbar-txt, #fff);
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .vid-time::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--cgc-pill-bg);
    opacity: calc(var(--cgc-bar-opacity, 30) / 100);
    pointer-events: none;
  }
  .vid-time span {
    position: relative;
    z-index: 1;
  }
  .vid-time.visible {
    opacity: 1;
  }

  .gallery-pills {
    position: absolute;
    left: 8px;
    right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
    z-index: 10;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
    &:not(.visible) .live-pill-btn {
      pointer-events: none;
    }
    &.top {
      top: 8px;
    }
    &.bottom {
      bottom: 8px;
    }
    &.align-left {
      justify-content: flex-start;
    }
    &.align-center {
      justify-content: center;
    }
    &.align-right {
      justify-content: flex-end;
    }
  }
  .gallery-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--cgc-pill-size, 14px) * 0.28);
    /* Fixed square footprint → perfectly circular regardless of icon vs
     * short-text content. Fixed-mode resizes them back to a stretched
     * row via the .controls-bar-fixed override below. */
    width: calc(var(--cgc-pill-size, 14px) * 2);
    height: calc(var(--cgc-pill-size, 14px) * 2);
    padding: 0;
    flex: 0 0 auto;
    box-sizing: border-box;
    color: var(--cgc-tsbar-txt, #fff);
    font-size: var(--cgc-pill-size, 14px);
    font-weight: 700;
    border-radius: 50%;
    line-height: 1;
    position: relative;
    white-space: nowrap;
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: var(--cgc-pill-bg);
      opacity: calc(var(--cgc-bar-opacity, 30) / 100);
      pointer-events: none;
    }
    & ha-icon,
    & span {
      position: relative;
      z-index: 1;
    }
    & span {
      display: flex;
      align-items: center;
      font-size: calc(var(--cgc-pill-size, 14px) - 2px);
      height: calc(var(--cgc-pill-size, 14px) + 2px);
      line-height: 1;
    }
    & ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 0;
      --ha-icon-size: calc(var(--cgc-pill-size, 14px) + 2px);
      --mdc-icon-size: calc(var(--cgc-pill-size, 14px) + 2px);
      width: calc(var(--cgc-pill-size, 14px) + 2px);
      height: calc(var(--cgc-pill-size, 14px) + 2px);
    }
  }
  .live-pill-btn {
    pointer-events: auto;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: calc(var(--cgc-pill-size, 14px) * 0.3);
    margin: 0;
  }

  .live-pill-btn.active {
    background: rgba(255, 80, 80, 0.85);
    border-radius: 50%;
  }

  /* Compact label inside a pill — used by the playback-speed pill
   * which shows "½×" / "1×" / "2×" instead of an icon. Tabular-nums
   * stops the width from wobbling between speeds. */
  .vid-speed-label {
    font-size: calc(var(--cgc-pill-size, 14px) * 0.85);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    line-height: 1;
    padding: 0;
  }

  /* Wide text pill — escape hatch from the round default. The camera
   * name in live view needs to grow with the label, so it falls back to
   * a capsule shape with horizontal padding. Applied alongside the
   * regular .gallery-pill base. */
  .gallery-pill--wide {
    width: auto;
    min-width: calc(var(--cgc-pill-size, 14px) * 2);
    padding: 0 calc(var(--cgc-pill-size, 14px) * 0.7);
    border-radius: 999px;
  }

  /* Info-only pills — visually identical to action pills but not
     clickable (object indicator, index counter, camera name). */
  .gallery-pill--info {
    cursor: default;
    pointer-events: none;
  }

  /* Mic error toast — sits inside live-controls-bar so layout doesn't
     shift; role=status + aria-live=polite announces via screen readers.
     Hidden via display:none while empty so it doesn't claim layout
     space above/below the pill row (only matters when bar_position
     pushes the pills away from the controls-bar's anchor edge). */
  .mic-error-toast:not(.visible) {
    display: none;
  }
  .mic-error-toast {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    margin-top: 4px;
    border-radius: 10px;
    font-size: 12px;
    line-height: 1.3;
    color: #fff;
    background: rgba(220, 38, 38, 0.92);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    pointer-events: auto;
    max-width: 320px;
    opacity: 0;
    transform: translateY(-4px);
    transition:
      opacity 160ms ease,
      transform 160ms ease;
  }
  .mic-error-toast.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .mic-error-toast:not(.visible) {
    visibility: hidden;
  }
  .mic-error-toast ha-icon {
    --mdc-icon-size: 16px;
    flex: 0 0 auto;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    padding: var(--cgc-topbar-padding, 0px);
    margin: var(--cgc-topbar-margin, 0px);
    overflow: hidden;
    min-width: 0;
  }

  .seg {
    display: inline-flex;
    align-items: center;
    height: 30px;
    background: var(--cgc-ui-bg);
    border-radius: var(--cgc-ctrl-radius, 10px);
    overflow: hidden;
    flex: 0 0 auto;
  }

  .segbtn {
    border: 0;
    height: 100%;
    padding: 0 12px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--cgc-ctrl-txt, var(--cgc-txt2));
    background: transparent;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &.on {
      background: var(--primary-color, #2196f3);
      color: var(--text-primary-color, #fff);
      border-radius: var(--cgc-ctrl-radius, 10px);
    }
  }

  .datepill {
    display: flex;
    align-items: center;
    height: 30px;
    background: var(--cgc-ui-bg);
    border-radius: var(--cgc-ctrl-radius, 10px);
    overflow: hidden;
    flex: 1 1 auto;
    min-width: 0;
  }

  .dp-month-header {
    padding: 8px 18px 4px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.45;
    color: var(--primary-text-color);
    border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
  }

  .dp-month-header:first-child {
    border-top: 0;
  }

  .dp-day-label {
    flex: 1 1 auto;
    text-align: left;
    font-size: 15px;
    font-weight: 600;
  }

  .iconbtn {
    width: 44px;
    height: 44px;
    border: 0;
    background: transparent;
    color: var(--cgc-ctrl-chevron, var(--cgc-txt));
    display: grid;
    place-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    flex: 0 0 auto;
  }

  .iconbtn[disabled] {
    color: var(--cgc-txt-dis);
    cursor: default;
  }

  .dateinfo {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    color: var(--cgc-ctrl-txt, var(--cgc-txt));
    font-size: 13px;
    font-weight: 800;
  }

  .datepick {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .dateinfo .txt {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .timeline {
    margin: 0;
    padding: 0;
    min-height: 0;
  }

  .tthumbs {
    min-width: 0;

    /* Hide the scrollbar on both orientations — gallery uses snap-points and
     * inertia instead of an explicit scrollbar. */
    &::-webkit-scrollbar {
      display: none;
    }
    &.horizontal {
      display: flex;
      align-items: center;
      gap: var(--cgc-thumb-gap, 12px);
      margin-top: 0;
      margin-bottom: 0;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 2px;
      overscroll-behavior-x: contain;
      overscroll-behavior-y: none;
      scrollbar-width: none;
    }
    &.vertical {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      align-items: start;
      gap: var(--cgc-thumb-gap, 12px);
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      max-height: var(--cgc-thumbs-max-h, 320px);
      overflow-y: auto;
      overflow-x: hidden;
      overscroll-behavior-y: contain;
      overscroll-behavior-x: none;
      padding-right: 2px;
      scrollbar-width: none;

      & .tthumb {
        width: 100%;
        height: auto;
        min-width: 0;
      }
      & :is(.timg, .tph) {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
      }
    }
  }

  .tthumb {
    border: 0;
    padding: 0;
    overflow: hidden;
    background: var(--cgc-thumb-bg);
    outline: none;
    cursor: pointer;
    position: relative;
    flex: 0 0 auto;
    scroll-snap-align: start;
    -webkit-touch-callout: none;
    user-select: none;
    opacity: calc(var(--cgc-thumb-off-opacity, 30) / 100);
    transform: scale(0.94);
    transition: none;

    &:focus {
      outline: none;
    }
    &.on {
      opacity: 1;
      transform: scale(1);
      z-index: 2;
    }
    &:active {
      transform: scale(0.97);
    }
    &.on:active {
      transform: scale(0.985);
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      box-sizing: border-box;
    }
    /* Touch swipe-to-delete — the red tint fades in with the swipe
       progress, and the thumb itself rides translateX with the finger. */
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: rgba(220, 38, 38, 0.78);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.18s ease;
      z-index: 2;
    }
    &.swiping {
      transform: translateX(var(--swipe-dx, 0px)) scale(0.94);
      transition: none;
    }
    &.on.swiping {
      transform: translateX(var(--swipe-dx, 0px)) scale(1);
    }
    &.swiping::before {
      opacity: var(--swipe-progress, 0);
    }
    &.swipe-off {
      transform: translateX(-110%) scale(0.94);
      opacity: 0;
      transition:
        transform 0.22s ease-out,
        opacity 0.22s ease-out;
    }
    &.on.swipe-off {
      transform: translateX(-110%) scale(1);
    }
  }

  .timg {
    width: 100%;
    height: 100%;
    object-fit: var(--cgc-object-fit, cover);
    display: block;
  }

  .tph {
    width: 100%;
    height: 100%;
    background: var(--cgc-thumb-bg);
    box-sizing: border-box;

    /* Shared structure for the four "non-image" states. */
    &:is(.broken, .spinner, .disabled, .reolink) {
      display: grid;
      place-items: center;
    }
    /* Broken: capture/fetch failed (.broken) or capture is disabled
     * (.disabled). The error icon styling is identical between them. */
    &.broken {
      background: var(--cgc-thumb-broken-bg, rgba(255, 90, 70, 0.08));
      color: var(--cgc-thumb-broken-color, rgba(255, 255, 255, 0.55));
    }
    &.disabled {
      color: var(--cgc-thumb-disabled-color, rgba(255, 255, 255, 0.32));
    }
    /* Reolink clip placeholder — the integration provides no server-side
     * thumbnail, so we display the brand mark instead of trying first-frame
     * capture (which would double the camera-proxy load per clip). */
    &.reolink .tph-reolink-mark {
      width: 38%;
      max-width: 72px;
      height: auto;
      display: block;
      opacity: 0.9;
    }
    &:is(.broken, .disabled) ha-icon {
      --mdc-icon-size: 28px;
      --ha-icon-size: 28px;
      width: 28px;
      height: 28px;
      opacity: 0.7;
    }
    /* Active loading state — a fetch or capture is in flight for this
     * item. Distinguishes "we're working on it" from the static skeleton
     * (which can also mean "off-screen idle"). */
    &.spinner::after {
      content: "";
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid var(--cgc-spinner-track, rgba(255, 255, 255, 0.15));
      border-top-color: var(--cgc-spinner-color, rgba(255, 255, 255, 0.7));
      animation: cgc-thumb-spin 0.8s linear infinite;
    }
  }

  /* Shared loading-shimmer used by thumbnail / preview / live skeletons.
   * A subtle highlight band sweeps across the surface so users see the
   * card is *doing something* on cold start, instead of staring at flat
   * placeholders. Disabled under prefers-reduced-motion. */
  @keyframes cgc-shimmer {
    0% {
      background-position: 200% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
  }
  @keyframes cgc-thumb-spin {
    to {
      transform: rotate(360deg);
    }
  }

  :is(.tph.skeleton, .preview-skeleton, .live-card-host:empty) {
    background-size: 200% 100%;
    animation: cgc-shimmer 1.4s ease-in-out infinite;
  }
  .tph.skeleton {
    background: linear-gradient(
      90deg,
      var(--cgc-thumb-bg) 0%,
      var(--cgc-skeleton-highlight, rgba(255, 255, 255, 0.06)) 50%,
      var(--cgc-thumb-bg) 100%
    );
  }
  .preview-skeleton {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      90deg,
      var(--cgc-preview-bg, #000) 0%,
      var(--cgc-skeleton-highlight, rgba(255, 255, 255, 0.05)) 50%,
      var(--cgc-preview-bg, #000) 100%
    );
    border-radius: inherit;
  }
  /* Live host shows the same shimmer while waiting for the inner card
   * to mount. _mountLiveCard clears innerHTML before appending, so the
   * :empty selector accurately tracks "live element hasn't mounted yet". */
  .live-card-host:empty {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.55) 0%,
      var(--cgc-skeleton-highlight, rgba(255, 255, 255, 0.05)) 50%,
      rgba(0, 0, 0, 0.55) 100%
    );
  }

  @media (prefers-reduced-motion: reduce) {
    :is(.tph.skeleton, .preview-skeleton, .live-card-host:empty, .tph.spinner::after) {
      animation: none;
    }
  }

  /* When the timestamp bar is actually shown, inset the broken-state's
       * centering area by the bar height so the icon sits visually centered
       * in the *visible* image region instead of the absolute thumb center. */
  .tthumb.bar-bottom.with-bar :is(.tph.broken, .tph.disabled, .tph.spinner) {
    padding-bottom: 26px;
  }
  .tthumb.bar-top.with-bar :is(.tph.broken, .tph.disabled, .tph.spinner) {
    padding-top: 26px;
  }

  .tph.broken ha-icon {
    --mdc-icon-size: 28px;
    --ha-icon-size: 28px;
    width: 28px;
    height: 28px;
    opacity: 0.7;
  }

  .tbar {
    position: absolute;
    left: 0;
    right: 0;
    height: 26px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--cgc-tbar-bg);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    font-size: 11px;
    font-weight: 800;
    color: var(--cgc-tbar-txt, var(--cgc-txt));
    pointer-events: none;
    z-index: 2;

    &.bottom {
      bottom: 0;
      border-radius: 0 0 var(--cgc-thumb-radius, 10px) var(--cgc-thumb-radius, 10px);
    }
    &.top {
      top: 0;
      border-radius: var(--cgc-thumb-radius, 10px) var(--cgc-thumb-radius, 10px) 0 0;
    }
    &.hidden {
      display: none;
    }
  }

  .tbar-left {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tbar-icon {
    --ha-icon-size: 16px;
    --mdc-icon-size: var(--ha-icon-size);
    width: var(--ha-icon-size);
    height: var(--ha-icon-size);
    flex: 0 0 auto;
  }

  .fav-btn {
    position: absolute;
    bottom: 4px;
    left: 4px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    --mdc-icon-size: 22px;
    --ha-icon-size: 22px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
    z-index: 3;
  }

  /* Bar at the bottom would overlay the default bottom-left favorite
         button (the bar has an opaque blur background). Move the button to
         the top-left corner in that case so it stays visible. */
  .tthumb.bar-bottom .fav-btn {
    top: 4px;
    bottom: auto;
  }

  .fav-btn.on {
    color: gold;
  }

  /* Cluster count badge — sits in the bottom-right of a Frigate-cluster
   * representative thumb. Tap toggles inline expansion of the mini-strip
   * of underlying member events. */
  .cluster-badge {
    position: absolute;
    bottom: 4px;
    right: 4px;
    background: var(--accent-color, #ff9f43);
    color: #1a1a1a;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 6px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 3;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
    transition: transform 0.12s ease;
  }
  .cluster-badge:hover {
    transform: scale(1.08);
  }
  .cluster-badge.open {
    background: #fff;
  }

  /* Expanded cluster members render at a smaller scale + an accent
   * frame so the rep on the left visually "owns" the set that follows.
   * Stays smaller in both selected and non-selected states. */
  .tthumb.cluster-member {
    transform: scale(0.9);
    box-shadow: 0 0 0 2px var(--accent-color, #ff9f43);
  }
  .tthumb.cluster-member.on {
    transform: scale(0.94);
  }
  .tthumb.cluster-member:active {
    transform: scale(0.88);
  }
  .tthumb.cluster-member.on:active {
    transform: scale(0.92);
  }

  .selOverlay {
    position: absolute;
    inset: 0;
    background: var(--cgc-sel-ov-a);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.12s ease;
    pointer-events: none;
  }

  .selOverlay.on {
    opacity: 1;
    background: rgba(244, 67, 54, 0.4);
  }

  .bulkbar {
    margin: 0;
    padding: 8px 10px;
    height: 28px;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    background: var(--cgc-bulk-bg);
    border: 1px solid var(--cgc-bulk-border);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    position: relative;
    z-index: 2;
  }

  .bulkbar-left {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 1 auto;
  }

  .bulkbar-text {
    font-size: 14px;
    font-weight: 700;
    color: var(--cgc-txt);
    white-space: nowrap;
  }

  .bulkactions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bulkaction {
    height: 34px;
    padding: 0 12px;
    border-radius: 12px;
    border: 1px solid var(--cgc-ui-stroke);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    background: var(--cgc-ui-bg);
    color: var(--cgc-txt);

    & ha-icon {
      --ha-icon-size: 16px;
      --mdc-icon-size: var(--ha-icon-size);
    }
    &[disabled] {
      opacity: 0.45;
      cursor: default;
    }
  }

  .bulkcancel {
    background: var(--cgc-ui-bg);
  }

  .bulkdelete {
    background: var(--cgc-delete-bg, var(--cgc-live-active-bg, var(--error-color, #c62828)));
    color: var(--text-primary-color, #fff);
    border: 1px solid var(--cgc-delete-bg, var(--cgc-live-active-bg, var(--error-color, #c62828)));
  }

  @media (max-width: 700px) {
    .bulkbar {
      padding: 10px 12px;
      border-radius: 20px;
      gap: 12px;
      min-height: 64px;
    }

    .bulkbar-text {
      font-size: 15px;
    }

    .bulkactions {
      gap: 10px;
    }

    .bulkaction {
      height: 48px;
      padding: 0 16px;
      border-radius: 16px;
      font-size: 15px;
      gap: 10px;
    }

    .bulkaction ha-icon {
      --ha-icon-size: 20px;
    }
  }

  .bulk-floating-hint {
    position: absolute;
    left: 50%;
    top: 58px;
    transform: translateX(-50%);
    padding: 10px 16px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.76);
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    white-space: nowrap;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 30;
    pointer-events: none;
    animation: bulkHintFade 5s ease forwards;
  }

  @keyframes bulkHintFade {
    0% {
      opacity: 0;
      transform: translate(-50%, -6px);
    }
    8% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -6px);
    }
  }

  .cgc-error-toast {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: flex-start;
    gap: 10px;
    max-width: min(420px, 92%);
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(180, 35, 35, 0.95);
    color: #fff;
    font-size: 13px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 60;
    cursor: pointer;
    animation: cgcErrorToastIn 0.22s ease-out;
  }
  .cgc-error-toast ha-icon {
    flex: 0 0 auto;
    --mdc-icon-size: 22px;
    color: #fff;
    margin-top: 1px;
  }
  .cgc-error-toast-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .cgc-error-toast-title {
    font-weight: 700;
    font-size: 13px;
  }
  .cgc-error-toast-msg {
    font-weight: 400;
    font-size: 12px;
    opacity: 0.92;
    line-height: 1.35;
  }
  @keyframes cgcErrorToastIn {
    from {
      opacity: 0;
      transform: translate(-50%, calc(-50% + 8px));
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .empty {
    padding: 12px;
    border-radius: 14px;
    background: var(--cgc-ui-bg);
    color: var(--cgc-txt);
  }

  .thumb-menu-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }

  .thumb-menu-sheet {
    position: fixed;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
    width: min(94vw, 420px);
    border-radius: 24px;
    overflow: hidden;
    z-index: 9999;
    background: var(--card-background-color, rgba(24, 24, 28, 0.96));
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.1));
    box-shadow: 0 22px 48px rgba(0, 0, 0, 0.34);
  }

  .thumb-menu-handle {
    width: 42px;
    height: 5px;
    border-radius: 999px;
    background: var(--cgc-ui-stroke);
    margin: 10px auto 6px;
  }

  .thumb-menu-head {
    padding: 8px 18px 12px;
    text-align: center;
  }

  .thumb-menu-subtitle {
    margin-top: 6px;
    font-size: 12px;
    font-weight: 700;
    color: var(--cgc-txt2);
  }

  .thumb-menu-list {
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
  }

  .thumb-menu-item {
    width: 100%;
    border: 0;
    background: transparent;
    color: var(--primary-text-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 14px;
    border-radius: 16px;
    cursor: pointer;
    text-align: left;

    &:hover {
      background: var(--cgc-ui-bg);
    }
    &.danger {
      color: var(--error-color, #ff8a80);
    }
  }

  .thumb-menu-item-left {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .thumb-menu-item-left ha-icon {
    --ha-icon-size: 20px;
    --mdc-icon-size: var(--ha-icon-size);
    width: var(--ha-icon-size);
    height: var(--ha-icon-size);
    flex: 0 0 auto;
  }

  .thumb-menu-item-left span {
    font-size: 15px;
    font-weight: 800;
  }

  .thumb-menu-item-arrow {
    --ha-icon-size: 18px;
    --mdc-icon-size: var(--ha-icon-size);
    width: var(--ha-icon-size);
    height: var(--ha-icon-size);
    color: var(--cgc-txt-dis);
    flex: 0 0 auto;
  }

  .thumb-menu-footer {
    padding: 0 12px 12px;
  }

  .thumb-menu-cancel {
    width: 100%;
    border: 0;
    border-radius: 16px;
    padding: 15px 16px;
    cursor: pointer;
    background: var(--cgc-ui-bg);
    color: var(--primary-text-color);
    font-size: 15px;
    font-weight: 900;
  }

  @media (max-width: 420px) {
    .topbar {
      gap: 6px;
    }

    .datepill.has-filters .dateinfo {
      font-size: 11px;
      padding: 0 10px;
    }

    .segbtn {
      padding: 9px 12px;
    }

    .iconbtn {
      width: 40px;
      height: 40px;
    }

    .dateinfo {
      padding: 9px 12px;
    }

    .objfilters {
      gap: 6px;
    }

    .objbtn {
      border-radius: 6px;
    }

    .objbtn ha-icon {
      --ha-icon-size: 20px;
    }

    .live-picker {
      width: min(92%, 440px);
      border-radius: 18px;
    }

    .live-picker-title {
      font-size: 15px;
    }

    .live-picker-item {
      padding: 14px 16px;
    }

    .bulk-floating-hint {
      top: 50%;
      max-width: calc(100% - 24px);
      font-size: 12px;
      padding: 9px 14px;
    }

    .thumb-menu-sheet {
      width: min(96vw, 420px);
      bottom: 10px;
      border-radius: 22px;
    }

    .tthumbs.vertical {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`,Mi="cgc-fill";function Pi(e){const t=e.shadowRoot;if(!t||t.querySelector(`#${Mi}`))return;const i=document.createElement("style");i.id=Mi,i.textContent="\n  :host { display:block!important; width:100%!important; height:100%!important; }\n  .image-container { width:100%!important; height:100%!important; }\n  .ratio { padding-bottom:0!important; padding-top:0!important; width:100%!important; height:100%!important; position:relative!important; }\n  img, video, ha-hls-player, ha-web-rtc-player, ha-camera-stream { width:100%!important; height:100%!important; object-fit:cover!important; display:block!important; position:static!important; }\n",t.appendChild(i);const n=t.querySelector(".ratio");n&&n.style.setProperty("padding-bottom","0","important")}function Ti(e){for(const t of e.querySelectorAll("*"))t.shadowRoot&&(Pi(t),Ti(t.shadowRoot))}function zi(e){Pi(e);const t=()=>{const t=e.shadowRoot;return!!t&&(Ti(t),!0)};if(!t()){const i=new MutationObserver(()=>{t()&&i.disconnect()});i.observe(e.shadowRoot??e,{childList:!0,subtree:!0}),setTimeout(()=>i.disconnect(),5e3)}setTimeout(()=>{e.shadowRoot&&Ti(e.shadowRoot)},2e3)}const Ei={YYYY:{field:"year",digits:4},YY:{field:"year2",digits:2},MM:{field:"month",digits:2},DD:{field:"day",digits:2},HH:{field:"hour",digits:2},mm:{field:"minute",digits:2},ss:{field:"second",digits:2},X:{field:"epochSec",digits:10},x:{field:"epochMs",digits:13}},Ii=/(YYYY|YY|MM|DD|HH|mm|ss|X|x)/g,Fi=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Hi(e,t,i){const n=Number(i);if(Number.isFinite(n))if("year"===t)void 0===e.year&&(e.year=n);else if("year2"===t)void 0===e.year&&(e.year=2e3+n);else if("epochSec"===t||"epochMs"===t){if(void 0!==e.year)return;const i="epochSec"===t?1e3*n:n;if(!Number.isFinite(i))return;const s=new Date(i);if(Number.isNaN(s.getTime()))return;e.year=s.getFullYear(),e.month=s.getMonth()+1,e.day=s.getDate(),e.hour=s.getHours(),e.minute=s.getMinutes(),e.second=s.getSeconds()}else void 0===e[t]&&(e[t]=n)}const Di=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Ri=/HH|mm|ss|X|x/,ji=/\.[a-z0-9]{2,5}$/i,Oi=new Set(["YYYY","YY","MM","DD","HH","mm","ss","X","x"]);function Vi(e){const t=e.match(ji);return!!t&&!Oi.has(t[0].slice(1))}function qi(e,t){if(0===e.length)return null;const i=function(e){const t=String(e??"").trim();if(!t)return null;const i=[];let n="",s=0;for(let e=Ii.exec(t);null!==e;e=Ii.exec(t)){const r=e[0],o=Ei[r];n+=Fi(t.slice(s,e.index))+`(\\d{${o.digits}})`,i.push(o.field),s=e.index+r.length}if(n+=Fi(t.slice(s)),!i.length)return null;try{return{regex:new RegExp(n),fields:i}}catch{return null}}(e);if(i)try{const n=t?`(?<!\\d)${i.regex.source}(?!\\d)`:`^${i.regex.source}$`;return{regex:new RegExp(n,i.regex.flags),fields:i.fields,raw:e}}catch{return null}try{return{regex:new RegExp(`^${Di(e)}$`),fields:[],raw:e}}catch{return null}}function Ni(e){const t=String(e??"").trim();if(!t)return null;const i=t.replace(/\\\//g,"\0").replace(/\/{2,}/g,"/").replace(/^\/+/,"").replace(/\/+$/,"");if(!i)return null;const n=i.split("/").map(e=>e.split("\0").join("/")),s=(n[n.length-1]??"").includes("/");if(0===n.length)return null;const r=n[n.length-1]??"",o=(a=r,Ri.test(a)||Vi(a));var a;const l=o&&Vi(r),c=[];for(let e=0;e<n.length;e++){const t=qi(n[e]??"",e===n.length-1&&o&&!l);if(!t)return null;c.push(t)}return{segments:c,directoryDepth:o?c.length-1:c.length,leafIsFile:o,leafHasExtension:l,leafSpansSlashes:s}}function Bi(e,t){const i=e.match(t.regex);if(!i)return null;const n={};for(let e=0;e<t.fields.length;e++){const s=t.fields[e],r=i[e+1];s&&void 0!==r&&Hi(n,s,r)}return n}function Yi(e,t){const i={},n=t.year??e.year,s=t.month??e.month,r=t.day??e.day,o=t.hour??e.hour,a=t.minute??e.minute,l=t.second??e.second;return void 0!==n&&(i.year=n),void 0!==s&&(i.month=s),void 0!==r&&(i.day=r),void 0!==o&&(i.hour=o),void 0!==a&&(i.minute=a),void 0!==l&&(i.second=l),i}function Ui(e,t){const i=String(e??"").replace(/^media-source:\/\//,"");if(1===t.segments.length&&t.leafSpansSlashes){const e=t.segments[0];return e?Bi(i,e):null}const n=i.split("/").filter(Boolean),s=t.leafIsFile?n:n.slice(0,-1);if(s.length<t.segments.length)return null;const r=s.slice(s.length-t.segments.length);let o={};for(let e=0;e<t.segments.length;e++){const i=t.segments[e],n=r[e];if(!i||void 0===n)return null;const s=Bi(n,i);if(!s)return null;o=Yi(o,s)}return o}function Wi(e,t,i){if(i<0||i>=t.segments.length)return null;const n=t.segments[i];return n?Bi(e,n):null}const Ki=(e,t=2)=>String(e).padStart(t,"0");function Zi(e){const{year:t,month:i,day:n}=e;if(void 0===t||void 0===i||void 0===n)return null;if(i<1||i>12||n<1||n>31)return null;const s=new Date(t,i-1,n);return s.getFullYear()!==t||s.getMonth()!==i-1||s.getDate()!==n?null:`${Ki(t,4)}-${Ki(i)}-${Ki(n)}`}function Gi(...e){return e.reduce((e,t)=>Yi(e,t),{})}const Xi=(e,t=2)=>String(e).padStart(t,"0");function Ji(e,t){const i=Ui(e,t);return i?void 0===i.year||void 0===i.month||void 0===i.day?null:function(e,t,i,n=0,s=0,r=0){if(!Number.isFinite(e))return null;if(t<1||t>12||i<1||i>31)return null;if(n<0||n>23||s<0||s>59||r<0||r>59)return null;const o=new Date(e,t-1,i,n,s,r);if(o.getMonth()!==t-1||o.getDate()!==i)return null;const a=`${Xi(e,4)}-${Xi(t)}-${Xi(i)}`;return{dayKey:a,dtKey:`${a}T${Xi(n)}:${Xi(s)}:${Xi(r)}`,ms:o.getTime()}}(i.year,i.month,i.day,i.hour??0,i.minute??0,i.second??0):null}const Qi=new Map;function en(e,t){const i=t.pathFormat?function(e){if(Qi.has(e))return Qi.get(e)??null;const t=Ni(e);return Qi.set(e,t),t}(t.pathFormat):null;return i?Ji(e,i):null}const tn=(e,t)=>en(e,t)?.ms??null;function nn(e){if(!Number.isFinite(e))return null;const t=new Date(e);return`${Xi(t.getFullYear(),4)}-${Xi(t.getMonth()+1)}-${Xi(t.getDate())}`}const sn=new Set(["allow_bulk_delete","delete_confirm","delete_service","entities","frigate_url","frigate_thumb_bbox","frigate_event_cluster","frigate_event_cluster_gap_sec","max_media","media_sources","path_datetime_format","source_mode","thumbnail_frame_pct"]),rn=new Set(["bar_opacity","bar_position","capture_video_thumbnails","live_camera_entities","live_cameras","live_enabled","object_filters","clean_mode","preview_close_on_tap","preview_position","pill_size","row_gap","thumb_bar_position","thumb_layout","thumb_size","thumb_off_opacity","show_camera_title","controls_mode"]);function on(e,t){if(!e)return{changedKeys:[],isSourceChange:!0,isUiOnly:!1};const i=function(e,t){const i=new Set;for(const t of Object.keys(e))i.add(t);for(const e of Object.keys(t))i.add(e);return[...i]}(e,t).filter(i=>!((e,t,i)=>JSON.stringify(e[i])===JSON.stringify(t[i]))(e,t,i)),n=i.some(e=>sn.has(e)),s=i.length>0&&i.every(e=>rn.has(e));return{changedKeys:i,isSourceChange:n,isUiOnly:s}}class an extends TypeError{constructor(e,t){let i;const{message:n,explanation:s,...r}=e,{path:o}=e,a=0===o.length?n:`At path: ${o.join(".")} -- ${n}`;super(s??a),null!=s&&(this.cause=a),Object.assign(this,r),this.name=this.constructor.name,this.failures=()=>i??(i=[e,...t()])}}function ln(e){return"object"==typeof e&&null!=e}function cn(e){return ln(e)&&!Array.isArray(e)}function dn(e){if("[object Object]"!==Object.prototype.toString.call(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function hn(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function pn(e,t,i,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:s,branch:r}=t,{type:o}=i,{refinement:a,message:l=`Expected a value of type \`${o}\`${a?` with refinement \`${a}\``:""}, but received: \`${hn(n)}\``}=e;return{value:n,type:o,refinement:a,key:s[s.length-1],path:s,branch:r,...e,message:l}}function*un(e,t,i,n){(function(e){return ln(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const s of e){const e=pn(s,t,i,n);e&&(yield e)}}function*mn(e,t,i={}){const{path:n=[],branch:s=[e],coerce:r=!1,mask:o=!1}=i,a={path:n,branch:s,mask:o};r&&(e=t.coercer(e,a));let l="valid";for(const n of t.validator(e,a))n.explanation=i.message,l="not_valid",yield[n,void 0];for(let[c,d,h]of t.entries(e,a)){const t=mn(d,h,{path:void 0===c?n:[...n,c],branch:void 0===c?s:[...s,d],coerce:r,mask:o,message:i.message});for(const i of t)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):r&&(d=i[1],void 0===c?e=d:e instanceof Map?e.set(c,d):e instanceof Set?e.add(d):ln(e)&&(void 0!==d||c in e)&&(e[c]=d))}if("not_valid"!==l)for(const n of t.refiner(e,a))n.explanation=i.message,l="not_refined",yield[n,void 0];"valid"===l&&(yield[void 0,e])}class gn{constructor(e){const{type:t,schema:i,validator:n,refiner:s,coercer:r=e=>e,entries:o=function*(){}}=e;this.type=t,this.schema=i,this.entries=o,this.coercer=r,this.validator=n?(e,t)=>un(n(e,t),t,this,e):()=>[],this.refiner=s?(e,t)=>un(s(e,t),t,this,e):()=>[]}assert(e,t){return function(e,t,i){const n=_n(e,t,{message:i});if(n[0])throw n[0]}(e,this,t)}create(e,t){return fn(e,this,t)}is(e){return vn(e,this)}mask(e,t){return function(e,t,i){const n=_n(e,t,{coerce:!0,mask:!0,message:i});if(n[0])throw n[0];return n[1]}(e,this,t)}validate(e,t={}){return _n(e,this,t)}}function fn(e,t,i){const n=_n(e,t,{coerce:!0,message:i});if(n[0])throw n[0];return n[1]}function vn(e,t){return!_n(e,t)[0]}function _n(e,t,i={}){const n=mn(e,t,i),s=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(n);if(s[0]){const e=new an(s[0],function*(){for(const e of n)e[0]&&(yield e[0])});return[e,void 0]}return[void 0,s[1]]}function bn(e,t){return new gn({type:e,schema:null,validator:t})}function yn(e){return new gn({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[i,n]of t.entries())yield[i,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${hn(e)}`})}function wn(){return bn("boolean",e=>"boolean"==typeof e)}function xn(e){const t={},i=e.map(e=>hn(e)).join();for(const i of e)t[i]=i;return new gn({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${i}\`, but received: ${hn(t)}`})}function kn(){return bn("integer",e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${hn(e)}`)}function Sn(e){const t=e?Object.keys(e):[],i=bn("never",()=>!1);return new gn({type:"object",schema:e||null,*entries(n){if(e&&ln(n)){const s=new Set(Object.keys(n));for(const i of t)s.delete(i),yield[i,n[i],e[i]];for(const e of s)yield[e,n[e],i]}},validator:e=>cn(e)||`Expected an object, but received: ${hn(e)}`,coercer(t,i){if(!cn(t))return t;const n={...t};if(i.mask&&e)for(const t in n)void 0===e[t]&&delete n[t];return n}})}function $n(e){return new gn({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function Cn(e,t){return new gn({type:"record",schema:null,*entries(i){if(ln(i))for(const n in i){const s=i[n];yield[n,n,e],yield[n,s,t]}},validator:e=>cn(e)||`Expected an object, but received: ${hn(e)}`,coercer:e=>cn(e)?{...e}:e})}function An(){return bn("string",e=>"string"==typeof e||`Expected a string, but received: ${hn(e)}`)}function Ln(e){const t=Object.keys(e);return new gn({type:"type",schema:e,*entries(i){if(ln(i))for(const n of t)yield[n,i[n],e[n]]},validator:e=>cn(e)||`Expected an object, but received: ${hn(e)}`,coercer:e=>cn(e)?{...e}:e})}function Mn(e){const t=e.map(e=>e.type).join(" | ");return new gn({type:"union",schema:null,coercer(t,i){for(const n of e){const[e,s]=n.validate(t,{coerce:!0,mask:i.mask});if(!e)return s}return t},validator(i,n){const s=[];for(const t of e){const[...e]=mn(i,t,n),[r]=e;if(!r[0])return[];for(const[t]of e)t&&s.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${hn(i)}`,...s]}})}function Pn(e,t,i={}){return function(e,t,i){return new gn({...e,coercer:(n,s)=>vn(n,t)?e.coercer(i(n,s),s):e.coercer(n,s)})}(e,bn("unknown",()=>!0),e=>{const n="function"==typeof t?t():t;if(void 0===e)return n;if(!i.strict&&dn(e)&&dn(n)){const t={...e};let i=!1;for(const e in n)void 0===t[e]&&(t[e]=n[e],i=!0);if(i)return t}return e})}function Tn(e,t,i){return new gn({...e,*refiner(n,s){yield*e.refiner(n,s);const r=un(i(n,s),s,e,n);for(const e of r)yield{...e,refinement:t}}})}const zn="currentColor",En={bicycle:"mdi:bicycle",bird:"mdi:bird",bus:"mdi:bus",car:"mdi:car",cat:"mdi:cat",dog:"mdi:dog",motorcycle:"mdi:motorbike",person:"mdi:account",truck:"mdi:truck",visitor:"mdi:doorbell-video"},In={bicycle:["bicycle","fiets","fietser","bike"],bird:["bird","vogel","vogels"],bus:["bus"],car:["car","auto","autos","voertuig","vehicle"],cat:["cat","kat","katten"],dog:["dog","hond","honden"],motorcycle:["motorcycle","motor","motorbike"],person:["person","persoon","personen"],truck:["truck","vrachtwagen"],visitor:["visitor","visitors","bezoeker","bezoekers","bezoek"]},Fn=new Set(fi);function Hn(e){return Fn.has(e)?e:null}function Dn(e){return Hn(e.toLowerCase().trim())??"selected"}function Rn(e){const t=e.toLowerCase().trim(),i=Hn(t);return i?In[i]:t?[t]:[]}function jn(e,t={},i="mdi:shape"){if(!e)return"";const n=t[e];if(n)return n;const s=Hn(e);return s?En[s]:i}function On(e,t){return e?t[e]??zn:zn}function Vn(e){if(!e)return"";if("string"==typeof e)return e.toLowerCase();return(e.filename??e.name??e.basename??e.path??e.file??e.fullpath??e.src??"").toLowerCase()}function qn(e,t){const i=t?.attributes,n="string"==typeof i?.friendly_name?i.friendly_name:"",s="string"==typeof i?.name?i.name:"",r=(n||s).toLowerCase();return`${e.toLowerCase()} ${r}`.trim()}const Nn="__cgc_stream";function Bn(e){if(!e)return[];const t=Array.isArray(e.live_cameras)?e.live_cameras:[];if(t.length>0)return t;const i=Array.isArray(e.live_camera_entities)?e.live_camera_entities:[],n=Array.isArray(e.live_stream_urls)?e.live_stream_urls:null,s=e.live_mic_streams&&"object"==typeof e.live_mic_streams?e.live_mic_streams:{},r=[];for(const e of i){if("string"!=typeof e||!e.trim())continue;const t=e.trim(),i={entity:t,name:""},n=s[t];"string"==typeof n&&n.trim()&&(i.mic=n.trim()),r.push(i)}if(n&&n.length>0)n.forEach((e,t)=>{const i=String(e?.url??"").trim();if(!i)return;const n={url:i,name:String(e?.name??"")},o=s[`__cgc_stream_${t}__`];"string"==typeof o&&o.trim()&&(n.mic=o.trim()),r.push(n)});else{const t=String(e.live_stream_url??"").trim();if(t){const i={url:t,name:String(e.live_stream_name??"").trim()||"Stream"},n=s.__cgc_stream_0__;"string"==typeof n&&n.trim()&&(i.mic=n.trim()),r.push(i)}}const o=new Set;for(const e of r){const t="string"==typeof e.entity?e.entity.trim():"";t&&o.add(t)}let a=0;for(const e of r)"string"==typeof e.url&&e.url.trim()&&(o.add(`__cgc_stream_${a}__`),a++);for(const[e,t]of Object.entries(s))"string"==typeof t&&t.trim()&&(o.has(e)||r.push({entity:e,name:"",mic:t.trim()}));return r}function Yn(e){const t=Bn(e),i=[];let n=0;for(const e of t){const t=String(e?.url??"").trim();if(!t)continue;const s=String(e?.name??"").trim()||`Stream ${n+1}`;i.push({id:`${Nn}_${n}__`,url:t,name:s}),n++}return i}function Un(e,t){const i=String(t??"");if(!i.startsWith(Nn))return null;const n=Yn(e),s=n.find(e=>e.id===i);return s||("__cgc_stream__"===i?n[0]??null:null)}function Wn(e){const t=Bn(e.config);if(0===t.length)return[];const i=e.hassStates??{},n=[];for(const e of t){const t="string"==typeof e?.entity?e.entity.trim():"";t&&t.startsWith("camera.")&&(i[t]&&n.push(t))}return n}function Kn(e){for(const t of Bn(e))if("string"==typeof t?.mic&&t.mic.trim())return!0;return!1}function Zn(e,t){const i=String(e??"").trim();if(i&&Kn(t)){const e=function(e,t){const i=String(e??"").trim();if(!i)return null;const n=Bn(t);if(i.startsWith(Nn)){const e=/^__cgc_stream_(\d+)__$/.exec(i),t=e?parseInt(e[1]??"",10):NaN;if(Number.isFinite(t)){let e=0;for(const i of n)if(String(i?.url??"").trim()){if(e===t)return i;e++}}for(const e of n){const t=String(e?.entity??"").trim();if(t&&t===i)return e}return null}for(const e of n){const t=String(e?.entity??"").trim();if(t&&t===i)return e}return null}(i,t);return"string"==typeof e?.mic?e.mic.trim():""}return String(t?.live_go2rtc_stream??"").trim()}function Gn(e){return!!Kn(e)||Boolean(String(e?.live_go2rtc_stream??"").trim())}function Xn(e){const t=Bn(e),i=[];for(const e of t){const t="string"==typeof e?.entity?e.entity.trim():"";t&&t.startsWith("camera.")&&i.push(t)}return i}function Jn(e){const t=[];for(const i of Bn(e)){const e="string"==typeof i?.entity?i.entity.trim():"";e&&!e.startsWith(Nn)&&t.push(e)}return t}function Qn(e,t){return"single"!==t&&("grid"===e?.live_layout&&Xn(e).length>=2)}const es="media-source://frigate",ts=`${es}/frigate/event-search/snapshots`;function is(e){const t=String(e??"");return t.includes(`${es}/`)||t===es}function ns(e){if((e.frigate_url??"").trim())return!0;return(e.media_sources??[]).some(e=>is(e)&&!ss(e))}function ss(e){const t=String(e??"");return!!is(t)&&/\/recordings(\/|$)/.test(t)}function rs(e){const t=String(e??"").match(/(?:^|[/_.-])(\d{9,11}(?:\.\d+)?)-[a-z0-9]+(?:\.[a-z0-9]+)?(?:[/?#]|$)/i);if(!t?.[1])return null;const i=Number.parseFloat(t[1]);return Number.isFinite(i)?i<946684800||i>4102444800?null:1e3*i:null}function os(e){const t=String(e??"").match(/(?:^|[/_.-])(\d{9,11}(?:\.\d+)?-[a-z0-9]+)(?:\.[a-z0-9]+)?(?:[/?#]|$)/i);return t?.[1]??null}async function as(e,t,i){if(!e||!t)return null;try{const n={type:"frigate/events/get",instance_id:t,has_clip:!0};"number"==typeof i&&i>0&&(n.limit=i);let s=await e.callWS(n);if("string"==typeof s)try{s=JSON.parse(s)}catch{return null}return Array.isArray(s)?s:null}catch{return null}}function ls(e){const t=String(e??"").match(/^media-source:\/\/frigate\/([^/]+)/);return t?.[1]??null}const cs=(e,t)=>Tn(kn(),`int[${e},${t}]`,i=>i>=e&&i<=t||`must be a number between ${e} and ${t} (got ${i})`),ds=Tn(An(),"service_id",e=>!(""!==e&&!/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(e))||`must be in 'domain.service' form (got '${e}')`),hs=Tn(An(),"non_empty_string",e=>e.trim().length>0||"must be a non-empty string"),ps=Sn({url:hs,name:Pn(An(),"")}),us=Sn({x:Pn(cs(0,100),0),y:Pn(cs(0,100),0),w:Pn(cs(0,100),100),h:Pn(cs(0,100),100),source_ar:$n(An())}),ms=Sn({entity:$n(An()),url:$n(An()),name:Pn(An(),""),mic:$n(An()),crop:$n(us)}),gs=Sn({enabled:Pn(wn(),!0),order:Pn(kn(),0)}),fs=Sn({echo_cancellation:Pn(wn(),!0),noise_suppression:Pn(wn(),!0),auto_gain_control:Pn(wn(),!0)}),vs=Sn({urls:Mn([An(),yn(An())]),username:$n(An()),credential:$n(An())}),_s=Sn({service:hs,data:$n(Cn(An(),An())),target:$n(Sn({entity_id:$n(Mn([An(),yn(An())]))}))}),bs=Sn({start:_s,stop:$n(_s)}),ys=Sn({up:$n(bs),down:$n(bs),left:$n(bs),right:$n(bs),zoom_in:$n(bs),zoom_out:$n(bs),home:$n(Sn({start:_s}))}),ws=Sn({up:$n(An()),down:$n(An()),left:$n(An()),right:$n(An()),zoom_in:$n(An()),zoom_out:$n(An()),stop:$n(An()),home:$n(An())}),xs=Ln({type:Pn(xn(["ezviz","reolink","frigate","onvif"]),"ezviz"),button_prefix:$n(An()),speed:$n(cs(1,9)),actions:$n(ys),buttons:$n(ws)}),ks=Sn({entity:hs,icon:hs,icon_on:$n(An()),color_on:$n(An()),color_off:$n(An()),title:$n(An()),service:$n(An()),state_on:$n(An())}),Ss=Ln({type:Pn(An(),"custom:camera-gallery-card"),source_mode:Pn(xn(["sensor","media","combined"]),"sensor"),entities:Pn(yn(An()),[]),media_sources:Pn(yn(An()),[]),frigate_url:$n(An()),frigate_thumb_bbox:Pn(wn(),!1),frigate_event_cluster:Pn(wn(),!1),frigate_event_cluster_gap_sec:Pn(cs(1,600),30),path_datetime_format:Pn(An(),""),show_favorite:Pn(wn(),!0),show_live:Pn(wn(),!0),show_today:Pn(wn(),!0),show_media_filter:Pn(wn(),!0),toolbar_order:Pn(Cn(An(),kn()),{}),gallery_pills:Pn(Cn(An(),gs),{}),gallery_pills_align:Pn(xn(["left","center","right"]),"center"),live_pills:Pn(Cn(An(),gs),{}),autoplay:Pn(wn(),_i),auto_muted:Pn(wn(),vi),live_enabled:Pn(wn(),!1),live_auto_muted:Pn(wn(),xi),live_chevrons_enabled:Pn(wn(),!0),gallery_chevrons_enabled:Pn(wn(),!0),live_cameras:Pn(yn(ms),[]),live_camera_entities:Pn(yn(An()),[]),live_layout:Pn(xn(["single","grid"]),"single"),live_grid_labels:Pn(wn(),!0),live_stream_url:$n(An()),live_stream_name:$n(An()),live_stream_urls:$n(yn(ps)),live_go2rtc_url:$n(An()),live_go2rtc_stream:$n(An()),live_mic_mode:Pn(xn(["toggle","ptt"]),"toggle"),live_mic_audio_processing:$n(fs),live_mic_streams:Pn(Cn(An(),hs),{}),live_mic_ice_servers:$n(yn(vs)),live_mic_force_relay:Pn(wn(),!1),live_mic_waveform_enabled:Pn(wn(),!0),live_mic_waveform_sensitivity:Pn(xn(["low","medium","high"]),"medium"),live_ptz_enabled:Pn(wn(),!1),live_ptz_position:Pn(xn(["bottom-left","bottom-right","top-left","top-right"]),"bottom-left"),live_ptz_speed:Pn(cs(1,9),5),live_ptz_cameras:Pn(Cn(An(),xs),{}),start_mode:Pn(xn(["gallery","live"]),"gallery"),allow_bulk_delete:Pn(wn(),!0),delete_confirm:Pn(wn(),!0),delete_service:Pn(ds,""),frigate_delete_service:Pn(ds,""),object_filters:Pn(yn(An()),[]),object_colors:Pn(Cn(An(),An()),{}),entity_filter_map:Pn(Cn(An(),xn(fi)),{}),bar_opacity:Pn(cs(0,ui),bi),talkback_opacity:Pn(cs(0,ui),bi),chevron_opacity:Pn(cs(0,ui),bi),bar_position:Pn(xn(["top","bottom","hidden"]),"top"),thumb_size:Pn(cs(40,220),86),thumb_off_opacity:Pn(cs(0,ui),30),thumb_bar_position:Pn(xn(["top","bottom","hidden"]),"bottom"),thumb_layout:Pn(xn(["horizontal","vertical"]),"horizontal"),thumb_sort_order:Pn(xn(["newest","oldest"]),"newest"),thumbnail_frame_pct:Pn(cs(0,100),0),capture_video_thumbnails:Pn(wn(),!0),pill_size:Pn(cs(10,28),14),row_gap:Pn(cs(0,40),8),card_height:Pn(cs(0,1200),0),aspect_ratio:Pn(xn(["16:9","4:3","1:1"]),"16:9"),object_fit:Pn(xn(["cover","contain"]),"cover"),controls_mode:Pn(xn(["overlay","fixed"]),"overlay"),style_variables:Pn(An(),""),show_camera_title:Pn(wn(),!0),persistent_controls:Pn(wn(),!1),debug_enabled:Pn(wn(),!1),preview_position:Pn(xn(["top","bottom"]),"top"),clean_mode:Pn(wn(),!1),preview_close_on_tap:Pn(wn(),!1),max_media:Pn(cs(1,500),ki),sync_entity:$n(An()),menu_buttons:Pn(yn(ks),[])});function $s(e){return e&&"object"==typeof e&&!Array.isArray(e)?{...e}:{}}class Cs extends Error{constructor(e,t){super(e),this.name="ConfigValidationError",this.cause=t}}function As(e,t){const i=[],n=new Set;for(const s of e){const e=t(s);if(!e)continue;const r=e.toLowerCase();n.has(r)||(n.add(r),i.push(e))}return i}function Ls(e,t=""){return Array.isArray(e)?e:e?[e]:t?[t]:[]}function Ms(e,t=""){return As(Ls(e,t),e=>e.trim())}function Ps(e){let t=(e??"").trim();if(!t)return"";const i=e=>e.replace(/^\/+/,"").replace(/\/+$/,"");if(t.startsWith("media-source://")){let e=t.slice(15).replace(/\/{2,}/g,"/").replace(/\/+$/g,"");return e.startsWith("local/")&&(e=`media_source/${e}`),`media-source://${e}`}if(t=i(t),/^frigate(\/|$)/i.test(t)){const e=i(t.replace(/^frigate/i,""));return e?`${es}/${e}`:es}return t=t.replace(/^media\//,""),`media-source://media_source/${t}`}function Ts(e){const t=$s(e);let i=!1;Array.isArray(t.entities)||void 0===t.entity?void 0!==t.entities&&(t.entities=Ms(t.entities)):(t.entities=Ms(t.entities,t.entity),i=!0),"entity"in t&&(delete t.entity,i=!0);const n="media_source"in t||"media_folders_fav"in t||"media_folder_favorites"in t,s=(Array.isArray(t.media_sources)?t.media_sources:null)??(Array.isArray(t.media_folders_fav)?t.media_folders_fav:null)??(Array.isArray(t.media_folder_favorites)?t.media_folder_favorites:null)??("string"==typeof t.media_source?[t.media_source]:null);if(null===s&&void 0===t.media_sources||(t.media_sources=As(Ls(s),Ps)),n&&(delete t.media_source,delete t.media_folder_favorites,delete t.media_folders_fav,i=!0),void 0===t.delete_service&&"string"==typeof t.shell_command&&(t.delete_service=t.shell_command),"shell_command"in t&&(delete t.shell_command,i=!0),void 0===t.clean_mode&&void 0!==t.preview_click_to_open&&(t.clean_mode=!!t.preview_click_to_open),"preview_click_to_open"in t&&(delete t.preview_click_to_open,i=!0),void 0===t.path_datetime_format||""===t.path_datetime_format){const e=String(t.folder_datetime_format??"").trim(),i=String(t.filename_datetime_format??"").trim();e&&i?t.path_datetime_format=`${e}/${i}`:e?t.path_datetime_format=e:i&&(t.path_datetime_format=i)}"folder_datetime_format"in t&&(delete t.folder_datetime_format,i=!0),"filename_datetime_format"in t&&(delete t.filename_datetime_format,i=!0);for(const e of["filter_folders_enabled","live_provider","media_folder_filter"])e in t&&(delete t[e],i=!0);return{migrated:t,hadLegacyKeys:i}}function zs(e,t,i=e=>e){const n=e[t];if("string"!=typeof n)return;const s=i(n.trim());""===s?delete e[t]:e[t]=s}function Es(e,t){if(e)return t.source_mode;const i=t.media_sources.length>0,n=t.entities.length>0;return i&&!n?"media":"sensor"}function Is(e){if(function(e){return!0===e.live_enabled&&(!(e.entities.length>0)&&(!(e.media_sources.length>0)&&(Yn(e).length>0||(Array.isArray(e.live_cameras)?e.live_cameras:[]).some(e=>{if(!e||"object"!=typeof e)return!1;const t="string"==typeof e.entity?e.entity.trim():"",i="string"==typeof e.url?e.url.trim():"";return t.length>0||i.length>0}))))}(e))return;const{source_mode:t,entities:i,media_sources:n}=e;if("sensor"===t&&!i.length)throw new Error("camera-gallery-card: 'entity' or 'entities' is required in source_mode: sensor");if("combined"===t){if(!i.length)throw new Error("camera-gallery-card: 'entity' or 'entities' is required in source_mode: combined");if(!n.length)throw new Error("camera-gallery-card: 'media_source' or 'media_sources' is required in source_mode: combined")}if("media"===t&&!n.length)throw new Error("camera-gallery-card: 'media_source' OR 'media_sources' is required in source_mode: media");const s=n.length>0&&n.every(e=>/^media-source:\/\/reolink\//i.test(String(e??"")));if(!e.path_datetime_format&&!ns({frigate_url:e.frigate_url,media_sources:e.media_sources})&&!s)throw new Error("camera-gallery-card: 'path_datetime_format' is required so files can be grouped by date")}function Fs(e){const t=$s(e),i="string"==typeof t.source_mode&&""!==t.source_mode.trim(),n="preview_close_on_tap"in t,{migrated:s,customIcons:r}=function(e){const{migrated:t}=Ts(e);zs(t,"frigate_url",e=>e.replace(/\/+$/,"")),zs(t,"live_stream_url"),zs(t,"live_stream_name"),zs(t,"live_go2rtc_url"),zs(t,"live_go2rtc_stream"),zs(t,"sync_entity"),t.path_datetime_format=(t.path_datetime_format??"").trim(),t.style_variables=(t.style_variables??"").trim();const i=t,n=i.live_mic_waveform_sensitivity;"number"==typeof n&&(i.live_mic_waveform_sensitivity=n<=40?"low":n<=120?"medium":"high"),delete i.live_mic_waveform_style,delete i.live_mic_waveform_opacity;const s=t.live_camera_entities;void 0!==s&&(t.live_camera_entities=Array.isArray(s)?s.map(e=>e.trim()).filter(e=>e.length>0):[]);const r=t,o=r.live_cameras,a=Array.isArray(t.live_camera_entities)?t.live_camera_entities:[],l=Array.isArray(t.live_stream_urls)?t.live_stream_urls:[],c=t.live_mic_streams&&"object"==typeof t.live_mic_streams?t.live_mic_streams:{};if(Array.isArray(o)&&o.length>0)r.live_cameras=o.map(e=>{if(!e||"object"!=typeof e)return null;const t=e,i=t.entity,n=t.url,s=t.name,r=t.mic,o="string"==typeof i?i.trim():"",a="string"==typeof n?n.trim():"";if(!o&&!a)return null;if(o&&a)return null;const l="string"==typeof s?s:"",c="string"==typeof r&&r.trim()?r.trim():void 0,d={};o&&(d.entity=o),a&&(d.url=a),d.name=l,c&&(d.mic=c);const h=t.crop;if(h&&"object"==typeof h){const e=h,t=(e,t)=>{const i=Number(e);return Number.isFinite(i)?Math.max(0,Math.min(100,Math.round(i))):t},i=t(e.x,0),n=t(e.y,0),s=t(e.w,100),r=t(e.h,100);if(0!==i||0!==n||100!==s||100!==r){const t={x:i,y:n,w:s,h:r},o=e.source_ar;"string"==typeof o&&/^\d+(\.\d+)?\/\d+(\.\d+)?$/.test(o)&&(t.source_ar=o),d.crop=t}}return d}).filter(e=>null!==e);else{const e=[];for(const t of a){if("string"!=typeof t||!t.trim())continue;const i=t.trim(),n={entity:i,name:""},s=c[i];"string"==typeof s&&s.trim()&&(n.mic=s.trim()),e.push(n)}if(l.length>0)for(let t=0;t<l.length;t++){const i=l[t];if(!i||"object"!=typeof i)continue;const n=i,s=n.url,r=n.name,o="string"==typeof s?s.trim():"";if(!o)continue;const a={url:o,name:"string"==typeof r?r:""},d=c[`__cgc_stream_${t}__`];"string"==typeof d&&d.trim()&&(a.mic=d.trim()),e.push(a)}else{const i=t.live_stream_url,n="string"==typeof i?i.trim():"";if(n){const i=t.live_stream_name,s={url:n,name:("string"==typeof i?i.trim():"")||"Stream"},r=c.__cgc_stream_0__;"string"==typeof r&&r.trim()&&(s.mic=r.trim()),e.push(s)}}const i=new Set;for(const t of e){const e="string"==typeof t.entity?t.entity.trim():"";e&&i.add(e)}let n=0;for(const t of e)"string"==typeof t.url&&t.url.trim()&&(i.add(`__cgc_stream_${n}__`),n++);for(const[t,n]of Object.entries(c))"string"==typeof n&&n.trim()&&(i.has(t)||e.push({entity:t,name:"",mic:n.trim()}));e.length>0&&(r.live_cameras=e)}const d=r.live_camera_entity,h="string"==typeof d?d.trim():"";if(h){const e=Array.isArray(r.live_cameras)?[...r.live_cameras]:[],t=e.findIndex(e=>e&&"string"==typeof e.entity&&e.entity.trim()===h);if(t>0){const i=e[t];e.splice(t,1),e.unshift(i),r.live_cameras=e}else t<0&&(e.unshift({entity:h,name:""}),r.live_cameras=e)}delete r.live_camera_entity,Array.isArray(r.live_cameras)&&r.live_cameras.length>0&&(delete r.live_camera_entities,delete r.live_mic_streams,delete r.live_stream_urls,delete r.live_stream_url,delete r.live_stream_name);const p={},u=t.object_filters,m=Array.isArray(u)?u:u?[u]:[],g=[],f=new Set;for(const e of m){let t="",i="";if("string"==typeof e)t=e.toLowerCase().trim();else{const n=Object.entries(e)[0];n&&(t=n[0].toLowerCase().trim(),i=n[1])}t&&!f.has(t)&&(f.add(t),g.push(t),i&&(p[t]=i))}if(t.object_filters=g,t.entity_filter_map){const e={};for(const[i,n]of Object.entries(t.entity_filter_map)){if("string"!=typeof n)continue;const t=i.trim(),s=n.toLowerCase().trim();t&&s&&Fn.has(s)&&(e[t]=s)}t.entity_filter_map=e}return{migrated:t,customIcons:p}}(t);let o;try{o=fn(s,Ss)}catch(e){if(e instanceof an)throw new Cs(`camera-gallery-card: invalid config — ${e.path.join(".")||"<root>"}: ${e.message}`,e);throw e}var a;return o={...o,source_mode:Es(i,o)},a=o,o=n?a:{...a,preview_close_on_tap:a.clean_mode},o=function(e){return"media"===e.source_mode?{...e,allow_bulk_delete:!1,delete_service:""}:e}(o),Is(o),{config:o,customIcons:r}}function Hs(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619)>>>0;return t.toString(36)}class Ds{constructor(e={}){this._set=new Set,this._key=null,this._quotaWarned=!1,this._onChange=e.onChange,this._storage=void 0===e.storage?function(){try{return globalThis.localStorage??null}catch{return null}}():e.storage}load(e){this._key=function(e){return`cgc_favs_cgc_p_${Hs([...e.entities??[],...e.media_sources??[]].sort().join("|"))}`}(e),this._set=this._read(this._key)}has(e){return this._set.has(e)}get size(){return this._set.size}values(){return this._set.values()}toggle(e){this._set.has(e)?this._set.delete(e):this._set.add(e),this._write(),this._onChange?.()}_read(e){if(!this._storage)return new Set;let t,i;try{t=this._storage.getItem(e)}catch{return new Set}if(!t)return new Set;try{i=JSON.parse(t)}catch{return console.warn("[camera-gallery-card] favorites: ignoring corrupt JSON in localStorage"),new Set}return Array.isArray(i)?new Set(i.filter(e=>"string"==typeof e)):(console.warn("[camera-gallery-card] favorites: ignoring non-array JSON in localStorage"),new Set)}_write(){if(!this._storage||!this._key)return;let e;try{e=JSON.stringify([...this._set])}catch{return}try{this._storage.setItem(this._key,e)}catch(e){if(function(e){if(!(e instanceof Error))return!1;if("QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)return!0;const t=e.code;return 22===t||1014===t}(e))return void(this._quotaWarned||(this._quotaWarned=!0,console.warn("[camera-gallery-card] favorites: localStorage quota exceeded")));console.warn("[camera-gallery-card] favorites: localStorage write failed",e)}}}const Rs=/([^/]+)\.(mp4|webm|mov|m4v)$/i,js=/([^/]+)\.(jpg|jpeg|png|webp)$/i;function Os(e,t){if(!Array.isArray(e)||0===e.length)return{items:[],pairedThumbs:new Map};const i=new Map;for(const[n,s]of e.entries()){const e=t(s);if(!e)continue;const r=Rs.exec(e)?.[1];r&&i.set(r.toLowerCase(),n)}const n=new Map,s=new Set;for(const[r,o]of e.entries()){const a=t(o);if(!a)continue;const l=js.exec(a)?.[1];if(!l)continue;const c=i.get(l.toLowerCase());if(void 0===c)continue;const d=e[c];if(void 0===d)continue;const h=t(d);h&&(n.set(h,a),s.add(r))}const r=s.size?e.filter((e,t)=>!s.has(t)):[...e];return{items:r,pairedThumbs:n}}const Vs=/^media-source:\/\/(?:media_source\/?)?/,qs=/\/{2,}/g,Ns=/^\/+/,Bs=/\/+$/;function Ys(e){return String(e??"").replace(Vs,"").replace(qs,"/").replace(Ns,"").replace(Bs,"").trim().toLowerCase()}function Us(e){if(!Array.isArray(e))return[];const t=new Map;for(const i of e){let e;if(null==i)e="";else if("string"==typeof i)e=i;else{const t=i;e=t.media_content_id||t.path||t.id||t.src||i}const n=Ys(e);n&&(t.has(n)||t.set(n,i))}return Array.from(t.values())}const Ws=e=>({src:e});function Ks(e){if(!e)return"";const t=String(e).trim();return t.startsWith("/config/www/")?"/local/"+t.slice(12):"/config/www"===t?"/local":t}function Zs(e){if("string"!=typeof e)return null;const[t,i]=e.split(".");return t&&i?{domain:t,service:i}:null}class Gs{constructor(e={}){this._hass=null,this._config=null,this._srcEntityMap=new Map,this._sensorPairedThumbs=new Map,this._lastAttrRefs=new Map,this._lastItems=[],this._parseCache=new WeakMap,this._stringParseCache=new Map,this._onChange=e.onChange}setHass(e){const t=this._hass;if(this._hass=e,!t||!e||!this._onChange)return;const i=this.getEntityIds();if(0!==i.length)for(const n of i){const i=t.states?.[n]?.attributes?.[pi],s=e.states?.[n]?.attributes?.[pi];if(i!==s)return void this._onChange()}}load(e){this._config=e,this._srcEntityMap=new Map,this._sensorPairedThumbs=new Map,this._lastAttrRefs=new Map,this._lastItems=[],this._stringParseCache=new Map,this._parseCache=new WeakMap}getEntityIds(){const e=this._config?.entities;return Array.isArray(e)?e.filter(e=>"string"==typeof e&&e.length>0):[]}getSrcEntityMap(){return this._srcEntityMap}getSensorPairedThumbs(){return this._sensorPairedThumbs}getItems(e=Ws){const t=this.getEntityIds();if(t.length===this._lastAttrRefs.size){let e=!0;for(const i of t){const t=this._hass?.states?.[i]?.attributes?.[pi];if(t!==this._lastAttrRefs.get(i)){e=!1;break}}if(e)return this._lastItems}const i=[],n=new Map;this._srcEntityMap=new Map;for(const e of t){const t=this._hass?.states?.[e],s=t?.attributes?.[pi];n.set(e,s);const r=this._parseFileListCached(s);for(const t of r)this._srcEntityMap.has(t)||this._srcEntityMap.set(t,e);i.push(...r)}const s=Us(i).map(t=>e(String(t))),{items:r,pairedThumbs:o}=Os(s,e=>e?.src);this._sensorPairedThumbs=o,this._lastAttrRefs=n;const a=this._lastItems,l=a.length===r.length&&r.every((e,t)=>e.src===a[t]?.src&&e.dtMs===a[t]?.dtMs);return this._lastItems=r,!l&&this._onChange&&this._onChange(),r}_parseFileListCached(e){if(!e)return[];if(Array.isArray(e)||"object"==typeof e&&null!==e){const t=e,i=this._parseCache.get(t);if(i)return i;const n=Xs(e);return this._parseCache.set(t,n),n}if("string"==typeof e){const t=this._stringParseCache.get(e);if(t)return t;const i=Xs(e);if(this._stringParseCache.size>=8){const e=this._stringParseCache.keys().next().value;void 0!==e&&this._stringParseCache.delete(e)}return this._stringParseCache.set(e,i),i}return Xs(e)}}function Xs(e){if(!e)return[];if(Array.isArray(e))return e.map(e=>Ks(e)).filter(e=>Boolean(e));if("string"==typeof e)try{const t=JSON.parse(e);return Array.isArray(t)?t.map(e=>Ks(e)).filter(e=>Boolean(e)):[Ks(e)].filter(e=>Boolean(e))}catch{return[Ks(e)].filter(e=>Boolean(e))}return[]}const Js=()=>!1;function Qs(e){if(!e?.media_content_id)return null;const t=String(e.media_content_id);return t?{id:t,title:String(e.title??""),cls:String(e.media_class??""),mime:String(e.media_content_type??""),thumb:String(e.thumbnail??"")}:null}function er(e){const t=String(e.title??"").toLowerCase(),i=String(e.media_content_type??"").toLowerCase(),n=String(e.media_class??"").toLowerCase();return!!i.startsWith("image/")||(!!i.startsWith("video/")||(!!/\.(jpg|jpeg|png|webp|gif)$/i.test(t)||(!!/\.(mp4|webm|mov|m4v)$/i.test(t)||("image"===n||"video"===n))))}async function tr(e,t,i){const n=new Array(e.length).fill(null);let s=0;const r=[],o=async()=>{for(;;){const i=s++;if(i>=e.length)return;const r=e[i];try{n[i]=void 0===r?null:await t(r)}catch{n[i]=null}}};for(let t=0;t<Math.min(i,e.length);t++)r.push(o());return await Promise.all(r),n}async function ir(e,t,i,n={}){const s=n.isStale??Js;return e.length?0===t.directoryDepth?async function(e,t,i,n){const s=[],r=new Map,o=new Set;return await tr(e,async e=>{const a=await i(e);if(n())return null;const l=Array.isArray(a?.children)?a.children:[];for(const i of l){if(!i||!er(i))continue;const n=Qs(i);if(!n)continue;const l=Ui(n.id,t)??Ui(n.title,t);if(l){const t=Zi(l);if(t){n.dtMs=sr(l);const i=`${e}\0${t}`;o.has(i)||(o.add(i),r.has(t)||r.set(t,[]),r.get(t).push({leafId:e,leafName:String(a?.title??""),dayKey:t}))}}s.push(n)}return null},8),{isLazy:!1,calendar:nr(r),eagerItems:s}}(e,t,i,s):async function(e,t,i,n){let s=e.map(e=>({id:e,depth:0,accumulated:{}}));const r=t.directoryDepth-1,o=new Map;for(;s.length>0;){if(n())return{isLazy:!0,calendar:nr(o),eagerItems:[]};const e=await tr(s,async e=>{const t=await i(e.id);return t?{depth:e.depth,node:t,accumulated:e.accumulated}:null},8),a=[];for(const i of e){if(!i)continue;const e=Array.isArray(i.node.children)?i.node.children:[];for(const n of e){if(!n||!n.media_content_id)continue;const e=String(n.title??""),s=Wi(e,t,i.depth);if(!s)continue;const l=Gi(i.accumulated,s);if(i.depth===r){const t=Zi(l);if(!t)continue;const i={leafId:String(n.media_content_id),leafName:e,dayKey:t};o.has(t)||o.set(t,[]),o.get(t).push(i)}else a.push({id:String(n.media_content_id),depth:i.depth+1,accumulated:l})}}s=a}return{isLazy:!0,calendar:nr(o),eagerItems:[]}}(e,t,i,s):{isLazy:!1,calendar:nr(new Map),eagerItems:[]}}function nr(e){const t=Array.from(e.keys()).sort((e,t)=>e<t?1:e>t?-1:0);return{byDay:e,days:t}}function sr(e){return void 0===e.year||void 0===e.month||void 0===e.day?0:new Date(e.year,e.month-1,e.day,e.hour??0,e.minute??0,e.second??0).getTime()}const rr=e=>Number(e?.top_score??e?.score??0),or=e=>{const t=String(e?.camera??""),i=String(e?.label??"");return t&&i?`${t} ${i}`:null};function ar(e,t){if(!Number.isFinite(t)||t<=0||e.length<2)return e.map(e=>({rep:e,members:[e]}));const i=[],n=[];for(const t of e){Number(t?.start_time??0)>0&&null!==or(t)?i.push(t):n.push(t)}i.sort((e,t)=>Number(e?.start_time??0)-Number(t?.start_time??0));const s=[];let r=[],o=null;const a=()=>{if(0===r.length)return;let e=r[0],t=rr(e);for(let i=1;i<r.length;i++){const n=rr(r[i]);n>t&&(t=n,e=r[i])}s.push({rep:e,members:r}),r=[],o=null};for(const e of i){const i=or(e),n=Number(e?.start_time??0);if(r.length>0&&o===i){if(n-Number(r[r.length-1]?.start_time??0)<=t){r.push(e);continue}}a(),r.push(e),o=i}a();for(const e of n)s.push({rep:e,members:[e]});return s}const lr=/^media-source:\/\/reolink\/CAM\|([^|]+)\|(\d+)$/,cr=/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,dr=/^(\d{1,2}):(\d{2}):(\d{2})\b/;function hr(e){return null!=e&&String(e).startsWith("media-source://reolink/")}function pr(e){if(!hr(e))return null;const t=lr.exec(e);if(t){const[,e,i]=t;return`media-source://reolink/RES|${e}|${i}|main`}return e}function ur(e){const t=cr.exec(String(e??"").trim());if(!t)return null;const i=Number(t[1]),n=Number(t[2]),s=Number(t[3]);return function(e,t,i){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(i))return!1;if(t<1||t>12||i<1||i>31)return!1;const n=new Date(e,t-1,i);return n.getFullYear()===e&&n.getMonth()+1===t&&n.getDate()===i}(i,n,s)?{year:i,month:n,day:s}:null}function mr(e){const t=String(e??"").trim();if(!t)return null;const i=t.split(/\s+/)[0],n=i?dr.exec(i):null;return n?{hour:Number(n[1]),minute:Number(n[2]),second:Number(n[3])}:null}function gr(e,t,i){return`${e}-${String(t).padStart(2,"0")}-${String(i).padStart(2,"0")}`}async function fr(e,t,i,n={}){const s=n.isStale??(()=>!1),r=e.byDay.get(t)??[];if(0===r.length)return[];const o=[],[a,l,c]=t.split("-"),d=Number(a),h=Number(l),p=Number(c);for(const e of r){if(s())break;const t=await i(e.leafId);if(!t||s())continue;const n=Array.isArray(t.children)?t.children:[];for(const e of n){if(!e?.media_content_id)continue;const t=String(e.title??""),i=mr(t),n=i?new Date(d,h-1,p,i.hour,i.minute,i.second).getTime():0,s={id:String(e.media_content_id),title:t,cls:String(e.media_class??"video"),mime:String(e.media_content_type??"video/mp4"),thumb:String(e.thumbnail??""),...n?{dtMs:n}:{}};o.push(s)}}return o.sort((e,t)=>(t.dtMs??0)-(e.dtMs??0)),o}const vr=e=>({src:e}),_r=()=>({pathFormat:""});function br(e){return String(e??"").startsWith("media-source://")}function yr(e){const t=Array.isArray(e)?e:[];return t.length?t.slice().sort((e,t)=>e<t?-1:e>t?1:0).join(" | "):""}const wr=3e4,xr="__cgc_undated__";function kr(e,t){try{const i={ts:Date.now(),items:[...t]};localStorage.setItem(e,JSON.stringify(i))}catch{}}const Sr=new Map;let $r=!1;const Cr=()=>{$r=!1;for(const[e,t]of Sr)kr(e,t);Sr.clear()};function Ar(e){try{const t=localStorage.getItem(e);if(!t)return null;const i=JSON.parse(t);return i&&Array.isArray(i.items)?Date.now()-(i.ts??0)>18e5?null:{items:i.items,ts:i.ts}:null}catch{return null}}class Lr{constructor(e={}){this.state={key:"",list:[],listIndex:new Map,pairedThumbs:new Map,loadedAt:0,loading:!1,roots:[],urlCache:new Map,calendar:{byDay:new Map,days:[]},dayCache:new Map,frigateItems:[],clusterMeta:new Map},this.resolveInFlight=!1,this.resolveQueued=new Set,this.resolveFailed=new Map,this.browseTtlCache=new Map,this.frigateSnapshots=[],this._snapshotIndexByStem=new Map,this._snapshotIndexFor=null,this.snapshotCache=new Map,this._hass=null,this._config=null,this._loadGeneration=0,this._prevRootsKey="",this._prevFrigateUrl="",this._prevPathFormat="",this._compiledPathFormat=void 0,this._dayInFlight=new Map,this._onChange=e.onChange,this._getDtOpts=e.getDtOpts??_r,this._resolveItemMs=e.resolveItemMs}setHass(e){this._hass=e}load(e){this._config=e;const t=yr(e?.media_sources??[]),i=String(e?.frigate_url??""),n=String(e?.path_datetime_format??"");t===this._prevRootsKey&&i===this._prevFrigateUrl&&n===this._prevPathFormat||(this.clearForNewRoots(),this._prevRootsKey=t,this._prevFrigateUrl=i,this._prevPathFormat=n,this._compiledPathFormat=void 0)}_getCompiledPathFormat(){if(void 0!==this._compiledPathFormat)return this._compiledPathFormat;const e=this._config?.path_datetime_format??"";return this._compiledPathFormat=Ni(e),this._compiledPathFormat}clearForNewRoots(){this._loadGeneration++,this.state.key="",this.setList([]),this.state.loadedAt=0,this.state.loading=!1,this.state.roots=[],this.state.urlCache=new Map,this.resolveFailed=new Map,this.frigateSnapshots=[],this.state.frigateItems=[],this.snapshotCache.clear(),this.browseTtlCache.clear(),this.state.calendar={byDay:new Map,days:[]},this.state.dayCache=new Map,this._dayInFlight.clear()}clearResolveFailed(){this.resolveFailed=new Map}isResolveFailed(e){const t=this.resolveFailed.get(e);return void 0!==t&&(!(Date.now()-t>6e4)||(this.resolveFailed.delete(e),!1))}invalidate(){this.state.loadedAt=0}setList(e){const{items:t,pairedThumbs:i}=function(e){return Os(e,e=>e?.id)}(Array.isArray(e)?[...e]:[]);this.state.list=t,this.state.listIndex=new Map(t.map(e=>[e.id,e])),this.state.pairedThumbs=i}getIds(){return Array.isArray(this.state.list)?this.state.list.map(e=>e.id):[]}getItems(e=vr){return Us(this.getIds()).map(t=>e(String(t)))}getMetaById(e){let t=this.state.listIndex.get(e);if(!t)for(const i of this.state.clusterMeta.values()){const n=i.members.find(t=>t.id===e);if(n){t=n;break}}return t?{cls:t.cls||"",mime:t.mime||"",title:t.title||"",thumb:t.thumb||""}:{cls:"",mime:"",title:"",thumb:""}}getDtMsForId(e){const t=this.state.listIndex.get(e)?.dtMs;return"number"==typeof t&&Number.isFinite(t)?t:null}getTitleById(e){return this.state.listIndex.get(e)?.title??""}getUrlCache(){return this.state.urlCache}getClusterMeta(e){return this.state.clusterMeta.get(e)??null}getPairedThumbs(){return this.state.pairedThumbs}isLoading(){if(this.state.loading)return!0;const e=this._config?.media_sources;return!!(0===this.state.loadedAt&&Array.isArray(e)&&e.length>0)}async resolve(e){const t=this.state.urlCache.get(e);if(t)return t;if(!this._hass)return this.resolveFailed.set(e,Date.now()),"";let i;try{i=await this._wsWithTimeout({type:"media_source/resolve_media",media_content_id:e,expires:3600},12e3)}catch{return this.resolveFailed.set(e,Date.now()),""}const n=i?.url?String(i.url):"";return n?(this.state.urlCache.set(e,n),this._fireChange()):this.resolveFailed.set(e,Date.now()),n}queueResolve(e){for(const t of e??[])t&&(this.state.urlCache.has(t)||this.isResolveFailed(t)||this.resolveQueued.add(t));this.resolveInFlight||(this.resolveInFlight=!0,(async()=>{try{for(;this.resolveQueued.size;){const e=Array.from(this.resolveQueued).slice(0,32);e.forEach(e=>this.resolveQueued.delete(e)),await Promise.allSettled(e.map(e=>this.resolve(e))),this._fireChange()}}finally{this.resolveInFlight=!1}})().catch(()=>{this.resolveInFlight=!1}))}_buildSnapshotIndex(){const e=new Map;for(const t of this.frigateSnapshots){const i=(String(t?.id??"").split("/").pop()?.toLowerCase()??"").replace(/\.(jpg|jpeg|png|webp)$/i,"");i&&!e.has(i)&&e.set(i,t)}this._snapshotIndexByStem=e,this._snapshotIndexFor=this.frigateSnapshots}findMatchingSnapshotMediaId(e){const t=String(e??"").trim();if(!t)return"";if(this.snapshotCache.has(t))return this.snapshotCache.get(t)??"";const i=(t.split("/").pop()??"").toLowerCase().replace(/\.(mp4|webm|mov|m4v)$/i,"");if(!i)return this.snapshotCache.set(t,""),"";const n=this.frigateSnapshots;if(!n.length)return this.snapshotCache.set(t,""),"";this._snapshotIndexFor!==n&&this._buildSnapshotIndex();let s=this._snapshotIndexByStem.get(i);if(s||(s=n.find(e=>String(e?.id??"").toLowerCase().includes(i))),!s&&this._resolveItemMs){const e=this._resolveItemMs(t);if(Number.isFinite(e)){let t=null,i=1/0;for(const s of n){const n=Number(s?.dtMs);if(!Number.isFinite(n))continue;const r=Math.abs(n-e);r<i&&(t=s,i=r)}t&&i<=15e3&&(s=t)}}const r=s?.id??"";return this.snapshotCache.set(t,r),r}async ensureLoaded(){const e=this._config;if(!this._hass||!e)return;const t=Array.isArray(e.media_sources)?e.media_sources:[];if(!t.length)return;const i=e.frigate_url,n=!!this.state.frigateApiFailed&&Date.now()-(this.state.frigateApiFailedAt??0)<3e5;if(i&&t.some(is)&&!n)return void await this._loadFrigateApiPath(i,e);const s=t.filter(is),r=t.filter(e=>!is(e)&&hr(e)),o=t.filter(e=>!is(e)&&!hr(e));let a=[];s.length>0&&(a=await this._fetchFrigateWsItems(s,e)),this.state.frigateItems=a,r.length>0?await this._loadReolinkPath(r):o.length>0&&await this._loadCalendarPath(o),a.length>0?(0===this.state.list.length&&this._refreshList(),this.state.loadedAt=Date.now(),this._fireChange()):s.length>0&&0===o.length&&(this.setList([]),this.state.loadedAt=Date.now(),this._fireChange())}async _fetchFrigateWsItems(e,t){const i=!!t.frigate_thumb_bbox,n=!!t.frigate_event_cluster,s=Number(t.frigate_event_cluster_gap_sec)||0,r=this._hass;if(!r)return[];const o=[],a=new Set;this.state.clusterMeta.clear();const l=(e,t)=>{const n=String(e?.id??"");if(!n)return null;const s=String(e?.camera??"");if(!s)return null;const r=`${es}/${t}/event/clips/${s}/${n}`,o=Number(e?.start_time??0),a=Number.isFinite(o)&&o>0?Math.round(1e3*o):rs(r)??0;if(!a)return null;const l=String(e?.label??"");return{id:r,title:[new Date(a).toLocaleString(),s,l].filter(Boolean).join(" — "),cls:"video",mime:"video/mp4",thumb:i?`/api/frigate/${t}/notifications/${n}/snapshot.jpg?bbox=1&height=200`:`/api/frigate/${t}/notifications/${n}/thumbnail.jpg`,dtMs:a}};for(const t of e){const e=ls(t);if(!e)continue;const i=await as(r,e,1e4);if(!i)continue;const c=n?ar(i,s):i.map(e=>({rep:e,members:[e]}));for(const t of c){const i=l(t.rep,e);if(i&&(!a.has(i.id)&&(a.add(i.id),o.push(i),t.members.length>1))){const n=[];for(const i of t.members){const t=l(i,e);t&&n.push(t)}this.state.clusterMeta.set(i.id,{count:n.length,members:n})}}}return o.sort((e,t)=>(t.dtMs??0)-(e.dtMs??0)),o}async _loadFrigateApiPath(e,t){const i=t.max_media??ki,n=`frigate_api:${e}:${i}`,s=this.state.key===n,r=s&&Date.now()-(this.state.loadedAt??0)<wr;if(this.state.loading||r)return;s||(this.state.key=n,this.setList([]),this.state.urlCache=new Map,this.resolveFailed=new Map,this.state.frigateApiFailed=!1,this.state.frigateApiFailedAt=0),this.state.loading=!0;const o=this._loadGeneration;try{const n=await this._loadFrigateApi(e,t);if(this._isStale(o))return;if(null===n)return this.state.frigateApiFailed=!0,this.state.frigateApiFailedAt=Date.now(),this.state.loading=!1,void setTimeout(()=>{this.ensureLoaded()},0);this.setList(n.slice(0,i)),this.state.loadedAt=Date.now()}catch(e){if(this._isStale(o))return;console.warn("CGC Frigate API load failed:",e),this.state.frigateApiFailed=!0,this.state.frigateApiFailedAt=Date.now(),this.setList([])}finally{this._isStale(o)||(this.state.loading=!1,this._fireChange())}}async _loadFrigateApi(e,t){let i=String(e??"").trim().replace(/\/+$/,"");if(!i)return null;/^https?:\/\//i.test(i)||(i="http://"+i);const n=Math.min(500,Math.max(2*(t.max_media??ki),100)),s=await async function(e,t,i={}){const n=String(e??"").trim().replace(/\/+$/,"");if(!n)return null;const s=i.timeoutMs??15e3,r=new AbortController,o=setTimeout(()=>r.abort(),s);try{const e=await fetch(`${n}/api/events?limit=${t}`,{signal:r.signal});if(!e.ok)return null;const i=await e.json();return Array.isArray(i)?i:null}catch{return null}finally{clearTimeout(o)}}(i,n);if(!s)return null;const r=!!t.frigate_event_cluster,o=Number(t.frigate_event_cluster_gap_sec)||0,a=r?ar(s,o):s.map(e=>({rep:e,members:[e]}));this.state.clusterMeta.clear();const l=e=>{const n=function(e,t,i){const n=String(e?.id||"");if(!n)return null;const s=String(t??"").trim().replace(/\/+$/,""),r=`${s}/api/events/${n}/clip.mp4`,o=i?.bbox?`${s}/api/events/${n}/snapshot.jpg?bbox=1&height=200`:`${s}/api/events/${n}/thumbnail.jpg`,a=Number(e.start_time),l=Number.isFinite(a)&&a>0?Math.round(1e3*a):0,c=String(e.label||""),d=String(e.camera||"");return{item:{cls:"video",id:n,mime:"video/mp4",title:[l?new Date(l).toLocaleString():"",d,c].filter(Boolean).join(" — "),thumb:o,...l?{dtMs:l}:{}},clipUrl:r}}(e,i,{bbox:!!t.frigate_thumb_bbox});return n?(this.state.urlCache.set(n.item.id,n.clipUrl),n.item):null},c=[];for(const e of a){const t=l(e.rep);if(t&&(c.push(t),e.members.length>1)){const i=[];for(const t of e.members){const e=l(t);e&&i.push(e)}this.state.clusterMeta.set(t.id,{count:i.length,members:i})}}return c}async _loadReolinkPath(e){const t=Date.now(),i=`reolink:${yr(e)}`,n=this.state.key===i,s=n&&t-(this.state.loadedAt??0)<wr;if(this.state.loading||s)return;n||(this.state.key=i,this.setList([]),this.state.roots=e.slice(),this.state.urlCache=new Map,this.resolveFailed=new Map,this.state.dayCache=new Map),this.state.loading=!0;const r=this._loadGeneration,o=e=>this._browse(e);try{const t=await async function(e,t,i={}){const n=i.isStale??(()=>!1),s=new Map;for(const i of e){if(n())break;const e=pr(i);if(!e)continue;const r=await t(e);if(!r||n())continue;const o=Array.isArray(r.children)?r.children:[];for(const e of o){if(!e?.media_content_id)continue;const t=String(e.title??""),i=ur(t);if(!i)continue;const n=gr(i.year,i.month,i.day);s.has(n)||s.set(n,[]),s.get(n).push({leafId:String(e.media_content_id),leafName:t,dayKey:n})}}const r=Array.from(s.keys()).sort((e,t)=>e<t?1:e>t?-1:0);return{byDay:s,days:r}}(e,o,{isStale:()=>this._isStale(r)});if(this._isStale(r))return;this.state.calendar=t;const i=t.days[0];if(i){const e=await fr(t,i,o,{isStale:()=>this._isStale(r)});if(this._isStale(r))return;this.state.dayCache.set(i,e),this._refreshList()}this.state.loadedAt=Date.now()}catch(e){if(this._isStale(r))return;console.warn("Reolink walk failed:",e)}finally{this._isStale(r)||(this.state.loading=!1,this._fireChange())}}async _loadCalendarPath(e){const t=Date.now(),i=yr(e),n=this.state.key===i,s=n&&t-(this.state.loadedAt??0)<wr;if(this.state.loading||s)return;const r=this._getCompiledPathFormat();if(!r)return this.state.calendar={byDay:new Map,days:[]},this.state.dayCache=new Map,this.setList([]),this.state.loadedAt=Date.now(),void this._fireChange();n||(this.state.key=i,this.setList([]),this.state.roots=e.slice(),this.state.urlCache=new Map,this.resolveFailed=new Map,this.state.dayCache=new Map),this.state.loading=!0;const o=this._loadGeneration,a=e=>this._browse(e),l=e.some(is)?this._loadFrigateSnapshots(a).catch(e=>(console.warn("Frigate snapshots load failed:",e),[])):Promise.resolve([]),c=this._calendarCacheKey(e,r),d=c?function(e){try{const t=localStorage.getItem(e);if(!t)return null;const i=JSON.parse(t);if(!i||!Array.isArray(i.byDay)||!Array.isArray(i.days))return null;if(Date.now()-(i.ts??0)>216e5)return null;const n=new Map;for(const[e,t]of i.byDay)"string"==typeof e&&Array.isArray(t)&&n.set(e,t.filter(e=>!!e?.leafId));return{calendar:{byDay:n,days:i.days},ts:i.ts}}catch{return null}}(c):null,h=r.directoryDepth>=1;let p=!1;if(d&&h){this.state.calendar=d.calendar;const e=d.calendar.days[0];if(e){const t=this._dayCacheKey(e),i=t?Ar(t):null;i&&(this.state.dayCache.set(e,this._sortDayItemsInPlace(i.items)),this._refreshList())}this._fireChange(),p=Date.now()-d.ts<36e5}try{let t;if(p&&d)t={isLazy:!0,calendar:d.calendar,eagerItems:[]};else{if(t=await ir(e,r,a,{isStale:()=>this._isStale(o)}),this._isStale(o))return;if(d)for(const[e,i]of this.state.dayCache.entries())0===i.length&&t.calendar.byDay.has(e)&&this.state.dayCache.delete(e);this.state.calendar=t.calendar,c&&h&&function(e,t){try{const i={ts:Date.now(),byDay:Array.from(t.byDay.entries()).map(([e,t])=>[e,t.map(e=>({...e}))]),days:[...t.days]};localStorage.setItem(e,JSON.stringify(i))}catch{}}(c,t.calendar)}if(t.isLazy){const e=t.calendar.days[0];if(e&&await this._loadDayInternal(e,t.calendar,r,a,o),this._isStale(o))return;this._refreshList()}else{const e=new Map;for(const i of t.eagerItems){const t=(void 0!==i.dtMs?nn(i.dtMs):null)??xr;e.has(t)||e.set(t,[]),e.get(t).push(i)}for(const t of e.values())this._sortDayItemsInPlace(t);this.state.dayCache=e,this._refreshList()}const i=await l;if(this._isStale(o))return;this.frigateSnapshots=i,this.snapshotCache.clear(),this.state.loadedAt=Date.now()}catch(t){if(this._isStale(o))return;console.warn("MS ensure load failed:",t),console.warn("MS roots used:",e),this.setList([])}finally{this._isStale(o)||(this.state.loading=!1,this._fireChange())}}async ensureDayLoaded(e){if(!e)return;if(this.state.dayCache.has(e))return;const t=this._dayInFlight.get(e);if(t)return t;if(!this._config)return;const i=e=>this._browse(e),n=this._loadGeneration,s=this.state.calendar,r=s.byDay.get(e),o=r&&r.length>0?r[0]?.leafId:void 0;let a;if(!!o&&hr(o))a=this._loadReolinkDayInternal(e,s,i,n);else{const t=this._getCompiledPathFormat();if(!t)return;a=this._loadDayInternal(e,s,t,i,n)}this._dayInFlight.set(e,a);try{await a}finally{this._dayInFlight.delete(e)}}async _loadReolinkDayInternal(e,t,i,n){if(!t.byDay.has(e))return void this.state.dayCache.set(e,[]);const s=await fr(t,e,i,{isStale:()=>this._isStale(n)});this._isStale(n)||(this._sortDayItemsInPlace(s),this.state.dayCache.set(e,s),this._refreshList(),this._fireChange())}async _loadDayInternal(e,t,i,n,s){if(!i)return;if(!t.byDay.has(e))return void this.state.dayCache.set(e,[]);const r=this._dayCacheKey(e),o=r?Ar(r):null;if(o&&(this.state.dayCache.set(e,this._sortDayItemsInPlace(o.items)),this._refreshList(),this._fireChange(),Date.now()-o.ts<3e5))return;const a=await async function(e,t,i,n,s={}){const r=s.isStale??Js,o=e.byDay.get(t)??[];if(0===o.length)return[];const a=await tr(o,async e=>{const t=await n(e.leafId);if(r()||!t)return null;const s=[],o=Array.isArray(t.children)?t.children:[];for(const e of o){if(!e||!er(e))continue;const t=Qs(e);if(!t)continue;const n=Ui(t.id,i)??Ui(t.title,i);n&&(t.dtMs=sr(n)),s.push(t)}return s},8),l=[];for(const e of a)e&&l.push(...e);return l}(t,e,i,n,{isStale:()=>this._isStale(s)});this._isStale(s)||(this._sortDayItemsInPlace(a),this.state.dayCache.set(e,a),r&&((e,t)=>{const i=t.map(e=>({...e}));if(Sr.set(e,i),$r)return;$r=!0;const n="undefined"!=typeof globalThis?globalThis.requestIdleCallback:void 0;"function"==typeof n?n(Cr,{timeout:1e3}):setTimeout(Cr,0)})(r,a),this._refreshList(),this._fireChange())}_formatSignature(e){return e?e.segments.map(e=>e.raw).join("/"):""}_dayCacheKey(e){const t=this._config;if(!t)return null;const i=yr(t.media_sources??[]),n=this._formatSignature(this._getCompiledPathFormat()),s=String(t.frigate_url??"");return i&&n&&e?`cgc_msday1_${Hs(`${i}|${n}|${s}|${e}`)}`:null}_calendarCacheKey(e,t){const i=yr(e),n=this._formatSignature(t),s=String(this._config?.frigate_url??"");return i&&n?`cgc_mscal1_${Hs(`${i}|${n}|${s}`)}`:null}_sortDayItemsInPlace(e){return e.sort((e,t)=>{const i=e.dtMs??0,n=t.dtMs??0;return n!==i?n-i:e.title<t.title?1:e.title>t.title?-1:0}),e}_refreshList(){const e=[];let t=!1;for(const i of this.state.dayCache.keys())i===xr?t=!0:e.push(i);e.sort((e,t)=>e<t?1:e>t?-1:0);const i=[];for(const t of e){const e=this.state.dayCache.get(t);e&&e.length&&i.push(...e)}if(t){const e=this.state.dayCache.get(xr);e&&e.length&&i.push(...e)}this.state.frigateItems.length>0&&(i.push(...this.state.frigateItems),i.sort((e,t)=>(t.dtMs??0)-(e.dtMs??0))),this.setList(Us(i))}getDays(){return this.state.calendar.days}_isStale(e){return e!==this._loadGeneration}async _loadFrigateSnapshots(e){const t=this._getDtOpts(),i=await e(ts),n=Array.isArray(i?.children)?i.children:[],s=[],r=[];for(const e of n)e?.media_content_id&&(e.can_expand?r.length<32&&r.push(String(e.media_content_id)):s.push(e));const o=await Promise.all(r.map(async t=>{try{const i=await e(t);return Array.isArray(i?.children)?i.children:[]}catch{return[]}}));for(const e of o)s.push(...e);return s.map(e=>{if(!e?.media_content_id)return null;const i=String(e.media_content_id);if(!i)return null;const n=String(e.title??""),s=rs(i),r=null!==s?s:tn(n||i,t),o=Number.isFinite(r)?nn(r):(a=n||i,l=t,en(a,l)?.dayKey??null);var a,l;return{id:i,title:n,mime:String(e.media_content_type??""),cls:String(e.media_class??""),thumb:String(e.thumbnail??""),...null!==r?{dtMs:r}:{},dayKey:o}}).filter(e=>null!==e)}async _browse(e){const t=this.browseTtlCache.get(e);if(t&&Date.now()-t.ts<36e5)return this.browseTtlCache.delete(e),this.browseTtlCache.set(e,t),t.data;const i=await this._wsWithTimeout({type:"media_source/browse_media",media_content_id:e},1e4);if(this.browseTtlCache.size>=256){const e=this.browseTtlCache.keys().next().value;void 0!==e&&this.browseTtlCache.delete(e)}return this.browseTtlCache.set(e,{ts:Date.now(),data:i}),i}async _wsWithTimeout(e,t){if(!this._hass)throw new Error("MediaSourceClient: hass not set");const i=this._hass.callWS(e),n=new Promise((i,n)=>setTimeout(()=>n(new Error(`WS timeout: ${e.type??"?"}`)),t));return Promise.race([i,n])}_fireChange(){this._onChange?.()}}const Mr="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><g transform="translate(0,1024) scale(0.1,-0.1)" fill="#1652F0"><path d="M2535 8071 c-7 -12 -7 -3810 0 -3821 3 -5 312 -9 686 -10 l680 0 82 -24 c45 -13 96 -31 112 -40 17 -9 34 -16 38 -16 4 0 20 -8 35 -18 15 -11 46 -31 69 -47 49 -32 221 -203 1338 -1330 729 -736 885 -885 924 -885 6 0 24 -8 38 -17 25 -17 82 -18 765 -21 501 -2 738 1 738 8 0 5 -69 79 -152 163 -84 84 -522 526 -972 982 -451 457 -1003 1015 -1227 1240 -224 226 -540 543 -701 706 -239 241 -303 301 -350 323 -31 15 -59 30 -62 34 -4 3 -41 16 -84 29 -74 21 -92 22 -457 23 -283 0 -384 3 -393 12 -9 9 -12 200 -12 799 0 660 2 788 14 798 10 9 290 11 1107 8 l1094 -3 78 -26 c43 -15 84 -31 90 -36 7 -5 23 -13 36 -17 42 -13 143 -88 210 -157 94 -94 87 -85 151 -203 26 -48 58 -133 72 -195 13 -58 13 -282 0 -340 -33 -146 -106 -280 -207 -384 -113 -116 -196 -169 -355 -224 -73 -25 -84 -26 -350 -29 -176 -2 -276 -7 -278 -13 -2 -6 7 -19 20 -30 14 -10 49 -43 79 -73 30 -30 238 -240 463 -466 224 -226 416 -415 425 -420 21 -12 99 15 241 82 90 42 282 160 321 197 10 8 37 31 60 50 143 115 372 378 420 483 6 12 21 40 34 62 14 22 29 51 35 65 23 53 52 116 62 134 5 10 19 44 30 75 150 431 150 891 -1 1325 -12 32 -25 64 -30 70 -5 6 -12 25 -15 43 -4 17 -13 37 -21 43 -8 6 -17 25 -20 41 -4 16 -11 31 -16 35 -5 3 -16 20 -24 37 -8 18 -20 41 -27 52 -7 11 -24 38 -37 60 -83 133 -263 332 -411 456 -106 88 -327 219 -450 268 -160 63 -231 84 -380 112 -58 11 -159 24 -225 29 -156 12 -3282 12 -3290 1z"/></g></svg>'),Pr=["YYYY/MM/DD/RLC_YYYYMMDDHHmmss","YYYY/MM/DD/YYYY-MM-DD_HH-mm-ss","YYYY/MM/DD/YYYYMMDD_HHmmss","YYYY/MM/DD/YYYYMMDDHHmmss","YYYY/MM/DD/HH-mm-ss","YYYY/MM/DD/HH_mm_ss","YYYY/MM/DD/HH.mm.ss","YYYY/MM/DD/HHmmss","YYYY-MM-DD/YYYY-MM-DD_HH-mm-ss","YYYY-MM-DD/YYYYMMDD_HHmmss","YYYY-MM-DD/HH-mm-ss","YYYY-MM-DD/HH_mm_ss","YYYY-MM-DD/HH.mm.ss","YYYY-MM-DD/HHmmss","YYYY-MM-DD/HH/MM.ss","YYYY-MM-DD/HH/MM-ss","YYYY-MM-DD/HH/HHmmss","YYYY/MM/DD/HH/MM.ss","YYYY/MM/DD/HH/HHmmss","YYYYMMDD/RLC_YYYYMMDDHHmmss","YYYYMMDD/YYYYMMDD_HHmmss","YYYYMMDD/YYYYMMDDHHmmss","YYYYMMDD/HH-mm-ss","YYYYMMDD/HHmmss","RLC_YYYYMMDDHHmmss","RLC_YYYYMMDD_HHmmss","YYYY-MM-DDTHH-mm-ss","YYYY-MM-DD-HH-mm-ss","YYYY-MM-DD_HH-mm-ss","YYYYMMDD_HHmmss","YYYYMMDD-HHmmss","YYYYMMDDHHmmss","YYYYMMDDHHmmss_YYYYMMDDHHmmss","YYYYMMDDHHmmss-YYYYMMDDHHmmss","HH.mm.ss-HH.mm.ss","X-X","X_X","X","x","MM\\/DD\\/YYYY HH:mm:ss","MM\\/DD\\/YY HH:mm:ss","DD\\/MM\\/YYYY HH:mm:ss","DD\\/MM\\/YY HH:mm:ss","YYYY-MM-DD HH:mm:ss"];function Tr(e){return e>=2010&&e<=(new Date).getFullYear()+1}async function zr(e,t){const i=[];let n=20;const s=[{id:e,depth:0}];for(;s.length&&n>0&&i.length<12;){const e=s.shift();if(e.depth>4)continue;let r;n--;try{r=await t(e.id)}catch{continue}if(!r)continue;const o=Array.isArray(r.children)?r.children:[],a=[];for(const t of o){if(!t?.media_content_id)continue;const n=String(t.media_content_id);if(t.can_expand&&e.depth<4)a.push({id:n,name:String(t.title??"").trim()});else if(i.length<12){i.push(n);const e=String(t.title??"").trim();e&&!n.includes(e)&&i.length<12&&i.push(e)}}a.sort((e,t)=>{const i=e.name.startsWith(".")||e.name.startsWith("_");if(i!==(t.name.startsWith(".")||t.name.startsWith("_")))return i?1:-1;const n=/^\d/.test(e.name);return n!==/^\d/.test(t.name)?n?-1:1:e.name<t.name?1:e.name>t.name?-1:0});for(let t=0;t<a.length&&t<2;t++){const i=a[t];i&&s.push({id:i.id,depth:e.depth+1})}}return i}function Er(e,t,i){const n=/[Xx]/.test(t);let s=0;for(const t of e){const e=Ui(t,i);if(e&&void 0!==e.year&&void 0!==e.month&&void 0!==e.day){if(n&&!Tr(e.year))continue;s++}}return s}const Ir=new Map;function Fr(e){const t=Ir.get(e);if(void 0!==t)return t;const i=Ni(e);return Ir.set(e,i),i}class Hr{constructor(e,t){this._sensor=e,this._media=t}setHass(e){}load(e){}getItems(e){const t=this._sensor.getItems(e),i=this._media.getItems(e);if(!i.length)return t;if(!t.length)return i;const n=new Set;for(const e of t){const t=Ys(e?.src??"");t&&n.add(t)}const s=t.slice();for(const e of i){const t=Ys(e?.src??"");t&&!n.has(t)&&s.push(e)}return s}isDeleteEligible(e){return this._sensor.getSrcEntityMap().has(e)}}function Dr(e,t){return!!e&&(!!is(e)&&(null!==os(e)&&null!==Zs(t?.frigate_delete_service)))}function Rr(e){const{src:t,config:i,srcEntityMap:n}=e;if(!t)return!1;if(Dr(t,i))return!0;const s=i?.source_mode;return("sensor"===s||"combined"===s)&&(!("combined"===s&&!n.has(t))&&null!==Zs(i?.delete_service))}async function jr(e){const{hass:t,src:i,config:n,srcEntityMap:s,confirm:r=Or}=e;if(!t)return!1;if(!Rr({src:i,config:n,srcEntityMap:s}))return!1;if(Dr(i,n)){const e=Zs(n?.frigate_delete_service);if(!e)return!1;const s=os(i);if(!s)return!1;if(n?.delete_confirm&&!r("Delete this Frigate event?"))return!1;const o=function(e){const t=String(e??"").match(/^media-source:\/\/frigate\/[^/]+\/event\/[^/]+\/([^/]+)\//);return t?.[1]??""}(i);try{return await t.callService(e.domain,e.service,{event_id:s,camera:o}),!0}catch{return!1}}const o=Zs(n?.delete_service);if(!o)return!1;const a=function(e){if(!e)return"";let t=String(e).trim();t=(t.split("?")[0]??"").split("#")[0]??"";try{(t.startsWith("http://")||t.startsWith("https://"))&&(t=new URL(t).pathname)}catch{}try{t=decodeURIComponent(t)}catch{}return t.startsWith("/local/")?"/config/www/"+t.slice(7):t.startsWith("/config/www/")?t:""}(i);if(!a||!a.startsWith(wi))return!1;if(n?.delete_confirm&&!r("Are you sure you want to delete this file?"))return!1;try{return await t.callService(o.domain,o.service,{path:a}),!0}catch{return!1}}function Or(e){return"undefined"!=typeof window&&"function"==typeof window.confirm&&window.confirm(e)}const Vr="posters",qr="undefined"!=typeof globalThis?globalThis.indexedDB:void 0;function Nr(e){return new Promise((t,i)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>i(e.error??new Error("IDB request failed"))})}const Br=new class{constructor(){this._db=null,this._initPromise=null,this._available=!0,this._writeQueue=new Map,this._writeFlushScheduled=!1}init(){return this._initPromise||(this._initPromise=(async()=>{if(qr)try{const e=await new Promise((e,t)=>{if(!qr)return void t(new Error("IndexedDB unavailable"));const i=qr.open("cgc-cache",2);i.onupgradeneeded=()=>{const e=i.result;e.objectStoreNames.contains(Vr)&&e.deleteObjectStore(Vr),e.createObjectStore(Vr,{keyPath:"key"}).createIndex("ts","ts",{unique:!1})},i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error??new Error("IDB open failed")),i.onblocked=()=>{try{console.info("posterStore: IDB upgrade blocked by another tab; will retry once it closes.")}catch{}}});e.onversionchange=()=>{try{e.close()}catch{}this._db=null,this._initPromise=null},e.onclose=()=>{this._db=null,this._initPromise=null},this._db=e}catch{this._available=!1,this._db=null}else this._available=!1})()),this._initPromise}isAvailable(){return this._available&&null!==this._db}_resetInit(){this._db=null,this._initPromise=null,this._available=!0}async readAll(){if(await this.init(),!this.isAvailable()||!this._db)return[];try{const e=this._db.transaction(Vr,"readonly").objectStore(Vr),t=await Nr(e.getAll());return Array.isArray(t)?t:[]}catch{return this._resetInit(),[]}}async set(e,t){await this.init(),this.isAvailable()&&this._db&&(this._writeQueue.set(e,{key:e,blob:t,ts:Date.now()}),this._scheduleFlush())}_scheduleFlush(){this._writeFlushScheduled||(this._writeFlushScheduled=!0,queueMicrotask(()=>{this._writeFlushScheduled=!1,this._flushWrites()}))}async _flushWrites(){if(0===this._writeQueue.size)return;if(!this.isAvailable()||!this._db)return void this._writeQueue.clear();const e=Array.from(this._writeQueue.values());this._writeQueue.clear();try{const t=this._db.transaction(Vr,"readwrite"),i=t.objectStore(Vr);for(const t of e)i.put(t);await new Promise((e,i)=>{t.oncomplete=()=>e(),t.onerror=()=>i(t.error??new Error("tx failed")),t.onabort=()=>i(t.error??new Error("tx aborted"))})}catch{this._resetInit()}}async touch(e){if(await this.init(),this.isAvailable()&&this._db)try{const t=this._db.transaction(Vr,"readwrite").objectStore(Vr),i=await Nr(t.get(e));if(!i)return;i.ts=Date.now(),await Nr(t.put(i))}catch{this._resetInit()}}async delete(e){if(await this.init(),this.isAvailable()&&this._db){this._writeQueue.delete(e);try{const t=this._db.transaction(Vr,"readwrite").objectStore(Vr);await Nr(t.delete(e))}catch{this._resetInit()}}}async evictExcess(e=500){if(await this.init(),this.isAvailable()&&this._db)try{const t=this._db.transaction(Vr,"readwrite").objectStore(Vr),i=await Nr(t.count());if(i<=e)return;const n=i-e;let s=0;const r=t.index("ts").openCursor();await new Promise((e,t)=>{r.onsuccess=()=>{const t=r.result;!t||s>=n?e():(t.delete(),s+=1,t.continue())},r.onerror=()=>t(r.error??new Error("cursor failed"))})}catch{this._resetInit()}}},Yr=/\.(mp4|webm|mov|m4v)$/i;function Ur(e){if(null==e)return!1;const t=String(e).split("?")[0]?.split("#")[0]??"";return Yr.test(t)}class Wr{constructor(){this.posters=[],this.resolveIds=new Set}addPoster(e,t){e&&this.posters.push(void 0===t?{url:e}:{url:e,stableKey:t})}addResolveId(e){e&&this.resolveIds.add(e)}get size(){return this.posters.length+this.resolveIds.size}}const Kr={create(e){try{return URL.createObjectURL(e)}catch{return null}},revoke(e){try{URL.revokeObjectURL(e)}catch{}}},Zr={capture:(e,t,i)=>new Promise((n,s)=>{const r=document.createElement("video");r.muted=!0,r.setAttribute("muted",""),r.playsInline=!0,r.preload="metadata";let o=!1,a=!1;const l="undefined"!=typeof performance?performance.now():Date.now(),c=new AbortController;let d=null;const h=()=>{null!==d&&clearTimeout(d),c.abort();try{r.pause()}catch{}try{r.removeAttribute("src"),r.load()}catch{}},p=e=>{o||(o=!0,h(),s(e))};i.addEventListener("abort",()=>p(new Error("aborted")),{once:!0});const u=()=>{if(!o)try{const e=r.videoWidth,i=r.videoHeight;if(!e||!i)return p(new Error("no video dimensions"));const s=Math.min(1,320/e),d=document.createElement("canvas");d.width=Math.max(1,Math.round(e*s)),d.height=Math.max(1,Math.round(i*s));const m=d.getContext("2d");if(!m)return p(new Error("no canvas context"));m.drawImage(r,0,0,d.width,d.height);const g=Number(t)||0,f=("undefined"!=typeof performance?performance.now():Date.now())-l;if(g>0||f>200){const e=((e,t,i)=>{try{const n=e.getImageData(0,0,t,i).data;let s=0,r=0,o=0,a=0;for(let e=0;e<n.length;e+=16){const t=n[e]??0,i=.299*t+.587*(n[e+1]??0)+.114*(n[e+2]??0);s+=i,r+=i*i,i<8&&o++,a++}if(!a)return!1;const l=s/a,c=r/a-l*l;return c<5||l<6&&c<30||o/a>.97}catch{return null}})(m,d.width,d.height);if(!0===e){if(!a&&g>0){a=!0,r.addEventListener("seeked",u,{once:!0,signal:c.signal});try{r.currentTime=.01}catch(e){return p(e instanceof Error?e:new Error("seek failed"))}return}return p(new Error("blank frame"))}}d.toBlob(e=>{if(!e)return p(new Error("toBlob returned null"));(e=>{o||(o=!0,h(),n(e))})(e)},"image/jpeg",.6)}catch(e){p(e instanceof Error?e:new Error("capture failed"))}};d=setTimeout(()=>p(new Error("poster timeout")),12e3),r.addEventListener("error",()=>{const e=new Error("video load error"),t=r.error?.code;void 0!==t&&(e.mediaErrorCode=t),p(e)},{once:!0,signal:c.signal}),r.addEventListener("loadedmetadata",()=>{const e=Number.isFinite(r.duration)&&r.duration>0?r.duration:0,i=Math.max(0,Math.min(100,Number(t)||0));let n=.01;e&&i>0&&(n=100===i?Math.max(.01,e-.05):e*(i/100));try{r.currentTime=n}catch{u()}},{once:!0,signal:c.signal}),r.addEventListener("seeked",u,{once:!0,signal:c.signal}),r.src=e;try{r.load()}catch{}})};class Gr{constructor(e){this._hass=null,this._posterCache=new Map,this._posterPending=new Set,this._posterInFlight=new Set,this._posterQueued=new Set,this._posterQueue=[],this._posterAttempts=new Map,this._posterStableKeys=new Map,this._posterMirror=new Map,this._ensureAborts=new Map,this._softRetryTimer=null,this._prewarmReadyPromise=null,this._prewarmDone=!1,this._config=null,this._inputs=e.inputs,this._store=e.store??Br,this._capture=e.capture??Zr,this._blobUrls=e.blobUrls??Kr,this._now=e.now??(()=>Date.now()),this._onChange=e.onChange,this._setTimeout=e.schedule?.setTimeout??((e,t)=>setTimeout(e,t)),this._clearTimeout=e.schedule?.clearTimeout??(e=>clearTimeout(e)),this._fetch=e.fetchFn??((...e)=>fetch(...e))}setHass(e){this._hass=e}load(e){this._config=e,this._abortAllInFlight(),this._posterQueue=[],this._posterQueued.clear(),this._posterInFlight.clear(),this._posterPending.clear(),this._posterAttempts.clear(),this._posterStableKeys.clear(),null!==this._softRetryTimer&&(this._clearTimeout(this._softRetryTimer),this._softRetryTimer=null),this._posterCache.clear()}prewarm(){return this._prewarmReadyPromise||(this._prewarmReadyPromise=this._store.readAll().then(e=>{for(const t of e)this._posterMirror.has(t.key)||this._posterMirror.set(t.key,{src:t.key,blob:t.blob,url:null})}).catch(()=>{}).finally(()=>{this._prewarmDone=!0,this._onChange?.()}),this._store.evictExcess(500).catch(()=>{})),this._prewarmReadyPromise}reset(){this._abortAllInFlight(),this._posterQueue=[],this._posterQueued.clear(),this._posterInFlight.clear(),this._posterPending.clear(),this._posterAttempts.clear(),this._posterStableKeys.clear(),null!==this._softRetryTimer&&(this._clearTimeout(this._softRetryTimer),this._softRetryTimer=null)}clearPosterCache(){this.reset(),this._posterCache.clear()}dispose(){this._abortAllInFlight(),null!==this._softRetryTimer&&(this._clearTimeout(this._softRetryTimer),this._softRetryTimer=null);for(const e of this._posterMirror.values())e.url&&this._blobUrls.revoke(e.url),e.url=null}isPrewarmDone(){return this._prewarmDone}getPosterUrl(e){return this._posterCache.get(e)}isPosterBusy(e){return this._posterPending.has(e)||this._posterInFlight.has(e)||this._posterQueued.has(e)}isHardFailed(e){const t=this._posterAttempts.get(e);return!!t&&(t.hard||t.count>=3)}isCoolingDown(e){const t=this._posterAttempts.get(e);if(!t||t.hard)return!1;if(0===t.count)return!1;const i=1===t.count?2e3:3e4;return this._now()-t.lastAt<i}recordFailure(e,t={}){const i=t.hard??!1,n=this._posterAttempts.get(e),s=(n?.count??0)+1,r=i||s>=3;this._posterAttempts.set(e,{count:s,lastAt:this._now(),hard:r}),r||this._scheduleSoftRetryRender()}clearFailure(e){this._posterAttempts.delete(e)}onThumbImgError(e){e&&(this.isHardFailed(e)||(this.recordFailure(e,{hard:!0}),this._onChange?.()))}enqueue(e,t){const i=String(e??"").trim();if(i&&!(hr(t??i)||/^\/api\/reolink\//i.test(i)||(t&&t!==i&&this._posterStableKeys.set(i,t),this._posterCache.has(i)||this._posterPending.has(i)||this._posterQueued.has(i)||this._posterInFlight.has(i)||this.isHardFailed(i)||this.isCoolingDown(i)))){for(this._posterQueued.add(i),this._posterQueue.push(i);this._posterQueue.length>100;){const e=this._posterQueue.shift();void 0!==e&&this._posterQueued.delete(e)}this._drain()}}drain(){this._drain()}_drain(){for(;this._posterInFlight.size<gi&&this._posterQueue.length>0;){const e=this._posterQueue.shift();if(void 0===e)break;this._posterQueued.delete(e),this._posterCache.has(e)||(this._posterPending.has(e)||this.isHardFailed(e)||this.isCoolingDown(e)||(this._posterInFlight.add(e),this._ensurePoster(e).catch(()=>{}).finally(()=>{this._posterInFlight.delete(e),this._drain()})))}}_scheduleSoftRetryRender(){if(null!==this._softRetryTimer)return;let e=1/0;const t=this._now();for(const t of this._posterAttempts.values()){if(t.hard)continue;const i=1===t.count?2e3:3e4,n=t.lastAt+i;n<e&&(e=n)}if(e===1/0)return;const i=Math.max(100,e-t+100);this._softRetryTimer=this._setTimeout(()=>{this._softRetryTimer=null,this._onChange?.(),this._scheduleSoftRetryRender()},i)}resolveVideoPoster(e,t,i,n,s){const r=this._inputs.captureAllowed();if(!t){const t=this._inputs.getSensorPairedThumbs().get(e.src);if(t)return this._posterCache.get(t)??"";const i=this._posterCache.get(e.src);if(i)return i;const n=this._lsThumbGet(e.src);return n?(this._posterCache.set(e.src,n),n):(r&&this._inputs.isRevealed(e.src)&&s.addPoster(e.src),"")}if(this._inputs.hasFrigate()){const t=this._inputs.findMatchingSnapshotMediaId(e.src);if(t){if(this._inputs.isResolveFailed(t))return"";const e=this._inputs.getMediaUrlCache().get(t)??"";if(e)return e;s.addResolveId(t)}}const o=this._inputs.getMediaPairedThumbs().get(e.src);if(o&&!this._inputs.isResolveFailed(o)){const e=this._inputs.getMediaUrlCache().get(o)??"";if(e){const t=this._posterCache.get(e);if(t)return t;const i=this._lsThumbGet(o);return i?(this._posterCache.set(e,i),i):(s.addPoster(e,o),"")}return s.addResolveId(o),""}if(n){const e=this._posterCache.get(n);return e||(s.addPoster(n),"")}if(i){const t=this._posterCache.get(i);if(t)return t;const n=this._lsThumbGet(e.src);if(n)return this._posterCache.set(i,n),n;r&&this._inputs.isRevealed(e.src)&&s.addPoster(i,e.src)}return""}isThumbBroken(e,t,i,n){if(this.isHardFailed(e.src))return!0;if(!t){const t=this._inputs.getSensorPairedThumbs().get(e.src);return!!t&&this.isHardFailed(t)}if(i&&this.isHardFailed(i))return!0;if(n&&this.isHardFailed(n))return!0;const s=this._inputs.getMediaPairedThumbs().get(e.src);if(s){const e=this._inputs.getMediaUrlCache().get(s)??"";if(e&&this.isHardFailed(e))return!0}if(this._inputs.hasFrigate()){const t=this._inputs.findMatchingSnapshotMediaId(e.src);if(t){const e=this._inputs.getMediaUrlCache().get(t)??"";if(e&&this.isHardFailed(e))return!0}}return!1}isPosterLoading(e,t,i,n){if(this.isPosterBusy(e.src))return!0;if(!t){const t=this._inputs.getSensorPairedThumbs().get(e.src);return!!t&&this.isPosterBusy(t)}if(i&&this.isPosterBusy(i))return!0;if(n&&this.isPosterBusy(n))return!0;const s=this._inputs.getMediaPairedThumbs().get(e.src);if(s){const e=this._inputs.getMediaUrlCache().get(s)??"";if(e&&this.isPosterBusy(e))return!0}return!1}willNeverLoad(e,t,i){return!(!t||!hr(e.src))||!this._inputs.captureAllowed()&&!this.hasServerThumbForVideo(e,t,i)}hasServerThumbForVideo(e,t,i){return t?!!i||(!(!this._inputs.hasFrigate()||!this._inputs.findMatchingSnapshotMediaId(e.src))||!!this._inputs.getMediaPairedThumbs().get(e.src)):!!this._inputs.getSensorPairedThumbs().get(e.src)}dropCachedThumb(e,t){const i=this._lsKey(t??e),n=this._posterMirror.get(i);n?.url&&this._blobUrls.revoke(n.url),this._posterMirror.delete(i),this._posterCache.delete(e),this._store.delete(i).catch(()=>{})}_lsKey(e){return function(e,t){return"cgc_p_"+Hs(String(e)+"|"+String(t))}(e,this._config?.thumbnail_frame_pct??0)}_mirrorEnsureUrl(e){return e.url||(e.url=this._blobUrls.create(e.blob)),e.url}_lsThumbGet(e){const t=this._lsKey(e),i=this._posterMirror.get(t);return i?(this._posterMirror.delete(t),this._posterMirror.set(t,i),this._store.touch(t).catch(()=>{}),this._mirrorEnsureUrl(i)):null}_lsThumbSet(e,t,i){const n=this._lsKey(e),s=this._posterMirror.get(n);for(s?.url&&this._blobUrls.revoke(s.url),this._posterMirror.delete(n);this._posterMirror.size>=500;){const e=this._posterMirror.keys().next().value;if(void 0===e)break;const t=this._posterMirror.get(e);t?.url&&this._blobUrls.revoke(t.url),t?.src&&this._posterCache.delete(t.src),this._posterMirror.delete(e)}const r={src:i,blob:t,url:null};return this._posterMirror.set(n,r),this._store.set(n,t).catch(()=>{}),this._mirrorEnsureUrl(r)}async _fetchProtectedAsBlob(e,t){const i=this._inputs.getAuthToken();if(!i)return null;const n=e.startsWith("http://")||e.startsWith("https://")?e:this._inputs.getOrigin()+e,s=new AbortController,r=setTimeout(()=>s.abort(),15e3),o=()=>s.abort();t.addEventListener("abort",o,{once:!0});try{const e=await this._fetch(n,{headers:{Authorization:`Bearer ${i}`},signal:s.signal});if(404===e.status){const e=new Error("not found");throw e.status=404,e}return e.ok?await e.blob():null}finally{clearTimeout(r),t.removeEventListener("abort",o)}}async _ensurePoster(e){if(!e||this._posterCache.has(e)||this._posterPending.has(e))return;if(this.isHardFailed(e))return;if(this.isCoolingDown(e))return;const t=this._posterStableKeys.get(e)??e,i=new AbortController;if(this._ensureAborts.set(e,i),this._prewarmReadyPromise&&!this._prewarmDone){if(await this._prewarmReadyPromise,i.signal.aborted)return void this._ensureAborts.delete(e);if(this._posterCache.has(e))return void this._ensureAborts.delete(e);if(this._posterPending.has(e))return void this._ensureAborts.delete(e);if(this.isHardFailed(e))return void this._ensureAborts.delete(e);if(this.isCoolingDown(e))return void this._ensureAborts.delete(e)}const n=this._lsThumbGet(t);if(n)return this._posterCache.set(e,n),this.clearFailure(e),this._ensureAborts.delete(e),void this._onChange?.();this._posterPending.add(e);try{const n=this._inputs.framePct(),s=e.startsWith("/")&&!Ur(e)?await this._fetchProtectedAsBlob(e,i.signal):await this._capture.capture(e,n,i.signal);if(i.signal.aborted)return;if(s){const i=this._lsThumbSet(t,s,e);i?(this._posterCache.set(e,i),this.clearFailure(e)):this.recordFailure(e)}else this.recordFailure(e)}catch(n){if(i.signal.aborted)return;const s=function(e){if(null===e||"object"!=typeof e)return{hard:!1};const t=e;if(404===t.status)return{hard:!0};if("number"==typeof t.mediaErrorCode&&(3===(i=t.mediaErrorCode)||4===i))return{hard:!0};var i;const n="string"==typeof t.message?t.message:"";return"blank frame"===n||"toBlob returned null"===n||"no video dimensions"===n?{hard:!0}:{hard:!1}}(n);this.recordFailure(e,{hard:s.hard});const r=n?.status;404===r&&this.dropCachedThumb(e,t)}finally{this._posterPending.delete(e),this._posterStableKeys.delete(e),this._ensureAborts.delete(e),this._onChange?.()}}_abortAllInFlight(){for(const e of this._ensureAborts.values())e.abort();this._ensureAborts.clear()}}const Xr=new Set,Jr={rawItems:[],allWithDay:[],days:[],newestDay:null,activeDay:null,dayFiltered:[],objFiltered:[],videoCount:0,imageCount:0,sortOrder:"newest"};class Qr{constructor(e){this._rev=0,this._cachedItemsRev=-1,this._cachedItems=[],this._cachedBaseListItemsRev=-1,this._cachedBaseListSelectedDay=null,this._cachedBaseListObjFilters=null,this._cachedBaseListSortOrder=null,this._cachedBaseList=null,this._opts=e}get rev(){return this._rev}invalidate(){this._rev++,this._opts.onChange?.()}resolveItemMs(e){const t=this._opts.mediaClient.getDtMsForId(e);if(null!==t)return t;const i=rs(e);if("number"==typeof i&&Number.isFinite(i))return i;const n=tn(e,this._opts.getDtOpts());return"number"==typeof n&&Number.isFinite(n)?n:null}getItems(){if(this._cachedItemsRev===this._rev)return this._cachedItems;const e=this._opts.getSourceMode(),t=e=>{const t=this.resolveItemMs(e);return null!==t?{src:e,dtMs:t}:{src:e}};let i;i="combined"===e?this._opts.combinedClient.getItems(t):"media"===e?Us(this._opts.mediaClient.getIds()).map(e=>t(String(e))):this._opts.sensorClient.getItems(t);const n=this._opts.getDeleted?.()??Xr,s=this._opts.getDeletedFrigateEventIds?.()??Xr;let r;return r=0===n.size&&0===s.size?i:i.filter(e=>{if(n.has(e.src))return!1;if(s.size){const t=os(e.src);if(t&&s.has(t))return!1}return!0}),this._cachedItems=r,this._cachedItemsRev=this._rev,r}getAllDays(e){return function(e,t){if(0===t.length){const t=new Set;for(const i of e)i?.dayKey&&t.add(i.dayKey);return Array.from(t).sort((e,t)=>e<t?1:-1)}const i=new Set(t);for(const t of e)t?.dayKey&&i.add(t.dayKey);return Array.from(i).sort((e,t)=>e<t?1:e>t?-1:0)}(e,this._opts.mediaClient.getDays())}getBaseList(){const e=this._opts.getObjectFilters(),t="oldest"===this._opts.getSortOrder()?"oldest":"newest",i=this._opts.getSelectedDay();if(this._cachedBaseList&&this._cachedBaseListItemsRev===this._rev&&this._cachedBaseListSelectedDay===i&&this._cachedBaseListObjFilters===e&&this._cachedBaseListSortOrder===t)return this._cachedBaseList;const n=this.getItems();if(!n.length){const n={...Jr,sortOrder:t};return this._cacheBaseList(n,i,e,t),n}const s=function(e,t){const i=e.map((e,t)=>{const i=e.dtMs,n="number"==typeof i&&Number.isFinite(i)?i:null;return{dayKey:null!==n?nn(n):null,dtMs:n,idx:t,src:e.src}});return i.sort((e,t)=>{const i=null!==e.dtMs,n=null!==t.dtMs;return i&&n&&t.dtMs!==e.dtMs?t.dtMs-e.dtMs:i&&!n?-1:!i&&n?1:t.idx-e.idx}),"oldest"===t&&i.reverse(),i.map(e=>({dayKey:e.dayKey,src:e.src,dtMs:e.dtMs}))}(n,t),r=this.getAllDays(s),o=r[0]??null,a=i??o,l=a?s.filter(e=>e.dayKey===a):s,c=l.filter(e=>this._opts.matchesObjectFilter(e.src));let d=0;for(const e of c)this._opts.isVideoForSrc(e.src)&&d++;const h=c.length-d,p={rawItems:n,allWithDay:s,days:r,newestDay:o,activeDay:a,dayFiltered:l,objFiltered:c,videoCount:d,imageCount:h,sortOrder:t};return this._cacheBaseList(p,i,e,t),p}_cacheBaseList(e,t,i,n){this._cachedBaseList=e,this._cachedBaseListItemsRev=this._rev,this._cachedBaseListSelectedDay=t,this._cachedBaseListObjFilters=i,this._cachedBaseListSortOrder=n}}function eo(e){if(!Array.isArray(e))return[];const t=[];for(const i of e){const e=String(i??"").toLowerCase().trim();e&&t.push(e)}return t}function to(e,t,i){if(String(t??"").toLowerCase().startsWith("video/"))return!0;return"video"===String(i??"").toLowerCase()||Ur(String(e??""))}function io(e){const t=eo(e.filters);if(!t.length)return!0;if("sensor"===e.sourceMode){const i=e.getSrcEntity(e.src)??"",n=i?e.getSensorState(i)??null:null;return t.some(t=>function(e,t,i,n=null){const s=Rn(t);if(!s.length)return!0;const r=qn(i,n),o=Vn(e);return s.some(e=>r.includes(e)||o.includes(e))}(e.src,t,i,n))}const i=e.getObjectForSrc(e.src);return null!==i&&t.includes(i)}const no=[{id:"object_indicator",label:"Object indicator",defaultOrder:20,icon:"mdi:magnify"},{id:"index_counter",label:"Index counter",defaultOrder:30,previewText:"1/4"},{id:"autoplay_all",label:"Auto-play all",defaultOrder:33,icon:"mdi:playlist-play"},{id:"mute",label:"Mute toggle",defaultOrder:40,icon:"mdi:volume-high"},{id:"playback_speed",label:"Playback speed",defaultOrder:43,previewText:"1×"},{id:"pip",label:"Picture-in-Picture",defaultOrder:45,icon:"mdi:picture-in-picture-bottom-right"},{id:"fullscreen",label:"Fullscreen",defaultOrder:50,icon:"mdi:fullscreen"},{id:"video_time",label:"Time read-out (bottom-right)",defaultOrder:60,previewText:"0:00"}],so=[{id:"mute",label:"Mute toggle",defaultOrder:10,icon:"mdi:volume-high"},{id:"picker",label:"Camera picker",defaultOrder:15,icon:"mdi:cctv"},{id:"pip",label:"Picture-in-Picture",defaultOrder:20,icon:"mdi:picture-in-picture-bottom-right"},{id:"fullscreen",label:"Fullscreen",defaultOrder:30,icon:"mdi:fullscreen"},{id:"snapshot",label:"Snapshot",defaultOrder:35,icon:"mdi:camera"},{id:"refresh",label:"Refresh stream",defaultOrder:40,icon:"mdi:refresh"}],ro=[{id:"today",label:"Today",defaultOrder:10,showKey:"show_today"},{id:"media_filter",label:"Video / image filter",defaultOrder:20,showKey:"show_media_filter"},{id:"favorite",label:"Favorites",defaultOrder:30,showKey:"show_favorite"},{id:"live",label:"Live",defaultOrder:40,showKey:"show_live"}];function oo(e,t){const i=new Map;for(const n of e){const e=t?.[n.id],s=!1!==e?.enabled,r="number"==typeof e?.order?e.order:n.defaultOrder;i.set(n.id,{enabled:s,order:r})}return i}function ao(e,t){const i=[];return e.forEach((e,n)=>{const s=t.get(e.id);s&&s.enabled&&i.push({id:e.id,order:s.order,catalogIdx:n})}),i.sort((e,t)=>e.order-t.order||e.catalogIdx-t.catalogIdx),i.map(e=>e.id)}const lo=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}],co={echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0},ho={setTimeout:(e,t)=>globalThis.setTimeout(e,t),clearTimeout:e=>globalThis.clearTimeout(e),setInterval:(e,t)=>globalThis.setInterval(e,t),clearInterval:e=>globalThis.clearInterval(e),requestAnimationFrame:e=>globalThis.requestAnimationFrame(e),cancelAnimationFrame:e=>globalThis.cancelAnimationFrame(e)};class po{constructor(e){this._state="idle",this._error=null,this._audioProcessing={...co},this._iceServers=lo,this._iceTransportPolicy="all",this._stream=null,this._pc=null,this._ws=null,this._audioContext=null,this._analyser=null,this._analyserBuf=null,this._level=0,this._abort=null,this._errorTimer=null,this._statsInterval=null,this._levelRaf=null,this._lastLevelTickAt=0,this._iceConnectTimer=null,this._iceGraceTimer=null,this._lastNotifyAt=-3e4,this._retriesUsed=0,this._lastStats=null,this._iceState="new",this._disposed=!1,this._inputs=e.inputs,this._onChange=e.onChange,this._onError=e.onError,this._mediaDevices=e.mediaDevices??("undefined"!=typeof navigator?navigator.mediaDevices:void 0),this._audioContextFactory=e.audioContextFactory,this._peerConnectionFactory=e.peerConnectionFactory??(e=>new RTCPeerConnection(e)),this._webSocketFactory=e.webSocketFactory??(e=>new WebSocket(e)),this._schedule=e.schedule??ho,this._now=e.now??(()=>Date.now()),e.audioProcessing&&(this._audioProcessing={...co,...e.audioProcessing}),e.iceServers&&e.iceServers.length>0&&(this._iceServers=e.iceServers),e.iceTransportPolicy&&(this._iceTransportPolicy=e.iceTransportPolicy)}setHass(e){}state(){return this._state}isActive(){return"active"===this._state}level(){return this._level}getFrequencyData(e){const t=this._analyser;if(!t)return!1;const i=new Uint8Array(e.buffer);return t.getByteFrequencyData(i),!0}error(){return this._error}stats(){return"idle"===this._state?null:this._lastStats??this._snapshotStats(null)}audioProcessing(){return{...this._audioProcessing}}setAudioProcessing(e){this._audioProcessing={...this._audioProcessing,...e}}setIceConfig(e){null===e.iceServers||e.iceServers&&0===e.iceServers.length?this._iceServers=lo:void 0!==e.iceServers&&(this._iceServers=e.iceServers),null===e.iceTransportPolicy?this._iceTransportPolicy="all":void 0!==e.iceTransportPolicy&&(this._iceTransportPolicy=e.iceTransportPolicy)}async toggle(e){"active"!==this._state?"connecting"!==this._state&&await this.start(e):this.stop()}async start(e){this._disposed||"idle"===this._state&&(this._retriesUsed=0,await this._startInternal(e))}stop(){if(this._cancelLevelRaf(),this._cancelStatsInterval(),this._cancelIceConnectTimeout(),this._cancelIceGrace(),this._abort&&(this._abort.abort(),this._abort=null),this._ws){try{this._ws.close()}catch{}this._ws=null}if(this._pc){try{this._pc.close()}catch{}this._pc=null}if(this._stream){try{this._stream.getTracks().forEach(e=>e.stop())}catch{}this._stream=null}this._analyser=null,this._analyserBuf=null,this._level=0,this._audioContext&&"closed"!==this._audioContext.state&&this._audioContext.suspend().catch(()=>{}),this._iceState="closed",this._lastStats=null,"idle"!==this._state&&(this._state="idle",this._onChange())}dispose(){if(!this._disposed&&(this._disposed=!0,this.stop(),null!==this._errorTimer&&(this._schedule.clearTimeout(this._errorTimer),this._errorTimer=null),this._error=null,this._audioContext)){try{const e=this._audioContext;"closed"!==e.state&&e.close().catch(()=>{})}catch{}this._audioContext=null}}async _startInternal(e){const t=String(e??"").trim();if(!t)return void this._fail({code:"stream-not-found"});if(!this._mediaDevices||"function"!=typeof this._mediaDevices.getUserMedia)return void this._fail({code:"https-required"});this._abort=new AbortController;const i=this._abort.signal;this._state="connecting",this._error=null,this._onChange();try{const e=await this._mediaDevices.getUserMedia({audio:(n=this._audioProcessing,{echoCancellation:n.echoCancellation,noiseSuppression:n.noiseSuppression,autoGainControl:n.autoGainControl,channelCount:1}),video:!1});if(i.aborted)throw new DOMException("aborted","AbortError");this._stream=e,this._mountAnalyser(e);const s=await this._inputs.signPath("/api/webrtc/ws");if(i.aborted)throw new DOMException("aborted","AbortError");const r=this._inputs.buildWsUrl(s,t),o=this._peerConnectionFactory({iceServers:[...this._iceServers],iceTransportPolicy:this._iceTransportPolicy,bundlePolicy:"max-bundle",rtcpMuxPolicy:"require"});this._pc=o,o.oniceconnectionstatechange=()=>this._onIceStateChange(),o.onconnectionstatechange=()=>this._onConnectionStateChange();const a=e.getAudioTracks()[0];if(!a)throw new Error("no audio track");o.addTransceiver("video",{direction:"recvonly"}),o.addTransceiver(a,{direction:"sendonly"});const l=this._webSocketFactory(r);if(this._ws=l,await this._performHandshake(o,l,i),i.aborted)throw new DOMException("aborted","AbortError");this._armIceConnectTimeout(),"connected"!==o.iceConnectionState&&"completed"!==o.iceConnectionState||this._promoteToActive(),this._onChange()}catch(e){const i=function(e){if(e&&"object"==typeof e&&"code"in e&&"string"==typeof e.code){const t=e;return void 0===t.detail?{code:t.code}:{code:t.code,detail:t.detail}}if(e instanceof DOMException){if("NotAllowedError"===e.name||"SecurityError"===e.name)return{code:"permission-denied",detail:e.message};if("NotFoundError"===e.name||"OverconstrainedError"===e.name)return{code:"device-not-found",detail:e.message};if("NotReadableError"===e.name||"AbortError"===e.name)return"AbortError"===e.name?{code:"aborted"}:{code:"device-in-use",detail:e.message}}return{code:"unknown",detail:e instanceof Error?e.message:String(e)}}(e);if("aborted"===i.code)return void this._teardown();if(this._shouldRetry(i)){if(this._retriesUsed+=1,this._teardown(),await new Promise(e=>{this._schedule.setTimeout(e,500)}),this._disposed)return;return void await this._startInternal(t)}this._teardown(),this._fail(i)}var n}async _performHandshake(e,t,i){return await new Promise((n,s)=>{let r=!1,o=null;const a=()=>{r||(r=!0,null!==o&&this._schedule.clearTimeout(o),s(new DOMException("aborted","AbortError")))};i.addEventListener("abort",a,{once:!0}),o=this._schedule.setTimeout(()=>{if(r)return;r=!0,i.removeEventListener("abort",a);s(Object.assign(new Error("ws-timeout"),{code:"ws-timeout"}))},1e4);const l=()=>{r||(r=!0,null!==o&&this._schedule.clearTimeout(o),i.removeEventListener("abort",a),n())},c=e=>{r||(r=!0,null!==o&&this._schedule.clearTimeout(o),i.removeEventListener("abort",a),s(e))};e.onicecandidate=e=>{if(!t||t.readyState!==WebSocket.OPEN)return;const i=e.candidate?e.candidate.candidate:"";try{t.send(JSON.stringify({type:"webrtc/candidate",value:i}))}catch{}},t.onopen=async()=>{try{const i=await e.createOffer();await e.setLocalDescription(i),t.send(JSON.stringify({type:"webrtc/offer",value:e.localDescription?.sdp??""}))}catch(e){c(e instanceof Error?e:new Error(String(e)))}},t.onmessage=async t=>{try{const i="string"==typeof t.data?t.data:String(t.data),n=JSON.parse(i);if("webrtc/answer"===n.type)await e.setRemoteDescription({type:"answer",sdp:n.value??""}),l();else if("webrtc/candidate"===n.type){const t=n.value;if(t)try{await e.addIceCandidate({candidate:t,sdpMid:"0"})}catch{}}else if("error"===n.type){const e={code:"ws-server-error",detail:n.value??""};c(Object.assign(new Error(n.value??"go2rtc error"),e))}}catch(e){c(e instanceof Error?e:new Error(String(e)))}},t.onerror=()=>{c(Object.assign(new Error("ws-connect-failed"),{code:"ws-connect-failed"}))},t.onclose=e=>{if(1e3===e.code)return;const t={code:"ws-connect-failed",detail:1006===e.code?"abnormal closure (reverse proxy?)":`close ${e.code}`};c(Object.assign(new Error(t.detail??"ws closed"),t))}})}_onIceStateChange(){this._pc&&(this._iceState=this._pc.iceConnectionState,this._handleIceLikeState(this._pc.iceConnectionState))}_onConnectionStateChange(){this._pc&&this._handleIceLikeState(this._pc.connectionState)}_handleIceLikeState(e){return"connected"===e||"completed"===e?(this._cancelIceConnectTimeout(),this._cancelIceGrace(),void("connecting"===this._state&&this._promoteToActive())):"failed"===e?(this._cancelIceConnectTimeout(),this._cancelIceGrace(),void this._fail({code:"ice-failed",detail:e})):void("disconnected"===e&&("active"===this._state?this._armIceGrace():this._fail({code:"ice-failed",detail:e})))}_promoteToActive(){"connecting"===this._state&&(this._state="active",this._startStatsInterval(),this._startLevelRaf(),this._onChange())}_armIceConnectTimeout(){this._cancelIceConnectTimeout(),this._iceConnectTimer=this._schedule.setTimeout(()=>{this._iceConnectTimer=null,"connecting"===this._state&&this._fail({code:"ice-failed",detail:"connect timeout"})},8e3)}_cancelIceConnectTimeout(){null!==this._iceConnectTimer&&(this._schedule.clearTimeout(this._iceConnectTimer),this._iceConnectTimer=null)}_armIceGrace(){null===this._iceGraceTimer&&(this._iceGraceTimer=this._schedule.setTimeout(()=>{this._iceGraceTimer=null,"active"===this._state&&this._fail({code:"ice-failed",detail:"disconnected"})},3e3))}_cancelIceGrace(){null!==this._iceGraceTimer&&(this._schedule.clearTimeout(this._iceGraceTimer),this._iceGraceTimer=null)}_shouldRetry(e){return!(this._retriesUsed>=1)&&("ws-connect-failed"===e.code||"ws-timeout"===e.code)}_fail(e){"aborted"!==e.code?(this._error=e,this._teardown(),null!==this._errorTimer&&this._schedule.clearTimeout(this._errorTimer),this._errorTimer=this._schedule.setTimeout(()=>{this._error=null,this._errorTimer=null,this._onChange()},8e3),this._notify(e),this._onError?.(e),this._onChange()):this._teardown()}_notify(e){const t=this._now();t-this._lastNotifyAt<3e4||(this._lastNotifyAt=t,this._inputs.notify(e))}_teardown(){if(this._abort&&(this._abort.abort(),this._abort=null),this._ws){try{this._ws.close()}catch{}this._ws=null}if(this._pc){try{this._pc.close()}catch{}this._pc=null}if(this._stream){try{this._stream.getTracks().forEach(e=>e.stop())}catch{}this._stream=null}this._cancelLevelRaf(),this._cancelStatsInterval(),this._cancelIceConnectTimeout(),this._cancelIceGrace(),this._analyser=null,this._analyserBuf=null,this._level=0,this._iceState="closed",this._lastStats=null,"idle"!==this._state&&(this._state="idle")}_mountAnalyser(e){let t=this._audioContext;if(!t){const e=this._audioContextFactory??(()=>new AudioContext);try{t=e(),this._audioContext=t}catch{return}}"suspended"===t.state&&t.resume().catch(()=>{});try{const i=t.createMediaStreamSource(e),n=t.createAnalyser();n.fftSize=512,i.connect(n),this._analyser=n,this._analyserBuf=new Uint8Array(n.fftSize)}catch{}}_startLevelRaf(){if(null!==this._levelRaf)return;const e=t=>{"active"===this._state?(t-this._lastLevelTickAt>=50&&(this._lastLevelTickAt=t,this._updateLevel()),this._levelRaf=this._schedule.requestAnimationFrame(e)):this._levelRaf=null};this._levelRaf=this._schedule.requestAnimationFrame(e)}_cancelLevelRaf(){null!==this._levelRaf&&(this._schedule.cancelAnimationFrame(this._levelRaf),this._levelRaf=null)}_updateLevel(){const e=this._analyser,t=this._analyserBuf;if(!e||!t)return;const i=new Uint8Array(t.buffer);e.getByteTimeDomainData(i);let n=0;for(let e=0;e<i.length;e++){const t=(i[e]??128)-128;n+=t*t}const s=Math.sqrt(n/i.length)/128;this._level=.5*this._level+.5*s}_startStatsInterval(){null===this._statsInterval&&(this._collectStats(),this._statsInterval=this._schedule.setInterval(()=>{this._collectStats()},1e3))}_cancelStatsInterval(){null!==this._statsInterval&&(this._schedule.clearInterval(this._statsInterval),this._statsInterval=null)}async _collectStats(){const e=this._pc;if(e)try{const t=await e.getStats();let i=null,n=null,s=null,r=null;t.forEach(e=>{if(!e||"object"!=typeof e)return;const t=e,o=t.type;if("remote-inbound-rtp"===o&&"audio"===t.kind){const e=t.roundTripTime;"number"==typeof e&&(i=Math.round(1e3*e));const s=t.packetsLost;"number"==typeof s&&(n=s);const o=t.jitter;"number"==typeof o&&(r=Math.round(1e3*o))}else if("outbound-rtp"===o&&"audio"===t.kind){const e=t.packetsSent;"number"==typeof e&&(s=e)}});let o=null;null!==s&&null!==n&&s>0&&(o=n/(s+n)*100),this._lastStats=this._snapshotStats({rttMs:i,packetLossPct:o,jitterMs:r})}catch{}}_snapshotStats(e){return{state:this._state,iceState:this._iceState,rttMs:e?.rttMs??this._lastStats?.rttMs??null,packetLossPct:e?.packetLossPct??this._lastStats?.packetLossPct??null,jitterMs:e?.jitterMs??this._lastStats?.jitterMs??null,level:this._level,audioProcessing:{...this._audioProcessing}}}}const uo={up:["up","omhoog","naar_boven","oben","hoch","arriba","haut","su","gore","opp"],down:["down","naar_beneden","omlaag","neer","unten","runter","abajo","bas","giu","dolu","ned"],left:["left","links","naar_links","izquierda","gauche","sinistra","venstre","stanga"],right:["right","rechts","naar_rechts","derecha","droite","destra","hoyre","dreapta"]},mo=["up","down","left","right","zoom_in","zoom_out","stop","home"];function go(e,t){if(!e?.live_ptz_enabled)return null;const i=String(t??"").trim();if(!i||i.startsWith(Nn))return null;const n=e.live_ptz_cameras;if(!n||"object"!=typeof n)return null;const s=n[i];if(!s)return null;const r={type:s.type};if(void 0!==s.speed&&(r.speed=s.speed),void 0!==s.button_prefix&&""!==s.button_prefix.trim()&&(r.button_prefix=s.button_prefix.trim()),s.actions&&(r.actions=s.actions),s.buttons&&"object"==typeof s.buttons){const e=s.buttons,t={};for(const i of mo){const n=e[i];"string"==typeof n&&""!==n.trim()&&(t[i]=n.trim())}Object.keys(t).length>0&&(r.buttons=t)}return r}function fo(e,t){const i=String(t?.service??"").trim(),n=i.indexOf(".");if(n<=0||n===i.length-1)return Promise.reject(new Error(`Malformed PTZ action service: '${i}'`));const s=i.slice(0,n),r=i.slice(n+1);return e.callService(s,r,t.data??{},t.target)}function vo(e,t){const i=e.buttons?.[t];return"string"==typeof i&&""!==i.trim()?i.trim():void 0}const _o=new Map;function bo(e,t,i,n){const s=`${e}|${t}|${i??""}`,r=_o.get(s);if(r&&n&&r in n)return r;const o=uo[t];for(const r of xo(e,i)){if(!n)return`${r}_ptz_${o[0]??t}`;for(const e of o){const t=`${r}_ptz_${e}`;if(t in n)return _o.set(s,t),t}}return`${xo(e,i)[0]}_ptz_${o[0]??t}`}const yo=["_sub","_main","_clear","_fluent","_balanced"];function wo(e,t){return t&&t.trim()?t.trim().replace(/\.+$/,"").replace(/_+$/,"").replace(/^button\./,""):e.replace(/^camera\./,"")}function xo(e,t){if(t&&t.trim())return[t.trim().replace(/\.+$/,"").replace(/_+$/,"")];const i=wo(e),n=[`button.${i}`];for(const e of yo)if(i.endsWith(e)){const t=i.slice(0,-e.length);t&&t!==i&&n.push(`button.${t}`)}return n}const ko=["stop","stoppen","anhalten","arret","parar"];function So(e,t){if(t.states){const i=xo(e);for(const e of i)for(const i of ko)if(`${e}_ptz_${i}`in t.states)return"reolink";for(const e of i)for(const i of hi)for(const n of uo[i])if(`${e}_ptz_${n}`in t.states)return"ezviz"}const i=t.states?.[e]?.attributes;return!!i&&"camera_name"in i&&"client_id"in i&&t.services?.frigate&&"ptz"in t.services.frigate?"frigate":null}function $o(e,t,i){const n=xo(e,t);if(i)for(const e of n)for(const t of ko){const n=`${e}_ptz_${t}`;if(n in i)return n}return`${n[0]}_ptz_stop`}const Co=["sub","main","clear","fluent","balanced","vloeiend","helder","gebalanceerd","klar","fluessig","fluid","clair","fluide","equilibre","claro","fluido","equilibrado"];function Ao(e,t){const i=t?.states;if(!i)return{};const n=function(e,t){const i=e.replace(/^camera\./,""),n=[i];for(const e of Co){const t=new RegExp(`_${e}(?=_|$)`);t.test(i)&&n.push(i.replace(t,""))}const s=Object.keys(t);for(const e of n){const t=`button.${e}`;if(s.some(e=>e.startsWith(`${t}_ptz_`)))return t}return null}(e,i);if(!n)return{};const s={};for(const t of hi){const r=bo(e,t,n,i);r in i&&(s[t]=r)}const r=$o(e,n,i);r&&r in i&&(s.stop=r);for(const e of["zoom_in","zoom_out"]){const t=`${n}_ptz_${e}`;t in i&&(s[e]=t)}const o=`select.${n.replace(/^button\./,"")}_ptz_preset`;return o in i&&(s.home=o),s}function Lo(e,t){const i=e.speed??t;return Number.isFinite(i)?Math.max(1,Math.min(9,Math.round(i))):Math.round(5)}function Mo(e){switch(e.type){case"ezviz":default:return{continuous:!1,zoomable:!1,homeable:!1};case"reolink":return{continuous:!0,zoomable:!0,homeable:!0};case"frigate":case"onvif":return{continuous:!0,zoomable:!0,homeable:!1}}}function Po(e,t,i,n,s,r){const o=function(e,t){return e.actions?.[t]??null}(i,n);if(o){if("start"===s)return fo(e,o.start);if(o.stop)return fo(e,o.stop)}if("home"===n){if("stop"===s)return Promise.resolve(void 0);if("reolink"===i.type){const n=vo(i,"home")??`select.${wo(t,i.button_prefix)}_ptz_preset`,s=e.states?.[n],r=Array.isArray(s?.attributes?.options)?s.attributes.options.filter(e=>"string"==typeof e):[];if(0===r.length)return Promise.reject(new Error(`No preset options on ${n}; cannot resolve home`));const o=r.find(e=>"home"===e.toLowerCase())??r[0];return e.callService("select","select_option",{option:o},{entity_id:n})}return"frigate"===i.type?e.callService("frigate","ptz",{action:"preset",argument:"home"},{entity_id:t}):"onvif"===i.type?e.callService("onvif","ptz",{move_mode:"GotoPreset",preset:0},{entity_id:t}):Promise.reject(new Error(`home not supported for type: ${String(i.type)}`))}if("reolink"===i.type){if("stop"===s){const n=vo(i,"stop")??$o(t,i.button_prefix,e.states);return n?e.callService("button","press",{},{entity_id:n}):Promise.resolve(void 0)}const r=vo(i,n)??function(e,t,i,n){const s=xo(e,t);if(i)for(const e of s){const t=`${e}_ptz_${n}`;if(t in i)return t}return`${s[0]}_ptz_${n}`}(t,i.button_prefix,e.states,n);return e.callService("button","press",{},{entity_id:r})}if("frigate"===i.type)return"stop"===s?e.callService("frigate","ptz",{action:"stop"},{entity_id:t}):e.callService("frigate","ptz",{action:"zoom",argument:"zoom_in"===n?"in":"out"},{entity_id:t});if("onvif"===i.type){if("stop"===s)return e.callService("onvif","ptz",{move_mode:"Stop"},{entity_id:t});const o=Lo(i,r)/9;return e.callService("onvif","ptz",{move_mode:"ContinuousMove",speed:o,zoom:"zoom_in"===n?"ZOOM_IN":"ZOOM_OUT"},{entity_id:t})}return Promise.reject(new Error(`zoom not supported for type: ${String(i.type)}`))}const To=(e,t)=>e?`${Math.round((t-e)/1e3)}s ago`:"—",zo=(e,t)=>e?`${new Date(e).toLocaleTimeString()} (${To(e,t)})`:"—";function Eo(e,t){if(!e||!t)return"?";const i=function(e,t){let i=e,n=t;for(;0!==n;){const e=n;n=i%n,i=e}return i}(e,t);return`${e/i}:${t/i}`}function Io(e,t,i){const n=Jn(e);if(!n.length)return[["(no cameras configured)","—"]];const s=[];for(const e of n){const n=t?.states?.[e];if(!n){s.push([e,"(entity not found)","bad"]);continue}let r=n.attributes?.frontend_stream_type;if(!r){const e=Number(n.attributes?.supported_features??0);2&e?r="web_rtc":1&e&&(r="hls")}const o=r?r+("web_rtc"===r?" (low-latency)":"hls"===r?" (~2-5s buffer)":""):"(no streaming)",a="web_rtc"===r?"ok":"hls"===r?"warn":"bad",l=n.attributes?.friendly_name||e;s.push([l,o,a]);const c=i[e];let d="(loading…)",h=null;"ok"===c?.state?(d=`${c.w}×${c.h} (${Eo(c.w,c.h)})`,h="ok"):"error"===c?.state?(d=c.reason?`(snapshot failed: ${c.reason})`:"(snapshot failed)",h="warn"):"unavailable"===c?.state&&(d="(no entity_picture)",h="warn"),s.push(["  resolution",d,h])}return s}function Fo(e){const t=e.config??null,i=e.hass??null,n=e.mediaState,s=(e.now??Date.now)(),r=Array.isArray(i?.config?.components)&&(i?.config?.components).includes("frigate"),o=Array.isArray(n.list)?n.list:[],a=n.loadedAt??0,l=n.calendar?.days?.length??0,c=n.dayCache?.size??0,d=function(e,t,i){return e?.frigate_url?t.frigateApiFailed?{value:`failed (${To(t.frigateApiFailedAt??0,i)})`,status:"warn"}:{value:"ok",status:"ok"}:{value:"not configured",status:null}}(t,n,s),h=[{title:"Card",icon:"mdi:card-outline",rows:[["Version",e.cardVersion||"(unknown)"],["View mode",e.viewMode||"—"]]},{title:"Home Assistant",icon:"mdi:home-assistant",rows:[["Version",i?.config?.version||"—"]]},{title:"Frigate integration",icon:"mdi:cctv",rows:[["Installed",r?"yes":"no",r?"ok":"bad"]]},{title:"Config summary",icon:"mdi:cog-outline",rows:[["source_mode",t?.source_mode||"—"],["max_media",String(t?.max_media??"—")],["frigate_url",t?.frigate_url?"set":"(not set)"],["media_sources",String((t?.media_sources??[]).length)],["entities (sensor)",String((t?.entities??[]).length)],["live_enabled",t?.live_enabled?"yes":"no",t?.live_enabled?"ok":null],["live_camera_entities",String(Jn(t).length)],["live_layout",t?.live_layout||"single"]]},{title:"Runtime state",icon:"mdi:pulse",rows:[["Items in gallery",String(o.length),o.length>0?"ok":"warn"],["Calendar days",String(l),l>0?"ok":null],["Days loaded",String(c)],["Last fetch",zo(a,s),a&&s-a<3e5?"ok":a?"warn":"bad"],["Direct API",d.value,d.status],["WS subscribe (frigate/events)",e.frigateEventsActive?"active":"inactive",e.frigateEventsActive?"ok":r?"warn":null],["Live card mounted",e.liveCardMounted?"yes":"no",e.liveCardMounted?"ok":t?.live_enabled&&"live"===e.viewMode?"warn":null],["Live layout override",e.liveLayoutOverride||"—"]]},{title:"Live cameras",icon:"mdi:cctv",rows:Io(t,i,e.cameraResolutions)},{title:"Browser",icon:"mdi:cellphone",rows:[["User agent",e.navigatorInfo.userAgent||"—"],["Connection",!1===e.navigatorInfo.onLine?"offline":"online",!1===e.navigatorInfo.onLine?"bad":"ok"]]}];return Gn(t)&&h.push(function(e,t,i){const n=[],s=t?.state??"idle",r="active"===s?"ok":"connecting"===s?"warn":null;n.push(["State",s,r]),i&&n.push(["Last error",i.detail?`${i.code} (${i.detail})`:i.code,"warn"]),n.push(["ICE state",t?.iceState??"—"]),n.push(["RTT",null!=t?.rttMs?`${t.rttMs} ms`:"—"]),n.push(["Packet loss",null!=t?.packetLossPct?`${t.packetLossPct.toFixed(1)}%`:"—"]),n.push(["Jitter",null!=t?.jitterMs?`${t.jitterMs} ms`:"—"]),n.push(["Input level",null!=t?.level?`${Math.round(100*t.level)}%`:"—"]);const o=t?.audioProcessing;if(o){const e=[o.echoCancellation?"echo":"no-echo",o.noiseSuppression?"ns":"no-ns",o.autoGainControl?"agc":"no-agc"].join(", ");n.push(["Audio processing",e])}return n.push(["go2rtc stream",String(e?.live_go2rtc_stream??"")]),n.push(["Mic mode",String(e?.live_mic_mode??"toggle")]),{title:"Microphone",icon:"mdi:microphone",rows:n}}(t,e.micStats??null,e.micError??null)),h}function Ho(e){const t=e?.locale;if("string"==typeof t&&t.trim())return t.trim();if(t&&"object"==typeof t&&"string"==typeof t.language&&t.language.trim())return t.language.trim();const i=e?.language;return"string"==typeof i&&i.trim()?i.trim():"undefined"!=typeof navigator&&navigator.language?navigator.language:void 0}function Do(e){const t=e?.time_format;if("24"===t)return!1;if("12"===t)return!0;try{const i="language"===t?e?.language:void 0;return/AM|PM/i.test((new Date).toLocaleString(i))}catch{return!1}}function Ro(e,t){if(!e)return"";try{return new Intl.DateTimeFormat(t?.language,{day:"numeric",month:"long"}).format(new Date(`${e}T00:00:00`))}catch{return e}}const jo="3.1.0",Oo={low:2,medium:3.5,high:5.5};function Vo(e){if(!isFinite(e)||e<0)return"0:00";const t=Math.floor(e),i=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,r=s<10?`0${s}`:`${s}`;if(i>0){return`${i}:${n<10?`0${n}`:`${n}`}:${r}`}return`${n}:${r}`}function qo(e,t){const i=window.devicePixelRatio||1,n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return;e.width===Math.round(n.width*i)&&e.height===Math.round(n.height*i)||(e.width=Math.round(n.width*i),e.height=Math.round(n.height*i));const s=e.getContext("2d");s.setTransform(i,0,0,i,0,0),s.clearRect(0,0,n.width,n.height);const r=Oo[t.sensitivity]??Oo.medium;t.getFreq(t.freqBuf)&&function(e,t,i,n,s){const r=(t-94)/48;for(let t=0;t<48;t++){const o=1+t/48*1.2,a=n(s[t]/255*o),l=Math.max(2,a*i*.95),c=e.createLinearGradient(0,i-l,0,i);c.addColorStop(0,"rgba(255,255,255,0.1925)"),c.addColorStop(1,"rgba(255,255,255,0.0525)"),e.fillStyle=c,e.fillRect(t*(r+2),i-l,r,l)}}(s,n.width,n.height,e=>Math.tanh(e*r),t.freqBuf)}class No extends oe{static get properties(){return{_hass:{},config:{},_liveSelectedCamera:{type:String},_objectFilters:{type:Array},_pendingScrollToI:{type:Number},_previewOpen:{type:Boolean},_selectedDay:{type:String},_selectedIndex:{type:Number},_selectedSet:{type:Object},_selectMode:{type:Boolean},_showBulkHint:{type:Boolean},_errorToast:{type:Object},_showDatePicker:{type:Boolean},_showLivePicker:{type:Boolean},_showLiveQuickSwitch:{type:Boolean},_suppressNextThumbClick:{type:Boolean},_swipeStartX:{type:Number},_swipeStartY:{type:Number},_swipeCurX:{type:Number},_swipeCurY:{type:Number},_swiping:{type:Boolean},_thumbMenuItem:{type:Object},_thumbMenuOpen:{type:Boolean},_viewMode:{type:String},_liveMuted:{type:Boolean},_liveFullscreen:{type:Boolean},_livePipActive:{type:Boolean},_galleryPipActive:{type:Boolean},_galleryPlaying:{type:Boolean},_galleryCurrentTime:{type:Number},_galleryDuration:{type:Number},_galleryAutoplayAll:{type:Boolean},_galleryPlaybackSpeed:{type:Number},_imgFsOpen:{type:Boolean},_aspectRatio:{type:String},_micState:{type:String},_micErrorCode:{type:String},_micLevelTick:{type:Number},_scrollPillText:{type:String},_scrollPillVisible:{type:Boolean},_hamburgerOpen:{type:Boolean},_filterVideo:{type:Boolean},_filterImage:{type:Boolean},_filterFavorites:{type:Boolean},_ptzActive:{type:Boolean}}}static getConfigElement(){return document.createElement("camera-gallery-card-editor")}static getStubConfig(e){const t=e?.states??{},i=Object.keys(t).find(e=>e.startsWith("camera.")&&"unavailable"!==t[e]?.state);return{source_mode:"sensor",entities:[],live_enabled:!0,live_cameras:i?[{entity:i,name:""}]:[],thumb_size:140,bar_position:"top",object_filters:Si}}constructor(){super(),this._onPtzVisibilityChange=()=>{"visible"!==document.visibilityState&&this._ptzHoldDirection&&this._stopPtzHold()},this._previewMediaKey="",this._previewVideoEl=null,this._prefetchKey="",this._selectedPreviewSrc="",this._deleted=new Set,this._deletedFrigateEventIds=new Set;try{localStorage.removeItem("cgc_seen_srcs"),localStorage.removeItem("cgc_new_arrivals"),localStorage.removeItem("cgc_dismissed_srcs"),localStorage.removeItem("cgc_seen_srcs_v2"),localStorage.removeItem("cgc_new_arrivals_v2"),localStorage.removeItem("cgc_dismissed_srcs_v2"),localStorage.removeItem("cgc_arrivals_v")}catch(e){}this._forceThumbReset=!1,this._liveCard=null,this._liveCardConfigKey="",this._liveLayoutOverride=null,this._liveGridTiles=new Map,this._liveCardPending=null,this._rtcPeerConnection=null,this._rtcWebSocket=null,this._signedWsPath=null,this._signedWsPathTs=0,this._micState="idle",this._micErrorCode="",this._micLevelTick=0,this._micLevelRaf=null,this._ptzActive=!1,this._ptzHoldDirection=null,this._ptzHoldAction=null,this._ptzHoldTimer=null,this._ptzHoldPointerId=null,this._ptzJoystickThumb={x:0,y:0},this._ptzJoystickPointerId=null,this._ptzJoystickGeom=null,this._ptzJoystickMagnitude=null,this._ptzJoystickAxes=null,this._ptzHomePressed=!1,this._ptzHomePressedTimer=null,this._micClient=new po({inputs:{signPath:e=>this._hass?this._hass.callWS({type:"auth/sign_path",path:e}):Promise.reject(new Error("hass not ready")),buildWsUrl:(e,t)=>"ws"+this._hass.hassUrl(e.path).substring(4)+"&url="+encodeURIComponent(t),notify:e=>{try{this._hass?.callService("persistent_notification","create",{title:"Camera Gallery Card — microphone",message:this._micErrorLabelForCode(e.code,e.detail),notification_id:"cgc_mic_error"})}catch(e){}}},onChange:()=>{const e=this._micClient.state();e!==this._micState&&(this._micState=e);const t=this._micClient.error()?.code??"";t!==this._micErrorCode&&(this._micErrorCode=t),this._scheduleMicLevelRaf(),this.requestUpdate()},audioProcessing:this._micAudioProcessingFromConfig(),iceServers:this._micIceServersFromConfig(),iceTransportPolicy:this.config?.live_mic_force_relay?"relay":"all"}),this._autoAspectVideo=null,this._autoAspectObs=null,this._liveQuickSwitchTimer=null,this._objectFilters=[],this._filterVideo=!1,this._filterImage=!1,this._filterFavorites=!1,this._pendingScrollToI=null,this._frigateEventsUnsub=null,this._objectCache=new Map,this._previewOpen=!1,this._selectMode=!1,this._selectedSet=new Set,this._showBulkHint=!1,this._bulkHintTimer=null,this._errorToast=null,this._errorToastTimer=null,this._showDatePicker=!1,this._datePickerDays=null,this._showLivePicker=!1,this._showLiveQuickSwitch=!1,this._debugOpen=!1,this._pillsVisible=!1,this._pillsHovered=!1,this._pillsTimer=null,this._pillsHideActive=!1,this._sensorClient=new Gs({onChange:()=>{this._pipeline?.invalidate(),this.requestUpdate()}}),this._favorites=new Ds({onChange:()=>this.requestUpdate()}),this._suppressNextThumbClick=!1,this._swipeStartX=0,this._swipeStartY=0,this._swipeCurX=0,this._swipeCurY=0,this._swiping=!1,this._thumbLongPressStartX=0,this._thumbLongPressStartY=0,this._thumbLongPressTimer=null,this._thumbMenuItem=null,this._thumbMenuOpen=!1,this._thumbMenuOpenedAt=0,this._viewMode="media",this._liveSelectedCamera="",this._liveMuted=!1,this._livePipActive=!1,this._galleryPipActive=!1,this._galleryPlaying=!1,this._galleryCurrentTime=0,this._galleryDuration=0,this._galleryAutoplayAll=!1,this._galleryPlaybackSpeed=1,this._thumbSwipeEl=null,this._thumbSwipeItem=null,this._thumbSwipeStartX=0,this._thumbSwipeStartY=0,this._thumbSwipeDx=0,this._thumbSwipeActive=!1,this._scrollPillText="",this._scrollPillVisible=!1,this._scrollPillTimer=null,this._micWaveRaf=null,this._micFreqBuf=new Uint8Array(256),this._onMicPointerDown=e=>{e.stopPropagation();const t=Zn(this._getEffectiveLiveCamera(),this.config);if(!t)return;"ptt"===(this.config?.live_mic_mode??"toggle")?"idle"===this._micState&&this._micClient.start(t):this._micClient.toggle(t)},this._onMicPointerUp=e=>{e.stopPropagation(),"ptt"===this.config?.live_mic_mode&&"idle"!==this._micState&&this._micClient.stop()},this._galleryMuted=!0,this._liveFullscreen=!1,this._imgFsOpen=!1,this._hamburgerOpen=!1,this._zoomScale=1,this._zoomPanX=0,this._zoomPanY=0,this._zoomPinchDist=0,this._zoomPinchScale=1,this._zoomIsPinching=!1,this._zoomIsPanning=!1,this._zoomPanStartX=0,this._zoomPanStartY=0,this._zoomPanBaseX=0,this._zoomPanBaseY=0,this._onLiveCameraKeydown=e=>{if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key)return;if(!this._isLiveActive())return;if(this._imgFsOpen)return;if(this._ptzActive)return;if(this._getLiveCameraOptions().length<=1)return;const t=(e.target?.tagName||"").toLowerCase();if("input"===t||"textarea"===t||"select"===t||e.target?.isContentEditable)return;const i=this.contains(document.activeElement),n=this.matches(":hover");(i||n)&&(e.preventDefault(),this._navLiveCamera("ArrowRight"===e.key?1:-1))},this._onPtzKeyDown=e=>{if(!this._ptzActive||e.repeat)return;const t={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"}[e.key];if(!t)return;const i=(e.target?.tagName||"").toLowerCase();if("input"===i||"textarea"===i||"select"===i||e.target?.isContentEditable)return;const n=this.contains(document.activeElement),s=this.matches(":hover");if((n||s)&&(e.preventDefault(),this._ptzJoystickMagnitude=null,this._ptzJoystickAxes=null,this._onPtzPress(t,null),null===this._ptzJoystickPointerId)){const e=23,i={up:{x:0,y:-e},down:{x:0,y:e},left:{x:-e,y:0},right:{x:e,y:0}};this._ptzJoystickThumb=i[t],this.requestUpdate()}},this._onPtzKeyUp=e=>{if(!this._ptzHoldDirection)return;({ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"})[e.key]===this._ptzHoldDirection&&(this._stopPtzHold(),null===this._ptzJoystickPointerId&&(this._ptzJoystickThumb={x:0,y:0},this.requestUpdate()))},this._onFullscreenChange=()=>{document.fullscreenElement===this||document.webkitFullscreenElement===this?(this.setAttribute("data-live-fs",""),this._showPills()):document.fullscreenElement||document.webkitFullscreenElement||(this.removeAttribute("data-live-fs"),this._liveFullscreen=!1,this._resetZoom()),this.requestUpdate()},this._onZoomTouchStart=e=>{if((this._isLiveActive()||this._previewOpen)&&!Qn(this.config,this._liveLayoutOverride))if(2===e.touches.length){e.preventDefault(),this._zoomIsPinching=!0,this._zoomIsPanning=!1;const t=e.touches;this._zoomPinchDist=Math.hypot(t[1].clientX-t[0].clientX,t[1].clientY-t[0].clientY),this._zoomPinchScale=this._zoomScale}else 1===e.touches.length&&this._zoomScale>1&&(e.preventDefault(),this._zoomIsPanning=!0,this._zoomIsPinching=!1,this._zoomPanStartX=e.touches[0].clientX,this._zoomPanStartY=e.touches[0].clientY,this._zoomPanBaseX=this._zoomPanX,this._zoomPanBaseY=this._zoomPanY)},this._onZoomTouchMove=e=>{if((this._isLiveActive()||this._previewOpen)&&!Qn(this.config,this._liveLayoutOverride))if(this._zoomIsPinching&&e.touches.length>=2){e.preventDefault();const t=e.touches,i=Math.hypot(t[1].clientX-t[0].clientX,t[1].clientY-t[0].clientY);this._zoomScale=Math.max(1,Math.min(5,this._zoomPinchScale*(i/this._zoomPinchDist))),this._zoomScale<=1?(this._zoomPanX=0,this._zoomPanY=0):this._clampZoomPan(),this._applyZoom()}else this._zoomIsPanning&&1===e.touches.length&&this._zoomScale>1&&(e.preventDefault(),this._zoomPanX=this._zoomPanBaseX+(e.touches[0].clientX-this._zoomPanStartX),this._zoomPanY=this._zoomPanBaseY+(e.touches[0].clientY-this._zoomPanStartY),this._clampZoomPan(),this._applyZoom())},this._onZoomTouchEnd=e=>{e.touches.length<2&&(this._zoomIsPinching=!1),0===e.touches.length&&(this._zoomIsPanning=!1),this._zoomScale<1.05&&this._resetZoom()},this._onZoomMouseDown=e=>{!this._isLiveActive()&&!this._previewOpen||this._zoomScale<=1||Qn(this.config,this._liveLayoutOverride)||(e.preventDefault(),this._zoomIsPanning=!0,this._zoomPanStartX=e.clientX,this._zoomPanStartY=e.clientY,this._zoomPanBaseX=this._zoomPanX,this._zoomPanBaseY=this._zoomPanY)},this._onZoomMouseMove=e=>{this._zoomIsPanning&&(e.preventDefault(),this._zoomPanX=this._zoomPanBaseX+(e.clientX-this._zoomPanStartX),this._zoomPanY=this._zoomPanBaseY+(e.clientY-this._zoomPanStartY),this._clampZoomPan(),this._applyZoom())},this._onZoomMouseUp=()=>{this._zoomIsPanning=!1},this._onZoomWheel=e=>{if(!this._isLiveActive()&&!this._previewOpen)return;if(Qn(this.config,this._liveLayoutOverride))return;const t=this._getZoomHost();if(!t)return;const i=t.getBoundingClientRect();if(e.clientX<i.left||e.clientX>i.right||e.clientY<i.top||e.clientY>i.bottom)return;e.preventDefault();const n=e.deltaY>0?.9:1.1,s=this._zoomScale,r=Math.max(1,Math.min(5,s*n));if(r!==s){const t=i.left+i.width/2-this._zoomPanX,n=i.top+i.height/2-this._zoomPanY,o=r/s;this._zoomPanX=(e.clientX-t)*(1-o)+this._zoomPanX*o,this._zoomPanY=(e.clientY-n)*(1-o)+this._zoomPanY*o,this._zoomScale=r}this._zoomScale<=1?(this._zoomPanX=0,this._zoomPanY=0):this._clampZoomPan(),this._applyZoom()},this._mediaClient=new Lr({onChange:()=>{this._objectCache?.clear?.(),this._pipeline?.invalidate(),this.requestUpdate()},getDtOpts:()=>this._dtOpts,resolveItemMs:e=>this._pipeline?.resolveItemMs(e)??null}),this._combinedClient=new Hr(this._sensorClient,this._mediaClient),this._pipeline=new Qr({sensorClient:this._sensorClient,mediaClient:this._mediaClient,combinedClient:this._combinedClient,getSourceMode:()=>this.config?.source_mode,getSortOrder:()=>this.config?.thumb_sort_order,getSelectedDay:()=>this._selectedDay??null,getObjectFilters:()=>this._objectFilters??[],getDtOpts:()=>this._dtOpts,getDeleted:()=>this._deleted??new Set,getDeletedFrigateEventIds:()=>this._deletedFrigateEventIds??new Set,matchesObjectFilter:e=>this._matchesObjectFilter(e),isVideoForSrc:e=>this._isVideoForSrc(e),onChange:()=>this.requestUpdate()}),this._previewLoadTimer=null,this._revealedThumbs=new Set,this._expandedClusters=new Set,this._thumbObserver=null,this._thumbObserverRoot=null,this._observedThumbs=new WeakSet,this._posterClient=new Gr({inputs:{getSensorPairedThumbs:()=>this._sensorClient.getSensorPairedThumbs(),getMediaPairedThumbs:()=>this._mediaClient.getPairedThumbs(),getMediaUrlCache:()=>this._mediaClient.getUrlCache(),findMatchingSnapshotMediaId:e=>this._mediaClient.findMatchingSnapshotMediaId(e),isResolveFailed:e=>this._mediaClient.isResolveFailed(e),hasFrigate:()=>ns(this.config),captureAllowed:()=>!1!==this.config?.capture_video_thumbnails,framePct:()=>this.config?.thumbnail_frame_pct??0,isRevealed:e=>this._revealedThumbs.has(e),getAuthToken:()=>this._hass?.auth?.data?.access_token??null,getOrigin:()=>window.location.origin},onChange:()=>this.requestUpdate()})}_startMediaPoll(){this._stopMediaPoll(),"media"!==this.config?.source_mode&&"combined"!==this.config?.source_mode||(this._mediaClient.ensureLoaded(),this._mediaPollInterval=setInterval(()=>{this._mediaClient.invalidate(),this._mediaClient.ensureLoaded()},3e4))}_stopMediaPoll(){this._mediaPollInterval&&(clearInterval(this._mediaPollInterval),this._mediaPollInterval=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("webkitfullscreenchange",this._onFullscreenChange),this.addEventListener("touchstart",this._onZoomTouchStart,{passive:!1}),this.addEventListener("touchmove",this._onZoomTouchMove,{passive:!1}),this.addEventListener("touchend",this._onZoomTouchEnd),this.addEventListener("touchcancel",this._onZoomTouchEnd),this.addEventListener("wheel",this._onZoomWheel,{passive:!1}),this.addEventListener("mousedown",this._onZoomMouseDown),window.addEventListener("mousemove",this._onZoomMouseMove),window.addEventListener("mouseup",this._onZoomMouseUp),window.addEventListener("keydown",this._onLiveCameraKeydown),window.addEventListener("keydown",this._onPtzKeyDown),window.addEventListener("keyup",this._onPtzKeyUp),document.addEventListener("visibilitychange",this._onPtzVisibilityChange),navigator.maxTouchPoints>0&&this._showPills(5e3),this._startMediaPoll(),this._subscribeFrigateEvents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("webkitfullscreenchange",this._onFullscreenChange),this.removeEventListener("touchstart",this._onZoomTouchStart),this.removeEventListener("touchmove",this._onZoomTouchMove),this.removeEventListener("touchend",this._onZoomTouchEnd),this.removeEventListener("touchcancel",this._onZoomTouchEnd),this.removeEventListener("wheel",this._onZoomWheel),this.removeEventListener("mousedown",this._onZoomMouseDown),window.removeEventListener("mousemove",this._onZoomMouseMove),window.removeEventListener("mouseup",this._onZoomMouseUp),window.removeEventListener("keydown",this._onLiveCameraKeydown),window.removeEventListener("keydown",this._onPtzKeyDown),window.removeEventListener("keyup",this._onPtzKeyUp),document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),this._stopMediaPoll(),this._unsubscribeFrigateEvents(),this._liveQuickSwitchTimer&&clearTimeout(this._liveQuickSwitchTimer),this._bulkHintTimer&&clearTimeout(this._bulkHintTimer),this._scrollPillTimer&&(clearTimeout(this._scrollPillTimer),this._scrollPillTimer=null),this._scrollPillVisible=!1,this._snapshotToastTimer&&(clearTimeout(this._snapshotToastTimer),this._snapshotToastTimer=null),this._stopPtzHold(),document.removeEventListener("visibilitychange",this._onPtzVisibilityChange),this._cancelMicLevelRaf(),this._liveQuickSwitchTimer=null,this._bulkHintTimer=null,this._clearPreviewVideoHostPlayback(),this._teardownLiveView(),this._clearThumbLongPress(),this._thumbObserver&&(this._thumbObserver.disconnect(),this._thumbObserver=null),this._posterClient.dispose(),this._micClient.stop()}set hass(e){const t=!this._hass,i=this._hass;if(this._hass=e,this._sensorClient.setHass(e),this._mediaClient.setHass(e),this._posterClient.setHass(e),t)return"live"===this.config?.start_mode&&this._hasLiveConfig()&&(this._viewMode="live"),this._subscribeFrigateEvents(),void this.requestUpdate();this._liveCard&&(this._liveCard.hass=e);const n=this._sensorClient.getEntityIds(),s=Jn(this.config),r=(this.config?.menu_buttons??[]).map(e=>e.entity).filter(Boolean),o=[...n,...s,...r];o.length>0&&!o.some(t=>i?.states[t]!==e.states[t])||this.requestUpdate()}get hass(){return this._hass}_frigateInstanceId(){const e=Array.isArray(this.config?.media_sources)?this.config.media_sources:[];for(const t of e){const e=String(t||"").match(/^media-source:\/\/frigate\/([^/]+)/);if(e)return e[1]}return null}async _subscribeFrigateEvents(){if(this._frigateEventsUnsub)return;const e=this._hass?.connection;if(!e)return;const t=this.config?.source_mode;if("media"!==t&&"combined"!==t)return;const i=this._frigateInstanceId();if(i)try{this._frigateEventsUnsub=await e.subscribeMessage(e=>this._onFrigateEventPush(e),{type:"frigate/events/subscribe",instance_id:i})}catch(e){this._frigateEventsUnsub=null}}_unsubscribeFrigateEvents(){if(!this._frigateEventsUnsub)return;const e=this._frigateEventsUnsub;this._frigateEventsUnsub=null;try{const t=e();t&&"function"==typeof t.then&&t.catch(()=>{})}catch(e){}}_onFrigateEventPush(e){let t;try{t="string"==typeof e?JSON.parse(e):e}catch(e){return}"end"===t?.type&&(this._mediaClient.invalidate(),this._mediaClient.ensureLoaded())}_syncPreviewPlaybackFromState(){if(!this._hass||!this.config)return;const e="media"===this.config?.source_mode||"combined"===this.config?.source_mode,t=this._pipeline.getBaseList();if(!t.rawItems.length)return void this._clearPreviewVideoHostPlayback();const i=t.objFiltered.filter(e=>this._matchesTypeFilter(e.src)),n=this.config?.max_media??ki,s=i.slice(0,Math.min(n,i.length)),r=this._injectExpandedClusterMembers(s);if(!r.length)return void this._clearPreviewVideoHostPlayback();const o=Math.min(Math.max(this._selectedIndex??0,0),Math.max(0,r.length-1)),a=r[o]?.src||"";if(!a)return void this._clearPreviewVideoHostPlayback();this._syncCurrentMedia(a);let l=a;br(a)&&(l=this._mediaClient.getUrlCache().get(a)||"");let c="",d="",h="";if(e&&br(a)){const e=this._mediaClient.getMetaById(a);c=e.mime,d=e.cls,h=e.title}const p=!!a&&this._isVideoSmart(l||h,c,d),u=!!!this.config?.clean_mode||!!this._previewOpen,m=!!a&&e&&br(a),g=!(!a||m&&!l),f=JSON.stringify({selected:a,selectedUrl:l,selectedIsVideo:p,previewOpen:u,selectedHasUrl:g,isLive:this._isLiveActive()});this._previewMediaKey!==f&&(this._previewMediaKey=f,u&&!this._isLiveActive()&&g&&p?this._ensurePreviewVideoHostPlayback(l):this._clearPreviewVideoHostPlayback())}_queueSensorPosterWork(e){if(!Array.isArray(e)||!e.length)return;if("sensor"!==this.config?.source_mode&&"combined"!==this.config?.source_mode)return;const t=this._sensorClient.getSensorPairedThumbs();for(const i of e){const e=String(i?.src||"");if(!e)continue;if(!this._isVideoForSrc(e))continue;const n=t.get(e);n&&this._posterClient.enqueue(n)}}_ensurePreviewVideoHostPlayback(e){const t=this.renderRoot?.querySelector("#preview-video-host");if(!t||!e)return;let i=this._previewVideoEl;i&&i.parentElement===t||(t.innerHTML="",i=document.createElement("video"),i.className="pimg",i.controls=!1,i.playsInline=!0,i.preload="auto",i.addEventListener("play",()=>{this._galleryPlaying=!0,this._startGalleryProgressRaf()}),i.addEventListener("pause",()=>{this._galleryPlaying=!1,this._stopGalleryProgressRaf()}),i.addEventListener("ended",()=>{this._galleryPlaying=!1,this._stopGalleryProgressRaf(),this._galleryAutoplayAll&&queueMicrotask(()=>this._autoplayAdvance())}),i.addEventListener("timeupdate",()=>{this._galleryCurrentTime=i.currentTime||0}),i.addEventListener("loadedmetadata",()=>{this._galleryDuration=isFinite(i.duration)?i.duration:0,this._galleryCurrentTime=i.currentTime||0,i.playbackRate=this._galleryPlaybackSpeed||1}),i.addEventListener("durationchange",()=>{this._galleryDuration=isFinite(i.duration)?i.duration:0}),t.appendChild(i),this._previewVideoEl=i);const n=!0===this.config?.autoplay,s=this._galleryMuted;if(i.autoplay=!1,i.muted=s,i.src!==e){this._previewLoadAbort?.abort();const t=new AbortController;this._previewLoadAbort=t;const r=t.signal;if(i.src){try{i.pause()}catch(e){}try{i.removeAttribute("src"),i.load()}catch(e){}}i.src=e;const o=this._posterClient.getPosterUrl(e)||"";if(o)i.poster=o;else{i.removeAttribute("poster");const t=e;i.addEventListener("canplay",()=>{this._posterClient.getPosterUrl(t)||this._posterClient.enqueue(t)},{once:!0,signal:r}),i.addEventListener("error",()=>{const e=i.error?.code,n=3===e||4===e;this._posterClient.recordFailure(t,{hard:n}),n&&this._posterClient.dropCachedThumb(t),this.requestUpdate()},{once:!0,signal:r})}try{i.load()}catch(e){}n&&(i.muted=s,i.play().catch(()=>{}))}else{const t=this._posterClient.getPosterUrl(e)||"";t&&i.poster!==t&&(i.poster=t)}}_clearPreviewVideoHostPlayback(){const e=this.renderRoot?.querySelector("#preview-video-host");if(this._previewLoadAbort?.abort(),this._previewLoadAbort=null,this._previewVideoEl){try{this._previewVideoEl.pause()}catch(e){}this._previewVideoEl.removeAttribute("src"),this._previewVideoEl.removeAttribute("poster");try{this._previewVideoEl.load()}catch(e){}}this._previewVideoEl=null,this._previewMediaKey="",e&&(e.innerHTML="")}_scheduleVisibleMediaWork(e,t,i,n){const s=String(e||""),r=this.config?.max_media??ki,o=this._getThumbRenderLimit(r,n),a=n?t.slice(0,o).map(e=>String(e?.src||"")).filter(e=>e&&br(e)):[],l=JSON.stringify({selectedSrc:s,visibleThumbIds:a,usingMediaSource:!!n}),c=n&&s&&br(s)&&!this._mediaClient.getUrlCache().has(s);(this._prefetchKey!==l||c)&&(this._prefetchKey=l,queueMicrotask(()=>{if(this.isConnected){if(n){const e=[];if(s&&br(s)&&e.push(s),ns(this.config))for(const t of a){if(t===s)continue;const i=this._mediaClient.findMatchingSnapshotMediaId(t);!i||this._mediaClient.getUrlCache().has(i)||this._mediaClient.isResolveFailed(i)||e.push(i)}if(this._mediaClient.getPairedThumbs().size)for(const t of a){if(t===s)continue;const i=this._mediaClient.getPairedThumbs().get(t);!i||this._mediaClient.getUrlCache().has(i)||this._mediaClient.isResolveFailed(i)||e.push(i)}for(const t of a)t!==s&&e.push(t);e.length&&this._mediaClient.queueResolve(e)}this._selectedPreviewSrc=s}}))}_getAllLiveCameraEntities(){return Wn({config:this.config,hassStates:this._hass?.states,localeTag:Ho(this._hass)})}_thumbCanMultipleDelete(){if(!this.config?.allow_bulk_delete)return!1;const e=!!Zs(this.config?.delete_service),t=!!Zs(this.config?.frigate_delete_service);return e||t}_friendlyCameraName(e){return function(e){const t=String(e.entityId??"").trim();if(!t)return"";if(t.startsWith(Nn)){const i=Un(e.config,t);return i?i.name:"Stream"}const i=e.hassStates?.[t],n=String(i?.attributes?.friendly_name??"").trim();if(n)return n;const s=(t.split(".").pop()??t).replace(/_/g," ").trim();return s?s.charAt(0).toUpperCase()+s.slice(1):t}({entityId:e,config:this.config,hassStates:this._hass?.states})}_isThumbLayoutVertical(){return"vertical"===this.config?.thumb_layout}get _dtOpts(){return{pathFormat:this.config?.path_datetime_format??""}}_pathHasClass(e=[],t=""){return e.some(e=>e?.classList?.contains(t))}_hidePillsNow(){clearTimeout(this._pillsTimer),this._pillsTimer=null,this._pillsHideActive=!1,this._pillsVisible=!1,this.requestUpdate()}_showPills(e=2500){if(this._pillsVisible=!0,this.config?.persistent_controls||this._pillsHovered)return clearTimeout(this._pillsTimer),this._pillsTimer=null,this._pillsHideActive=!1,void this.requestUpdate();this._pillsHideActive||(clearTimeout(this._pillsTimer),this._pillsTimer=setTimeout(()=>{this._pillsHideActive=!1,this._showLivePicker||this.config?.persistent_controls||this._pillsHovered||this._hamburgerOpen||(this._pillsVisible=!1,this.requestUpdate())},e)),this.requestUpdate()}_showPillsHover(){this._pillsHovered=!0,this._pillsHideActive=!1,clearTimeout(this._pillsTimer),this._pillsTimer=null,this._pillsVisible=!0,this.requestUpdate()}_hidePillsHover(){this._pillsHovered=!1,this._showLivePicker||this.config?.persistent_controls||(clearTimeout(this._pillsTimer),this._pillsHideActive=!0,this._pillsTimer=setTimeout(()=>{this._pillsHideActive=!1,this._showLivePicker||this._pillsHovered||this._hamburgerOpen||(this._pillsVisible=!1,this.requestUpdate())},200))}_hideBulkDeleteHint(){this._bulkHintTimer&&(clearTimeout(this._bulkHintTimer),this._bulkHintTimer=null),this._showBulkHint&&(this._showBulkHint=!1,this.requestUpdate())}_showBulkDeleteHint(){this._bulkHintTimer&&(clearTimeout(this._bulkHintTimer),this._bulkHintTimer=null),this._showBulkHint=!0,this.requestUpdate(),this._bulkHintTimer=setTimeout(()=>{this._showBulkHint=!1,this._bulkHintTimer=null,this.requestUpdate()},5e3)}_ptzHaptic(e){if(!(e&&e.pointerType&&"touch"!==e.pointerType||"undefined"==typeof window))try{window.dispatchEvent(new CustomEvent("haptic",{detail:"light",bubbles:!0,composed:!0}))}catch(e){}}_showErrorToast(e,t){this._errorToastTimer&&(clearTimeout(this._errorToastTimer),this._errorToastTimer=null),this._errorToast={title:e,message:t},this.requestUpdate(),this._errorToastTimer=setTimeout(()=>{this._errorToast=null,this._errorToastTimer=null,this.requestUpdate()},8e3)}_dismissErrorToast(){this._errorToastTimer&&(clearTimeout(this._errorToastTimer),this._errorToastTimer=null),this._errorToast=null,this.requestUpdate()}_getVisibleObjectFilters(){return Array.isArray(this.config?.object_filters)?this.config.object_filters:[]}_hasLiveConfig(){const e=Yn(this.config).length,t=e>0?0:this._getAllLiveCameraEntities().length;return i={config:this.config,streamCount:e,cameraCount:t},!!i.config?.live_enabled&&(i.streamCount>0||i.cameraCount>0);var i}_isLiveActive(){return this._hasLiveConfig()&&"live"===this._viewMode}_openDatePicker(e){this._datePickerDays=e,this._showDatePicker=!0,this.requestUpdate()}_closeDatePicker(){this._showDatePicker=!1,this._datePickerDays=null,this.requestUpdate()}_closeLivePicker(){this._showLivePicker=!1,this._liveCameraListCache=null,this.requestUpdate()}_openDebug(){this._debugOpen=!0,this.requestUpdate()}_closeDebug(){this._debugOpen=!1,this.requestUpdate()}async _probeCameraResolution(e){this._diagResolutions||(this._diagResolutions={});const t=this._diagResolutions;if(t[e])return;const i=this._hass?.states?.[e];if(!i)return void(t[e]={state:"unavailable"});t[e]={state:"loading"};const n=async e=>{const t=await fetch(e,{cache:"no-store",credentials:"same-origin"});if(!t.ok)return{error:`HTTP ${t.status}`};const i=await t.blob(),n=URL.createObjectURL(i);try{return await new Promise(e=>{const t=new Image;t.onload=()=>e({w:t.naturalWidth,h:t.naturalHeight}),t.onerror=()=>e({error:"decode failed"}),t.src=n})}finally{URL.revokeObjectURL(n)}},s=[];i.attributes?.entity_picture&&s.push(i.attributes.entity_picture);const r=(this.config?.frigate_url||"").replace(/\/+$/,""),o=i.attributes?.camera_name;if(r&&o&&s.push(`${r}/api/${o}/latest.jpg`),!s.length)return t[e]={state:"unavailable"},void this.requestUpdate();let a="no source";for(const i of s)try{const s=await n(i);if(s.w&&s.h)return t[e]={state:"ok",w:s.w,h:s.h},void this.requestUpdate();a=s.error||"unknown"}catch(e){a=e?.message||"fetch failed"}t[e]={state:"error",reason:a},this.requestUpdate()}_buildDiagnostics(){const e=Jn(this.config);for(const t of e)this._probeCameraResolution(t);return Fo({cardVersion:jo,viewMode:this._viewMode,hass:this._hass,config:this.config,mediaState:this._mediaClient?.state??{},frigateEventsActive:!!this._frigateEventsUnsub,liveCardMounted:!!this._liveCard,liveLayoutOverride:this._liveLayoutOverride??null,cameraResolutions:this._diagResolutions??{},navigatorInfo:{userAgent:navigator.userAgent,onLine:!1!==navigator.onLine},micStats:this._micClient?.stats()??null,micError:this._micClient?.error()??null})}_diagnosticsToText(){return function(e,t=new Date){const i=["Camera Gallery Card — Diagnostics",`Generated: ${t.toISOString()}`,""];for(const t of e){i.push(`## ${t.title}`);for(const[e,n]of t.rows)i.push(`  ${e}: ${n}`);i.push("")}return i.join("\n")}(this._buildDiagnostics(),new Date)}async _copyDebug(){const e=this._diagnosticsToText();try{await navigator.clipboard.writeText(e),this._debugCopied=!0,this.requestUpdate(),setTimeout(()=>{this._debugCopied=!1,this.requestUpdate()},2e3)}catch(t){try{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this._debugCopied=!0,this.requestUpdate(),setTimeout(()=>{this._debugCopied=!1,this.requestUpdate()},2e3)}catch(e){}}}async _ensureLiveCard(){const e=this._getEffectiveLiveCamera();if(!e)return this._liveCard=null,this._liveCardConfigKey="",null;const t=`webrtc:${e}`;if(this._liveCard&&this._liveCardConfigKey===t)return this._liveCard.hass=this._hass,this._liveCard;await customElements.whenDefined("ha-camera-stream");const i=document.createElement("ha-camera-stream");return i.stateObj=this._hass?.states?.[e],i.hass=this._hass,i.muted=!0,i.controls=!1,i.style.cssText="display:block;width:100%;height:100%;margin:0;object-fit:cover;",this._liveCard=i,this._liveCardConfigKey=t,i}async _ensureLiveCardFromUrl(e){const t=`stream:${e}`;if(this._liveCard&&this._liveCardConfigKey===t)return this._liveCard;if(this._liveCardPending?.key===t)return this._liveCardPending.promise;if(this._rtcWebSocket){try{this._rtcWebSocket.close()}catch(e){}this._rtcWebSocket=null}if(this._rtcPeerConnection){try{this._rtcPeerConnection.close()}catch(e){}this._rtcPeerConnection=null}const i=this._ensureLiveCardFromUrlImpl(e,t);this._liveCardPending={key:t,promise:i};try{return await i}finally{this._liveCardPending?.key===t&&(this._liveCardPending=null)}}async _ensureLiveCardFromUrlImpl(e,t){const i=document.createElement("video");i.autoplay=!0,i.muted=!0,i.setAttribute("muted",""),i.playsInline=!0,i.controls=!1,i.style.cssText="display:block;width:100%;height:100%;margin:0;object-fit:cover;";try{const t=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});this._rtcPeerConnection=t,t.addTransceiver("video",{direction:"recvonly"}),t.addTransceiver("audio",{direction:"recvonly"}),t.ontrack=e=>{e.streams?.[0]&&(i.srcObject=e.streams[0])};const n=this._getGo2rtcUrl();let s,r;if(n)s=n.replace(/^http/,"ws")+"/api/webrtc?src="+encodeURIComponent(e),r="external go2rtc";else{const t=Date.now();if(!this._signedWsPath||t-this._signedWsPathTs>25e3){const e=await this._hass.callWS({type:"auth/sign_path",path:"/api/webrtc/ws"});this._signedWsPath=e.path,this._signedWsPathTs=t}s="ws"+this._hass.hassUrl(this._signedWsPath).substring(4)+"&url="+encodeURIComponent(e),r="AlexxIT/WebRTC integration"}if("undefined"!=typeof location&&"https:"===location.protocol&&s.startsWith("ws://"))throw new Error(`Mixed content blocked: page is HTTPS but live_go2rtc_url uses http://. Either configure go2rtc behind a TLS reverse proxy (https://) or serve the dashboard from http://. URL: ${n}`);const o=new WebSocket(s);this._rtcWebSocket=o,await new Promise((e,i)=>{let n=null;const a=`${r} WS`,l=e=>i(new Error(`${a} ${e}`+(null!==n?` (close code ${n})`:"")+` — url: ${s.replace(/authSig=[^&]+/,"authSig=…")}`)),c=setTimeout(()=>l("timeout after 10s"),1e4);o.onopen=async()=>{try{const e=await t.createOffer();await t.setLocalDescription(e),o.send(JSON.stringify({type:"webrtc/offer",value:t.localDescription.sdp}))}catch(e){i(e)}},o.onmessage=async n=>{try{const s=JSON.parse(n.data);"webrtc/answer"===s.type?(await t.setRemoteDescription({type:"answer",sdp:s.value}),clearTimeout(c),e()):"webrtc/candidate"===s.type?t.addIceCandidate({candidate:s.value,sdpMid:"0"}).catch(()=>{}):"error"===s.type&&(clearTimeout(c),i(new Error(`${r} reported: ${s.value}`)))}catch(e){i(e)}},o.onerror=()=>{clearTimeout(c),l("error")},o.onclose=e=>{n=e.code,1e3!==e.code&&(clearTimeout(c),l("closed"))}}),t.onicecandidate=e=>{e.candidate&&o.readyState===WebSocket.OPEN&&o.send(JSON.stringify({type:"webrtc/candidate",value:e.candidate.candidate}))}}catch(e){console.warn("[CGC] RTSP stream failed:",e)}return this._liveCard=i,this._liveCardConfigKey=t,i}_getGo2rtcUrl(){return String(this.config?.live_go2rtc_url||"").trim()}_getEffectiveLiveCamera(){const e=String(this._liveSelectedCamera||"").trim();if(e)return e;return this._getLiveCameraOptions()[0]||""}_getPreviewAspectRatio(e){if(!e)return this._aspectRatio||"16/9";const t=Array.isArray(this.config?.live_cameras)?this.config.live_cameras:[],i=this._getEffectiveLiveCamera?.()||"";if(i&&t.length){const e=t.find(e=>e?.entity===i||e?.url===i),n=e?.crop;if(n){const e=Number(n.w),t=Number(n.h);if(Number.isFinite(e)&&Number.isFinite(t)&&e>0&&t>0&&(100!==e||100!==t)){const i=String(n.source_ar||"16/9").split("/").map(e=>Number(e.trim()));return`${(2===i.length&&i[0]>0?i[0]:16)*e}/${(2===i.length&&i[1]>0?i[1]:9)*t}`}}}return this._aspectRatio||"16/9"}_getLiveCropStyle(){if(Qn(this.config,this._liveLayoutOverride))return"";const e=Array.isArray(this.config?.live_cameras)?this.config.live_cameras:[];if(!e.length)return"";const t=this._getEffectiveLiveCamera();if(!t)return"";const i=e.find(e=>e?.entity===t||e?.url===t),n=i?.crop;if(!n)return"";const s=Number(n.x),r=Number(n.y),o=Number(n.w),a=Number(n.h);return!Number.isFinite(o)||!Number.isFinite(a)||o<=0||a<=0||0===s&&0===r&&100===o&&100===a?"":`--crop-x:${s}%;--crop-y:${r}%;--crop-w:${o};--crop-h:${a};`}_getStreamEntries(){return Yn(this.config)}_getStreamEntryById(e){return Un(this.config,e)}_getLiveCameraOptions(){return function(e){const t=Yn(e.config).map(e=>e.id);return[...t,...Wn(e)]}({config:this.config,hassStates:this._hass?.states,localeTag:Ho(this._hass)})}_hideLiveQuickSwitchButton(){this._liveQuickSwitchTimer&&(clearTimeout(this._liveQuickSwitchTimer),this._liveQuickSwitchTimer=null),this._showLiveQuickSwitch=!1,this.requestUpdate()}_findLiveVideo(){const e=this.renderRoot?.querySelector("#live-card-host");if(!e)return null;const t=e=>{const i=e.querySelector("video");if(i)return i;for(const i of e.querySelectorAll("*"))if(i.shadowRoot){const e=t(i.shadowRoot);if(e)return e}return null};return t(e)}_setupAutoAspectRatio(){this._autoAspectObs&&(clearInterval(this._autoAspectObs),this._autoAspectObs=null),this._autoAspectVideo=null;const e=e=>{const t=e.videoWidth,i=e.videoHeight;if(!t||!i)return;const n=`${t}/${i}`;n!==this._aspectRatio&&(this._aspectRatio=n,this.requestUpdate())},t=()=>{const t=this._findLiveVideo();return t&&t!==this._autoAspectVideo?(this._autoAspectVideo=t,t.videoWidth&&t.videoHeight?e(t):t.addEventListener("loadedmetadata",()=>e(t),{once:!0}),!0):!!t};if(!t()){let e=0;this._autoAspectObs=setInterval(()=>{e+=500,(t()||e>=1e4)&&(clearInterval(this._autoAspectObs),this._autoAspectObs=null)},500)}}_parseAspectRatio(e){return{"16:9":"16/9","4:3":"4/3","1:1":"1/1"}[e]||"16/9"}_isLiveFullscreen(){return this._isLiveActive()&&(!!document.fullscreenElement||!!document.webkitFullscreenElement||!!this._liveFullscreen)}_resetZoom(){this._zoomScale=1,this._zoomPanX=0,this._zoomPanY=0,this._zoomIsPinching=!1,this._zoomIsPanning=!1,this._applyZoom()}_getZoomHost(){return this._isLiveActive()?this.renderRoot?.querySelector("#live-card-host"):this._previewOpen?this.renderRoot?.querySelector("#preview-video-host")??this.renderRoot?.querySelector(".pimg"):null}_clampZoomPan(){const e=this._getZoomHost();if(!e)return;const t=e.offsetWidth*(this._zoomScale-1)/2,i=e.offsetHeight*(this._zoomScale-1)/2;this._zoomPanX=Math.max(-t,Math.min(t,this._zoomPanX)),this._zoomPanY=Math.max(-i,Math.min(i,this._zoomPanY))}_applyZoom(){const e=this._getZoomHost(),t=this.renderRoot?.querySelector(".preview");e?this._zoomScale<=1?(e.style.transform="",e.style.transformOrigin="",this._isLiveActive()&&(e.style.cursor=""),t&&(t.style.touchAction="",t.style.cursor="")):(e.style.transformOrigin="center center",e.style.transform=`translate(${this._zoomPanX}px, ${this._zoomPanY}px) scale(${this._zoomScale})`,this._isLiveActive()&&(e.style.cursor=this._zoomIsPanning?"grabbing":"grab"),t&&(t.style.touchAction="none",t.style.cursor=this._zoomIsPanning?"grabbing":"grab")):t&&(t.style.touchAction="",t.style.cursor="")}_toggleGalleryMute(){this._galleryMuted=!this._galleryMuted,this._previewVideoEl&&(this._previewVideoEl.muted=this._galleryMuted),this.requestUpdate()}_toggleLiveMute(){const e=!this._liveMuted;this._liveMuted=e,this._liveCard&&(this._liveCard.muted=e);const t=this._findLiveVideo();t&&(t.muted=e)}_toggleLiveFullscreen(){const e=this._findLiveVideo(),t=navigator.userAgent||"",i=/Android/.test(t)&&(/Home Assistant\//.test(t)||/; wv\)/.test(t));if(document.fullscreenElement||document.webkitFullscreenElement||this._liveFullscreen)return document.fullscreenElement||document.webkitFullscreenElement?void(document.exitFullscreen||document.webkitExitFullscreen).call(document).catch(()=>{}):(this._liveFullscreen=!1,this._resetZoom(),this.removeAttribute("data-live-fs"),void this.requestUpdate());e&&e.webkitSupportsFullscreen?e.webkitEnterFullscreen():i||!document.fullscreenEnabled?(this._liveFullscreen=!0,this.setAttribute("data-live-fs",""),this.requestUpdate()):this.requestFullscreen().catch(()=>{})}async _toggleLivePip(){const e=this._findLiveVideo();if(e)try{if(document.pictureInPictureElement===e)await document.exitPictureInPicture(),this._livePipActive=!1;else{if(e.disablePictureInPicture)return;this._onLivePipChange||(this._onLivePipChange=e=>{const t=e?.target;t&&("enterpictureinpicture"===e.type?this._livePipActive=!0:"leavepictureinpicture"===e.type&&(this._livePipActive=!1),this.requestUpdate())}),e.addEventListener("enterpictureinpicture",this._onLivePipChange),e.addEventListener("leavepictureinpicture",this._onLivePipChange),await e.requestPictureInPicture(),this._livePipActive=!0}this.requestUpdate()}catch(e){}}_startGalleryProgressRaf(){if(this._galleryProgressRaf)return;const e=()=>{const t=this._previewVideoEl,i=this._galleryDuration||0;if(!t||i<=0)return void(this._galleryProgressRaf=requestAnimationFrame(e));const n=Math.max(0,Math.min(100,t.currentTime/i*100)),s=this.renderRoot?.querySelector(".vid-progress-fill");s&&(s.style.width=n+"%"),this._galleryProgressRaf=requestAnimationFrame(e)};this._galleryProgressRaf=requestAnimationFrame(e)}_stopGalleryProgressRaf(){this._galleryProgressRaf&&(cancelAnimationFrame(this._galleryProgressRaf),this._galleryProgressRaf=null)}_onVidProgressDown(e){if(!this._previewVideoEl||!this._galleryDuration)return;e.stopPropagation(),e.preventDefault();const t=e.currentTarget;try{t.setPointerCapture(e.pointerId)}catch(e){}this._scrubBarRect=t.getBoundingClientRect(),this._scrubPointerId=e.pointerId,this._applyVidScrub(e.clientX),this._onVidScrubMove||(this._onVidScrubMove=e=>{e.pointerId===this._scrubPointerId&&this._applyVidScrub(e.clientX)},this._onVidScrubUp=e=>{if(e.pointerId===this._scrubPointerId){try{t.releasePointerCapture(e.pointerId)}catch(e){}t.removeEventListener("pointermove",this._onVidScrubMove),t.removeEventListener("pointerup",this._onVidScrubUp),t.removeEventListener("pointercancel",this._onVidScrubUp),this._scrubBarRect=null,this._scrubPointerId=null}}),t.addEventListener("pointermove",this._onVidScrubMove),t.addEventListener("pointerup",this._onVidScrubUp),t.addEventListener("pointercancel",this._onVidScrubUp)}_applyVidScrub(e){const t=this._previewVideoEl,i=this._scrubBarRect;if(!t||!i||!this._galleryDuration)return;const n=Math.max(0,Math.min(1,(e-i.left)/i.width));t.currentTime=n*this._galleryDuration}_toggleAutoplayAll(){this._galleryAutoplayAll=!this._galleryAutoplayAll,this.requestUpdate()}_autoplayAdvance(){const{items:e}=this._currentFilteredItems();if(!e||0===e.length)return;if((this._selectedIndex??0)>=e.length-1)return this._galleryAutoplayAll=!1,void this.requestUpdate();this._navNext(e.length)}_cyclePlaybackSpeed(){const e=[1,2,.5],t=e.indexOf(this._galleryPlaybackSpeed||1);this._galleryPlaybackSpeed=e[(t+1)%e.length],this._previewVideoEl&&(this._previewVideoEl.playbackRate=this._galleryPlaybackSpeed),this.requestUpdate()}_toggleGalleryPlayPause(){const e=this._previewVideoEl;e&&(e.paused||e.ended?e.play().catch(()=>{}):e.pause())}async _toggleGalleryPip(){const e=this._previewVideoEl;if(e)try{if(document.pictureInPictureElement===e)await document.exitPictureInPicture(),this._galleryPipActive=!1;else{if(e.disablePictureInPicture)return;this._onGalleryPipChange||(this._onGalleryPipChange=e=>{"enterpictureinpicture"===e.type?this._galleryPipActive=!0:"leavepictureinpicture"===e.type&&(this._galleryPipActive=!1),this.requestUpdate()}),e.addEventListener("enterpictureinpicture",this._onGalleryPipChange),e.addEventListener("leavepictureinpicture",this._onGalleryPipChange),await e.requestPictureInPicture(),this._galleryPipActive=!0}this.requestUpdate()}catch(e){}}_refreshLiveStream(){try{this._liveCard?.remove?.()}catch(e){}this._liveCard=null,this._liveCardConfigKey="",this.requestUpdate()}_captureLiveSnapshot(){const e=this._findLiveVideo();if(!e||!e.videoWidth||!e.videoHeight)return void this._showSnapshotToast("Camera not ready");const t="Snapshot blocked (cross-origin stream)";try{const i=document.createElement("canvas");i.width=e.videoWidth,i.height=e.videoHeight;const n=i.getContext("2d");if(!n)return void this._showSnapshotToast("Snapshot failed (no canvas)");n.drawImage(e,0,0,i.width,i.height);const s=this._getEffectiveLiveCamera?.()||"camera",r=String(s).replace(/[^a-z0-9_.-]/gi,"_"),o=`${r}_${(new Date).toISOString().replace(/[:.]/g,"-")}.jpg`;i.toBlob(e=>{if(!e)return void this._showSnapshotToast(t);const i=URL.createObjectURL(e);try{const e=document.createElement("a");e.href=i,e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e),setTimeout(()=>URL.revokeObjectURL(i),2e3)}catch(e){console.warn("[CGC] snapshot download failed:",e),this._showSnapshotToast("Download blocked — tap to open",i),setTimeout(()=>URL.revokeObjectURL(i),6e3)}},"image/jpeg",.92)}catch(e){const i=e&&("SecurityError"===e.name||/tainted|cross-origin/i.test(String(e.message||"")));this._showSnapshotToast(i?t:"Snapshot failed"),console.warn("[CGC] snapshot failed:",e)}}_showSnapshotToast(e,t){this._snapshotToast=t?{text:e,href:t}:{text:e},this.requestUpdate(),this._snapshotToastTimer&&clearTimeout(this._snapshotToastTimer),this._snapshotToastTimer=setTimeout(()=>{this._snapshotToast=null,this._snapshotToastTimer=null,this.requestUpdate()},4500)}_renderSnapshotToast(){const e=this._snapshotToast;if(!e)return q``;const t=q`<span class="snapshot-toast-text">${e.text}</span>`;return q`
      <div class="snapshot-toast snapshot-toast--error" role="status" aria-live="polite">
        ${e.href?q`<a class="snapshot-toast-link" href=${e.href} target="_blank" rel="noopener">${t}</a>`:t}
      </div>
    `}_openImageFullscreen(){this._imgFsOpen=!0;try{this._previewVideoEl?.pause()}catch(e){}try{screen.orientation?.lock?.("landscape")}catch(e){}this._showPills(),this._onImgFsKeydown||(this._onImgFsKeydown=e=>{if(this._imgFsOpen){if("Escape"===e.key)return e.preventDefault(),void this._closeImageFullscreen();if("ArrowLeft"===e.key||"ArrowRight"===e.key){const t="ArrowRight"===e.key?1:-1,{items:i}=this._currentFilteredItems();this._navImgFs(t,i.length),e.preventDefault()}}}),window.addEventListener("keydown",this._onImgFsKeydown),this.requestUpdate()}_closeImageFullscreen(){this._imgFsOpen=!1,this._onImgFsKeydown&&window.removeEventListener("keydown",this._onImgFsKeydown);try{screen.orientation?.unlock?.()}catch(e){}this.requestUpdate()}_syncCurrentMedia(e){const t=this.config?.sync_entity;if(!t||!t.startsWith("input_text."))return;if(!e||e===this._lastSyncedSrc)return;this._lastSyncedSrc=e;const i=e.split("/").pop().split("?")[0];this._hass?.callService("input_text","set_value",{entity_id:t,value:i})}_applyLiveMuteState(){const e=this._liveMuted;this._liveCard&&(this._liveCard.muted=e);const t=this._findLiveVideo();return t&&(t.muted=e),!0}_syncLiveMuted(){this._applyLiveMuteState(),this._liveMuted||(setTimeout(()=>this._applyLiveMuteState(),2e3),setTimeout(()=>this._applyLiveMuteState(),5e3))}_micAudioProcessingFromConfig(){const e=this.config?.live_mic_audio_processing;if(!e||"object"!=typeof e)return;const t={};return"boolean"==typeof e.echo_cancellation&&(t.echoCancellation=e.echo_cancellation),"boolean"==typeof e.noise_suppression&&(t.noiseSuppression=e.noise_suppression),"boolean"==typeof e.auto_gain_control&&(t.autoGainControl=e.auto_gain_control),Object.keys(t).length>0?t:void 0}_micIceServersFromConfig(){const e=this.config?.live_mic_ice_servers;if(Array.isArray(e)&&0!==e.length)return e}_scheduleMicLevelRaf(){if("active"!==this._micState)return void this._cancelMicLevelRaf();if(null!==this._micLevelRaf)return;const e=()=>{"active"===this._micState?(this._micLevelTick=this._micLevelTick+1|0,this.requestUpdate(),this._micLevelRaf=requestAnimationFrame(e)):this._micLevelRaf=null};this._micLevelRaf=requestAnimationFrame(e)}_cancelMicLevelRaf(){null!==this._micLevelRaf&&(cancelAnimationFrame(this._micLevelRaf),this._micLevelRaf=null)}_onGridTileTap(e){this._liveLayoutOverride="single",this._liveSelectedCamera=e,this._clearLiveGrid(),this.requestUpdate(),setTimeout(()=>this._mountLiveCard(),0)}_returnToGrid(){this._liveLayoutOverride=null,this._teardownLiveView(),this.requestUpdate(),setTimeout(()=>this._mountLiveCard(),0)}_clearLiveGrid(){const e=this.renderRoot?.querySelector("#live-card-host");e&&e.classList.contains("live-grid-host")&&(e.classList.remove("live-grid-host"),e.innerHTML=""),this._liveGridTiles.clear()}async _mountLiveGrid(){if(!this._isLiveActive())return;const e=this.renderRoot?.querySelector("#live-card-host");if(!e)return;const t=Xn(this.config),{cols:i,rows:n}=(s=t.length)<=4?{cols:2,rows:2}:s<=9?{cols:3,rows:3}:{cols:4,rows:4};var s;e.classList.contains("live-grid-host")||(e.classList.add("live-grid-host"),e.innerHTML="",this._liveGridTiles.clear()),e.style.setProperty("--cgc-grid-cols",String(i)),e.style.setProperty("--cgc-grid-rows",String(n)),e.classList.toggle("live-grid-no-labels",!1===this.config?.live_grid_labels);const r=new Set(t);for(const[e,t]of this._liveGridTiles)if(!r.has(e)){try{t.remove()}catch(e){}this._liveGridTiles.delete(e)}await customElements.whenDefined("ha-camera-stream");for(const i of t){const t=this._liveGridTiles.get(i);if(t){const e=t.querySelector("ha-camera-stream");if(e){e.hass=this._hass;const t=this._hass?.states?.[i];t?.last_changed!==e.stateObj?.last_changed&&(e.stateObj=t)}continue}const n=document.createElement("div");n.className="live-grid-tile",n.dataset.entity=i,n.addEventListener("click",()=>this._onGridTileTap(i));const s=document.createElement("ha-camera-stream");s.stateObj=this._hass?.states?.[i],s.hass=this._hass,s.muted=!0,s.controls=!1,s.style.cssText="display:block;width:100%;height:100%;object-fit:cover;",n.appendChild(s);const r=document.createElement("div");r.className="live-grid-label",r.textContent=this._hass?.states?.[i]?.attributes?.friendly_name||i,n.appendChild(r),e.appendChild(n),this._liveGridTiles.set(i,n),zi(s)}}async _mountLiveCard(){if(!this._isLiveActive())return;const e=this.renderRoot?.querySelector("#live-card-host");if(!e)return;if(Qn(this.config,this._liveLayoutOverride))return this._liveCard&&this._teardownLiveView(),this._mountLiveGrid();this._clearLiveGrid();const t=this._getEffectiveLiveCamera(),i=this._getStreamEntryById(t),n=!!i,s=n?await this._ensureLiveCardFromUrl(i.url):await this._ensureLiveCard();if(!s)return;const r=s.parentElement!==e;if(r&&(e.innerHTML="",e.appendChild(s)),!n){const e=this._getEffectiveLiveCamera(),t=this._hass?.states?.[e];t?.last_changed!==s.stateObj?.last_changed&&(s.stateObj=t)}r&&(s.hass=this._hass,zi(s),this._liveMuted=!1!==this.config?.live_auto_muted,this._syncLiveMuted()),this._setupAutoAspectRatio()}_teardownLiveView(){this._autoAspectObs&&(clearInterval(this._autoAspectObs),this._autoAspectObs=null),this._autoAspectVideo=null;const e=this._findLiveVideo();if(e){try{e.pause()}catch(e){}try{e.srcObject=null}catch(e){}}if(this._rtcWebSocket){try{this._rtcWebSocket.close()}catch(e){}this._rtcWebSocket=null}if(this._rtcPeerConnection){try{this._rtcPeerConnection.close()}catch(e){}this._rtcPeerConnection=null}this._liveCardPending=null,this._micClient.stop();const t=this.renderRoot?.querySelector("#live-card-host");if(this._liveCard&&t&&t.contains(this._liveCard))try{this._liveCard.remove()}catch(e){}this._liveCard=null,this._liveCardConfigKey="",this._clearLiveGrid()}_openLivePicker(){this._getLiveCameraOptions().length<=1||(this._liveCameraListCache=this._getLiveCameraOptions(),this._showLivePicker=!0,this.requestUpdate())}_renderLiveCardHost(){return q`<div id="live-card-host" class="live-card-host"></div>`}_renderMicTalkbackBar(){if(!Zn(this._getEffectiveLiveCamera(),this.config))return q``;const e=this._micState,t=this._micErrorCode,i="ptt"===this.config?.live_mic_mode,n="active"===e?i?"Talking…":"Talking… (tap to stop)":"connecting"===e?"Connecting…":t?i?"Tap and hold to retry":"Tap to retry":i?"Hold to talk":"Tap to talk",s="active"===e?"mdi:microphone":"connecting"===e?"mdi:loading":t?"mdi:microphone-off":"mdi:microphone-outline",r="active"===e?"talkback-active":"connecting"===e?"talkback-connecting":t?"talkback-error":"talkback-idle",o="active"===e?"rgba(220, 38, 38, 0.30)":"connecting"===e?"rgba(202, 138, 4, 0.30)":t?"rgba(127, 29, 29, 0.30)":"transparent",a="bottom"===this.config?.bar_position?"top:12px;bottom:auto":"bottom:12px;top:auto";return q`
      <div
        class="mic-talkback-bar ${r}"
        role="button"
        tabindex="0"
        aria-label=${`Push-to-talk (${e})`}
        style="position:absolute;left:12px;right:12px;${a};min-height:38px;height:38px;padding:0 16px;font-size:14px;display:flex;align-items:center;justify-content:center;gap:10px;border-radius:14px;color:#fff;font-weight:600;letter-spacing:0.02em;background:${o};box-shadow:inset 0 1px 0 rgba(255,255,255,0.14);user-select:none;-webkit-user-select:none;touch-action:none;z-index:5;backdrop-filter:blur(16px) saturate(160%);-webkit-backdrop-filter:blur(16px) saturate(160%);text-shadow:0 1px 2px rgba(0,0,0,0.5);overflow:hidden;"
        @pointerdown=${this._onMicPointerDown}
        @pointerup=${this._onMicPointerUp}
        @pointercancel=${this._onMicPointerUp}
        @pointerleave=${this._onMicPointerUp}
      >
        <span class="mic-talkback-tint" aria-hidden="true" style="position:absolute;inset:0;border-radius:inherit;background:var(--cgc-talkback-bg, var(--cgc-pill-bg, #000));opacity:calc(var(--cgc-talkback-opacity, var(--cgc-bar-opacity, 30)) / 100);pointer-events:none;"></span>
        ${!1===this.config?.live_mic_waveform_enabled?q``:q`<canvas class="mic-wave" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;opacity:${"active"===e?1:0};transition:opacity 150ms ease-out;pointer-events:none;z-index:1;"></canvas>`}
        <ha-icon icon=${s} style="--mdc-icon-size:18px;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;line-height:1;position:relative;z-index:2;"></ha-icon>
        <span style="position:relative;z-index:2;">${n}</span>
      </div>
    `}_startMicWaveLoop(){if(this._micWaveRaf)return;if(!1===this.config?.live_mic_waveform_enabled)return;if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const e=()=>{const t=this.renderRoot?.querySelector("canvas.mic-wave");t&&"active"===this._micState?(this._drawMicWaveFrame(t),this._micWaveRaf=requestAnimationFrame(e)):this._stopMicWaveLoop()};this._micWaveRaf=requestAnimationFrame(e)}_stopMicWaveLoop(){this._micWaveRaf&&(cancelAnimationFrame(this._micWaveRaf),this._micWaveRaf=null);const e=this.renderRoot?.querySelector("canvas.mic-wave");if(e){const t=e.getContext("2d");t?.clearRect(0,0,e.width,e.height)}}_drawMicWaveFrame(e){qo(e,{sensitivity:this.config?.live_mic_waveform_sensitivity??"medium",freqBuf:this._micFreqBuf,getFreq:e=>this._micClient.getFrequencyData(e)})}_renderMicErrorToast(){if(!Gn(this.config))return q``;const e=this._micErrorLabel();return q`
      <div class="mic-error-toast ${e?"visible":""}" role="status" aria-live="polite">
        ${e?q`<ha-icon icon="mdi:alert-circle"></ha-icon><span>${e}</span>`:q``}
      </div>
    `}_micErrorLabelForCode(e,t){switch(e){case"https-required":return"Microphone requires HTTPS or localhost.";case"permission-denied":return"Microphone permission denied. Check browser settings.";case"device-not-found":return"No microphone found on this device.";case"device-in-use":return"Microphone is being used by another app.";case"stream-not-found":return"No go2rtc stream configured for this camera.";case"ws-connect-failed":return"Couldn't reach go2rtc. Check that the WebRTC Camera integration is installed.";case"ws-timeout":return"go2rtc handshake timed out. Check the network.";case"ws-server-error":return t?`go2rtc reported: ${t}`:"go2rtc reported an error.";case"ice-failed":return"Network blocks WebRTC. Try a different network or configure TURN.";case"":case"aborted":return"";default:return t?`Microphone failed: ${t}`:"Microphone failed."}}_micErrorLabel(){return this._micErrorLabelForCode(this._micErrorCode,this._micClient.error()?.detail)}_renderPtzOverlay(){if(!this._ptzActive)return q``;const e=this._getEffectiveLiveCamera(),t=go(this.config,e);if(!t)return q``;const i=Mo(t),n=function(e){const t=e?.live_ptz_position??"bottom-left";if("fixed"===e?.controls_mode)return t;const i=e?.bar_position;if("top"!==i&&"bottom"!==i)return t;const n=t.startsWith("top");return"top"===i&&n?t.replace("top","bottom"):"bottom"!==i||n?t:t.replace("bottom","top")}(this.config),[s,r]=n.split("-"),o=`position:absolute;${s}:12px;${r}:12px;display:flex;flex-direction:${"right"===r?"row-reverse":"row"};align-items:${"top"===s?"flex-start":"flex-end"};gap:6px;z-index:6;`,a=this._ptzJoystickThumb||{x:0,y:0},l=null!==this._ptzJoystickPointerId||!!this._ptzHoldDirection;return q`
      <!-- PTZ container — joystick + zoom-capsule + home, anchored in
           the configured corner. Flex-direction flips for right-corners
           so the joystick (first child) stays closest to the edge. -->
      <div class="ptz-block" style=${o}>
      <!-- Virtual joystick. Outer ring is the base; the inner disc is the
           thumb the user drags. Cardinal pan resolves from the thumb
           angle; magnitude is forwarded to dispatchers that honour speed
           (ONVIF). Snaps back on release. -->
      <div
        class="ptz-joystick"
        style="position:relative;width:${76}px;height:${76}px;border-radius:50%;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;"
        @pointerdown=${e=>{e.stopPropagation(),this._onPtzJoystickStart(e,23)}}
        @pointermove=${e=>{e.stopPropagation(),this._onPtzJoystickMove(e,23)}}
        @pointerup=${e=>{e.stopPropagation(),this._onPtzJoystickEnd(e)}}
        @pointercancel=${e=>{e.stopPropagation(),this._onPtzJoystickEnd(e)}}
        @pointerleave=${e=>{e.stopPropagation(),this._onPtzJoystickEnd(e)}}
        @contextmenu=${e=>e.preventDefault()}
      >
        <!-- glass-uniform base ring -->
        <span aria-hidden="true" style="position:absolute;inset:0;border-radius:inherit;background:var(--cgc-pill-bg, #000);opacity:calc(var(--cgc-bar-opacity, 30) / 100);box-shadow:inset 0 1px 0 rgba(255,255,255,0.14);backdrop-filter:blur(16px) saturate(160%);-webkit-backdrop-filter:blur(16px) saturate(160%);pointer-events:none;"></span>
        <!-- thumb disc: position lives in inline transform so the render
             layer can smooth-snap it back on release via a CSS transition. -->
        <div
          class="ptz-joystick-thumb"
          style="position:absolute;left:50%;top:50%;width:${30}px;height:${30}px;margin:-${15}px 0 0 -${15}px;border-radius:50%;background:${l?"var(--primary-color, #03a9f4)":"rgba(255,255,255,0.92)"};box-shadow:${l?"0 0 0 4px rgba(3,169,244,0.28), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.5)":"0 2px 6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6)"};transform:translate(${a.x}px, ${a.y}px);transition:${null===this._ptzJoystickPointerId?"transform 0.18s ease-out, background 0.12s ease, box-shadow 0.12s ease":"background 0.12s ease, box-shadow 0.12s ease"};pointer-events:none;"
        ></div>
      </div>

      ${i.zoomable?q`
            <!-- Zoom capsule: single glass pill split by a thin divider
                 (ACC-inspired, not a copy — single background and rounded
                 corners shared between in/out so the pair reads as one
                 control instead of two stacked pills). -->
            <div
              class="ptz-zoom-capsule"
              style="position:relative;width:34px;height:${76}px;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;box-shadow:inset 0 1px 0 rgba(255,255,255,0.14);backdrop-filter:blur(16px) saturate(160%);-webkit-backdrop-filter:blur(16px) saturate(160%);"
            >
              <span aria-hidden="true" style="position:absolute;inset:0;border-radius:inherit;background:var(--cgc-pill-bg, #000);opacity:calc(var(--cgc-bar-opacity, 30) / 100);pointer-events:none;"></span>
              <button
                class="ptz-zoom-btn"
                type="button"
                aria-label="Zoom in"
                title="Zoom in"
                @pointerdown=${e=>{e.stopPropagation(),this._onPtzActionPress("zoom_in",e)}}
                @pointerup=${e=>{e.stopPropagation(),this._onPtzActionRelease("zoom_in",e)}}
                @pointerleave=${e=>{e.stopPropagation(),this._onPtzActionRelease("zoom_in",e)}}
                @pointercancel=${e=>{e.stopPropagation(),this._onPtzActionRelease("zoom_in",e)}}
                style="position:relative;flex:1;width:100%;display:flex;align-items:center;justify-content:center;border:0;color:#fff;background:${"zoom_in"===this._ptzHoldAction?"rgba(3,169,244,0.35)":"transparent"};cursor:pointer;touch-action:none;user-select:none;-webkit-user-select:none;transition:background 0.12s ease;"
              >
                <ha-icon icon="mdi:magnify-plus-outline" style="--mdc-icon-size:18px;width:18px;height:18px;position:relative;z-index:1;text-shadow:0 1px 2px rgba(0,0,0,0.5);"></ha-icon>
              </button>
              <!-- divider — picks up the icon-shadow vibe but as a hairline -->
              <span aria-hidden="true" style="position:relative;z-index:1;height:1px;background:rgba(255,255,255,0.18);pointer-events:none;"></span>
              <button
                class="ptz-zoom-btn"
                type="button"
                aria-label="Zoom out"
                title="Zoom out"
                @pointerdown=${e=>{e.stopPropagation(),this._onPtzActionPress("zoom_out",e)}}
                @pointerup=${e=>{e.stopPropagation(),this._onPtzActionRelease("zoom_out",e)}}
                @pointerleave=${e=>{e.stopPropagation(),this._onPtzActionRelease("zoom_out",e)}}
                @pointercancel=${e=>{e.stopPropagation(),this._onPtzActionRelease("zoom_out",e)}}
                style="position:relative;flex:1;width:100%;display:flex;align-items:center;justify-content:center;border:0;color:#fff;background:${"zoom_out"===this._ptzHoldAction?"rgba(3,169,244,0.35)":"transparent"};cursor:pointer;touch-action:none;user-select:none;-webkit-user-select:none;transition:background 0.12s ease;"
              >
                <ha-icon icon="mdi:magnify-minus-outline" style="--mdc-icon-size:18px;width:18px;height:18px;position:relative;z-index:1;text-shadow:0 1px 2px rgba(0,0,0,0.5);"></ha-icon>
              </button>
            </div>
          `:q``}

      ${i.homeable?q`
            <!-- Home: own rounded-square button next to the zoom capsule,
                 same glass treatment, slightly smaller so it doesn't
                 compete with the joystick as the dominant element. -->
            <button
              class="ptz-home"
              type="button"
              aria-label="Home"
              title="Home"
              @pointerdown=${e=>e.stopPropagation()}
              @click=${e=>{e.stopPropagation(),this._onPtzHome()}}
              style="position:relative;width:34px;height:${76}px;border-radius:14px;border:0;color:#fff;background:transparent;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px 0 rgba(255,255,255,0.14);backdrop-filter:blur(16px) saturate(160%);-webkit-backdrop-filter:blur(16px) saturate(160%);cursor:pointer;overflow:hidden;"
            >
              <span aria-hidden="true" style="position:absolute;inset:0;border-radius:inherit;background:${this._ptzHomePressed?"rgba(3,169,244,0.45)":"var(--cgc-pill-bg, #000)"};opacity:${this._ptzHomePressed?"1":"calc(var(--cgc-bar-opacity, 30) / 100)"};transition:background 0.12s ease, opacity 0.12s ease;pointer-events:none;"></span>
              <ha-icon icon="mdi:home-outline" style="--mdc-icon-size:18px;width:18px;height:18px;position:relative;z-index:1;text-shadow:0 1px 2px rgba(0,0,0,0.5);"></ha-icon>
            </button>
          `:q``}
      </div>
    `}_togglePtz(){this._ptzActive=!this._ptzActive,this._ptzActive||this._stopPtzHold()}_currentPtzSpeed(e){if(e&&Number.isFinite(e.speed))return e.speed;const t=this.config?.live_ptz_speed;return Number.isFinite(t)?t:5}_ptzPanCall(e,t,i){const n=this._getEffectiveLiveCamera(),s=i??go(this.config,n);if(!s||!this._hass||!n)return;let r=this._currentPtzSpeed(s);Number.isFinite(this._ptzJoystickMagnitude)&&this._ptzJoystickMagnitude>0&&(r=Math.max(1,Math.round(9*this._ptzJoystickMagnitude)));let o=null;if("start"===t&&this._ptzJoystickAxes){const{horizontal:t,vertical:i}=this._ptzJoystickAxes;"left"===e||"right"===e?i&&(o=i):t&&(o=t)}(function(e,t,i,n,s,r,o){const a=function(e,t){return e.actions?.[t]??null}(i,n);if(a){if("start"===s)return fo(e,a.start);if(a.stop)return fo(e,a.stop)}if("ezviz"===i.type){if("stop"===s)return Promise.resolve(void 0);const r=vo(i,n)??bo(t,n,i.button_prefix,e.states);return e.callService("button","press",{},{entity_id:r})}if("reolink"===i.type){if("stop"===s){const n=vo(i,"stop")??$o(t,i.button_prefix,e.states);return n?e.callService("button","press",{},{entity_id:n}):Promise.resolve(void 0)}const r=vo(i,n)??bo(t,n,i.button_prefix,e.states);return e.callService("button","press",{},{entity_id:r})}if("onvif"===i.type){if("stop"===s)return e.callService("onvif","ptz",{move_mode:"Stop"},{entity_id:t});const a=Lo(i,r)/9,l={left:{key:"pan",value:"LEFT"},right:{key:"pan",value:"RIGHT"},up:{key:"tilt",value:"UP"},down:{key:"tilt",value:"DOWN"}},c=l[n],d={move_mode:"ContinuousMove",speed:a,[c.key]:c.value};if(o){const e=l[o];e.key!==c.key&&(d[e.key]=e.value)}return e.callService("onvif","ptz",d,{entity_id:t})}return"frigate"===i.type?"stop"===s?e.callService("frigate","ptz",{action:"stop"},{entity_id:t}):e.callService("frigate","ptz",{action:"move",argument:n},{entity_id:t}):Promise.reject(new Error(`Unknown PTZ type: ${String(i.type)}`))})(this._hass,n,s,e,t,r,o).catch(e=>{try{console.warn("CGC PTZ pan failed:",e)}catch(e){}})}_onPtzPress(e,t){this._ptzHoldDirection&&this._ptzHoldDirection!==e&&this._stopPtzHold(),this._ptzHaptic(t);try{t?.currentTarget?.setPointerCapture?.(t.pointerId)}catch(e){}this._ptzHoldDirection=e,this._ptzHoldPointerId=t?.pointerId??null;const i=this._getEffectiveLiveCamera(),n=go(this.config,i);this._ptzPanCall(e,"start",n);const s=!!n&&Mo(n).continuous;this._ptzHoldTimer&&clearInterval(this._ptzHoldTimer),s||(this._ptzHoldTimer=setInterval(()=>{this._ptzHoldDirection&&this._ptzPanCall(this._ptzHoldDirection,"start")},250))}_onPtzActionPress(e,t){const i=this._getEffectiveLiveCamera(),n=go(this.config,i);if(!n||!this._hass||!i)return;(this._ptzHoldDirection||this._ptzHoldAction)&&this._stopPtzHold(),this._ptzHaptic(t);try{t?.currentTarget?.setPointerCapture?.(t.pointerId)}catch(e){}this._ptzHoldAction=e,this._ptzHoldPointerId=t?.pointerId??null;const s=this._currentPtzSpeed(n);Po(this._hass,i,n,e,"start",s).catch(e=>{try{console.warn("CGC PTZ zoom failed:",e)}catch(e){}});const r=Mo(n).continuous;this._ptzHoldTimer&&clearInterval(this._ptzHoldTimer),r||(this._ptzHoldTimer=setInterval(()=>{this._ptzHoldAction&&Po(this._hass,i,n,this._ptzHoldAction,"start",s).catch(()=>{})},250))}_onPtzActionRelease(e,t){if(void 0===t?.pointerId||null===this._ptzHoldPointerId||t.pointerId===this._ptzHoldPointerId){try{t?.currentTarget?.releasePointerCapture?.(t.pointerId)}catch(e){}this._stopPtzHold()}}_ptzJoystickGeometryFrom(e){if(!e?.getBoundingClientRect)return null;const t=e.getBoundingClientRect();return{cx:t.left+t.width/2,cy:t.top+t.height/2,r:Math.min(t.width,t.height)/2}}_onPtzJoystickStart(e,t){const i=this._ptzJoystickGeometryFrom(e?.currentTarget);if(i){this._ptzJoystickPointerId=e?.pointerId??null,this._ptzJoystickGeom=i;try{e.currentTarget?.setPointerCapture?.(e.pointerId)}catch(e){}this._onPtzJoystickUpdate(e,i,t)}}_onPtzJoystickMove(e,t){if(null===this._ptzJoystickPointerId)return;if(e.pointerId!==this._ptzJoystickPointerId)return;const i=this._ptzJoystickGeom;i&&this._onPtzJoystickUpdate(e,i,t)}_onPtzJoystickEnd(e){if(null!==this._ptzJoystickPointerId&&(void 0===e?.pointerId||e.pointerId===this._ptzJoystickPointerId)){try{e?.currentTarget?.releasePointerCapture?.(e.pointerId)}catch(e){}this._ptzJoystickPointerId=null,this._ptzJoystickGeom=null,this._ptzJoystickThumb={x:0,y:0},this._ptzJoystickMagnitude=null,this._ptzJoystickAxes=null,this._stopPtzHold(),this.requestUpdate()}}_onPtzJoystickUpdate(e,t,i){const{direction:n,horizontal:s,vertical:r,magnitude:o}=function(e,t,i,n,s){if(!Number.isFinite(i)||i<=0)return{direction:null,horizontal:null,vertical:null,magnitude:0};const r=n-e,o=s-t,a=Math.hypot(r,o),l=Math.min(1,a/i);if(l<.15)return{direction:null,horizontal:null,vertical:null,magnitude:0};const c=.15*i*.5,d=Math.abs(r)>=c?r>=0?"right":"left":null,h=Math.abs(o)>=c?o>=0?"down":"up":null;return{direction:Math.abs(r)>=Math.abs(o)?r>=0?"right":"left":o>=0?"down":"up",horizontal:d,vertical:h,magnitude:l}}(t.cx,t.cy,t.r,e.clientX??t.cx,e.clientY??t.cy);this._ptzJoystickMagnitude=n?o:null,this._ptzJoystickAxes=n?{horizontal:s,vertical:r}:null,n?n!==this._ptzHoldDirection&&this._onPtzPress(n,e):(this._ptzHoldDirection||this._ptzHoldAction)&&this._stopPtzHold();const a=(e.clientX??t.cx)-t.cx,l=(e.clientY??t.cy)-t.cy,c=Math.hypot(a,l);let d,h;if(c<=i||0===c)d=Math.round(a),h=Math.round(l);else{const e=i/c;d=Math.round(a*e),h=Math.round(l*e)}const p=this._ptzJoystickThumb;p&&p.x===d&&p.y===h||(this._ptzJoystickThumb={x:d,y:h},this.requestUpdate())}_onPtzHome(){const e=this._getEffectiveLiveCamera(),t=go(this.config,e);if(!t||!this._hass||!e)return;this._ptzHaptic(null),this._ptzHomePressed=!0,this._ptzHomePressedTimer&&clearTimeout(this._ptzHomePressedTimer),this._ptzHomePressedTimer=setTimeout(()=>{this._ptzHomePressed=!1,this._ptzHomePressedTimer=null,this.requestUpdate()},220),this.requestUpdate();const i=this._currentPtzSpeed(t);Po(this._hass,e,t,"home","start",i).catch(e=>{try{console.warn("CGC PTZ home failed:",e)}catch(e){}})}_stopPtzHold(){this._ptzHoldTimer&&(clearInterval(this._ptzHoldTimer),this._ptzHoldTimer=null);const e=this._ptzHoldDirection,t=this._ptzHoldAction;if(this._ptzHoldDirection=null,this._ptzHoldAction=null,this._ptzHoldPointerId=null,e&&this._ptzPanCall(e,"stop"),t){const e=this._getEffectiveLiveCamera(),i=go(this.config,e);if(i&&this._hass&&e){const n=this._currentPtzSpeed(i);Po(this._hass,e,i,t,"stop",n).catch(()=>{})}}}_renderGalleryPillById(e,t){switch(e){case"object_indicator":{const e=this._objectForSrc(t.selected),i=e?jn(e,this._customIcons,"mdi:magnify"):null;return i?q`<div class="gallery-pill live-pill-btn gallery-pill--info">
          <ha-icon icon="${i}"></ha-icon>
        </div>`:null}case"index_counter":return q`<div class="gallery-pill live-pill-btn gallery-pill--wide gallery-pill--info">
          <span>${t.idx+1}/${t.filtered.length}</span>
        </div>`;case"autoplay_all":{const e=!!this._galleryAutoplayAll;return q`
          <button
            class="gallery-pill live-pill-btn ${e?"active":""}"
            title=${e?"Stop auto-play":"Auto-play all clips"}
            aria-pressed=${e?"true":"false"}
            @pointerdown=${e=>e.stopPropagation()}
            @click=${e=>{e.stopPropagation(),this._toggleAutoplayAll(),this._showPills()}}
          >
            <ha-icon icon="mdi:playlist-play"></ha-icon>
          </button>
        `}case"playback_speed":{if(!t.selectedIsVideo)return null;const e=this._galleryPlaybackSpeed||1;return q`
          <button
            class="gallery-pill live-pill-btn ${1!==e?"active":""}"
            title="Playback speed (tap to cycle)"
            @pointerdown=${e=>e.stopPropagation()}
            @click=${e=>{e.stopPropagation(),this._cyclePlaybackSpeed(),this._showPills()}}
          >
            <span class="vid-speed-label">${.5===e?".5×":2===e?"2×":"1×"}</span>
          </button>
        `}case"mute":return t.selectedIsVideo?q`
          <button
            class="gallery-pill live-pill-btn"
            @pointerdown=${e=>e.stopPropagation()}
            @click=${e=>{e.stopPropagation(),this._toggleGalleryMute()}}
          >
            <ha-icon icon=${this._galleryMuted?"mdi:volume-off":"mdi:volume-high"}></ha-icon>
          </button>
        `:null;case"pip":{if(!t.selectedIsVideo)return null;if(!document.pictureInPictureEnabled)return null;const e=!!this._galleryPipActive;return q`
          <button
            class="gallery-pill live-pill-btn ${e?"active":""}"
            title="Picture-in-Picture"
            aria-pressed=${e?"true":"false"}
            @pointerdown=${e=>e.stopPropagation()}
            @click=${e=>{e.stopPropagation(),this._toggleGalleryPip()}}
          >
            <ha-icon icon="mdi:picture-in-picture-bottom-right"></ha-icon>
          </button>
        `}case"fullscreen":return!t.selectedHasUrl||t.noResultsForFilter?null:q`
          <button
            class="gallery-pill live-pill-btn"
            @pointerdown=${e=>e.stopPropagation()}
            @click=${e=>{e.stopPropagation(),this._openImageFullscreen()}}
          >
            <ha-icon icon="mdi:fullscreen"></ha-icon>
          </button>
        `;default:return null}}_renderLivePillById(e){switch(e){case"mute":return q`<button class="gallery-pill live-pill-btn" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._toggleLiveMute()}}>
          <ha-icon icon=${this._liveMuted?"mdi:volume-off":"mdi:volume-high"}></ha-icon>
        </button>`;case"picker":return this._getLiveCameraOptions().length<=1?null:q`<button class="gallery-pill live-pill-btn" title="Switch camera" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._openLivePicker()}}>
          <ha-icon icon="mdi:cctv"></ha-icon>
        </button>`;case"pip":{if(!document.pictureInPictureEnabled)return null;const e=!!this._livePipActive;return q`<button class="gallery-pill live-pill-btn ${e?"active":""}" title="Picture-in-Picture" aria-pressed=${e?"true":"false"} @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._toggleLivePip()}}>
          <ha-icon icon="mdi:picture-in-picture-bottom-right"></ha-icon>
        </button>`}case"fullscreen":return q`<button class="gallery-pill live-pill-btn" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._toggleLiveFullscreen()}}>
          <ha-icon icon=${document.fullscreenElement||document.webkitFullscreenElement||this._liveFullscreen?"mdi:fullscreen-exit":"mdi:fullscreen"}></ha-icon>
        </button>`;case"snapshot":return q`<button class="gallery-pill live-pill-btn" title="Snapshot" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._captureLiveSnapshot()}}>
          <ha-icon icon="mdi:camera"></ha-icon>
        </button>`;case"refresh":return q`<button class="gallery-pill live-pill-btn" title="Refresh stream" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._refreshLiveStream()}}>
          <ha-icon icon="mdi:refresh"></ha-icon>
        </button>`;default:return null}}_renderLiveInner(){if(Qn(this.config,this._liveLayoutOverride))return q``;const e=this._getEffectiveLiveCamera();if(!!!this._getStreamEntryById(e)){const t=e;if(!t)return q`<div class="preview-empty">No live camera configured.</div>`;const i=this._hass?.states?.[t];if(!i)return q`<div class="preview-empty">Camera entity not found: ${t}</div>`;const n=i.state??"";if("unavailable"===n||"unknown"===n)return q`
          <div class="live-offline">
            ${q``}
            <div class="live-offline-badge">
              <ha-icon icon="mdi:camera-off"></ha-icon>
              <span>${this._friendlyCameraName(t)}</span>
              <span class="live-offline-state">Offline</span>
            </div>
          </div>
        `}return q`
      <div class="live-stage">
        ${this._renderLivePicker()}
      </div>
    `}_renderDatePicker(){if(!this._showDatePicker)return q``;const e=this._datePickerDays||[],t=new Map;for(const i of e){const[e,n]=i.split("-"),s=`${e}-${n}`;t.has(s)||t.set(s,[]),t.get(s).push(i)}const i=this._selectedDay;return q`
      <div class="live-picker-backdrop" @click=${()=>this._closeDatePicker()}></div>
      <div class="live-picker date-picker" @click=${e=>e.stopPropagation()}>
        <div class="live-picker-head">
          <div class="live-picker-title">Select date</div>
          <button class="live-picker-close" @click=${()=>this._closeDatePicker()} title="Close" aria-label="Close">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="live-picker-list">
          ${[...t.entries()].map(([e,t])=>q`
            <div class="dp-month-header">
              ${function(e,t){if(!e)return"";try{return new Intl.DateTimeFormat(t?.language,{month:"long",year:"numeric"}).format(new Date(`${e}-01T00:00:00`))}catch{return e}}(e,this._hass?.locale)}
            </div>
            ${t.map(e=>{const t=e===i;return q`
                <button
                  class="live-picker-item ${t?"on":""}"
                  @click=${()=>{this._selectedDay=e,this._selectedIndex=0,this._pendingScrollToI=null,this._forceThumbReset=!0,this._exitSelectMode(),this.config?.clean_mode&&(this._previewOpen=!1),this._closeDatePicker()}}
                >
                  <span class="dp-day-label">${Ro(e,this._hass?.locale)}</span>
                  ${t?q`<ha-icon class="live-picker-check" icon="mdi:check"></ha-icon>`:q``}
                </button>
              `})}
          `)}
        </div>
      </div>
    `}_renderLivePicker(){const e=this._liveCameraListCache||this._getLiveCameraOptions();if(!e.length||!this._showLivePicker)return q``;const t=this._getEffectiveLiveCamera();return q`
      <div
        class="live-picker-backdrop"
        @click=${()=>this._closeLivePicker()}
      ></div>

      <div class="live-picker" @click=${e=>e.stopPropagation()}>
        <div class="live-picker-head">
          <div class="live-picker-title">Select camera</div>
          <button
            class="live-picker-close"
            @click=${()=>this._closeLivePicker()}
            title="Close"
            aria-label="Close"
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

        <div class="live-picker-list">
          ${e.map(e=>{const i=e===t;return q`
              <button
                class="live-picker-item ${i?"on":""}"
                @click=${()=>this._selectLiveCamera(e)}
                title="${this._friendlyCameraName(e)}"
              >
                <div class="live-picker-item-left">
                  <ha-icon icon="mdi:video"></ha-icon>
                  <div class="live-picker-item-name">
                    <span>${this._friendlyCameraName(e)}</span>
                    <span class="live-picker-item-entity">${e}</span>
                  </div>
                </div>

                ${i?q`<ha-icon
                      class="live-picker-check"
                      icon="mdi:check"
                    ></ha-icon>`:q``}
              </button>
            `})}
        </div>
      </div>
    `}async _selectLiveCamera(e){const t=String(e||"").trim();t&&(this._hideLiveQuickSwitchButton(),this._teardownLiveView(),this._signedWsPath=null,this._liveSelectedCamera=t,this._aspectRatio=this._parseAspectRatio(this.config?.aspect_ratio),this._showLivePicker=!1,this.requestUpdate(),await this.updateComplete,this._mountLiveCard())}_navLiveCamera(e){const t=this._getLiveCameraOptions();if(t.length<=1)return;const i=this._getEffectiveLiveCamera(),n=t[function(e,t,i){return i<=0?e:((e+t)%i+i)%i}(t.indexOf(i),e,t.length)];n&&(this._selectLiveCamera(n),this._showPills())}_setViewMode(e){const t="live"===e?"live":"media";if("live"===t&&!this._hasLiveConfig())return;const i="live"===this._viewMode;this._viewMode=t,"live"===t&&navigator.maxTouchPoints>0&&this._showPills(5e3),"live"!==t&&(this._hideLiveQuickSwitchButton(),this._showLivePicker=!1,this._resetZoom(),this._aspectRatio=this._parseAspectRatio(this.config?.aspect_ratio),i&&this._teardownLiveView()),this.requestUpdate()}_showLiveQuickSwitchButton(){this._isLiveActive()&&(this._getLiveCameraOptions().length<=1||(this._showLiveQuickSwitch=!0,this.requestUpdate(),this._liveQuickSwitchTimer&&clearTimeout(this._liveQuickSwitchTimer),this._liveQuickSwitchTimer=setTimeout(()=>{this._showLiveQuickSwitch=!1,this.requestUpdate()},2500)))}_onPreviewClick(e){if(!this._isLiveActive())return;const t=e.composedPath?.()||[];return this._pathHasClass(t,"live-picker")||this._pathHasClass(t,"live-picker-backdrop")||this._pathHasClass(t,"live-quick-switch")?void 0:this._hamburgerOpen&&!this._pathHasClass(t,"live-hamburger-wrap")?(this._hamburgerOpen=!1,void this._showPills(2500)):void this._showLiveQuickSwitchButton()}_toggleLiveMode(){if(this._hasLiveConfig()){if(this._isLiveActive())return this._hideLiveQuickSwitchButton(),this._setViewMode("media"),void(this._showLivePicker=!1);this._hideLiveQuickSwitchButton(),this._setViewMode("live"),this._showLivePicker=!1,this.requestUpdate()}}_clearThumbLongPress(){this._thumbLongPressTimer&&(clearTimeout(this._thumbLongPressTimer),this._thumbLongPressTimer=null)}_closeThumbMenu(){this._thumbMenuItem=null,this._thumbMenuOpen=!1,this._thumbMenuOpenedAt=0,this.requestUpdate()}_getThumbActions(e){const t=[];return this._thumbCanDelete(e)&&t.push({danger:!0,icon:"mdi:trash-can-outline",id:"delete",label:"Delete"}),this._thumbCanMultipleDelete()&&t.push({icon:"mdi:select-multiple",id:"multiple_delete",label:"Multiple delete"}),this._thumbCanDownload(e)&&t.push({icon:"mdi:download",id:"download",label:"Download"}),t.sort((e,t)=>e.label.localeCompare(t.label,Ho(this._hass))),t}async _handleThumbAction(e,t){if(!t?.src)return;const i=("media"===this.config?.source_mode||"combined"===this.config?.source_mode)&&br(t.src);let n=t.src;if(i&&(n=this._mediaClient.getUrlCache().get(t.src)||"",!n))try{n=await this._mediaClient.resolve(t.src)}catch(e){}return"delete"===e?(this._closeThumbMenu(),void await this._deleteSingle(t.src)):"multiple_delete"===e?(this._closeThumbMenu(),this._selectMode=!0,this._selectedSet?.clear?.(),this._selectedSet?.add?.(t.src),this._showBulkDeleteHint(),void this.requestUpdate()):void("download"===e&&(this._closeThumbMenu(),await this._downloadSrc(n||t.src)))}_isFrigateMediaItem(e){return br(e)&&is(e)}_onThumbContextMenu(e,t){this._selectMode||(e.preventDefault(),e.stopPropagation(),this._clearThumbLongPress(),this._openThumbMenu(t),this._suppressNextThumbClick=!0)}_onThumbPointerCancel(){if(this._clearThumbLongPress(),this._thumbSwipeEl){const e=this._thumbSwipeEl;e.classList.remove("swiping"),e.style.removeProperty("--swipe-dx"),e.style.removeProperty("--swipe-progress")}this._thumbSwipeEl=null,this._thumbSwipeItem=null,this._thumbSwipeActive=!1,this._thumbSwipeDx=0}_onThumbPointerDown(e,t){this._selectMode||t?.src&&(null!=e?.button&&0!==e.button||(this._thumbLongPressStartX=e.clientX??0,this._thumbLongPressStartY=e.clientY??0,this._clearThumbLongPress(),this._thumbLongPressTimer=setTimeout(()=>{this._thumbLongPressTimer=null,this._suppressNextThumbClick=!0,this._openThumbMenu(t)},520),"touch"===e.pointerType&&this._thumbCanDelete(t)&&(this._thumbSwipeEl=e.currentTarget,this._thumbSwipeItem=t,this._thumbSwipeStartX=e.clientX??0,this._thumbSwipeStartY=e.clientY??0,this._thumbSwipeDx=0,this._thumbSwipeActive=!1)))}_onThumbPointerMove(e){if(this._thumbLongPressTimer){const t=Math.abs((e.clientX??0)-this._thumbLongPressStartX),i=Math.abs((e.clientY??0)-this._thumbLongPressStartY);(t>12||i>12)&&this._clearThumbLongPress()}if(!this._thumbSwipeEl)return;const t=(e.clientX??0)-this._thumbSwipeStartX,i=(e.clientY??0)-this._thumbSwipeStartY;if(!this._thumbSwipeActive){if(Math.abs(i)>10&&Math.abs(i)>1.2*Math.abs(t))return this._thumbSwipeEl=null,this._thumbSwipeItem=null,this._thumbSwipeActive=!1,void(this._thumbSwipeDx=0);if(!(t<-10&&Math.abs(t)>1.3*Math.abs(i)))return;this._thumbSwipeActive=!0,this._suppressNextThumbClick=!0}const n=Math.max(-120,Math.min(0,t));this._thumbSwipeDx=n;const s=Math.min(1,Math.abs(n)/-80);this._thumbSwipeEl.style.setProperty("--swipe-dx",`${n}px`),this._thumbSwipeEl.style.setProperty("--swipe-progress",s.toFixed(3)),this._thumbSwipeEl.classList.add("swiping"),e.preventDefault?.()}_onThumbPointerUp(){if(this._clearThumbLongPress(),this._thumbSwipeEl&&this._thumbSwipeActive){const e=this._thumbSwipeEl,t=this._thumbSwipeItem,i=this._thumbSwipeDx<=-80;if(this._thumbSwipeEl=null,this._thumbSwipeItem=null,this._thumbSwipeActive=!1,this._thumbSwipeDx=0,i){e.classList.remove("swiping"),e.classList.add("swipe-off"),e.style.removeProperty("--swipe-dx"),e.style.removeProperty("--swipe-progress");try{navigator.vibrate?.(15)}catch(e){}setTimeout(()=>this._handleSwipeDelete(t,e),220)}else e.classList.remove("swiping"),e.style.removeProperty("--swipe-dx"),e.style.removeProperty("--swipe-progress")}else this._thumbSwipeEl&&(this._thumbSwipeEl=null,this._thumbSwipeItem=null,this._thumbSwipeActive=!1,this._thumbSwipeDx=0)}async _handleSwipeDelete(e,t){e?.src&&(await this._deleteSingle(e.src),t&&t.isConnected&&(t.classList.remove("swiping","swipe-off"),t.style.removeProperty("--swipe-dx"),t.style.removeProperty("--swipe-progress")))}_openThumbMenu(e){if(e?.src){this._thumbMenuItem=e,this._thumbMenuOpen=!0,this._thumbMenuOpenedAt=Date.now(),this.requestUpdate();try{navigator.vibrate?.(12)}catch(e){}}}_renderDebugModal(){if(!this._debugOpen)return q``;const e=this._buildDiagnostics();return q`
      <div class="cgc-debug-backdrop" @click=${()=>this._closeDebug()}></div>
      <div class="cgc-debug-modal" @click=${e=>e.stopPropagation()}>
        <div class="cgc-debug-head">
          <div class="cgc-debug-head-title">
            <ha-icon icon="mdi:bug-outline"></ha-icon>
            <span>Diagnostics</span>
          </div>
          <button class="cgc-debug-close" @click=${()=>this._closeDebug()} aria-label="Close">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="cgc-debug-body">
          ${e.map(({title:e,icon:t,rows:i})=>q`
            <div class="cgc-debug-section">
              <div class="cgc-debug-section-head">
                <ha-icon icon=${t}></ha-icon>
                <span>${e}</span>
              </div>
              <div class="cgc-debug-rows">
                ${i.map(([e,t,i])=>q`
                  <div class="cgc-debug-row">
                    <div class="cgc-debug-key">${e}</div>
                    <div class="cgc-debug-val ${i?"has-status status-"+i:""}">
                      ${i?q`<span class="cgc-debug-dot"></span>`:q``}
                      <span class="cgc-debug-val-text">${t}</span>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          `)}
        </div>
        <div class="cgc-debug-foot">
          <button class="cgc-debug-copy ${this._debugCopied?"copied":""}" @click=${()=>this._copyDebug()}>
            <ha-icon icon=${this._debugCopied?"mdi:check":"mdi:content-copy"}></ha-icon>
            <span>${this._debugCopied?"Copied to clipboard":"Copy full report"}</span>
          </button>
        </div>
      </div>
    `}_renderThumbActionSheet(){if(!this._thumbMenuOpen||!this._thumbMenuItem)return q``;const e=this._thumbMenuItem,t=this._getThumbActions(e),i=this._tsLabelFromFilename(e.src);return q`
      <div
        class="thumb-menu-backdrop"
        @click=${e=>{e.preventDefault(),e.stopPropagation(),this._thumbMenuCanAcceptTap()&&this._closeThumbMenu()}}
      ></div>

      <div
        class="thumb-menu-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Thumbnail actions"
        @click=${e=>e.stopPropagation()}
      >
        <div class="thumb-menu-handle"></div>

        <div class="thumb-menu-head">
          <div class="thumb-menu-subtitle">${i||"Media item"}</div>
        </div>

        <div class="thumb-menu-list">
          ${t.map(t=>q`
              <button
                class="thumb-menu-item ${t.danger?"danger":""}"
                @click=${i=>{i.preventDefault(),i.stopPropagation(),this._thumbMenuCanAcceptTap()&&this._handleThumbAction(t.id,e)}}
              >
                <div class="thumb-menu-item-left">
                  <ha-icon icon="${t.icon}"></ha-icon>
                  <span>${t.label}</span>
                </div>
                <ha-icon
                  class="thumb-menu-item-arrow"
                  icon="mdi:chevron-right"
                ></ha-icon>
              </button>
            `)}
        </div>

        <div class="thumb-menu-footer">
          <button
            class="thumb-menu-cancel"
            @click=${e=>{e.preventDefault(),e.stopPropagation(),this._thumbMenuCanAcceptTap()&&this._closeThumbMenu()}}
          >
            Cancel
          </button>
        </div>
      </div>
    `}_thumbCanDelete(e){return Rr({src:e?.src,config:this.config,srcEntityMap:this._sensorClient.getSrcEntityMap()})}_thumbCanDownload(e){return!!e?.src}_thumbMenuCanAcceptTap(){return Date.now()-(this._thumbMenuOpenedAt||0)>700}async _deleteSingle(e){const t=os(e),i=null!==t&&is(e);if(this.config?.delete_confirm){const e=i?"Delete this Frigate event?":"Are you sure you want to delete this file?";if(!window.confirm(e))return}if(!await jr({hass:this._hass,src:e,config:this.config,srcEntityMap:this._sensorClient.getSrcEntityMap(),confirm:()=>!0}))return void this._showErrorToast("Delete failed",i?"Frigate event could not be deleted. Check that the rest_command service is configured correctly and can reach Frigate.":"File could not be deleted. Check the delete_service config and that the file still exists.");this._deleted.add(e),this._selectedSet?.delete?.(e),this._invalidateItems();let n=[];t&&(this._deletedFrigateEventIds.add(t),n=(this._mediaClient?.state?.list||[]).map(e=>e?.id).filter(i=>i&&i!==e&&i.includes(t))),console.info("[cgc delete]",t?`Frigate event_id=${t} — deleted src=${e} — also hiding ${n.length} matching item(s):`:`non-Frigate src=${e}`,n);this._items().length||(this._selectedIndex=0),this.requestUpdate()}async _downloadSrc(e){if(!e)return;const t=String(e),i=t.split("?")[0].split("#")[0],n=(()=>{try{return decodeURIComponent(i.split("/").pop()||"download")}catch(e){return i.split("/").pop()||"download"}})();try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const i=await e.blob(),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=n,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),5e3)}catch(e){window.open(t,"_blank","noopener,noreferrer")}}_queueSnapshotResolveForVisibleThumbs(e){if(!Array.isArray(e)||!e.length)return;if(!ns(this.config))return;const t=[];for(const i of e){const e=String(i?.src||"");if(!e||!br(e))continue;const n=this._mediaClient.findMatchingSnapshotMediaId(e);n&&t.push(n)}t.length&&this._mediaClient.queueResolve(t)}_invalidateItems(){this._pipeline.invalidate()}_items(){return this._pipeline.getItems()}_computeBaseList(){return this._pipeline.getBaseList()}_currentFilteredItems(){const e="media"===this.config?.source_mode||"combined"===this.config?.source_mode,t=this._computeBaseList(),i=(t?.objFiltered||[]).filter(e=>this._matchesTypeFilter(e.src)&&(!this._filterFavorites||this._favorites.has(e.src))),n=this.config?.max_media??ki;return{items:i.slice(0,Math.min(n,i.length)),usingMediaSource:e}}_allKnownDays(e){return this._pipeline.getAllDays(e)}_resolveItemMs(e){return this._pipeline.resolveItemMs(e)}_isVideoSmart(e,t,i){return to(e,t,i)}_navImgFs(e,t){if(!this._imgFsOpen)return;const i=(this._selectedIndex??0)+(e>0?1:-1);i<0||i>=t||(this._resetZoom?.(),this._selectedIndex=i,this._pendingScrollToI=this._selectedIndex,this.requestUpdate())}_resetThumbScrollToStart(){requestAnimationFrame(()=>{const e=this.renderRoot?.querySelector(".tthumbs");if(e){if(this._isThumbLayoutVertical()){e.scrollTop=0;try{e.scrollTo({behavior:"auto",top:0})}catch(e){}}else{e.scrollLeft=0;try{e.scrollTo({behavior:"auto",left:0})}catch(e){}}this._observedThumbs=new WeakSet,this._setupThumbObserver()}})}_scrollThumbIntoView(e){return(async()=>{try{await this.updateComplete}catch(e){}await new Promise(e=>requestAnimationFrame(()=>e()));const t=this.renderRoot?.querySelector(".tthumbs");if(!t)return;const i=t.querySelector(`button.tthumb[data-i="${e}"]`);if(!i)return;if(this._isThumbLayoutVertical()){const e=t.getBoundingClientRect(),n=i.getBoundingClientRect(),s=t.scrollTop+(n.top-e.top)+n.height/2-t.clientHeight/2,r=Math.max(0,t.scrollHeight-t.clientHeight),o=Math.max(0,Math.min(r,s));try{t.scrollTo({behavior:"smooth",top:o})}catch(e){t.scrollTop=o}return}const n=t.getBoundingClientRect(),s=i.getBoundingClientRect(),r=t.scrollLeft+(s.left-n.left)+s.width/2-t.clientWidth/2,o=Math.max(0,t.scrollWidth-t.clientWidth),a=Math.max(0,Math.min(o,r));try{t.scrollTo({behavior:"smooth",left:a})}catch(e){t.scrollLeft=a}})()}_sourceNameForParsing(e){if(!br(e))return String(e||"");return this._mediaClient.getTitleById(e)||String(e||"")}_stepDay(e,t,i){const n=function(e,t,i){if(!i.length)return null;const n=i[0]??null,s=e&&i.includes(e)?e:n;if(null===s)return null;const r=i.indexOf(s);return i[Math.min(Math.max(r+t,0),i.length-1)]??null}(i??null,e,t??[]);null!==n&&(this._selectedDay=n,this._selectedIndex=0,this._pendingScrollToI=null,this._forceThumbReset=!0,this._exitSelectMode(),this.config?.clean_mode&&(this._previewOpen=!1),this._isLiveActive()&&this._setViewMode("media"),this.requestUpdate())}_tsLabelFromFilename(e){const t=this._sourceNameForParsing(e);if(!t)return"";const i=this._resolveItemMs(e),n=null!==i?function(e){if(!Number.isFinite(e))return null;const t=new Date(e);return`${Xi(t.getFullYear(),4)}-${Xi(t.getMonth()+1)}-${Xi(t.getDate())}T${Xi(t.getHours())}:${Xi(t.getMinutes())}:${Xi(t.getSeconds())}`}(i):null;if(n)return function(e,t){if(!e)return"";try{const i=new Date(e),n=t?.language;return`${new Intl.DateTimeFormat(n,{day:"numeric",month:"long",year:"numeric"}).format(i)} • ${new Intl.DateTimeFormat(n,{hour:"2-digit",minute:"2-digit",hour12:Do(t)}).format(i)}`}catch{return e}}(n,this._hass?.locale);const s=(t.split("/").pop()||t).replace(/\.(mp4|webm|mov|m4v|jpg|jpeg|png|webp|gif)$/i,"");return s.length>42?`${s.slice(0,39)}…`:s}_activeObjectFilters(){return eo(this._objectFilters)}_isObjectFilterActive(e){return this._activeObjectFilters().includes(String(e||"").toLowerCase().trim())}_matchesObjectFilter(e){return this._matchesObjectFilterValue(e,this._objectFilters)}_isVideoForSrc(e){return function(e){const{src:t,isMediaSource:i,getMeta:n}=e;if(i(t)&&n){const e=n(t);if(e)return to(e.title||t,e.mime,e.cls)}return Ur(t)}({src:e,isMediaSource:br,getMeta:e=>this._mediaClient.getMetaById(e)})}_matchesTypeFilter(e){return function(e){const{src:t,filterVideo:i,filterImage:n}=e;return i===n||(e.isVideo(t)?i:n)}({src:e,filterVideo:!!this._filterVideo,filterImage:!!this._filterImage,isVideo:e=>this._isVideoForSrc(e)})}_matchesObjectFilterValue(e,t){return io({src:e,filters:t??[],sourceMode:this.config?.source_mode??"sensor",getSrcEntity:e=>this._sensorClient.getSrcEntityMap().get(e),getSensorState:e=>this._hass?.states?.[e],getObjectForSrc:e=>this._objectForSrc(e)})}_objectForSrc(e){const t=String(e||"").trim();if(!t)return null;if(this._objectCache.has(t))return this._objectCache.get(t);const i=function(e){const t=String(e.src??"").trim();if(!t)return null;let i;if("sensor"===e.sourceMode){const n=e.getSrcEntity(t)??"",s=n?e.getSensorState(n)??null:null;i=[Vn(t),qn(n,s)].join(" ")}else i=[e.getMediaTitle(t)??"",t].join(" ");const n=i.toLowerCase();for(const t of e.visibleFilters){const e=Rn(t);for(const i of e)if(n.includes(i))return t}return null}({src:t,sourceMode:this.config?.source_mode??"sensor",visibleFilters:this._getVisibleObjectFilters(),getSrcEntity:e=>this._sensorClient.getSrcEntityMap().get(e),getSensorState:e=>this._hass?.states?.[e],getMediaTitle:e=>this._mediaClient.getMetaById(e)?.title});return this._objectCache.set(t,i),i}_setObjectFilter(e){const t=String(e||"").toLowerCase().trim();if(!t)return;const i=new Set(this._getVisibleObjectFilters());if(!i.has(t))return;const n=this._activeObjectFilters().filter(e=>i.has(e)),s=new Set(n);s.has(t)?s.delete(t):s.add(t);const r=Array.from(s),o=this._pipeline.getBaseList(),a=o.dayFiltered.filter(e=>this._matchesObjectFilterValue(e.src,n)),l=Math.min(Math.max(this._selectedIndex??0,0),Math.max(0,a.length-1)),c=a.length>0?a[l]?.src:"",d=o.dayFiltered.filter(e=>this._matchesObjectFilterValue(e.src,r));let h=0;if(c){const e=d.findIndex(e=>e.src===c);e>=0&&(h=e)}this._objectFilters=r,this._selectedIndex=h,this._pendingScrollToI=null,this._forceThumbReset=!0,this._isLiveActive()&&this._setViewMode("media"),this.requestUpdate()}_toggleFilterVideo(){this._filterVideo=!this._filterVideo,this._selectedIndex=0,this._pendingScrollToI=null,this._forceThumbReset=!0,this.requestUpdate()}_toggleFilterImage(){this._filterImage=!this._filterImage,this._selectedIndex=0,this._pendingScrollToI=null,this._forceThumbReset=!0,this.requestUpdate()}_toggleFilterFavorites(){this._filterFavorites=!this._filterFavorites,this._selectedIndex=0,this._pendingScrollToI=null,this._forceThumbReset=!0,this.requestUpdate()}async _bulkDelete(e){if(!this.config?.allow_bulk_delete)return;const t=Array.from(e||[]);if(!t.length)return;if(this.config?.delete_confirm){if(!window.confirm(`Are you sure you want to delete ${t.length} item(s)?`))return}const i=this._sensorClient.getSrcEntityMap();let n=0;const s=[];for(const e of t){if(await jr({hass:this._hass,src:e,config:this.config,srcEntityMap:i,confirm:()=>!0})){n++,this._deleted.add(e);const t=os(e);t&&this._deletedFrigateEventIds.add(t)}else s.push(e)}this._invalidateItems(),this._selectedSet.clear(),this._selectMode=!1,this._hideBulkDeleteHint(),this.requestUpdate(),s.length>0&&this._showErrorToast("Some deletes failed",n>0?`Deleted ${n} of ${t.length}. ${s.length} failed — check delete_service / frigate_delete_service config.`:`Could not delete ${s.length} item(s). Check delete_service / frigate_delete_service config.`)}_exitSelectMode(){this._selectMode=!1,this._selectedSet.clear(),this._hideBulkDeleteHint(),this.requestUpdate()}_toggleSelected(e){e&&(this._selectedSet.has(e)?this._selectedSet.delete(e):this._selectedSet.add(e),this.requestUpdate())}_toggleClusterExpand(e){e&&(this._expandedClusters.has(e)?this._expandedClusters.delete(e):this._expandedClusters.add(e),this.requestUpdate())}_injectExpandedClusterMembers(e){if(!this._expandedClusters?.size)return e;const t=[];for(const i of e){if(t.push(i),!this._expandedClusters.has(i.src))continue;const e=this._mediaClient?.getClusterMeta?.(i.src);if(e?.members?.length)for(const n of e.members)n.id!==i.src&&t.push({src:n.id,dtMs:n.dtMs,_clusterMember:!0})}return t}_isInsideTsbar(e){return(e.composedPath?.()||[]).some(e=>e?.classList?.contains("tsicon")||e?.classList?.contains("tsbar"))}_navNext(e){if(this._selectMode||this._isLiveActive())return;const t=function(e,t){const i=e??0;return t<=0||i>=t-1?null:i+1}(this._selectedIndex,e);null!==t&&(this._resetZoom(),this._selectedIndex=t,this._pendingScrollToI=this._selectedIndex,this.requestUpdate(),this._showPills())}_navPrev(){if(this._selectMode||this._isLiveActive())return;const e=function(e){const t=e??0;return t<=0?null:t-1}(this._selectedIndex);null!==e&&(this._resetZoom(),this._selectedIndex=e,this._pendingScrollToI=this._selectedIndex,this.requestUpdate(),this._showPills())}_onPreviewPointerDown(e){if(!1===e?.isPrimary)return;const t=e.composedPath?.()||[];if(!(this._isInsideTsbar(e)||this._pathHasClass(t,"pnavbtn")||t.some(e=>"VIDEO"===e?.tagName)||this._pathHasClass(t,"viewtoggle")||this._pathHasClass(t,"live-picker")||this._pathHasClass(t,"live-picker-backdrop")||this._pathHasClass(t,"live-quick-switch")||this._isLiveActive()))if(this._zoomScale>1)this._swiping=!1;else{this._swiping=!0,this._swipeStartX=e.clientX,this._swipeStartY=e.clientY,this._swipeCurX=e.clientX,this._swipeCurY=e.clientY;try{e.currentTarget?.setPointerCapture?.(e.pointerId)}catch(e){}}}_getThumbRenderLimit(e,t){return e}_onPreviewPointerUp(e,t){if(this._isLiveActive())return this._swiping=!1,void this._showPills();if(this._zoomIsPinching)return this._swiping=!1,void(this._zoomIsPinching=!1);if(!this._swiping){if(this.config?.clean_mode&&!this._previewOpen)return;if(this._selectMode)return;const t=e.composedPath?.()||[];return this._pathHasClass(t,"gallery-pill")||this._pathHasClass(t,"pnavbtn")||this._pathHasClass(t,"pnav")||this._pathHasClass(t,"vid-bigplay")||this._pathHasClass(t,"vid-progress")?void this._showPills():void(this._previewVideoEl&&this._pillsVisible?this._hidePillsNow():this._showPills())}if(this._swiping=!1,this.config?.clean_mode&&!this._previewOpen)return;const i=0!==e.clientX||0!==e.clientY?e.clientX:this._swipeCurX,n=0!==e.clientX||0!==e.clientY?e.clientY:this._swipeCurY,s=i-this._swipeStartX,r=n-this._swipeStartY;if(Math.abs(s)<10&&Math.abs(r)<10){const t=e.composedPath?.()||[];return this._pathHasClass(t,"gallery-pill")||this._pathHasClass(t,"pnavbtn")||this._pathHasClass(t,"pnav")||this._pathHasClass(t,"vid-bigplay")||this._pathHasClass(t,"vid-progress")?void this._showPills():void(this._previewVideoEl&&this._pillsVisible?this._hidePillsNow():this._showPills())}Math.abs(r)>Math.abs(s)||Math.abs(s)<45||this._selectMode||(s<0?(this._selectedIndex??0)<t-1&&(this._selectedIndex=(this._selectedIndex??0)+1):(this._selectedIndex??0)>0&&(this._selectedIndex=(this._selectedIndex??0)-1),this._pendingScrollToI=this._selectedIndex??0,this.requestUpdate(),this._showPills())}_onThumbsScroll(e){const t=e.currentTarget;if(!t)return;const i=t.querySelectorAll(".tthumb");if(!i.length)return;const n=this._isThumbLayoutVertical(),s=t.getBoundingClientRect(),r=s.left+s.width/2,o=s.top+s.height/2;let a=null,l=1/0;for(const e of i){const t=e.getBoundingClientRect(),i=t.left+t.width/2,s=t.top+t.height/2,c=n?Math.abs(s-o):Math.abs(i-r);c<l&&(l=c,a=e)}if(!a)return;const c=a.dataset.lazySrc||a.dataset.src||"",d=this._pipeline?.resolveItemMs?.(c);"number"==typeof d&&Number.isFinite(d)&&(this._scrollPillText=this._formatScrollPillTime(d),this._scrollPillVisible=!0,this._scrollPillTimer&&clearTimeout(this._scrollPillTimer),this._scrollPillTimer=setTimeout(()=>{this._scrollPillVisible=!1,this._scrollPillTimer=null},800))}_formatScrollPillTime(e){try{const t=this._hass?.locale?.language||"nl-NL";return new Date(e).toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}catch{return new Date(e).toLocaleTimeString()}}_onThumbWheel(e){if(this._isThumbLayoutVertical())return;const t=e.currentTarget;if(!t)return;if(t.scrollWidth-t.clientWidth<=0)return;const i=Math.abs(e.deltaX||0),n=Math.abs(e.deltaY||0);let s=i>n?e.deltaX:e.deltaY;if(e.shiftKey&&n>0&&(s=e.deltaY),!Number.isFinite(s)||Math.abs(s)<.5)return;e.preventDefault(),e.stopPropagation();let r=s;1===e.deltaMode&&(r=16*s),2===e.deltaMode&&(r=s*t.clientWidth*.85),this._thumbWheelAccum=(this._thumbWheelAccum||0)+r,this._thumbWheelRaf||(this._thumbWheelRaf=requestAnimationFrame(()=>{this._thumbWheelRaf=null;const e=this._thumbWheelAccum||0;this._thumbWheelAccum=0;const i=t.scrollWidth-t.clientWidth;t.scrollLeft=Math.max(0,Math.min(i,t.scrollLeft+e))}))}setConfig(e){const t=this.config?{...this.config}:null,{config:i,customIcons:n}=Fs(e);this.config=i,this._customIcons=n,this._favorites.load(this.config),this._sensorClient.load(this.config),this._mediaClient.load(this.config),this._posterClient.load(this.config);const s=this._micAudioProcessingFromConfig();if(s&&this._micClient.setAudioProcessing(s),this._micClient.setIceConfig({iceServers:this._micIceServersFromConfig()??null,iceTransportPolicy:i.live_mic_force_relay?"relay":"all"}),"idle"!==this._micState){Zn(this._getEffectiveLiveCamera(),i)||this._micClient.stop()}this._startMediaPoll(),t||this._posterClient.prewarm();const{changedKeys:r,isSourceChange:o,isUiOnly:a}=on(t,i);void 0===this._selectedIndex&&(this._selectedIndex=0),null==this._selectedSet&&(this._selectedSet=new Set),Array.isArray(this._objectFilters)||(this._objectFilters=[]),null==this._filterVideo&&(this._filterVideo=!1),null==this._filterImage&&(this._filterImage=!1);const l=new Set(this._getVisibleObjectFilters());this._objectFilters=this._objectFilters.filter(e=>l.has(e));if(!t||JSON.stringify(t.live_cameras)!==JSON.stringify(i.live_cameras)){const e=this._getLiveCameraOptions(),n=this._liveSelectedCamera&&e.some(e=>e===this._liveSelectedCamera);!n&&e.length>0&&(this._liveSelectedCamera=e[0]||""),t&&(this._aspectRatio=this._parseAspectRatio(i.aspect_ratio))}if(t)t.clean_mode!==this.config.clean_mode&&(this._previewOpen=!this.config.clean_mode);else{this._previewOpen=!this.config.clean_mode,this._showLivePicker=!1,this._showLiveQuickSwitch=!1,this._aspectRatio=this._parseAspectRatio(i.aspect_ratio);const e=i.entities.length>0||i.media_sources.length>0,t=i.start_mode,n=Array.isArray(i.live_cameras)&&i.live_cameras.length>0;"live"===t&&i.live_enabled&&n?this._viewMode="live":this._viewMode="gallery"===t?"media":i.live_enabled&&n&&!e?"live":"media"}t&&t.sync_entity!==this.config.sync_entity&&(this._lastSyncedSrc=null),o&&(this._invalidateItems(),this._closeThumbMenu(),this._forceThumbReset=!1,this._pendingScrollToI=0,this._previewOpen=!this.config.clean_mode,this._selectMode=!1,this._selectedIndex=0,this._selectedSet.clear(),this._hideBulkDeleteHint(),this._posterClient.clearPosterCache(),this._objectCache.clear());const c=r.some(e=>["live_cameras","live_enabled"].includes(e));if(c&&(this._hideLiveQuickSwitchButton(),this._teardownLiveView(),this._signedWsPath=null),this._hasLiveConfig()||(this._hideLiveQuickSwitchButton(),this._showLivePicker=!1,"live"===this._viewMode&&this._teardownLiveView(),this._viewMode="media"),"media"===this.config.source_mode||"combined"===this.config.source_mode){const e=t?yr(t.media_sources):"",i=yr(this.config.media_sources);(!t||o&&e!==i)&&this._objectCache.clear()}t&&a&&this.requestUpdate()}updated(e){const t=e.has("_selectedDay"),i=e.has("_objectFilters");if(e.has("_micState")&&("active"===this._micState?this._startMicWaveLoop():this._stopMicWaveLoop()),this._forceThumbReset||t||i)this._forceThumbReset=!1,this._pendingScrollToI=null,this._resetThumbScrollToStart(),this._revealedThumbs.clear(),this._mediaClient.clearResolveFailed(),this._thumbObserver&&(this._thumbObserver.disconnect(),this._thumbObserver=null,this._thumbObserverRoot=null,this._observedThumbs=new WeakSet);else if(null!=this._pendingScrollToI){const e=this._pendingScrollToI;this._pendingScrollToI=null,this._scrollThumbIntoView(e)}if(t||e.has("config")){const e=this.config?.source_mode;if("media"===e||"combined"===e){const e=this._selectedDay,t=this._mediaClient.getDays?.()||[],i=e=>{e&&this._mediaClient.ensureDayLoaded?.(e)};if(e&&i(e),e&&t.length){const n=t.indexOf(e);n>=0&&(i(t[n-1]),i(t[n+1]))}else t.length&&i(t[0])}}e.has("config")&&(this._galleryMuted=void 0===this.config?.auto_muted||!0===this.config.auto_muted,this._previewVideoEl&&(this._previewVideoEl.autoplay=!0===this.config?.autoplay,this._previewVideoEl.muted=this._galleryMuted));const n="media"===this.config?.source_mode||"combined"===this.config?.source_mode,s=this._computeBaseList();if(s.rawItems.length){const e=s.objFiltered,t=this.config?.max_media??ki,i=e.slice(0,Math.min(t,e.length)),r=this._injectExpandedClusterMembers(i),o=this._getThumbRenderLimit(t,n),a=r.length?Math.min(Math.max(this._selectedIndex??0,0),r.length-1):0,l=r.length?r[a]?.src:"";this._syncCurrentMedia(l),this._scheduleVisibleMediaWork(l,r,a,n);const c=r.slice(0,o),d=r.slice(0,Math.min(r.length,o+6)),h=`${this._pipeline.rev}|${this._selectedDay}|${this._selectedIndex}`;h!==this._lastPosterQueueKey&&(this._lastPosterQueueKey=h,this._queueSnapshotResolveForVisibleThumbs(c),this._queueSensorPosterWork(d))}if(this._pendingPoster){this._pendingPoster.resolveIds.size&&this._mediaClient.queueResolve([...this._pendingPoster.resolveIds]);for(const{url:e,stableKey:t}of this._pendingPoster.posters)this._posterClient.enqueue(e,t);this._pendingPoster=null}this._isLiveActive()?this._mountLiveCard():this._syncPreviewPlaybackFromState(),this._setupThumbObserver()}_setupThumbObserver(){const e=this.shadowRoot?.querySelector(".tthumbs");if(e){if(this._thumbObserver&&this._thumbObserverRoot!==e&&(this._thumbObserver.disconnect(),this._thumbObserver=null,this._thumbObserverRoot=null,this._observedThumbs=new WeakSet),!this._thumbObserver){this._thumbObserverRoot=e;const t=e.classList.contains("horizontal")?"0px 200px 0px 200px":"200px 0px 200px 0px";this._thumbObserver=new IntersectionObserver(e=>{let t=!1;const i="sensor"===this.config?.source_mode||"combined"===this.config?.source_mode;for(const n of e)if(n.isIntersecting){const e=n.target.dataset.lazySrc;if(e&&!this._revealedThumbs.has(e)&&(this._revealedThumbs.add(e),t=!0),i&&e&&this._isVideoForSrc(e)){const t=this._sensorClient.getSensorPairedThumbs().get(e);t&&this._posterClient.enqueue(t)}}t&&this.requestUpdate()},{root:e,rootMargin:t,threshold:0})}e.querySelectorAll(".tthumb[data-lazy-src]").forEach(e=>{this._observedThumbs.has(e)||(this._thumbObserver.observe(e),this._observedThumbs.add(e))})}}render(){if(!this._hass||!this.config)return q``;this._pendingPoster=new Wr;const e="media"===this.config?.source_mode||"combined"===this.config?.source_mode,t="1 / 1",i=this._computeBaseList(),n=i.rawItems,s=this._getVisibleObjectFilters(),r=!n.length&&this._hasLiveConfig();if(!n.length&&!r)return e&&this._mediaClient.isLoading()?q`<div class="empty">Loading media…</div>`:q`<div class="empty">No media found.</div>`;const{days:o,newestDay:a,activeDay:l,objFiltered:c,videoCount:d,imageCount:h}=i,p=d>0&&h>0;p||(this._filterVideo=!1,this._filterImage=!1);const u=c.filter(e=>this._matchesTypeFilter(e.src)&&(!this._filterFavorites||this._favorites.has(e.src))),m=!u.length,g=this.config?.max_media??ki,f=m?[]:u.slice(0,Math.min(g,u.length)),v=this._injectExpandedClusterMembers(f);v.length?(this._selectedIndex??0)>=v.length&&(this._selectedIndex=0):this._selectedIndex=0;const _=v.length?Math.min(Math.max(this._selectedIndex??0,0),v.length-1):0,b=v.length?v[_]?.src:"",y=this._getThumbRenderLimit(g,e),w=v.length?v.slice(0,y).map((e,t)=>({...e,i:t})):[];let x=b;br(b)&&(x=this._mediaClient.getUrlCache().get(b)||"");let k="",S="",$="";if(e&&br(b)){const e=this._mediaClient.getMetaById(b);k=e.mime,S=e.cls,$=e.title}const C=!!b&&this._isVideoSmart(x||$,k,S);b&&this._tsLabelFromFilename(b);const A=l??a,L=A?o.indexOf(A):-1,M=L>=0&&L<o.length-1,P=L>0,T=A===a,z=Zs(this.config?.delete_service),E=Zs(this.config?.frigate_delete_service),I=!!z||!!E;this.config;const F="bottom"===this.config.bar_position?"bottom":"hidden"===this.config.bar_position?"hidden":"top",H=!!this.config?.clean_mode,D=!H||!!this._previewOpen,R="bottom"===this.config?.preview_position,j=!!b&&e&&br(b),O=!(!b||j&&!x),V=this._hasLiveConfig(),N=this._isLiveActive(),B=D||N,Y=p&&navigator.maxTouchPoints>0,U=this._isThumbLayoutVertical(),W=!(r||this.config?.clean_mode&&(this._previewOpen||N)),K=`\n      --cgc-card-radius:10px;\n      --cgc-bar-opacity:${this.config.bar_opacity};\n      --cgc-talkback-opacity:${this.config.talkback_opacity??this.config.bar_opacity};\n      --cgc-chevron-opacity:${this.config.chevron_opacity??this.config.bar_opacity};\n      --cgc-thumb-row-h:${this.config.thumb_size}px;\n      --cgc-thumb-empty-h:${this.config.thumb_size}px;\n      --cgc-thumb-off-opacity:${this.config.thumb_off_opacity};\n      --cgc-topbar-margin:${$i};\n      --cgc-topbar-padding:${Ci};\n      --cgc-thumbs-max-h:${(this.config.card_height??0)>0?this.config.card_height+"px":"320px"};\n      --cgc-object-fit:${this.config.object_fit||"cover"};\n      --cgc-pill-size:${this.config.pill_size}px;\n      --cgc-row-gap:${this.config.row_gap}px;\n      ${this.config.style_variables||""}\n    `,Z="fixed"===this.config.controls_mode,G={selected:b,idx:_,filtered:v,previewGated:H,selectedIsVideo:C,selectedHasUrl:O,noResultsForFilter:m},X=oo(no,this.config?.gallery_pills),J=ao(no,X),Q=q`
      ${H?q`
            <button
              class="gallery-pill live-pill-btn"
              @pointerdown=${e=>e.stopPropagation()}
              @click=${e=>{e.stopPropagation(),this._setViewMode("media"),this._previewOpen=!1,this.requestUpdate()}}
            >
              <ha-icon icon="mdi:arrow-left"></ha-icon>
            </button>
          `:q``}
      ${J.map(e=>this._renderGalleryPillById(e,G)).filter(e=>null!=e)}
    `,ee=q`
      <div class="live-pills-left">
        ${H?q`
          <button class="gallery-pill live-pill-btn" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._setViewMode("media"),this._previewOpen=!1,this.requestUpdate()}}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
        `:q``}
        ${!1!==this.config.show_camera_title&&"fixed"!==this.config.controls_mode?q`<div class="gallery-pill gallery-pill--wide gallery-pill--info"><span>${this._friendlyCameraName(this._getEffectiveLiveCamera())}</span></div>`:q``}
      </div>
    `,te=oo(so,this.config?.live_pills),ie=ao(so,te),ne=q`
      <div class="live-pills-right">
        ${"grid"===this.config?.live_layout&&"single"===this._liveLayoutOverride?q`
          <button class="gallery-pill live-pill-btn" title="Back to grid" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._returnToGrid()}}>
            <ha-icon icon="mdi:view-grid"></ha-icon>
          </button>
        `:q``}
        ${this.config?.debug_enabled?q`
          <button class="gallery-pill live-pill-btn" title="Diagnostics" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._openDebug()}}>
            <ha-icon icon="mdi:bug-outline"></ha-icon>
          </button>
        `:q``}
        ${go(this.config,this._getEffectiveLiveCamera())?q`
          <button
            class="gallery-pill live-pill-btn ${this._ptzActive?"active":""}"
            title=${this._ptzActive?"Exit PTZ":"PTZ controls"}
            aria-pressed=${this._ptzActive?"true":"false"}
            @pointerdown=${e=>e.stopPropagation()}
            @click=${e=>{e.stopPropagation(),this._togglePtz()}}
          >
            <ha-icon icon="mdi:arrow-all"></ha-icon>
          </button>
        `:q``}
        ${ie.map(e=>this._renderLivePillById(e)).filter(e=>null!=e)}
        ${(this.config.menu_buttons??[]).length?q`
          <div class="live-hamburger-wrap" @pointerdown=${e=>e.stopPropagation()}>
            <button class="gallery-pill live-pill-btn ${this._hamburgerOpen?"active":""}" @click=${e=>{e.stopPropagation(),this._hamburgerOpen=!this._hamburgerOpen,this._hamburgerOpen||this._showPills(2500)}}>
              <ha-icon icon="mdi:menu"></ha-icon>
            </button>
          </div>
        `:q``}
      </div>
    `,se=(this.config.menu_buttons??[]).length&&this._hamburgerOpen?q`
      <div class="live-menu-backdrop" @pointerdown=${e=>e.stopPropagation()} @click=${()=>{this._hamburgerOpen=!1,this._showPills(2500)}}></div>
      <div class="live-menu-panel" @pointerdown=${e=>e.stopPropagation()}>
        ${(this.config.menu_buttons??[]).map(e=>{const t=this._hass?.states[e.entity],i=t?.state??"",n=new Set(["on","open","opening","unlocked","playing","paused","home","true","heat","cool","heat_cool","fan_only","dry","auto"]),s=e.state_on?i===e.state_on:n.has(i),r=e.entity.split(".")[0],[o,a]=e.service?e.service.split("."):"automation"===r?["automation","trigger"]:"script"===r?["script","turn_on"]:["homeassistant","toggle"],l=s&&e.icon_on?e.icon_on:e.icon,c=s?e.color_on||"":e.color_off||"",d=e.title||t?.attributes?.friendly_name||e.entity;return q`
            <button class="live-menu-panel-btn ${s?"active":""}"
              @click=${()=>this._hass?.callService(o,a,{entity_id:e.entity})}
              title="${d}">
              <div class="panel-btn-icon" style="${c?`background:${c}`:""}">
                <ha-icon icon="${l}"></ha-icon>
              </div>
              <span class="live-menu-panel-lbl">${d}</span>
            </button>
          `})}
      </div>
    `:q``,re=B?q`
          <div
            class="preview"
            style="aspect-ratio:${this._getPreviewAspectRatio(N)}; touch-action:${N?"auto":"pan-y"};"
            @pointerdown=${e=>{if(!1===e?.isPrimary)return;const t=e.composedPath?.()||[];if(!(this._isLiveActive()||this._isInsideTsbar(e)||this._pathHasClass(t,"pnavbtn")||t.some(e=>"VIDEO"===e?.tagName)||this._pathHasClass(t,"live-picker")||this._pathHasClass(t,"live-picker-backdrop")||this._pathHasClass(t,"live-quick-switch"))){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.();try{e.currentTarget?.blur?.()}catch(e){}}this._onPreviewPointerDown(e)}}
            @pointermove=${e=>{this._swiping&&!1!==e.isPrimary&&(this._swipeCurX=e.clientX,this._swipeCurY=e.clientY)}}
            @pointerup=${e=>this._onPreviewPointerUp(e,v.length)}
            @pointercancel=${e=>this._onPreviewPointerUp(e,v.length)}
            @pointerenter=${e=>{"mouse"===e.pointerType&&this._showPillsHover()}}
            @pointerleave=${e=>{"mouse"===e.pointerType&&this._hidePillsHover()}}
            @click=${e=>this._onPreviewClick(e)}
          >
            ${N?this._renderLiveInner():m?q`<div class="preview-empty">No media for this day.</div>`:O?C?q`<div id="preview-video-host" class="preview-video-host"></div>`:q`<img class="pimg" src=${x} alt="" />`:q`<div class="preview-skeleton" aria-hidden="true"></div>`}
            ${this._hasLiveConfig()?(()=>{const e=this._getLiveCropStyle();return q`<div id="live-card-host" class="live-card-host${N?"":" live-host-hidden"}${e?" has-crop":""}" style="${e}"></div>${this._renderSnapshotToast()}`})():q``}

            ${!m&&!N&&!1!==this.config?.gallery_chevrons_enabled&&v.length>1&&(this._pillsVisible||this.config?.persistent_controls)?q`
              <div class="pnav">
                <button class="pnavbtn left" ?disabled=${_<=0} @click=${e=>{e.stopPropagation(),this._navPrev()}}>
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <button class="pnavbtn right" ?disabled=${_>=v.length-1} @click=${e=>{e.stopPropagation(),this._navNext(v.length)}}>
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              </div>
            `:q``}

            ${N&&!1!==this.config?.live_chevrons_enabled&&!Qn(this.config,this._liveLayoutOverride)&&this._getLiveCameraOptions().length>1&&(this._pillsVisible||this.config?.persistent_controls)?q`
              <div class="pnav">
                <button class="pnavbtn left" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._navLiveCamera(-1)}}>
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <button class="pnavbtn right" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._navLiveCamera(1)}}>
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              </div>
            `:q``}

            ${N||Z||"hidden"===F?q``:q`
              <div class="gallery-pills align-${this.config?.gallery_pills_align||"center"} ${F} ${this._pillsVisible||this.config?.persistent_controls?"visible":""}">
                ${Q}
              </div>
            `}
            ${!N&&C&&O&&!m?(()=>{const e=this._galleryDuration||0,t=e>0?Math.max(0,Math.min(100,this._galleryCurrentTime/e*100)):0,i=this._pillsVisible||this.config?.persistent_controls,n=Vo(this._galleryCurrentTime||0),s=e>0?Vo(e):"—:—",r=!1!==X.get("video_time")?.enabled;return q`
                <button
                  class="vid-bigplay ${i?"visible":""}"
                  title=${this._galleryPlaying?"Pause":"Play"}
                  aria-pressed=${this._galleryPlaying?"true":"false"}
                  @pointerdown=${e=>e.stopPropagation()}
                  @pointerup=${e=>e.stopPropagation()}
                  @click=${e=>{e.stopPropagation(),this._toggleGalleryPlayPause(),this._showPills()}}
                >
                  <ha-icon icon=${this._galleryPlaying?"mdi:pause":"mdi:play"}></ha-icon>
                </button>
                ${r?q`
                  <div class="vid-time ${i?"visible":""}">
                    <span>${n} / ${s}</span>
                  </div>
                `:q``}
                <div class="vid-progress ${i?"visible":""}" @pointerdown=${e=>this._onVidProgressDown(e)} @pointerup=${e=>e.stopPropagation()}>
                  <div class="vid-progress-fill" style="width:${t}%"></div>
                </div>
              `})():q``}
            ${!N||Qn(this.config,this._liveLayoutOverride)||Z?q``:q`
              <div class="live-controls-bar ${F} ${this._pillsVisible||this._showLivePicker||this.config?.persistent_controls?"visible":""}">
                <div class="live-controls-main">
                  ${ee}${ne}
                </div>
                ${this._renderMicErrorToast()}
              </div>
            `}
            ${N&&!Qn(this.config,this._liveLayoutOverride)?se:q``}
            ${N&&!Qn(this.config,this._liveLayoutOverride)?this._renderMicTalkbackBar():q``}
            ${N&&!Qn(this.config,this._liveLayoutOverride)?this._renderPtzOverlay():q``}
          </div>
        `:q``,oe=Z&&B?q`
      <div class="controls-bar-fixed">
        ${N&&!Qn(this.config,this._liveLayoutOverride)?q`
          <div class="live-controls-main live-controls-main--fixed">
            ${ee}${ne}
          </div>
        `:"hidden"===F||N?q``:q`
          ${Q}
        `}
      </div>
    `:q``,ae=s.length?q`
          <div class="objfilters" role="group" aria-label="Object filters">
            ${s.map(e=>{const t=jn(e,this._customIcons,"mdi:magnify"),i=Dn(e),n=On(e,this.config?.object_colors??{});return q`
                <button
                  class="objbtn icon-only ${this._isObjectFilterActive(e)?"on":""}"
                  @click=${()=>this._setObjectFilter(e)}
                  title="Filter ${i}"
                  aria-label="Filter ${i}"
                >
                  ${t?q`<ha-icon icon="${t}" style="color:${n}"></ha-icon>`:q``}
                </button>
              `})}
          </div>
        `:q``,le=q`
      <div class="timeline ${m?"timeline-empty":""}">
        ${this._selectMode&&this._selectedSet?.size?q`
              <div class="bulkbar topbulk">
                <div class="bulkbar-left">
                  <div class="bulkbar-text">
                    ${this._selectedSet.size} selected
                  </div>
                </div>

                <div class="bulkactions">
                  <button
                    type="button"
                    class="bulkaction bulkcancel"
                    title="Cancel"
                    aria-label="Cancel"
                    @click=${e=>{e.preventDefault(),e.stopPropagation(),this._exitSelectMode()}}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                    <span>Cancel</span>
                  </button>

                  <button
                    type="button"
                    class="bulkaction bulkdelete"
                    title="Delete"
                    aria-label="Delete"
                    ?disabled=${!I}
                    @click=${async e=>{e.preventDefault(),e.stopPropagation(),await this._bulkDelete(this._selectedSet)}}
                  >
                    <ha-icon icon="mdi:trash-can-outline"></ha-icon>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            `:q``}

        <div
          class="tthumbs-wrap ${U?"vertical":"horizontal"} ${m?"empty":""}"
        >
          <div class="scroll-time-pill ${this._scrollPillVisible?"visible":""}" aria-hidden="true">${this._scrollPillText}</div>
          ${w.length?q`
                <div
                  class="tthumbs ${U?"vertical":"horizontal"}"
                  style="--cgc-thumb-gap:${2}px;"
                  @wheel=${U?null:this._onThumbWheel}
                  @scroll=${e=>this._onThumbsScroll(e)}
                >
                  ${w.map(i=>{const n=i.i===_&&!N,s=this._selectedSet?.has(i.src),r=e&&br(i.src),o=r?this._mediaClient?.getClusterMeta?.(i.src):null,a=o&&this._expandedClusters.has(i.src);let l=i.src;r&&(l=this._mediaClient.getUrlCache().get(i.src)||"");let c="",d="",h="",p="";if(r){const e=this._mediaClient.getMetaById(i.src);c=e.mime,d=e.cls,h=e.title,p=e.thumb}const u=this._isVideoSmart(l||h,c,d);let m=u?this._posterClient.resolveVideoPoster(i,r,l,p,this._pendingPoster):l;!u&&!m&&r&&p&&(m=this._posterClient.getPosterUrl(p)||"",m||this._posterClient.enqueue(p));const g=!(r&&!l&&!p&&!m),f=r?g&&!!m:this._revealedThumbs.has(i.src)&&g&&!!m,v=Number.isFinite(i.dtMs)?function(e,t){if(!Number.isFinite(e))return"";try{return new Intl.DateTimeFormat(t?.language,{hour:"2-digit",minute:"2-digit",hour12:Do(t)}).format(new Date(e))}catch{return""}}(i.dtMs,this._hass?.locale):"",b=this._objectForSrc(i.src),y=jn(b,this._customIcons,"mdi:magnify"),w=On(b,this.config?.object_colors??{}),x=v,k=this.config?.thumb_bar_position||"bottom",S=!("hidden"===k||!x&&!y),$=U?`aspect-ratio:${t};border-radius:var(--cgc-thumb-radius, 10px);`:`width:${this.config.thumb_size}px;aspect-ratio:${t};border-radius:var(--cgc-thumb-radius, 10px);`;return q`
                      <button
                        class="tthumb ${n?"on":""} ${this._selectMode&&s?"sel":""} bar-${k} ${S?"with-bar":""} ${i._clusterMember?"cluster-member":""}"
                        data-i="${i.i}"
                        data-lazy-src="${i.src}"
                        style="${$}"
                        @pointerdown=${e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation?.(),e.currentTarget?.blur?.(),this._onThumbPointerDown(e,i)}}
                        @pointermove=${e=>this._onThumbPointerMove(e)}
                        @pointerup=${()=>this._onThumbPointerUp()}
                        @pointercancel=${e=>this._onThumbPointerCancel(e)}
                        @pointerleave=${()=>this._onThumbPointerCancel()}
                        @contextmenu=${e=>this._onThumbContextMenu(e,i)}
                        @click=${e=>{if(e.preventDefault(),e.stopPropagation(),this._suppressNextThumbClick)return void(this._suppressNextThumbClick=!1);if(this._selectMode)return void this._toggleSelected(i.src);this._isLiveActive()&&this._setViewMode("media"),this.config?.clean_mode&&(i.i===this._selectedIndex?this._previewOpen=!this._previewOpen:this._previewOpen=!0);const t=this._expandedClusters.has(i.src);!i._clusterMember&&!t&&this._expandedClusters.size>0&&this._expandedClusters.clear(),this._pendingScrollToI=i.i,this._selectedIndex=i.i,this.requestUpdate()}}
                      >
                        ${f?q`<img
                              class="timg"
                              src="${m}"
                              alt=""
                              @error=${()=>this._posterClient.onThumbImgError(m)}
                            />`:u&&hr(i.src)?q`<div class="tph reolink" aria-hidden="true" title="Reolink clip">
                                <img class="tph-reolink-mark" src=${Mr} alt="" />
                              </div>`:this._posterClient.isThumbBroken(i,r,l,p)?q`<div class="tph broken" aria-hidden="true">
                                  <ha-icon icon="mdi:image-broken-variant"></ha-icon>
                                </div>`:u&&this._posterClient.isPrewarmDone()&&this._posterClient.willNeverLoad(i,r,p)?q`<div class="tph disabled" aria-hidden="true" title="Thumbnail capture is off">
                                    <ha-icon icon="mdi:cloud-off-outline"></ha-icon>
                                  </div>`:this._posterClient.isPosterLoading(i,r,l,p)?q`<div class="tph spinner" aria-hidden="true"></div>`:q`<div class="tph skeleton" aria-hidden="true"></div>`}

                        ${S?q`
                              <div class="tbar ${k}">
                                <div class="tbar-left">${x||"—"}</div>
                                ${y?q`
                                      <ha-icon
                                        class="tbar-icon"
                                        icon="${y}"
                                        style="color:${w}"
                                      ></ha-icon>
                                    `:q``}
                              </div>
                            `:q``}

                        ${this._selectMode?q`<div class="selOverlay ${s?"on":""}"></div>`:q``}

                        ${!1===this.config?.show_favorite?q``:q`
                        <div
                          class="fav-btn ${this._favorites.has(i.src)?"on":""}"
                          @click=${e=>{e.stopPropagation();const t=this._favorites.has(i.src);if(this._favorites.toggle(i.src),!t&&!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)try{e.currentTarget.animate([{transform:"scale(1) rotate(0deg)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"},{transform:"scale(2.2) rotate(-14deg)",filter:"drop-shadow(0 0 22px gold) drop-shadow(0 0 10px gold) drop-shadow(0 1px 2px rgba(0,0,0,0.6))",offset:.45},{transform:"scale(1) rotate(0deg)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"}],{duration:380,easing:"cubic-bezier(.34, 1.56, .64, 1)"})}catch(e){}}}
                          @pointerdown=${e=>e.stopPropagation()}
                          role="button"
                          title="Favorite"
                        >
                          <ha-icon icon="${this._favorites.has(i.src)?"mdi:star":"mdi:star-outline"}"></ha-icon>
                        </div>
                        `}

                        ${o&&o.count>1?q`<button
                              type="button"
                              class="cluster-badge ${a?"open":""}"
                              title="${o.count} events — tap to ${a?"collapse":"expand"}"
                              @pointerdown=${e=>e.stopPropagation()}
                              @click=${e=>{e.preventDefault(),e.stopPropagation(),this._toggleClusterExpand(i.src)}}
                            >${o.count}×</button>`:q``}
                      </button>
                    `})}
                </div>
              `:m?q`
                  <div class="thumbs-empty-state">
                    ${this._filterFavorites?"No favorites for this day.":`No ${function(e){const t=e.map(e=>Dn(e)).filter(e=>"selected"!==e);return t.length?t.join(", "):"selected"}(this._objectFilters)} media for this day.`}
                  </div>
                `:q``}
        </div>
      </div>
    `;return q`
      <div class="root" style="${K}">
        <div class="panel" style="width:${"100%"}; margin:0 auto;">
          ${!R&&B?q`${re}${oe}${W&&!Z?q`<div class="divider"></div>`:q``}`:q``}

          ${W?(()=>{const e=this.config?.toolbar_order&&"object"==typeof this.config.toolbar_order?this.config.toolbar_order:{},t=[...ro].map(t=>({id:t.id,order:"number"==typeof e[t.id]?e[t.id]:t.defaultOrder})).sort((e,t)=>e.order-t.order||ro.findIndex(t=>t.id===e.id)-ro.findIndex(e=>e.id===t.id)).map(e=>e.id),i=Y?q`
              <div class="datepill has-filters" role="group" aria-label="Day navigation">
                <div class="dateinfo datepick" @click=${()=>this._openDatePicker(o)} title="Select date">
                  <span class="txt">${A?Ro(A,this._hass?.locale):"—"}</span>
                </div>
              </div>
            `:q`
              <div class="datepill" role="group" aria-label="Day navigation">
                <button class="iconbtn" ?disabled=${!M} @click=${()=>this._stepDay(1,o,A)} aria-label="Previous day" title="Previous day">
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <div class="dateinfo" title="Selected day">
                  <span class="txt">${A?Ro(A,this._hass?.locale):"—"}</span>
                </div>
                <button class="iconbtn" ?disabled=${!P} @click=${()=>this._stepDay(-1,o,A)} aria-label="Next day" title="Next day">
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              </div>
            `,n=e=>{switch(e){case"today":return!1===this.config?.show_today?null:q`
                    <div class="seg" role="tablist" aria-label="Filter">
                      <button
                        class="segbtn ${T?"on":""}"
                        @click=${()=>{this._selectedDay=a,this._selectedIndex=0,this._pendingScrollToI=null,this._forceThumbReset=!0,this._exitSelectMode(),this.config?.clean_mode&&(this._previewOpen=!1),this._isLiveActive()&&this._setViewMode("media"),this.requestUpdate()}}
                        title="Today"
                        role="tab"
                        aria-selected=${T}
                      >
                        <span>Today</span>
                      </button>
                    </div>
                  `;case"media_filter":return p&&!1!==this.config?.show_media_filter?q`
                    <div class="seg" style="${N?"opacity:0.35;pointer-events:none":""}">
                      <button class="segbtn ${this._filterVideo?"on":""}" @click=${()=>this._toggleFilterVideo()} title="Videos" style="border-radius:10px 0 0 10px">
                        <ha-icon icon="mdi:video" style="--mdc-icon-size:16px"></ha-icon>
                      </button>
                      <button class="segbtn ${this._filterImage?"on":""}" @click=${()=>this._toggleFilterImage()} title="Photos" style="border-radius:0 10px 10px 0">
                        <ha-icon icon="mdi:image" style="--mdc-icon-size:16px"></ha-icon>
                      </button>
                    </div>
                  `:null;case"favorite":return!1===this.config?.show_favorite?null:q`
                    <div class="seg">
                      <button class="segbtn ${this._filterFavorites?"on":""}" @click=${()=>this._toggleFilterFavorites()} title="Favorites" style="border-radius:10px">
                        <ha-icon icon="mdi:star" style="--mdc-icon-size:16px"></ha-icon>
                      </button>
                    </div>
                  `;case"live":return V&&!1!==this.config?.show_live?q`
                    <div class="seg">
                      <button
                        class="segbtn livebtn ${N?"on":""}"
                        title="${N?"Close live":"Open live"}"
                        @click=${e=>{e.preventDefault(),e.stopPropagation(),this._toggleLiveMode()}}
                      >
                        <span>LIVE</span>
                      </button>
                    </div>
                  `:null;default:return null}},s=t.map(e=>({id:e,tpl:n(e)})).filter(e=>null!=e.tpl),r=s.length>0?0:-1;return q`
              <div class="topbar">
                ${r>=0?s[r].tpl:q``}
                ${i}
                ${s.slice(r+1).map(e=>e.tpl)}
              </div>
            `})():q``}
          ${W?q`
            ${s.length?q`
                  <div class="divider"></div>
                  ${ae}
                `:q``}

            ${le}
          `:q``}

          ${R&&B?q`${W&&!Z?q`<div class="divider"></div>`:q``}${re}${oe}`:q``}
        </div>

        ${this._showBulkHint&&this._selectMode?q`
              <div class="bulk-floating-hint">
                Select thumbnails to delete
              </div>
            `:q``}

        ${this._errorToast?q`
              <div
                class="cgc-error-toast"
                @click=${()=>this._dismissErrorToast()}
                role="alert"
              >
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <div class="cgc-error-toast-text">
                  <div class="cgc-error-toast-title">${this._errorToast.title}</div>
                  <div class="cgc-error-toast-msg">${this._errorToast.message}</div>
                </div>
              </div>
            `:q``}

        ${this._renderDatePicker()}

        ${this._renderThumbActionSheet()}

        ${this._renderDebugModal()}

        ${this._imgFsOpen&&x?q`
          <div class="img-fs-overlay" @click=${()=>this._closeImageFullscreen()}>
            ${C?q`<video src=${x} controls autoplay playsinline ?muted=${this._galleryMuted} @click=${e=>e.stopPropagation()}></video>`:q`<img src=${x} alt="" @click=${e=>e.stopPropagation()} />`}
            ${v.length>1?q`
              <div class="pnav img-fs-nav">
                <button class="pnavbtn left" ?disabled=${_<=0} @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._navImgFs(-1,v.length)}}>
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <button class="pnavbtn right" ?disabled=${_>=v.length-1} @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._navImgFs(1,v.length)}}>
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              </div>
            `:q``}
            <button class="img-fs-close" @pointerdown=${e=>e.stopPropagation()} @click=${e=>{e.stopPropagation(),this._closeImageFullscreen()}}>
              <ha-icon icon="mdi:fullscreen-exit"></ha-icon>
            </button>
          </div>
        `:q``}

      </div>
    `}static get styles(){return Li}}No.prototype.getCardSize=function(){return 6},No.prototype.getLayoutOptions=function(){return{grid_columns:4,grid_min_columns:2}},customElements.define("camera-gallery-card",No),window.customCards=window.customCards||[],window.customCards.push({type:"camera-gallery-card",name:"Camera Gallery Card",description:"Media gallery for Home Assistant (sensor fileList OR media_source folder) with optional live preview",preview:!0}),console.info(`Camera Gallery Card v${jo}`);const Bo={"mdi:close":"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z","mdi:arrow-left":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z","mdi:check":"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z","mdi:folder-outline":"M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z","mdi:folder-search-outline":"M11.5,13C12.04,13 12.55,13.17 12.97,13.46L16.43,9.1C15.55,8.44 14.82,7.62 14.27,6.67L10.5,6.5L8.5,4.5H4.5C3.4,4.5 2.5,5.4 2.5,6.5V18.5A2,2 0 0,0 4.5,20.5H15.73C15.27,19.88 15,19.1 15,18.25C15,16.18 16.68,14.5 18.75,14.5C20.82,14.5 22.5,16.18 22.5,18.25C22.5,20.32 20.82,22 18.75,22C17.6,22 16.56,21.5 15.83,20.68L12.38,17.22C12.1,17.39 11.81,17.5 11.5,17.5C10.12,17.5 9,16.38 9,15C9,13.62 10.12,12.5 11.5,12.5L11.5,13Z","mdi:delete-outline":"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z","mdi:chevron-right":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z","mdi:chevron-down":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z","mdi:information-outline":"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z","mdi:help-circle-outline":"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z","mdi:alert-outline":"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z","mdi:plus":"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z","mdi:backup-restore":"M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.6,17 9.5,17.5 10.5,17.8L10,19.8C8.5,19.4 7.3,18.6 6.3,17.6Z","mdi:cog-outline":"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z","mdi:image-outline":"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z","mdi:video-outline":"M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z","mdi:view-grid-outline":"M3,3V11H11V3H3M9,9H5V5H9V9M3,13V21H11V13H3M9,19H5V15H9V19M13,3V11H21V3H13M19,9H15V5H19V9M13,13V21H21V13H13M19,19H15V15H19V19Z","mdi:palette-outline":"M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10A1.5,1.5 0 0,0 5,11.5A1.5,1.5 0 0,0 6.5,13A1.5,1.5 0 0,0 8,11.5A1.5,1.5 0 0,0 6.5,10M9.5,6.5A1.5,1.5 0 0,0 8,8A1.5,1.5 0 0,0 9.5,9.5A1.5,1.5 0 0,0 11,8A1.5,1.5 0 0,0 9.5,6.5M14.5,6.5A1.5,1.5 0 0,0 13,8A1.5,1.5 0 0,0 14.5,9.5A1.5,1.5 0 0,0 16,8A1.5,1.5 0 0,0 14.5,6.5M17.5,10A1.5,1.5 0 0,0 16,11.5A1.5,1.5 0 0,0 17.5,13A1.5,1.5 0 0,0 19,11.5A1.5,1.5 0 0,0 17.5,10Z","mdi:card-outline":"M20,8H4V6H20M20,18H4V12H20M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4Z","mdi:filter-outline":"M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z","mdi:calendar-outline":"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,13H12V18H17V13Z","mdi:account":"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z","mdi:car":"M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M5,11L6.5,6.5H17.5L19,11H5Z","mdi:bicycle":"M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,10.15L13.07,7.85M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z","mdi:bird":"M12.07,2.29C12.07,2.29 6,2 6,8C6,8 5.54,9.69 7,10.5V11.5L5,13L6,14L8,13.5V14.5L6,16V17L8,17.5V22H9V17.5L11.92,16.18V22H13V16L15,17V22H16V16.5L16.5,16V11C16.5,11 18.5,10.5 18.5,8C18.5,5.5 16.72,4.29 16,4C15,3.5 14.5,3 12.07,2.29M12,4C12,4 14,4 15,5C15,5 13,5 12,4Z","mdi:bus":"M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16C4,16.88 4.39,17.67 5,18.22V20A1,1 0 0,0 6,21H7A1,1 0 0,0 8,20V19H16V20A1,1 0 0,0 17,21H18A1,1 0 0,0 19,20V18.22C19.61,17.67 20,16.88 20,16V6C20,2.5 16.42,2 12,2C7.58,2 4,2.5 4,6V16Z","mdi:cat":"M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,9.75C4.87,10.5 4.84,11.25 4.84,12C4.84,17.05 7.88,20 12,20C16.12,20 19.16,17.05 19.16,12C19.16,11.25 19.13,10.5 19.04,9.75C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.25,1.25 0 0,0 15,15.25V15H16V15.25A2.25,2.25 0 0,1 13.75,17.5C13,17.5 12.35,17.15 11.92,16.6L11,14Z","mdi:dog":"M4.5,9.5A0.5,0.5 0 0,1 4,9A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 5,9A0.5,0.5 0 0,1 4.5,9.5M6,3C4.89,3 4,3.89 4,5V9.5A2.5,2.5 0 0,0 6.5,12A2.5,2.5 0 0,0 9,9.5V5A2,2 0 0,1 11,3H6M18.5,9.5A0.5,0.5 0 0,1 18,9A0.5,0.5 0 0,1 18.5,8.5A0.5,0.5 0 0,1 19,9A0.5,0.5 0 0,1 18.5,9.5M18,3H14C15.1,3 16,3.89 16,5V9.5A2.5,2.5 0 0,1 13.5,12A2.5,2.5 0 0,1 11,9.5V9H9V9.5A2.5,2.5 0 0,1 6.5,12H6.5A2.5,2.5 0 0,1 5.42,11.79L3,14.21V21H9V16.72C9.75,17.24 10.84,17.5 12,17.5C13.16,17.5 14.25,17.24 15,16.72V21H21V14.21L18.58,11.79A2.5,2.5 0 0,1 17.5,12A2.5,2.5 0 0,1 15,9.5V5A2,2 0 0,1 17,3H18C19.1,3 20,3.89 20,5V9C20,9 20.07,9.27 20.35,9.41L21,9.69V5C21,3.89 20.1,3 19,3H18Z","mdi:motorbike":"M5,11.5A0.5,0.5 0 0,1 5.5,12A0.5,0.5 0 0,1 5,12.5A0.5,0.5 0 0,1 4.5,12A0.5,0.5 0 0,1 5,11.5M19,11.5A0.5,0.5 0 0,1 19.5,12A0.5,0.5 0 0,1 19,12.5A0.5,0.5 0 0,1 18.5,12A0.5,0.5 0 0,1 19,11.5M19,9.5A2.5,2.5 0 0,0 16.5,12A2.5,2.5 0 0,0 19,14.5A2.5,2.5 0 0,0 21.5,12A2.5,2.5 0 0,0 19,9.5M5,9.5A2.5,2.5 0 0,0 2.5,12A2.5,2.5 0 0,0 5,14.5A2.5,2.5 0 0,0 7.5,12A2.5,2.5 0 0,0 5,9.5M19,8C20.61,8 22,8.88 22.73,10.19L21.31,10.89C20.83,10.35 20.16,10 19.39,10L19,10C19,10 18,8 17,8L14,8L11.78,8.7L13.04,10H15.54L13.81,12.72L12.08,10.55L10.3,10L9.63,8.12C9.12,7.47 8.36,7 7.5,7C6,7 4.77,8.06 4.55,9.5H3.03C3.27,7.24 5.17,5.5 7.5,5.5C9.21,5.5 10.67,6.5 11.37,8H13L10,5H17C18.1,5 19,5.9 19,7V8M5,8C3.39,8 2,8.88 1.27,10.19L2.69,10.89C3.17,10.35 3.84,10 4.61,10L5,10C5,10 6,8 7,8H5Z","mdi:truck":"M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6.5,18.5A1.5,1.5 0 0,1 5,17A1.5,1.5 0 0,1 6.5,15.5A1.5,1.5 0 0,1 8,17A1.5,1.5 0 0,1 6.5,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z","mdi:doorbell-video":"M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M7,14H9V19H7V14M9,14H15V19H9V14M15,14H17V19H15V14Z","mdi:shape":"M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z","mdi:format-line-spacing":"M10,5V19H13V17H11V7H13V5H10M14,7V9H21V7H14M14,11V13H21V11H14M14,15V17H21V15H14M6,7L2,11H5V13H2L6,17V13H9V11H6V7Z","mdi:microphone-outline":"M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19M12,4A1,1 0 0,0 11,5V11A1,1 0 0,0 12,12A1,1 0 0,0 13,11V5A1,1 0 0,0 12,4Z","mdi:crop":"M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z","mdi:database-outline":"M12,3C7.58,3 4,4.79 4,7V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V7C20,4.79 16.42,3 12,3M12,5C15.87,5 18,6.5 18,7C18,7.5 15.87,9 12,9C8.13,9 6,7.5 6,7C6,6.5 8.13,5 12,5M18,17C18,17.5 15.87,19 12,19C8.13,19 6,17.5 6,17V14.77C7.61,15.55 9.72,16 12,16C14.28,16 16.39,15.55 18,14.77V17M12,14C8.13,14 6,12.5 6,12V9.77C7.61,10.55 9.72,11 12,11C14.28,11 16.39,10.55 18,9.77V12C18,12.5 15.87,14 12,14Z","mdi:tune-vertical":"M7,2V22H9V14H11V8H13V14H15V22H17V2H15V8H13V2H11V8H9V2H7Z","mdi:tune":"M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z","mdi:link-variant":"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z","mdi:play-circle-outline":"M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M10,16.5L16,12L10,7.5V16.5Z","mdi:dots-horizontal":"M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z","mdi:content-copy":"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z","mdi:arrow-all":"M13,11H18L16.5,9.5L17.92,8.08L21.84,12L17.92,15.92L16.5,14.5L18,13H13V18L14.5,16.5L15.92,17.92L12,21.84L8.08,17.92L9.5,16.5L11,18V13H6L7.5,14.5L6.08,15.92L2.16,12L6.08,8.08L7.5,9.5L6,11H11V6L9.5,7.5L8.08,6.08L12,2.16L15.92,6.08L14.5,7.5L13,6V11Z"};function Yo(e,t=18){return`<svg class="cgc-svg-icon" viewBox="0 0 24 24" width="${t}" height="${t}" aria-hidden="true" style="fill:currentColor;flex-shrink:0;display:block"><path d="${Bo[e]||""}"/></svg>`}const Uo=["type","source_mode","entities","media_sources","frigate_url","path_datetime_format","max_media","start_mode","preview_position","preview_height","object_fit","controls_mode","clean_mode","show_camera_title","persistent_controls","autoplay","auto_muted","show_today","show_media_filter","show_favorite","show_live","live_enabled","live_auto_muted","live_cameras","live_layout","live_grid_labels","live_stream_urls","live_go2rtc_url","live_mic_mode","live_mic_audio_processing","live_mic_waveform_enabled","live_mic_waveform_sensitivity","live_mic_ice_servers","live_mic_force_relay","live_ptz_enabled","live_ptz_position","live_ptz_speed","live_ptz_cameras","menu_buttons","menu_button_style","thumb_layout","thumb_bar_position","thumb_size","thumb_sort_order","thumbnail_frame_pct","capture_video_thumbnails","aspect_ratio","bar_position","bar_opacity","talkback_opacity","chevron_opacity","pill_size","pill_gap","row_gap","card_height","style_variables","object_filters","object_colors","entity_filter_map","sync_entity","allow_bulk_delete","delete_confirm","delete_service","frigate_delete_service","debug_enabled"];function Wo(e){const t={};for(const i of Uo)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);for(const i of Object.keys(e))Object.prototype.hasOwnProperty.call(t,i)||(t[i]=e[i]);return t}class Ko extends HTMLElement{constructor(){super(),this._config={},this.attachShadow({mode:"open"}),this._scrollRestore={windowY:0,hostScrollTop:0,browserBodyTop:0},this._activeTab="source",this._v2OpenSections=(()=>{try{const e="undefined"!=typeof localStorage&&localStorage.getItem("cgc_v2_open_sections");if(e)return new Map(Object.entries(JSON.parse(e)))}catch(e){}return new Map})(),this._ptzShowAll=!1,this._focusState=null,this._lastSuggestFingerprint={entities:"",mediasources:""},this._mediaBrowseCache=new Map,this._mediaSuggestReq=0,this._mediaSuggestTimer=null,this._raf=null,this._detectResult=null,this._detectStatus="",this._detectKey="",this._detectInFlight=!1,this._mediaBrowserOpen=!1,this._mediaBrowserLoading=!1,this._mediaBrowserPath="",this._mediaBrowserItems=[],this._mediaBrowserHistory=[],this._suggestState={entities:{open:!1,items:[],index:-1},mediasources:{open:!1,items:[],index:-1}},this._openStyleSections=new Set,this._wizardOpen=!1,this._wizardFolder="",this._wizardName="",this._wizardStatus=null,this._editorRendered=!1}_applyFieldValidation(e){const t=this.shadowRoot?.getElementById(e);if(!t)return;const i=t.closest(".field");if(!i)return;i.classList.remove("valid","invalid");let n="neutral";"entities"===e&&(n=this._validateSensors(t.value)),"mediasources"===e&&(n=this._validateMediaFolders(t.value)),"valid"===n&&i.classList.add("valid"),"invalid"===n&&i.classList.add("invalid")}_applySuggestion(e,t){const i=this.shadowRoot?.getElementById(e);i&&(this._replaceCurrentLine(i,t),"entities"===e?(this._commitEntities(!1),this._applyFieldValidation("entities")):"mediasources"===e&&(this._commitMediaSources(!1),this._applyFieldValidation("mediasources")),this._closeSuggestions(e))}_acceptSuggestion(e){const t=this._suggestState[e];if(!t?.open||!t.items.length)return!1;const i=t.index>=0?t.index:0,n=t.items[i];return this._applySuggestion(e,n),!0}async _browseMediaFolders(e){const t=this._normalizeMediaSourceValue(e);if(!t||!this._hass?.callWS)return[];if(this._mediaBrowseCache.has(t))return this._mediaBrowseCache.get(t);try{const e=await this._hass.callWS({type:"media_source/browse_media",media_content_id:t}),i=(Array.isArray(e?.children)?e.children:[]).filter(e=>this._isFolderNode(e)).map(e=>String(e.media_content_id||"").trim()).filter(e=>e.startsWith("media-source://")),n=this._sortUniqueStrings(i);return this._mediaBrowseCache.set(t,n),n}catch(e){return this._mediaBrowseCache.set(t,[]),[]}}async _browseMediaFolderNodes(e){const t=null===e||""===e||null==e,i=t?null:this._normalizeMediaSourceValue(e);if(!t&&null==i)return[];if(!this._hass?.callWS)return[];const n=`__nodes__:${t?"__root__":i}`;if(this._mediaBrowseCache.has(n))return this._mediaBrowseCache.get(n);try{const e={type:"media_source/browse_media"};t||(e.media_content_id=i);const s=await this._hass.callWS(e),r=(Array.isArray(s?.children)?s.children:[]).filter(e=>this._isFolderNode(e)).map(e=>{const t=String(e.media_content_id||"").trim();return{id:t,title:String(e.title||"").trim()||this._lastPathSegment(t)}}).filter(e=>e.id.startsWith("media-source://")).sort((e,t)=>e.title.localeCompare(t.title));return this._mediaBrowseCache.set(n,r),r}catch(e){return this._mediaBrowseCache.set(n,[]),[]}}_getHostScroller(){let e=this;for(;e;){const t=e.getRootNode?.(),i=e.parentElement||(t&&t.host?t.host:null);if(!i)break;try{const e=getComputedStyle(i).overflowY;if(("auto"===e||"scroll"===e)&&i.scrollHeight>i.clientHeight)return i}catch(e){}e=i}return null}_captureScrollState(){try{this._scrollRestore.windowY=window.scrollY||window.pageYOffset||document.documentElement.scrollTop||0}catch(e){this._scrollRestore.windowY=0}try{const e=this._getHostScroller();this._scrollRestore.hostScrollTop=e?e.scrollTop:0}catch(e){this._scrollRestore.hostScrollTop=0}try{const e=this.shadowRoot?.querySelector(".browser-body");this._scrollRestore.browserBodyTop=e?e.scrollTop:0}catch(e){this._scrollRestore.browserBodyTop=0}}_restoreScrollState(){requestAnimationFrame(()=>{try{const e=this._getHostScroller();e?e.scrollTop=this._scrollRestore.hostScrollTop||0:window.scrollTo({top:this._scrollRestore.windowY||0,behavior:"auto"})}catch(e){}try{const e=this.shadowRoot?.querySelector(".browser-body");e&&(e.scrollTop=this._scrollRestore.browserBodyTop||0)}catch(e){}})}_lockPageScroll(){this._captureScrollState();const e=document.body,t=document.documentElement;e&&(e.style.overflow="hidden",e.style.touchAction="none"),t&&(t.style.overflow="hidden")}_unlockPageScroll(){const e=document.body,t=document.documentElement;e&&(e.style.overflow="",e.style.touchAction=""),t&&(t.style.overflow=""),this._restoreScrollState()}_clampInt(e,t,i){return Number.isFinite(e)?Math.min(i,Math.max(t,Math.round(e))):t}_closeSuggestions(e){this._suggestState[e]={open:!1,items:[],index:-1},this._lastSuggestFingerprint[e]="",this._renderSuggestions(e)}_collectEntitySuggestions(){return this._hass?Object.values(this._hass.states).filter(e=>e.entity_id.startsWith("sensor.")&&void 0!==e.attributes?.fileList).map(e=>e.entity_id).sort((e,t)=>e.localeCompare(t)):[]}async _collectMediaSuggestionsDynamic(e){const t=this._getDefaultMediaSuggestions(),i=this._normalizeMediaSourceValue(e);if(!i)return t.slice(0,8);if(!i.startsWith("media-source://"))return t.filter(e=>e.toLowerCase().includes(i.toLowerCase())).slice(0,8);const n=await this._browseMediaFolders(i);if(n.length)return n.slice(0,8);const{base:s,needle:r}=this._mediaBaseAndNeedle(i);if(!s)return t.filter(e=>e.toLowerCase().includes(i.toLowerCase())).slice(0,8);const o=await this._browseMediaFolders(s);if(!o.length)return t.filter(e=>e.toLowerCase().includes(i.toLowerCase())).slice(0,8);const a=r?o.filter(e=>e.slice(s.length+1).toLowerCase().includes(r.toLowerCase())):o;return a.slice(0,8)}_commitEntities(e=!1){const t=this.shadowRoot?.getElementById("entities"),i=String(t?.value||""),n=this._parseTextList(i);if(!n.length){const t={...this._config};return delete t.entities,delete t.entity,this._config=this._stripAlwaysTrueKeys(t),void(e&&(this._fire(),this._scheduleRender()))}const s={...this._config,entities:n};delete s.entity,this._config=this._stripAlwaysTrueKeys(s),e&&(this._fire(),this._scheduleRender())}_commitMediaSources(e=!1){const t=this.shadowRoot?.getElementById("mediasources"),i=String(t?.value||""),n=this._parseTextList(i);if(!n.length){const t={...this._config};return delete t.media_source,delete t.media_sources,this._config=this._stripAlwaysTrueKeys(t),void(e&&(this._fire(),this._scheduleRender()))}const s={...this._config,media_sources:n};delete s.media_source,this._config=this._stripAlwaysTrueKeys(s),e&&(this._fire(),this._scheduleRender())}_filterSuggestions(e,t){const i=String(t||"").trim().toLowerCase();return i?e.filter(e=>String(e).toLowerCase().includes(i)).slice(0,8):e.slice(0,8)}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:Wo(this._config)},bubbles:!0,composed:!0}))}_getDefaultMediaSuggestions(){const e=Array.isArray(this._config.media_sources)?this._config.media_sources.map(String).map(e=>e.trim()).filter(Boolean):[],t=new Set(["media-source://frigate","media-source://frigate/frigate/event-search/clips","media-source://frigate/frigate/event-search/snapshots","media-source://media_source","media-source://media_source/local","media-source://media_source/local/mac_share",...e]);return Array.from(t).sort((e,t)=>e.localeCompare(t))}_getMediaBrowserRoots(){const e=Array.isArray(this._config.media_sources)?this._config.media_sources.map(e=>this._normalizeMediaSourceValue(e)).filter(Boolean):[];return this._sortUniqueStrings(["media-source://frigate","media-source://media_source","media-source://media_source/local",...e])}_getTextareaLineInfo(e){const t=String(e?.value||""),i="number"==typeof e.selectionStart?e.selectionStart:t.length,n=t.slice(0,i),s=t.slice(i),r=n.lastIndexOf("\n")+1,o=s.indexOf("\n"),a=-1===o?t.length:i+o,l=t.slice(r,a);return{value:t,caret:i,lineStart:r,lineEnd:a,line:l,lineCaret:i-r}}_isFolderNode(e){const t=String(e?.media_class||"").toLowerCase(),i=String(e?.media_content_type||"").toLowerCase(),n=String(e?.media_content_id||"");return"app"===t||"channel"===t||"directory"===t||("directory"===i||!(!n.startsWith("media-source://")||/\.[a-z0-9]{2,6}$/i.test(n)))}_looksLikeFile(e){const t=String(e||"");if(t.startsWith("media-source://"))return!1;const i=t.split("/").pop()||"";return/\.(jpg|jpeg|png|gif|webp|mp4|mov|mkv|avi|m4v|wav|mp3|aac|flac|pdf|txt|json)$/i.test(i)}_lastPathSegment(e){const t=String(e||"").replace(/\/+$/,"");if(!t)return"";const i=t.split("/");return i[i.length-1]||t}_mediaBaseAndNeedle(e){const t=this._normalizeMediaSourceValue(e);if(!t.startsWith("media-source://"))return{base:"",needle:t};const i=t.lastIndexOf("/");if(i<=14)return{base:t,needle:""};const n=t.slice(i+1),s=t.slice(0,i);return n?{base:s,needle:n}:{base:s,needle:""}}_moveSuggestion(e,t){const i=this._suggestState[e];if(!i?.open||!i.items.length)return;let n=i.index+t;n<0&&(n=i.items.length-1),n>=i.items.length&&(n=0),this._suggestState[e]={...i,index:n},this._renderSuggestions(e)}_normalizeMediaSourceValue(e){let t=String(e||"").trim();return t?(t=t.replace(/\s+/g,""),t=t.replace(/\/{2,}$/g,""),t):""}_normalizeObjectFilters(e){const t=Array.isArray(e)?e:e?[e]:[],i=[],n=new Set;for(const e of t){let t="";"string"==typeof e?t=e.toLowerCase().trim():"object"==typeof e&&null!==e&&(t=(Object.keys(e)[0]||"").toLowerCase().trim()),t&&!n.has(t)&&(n.add(t),i.push(e))}return i}_numInt(e,t){const i=Number(e);return Number.isFinite(i)?Math.round(i):t}_objectLabel(e){const t=String(e||"").toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}_openSuggestions(e,t){const i=this._suggestState[e]||{items:[],index:-1},n=JSON.stringify(i.items||[])===JSON.stringify(t||[]);this._suggestState[e]={open:!!t.length,items:t,index:n?Math.min(i.index>=0?i.index:0,Math.max(t.length-1,0)):t.length?0:-1},this._renderSuggestions(e)}async _openMediaBrowser(e=""){const t=this._getMediaBrowserRoots(),i=""===e||null==e?"":this._normalizeMediaSourceValue(e)||t[0]||"";this._lockPageScroll(),this._mediaBrowserOpen=!0,this._mediaBrowserHistory=[],this._mediaBrowserItems=[],this._mediaBrowserPath=i,this._mediaBrowserLoading=!0,this._scheduleRender(),await this._loadMediaBrowser(i,!1)}async _loadMediaBrowser(e,t=!0){const i=null===e?null:""===e?"":this._normalizeMediaSourceValue(e);if(null==i)return;t&&this._mediaBrowserPath!==i&&this._mediaBrowserHistory.push(this._mediaBrowserPath),this._mediaBrowserLoading=!0,this._mediaBrowserPath=i,this._mediaBrowserItems=[],this._scheduleRender();const n=await this._browseMediaFolderNodes(i);this._mediaBrowserPath===i&&(this._mediaBrowserItems=n,this._mediaBrowserLoading=!1,this._scheduleRender())}_closeMediaBrowser(){this._unlockPageScroll(),this._mediaBrowserOpen=!1,this._mediaBrowserLoading=!1,this._mediaBrowserPath="",this._mediaBrowserItems=[],this._mediaBrowserHistory=[],this._scheduleRender()}_renderLivecamCropInline(e){const t=(Array.isArray(this._config?.live_cameras)?this._config.live_cameras:[]).find(t=>t?.entity===e),i=t?.crop||{},n=Number.isFinite(Number(i.x))?Number(i.x):0,s=Number.isFinite(Number(i.y))?Number(i.y):0,r=Number.isFinite(Number(i.w))&&i.w>0?Number(i.w):100,o=Number.isFinite(Number(i.h))&&i.h>0?Number(i.h):100,a=!(0===n&&0===s&&100===r&&100===o),l=!0===this._livecamCropOpen?.has?.(e),c=a?`${Math.round(r)} × ${Math.round(o)} %`:"Off",d=`\n      <button type="button" class="livecam-crop-toggle ${a?"set":""}" data-cropcam-toggle="${e}">\n        ${Yo("mdi:crop",14)}\n        <span class="livecam-crop-toggle-label">Crop view</span>\n        <span class="livecam-crop-toggle-status">${c}</span>\n        <span class="livecam-crop-toggle-chev">${l?"▾":"▸"}</span>\n      </button>\n    `;if(!l)return`<div class="livecam-crop-section" data-cropcam-section="${e}">${d}</div>`;const h=String(i.source_ar||this._livecamCropDetectedAR?.get(e)||"16/9"),p=this._hass?.states?.[e],u=String(p?.attributes?.entity_picture||""),m=String(p?.last_changed||"").replace(/[^0-9]/g,"").slice(0,14),g=u?u+(u.includes("?")?"&":"?")+"k="+m:"",f=this._livecamCropAspect?.get(e)||"source",v=h.replace("/",":");return`\n      <div class="livecam-crop-section open" data-cropcam-section="${e}">\n        ${d}\n        <div class="livecam-crop-inline" data-cropcam-root="${e}">\n          <div class="livecam-crop-head">\n            <select class="livecam-crop-aspect" data-cropcam-aspect="${e}">\n            <option value="source" ${"source"===f?"selected":""}>${v} (Source)</option>\n            <option value="16/9"   ${"16/9"===f?"selected":""}>16:9</option>\n            <option value="4/3"    ${"4/3"===f?"selected":""}>4:3</option>\n            <option value="1/1"    ${"1/1"===f?"selected":""}>1:1</option>\n            <option value="9/16"   ${"9/16"===f?"selected":""}>9:16</option>\n            <option value="3/4"    ${"3/4"===f?"selected":""}>3:4</option>\n            <option value="free"   ${"free"===f?"selected":""}>Free</option>\n          </select>\n          <button type="button" class="livecam-crop-reset" data-cropcam-reset="${e}" title="Reset to full frame">\n            ${Yo("mdi:fullscreen",12)}<span>Reset</span>\n          </button>\n        </div>\n        <div class="livecam-crop-stage" data-cropcam-stage="${e}">\n          ${g?`<img class="livecam-crop-img" data-cropcam-img="${e}" src="${g}" alt="" draggable="false" />`:'<div class="livecam-crop-empty">Camera snapshot unavailable</div>'}\n          <div class="livecam-crop-rect" data-cropcam-rect="${e}"\n               style="left:${n}%;top:${s}%;width:${r}%;height:${o}%;">\n            <div class="livecam-crop-handle h-tl" data-handle="tl"></div>\n            <div class="livecam-crop-handle h-tr" data-handle="tr"></div>\n            <div class="livecam-crop-handle h-bl" data-handle="bl"></div>\n            <div class="livecam-crop-handle h-br" data-handle="br"></div>\n          </div>\n          <div class="livecam-crop-mask top"    style="height:${s}%;"></div>\n          <div class="livecam-crop-mask bottom" style="top:${s+o}%;"></div>\n          <div class="livecam-crop-mask left"   style="top:${s}%;width:${n}%;height:${o}%;"></div>\n          <div class="livecam-crop-mask right"  style="top:${s}%;left:${n+r}%;height:${o}%;"></div>\n        </div>\n        <div class="livecam-crop-info" data-cropcam-info="${e}">\n          x: <strong>${Math.round(n)}%</strong> · y: <strong>${Math.round(s)}%</strong> ·\n          w: <strong>${Math.round(r)}%</strong> · h: <strong>${Math.round(o)}%</strong>\n        </div>\n        </div>\n      </div>\n    `}_saveCropForCamera(e,t){if(!e)return;const i=Array.isArray(this._config.live_cameras)?[...this._config.live_cameras]:[],n=i.findIndex(t=>t?.entity===e),s=n>=0?{...i[n]}:{entity:e,name:""};if(0===t.x&&0===t.y&&100===t.w&&100===t.h)delete s.crop;else{const e={x:Math.round(t.x),y:Math.round(t.y),w:Math.round(t.w),h:Math.round(t.h)};t.source_ar&&"16/9"!==t.source_ar&&(e.source_ar=t.source_ar),s.crop=e}n>=0?i[n]=s:i.push(s),this._set("live_cameras",i)}_resetCropForCamera(e){this._saveCropForCamera(e,{x:0,y:0,w:100,h:100})}_wireLivecamCropInline(){const e=this.shadowRoot;e&&(this._livecamCropAspect||(this._livecamCropAspect=new Map),this._livecamCropDetectedAR||(this._livecamCropDetectedAR=new Map),this._livecamCropOpen||(this._livecamCropOpen=new Set),e.querySelectorAll("[data-cropcam-toggle]").forEach(e=>{"1"!==e.dataset.cropcamWiredToggle&&(e.dataset.cropcamWiredToggle="1",e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const i=e.dataset.cropcamToggle;i&&(this._livecamCropOpen.has(i)?this._livecamCropOpen.delete(i):this._livecamCropOpen.add(i),this._scheduleRender())}))}),e.querySelectorAll("[data-cropcam-stage]").forEach(e=>{const t=e.dataset.cropcamStage;t&&"1"!==e.dataset.cropcamWired&&(e.dataset.cropcamWired="1",this._wireOneInlineCropStage(e,t))}))}_wireOneInlineCropStage(e,t){const i=this.shadowRoot;if(!i)return;const n=e.querySelector(`[data-cropcam-rect="${t}"]`),s=e.querySelector(".livecam-crop-mask.top"),r=e.querySelector(".livecam-crop-mask.bottom"),o=e.querySelector(".livecam-crop-mask.left"),a=e.querySelector(".livecam-crop-mask.right"),l=i.querySelector(`[data-cropcam-info="${t}"]`),c=i.querySelector(`[data-cropcam-aspect="${t}"]`),d=i.querySelector(`[data-cropcam-reset="${t}"]`),h=e.querySelector(`[data-cropcam-img="${t}"]`);if(!n)return;const p=()=>({x:parseFloat(n.style.left)||0,y:parseFloat(n.style.top)||0,w:parseFloat(n.style.width)||100,h:parseFloat(n.style.height)||100}),u=()=>{const e=(Array.isArray(this._config?.live_cameras)?this._config.live_cameras:[]).find(e=>e?.entity===t);return String(e?.crop?.source_ar||this._livecamCropDetectedAR.get(t)||"16/9")},m=e=>{if(!e||"free"===e)return null;if("source"===e)return 1;const t=String(e).split("/").map(Number);return 2===t.length&&t[0]&&t[1]?t[0]/t[1]/(()=>{const e=u().split("/").map(Number);return 2===e.length&&e[0]>0&&e[1]>0?e[0]/e[1]:16/9})():null},g=e=>{n.style.left=e.x+"%",n.style.top=e.y+"%",n.style.width=e.w+"%",n.style.height=e.h+"%",s&&(s.style.height=e.y+"%"),r&&(r.style.top=e.y+e.h+"%"),o&&(o.style.top=e.y+"%",o.style.width=e.x+"%",o.style.height=e.h+"%"),a&&(a.style.top=e.y+"%",a.style.left=e.x+e.w+"%",a.style.height=e.h+"%"),l&&(l.innerHTML="x: <strong>"+Math.round(e.x)+"%</strong> · y: <strong>"+Math.round(e.y)+"%</strong> · w: <strong>"+Math.round(e.w)+"%</strong> · h: <strong>"+Math.round(e.h)+"%</strong>")};if(h){const e=()=>{const e=h.naturalWidth,n=h.naturalHeight;if(!e||!n)return;const s=(e,t)=>t?s(t,e%t):e,r=s(e,n),o=`${e/r}/${n/r}`;if(this._livecamCropDetectedAR.get(t)===o)return;this._livecamCropDetectedAR.set(t,o);const a=i.querySelector(`[data-cropcam-aspect="${t}"]`),l=a?.querySelector('option[value="source"]');l&&(l.textContent=`${o.replace("/",":")} (Source)`)};h.complete&&h.naturalWidth?e():h.addEventListener("load",e,{once:!0})}d?.addEventListener("click",e=>{e.preventDefault(),this._resetCropForCamera(t)}),c?.addEventListener("change",e=>{const i=e.target.value;this._livecamCropAspect.set(t,i);const n=m(i);if(null==n)return;const s=p();let r=s.w,o=r/n;s.y+o>100&&(o=100-s.y,r=o*n),s.x+r>100&&(r=100-s.x,o=r/n);const a={x:s.x,y:s.y,w:r,h:o};g(a),this._saveCropForCamera(t,{...a,source_ar:u()})});const f=t=>{const i=e.getBoundingClientRect(),n=(t.clientX-i.left)/i.width*100,s=(t.clientY-i.top)/i.height*100;return{px:Math.max(0,Math.min(100,n)),py:Math.max(0,Math.min(100,s))}};let v=null;const _=e=>{if(!v)return;const{px:i,py:n}=f(e),s=v.startRect;let r;if("move"===v.mode){const e=i-v.startPx.x,t=n-v.startPx.y;r={x:Math.max(0,Math.min(100-s.w,s.x+e)),y:Math.max(0,Math.min(100-s.h,s.y+t)),w:s.w,h:s.h}}else{const e={tl:{x:s.x+s.w,y:s.y+s.h},tr:{x:s.x,y:s.y+s.h},bl:{x:s.x+s.w,y:s.y},br:{x:s.x,y:s.y}}[v.mode];let o=Math.min(e.x,i),a=Math.max(e.x,i),l=Math.min(e.y,n),c=Math.max(e.y,n);const d=this._livecamCropAspect.get(t)||"source",h=m(d);if(null!=h){let t=a-o,i=c-l;t/Math.max(i,1e-4)>h?i=t/h:t=i*h;const n=e.x===s.x+s.w,r=e.y===s.y+s.h;n?(o=e.x-t,a=e.x):(o=e.x,a=e.x+t),r?(l=e.y-i,c=e.y):(l=e.y,c=e.y+i),o<0&&(t=n?e.x:a,i=t/h,n?(o=0,a=e.x):(o=e.x,a=e.x+t),r?(l=e.y-i,c=e.y):(l=e.y,c=e.y+i)),a>100&&(t=n?e.x:100-e.x,i=t/h,n?(o=e.x-t,a=e.x):(o=e.x,a=100),r?(l=e.y-i,c=e.y):(l=e.y,c=e.y+i)),l<0&&(i=r?e.y:c,t=i*h,r?(l=0,c=e.y):(l=e.y,c=e.y+i),n?(o=e.x-t,a=e.x):(o=e.x,a=e.x+t)),c>100&&(i=r?e.y:100-e.y,t=i*h,r?(l=e.y-i,c=e.y):(l=e.y,c=100),n?(o=e.x-t,a=e.x):(o=e.x,a=e.x+t))}const p=5;if(a-o<p||c-l<p)return;r={x:o,y:l,w:a-o,h:c-l}}g(r)},b=()=>{if(!v)return;v=null,document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",b);const e=p();this._saveCropForCamera(t,{...e,source_ar:u()})},y=(e,t)=>{t.preventDefault(),t.stopPropagation();const{px:i,py:n}=f(t);v={mode:e,startPx:{x:i,y:n},startRect:p()},document.addEventListener("pointermove",_),document.addEventListener("pointerup",b)};e.querySelectorAll("[data-handle]").forEach(e=>{e.addEventListener("pointerdown",t=>y(e.dataset.handle,t))}),n.addEventListener("pointerdown",e=>{e.target.dataset.handle||y("move",e)})}async _exportYamlConfig(){const e=this.shadowRoot.getElementById("yaml-export-btn"),t=(t,i=!1)=>{if(!e)return;const n=e.innerHTML;e.innerHTML=`<span style="color:${i?"var(--error-color,#d32f2f)":"var(--success-color,#2e7d32)"};">${t}</span>`,setTimeout(()=>{e.isConnected&&(e.innerHTML=n)},1600)};try{const e=di.dump(this._config||{},{lineWidth:100,noRefs:!0});await navigator.clipboard.writeText(e),t("Copied to clipboard")}catch(e){t(`Copy failed: ${e?.message||e}`,!0)}}async _mediaBrowserGoBack(){if(!this._mediaBrowserHistory.length)return;const e=this._mediaBrowserHistory.pop();if(void 0===e)return;this._mediaBrowserLoading=!0,this._mediaBrowserPath=e,this._mediaBrowserItems=[],this._scheduleRender();const t=await this._browseMediaFolderNodes(e);this._mediaBrowserPath===e&&(this._mediaBrowserItems=t,this._mediaBrowserLoading=!1,this._scheduleRender())}_appendMediaSourceValue(e){const t=this._normalizeMediaSourceValue(e);if(!t)return;const i=Array.isArray(this._config.media_sources)?this._config.media_sources.map(e=>String(e).trim()).filter(Boolean):[],n=new Set(i.map(e=>e.toLowerCase()));n.has(t.toLowerCase())||i.push(t);const s=this.shadowRoot?.getElementById("mediasources");s&&(s.value=i.join("\n")),this._config=this._stripAlwaysTrueKeys({...this._config,media_sources:i}),delete this._config.media_source,this._fire(),this._applyFieldValidation("mediasources"),this._closeSuggestions("mediasources"),this._scheduleRender()}_parseTextList(e){const t=String(e||"").split(/\n|,/g).map(e=>String(e||"").trim()).filter(Boolean),i=[],n=new Set;for(const e of t){const t=String(e).trim().toLowerCase();n.has(t)||(n.add(t),i.push(String(e).trim()))}return i}_prettyLabel(e){const t=String(e||"");return t?t.startsWith("media-source://")?this._toRel(t):t:""}_getStyleVariableValue(e){const t=String(this._config?.style_variables||""),i=String(e||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),n=t.match(new RegExp(`${i}\\s*:\\s*([^;]+)`));return n?n[1].trim():""}_setStyleVariable(e,t){const i=String(this._config.style_variables||"").split("\n").map(e=>e.trim()).filter(Boolean).filter(t=>!t.startsWith(e));i.push(`${e}: ${t};`),this._config=this._stripAlwaysTrueKeys({...this._config,style_variables:i.join("\n")})}_removeStyleVariable(e){const t=String(this._config.style_variables||"").split("\n").map(e=>e.trim()).filter(Boolean).filter(t=>!t.startsWith(e));this._config=this._stripAlwaysTrueKeys({...this._config,style_variables:t.join("\n")})}_createColorPicker(e,t,i){const n=this.shadowRoot?.getElementById(e);if(!n)return;n.innerHTML="";const s=document.createElement("input");s.type="color",s.className="cgc-color";const r="transparent"===i;s.value=i&&/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(i)?i:"#000000",s.disabled=r,n.appendChild(s),s.addEventListener("change",e=>{const i=e.target.value;this._setStyleVariable(t,i),this._fire(),this._scheduleRender()})}_bindColorControls(e={}){Ai.forEach(e=>{e.controls.forEach(e=>{"color"===e.type&&this._createColorPicker(e.hostId,e.variable,this._getStyleVariableValue(e.variable))})}),this.shadowRoot.querySelectorAll("[data-reset]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.reset;this._removeStyleVariable(e),this._fire(),this._scheduleRender()},e)}),this.shadowRoot.querySelectorAll("[data-transparent]").forEach(t=>{const i=t.dataset.transparent,n=this._getStyleVariableValue(i);t.checked="transparent"===n,t.addEventListener("change",e=>{e.target.checked?this._setStyleVariable(i,"transparent"):this._removeStyleVariable(i),this._fire(),this._scheduleRender()},e)}),this.shadowRoot.querySelectorAll("[data-radius]").forEach(t=>{const i=t.dataset.radius,n=this.shadowRoot.getElementById(t.dataset.radiusMirrorId);t.addEventListener("input",e=>{n&&(n.value=e.target.value)},e),t.addEventListener("change",e=>{n&&(n.value=e.target.value),this._setStyleVariable(i,e.target.value+"px"),this._fire(),this._scheduleRender()},e)}),this.shadowRoot.querySelectorAll("[data-radius-input]").forEach(t=>{const i=t.dataset.radiusInput,n=Number(t.dataset.radiusDefault),s=this.shadowRoot.querySelector(`[data-radius="${i}"]`),r=Number(t.min),o=Number(t.max),a=()=>{let e=Number(t.value);Number.isFinite(e)||(e=n),e=Math.min(o,Math.max(r,Math.round(e))),t.value=e,s&&(s.value=e),this._setStyleVariable(i,e+"px"),this._fire(),this._scheduleRender()};t.addEventListener("input",()=>{const e=Number(t.value);Number.isFinite(e)&&s&&(s.value=Math.min(o,Math.max(r,e)))},e),t.addEventListener("change",a,e),t.addEventListener("blur",a,e),t.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),a(),t.blur())},e)}),this.shadowRoot.querySelectorAll("[data-seg-key]").forEach(t=>{t.addEventListener("change",e=>{this._set(t.dataset.segKey,e.target.value)},e)}),this.shadowRoot.querySelectorAll("[data-config-slider]").forEach(t=>{const i=t.dataset.configSlider,n=Number(t.dataset.sliderDefault),s=this.shadowRoot.getElementById(t.dataset.sliderMirrorId);t.addEventListener("input",e=>{s&&(s.value=e.target.value)},e),t.addEventListener("change",e=>{const t=Number(e.target.value);s&&(s.value=t),this._set(i,Number.isFinite(t)?t:n)},e)}),this.shadowRoot.querySelectorAll("[data-slider-input]").forEach(t=>{const i=t.dataset.sliderInput,n=Number(t.dataset.sliderDefault),s=this.shadowRoot.getElementById(t.dataset.sliderTarget),r=Number(t.min),o=Number(t.max),a=()=>{let e=Number(t.value);Number.isFinite(e)||(e=n),e=Math.min(o,Math.max(r,Math.round(e))),t.value=e,s&&(s.value=e),this._set(i,e)};t.addEventListener("input",()=>{const e=Number(t.value);Number.isFinite(e)&&s&&(s.value=Math.min(o,Math.max(r,e)))},e),t.addEventListener("change",a,e),t.addEventListener("blur",a,e),t.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),a(),t.blur())},e)}),this.shadowRoot.querySelectorAll("[data-slider-reset]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.sliderReset,i=Number(t.dataset.sliderDefault);this._set(e,i)},e)}),this.shadowRoot.querySelectorAll("details.style-section").forEach(t=>{t.addEventListener("toggle",()=>{const e=t.id.replace("style-section-","");t.open?this._openStyleSections.add(e):this._openStyleSections.delete(e)},e)})}_formatDetectKey(){const e=Array.isArray(this._config?.media_sources)?this._config.media_sources.filter(Boolean):[],t=Array.isArray(this._config?.entities)?this._config.entities.filter(Boolean):[];return e.length||t.length?`${e.join("|")}::${t.join(",")}`:""}async _runFormatDetection(){if(this._detectInFlight)return;if(!this._hass)return;const e=Array.isArray(this._config?.media_sources)?this._config.media_sources.filter(Boolean):[],t=e.filter(e=>!(is(e)&&!ss(e))),i=[],n=Array.isArray(this._config?.entities)?this._config.entities:[];for(const e of n){if("string"!=typeof e||!e)continue;const t=this._hass?.states?.[e]?.attributes?.fileList,n=Array.isArray(t)?t:[];for(const e of n)if("string"==typeof e&&e&&i.push(e),i.length>=12)break;if(i.length>=12)break}if(0===t.length&&0===i.length)return this._detectResult=null,this._detectStatus=e.length?"Frigate event roots use event-ids — no format needed":"Add a sensor or media folder to detect from",this._detectKey=this._formatDetectKey(),void this._scheduleRender();this._detectInFlight=!0,this._detectStatus="",this._scheduleRender();try{const e=e=>this._hass.callWS({type:"media_source/browse_media",media_content_id:e}),n=t.length?await async function(e,t,i=12){const n=[];for(const s of e){if(n.length>=i)break;const e=await zr(s,t);n.push(...e.slice(0,i-n.length))}return n}(t,e).catch(()=>[]):[],s=[...n,...i],r=function(e){if(0===e.length)return{format:null,matches:0,sampled:0,runnersUp:[],allScores:[]};const t=[];for(const i of Pr){const n=Fr(i);n?t.push({format:i,matches:Er(e,i,n)}):t.push({format:i,matches:0})}t.sort((e,t)=>t.matches!==e.matches?t.matches-e.matches:Pr.indexOf(e.format)-Pr.indexOf(t.format));const i=t.filter(e=>e.matches>0),n=i[0],s=e.length<4?1:Math.ceil(e.length/2);return!n||n.matches<s?{format:null,matches:n?.matches??0,sampled:e.length,runnersUp:i.slice(0,3),allScores:t}:{format:n.format,matches:n.matches,sampled:e.length,runnersUp:i.slice(1,4),allScores:t}}(s);if(this._detectResult=r,this._detectStatus=r.format?`Detected ${r.format} (${r.matches}/${r.sampled} matched)`:s.length?`No common pattern matched across ${s.length} sample${1===s.length?"":"s"}`:"Probe found no files",this._detectKey=this._formatDetectKey(),r.format&&!String(this._config?.path_datetime_format??"").trim()){const e={...this._config,path_datetime_format:r.format};this._config=this._stripAlwaysTrueKeys(e),this._fire()}}catch(e){console.warn("path-format detect failed:",e),this._detectStatus="Detect failed (see console)",this._detectResult=null}finally{this._detectInFlight=!1,this._scheduleRender()}}_renderDetectStatusText(){return this._detectStatus?String(this._detectStatus).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}_renderDetectScoreboard(){const e=this._detectResult;if(!e||!Array.isArray(e.allScores)||!e.allScores.length)return"";const t=String(this._config?.path_datetime_format??"").trim(),i=e.sampled||0,n=e.allScores.map(n=>{const s=n.format,r=Number.isFinite(n.matches)?n.matches:0,o=i>0?Math.round(r/i*100):0,a=["pathfmt-row",r>0?"matched":"no-match",s===e.format?"winner":"",s===t?"current":""].filter(Boolean).join(" "),l=(e=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))(s);return`<button type="button" class="${a}" data-pathfmt="${l}" title="${l}">\n          <span class="pathfmt-row-fmt">${l}</span>\n          <span class="pathfmt-row-count">${r}/${i}</span>\n          <span class="pathfmt-row-bar"><span style="width:${o}%"></span></span>\n        </button>`}).join("");return`<details class="pathfmt-details">\n      <summary>${Yo("mdi:chevron-right",14)}<span>Show all tested formats (${e.allScores.length})</span></summary>\n      <div class="pathfmt-rows">${n}</div>\n    </details>`}_render(){const e=this._config||{};try{const e=this.shadowRoot?.activeElement;if(e&&e.id){const t="number"==typeof e.selectionStart?e.selectionStart:null,i="number"==typeof e.selectionEnd?e.selectionEnd:null;this._focusState={id:e.id,value:"string"==typeof e.value?e.value:null,start:t,end:i}}else this._focusState=null}catch(e){this._focusState=null}const t=String(e.source_mode||"sensor"),i="sensor"===t,n="media"===t,s="combined"===t,r=String(e.start_mode||"gallery"),o=Array.isArray(e.entities)?e.entities.map(String).map(e=>e.trim()).filter(Boolean):[],a=String(e.entity||"").trim(),l=o.length?o:a?[a]:[],c=this._sourcesToText(l),d=l.filter(e=>{const t=/^sensor\./i.test(e),i=!!this._hass?.states?.[e];return!t||!i}),h=Array.isArray(e.media_sources)?e.media_sources.map(String).map(e=>e.trim()).filter(Boolean):[],p=this._sourcesToText(h),u=h.some(e=>this._looksLikeFile(this._prettyLabel(e))),m=String(e.path_datetime_format||"").trim(),g=this._normalizeObjectFilters(e.object_filters||[]),f=g.length,v="object"==typeof e.object_colors&&null!==e.object_colors?e.object_colors:{},_=Number(e.thumb_size)||140,b=(()=>{const t=this._numInt(e.max_media,50);return this._clampInt(t,1,500)})(),y=String(e.preview_position||"top"),w=String(e.object_fit||"cover"),x=(()=>{const t=String(e.thumb_bar_position||"bottom").toLowerCase().trim();return"hidden"===t?"hidden":"top"===t?"top":"bottom"})(),k="vertical"===String(e.thumb_layout||"horizontal").toLowerCase().trim()?"vertical":"horizontal",S="oldest"===String(e.thumb_sort_order||"newest").toLowerCase().trim()?"oldest":"newest",$="vertical"===k,C=this._hass?.services||{},A=Object.keys(C.shell_command||{}).map(e=>`shell_command.${e}`).sort((e,t)=>e.localeCompare(t)),L=Object.keys(C.rest_command||{}).map(e=>`rest_command.${e}`).sort((e,t)=>e.localeCompare(t)),M=String(e.delete_service||e.shell_command||"").trim(),P=!M||/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(M),T=(()=>{const e=new Set(A);return M&&e.add(M),Array.from(e).sort((e,t)=>e.localeCompare(t))})(),z=String(e.frigate_delete_service||"").trim(),E=!z||/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(z),I=(()=>{const e=new Set(L);return z&&e.add(z),Array.from(e).sort((e,t)=>e.localeCompare(t))})();(()=>{const t=Number(e.bar_opacity);Number.isFinite(t)&&Math.min(100,Math.max(0,t))})();const F=(()=>{const t=Number(e.thumbnail_frame_pct);return Number.isFinite(t)?Math.min(100,Math.max(0,Math.round(t))):0})(),H=!0===e.autoplay,D=void 0!==e.auto_muted?!0===e.auto_muted:vi,R=void 0!==e.live_auto_muted?!0===e.live_auto_muted:xi,j=!0===e.clean_mode,O=!0===e.persistent_controls,V=!0===e.live_enabled,q=Jn(e),N="grid"===e.live_layout?"grid":"single",B=Object.keys(this._hass?.states||{}).filter(e=>{if(!e.startsWith("camera."))return!1;const t=this._hass?.states?.[e];if(!t)return!1;const i=String(t.state||"").toLowerCase();return"unavailable"!==i&&"unknown"!==i}).sort((e,t)=>{const i=String(this._hass?.states?.[e]?.attributes?.friendly_name||e).toLowerCase(),n=String(this._hass?.states?.[t]?.attributes?.friendly_name||t).toLowerCase();return i.localeCompare(n)}),Y="\n      --ed-radius-panel: 18px;\n      --ed-radius-row: 16px;\n      --ed-radius-input: 12px;\n      --ed-radius-pill: 999px;\n      --ed-space-1: 8px;\n      --ed-space-2: 12px;\n      --ed-space-3: 16px;\n      --ed-space-4: 20px;\n\n      --ed-muted: var(--cgc-editor-muted-opacity, 0.60);\n\n      --ed-text: var(--primary-text-color, rgba(0,0,0,0.87));\n      --ed-text2: var(--secondary-text-color, rgba(0,0,0,0.60));\n\n      --ed-section-bg: var(--card-background-color, #fff);\n      --ed-section-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.12)) 55%,\n        transparent\n      );\n      --ed-section-glow: var(\n        --cgc-editor-section-glow,\n        0 1px 0 rgba(255,255,255,0.02) inset\n      );\n\n      --ed-row-bg: color-mix(\n        in srgb,\n        var(--secondary-background-color, rgba(0,0,0,0.03)) 60%,\n        transparent\n      );\n      --ed-row-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.12)) 48%,\n        transparent\n      );\n\n      --ed-input-bg: var(--secondary-background-color, rgba(0,0,0,0.04));\n      --ed-input-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.14)) 58%,\n        transparent\n      );\n\n      --ed-select-bg: var(--secondary-background-color, rgba(0,0,0,0.04));\n      --ed-select-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.14)) 58%,\n        transparent\n      );\n\n      --ed-seg-bg: var(--secondary-background-color, rgba(0,0,0,0.04));\n      --ed-seg-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.12)) 52%,\n        transparent\n      );\n      --ed-seg-txt: var(--secondary-text-color, rgba(0,0,0,0.60));\n      --ed-seg-on-bg: var(--primary-text-color, rgba(0,0,0,0.88));\n      --ed-seg-on-txt: var(--primary-background-color, rgba(255,255,255,0.98));\n\n      --ed-tab-bg: var(--secondary-background-color, rgba(0,0,0,0.03));\n      --ed-tab-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.12)) 52%,\n        transparent\n      );\n      --ed-tab-txt: var(--secondary-text-color, rgba(0,0,0,0.60));\n      --ed-tab-on-bg: color-mix(\n        in srgb,\n        var(--primary-color, #03a9f4) 14%,\n        var(--secondary-background-color, rgba(0,0,0,0.04))\n      );\n      --ed-tab-on-border: var(--primary-color, #03a9f4);\n      --ed-tab-on-txt: var(--primary-text-color, rgba(0,0,0,0.88));\n\n      --ed-chip-bg: var(--secondary-background-color, rgba(0,0,0,0.03));\n      --ed-chip-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.12)) 52%,\n        transparent\n      );\n      --ed-chip-disabled: 0.50;\n      --ed-chip-txt: var(--primary-text-color, rgba(0,0,0,0.88));\n      --ed-chip-icon-bg: color-mix(\n        in srgb,\n        var(--secondary-background-color, rgba(0,0,0,0.03)) 80%,\n        transparent\n      );\n      --ed-chip-on-bg: color-mix(\n        in srgb,\n        var(--primary-color, #03a9f4) 12%,\n        var(--secondary-background-color, rgba(0,0,0,0.03))\n      );\n      --ed-chip-on-border: var(--primary-color, #03a9f4);\n      --ed-chip-on-txt: var(--primary-text-color, rgba(0,0,0,0.92));\n      --ed-chip-on-icon-bg: color-mix(\n        in srgb,\n        var(--primary-color, #03a9f4) 18%,\n        transparent\n      );\n\n      --ed-pill-bg: var(--secondary-background-color, rgba(0,0,0,0.08));\n      --ed-pill-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.14)) 58%,\n        transparent\n      );\n      --ed-pill-txt: var(--primary-text-color, rgba(0,0,0,0.88));\n\n      --ed-sugg-bg: var(--card-background-color, #fff);\n      --ed-sugg-border: color-mix(\n        in srgb,\n        var(--divider-color, rgba(0,0,0,0.14)) 60%,\n        transparent\n      );\n      --ed-sugg-hover: var(--secondary-background-color, rgba(0,0,0,0.045));\n      --ed-sugg-active: color-mix(\n        in srgb,\n        var(--primary-color, #03a9f4) 10%,\n        var(--secondary-background-color, rgba(0,0,0,0.04))\n      );\n\n      --ed-arrow: var(--secondary-text-color, rgba(0,0,0,0.58));\n      --ed-focus-ring: color-mix(\n        in srgb,\n        var(--primary-color, #03a9f4) 20%,\n        transparent\n      );\n\n      --ed-valid: var(--success-color, rgba(46,160,67,0.95));\n      --ed-valid-glow: color-mix(\n        in srgb,\n        var(--success-color, rgba(46,160,67,0.95)) 20%,\n        transparent\n      );\n\n      --ed-invalid: var(--error-color, rgba(219,68,55,0.92));\n      --ed-invalid-glow: color-mix(\n        in srgb,\n        var(--error-color, rgba(219,68,55,0.92)) 20%,\n        transparent\n      );\n\n      --ed-warning: var(--warning-color, rgba(245,158,11,0.95));\n      --ed-warning-bg: color-mix(\n        in srgb,\n        var(--warning-color, rgba(245,158,11,0.95)) 10%,\n        transparent\n      );\n      --ed-warning-border: color-mix(\n        in srgb,\n        var(--warning-color, rgba(245,158,11,0.95)) 24%,\n        transparent\n      );\n      --ed-warning-icon-bg: color-mix(\n        in srgb,\n        var(--warning-color, rgba(245,158,11,0.95)) 14%,\n        transparent\n      );\n\n      --ed-success-bg: color-mix(\n        in srgb,\n        var(--success-color, rgba(46,160,67,0.95)) 10%,\n        transparent\n      );\n      --ed-success-border: color-mix(\n        in srgb,\n        var(--success-color, rgba(46,160,67,0.95)) 24%,\n        transparent\n      );\n      --ed-success-icon-bg: color-mix(\n        in srgb,\n        var(--success-color, rgba(46,160,67,0.95)) 14%,\n        transparent\n      );\n\n      --ed-shadow-soft: var(\n        --cgc-editor-shadow-soft,\n        0 8px 24px rgba(0,0,0,0.10)\n      );\n      --ed-shadow-float: var(\n        --cgc-editor-shadow-float,\n        0 14px 36px rgba(0,0,0,0.18)\n      );\n      --ed-shadow-press: var(\n        --cgc-editor-shadow-press,\n        0 6px 16px rgba(0,0,0,0.10)\n      );\n      --ed-shadow-chip: var(\n        --cgc-editor-shadow-chip,\n        0 8px 18px rgba(0,0,0,0.08)\n      );\n      --ed-shadow-modal: var(\n        --cgc-editor-shadow-modal,\n        0 24px 60px rgba(0,0,0,0.28)\n      );\n      --ed-backdrop: var(--cgc-editor-backdrop, rgba(0,0,0,0.68));\n    ",U=(e,t,i)=>`\n      <button\n        type="button"\n        class="tabbtn ${this._activeTab===e?"on":""}"\n        data-tab="${e}"\n      >\n        ${Yo(i,16)}\n        <span>${t}</span>\n      </button>\n    `,W=this._mediaBrowserOpen?`\n        <div class="browser-backdrop" id="browser-backdrop"></div>\n        <div class="browser-modal" role="dialog" aria-modal="true" aria-label="Browse media folders">\n          <div class="browser-head">\n            <div class="browser-head-copy">\n              <div class="browser-title">Browse folders</div>\n              <div class="browser-path">${this._mediaBrowserPath||"—"}</div>\n            </div>\n            <button type="button" class="browser-iconbtn" id="browser-close" title="Close">\n              ${Yo("mdi:close",18)}\n            </button>\n          </div>\n\n          <div class="browser-toolbar">\n            <button\n              type="button"\n              class="browser-btn ${this._mediaBrowserHistory.length?"":"disabled"}"\n              id="browser-back"\n              ${this._mediaBrowserHistory.length?"":"disabled"}\n            >\n              ${Yo("mdi:arrow-left",18)}\n              <span>Back</span>\n            </button>\n\n            <button\n              type="button"\n              class="browser-btn primary"\n              id="browser-select-current"\n              ${this._mediaBrowserPath?"":"disabled"}\n            >\n              ${Yo("mdi:check",18)}\n              <span>Use current folder</span>\n            </button>\n          </div>\n\n          <div class="browser-body">\n            ${this._mediaBrowserLoading?'<div class="browser-empty">Loading folders…</div>':this._mediaBrowserItems.length?`\n                    <div class="browser-list">\n                      ${this._mediaBrowserItems.map(e=>`\n                            <div class="browser-item">\n                              <button\n                                type="button"\n                                class="browser-open"\n                                data-browser-open="${e.id.replace(/"/g,"&quot;")}"\n                                title="${e.id.replace(/"/g,"&quot;")}"\n                              >\n                                <span class="browser-open-icon">\n                                  ${Yo("mdi:folder-outline",20)}\n                                </span>\n                                <span class="browser-open-copy">\n                                  <span class="browser-open-title">${e.title}</span>\n                                  <span class="browser-open-sub">${e.id}</span>\n                                </span>\n                              </button>\n\n                              <button\n                                type="button"\n                                class="browser-select"\n                                data-browser-select="${e.id.replace(/"/g,"&quot;")}"\n                                title="Select folder"\n                              >\n                                Select\n                              </button>\n                            </div>\n                          `).join("")}\n                    </div>\n                  `:'<div class="browser-empty">No folders found here.</div>'}\n          </div>\n        </div>\n      `:"",K=()=>`\n      <div class="tabpanel" data-panel="styling">\n        <div class="style-sections">\n          ${Ai.map(e=>`\n            <details\n              class="style-section"\n              id="style-section-${e.id}"\n              ${this._openStyleSections.has(e.id)?"open":""}\n            >\n              <summary class="style-section-head">\n                ${Yo(e.icon,18)}\n                <span>${e.label}</span>\n                <span class="style-chevron">${Yo("mdi:chevron-down",18)}</span>\n              </summary>\n              <div class="style-section-body">\n                <div class="color-grid">\n                  ${e.controls.map(e=>{if("color"===e.type)return`\n                        <div class="color-row">\n                          <div class="lbl">${e.label}</div>\n                          <div class="color-controls">\n                            <div id="${e.hostId}"></div>\n                            <label class="color-transparent">\n                              <input type="checkbox" data-transparent="${e.variable}">\n                              Transparent\n                            </label>\n                            <button type="button" class="color-reset" data-reset="${e.variable}" title="Reset to default">\n                              ${Yo("mdi:backup-restore",16)}\n                            </button>\n                          </div>\n                        </div>\n                      `;if("radius"===e.type){const t=this._getStyleVariableValue(e.variable),i=t?parseInt(t):e.default,n=e.variable.replace(/[^a-z0-9]/gi,"-");return`\n                        <div class="color-row">\n                          <div class="lbl">${e.label}</div>\n                          <div class="color-controls">\n                            <input\n                              type="range"\n                              class="radius-range"\n                              data-radius="${e.variable}"\n                              data-radius-mirror-id="radius-num-${n}"\n                              min="${e.min}"\n                              max="${e.max}"\n                              value="${i}"\n                            >\n                            <span class="radius-value-wrap" id="radius-val-${n}">\n                              <input\n                                type="number"\n                                class="radius-value-input"\n                                id="radius-num-${n}"\n                                data-radius-input="${e.variable}"\n                                data-radius-default="${e.default}"\n                                min="${e.min}"\n                                max="${e.max}"\n                                step="1"\n                                value="${i}"\n                              >\n                              <span class="radius-value-unit">px</span>\n                            </span>\n                            <button type="button" class="color-reset" data-reset="${e.variable}" title="Reset to default">\n                              ${Yo("mdi:backup-restore",16)}\n                            </button>\n                          </div>\n                        </div>\n                      `}if("select"===e.type){const t=String(this._config?.[e.configKey]||e.options[0].value),i=!!e.disabledFn&&e.disabledFn(this._config||{}),n=e.options.map(e=>`<option value="${e.value}" ${t===e.value?"selected":""}>${e.label}</option>`).join("");return`\n                        <div class="color-row ${i?"muted":""}">\n                          <div class="lbl">${e.label}</div>\n                          <div class="selectwrap" style="min-width:120px">\n                            <select class="select" data-seg-key="${e.configKey}" ${i?"disabled":""}>${n}</select>\n                            <span class="selarrow"></span>\n                          </div>\n                        </div>\n                      `}if("slider"===e.type){const t=Number(this._config?.[e.configKey]),i=Number.isFinite(t)?Math.min(e.max,Math.max(e.min,t)):e.default;return`\n                        <div class="color-row">\n                          <div class="lbl">${e.label}</div>\n                          <div class="color-controls">\n                            <input\n                              type="range"\n                              class="radius-range"\n                              data-config-slider="${e.configKey}"\n                              data-slider-val-id="${e.valId}"\n                              data-slider-unit="${e.unit}"\n                              data-slider-default="${e.default}"\n                              data-slider-mirror-id="${e.id}-num"\n                              id="${e.id}"\n                              min="${e.min}"\n                              max="${e.max}"\n                              value="${i}"\n                            >\n                            <span class="radius-value-wrap" id="${e.valId}" data-slider-unit="${e.unit}">\n                              <input\n                                type="number"\n                                class="radius-value-input"\n                                id="${e.id}-num"\n                                data-slider-input="${e.configKey}"\n                                data-slider-target="${e.id}"\n                                data-slider-default="${e.default}"\n                                min="${e.min}"\n                                max="${e.max}"\n                                step="1"\n                                value="${i}"\n                              >\n                              <span class="radius-value-unit">${e.unit}</span>\n                            </span>\n                            <button type="button" class="color-reset" data-slider-reset="${e.configKey}" data-slider-default="${e.default}" title="Reset to default">\n                              ${Yo("mdi:backup-restore",16)}\n                            </button>\n                          </div>\n                        </div>\n                      `}return""}).join("")}\n                </div>\n              </div>\n            </details>\n          `).join("")}\n        </div>\n      </div>\n    `,Z=(e,t,i,n,s,r)=>{const o=`${this._activeTab}.${e}`,a=this._v2OpenSections.has(o)?this._v2OpenSections.get(o):i,l=!0===r?.muted,c=r?.mutedHint||"";return`\n        <details class="style-section ${l?"muted":""}" ${a?"open":""} data-v2-section="${e}">\n          <summary class="style-section-head">\n            ${s?Yo(s,18):""}\n            <span>${t}</span>\n            ${l&&c?`<em style="margin-left:8px;font-size:11px;opacity:0.6;font-style:italic;">${c}</em>`:""}\n            <span class="style-chevron">${Yo("mdi:chevron-down",18)}</span>\n          </summary>\n          <div class="style-section-body">\n            ${n}\n          </div>\n        </details>\n      `},G='\n      <div class="v2-expand-row">\n        <button type="button" class="v2-expand-all" data-v2-expand>Expand all</button>\n      </div>\n    ',X=()=>{const e=`\n        <div class="row">\n          <div class="lbl">Default view</div>\n          <div class="desc">Which screen the card opens on. <code>Gallery</code> shows recorded clips; <code>Live</code> shows the camera feed.</div>\n          <div class="segwrap">\n            <button class="seg ${"live"!==r?"on":""}" data-startmode="gallery">Gallery</button>\n            <button class="seg ${"live"===r?"on":""}" data-startmode="live">Live</button>\n          </div>\n        </div>\n      `,t=`\n        <div class="row">\n          <div class="lbl">Source mode</div>\n          <div class="desc">Where the card pulls clips from. <code>File sensor</code> reads from a sensor entity; <code>Media folders</code> walks Home Assistant's media-source tree; <code>Combined</code> merges both.</div>\n          <div class="segwrap">\n            <button class="seg ${i?"on":""}" data-src="sensor">File sensor</button>\n            <button class="seg ${n?"on":""}" data-src="media">Media folders</button>\n            <button class="seg ${s?"on":""}" data-src="combined">Combined</button>\n          </div>\n        </div>\n\n        ${i?`\n        <div class="row">\n          <div class="field" id="entities-field">\n            <textarea id="entities" rows="4" placeholder="Enter one sensor per line"></textarea>\n            <div class="suggestions" id="entities-suggestions" hidden></div>\n          </div>\n          ${d.length?`<div class="desc">⚠️ Invalid / missing sensor(s): <code>${d.join("</code>, <code>")}</code></div>`:""}\n          ${this._renderFilesWizard()}\n        </div>\n        `:n?`\n        <div class="row">\n          <div class="field" id="mediasources-field">\n            <textarea id="mediasources" rows="4" placeholder="Enter one folder per line, or browse and select folders"></textarea>\n            <div class="suggestions" id="mediasources-suggestions" hidden></div>\n          </div>\n          <div class="row-actions">\n            <button type="button" class="actionbtn" id="browse-media-folders">${Yo("mdi:folder-search-outline",18)}<span>Browse</span></button>\n            <button type="button" class="actionbtn" id="clear-media-folders">${Yo("mdi:delete-outline",18)}<span>Clear</span></button>\n          </div>\n          ${u?'<div class="desc">⚠️ One of your entries looks like a file (extension). This field expects folders.</div>':""}\n        </div>\n        `:`\n        <div class="row">\n          <div class="lbl">File sensors</div>\n          <div class="field" id="entities-field">\n            <textarea id="entities" rows="3" placeholder="Enter one sensor per line"></textarea>\n            <div class="suggestions" id="entities-suggestions" hidden></div>\n          </div>\n          ${d.length?`<div class="desc">⚠️ Invalid / missing sensor(s): <code>${d.join("</code>, <code>")}</code></div>`:""}\n        </div>\n        <div class="row">\n          <div class="lbl">Media folders</div>\n          <div class="field" id="mediasources-field">\n            <textarea id="mediasources" rows="3" placeholder="Enter one folder per line, or browse and select folders"></textarea>\n            <div class="suggestions" id="mediasources-suggestions" hidden></div>\n          </div>\n          <div class="row-actions">\n            <button type="button" class="actionbtn" id="browse-media-folders">${Yo("mdi:folder-search-outline",18)}<span>Browse</span></button>\n            <button type="button" class="actionbtn" id="clear-media-folders">${Yo("mdi:delete-outline",18)}<span>Clear</span></button>\n          </div>\n          ${u?'<div class="desc">⚠️ One of your entries looks like a file (extension). This field expects folders.</div>':""}\n        </div>\n        `}\n      `,o=`\n        <div class="row">\n          <div class="lbl">Frigate URL <span style="font-weight:400;color:var(--ed-text2);font-size:0.85em;">(optional)</span></div>\n          <div class="desc">Direct URL to your Frigate API (e.g. <code>http://192.168.1.x:5000</code>). When set, clips load through Frigate's REST API — much faster than crawling Home Assistant's media tree folder by folder.</div>\n          <div class="field">\n            <input type="text" class="ed-input" id="frigate_url" placeholder="http://192.168.1.x:5000" autocomplete="off" value="${this._config.frigate_url||""}" />\n          </div>\n        </div>\n        <div class="row">\n          <div class="row-head">\n            <div>\n              <div class="lbl">Bounding box on thumbs</div>\n              <div class="desc">Use Frigate's annotated snapshot for gallery thumbs instead of the plain thumbnail. Requires <code>snapshots.bounding_box: true</code> in your Frigate camera config.</div>\n            </div>\n            <div class="togrow">\n              <label class="cgc-switch"><input type="checkbox" id="frigate-thumb-bbox" ${this._config.frigate_thumb_bbox?"checked":""}><span class="cgc-track"></span></label>\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="row-head">\n            <div>\n              <div class="lbl">Cluster near-adjacent events</div>\n              <div class="desc">Collapse multiple Frigate events for the same camera + label within a short time window into one representative thumb. Tap the count badge in the gallery to expand the cluster inline.</div>\n            </div>\n            <div class="togrow">\n              <label class="cgc-switch"><input type="checkbox" id="frigate-event-cluster" ${this._config.frigate_event_cluster?"checked":""}><span class="cgc-track"></span></label>\n            </div>\n          </div>\n        </div>\n        ${this._config.frigate_event_cluster?`\n        <div class="row">\n          <div class="lbl">Cluster gap <span style="font-weight:400;color:var(--ed-text2);font-size:0.85em;">(seconds)</span></div>\n          <div class="desc">Events less than this many seconds apart get merged. Start with 30 — increase if you still see duplicate bezorger / cleaner / dog-loose thumbs.</div>\n          <div class="field">\n            <input type="number" class="ed-input" id="frigate-event-cluster-gap-sec" min="1" max="600" step="1" value="${this._config.frigate_event_cluster_gap_sec??30}" />\n          </div>\n        </div>\n        `:""}\n      `,a=n||s,l=!!this._config.frigate_url;return`\n        <div class="tabpanel" data-panel="source">\n          ${G}\n          ${Z("view","View",!0,e,"mdi:image-outline")}\n          ${Z("source","Source",!0,t,"mdi:database-outline")}\n          ${a?Z("frigate","Frigate",l,o,"mdi:link-variant"):""}\n        </div>\n      `},J=(e,t,i)=>`\n      <div class="row">\n        <div class="row-head">\n          <div>\n            <div class="lbl">Show chevrons</div>\n            <div class="desc">${t}</div>\n          </div>\n          <div class="togrow">\n            <label class="cgc-switch"><input type="checkbox" id="${e}" ${i?"checked":""}><span class="cgc-track"></span></label>\n          </div>\n        </div>\n      </div>\n    `,Q=()=>{const t=Array.isArray(this._config.live_cameras)?this._config.live_cameras:[],i=Array.isArray(this._config.live_stream_urls)&&this._config.live_stream_urls.length>0||!!this._config.live_stream_url||t.some(e=>e&&"string"==typeof e.url&&e.url.trim()),n=Gn(this._config),s=Array.isArray(this._config.menu_buttons)&&this._config.menu_buttons.length>0,r=!!this._config.live_ptz_enabled||this._config.live_ptz_cameras&&"object"==typeof this._config.live_ptz_cameras&&Object.keys(this._config.live_ptz_cameras).length>0,o=`\n\n        ${V?`\n          ${B.length>1?`\n          <div class="row">\n            <div class="lbl">Cameras in picker</div>\n            <div class="desc">Cameras in the live-view picker. Drag the <code>⠿</code> handle to reorder, tap a row to expand. Setting a <strong>mic stream</strong> for a camera enables the talk button on that camera's live view (toggle / push-to-talk mode + audio settings live under <strong>Two-way audio</strong> below). The first camera is selected by default unless you set another one below.</div>\n            ${(()=>{const e=Array.isArray(this._config.live_stream_urls)&&this._config.live_stream_urls.length>0?this._config.live_stream_urls.filter(e=>e?.url):this._config.live_stream_url?[{url:this._config.live_stream_url,name:this._config.live_stream_name||"Stream"}]:[];return e.length>0?`\n                <div class="livecam-tags">\n                  ${e.map((t,i)=>`<div class="livecam-tag"><span style="opacity:0.5;font-size:10px;text-transform:uppercase;letter-spacing:0.05em;">stream ${e.length>1?i+1:""}</span><span style="margin-left:4px;">${t.name||"Stream"}</span></div>`).join("")}\n                </div>`:""})()}\n            ${q.length>0?`\n            <div class="livecam-rows" id="livecam-tags-dnd">\n              ${q.map(e=>{const t=String(this._hass?.states?.[e]?.attributes?.friendly_name||e).trim(),i=String(Zn(e,this._config)||"");return`\n                  <div class="livecam-row ${this._livecamRowOpen?.has(e)?"open":""}" data-dragcam="${e}" draggable="true">\n                    <div class="livecam-rowhead" data-livecam-toggle="${e}">\n                      <span class="livecam-rowgrip">⠿</span>\n                      <span class="livecam-rowname">${t}<span class="livecam-rowent">${e}</span></span>\n                      <span class="livecam-rowmic ${i?"":"none"}">${i||"no mic"}</span>\n                      <span class="livecam-chevron">›</span>\n                    </div>\n                    <div class="livecam-rowbody">\n                      <div class="livecam-fieldrow">\n                        <label>Mic stream</label>\n                        <input type="text" class="ed-input livecam-mic-input" data-mic-cam="${e}" value="${i.replace(/"/g,"&quot;")}" placeholder="go2rtc stream (empty = no mic)" autocomplete="off" />\n                      </div>\n                      ${this._renderLivecamCropInline(e)}\n                      <div class="livecam-actions">\n                        <button type="button" class="livecam-row-del" data-delcam="${e}">${Yo("mdi:delete-outline",14)}<span>Remove camera</span></button>\n                      </div>\n                    </div>\n                  </div>\n                `}).join("")}\n            </div>\n            `:""}\n            <div class="field" style="margin-top:6px;">\n              <input type="text" class="ed-input" id="livecam-input" placeholder="Search cameras..." autocomplete="off" />\n              <div class="suggestions" id="livecam-suggestions" hidden></div>\n            </div>\n          </div>\n          `:""}\n\n          ${q.length>1?`\n          <div class="row">\n            <div class="lbl">Live layout</div>\n            <div class="desc"><code>Single</code> shows one camera at a time. <code>Grid</code> tiles all of them — tap a tile to focus.</div>\n            <div class="segwrap">\n              <button class="seg ${"single"===N?"on":""}" data-livelayout="single">Single</button>\n              <button class="seg ${"grid"===N?"on":""}" data-livelayout="grid">Grid</button>\n            </div>\n          </div>\n          `:""}\n\n          <div class="row">\n            <div class="row-head">\n              <div>\n                <div class="lbl">Start muted</div>\n                <div class="desc">Begin live streams muted on tab switch. Users can unmute per camera.</div>\n              </div>\n              <div class="togrow">\n                <label class="cgc-switch"><input type="checkbox" id="live_auto_muted"><span class="cgc-track"></span></label>\n              </div>\n            </div>\n            <div class="row-head">\n              <div>\n                <div class="lbl">Show camera name</div>\n                <div class="desc">Show the camera's name on the live preview — as a pill in single view, and as a label on each tile in grid view.</div>\n              </div>\n              <div class="togrow">\n                <label class="cgc-switch"><input type="checkbox" id="showcameratitle" ${!1!==e.show_camera_title&&!1!==e.live_grid_labels?"checked":""}><span class="cgc-track"></span></label>\n              </div>\n            </div>\n          </div>\n        `:""}\n      `,a=`\n        <div class="row">\n          <div class="desc">Add RTSP / HLS / RTMP stream URLs as extra entries in the picker. Useful for cameras that don't have a Home Assistant entity.</div>\n          <div id="stream-urls-list">\n            ${(()=>(()=>Array.isArray(this._config.live_stream_urls)&&this._config.live_stream_urls.length>0?this._config.live_stream_urls:this._config.live_stream_url?[{url:this._config.live_stream_url,name:this._config.live_stream_name||""}]:[])().map((e,t)=>`\n                <div class="stream-url-row" data-si="${t}" style="display:flex;flex-direction:column;gap:4px;padding:8px 0 8px 0;border-bottom:1px solid var(--divider-color,#e0e0e0);">\n                  <div style="display:flex;gap:6px;align-items:center;">\n                    <input type="text" class="ed-input stream-url-input" data-si="${t}" placeholder="rtsp://192.168.1.x:554/stream" autocomplete="off" value="${(e.url||"").replace(/"/g,"&quot;")}" style="flex:1;" />\n                    <button type="button" class="livecam-tag-del stream-url-del" data-si="${t}" style="flex-shrink:0;">×</button>\n                  </div>\n                  <input type="text" class="ed-input stream-name-input" data-si="${t}" placeholder="Name (e.g. Front door)" autocomplete="off" value="${(e.name||"").replace(/"/g,"&quot;")}" />\n                </div>\n              `).join(""))()}\n          </div>\n          <button type="button" id="stream-url-add" class="cgc-ed-btn" style="margin-top:8px;">+ Add stream URL</button>\n        </div>\n      `,l=`\n        <div class="row">\n          <div class="desc">Global settings for talkback. Per-camera mic streams are configured in the <strong>Cameras</strong> section above — expand a camera and fill in its <em>Mic stream</em> (the go2rtc stream name under <code>streams:</code> in <code>go2rtc.yaml</code>) to enable the talk button on that camera.</div>\n          <div class="desc" style="margin-top:4px;font-size:0.78em;opacity:0.7;">Needs: <a href="https://github.com/AlexxIT/WebRTC" target="_blank" rel="noopener">WebRTC Camera</a> HACS integration · camera with audio backchannel · HTTPS or localhost.</div>\n          ${(()=>{const e=this._hass?.config?.components;return Array.isArray(e)&&e.includes("webrtc")?"":`<div class="cgc-inline-warn">${Yo("mdi:alert-outline",14)}<span>WebRTC Camera integration not detected — install it via HACS for the mic to work.</span></div>`})()}\n          ${(()=>{const e=String(this._config.live_go2rtc_stream??"").trim();return e?`<div class="desc" style="margin-top:8px;">\n              <strong>Legacy single-stream config detected:</strong> <code>live_go2rtc_stream: ${e.replace(/</g,"&lt;")}</code> is set in your YAML. It still works (applies to whichever camera is active) and you don't need to change anything. Setting a per-camera mic stream in the Cameras section above switches to the per-camera map — once you do, the legacy key is ignored.\n            </div>`:""})()}\n        </div>\n        ${Gn(this._config)?`\n        <div class="row">\n          <div class="lbl">Interaction</div>\n          <div class="desc"><code>Toggle</code> latches the mic on/off with one tap. <code>Push-to-talk</code> holds the mic open only while pressed.</div>\n          <div class="segwrap">\n            <button class="seg ${"toggle"===(this._config.live_mic_mode||"toggle")?"on":""}" data-livemicmode="toggle">Toggle</button>\n            <button class="seg ${"ptt"===this._config.live_mic_mode?"on":""}" data-livemicmode="ptt">Push-to-talk</button>\n          </div>\n        </div>\n        <div class="row">\n          <div class="lbl">Audio processing</div>\n          <div class="desc">Browser-level mic processing applied before the audio reaches your camera.</div>\n          ${(()=>{const e=this._config.live_mic_audio_processing||{};return`\n            <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;">\n              <div class="row-inline"><span>Echo cancellation</span><label class="cgc-switch"><input type="checkbox" id="live-mic-ec" ${!1!==e.echo_cancellation?"checked":""}><span class="cgc-track"></span></label></div>\n              <div class="row-inline"><span>Noise suppression</span><label class="cgc-switch"><input type="checkbox" id="live-mic-ns" ${!1!==e.noise_suppression?"checked":""}><span class="cgc-track"></span></label></div>\n              <div class="row-inline"><span>Auto gain control</span><label class="cgc-switch"><input type="checkbox" id="live-mic-agc" ${!1!==e.auto_gain_control?"checked":""}><span class="cgc-track"></span></label></div>\n            </div>`})()}\n        </div>\n        <div class="row">\n          ${(()=>{const e=!1!==this._config.live_mic_waveform_enabled,t=this._config.live_mic_waveform_sensitivity||"medium",i=(e,i)=>`<button class="seg ${t===e?"on":""}" data-wfsens="${e}">${i}</button>`;return`\n            <div class="lbl">Waveform visualizer</div>\n            <div class="desc">Frequency-bars overlay on the talkback bar while the mic is live.</div>\n            <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;">\n              <div class="row-inline">\n                <span>Enabled</span>\n                <label class="cgc-switch"><input type="checkbox" id="live-mic-wf-enabled" ${e?"checked":""}><span class="cgc-track"></span></label>\n              </div>\n              ${e?`\n              <div style="display:flex;flex-direction:column;gap:6px;">\n                <span>Sensitivity</span>\n                <div class="segwrap">\n                  ${i("low","Low")}\n                  ${i("medium","Medium")}\n                  ${i("high","High")}\n                </div>\n              </div>\n              `:""}\n            </div>`})()}\n        </div>\n        `:""}\n      `,c=`\n        <div class="row">\n          <div class="desc">Custom buttons in the live-view hamburger menu — handy for toggling lights, sirens or running scripts without leaving the camera.</div>\n          ${(()=>{const e=Array.isArray(this._config.menu_buttons)?this._config.menu_buttons:[];return e.length?`\n              <div class="menubtn-list">\n                ${e.map((e,t)=>`\n                  <div class="menubtn-card">\n                    <div class="menubtn-card-header">\n                      <span style="flex:1;font-size:0.82em;opacity:0.65;">${(e.title||e.entity||"Button "+(t+1)).replace(/</g,"&lt;")}</span>\n                      <button type="button" class="livecam-tag-del" data-delmenubutton="${t}">×</button>\n                    </div>\n                    <div class="menubtn-fields">\n                      <div style="grid-column:1/-1;">\n                        <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Entity</div>\n                        <div class="field">\n                          <input type="text" class="ed-input" data-menubtn-entity="${t}" placeholder="entity_id" value="${(e.entity||"").replace(/"/g,"&quot;")}" autocomplete="off" />\n                          <div class="suggestions" data-menubtn-entity-sugg="${t}" hidden></div>\n                        </div>\n                      </div>\n                      <div>\n                        <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Icon (off)</div>\n                        <div class="field">\n                          <input type="text" class="ed-input" data-menubtn="${t}" data-mbfield="icon" value="${(e.icon||"").replace(/"/g,"&quot;")}" placeholder="mdi:lightbulb" autocomplete="off" />\n                          <div class="suggestions" data-menubtn-icon-sugg="${t}" hidden></div>\n                        </div>\n                      </div>\n                      <div>\n                        <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Icon (on)</div>\n                        <div class="field">\n                          <input type="text" class="ed-input" data-menubtn="${t}" data-mbfield="icon_on" value="${(e.icon_on||"").replace(/"/g,"&quot;")}" placeholder="mdi:lightbulb" autocomplete="off" />\n                          <div class="suggestions" data-menubtn-iconon-sugg="${t}" hidden></div>\n                        </div>\n                      </div>\n                      <div>\n                        <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Label</div>\n                        <div class="field"><input type="text" class="ed-input" data-menubtn="${t}" data-mbfield="title" value="${(e.title||"").replace(/"/g,"&quot;")}" placeholder="optional" /></div>\n                      </div>\n                      <div>\n                        <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Service</div>\n                        <div class="field"><input type="text" class="ed-input" data-menubtn="${t}" data-mbfield="service" value="${(e.service||"").replace(/"/g,"&quot;")}" placeholder="e.g. light.toggle" /></div>\n                      </div>\n                      <div>\n                        <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">State (on)</div>\n                        <div class="field"><input type="text" class="ed-input" data-menubtn="${t}" data-mbfield="state_on" value="${(e.state_on||"").replace(/"/g,"&quot;")}" placeholder="e.g. open" /></div>\n                      </div>\n                    </div>\n                  </div>\n                `).join("")}\n              </div>\n            `:""})()}\n          <div style="margin-top:8px;border:1px solid var(--ed-input-border);border-radius:var(--ed-radius-input,8px);padding:8px 10px;">\n            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">\n              <div style="grid-column:1/-1;">\n                <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Entity</div>\n                <div class="field">\n                  <input type="text" class="ed-input" id="menubtn-entity-input" placeholder="Search entity..." autocomplete="off" />\n                  <div class="suggestions" id="menubtn-entity-sugg" hidden></div>\n                </div>\n              </div>\n              <div>\n                <div style="font-size:0.75em;opacity:0.6;margin-bottom:2px;">Icon (off)</div>\n                <div class="field">\n                  <input type="text" class="ed-input" id="menubtn-icon-input" placeholder="mdi:lightbulb" autocomplete="off" />\n                  <div class="suggestions" id="menubtn-icon-sugg" hidden></div>\n                </div>\n              </div>\n              <div style="display:flex;align-items:flex-end;">\n                <button type="button" id="menubtn-add-btn" class="actionbtn" style="width:100%;justify-content:center;">+ Add</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      `,d=`\n        <div class="row-inline" style="margin-top:6px;">\n          <span>Enable PTZ overlay</span>\n          <label class="cgc-switch"><input type="checkbox" id="live_ptz_enabled" ${this._config.live_ptz_enabled?"checked":""}><span class="cgc-track"></span></label>\n        </div>\n        <div class="desc" style="margin-top:6px;">Virtual joystick + zoom controls. Integration type is auto-detected per camera.</div>\n        ${this._config.live_ptz_enabled?`\n        <div style="margin-top:10px;">\n          <div style="font-size:0.78em;opacity:0.75;margin-bottom:6px;">Position</div>\n          ${(()=>{const e="overlay"===(this._config.controls_mode||"overlay"),t=String(this._config.bar_position||"top"),i=e?"top"===t?"top":"bottom"===t?"bottom":null:null,n=this._config.live_ptz_position||"bottom-left";return`<select class="ed-input" id="live_ptz_position" style="width:100%;box-sizing:border-box;height:36px;min-height:36px;flex:none;">\n              ${[{val:"top-left",label:"Top-left"},{val:"top-right",label:"Top-right"},{val:"bottom-left",label:"Bottom-left"},{val:"bottom-right",label:"Bottom-right"}].map(e=>{const t=!(!i||!e.val.startsWith(i));return`<option value="${e.val}" ${t?"disabled":""} ${e.val===n?"selected":""}>${e.label}${t?" (blocked by pill bar)":""}</option>`}).join("")}\n            </select>`})()}\n        </div>\n\n        ${(()=>{const e=this._config.live_ptz_cameras&&"object"==typeof this._config.live_ptz_cameras?this._config.live_ptz_cameras:{};if(0===q.length)return'<div class="desc" style="margin-top:10px;font-style:italic;opacity:0.7;">Add at least one camera entity in Basics to configure PTZ.</div>';const t=this._hass?{states:this._hass.states,services:this._hass.services}:null,i=q.filter(i=>e[i]||t&&So(i,t)),n=this._ptzShowAll?q:i,s=`\n            <div style="display:flex;align-items:center;gap:8px;margin-top:10px;font-size:0.78em;opacity:0.75;">\n              <label class="cgc-switch" style="transform:scale(0.85);transform-origin:left center;"><input type="checkbox" id="ptz-show-all" ${this._ptzShowAll?"checked":""}><span class="cgc-track"></span></label>\n              <span>Show all cameras (manual selection for ONVIF / non-detected setups)</span>\n            </div>\n          `,r=this._hass?.states?Object.keys(this._hass.states):[],o=r.filter(e=>/^button\..*_ptz_/.test(e)).sort(),a=r.filter(e=>/^select\..*_ptz_preset$/.test(e)).sort(),l=`<datalist id="ptz-button-list">${o.map(e=>`<option value="${e.replace(/"/g,"&quot;")}"></option>`).join("")}</datalist><datalist id="ptz-select-list">${a.map(e=>`<option value="${e.replace(/"/g,"&quot;")}"></option>`).join("")}</datalist>`;return 0===n.length?`<div class="desc" style="margin-top:10px;font-style:italic;opacity:0.7;">No PTZ-capable cameras detected. Add a camera that exposes PTZ button entities (EZVIZ, Reolink) or that supports frigate.ptz, and it'll show up here. Or flip the toggle below to pick a type manually.</div>${s}`:l+`<div style="display:flex;flex-direction:column;gap:10px;margin-top:10px;">\n            ${n.map(t=>{const i=String(this._hass?.states?.[t]?.attributes?.friendly_name||t).trim(),n=e[t],s=!!n;return`\n                <div style="border:1px solid var(--ed-input-border);border-radius:var(--ed-radius-input,8px);padding:8px 10px;">\n                  <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">\n                    <div style="min-width:0;flex:1;">\n                      <div style="font-weight:500;">${i.replace(/</g,"&lt;")}</div>\n                      <div style="font-size:0.72em;opacity:0.6;">${t.replace(/</g,"&lt;")}</div>\n                    </div>\n                    <label class="cgc-switch"><input type="checkbox" class="ptz-cam-enable" data-ptz-cam="${t.replace(/"/g,"&quot;")}" ${s?"checked":""}><span class="cgc-track"></span></label>\n                  </div>\n                  ${s?`\n                  <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">\n                    <select class="ed-input ptz-cam-type" data-ptz-cam="${t.replace(/"/g,"&quot;")}" style="width:100%;box-sizing:border-box;height:36px;min-height:36px;flex:none;">\n                      <option value="ezviz" ${"ezviz"===(n.type||"ezviz")?"selected":""}>EZVIZ — pulse</option>\n                      <option value="reolink" ${"reolink"===n.type?"selected":""}>Reolink — continuous</option>\n                      <option value="frigate" ${"frigate"===n.type?"selected":""}>Frigate — continuous</option>\n                      <option value="onvif" ${"onvif"===n.type?"selected":""}>ONVIF — continuous</option>\n                    </select>\n                    ${"ezviz"===(n.type||"ezviz")||"reolink"===n.type?`\n                    <button type="button" class="actionbtn ptz-detect-btn" data-ptz-cam="${t.replace(/"/g,"&quot;")}" style="align-self:flex-start;margin-top:2px;">Detect buttons</button>\n                    ${[["up","Up","mdi:arrow-up"],["down","Down","mdi:arrow-down"],["left","Left","mdi:arrow-left"],["right","Right","mdi:arrow-right"],["zoom_in","Zoom in","mdi:magnify-plus-outline"],["zoom_out","Zoom out","mdi:magnify-minus-outline"],["stop","Stop","mdi:stop"],["home","Home","mdi:home-outline"]].map(([e,i,s])=>{const r=n.buttons&&"object"==typeof n.buttons&&"string"==typeof n.buttons[e]?n.buttons[e]:"",o="home"===e?"ptz-select-list":"ptz-button-list";return`<div style="display:flex;align-items:center;gap:8px;" title="${i}">\n                        <ha-icon icon="${s}" aria-label="${i}" style="--mdc-icon-size:18px;width:18px;height:18px;flex:none;opacity:0.7;"></ha-icon>\n                        <input type="text" class="ed-input ptz-cam-button" data-ptz-cam="${t.replace(/"/g,"&quot;")}" data-ptz-key="${e}" list="${o}" value="${r.replace(/"/g,"&quot;")}" placeholder="auto" autocomplete="off" spellcheck="false" style="flex:1;min-width:0;font-size:0.82em;" />\n                      </div>`}).join("")}\n                    <div class="desc" style="margin-top:2px;">Leave blank to auto-detect. Pick from the list — only PTZ buttons are suggested (Home picks a <code>select…_ptz_preset</code>).</div>\n                    `:'<div class="desc" style="margin-top:2px;">Service-based type — no buttons needed.</div>'}\n                  </div>\n                  `:""}\n                </div>\n              `}).join("")}\n          </div>${s}`})()}\n        `:""}\n      `,h=`\n        <div class="v2-tab-header">\n          <div class="v2-tab-header-toggle">\n            <span class="v2-tab-header-label">Enable live view</span>\n            <label class="cgc-switch"><input type="checkbox" id="liveenabled" ${V?"checked":""}><span class="cgc-track"></span></label>\n          </div>\n          <button type="button" class="v2-expand-all" data-v2-expand>Expand all</button>\n        </div>\n      `;if(!V)return`\n          <div class="tabpanel" data-panel="live">\n            ${h}\n          </div>\n        `;const p=this._config.live_pills&&"object"==typeof this._config.live_pills?this._config.live_pills:{},u=Object.keys(p).length>0,m=oo(so,p),g=[...so].map(e=>({entry:e,s:m.get(e.id)})).sort((e,t)=>e.s.enabled!==t.s.enabled?e.s.enabled?-1:1:e.s.order-t.s.order||so.indexOf(e.entry)-so.indexOf(t.entry)),f=`\n        ${J("livechevrons","Left/right arrows over the live view to flip between cameras. Auto-hidden if only one camera is configured.",!1!==e.live_chevrons_enabled)}\n        <div class="row">\n          <div class="desc">Camera name sits on the left, action pills on the right — layout is fixed. Drag <code>⠿</code> to reorder the action pills, switch one off to hide it.</div>\n        </div>\n        <div class="pills-dnd-list" id="live-pills-dnd-list">\n          ${g.map(e=>{const t=e.entry,i=e.s.enabled,n=String(t.id).replace(/"/g,"&quot;"),s=String(t.label).replace(/</g,"&lt;");return`\n                <div class="row pill-dnd-row ${i?"":"pill-dnd-disabled"}" data-live-pill-row="${n}" draggable="true">\n                  <div class="pill-dnd-line">\n                    <span class="pill-drag-grip" title="Drag to reorder" aria-label="Drag to reorder">⠿</span>\n                    <span class="pill-dnd-icon" aria-hidden="true">${t.previewText?`<span class="pill-dnd-preview-text">${String(t.previewText).replace(/</g,"&lt;")}</span>`:t.icon?`<ha-icon icon="${t.icon}" style="--mdc-icon-size:18px;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;"></ha-icon>`:""}</span>\n                    <div class="lbl pill-dnd-label">${s}</div>\n                    <label class="cgc-switch"><input type="checkbox" id="live-pill-enable-${n}" ${i?"checked":""}><span class="cgc-track"></span></label>\n                  </div>\n                </div>\n              `}).join("")}\n        </div>\n      `;return`\n        <div class="tabpanel" data-panel="live">\n          ${h}\n          ${Z("basics","Basics",!0,o,"mdi:tune")}\n          ${Z("streams","Streams",i,a,"mdi:link-variant")}\n          ${Z("twoway","Two-way audio",n,l,"mdi:microphone-outline")}\n          ${Z("ptz","PTZ",r,d,"mdi:arrow-all")}\n          ${Z("menu","Menu buttons",s,c,"mdi:dots-horizontal")}\n          ${Z("controls","Controls",u,f,"mdi:tune-vertical")}\n        </div>\n      `},ee=()=>{const t=Array.isArray(e.object_filters)&&e.object_filters.length>0,i=!!j,n=i?"Hidden while preview-only mode is on.":"",s=e.toolbar_order&&"object"==typeof e.toolbar_order?e.toolbar_order:{},r=[...ro].map(t=>({entry:t,enabled:!1!==e[t.showKey],order:"number"==typeof s[t.id]?s[t.id]:t.defaultOrder})).sort((e,t)=>e.enabled!==t.enabled?e.enabled?-1:1:e.order-t.order||ro.findIndex(t=>t.id===e.entry.id)-ro.findIndex(e=>e.id===t.entry.id)),o=`\n        <div class="row">\n          <div class="desc">Show or hide individual buttons in the gallery's top toolbar. Drag <code>⠿</code> to reorder. The date picker is always visible and sits at the start.</div>\n        </div>\n        <div class="pills-dnd-list" id="toolbar-dnd-list">\n          ${r.map(e=>{const t=e.entry,i=e.enabled,n=String(t.id).replace(/"/g,"&quot;");return`\n                <div class="row pill-dnd-row ${i?"":"pill-dnd-disabled"}" data-toolbar-row="${n}" draggable="true">\n                  <div class="pill-dnd-line">\n                    <span class="pill-drag-grip" title="Drag to reorder" aria-label="Drag to reorder">⠿</span>\n                    <div class="lbl pill-dnd-label">${String(t.label).replace(/</g,"&lt;")}</div>\n                    <label class="cgc-switch"><input type="checkbox" id="toolbar-enable-${n}" ${i?"checked":""}><span class="cgc-track"></span></label>\n                  </div>\n                </div>\n              `}).join("")}\n        </div>\n      `,a=`\n        <div class="row">\n          <div class="lbl">Object filters</div>\n          <div class="desc">Filter clips by what was detected in them. Tap a chip to enable; click the color box to set its colour.</div>\n          <div class="objmeta">\n            <div class="countpill">Selected ${f}/9</div>\n          </div>\n\n          <div class="chip-grid">\n            ${fi.map(e=>{const t=g.includes(e),i=v[e]||"",n=i&&/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(i)?i:"#ffffff";return`\n                <button\n                  type="button"\n                  class="objchip ${t?"on":""}"\n                  data-objchip="${e}"\n                  title="${this._objectLabel(e)}"\n                >\n                  <span class="objchip-icon" ${i?`style="color:${i}"`:""}>\n                    ${Yo(jn(e),18)}\n                  </span>\n                  <span class="objchip-color">\n                    <input type="color" class="cgc-color" value="${n}" style="${i?"":"opacity:0.35"}" data-filtercolor="${e}">\n                  </span>\n                  <input type="checkbox" class="objchip-native-check" ${t?"checked":""} tabindex="-1" aria-hidden="true" style="pointer-events:none;">\n                </button>\n              `}).join("")}\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="lbl">Custom filters</div>\n          <div class="desc">Add your own filter buttons (e.g. <code>parcel</code>, <code>mail-truck</code>). They match against detection labels found in clip filenames or sensor text.</div>\n\n          <div class="custom-filter-add">\n            <input type="text" class="ed-input" id="new-filter-name" placeholder="e.g. parcel" />\n            <input type="text" class="ed-input" id="new-filter-icon" placeholder="mdi:shape" />\n            <button class="actionbtn" id="add-filter-btn">\n              ${Yo("mdi:plus",18)}\n              Add filter\n            </button>\n          </div>\n\n          <div class="custom-filter-list">\n            ${g.filter(e=>"object"==typeof e).map(e=>{const t=Object.keys(e)[0],i=e[t],n=v[t]||"",s=n&&/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(n)?n:"#ffffff";return`\n                <div class="custom-item">\n                  <div class="custom-item-info">\n                    <ha-icon icon="${i}" style="${n?"color:"+n:""}"></ha-icon>\n                    <span class="lbl">${this._objectLabel(t)}</span>\n                  </div>\n                  <div class="color-controls">\n                    <input type="color" class="cgc-color" value="${s}" style="${n?"":"opacity:0.35"}" data-filtercolor="${t}">\n                    <button class="remove-btn" data-remove-index="${t}">\n                      ${Yo("mdi:delete-outline",18)}\n                    </button>\n                  </div>\n                </div>\n              `}).join("")}\n          </div>\n        </div>\n      `,l=`\n        <div class="row">\n          <div class="lbl">Layout</div>\n          <div class="desc">Horizontal arranged the thumbnails horizontally; Vertical... well...</div>\n          <div class="segwrap">\n            <button class="seg ${"horizontal"===k?"on":""}" data-tlayout="horizontal">Horizontal</button>\n            <button class="seg ${"vertical"===k?"on":""}" data-tlayout="vertical">Vertical</button>\n          </div>\n        </div>\n\n        <div class="row ${$?"muted":""}">\n          <div class="lbl">Size</div>\n          <div class="desc">Size of each thumbnail, in pixels.</div>\n          <div class="ed-input-row"><input type="number" class="ed-input" id="thumb" /><span class="ed-suffix">px</span></div>\n        </div>\n\n        <div class="row">\n          <div class="lbl">Maximum thumbnails</div>\n          <div class="desc">How many clips load into the thumbnail strip. Higher = more scrolling, slower first paint.</div>\n          <div class="ed-input-row"><input type="number" class="ed-input" id="maxmedia" /><span class="ed-suffix">items</span></div>\n        </div>\n\n        <div class="row">\n          <div class="lbl">Thumbnail bar position</div>\n          <div class="segwrap">\n            <button class="seg ${"top"===x?"on":""}" data-tbpos="top">Top</button>\n            <button class="seg ${"bottom"===x?"on":""}" data-tbpos="bottom">Bottom</button>\n            <button class="seg ${"hidden"===x?"on":""}" data-tbpos="hidden">Hidden</button>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="lbl">Sort order</div>\n          <div class="desc">Order clips in the thumbnail strip.</div>\n          <div class="segwrap">\n            <button class="seg ${"newest"===S?"on":""}" data-tsort="newest">Newest first</button>\n            <button class="seg ${"oldest"===S?"on":""}" data-tsort="oldest">Oldest first</button>\n          </div>\n        </div>\n      `,c=`\n        <div class="row">\n          <div class="lbl">Video thumbnail frame</div>\n          <div class="desc">% of the video to capture as thumbnail (0 = first frame, 100 = last)</div>\n          <div class="barrow">\n            <div class="barrow-top">\n              <div class="pillval" id="thumbpctval">${F}%</div>\n            </div>\n            <input type="range" class="cgc-range" id="thumbpct" min="0" max="100" step="1">\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="row-head">\n            <div>\n              <div class="lbl">Capture video thumbnails</div>\n              <div class="desc">Extract a frame from each video when no server thumbnail is available. Off saves bandwidth on slow connections.</div>\n            </div>\n            <div class="togrow">\n              <label class="cgc-switch"><input type="checkbox" id="capture-video-thumbnails" ${!1!==e.capture_video_thumbnails?"checked":""}><span class="cgc-track"></span></label>\n            </div>\n          </div>\n        </div>\n      `;return`\n        <div class="tabpanel" data-panel="thumbs">\n          ${G}\n          ${Z("thumb-layout","Layout",!0,l,"mdi:view-grid-outline")}\n          ${Z("toolbar","Toolbar",!1,o,"mdi:tune",{muted:i,mutedHint:n})}\n          ${Z("filters","Filters",t&&!i,a,"mdi:filter-outline",{muted:i,mutedHint:n})}\n          ${Z("video-frame","Video frame",!1,c,"mdi:play-circle-outline")}\n        </div>\n      `},te=()=>{const t=`\n        <div class="row">\n          <div class="desc">\n            ${Yo("mdi:information-outline",14)}\n            Pattern matched against your file paths. The detector covers both video and image files — extension is optional. Tokens: <code>YYYY</code> <code>MM</code> <code>DD</code> <code>HH</code> <code>mm</code> <code>ss</code>.\n          </div>\n          <div style="padding-top:8px;">\n            <input type="text" class="ed-input" id="pathfmt" placeholder="e.g. YYYY/MM/DD/HHmmss" />\n            <div class="row-actions" style="margin-top:8px;">\n              <button type="button" class="actionbtn" id="detect-pathfmt" title="Probe configured sources and suggest a format" ?disabled=${this._detectInFlight}>\n                ${Yo("mdi:magnify-scan",18)}<span>${this._detectInFlight?"Detecting…":"Auto-detect format"}</span>\n              </button>\n            </div>\n            <div id="detect-pathfmt-status" class="hint">${this._renderDetectStatusText()}</div>\n            ${this._renderDetectScoreboard()}\n          </div>\n        </div>\n      `,i=`\n        <div class="row">\n          <div class="desc">Home Assistant service calls invoked when a clip is deleted. Required if you want the trash button to actually remove files.</div>\n        </div>\n        <div class="row ${n?"row-disabled":""}">\n          <div class="lbl">File sensor <span style="font-weight:400;color:var(--ed-text2);font-size:0.85em;">— used in file-sensor / combined mode</span></div>\n          <div class="selectwrap" style="margin-top:4px;">\n            <select class="select ${P?"":"invalid"}" id="delservice" ${n?"disabled":""}>\n              ${T.length?'<option value=""></option>'+T.map(e=>`<option value="${e}" ${e===M?"selected":""}>${e}</option>`).join(""):'<option value="" selected>(no shell_command services found)</option>'}\n            </select>\n            <span class="selarrow"></span>\n          </div>\n        </div>\n        ${ns(e)?`\n        <div class="row">\n          <div class="lbl">Frigate <span style="font-weight:400;color:var(--ed-text2);font-size:0.85em;">— used for Frigate clips</span></div>\n          <div class="selectwrap" style="margin-top:4px;">\n            <select class="select ${E?"":"invalid"}" id="frigate-delservice">\n              ${I.length?'<option value="">(none — Frigate delete disabled)</option>'+I.map(e=>`<option value="${e}" ${e===z?"selected":""}>${e}</option>`).join(""):'<option value="" selected>(no rest_command services found — add one to configuration.yaml)</option>'}\n            </select>\n            <span class="selarrow"></span>\n          </div>\n        </div>\n        `:""}\n      `,s=`\n        <div class="row">\n          <div class="row-head">\n            <div>\n              <div class="lbl">Debug mode</div>\n              <div class="desc">Adds a small Debug badge on the live view; tapping it opens a diagnostics report (card version, HA info, runtime state). Handy when reporting bugs.</div>\n            </div>\n            <div class="togrow">\n              <label class="cgc-switch"><input type="checkbox" id="debug-enabled" ${this._config?.debug_enabled?"checked":""}><span class="cgc-track"></span></label>\n            </div>\n          </div>\n        </div>\n      `,r=`\n        <div class="row">\n          <div class="lbl">Copy YAML</div>\n          <div class="desc">Copy the card's current YAML config to the clipboard. Useful for sharing your setup, backing up, or moving the card between dashboards.</div>\n          <div class="row-actions">\n            <button type="button" class="actionbtn" id="yaml-export-btn">\n              ${Yo("mdi:content-copy",18)}<span>Copy YAML</span>\n            </button>\n          </div>\n        </div>\n      `,o=!(!this._config||!this._config.path_datetime_format);return`\n        <div class="tabpanel" data-panel="advanced">\n          ${G}\n          ${Z("parsing","Path parsing",o,t,"mdi:calendar-outline")}\n          ${Z("delete","Delete services",!1,i,"mdi:delete-outline")}\n          ${Z("diagnostics","Diagnostics",!1,s,"mdi:information-outline")}\n          ${Z("export","Export YAML",!1,r,"mdi:content-copy")}\n        </div>\n      `},ie=()=>{const t=this._activeTab;return"source"===t?X():"gallery"===t?(()=>{const t=`\n        <div class="row">\n          <div class="lbl">Image fit</div>\n          <div class="desc"><code>Cover</code> fills the preview and may crop edges; <code>Contain</code> shows the whole frame with letterbox bars.</div>\n          <div class="segwrap">\n            <button class="seg ${"cover"===w?"on":""}" data-objfit="cover">Cover</button>\n            <button class="seg ${"contain"===w?"on":""}" data-objfit="contain">Contain</button>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="lbl">Preview position</div>\n          <div class="desc">Where the preview pane sits relative to the thumbnail strip.</div>\n          <div class="segwrap">\n            <button class="seg ${"top"===y?"on":""}" data-ppos="top">Top</button>\n            <button class="seg ${"bottom"===y?"on":""}" data-ppos="bottom">Bottom</button>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="row-head">\n            <div>\n              <div class="lbl">Preview-only mode</div>\n              <div class="desc">Only shows the preview window — toolbar, thumbnails and filters are hidden until the user taps back into the gallery.</div>\n            </div>\n            <div class="togrow">\n              <label class="cgc-switch"><input type="checkbox" id="cleanmode" ${j?"checked":""}><span class="cgc-track"></span></label>\n            </div>\n          </div>\n        </div>\n      `,i=e.gallery_pills&&"object"==typeof e.gallery_pills?e.gallery_pills:{},n=Object.keys(i).length>0,s=oo(no,i),r=[...no].map(e=>({entry:e,s:s.get(e.id)})).sort((e,t)=>e.s.enabled!==t.s.enabled?e.s.enabled?-1:1:e.s.order-t.s.order||no.indexOf(e.entry)-no.indexOf(t.entry)),o=e.controls_mode??"overlay",a=e.bar_position??"top",l=e.gallery_pills_align||"center",c="fixed"===o||"hidden"===a,d="hidden"===a?" <em>No effect</em> — the pill row is hidden.":"fixed"===o?" <em>Ignored in fixed mode</em> — pills always fill the bar.":"",h=`\n        ${J("gallerychevrons","Left/right arrows over the preview to walk through the filtered clip list. Auto-hidden when there's only one clip.",!1!==e.gallery_chevrons_enabled)}\n        <div class="row">\n          <div class="lbl">Mode</div>\n          <div class="desc"><code>Overlay</code> floats pills over the preview; <code>Fixed</code> reserves a strip and stretches them across.</div>\n          <div class="segwrap" style="margin-top:6px;">\n            <button class="seg ${"overlay"===o?"on":""}" data-ctrlmode="overlay">Overlay</button>\n            <button class="seg ${"fixed"===o?"on":""}" data-ctrlmode="fixed">Fixed</button>\n          </div>\n        </div>\n        <div class="row">\n          <div class="lbl">Position</div>\n          <div class="desc">Where the pill row sits relative to the preview. Pick <code>Hidden</code> to drop it entirely.</div>\n          <div class="segwrap" style="margin-top:6px;">\n            <button class="seg ${"top"===a?"on":""}" data-pillsbarpos="top">Top</button>\n            <button class="seg ${"bottom"===a?"on":""}" data-pillsbarpos="bottom">Bottom</button>\n            <button class="seg ${"hidden"===a?"on":""}" data-pillsbarpos="hidden">Hidden</button>\n          </div>\n        </div>\n        <div class="row ${c?"muted":""}">\n          <div class="lbl">Alignment</div>\n          <div class="desc">Where the row of pills sits within the bar.${d}</div>\n          <div class="segwrap" style="margin-top:6px;">\n            <button class="seg ${"left"===l?"on":""}" data-pillsalign="left" ${c?"disabled":""}>Left</button>\n            <button class="seg ${"center"===l?"on":""}" data-pillsalign="center" ${c?"disabled":""}>Center</button>\n            <button class="seg ${"right"===l?"on":""}" data-pillsalign="right" ${c?"disabled":""}>Right</button>\n          </div>\n        </div>\n        <div class="row ${"fixed"===e.controls_mode?"muted":""}">\n          <div class="row-head">\n            <div>\n              <div class="lbl">Persistent controls</div>\n              <div class="desc">Keep the pill row on screen all the time instead of auto-hiding after a few seconds.${"fixed"===e.controls_mode?" <em>Ignored in fixed mode</em> — the bar is always visible.":""}</div>\n            </div>\n            <div class="togrow">\n              <label class="cgc-switch"><input type="checkbox" id="persistentcontrols" ${O?"checked":""} ${"fixed"===e.controls_mode?"disabled":""}><span class="cgc-track"></span></label>\n            </div>\n          </div>\n        </div>\n        <div class="pills-dnd-list" id="pills-dnd-list">\n          ${r.map(e=>{const t=e.entry,i=e.s.enabled,n=String(t.id).replace(/"/g,"&quot;"),s=String(t.label).replace(/</g,"&lt;");return`\n                <div class="row pill-dnd-row ${i?"":"pill-dnd-disabled"}" data-pill-row="${n}" draggable="true">\n                  <div class="pill-dnd-line">\n                    <span class="pill-drag-grip" title="Drag to reorder" aria-label="Drag to reorder">⠿</span>\n                    <span class="pill-dnd-icon" aria-hidden="true">${t.previewText?`<span class="pill-dnd-preview-text">${String(t.previewText).replace(/</g,"&lt;")}</span>`:t.icon?`<ha-icon icon="${t.icon}" style="--mdc-icon-size:18px;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;"></ha-icon>`:""}</span>\n                    <div class="lbl pill-dnd-label">${s}</div>\n                    <label class="cgc-switch"><input type="checkbox" id="pill-enable-${n}" ${i?"checked":""}><span class="cgc-track"></span></label>\n                  </div>\n                </div>\n              `}).join("")}\n        </div>\n      `;return`\n        <div class="tabpanel" data-panel="gallery">\n          ${G}\n          ${Z("display","Display",!0,t,"mdi:image-outline")}\n          ${Z("playback","Playback",!1,'\n        <div class="row">\n          <div class="subrows">\n            <div class="row-head">\n              <div>\n                <div class="lbl">Autoplay</div>\n                <div class="desc">Start playing a clip as soon as it\'s opened in the preview.</div>\n              </div>\n              <div class="togrow">\n                <label class="cgc-switch"><input type="checkbox" id="autoplay"><span class="cgc-track"></span></label>\n              </div>\n            </div>\n\n            <div class="row-head">\n              <div>\n                <div class="lbl">Start muted</div>\n                <div class="desc">Begin clips muted. Users can unmute via the player controls.</div>\n              </div>\n              <div class="togrow">\n                <label class="cgc-switch"><input type="checkbox" id="auto_muted"><span class="cgc-track"></span></label>\n              </div>\n            </div>\n          </div>\n        </div>\n      ',"mdi:play-circle-outline")}\n          ${Z("controls","Controls",n,h,"mdi:tune-vertical")}\n        </div>\n      `})():"live"===t?Q():"thumbs"===t?ee():"styling"===t?K().replace('<div class="tabpanel" data-panel="styling">',`<div class="tabpanel" data-panel="styling">${G}`):"advanced"===t?te():`<div class="tabpanel" data-panel="${t}"></div>`},ne=()=>ie();if(this._editorRendered){const e=ne(),t=this.shadowRoot.querySelector(".wrap");t&&t.setAttribute("style",Y),this.shadowRoot.querySelectorAll("[data-tab]").forEach(e=>{e.classList.toggle("on",e.dataset.tab===this._activeTab)});const i=this.shadowRoot.querySelector(".tabpanel"),n=document.createElement("div");n.innerHTML=e;const s=n.firstElementChild;i&&s&&i.querySelectorAll("details[data-v2-section]").forEach(e=>{const t=e.getAttribute("data-v2-section"),i=s.querySelector(`details[data-v2-section="${t}"]`);i&&(e.hasAttribute("open")?i.setAttribute("open",""):i.removeAttribute("open"))}),i&&s?i.replaceWith(s):!i&&s&&this.shadowRoot.querySelector(".tabbar")?.insertAdjacentElement("afterend",s);const r=this.shadowRoot.getElementById("cgc-browser-slot");r&&(r.innerHTML=W)}else this.shadowRoot.innerHTML=`\n      <style>\n        /* Inter webfont (v2-only). @import must be first; falls back to\n           system stack when the user is offline. ~30KB, cached after\n           first load. */\n        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n\n        :host {\n          display: block;\n          padding: 8px 0;\n          color: var(--ed-text);\n          box-sizing: border-box;\n          min-width: 0;\n          scrollbar-width: none;\n          /* Reserve scrollbar gutter so tab-switches between short/long\n             tabs don't shift the content sideways when Chrome's overlay\n             scrollbar appears. No-op when there's no overflow. */\n          scrollbar-gutter: stable;\n        }\n        :host::-webkit-scrollbar { display: none; }\n\n        .wrap {\n          display: grid;\n          gap: var(--ed-space-3);\n          min-width: 0;\n        }\n\n        /* v2 uses Inter; v1 inherits HA's Roboto. Stack falls back to\n           the OS UI font if Inter didn't load (offline install). */\n        .wrap.v2,\n        .wrap.v2 input,\n        .wrap.v2 textarea,\n        .wrap.v2 select,\n        .wrap.v2 button {\n          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        }\n\n        /* v2 wrap owns the scrolling: max-height keeps the editor\n           within viewport so the outer Lovelace dialog doesn't need\n           its own scrollbar, and scrollbar-width:none + ::-webkit-\n           scrollbar:display:none hide ours. Outcome: scrollable\n           content, no visible scrollbar, no layout shift on tab\n           switches. v1 keeps its original behavior. */\n        .wrap.v2 {\n          max-height: calc(100vh - 120px);\n          overflow-y: auto;\n          overflow-x: hidden;\n          scrollbar-width: none;\n        }\n        .wrap.v2::-webkit-scrollbar { display: none; }\n\n        /* Keeps short tabs (Source) from snapping to a tiny height\n           when wrap is scrollable — the panel stays a comfortable\n           size instead of hugging its content. */\n        .wrap.v2 .tabpanel {\n          min-height: 70vh;\n        }\n\n        .desc,\n        code {\n          overflow-wrap: anywhere;\n          word-break: break-word;\n        }\n\n        .tabs {\n          display: grid;\n          gap: var(--ed-space-3);\n        }\n\n        .tabbar {\n          display: grid;\n          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n          gap: 10px;\n          padding: 10px;\n          border-radius: var(--ed-radius-panel);\n          background: var(--ed-section-bg);\n          border: 1px solid var(--ed-section-border);\n          box-shadow: var(--ed-section-glow);\n        }\n\n        .tabbtn {\n          appearance: none;\n          -webkit-appearance: none;\n          border: 1px solid var(--ed-tab-border);\n          background: var(--ed-tab-bg);\n          color: var(--ed-tab-txt);\n          border-radius: 14px;\n          min-height: 46px;\n          padding: 10px 14px;\n          cursor: pointer;\n          font-size: 13px;\n          font-weight: 900;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          gap: 8px;\n          text-align: center;\n          transition:\n            background 0.18s ease,\n            border-color 0.18s ease,\n            color 0.18s ease,\n            transform 0.18s ease,\n            box-shadow 0.18s ease;\n          min-width: 0;\n          box-shadow: var(--ed-section-glow);\n        }\n\n        .tabbtn:hover {\n          border-color: var(--ed-tab-border);\n        }\n\n        .tabbtn .cgc-svg-icon {\n          flex: 0 0 auto;\n        }\n\n        .tabbtn.on {\n          background: var(--ed-tab-on-bg);\n          border-color: var(--ed-tab-on-border);\n          color: var(--ed-tab-on-txt);\n          box-shadow: var(--ed-shadow-press);\n        }\n\n        /* v2 tabs left-align icon + label. v1 keeps center-alignment. */\n        .wrap.v2 .tabbtn {\n          justify-content: flex-start;\n          text-align: left;\n          padding-left: 16px;\n          font-weight: 500;\n        }\n        .wrap.v2 .tabbtn.on {\n          font-weight: 600;\n        }\n\n        /* v2 typography: dial back the heavy bold weight on labels so\n           only structural headings (tabs + collapsible heads) read as\n           bold. v1 keeps its original weights. */\n        .wrap.v2 .lbl {\n          font-weight: 500;\n        }\n        .wrap.v2 .lbl strong {\n          font-weight: 700;\n        }\n        .wrap.v2 .seg {\n          font-weight: 500;\n        }\n        .wrap.v2 .seg.on {\n          font-weight: 600;\n        }\n        /* All buttons in v2 default to weight 500. Active states\n           (.tabbtn.on, .seg.on) keep their own 600 override. */\n        .wrap.v2 button {\n          font-weight: 500;\n        }\n\n        /* Object-filter chip icons: bump from 18px to 22px so the\n           busier MDI paths (bird, dog, bicycle) stay legible. */\n        .wrap.v2 .objchip-icon .cgc-svg-icon {\n          width: 22px;\n          height: 22px;\n        }\n\n        /* Styling tab wraps its collapsibles in an extra .style-sections\n           div with gap: 8px, while the other v2 tabs use .tabpanel's\n           gap: 14px directly. Match here so spacing is consistent. */\n        .wrap.v2 .style-sections {\n          gap: 14px;\n        }\n\n        /* v2 rows: drop the per-row card (border + background + chunky\n           padding) — collapsible already provides the container. Use a\n           single hairline divider between rows instead. */\n        .wrap.v2 .row {\n          background: transparent;\n          border: none;\n          border-radius: 0;\n          padding: 12px 2px;\n          border-bottom: 1px solid var(--ed-row-border);\n        }\n        .wrap.v2 .row:last-child {\n          border-bottom: none;\n        }\n        .wrap.v2 .row:hover {\n          background: transparent;\n          border-color: transparent;\n          border-bottom-color: var(--ed-row-border);\n        }\n        /* Right-aligned "Expand all / Collapse all" toggle at the top\n           of v2 tabpanels that contain multiple collapsibles. */\n        .wrap.v2 .v2-expand-row {\n          display: flex;\n          justify-content: flex-end;\n          margin-bottom: 6px;\n        }\n        /* Live-tab variant: master toggle on the left, expand link on the\n           right. Same vertical rhythm as .v2-expand-row. */\n        .wrap.v2 .v2-tab-header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 12px;\n          margin-bottom: 6px;\n        }\n        .wrap.v2 .v2-tab-header-toggle {\n          display: inline-flex;\n          align-items: center;\n          gap: 10px;\n        }\n        .wrap.v2 .v2-tab-header-label {\n          font-size: 13px;\n          font-weight: 600;\n          color: var(--ed-text, #e6e6e8);\n        }\n        .wrap.v2 .v2-expand-all {\n          background: transparent;\n          border: none;\n          color: var(--ed-text2);\n          font-size: 11px;\n          font-family: inherit;\n          font-weight: 500;\n          padding: 2px 6px;\n          cursor: pointer;\n          opacity: 0.7;\n          text-transform: uppercase;\n          letter-spacing: 0.05em;\n          border-radius: 4px;\n          transition: opacity 0.15s, background 0.15s;\n        }\n        .wrap.v2 .v2-expand-all:hover {\n          opacity: 1;\n          background: rgba(255,255,255,0.04);\n        }\n\n        /* Divider between stacked toggles inside a .subrows wrapper\n           (e.g. Autoplay / Auto muted) — they share one .row so the\n           per-row bottom-border doesn't separate them. */\n        .wrap.v2 .subrows .row-head + .row-head {\n          border-top: 1px solid var(--ed-row-border);\n          padding-top: 10px;\n          margin-top: 8px;\n        }\n\n        .tabpanel {\n          padding: 16px;\n          padding-right: 20px;\n          border-radius: var(--ed-radius-panel);\n          background: var(--ed-section-bg);\n          border: 1px solid var(--ed-section-border);\n          display: grid;\n          gap: 14px;\n          align-content: start;\n          box-shadow: var(--ed-section-glow);\n          box-sizing: border-box;\n          scrollbar-width: none;\n        }\n        .tabpanel::-webkit-scrollbar { display: none; }\n        .wrap { scrollbar-width: none; }\n        .wrap::-webkit-scrollbar { display: none; }\n\n        .panelhead {\n          display: flex;\n          align-items: center;\n          gap: 4px;\n          padding-bottom: 6px;\n          min-width: 0;\n        }\n\n        .panelicon {\n          width: 40px;\n          height: 40px;\n          min-width: 40px;\n          border-radius: 14px;\n          display: grid;\n          place-items: center;\n          background: var(--ed-input-bg);\n          border: 1px solid var(--ed-input-border);\n          box-shadow: var(--ed-section-glow);\n        }\n\n        .panelicon .cgc-svg-icon {\n          color: var(--ed-text);\n        }\n\n        .panelhead-copy {\n          min-width: 0;\n          display: grid;\n          gap: 4px;\n        }\n\n        .paneltitle {\n          font-size: 16px;\n          font-weight: 1000;\n          color: var(--ed-text);\n          line-height: 1.2;\n        }\n\n        .panelsubtitle {\n          font-size: 12px;\n          color: var(--ed-text2);\n          line-height: 1.45;\n        }\n\n        .row {\n          display: grid;\n          gap: 12px;\n          padding: 16px;\n          border-radius: var(--ed-radius-row);\n          background: var(--ed-row-bg);\n          border: 1px solid var(--ed-row-border);\n          color: var(--ed-text);\n          min-width: 0;\n          transition:\n            background 0.18s ease,\n            border-color 0.18s ease,\n            box-shadow 0.18s ease;\n        }\n\n        .row:hover {\n          border-color: var(--ed-row-border);\n        }\n\n        .row-disabled {\n          opacity: 0.6;\n        }\n\n        .row-disabled .lbl {\n          color: var(--ed-text2);\n        }\n\n        .row-head {\n          display: flex;\n          align-items: flex-start;\n          justify-content: space-between;\n          gap: 12px;\n          min-width: 0;\n        }\n\n        .row-head > :first-child {\n          min-width: 0;\n          flex: 1 1 auto;\n          display: grid;\n          gap: 6px;\n        }\n\n        .row-inline {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 16px;\n        }\n\n        .row-inline .lbl {\n          margin: 0;\n        }\n\n        .row-inline #bgcolor-host {\n          display: flex;\n          align-items: center;\n          flex: 0 0 auto;\n        }\n\n        #bgcolor {\n          width: 42px;\n          height: 28px;\n          padding: 0;\n          border: 1px solid var(--ed-input-border);\n          border-radius: 6px;\n          background: none;\n          cursor: pointer;\n          appearance: none;\n          -webkit-appearance: none;\n        }\n\n        #bgcolor::-webkit-color-swatch-wrapper {\n          padding: 0;\n        }\n\n        #bgcolor::-webkit-color-swatch {\n          border: none;\n          border-radius: 6px;\n        }\n\n        .lbl {\n          font-size: 13px;\n          font-weight: 950;\n          color: var(--ed-text);\n          line-height: 1.2;\n          letter-spacing: 0.01em;\n        }\n\n        .desc {\n          font-size: 12px;\n          opacity: 0.88;\n          color: var(--ed-text2);\n          line-height: 1.45;\n        }\n\n        code {\n          opacity: 0.95;\n        }\n\n        .cgc-range {\n          width: 100%;\n          cursor: pointer;\n          accent-color: var(--primary-color, #03a9f4);\n          height: 4px;\n          -webkit-appearance: none;\n          appearance: none;\n          border-radius: 2px;\n          background: color-mix(in srgb, var(--primary-color, #03a9f4) 30%, var(--divider-color, #e0e0e0));\n          outline: none;\n        }\n        .cgc-range::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          width: 18px;\n          height: 18px;\n          border-radius: 50%;\n          background: var(--primary-color, #03a9f4);\n          box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n          cursor: pointer;\n        }\n        .cgc-range:disabled { opacity: 0.45; cursor: not-allowed; }\n        .cgc-switch { display: inline-flex; align-items: center; cursor: pointer; flex-shrink: 0; }\n        .cgc-switch input { position: absolute; opacity: 0; width: 0; height: 0; }\n        .cgc-track { width: 36px; height: 20px; border-radius: 10px; background: var(--switch-unchecked-track-color, rgba(0,0,0,0.26)); position: relative; transition: background 0.2s; flex-shrink: 0; }\n        .cgc-track::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }\n        .cgc-switch input:checked + .cgc-track { background: var(--switch-checked-track-color, var(--primary-color, #03a9f4)); }\n        .cgc-switch input:checked + .cgc-track::after { transform: translateX(16px); }\n        .cgc-switch input:disabled + .cgc-track { opacity: 0.45; cursor: not-allowed; }\n\n        .field {\n          position: relative;\n          min-width: 0;\n        }\n\n        .field textarea {\n          width: 100%;\n          box-sizing: border-box;\n          border-radius: var(--ed-radius-input);\n          border: 1px solid var(--ed-input-border);\n          background: var(--ed-input-bg);\n          color: var(--ed-text);\n          padding: 13px 14px;\n          font-size: 13px;\n          font-weight: 800;\n          outline: none;\n          resize: vertical;\n          min-height: 112px;\n          line-height: 1.45;\n          white-space: pre-wrap;\n          font-family:\n            ui-monospace,\n            SFMono-Regular,\n            Menlo,\n            Monaco,\n            Consolas,\n            "Liberation Mono",\n            "Courier New",\n            monospace;\n          transition:\n            border-color 0.16s ease,\n            box-shadow 0.16s ease,\n            background 0.16s ease;\n          box-shadow: var(--ed-section-glow);\n        }\n\n        #stylevars {\n          font-weight: 500;\n          cursor: text;\n          user-select: text;\n          -webkit-user-select: text;\n          line-height: 1.5;\n        }\n\n        .field textarea::placeholder {\n          color: color-mix(in srgb, var(--ed-text2) 82%, transparent);\n        }\n\n        .field textarea:focus {\n          border-color: color-mix(\n            in srgb,\n            var(--ed-input-border) 25%,\n            var(--primary-color, #03a9f4) 75%\n          );\n          box-shadow:\n            0 0 0 3px var(--ed-focus-ring),\n            var(--ed-section-glow);\n        }\n\n        .field textarea:disabled {\n          opacity: 0.65;\n          cursor: not-allowed;\n        }\n\n        .field.valid textarea {\n          border-color: var(--ed-valid);\n        }\n\n        .field.invalid textarea {\n          border-color: var(--ed-invalid);\n        }\n\n        .suggestions {\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: calc(100% + 8px);\n          background: var(--ed-sugg-bg);\n          border: 1px solid var(--ed-sugg-border);\n          border-radius: 14px;\n          box-shadow: var(--ed-shadow-float);\n          padding: 8px;\n          display: grid;\n          gap: 4px;\n          z-index: 999;\n          max-height: 280px;\n          overflow: auto;\n          backdrop-filter: blur(10px);\n          -webkit-backdrop-filter: blur(10px);\n        }\n\n        .suggestions[hidden] {\n          display: none;\n        }\n\n        .sugg-label {\n          padding: 6px 10px 8px;\n          font-size: 11px;\n          font-weight: 900;\n          letter-spacing: 0.04em;\n          text-transform: uppercase;\n          color: var(--ed-text2);\n        }\n\n        .sugg-item {\n          appearance: none;\n          -webkit-appearance: none;\n          border: 0;\n          background: transparent;\n          color: var(--ed-text);\n          text-align: left;\n          padding: 11px 12px;\n          border-radius: 10px;\n          cursor: pointer;\n          font-size: 12px;\n          font-weight: 800;\n          font-family:\n            ui-monospace,\n            SFMono-Regular,\n            Menlo,\n            Monaco,\n            Consolas,\n            "Liberation Mono",\n            "Courier New",\n            monospace;\n          white-space: normal;\n          overflow: visible;\n          text-overflow: clip;\n          word-break: break-word;\n          overflow-wrap: anywhere;\n          line-height: 1.35;\n          transition:\n            background 0.14s ease,\n            transform 0.14s ease;\n        }\n\n        .sugg-item:hover {\n          background: var(--ed-sugg-hover);\n        }\n\n        .sugg-item.active {\n          background: var(--ed-sugg-active);\n        }\n\n        .sugg-active-path {\n          padding: 9px 10px 4px;\n          font-size: 11px;\n          opacity: 0.75;\n          word-break: break-word;\n          overflow-wrap: anywhere;\n          border-top: 1px solid var(--ed-sugg-border);\n          margin-top: 4px;\n          color: var(--ed-text2);\n        }\n\n        .selectwrap {\n          position: relative;\n          min-width: 0;\n        }\n\n        .select {\n          width: 100%;\n          box-sizing: border-box;\n          border-radius: var(--ed-radius-input);\n          border: 1px solid var(--ed-select-border);\n          background: var(--ed-select-bg);\n          color: var(--ed-text);\n          padding: 12px 42px 12px 14px;\n          font-size: 13px;\n          font-weight: 800;\n          outline: none;\n          min-width: 0;\n          appearance: none;\n          -webkit-appearance: none;\n          cursor: pointer;\n          transition:\n            border-color 0.16s ease,\n            box-shadow 0.16s ease,\n            background 0.16s ease;\n          box-shadow: var(--ed-section-glow);\n        }\n\n        .select:hover {\n          border-color: color-mix(\n            in srgb,\n            var(--ed-select-border) 70%,\n            var(--ed-text2) 30%\n          );\n        }\n\n        .color-grid {\n          display: grid;\n          gap: 10px;\n        }\n\n        .color-row {\n          display: grid;\n          grid-template-columns: 1fr auto;\n          align-items: center;\n          gap: 12px;\n        }\n\n        .color-controls {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n\n        .color-row .lbl {\n          margin: 0;\n        }\n\n        .color-reset {\n          appearance: none;\n          border: none;\n          background: none;\n          padding: 0;\n          margin-left: 4px;\n          width: 20px;\n          height: 20px;\n          display: grid;\n          place-items: center;\n          cursor: pointer;\n          color: var(--ed-text2);\n          opacity: 0.7;\n          transition:\n            opacity 0.15s ease,\n            transform 0.15s ease,\n            color 0.15s ease;\n        }\n\n        .color-reset:hover {\n          opacity: 1;\n          border-color: var(--ed-tab-border);\n          color: var(--ed-text);\n        }\n\n        .color-reset .cgc-svg-icon { display: block; }\n\n        .select:focus {\n          border-color: color-mix(\n            in srgb,\n            var(--ed-select-border) 25%,\n            var(--primary-color, #03a9f4) 75%\n          );\n          box-shadow:\n            0 0 0 3px var(--ed-focus-ring),\n            var(--ed-section-glow);\n        }\n\n        .select:disabled {\n          opacity: 0.65;\n          cursor: not-allowed;\n        }\n\n        .selarrow {\n          position: absolute;\n          top: 50%;\n          right: 16px;\n          width: 10px;\n          height: 10px;\n          transform: translateY(-60%) rotate(45deg);\n          border-right: 2px solid var(--ed-arrow);\n          border-bottom: 2px solid var(--ed-arrow);\n          pointer-events: none;\n          opacity: 0.9;\n        }\n\n        .select.invalid {\n          border-color: var(--ed-invalid);\n        }\n\n        .segwrap {\n          display: flex;\n          gap: 8px;\n        }\n\n        .desc + .segwrap {\n          margin-top: 8px;\n        }\n\n        .seg {\n          flex: 1;\n          border: 1px solid var(--ed-seg-border);\n          background: var(--ed-seg-bg);\n          color: var(--ed-seg-txt);\n          border-radius: 12px;\n          padding: 11px 0;\n          font-size: 13px;\n          font-weight: 850;\n          cursor: pointer;\n          min-width: 0;\n          transition:\n            background 0.16s ease,\n            border-color 0.16s ease,\n            color 0.16s ease,\n            transform 0.16s ease,\n            box-shadow 0.16s ease;\n        }\n\n        .seg:hover {\n          border-color: var(--ed-tab-border);\n        }\n\n        .seg.on {\n          background: var(--ed-seg-on-bg);\n          color: var(--ed-seg-on-txt);\n          border-color: transparent;\n          box-shadow: var(--ed-shadow-press);\n        }\n\n        .togrow {\n          display: flex;\n          align-items: center;\n          justify-content: flex-end;\n          gap: 12px;\n          min-width: 0;\n          flex: 0 0 auto;\n          white-space: nowrap;\n        }\n\n        .barrow {\n          display: grid;\n          gap: 10px;\n          min-width: 0;\n        }\n\n        .barrow-top {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 12px;\n        }\n\n        .pillval {\n          min-width: 56px;\n          text-align: center;\n          padding: 6px 10px;\n          border-radius: var(--ed-radius-pill);\n          background: var(--ed-pill-bg);\n          border: 1px solid var(--ed-pill-border);\n          font-size: 12px;\n          font-weight: 1000;\n          color: var(--ed-pill-txt);\n          box-shadow: var(--ed-section-glow);\n        }\n\n        .muted {\n          opacity: var(--ed-muted);\n        }\n\n        .hint {\n          margin: 2px 0 0 0;\n          font-size: 12px;\n          opacity: 0.92;\n          color: var(--ed-text2);\n          display: flex;\n          align-items: center;\n          gap: 8px;\n          flex-wrap: wrap;\n        }\n\n        .hint .cgc-svg-icon {\n          color: var(--ed-text2);\n          flex-shrink: 0;\n        }\n\n        .hint a {\n          color: var(--primary-color);\n          text-decoration: none;\n          font-weight: 700;\n        }\n\n        .hint a:hover {\n          text-decoration: underline;\n        }\n\n        .row-actions {\n          display: flex;\n          gap: 10px;\n          margin-top: 10px;\n        }\n\n        .row-actions .actionbtn {\n          flex: 1;\n          justify-content: center;\n        }\n\n        .actionbtn {\n          appearance: none;\n          -webkit-appearance: none;\n          border: 1px solid var(--ed-input-border);\n          background: var(--ed-input-bg);\n          color: var(--ed-text);\n          border-radius: 12px;\n          min-height: 40px;\n          padding: 0 14px;\n          cursor: pointer;\n          display: inline-flex;\n          align-items: center;\n          gap: 8px;\n          font-size: 13px;\n          font-weight: 900;\n          transition:\n            background 0.18s ease,\n            border-color 0.18s ease,\n            transform 0.18s ease,\n            box-shadow 0.18s ease;\n        }\n\n        .actionbtn:hover {\n          border-color: color-mix(\n            in srgb,\n            var(--ed-input-border) 65%,\n            var(--ed-text2) 35%\n          );\n        }\n\n        .actionbtn:disabled {\n          opacity: 0.65;\n          cursor: not-allowed;\n          transform: none;\n        }\n\n        .actionbtn .cgc-svg-icon { flex-shrink: 0; }\n\n        .livecam-tags {\n          display: flex;\n          flex-direction: column;\n          gap: 6px;\n          margin-top: 6px;\n        }\n        .livecam-rows {\n          display: flex;\n          flex-direction: column;\n          gap: 6px;\n          margin-top: 6px;\n          width: 100%;\n          box-sizing: border-box;\n          min-width: 0;\n        }\n        .livecam-row {\n          background: var(--ed-input-bg);\n          border: 1px solid var(--ed-input-border);\n          border-radius: 10px;\n          overflow: hidden;\n          width: 100%;\n          box-sizing: border-box;\n          min-width: 0;\n          transition: opacity 0.15s, box-shadow 0.15s;\n        }\n        .livecam-row.dnd-dragging { opacity: 0.35; }\n        .livecam-row.dnd-over { box-shadow: -3px 0 0 0 var(--primary-color, #03a9f4); }\n\n        /* Pill row DnD (Pills collapsible). Single-line layout: grip,\n         * label, switch — all centred on one row. */\n        .pills-dnd-list { display: flex; flex-direction: column; gap: 6px; }\n        .pill-dnd-row { cursor: default; transition: opacity 0.15s, box-shadow 0.15s; }\n        .pill-dnd-row.pill-dnd-dragging { opacity: 0.4; }\n        .pill-dnd-row.pill-dnd-over { box-shadow: 0 -2px 0 0 var(--primary-color, #03a9f4); }\n        /* Disabled pills sit at the bottom (sort) and are dimmed so the\n         * eye lands on the active set first. The switch itself stays at\n         * full opacity so users can still see + click it cleanly. */\n        .pill-dnd-row.pill-dnd-disabled .pill-drag-grip,\n        .pill-dnd-row.pill-dnd-disabled .pill-dnd-icon,\n        .pill-dnd-row.pill-dnd-disabled .pill-dnd-label { opacity: 0.45; }\n        /* Icon between grip + label — fixed-width slot so labels line\n         * up vertically across rows even when an entry has no icon. */\n        .pill-dnd-icon {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          width: 22px;\n          height: 18px;\n          opacity: 0.85;\n        }\n        /* Text preview (for counter / speed / time pills which render\n         * text at runtime, not an icon). Tabular-nums so widths align. */\n        .pill-dnd-preview-text {\n          font-size: 11px;\n          font-weight: 700;\n          font-variant-numeric: tabular-nums;\n          line-height: 1;\n          letter-spacing: 0.02em;\n        }\n        .pill-dnd-line {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          min-width: 0;\n        }\n        .pill-dnd-label {\n          flex: 1;\n          min-width: 0;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n        .pill-drag-grip {\n          display: inline-flex; align-items: center; justify-content: center;\n          width: 24px; height: 24px;\n          font-size: 18px; line-height: 1;\n          color: var(--ed-text2, #8b8b91);\n          cursor: grab;\n          user-select: none;\n          touch-action: none;\n          flex-shrink: 0;\n        }\n        .pill-drag-grip:active { cursor: grabbing; }\n        .livecam-rowhead {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n          padding: 9px 10px;\n          cursor: pointer;\n          transition: background 0.12s ease;\n        }\n        .livecam-rowhead:hover { background: rgba(255,255,255,0.03); }\n        .livecam-rowgrip {\n          color: var(--ed-text2);\n          font-size: 14px;\n          line-height: 1;\n          cursor: grab;\n          user-select: none;\n          opacity: 0.5;\n          padding: 0 2px;\n        }\n        .livecam-rowname {\n          flex: 1;\n          font-size: 13px;\n          font-weight: 500;\n          min-width: 0;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n        .livecam-rowent {\n          opacity: 0.5;\n          font-size: 10px;\n          font-weight: 500;\n          margin-left: 6px;\n        }\n        .livecam-rowmic {\n          font-size: 11px;\n          color: var(--ed-text2);\n          font-family: ui-monospace, Menlo, monospace;\n          opacity: 0.85;\n        }\n        .livecam-rowmic.none { opacity: 0.5; font-style: italic; font-family: inherit; }\n        .livecam-chevron {\n          color: var(--ed-text2);\n          font-size: 14px;\n          line-height: 1;\n          transition: transform 0.18s ease;\n          opacity: 0.5;\n        }\n        .livecam-row.open .livecam-chevron { transform: rotate(90deg); }\n        .livecam-rowbody {\n          display: none;\n          padding: 8px 12px 12px;\n          border-top: 1px solid var(--ed-row-border);\n          background: rgba(0,0,0,0.18);\n        }\n        .livecam-row.open .livecam-rowbody > * + * { margin-top: 8px; }\n        .livecam-actions {\n          display: flex;\n          flex-wrap: wrap;\n          gap: 8px;\n        }\n        .livecam-row.open .livecam-rowbody { display: block; }\n        .livecam-fieldrow {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n        }\n        .livecam-fieldrow label {\n          font-size: 11px;\n          color: var(--ed-text2);\n          width: 80px;\n          flex-shrink: 0;\n        }\n        .livecam-row-del {\n          appearance: none;\n          background: transparent;\n          border: 1px solid var(--ed-input-border);\n          color: var(--ed-text2);\n          padding: 6px 10px;\n          border-radius: 6px;\n          font-size: 11px;\n          cursor: pointer;\n          display: inline-flex;\n          align-items: center;\n          gap: 5px;\n        }\n        .livecam-row-del:hover {\n          color: var(--error-color, #d32f2f);\n          border-color: var(--error-color, #d32f2f);\n        }\n\n        /* ─── Inline crop tool (lives inside livecam-row) ─── */\n        .livecam-crop-section {\n          display: flex;\n          flex-direction: column;\n          gap: 8px;\n        }\n        .livecam-crop-toggle {\n          appearance: none;\n          background: rgba(0,0,0,0.18);\n          border: 1px solid var(--ed-input-border);\n          border-radius: 8px;\n          color: var(--ed-text);\n          padding: 8px 12px;\n          font-size: 12px;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          gap: 8px;\n          width: 100%;\n          text-align: left;\n        }\n        .livecam-crop-toggle:hover {\n          border-color: rgba(255,255,255,0.16);\n        }\n        .livecam-crop-toggle.set { color: var(--accent-color, #ff9f43); }\n        .livecam-crop-toggle.set .cgc-svg-icon { color: var(--accent-color, #ff9f43); }\n        .livecam-crop-toggle-label { flex: 1; }\n        .livecam-crop-toggle-status {\n          font-size: 11px;\n          color: var(--ed-text2);\n          font-family: ui-monospace, "SF Mono", monospace;\n        }\n        .livecam-crop-toggle-chev {\n          color: var(--ed-text2);\n          font-size: 11px;\n          width: 12px;\n          text-align: center;\n        }\n        .livecam-crop-inline {\n          display: flex;\n          flex-direction: column;\n          gap: 8px;\n          background: rgba(0,0,0,0.18);\n          border: 1px solid var(--ed-input-border);\n          border-radius: 8px;\n          padding: 10px;\n        }\n        .livecam-crop-head {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n        .livecam-crop-reset { margin-left: auto; }\n        .livecam-crop-aspect {\n          appearance: none;\n          background: var(--ed-input-bg);\n          color: var(--ed-text);\n          border: 1px solid var(--ed-input-border);\n          padding: 4px 22px 4px 8px;\n          border-radius: 6px;\n          font-size: 11px;\n          cursor: pointer;\n          background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),\n                            linear-gradient(135deg, currentColor 50%, transparent 50%);\n          background-position: calc(100% - 11px) 50%, calc(100% - 7px) 50%;\n          background-size: 4px 4px, 4px 4px;\n          background-repeat: no-repeat;\n        }\n        .livecam-crop-reset {\n          appearance: none;\n          background: transparent;\n          border: 1px solid var(--ed-input-border);\n          color: var(--ed-text2);\n          padding: 4px 8px;\n          border-radius: 6px;\n          font-size: 11px;\n          cursor: pointer;\n          display: inline-flex;\n          align-items: center;\n          gap: 4px;\n        }\n        .livecam-crop-reset:hover {\n          color: var(--ed-text);\n          border-color: rgba(255,255,255,0.2);\n        }\n        .livecam-crop-stage {\n          position: relative;\n          width: 100%;\n          background: #000;\n          border-radius: 6px;\n          overflow: hidden;\n          user-select: none;\n          touch-action: none;\n        }\n        .livecam-crop-img {\n          width: 100%;\n          height: auto;\n          object-fit: cover;\n          display: block;\n          pointer-events: none;\n          border-radius: inherit;\n        }\n        .livecam-crop-empty {\n          aspect-ratio: 16 / 9;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: var(--ed-text2);\n          font-size: 12px;\n          font-style: italic;\n        }\n        .livecam-crop-mask {\n          position: absolute;\n          background: rgba(0, 0, 0, 0.55);\n          pointer-events: none;\n        }\n        .livecam-crop-mask.top    { top: 0;    left: 0; right: 0; }\n        .livecam-crop-mask.bottom { bottom: 0; left: 0; right: 0; }\n        .livecam-crop-mask.left   { left: 0; }\n        .livecam-crop-mask.right  { right: 0; }\n        .livecam-crop-rect {\n          position: absolute;\n          border: 2px solid var(--accent-color, #ff9f43);\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n          cursor: move;\n          box-sizing: border-box;\n        }\n        /* Rule-of-thirds overlay — two thin lines on each axis dividing\n         * the crop rect in thirds. Helps frame the subject. Drawn via\n         * pseudo-elements so no extra DOM is needed; pointer-events:none\n         * keeps drag interactions on the parent rect untouched. */\n        .livecam-crop-rect::before,\n        .livecam-crop-rect::after {\n          content: "";\n          position: absolute;\n          inset: 0;\n          pointer-events: none;\n          background-repeat: no-repeat;\n        }\n        .livecam-crop-rect::before {\n          background-image:\n            linear-gradient(to right,\n              transparent calc(33.333% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(33.333% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(33.333% + 0.5px),\n              transparent calc(33.333% + 0.5px),\n              transparent calc(66.666% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(66.666% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(66.666% + 0.5px),\n              transparent calc(66.666% + 0.5px));\n        }\n        .livecam-crop-rect::after {\n          background-image:\n            linear-gradient(to bottom,\n              transparent calc(33.333% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(33.333% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(33.333% + 0.5px),\n              transparent calc(33.333% + 0.5px),\n              transparent calc(66.666% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(66.666% - 0.5px),\n              rgba(255, 255, 255, 0.35) calc(66.666% + 0.5px),\n              transparent calc(66.666% + 0.5px));\n        }\n        .livecam-crop-handle {\n          position: absolute;\n          width: 12px;\n          height: 12px;\n          background: var(--accent-color, #ff9f43);\n          border: 2px solid #fff;\n          border-radius: 50%;\n          box-shadow: 0 1px 3px rgba(0,0,0,0.4);\n          touch-action: none;\n        }\n        .livecam-crop-handle.h-tl { top: -6px;    left: -6px;    cursor: nwse-resize; }\n        .livecam-crop-handle.h-tr { top: -6px;    right: -6px;   cursor: nesw-resize; }\n        .livecam-crop-handle.h-bl { bottom: -6px; left: -6px;    cursor: nesw-resize; }\n        .livecam-crop-handle.h-br { bottom: -6px; right: -6px;   cursor: nwse-resize; }\n        .livecam-crop-info {\n          font-size: 11px;\n          color: var(--ed-text2);\n          font-family: ui-monospace, "SF Mono", monospace;\n          text-align: center;\n        }\n        .livecam-crop-info strong { color: var(--ed-text); font-weight: 700; }\n        .livecam-tag {\n          display: flex;\n          align-items: center;\n          gap: 4px;\n          padding: 4px 4px 4px 4px;\n          background: var(--ed-chip-bg);\n          border: 1px solid var(--ed-chip-border);\n          border-radius: 999px;\n          font-size: 12px;\n          color: var(--ed-text);\n          cursor: grab;\n          transition: opacity 0.15s, box-shadow 0.15s;\n        }\n        .livecam-tag-entity {\n          opacity: 0.45;\n          font-size: 10px;\n          font-weight: 500;\n        }\n        .livecam-tag-del {\n          border: none;\n          background: none;\n          cursor: pointer;\n          color: var(--ed-text2);\n          padding: 0 2px;\n          font-size: 15px;\n          line-height: 1;\n        }\n\n        .menubtn-list { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }\n        .menubtn-card {\n          border: 1px solid var(--ed-input-border);\n          border-radius: var(--ed-radius-input, 8px);\n          padding: 8px 10px;\n        }\n        .menubtn-card-header {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n          margin-bottom: 8px;\n        }\n        .menubtn-fields {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          gap: 6px;\n        }\n        .menubtn-fields > div { display: flex; flex-direction: column; gap: 3px; }\n\n        .chip-grid {\n          display: grid;\n          grid-template-columns: repeat(2, minmax(0, 1fr));\n          gap: 10px;\n          margin-top: 4px;\n        }\n\n        .objchip {\n          display: grid;\n          grid-template-columns: 36px 1fr auto;\n          align-items: center;\n          column-gap: 10px;\n          width: 100%;\n          min-height: 44px;\n          padding: 0 10px;\n          border-radius: 12px;\n          border: 1px solid var(--ed-chip-border);\n          background: var(--ed-chip-bg);\n          color: var(--ed-chip-txt);\n          cursor: pointer;\n          transition:\n            background 0.18s ease,\n            border-color 0.18s ease,\n            color 0.18s ease,\n            box-shadow 0.18s ease;\n          box-sizing: border-box;\n          box-shadow: var(--ed-section-glow);\n        }\n\n        .objchip:hover {\n          border-color: var(--ed-tab-border);\n        }\n\n        .objchip.on {\n          background: var(--ed-chip-on-bg);\n          border-color: var(--ed-chip-on-border);\n          color: var(--ed-chip-on-txt);\n          box-shadow: var(--ed-shadow-chip);\n        }\n\n        .objchip.disabled {\n          opacity: var(--ed-chip-disabled);\n          cursor: not-allowed;\n          transform: none;\n        }\n\n        .objchip-icon {\n          width: 36px;\n          height: 36px;\n          min-width: 36px;\n          border-radius: 999px;\n          display: grid;\n          place-items: center;\n          background: var(--ed-chip-icon-bg);\n          transition: background 0.18s ease;\n        }\n\n        .objchip.on .objchip-icon {\n          background: var(--ed-chip-on-icon-bg);\n          color: inherit;\n        }\n\n        .objchip-icon .cgc-svg-icon {\n          color: inherit;\n        }\n\n        .objchip-label {\n          min-width: 0;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          color: inherit;\n        }\n\n        .objchip-check {\n          display: none;\n        }\n\n        .objchip-native-check {\n          appearance: none;\n          -webkit-appearance: none;\n          width: 16px;\n          height: 16px;\n          min-width: 16px;\n          border: 2px solid var(--ed-chip-border);\n          border-radius: 4px;\n          background: transparent;\n          pointer-events: none;\n          justify-self: end;\n          transition: background 0.15s, border-color 0.15s;\n          position: relative;\n          flex-shrink: 0;\n        }\n        .objchip-native-check:checked {\n          background: var(--primary-color, #03a9f4);\n          border-color: var(--primary-color, #03a9f4);\n        }\n        .objchip-native-check:checked::after {\n          content: '';\n          position: absolute;\n          top: 1px; left: 4px;\n          width: 5px; height: 9px;\n          border: 2px solid #fff;\n          border-top: none; border-left: none;\n          transform: rotate(45deg);\n        }\n\n        /* Nieuwe styles voor custom filters */\n        .custom-filter-add {\n          display: flex;\n          flex-direction: column;\n          gap: 8px;\n          margin-top: 16px;\n        }\n\n        .custom-filter-add .ed-input {\n          flex: none;\n          width: 100%;\n        }\n\n        .custom-filter-add #new-filter-icon { width: 100%; }\n\n        .custom-filter-add .actionbtn {\n          width: 100%;\n          justify-content: center;\n        }\n\n        .custom-filter-list {\n          display: flex;\n          flex-direction: column;\n          gap: 4px;\n          margin-top: 12px;\n        }\n\n        .custom-item {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          padding: 4px 8px 4px 12px;\n          background: var(--ed-row-bg);\n          border: 1px solid var(--ed-row-border);\n          border-radius: 10px;\n          min-height: 48px;\n        }\n\n        .custom-item-info {\n          display: flex;\n          align-items: center;\n          gap: 12px;\n          font-size: 14px;\n          font-weight: 500;\n          color: var(--ed-text);\n        }\n\n        .custom-item-info ha-icon,\n        .custom-item-info .cgc-svg-icon {\n          color: var(--primary-color);\n        }\n\n        .remove-btn {\n          color: var(--ed-invalid);\n          cursor: pointer;\n          background: none;\n          border: none;\n          padding: 8px;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-shrink: 0;\n        }\n\n        .remove-btn:hover {\n          background: color-mix(in srgb, var(--ed-invalid) 12%, transparent);\n        }\n\n        .remove-btn .cgc-svg-icon { display: block; }\n\n\n        .objchip-color {\n          display: flex;\n          align-items: center;\n          justify-self: center;\n          gap: 4px;\n        }\n\n        .objchip-color .cgc-color {\n          width: 26px;\n          height: 22px;\n          min-width: 26px;\n          flex: 0 0 26px;\n        }\n\n        .objchip-color .color-reset {\n          width: 16px;\n          height: 16px;\n          margin-left: 0;\n        }\n\n        .objchip-color .color-reset .cgc-svg-icon { display: block; }\n\n        .cgc-color {\n          width: 42px;\n          height: 28px;\n          min-width: 42px;\n          flex: 0 0 42px;\n          padding: 0;\n          border: 1px solid var(--ed-input-border);\n          border-radius: 6px;\n          background: none;\n          cursor: pointer;\n          appearance: none;\n          -webkit-appearance: none;\n          position: relative;\n          z-index: 2;\n        }\n\n        .cgc-color:disabled {\n          opacity: 0.35;\n          cursor: not-allowed;\n        }\n\n        .cgc-color::-webkit-color-swatch-wrapper {\n          padding: 0;\n        }\n\n        .cgc-color::-webkit-color-swatch {\n          border: none;\n          border-radius: 6px;\n        }\n\n        .subrows {\n          display: flex;\n          flex-direction: column;\n          gap: 8px;\n          margin-top: 8px;\n        }\n\n        .lbl.sub {\n          font-size: 14px;\n          font-weight: 500;\n          opacity: 0.95;\n        }\n\n        .objmeta {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 10px;\n          flex-wrap: wrap;\n          margin-top: 2px;\n        }\n\n        .countpill {\n          display: inline-flex;\n          align-items: center;\n          gap: 6px;\n          padding: 6px 10px;\n          border-radius: var(--ed-radius-pill);\n          background: var(--ed-input-bg);\n          border: 1px solid var(--ed-input-border);\n          color: var(--ed-text);\n          font-size: 11px;\n          font-weight: 950;\n          letter-spacing: 0.02em;\n        }\n\n        .browser-backdrop {\n          position: fixed;\n          inset: 0;\n          background: var(--ed-backdrop);\n          backdrop-filter: blur(10px) saturate(120%);\n          -webkit-backdrop-filter: blur(10px) saturate(120%);\n          z-index: 9998;\n        }\n\n        .browser-modal {\n          position: fixed;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n          width: min(92vw, 760px);\n          max-height: min(84vh, 760px);\n          background: var(--card-background-color, #fff);\n          color: var(--ed-text);\n          border: 1px solid var(--ed-sugg-border);\n          border-radius: 20px;\n          box-shadow: var(--ed-shadow-modal);\n          z-index: 9999;\n          display: grid;\n          grid-template-rows: auto auto minmax(0, 1fr);\n          overflow: hidden;\n        }\n\n        .browser-head {\n          display: flex;\n          align-items: flex-start;\n          justify-content: space-between;\n          gap: 14px;\n          padding: 18px 18px 14px;\n          border-bottom: 1px solid var(--ed-row-border);\n        }\n\n        .browser-head-copy {\n          min-width: 0;\n          display: grid;\n          gap: 6px;\n        }\n\n        .browser-title {\n          font-size: 16px;\n          font-weight: 1000;\n          line-height: 1.2;\n        }\n\n        .browser-path {\n          font-size: 12px;\n          color: var(--ed-text2);\n          line-height: 1.45;\n          word-break: break-word;\n          overflow-wrap: anywhere;\n        }\n\n        .browser-iconbtn {\n          appearance: none;\n          -webkit-appearance: none;\n          width: 38px;\n          height: 38px;\n          min-width: 38px;\n          border-radius: 12px;\n          border: 1px solid var(--ed-input-border);\n          background: var(--ed-input-bg);\n          color: var(--ed-text);\n          display: grid;\n          place-items: center;\n          cursor: pointer;\n        }\n\n        .browser-iconbtn .cgc-svg-icon { display: block; }\n\n        .browser-toolbar {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 10px;\n          padding: 14px 18px;\n          border-bottom: 1px solid var(--ed-row-border);\n          flex-wrap: wrap;\n        }\n\n        .browser-btn {\n          appearance: none;\n          -webkit-appearance: none;\n          border: 1px solid var(--ed-input-border);\n          background: var(--ed-input-bg);\n          color: var(--ed-text);\n          border-radius: 12px;\n          min-height: 40px;\n          padding: 0 14px;\n          cursor: pointer;\n          display: inline-flex;\n          align-items: center;\n          gap: 8px;\n          font-size: 13px;\n          font-weight: 900;\n        }\n\n        .browser-btn.primary {\n          background: var(--ed-seg-on-bg);\n          color: var(--ed-seg-on-txt);\n          border-color: transparent;\n        }\n\n        .browser-btn.disabled,\n        .browser-btn:disabled {\n          opacity: 0.45;\n          cursor: default;\n        }\n\n        .browser-btn .cgc-svg-icon { flex-shrink: 0; }\n\n        .browser-body {\n          min-height: 0;\n          overflow: auto;\n          padding: 14px 18px 18px;\n          overscroll-behavior: contain;\n        }\n\n        .browser-list {\n          display: grid;\n          gap: 10px;\n        }\n\n        .browser-item {\n          display: grid;\n          grid-template-columns: minmax(0, 1fr) auto;\n          gap: 10px;\n          align-items: center;\n          padding: 10px;\n          border-radius: 16px;\n          background: var(--ed-row-bg);\n          border: 1px solid var(--ed-row-border);\n        }\n\n        .browser-open {\n          appearance: none;\n          -webkit-appearance: none;\n          border: 0;\n          background: transparent;\n          color: var(--ed-text);\n          text-align: left;\n          min-width: 0;\n          padding: 0;\n          cursor: pointer;\n          display: grid;\n          grid-template-columns: 40px minmax(0, 1fr);\n          gap: 12px;\n          align-items: center;\n        }\n\n        .browser-open-icon {\n          width: 40px;\n          height: 40px;\n          border-radius: 12px;\n          display: grid;\n          place-items: center;\n          background: var(--ed-input-bg);\n          border: 1px solid var(--ed-input-border);\n        }\n\n        .browser-open-icon .cgc-svg-icon { display: block; }\n\n        .browser-open-copy {\n          min-width: 0;\n          display: grid;\n          gap: 4px;\n        }\n\n        .hint-block {\n          display: grid;\n          gap: 8px;\n          align-items: start;\n        }\n\n        .hint-title {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n          font-size: 12px;\n          color: var(--ed-text2);\n        }\n\n        .vars-list {\n          display: grid;\n          gap: 6px;\n          padding-left: 22px;\n        }\n\n        .vars-list div {\n          display: flex;\n          flex-wrap: wrap;\n          gap: 8px;\n          line-height: 1.45;\n        }\n\n        .vars-list code {\n          opacity: 1;\n        }\n\n        .vars-list span {\n          color: var(--ed-text2);\n        }\n\n        .browser-open-title {\n          font-size: 13px;\n          font-weight: 950;\n          color: var(--ed-text);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n\n        .browser-open-sub {\n          font-size: 11px;\n          color: var(--ed-text2);\n          line-height: 1.35;\n          word-break: break-word;\n          overflow-wrap: anywhere;\n        }\n\n        .browser-select {\n          appearance: none;\n          -webkit-appearance: none;\n          border: 1px solid var(--ed-input-border);\n          background: var(--ed-input-bg);\n          color: var(--ed-text);\n          border-radius: 12px;\n          min-height: 38px;\n          padding: 0 12px;\n          cursor: pointer;\n          font-size: 12px;\n          font-weight: 900;\n          white-space: nowrap;\n        }\n\n        .color-transparent {\n          display: flex;\n          align-items: center;\n          gap: 6px;\n          font-size: 11px;\n          font-weight: 800;\n          color: var(--ed-text2);\n          cursor: pointer;\n        }\n\n        .color-transparent input {\n          cursor: pointer;\n        }\n\n        .style-sections {\n          display: grid;\n          gap: 8px;\n        }\n\n        .style-section {\n          border: 1px solid var(--ed-row-border);\n          border-radius: 12px;\n          overflow: hidden;\n          background: var(--ed-row-bg);\n        }\n\n        .style-section-head {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          padding: 12px 14px;\n          cursor: pointer;\n          list-style: none;\n          font-size: 13px;\n          font-weight: 800;\n          color: var(--ed-text);\n          user-select: none;\n        }\n\n        .style-section-head::-webkit-details-marker { display: none; }\n\n        .style-section-head .cgc-svg-icon:first-child {\n          color: var(--ed-text2);\n          flex: 0 0 auto;\n        }\n\n        .style-section-head > span:not(.style-chevron) {\n          flex: 1 1 auto;\n        }\n\n        .style-chevron {\n          color: var(--ed-text2);\n          flex: 0 0 auto;\n          margin-left: auto;\n          transition: transform 0.2s ease;\n          display: flex;\n          align-items: center;\n        }\n\n        details[open] .style-chevron {\n          transform: rotate(180deg);\n        }\n\n        .style-section-body {\n          padding: 4px 14px 14px;\n          border-top: 1px solid var(--ed-row-border);\n        }\n\n        .radius-range {\n          width: 90px;\n          cursor: pointer;\n          accent-color: var(--primary-color, #03a9f4);\n        }\n\n        .radius-value {\n          font-size: 12px;\n          font-weight: 800;\n          color: var(--ed-text2);\n          min-width: 34px;\n          text-align: right;\n        }\n\n        .radius-value-wrap {\n          display: inline-flex;\n          align-items: baseline;\n          gap: 0;\n          font-size: 12px;\n          font-weight: 800;\n          color: var(--ed-text2);\n        }\n        .radius-value-input {\n          width: 48px;\n          padding: 2px 4px;\n          background: transparent;\n          border: 1px solid transparent;\n          border-radius: 4px;\n          color: inherit;\n          font: inherit;\n          text-align: right;\n          -moz-appearance: textfield;\n        }\n        .radius-value-input::-webkit-outer-spin-button,\n        .radius-value-input::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n        .radius-value-input:hover { border-color: var(--ed-divider, rgba(255,255,255,0.10)); }\n        .radius-value-input:focus {\n          outline: none;\n          border-color: var(--primary-color, #03a9f4);\n          background: rgba(255,255,255,0.04);\n        }\n        .radius-value-unit {\n          opacity: 0.7;\n        }\n\n        .browser-empty {\n          display: grid;\n          place-items: center;\n          min-height: 180px;\n          font-size: 13px;\n          font-weight: 800;\n          color: var(--ed-text2);\n          text-align: center;\n          padding: 20px;\n        }\n\n        @media (max-width: 900px) {\n          .tabbar {\n            grid-template-columns: repeat(2, minmax(0, 1fr));\n          }\n        }\n\n        @media (max-width: 640px) {\n          .row-head {\n            align-items: stretch;\n            flex-direction: column;\n          }\n\n          .togrow {\n            justify-content: space-between;\n            width: 100%;\n          }\n\n          .panelhead {\n            gap: 12px;\n          }\n\n          .panelicon {\n            width: 38px;\n            height: 38px;\n            min-width: 38px;\n          }\n\n          .browser-modal {\n            width: min(96vw, 760px);\n            max-height: min(88vh, 760px);\n          }\n\n          .browser-item {\n            grid-template-columns: 1fr;\n          }\n\n          .browser-select {\n            width: 100%;\n          }\n\n\n        }\n\n        .cgc-wizard { margin-top: 8px; }\n        .cgc-wizard-toggle {\n          width: 100%; text-align: left; background: none;\n          border: 1px dashed var(--divider-color, #555);\n          color: var(--secondary-text-color); border-radius: 6px;\n          padding: 5px 10px; cursor: pointer; font-size: 12px;\n        }\n        .cgc-wizard-toggle:hover { border-color: var(--primary-color); color: var(--primary-color); }\n        .cgc-wizard-body { margin-top: 8px; display: flex; flex-direction: column; gap: 8px; }\n        .cgc-wizard-row { display: flex; flex-direction: column; gap: 2px; }\n        .cgc-wizard-row label { font-size: 12px; font-weight: 500; }\n        .cgc-wizard-hint { font-size: 11px; color: var(--secondary-text-color); }\n        .cgc-wizard-prefix { font-size: 13px; color: var(--ed-text); white-space: nowrap; }\n        .cgc-wizard-folder-row { display: flex; align-items: center; gap: 4px; }\n        .ed-input {\n          flex: 1;\n          height: 36px;\n          padding: 0 10px;\n          box-sizing: border-box;\n          font-size: 13px;\n          font-family: inherit;\n          font-weight: 800;\n          color: var(--ed-text);\n          background: var(--ed-input-bg);\n          border: 1px solid var(--ed-input-border);\n          border-radius: var(--ed-radius-input);\n          outline: none;\n          width: 100%;\n          transition: border-color 0.16s ease, box-shadow 0.16s ease;\n          box-shadow: var(--ed-section-glow);\n        }\n        .ed-input:focus { border-color: color-mix(in srgb, var(--ed-input-border) 25%, var(--primary-color, #03a9f4) 75%); box-shadow: 0 0 0 3px var(--ed-focus-ring), var(--ed-section-glow); }\n        /* Path-format auto-detect status + scoreboard. The status line\n         * sits under the Detect button; the expandable shows every\n         * candidate the detector tested with its match count, so users\n         * can see *why* a particular format won (or didn't). */\n        #detect-pathfmt-status {\n          display: block;\n          margin-top: 8px;\n          font-size: 11px;\n          color: var(--secondary-text-color, rgba(0,0,0,0.6));\n          min-height: 14px;\n        }\n        .pathfmt-details {\n          margin-top: 8px;\n          font-size: 11px;\n        }\n        .pathfmt-details > summary {\n          display: inline-flex;\n          align-items: center;\n          gap: 4px;\n          cursor: pointer;\n          color: var(--primary-color, #03a9f4);\n          font-weight: 700;\n          list-style: none;\n          padding: 4px 2px;\n          user-select: none;\n        }\n        .pathfmt-details > summary::-webkit-details-marker { display: none; }\n        .pathfmt-details > summary svg {\n          transition: transform 0.15s ease;\n        }\n        .pathfmt-details[open] > summary svg {\n          transform: rotate(90deg);\n        }\n        .pathfmt-rows {\n          display: flex;\n          flex-direction: column;\n          gap: 2px;\n          margin-top: 6px;\n          padding: 6px;\n          background: var(--ed-input-bg);\n          border: 1px solid var(--ed-input-border);\n          border-radius: var(--ed-radius-input);\n          max-height: 320px;\n          overflow-y: auto;\n        }\n        .pathfmt-row {\n          display: grid;\n          grid-template-columns: 1fr auto 60px;\n          align-items: center;\n          gap: 8px;\n          padding: 6px 8px;\n          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;\n          font-size: 11px;\n          font-weight: 600;\n          color: var(--ed-text);\n          background: transparent;\n          border: 1px solid transparent;\n          border-radius: 4px;\n          cursor: pointer;\n          text-align: left;\n          transition: background 0.12s ease, border-color 0.12s ease;\n        }\n        .pathfmt-row:hover {\n          background: var(--secondary-background-color, rgba(0,0,0,0.04));\n        }\n        .pathfmt-row.no-match {\n          color: var(--secondary-text-color, rgba(0,0,0,0.45));\n        }\n        .pathfmt-row.winner {\n          background: color-mix(in srgb, var(--primary-color, #03a9f4) 10%, transparent);\n          border-color: color-mix(in srgb, var(--primary-color, #03a9f4) 30%, transparent);\n        }\n        .pathfmt-row.current {\n          border-color: var(--primary-color, #03a9f4);\n        }\n        .pathfmt-row-fmt {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n        .pathfmt-row-count {\n          font-variant-numeric: tabular-nums;\n          color: var(--secondary-text-color, rgba(0,0,0,0.55));\n          min-width: 36px;\n          text-align: right;\n        }\n        .pathfmt-row.matched .pathfmt-row-count {\n          color: var(--primary-text-color, rgba(0,0,0,0.85));\n        }\n        .pathfmt-row-bar {\n          display: block;\n          height: 4px;\n          width: 100%;\n          background: color-mix(in srgb, var(--ed-input-border) 50%, transparent);\n          border-radius: 2px;\n          overflow: hidden;\n        }\n        .pathfmt-row-bar > span {\n          display: block;\n          height: 100%;\n          background: var(--primary-color, #03a9f4);\n          transition: width 0.2s ease;\n        }\n        .pathfmt-row.no-match .pathfmt-row-bar > span {\n          background: transparent;\n        }\ndetails summary { user-select: none; }\n        details summary .details-chevron { transition: transform 0.15s; margin-left: auto; }\n        details[open] summary .details-chevron { transform: rotate(90deg); }\n        .cgc-row-summary { cursor: pointer; list-style: none; display: flex; align-items: center; gap: 6px; padding: 0; }\n        .cgc-row-summary::-webkit-details-marker { display: none; }\n        .cgc-row-body { padding-top: 8px; }\n        .ed-input-row { display: flex; align-items: center; gap: 6px; }\n        .ed-suffix { font-size: 12px; color: var(--ed-text2); white-space: nowrap; }\n        .cgc-wizard-btn {\n          background: var(--primary-color); color: white;\n          border: none; border-radius: 6px; padding: 6px 14px;\n          cursor: pointer; font-size: 13px; align-self: flex-start;\n        }\n        .cgc-wizard-btn:disabled { opacity: 0.5; cursor: not-allowed; }\n        .cgc-wizard-link {\n          font-size: 11px; color: var(--primary-color, #03a9f4);\n          text-decoration: none; opacity: 0.75; margin-left: 6px;\n        }\n        .cgc-wizard-link:hover { opacity: 1; text-decoration: underline; }\n        .cgc-wizard-success {\n          font-size: 12px; color: var(--success-color, #4caf50);\n          background: rgba(76,175,80,0.1); border-radius: 6px; padding: 8px;\n        }\n        .cgc-wizard-error {\n          font-size: 12px; color: var(--error-color, #f44336);\n          background: rgba(244,67,54,0.1); border-radius: 6px; padding: 8px;\n        }\n        .cgc-inline-warn {\n          font-size: 11.5px; color: var(--ed-warning, rgba(245,158,11,0.95));\n          background: var(--ed-warning-bg); border: 1px solid var(--ed-warning-border);\n          border-radius: 6px; padding: 6px 8px; margin-top: 6px;\n          display: flex; align-items: flex-start; gap: 6px;\n        }\n        .cgc-inline-warn .cgc-svg-icon { flex-shrink: 0; margin-top: 1px; }\n      </style>\n\n      <div class="wrap v2" style="${Y}">\n\n        <div class="tabs">\n          <div class="tabbar">\n            ${U("source","Source","mdi:database-outline")}\n            ${U("gallery","Gallery","mdi:image-outline")}\n            ${U("live","Live","mdi:video-outline")}\n            ${U("thumbs","Thumbnails","mdi:view-grid-outline")}\n            ${U("styling","Styling","mdi:palette-outline")}\n            ${U("advanced","Advanced","mdi:tune-vertical")}\n          </div>\n\n          ${ne()}\n\n        </div>\n      </div>\n\n      <div id="cgc-browser-slot">${W}</div>\n    `,this.shadowRoot.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>this._setActiveTab(e.dataset.tab))}),this._editorRendered=!0;this._evtCtrl&&this._evtCtrl.abort(),this._evtCtrl=new AbortController;const se={signal:this._evtCtrl.signal};this.shadowRoot.querySelectorAll("details[data-v2-section]").forEach(e=>{e.addEventListener("toggle",()=>{const t=e.getAttribute("data-v2-section");if(t){this._v2OpenSections.set(`${this._activeTab}.${t}`,e.hasAttribute("open"));try{localStorage.setItem("cgc_v2_open_sections",JSON.stringify(Object.fromEntries(this._v2OpenSections)))}catch(e){}}},se)}),this.shadowRoot.querySelectorAll("[data-v2-expand]").forEach(e=>{const t=e.closest(".tabpanel"),i=t?t.querySelectorAll("details.style-section"):[];if(!i.length)return;(()=>{const t=Array.from(i).every(e=>e.hasAttribute("open"));e.textContent=t?"Collapse all":"Expand all"})(),e.addEventListener("click",()=>{const t=Array.from(i).every(e=>e.hasAttribute("open")),n=!t;i.forEach(e=>{n?e.setAttribute("open",""):e.removeAttribute("open")}),e.textContent=n?"Collapse all":"Expand all"},se)});const re=e=>this.shadowRoot.getElementById(e),oe=re("add-filter-btn"),ae=re("new-filter-name"),le=re("new-filter-icon"),ce=()=>{const e=ae?.value.trim().toLowerCase(),t=le?.value.trim()||"mdi:magnify";if(!e)return;const i=this._normalizeObjectFilters(this._config.object_filters||[]),n={[e]:t};this._set("object_filters",[...i,n]),ae&&(ae.value=""),le&&(le.value="")};oe?.addEventListener("click",ce,se),ae?.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),ce())}),this.shadowRoot.querySelectorAll("[data-remove-index]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.removeIndex,i=this._normalizeObjectFilters(this._config.object_filters||[]).filter(e=>"string"==typeof e?e!==t:Object.keys(e)[0]!==t);this._set("object_filters",i)})}),this.shadowRoot.querySelectorAll("[data-filtercolor]").forEach(e=>{e.addEventListener("click",e=>e.stopPropagation(),se),e.addEventListener("change",t=>{t.stopPropagation();const i=e.dataset.filtercolor,n={...this._config.object_colors||{},[i]:t.target.value};this._set("object_colors",n)})});const de=re("entities"),he=re("mediasources"),pe=re("pathfmt"),ue=re("delservice"),me=re("thumb"),ge=re("maxmedia"),fe=re("thumbpct"),ve=re("thumbpctval"),_e=re("autoplay"),be=re("auto_muted"),ye=re("live_auto_muted");this._setControlValue(de,c),this._setControlValue(he,p),this._setControlValue(pe,m),this._setControlValue(me,String(_)),this._setControlValue(ge,String(b)),this._setControlValue(fe,F),_e&&(_e.checked=H),be&&(be.checked=D),ye&&(ye.checked=R),ue&&(ue.value=M),this._applyFieldValidation("entities"),this._applyFieldValidation("mediasources"),this._bindColorControls(se),this._bindWizardEvents(se),this.shadowRoot.querySelectorAll("[data-src]").forEach(e=>{e.addEventListener("click",()=>{this._set("source_mode",e.dataset.src)})});const we=re("browse-media-folders");we?.addEventListener("click",async()=>{await this._openMediaBrowser("")});const xe=re("clear-media-folders");xe?.addEventListener("click",()=>{const e=re("mediasources");e&&(e.value="");const t={...this._config};delete t.media_sources,delete t.media_source,this._config=this._stripAlwaysTrueKeys(t),this._fire(),this._applyFieldValidation("mediasources"),this._scheduleRender()});const ke=(e,t)=>{const i=re(e);i&&(i.addEventListener("focus",()=>{this._updateSuggestions(e)}),i.addEventListener("input",()=>{t(!1),this._applyFieldValidation(e),this._updateSuggestions(e)}),i.addEventListener("change",()=>{t(!0),this._applyFieldValidation(e),this._closeSuggestions(e)}),i.addEventListener("blur",()=>{setTimeout(()=>{const i=this.shadowRoot?.activeElement,n=this.shadowRoot?.getElementById(`${e}-suggestions`);i&&n&&n.contains(i)||(t(!0),this._applyFieldValidation(e),this._closeSuggestions(e))},120)}),i.addEventListener("keydown",t=>{const i=this._suggestState[e];return i?.open&&"ArrowDown"===t.key?(t.preventDefault(),void this._moveSuggestion(e,1)):i?.open&&"ArrowUp"===t.key?(t.preventDefault(),void this._moveSuggestion(e,-1)):i?.open&&"Tab"===t.key&&this._acceptSuggestion(e)?void t.preventDefault():i?.open&&"Escape"===t.key?(t.preventDefault(),void this._closeSuggestions(e)):void 0}))};ke("entities",this._commitEntities.bind(this)),ke("mediasources",this._commitMediaSources.bind(this)),this.shadowRoot.querySelectorAll("[data-objchip]").forEach(e=>{e.addEventListener("click",()=>{this._toggleObjectFilter(e.dataset.objchip)})});ue?.addEventListener("change",()=>{const e=String(ue?.value||"").trim();if(!e){const e={...this._config};return delete e.delete_service,delete e.preview_close_on_tap,this._config=this._stripAlwaysTrueKeys(e),this._fire(),void this._scheduleRender()}this._set("delete_service",e)},se);const Se=re("frigate-delservice");Se?.addEventListener("change",()=>{const e=String(Se?.value||"").trim();if(!e){const e={...this._config};return delete e.frigate_delete_service,this._config=this._stripAlwaysTrueKeys(e),this._fire(),void this._scheduleRender()}this._set("frigate_delete_service",e)},se);const $e=(e,t,i,n=!1)=>{const s=String(t?.value??"").trim();if(""===s)return void(n?this._set(e,i):this._config=this._stripAlwaysTrueKeys({...this._config,[e]:i}));const r=Number(s),o=Number.isFinite(r)?r:i;n?this._set(e,o):this._config=this._stripAlwaysTrueKeys({...this._config,[e]:o})},Ce=(e=!1)=>{const t=String(pe?.value??"").trim(),i={...this._config};t?i.path_datetime_format=t:delete i.path_datetime_format,this._config=this._stripAlwaysTrueKeys(i),e&&(this._fire(),this._scheduleRender())};pe?.addEventListener("input",()=>Ce(!1),se),pe?.addEventListener("change",()=>Ce(!0),se),pe?.addEventListener("blur",()=>Ce(!0),se);const Ae=re("detect-pathfmt");Ae?.addEventListener("click",()=>{this._detectKey="",this._runFormatDetection()},se),this.shadowRoot.querySelectorAll(".pathfmt-row[data-pathfmt]").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-pathfmt")||"";pe&&t&&(pe.value=t,Ce(!0))},se)}),this._hass&&!this._detectInFlight&&this._formatDetectKey()&&this._formatDetectKey()!==this._detectKey&&this._runFormatDetection(),this.shadowRoot.querySelectorAll(".seg[data-objfit]").forEach(e=>{e.addEventListener("click",()=>{this._set("object_fit",e.dataset.objfit),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),this.shadowRoot.querySelectorAll(".seg[data-ppos]").forEach(e=>{e.addEventListener("click",()=>{this._set("preview_position",e.dataset.ppos),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),this.shadowRoot.querySelectorAll(".seg[data-startmode]").forEach(e=>{e.addEventListener("click",()=>{this._set("start_mode",e.dataset.startmode),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),me?.addEventListener("input",()=>$e("thumb_size",me,140,!1)),me?.addEventListener("change",()=>$e("thumb_size",me,140,!0)),me?.addEventListener("blur",()=>$e("thumb_size",me,140,!0));const Le=(e=!1)=>{const t=String(ge?.value??"").trim();if(""===t)return void(e?this._set("max_media",1):this._config=this._stripAlwaysTrueKeys({...this._config,max_media:1}));const i=this._numInt(t,1),n=this._clampInt(i,1,500);e?this._set("max_media",n):this._config=this._stripAlwaysTrueKeys({...this._config,max_media:n})};ge?.addEventListener("input",()=>Le(!1),se),ge?.addEventListener("change",()=>Le(!0),se),ge?.addEventListener("blur",()=>Le(!0),se),this.shadowRoot.querySelectorAll(".seg[data-tbpos]").forEach(e=>{e.addEventListener("click",()=>{this._set("thumb_bar_position",e.dataset.tbpos),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),this.shadowRoot.querySelectorAll(".seg[data-tlayout]").forEach(e=>{e.addEventListener("click",()=>{this._set("thumb_layout",e.dataset.tlayout),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),this.shadowRoot.querySelectorAll(".seg[data-tsort]").forEach(e=>{e.addEventListener("click",()=>{this._set("thumb_sort_order",e.dataset.tsort),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),re("cleanmode")?.addEventListener("change",e=>{this._set("clean_mode",!!e.target.checked)}),re("capture-video-thumbnails")?.addEventListener("change",e=>{this._set("capture_video_thumbnails",!!e.target.checked)}),re("frigate-thumb-bbox")?.addEventListener("change",e=>{this._set("frigate_thumb_bbox",!!e.target.checked)}),re("frigate-event-cluster")?.addEventListener("change",e=>{this._set("frigate_event_cluster",!!e.target.checked)}),re("frigate-event-cluster-gap-sec")?.addEventListener("change",e=>{const t=Number(e.target.value),i=Number.isFinite(t)?Math.min(600,Math.max(1,Math.round(t))):30;e.target.value=i,this._set("frigate_event_cluster_gap_sec",i)}),re("persistentcontrols")?.addEventListener("change",e=>{this._set("persistent_controls",!!e.target.checked)}),this.shadowRoot.querySelectorAll(".seg[data-ctrlmode]").forEach(e=>{e.addEventListener("click",()=>{this._set("controls_mode",e.dataset.ctrlmode),e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})}),re("showcameratitle")?.addEventListener("change",e=>{const t=!!e.target.checked,i={...this._config??{}};t?(delete i.show_camera_title,delete i.live_grid_labels):(i.show_camera_title=!1,i.live_grid_labels=!1),this._config=this._stripAlwaysTrueKeys(i),this._fire(),this._scheduleRender()}),re("livechevrons")?.addEventListener("change",e=>{this._set("live_chevrons_enabled",!!e.target.checked&&void 0)}),re("gallerychevrons")?.addEventListener("change",e=>{this._set("gallery_chevrons_enabled",!!e.target.checked&&void 0)}),this.shadowRoot.querySelectorAll("[id^='toolbar-enable-']").forEach(e=>{e.addEventListener("change",t=>{const i=e.id.replace("toolbar-enable-","");this._setToolbarButtonEnabled(i,!!t.target.checked)})}),this.shadowRoot.querySelectorAll("[id^='pill-enable-']").forEach(e=>{e.addEventListener("change",t=>{const i=e.id.replace("pill-enable-","");this._setGalleryPillEnabled(i,!!t.target.checked)})}),this.shadowRoot.querySelectorAll("[id^='live-pill-enable-']").forEach(e=>{e.addEventListener("change",t=>{const i=e.id.replace("live-pill-enable-","");this._setLivePillEnabled(i,!!t.target.checked)})}),this.shadowRoot.querySelectorAll("[data-pillsalign]").forEach(e=>{e.addEventListener("click",()=>{if(e.disabled)return;const t=e.dataset.pillsalign;if("center"===t){const e={...this._config};delete e.gallery_pills_align,this._config=this._stripAlwaysTrueKeys(e),this._fire(),this._scheduleRender()}else"left"!==t&&"right"!==t||this._set("gallery_pills_align",t)})}),this.shadowRoot.querySelectorAll("[data-pillsbarpos]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.pillsbarpos;if("top"===t){const e={...this._config};delete e.bar_position,this._config=this._stripAlwaysTrueKeys(e),this._fire(),this._scheduleRender()}else"bottom"!==t&&"hidden"!==t||this._set("bar_position",t)})});const Me=this.shadowRoot.getElementById("pills-dnd-list");if(Me){let e=null;const t=()=>Me.querySelectorAll(".pill-dnd-over").forEach(e=>e.classList.remove("pill-dnd-over")),i=t=>{e&&e!==t&&this._reorderGalleryPillTo(e,t)};Me.querySelectorAll(".pill-dnd-row").forEach(n=>{const s=n.dataset.pillRow;n.addEventListener("dragstart",t=>{e=s,n.classList.add("pill-dnd-dragging"),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}),n.addEventListener("dragend",()=>{n.classList.remove("pill-dnd-dragging"),t(),e=null}),n.addEventListener("dragover",i=>{i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="move"),s!==e&&(t(),n.classList.add("pill-dnd-over"))}),n.addEventListener("dragleave",()=>n.classList.remove("pill-dnd-over")),n.addEventListener("drop",e=>{e.preventDefault(),t(),i(s)});const r=n.querySelector(".pill-drag-grip");r&&(r.addEventListener("touchstart",t=>{t.preventDefault(),e=s,n.classList.add("pill-dnd-dragging")},{passive:!1}),r.addEventListener("touchmove",i=>{i.preventDefault();const n=i.touches[0],s=this.shadowRoot.elementFromPoint?this.shadowRoot.elementFromPoint(n.clientX,n.clientY):document.elementFromPoint(n.clientX,n.clientY),r=s?.closest?.(".pill-dnd-row");t(),r&&r.dataset.pillRow!==e&&r.classList.add("pill-dnd-over")},{passive:!1}),r.addEventListener("touchend",s=>{s.preventDefault(),n.classList.remove("pill-dnd-dragging");const r=Me.querySelector(".pill-dnd-over"),o=r?.dataset?.pillRow;t(),o&&i(o),e=null},{passive:!1}))})}const Pe=this.shadowRoot.getElementById("toolbar-dnd-list");if(Pe){let e=null;const t=()=>Pe.querySelectorAll(".pill-dnd-over").forEach(e=>e.classList.remove("pill-dnd-over")),i=t=>{e&&e!==t&&this._reorderToolbarButtonTo(e,t)};Pe.querySelectorAll(".pill-dnd-row").forEach(n=>{const s=n.dataset.toolbarRow;n.addEventListener("dragstart",t=>{e=s,n.classList.add("pill-dnd-dragging"),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}),n.addEventListener("dragend",()=>{n.classList.remove("pill-dnd-dragging"),t(),e=null}),n.addEventListener("dragover",i=>{i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="move"),s!==e&&(t(),n.classList.add("pill-dnd-over"))}),n.addEventListener("dragleave",()=>n.classList.remove("pill-dnd-over")),n.addEventListener("drop",e=>{e.preventDefault(),t(),i(s)});const r=n.querySelector(".pill-drag-grip");r&&(r.addEventListener("touchstart",t=>{t.preventDefault(),e=s,n.classList.add("pill-dnd-dragging")},{passive:!1}),r.addEventListener("touchmove",i=>{i.preventDefault();const n=i.touches[0],s=this.shadowRoot.elementFromPoint?this.shadowRoot.elementFromPoint(n.clientX,n.clientY):document.elementFromPoint(n.clientX,n.clientY),r=s?.closest?.(".pill-dnd-row");t(),r&&r.dataset.toolbarRow!==e&&r.classList.add("pill-dnd-over")},{passive:!1}),r.addEventListener("touchend",s=>{s.preventDefault(),n.classList.remove("pill-dnd-dragging");const r=Pe.querySelector(".pill-dnd-over"),o=r?.dataset?.toolbarRow;t(),o&&i(o),e=null},{passive:!1}))})}const Te=this.shadowRoot.getElementById("live-pills-dnd-list");if(Te){let e=null;const t=()=>Te.querySelectorAll(".pill-dnd-over").forEach(e=>e.classList.remove("pill-dnd-over")),i=t=>{e&&e!==t&&this._reorderLivePillTo(e,t)};Te.querySelectorAll(".pill-dnd-row").forEach(n=>{const s=n.dataset.livePillRow;n.addEventListener("dragstart",t=>{e=s,n.classList.add("pill-dnd-dragging"),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}),n.addEventListener("dragend",()=>{n.classList.remove("pill-dnd-dragging"),t(),e=null}),n.addEventListener("dragover",i=>{i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="move"),s!==e&&(t(),n.classList.add("pill-dnd-over"))}),n.addEventListener("dragleave",()=>n.classList.remove("pill-dnd-over")),n.addEventListener("drop",e=>{e.preventDefault(),t(),i(s)});const r=n.querySelector(".pill-drag-grip");r&&(r.addEventListener("touchstart",t=>{t.preventDefault(),e=s,n.classList.add("pill-dnd-dragging")},{passive:!1}),r.addEventListener("touchmove",i=>{i.preventDefault();const n=i.touches[0],s=this.shadowRoot.elementFromPoint?this.shadowRoot.elementFromPoint(n.clientX,n.clientY):document.elementFromPoint(n.clientX,n.clientY),r=s?.closest?.(".pill-dnd-row");t(),r&&r.dataset.livePillRow!==e&&r.classList.add("pill-dnd-over")},{passive:!1}),r.addEventListener("touchend",s=>{s.preventDefault(),n.classList.remove("pill-dnd-dragging");const r=Te.querySelector(".pill-dnd-over"),o=r?.dataset?.livePillRow;t(),o&&i(o),e=null},{passive:!1}))})}_e?.addEventListener("change",e=>{this._set("autoplay",!!e.target.checked)}),be?.addEventListener("change",e=>{this._set("auto_muted",!!e.target.checked)}),ye?.addEventListener("change",e=>{this._set("live_auto_muted",!!e.target.checked)});const ze=re("stream-urls-list"),Ee=re("stream-url-add"),Ie=()=>(ze?Array.from(ze.querySelectorAll(".stream-url-row")):[]).map(e=>{const t=e.dataset.si;return{url:String(ze.querySelector(`.stream-url-input[data-si="${t}"]`)?.value||"").trim(),name:String(ze.querySelector(`.stream-name-input[data-si="${t}"]`)?.value||"").trim()||null}}).filter(e=>e.url),Fe=()=>{const e=Ie(),t={...this._config};delete t.live_stream_url,delete t.live_stream_name,e.length>0?t.live_stream_urls=e:delete t.live_stream_urls,this._config=this._stripAlwaysTrueKeys(t),this._fire()},He=(e="",t="")=>{if(!ze)return;const i=ze.querySelectorAll(".stream-url-row").length,n=document.createElement("div");n.className="stream-url-row",n.dataset.si=i,n.style.cssText="display:flex;flex-direction:column;gap:4px;padding:8px 0 8px 0;border-bottom:1px solid var(--divider-color,#e0e0e0);",n.innerHTML=`\n        <div style="display:flex;gap:6px;align-items:center;">\n          <input type="text" class="ed-input stream-url-input" data-si="${i}" placeholder="rtsp://192.168.1.x:554/stream" autocomplete="off" value="${e.replace(/"/g,"&quot;")}" style="flex:1;" />\n          <button type="button" class="livecam-tag-del stream-url-del" data-si="${i}" style="flex-shrink:0;">×</button>\n        </div>\n        <input type="text" class="ed-input stream-name-input" data-si="${i}" placeholder="Name (e.g. Front door)" autocomplete="off" value="${t.replace(/"/g,"&quot;")}" />\n      `,n.querySelector(".stream-url-del").addEventListener("click",()=>{n.remove(),Fe(),this._scheduleRender()}),n.querySelector(".stream-url-input").addEventListener("change",Fe,se),n.querySelector(".stream-name-input").addEventListener("change",Fe,se),ze.appendChild(n)};ze&&(ze.querySelectorAll(".stream-url-del").forEach(e=>{e.addEventListener("click",()=>{e.closest(".stream-url-row").remove(),Fe(),this._scheduleRender()})}),ze.querySelectorAll(".stream-url-input, .stream-name-input").forEach(e=>{e.addEventListener("change",Fe,se)})),Ee?.addEventListener("click",()=>{He()}),re("live_go2rtc_url")?.addEventListener("change",e=>{const t=String(e.target.value||"").trim();if(t)this._set("live_go2rtc_url",t);else{const e={...this._config};delete e.live_go2rtc_url,this._config=this._stripAlwaysTrueKeys(e),this._fire()}}),this.shadowRoot.querySelectorAll("[data-livemicmode]").forEach(e=>{e.addEventListener("click",()=>{if("ptt"===e.dataset.livemicmode)this._set("live_mic_mode","ptt");else{const e={...this._config};delete e.live_mic_mode,this._config=this._stripAlwaysTrueKeys(e),this._fire()}this._scheduleRender()})});const De=(e,t)=>{const i={...this._config},n={...i.live_mic_audio_processing||{}};!0===t?delete n[e]:n[e]=!1,0===Object.keys(n).length?delete i.live_mic_audio_processing:i.live_mic_audio_processing=n,this._config=this._stripAlwaysTrueKeys(i),this._fire()};re("live-mic-ec")?.addEventListener("change",e=>De("echo_cancellation",!!e.target.checked)),re("live-mic-ns")?.addEventListener("change",e=>De("noise_suppression",!!e.target.checked)),re("live-mic-agc")?.addEventListener("change",e=>De("auto_gain_control",!!e.target.checked)),re("live-mic-wf-enabled")?.addEventListener("change",e=>{this._set("live_mic_waveform_enabled",!!e.target.checked)}),this.shadowRoot.querySelectorAll("[data-wfsens]").forEach(e=>{e.addEventListener("click",()=>{this._set("live_mic_waveform_sensitivity",e.dataset.wfsens)})});const Re=(e,t)=>{const i={...this._config},n=i.live_ptz_cameras&&"object"==typeof i.live_ptz_cameras?{...i.live_ptz_cameras}:{},s=t(n[e]?{...n[e]}:null);null==s?delete n[e]:n[e]=s,Object.keys(n).length>0?i.live_ptz_cameras=n:delete i.live_ptz_cameras,this._config=this._stripAlwaysTrueKeys(i),this._fire(),this._scheduleRender()};re("ptz-show-all")?.addEventListener("change",e=>{this._ptzShowAll=!!e.target.checked,this._scheduleRender()}),re("live_ptz_position")?.addEventListener("change",e=>{const t=String(e.target.value||"bottom-left");this._set("live_ptz_position",t)}),re("live_ptz_enabled")?.addEventListener("change",e=>{if(!!e.target.checked)this._set("live_ptz_enabled",!0);else{const e={...this._config};delete e.live_ptz_enabled,this._config=this._stripAlwaysTrueKeys(e),this._fire()}this._scheduleRender()}),this.shadowRoot.querySelectorAll(".ptz-cam-enable").forEach(e=>{e.addEventListener("change",t=>{const i=e.dataset.ptzCam;if(!i)return;const n=!!t.target.checked,s=n&&this._hass?So(i,{states:this._hass.states,services:this._hass.services}):null;Re(i,()=>n?{type:s??"ezviz"}:null)})}),this.shadowRoot.querySelectorAll(".ptz-cam-type").forEach(e=>{e.addEventListener("change",t=>{const i=e.dataset.ptzCam;if(!i)return;const n=String(t.target.value||"ezviz");Re(i,e=>({...e||{presets:[]},type:n}))})});const je=(e,t)=>{const i={...e||{type:"ezviz"}},n={...i.buttons&&"object"==typeof i.buttons?i.buttons:{},...t};for(const e of Object.keys(n))"string"!=typeof n[e]||""===n[e].trim()?delete n[e]:n[e]=n[e].trim();return Object.keys(n).length>0?i.buttons=n:delete i.buttons,i};this.shadowRoot.querySelectorAll(".ptz-cam-button").forEach(e=>{e.addEventListener("change",t=>{const i=e.dataset.ptzCam,n=e.dataset.ptzKey;i&&n&&Re(i,e=>je(e,{[n]:String(t.target.value||"")}))})}),this.shadowRoot.querySelectorAll(".ptz-detect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.ptzCam;if(!t||!this._hass)return;const i=Ao(t,{states:this._hass.states});Re(t,e=>je(e,i))})}),re("frigate_url")?.addEventListener("change",e=>{const t=String(e.target.value||"").trim().replace(/\/+$/,"");if(t)this._set("frigate_url",t);else{const e={...this._config};delete e.frigate_url,this._config=this._stripAlwaysTrueKeys(e),this._fire()}}),re("debug-enabled")?.addEventListener("change",e=>{if(!!e.target.checked)this._set("debug_enabled",!0);else{const e={...this._config};delete e.debug_enabled,this._config=this._stripAlwaysTrueKeys(e),this._fire()}}),re("yaml-export-btn")?.addEventListener("click",()=>this._exportYamlConfig()),re("liveenabled")?.addEventListener("change",e=>{if(!!e.target.checked)return void this._set("live_enabled",!0);const t={...this._config};delete t.live_default,delete t.live_enabled,delete t.live_provider,this._config=this._stripAlwaysTrueKeys(t),this._fire(),this._scheduleRender()}),this.shadowRoot.querySelectorAll(".seg[data-livelayout]").forEach(e=>{e.addEventListener("click",()=>{const t="grid"===e.dataset.livelayout?"grid":"single";if("single"===t){const e={...this._config};delete e.live_layout,this._config=this._stripAlwaysTrueKeys(e),this._fire()}else this._set("live_layout",t);e.closest(".segwrap")?.querySelectorAll(".seg").forEach(t=>t.classList.toggle("on",t===e))})});const Oe=re("livecam-input"),Ve=re("livecam-suggestions");if(Oe&&Ve){const e=e=>{if(!e.length)return Ve.hidden=!0,void(Ve.innerHTML="");Ve.hidden=!1,Ve.innerHTML=`\n          <div class="sugg-label">Cameras</div>\n          ${e.map(e=>`<button type="button" class="sugg-item" data-addcam="${e}">${String(this._hass?.states?.[e]?.attributes?.friendly_name||e).trim()}<span style="opacity:0.45;font-weight:500;margin-left:6px;">${e}</span></button>`).join("")}\n        `,Ve.querySelectorAll("[data-addcam]").forEach(e=>{e.addEventListener("mousedown",i=>{i.preventDefault(),t(e.dataset.addcam)})})},t=e=>{if(!e)return;const t=Array.isArray(this._config.live_cameras)?this._config.live_cameras:null;if(t&&t.length>0){if(!t.some(t=>t&&"string"==typeof t.entity&&t.entity.trim()===e)){const i={...this._config,live_cameras:[...t,{entity:e,name:""}]};this._config=this._stripAlwaysTrueKeys(i),this._fire()}}else{const t=Array.isArray(this._config.live_camera_entities)?[...this._config.live_camera_entities]:[];t.includes(e)||(t.push(e),this._set("live_camera_entities",t))}Oe.value="",Ve.hidden=!0,Ve.innerHTML="",this._scheduleRender()},i=()=>{const e=Oe.value.trim().toLowerCase(),t=Array.isArray(this._config.live_cameras)?this._config.live_cameras:null,i=t&&t.length>0?t.map(e=>e&&"string"==typeof e.entity?e.entity.trim():"").filter(Boolean):Array.isArray(this._config.live_camera_entities)?this._config.live_camera_entities:[];return B.filter(t=>{if(i.includes(t))return!1;if(!e)return!0;return String(this._hass?.states?.[t]?.attributes?.friendly_name||t).toLowerCase().includes(e)||t.includes(e)})};Oe.addEventListener("focus",()=>e(i()),se),Oe.addEventListener("input",()=>e(i()),se),Oe.addEventListener("keydown",e=>{if("Enter"===e.key){e.preventDefault();const i=Ve.querySelector("[data-addcam]");i&&t(i.dataset.addcam)}else"Escape"===e.key&&(Ve.hidden=!0)}),Oe.addEventListener("blur",()=>{setTimeout(()=>{Ve.hidden=!0},150)})}this.shadowRoot.querySelectorAll("[data-livecam-toggle]").forEach(e=>{e.addEventListener("click",t=>{if(t.target.closest("input, button, .livecam-rowgrip"))return;const i=e.dataset.livecamToggle;this._livecamRowOpen||(this._livecamRowOpen=new Set),this._livecamRowOpen.has(i)?this._livecamRowOpen.delete(i):this._livecamRowOpen.add(i),e.parentElement?.classList.toggle("open")})}),this.shadowRoot.querySelectorAll("[data-mic-cam]").forEach(e=>{e.addEventListener("change",e=>{const t=e.target.dataset.micCam,i=String(e.target.value||"").trim(),n=Array.isArray(this._config.live_cameras)?[...this._config.live_cameras]:[];let s=n.findIndex(e=>e&&e.entity===t);s<0&&(n.push({entity:t}),s=n.length-1);const r={...n[s]};i?r.mic=i:delete r.mic,n[s]=r;const o={...this._config,live_cameras:n};this._config=this._stripAlwaysTrueKeys(o),this._fire();const a=e.target.closest(".livecam-row"),l=a?.querySelector(".livecam-rowmic");l&&(l.textContent=i||"no mic",l.classList.toggle("none",!i))})}),this._wireLivecamCropInline(),this.shadowRoot.querySelectorAll("[data-delcam]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.delcam;this._livecamCropAspect?.delete(t),this._livecamCropDetectedAR?.delete(t),this._livecamCropOpen?.delete(t);const i=Array.isArray(this._config.live_cameras)?this._config.live_cameras:null;if(i&&i.length>0){const e=i.filter(e=>!(e&&"string"==typeof e.entity&&e.entity.trim()===t)),n={...this._config};return 0===e.length?delete n.live_cameras:n.live_cameras=e,this._config=this._stripAlwaysTrueKeys(n),this._fire(),void this._scheduleRender()}const n=Array.isArray(this._config.live_camera_entities)?[...this._config.live_camera_entities]:[],s=n.indexOf(t);if(s>=0&&n.splice(s,1),0===n.length){const e={...this._config};delete e.live_camera_entities,this._config=e,this._fire()}else this._set("live_camera_entities",n);this._scheduleRender()})});const qe=["mdi:lightbulb","mdi:lightbulb-outline","mdi:lightbulb-off","mdi:lightbulb-on","mdi:lamp","mdi:ceiling-light","mdi:floor-lamp","mdi:led-strip","mdi:string-lights","mdi:lock","mdi:lock-open","mdi:lock-outline","mdi:lock-open-outline","mdi:lock-smart","mdi:shield-home","mdi:shield","mdi:door-open","mdi:door-closed","mdi:window-open","mdi:window-closed","mdi:garage","mdi:garage-open","mdi:gate","mdi:gate-open","mdi:thermostat","mdi:thermometer","mdi:fan","mdi:fan-off","mdi:air-conditioner","mdi:radiator","mdi:snowflake","mdi:heat-wave","mdi:home","mdi:home-outline","mdi:home-away","mdi:sleep","mdi:run","mdi:power","mdi:power-off","mdi:toggle-switch","mdi:toggle-switch-off","mdi:electric-switch","mdi:outlet","mdi:television","mdi:television-off","mdi:play","mdi:pause","mdi:stop","mdi:volume-high","mdi:volume-off","mdi:music","mdi:speaker","mdi:camera","mdi:cctv","mdi:motion-sensor","mdi:motion-sensor-off","mdi:smoke-detector","mdi:bell","mdi:bell-off","mdi:alert","mdi:robot-vacuum","mdi:washing-machine","mdi:dishwasher","mdi:coffee","mdi:car","mdi:car-connected","mdi:ev-station","mdi:water","mdi:water-off","mdi:pool","mdi:sprinkler","mdi:blinds","mdi:blinds-open","mdi:curtains","mdi:curtains-closed","mdi:ceiling-fan","mdi:ceiling-fan-light","mdi:battery","mdi:battery-charging","mdi:wifi","mdi:bluetooth","mdi:account","mdi:account-outline","mdi:account-group","mdi:star","mdi:heart","mdi:check","mdi:close","mdi:plus","mdi:minus","mdi:pencil","mdi:delete","mdi:refresh","mdi:eye","mdi:eye-off","mdi:flash","mdi:flash-off","mdi:weather-sunny","mdi:weather-night","mdi:weather-cloudy","mdi:chart-line","mdi:information","mdi:cog","mdi:tools"],Ne=(e,t,i)=>{if(!e||!t)return;const n=e=>{const t=(e||"").toLowerCase().replace(/^mdi:/,""),i=qe;return t?i.filter(e=>e.replace("mdi:","").includes(t)).slice(0,30):i.slice(0,30)},s=e=>{if(!e.length)return t.hidden=!0,void(t.innerHTML="");t.hidden=!1,t.innerHTML=e.map(e=>`<button type="button" class="sugg-item" data-pick-icon="${e}" style="display:flex;align-items:center;gap:8px;"><ha-icon icon="${e}" style="--mdc-icon-size:18px;flex-shrink:0;"></ha-icon><span>${e.replace("mdi:","")}</span></button>`).join(""),t.querySelectorAll("[data-pick-icon]").forEach(e=>{e.addEventListener("mousedown",t=>{t.preventDefault(),i(e.dataset.pickIcon)},se)})};e.addEventListener("focus",()=>s(n(e.value)),se),e.addEventListener("input",()=>s(n(e.value)),se),e.addEventListener("keydown",e=>{if("Enter"===e.key){e.preventDefault();const n=t.querySelector("[data-pick-icon]");n&&i(n.dataset.pickIcon)}else"Escape"===e.key&&(t.hidden=!0)}),e.addEventListener("blur",()=>{setTimeout(()=>{t.hidden=!0},150)},se)};this.shadowRoot.querySelectorAll("[data-delmenubutton]").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.dataset.delmenubutton),i=Array.isArray(this._config.menu_buttons)?[...this._config.menu_buttons]:[];i.splice(t,1),this._set("menu_buttons",i),this._scheduleRender()})});const Be=Object.keys(this._hass?.states||{}).sort(),Ye=e=>{const t=e.toLowerCase();return Be.filter(e=>{const i=String(this._hass?.states?.[e]?.attributes?.friendly_name||"").toLowerCase();return!t||e.includes(t)||i.includes(t)}).slice(0,30)},Ue=(e,t,i)=>{if(!e||!t)return;const n=e=>{if(!e.length)return t.hidden=!0,void(t.innerHTML="");t.hidden=!1,t.innerHTML=e.map(e=>`<button type="button" class="sugg-item" data-pick-entity="${e}">${String(this._hass?.states?.[e]?.attributes?.friendly_name||e).trim()}<span style="opacity:0.45;font-weight:500;margin-left:6px;">${e}</span></button>`).join(""),t.querySelectorAll("[data-pick-entity]").forEach(e=>{e.addEventListener("mousedown",t=>{t.preventDefault(),i(e.dataset.pickEntity)},se)})};e.addEventListener("focus",()=>n(Ye(e.value)),se),e.addEventListener("input",()=>n(Ye(e.value)),se),e.addEventListener("keydown",e=>{if("Enter"===e.key){e.preventDefault();const n=t.querySelector("[data-pick-entity]");n&&i(n.dataset.pickEntity)}else"Escape"===e.key&&(t.hidden=!0)}),e.addEventListener("blur",()=>{setTimeout(()=>{t.hidden=!0},150)},se)};this.shadowRoot.querySelectorAll("input[data-menubtn-entity]").forEach(e=>{const t=Number(e.dataset.menubtnEntity),i=this.shadowRoot.querySelector(`[data-menubtn-entity-sugg="${t}"]`);Ue(e,i,n=>{e.value=n,i.hidden=!0;const s=Array.isArray(this._config.menu_buttons)?[...this._config.menu_buttons]:[];s[t]&&(s[t]={...s[t],entity:n},this._set("menu_buttons",s))})}),this.shadowRoot.querySelectorAll("input[data-menubtn][data-mbfield='icon']").forEach(e=>{const t=Number(e.dataset.menubtn),i=this.shadowRoot.querySelector(`[data-menubtn-icon-sugg="${t}"]`);Ne(e,i,n=>{e.value=n,i&&(i.hidden=!0);const s=Array.isArray(this._config.menu_buttons)?[...this._config.menu_buttons]:[];s[t]&&(s[t]={...s[t],icon:n},this._set("menu_buttons",s))})}),this.shadowRoot.querySelectorAll("input[data-menubtn][data-mbfield='icon_on']").forEach(e=>{const t=Number(e.dataset.menubtn),i=this.shadowRoot.querySelector(`[data-menubtn-iconon-sugg="${t}"]`);Ne(e,i,n=>{e.value=n,i&&(i.hidden=!0);const s=Array.isArray(this._config.menu_buttons)?[...this._config.menu_buttons]:[];s[t]&&(s[t]={...s[t],icon_on:n},this._set("menu_buttons",s))})}),this.shadowRoot.querySelectorAll("input[data-menubtn][data-mbfield]").forEach(e=>{"icon"!==e.dataset.mbfield&&"icon_on"!==e.dataset.mbfield&&e.addEventListener("change",()=>{const t=Number(e.dataset.menubtn),i=e.dataset.mbfield,n=Array.isArray(this._config.menu_buttons)?[...this._config.menu_buttons]:[];if(!n[t])return;const s={...n[t]},r=e.value.trim();r?s[i]=r:delete s[i],n[t]=s,this._set("menu_buttons",n)})});const We=re("menubtn-entity-input"),Ke=re("menubtn-entity-sugg"),Ze=re("menubtn-icon-input"),Ge=re("menubtn-add-btn");Ue(We,Ke,e=>{We&&(We.value=e),Ke&&(Ke.hidden=!0)});const Xe=re("menubtn-icon-sugg");Ne(Ze,Xe,e=>{Ze&&(Ze.value=e),Xe&&(Xe.hidden=!0)}),Ge&&Ge.addEventListener("click",()=>{const e=(We?.value||"").trim(),t=(Ze?.value||"").trim();if(!e||!t)return;const i=Array.isArray(this._config.menu_buttons)?[...this._config.menu_buttons]:[];i.push({entity:e,icon:t}),this._set("menu_buttons",i),We&&(We.value=""),Ze&&(Ze.value=""),this._scheduleRender()});const Je=this.shadowRoot.getElementById("livecam-tags-dnd");if(Je){let e=null;const t=()=>Je.querySelectorAll(".dnd-over").forEach(e=>e.classList.remove("dnd-over")),i=t=>{if(!e||e===t)return;const i=Array.isArray(this._config.live_cameras)?this._config.live_cameras:null;if(i&&i.length>0){const n=[...i],s=e=>n.findIndex(t=>t&&"string"==typeof t.entity&&t.entity.trim()===e),r=s(e),o=s(t);if(r<0||o<0)return;const[a]=n.splice(r,1);n.splice(o,0,a);const l={...this._config,live_cameras:n};return this._config=this._stripAlwaysTrueKeys(l),this._fire(),void this._scheduleRender()}const n=Array.isArray(this._config.live_camera_entities)?[...this._config.live_camera_entities]:[],s=n.indexOf(e),r=n.indexOf(t);s<0||r<0||(n.splice(s,1),n.splice(r,0,e),this._set("live_camera_entities",n),this._scheduleRender())};Je.querySelectorAll("[data-dragcam]").forEach(n=>{n.addEventListener("dragstart",t=>{e=n.dataset.dragcam,n.classList.add("dnd-dragging"),t.dataTransfer.effectAllowed="move"}),n.addEventListener("dragend",()=>{n.classList.remove("dnd-dragging"),t(),e=null}),n.addEventListener("dragover",i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",n.dataset.dragcam!==e&&(t(),n.classList.add("dnd-over"))}),n.addEventListener("dragleave",()=>n.classList.remove("dnd-over"),se),n.addEventListener("drop",e=>{e.preventDefault(),t(),i(n.dataset.dragcam)});const s=n.querySelector(".livecam-rowgrip");s&&(s.addEventListener("touchstart",t=>{t.preventDefault(),e=n.dataset.dragcam,n.classList.add("dnd-dragging")},{passive:!1}),s.addEventListener("touchmove",i=>{i.preventDefault();const n=i.touches[0],s=this.shadowRoot.elementFromPoint?this.shadowRoot.elementFromPoint(n.clientX,n.clientY):document.elementFromPoint(n.clientX,n.clientY),r=s?.closest?.("[data-dragcam]");t(),r&&r.dataset.dragcam!==e&&r.classList.add("dnd-over")},{passive:!1}),s.addEventListener("touchend",s=>{s.preventDefault(),n.classList.remove("dnd-dragging");const r=Je.querySelector(".dnd-over"),o=r?.dataset?.dragcam;t(),o&&i(o),e=null},{passive:!1}))})}const Qe=e=>{ve&&(ve.textContent=`${e}%`)};fe?.addEventListener("input",e=>{Qe(Number(e.target.value))}),fe?.addEventListener("change",e=>{const t=Number(e.target.value);Qe(t),this._set("thumbnail_frame_pct",Number.isFinite(t)?Math.round(t):0)}),re("browser-backdrop")?.addEventListener("click",()=>{this._closeMediaBrowser()}),re("browser-close")?.addEventListener("click",()=>{this._closeMediaBrowser()}),re("browser-back")?.addEventListener("click",async()=>{await this._mediaBrowserGoBack()}),re("browser-select-current")?.addEventListener("click",()=>{this._mediaBrowserPath&&(this._appendMediaSourceValue(this._mediaBrowserPath),this._closeMediaBrowser())}),this.shadowRoot.querySelectorAll("[data-browser-open]").forEach(e=>{e.addEventListener("click",async()=>{const t=e.dataset.browserOpen||"";t&&await this._loadMediaBrowser(t,!0)})}),this.shadowRoot.querySelectorAll("[data-browser-select]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.browserSelect||"";t&&(this._appendMediaSourceValue(t),this._closeMediaBrowser())})});try{const e=this._focusState;if(e&&e.id){const t=re(e.id);t&&"function"==typeof t.focus&&(null!=e.value&&"string"==typeof t.value&&t.value!==e.value&&(t.value=e.value),t.focus({preventScroll:!0}),null!=e.start&&null!=e.end&&"function"==typeof t.setSelectionRange&&t.setSelectionRange(e.start,e.end))}}catch(e){}this._renderSuggestions("entities"),this._renderSuggestions("mediasources")}_renderSuggestions(e){const t=this.shadowRoot?.getElementById(`${e}-suggestions`);if(!t)return;const i=this._suggestState[e]||{open:!1,items:[],index:-1};if(!i.open||!i.items.length)return t.innerHTML="",void(t.hidden=!0);const n=i.index>=0&&i.items[i.index]?i.items[i.index]:"";t.hidden=!1,t.innerHTML=`\n      <div class="sugg-label">Suggestions</div>\n      ${i.items.map((t,n)=>`\n            <button\n              type="button"\n              class="sugg-item ${n===i.index?"active":""}"\n              data-sugg-id="${e}"\n              data-sugg-value="${t.replace(/"/g,"&quot;")}"\n              title="${t.replace(/"/g,"&quot;")}"\n            >\n              ${t}\n            </button>\n          `).join("")}\n      ${n?`<div class="sugg-active-path">${n}</div>`:""}\n    `,t.querySelectorAll("[data-sugg-id]").forEach(t=>{t.addEventListener("mousedown",i=>{i.preventDefault(),this._applySuggestion(e,t.dataset.suggValue||"")})})}_replaceCurrentLine(e,t){const i=this._getTextareaLineInfo(e),n=i.value.slice(0,i.lineStart),s=n+t+i.value.slice(i.lineEnd);e.value=s;const r=n.length+t.length;try{e.setSelectionRange(r,r),e.focus({preventScroll:!0})}catch(e){}}_scheduleRender(){this._captureScrollState(),this._raf&&cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame(()=>{this._render(),this._restoreScrollState()})}_setToolbarButtonEnabled(e,t){const i=ro.find(t=>t.id===e);if(i)if(t){const e={...this._config??{}};delete e[i.showKey],this._config=this._stripAlwaysTrueKeys(e),this._fire(),this._scheduleRender()}else this._set(i.showKey,!1)}_reorderToolbarButtonTo(e,t){if(!e||!t||e===t)return;const i=this._config?.toolbar_order&&"object"==typeof this._config.toolbar_order?{...this._config.toolbar_order}:{},n=e=>{const t=ro.find(t=>t.id===e);return"number"==typeof i[e]?i[e]:t?t.defaultOrder:0},s=[...ro].map(e=>e.id).sort((e,t)=>n(e)-n(t)||ro.findIndex(t=>t.id===e)-ro.findIndex(e=>e.id===t)),r=s.indexOf(e),o=s.indexOf(t);if(r<0||o<0)return;const a=[...s],[l]=a.splice(r,1);a.splice(o,0,l);const c={};a.forEach((e,t)=>{const i=ro.find(t=>t.id===e),n=10*(t+1);i&&n!==i.defaultOrder&&(c[e]=n)});const d={...this._config};0===Object.keys(c).length?delete d.toolbar_order:d.toolbar_order=c,this._config=this._stripAlwaysTrueKeys(d),this._fire(),this._scheduleRender()}_setLivePillEnabled(e,t){const i=this._config?.live_pills&&"object"==typeof this._config.live_pills?{...this._config.live_pills}:{},n={...i[e]||{}};t?delete n.enabled:n.enabled=!1,this._commitLivePillEntry(i,e,n)}_reorderLivePillTo(e,t){if(!e||!t||e===t)return;const i=this._config?.live_pills&&"object"==typeof this._config.live_pills?{...this._config.live_pills}:{},n=oo(so,i),s=new Map([...n].map(([e,t])=>[e,{...t,enabled:!0}])),r=ao(so,s),o=r.indexOf(e),a=r.indexOf(t);if(o<0||a<0)return;const l=[...r],[c]=l.splice(o,1);l.splice(a,0,c),l.forEach((e,t)=>{const n=so.find(t=>t.id===e),s=10*(t+1),r={...i[e]||{}};n&&s===n.defaultOrder?delete r.order:r.order=s,void 0===r.enabled&&void 0===r.order?delete i[e]:i[e]=r});const d={...this._config};0===Object.keys(i).length?delete d.live_pills:d.live_pills=i,this._config=this._stripAlwaysTrueKeys(d),this._fire(),this._scheduleRender()}_commitLivePillEntry(e,t,i){void 0===i.enabled&&void 0===i.order?delete e[t]:e[t]=i;const n={...this._config};0===Object.keys(e).length?delete n.live_pills:n.live_pills=e,this._config=this._stripAlwaysTrueKeys(n),this._fire(),this._scheduleRender()}_setGalleryPillEnabled(e,t){const i=this._config?.gallery_pills&&"object"==typeof this._config.gallery_pills?{...this._config.gallery_pills}:{},n={...i[e]||{}};t?delete n.enabled:n.enabled=!1,this._commitGalleryPillEntry(i,e,n)}_reorderGalleryPillTo(e,t){if(!e||!t||e===t)return;const i=this._config?.gallery_pills&&"object"==typeof this._config.gallery_pills?{...this._config.gallery_pills}:{},n=oo(no,i),s=new Map([...n].map(([e,t])=>[e,{...t,enabled:!0}])),r=ao(no,s),o=r.indexOf(e),a=r.indexOf(t);if(o<0||a<0)return;const l=[...r],[c]=l.splice(o,1);l.splice(a,0,c),l.forEach((e,t)=>{const n=no.find(t=>t.id===e),s=10*(t+1),r={...i[e]||{}};n&&s===n.defaultOrder?delete r.order:r.order=s,void 0===r.enabled&&void 0===r.order?delete i[e]:i[e]=r});const d={...this._config};0===Object.keys(i).length?delete d.gallery_pills:d.gallery_pills=i,this._config=this._stripAlwaysTrueKeys(d),this._fire(),this._scheduleRender()}_commitGalleryPillEntry(e,t,i){void 0===i.enabled&&void 0===i.order?delete e[t]:e[t]=i;const n={...this._config};0===Object.keys(e).length?delete n.gallery_pills:n.gallery_pills=e,this._config=this._stripAlwaysTrueKeys(n),this._fire(),this._scheduleRender()}_set(e,t){if("live_provider"===e)return;if("preview_close_on_tap"===e)return;if(this._config={...this._config,[e]:t},this._config=this._stripAlwaysTrueKeys(this._config),"shell_command"!==e&&"shell_command"in this._config){const e={...this._config};delete e.shell_command,this._config=e}this._fire();new Set(["source_mode","live_enabled","live_camera_entities","live_cameras","object_filters","delete_service","frigate_delete_service","menu_buttons","frigate_url","live_layout","gallery_pills","gallery_pills_align","controls_mode","bar_position"]).has(e)&&this._scheduleRender()}_setActiveTab(e){this._activeTab=String(e||"source"),this._scheduleRender()}_setControlValue(e,t){if(e){try{e.value=t}catch(e){}try{"_value"in e&&(e._value=t)}catch(e){}}}setConfig(e){const{migrated:t,hadLegacyKeys:i}=Ts(e||{});void 0===t.autoplay&&(t.autoplay=_i),void 0===t.auto_muted&&(t.auto_muted=vi),void 0===t.live_auto_muted&&(t.live_auto_muted=xi);let n=!1;if("object_filters"in t){const e=Array.isArray(t.object_filters)?t.object_filters:t.object_filters?[t.object_filters]:[],i=this._normalizeObjectFilters(e);JSON.stringify(i)!==JSON.stringify(t.object_filters)&&(n=!0),i.length?t.object_filters=i:delete t.object_filters}this._config=this._stripAlwaysTrueKeys(t),(i||n)&&this._fire(),this._scheduleRender()}set hass(e){const t=this._hass;if(this._hass=e,this._mediaBrowserOpen)return;const i=this.shadowRoot?.activeElement,n=String(i?.tagName||"").toLowerCase(),s=String(i?.id||"");if(!!(!i||"input"!==n&&"textarea"!==n&&"entities"!==s&&"mediasources"!==s&&"pathfmt"!==s&&"thumb"!==s&&"maxmedia"!==s&&"new-filter-name"!==s&&"new-filter-icon"!==s)){if(t){const i=t.themes?.darkMode!==e.themes?.darkMode||JSON.stringify(Object.keys(t.states).filter(e=>e.startsWith("camera.")||e.startsWith("sensor.")))!==JSON.stringify(Object.keys(e.states).filter(e=>e.startsWith("camera.")||e.startsWith("sensor.")));if(!i)return}this._scheduleRender()}}_sortUniqueStrings(e){const t=[],i=new Set;for(const n of e||[]){const e=String(n||"").trim();if(!e)continue;const s=e.toLowerCase();i.has(s)||(i.add(s),t.push(e))}return t.sort((e,t)=>e.localeCompare(t))}_sourcesToText(e){const t=Array.isArray(e)?e.map(String).map(e=>e.trim()).filter(Boolean):[];return t.join("\n")}_esc(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}_stripAlwaysTrueKeys(e){const t={...e||{}};return"filter_folders_enabled"in t&&delete t.filter_folders_enabled,"live_provider"in t&&delete t.live_provider,"media_folder_favorites"in t&&delete t.media_folder_favorites,"media_folder_filter"in t&&delete t.media_folder_filter,"media_folders_fav"in t&&delete t.media_folders_fav,"preview_close_on_tap"in t&&delete t.preview_close_on_tap,t}_toRel(e){return String(e||"").replace(/^media-source:\/\/media_source\//,"").replace(/^media-source:\/\/media_source/,"").replace(/^media-source:\/\/frigate\//,"frigate/").replace(/^media-source:\/\/frigate/,"frigate").replace(/^media-source:\/\//,"").replace(/^\/+/,"").trim()}_toggleObjectFilter(e){const t=String(e||"").toLowerCase().trim();if(!t)return;if(!fi.includes(t))return;const i=this._normalizeObjectFilters(this._config.object_filters||[]),n=new Set(i);n.has(t)?n.delete(t):n.add(t);const s=Array.from(n),r={...this._config};s.length?r.object_filters=s:delete r.object_filters,this._config=this._stripAlwaysTrueKeys(r),this._fire(),this._scheduleRender()}async _updateSuggestions(e){const t=this.shadowRoot?.getElementById(e);if(!t)return;const i=this._getTextareaLineInfo(t),n=String(i.line||"").trim();if("entities"===e){const t=this._collectEntitySuggestions(),i=this._filterSuggestions(t,n).filter(e=>String(e).trim()!==n),s=JSON.stringify(i);if(this._lastSuggestFingerprint[e]===s)return;return this._lastSuggestFingerprint[e]=s,i.length?void this._openSuggestions(e,i):void this._closeSuggestions(e)}"mediasources"===e&&(clearTimeout(this._mediaSuggestTimer),this._mediaSuggestTimer=setTimeout(async()=>{const t=++this._mediaSuggestReq,i=(await this._collectMediaSuggestionsDynamic(n)).filter(e=>String(e).trim()!==n);if(t!==this._mediaSuggestReq)return;const s=JSON.stringify(i);this._lastSuggestFingerprint[e]!==s&&(this._lastSuggestFingerprint[e]=s,i.length?this._openSuggestions(e,i):this._closeSuggestions(e))},120))}_validateMediaFolders(e){if(!e)return"neutral";const t=e.split(/\n|,/g).map(e=>e.trim()).filter(Boolean);if(!t.length)return"neutral";for(const e of t){if(!e.startsWith("media-source://"))return"invalid";if(/\.(jpg|jpeg|png|mp4|mov|mkv|avi|json|txt)$/i.test(e))return"invalid"}return"valid"}_validateSensors(e){if(!e)return"neutral";const t=e.split(/\n|,/g).map(e=>e.trim()).filter(Boolean);if(!t.length)return"neutral";for(const e of t){if(!e.startsWith("sensor."))return"invalid";if(!this._hass?.states?.[e])return"invalid"}return"valid"}_renderFilesWizard(){const e=this._wizardStatus,t="loading"===e;return`\n      <div class="cgc-wizard">\n        <button class="cgc-wizard-toggle" id="cgc-wizard-toggle">\n          ${this._wizardOpen?"▾":"▸"} Create new FileTrack sensor\n        </button>\n        <a class="cgc-wizard-link" href="https://github.com/TheScubadiver/FileTrack" target="_blank" rel="noopener">FileTrack op GitHub</a>\n        ${this._wizardOpen?`\n          <div class="cgc-wizard-body">\n            <div class="cgc-wizard-row">\n              <div class="cgc-wizard-folder-row">\n                <span class="cgc-wizard-prefix">/config/www/</span>\n                <input type="text" class="ed-input" id="cgc-wizard-folder" value="${this._wizardFolder}" />\n              </div>\n            </div>\n            <div class="cgc-wizard-row">\n              <div class="cgc-wizard-folder-row">\n                <span class="cgc-wizard-prefix">sensor.</span>\n                <input type="text" class="ed-input" id="cgc-wizard-name" value="${this._wizardName}" />\n              </div>\n            </div>\n            <button class="cgc-wizard-btn" id="cgc-wizard-create" ${this._wizardFolder&&this._wizardName&&!t?"":"disabled"}>\n              ${t?"Creating…":"Create sensor"}\n            </button>\n            ${!0===e?.ok?`\n              <div class="cgc-wizard-success">\n                ✓ Sensor created! Select <code>${e.entityId}</code> in the sensor field above.\n              </div>\n            `:""}\n            ${!1===e?.ok?`\n              <div class="cgc-wizard-error">✗ ${e.error}</div>\n            `:""}\n          </div>\n        `:""}\n      </div>\n    `}_bindWizardEvents(e={}){const t=this.shadowRoot,i=t?.getElementById("cgc-wizard-toggle"),n=t?.getElementById("cgc-wizard-folder"),s=t?.getElementById("cgc-wizard-name"),r=t?.getElementById("cgc-wizard-create");i&&(i.onclick=()=>{this._wizardOpen=!this._wizardOpen,this._scheduleRender()}),n&&(n.oninput=e=>{this._wizardFolder=e.target.value,this._wizardStatus=null,this._updateWizardButton()}),s&&(s.oninput=e=>{const t=e.target.value.toLowerCase().replace(/[^a-z0-9_]/g,"_");this._wizardName=t,e.target.value=t,this._wizardStatus=null,this._updateWizardButton()}),r&&(r.onclick=()=>this._createFilesSensor())}_updateWizardButton(){const e=this.shadowRoot?.getElementById("cgc-wizard-create");e&&(e.disabled=!this._wizardFolder||!this._wizardName)}async _createFilesSensor(){const e=this.shadowRoot?.getElementById("cgc-wizard-folder"),t=this.shadowRoot?.getElementById("cgc-wizard-name"),i=this.shadowRoot?.getElementById("cgc-wizard-create"),n=(e?.value||this._wizardFolder).trim().replace(/^\//,"").replace(/\/$/,""),s=(t?.value||this._wizardName).trim();if(n&&s){this._wizardFolder=n,this._wizardName=s,i&&(i.disabled=!0,i.textContent="Bezig…");try{await this._hass.callService("filetrack","add_sensor",{name:s,folder:"/config/www/"+n,filter:"*",sort:"date",recursive:!1});const e="sensor."+s.toLowerCase().replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"");this._wizardStatus={ok:!0,entityId:e}}catch(e){const t=(e?.message||String(e)).toLowerCase();if(t.includes("exist")||t.includes("already")||t.includes("fileexist")){const e="sensor."+s.toLowerCase().replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"");this._wizardStatus={ok:!0,entityId:e}}else this._wizardStatus={ok:!1,error:e?.message||String(e)}}this._scheduleRender()}}}customElements.get("camera-gallery-card-editor")||customElements.define("camera-gallery-card-editor",Ko)}();
