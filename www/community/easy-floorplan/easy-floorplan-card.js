/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis, ue = B.ShadowRoot && (B.ShadyCSS === void 0 || B.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, fe = Symbol(), Te = /* @__PURE__ */ new WeakMap();
let Qe = class {
  constructor(t, i, r) {
    if (this._$cssResult$ = !0, r !== fe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (ue && t === void 0) {
      const r = i !== void 0 && i.length === 1;
      r && (t = Te.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Te.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const vt = (e) => new Qe(typeof e == "string" ? e : e + "", void 0, fe), et = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((r, n, o) => r + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + e[o + 1], e[0]);
  return new Qe(i, e, fe);
}, wt = (e, t) => {
  if (ue) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const r = document.createElement("style"), n = B.litNonce;
    n !== void 0 && r.setAttribute("nonce", n), r.textContent = i.cssText, e.appendChild(r);
  }
}, Oe = ue ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const r of t.cssRules) i += r.cssText;
  return vt(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: kt, defineProperty: St, getOwnPropertyDescriptor: Et, getOwnPropertyNames: At, getOwnPropertySymbols: Tt, getPrototypeOf: Ot } = Object, te = globalThis, Ce = te.trustedTypes, Ct = Ce ? Ce.emptyScript : "", Mt = te.reactiveElementPolyfillSupport, R = (e, t) => e, G = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Ct : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, me = (e, t) => !kt(e, t), Me = { attribute: !0, type: String, converter: G, reflect: !1, useDefault: !1, hasChanged: me };
Symbol.metadata ??= Symbol("metadata"), te.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let F = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = Me) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const r = Symbol(), n = this.getPropertyDescriptor(t, r, i);
      n !== void 0 && St(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, i, r) {
    const { get: n, set: o } = Et(this.prototype, t) ?? { get() {
      return this[i];
    }, set(s) {
      this[i] = s;
    } };
    return { get: n, set(s) {
      const c = n?.call(this);
      o?.call(this, s), this.requestUpdate(t, c, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Me;
  }
  static _$Ei() {
    if (this.hasOwnProperty(R("elementProperties"))) return;
    const t = Ot(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(R("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(R("properties"))) {
      const i = this.properties, r = [...At(i), ...Tt(i)];
      for (const n of r) this.createProperty(n, i[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [r, n] of i) this.elementProperties.set(r, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, r] of this.elementProperties) {
      const n = this._$Eu(i, r);
      n !== void 0 && this._$Eh.set(n, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const n of r) i.unshift(Oe(n));
    } else t !== void 0 && i.push(Oe(t));
    return i;
  }
  static _$Eu(t, i) {
    const r = i.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const r of i.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return wt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, i, r) {
    this._$AK(t, r);
  }
  _$ET(t, i) {
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const o = (r.converter?.toAttribute !== void 0 ? r.converter : G).toAttribute(i, r.type);
      this._$Em = t, o == null ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Em = null;
    }
  }
  _$AK(t, i) {
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const o = r.getPropertyOptions(n), s = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : G;
      this._$Em = n;
      const c = s.fromAttribute(i, o.type);
      this[n] = c ?? this._$Ej?.get(n) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, i, r, n = !1, o) {
    if (t !== void 0) {
      const s = this.constructor;
      if (n === !1 && (o = this[t]), r ??= s.getPropertyOptions(t), !((r.hasChanged ?? me)(o, i) || r.useDefault && r.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(s._$Eu(t, r)))) return;
      this.C(t, i, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: r, reflect: n, wrapped: o }, s) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, s ?? i ?? this[t]), o !== !0 || s !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (i = void 0), this._$AL.set(t, i)), n === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, o] of r) {
        const { wrapped: s } = o, c = this[n];
        s !== !0 || this._$AL.has(n) || c === void 0 || this.C(n, void 0, o, c);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(i)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((i) => i.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((i) => this._$ET(i, this[i])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[R("elementProperties")] = /* @__PURE__ */ new Map(), F[R("finalized")] = /* @__PURE__ */ new Map(), Mt?.({ ReactiveElement: F }), (te.reactiveElementVersions ??= []).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge = globalThis, Pe = (e) => e, Z = ge.trustedTypes, Fe = Z ? Z.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, tt = "$lit$", E = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + E, Pt = `<${it}>`, C = document, U = () => C.createComment(""), N = (e) => e === null || typeof e != "object" && typeof e != "function", ye = Array.isArray, Ft = (e) => ye(e) || typeof e?.[Symbol.iterator] == "function", oe = `[ 	
\f\r]`, H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ie = /-->/g, De = />/g, T = RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ze = /'/g, Le = /"/g, rt = /^(?:script|style|textarea|title)$/i, nt = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), d = nt(1), h = nt(2), M = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), He = /* @__PURE__ */ new WeakMap(), O = C.createTreeWalker(C, 129);
function ot(e, t) {
  if (!ye(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Fe !== void 0 ? Fe.createHTML(t) : t;
}
const It = (e, t) => {
  const i = e.length - 1, r = [];
  let n, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", s = H;
  for (let c = 0; c < i; c++) {
    const l = e[c];
    let a, f, p = -1, g = 0;
    for (; g < l.length && (s.lastIndex = g, f = s.exec(l), f !== null); ) g = s.lastIndex, s === H ? f[1] === "!--" ? s = Ie : f[1] !== void 0 ? s = De : f[2] !== void 0 ? (rt.test(f[2]) && (n = RegExp("</" + f[2], "g")), s = T) : f[3] !== void 0 && (s = T) : s === T ? f[0] === ">" ? (s = n ?? H, p = -1) : f[1] === void 0 ? p = -2 : (p = s.lastIndex - f[2].length, a = f[1], s = f[3] === void 0 ? T : f[3] === '"' ? Le : ze) : s === Le || s === ze ? s = T : s === Ie || s === De ? s = H : (s = T, n = void 0);
    const m = s === T && e[c + 1].startsWith("/>") ? " " : "";
    o += s === H ? l + Pt : p >= 0 ? (r.push(a), l.slice(0, p) + tt + l.slice(p) + E + m) : l + E + (p === -2 ? c : m);
  }
  return [ot(e, o + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class j {
  constructor({ strings: t, _$litType$: i }, r) {
    let n;
    this.parts = [];
    let o = 0, s = 0;
    const c = t.length - 1, l = this.parts, [a, f] = It(t, i);
    if (this.el = j.createElement(a, r), O.currentNode = this.el.content, i === 2 || i === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (n = O.nextNode()) !== null && l.length < c; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const p of n.getAttributeNames()) if (p.endsWith(tt)) {
          const g = f[s++], m = n.getAttribute(p).split(E), $ = /([.?@])?(.*)/.exec(g);
          l.push({ type: 1, index: o, name: $[2], strings: m, ctor: $[1] === "." ? zt : $[1] === "?" ? Lt : $[1] === "@" ? Ht : ie }), n.removeAttribute(p);
        } else p.startsWith(E) && (l.push({ type: 6, index: o }), n.removeAttribute(p));
        if (rt.test(n.tagName)) {
          const p = n.textContent.split(E), g = p.length - 1;
          if (g > 0) {
            n.textContent = Z ? Z.emptyScript : "";
            for (let m = 0; m < g; m++) n.append(p[m], U()), O.nextNode(), l.push({ type: 2, index: ++o });
            n.append(p[g], U());
          }
        }
      } else if (n.nodeType === 8) if (n.data === it) l.push({ type: 2, index: o });
      else {
        let p = -1;
        for (; (p = n.data.indexOf(E, p + 1)) !== -1; ) l.push({ type: 7, index: o }), p += E.length - 1;
      }
      o++;
    }
  }
  static createElement(t, i) {
    const r = C.createElement("template");
    return r.innerHTML = t, r;
  }
}
function D(e, t, i = e, r) {
  if (t === M) return t;
  let n = r !== void 0 ? i._$Co?.[r] : i._$Cl;
  const o = N(t) ? void 0 : t._$litDirective$;
  return n?.constructor !== o && (n?._$AO?.(!1), o === void 0 ? n = void 0 : (n = new o(e), n._$AT(e, i, r)), r !== void 0 ? (i._$Co ??= [])[r] = n : i._$Cl = n), n !== void 0 && (t = D(e, n._$AS(e, t.values), n, r)), t;
}
class Dt {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: r } = this._$AD, n = (t?.creationScope ?? C).importNode(i, !0);
    O.currentNode = n;
    let o = O.nextNode(), s = 0, c = 0, l = r[0];
    for (; l !== void 0; ) {
      if (s === l.index) {
        let a;
        l.type === 2 ? a = new W(o, o.nextSibling, this, t) : l.type === 1 ? a = new l.ctor(o, l.name, l.strings, this, t) : l.type === 6 && (a = new Rt(o, this, t)), this._$AV.push(a), l = r[++c];
      }
      s !== l?.index && (o = O.nextNode(), s++);
    }
    return O.currentNode = C, n;
  }
  p(t) {
    let i = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, i), i += r.strings.length - 2) : r._$AI(t[i])), i++;
  }
}
class W {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, r, n) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = r, this.options = n, this._$Cv = n?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && t?.nodeType === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = D(this, t, i), N(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== M && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ft(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== u && N(this._$AH) ? this._$AA.nextSibling.data = t : this.T(C.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: i, _$litType$: r } = t, n = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = j.createElement(ot(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === n) this._$AH.p(i);
    else {
      const o = new Dt(n, this), s = o.u(this.options);
      o.p(i), this.T(s), this._$AH = o;
    }
  }
  _$AC(t) {
    let i = He.get(t.strings);
    return i === void 0 && He.set(t.strings, i = new j(t)), i;
  }
  k(t) {
    ye(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let r, n = 0;
    for (const o of t) n === i.length ? i.push(r = new W(this.O(U()), this.O(U()), this, this.options)) : r = i[n], r._$AI(o), n++;
    n < i.length && (this._$AR(r && r._$AB.nextSibling, n), i.length = n);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t !== this._$AB; ) {
      const r = Pe(t).nextSibling;
      Pe(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class ie {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, r, n, o) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = i, this._$AM = n, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = u;
  }
  _$AI(t, i = this, r, n) {
    const o = this.strings;
    let s = !1;
    if (o === void 0) t = D(this, t, i, 0), s = !N(t) || t !== this._$AH && t !== M, s && (this._$AH = t);
    else {
      const c = t;
      let l, a;
      for (t = o[0], l = 0; l < o.length - 1; l++) a = D(this, c[r + l], i, l), a === M && (a = this._$AH[l]), s ||= !N(a) || a !== this._$AH[l], a === u ? t = u : t !== u && (t += (a ?? "") + o[l + 1]), this._$AH[l] = a;
    }
    s && !n && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class zt extends ie {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
class Lt extends ie {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== u);
  }
}
class Ht extends ie {
  constructor(t, i, r, n, o) {
    super(t, i, r, n, o), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = D(this, t, i, 0) ?? u) === M) return;
    const r = this._$AH, n = t === u && r !== u || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== u && (r === u || n);
    n && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Rt {
  constructor(t, i, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    D(this, t);
  }
}
const Ut = ge.litHtmlPolyfillSupport;
Ut?.(j, W), (ge.litHtmlVersions ??= []).push("3.3.3");
const Nt = (e, t, i) => {
  const r = i?.renderBefore ?? t;
  let n = r._$litPart$;
  if (n === void 0) {
    const o = i?.renderBefore ?? null;
    r._$litPart$ = n = new W(t.insertBefore(U(), o), o, void 0, i ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = globalThis;
let I = class extends F {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Nt(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return M;
  }
};
I._$litElement$ = !0, I.finalized = !0, _e.litElementHydrateSupport?.({ LitElement: I });
const jt = _e.litElementPolyfillSupport;
jt?.({ LitElement: I });
(_e.litElementVersions ??= []).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt = { attribute: !0, type: String, converter: G, reflect: !1, hasChanged: me }, qt = (e = Wt, t, i) => {
  const { kind: r, metadata: n } = i;
  let o = globalThis.litPropertyMetadata.get(n);
  if (o === void 0 && globalThis.litPropertyMetadata.set(n, o = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), o.set(i.name, e), r === "accessor") {
    const { name: s } = i;
    return { set(c) {
      const l = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(s, l, e, !0, c);
    }, init(c) {
      return c !== void 0 && this.C(s, void 0, e, c), c;
    } };
  }
  if (r === "setter") {
    const { name: s } = i;
    return function(c) {
      const l = this[s];
      t.call(this, c), this.requestUpdate(s, l, e, !0, c);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function $e(e) {
  return (t, i) => typeof i == "object" ? qt(e, t, i) : ((r, n, o) => {
    const s = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, r), s ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function b(e) {
  return $e({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = (e, t, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, i), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function xe(e, t) {
  return (i, r, n) => {
    const o = (s) => s.renderRoot?.querySelector(e) ?? null;
    return Kt(i, r, { get() {
      return o(this);
    } });
  };
}
const be = 14, X = 34, Y = 16, ve = 80, Bt = "#9e9e9e", Re = {
  table: { w: 120, h: 80 },
  roundTable: { w: 100, h: 100 },
  desk: { w: 120, h: 60 },
  chair: { w: 44, h: 44 },
  sofa: { w: 170, h: 72 },
  bed: { w: 150, h: 200 },
  wardrobe: { w: 120, h: 55 },
  rug: { w: 180, h: 120 },
  plant: { w: 44, h: 44 },
  fridge: { w: 60, h: 64 },
  stove: { w: 64, h: 64 },
  sink: { w: 64, h: 48 },
  toilet: { w: 48, h: 68 },
  stairs: { w: 90, h: 170 },
  tv: { w: 110, h: 18 },
  washer: { w: 60, h: 62 },
  dryer: { w: 60, h: 62 },
  dishwasher: { w: 60, h: 60 },
  waterHeater: { w: 52, h: 52 },
  airHandler: { w: 60, h: 56 },
  bathtub: { w: 150, h: 76 },
  vanity: { w: 110, h: 55 },
  sectional: { w: 230, h: 180 }
}, at = 1e3, lt = 600, we = 20, Ue = 50;
function Vt(e, t) {
  return e ?? t;
}
function Ne(e, t) {
  return t <= 0 ? 100 : Math.round(e / t * 100);
}
function se(e, t) {
  return Math.max(1, Math.round(t * e / 100));
}
function je(e) {
  const t = e?.floors;
  return !t || typeof t != "object" ? [] : Object.values(t).filter((i) => !!i && typeof i.floor_id == "string" && typeof i.name == "string").sort((i, r) => (i.level ?? 0) - (r.level ?? 0) || i.name.localeCompare(r.name));
}
function Gt(e) {
  return {
    type: e,
    width: at,
    height: lt,
    grid: we,
    walls: [],
    openings: [],
    items: [],
    texts: [],
    furniture: [],
    trackers: []
  };
}
function v(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
function le(e, t) {
  if (e === t) return !0;
  if (Array.isArray(e) || Array.isArray(t))
    return !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length ? !1 : e.every((n, o) => le(n, t[o]));
  if (typeof e != "object" || typeof t != "object" || e === null || t === null) return !1;
  const i = e, r = t;
  for (const n of /* @__PURE__ */ new Set([...Object.keys(i), ...Object.keys(r)]))
    if (!le(i[n], r[n])) return !1;
  return !0;
}
function Zt(e, t = []) {
  return {
    id: v("floor"),
    name: e,
    walls: t,
    openings: [],
    items: [],
    texts: [],
    furniture: [],
    trackers: []
  };
}
function Xt(e) {
  return {
    ...e,
    walls: e.walls ?? [],
    openings: e.openings ?? [],
    items: e.items ?? [],
    texts: e.texts ?? [],
    furniture: e.furniture ?? [],
    trackers: e.trackers ?? []
  };
}
function ke(e) {
  return e.floors && e.floors.length ? e.floors.map(Xt) : [
    {
      id: "floor_main",
      name: "Floor 1",
      walls: e.walls ?? [],
      openings: e.openings ?? [],
      items: e.items ?? [],
      texts: e.texts ?? [],
      furniture: e.furniture ?? [],
      trackers: e.trackers ?? []
    }
  ];
}
function J(e, t) {
  if (!t) return null;
  const i = e?.[t.entity]?.state;
  if (i == null || i === "unavailable" || i === "unknown") return !1;
  const r = i === "on" || i === "open" || i === "home" || i === "detected";
  return t.invert ? !r : r;
}
function We(e, t) {
  if (!e || t == null || !Number.isFinite(t)) return null;
  const i = e.max - e.min;
  if (i === 0) return null;
  const r = (t - e.min) / i, n = Math.max(0, Math.min(1, r));
  return e.invert ? 1 - n : n;
}
const z = 8, qe = "—";
function Ke(e, t) {
  if (!t || !e) return qe;
  const i = e.states[t];
  return i ? e.formatEntityState(i) : qe;
}
function ct(e, t, i) {
  if (e.formatEntityState !== t.formatEntityState) return !0;
  for (const r of i)
    if (e.states[r] !== t.states[r]) return !0;
  return !1;
}
function ce(e) {
  const t = /* @__PURE__ */ new Set();
  for (const i of ke(e)) {
    for (const r of i.openings) r.entity && t.add(r.entity);
    for (const r of i.items)
      r.entity && t.add(r.entity), r.secondaryEntity && t.add(r.secondaryEntity);
    for (const r of i.trackers)
      for (const n of [r.xSensor, r.ySensor])
        n?.entity && t.add(n.entity), n?.presence?.entity && t.add(n.presence.entity);
  }
  return t;
}
function Yt(e, t) {
  const i = Ke(e, t.entity);
  return t.secondaryEntity ? `${i} · ${Ke(e, t.secondaryEntity)}` : i;
}
function dt(e) {
  switch (e) {
    case "light":
      return "mdi:lightbulb";
    case "switch":
      return "mdi:toggle-switch";
    case "sensor":
      return "mdi:gauge";
    case "binary_sensor":
      return "mdi:radiobox-marked";
    case "climate":
      return "mdi:thermostat";
    case "cover":
      return "mdi:window-shutter";
    case "media_player":
      return "mdi:television";
    case "fan":
      return "mdi:fan";
    case "camera":
      return "mdi:cctv";
    case "lock":
      return "mdi:lock";
    case "humidifier":
      return "mdi:air-humidifier";
    case "vacuum":
      return "mdi:robot-vacuum";
    default:
      return "mdi:circle";
  }
}
const Jt = {
  media_player: { on: "mdi:television-play", off: "mdi:television-off" },
  fan: { on: "mdi:fan", off: "mdi:fan-off" },
  lock: { on: "mdi:lock-open-variant", off: "mdi:lock" },
  camera: { on: "mdi:cctv", off: "mdi:cctv-off" },
  humidifier: { on: "mdi:air-humidifier", off: "mdi:air-humidifier-off" },
  vacuum: { on: "mdi:robot-vacuum", off: "mdi:robot-vacuum-variant" }
}, Qt = {
  battery: { on: "mdi:battery-alert", off: "mdi:battery" },
  battery_charging: { on: "mdi:battery-charging", off: "mdi:battery" },
  carbon_monoxide: { on: "mdi:smoke-detector-alert", off: "mdi:smoke-detector" },
  cold: { on: "mdi:snowflake", off: "mdi:thermometer" },
  connectivity: { on: "mdi:check-network-outline", off: "mdi:close-network-outline" },
  door: { on: "mdi:door-open", off: "mdi:door-closed" },
  garage_door: { on: "mdi:garage-open", off: "mdi:garage" },
  gas: { on: "mdi:alert-circle", off: "mdi:check-circle" },
  heat: { on: "mdi:fire", off: "mdi:thermometer" },
  light: { on: "mdi:brightness-7", off: "mdi:brightness-5" },
  lock: { on: "mdi:lock-open", off: "mdi:lock" },
  moisture: { on: "mdi:water", off: "mdi:water-off" },
  motion: { on: "mdi:motion-sensor", off: "mdi:motion-sensor-off" },
  occupancy: { on: "mdi:home", off: "mdi:home-outline" },
  opening: { on: "mdi:square-outline", off: "mdi:square" },
  plug: { on: "mdi:power-plug", off: "mdi:power-plug-off" },
  power: { on: "mdi:power-plug", off: "mdi:power-plug-off" },
  presence: { on: "mdi:home", off: "mdi:home-outline" },
  problem: { on: "mdi:alert-circle", off: "mdi:check-circle" },
  running: { on: "mdi:play", off: "mdi:stop" },
  safety: { on: "mdi:alert-circle", off: "mdi:check-circle" },
  smoke: { on: "mdi:smoke-detector-variant-alert", off: "mdi:smoke-detector-variant" },
  sound: { on: "mdi:music-note", off: "mdi:music-note-off" },
  tamper: { on: "mdi:vibrate", off: "mdi:check-circle" },
  vibration: { on: "mdi:vibrate", off: "mdi:crop-portrait" },
  window: { on: "mdi:window-open", off: "mdi:window-closed" }
}, ei = {
  temperature: "mdi:thermometer",
  humidity: "mdi:water-percent",
  battery: "mdi:battery",
  power: "mdi:flash",
  energy: "mdi:lightning-bolt",
  illuminance: "mdi:brightness-5",
  pressure: "mdi:gauge",
  carbon_dioxide: "mdi:molecule-co2",
  pm25: "mdi:air-filter",
  signal_strength: "mdi:wifi",
  voltage: "mdi:sine-wave",
  current: "mdi:current-ac"
}, ti = {
  garage: { on: "mdi:garage-open", off: "mdi:garage" },
  garage_door: { on: "mdi:garage-open", off: "mdi:garage" },
  door: { on: "mdi:door-open", off: "mdi:door-closed" },
  gate: { on: "mdi:gate-open", off: "mdi:gate" },
  window: { on: "mdi:window-open", off: "mdi:window-closed" },
  blind: { on: "mdi:blinds-open", off: "mdi:blinds" },
  shade: { on: "mdi:roller-shade", off: "mdi:roller-shade-closed" },
  shutter: { on: "mdi:window-shutter-open", off: "mdi:window-shutter" },
  curtain: { on: "mdi:curtains", off: "mdi:curtains-closed" },
  awning: { on: "mdi:awning-outline", off: "mdi:awning-outline" }
};
function ii(e) {
  return e === "on" || e === "open" || e === "home" || e === "playing";
}
const ri = {
  lock: /* @__PURE__ */ new Set(["unlocked", "unlocking", "open", "opening"]),
  vacuum: /* @__PURE__ */ new Set(["cleaning", "returning"]),
  camera: /* @__PURE__ */ new Set(["recording", "streaming"])
};
function ht(e, t) {
  if (!t || t === "unavailable" || t === "unknown") return !1;
  const i = e?.split(".")[0] ?? "", r = ri[i];
  return r ? r.has(t) : ii(t);
}
function ni(e, t, i) {
  const r = e.split(".")[0], n = Jt[r];
  if (n) return i ? n.on : n.off;
  if (t) {
    if (r === "binary_sensor") {
      const o = Qt[t];
      return o ? i ? o.on : o.off : void 0;
    }
    if (r === "sensor") return ei[t];
    if (r === "cover") {
      const o = ti[t];
      return o ? i ? o.on : o.off : void 0;
    }
  }
}
function pt(e, t) {
  if (e.icon) return e.icon;
  const i = t?.attributes?.icon;
  return i || (ni(
    e.entity,
    t?.attributes?.device_class,
    ht(e.entity, t?.state)
  ) ?? dt(e.kind));
}
function oi(e) {
  const t = e.split(".")[0];
  switch (t) {
    case "light":
    case "switch":
    case "sensor":
    case "binary_sensor":
    case "climate":
    case "cover":
    case "media_player":
    case "fan":
    case "camera":
    case "lock":
    case "humidifier":
    case "vacuum":
      return t;
    default:
      return "generic";
  }
}
function L(e) {
  return e.motion ?? "swing";
}
function Se(e) {
  return e.type === "door" && L(e) === "swing";
}
function si(e) {
  return { sx: e.flipH ? -1 : 1, sy: e.flipV ? -1 : 1 };
}
function ut(e) {
  return L(e) === "slide" ? e.sliderStyle ?? "single" : "single";
}
const ai = /* @__PURE__ */ new Set(["window", "blind", "shade", "shutter", "curtain", "awning"]), li = /* @__PURE__ */ new Set([
  "garage",
  "garage_door",
  "blind",
  "shade",
  "shutter",
  "curtain"
]);
function ci(e) {
  return {
    type: ai.has(e ?? "") ? "window" : "door",
    motion: li.has(e ?? "") ? "slide" : void 0
  };
}
const di = 3;
function hi(e, t) {
  return e.split(".")[0] === "cover" && t & di ? "cover-toggle" : "more-info";
}
function Ee(e) {
  return e === "unavailable" || e === "unknown";
}
function pi(e, t) {
  if (!e.entity || t === void 0) return Se(e);
  if (Ee(t)) return !1;
  const i = t === "on" || t === "open" || t === "opening" || t === "closing";
  return e.invert ? !i : i;
}
function ui(e) {
  return e === "opening" || e === "closing";
}
function ft(e, t) {
  if (!e.entity || !t) return Se(e) ? 1 : 0;
  if (Ee(t.state)) return 0;
  const i = t.attributes?.current_position;
  if (typeof i == "number" && Number.isFinite(i)) {
    const r = Math.max(0, Math.min(1, i / 100));
    return e.invert ? 1 - r : r;
  }
  return pi(e, t.state) ? 1 : 0;
}
function fi(e, t) {
  return !e.entity || !t || Ee(t.state) ? !1 : ui(t.state) || ft(e, t) > 0;
}
function mt(e, t) {
  const { color: i, open: r = !0, active: n = !1, accent: o = "var(--primary-color, #03a9f4)" } = t, s = e.length / 2, c = z + 4, l = n ? o : i, a = Math.max(0, Math.min(1, t.amount ?? (r ? 1 : 0)));
  let f;
  if (e.type === "window" && L(e) === "swing") {
    const m = Math.PI / 2 * s;
    f = h`
        <!-- jambs -->
        <line x1=${-s} y1=${-c / 2} x2=${-s} y2=${c / 2}
              stroke=${i} stroke-width="2" />
        <line x1=${s} y1=${-c / 2} x2=${s} y2=${c / 2}
              stroke=${i} stroke-width="2" />
        <!-- swing arcs, drawn from the middle outward -->
        <path class="fp-door-arc" d="M 0 0 A ${s} ${s} 0 0 0 ${-s} ${-s}"
              fill="none" stroke-width="1.5" stroke-dasharray=${m}
              style="stroke:${l};stroke-dashoffset:${m * (1 - a)};" />
        <path class="fp-door-arc" d="M 0 0 A ${s} ${s} 0 0 1 ${s} ${-s}"
              fill="none" stroke-width="1.5" stroke-dasharray=${m}
              style="stroke:${l};stroke-dashoffset:${m * (1 - a)};" />
        <!-- left leaf, hinged at left jamb -->
        <g transform="translate(${-s} 0)">
          <g class="fp-door-leaf" style="transform:rotate(${-90 * a}deg);">
            <rect x="0" y="-1.25" width=${s} height="2.5" style="fill:${l};" />
          </g>
        </g>
        <!-- right leaf, hinged at right jamb -->
        <g transform="translate(${s} 0)">
          <g class="fp-leaf-r" style="transform:rotate(${90 * a}deg);">
            <rect x=${-s} y="-1.25" width=${s} height="2.5" style="fill:${l};" />
          </g>
        </g>
      `;
  } else if (L(e) === "slide") {
    const m = e.type === "window" ? 1.5 : 2.5, $ = h`
        <line x1=${-s} y1=${-c / 2} x2=${-s} y2=${c / 2}
              stroke=${i} stroke-width="2" />
        <line x1=${s} y1=${-c / 2} x2=${s} y2=${c / 2}
              stroke=${i} stroke-width="2" />`, k = ut(e);
    if (k === "bypass") {
      const ne = -s * a;
      f = h`
        ${$}
        <!-- tracks -->
        <line x1=${-s} y1=${-1.75} x2=${s} y2=${-1.75}
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <line x1=${-s} y1=${1.75} x2=${s} y2=${1.75}
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <!-- fixed panel: left half, front track -->
        <rect x=${-s} y=${1.75 - m / 2} width=${s} height=${m} style="fill:${l};" />
        <!-- moving panel: right half, back track -->
        <g class="fp-slide-panel" style="transform:translateX(${ne}px);">
          <rect x="0" y=${-1.75 - m / 2} width=${s} height=${m} style="fill:${l};" />
        </g>`;
    } else if (k === "biparting") {
      const w = s * a;
      f = h`
        ${$}
        <!-- track -->
        <line x1=${-s} y1="0" x2=${s} y2="0"
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <g class="fp-slide-panel" style="transform:translateX(${-w}px);">
          <rect x=${-s} y=${-m / 2} width=${s} height=${m} style="fill:${l};" />
        </g>
        <g class="fp-slide-panel" style="transform:translateX(${w}px);">
          <rect x="0" y=${-m / 2} width=${s} height=${m} style="fill:${l};" />
        </g>`;
    } else {
      const w = e.length * a;
      f = h`
        ${$}
        <!-- track -->
        <line x1=${-s} y1="0" x2=${s} y2="0"
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <g class="fp-slide-panel" style="transform:translateX(${w}px);">
          <rect x=${-s} y=${-m / 2} width=${e.length} height=${m} style="fill:${l};" />
        </g>`;
    }
  } else {
    const m = -90 * a, $ = Math.PI / 2 * e.length;
    f = h`
        <!-- swing arc: hidden when closed, drawn as it opens -->
        <path class="fp-door-arc"
              d="M ${s} 0 A ${e.length} ${e.length} 0 0 0 ${-s} ${-e.length}"
              fill="none" stroke-width="1.5" stroke-dasharray=${$}
              style="stroke:${l};stroke-dashoffset:${$ * (1 - a)};" />
        <!-- door leaf, hinged at left jamb -->
        <g transform="translate(${-s} 0)">
          <g class="fp-door-leaf" style="transform:rotate(${m}deg);">
            <rect x="0" y="-1.25" width=${e.length} height="2.5" style="fill:${l};" />
          </g>
        </g>
      `;
  }
  const { sx: p, sy: g } = si(e);
  return h`<g transform="translate(${e.x} ${e.y}) rotate(${e.angle})">
      <g transform="scale(${p} ${g})">${f}</g>
    </g>`;
}
function gt(e, t, i, r) {
  const n = z + 4;
  return h`
    <defs>
      <mask id=${r} maskUnits="userSpaceOnUse">
        <rect x="0" y="0" width=${t} height=${i} fill="white" />
        ${e.map((o) => {
    const s = o.length / 2;
    return h`<rect x=${o.x - s} y=${o.y - n / 2}
                           width=${o.length} height=${n} fill="black"
                           transform="rotate(${o.angle} ${o.x} ${o.y})" />`;
  })}
      </mask>
    </defs>`;
}
const mi = 0.42, gi = 0.55;
function Be(e, t, i = "right") {
  const r = e / 2, n = t / 2, o = t * gi, s = e * mi, c = [
    [-r, -n],
    [r, -n],
    [r, n],
    [r - s, n],
    [r - s, -n + o],
    [-r, -n + o]
  ];
  return i === "left" ? c.map(([l, a]) => [-l, a]) : c;
}
function de(e) {
  const t = e.color ?? Bt, i = e.w, r = e.h, n = i / 2, o = r / 2, s = e.type === "roundTable" || e.type === "plant" || e.type === "waterHeater", c = e.type === "sectional" ? h`<polygon points=${Be(i, r, e.hand).map((a) => a.join(",")).join(" ")}
                   fill=${t} fill-opacity="0.12" stroke=${t} stroke-width="2"
                   stroke-linejoin="round" />` : s ? h`<ellipse cx="0" cy="0" rx=${n} ry=${o}
                   fill=${t} fill-opacity="0.12" stroke=${t} stroke-width="2" />` : e.type === "rug" ? h`<rect x=${-n} y=${-o} width=${i} height=${r} rx=${Math.min(i, r) * 0.12}
                  fill=${t} fill-opacity="0.08" stroke=${t} stroke-width="2"
                  stroke-dasharray="8 5" />` : h`<rect x=${-n} y=${-o} width=${i} height=${r} rx="4"
                  fill=${t} fill-opacity="0.12" stroke=${t} stroke-width="2" />`;
  let l;
  switch (e.type) {
    case "chair":
      l = h`<line x1=${-n} y1=${-o + r * 0.22} x2=${n} y2=${-o + r * 0.22}
                         stroke=${t} stroke-width="2" />`;
      break;
    case "sofa":
      l = h`
        <line x1=${-n} y1=${-o + r * 0.3} x2=${n} y2=${-o + r * 0.3}
              stroke=${t} stroke-width="2" />
        <line x1=${-n + i * 0.12} y1=${-o + r * 0.3} x2=${-n + i * 0.12} y2=${o}
              stroke=${t} stroke-width="2" />
        <line x1=${n - i * 0.12} y1=${-o + r * 0.3} x2=${n - i * 0.12} y2=${o}
              stroke=${t} stroke-width="2" />`;
      break;
    case "bed":
      l = h`
        <line x1=${-n} y1=${-o + r * 0.26} x2=${n} y2=${-o + r * 0.26}
              stroke=${t} stroke-width="2" />
        <rect x=${-n + i * 0.1} y=${-o + r * 0.06} width=${i * 0.34} height=${r * 0.14} rx="3"
              fill="none" stroke=${t} stroke-width="1.5" />
        <rect x=${n - i * 0.44} y=${-o + r * 0.06} width=${i * 0.34} height=${r * 0.14} rx="3"
              fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "fridge":
      l = h`
        <line x1=${-n} y1=${-o + r * 0.4} x2=${n} y2=${-o + r * 0.4}
              stroke=${t} stroke-width="2" />
        <line x1=${n - i * 0.16} y1=${-o + r * 0.12} x2=${n - i * 0.16} y2=${-o + r * 0.3}
              stroke=${t} stroke-width="2" />
        <line x1=${n - i * 0.16} y1=${-o + r * 0.5} x2=${n - i * 0.16} y2=${o - r * 0.16}
              stroke=${t} stroke-width="2" />`;
      break;
    case "stove": {
      const a = Math.min(i, r) * 0.16, f = i * 0.22, p = r * 0.22;
      l = h`
        <circle cx=${-f} cy=${-p} r=${a} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${f} cy=${-p} r=${a} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${-f} cy=${p} r=${a} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${f} cy=${p} r=${a} fill="none" stroke=${t} stroke-width="2" />`;
      break;
    }
    case "sink":
      l = h`
        <rect x=${-n + i * 0.12} y=${-o + r * 0.18} width=${i * 0.76} height=${r * 0.5} rx="4"
              fill="none" stroke=${t} stroke-width="2" />
        <circle cx="0" cy=${-o + r * 0.1} r=${Math.min(i, r) * 0.05}
                fill="none" stroke=${t} stroke-width="2" />`;
      break;
    case "toilet":
      l = h`
        <rect x=${-n + i * 0.1} y=${-o} width=${i * 0.8} height=${r * 0.22} rx="3"
              fill="none" stroke=${t} stroke-width="2" />
        <ellipse cx="0" cy=${o - r * 0.32} rx=${i * 0.34} ry=${r * 0.3}
                 fill="none" stroke=${t} stroke-width="2" />`;
      break;
    case "stairs": {
      const f = [];
      for (let p = 1; p < 7; p++) {
        const g = -o + r / 7 * p;
        f.push(h`<line x1=${-n} y1=${g} x2=${n} y2=${g} stroke=${t} stroke-width="1.5" />`);
      }
      l = h`${f}
        <line x1="0" y1=${o - 6} x2="0" y2=${-o + 6} stroke=${t} stroke-width="1.5" />
        <path d="M ${-i * 0.12} ${-o + r * 0.16} L 0 ${-o + 4} L ${i * 0.12} ${-o + r * 0.16}"
              fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    }
    case "tv":
      l = h`<line x1=${-i * 0.18} y1=${o} x2=${i * 0.18} y2=${o + r}
                         stroke=${t} stroke-width="2" />`;
      break;
    case "desk":
      l = h`<line x1=${-n} y1=${-o + r * 0.55} x2=${n} y2=${-o + r * 0.55}
                         stroke=${t} stroke-width="1.5" opacity="0.7" />`;
      break;
    case "wardrobe":
      l = h`
        <line x1="0" y1=${-o} x2="0" y2=${o} stroke=${t} stroke-width="2" />
        <line x1=${-i * 0.06} y1=${-r * 0.1} x2=${-i * 0.06} y2=${r * 0.1}
              stroke=${t} stroke-width="2" />
        <line x1=${i * 0.06} y1=${-r * 0.1} x2=${i * 0.06} y2=${r * 0.1}
              stroke=${t} stroke-width="2" />`;
      break;
    case "plant": {
      const a = Math.min(i, r) * 0.18;
      l = h`
        <circle cx="0" cy=${-r * 0.12} r=${a} fill="none" stroke=${t} stroke-width="1.5" />
        <circle cx=${-i * 0.16} cy=${r * 0.08} r=${a} fill="none" stroke=${t} stroke-width="1.5" />
        <circle cx=${i * 0.16} cy=${r * 0.08} r=${a} fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    }
    case "rug":
      l = h`<rect x=${-n + i * 0.1} y=${-o + r * 0.1} width=${i * 0.8} height=${r * 0.8}
                         rx=${Math.min(i, r) * 0.08} fill="none" stroke=${t}
                         stroke-width="1.5" opacity="0.6" />`;
      break;
    case "washer":
    case "dryer": {
      const a = Math.min(i, r) * 0.3;
      l = h`
        <line x1=${-n + i * 0.06} y1=${-o + r * 0.18} x2=${n - i * 0.06} y2=${-o + r * 0.18}
              stroke=${t} stroke-width="1.5" opacity="0.7" />
        <circle cx="0" cy=${r * 0.06} r=${a} fill="none" stroke=${t} stroke-width="2" />
        ${e.type === "dryer" ? h`<circle cx="0" cy=${r * 0.06} r=${a * 0.45}
                        fill="none" stroke=${t} stroke-width="1.5" opacity="0.7" />` : h`<circle cx=${-n + i * 0.16} cy=${-o + r * 0.09} r=${Math.min(i, r) * 0.045}
                        fill="none" stroke=${t} stroke-width="1.5" />`}`;
      break;
    }
    case "dishwasher":
      l = h`
        <rect x=${-n + i * 0.1} y=${-o + r * 0.24} width=${i * 0.8} height=${r * 0.62} rx="3"
              fill="none" stroke=${t} stroke-width="1.5" opacity="0.8" />
        <line x1=${-n + i * 0.06} y1=${o - r * 0.12} x2=${n - i * 0.06} y2=${o - r * 0.12}
              stroke=${t} stroke-width="2" />`;
      break;
    case "waterHeater":
      l = h`
        <circle cx="0" cy="0" r=${Math.min(n, o) * 0.34}
                fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "airHandler":
      l = h`
        <line x1=${-n + i * 0.08} y1=${-o + r * 0.08} x2=${n - i * 0.08} y2=${o - r * 0.08}
              stroke=${t} stroke-width="1.5" opacity="0.8" />
        <line x1=${-n + i * 0.08} y1=${o - r * 0.08} x2=${n - i * 0.08} y2=${-o + r * 0.08}
              stroke=${t} stroke-width="1.5" opacity="0.8" />`;
      break;
    case "bathtub":
      l = h`
        <rect x=${-n + i * 0.06} y=${-o + r * 0.12} width=${i * 0.88} height=${r * 0.76}
              rx=${Math.min(i, r) * 0.12} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${-n + i * 0.14} cy="0" r=${Math.min(i, r) * 0.055}
                fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "vanity":
      l = h`
        <ellipse cx="0" cy=${r * 0.06} rx=${i * 0.2} ry=${r * 0.26}
                 fill="none" stroke=${t} stroke-width="2" />
        <circle cx="0" cy=${-o + r * 0.14} r=${Math.min(i, r) * 0.05}
                fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "sectional": {
      const a = Be(i, r, e.hand), f = a[4][1], p = -o + r * 0.16, g = a[3][0], m = e.hand === "left" ? n - i * 0.09 : -n + i * 0.09;
      l = h`
        <line x1=${-n} y1=${p} x2=${n} y2=${p} stroke=${t} stroke-width="2" />
        <line x1=${m} y1=${p} x2=${m} y2=${f} stroke=${t} stroke-width="2" />
        <line x1=${g} y1=${p} x2=${g} y2=${o} stroke=${t} stroke-width="2" />`;
      break;
    }
    case "table":
    case "roundTable":
    default:
      l = h``;
      break;
  }
  return h`<g transform="translate(${e.x} ${e.y}) rotate(${e.angle ?? 0})">${c}${l}</g>`;
}
function Q(e, t, i, r = 3) {
  return d`
    <div
      class="ripple ${e ? "active" : ""}"
      style="width:${i}px;height:${i}px;--fp-ripple-color:${t};"
    >
      <span class="dot"></span>
      ${Array.from(
    { length: r },
    (n, o) => d`<span class="ring" style="animation-delay:${(o * 0.6).toFixed(2)}s;"></span>`
  )}
    </div>
  `;
}
function ee(e, t) {
  if (!t || !e) return null;
  const i = e[t]?.state;
  if (i == null || i === "unavailable" || i === "unknown") return null;
  const r = Number(i);
  return Number.isFinite(r) ? r : null;
}
function yt(e, t) {
  const i = e.color ?? "var(--primary-color, #03a9f4)", r = (e.dotSize ?? be) / 2, n = e.x + e.w / 2, o = e.y + e.h / 2, s = e.angle ?? 0, c = We(e.xSensor, t.xReading), l = We(e.ySensor, t.yReading), a = c != null, f = l != null, p = t.xPresent === !1 || t.yPresent === !1, g = e.w / 2, m = e.h / 2, $ = t.editing ? h`<rect class="tracker-zone ${p ? "presence-gated" : ""}"
                x=${-g} y=${-m} width=${e.w} height=${e.h}
                fill=${i} fill-opacity="0.08" stroke=${i} stroke-width="1.5"
                stroke-dasharray="6 4" rx="4" pointer-events="none" />` : h``;
  let k;
  if (p)
    k = h``;
  else if (a && f) {
    const w = -g + c * e.w, ne = -m + l * e.h, bt = `0,${-r} ${r * 0.9},${r * 0.7} ${-r * 0.9},${r * 0.7}`, Ae = Math.max(r * 3.5, Math.min(e.w, e.h) * 0.45);
    k = h`
      <g class="tracker-marker" style="transform:translate(${w}px, ${ne}px);">
        <circle class="tracker-ring" cx="0" cy="0" r="0"
                fill="none" stroke=${i} stroke-width="1.5"
                style="--fp-tracker-ring-max:${Ae}px;" />
        <circle class="tracker-ring" cx="0" cy="0" r="0"
                fill="none" stroke=${i} stroke-width="1.5"
                style="--fp-tracker-ring-max:${Ae}px; animation-delay:0.7s;" />
        <polygon class="tracker-dot" points=${bt} fill=${i} />
      </g>`;
  } else if (a || f)
    if (a) {
      const w = -g + c * e.w;
      k = h`
        <g class="tracker-line" style="transform:translate(${w}px, 0);">
          <line class="tracker-line-stroke" x1="0" y1=${-m} x2="0" y2=${m}
                stroke=${i} stroke-width="1.5" />
          <line class="tracker-band" x1="0" y1=${-m} x2="0" y2=${m}
                stroke=${i} stroke-width="3" stroke-linecap="round" />
          <line class="tracker-band" x1="0" y1=${-m} x2="0" y2=${m}
                stroke=${i} stroke-width="3" stroke-linecap="round"
                style="animation-delay:0.8s;" />
        </g>`;
    } else {
      const w = -m + l * e.h;
      k = h`
        <g class="tracker-line tracker-line-h" style="transform:translate(0, ${w}px);">
          <line class="tracker-line-stroke" x1=${-g} y1="0" x2=${g} y2="0"
                stroke=${i} stroke-width="1.5" />
          <line class="tracker-band" x1=${-g} y1="0" x2=${g} y2="0"
                stroke=${i} stroke-width="3" stroke-linecap="round" />
          <line class="tracker-band" x1=${-g} y1="0" x2=${g} y2="0"
                stroke=${i} stroke-width="3" stroke-linecap="round"
                style="animation-delay:0.8s;" />
        </g>`;
    }
  else t.editing ? k = h`<circle class="tracker-placeholder" cx="0" cy="0" r=${r}
                          fill=${i} fill-opacity="0.25" />` : k = h``;
  return h`
    <g class="tracker ${t.editing ? "editing" : ""}"
       transform="translate(${n} ${o}) rotate(${s})">
      ${$}${k}
    </g>`;
}
function Ve(e, t, i, r) {
  let n = null, o = r;
  for (const s of i) {
    const c = s.x2 - s.x1, l = s.y2 - s.y1, a = c * c + l * l;
    if (a === 0) continue;
    let f = ((e - s.x1) * c + (t - s.y1) * l) / a;
    f = Math.max(0, Math.min(1, f));
    const p = s.x1 + f * c, g = s.y1 + f * l, m = Math.hypot(e - p, t - g);
    m < o && (o = m, n = { x: p, y: g, angle: Math.atan2(l, c) * 180 / Math.PI });
  }
  return n;
}
const yi = /* @__PURE__ */ new Set(["light", "switch", "cover", "fan", "input_boolean"]);
function _t(e) {
  const t = e?.split(".")[0] ?? "";
  return yi.has(t) ? { action: "toggle" } : { action: "more-info" };
}
function Ge(e) {
  return e !== void 0 && e.action !== "none";
}
function _i(e, t) {
  return t === "tap" ? e.tap_action ?? _t(e.entity) : t === "hold" ? e.hold_action : e.double_tap_action;
}
function $i(e) {
  const t = e.perform_action ?? e.service;
  if (!t || !t.includes(".")) return null;
  const [i, r] = t.split(".", 2);
  return { domain: i, service: r, data: e.data ?? e.service_data, target: e.target };
}
function xi(e, t, i, r) {
  if (!(!r || r.action === "none")) {
    if (r.confirmation) {
      const n = typeof r.confirmation == "object" && r.confirmation.text || `Are you sure you want to ${r.action}?`;
      if (!globalThis.confirm?.(n)) return;
    }
    switch (r.action) {
      case "toggle":
        i.entity && t.callService("homeassistant", "toggle", { entity_id: i.entity });
        break;
      case "more-info": {
        const n = r.entity ?? i.entity;
        n && e.dispatchEvent(
          new CustomEvent("hass-more-info", { detail: { entityId: n }, bubbles: !0, composed: !0 })
        );
        break;
      }
      case "navigate":
        if (r.navigation_path) {
          history.pushState(null, "", r.navigation_path);
          const n = new Event("location-changed");
          n.detail = { replace: !1 }, window.dispatchEvent(n);
        }
        break;
      case "url":
        r.url_path && window.open(r.url_path);
        break;
      case "perform-action":
      case "call-service": {
        const n = $i(r);
        n && t.callService(n.domain, n.service, n.data, n.target);
        break;
      }
      case "fire-dom-event":
        e.dispatchEvent(new CustomEvent("ll-custom", { detail: r, bubbles: !0, composed: !0 }));
        break;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bi = (e) => (...t) => ({ _$litDirective$: e, values: t });
class vi {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, r) {
    this._$Ct = t, this._$AM = i, this._$Ci = r;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
}
const wi = 500, ki = 250;
class Si extends HTMLElement {
  constructor() {
    super(...arguments), this.holdTime = wi, this.held = !1, this.cancelled = !1;
  }
  connectedCallback() {
    Object.assign(this.style, {
      position: "fixed",
      width: "0",
      height: "0"
    }), ["touchcancel", "mouseout", "mouseup", "touchmove", "mousewheel", "wheel", "scroll"].forEach(
      (t) => {
        document.addEventListener(
          t,
          () => {
            this.cancelled = !0, this.timer && (clearTimeout(this.timer), this.timer = void 0);
          },
          { passive: !0 }
        );
      }
    );
  }
  bind(t, i = {}) {
    t.actionHandler && Ei(i, t.actionHandler.options) || (t.actionHandler ? (t.removeEventListener("touchstart", t.actionHandler.start), t.removeEventListener("touchend", t.actionHandler.end), t.removeEventListener("touchcancel", t.actionHandler.end), t.removeEventListener("mousedown", t.actionHandler.start), t.removeEventListener("click", t.actionHandler.end), t.removeEventListener("keydown", t.actionHandler.handleKeyDown)) : t.addEventListener("contextmenu", (r) => {
      r.preventDefault(), r.stopPropagation();
    }), t.actionHandler = { options: i }, !i.disabled && (t.actionHandler.start = () => {
      this.cancelled = !1, this.held = !1, i.hasHold && (this.timer = window.setTimeout(() => {
        this.held = !0;
      }, this.holdTime));
    }, t.actionHandler.end = (r) => {
      if (["touchend", "touchcancel"].includes(r.type) && this.cancelled) {
        this.timer && clearTimeout(this.timer), this.timer = void 0;
        return;
      }
      if ((r.type === "touchend" || r.type === "touchcancel") && (r.cancelable && r.preventDefault(), r.type === "touchcancel")) {
        this.timer && clearTimeout(this.timer), this.timer = void 0;
        return;
      }
      const n = r.target;
      i.hasHold && this.timer && (clearTimeout(this.timer), this.timer = void 0), i.hasHold && this.held ? K(n, "hold") : i.hasDoubleClick ? r.type === "click" && r.detail < 2 || !this.dblClickTimeout ? this.dblClickTimeout = window.setTimeout(() => {
        this.dblClickTimeout = void 0, K(n, "tap");
      }, ki) : (clearTimeout(this.dblClickTimeout), this.dblClickTimeout = void 0, K(n, "double_tap")) : K(n, "tap");
    }, t.actionHandler.handleKeyDown = (r) => {
      ["Enter", " "].includes(r.key) && (r.preventDefault(), r.currentTarget.actionHandler.end(r));
    }, t.addEventListener("touchstart", t.actionHandler.start, { passive: !0 }), t.addEventListener("touchend", t.actionHandler.end), t.addEventListener("touchcancel", t.actionHandler.end), t.addEventListener("mousedown", t.actionHandler.start, { passive: !0 }), t.addEventListener("click", t.actionHandler.end), t.addEventListener("keydown", t.actionHandler.handleKeyDown)));
  }
}
function Ei(e, t) {
  return e.hasHold === t.hasHold && e.hasDoubleClick === t.hasDoubleClick && e.disabled === t.disabled;
}
function K(e, t) {
  e.dispatchEvent(
    new CustomEvent("action", { detail: { action: t }, bubbles: !0, composed: !0 })
  );
}
function Ai() {
  const e = document.body, t = e.querySelector("action-handler-easy-floorplan");
  if (t) return t;
  const i = document.createElement("action-handler-easy-floorplan");
  return e.appendChild(i), i;
}
customElements.get("action-handler-easy-floorplan") || customElements.define("action-handler-easy-floorplan", Si);
const Ti = (e, t) => {
  Ai().bind(e, t);
}, Oi = bi(
  class extends vi {
    update(e, [t]) {
      return Ti(e.element, t), M;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(e) {
    }
  }
);
var Ci = Object.defineProperty, Mi = Object.getOwnPropertyDescriptor, re = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Mi(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Ci(t, i, n), n;
};
let A = class extends I {
  constructor() {
    super(...arguments), this._wallMaskId = `fp-wall-mask-${A._nextWallMaskId++}`, this._watchedEntities = /* @__PURE__ */ new Set();
  }
  setConfig(e) {
    if (!e || typeof e != "object") throw new Error("Invalid configuration");
    const t = e;
    for (const i of ["walls", "openings", "items", "texts", "furniture", "trackers", "floors"])
      if (t[i] != null && !Array.isArray(t[i]))
        throw new Error(`Invalid configuration: "${i}" must be a list`);
    for (const i of ["width", "height", "grid"])
      if (t[i] != null && typeof t[i] != "number")
        throw new Error(`Invalid configuration: "${i}" must be a number`);
    this._config = {
      ...e,
      width: e.width ?? at,
      height: e.height ?? lt,
      walls: e.walls ?? [],
      openings: e.openings ?? [],
      items: e.items ?? [],
      texts: e.texts ?? [],
      furniture: e.furniture ?? []
    }, this._watchedEntities = ce(this._config);
  }
  /**
   * HA pushes a fresh `hass` on every state change anywhere in the instance —
   * for most updates nothing on this plan moved. Skip those renders entirely.
   */
  shouldUpdate(e) {
    if (!(e.size === 1 && e.has("hass"))) return !0;
    const t = e.get("hass");
    return !t || !this.hass ? !0 : ct(t, this.hass, this._watchedEntities);
  }
  getCardSize() {
    return 6;
  }
  static async getConfigElement() {
    return await Promise.resolve().then(() => Xi), document.createElement("easy-floorplan-card-editor");
  }
  static getStubConfig() {
    return {};
  }
  /**
   * Sections-view sizing (grid rows ≈ 56px): room for the 5:3 default canvas.
   * An instance method — HA calls it on the card element (getConfigElement /
   * getStubConfig are the static ones, called before any instance exists).
   */
  getGridOptions() {
    return { columns: 12, rows: 8, min_columns: 6, min_rows: 4 };
  }
  _isOn(e) {
    return ht(e.entity, this.hass?.states[e.entity]?.state);
  }
  /** How far open an opening should be drawn (0..1), from its entity (or default). */
  _openingAmount(e) {
    const t = e.entity ? this.hass?.states[e.entity] : void 0;
    return ft(e, t);
  }
  /** Whether an opening wears its accent: drawn open, or a cover still in transit. */
  _openingActive(e) {
    const t = e.entity ? this.hass?.states[e.entity] : void 0;
    return fi(e, t);
  }
  _itemIcon(e) {
    return pt(e, this.hass?.states[e.entity]);
  }
  _label(e) {
    return e.name ?? this.hass?.states[e.entity]?.attributes?.friendly_name ?? e.entity ?? "";
  }
  _handleItemAction(e, t) {
    this.hass && xi(this, this.hass, t, _i(t, e.detail.action));
  }
  /**
   * Tapping an entity-bound opening: toggle a controllable `cover`, otherwise
   * open the entity's more-info dialog (read-only `binary_sensor`s and
   * position-only covers). See {@link openingClickAction}.
   */
  _onOpeningClick(e) {
    if (!this.hass || !e.entity) return;
    const t = this.hass.states[e.entity]?.attributes?.supported_features ?? 0;
    hi(e.entity, t) === "cover-toggle" ? this.hass.callService("cover", "toggle", { entity_id: e.entity }) : this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId: e.entity },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderBadge(e) {
    const t = e.size ?? X;
    return d`
      <div
        class="badge"
        style="width:${t}px;height:${t}px;transform:rotate(${e.angle ?? 0}deg);"
      >
        <ha-icon
          icon=${this._itemIcon(e)}
          style="--mdc-icon-size:${Math.round(t * 0.62)}px;"
        ></ha-icon>
      </div>
    `;
  }
  _renderItem(e, t) {
    const i = this._isOn(e), r = e.showState ?? e.kind === "sensor", n = e.showIcon ?? !0, o = e.display ?? "badge", s = e.rippleColor ?? "var(--primary-color, #03a9f4)", c = e.rippleSize ?? ve;
    let l = u;
    return o === "ripple" ? l = Q(i, s, c) : o === "iconRipple" ? l = d`<div class="stack">
        ${Q(i, s, c)}
        ${n ? d`<div class="stack-icon">${this._renderBadge(e)}</div>` : u}
      </div>` : n && (l = this._renderBadge(e)), d`
      <div
        class="item ${i ? "on" : "off"}"
        style="left:${e.x / t.width * 100}%; top:${e.y / t.height * 100}%;"
        title=${this._label(e)}
        role="button"
        tabindex="0"
        @action=${(a) => this._handleItemAction(a, e)}
        .actionHandler=${Oi({
      hasHold: Ge(e.hold_action),
      hasDoubleClick: Ge(e.double_tap_action)
    })}
      >
        ${l}
        ${r ? d`<span class="label">${Yt(this.hass, e)}</span>` : u}
      </div>
    `;
  }
  _renderText(e, t) {
    return d`
      <div
        class="text"
        style="left:${e.x / t.width * 100}%; top:${e.y / t.height * 100}%;
               font-size:${e.size ?? Y}px;
               color:${e.color ?? "var(--primary-text-color)"};
               transform:translate(-50%,-50%) rotate(${e.angle ?? 0}deg);"
      >
        ${e.text}
      </div>
    `;
  }
  render() {
    if (!this._config) return d`${u}`;
    const e = this._config, t = ke(e), i = t.find((r) => r.id === this._activeFloorId) ?? t.find((r) => r.id === e.defaultFloor) ?? t[0];
    return d`
      <ha-card .header=${e.title ?? u}>
        <div
          class="stage"
          style="aspect-ratio: ${e.width} / ${e.height}; background:${e.background ?? "var(--card-background-color, #fff)"};"
        >
<!-- preserveAspectRatio="none" is correct here, and it took a wrong fix to
               see why. .stage pins aspect-ratio: width / height inline, so the
               SVG's box already matches its viewBox and "none" never distorts.

               "meet" letterboxes the SVG inside its box. The .items overlay is
               HTML, positioned with raw left/top percentages of .stage, and it
               does not letterbox. So the moment anything overrides the stage's
               ratio (card-mod, a grid row count) the drawing shrinks away from
               the badges and every icon drifts off the wall it was placed on.
               "none" stretches both layers identically: distorted, but aligned.

               The real fix letterboxes both layers together -- wrap the svg and
               the overlay in one aspect-ratio box and centre it. Until then, do
               not "fix" this line. -->
          <svg viewBox="0 0 ${e.width} ${e.height}" preserveAspectRatio="none">
            ${i.image ? h`<image href=${i.image} x="0" y="0" width=${e.width} height=${e.height}
                          preserveAspectRatio="none" opacity=${i.imageOpacity ?? 1} />` : u}
            ${i.furniture.map((r) => de(r))}
            ${gt(i.openings, e.width, e.height, this._wallMaskId)}
            <g mask=${`url(#${this._wallMaskId})`}>
              ${i.walls.map(
      (r) => h`
                <line x1=${r.x1} y1=${r.y1} x2=${r.x2} y2=${r.y2}
                      class="wall" stroke-width=${z} stroke-linecap="round" />`
    )}
            </g>
            ${i.openings.map((r) => {
      const n = this._openingAmount(r), o = mt(r, {
        color: "var(--primary-text-color)",
        open: n > 0,
        amount: n,
        active: this._openingActive(r),
        accent: r.activeColor ?? "var(--primary-color, #03a9f4)"
      });
      if (!r.entity) return o;
      const s = r.length / 2, c = z + 4;
      return h`<g class="fp-opening" @click=${() => this._onOpeningClick(r)}>
                  ${o}
                  <rect class="fp-opening-hit" x=${r.x - s} y=${r.y - c / 2}
                        width=${r.length} height=${c}
                        transform="rotate(${r.angle} ${r.x} ${r.y})" />
                </g>`;
    })}
            ${(i.trackers ?? []).map(
      (r) => yt(r, {
        editing: !1,
        xReading: ee(this.hass?.states, r.xSensor?.entity),
        yReading: ee(this.hass?.states, r.ySensor?.entity),
        xPresent: J(this.hass?.states, r.xSensor?.presence),
        yPresent: J(this.hass?.states, r.ySensor?.presence)
      })
    )}
          </svg>
          <div class="items">
            ${i.texts.map((r) => this._renderText(r, e))}
            ${i.items.filter((r) => r.entity).map((r) => this._renderItem(r, e))}
          </div>
          ${t.length > 1 ? this._renderFloorSwitcher(t, i) : u}
        </div>
      </ha-card>
    `;
  }
  _renderFloorSwitcher(e, t) {
    return d`
      <div class="floor-switcher">
        ${e.map(
      (i) => d`
            <button
              class=${i.id === t.id ? "active" : ""}
              title=${i.name}
              @click=${() => {
        this._activeFloorId = i.id;
      }}
            >
              ${i.name}
            </button>
          `
    )}
      </div>
    `;
  }
};
A._nextWallMaskId = 0;
A.styles = et`
    ha-card {
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }
    .stage {
      position: relative;
      width: 100%;
      padding: 0;
    }
    .floor-switcher {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      pointer-events: auto;
      z-index: 1;
    }
    .floor-switcher button {
      cursor: pointer;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 12px;
      line-height: 1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .floor-switcher button.active {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color, #03a9f4);
    }
    svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
    .wall {
      stroke: var(--primary-text-color);
    }
    .fp-door-leaf,
    .fp-leaf-r {
      transform-box: fill-box;
      transition: transform 0.5s ease;
    }
    .fp-door-leaf {
      transform-origin: left center;
    }
    .fp-leaf-r {
      transform-origin: right center;
    }
    .fp-door-leaf rect,
    .fp-leaf-r rect {
      transition: fill 0.5s ease;
    }
    .fp-door-arc {
      transition: stroke-dashoffset 0.5s ease, stroke 0.5s ease;
    }
    .fp-opening {
      cursor: pointer;
    }
    .fp-opening-hit {
      fill: transparent;
      pointer-events: all;
    }
    .fp-slide-panel {
      transform-box: fill-box;
      transition: transform 0.5s ease;
    }
    .fp-slide-panel rect {
      transition: fill 0.5s ease;
    }
    .items {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .item {
      position: absolute;
      transform: translate(-50%, -50%);
      pointer-events: auto;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .badge {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: var(--card-background-color, #fff);
      border: 1.5px solid var(--divider-color, #ccc);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-text-color);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    .item.on .badge {
      background: var(--state-light-active-color, var(--state-active-color, #fdd835));
      border-color: var(--state-light-active-color, var(--state-active-color, #fdd835));
      color: var(--text-primary-color, #212121);
    }
    ha-icon {
      --mdc-icon-size: 22px;
    }
    .label {
      font-size: 12px;
      line-height: 1;
      padding: 1px 4px;
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      white-space: nowrap;
    }
    .text {
      position: absolute;
      pointer-events: none;
      white-space: nowrap;
      font-weight: 500;
      line-height: 1;
    }
    .stack {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stack-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ripple {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ripple .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 2px solid var(--fp-ripple-color);
      opacity: 0;
    }
    .ripple.active .ring {
      animation: fp-ripple 1.8s ease-out infinite;
    }
    .ripple .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--fp-ripple-color);
      opacity: 0.4;
    }
    .ripple.active .dot {
      opacity: 0.9;
    }
    @keyframes fp-ripple {
      0% {
        transform: scale(0.15);
        opacity: 0.7;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
    /* === Tracker animations (live card). The zone outline is editor-only —
       renderTracker is called with editing:false here, so only the marker /
       line and ripples render. Movement transitions on the group's transform
       so the dot/triangle glides between sensor updates rather than jumping. === */
    .tracker-marker {
      transition: transform 0.4s ease-out;
    }
    .tracker-dot {
      animation: fp-tracker-pulse 1.4s ease-in-out infinite;
      transform-box: fill-box;
      transform-origin: center;
    }
    .tracker-ring {
      animation: fp-tracker-ring 2.2s ease-out infinite;
      opacity: 0;
    }
    .tracker-line {
      transition: transform 0.4s ease-out;
    }
    .tracker-line-stroke {
      opacity: 0.45;
      animation: fp-tracker-pulse 1.6s ease-in-out infinite;
    }
    .tracker-band {
      opacity: 0;
      animation: fp-tracker-band 2.2s ease-out infinite;
    }
    @keyframes fp-tracker-pulse {
      0%,
      100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    @keyframes fp-tracker-ring {
      0% {
        r: 0;
        opacity: 0.7;
      }
      100% {
        r: var(--fp-tracker-ring-max, 60px);
        opacity: 0;
      }
    }
    @keyframes fp-tracker-band {
      0% {
        opacity: 0.5;
        stroke-width: 1.5;
      }
      100% {
        opacity: 0;
        stroke-width: 14;
      }
    }
  `;
re([
  $e({ attribute: !1 })
], A.prototype, "hass", 2);
re([
  b()
], A.prototype, "_config", 2);
re([
  b()
], A.prototype, "_activeFloorId", 2);
A = re([
  st("easy-floorplan-card")
], A);
const he = 26;
function $t(e, t, i, r) {
  let n = null, o = r;
  for (const s of e)
    for (const c of [
      { x: s.x1, y: s.y1 },
      { x: s.x2, y: s.y2 }
    ]) {
      const l = Math.hypot(t - c.x, i - c.y);
      l < o && (o = l, n = { x: c.x, y: c.y });
    }
  return n;
}
function Pi(e, t, i, r, n, o, s, c, l = he) {
  if (s) return { x: o(r), y: o(n) };
  const a = $t(e, r, n, l);
  if (a) return a;
  const f = r - t, p = n - i, g = Math.tan(c * Math.PI / 180);
  return Math.abs(p) <= Math.abs(f) * g ? { x: o(r), y: i } : Math.abs(f) <= Math.abs(p) * g ? { x: t, y: o(n) } : { x: o(r), y: o(n) };
}
function Fi(e, t) {
  const i = Math.min(t.x0, t.x1), r = Math.max(t.x0, t.x1), n = Math.min(t.y0, t.y1), o = Math.max(t.y0, t.y1), s = (l, a) => l >= i && l <= r && a >= n && a <= o, c = [];
  for (const l of e.walls)
    s((l.x1 + l.x2) / 2, (l.y1 + l.y2) / 2) && c.push({ kind: "wall", id: l.id });
  for (const l of e.openings) s(l.x, l.y) && c.push({ kind: "opening", id: l.id });
  for (const l of e.items) s(l.x, l.y) && c.push({ kind: "item", id: l.id });
  for (const l of e.texts) s(l.x, l.y) && c.push({ kind: "text", id: l.id });
  for (const l of e.furniture) s(l.x, l.y) && c.push({ kind: "furniture", id: l.id });
  for (const l of e.trackers ?? [])
    s(l.x + l.w / 2, l.y + l.h / 2) && c.push({ kind: "tracker", id: l.id });
  return c;
}
function Ii(e, t, i, r) {
  return {
    walls: e.walls.map((n) => {
      const o = r.get(`wall:${n.id}`);
      return o && o.kind === "wall" ? { ...n, x1: o.x1 + t, y1: o.y1 + i, x2: o.x2 + t, y2: o.y2 + i } : n;
    }),
    openings: e.openings.map((n) => {
      const o = r.get(`opening:${n.id}`);
      return o && o.kind === "pt" ? { ...n, x: o.x + t, y: o.y + i } : n;
    }),
    items: e.items.map((n) => {
      const o = r.get(`item:${n.id}`);
      return o && o.kind === "pt" ? { ...n, x: o.x + t, y: o.y + i } : n;
    }),
    texts: e.texts.map((n) => {
      const o = r.get(`text:${n.id}`);
      return o && o.kind === "pt" ? { ...n, x: o.x + t, y: o.y + i } : n;
    }),
    furniture: e.furniture.map((n) => {
      const o = r.get(`furniture:${n.id}`);
      return o && o.kind === "pt" ? { ...n, x: o.x + t, y: o.y + i } : n;
    }),
    trackers: (e.trackers ?? []).map((n) => {
      const o = r.get(`tracker:${n.id}`);
      return o && o.kind === "pt" ? { ...n, x: o.x + t, y: o.y + i } : n;
    })
  };
}
function Ze(e) {
  return "text" in e.selector || "number" in e.selector;
}
function Di(e, t, i) {
  const r = {};
  for (const n of i)
    t[n.name] !== e[n.name] && (r[n.name] = t[n.name]);
  return r;
}
function Xe(e, t) {
  const i = {};
  for (const r of t) {
    if (!(r.name in e)) continue;
    let n = e[r.name];
    if ("text" in r.selector || "icon" in r.selector || "entity" in r.selector)
      (n === "" || n == null) && (n = r.required ? "" : void 0);
    else if ("number" in r.selector) {
      const o = typeof n == "string" && n !== "" ? Number(n) : n;
      if (typeof o != "number" || !Number.isFinite(o)) {
        if (r.required) continue;
        n = void 0;
      } else {
        const s = r.selector.number;
        let c = r.name === "angle" ? (o % 360 + 360) % 360 : o;
        s.min !== void 0 && c < s.min && (c = s.min), s.max !== void 0 && c > s.max && (c = s.max), n = c;
      }
    } else "boolean" in r.selector && (n = !!n);
    i[r.name] = n;
  }
  return i;
}
const P = (e) => e, q = () => ({
  name: "angle",
  label: "Angle",
  selector: { number: { min: 0, max: 360, step: 1, mode: "slider", unit_of_measurement: "°" } }
}), x = (e, t) => ({ value: e, label: t }), S = (...e) => ({
  select: { mode: "dropdown", options: e }
}), xt = [
  "table",
  "roundTable",
  "desk",
  "chair",
  "sofa",
  "bed",
  "wardrobe",
  "rug",
  "plant",
  "fridge",
  "stove",
  "sink",
  "toilet",
  "stairs",
  "tv",
  "sectional",
  "washer",
  "dryer",
  "dishwasher",
  "bathtub",
  "vanity",
  "waterHeater",
  "airHandler"
], V = {
  table: "table",
  roundTable: "round table",
  desk: "desk",
  chair: "chair",
  sofa: "sofa",
  bed: "bed",
  wardrobe: "wardrobe",
  rug: "rug",
  plant: "plant",
  fridge: "fridge",
  stove: "stove",
  sink: "sink",
  toilet: "toilet",
  stairs: "stairs",
  tv: "tv",
  sectional: "sectional (L)",
  washer: "washer",
  dryer: "dryer",
  dishwasher: "dishwasher",
  bathtub: "bathtub",
  vanity: "vanity",
  waterHeater: "water heater",
  airHandler: "air handler"
};
function zi(e) {
  const t = L(e), i = ut(e), r = [
    { name: "type", label: "Type", selector: S(x("door", "Door"), x("window", "Window")) },
    { name: "motion", label: "Motion", selector: S(x("swing", "Swing"), x("slide", "Slide")) },
    { name: "length", label: "Length", required: !0, selector: { number: { min: 1, mode: "box" } } }
  ];
  return e.type === "door" && t === "swing" && r.push({
    name: "hinge",
    label: "Hinge",
    selector: S(x("left", "Left"), x("right", "Right"))
  }), t === "swing" && r.push({
    name: "opens",
    label: "Opens",
    selector: S(x("this", "This side"), x("other", "Other side"))
  }), t === "slide" && (i !== "biparting" && r.push({
    name: "slide",
    label: "Slide",
    selector: S(x("left", "To left"), x("right", "To right"))
  }), r.push({
    name: "style",
    label: "Style",
    selector: S(
      x("single", "Single"),
      x("bypass", "Bypass (stack)"),
      x("biparting", "Biparting (split)")
    )
  })), r.push({
    name: "entity",
    label: "Entity",
    helper: "Type and motion follow the entity's device class",
    selector: { entity: { filter: [{ domain: ["binary_sensor", "cover"] }] } }
  }), e.entity && r.push({ name: "invert", label: "Invert", selector: { boolean: {} } }), r.push(q()), {
    fields: r,
    data: {
      type: e.type,
      motion: t,
      length: e.length,
      hinge: e.flipH ? "right" : "left",
      opens: e.flipV ? "other" : "this",
      slide: e.flipH ? "right" : "left",
      style: i,
      entity: e.entity ?? "",
      invert: e.invert ?? !1,
      angle: e.angle
    },
    toPatch(n) {
      const o = {};
      for (const [s, c] of Object.entries(n))
        s === "motion" ? (o.motion = c === "slide" ? "slide" : void 0, c !== "slide" && (o.sliderStyle = void 0)) : s === "hinge" || s === "slide" ? o.flipH = c === "right" || void 0 : s === "opens" ? o.flipV = c === "other" || void 0 : s === "style" ? o.sliderStyle = c === "single" ? void 0 : c : s === "invert" ? o.invert = c || void 0 : o[s] = c;
      return o;
    }
  };
}
function Li(e) {
  const t = e.display ?? "badge", i = [
    { name: "entity", label: "Entity", required: !0, selector: { entity: {} } },
    {
      name: "secondaryEntity",
      label: "Second entity",
      helper: "Shown next to the primary state",
      selector: { entity: {} }
    },
    { name: "icon", label: "Icon", selector: { icon: { placeholder: dt(e.kind) } } },
    { name: "name", label: "Name", selector: { text: {} } },
    {
      name: "size",
      label: "Size",
      selector: { number: { min: 16, max: 160, step: 2, mode: "slider", unit_of_measurement: "px" } }
    },
    q(),
    {
      name: "display",
      label: "Display",
      selector: S(
        x("badge", "Icon badge"),
        x("ripple", "Ripple"),
        x("iconRipple", "Icon + ripple")
      )
    }
  ];
  return t !== "badge" && i.push({
    name: "rippleSize",
    label: "Ripple size",
    selector: { number: { min: 40, max: 400, step: 4, mode: "slider", unit_of_measurement: "px" } }
  }), i.push(
    { name: "showIcon", label: "Show icon", selector: { boolean: {} } },
    { name: "showState", label: "Show state", selector: { boolean: {} } },
    {
      name: "tap_action",
      label: "Tap action",
      selector: { ui_action: { default_action: _t(e.entity).action } }
    },
    { name: "hold_action", label: "Hold action", selector: { ui_action: { default_action: "none" } } },
    {
      name: "double_tap_action",
      label: "Double-tap action",
      selector: { ui_action: { default_action: "none" } }
    }
  ), {
    fields: i,
    data: {
      entity: e.entity,
      secondaryEntity: e.secondaryEntity ?? "",
      icon: e.icon ?? "",
      name: e.name ?? "",
      size: e.size ?? X,
      angle: e.angle ?? 0,
      display: t,
      rippleSize: e.rippleSize ?? ve,
      showIcon: e.showIcon ?? !0,
      showState: e.showState ?? !1,
      tap_action: e.tap_action,
      hold_action: e.hold_action,
      double_tap_action: e.double_tap_action
    },
    toPatch: P
  };
}
function Hi(e) {
  return {
    fields: [
      { name: "text", label: "Text", required: !0, selector: { text: {} } },
      {
        name: "size",
        label: "Size",
        selector: { number: { min: 8, max: 200, mode: "slider", unit_of_measurement: "px" } }
      },
      q()
    ],
    data: { text: e.text, size: e.size ?? Y, angle: e.angle ?? 0 },
    toPatch: P
  };
}
function Ri(e) {
  return {
    fields: [
      {
        name: "type",
        label: "Type",
        selector: {
          select: {
            mode: "dropdown",
            options: xt.map((t) => ({ value: t, label: V[t] }))
          }
        }
      },
      // L-shaped sectional only (#40): which side the chaise extends on,
      // facing the sofa from the front. Conditional, in the same shape
      // openingForm uses for its hinge / slide fields.
      ...e.type === "sectional" ? [
        {
          name: "hand",
          label: "Chaise side",
          helper: "Facing the sofa from the front",
          selector: S(x("right", "right"), x("left", "left"))
        }
      ] : [],
      { name: "w", label: "Width", required: !0, selector: { number: { min: 10, mode: "box" } } },
      { name: "h", label: "Height", required: !0, selector: { number: { min: 10, mode: "box" } } },
      q()
    ],
    data: e.type === "sectional" ? { type: e.type, hand: e.hand ?? "right", w: e.w, h: e.h, angle: e.angle ?? 0 } : { type: e.type, w: e.w, h: e.h, angle: e.angle ?? 0 },
    toPatch: P
  };
}
function Ui(e) {
  return {
    fields: [
      { name: "w", label: "Width", required: !0, selector: { number: { min: 10, mode: "box" } } },
      { name: "h", label: "Height", required: !0, selector: { number: { min: 10, mode: "box" } } },
      { name: "x", label: "X", required: !0, selector: { number: { mode: "box" } } },
      { name: "y", label: "Y", required: !0, selector: { number: { mode: "box" } } },
      q(),
      {
        name: "dotSize",
        label: "Dot size",
        selector: { number: { min: 6, max: 80, mode: "slider", unit_of_measurement: "px" } }
      }
    ],
    data: {
      w: e.w,
      h: e.h,
      x: Math.round(e.x),
      y: Math.round(e.y),
      angle: e.angle ?? 0,
      dotSize: e.dotSize ?? be
    },
    toPatch: P
  };
}
function Ni(e) {
  const t = (i, r) => ({
    name: i,
    label: r,
    required: !0,
    selector: { number: { mode: "box" } }
  });
  return {
    fields: [t("x1", "Start X"), t("y1", "Start Y"), t("x2", "End X"), t("y2", "End Y")],
    data: { x1: Math.round(e.x1), y1: Math.round(e.y1), x2: Math.round(e.x2), y2: Math.round(e.y2) },
    toPatch: P
  };
}
function ji(e) {
  return {
    fields: [
      { name: "title", label: "Title", selector: { text: {} } },
      { name: "width", label: "Canvas width", required: !0, selector: { number: { min: 1, mode: "box" } } },
      { name: "height", label: "Canvas height", required: !0, selector: { number: { min: 1, mode: "box" } } },
      {
        name: "grid",
        label: "Grid size",
        required: !0,
        helper: `Gap between grid lines, in canvas units (canvas is ${e.width}×${e.height}). Smaller = finer grid.`,
        selector: { number: { min: 1, mode: "box" } }
      }
    ],
    data: { title: e.title ?? "", width: e.width, height: e.height, grid: e.grid ?? we },
    toPatch: P
  };
}
function Wi(e) {
  const t = [
    { name: "image", label: "Bg image", helper: "/local/floorplan.png or URL", selector: { text: {} } }
  ];
  return e.image && t.push({
    name: "imageOpacity",
    label: "Image opacity",
    selector: { number: { min: 0, max: 1, step: 0.05, mode: "slider" } }
  }), { fields: t, data: { image: e.image ?? "", imageOpacity: e.imageOpacity ?? 1 }, toPatch: P };
}
var qi = Object.defineProperty, Ki = Object.getOwnPropertyDescriptor, _ = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ki(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && qi(t, i, n), n;
};
const Bi = (e) => e.label, Vi = (e) => e.helper, ae = {
  select: { icon: "mdi:cursor-default", label: "Select" },
  wall: { icon: "mdi:wall", label: "Wall" },
  door: { icon: "mdi:door", label: "Door" },
  window: { icon: "mdi:window-closed-variant", label: "Window" },
  tracker: { icon: "mdi:crosshairs-gps", label: "Tracker" }
}, Gi = {
  wall: "mdi:wall",
  opening: "mdi:door",
  item: "mdi:lightbulb-outline",
  text: "mdi:format-text",
  furniture: "mdi:sofa-outline",
  tracker: "mdi:crosshairs-gps"
}, Ye = 35, Zi = 10;
function Je(e) {
  return e.some((t) => {
    const i = t, r = i.tagName?.toLowerCase();
    return r === "input" || r === "textarea" || r === "select" || r === "ha-form" || r === "ha-entity-picker" || r === "ha-icon-picker" || i.isContentEditable === !0;
  });
}
let y = class extends I {
  constructor() {
    super(...arguments), this._wallMaskId = `fp-edit-wall-mask-${y._nextWallMaskId++}`, this._watchedEntities = /* @__PURE__ */ new Set(), this._tool = "select", this._selection = [], this._draft = null, this._draftTracker = null, this._freeWalls = !1, this._defaultOpeningLength = 60, this._marquee = null, this._history = [], this._future = [], this._zoom = 1, this._floorMenuOpen = !1, this._addMenuOpen = !1, this._projectOpen = !1, this._fullscreen = !1, this._drag = null, this._gesturePointer = null, this._marqueeAdd = !1, this._clipboard = null, this._onKeyDown = (e) => this._handleKeyDown(e), this._onHostKeyDown = (e) => {
      e.key !== "Escape" || !this._fullscreen || Je(e.composedPath()) && (e.preventDefault(), e.stopPropagation(), this._canvasWrap?.focus());
    }, this._onFocusIn = (e) => {
      this._fullscreen && !e.composedPath().includes(this) && (this._fullscreen = !1);
    }, this._liveEditKey = null, this._onEditorPointerDown = () => {
      this._liveEditKey = null;
    }, this._gridCache = null;
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this._onKeyDown, !0), this.addEventListener("keydown", this._onHostKeyDown), window.addEventListener("focusin", this._onFocusIn);
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this._onKeyDown, !0), this.removeEventListener("keydown", this._onHostKeyDown), window.removeEventListener("focusin", this._onFocusIn), super.disconnectedCallback();
  }
  setConfig(e) {
    const t = { ...Gt(e.type || "custom:easy-floorplan-card"), ...e }, i = ke(t).map((r) => structuredClone(r));
    this._config = {
      ...t,
      floors: i,
      walls: [],
      openings: [],
      items: [],
      texts: [],
      furniture: [],
      trackers: []
    }, (!this._activeFloorId || !i.some((r) => r.id === this._activeFloorId)) && (this._activeFloorId = t.defaultFloor && i.some((r) => r.id === t.defaultFloor) ? t.defaultFloor : i[0].id), this._lastEmitted && e !== this._lastEmitted && !le(e, this._lastEmitted) && (this._history = [], this._future = [], this._liveEditKey = null), this._watchedEntities = ce(this._config);
  }
  /**
   * HA replaces `hass` on every state change in the instance; the editor's
   * render is expensive (full SVG + panels). Skip ticks that can't change
   * anything we draw. Entity pickers keep the `hass` they last rendered with —
   * acceptable, the registry data they browse changes rarely.
   */
  shouldUpdate(e) {
    if (!(e.size === 1 && e.has("hass"))) return !0;
    const t = e.get("hass");
    if (!t || !this.hass) return !0;
    const i = (r) => r.floors;
    return i(t) !== i(this.hass) ? !0 : ct(t, this.hass, this._watchedEntities);
  }
  // ---- active floor access -----------------------------------------------
  _floor() {
    const e = this._config.floors ?? [];
    return e.find((t) => t.id === this._activeFloorId) ?? e[0];
  }
  /** Discrete change to the active floor's elements (snapshots for undo). */
  _commitFloor(e) {
    this._commit({ ...this._config, floors: this._patchFloors(e) });
  }
  /** Live change to the active floor's elements (no history snapshot — for dragging). */
  _emitFloor(e) {
    this._emit({ ...this._config, floors: this._patchFloors(e) });
  }
  _patchFloors(e) {
    const t = this._config.floors ?? [], i = t.find((r) => r.id === this._activeFloorId) ?? t[0];
    return t.map((r) => i && r.id === i.id ? { ...r, ...e } : r);
  }
  firstUpdated() {
    this._ensureHaComponents();
    for (const e of ["ha-form", "ha-entity-picker", "ha-icon-picker"])
      customElements.get(e) || customElements.whenDefined(e).then(() => this.requestUpdate());
  }
  /**
   * Promote the expanded editor into the top layer. `position: fixed` alone is
   * not enough: HA's edit dialog puts a `transform` on its surface to offset
   * the safe areas, and any transform makes that surface the containing block
   * for fixed descendants — so a "full-viewport" overlay would fill the narrow
   * dialog instead. A popover escapes it. Collapsing drops the attribute, which
   * hides the popover on its own. Browsers without the API keep the fixed
   * fallback, which is already correct on the mobile dialog (transform: none).
   */
  updated() {
    if (!this._fullscreen) return;
    const e = this._editorEl;
    if (!(!e?.isConnected || typeof e.showPopover != "function") && !e.matches(":popover-open"))
      try {
        e.showPopover();
      } catch {
      }
  }
  /**
   * `ha-form` and the pickers are only defined once HA loads an editor that
   * imports them. The button-card editor statically imports ha-form (and the
   * ui_action selector chain); the entities editor defines ha-entity-picker
   * for the custom tracker rows. Every selector rendered by ha-form
   * lazy-loads its own picker after that.
   */
  async _ensureHaComponents() {
    if (customElements.get("ha-form") && customElements.get("ha-entity-picker")) return;
    const e = await window.loadCardHelpers?.();
    if (e) {
      for (const t of [{ type: "button" }, { type: "entities", entities: [] }])
        try {
          await (await e.createCardElement(t))?.constructor?.getConfigElement?.();
        } catch {
        }
      this.requestUpdate();
    }
  }
  get grid() {
    return this._config.grid ?? we;
  }
  /**
   * Resolved placement snap step. `snap` is tri-state in the config: unset
   * means "follow the grid" (the default behaviour), `0` is free placement,
   * any other number is a custom step. See {@link resolveSnap}.
   */
  get _resolvedSnap() {
    return Vt(this._config.snap, this.grid);
  }
  /** Which radio option the panel's "Snap to" control shows as active. */
  get _snapMode() {
    const e = this._config.snap;
    return e == null ? "grid" : e === 0 ? "off" : "custom";
  }
  _setSnapMode(e) {
    if (e === "grid")
      this._patchConfig({ snap: void 0 });
    else if (e === "off")
      this._patchConfig({ snap: 0 });
    else {
      const t = this._config.snap;
      this._patchConfig({
        snap: t && t > 0 ? t : se(Ue, this.grid)
      });
    }
  }
  /** Grid update plus a custom-snap rescale so its percentage of the grid is preserved. */
  _gridPatch(e) {
    const t = { grid: e };
    if (this._snapMode === "custom") {
      const i = Ne(this._config.snap, this.grid);
      t.snap = se(i, e);
    }
    return t;
  }
  _snap(e) {
    const t = this._resolvedSnap;
    return t > 0 ? Math.round(e / t) * t : e;
  }
  _toVirtual(e, t = !0) {
    const r = this._svg.getScreenCTM();
    if (!r) return { x: 0, y: 0 };
    const n = new DOMPoint(e.clientX, e.clientY).matrixTransform(r.inverse());
    return t ? { x: this._snap(n.x), y: this._snap(n.y) } : { x: n.x, y: n.y };
  }
  /** Nearest existing wall endpoint within ENDPOINT_SNAP, or null. */
  _nearestCorner(e, t) {
    return $t(this._floor().walls, e, t, he);
  }
  /** Snap a raw point to a nearby existing wall endpoint, else to the snap step. */
  _snapWallPoint(e, t) {
    return this._nearestCorner(e, t) ?? { x: this._snap(e), y: this._snap(t) };
  }
  /** See {@link snapWallEnd}: corners win, then axis gravity, then the snap step. */
  _snapWallEnd(e, t, i, r) {
    return Pi(
      this._floor().walls,
      e,
      t,
      i,
      r,
      (n) => this._snap(n),
      this._freeWalls,
      Zi,
      he
    );
  }
  _emit(e) {
    this._config = e, this._watchedEntities = ce(e);
    const t = { ...e };
    for (const i of ["walls", "openings", "items", "texts", "furniture", "trackers"])
      t[i]?.length || delete t[i];
    this._lastEmitted = t, this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: t }, bubbles: !0, composed: !0 })
    );
  }
  _pushHistory(e = null) {
    this._history = [...this._history, structuredClone(this._config)].slice(-60), this._future = [], this._liveEditKey = e;
  }
  /** Discrete change: snapshot for undo, then emit. */
  _commit(e) {
    this._pushHistory(), this._emit(e);
  }
  _undo() {
    if (this._liveEditKey = null, !this._history.length) return;
    this._future = [structuredClone(this._config), ...this._future];
    const e = this._history[this._history.length - 1];
    this._history = this._history.slice(0, -1), this._selection = [], this._emit(e);
  }
  _redo() {
    if (this._liveEditKey = null, !this._future.length) return;
    this._history = [...this._history, structuredClone(this._config)];
    const e = this._future[0];
    this._future = this._future.slice(1), this._selection = [], this._emit(e);
  }
  // ---- selection ----------------------------------------------------------
  /** The element whose properties show in the panel (the most recent selection). */
  _primary() {
    return this._selection[this._selection.length - 1] ?? null;
  }
  _selectOne(e) {
    this._selection = [e], this._liveEditKey = null;
  }
  _toggleSel(e) {
    this._selection = this._isSel(e.kind, e.id) ? this._selection.filter((t) => !(t.kind === e.kind && t.id === e.id)) : [...this._selection, e], this._liveEditKey = null;
  }
  _clearSel() {
    this._selection = [], this._liveEditKey = null;
  }
  /** Pointer-driven selection: modifier toggles; plain click selects unless already in the set. */
  _selectForPointer(e, t) {
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      this._toggleSel(t);
      return;
    }
    this._isSel(t.kind, t.id) || this._selectOne(t);
  }
  _idsOfKind(e) {
    return new Set(this._selection.filter((t) => t.kind === e).map((t) => t.id));
  }
  _mergeSel(e, t) {
    const i = [...e];
    for (const r of t) i.some((n) => n.kind === r.kind && n.id === r.id) || i.push(r);
    return i;
  }
  // ---- keyboard nudging ---------------------------------------------------
  _handleKeyDown(e) {
    const t = this.checkVisibility;
    if (t && !t.call(this)) return;
    const i = e.composedPath();
    if (!i.includes(this)) {
      this._fullscreen && e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), this._fullscreen = !1);
      return;
    }
    if (Je(i)) return;
    const r = e.ctrlKey || e.metaKey, n = e.key.toLowerCase();
    if (!!(this._drag || this._draft || this._draftTracker || this._marquee) && e.key !== "Escape" && !(r && n === "c")) return;
    if (r && n === "c") {
      this._selection.length && (e.preventDefault(), this._copy());
      return;
    }
    if (r && n === "v") {
      this._clipboard && (e.preventDefault(), this._paste());
      return;
    }
    if (r && n === "d") {
      this._selection.length && (e.preventDefault(), this._duplicate());
      return;
    }
    if (r && n === "z") {
      e.preventDefault(), e.shiftKey ? this._redo() : this._undo();
      return;
    }
    if (r && n === "y") {
      e.preventDefault(), this._redo();
      return;
    }
    if (e.key === "Escape") {
      if (this._floorMenuOpen || this._addMenuOpen) {
        e.preventDefault(), e.stopPropagation(), this._floorMenuOpen = !1, this._addMenuOpen = !1;
        return;
      }
      this._draft || this._draftTracker || this._marquee || this._drag ? (e.preventDefault(), e.stopPropagation(), this._cancelGesture()) : this._selection.length ? (e.preventDefault(), e.stopPropagation(), this._clearSel()) : this._fullscreen && (e.preventDefault(), e.stopPropagation(), this._fullscreen = !1);
      return;
    }
    if ((e.key === "Delete" || e.key === "Backspace") && this._selection.length) {
      e.preventDefault(), this._deleteSelected();
      return;
    }
    if (!this._selection.length) return;
    const c = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1]
    }[e.key];
    if (!c) return;
    e.preventDefault();
    const l = e.shiftKey ? this.grid : this._resolvedSnap || 1;
    this._nudge(c[0] * l, c[1] * l);
  }
  _nudge(e, t) {
    if (!this._selection.length) return;
    const i = this._floor(), r = this._idsOfKind("wall"), n = this._idsOfKind("opening"), o = this._idsOfKind("item"), s = this._idsOfKind("text"), c = this._idsOfKind("furniture"), l = this._idsOfKind("tracker");
    this._commitFloor({
      walls: i.walls.map(
        (a) => r.has(a.id) ? { ...a, x1: a.x1 + e, y1: a.y1 + t, x2: a.x2 + e, y2: a.y2 + t } : a
      ),
      openings: i.openings.map((a) => n.has(a.id) ? { ...a, x: a.x + e, y: a.y + t } : a),
      items: i.items.map((a) => o.has(a.id) ? { ...a, x: a.x + e, y: a.y + t } : a),
      texts: i.texts.map((a) => s.has(a.id) ? { ...a, x: a.x + e, y: a.y + t } : a),
      furniture: i.furniture.map(
        (a) => c.has(a.id) ? { ...a, x: a.x + e, y: a.y + t } : a
      ),
      trackers: (i.trackers ?? []).map(
        (a) => l.has(a.id) ? { ...a, x: a.x + e, y: a.y + t } : a
      )
    });
  }
  // ---- canvas (SVG) pointer handling: drawing walls/openings -------------
  /**
   * Best-effort pointer capture. `setPointerCapture` throws NotFoundError when
   * the pointer id isn't active (synthetic events, or HA's dialog re-targeting
   * the pointer), which would abort the rest of the calling handler — we hit
   * exactly that with the tracker tool's drag-to-draw. Capture is an
   * enhancement (smooth dragging past the canvas edge), never a requirement,
   * so failures are safe to swallow.
   */
  _capturePointer(e, t = e.target) {
    try {
      t?.setPointerCapture?.(e.pointerId);
    } catch {
    }
  }
  /** Best-effort release; pointerup releases capture implicitly anyway. */
  _releasePointer(e, t = e.target) {
    try {
      t?.releasePointerCapture?.(e.pointerId);
    } catch {
    }
  }
  _onCanvasDown(e) {
    if (e.button !== 0 || this._gesturePointer !== null) return;
    this._canvasWrap?.focus();
    const t = this._toVirtual(e, !1);
    if (this._tool === "wall") {
      const i = this._freeWalls ? { x: this._snap(t.x), y: this._snap(t.y) } : this._snapWallPoint(t.x, t.y);
      this._draft = { x1: i.x, y1: i.y, x2: i.x, y2: i.y }, this._gesturePointer = e.pointerId, this._capturePointer(e);
      return;
    }
    if (this._tool === "door" || this._tool === "window") {
      this._addOpening(this._tool, this._snap(t.x), this._snap(t.y));
      return;
    }
    if (this._tool === "tracker") {
      const i = this._snap(t.x), r = this._snap(t.y);
      this._draftTracker = { x0: i, y0: r, x1: i, y1: r }, this._gesturePointer = e.pointerId, this._capturePointer(e);
      return;
    }
    this._marqueeAdd = e.shiftKey || e.ctrlKey || e.metaKey, this._marquee = { x0: t.x, y0: t.y, x1: t.x, y1: t.y }, this._gesturePointer = e.pointerId, this._capturePointer(e);
  }
  /**
   * Abort any in-progress gesture. A moved drag is rolled back to the exact
   * pre-drag config (restoring wall-snap angle changes too) and its own
   * history snapshot — matched by identity, in case something else pushed in
   * between — is dropped, so a canceled drag leaves no trace in undo.
   */
  _cancelGesture() {
    this._gesturePointer = null, this._draft = null, this._draftTracker = null, this._marquee = null;
    const e = this._drag;
    this._drag = null, e?.moved && e.snapshot && (this._history = this._history.filter((t) => t !== e.snapshot), this._emit(e.snapshot), this._future = e.priorFuture ?? []);
  }
  _onPointerCancel(e) {
    this._gesturePointer !== null && e.pointerId !== this._gesturePointer || this._cancelGesture();
  }
  /** True when this event belongs to a pointer other than the gesture's. */
  _foreignPointer(e) {
    return this._gesturePointer !== null && e.pointerId !== this._gesturePointer;
  }
  _onCanvasMove(e) {
    if (!this._foreignPointer(e)) {
      if (e.buttons === 0 && (this._drag || this._draft || this._draftTracker || this._marquee)) {
        this._cancelGesture();
        return;
      }
      if (this._tool === "wall" && this._draft) {
        const t = this._toVirtual(e, !1), i = this._snapWallEnd(this._draft.x1, this._draft.y1, t.x, t.y);
        this._draft = { ...this._draft, x2: i.x, y2: i.y };
        return;
      }
      if (this._tool === "tracker" && this._draftTracker) {
        const t = this._toVirtual(e, !1);
        this._draftTracker = {
          ...this._draftTracker,
          x1: this._snap(t.x),
          y1: this._snap(t.y)
        };
        return;
      }
      if (this._marquee) {
        const t = this._toVirtual(e, !1);
        this._marquee = { ...this._marquee, x1: t.x, y1: t.y };
        return;
      }
      this._drag && this._applyDrag(e);
    }
  }
  _onCanvasUp(e) {
    if (!this._foreignPointer(e)) {
      if (this._gesturePointer = null, this._tool === "wall" && this._draft) {
        const t = this._draft;
        if (this._draft = null, t.x1 !== t.x2 || t.y1 !== t.y2) {
          const i = { id: v("wall"), ...t };
          this._commitFloor({ walls: [...this._floor().walls, i] }), this._selection = [{ kind: "wall", id: i.id }];
        }
        return;
      }
      if (this._tool === "tracker" && this._draftTracker) {
        const t = this._draftTracker;
        this._draftTracker = null, this._releasePointer(e);
        const i = Math.min(t.x0, t.x1), r = Math.min(t.y0, t.y1), n = Math.abs(t.x1 - t.x0), o = Math.abs(t.y1 - t.y0);
        n >= this.grid / 2 && o >= this.grid / 2 && this._addTracker(i, r, n, o);
        return;
      }
      if (this._marquee) {
        const t = this._marquee;
        if (this._marquee = null, this._releasePointer(e), !(Math.hypot(t.x1 - t.x0, t.y1 - t.y0) > 4)) {
          this._marqueeAdd || this._clearSel();
          return;
        }
        const r = this._elementsInRect(t);
        this._selection = this._marqueeAdd ? this._mergeSel(this._selection, r) : r, this._liveEditKey = null;
        return;
      }
      this._drag && (this._drag = null, this._releasePointer(e));
    }
  }
  /** All active-floor elements whose center lies inside the marquee rect. */
  _elementsInRect(e) {
    return Fi(this._floor(), e);
  }
  // ---- dragging existing elements ----------------------------------------
  _startDrag(e, t, i) {
    this._tool === "select" && (e.stopPropagation(), this._gesturePointer === null && (this._canvasWrap?.focus(), i ? this._selectOne(t) : this._selectForPointer(e, t), this._drag = {
      primary: t,
      start: this._toVirtual(e, !1),
      orig: this._snapshotSelection(),
      endpoint: i
    }, this._gesturePointer = e.pointerId, this._capturePointer(e)));
  }
  /** Capture the start positions of every selected element on the active floor. */
  _snapshotSelection() {
    const e = this._floor(), t = /* @__PURE__ */ new Map();
    for (const i of this._selection)
      if (i.kind === "wall") {
        const r = e.walls.find((n) => n.id === i.id);
        r && t.set(`wall:${r.id}`, { kind: "wall", x1: r.x1, y1: r.y1, x2: r.x2, y2: r.y2 });
      } else if (i.kind === "opening") {
        const r = e.openings.find((n) => n.id === i.id);
        r && t.set(`opening:${r.id}`, { kind: "pt", x: r.x, y: r.y });
      } else if (i.kind === "item") {
        const r = e.items.find((n) => n.id === i.id);
        r && t.set(`item:${r.id}`, { kind: "pt", x: r.x, y: r.y });
      } else if (i.kind === "text") {
        const r = e.texts.find((n) => n.id === i.id);
        r && t.set(`text:${r.id}`, { kind: "pt", x: r.x, y: r.y });
      } else if (i.kind === "furniture") {
        const r = e.furniture.find((n) => n.id === i.id);
        r && t.set(`furniture:${r.id}`, { kind: "pt", x: r.x, y: r.y });
      } else {
        const r = (e.trackers ?? []).find((n) => n.id === i.id);
        r && t.set(`tracker:${r.id}`, { kind: "pt", x: r.x, y: r.y });
      }
    return t;
  }
  _applyDrag(e) {
    const t = this._drag, i = this._toVirtual(e, !1);
    if (!t.moved) {
      if (Math.hypot(i.x - t.start.x, i.y - t.start.y) <= 4) return;
      t.moved = !0, t.priorFuture = this._future, this._pushHistory(), t.snapshot = this._history[this._history.length - 1];
    }
    const r = this._floor();
    if (t.endpoint) {
      const a = this._snapWallPoint(i.x, i.y), f = r.walls.map((p) => p.id !== t.primary.id ? p : t.endpoint === 1 ? { ...p, x1: a.x, y1: a.y } : { ...p, x2: a.x, y2: a.y });
      this._emitFloor({ walls: f });
      return;
    }
    if (this._selection.length === 1 && t.primary.kind === "opening") {
      const a = t.orig.get(`opening:${t.primary.id}`);
      if (a && a.kind === "pt") {
        const f = a.x + (i.x - t.start.x), p = a.y + (i.y - t.start.y), g = Ve(f, p, r.walls, Ye), m = r.openings.map(
          ($) => $.id === t.primary.id ? g ? { ...$, x: g.x, y: g.y, angle: g.angle } : { ...$, x: this._snap(f), y: this._snap(p) } : $
        );
        this._emitFloor({ openings: m });
        return;
      }
    }
    const n = t.orig.get(`${t.primary.kind}:${t.primary.id}`);
    if (!n) return;
    const o = n.kind === "wall" ? n.x1 : n.x, s = n.kind === "wall" ? n.y1 : n.y, c = this._snap(o + (i.x - t.start.x)) - o, l = this._snap(s + (i.y - t.start.y)) - s;
    this._emitFloor(this._applyDelta(c, l, t.orig));
  }
  /** Translate every snapshotted element by (dx, dy). */
  _applyDelta(e, t, i) {
    return Ii(this._floor(), e, t, i);
  }
  // ---- overlay drag for items & texts (HTML, not SVG) --------------------
  _onOverlayDown(e, t) {
    this._tool === "select" && (e.stopPropagation(), e.preventDefault(), this._gesturePointer === null && (this._canvasWrap?.focus(), this._selectForPointer(e, t), this._drag = {
      primary: t,
      start: this._toVirtual(e, !1),
      orig: this._snapshotSelection()
    }, this._gesturePointer = e.pointerId, this._capturePointer(e, e.currentTarget)));
  }
  _onOverlayMove(e) {
    if (!this._foreignPointer(e)) {
      if (e.buttons === 0 && this._drag) {
        this._cancelGesture();
        return;
      }
      this._drag && this._applyDrag(e);
    }
  }
  _onOverlayUp(e) {
    this._foreignPointer(e) || (this._gesturePointer = null, this._drag && (this._drag = null, this._releasePointer(e, e.currentTarget)));
  }
  // ---- element creation / mutation ---------------------------------------
  _addOpening(e, t, i) {
    const r = this._floor(), n = Ve(t, i, r.walls, Ye), o = {
      id: v(e),
      type: e,
      x: n?.x ?? t,
      y: n?.y ?? i,
      // User-editable from the door/window context bar so opening size can be
      // set BEFORE placing (the previous hardcoded 60 forced place-then-resize).
      length: this._defaultOpeningLength,
      angle: n?.angle ?? 0
    };
    this._commitFloor({ openings: [...r.openings, o] }), this._selection = [{ kind: "opening", id: o.id }], this._tool = "select";
  }
  _addItem(e) {
    const t = {
      id: v("item"),
      entity: "",
      x: this._snap(this._config.width / 2),
      y: this._snap(this._config.height / 2),
      kind: e,
      showState: e === "sensor",
      showIcon: !0,
      size: X
    };
    this._commitFloor({ items: [...this._floor().items, t] }), this._selection = [{ kind: "item", id: t.id }], this._tool = "select";
  }
  _addFurniture(e) {
    const t = Re[e], i = {
      id: v("furn"),
      type: e,
      x: this._snap(this._config.width / 2),
      y: this._snap(this._config.height / 2),
      w: t.w,
      h: t.h,
      angle: 0
    };
    this._commitFloor({ furniture: [...this._floor().furniture, i] }), this._selection = [{ kind: "furniture", id: i.id }], this._tool = "select";
  }
  /**
   * Drop a new Tracker on the active floor sized to the user's drag and
   * select it so the per-element editor (entity pickers + sensor ranges) is
   * immediately reachable. Tool switches back to Select so the user can
   * configure / move the new tracker without re-dragging.
   */
  _addTracker(e, t, i, r) {
    const n = {
      id: v("tracker"),
      x: e,
      y: t,
      w: i,
      h: r,
      angle: 0,
      dotSize: be
    };
    this._commitFloor({ trackers: [...this._floor().trackers ?? [], n] }), this._selection = [{ kind: "tracker", id: n.id }], this._tool = "select";
  }
  _addText() {
    const e = {
      id: v("text"),
      x: this._snap(this._config.width / 2),
      y: this._snap(this._config.height / 2),
      text: "Label",
      size: Y
    };
    this._commitFloor({ texts: [...this._floor().texts, e] }), this._selection = [{ kind: "text", id: e.id }], this._tool = "select";
  }
  _deleteSelected() {
    if (!this._selection.length) return;
    const e = this._floor(), t = this._idsOfKind("wall"), i = this._idsOfKind("opening"), r = this._idsOfKind("item"), n = this._idsOfKind("text"), o = this._idsOfKind("furniture"), s = this._idsOfKind("tracker");
    this._commitFloor({
      walls: e.walls.filter((c) => !t.has(c.id)),
      openings: e.openings.filter((c) => !i.has(c.id)),
      items: e.items.filter((c) => !r.has(c.id)),
      texts: e.texts.filter((c) => !n.has(c.id)),
      furniture: e.furniture.filter((c) => !o.has(c.id)),
      trackers: (e.trackers ?? []).filter((c) => !s.has(c.id))
    }), this._clearSel();
  }
  // ---- clipboard (copy / paste / duplicate) ------------------------------
  _copy() {
    if (!this._selection.length) return;
    const e = this._floor(), t = this._idsOfKind("wall"), i = this._idsOfKind("opening"), r = this._idsOfKind("item"), n = this._idsOfKind("text"), o = this._idsOfKind("furniture"), s = this._idsOfKind("tracker");
    this._clipboard = structuredClone({
      walls: e.walls.filter((c) => t.has(c.id)),
      openings: e.openings.filter((c) => i.has(c.id)),
      items: e.items.filter((c) => r.has(c.id)),
      texts: e.texts.filter((c) => n.has(c.id)),
      furniture: e.furniture.filter((c) => o.has(c.id)),
      trackers: (e.trackers ?? []).filter((c) => s.has(c.id))
    });
  }
  /** Paste the clipboard onto the active floor, offset by one snap step, with fresh ids. */
  _paste() {
    if (!this._clipboard) return;
    const e = structuredClone(this._clipboard), t = this._resolvedSnap || this.grid, i = this._floor(), r = e.walls.map((a) => ({
      ...a,
      id: v("wall"),
      x1: a.x1 + t,
      y1: a.y1 + t,
      x2: a.x2 + t,
      y2: a.y2 + t
    })), n = e.openings.map((a) => ({
      ...a,
      id: v(a.type),
      x: a.x + t,
      y: a.y + t
    })), o = e.items.map((a) => ({
      ...a,
      id: v("item"),
      x: a.x + t,
      y: a.y + t
    })), s = e.texts.map((a) => ({
      ...a,
      id: v("text"),
      x: a.x + t,
      y: a.y + t
    })), c = e.furniture.map((a) => ({
      ...a,
      id: v("furn"),
      x: a.x + t,
      y: a.y + t
    })), l = (e.trackers ?? []).map((a) => ({
      ...a,
      id: v("tracker"),
      x: a.x + t,
      y: a.y + t
    }));
    this._commitFloor({
      walls: [...i.walls, ...r],
      openings: [...i.openings, ...n],
      items: [...i.items, ...o],
      texts: [...i.texts, ...s],
      furniture: [...i.furniture, ...c],
      trackers: [...i.trackers ?? [], ...l]
    }), this._selection = [
      ...r.map((a) => ({ kind: "wall", id: a.id })),
      ...n.map((a) => ({ kind: "opening", id: a.id })),
      ...o.map((a) => ({ kind: "item", id: a.id })),
      ...s.map((a) => ({ kind: "text", id: a.id })),
      ...c.map((a) => ({ kind: "furniture", id: a.id })),
      ...l.map((a) => ({ kind: "tracker", id: a.id }))
    ], this._tool = "select";
  }
  _duplicate() {
    this._copy(), this._paste();
  }
  // ---- floors -------------------------------------------------------------
  /** Add a floor that reuses the current floor's walls (fresh ids) and nothing else. */
  _addFloor() {
    const e = this._floor().walls.map((n) => ({ ...n, id: v("wall") })), t = (this._config.floors?.length ?? 1) + 1, i = Zt(`Floor ${t}`, e), r = [...this._config.floors ?? [], i];
    this._activeFloorId = i.id, this._clearSel(), this._commit({ ...this._config, floors: r });
  }
  _switchFloor(e) {
    e !== this._activeFloorId && (this._activeFloorId = e, this._clearSel());
  }
  _renameFloor(e, t) {
    this._commit({
      ...this._config,
      floors: (this._config.floors ?? []).map((i) => i.id === e ? { ...i, name: t } : i)
    });
  }
  /**
   * Link the active floor to a Home Assistant floor (issue #24). Linking also
   * names the floor after the HA floor — the point of the association — while
   * a later manual rename sticks (we never re-sync silently). Unlinking keeps
   * the current name.
   */
  _linkHaFloor(e) {
    const t = je(this.hass).find((i) => i.floor_id === e);
    this._commit({
      ...this._config,
      floors: (this._config.floors ?? []).map(
        (i) => i.id === this._activeFloorId ? { ...i, haFloor: t?.floor_id, ...t ? { name: t.name } : {} } : i
      )
    });
  }
  /** HA-floor link row for the floor gear popover; hidden when HA exposes no floors. */
  _renderHaFloorRow(e) {
    const t = je(this.hass);
    return t.length ? d`
      <div class="pop-row">
        <label>HA floor</label>
        <select
          .value=${e?.haFloor ?? ""}
          @change=${(i) => this._linkHaFloor(i.target.value)}
        >
          <option value="" ?selected=${!e?.haFloor}>(not linked)</option>
          ${t.map(
      (i) => d`<option value=${i.floor_id} ?selected=${e?.haFloor === i.floor_id}>
                ${i.name}
              </option>`
    )}
        </select>
      </div>
    ` : d`${u}`;
  }
  _deleteFloor() {
    const e = this._config.floors ?? [];
    if (e.length <= 1) return;
    const t = e.findIndex((r) => r.id === this._activeFloorId), i = e.filter((r) => r.id !== this._activeFloorId);
    this._commit({ ...this._config, floors: i }), this._activeFloorId = i[Math.max(0, t - 1)].id, this._clearSel();
  }
  _updateWall(e, t) {
    this._commitFloor({
      walls: this._floor().walls.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateOpening(e, t) {
    this._commitFloor({
      openings: this._floor().openings.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateItem(e, t) {
    this._commitFloor({
      items: this._floor().items.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateText(e, t) {
    this._commitFloor({
      texts: this._floor().texts.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateFurniture(e, t) {
    this._commitFloor({
      furniture: this._floor().furniture.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateTracker(e, t) {
    this._commitFloor({
      trackers: (this._floor().trackers ?? []).map(
        (i) => i.id === e ? { ...i, ...t } : i
      )
    });
  }
  /** Patch a single field on one of a tracker's sensor sub-objects (X / Y axis). */
  _updateTrackerSensor(e, t, i) {
    const r = (this._floor().trackers ?? []).find((o) => o.id === e);
    if (!r) return;
    if (i === null) {
      this._updateTracker(e, { [t]: void 0 });
      return;
    }
    const n = r[t] ?? { entity: "", min: 0, max: 5 };
    this._updateTracker(e, { [t]: { ...n, ...i } });
  }
  _patchConfig(e) {
    this._commit({ ...this._config, ...e });
  }
  /**
   * Live variants for continuous controls (sliders, color pickers, typing):
   * one undo snapshot per edit burst — keyed by element and fields — then
   * plain emits, instead of a full-config clone per input event.
   */
  _beginLive(e, t, i) {
    const r = `${e}:${t}:${Object.keys(i).sort().join(",")}`;
    this._liveEditKey !== r && this._pushHistory(r);
  }
  _updateOpeningLive(e, t) {
    this._beginLive("opening", e, t), this._emitFloor({
      openings: this._floor().openings.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateItemLive(e, t) {
    this._beginLive("item", e, t), this._emitFloor({
      items: this._floor().items.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateTextLive(e, t) {
    this._beginLive("text", e, t), this._emitFloor({
      texts: this._floor().texts.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateFurnitureLive(e, t) {
    this._beginLive("furniture", e, t), this._emitFloor({
      furniture: this._floor().furniture.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _updateTrackerLive(e, t) {
    this._beginLive("tracker", e, t), this._emitFloor({
      trackers: (this._floor().trackers ?? []).map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _patchConfigLive(e) {
    this._beginLive("config", "", e), this._emit({ ...this._config, ...e });
  }
  _updateWallLive(e, t) {
    this._beginLive("wall", e, t), this._emitFloor({
      walls: this._floor().walls.map((i) => i.id === e ? { ...i, ...t } : i)
    });
  }
  _patchFloorLive(e) {
    this._beginLive("floor", this._activeFloorId, e), this._emitFloor(e);
  }
  /** Route a form patch to the right per-kind update helper (commit or burst). */
  _applyElementPatch(e, t, i, r) {
    switch (e) {
      case "opening":
        r ? this._updateOpeningLive(t, i) : this._updateOpening(t, i);
        break;
      case "item":
        r ? this._updateItemLive(t, i) : this._updateItem(t, i);
        break;
      case "text":
        r ? this._updateTextLive(t, i) : this._updateText(t, i);
        break;
      case "furniture":
        r ? this._updateFurnitureLive(t, i) : this._updateFurniture(t, i);
        break;
      case "tracker":
        r ? this._updateTrackerLive(t, i) : this._updateTracker(t, i);
        break;
      case "wall":
        r ? this._updateWallLive(t, i) : this._updateWall(t, i);
        break;
    }
  }
  // ---- rendering ----------------------------------------------------------
  // ---- zoom ----------------------------------------------------------------
  _setZoom(e) {
    this._zoom = Math.min(3, Math.max(0.5, Math.round(e * 100) / 100));
  }
  /** Ctrl/Cmd + wheel zooms the canvas (also catches trackpad pinch); plain wheel scrolls. */
  _onCanvasWheel(e) {
    !e.ctrlKey && !e.metaKey || (e.preventDefault(), this._setZoom(this._zoom - Math.sign(e.deltaY) * 0.1));
  }
  /** Reset to 100% (where the stage fits the wrap width) and scroll home. */
  _fitView() {
    this._setZoom(1), this._canvasWrap?.scrollTo({ top: 0, left: 0 });
  }
  /** One-line description of the selected element for the Element header. */
  _selectionSummary(e) {
    const t = this._floor();
    switch (e.kind) {
      case "wall": {
        const i = t.walls.find((r) => r.id === e.id);
        return i ? `Wall · ${Math.round(Math.hypot(i.x2 - i.x1, i.y2 - i.y1))} units` : "Wall";
      }
      case "opening": {
        const i = t.openings.find((r) => r.id === e.id);
        return i ? `${i.type === "door" ? "Door" : "Window"} · ${Math.round(i.length)} units` : "Opening";
      }
      case "item": {
        const i = t.items.find((r) => r.id === e.id);
        return i?.entity ? `Device · ${i.entity}` : "Device";
      }
      case "text": {
        const r = t.texts.find((n) => n.id === e.id)?.text ?? "";
        return r ? `Text · “${r.length > 24 ? `${r.slice(0, 24)}…` : r}”` : "Text";
      }
      case "furniture": {
        const i = t.furniture.find((n) => n.id === e.id);
        if (!i) return "Furniture";
        const r = V[i.type];
        return `${r.charAt(0).toUpperCase()}${r.slice(1)} · ${Math.round(i.w)}×${Math.round(i.h)}`;
      }
      default: {
        const i = (t.trackers ?? []).find((r) => r.id === e.id);
        return i ? `Tracker · ${Math.round(i.w)}×${Math.round(i.h)}` : "Tracker";
      }
    }
  }
  _renderGrid() {
    const { width: e, height: t } = this._config, i = this.grid, r = `${e}x${t}x${i}`;
    if (this._gridCache?.key === r) return this._gridCache.lines;
    const n = [];
    for (let o = 0; o <= e; o += i)
      n.push(h`<line x1=${o} y1="0" x2=${o} y2=${t} class="grid" />`);
    for (let o = 0; o <= t; o += i)
      n.push(h`<line x1="0" y1=${o} x2=${e} y2=${o} class="grid" />`);
    return this._gridCache = { key: r, lines: n }, n;
  }
  _isSel(e, t) {
    return this._selection.some((i) => i.kind === e && i.id === t);
  }
  /**
   * The second toolbar row: shows controls and hints for whatever you're
   * currently doing — options for the active drawing tool, or actions for the
   * current selection. This keeps contextual controls (which come and go) out
   * of the always-present top row.
   */
  _renderContextBar() {
    const e = this._tool;
    let t, i;
    if (e === "wall")
      t = "Wall", i = d`
        <button
          class=${this._freeWalls ? "" : "active"}
          aria-pressed=${!this._freeWalls}
          title="Snap walls to horizontal/vertical and existing corners (off = draw freely)"
          @click=${() => {
        this._freeWalls = !this._freeWalls;
      }}
        >
          straighten
        </button>
        <span class="ctx-hint">Drag to draw. Endpoints snap to nearby corners to close rooms.</span>
      `;
    else if (e === "tracker")
      t = "Tracker", i = d`
        <span class="ctx-hint"
          >Drag on the canvas to draw the tracked area; bind one or two
          distance sensors in the Element editor.</span
        >
      `;
    else if (e === "door" || e === "window")
      t = e === "door" ? "Door" : "Window", i = d`
        <label class="ctx-field">
          Length
          <input
            class="num"
            type="number"
            min="1"
            .value=${String(this._defaultOpeningLength)}
            title="Default length applied to the next ${e} you place"
            @change=${(r) => {
        this._defaultOpeningLength = Math.max(
          1,
          Number(r.target.value) || this._defaultOpeningLength
        );
      }}
          />
        </label>
        <span class="ctx-hint">Click on a wall to drop a ${e}; it snaps onto the wall.</span>
      `;
    else {
      t = "Select";
      const r = this._selection.length;
      i = r === 0 ? d`<span class="ctx-hint"
              >Click an element to select it, or drag a box to select several.</span
            >` : d`
              <span class="ctx-count">${r} selected</span>
              <span class="ctx-hint">Properties and actions are in the Element section below.</span>
            `;
    }
    return d`
      <div class="context-bar">
        <span class="ctx-label">${t}</span>
        ${i}
        <span class="ctx-divider"></span>
        ${this._renderSnapControl()}
      </div>
    `;
  }
  /**
   * Snap control rendered at the end of the context bar for every tool. The
   * setting governs placement / drag / wall drawing across all tools, so the
   * control needs to be reachable regardless of which tool is active.
   */
  _renderSnapControl() {
    const e = this._snapMode, t = Ne(this._config.snap, this.grid), i = [
      { id: "grid", label: "On" },
      { id: "off", label: "Off" },
      { id: "custom", label: "Custom" }
    ], r = e === "grid" ? `Snapping to the ${this.grid}-unit grid.` : e === "off" ? "No snapping — free placement." : `Snap = ${t}% of grid (${this._resolvedSnap} units).`;
    return d`
      <span class="ctx-field-label">Snap</span>
      <div class="seg" role="group" aria-label="Snap mode">
        ${i.map(
      (n) => d`
            <button
              class=${e === n.id ? "active" : ""}
              aria-pressed=${e === n.id}
              title=${n.id === "grid" ? "Snap to the grid" : n.id === "off" ? "Free placement" : "Custom step (% of grid)"}
              @click=${() => this._setSnapMode(n.id)}
            >
              ${n.label}
            </button>
          `
    )}
      </div>
      ${e === "custom" ? d`<input
              class="num"
              type="number"
              min="1"
              step="5"
              .value=${String(t)}
              title="Custom snap step, as a percentage of the grid"
              @change=${(n) => {
      const o = Math.max(
        1,
        Number(n.target.value) || Ue
      );
      this._patchConfig({ snap: se(o, this.grid) });
    }}
            /><span class="ctx-field-label">%</span>` : u}
      <span class="ctx-hint">${r}</span>
    `;
  }
  render() {
    if (!this._config) return d`${u}`;
    const e = this._config, t = this._floor(), i = e.floors ?? [], r = !t.walls.length && !t.openings.length && !t.items.length && !t.texts.length && !t.furniture.length && !(t.trackers ?? []).length;
    return d`
      <div
        class="editor ${this._fullscreen ? "fullscreen" : ""}"
        popover=${this._fullscreen ? "manual" : u}
        @pointerdown=${this._onEditorPointerDown}
      >
        ${this._floorMenuOpen || this._addMenuOpen ? d`<div
              class="pop-backdrop"
              @click=${() => {
      this._floorMenuOpen = !1, this._addMenuOpen = !1;
    }}
            ></div>` : u}
        <div class="toolbar">
          <!-- Tools — modes; exactly one is active at a time -->
          <div class="seg" role="group" aria-label="Tool">
            ${["select", "wall", "door", "window", "tracker"].map(
      (n) => d`
                <button
                  class=${this._tool === n ? "active" : ""}
                  aria-pressed=${this._tool === n}
                  title=${ae[n].label}
                  @click=${() => {
        this._tool = n, this._draft = null, this._draftTracker = null;
      }}
                >
                  <ha-icon icon=${ae[n].icon}></ha-icon>${ae[n].label}
                </button>`
    )}
          </div>

          <span class="divider"></span>

          <!-- Expand: break out of HA's narrow config dialog into a full-screen
               workspace. Kept next to the tools so it's reachable even when the
               toolbar wraps at dialog width. -->
          <button
            class=${this._fullscreen ? "active expand-toggle" : "expand-toggle"}
            aria-pressed=${this._fullscreen}
            title=${this._fullscreen ? "Exit full screen (Esc)" : "Edit full screen — more room for the canvas"}
            @click=${() => this._toggleFullscreen()}
          >
            <ha-icon icon=${this._fullscreen ? "mdi:fullscreen-exit" : "mdi:fullscreen"}></ha-icon>
            ${this._fullscreen ? "Exit" : "Expand"}
          </button>

          <span class="divider"></span>

          <!-- Insert — one popover for everything droppable on the floor -->
          <span class="pop-wrap">
            <button
              aria-haspopup="true"
              aria-expanded=${this._addMenuOpen}
              @click=${() => {
      this._addMenuOpen = !this._addMenuOpen, this._floorMenuOpen = !1;
    }}
            >
              + Add
            </button>
            ${this._addMenuOpen ? this._renderAddMenu() : u}
          </span>

          <span class="spacer"></span>

          <!-- History -->
          <div class="group">
            <button aria-label="Undo" title="Undo (Ctrl/Cmd+Z)" ?disabled=${!this._history.length} @click=${this._undo}>
              <ha-icon icon="mdi:undo"></ha-icon>
            </button>
            <button aria-label="Redo" title="Redo (Ctrl/Cmd+Shift+Z)" ?disabled=${!this._future.length} @click=${this._redo}>
              <ha-icon icon="mdi:redo"></ha-icon>
            </button>
          </div>

          <span class="divider"></span>

          <!-- Floor — switch + add inline; rename/delete behind the gear -->
          <span class="floors pop-wrap">
            <label>floor</label>
            <select @change=${(n) => this._switchFloor(n.target.value)}>
              ${i.map(
      (n) => d`<option value=${n.id} ?selected=${n.id === this._activeFloorId}>${n.name}</option>`
    )}
            </select>
            <button
              aria-label="Add floor"
              title="Add a floor (copies the current walls)"
              @click=${this._addFloor}
            >
              +
            </button>
            <button
              aria-label="Floor settings"
              title="Rename or delete this floor"
              aria-haspopup="true"
              aria-expanded=${this._floorMenuOpen}
              @click=${() => {
      this._floorMenuOpen = !this._floorMenuOpen, this._addMenuOpen = !1;
    }}
            >
              <ha-icon icon="mdi:cog-outline"></ha-icon>
            </button>
            ${this._floorMenuOpen ? d`<div class="pop">
                  ${this._renderHaFloorRow(t)}
                  <div class="pop-row">
                    <label>Rename</label>
                    <input
                      class="floor-name"
                      type="text"
                      .value=${t?.name ?? ""}
                      @change=${(n) => this._renameFloor(this._activeFloorId, n.target.value)}
                    />
                  </div>
                  <button
                    class="danger pop-action"
                    ?disabled=${i.length <= 1}
                    @click=${() => {
      this._deleteFloor(), this._floorMenuOpen = !1;
    }}
                  >
                    <ha-icon icon="mdi:delete-outline"></ha-icon> Delete this floor
                  </button>
                </div>` : u}
          </span>
        </div>

        ${this._renderContextBar()}

        <div class="workspace">
        <div class="canvas-outer">
        <div class="canvas-wrap" tabindex="0" @wheel=${this._onCanvasWheel}>
          <div class="stage" style="aspect-ratio: ${e.width} / ${e.height}; width:${this._zoom * 100}%;">
            <svg
              viewBox="0 0 ${e.width} ${e.height}"
              preserveAspectRatio="none"
              class=${this._tool}
              @pointerdown=${this._onCanvasDown}
              @pointermove=${this._onCanvasMove}
              @pointerup=${this._onCanvasUp}
              @pointercancel=${this._onPointerCancel}
            >
              <rect
                x="0"
                y="0"
                width=${e.width}
                height=${e.height}
                fill=${e.background ?? "var(--card-background-color, #fff)"}
              />
              ${t.image ? h`<image href=${t.image} x="0" y="0" width=${e.width} height=${e.height}
                            preserveAspectRatio="none" opacity=${t.imageOpacity ?? 1} />` : u}
              ${this._renderGrid()}
              ${t.furniture.map((n) => this._renderFurnitureSel(n))}
              ${gt(t.openings, e.width, e.height, this._wallMaskId)}
              ${t.walls.map((n) => this._renderWall(n))}
              ${t.openings.map((n) => this._renderOpeningSel(n))}
              ${(t.trackers ?? []).map((n) => this._renderTrackerSel(n))}
              ${this._draftTracker ? h`<rect class="tracker-draft"
                              x=${Math.min(this._draftTracker.x0, this._draftTracker.x1)}
                              y=${Math.min(this._draftTracker.y0, this._draftTracker.y1)}
                              width=${Math.abs(this._draftTracker.x1 - this._draftTracker.x0)}
                              height=${Math.abs(this._draftTracker.y1 - this._draftTracker.y0)}
                              rx="4" />` : u}
              ${this._draft ? h`<line x1=${this._draft.x1} y1=${this._draft.y1}
                              x2=${this._draft.x2} y2=${this._draft.y2}
                              class="wall draft" mask=${`url(#${this._wallMaskId})`}
                              stroke-width=${z} />` : u}
              ${this._marquee ? h`<rect x=${Math.min(this._marquee.x0, this._marquee.x1)}
                              y=${Math.min(this._marquee.y0, this._marquee.y1)}
                              width=${Math.abs(this._marquee.x1 - this._marquee.x0)}
                              height=${Math.abs(this._marquee.y1 - this._marquee.y0)}
                              class="marquee" />` : u}
            </svg>
            <div class="items">
              ${t.texts.map((n) => this._renderTextOverlay(n, e))}
              ${t.items.map((n) => this._renderItemOverlay(n, e))}
            </div>
          </div>
        </div>
        ${r && !this._draft && !this._draftTracker ? d`<div class="empty-hint">
              <div>
                <b>Draw your first room:</b> pick the <b>Wall</b> tool and drag on the canvas.<br />
                Then drop doors, windows and devices onto it.
              </div>
            </div>` : u}
        <div class="zoom-overlay">
          <button aria-label="Zoom out" title="Zoom out" @click=${() => this._setZoom(this._zoom - 0.25)}>
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <button class="zoom-val-btn" title="Reset zoom to 100%" @click=${() => this._setZoom(1)}>
            ${Math.round(this._zoom * 100)}%
          </button>
          <button aria-label="Zoom in" title="Zoom in" @click=${() => this._setZoom(this._zoom + 0.25)}>
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
          <button aria-label="Fit to view" title="Fit to view" @click=${this._fitView}>
            <ha-icon icon="mdi:fit-to-screen-outline"></ha-icon>
          </button>
        </div>
        </div>

        <div class="side">
          ${this._renderElementEdit()}
          ${this._renderPanel()}
        </div>
        </div>
      </div>
    `;
  }
  /**
   * `ha-entity-picker` when defined, else a plain entity-id input — mirrors
   * the icon-picker fallback so entity binding never silently dead-ends when
   * the helper load fails or the editor runs outside HA.
   */
  /**
   * Render a FormSpec: real `<ha-form>` (native HA selectors) when the
   * element is defined, otherwise the same schema through plain inputs.
   * Patches route through `apply(patch, live)` — `live` marks continuous
   * fields (typing, sliders) for the burst-history path.
   */
  _renderForm(e, t) {
    return customElements.get("ha-form") ? d`<ha-form
        .hass=${this.hass}
        .data=${e.data}
        .schema=${e.fields}
        .computeLabel=${Bi}
        .computeHelper=${Vi}
        @value-changed=${(i) => {
      i.stopPropagation();
      const r = Di(e.data, i.detail.value, e.fields), n = Xe(r, e.fields), o = Object.keys(n);
      if (!o.length) return;
      const s = o.length === 1 && Ze(e.fields.find((c) => c.name === o[0]));
      t(e.toPatch(n), s);
    }}
      ></ha-form>` : d`${e.fields.map((i) => this._renderFallbackField(e, i, t))}`;
  }
  _applyFallback(e, t, i, r, n) {
    const o = Xe({ [t.name]: i }, e.fields);
    t.name in o && n(e.toPatch(o), r && Ze(t));
  }
  /** One plain-input row per schema field — the outside-HA / load-failure path. */
  _renderFallbackField(e, t, i) {
    const r = e.data[t.name], n = t.selector;
    if ("select" in n) {
      const o = n.select.options;
      return d`<div class="row">
        <label>${t.label}</label>
        <select
          .value=${String(r ?? "")}
          @change=${(s) => this._applyFallback(e, t, s.target.value, !1, i)}
        >
          ${o.map(
        (s) => d`<option value=${s.value} ?selected=${s.value === r}>${s.label}</option>`
      )}
        </select>
      </div>`;
    }
    if ("boolean" in n)
      return d`<div class="row">
        <label>${t.label}</label>
        <input
          type="checkbox"
          .checked=${!!r}
          @change=${(o) => this._applyFallback(e, t, o.target.checked, !1, i)}
        />
      </div>`;
    if ("number" in n) {
      const o = n.number, s = o.mode === "slider";
      return d`<div class="row">
        <label>${t.label}</label>
        ${s ? d`<input
              type="range"
              min=${o.min ?? 0}
              max=${o.max ?? 100}
              step=${o.step ?? 1}
              .value=${String(r ?? o.min ?? 0)}
              @input=${(c) => this._applyFallback(e, t, Number(c.target.value), !0, i)}
            />` : u}
        <input
          class="num"
          type="number"
          min=${o.min ?? u}
          max=${o.max ?? u}
          step=${o.step ?? u}
          .value=${String(r ?? "")}
          @change=${(c) => {
        const l = c.target;
        this._applyFallback(
          e,
          t,
          l.value === "" ? void 0 : Number(l.value),
          !1,
          i
        ), l.value = String(e.data[t.name] ?? "");
      }}
        />
      </div>`;
    }
    if ("entity" in n) {
      const o = n.entity.filter;
      return d`<div class="row wide">
        <label>${t.label}</label>
        ${this._renderEntityPicker(
        String(r ?? ""),
        (s) => this._applyFallback(e, t, s, !1, i),
        o?.[0]?.domain
      )}
      </div>`;
    }
    return "icon" in n ? d`<div class="row wide">
        <label>${t.label}</label>
        <input
          type="text"
          placeholder=${n.icon.placeholder ?? "mdi:…"}
          .value=${String(r ?? "")}
          @change=${(o) => this._applyFallback(e, t, o.target.value, !1, i)}
        />
      </div>` : "ui_action" in n ? d`${u}` : d`<div class="row">
      <label>${t.label}</label>
      <input
        type="text"
        .value=${String(r ?? "")}
        @input=${(o) => this._applyFallback(e, t, o.target.value, !0, i)}
      />
    </div>`;
  }
  _renderEntityPicker(e, t, i) {
    return customElements.get("ha-entity-picker") ? d`<ha-entity-picker
        .hass=${this.hass}
        .value=${e}
        .includeDomains=${i}
        allow-custom-entity
        @value-changed=${(r) => t(r.detail.value ?? "")}
      ></ha-entity-picker>` : d`<input
      type="text"
      placeholder="sensor.example"
      .value=${e}
      @change=${(r) => t(r.target.value)}
    />`;
  }
  /** Toggle the full-screen workspace. */
  _toggleFullscreen() {
    this._fullscreen = !this._fullscreen, this._fullscreen && this._canvasWrap && (this._canvasWrap.style.width = "", this._canvasWrap.style.height = ""), this._floorMenuOpen = !1, this._addMenuOpen = !1;
  }
  /** The "+ Add" popover: device, text, then every furniture type as its real glyph. */
  _renderAddMenu() {
    const e = () => {
      this._addMenuOpen = !1;
    };
    return d`
      <div class="pop left add-pop">
        <button
          class="add-entry"
          @click=${() => {
      this._addItem("generic"), e();
    }}
        >
          <ha-icon icon="mdi:lightbulb-outline"></ha-icon> Device
        </button>
        <button
          class="add-entry"
          @click=${() => {
      this._addText(), e();
    }}
        >
          <ha-icon icon="mdi:format-text"></ha-icon> Text
        </button>
        <div class="add-furn-grid">
          ${xt.map((t) => {
      const i = Re[t], r = Math.max(i.w, i.h) * 0.25 + 6, n = `${-i.w / 2 - r} ${-i.h / 2 - r} ${i.w + r * 2} ${i.h + r * 2}`;
      return d`
              <button
                class="furn-cell"
                title=${V[t]}
                @click=${() => {
        this._addFurniture(t), e();
      }}
              >
                <svg viewBox=${n}>
                  ${de({ type: t, x: 0, y: 0, w: i.w, h: i.h })}
                </svg>
                <span>${V[t]}</span>
              </button>
            `;
    })}
        </div>
      </div>
    `;
  }
  /**
   * Per-element editor area, rendered BELOW the canvas with a small title.
   * Kept separate from the project panel so users can tell the two apart, and
   * separate from the context bar so the bar's height stays stable across
   * selection changes (the canvas no longer jumps when you click around).
   */
  _renderElementEdit() {
    const e = this._selection.length, t = this._primary();
    if (e === 0 || !t)
      return d`
        <section class="edit-area">
          <h3 class="section-title">Element</h3>
          <p class="hint">Select an element on the canvas to edit its properties here.</p>
        </section>
      `;
    const i = e > 1 ? `${e} elements selected` : this._selectionSummary(t), r = e > 1 ? "mdi:select-group" : Gi[t.kind];
    return d`
      <section class="edit-area">
        <div class="edit-head">
          <ha-icon icon=${r}></ha-icon>
          <span class="edit-title">${i}</span>
          <span class="head-spacer"></span>
          <button aria-label="Duplicate" title="Duplicate (Ctrl/Cmd+D)" @click=${this._duplicate}>
            <ha-icon icon="mdi:content-duplicate"></ha-icon>
          </button>
          <button class="danger" aria-label="Delete" title="Delete (Del)" @click=${this._deleteSelected}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${e > 1 ? d`<p class="hint">
              Edit elements one at a time. Drag any selected element to move the whole group.
            </p>` : d`<div class="rows">${this._renderSelectionEditor()}</div>`}
      </section>
    `;
  }
  _renderWall(e) {
    const t = this._isSel("wall", e.id);
    return h`
      <g>
        <line x1=${e.x1} y1=${e.y1} x2=${e.x2} y2=${e.y2}
              class="wall-hit"
              @pointerdown=${(i) => this._startDrag(i, { kind: "wall", id: e.id })} />
        <line x1=${e.x1} y1=${e.y1} x2=${e.x2} y2=${e.y2}
              class="wall ${t ? "selected" : ""}"
              mask=${`url(#${this._wallMaskId})`}
              stroke-width=${z} stroke-linecap="round" />
        ${t ? h`
                <circle cx=${e.x1} cy=${e.y1} r="9" class="handle"
                        @pointerdown=${(i) => this._startDrag(i, { kind: "wall", id: e.id }, 1)} />
                <circle cx=${e.x2} cy=${e.y2} r="9" class="handle"
                        @pointerdown=${(i) => this._startDrag(i, { kind: "wall", id: e.id }, 2)} />` : u}
      </g>`;
  }
  _renderOpeningSel(e) {
    const t = this._isSel("opening", e.id);
    return h`
      <g class="opening-hit"
         @pointerdown=${(i) => this._startDrag(i, { kind: "opening", id: e.id })}>
        ${mt(e, {
      color: t ? "var(--primary-color, #03a9f4)" : "var(--primary-text-color)",
      open: Se(e),
      // Draw sliding openings partly open in the editor so the slide
      // direction and panel style are visible — a closed slider looks
      // symmetric, which would make the Slide / Style controls appear inert.
      amount: L(e) === "slide" ? 0.55 : void 0
    })}
      </g>`;
  }
  /**
   * Render a Tracker in the editor SVG with its zone outline visible (so the
   * user can grab/resize it) plus a hit overlay for drag-to-move and a dashed
   * selection rectangle when active.
   */
  _renderTrackerSel(e) {
    const t = this._isSel("tracker", e.id), i = ee(this.hass?.states, e.xSensor?.entity), r = ee(this.hass?.states, e.ySensor?.entity), n = J(this.hass?.states, e.xSensor?.presence), o = J(this.hass?.states, e.ySensor?.presence);
    return h`
      <g class="tracker-hit ${t ? "selected" : ""}"
         @pointerdown=${(s) => this._startDrag(s, { kind: "tracker", id: e.id })}>
        ${yt(e, {
      editing: !0,
      xReading: i,
      yReading: r,
      xPresent: n,
      yPresent: o
    })}
        <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h}
              transform="rotate(${e.angle ?? 0} ${e.x + e.w / 2} ${e.y + e.h / 2})"
              class="tracker-hit-rect" />
        ${t ? h`<rect x=${e.x - 4} y=${e.y - 4}
                        width=${e.w + 8} height=${e.h + 8}
                        transform="rotate(${e.angle ?? 0} ${e.x + e.w / 2} ${e.y + e.h / 2})"
                        class="tracker-outline" />` : u}
      </g>`;
  }
  _renderFurnitureSel(e) {
    const t = this._isSel("furniture", e.id);
    return h`
      <g class="furn-hit ${t ? "selected" : ""}"
         @pointerdown=${(i) => this._startDrag(i, { kind: "furniture", id: e.id })}>
        ${de(e)}
        ${t ? h`<rect x=${e.x - e.w / 2 - 4} y=${e.y - e.h / 2 - 4}
                        width=${e.w + 8} height=${e.h + 8}
                        transform="rotate(${e.angle ?? 0} ${e.x} ${e.y})"
                        class="furn-outline" />` : u}
      </g>`;
  }
  _renderItemOverlay(e, t) {
    const i = this._isSel("item", e.id), r = e.entity ? this.hass?.states[e.entity] : void 0, n = pt(e, r), o = e.name || e.entity || e.kind, s = e.size ?? X, c = e.showIcon ?? !0, l = e.display ?? "badge", a = e.rippleColor ?? "var(--primary-color, #03a9f4)", f = e.rippleSize ?? ve, p = d`<div
      class="badge ${c ? "" : "ghost"}"
      style="width:${s}px;height:${s}px;transform:rotate(${e.angle ?? 0}deg);"
    >
      <ha-icon icon=${n} style="--mdc-icon-size:${Math.round(s * 0.62)}px;"></ha-icon>
    </div>`;
    let g;
    return l === "ripple" ? g = Q(!0, a, f) : l === "iconRipple" ? g = d`<div class="stack">
        ${Q(!0, a, f)}
        <div class="stack-icon">${p}</div>
      </div>` : g = p, d`
      <div
        class="edit-item ${i ? "selected" : ""}"
        style="left:${e.x / t.width * 100}%; top:${e.y / t.height * 100}%;"
        @pointerdown=${(m) => this._onOverlayDown(m, { kind: "item", id: e.id })}
        @pointermove=${this._onOverlayMove}
        @pointerup=${this._onOverlayUp}
        @pointercancel=${this._onPointerCancel}
      >
        ${g}
        <span class="ilabel">${o}</span>
      </div>
    `;
  }
  _renderTextOverlay(e, t) {
    const i = this._isSel("text", e.id);
    return d`
      <div
        class="edit-text ${i ? "selected" : ""}"
        style="left:${e.x / t.width * 100}%; top:${e.y / t.height * 100}%;
               font-size:${e.size ?? Y}px;
               color:${e.color ?? "var(--primary-text-color)"};
               transform:translate(-50%,-50%) rotate(${e.angle ?? 0}deg);"
        @pointerdown=${(r) => this._onOverlayDown(r, { kind: "text", id: e.id })}
        @pointermove=${this._onOverlayMove}
        @pointerup=${this._onOverlayUp}
        @pointercancel=${this._onPointerCancel}
      >
        ${e.text || "…"}
      </div>
    `;
  }
  _renderPanel() {
    return d`
      <section class="panel">
        <button
          class="section-toggle"
          aria-expanded=${this._projectOpen}
          @click=${() => {
      this._projectOpen = !this._projectOpen;
    }}
        >
          <ha-icon icon=${this._projectOpen ? "mdi:chevron-down" : "mdi:chevron-right"}></ha-icon>
          <span class="section-title-inline">Project</span>
          ${this._projectOpen ? u : d`<span class="section-summary"
                >${this._config.title || "Untitled"} · ${this._config.width}×${this._config.height}</span
              >`}
        </button>
        ${this._projectOpen ? this._renderPanelBody() : u}
      </section>
    `;
  }
  _renderPanelBody() {
    return d`
      <div class="rows panel-body">
        ${this._renderForm(ji(this._config), (e, t) => {
      "grid" in e && typeof e.grid == "number" && (e = { ...e, ...this._gridPatch(e.grid) }), t ? this._patchConfigLive(e) : this._patchConfig(e);
    })}
        <div class="row">
          <label>Background</label>
          <input
            type="color"
            .value=${this._config.background ?? "#ffffff"}
            @input=${(e) => this._patchConfigLive({ background: e.target.value })}
          />
          <input
            type="text"
            placeholder="#ffffff or empty"
            .value=${this._config.background ?? ""}
            @change=${(e) => this._patchConfig({ background: e.target.value || void 0 })}
          />
        </div>
        ${this._renderForm(Wi(this._floor()), (e, t) => {
      t ? this._patchFloorLive(e) : this._commitFloor(e);
    })}
      </div>
    `;
  }
  /**
   * Editor fields for the currently-selected element, rendered in the Element
   * section below the canvas (docked beside it in fullscreen). Returns nothing
   * when the selection isn't exactly one element — multi-select and
   * empty-select states are handled by the Element header itself.
   */
  _renderSelectionEditor() {
    const e = this._primary();
    if (!e || this._selection.length !== 1) return d`${u}`;
    if (e.kind === "opening") {
      const t = this._floor().openings.find((i) => i.id === e.id);
      return t ? d`
        ${this._renderForm(zi(t), (i, r) => {
        if ("entity" in i) {
          const n = i.entity, o = n ? this.hass?.states[n]?.attributes?.device_class : void 0;
          i = { ...i, ...o ? ci(o) : {} };
        }
        this._applyElementPatch("opening", t.id, i, r);
      })}
        ${t.entity ? d`<div class="row">
              <label>Active color</label>
              <input
                type="color"
                .value=${t.activeColor ?? "#03a9f4"}
                @input=${(i) => this._updateOpeningLive(t.id, {
        activeColor: i.target.value
      })}
              />
              <input
                type="text"
                placeholder="(primary)"
                .value=${t.activeColor ?? ""}
                @change=${(i) => this._updateOpening(t.id, {
        activeColor: i.target.value || void 0
      })}
              />
            </div>` : u}
      ` : d`${u}`;
    }
    if (e.kind === "item") {
      const t = this._floor().items.find((i) => i.id === e.id);
      return t ? d`
        ${this._renderForm(Li(t), (i, r) => {
        "entity" in i && typeof i.entity == "string" && (i = { ...i, kind: oi(i.entity) }), this._applyElementPatch("item", t.id, i, r);
      })}
        ${(t.display ?? "badge") !== "badge" ? d`<div class="row">
              <label>Ripple color</label>
              <input
                type="color"
                .value=${t.rippleColor ?? "#03a9f4"}
                @input=${(i) => this._updateItemLive(t.id, {
        rippleColor: i.target.value
      })}
              />
              <input
                type="text"
                placeholder="(primary)"
                .value=${t.rippleColor ?? ""}
                @change=${(i) => this._updateItem(t.id, {
        rippleColor: i.target.value || void 0
      })}
              />
            </div>` : u}
      ` : d`${u}`;
    }
    if (e.kind === "text") {
      const t = this._floor().texts.find((i) => i.id === e.id);
      return t ? d`
        ${this._renderForm(
        Hi(t),
        (i, r) => this._applyElementPatch("text", t.id, i, r)
      )}
        <div class="row">
          <label>Color</label>
          <input
            type="color"
            .value=${t.color ?? "#000000"}
            @input=${(i) => this._updateTextLive(t.id, { color: i.target.value })}
          />
          <input
            type="text"
            placeholder="(theme default)"
            .value=${t.color ?? ""}
            @change=${(i) => this._updateText(t.id, { color: i.target.value || void 0 })}
          />
        </div>
      ` : d`${u}`;
    }
    if (e.kind === "furniture") {
      const t = this._floor().furniture.find((i) => i.id === e.id);
      return t ? d`
        ${this._renderForm(
        Ri(t),
        (i, r) => this._applyElementPatch("furniture", t.id, i, r)
      )}
        <div class="row">
          <label>Color</label>
          <input
            type="color"
            .value=${t.color ?? "#9e9e9e"}
            @input=${(i) => this._updateFurnitureLive(t.id, { color: i.target.value })}
          />
          <input
            type="text"
            placeholder="(gray)"
            .value=${t.color ?? ""}
            @change=${(i) => this._updateFurniture(t.id, {
        color: i.target.value || void 0
      })}
          />
        </div>
      ` : d`${u}`;
    }
    if (e.kind === "tracker") {
      const t = (this._floor().trackers ?? []).find((i) => i.id === e.id);
      return t ? d`
        ${this._renderTrackerSensorRows(t, "xSensor", "X sensor")}
        ${this._renderTrackerSensorRows(t, "ySensor", "Y sensor")}
        ${this._renderForm(
        Ui(t),
        (i, r) => this._applyElementPatch("tracker", t.id, i, r)
      )}
        <div class="row">
          <label>Color</label>
          <input
            type="color"
            .value=${t.color ?? "#03a9f4"}
            @input=${(i) => this._updateTrackerLive(t.id, { color: i.target.value })}
          />
          <input
            type="text"
            placeholder="(primary)"
            .value=${t.color ?? ""}
            @change=${(i) => this._updateTracker(t.id, {
        color: i.target.value || void 0
      })}
          />
        </div>
      ` : d`${u}`;
    }
    if (e.kind === "wall") {
      const t = this._floor().walls.find((r) => r.id === e.id);
      if (!t) return d`${u}`;
      const i = Math.round(Math.hypot(t.x2 - t.x1, t.y2 - t.y1));
      return d`
        ${this._renderForm(
        Ni(t),
        (r, n) => this._applyElementPatch("wall", t.id, r, n)
      )}
        <div class="row">
          <label>Length</label>
          <input
            class="num"
            type="number"
            min="1"
            .value=${String(i)}
            @change=${(r) => {
        const n = r.target, o = Number(n.value);
        if (n.value === "" || !(o >= 1)) {
          n.value = String(i);
          return;
        }
        const s = t.x2 - t.x1, c = t.y2 - t.y1, l = Math.hypot(s, c), a = l > 0 ? s / l : 1, f = l > 0 ? c / l : 0;
        this._updateWall(t.id, {
          x2: Math.round(t.x1 + a * o),
          y2: Math.round(t.y1 + f * o)
        });
      }}
          />
          <span class="hint">Resizes from the start point, keeping the direction.</span>
        </div>
        <p class="hint">
          Or drag the line on the canvas to move it, and the round handles to move an endpoint.
        </p>
      `;
    }
    return d`${u}`;
  }
  /**
   * Editor rows for one of a tracker's two sensor mappings (X or Y). Entity
   * picker is always shown; min / max / invert appear once a sensor entity is
   * set so the panel stays compact while empty.
   */
  _renderTrackerSensorRows(e, t, i) {
    const r = e[t];
    return d`
      <div class="row wide">
        <label>${i}</label>
        ${this._renderEntityPicker(
      r?.entity ?? "",
      (n) => {
        n ? this._updateTrackerSensor(e.id, t, { entity: n }) : this._updateTrackerSensor(e.id, t, null);
      },
      ["sensor", "input_number", "number"]
    )}
      </div>
      ${r ? d`<div class="row">
            <label>${i} range</label>
            <input
              class="num"
              type="number"
              step="0.01"
              title="Reading at the near edge"
              .value=${String(r.min)}
              @change=${(n) => {
      const o = n.target, s = Number(o.value);
      o.value !== "" && Number.isFinite(s) ? this._updateTrackerSensor(e.id, t, { min: s }) : o.value = String(r.min);
    }}
            />
            <input
              class="num"
              type="number"
              step="0.01"
              title="Reading at the far edge"
              .value=${String(r.max)}
              @change=${(n) => {
      const o = n.target, s = Number(o.value);
      o.value !== "" && Number.isFinite(s) ? this._updateTrackerSensor(e.id, t, { max: s }) : o.value = String(r.max);
    }}
            />
            <label class="inline-check">
              <input
                type="checkbox"
                .checked=${r.invert ?? !1}
                @change=${(n) => this._updateTrackerSensor(e.id, t, {
      invert: n.target.checked || void 0
    })}
              />
              invert
            </label>
          </div>
          <div class="row wide">
            <label>${i} presence</label>
            ${this._renderEntityPicker(
      r.presence?.entity ?? "",
      (n) => this._updateTrackerSensor(e.id, t, {
        presence: n ? { entity: n, invert: r.presence?.invert } : void 0
      }),
      ["binary_sensor", "input_boolean", "device_tracker"]
    )}
            ${r.presence ? d`<label class="inline-check" title="Treat 'off' as detected">
                  <input
                    type="checkbox"
                    .checked=${r.presence.invert ?? !1}
                    @change=${(n) => this._updateTrackerSensor(e.id, t, {
      presence: {
        entity: r.presence.entity,
        invert: n.target.checked || void 0
      }
    })}
                  />
                  invert
                </label>` : u}
          </div>` : u}
    `;
  }
};
y._nextWallMaskId = 0;
y.styles = et`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    /* Full-screen workspace, shown as a popover so the top layer lifts it clear
       of HA's edit dialog (whose surface is transformed — see updated()). The
       resets undo the UA popover defaults: fit-content size, auto margins, a
       solid border and padding. The fixed position only matters to the
       non-popover fallback, where the transformed dialog surface is the
       containing block — there "fullscreen" fills the dialog, not the page. */
    .editor.fullscreen {
      position: fixed;
      inset: 0;
      z-index: 100;
      width: auto;
      height: auto;
      max-width: none;
      max-height: none;
      margin: 0;
      border: none;
      padding: 12px;
      box-sizing: border-box;
      color: inherit;
      background: var(--card-background-color, #fff);
      overflow: hidden;
    }
    /* Toolbar-icon button (Expand/Exit) — match the gear button's icon+label
       alignment so it reads as part of the toolbar. */
    .expand-toggle {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    /* Below the two toolbars: the canvas and the element/project sections.
       Stacked at dialog width; split into canvas + docked side panel when
       expanded so the extra width isn't wasted. */
    .workspace {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
    }
    .side {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
    }
    .editor.fullscreen .workspace {
      flex-direction: row;
      align-items: stretch;
      flex: 1 1 auto;
      min-height: 0;
    }
    .editor.fullscreen .canvas-outer {
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .editor.fullscreen .canvas-wrap {
      flex: 1 1 auto;
      min-height: 0;
      height: auto;
      resize: none;
    }
    /* Docked inspector — fixed, scrollable column beside the canvas. */
    .editor.fullscreen .side {
      flex: 0 0 340px;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 2px;
    }
    /* At real dialog width the side panel can drop below instead of squeezing
       the canvas to nothing. */
    @media (max-width: 900px) {
      .editor.fullscreen .workspace {
        flex-direction: column;
        /* Stacked panels can exceed a short viewport (phone landscape) — the
           root clips, so the workspace itself must scroll. */
        overflow-y: auto;
      }
      .editor.fullscreen .side {
        flex: 0 0 auto;
        max-height: 40vh;
      }
    }
    .toolbar {
      display: flex;
      gap: 4px;
      align-items: center;
      flex-wrap: wrap;
    }
    .toolbar .spacer {
      flex: 1;
    }
    /* generic inline cluster of related controls */
    .group {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    /* vertical rule between toolbar groups */
    .divider {
      align-self: stretch;
      width: 1px;
      min-height: 26px;
      margin: 0 4px;
      background: var(--divider-color, #e0e0e0);
    }
    /* tools rendered as a connected segmented control (one active) */
    .seg {
      display: inline-flex;
    }
    .seg button {
      border-radius: 0;
      border-left-width: 0;
    }
    .seg button:first-child {
      border-left-width: 1px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .seg button:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    /* contextual second row: options/actions for the current tool or selection */
    .context-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 6px;
      padding: 5px 10px;
      min-height: 36px;
      box-sizing: border-box;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--secondary-background-color, #f5f5f5);
    }
    .context-bar .ctx-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--primary-color, #03a9f4);
      padding-right: 8px;
      margin-right: 2px;
      border-right: 1px solid var(--divider-color, #e0e0e0);
    }
    .context-bar .ctx-hint {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .context-bar .ctx-count {
      font-size: 12px;
      color: var(--primary-text-color);
    }
    .context-bar button {
      padding: 4px 10px;
      font-size: 13px;
    }
    /* A label + input pair inline in the context bar (e.g. default Length for
       the Door/Window tools). The <label> wraps both so clicking the text
       focuses the input. */
    .context-bar .ctx-field {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .context-bar .ctx-field input.num {
      width: 60px;
    }
    /* Inline label for a control rendered loose in the context bar (e.g. the
       "Snap" word next to the segmented control). */
    .context-bar .ctx-field-label {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .context-bar input.num {
      width: 60px;
    }
    /* Thin vertical rule separating the tool-specific contents from the
       always-on Snap control on the right side of the context bar. */
    .ctx-divider {
      flex: 0 0 1px;
      align-self: stretch;
      min-height: 22px;
      margin: 0 4px;
      background: var(--divider-color, #e0e0e0);
    }
    button {
      cursor: pointer;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: 6px;
      padding: 6px 10px;
      text-transform: capitalize;
    }
    button.active {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color, #03a9f4);
    }
    button.danger {
      color: var(--error-color, #db4437);
    }
    button[disabled] {
      opacity: 0.4;
      cursor: not-allowed;
    }
    /* The canvas is focusable so keyboard shortcuts only fire while working in
       the editor; only show the ring for keyboard focus, not pointer clicks. */
    .canvas-wrap:focus {
      outline: none;
    }
    .canvas-wrap:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
    }
    .canvas-wrap {
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 8px;
      overflow: auto;
      resize: both;
      /* Size to the canvas's own aspect ratio rather than forcing a fixed
         viewport-relative height. This avoids the empty band above and below
         the grid that used to appear with the default 1000×600 canvas, and
         leaves room for the Element / Project sections below. The user can
         still drag-resize via the corner handle (resize: both). */
      min-height: 200px;
      background: var(--secondary-background-color, #f5f5f5);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .stage {
      position: relative;
      width: 100%;
      flex: 0 0 auto;
      margin: auto;
      touch-action: none;
    }
    svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
    svg.wall,
    svg.door,
    svg.window,
    svg.tracker {
      cursor: crosshair;
    }
    .grid {
      /* Theme text colour at low opacity so the grid stays visible over a
         background image (and on both light and dark themes); non-scaling-stroke
         keeps the lines a crisp ~1px at any canvas size / zoom. Editor-only —
         the live card never draws a grid. */
      stroke: var(--primary-text-color, #212121);
      stroke-opacity: 0.25;
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
      /* Purely decorative — must never intercept pointers, or a press that lands
         on a grid line would capture the pointer there and break wall drawing. */
      pointer-events: none;
    }
    /* Scoped to <line> so the rule doesn't accidentally match the <svg>,
       which carries the active-tool class (e.g. "wall") on the canvas. A
       bare ".wall" selector matched the SVG too, and because pointer-events
       is inherited in SVG, setting it to none disabled the entire canvas
       — so no pointerdown reached the wall-draw handler. */
    line.wall {
      stroke: var(--primary-text-color);
      /* The wide transparent .wall-hit line beneath handles selection/drag.
         Without this, the visible line (painted on top) swallows clicks on the
         wall body, so you could only grab it just *outside* the body. */
      pointer-events: none;
    }
    line.wall.selected {
      stroke: var(--primary-color, #03a9f4);
    }
    line.wall.draft {
      opacity: 0.5;
      pointer-events: none;
    }
    .fp-door-leaf,
    .fp-leaf-r {
      transform-box: fill-box;
      transition: transform 0.5s ease;
    }
    .fp-door-leaf {
      transform-origin: left center;
    }
    .fp-leaf-r {
      transform-origin: right center;
    }
    .fp-door-leaf rect,
    .fp-leaf-r rect {
      transition: fill 0.5s ease;
    }
    .fp-door-arc {
      transition: stroke-dashoffset 0.5s ease, stroke 0.5s ease;
    }
    .wall-hit {
      stroke: transparent;
      stroke-width: 22;
      cursor: move;
    }
    .opening-hit {
      cursor: move;
    }
    .furn-hit {
      cursor: move;
    }
    .furn-outline {
      fill: none;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 1.5;
      stroke-dasharray: 6 4;
      pointer-events: none;
    }
    /* Toolbar icons sit inline with their labels; smaller than content icons. */
    .toolbar ha-icon {
      --mdc-icon-size: 16px;
    }
    .seg button {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    /* === Popovers (floor gear, + Add). The backdrop is a fixed transparent
       layer below the popover that closes it on any outside click. === */
    .pop-wrap {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .pop {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      z-index: 20;
      min-width: 220px;
      padding: 8px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
    }
    .pop.left {
      left: 0;
      right: auto;
    }
    .pop-backdrop {
      position: fixed;
      inset: 0;
      z-index: 19;
    }
    .pop-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;
    }
    .pop-row label {
      flex: 0 0 60px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .pop-row input,
    .pop-row select {
      flex: 1;
      min-width: 0;
      padding: 4px 6px;
      border-radius: 4px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
    }
    .pop-action {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      width: 100%;
      justify-content: center;
      font-size: 13px;
    }
    .add-pop {
      min-width: 300px;
    }
    .add-entry {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      border: none;
      background: none;
      padding: 6px 8px;
      border-radius: 6px;
      text-align: left;
      font-size: 13px;
    }
    .add-entry:hover {
      background: var(--secondary-background-color, #f5f5f5);
    }
    .add-furn-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 4px;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid var(--divider-color, #eee);
    }
    .furn-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      border: none;
      background: none;
      padding: 6px 2px;
      border-radius: 6px;
      font-size: 11px;
      color: var(--secondary-text-color);
      text-transform: none;
    }
    .furn-cell:hover {
      background: var(--secondary-background-color, #f5f5f5);
    }
    .furn-cell svg {
      position: static;
      width: 38px;
      height: 30px;
      display: block;
    }
    /* === Canvas chrome: the zoom overlay and first-run hint live on a
       relative wrapper OUTSIDE the scroll container so they don't scroll
       away with the stage. === */
    .canvas-outer {
      position: relative;
    }
    .zoom-overlay {
      position: absolute;
      right: 26px;
      bottom: 12px;
      z-index: 2;
      display: flex;
      gap: 4px;
    }
    .zoom-overlay button {
      display: inline-flex;
      align-items: center;
      padding: 3px 7px;
      font-size: 12px;
      background: var(--card-background-color, #fff);
    }
    .zoom-overlay ha-icon {
      --mdc-icon-size: 15px;
    }
    .zoom-val-btn {
      min-width: 46px;
      justify-content: center;
    }
    .empty-hint {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 16px;
      font-size: 14px;
      line-height: 1.6;
      color: var(--secondary-text-color);
      /* Never block the first wall being drawn straight through the hint. */
      pointer-events: none;
    }
    .floors {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .floors label {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .floors select,
    .floors .floor-name {
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: 6px;
      padding: 6px 8px;
    }
    .floors .floor-name {
      width: 90px;
    }
    .marquee {
      fill: var(--primary-color, #03a9f4);
      fill-opacity: 0.1;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 1;
      stroke-dasharray: 4 3;
      pointer-events: none;
    }
    .handle {
      fill: var(--primary-color, #03a9f4);
      stroke: var(--card-background-color, #fff);
      stroke-width: 1.5;
      cursor: grab;
    }
    .items {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .edit-item {
      position: absolute;
      transform: translate(-50%, -50%);
      pointer-events: auto;
      cursor: move;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      touch-action: none;
    }
    .badge {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: var(--card-background-color, #fff);
      border: 1.5px solid var(--divider-color, #ccc);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-text-color);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    }
    .edit-item.selected .badge {
      border-color: var(--primary-color, #03a9f4);
      border-width: 2.5px;
    }
    .badge.ghost {
      opacity: 0.35;
      border-style: dashed;
    }
    .stack {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stack-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ripple {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ripple .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 2px solid var(--fp-ripple-color);
      opacity: 0;
    }
    .ripple.active .ring {
      animation: fp-ripple 1.8s ease-out infinite;
    }
    .ripple .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--fp-ripple-color);
      opacity: 0.4;
    }
    .ripple.active .dot {
      opacity: 0.9;
    }
    @keyframes fp-ripple {
      0% {
        transform: scale(0.15);
        opacity: 0.7;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
    /* === Tracker (editor + card share the same animation classes). The zone
       outline is editor-only and added by renderTracker when editing:true; in
       the live card only the marker / line shows. Movement transitions are
       applied to the marker group's transform so the dot/triangle glides
       between sensor updates rather than jumping. === */
    /* Scoped to <g> so the rule doesn't also match the <svg>, which carries
       the active-tool class (e.g. "tracker") for cursor styling. A bare
       ".tracker" matched the SVG too, and pointer-events is inherited in
       SVG — so toggling the tracker tool silently killed every pointerdown
       on the canvas, breaking drag-to-draw. Same trap as line.wall above. */
    g.tracker {
      pointer-events: none;
    }
    .tracker-zone {
      transition: opacity 0.2s ease;
    }
    /* Dim the zone when a configured presence sensor reports "clear" so the
       editor visibly confirms the marker is being gated off — without this,
       a user toggling the mock presence sensor would just see the triangle
       vanish with no other feedback. */
    .tracker-zone.presence-gated {
      opacity: 0.35;
    }
    .tracker-hit {
      cursor: move;
    }
    .tracker-hit-rect {
      /* Transparent fill turns the entire zone into a pointer target for drag,
         without obscuring the dashed outline drawn by the renderer. */
      fill: transparent;
      pointer-events: all;
    }
    .tracker-outline {
      fill: none;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 1.5;
      stroke-dasharray: 6 4;
      pointer-events: none;
    }
    .tracker-draft {
      fill: var(--primary-color, #03a9f4);
      fill-opacity: 0.08;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 1.5;
      stroke-dasharray: 6 4;
      pointer-events: none;
    }
    .tracker-marker {
      transition: transform 0.4s ease-out;
      transform-box: fill-box;
    }
    .tracker-dot {
      animation: fp-tracker-pulse 1.4s ease-in-out infinite;
      transform-box: fill-box;
      transform-origin: center;
    }
    .tracker-ring {
      animation: fp-tracker-ring 2.2s ease-out infinite;
      opacity: 0;
    }
    .tracker-line {
      transition: transform 0.4s ease-out;
    }
    .tracker-line-stroke {
      opacity: 0.45;
      animation: fp-tracker-pulse 1.6s ease-in-out infinite;
    }
    .tracker-band {
      opacity: 0;
      animation: fp-tracker-band 2.2s ease-out infinite;
    }
    .tracker-placeholder {
      opacity: 0.6;
    }
    @keyframes fp-tracker-pulse {
      0%,
      100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    @keyframes fp-tracker-ring {
      0% {
        r: 0;
        opacity: 0.7;
      }
      100% {
        r: var(--fp-tracker-ring-max, 60px);
        opacity: 0;
      }
    }
    @keyframes fp-tracker-band {
      0% {
        opacity: 0.5;
        stroke-width: 1.5;
      }
      100% {
        opacity: 0;
        stroke-width: 14;
      }
    }
    .edit-text {
      position: absolute;
      pointer-events: auto;
      cursor: move;
      white-space: nowrap;
      font-weight: 500;
      line-height: 1;
      padding: 2px;
      touch-action: none;
    }
    .edit-text.selected {
      outline: 1.5px dashed var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
    ha-icon {
      --mdc-icon-size: 22px;
    }
    .ilabel {
      font-size: 11px;
      line-height: 1;
      padding: 1px 4px;
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--secondary-text-color);
      white-space: nowrap;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* The panel ("Project" config) and the new element-edit area share the
       same boxed look so the two sections below the canvas read as siblings. */
    .panel,
    .edit-area {
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 8px;
      padding: 10px;
    }
    .section-title {
      margin: 0 0 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--secondary-text-color);
    }
    /* Element header: kind icon + summary + the selection's actions. */
    .edit-head {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
    }
    .edit-head ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }
    .edit-head .edit-title {
      font-size: 13px;
      font-weight: 600;
    }
    .edit-head .head-spacer {
      flex: 1;
    }
    .edit-head button {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
    }
    .edit-head button ha-icon {
      --mdc-icon-size: 16px;
      color: inherit;
    }
    /* Collapsible Project section header. */
    .section-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      width: 100%;
      border: none;
      background: none;
      padding: 2px 0;
      margin: 0;
      cursor: pointer;
      color: var(--secondary-text-color);
      text-align: left;
    }
    .section-toggle ha-icon {
      --mdc-icon-size: 16px;
    }
    .section-toggle .section-title-inline {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .section-toggle .section-summary {
      font-size: 12px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      text-transform: none;
    }
    .panel-body {
      margin-top: 10px;
    }
    /* Field rows flow into responsive columns so the below-canvas sections
       stay short at HA-dialog width (~700px fits two columns). Rows that
       need the full width (entity pickers, long hints) opt out via .wide. */
    .rows {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      column-gap: 16px;
      align-items: start;
    }
    .rows .row.wide,
    .rows > .hint,
    .rows > p {
      grid-column: 1 / -1;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;
    }
    .row label {
      flex: 0 0 90px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .row input[type="text"],
    .row input[type="number"],
    .row select {
      flex: 1;
      min-width: 0;
      padding: 4px 6px;
      border-radius: 4px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
    }
    ha-entity-picker,
    ha-icon-picker {
      flex: 1;
      min-width: 0;
    }
    .row input.num {
      flex: 0 0 64px;
    }
    /* Compact inline checkbox+label used inside a .row that already has its
       primary <label> on the left (e.g. the Tracker sensor "invert" toggle). */
    .row .inline-check {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .hint {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }
  `;
_([
  $e({ attribute: !1 })
], y.prototype, "hass", 2);
_([
  b()
], y.prototype, "_config", 2);
_([
  b()
], y.prototype, "_tool", 2);
_([
  b()
], y.prototype, "_selection", 2);
_([
  b()
], y.prototype, "_activeFloorId", 2);
_([
  b()
], y.prototype, "_draft", 2);
_([
  b()
], y.prototype, "_draftTracker", 2);
_([
  b()
], y.prototype, "_freeWalls", 2);
_([
  b()
], y.prototype, "_defaultOpeningLength", 2);
_([
  b()
], y.prototype, "_marquee", 2);
_([
  b()
], y.prototype, "_history", 2);
_([
  b()
], y.prototype, "_future", 2);
_([
  b()
], y.prototype, "_zoom", 2);
_([
  b()
], y.prototype, "_floorMenuOpen", 2);
_([
  b()
], y.prototype, "_addMenuOpen", 2);
_([
  b()
], y.prototype, "_projectOpen", 2);
_([
  b()
], y.prototype, "_fullscreen", 2);
_([
  xe(".editor")
], y.prototype, "_editorEl", 2);
_([
  xe("svg")
], y.prototype, "_svg", 2);
_([
  xe(".canvas-wrap")
], y.prototype, "_canvasWrap", 2);
y = _([
  st("easy-floorplan-card-editor")
], y);
const Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FloorplanCardEditor() {
    return y;
  }
}, Symbol.toStringTag, { value: "Module" })), Yi = "0.7.2", pe = window;
pe.customCards = pe.customCards || [];
pe.customCards.push({
  type: "easy-floorplan-card",
  name: "Easy Floorplan",
  description: "Draw a floorplan with walls, doors, windows, furniture and text, then place device/light controls with a visual editor.",
  preview: !1,
  documentationURL: "https://github.com/nicosandller/easy-floorplan"
});
console.info(
  `%c EASY-FLOORPLAN %c ${Yi} `,
  "background:#03a9f4;color:#fff",
  "color:#03a9f4"
);
export {
  A as FloorplanCard
};
