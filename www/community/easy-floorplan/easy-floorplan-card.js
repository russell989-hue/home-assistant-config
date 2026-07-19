/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, ke = Q.ShadowRoot && (Q.ShadyCSS === void 0 || Q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Se = Symbol(), Re = /* @__PURE__ */ new WeakMap();
let ft = class {
  constructor(t, i, n) {
    if (this._$cssResult$ = !0, n !== Se) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (ke && t === void 0) {
      const n = i !== void 0 && i.length === 1;
      n && (t = Re.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Re.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Nt = (e) => new ft(typeof e == "string" ? e : e + "", void 0, Se), mt = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((n, r, o) => n + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + e[o + 1], e[0]);
  return new ft(i, e, Se);
}, Ut = (e, t) => {
  if (ke) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const n = document.createElement("style"), r = Q.litNonce;
    r !== void 0 && n.setAttribute("nonce", r), n.textContent = i.cssText, e.appendChild(n);
  }
}, Ne = ke ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const n of t.cssRules) i += n.cssText;
  return Nt(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: jt, defineProperty: Wt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Kt, getOwnPropertySymbols: Bt, getPrototypeOf: Vt } = Object, he = globalThis, Ue = he.trustedTypes, Gt = Ue ? Ue.emptyScript : "", Zt = he.reactiveElementPolyfillSupport, q = (e, t) => e, ie = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Gt : null;
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
} }, Ee = (e, t) => !jt(e, t), je = { attribute: !0, type: String, converter: ie, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ??= Symbol("metadata"), he.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let D = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = je) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const n = Symbol(), r = this.getPropertyDescriptor(t, n, i);
      r !== void 0 && Wt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, i, n) {
    const { get: r, set: o } = qt(this.prototype, t) ?? { get() {
      return this[i];
    }, set(s) {
      this[i] = s;
    } };
    return { get: r, set(s) {
      const l = r?.call(this);
      o?.call(this, s), this.requestUpdate(t, l, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? je;
  }
  static _$Ei() {
    if (this.hasOwnProperty(q("elementProperties"))) return;
    const t = Vt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(q("properties"))) {
      const i = this.properties, n = [...Kt(i), ...Bt(i)];
      for (const r of n) this.createProperty(r, i[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [n, r] of i) this.elementProperties.set(n, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, n] of this.elementProperties) {
      const r = this._$Eu(i, n);
      r !== void 0 && this._$Eh.set(r, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const r of n) i.unshift(Ne(r));
    } else t !== void 0 && i.push(Ne(t));
    return i;
  }
  static _$Eu(t, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const n of i.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ut(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, i, n) {
    this._$AK(t, n);
  }
  _$ET(t, i) {
    const n = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, n);
    if (r !== void 0 && n.reflect === !0) {
      const o = (n.converter?.toAttribute !== void 0 ? n.converter : ie).toAttribute(i, n.type);
      this._$Em = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(t, i) {
    const n = this.constructor, r = n._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const o = n.getPropertyOptions(r), s = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : ie;
      this._$Em = r;
      const l = s.fromAttribute(i, o.type);
      this[r] = l ?? this._$Ej?.get(r) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, i, n, r = !1, o) {
    if (t !== void 0) {
      const s = this.constructor;
      if (r === !1 && (o = this[t]), n ??= s.getPropertyOptions(t), !((n.hasChanged ?? Ee)(o, i) || n.useDefault && n.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(s._$Eu(t, n)))) return;
      this.C(t, i, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: n, reflect: r, wrapped: o }, s) {
    n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, s ?? i ?? this[t]), o !== !0 || s !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (i = void 0), this._$AL.set(t, i)), r === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [r, o] of n) {
        const { wrapped: s } = o, l = this[r];
        s !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, o, l);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), this._$EO?.forEach((n) => n.hostUpdate?.()), this.update(i)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
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
D.elementStyles = [], D.shadowRootOptions = { mode: "open" }, D[q("elementProperties")] = /* @__PURE__ */ new Map(), D[q("finalized")] = /* @__PURE__ */ new Map(), Zt?.({ ReactiveElement: D }), (he.reactiveElementVersions ??= []).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ae = globalThis, We = (e) => e, ne = Ae.trustedTypes, qe = ne ? ne.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, gt = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, yt = "?" + T, Xt = `<${yt}>`, z = document, B = () => z.createComment(""), V = (e) => e === null || typeof e != "object" && typeof e != "function", Te = Array.isArray, Yt = (e) => Te(e) || typeof e?.[Symbol.iterator] == "function", fe = `[ 	
\f\r]`, j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ke = /-->/g, Be = />/g, M = RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ve = /'/g, Ge = /"/g, _t = /^(?:script|style|textarea|title)$/i, $t = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), p = $t(1), m = $t(2), C = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), Ze = /* @__PURE__ */ new WeakMap(), I = z.createTreeWalker(z, 129);
function xt(e, t) {
  if (!Te(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(t) : t;
}
const Jt = (e, t) => {
  const i = e.length - 1, n = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", s = j;
  for (let l = 0; l < i; l++) {
    const a = e[l];
    let c, f, d = -1, u = 0;
    for (; u < a.length && (s.lastIndex = u, f = s.exec(a), f !== null); ) u = s.lastIndex, s === j ? f[1] === "!--" ? s = Ke : f[1] !== void 0 ? s = Be : f[2] !== void 0 ? (_t.test(f[2]) && (r = RegExp("</" + f[2], "g")), s = M) : f[3] !== void 0 && (s = M) : s === M ? f[0] === ">" ? (s = r ?? j, d = -1) : f[1] === void 0 ? d = -2 : (d = s.lastIndex - f[2].length, c = f[1], s = f[3] === void 0 ? M : f[3] === '"' ? Ge : Ve) : s === Ge || s === Ve ? s = M : s === Ke || s === Be ? s = j : (s = M, r = void 0);
    const h = s === M && e[l + 1].startsWith("/>") ? " " : "";
    o += s === j ? a + Xt : d >= 0 ? (n.push(c), a.slice(0, d) + gt + a.slice(d) + T + h) : a + T + (d === -2 ? l : h);
  }
  return [xt(e, o + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class G {
  constructor({ strings: t, _$litType$: i }, n) {
    let r;
    this.parts = [];
    let o = 0, s = 0;
    const l = t.length - 1, a = this.parts, [c, f] = Jt(t, i);
    if (this.el = G.createElement(c, n), I.currentNode = this.el.content, i === 2 || i === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (r = I.nextNode()) !== null && a.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const d of r.getAttributeNames()) if (d.endsWith(gt)) {
          const u = f[s++], h = r.getAttribute(d).split(T), y = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: o, name: y[2], strings: h, ctor: y[1] === "." ? ei : y[1] === "?" ? ti : y[1] === "@" ? ii : pe }), r.removeAttribute(d);
        } else d.startsWith(T) && (a.push({ type: 6, index: o }), r.removeAttribute(d));
        if (_t.test(r.tagName)) {
          const d = r.textContent.split(T), u = d.length - 1;
          if (u > 0) {
            r.textContent = ne ? ne.emptyScript : "";
            for (let h = 0; h < u; h++) r.append(d[h], B()), I.nextNode(), a.push({ type: 2, index: ++o });
            r.append(d[u], B());
          }
        }
      } else if (r.nodeType === 8) if (r.data === yt) a.push({ type: 2, index: o });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(T, d + 1)) !== -1; ) a.push({ type: 7, index: o }), d += T.length - 1;
      }
      o++;
    }
  }
  static createElement(t, i) {
    const n = z.createElement("template");
    return n.innerHTML = t, n;
  }
}
function R(e, t, i = e, n) {
  if (t === C) return t;
  let r = n !== void 0 ? i._$Co?.[n] : i._$Cl;
  const o = V(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== o && (r?._$AO?.(!1), o === void 0 ? r = void 0 : (r = new o(e), r._$AT(e, i, n)), n !== void 0 ? (i._$Co ??= [])[n] = r : i._$Cl = r), r !== void 0 && (t = R(e, r._$AS(e, t.values), r, n)), t;
}
class Qt {
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
    const { el: { content: i }, parts: n } = this._$AD, r = (t?.creationScope ?? z).importNode(i, !0);
    I.currentNode = r;
    let o = I.nextNode(), s = 0, l = 0, a = n[0];
    for (; a !== void 0; ) {
      if (s === a.index) {
        let c;
        a.type === 2 ? c = new U(o, o.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (c = new ni(o, this, t)), this._$AV.push(c), a = n[++l];
      }
      s !== a?.index && (o = I.nextNode(), s++);
    }
    return I.currentNode = z, r;
  }
  p(t) {
    let i = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, i), i += n.strings.length - 2) : n._$AI(t[i])), i++;
  }
}
class U {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, n, r) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
    t = R(this, t, i), V(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== C && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Yt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== g && V(this._$AH) ? this._$AA.nextSibling.data = t : this.T(z.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: i, _$litType$: n } = t, r = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = G.createElement(xt(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === r) this._$AH.p(i);
    else {
      const o = new Qt(r, this), s = o.u(this.options);
      o.p(i), this.T(s), this._$AH = o;
    }
  }
  _$AC(t) {
    let i = Ze.get(t.strings);
    return i === void 0 && Ze.set(t.strings, i = new G(t)), i;
  }
  k(t) {
    Te(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let n, r = 0;
    for (const o of t) r === i.length ? i.push(n = new U(this.O(B()), this.O(B()), this, this.options)) : n = i[r], n._$AI(o), r++;
    r < i.length && (this._$AR(n && n._$AB.nextSibling, r), i.length = r);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t !== this._$AB; ) {
      const n = We(t).nextSibling;
      We(t).remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, n, r, o) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = i, this._$AM = r, this.options = o, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = g;
  }
  _$AI(t, i = this, n, r) {
    const o = this.strings;
    let s = !1;
    if (o === void 0) t = R(this, t, i, 0), s = !V(t) || t !== this._$AH && t !== C, s && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = o[0], a = 0; a < o.length - 1; a++) c = R(this, l[n + a], i, a), c === C && (c = this._$AH[a]), s ||= !V(c) || c !== this._$AH[a], c === g ? t = g : t !== g && (t += (c ?? "") + o[a + 1]), this._$AH[a] = c;
    }
    s && !r && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ei extends pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
class ti extends pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== g);
  }
}
class ii extends pe {
  constructor(t, i, n, r, o) {
    super(t, i, n, r, o), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = R(this, t, i, 0) ?? g) === C) return;
    const n = this._$AH, r = t === g && n !== g || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, o = t !== g && (n === g || r);
    r && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ni {
  constructor(t, i, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    R(this, t);
  }
}
const ri = { I: U }, oi = Ae.litHtmlPolyfillSupport;
oi?.(G, U), (Ae.litHtmlVersions ??= []).push("3.3.3");
const si = (e, t, i) => {
  const n = i?.renderBefore ?? t;
  let r = n._$litPart$;
  if (r === void 0) {
    const o = i?.renderBefore ?? null;
    n._$litPart$ = r = new U(t.insertBefore(B(), o), o, void 0, i ?? {});
  }
  return r._$AI(e), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ce = globalThis;
let H = class extends D {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = si(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return C;
  }
};
H._$litElement$ = !0, H.finalized = !0, Ce.litElementHydrateSupport?.({ LitElement: H });
const ai = Ce.litElementPolyfillSupport;
ai?.({ LitElement: H });
(Ce.litElementVersions ??= []).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const li = { attribute: !0, type: String, converter: ie, reflect: !1, hasChanged: Ee }, ci = (e = li, t, i) => {
  const { kind: n, metadata: r } = i;
  let o = globalThis.litPropertyMetadata.get(r);
  if (o === void 0 && globalThis.litPropertyMetadata.set(r, o = /* @__PURE__ */ new Map()), n === "setter" && ((e = Object.create(e)).wrapped = !0), o.set(i.name, e), n === "accessor") {
    const { name: s } = i;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(s, a, e, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(s, void 0, e, l), l;
    } };
  }
  if (n === "setter") {
    const { name: s } = i;
    return function(l) {
      const a = this[s];
      t.call(this, l), this.requestUpdate(s, a, e, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Pe(e) {
  return (t, i) => typeof i == "object" ? ci(e, t, i) : ((n, r, o) => {
    const s = r.hasOwnProperty(o);
    return r.constructor.createProperty(o, n), s ? Object.getOwnPropertyDescriptor(r, o) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function w(e) {
  return Pe({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const di = (e, t, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, i), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Me(e, t) {
  return (i, n, r) => {
    const o = (s) => s.renderRoot?.querySelector(e) ?? null;
    return di(i, n, { get() {
      return o(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hi = { CHILD: 2 }, vt = (e) => (...t) => ({ _$litDirective$: e, values: t });
let wt = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, n) {
    this._$Ct = t, this._$AM = i, this._$Ci = n;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: pi } = ri, Xe = (e) => e, Ye = () => document.createComment(""), W = (e, t, i) => {
  const n = e._$AA.parentNode, r = t === void 0 ? e._$AB : t._$AA;
  if (i === void 0) {
    const o = n.insertBefore(Ye(), r), s = n.insertBefore(Ye(), r);
    i = new pi(o, s, e, e.options);
  } else {
    const o = i._$AB.nextSibling, s = i._$AM, l = s !== e;
    if (l) {
      let a;
      i._$AQ?.(e), i._$AM = e, i._$AP !== void 0 && (a = e._$AU) !== s._$AU && i._$AP(a);
    }
    if (o !== r || l) {
      let a = i._$AA;
      for (; a !== o; ) {
        const c = Xe(a).nextSibling;
        Xe(n).insertBefore(a, r), a = c;
      }
    }
  }
  return i;
}, O = (e, t, i = e) => (e._$AI(t, i), e), ui = {}, fi = (e, t = ui) => e._$AH = t, mi = (e) => e._$AH, me = (e) => {
  e._$AR(), e._$AA.remove();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Je = (e, t, i) => {
  const n = /* @__PURE__ */ new Map();
  for (let r = t; r <= i; r++) n.set(e[r], r);
  return n;
}, K = vt(class extends wt {
  constructor(e) {
    if (super(e), e.type !== hi.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e, t, i) {
    let n;
    i === void 0 ? i = t : t !== void 0 && (n = t);
    const r = [], o = [];
    let s = 0;
    for (const l of e) r[s] = n ? n(l, s) : s, o[s] = i(l, s), s++;
    return { values: o, keys: r };
  }
  render(e, t, i) {
    return this.dt(e, t, i).values;
  }
  update(e, [t, i, n]) {
    const r = mi(e), { values: o, keys: s } = this.dt(t, i, n);
    if (!Array.isArray(r)) return this.ut = s, o;
    const l = this.ut ??= [], a = [];
    let c, f, d = 0, u = r.length - 1, h = 0, y = o.length - 1;
    for (; d <= u && h <= y; ) if (r[d] === null) d++;
    else if (r[u] === null) u--;
    else if (l[d] === s[h]) a[h] = O(r[d], o[h]), d++, h++;
    else if (l[u] === s[y]) a[y] = O(r[u], o[y]), u--, y--;
    else if (l[d] === s[y]) a[y] = O(r[d], o[y]), W(e, a[y + 1], r[d]), d++, y--;
    else if (l[u] === s[h]) a[h] = O(r[u], o[h]), W(e, r[d], r[u]), u--, h++;
    else if (c === void 0 && (c = Je(s, h, y), f = Je(l, d, u)), c.has(l[d])) if (c.has(l[u])) {
      const _ = f.get(s[h]), b = _ !== void 0 ? r[_] : null;
      if (b === null) {
        const A = W(e, r[d]);
        O(A, o[h]), a[h] = A;
      } else a[h] = O(b, o[h]), W(e, r[d], b), r[_] = null;
      h++;
    } else me(r[u]), u--;
    else me(r[d]), d++;
    for (; h <= y; ) {
      const _ = W(e, a[y + 1]);
      O(_, o[h]), a[h++] = _;
    }
    for (; d <= u; ) {
      const _ = r[d++];
      _ !== null && me(_);
    }
    return this.ut = s, fi(e, a), C;
  }
}), gi = /* @__PURE__ */ new Set([
  // colour
  "rgb",
  "rgba",
  "hsl",
  "hsla",
  "hwb",
  "lab",
  "lch",
  "oklab",
  "oklch",
  "color",
  "color-mix",
  "light-dark",
  // custom properties / environment
  "var",
  "env",
  // maths (calc & friends can appear inside colour components)
  "calc",
  "clamp",
  "min",
  "max",
  "abs",
  "round",
  "mod",
  "rem",
  "sin",
  "cos",
  "tan",
  "asin",
  "acos",
  "atan",
  "atan2",
  "pow",
  "sqrt",
  "hypot",
  "log",
  "exp",
  // gradients (valid for the stage `background`)
  "linear-gradient",
  "radial-gradient",
  "conic-gradient",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "repeating-conic-gradient"
]), yi = /^[a-z0-9#%.,/_() +*-]+$/i, _i = /([a-z][a-z0-9-]*)\s*\(/gi;
function $i(e) {
  if (typeof e != "string") return;
  const t = e.trim();
  if (!t || !yi.test(t) || t.includes("/*") || t.includes("*/") || !/^[a-z#]/i.test(t)) return;
  let i = 0;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (o === "(") i++;
    else if (o === ")" && --i < 0) return;
  }
  if (i !== 0) return;
  const n = new RegExp(_i.source, "gi");
  for (let r; r = n.exec(t); )
    if (!gi.has(r[1].toLowerCase())) return;
  return t;
}
function Z(e, t) {
  return $i(e) ?? t;
}
function k(e, t) {
  if (e == null || typeof e == "string" && e.trim() === "") return t;
  const i = typeof e == "number" ? e : Number(e);
  return Number.isFinite(i) ? i : t;
}
const Oe = 14, re = 34, oe = 16, X = 80, xi = "#9e9e9e", Qe = {
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
}, se = 1e3, ae = 600, Ie = 20, et = 50;
function bi(e, t) {
  return e ?? t;
}
function tt(e, t) {
  return t <= 0 ? 100 : Math.round(e / t * 100);
}
function ge(e, t) {
  return Math.max(1, Math.round(t * e / 100));
}
function it(e) {
  const t = e?.floors;
  return !t || typeof t != "object" ? [] : Object.values(t).filter((i) => !!i && typeof i.floor_id == "string" && typeof i.name == "string").sort((i, n) => (i.level ?? 0) - (n.level ?? 0) || i.name.localeCompare(n.name));
}
function vi(e) {
  return {
    type: e,
    width: se,
    height: ae,
    grid: Ie,
    walls: [],
    openings: [],
    items: [],
    texts: [],
    furniture: [],
    trackers: []
  };
}
function S(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
function $e(e, t) {
  if (e === t) return !0;
  if (Array.isArray(e) || Array.isArray(t))
    return !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length ? !1 : e.every((r, o) => $e(r, t[o]));
  if (typeof e != "object" || typeof t != "object" || e === null || t === null) return !1;
  const i = e, n = t;
  for (const r of /* @__PURE__ */ new Set([...Object.keys(i), ...Object.keys(n)]))
    if (!$e(i[r], n[r])) return !1;
  return !0;
}
function wi(e, t = []) {
  return {
    id: S("floor"),
    name: e,
    walls: t,
    openings: [],
    items: [],
    texts: [],
    furniture: [],
    trackers: []
  };
}
function ki(e) {
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
function Fe(e) {
  return e.floors && e.floors.length ? e.floors.map(ki) : [
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
function le(e, t) {
  if (!t) return null;
  const i = e?.[t.entity]?.state;
  if (i == null || i === "unavailable" || i === "unknown") return !1;
  const n = i === "on" || i === "open" || i === "home" || i === "detected";
  return t.invert ? !n : n;
}
function nt(e, t) {
  if (!e || t == null || !Number.isFinite(t)) return null;
  const i = e.max - e.min;
  if (i === 0) return null;
  const n = (t - e.min) / i, r = Math.max(0, Math.min(1, n));
  return e.invert ? 1 - r : r;
}
const N = 8, rt = "—";
function ot(e, t) {
  if (!t || !e) return rt;
  const i = e.states[t];
  return i ? e.formatEntityState(i) : rt;
}
function kt(e, t, i) {
  if (e.formatEntityState !== t.formatEntityState) return !0;
  for (const n of i)
    if (e.states[n] !== t.states[n]) return !0;
  return !1;
}
function xe(e) {
  const t = /* @__PURE__ */ new Set();
  for (const i of Fe(e)) {
    for (const n of i.openings) n.entity && t.add(n.entity);
    for (const n of i.items)
      n.entity && t.add(n.entity), n.secondaryEntity && t.add(n.secondaryEntity);
    for (const n of i.trackers)
      for (const r of [n.xSensor, n.ySensor])
        r?.entity && t.add(r.entity), r?.presence?.entity && t.add(r.presence.entity);
  }
  return t;
}
function Si(e, t) {
  const i = ot(e, t.entity);
  return t.secondaryEntity ? `${i} · ${ot(e, t.secondaryEntity)}` : i;
}
const St = 12;
function Ei(e, t) {
  const i = [];
  if (t.showName) {
    const n = e?.states[t.entity]?.attributes?.friendly_name, r = t.name || n || t.entity;
    r && i.push(r);
  }
  return t.entity && (t.showState ?? t.kind === "sensor") && i.push(Si(e, t)), i.join(" · ");
}
function Et(e) {
  return Math.min(40, Math.max(8, k(e, St)));
}
function be(e) {
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
const Ai = {
  media_player: { on: "mdi:television-play", off: "mdi:television-off" },
  fan: { on: "mdi:fan", off: "mdi:fan-off" },
  lock: { on: "mdi:lock-open-variant", off: "mdi:lock" },
  camera: { on: "mdi:cctv", off: "mdi:cctv-off" },
  humidifier: { on: "mdi:air-humidifier", off: "mdi:air-humidifier-off" },
  vacuum: { on: "mdi:robot-vacuum", off: "mdi:robot-vacuum-variant" }
}, Ti = {
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
}, Ci = {
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
}, Pi = {
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
function Mi(e) {
  return e === "on" || e === "open" || e === "home" || e === "playing";
}
const Oi = {
  lock: /* @__PURE__ */ new Set(["unlocked", "unlocking", "open", "opening"]),
  vacuum: /* @__PURE__ */ new Set(["cleaning", "returning"]),
  camera: /* @__PURE__ */ new Set(["recording", "streaming"])
};
function ze(e, t) {
  if (!t || t === "unavailable" || t === "unknown") return !1;
  const i = e?.split(".")[0] ?? "", n = Oi[i];
  return n ? n.has(t) : Mi(t);
}
const Ii = {
  fan: "spin",
  media_player: "pulse",
  vacuum: "pulse"
};
function At(e, t) {
  const i = e.iconAnimation ?? "auto";
  if (i !== "none" && ze(e.entity, t))
    return i === "spin" || i === "pulse" ? i : Ii[e.entity?.split(".")[0] ?? ""];
}
function Fi(e, t, i) {
  const n = e.split(".")[0], r = Ai[n];
  if (r) return i ? r.on : r.off;
  if (t) {
    if (n === "binary_sensor") {
      const o = Ti[t];
      return o ? i ? o.on : o.off : void 0;
    }
    if (n === "sensor") return Ci[t];
    if (n === "cover") {
      const o = Pi[t];
      return o ? i ? o.on : o.off : void 0;
    }
  }
}
function Tt(e, t, i) {
  if (e.icon) return e.icon;
  if (!e.entity) return be(e.kind);
  if (i) return i;
  const n = t?.attributes?.icon;
  return n || (Fi(
    e.entity,
    t?.attributes?.device_class,
    ze(e.entity, t?.state)
  ) ?? be(e.kind));
}
function Ct(e) {
  const t = Math.round(e);
  let i = Math.round(t * 0.62);
  return i % 2 !== t % 2 && (i += 1), Math.max(2, i);
}
function zi(e) {
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
function F(e) {
  return e.motion ?? "swing";
}
function Le(e) {
  return e.type === "door" && F(e) === "swing";
}
function Li(e) {
  return { sx: e.flipH ? -1 : 1, sy: e.flipV ? -1 : 1 };
}
function Pt(e) {
  return F(e) === "slide" ? e.sliderStyle ?? "single" : "single";
}
const Di = /* @__PURE__ */ new Set(["window", "blind", "shade", "shutter", "curtain", "awning"]), Hi = /* @__PURE__ */ new Set(["blind", "shade", "curtain"]), Ri = /* @__PURE__ */ new Set(["garage", "garage_door", "shutter"]);
function Ni(e) {
  const t = e ?? "";
  return {
    type: Di.has(t) ? "window" : "door",
    motion: Ri.has(t) ? "roll" : Hi.has(t) ? "slide" : void 0
  };
}
const Ui = 3;
function ji(e, t) {
  return e.split(".")[0] === "cover" && t & Ui ? "cover-toggle" : "more-info";
}
function De(e) {
  return e === "unavailable" || e === "unknown";
}
function Wi(e, t) {
  if (!e.entity || t === void 0) return Le(e);
  if (De(t)) return !1;
  const i = t === "on" || t === "open" || t === "opening" || t === "closing";
  return e.invert ? !i : i;
}
function qi(e) {
  return e === "opening" || e === "closing";
}
function Mt(e, t) {
  if (!e.entity || !t) return Le(e) ? 1 : 0;
  if (De(t.state)) return 0;
  const i = t.attributes?.current_position;
  if (typeof i == "number" && Number.isFinite(i)) {
    const n = Math.max(0, Math.min(1, i / 100));
    return e.invert ? 1 - n : n;
  }
  return Wi(e, t.state) ? 1 : 0;
}
function Ki(e, t) {
  return !e.entity || !t || De(t.state) ? !1 : qi(t.state) || Mt(e, t) > 0;
}
function Ot(e, t) {
  const { color: i, open: n = !0, active: r = !1, accent: o = "var(--primary-color, #03a9f4)" } = t, s = e.length / 2, l = N + 4, a = Z(r ? o : i, "var(--primary-color, #03a9f4)"), c = Math.max(0, Math.min(1, t.amount ?? (n ? 1 : 0)));
  let f;
  if (e.type === "window" && F(e) === "swing") {
    const h = Math.PI / 2 * s;
    f = m`
        <!-- jambs -->
        <line x1=${-s} y1=${-l / 2} x2=${-s} y2=${l / 2}
              stroke=${i} stroke-width="2" />
        <line x1=${s} y1=${-l / 2} x2=${s} y2=${l / 2}
              stroke=${i} stroke-width="2" />
        <!-- swing arcs, drawn from the middle outward -->
        <path class="fp-door-arc" d="M 0 0 A ${s} ${s} 0 0 0 ${-s} ${-s}"
              fill="none" stroke-width="1.5" stroke-dasharray=${h}
              style="stroke:${a};stroke-dashoffset:${h * (1 - c)};" />
        <path class="fp-door-arc" d="M 0 0 A ${s} ${s} 0 0 1 ${s} ${-s}"
              fill="none" stroke-width="1.5" stroke-dasharray=${h}
              style="stroke:${a};stroke-dashoffset:${h * (1 - c)};" />
        <!-- left leaf, hinged at left jamb -->
        <g transform="translate(${-s} 0)">
          <g class="fp-door-leaf" style="transform:rotate(${-90 * c}deg);">
            <rect x="0" y="-1.25" width=${s} height="2.5" style="fill:${a};" />
          </g>
        </g>
        <!-- right leaf, hinged at right jamb -->
        <g transform="translate(${s} 0)">
          <g class="fp-leaf-r" style="transform:rotate(${90 * c}deg);">
            <rect x=${-s} y="-1.25" width=${s} height="2.5" style="fill:${a};" />
          </g>
        </g>
      `;
  } else if (F(e) === "roll") {
    const y = Math.max(3, Math.round(e.length / 12)), _ = [];
    for (let b = 1; b < y; b++) {
      const A = -s + e.length * b / y;
      _.push(
        m`<line x1=${A} y1=${-5 / 2} x2=${A} y2=${5 / 2}
              stroke="var(--card-background-color, #fff)" stroke-width="0.75" />`
      );
    }
    f = m`
        <!-- jambs -->
        <line x1=${-s} y1=${-l / 2} x2=${-s} y2=${l / 2}
              stroke=${i} stroke-width="2" />
        <line x1=${s} y1=${-l / 2} x2=${s} y2=${l / 2}
              stroke=${i} stroke-width="2" />
        <!-- track: stays when the curtain is up so the gap still reads as an opening -->
        <line x1=${-s} y1="0" x2=${s} y2="0"
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <g class="fp-roll-curtain" style="transform:scaleY(${1 - c});">
          <rect x=${-s} y=${-5 / 2} width=${e.length} height=${5}
                style="fill:${a};" />
          ${_}
        </g>`;
  } else if (F(e) === "slide") {
    const h = e.type === "window" ? 1.5 : 2.5, y = m`
        <line x1=${-s} y1=${-l / 2} x2=${-s} y2=${l / 2}
              stroke=${i} stroke-width="2" />
        <line x1=${s} y1=${-l / 2} x2=${s} y2=${l / 2}
              stroke=${i} stroke-width="2" />`, _ = Pt(e);
    if (_ === "bypass") {
      const A = -s * c;
      f = m`
        ${y}
        <!-- tracks -->
        <line x1=${-s} y1=${-1.75} x2=${s} y2=${-1.75}
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <line x1=${-s} y1=${1.75} x2=${s} y2=${1.75}
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <!-- fixed panel: left half, front track -->
        <rect x=${-s} y=${1.75 - h / 2} width=${s} height=${h} style="fill:${a};" />
        <!-- moving panel: right half, back track -->
        <g class="fp-slide-panel" style="transform:translateX(${A}px);">
          <rect x="0" y=${-1.75 - h / 2} width=${s} height=${h} style="fill:${a};" />
        </g>`;
    } else if (_ === "biparting") {
      const b = s * c;
      f = m`
        ${y}
        <!-- track -->
        <line x1=${-s} y1="0" x2=${s} y2="0"
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <g class="fp-slide-panel" style="transform:translateX(${-b}px);">
          <rect x=${-s} y=${-h / 2} width=${s} height=${h} style="fill:${a};" />
        </g>
        <g class="fp-slide-panel" style="transform:translateX(${b}px);">
          <rect x="0" y=${-h / 2} width=${s} height=${h} style="fill:${a};" />
        </g>`;
    } else {
      const b = e.length * c;
      f = m`
        ${y}
        <!-- track -->
        <line x1=${-s} y1="0" x2=${s} y2="0"
              stroke=${i} stroke-width="0.75" opacity="0.6" />
        <g class="fp-slide-panel" style="transform:translateX(${b}px);">
          <rect x=${-s} y=${-h / 2} width=${e.length} height=${h} style="fill:${a};" />
        </g>`;
    }
  } else {
    const h = -90 * c, y = Math.PI / 2 * e.length;
    f = m`
        <!-- swing arc: hidden when closed, drawn as it opens -->
        <path class="fp-door-arc"
              d="M ${s} 0 A ${e.length} ${e.length} 0 0 0 ${-s} ${-e.length}"
              fill="none" stroke-width="1.5" stroke-dasharray=${y}
              style="stroke:${a};stroke-dashoffset:${y * (1 - c)};" />
        <!-- door leaf, hinged at left jamb -->
        <g transform="translate(${-s} 0)">
          <g class="fp-door-leaf" style="transform:rotate(${h}deg);">
            <rect x="0" y="-1.25" width=${e.length} height="2.5" style="fill:${a};" />
          </g>
        </g>
      `;
  }
  const { sx: d, sy: u } = Li(e);
  return m`<g transform="translate(${e.x} ${e.y}) rotate(${e.angle})">
      <g transform="scale(${d} ${u})">${f}</g>
    </g>`;
}
function It(e) {
  if (typeof e != "number" || !Number.isFinite(e)) return 0;
  const t = (e % 360 + 360) % 360;
  return t === 90 || t === 180 || t === 270 ? t : 0;
}
function ye(e, t, i) {
  return i === 90 || i === 270 ? { w: t, h: e } : { w: e, h: t };
}
function st(e, t, i, n, r) {
  switch (r) {
    case 90:
      return { x: n - t, y: e };
    case 180:
      return { x: i - e, y: n - t };
    case 270:
      return { x: t, y: i - e };
    default:
      return { x: e, y: t };
  }
}
function Bi(e, t, i) {
  switch (i) {
    case 90:
      return `translate(${t} 0) rotate(90)`;
    case 180:
      return `translate(${e} ${t}) rotate(180)`;
    case 270:
      return `translate(0 ${e}) rotate(-90)`;
    default:
      return "";
  }
}
function Ft(e, t, i, n) {
  const r = N + 4;
  return m`
    <defs>
      <mask id=${n} maskUnits="userSpaceOnUse">
        <rect x="0" y="0" width=${t} height=${i} fill="white" />
        ${e.map((o) => {
    const s = o.length / 2;
    return m`<rect x=${o.x - s} y=${o.y - r / 2}
                           width=${o.length} height=${r} fill="black"
                           transform="rotate(${o.angle} ${o.x} ${o.y})" />`;
  })}
      </mask>
    </defs>`;
}
const Vi = 0.42, Gi = 0.55;
function at(e, t, i = "right") {
  const n = e / 2, r = t / 2, o = t * Gi, s = e * Vi, l = [
    [-n, -r],
    [n, -r],
    [n, r],
    [n - s, r],
    [n - s, -r + o],
    [-n, -r + o]
  ];
  return i === "left" ? l.map(([a, c]) => [-a, c]) : l;
}
function ve(e) {
  const t = e.color ?? xi, i = e.w, n = e.h, r = i / 2, o = n / 2, s = e.type === "roundTable" || e.type === "plant" || e.type === "waterHeater", l = e.type === "sectional" ? m`<polygon points=${at(i, n, e.hand).map((c) => c.join(",")).join(" ")}
                   fill=${t} fill-opacity="0.12" stroke=${t} stroke-width="2"
                   stroke-linejoin="round" />` : s ? m`<ellipse cx="0" cy="0" rx=${r} ry=${o}
                   fill=${t} fill-opacity="0.12" stroke=${t} stroke-width="2" />` : e.type === "rug" ? m`<rect x=${-r} y=${-o} width=${i} height=${n} rx=${Math.min(i, n) * 0.12}
                  fill=${t} fill-opacity="0.08" stroke=${t} stroke-width="2"
                  stroke-dasharray="8 5" />` : m`<rect x=${-r} y=${-o} width=${i} height=${n} rx="4"
                  fill=${t} fill-opacity="0.12" stroke=${t} stroke-width="2" />`;
  let a;
  switch (e.type) {
    case "chair":
      a = m`<line x1=${-r} y1=${-o + n * 0.22} x2=${r} y2=${-o + n * 0.22}
                         stroke=${t} stroke-width="2" />`;
      break;
    case "sofa":
      a = m`
        <line x1=${-r} y1=${-o + n * 0.3} x2=${r} y2=${-o + n * 0.3}
              stroke=${t} stroke-width="2" />
        <line x1=${-r + i * 0.12} y1=${-o + n * 0.3} x2=${-r + i * 0.12} y2=${o}
              stroke=${t} stroke-width="2" />
        <line x1=${r - i * 0.12} y1=${-o + n * 0.3} x2=${r - i * 0.12} y2=${o}
              stroke=${t} stroke-width="2" />`;
      break;
    case "bed":
      a = m`
        <line x1=${-r} y1=${-o + n * 0.26} x2=${r} y2=${-o + n * 0.26}
              stroke=${t} stroke-width="2" />
        <rect x=${-r + i * 0.1} y=${-o + n * 0.06} width=${i * 0.34} height=${n * 0.14} rx="3"
              fill="none" stroke=${t} stroke-width="1.5" />
        <rect x=${r - i * 0.44} y=${-o + n * 0.06} width=${i * 0.34} height=${n * 0.14} rx="3"
              fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "fridge":
      a = m`
        <line x1=${-r} y1=${-o + n * 0.4} x2=${r} y2=${-o + n * 0.4}
              stroke=${t} stroke-width="2" />
        <line x1=${r - i * 0.16} y1=${-o + n * 0.12} x2=${r - i * 0.16} y2=${-o + n * 0.3}
              stroke=${t} stroke-width="2" />
        <line x1=${r - i * 0.16} y1=${-o + n * 0.5} x2=${r - i * 0.16} y2=${o - n * 0.16}
              stroke=${t} stroke-width="2" />`;
      break;
    case "stove": {
      const c = Math.min(i, n) * 0.16, f = i * 0.22, d = n * 0.22;
      a = m`
        <circle cx=${-f} cy=${-d} r=${c} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${f} cy=${-d} r=${c} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${-f} cy=${d} r=${c} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${f} cy=${d} r=${c} fill="none" stroke=${t} stroke-width="2" />`;
      break;
    }
    case "sink":
      a = m`
        <rect x=${-r + i * 0.12} y=${-o + n * 0.18} width=${i * 0.76} height=${n * 0.5} rx="4"
              fill="none" stroke=${t} stroke-width="2" />
        <circle cx="0" cy=${-o + n * 0.1} r=${Math.min(i, n) * 0.05}
                fill="none" stroke=${t} stroke-width="2" />`;
      break;
    case "toilet":
      a = m`
        <rect x=${-r + i * 0.1} y=${-o} width=${i * 0.8} height=${n * 0.22} rx="3"
              fill="none" stroke=${t} stroke-width="2" />
        <ellipse cx="0" cy=${o - n * 0.32} rx=${i * 0.34} ry=${n * 0.3}
                 fill="none" stroke=${t} stroke-width="2" />`;
      break;
    case "stairs": {
      const f = [];
      for (let d = 1; d < 7; d++) {
        const u = -o + n / 7 * d;
        f.push(m`<line x1=${-r} y1=${u} x2=${r} y2=${u} stroke=${t} stroke-width="1.5" />`);
      }
      a = m`${f}
        <line x1="0" y1=${o - 6} x2="0" y2=${-o + 6} stroke=${t} stroke-width="1.5" />
        <path d="M ${-i * 0.12} ${-o + n * 0.16} L 0 ${-o + 4} L ${i * 0.12} ${-o + n * 0.16}"
              fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    }
    case "tv":
      a = m`<line x1=${-i * 0.18} y1=${o} x2=${i * 0.18} y2=${o + n}
                         stroke=${t} stroke-width="2" />`;
      break;
    case "desk":
      a = m`<line x1=${-r} y1=${-o + n * 0.55} x2=${r} y2=${-o + n * 0.55}
                         stroke=${t} stroke-width="1.5" opacity="0.7" />`;
      break;
    case "wardrobe":
      a = m`
        <line x1="0" y1=${-o} x2="0" y2=${o} stroke=${t} stroke-width="2" />
        <line x1=${-i * 0.06} y1=${-n * 0.1} x2=${-i * 0.06} y2=${n * 0.1}
              stroke=${t} stroke-width="2" />
        <line x1=${i * 0.06} y1=${-n * 0.1} x2=${i * 0.06} y2=${n * 0.1}
              stroke=${t} stroke-width="2" />`;
      break;
    case "plant": {
      const c = Math.min(i, n) * 0.18;
      a = m`
        <circle cx="0" cy=${-n * 0.12} r=${c} fill="none" stroke=${t} stroke-width="1.5" />
        <circle cx=${-i * 0.16} cy=${n * 0.08} r=${c} fill="none" stroke=${t} stroke-width="1.5" />
        <circle cx=${i * 0.16} cy=${n * 0.08} r=${c} fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    }
    case "rug":
      a = m`<rect x=${-r + i * 0.1} y=${-o + n * 0.1} width=${i * 0.8} height=${n * 0.8}
                         rx=${Math.min(i, n) * 0.08} fill="none" stroke=${t}
                         stroke-width="1.5" opacity="0.6" />`;
      break;
    case "washer":
    case "dryer": {
      const c = Math.min(i, n) * 0.3;
      a = m`
        <line x1=${-r + i * 0.06} y1=${-o + n * 0.18} x2=${r - i * 0.06} y2=${-o + n * 0.18}
              stroke=${t} stroke-width="1.5" opacity="0.7" />
        <circle cx="0" cy=${n * 0.06} r=${c} fill="none" stroke=${t} stroke-width="2" />
        ${e.type === "dryer" ? m`<circle cx="0" cy=${n * 0.06} r=${c * 0.45}
                        fill="none" stroke=${t} stroke-width="1.5" opacity="0.7" />` : m`<circle cx=${-r + i * 0.16} cy=${-o + n * 0.09} r=${Math.min(i, n) * 0.045}
                        fill="none" stroke=${t} stroke-width="1.5" />`}`;
      break;
    }
    case "dishwasher":
      a = m`
        <rect x=${-r + i * 0.1} y=${-o + n * 0.24} width=${i * 0.8} height=${n * 0.62} rx="3"
              fill="none" stroke=${t} stroke-width="1.5" opacity="0.8" />
        <line x1=${-r + i * 0.06} y1=${o - n * 0.12} x2=${r - i * 0.06} y2=${o - n * 0.12}
              stroke=${t} stroke-width="2" />`;
      break;
    case "waterHeater":
      a = m`
        <circle cx="0" cy="0" r=${Math.min(r, o) * 0.34}
                fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "airHandler":
      a = m`
        <line x1=${-r + i * 0.08} y1=${-o + n * 0.08} x2=${r - i * 0.08} y2=${o - n * 0.08}
              stroke=${t} stroke-width="1.5" opacity="0.8" />
        <line x1=${-r + i * 0.08} y1=${o - n * 0.08} x2=${r - i * 0.08} y2=${-o + n * 0.08}
              stroke=${t} stroke-width="1.5" opacity="0.8" />`;
      break;
    case "bathtub":
      a = m`
        <rect x=${-r + i * 0.06} y=${-o + n * 0.12} width=${i * 0.88} height=${n * 0.76}
              rx=${Math.min(i, n) * 0.12} fill="none" stroke=${t} stroke-width="2" />
        <circle cx=${-r + i * 0.14} cy="0" r=${Math.min(i, n) * 0.055}
                fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "vanity":
      a = m`
        <ellipse cx="0" cy=${n * 0.06} rx=${i * 0.2} ry=${n * 0.26}
                 fill="none" stroke=${t} stroke-width="2" />
        <circle cx="0" cy=${-o + n * 0.14} r=${Math.min(i, n) * 0.05}
                fill="none" stroke=${t} stroke-width="1.5" />`;
      break;
    case "sectional": {
      const c = at(i, n, e.hand), f = c[4][1], d = -o + n * 0.16, u = c[3][0], h = e.hand === "left" ? r - i * 0.09 : -r + i * 0.09;
      a = m`
        <line x1=${-r} y1=${d} x2=${r} y2=${d} stroke=${t} stroke-width="2" />
        <line x1=${h} y1=${d} x2=${h} y2=${f} stroke=${t} stroke-width="2" />
        <line x1=${u} y1=${d} x2=${u} y2=${o} stroke=${t} stroke-width="2" />`;
      break;
    }
    case "table":
    case "roundTable":
    default:
      a = m``;
      break;
  }
  return m`<g transform="translate(${e.x} ${e.y}) rotate(${e.angle ?? 0})">${l}${a}</g>`;
}
function ce(e, t, i, n = 3) {
  return p`
    <div
      class="ripple ${e ? "active" : ""}"
      style="width:${k(i, X)}px;height:${k(i, X)}px;--fp-ripple-color:${Z(t, "var(--primary-color, #03a9f4)")};"
    >
      <span class="dot"></span>
      ${Array.from(
    { length: n },
    (r, o) => p`<span class="ring" style="animation-delay:${(o * 0.6).toFixed(2)}s;"></span>`
  )}
    </div>
  `;
}
function de(e, t) {
  if (!t || !e) return null;
  const i = e[t]?.state;
  if (i == null || i === "unavailable" || i === "unknown") return null;
  const n = Number(i);
  return Number.isFinite(n) ? n : null;
}
function zt(e, t) {
  const i = e.color ?? "var(--primary-color, #03a9f4)", n = (e.dotSize ?? Oe) / 2, r = e.x + e.w / 2, o = e.y + e.h / 2, s = e.angle ?? 0, l = nt(e.xSensor, t.xReading), a = nt(e.ySensor, t.yReading), c = l != null, f = a != null, d = t.xPresent === !1 || t.yPresent === !1, u = e.w / 2, h = e.h / 2, y = t.editing ? m`<rect class="tracker-zone ${d ? "presence-gated" : ""}"
                x=${-u} y=${-h} width=${e.w} height=${e.h}
                fill=${i} fill-opacity="0.08" stroke=${i} stroke-width="1.5"
                stroke-dasharray="6 4" rx="4" pointer-events="none" />` : m``;
  let _;
  if (d)
    _ = m``;
  else if (c && f) {
    const b = -u + l * e.w, A = -h + a * e.h, Rt = `0,${-n} ${n * 0.9},${n * 0.7} ${-n * 0.9},${n * 0.7}`, He = Math.max(n * 3.5, Math.min(e.w, e.h) * 0.45);
    _ = m`
      <g class="tracker-marker" style="transform:translate(${b}px, ${A}px);">
        <circle class="tracker-ring" cx="0" cy="0" r="0"
                fill="none" stroke=${i} stroke-width="1.5"
                style="--fp-tracker-ring-max:${He}px;" />
        <circle class="tracker-ring" cx="0" cy="0" r="0"
                fill="none" stroke=${i} stroke-width="1.5"
                style="--fp-tracker-ring-max:${He}px; animation-delay:0.7s;" />
        <polygon class="tracker-dot" points=${Rt} fill=${i} />
      </g>`;
  } else if (c || f)
    if (c) {
      const b = -u + l * e.w;
      _ = m`
        <g class="tracker-line" style="transform:translate(${b}px, 0);">
          <line class="tracker-line-stroke" x1="0" y1=${-h} x2="0" y2=${h}
                stroke=${i} stroke-width="1.5" />
          <line class="tracker-band" x1="0" y1=${-h} x2="0" y2=${h}
                stroke=${i} stroke-width="3" stroke-linecap="round" />
          <line class="tracker-band" x1="0" y1=${-h} x2="0" y2=${h}
                stroke=${i} stroke-width="3" stroke-linecap="round"
                style="animation-delay:0.8s;" />
        </g>`;
    } else {
      const b = -h + a * e.h;
      _ = m`
        <g class="tracker-line tracker-line-h" style="transform:translate(0, ${b}px);">
          <line class="tracker-line-stroke" x1=${-u} y1="0" x2=${u} y2="0"
                stroke=${i} stroke-width="1.5" />
          <line class="tracker-band" x1=${-u} y1="0" x2=${u} y2="0"
                stroke=${i} stroke-width="3" stroke-linecap="round" />
          <line class="tracker-band" x1=${-u} y1="0" x2=${u} y2="0"
                stroke=${i} stroke-width="3" stroke-linecap="round"
                style="animation-delay:0.8s;" />
        </g>`;
    }
  else t.editing ? _ = m`<circle class="tracker-placeholder" cx="0" cy="0" r=${n}
                          fill=${i} fill-opacity="0.25" />` : _ = m``;
  return m`
    <g class="tracker ${t.editing ? "editing" : ""}"
       transform="translate(${r} ${o}) rotate(${s})">
      ${y}${_}
    </g>`;
}
function lt(e, t, i, n) {
  let r = null, o = n;
  for (const s of i) {
    const l = s.x2 - s.x1, a = s.y2 - s.y1, c = l * l + a * a;
    if (c === 0) continue;
    let f = ((e - s.x1) * l + (t - s.y1) * a) / c;
    f = Math.max(0, Math.min(1, f));
    const d = s.x1 + f * l, u = s.y1 + f * a, h = Math.hypot(e - d, t - u);
    h < o && (o = h, r = { x: d, y: u, angle: Math.atan2(a, l) * 180 / Math.PI });
  }
  return r;
}
const Zi = /* @__PURE__ */ new Set(["light", "switch", "fan", "input_boolean"]);
function Lt(e) {
  const t = e?.split(".")[0] ?? "";
  return Zi.has(t) ? { action: "toggle" } : { action: "more-info" };
}
function ct(e) {
  return e !== void 0 && e.action !== "none";
}
function Xi(e, t) {
  return t === "tap" ? e.tap_action ?? Lt(e.entity) : t === "hold" ? e.hold_action : e.double_tap_action;
}
function Yi(e) {
  const t = e.perform_action ?? e.service;
  if (!t || !t.includes(".")) return null;
  const [i, n] = t.split(".", 2);
  return { domain: i, service: n, data: e.data ?? e.service_data, target: e.target };
}
function Ji(e, t, i, n) {
  if (!(!n || n.action === "none")) {
    if (n.confirmation) {
      const r = typeof n.confirmation == "object" && n.confirmation.text || `Are you sure you want to ${n.action}?`;
      if (!globalThis.confirm?.(r)) return;
    }
    switch (n.action) {
      case "toggle":
        i.entity && t.callService("homeassistant", "toggle", { entity_id: i.entity });
        break;
      case "more-info": {
        const r = n.entity ?? i.entity;
        r && e.dispatchEvent(
          new CustomEvent("hass-more-info", { detail: { entityId: r }, bubbles: !0, composed: !0 })
        );
        break;
      }
      case "navigate":
        if (n.navigation_path) {
          history.pushState(null, "", n.navigation_path);
          const r = new Event("location-changed");
          r.detail = { replace: !1 }, window.dispatchEvent(r);
        }
        break;
      case "url":
        n.url_path && window.open(n.url_path);
        break;
      case "perform-action":
      case "call-service": {
        const r = Yi(n);
        r && t.callService(r.domain, r.service, r.data, r.target);
        break;
      }
      case "fire-dom-event":
        e.dispatchEvent(new CustomEvent("ll-custom", { detail: n, bubbles: !0, composed: !0 }));
        break;
    }
  }
}
const Qi = 500, en = 250;
class tn extends HTMLElement {
  constructor() {
    super(...arguments), this.holdTime = Qi, this.held = !1, this.cancelled = !1;
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
    t.actionHandler && nn(i, t.actionHandler.options) || (t.actionHandler ? (t.removeEventListener("touchstart", t.actionHandler.start), t.removeEventListener("touchend", t.actionHandler.end), t.removeEventListener("touchcancel", t.actionHandler.end), t.removeEventListener("mousedown", t.actionHandler.start), t.removeEventListener("click", t.actionHandler.end), t.removeEventListener("keydown", t.actionHandler.handleKeyDown)) : t.addEventListener("contextmenu", (n) => {
      n.preventDefault(), n.stopPropagation();
    }), t.actionHandler = { options: i }, !i.disabled && (t.actionHandler.start = () => {
      this.cancelled = !1, this.held = !1, i.hasHold && (this.timer = window.setTimeout(() => {
        this.held = !0;
      }, this.holdTime));
    }, t.actionHandler.end = (n) => {
      if (["touchend", "touchcancel"].includes(n.type) && this.cancelled) {
        this.timer && clearTimeout(this.timer), this.timer = void 0;
        return;
      }
      if ((n.type === "touchend" || n.type === "touchcancel") && (n.cancelable && n.preventDefault(), n.type === "touchcancel")) {
        this.timer && clearTimeout(this.timer), this.timer = void 0;
        return;
      }
      const r = n.target;
      i.hasHold && this.timer && (clearTimeout(this.timer), this.timer = void 0), i.hasHold && this.held ? J(r, "hold") : i.hasDoubleClick ? n.type === "click" && n.detail < 2 || !this.dblClickTimeout ? this.dblClickTimeout = window.setTimeout(() => {
        this.dblClickTimeout = void 0, J(r, "tap");
      }, en) : (clearTimeout(this.dblClickTimeout), this.dblClickTimeout = void 0, J(r, "double_tap")) : J(r, "tap");
    }, t.actionHandler.handleKeyDown = (n) => {
      ["Enter", " "].includes(n.key) && (n.preventDefault(), n.currentTarget.actionHandler.end(n));
    }, t.addEventListener("touchstart", t.actionHandler.start, { passive: !0 }), t.addEventListener("touchend", t.actionHandler.end), t.addEventListener("touchcancel", t.actionHandler.end), t.addEventListener("mousedown", t.actionHandler.start, { passive: !0 }), t.addEventListener("click", t.actionHandler.end), t.addEventListener("keydown", t.actionHandler.handleKeyDown)));
  }
}
function nn(e, t) {
  return e.hasHold === t.hasHold && e.hasDoubleClick === t.hasDoubleClick && e.disabled === t.disabled;
}
function J(e, t) {
  e.dispatchEvent(
    new CustomEvent("action", { detail: { action: t }, bubbles: !0, composed: !0 })
  );
}
function rn() {
  const e = document.body, t = e.querySelector("action-handler-easy-floorplan");
  if (t) return t;
  const i = document.createElement("action-handler-easy-floorplan");
  return e.appendChild(i), i;
}
customElements.get("action-handler-easy-floorplan") || customElements.define("action-handler-easy-floorplan", tn);
const on = (e, t) => {
  rn().bind(e, t);
}, sn = vt(
  class extends wt {
    update(e, [t]) {
      return on(e.element, t), C;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(e) {
    }
  }
);
var an = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, ue = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ln(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && an(t, i, r), r;
};
let P = class extends H {
  constructor() {
    super(...arguments), this._wallMaskId = `fp-wall-mask-${P._nextWallMaskId++}`, this._watchedEntities = /* @__PURE__ */ new Set();
  }
  setConfig(e) {
    if (!e || typeof e != "object") throw new Error("Invalid configuration");
    const t = e;
    for (const i of ["walls", "openings", "items", "texts", "furniture", "trackers", "floors"])
      if (t[i] != null && !Array.isArray(t[i]))
        throw new Error(`Invalid configuration: "${i}" must be a list`);
    for (const i of ["width", "height", "grid", "rotation"])
      if (t[i] != null && typeof t[i] != "number")
        throw new Error(`Invalid configuration: "${i}" must be a number`);
    this._config = {
      ...e,
      width: e.width ?? se,
      height: e.height ?? ae,
      walls: e.walls ?? [],
      openings: e.openings ?? [],
      items: e.items ?? [],
      texts: e.texts ?? [],
      furniture: e.furniture ?? []
    }, this._watchedEntities = xe(this._config);
  }
  /**
   * HA pushes a fresh `hass` on every state change anywhere in the instance —
   * for most updates nothing on this plan moved. Skip those renders entirely.
   */
  shouldUpdate(e) {
    if (!(e.size === 1 && e.has("hass"))) return !0;
    const t = e.get("hass");
    return !t || !this.hass ? !0 : kt(t, this.hass, this._watchedEntities);
  }
  getCardSize() {
    return 6;
  }
  static async getConfigElement() {
    return await Promise.resolve().then(() => Pn), document.createElement("easy-floorplan-card-editor");
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
    return ze(e.entity, this.hass?.states[e.entity]?.state);
  }
  /** How far open an opening should be drawn (0..1), from its entity (or default). */
  _openingAmount(e) {
    const t = e.entity ? this.hass?.states[e.entity] : void 0;
    return Mt(e, t);
  }
  /** Whether an opening wears its accent: drawn open, or a cover still in transit. */
  _openingActive(e) {
    const t = e.entity ? this.hass?.states[e.entity] : void 0;
    return Ki(e, t);
  }
  _itemIcon(e) {
    return Tt(
      e,
      this.hass?.states[e.entity],
      this.hass?.entities?.[e.entity]?.icon
    );
  }
  _label(e) {
    return e.name ?? this.hass?.states[e.entity]?.attributes?.friendly_name ?? e.entity ?? "";
  }
  _handleItemAction(e, t) {
    this.hass && Ji(this, this.hass, t, Xi(t, e.detail.action));
  }
  /**
   * Tapping an entity-bound opening: toggle a controllable `cover`, otherwise
   * open the entity's more-info dialog (read-only `binary_sensor`s and
   * position-only covers). See {@link openingClickAction}.
   */
  _onOpeningClick(e) {
    if (!this.hass || !e.entity) return;
    const t = this.hass.states[e.entity]?.attributes?.supported_features ?? 0;
    ji(e.entity, t) === "cover-toggle" ? this.hass.callService("cover", "toggle", { entity_id: e.entity }) : this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId: e.entity },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderBadge(e) {
    const t = k(e.size, re), i = At(
      e,
      e.entity ? this.hass?.states[e.entity]?.state : void 0
    );
    return p`
      <div
        class="badge"
        style="width:${t}px;height:${t}px;transform:rotate(${k(e.angle, 0)}deg);"
      >
        <ha-icon
          class=${i ? `anim-${i}` : ""}
          icon=${this._itemIcon(e)}
          style="--mdc-icon-size:${Ct(t)}px;"
        ></ha-icon>
      </div>
    `;
  }
  _renderItem(e, t, i) {
    const n = this._isOn(e), r = Ei(this.hass, e), o = e.showIcon ?? !0, s = e.display ?? "badge", l = e.rippleColor ?? "var(--primary-color, #03a9f4)", a = e.rippleSize ?? X;
    let c = g;
    s === "ripple" ? c = ce(n, l, a) : s === "iconRipple" ? c = p`<div class="stack">
        ${ce(n, l, a)}
        ${o ? p`<div class="stack-icon">${this._renderBadge(e)}</div>` : g}
      </div>` : o && (c = this._renderBadge(e));
    const f = st(e.x, e.y, t.width, t.height, i), d = ye(t.width, t.height, i);
    return p`
      <div
        class="item ${n ? "on" : "off"}"
        style="left:${f.x / d.w * 100}%; top:${f.y / d.h * 100}%;"
        title=${this._label(e)}
        role="button"
        tabindex="0"
        @action=${(u) => this._handleItemAction(u, e)}
        .actionHandler=${sn({
      hasHold: ct(e.hold_action),
      hasDoubleClick: ct(e.double_tap_action)
    })}
      >
        ${c}
        ${r ? p`<span
              class="label ${c === g ? "inflow" : ""}"
              style="font-size:${Et(e.labelSize)}px;"
              >${r}</span
            >` : g}
      </div>
    `;
  }
  _renderText(e, t, i) {
    const n = st(e.x, e.y, t.width, t.height, i), r = ye(t.width, t.height, i);
    return p`
      <div
        class="text"
        style="left:${n.x / r.w * 100}%; top:${n.y / r.h * 100}%;
               font-size:${k(e.size, oe)}px;
               color:${Z(e.color, "var(--primary-text-color)")};
               transform:translate(-50%,-50%) rotate(${k(e.angle, 0)}deg);"
      >
        ${e.text}
      </div>
    `;
  }
  render() {
    if (!this._config) return p`${g}`;
    const e = this._config, t = Fe(e), i = t.find((s) => s.id === this._activeFloorId) ?? t.find((s) => s.id === e.defaultFloor) ?? t[0], n = It(e.rotation), r = ye(k(e.width, se), k(e.height, ae), n), o = Bi(e.width, e.height, n);
    return p`
      <ha-card .header=${e.title ?? g}>
        <div
          class="stage"
          style="aspect-ratio: ${r.w} / ${r.h}; background:${Z(
      e.background,
      "var(--card-background-color, #fff)"
    )};"
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
          <svg viewBox="0 0 ${r.w} ${r.h}" preserveAspectRatio="none">
            <g transform=${o || g}>
            ${i.image ? m`<image href=${i.image} x="0" y="0" width=${e.width} height=${e.height}
                          preserveAspectRatio="none" opacity=${i.imageOpacity ?? 1} />` : g}
            ${i.furniture.map((s) => ve(s))}
            ${Ft(i.openings, e.width, e.height, this._wallMaskId)}
            <g mask=${`url(#${this._wallMaskId})`}>
              ${i.walls.map(
      (s) => m`
                <line x1=${s.x1} y1=${s.y1} x2=${s.x2} y2=${s.y2}
                      class="wall" stroke-width=${N} stroke-linecap="round" />`
    )}
            </g>
            ${K(
      // Keyed by id: switching floors must create fresh DOM nodes.
      // Unkeyed, Lit morphs floor A's openings into floor B's, and the
      // 0.5s leaf/panel transitions animate the leftover state — a
      // window briefly plays a door swing (issue #50).
      i.openings,
      (s, l) => s.id || l,
      (s) => {
        const l = this._openingAmount(s), a = Ot(s, {
          color: "var(--primary-text-color)",
          open: l > 0,
          amount: l,
          active: this._openingActive(s),
          accent: s.activeColor ?? "var(--primary-color, #03a9f4)"
        });
        if (!s.entity) return a;
        const c = s.length / 2, f = N + 4;
        return m`<g class="fp-opening" @click=${() => this._onOpeningClick(s)}>
                  ${a}
                  <rect class="fp-opening-hit" x=${s.x - c} y=${s.y - f / 2}
                        width=${s.length} height=${f}
                        transform="rotate(${s.angle} ${s.x} ${s.y})" />
                </g>`;
      }
    )}
            ${K(
      i.trackers ?? [],
      (s, l) => s.id || l,
      (s) => zt(s, {
        editing: !1,
        xReading: de(this.hass?.states, s.xSensor?.entity),
        yReading: de(this.hass?.states, s.ySensor?.entity),
        xPresent: le(this.hass?.states, s.xSensor?.presence),
        yPresent: le(this.hass?.states, s.ySensor?.presence)
      })
    )}
            </g>
          </svg>
          <div class="items">
            ${i.texts.map((s) => this._renderText(s, e, n))}
            ${K(
      // No entity filter: devices that exist physically but have no HA
      // entity still deserve their badge (issue #39). Keyed by id so a
      // floor switch builds fresh DOM (see the openings comment).
      i.items,
      (s, l) => s.id || l,
      (s) => this._renderItem(s, e, n)
    )}
          </div>
          ${t.length > 1 ? this._renderFloorSwitcher(t, i) : g}
        </div>
      </ha-card>
    `;
  }
  _renderFloorSwitcher(e, t) {
    return p`
      <div class="floor-switcher">
        ${e.map(
      (i) => p`
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
P._nextWallMaskId = 0;
P.styles = mt`
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
    /* Roll-up curtain (garage / roller shutter): thins onto the track line. */
    .fp-roll-curtain {
      transform-box: fill-box;
      transform-origin: center;
      transition: transform 0.5s ease;
    }
    .fp-roll-curtain rect {
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
    }
    /*
     * The item's x/y anchors its icon, not its icon-plus-label. Were the label
     * in flow, it would make the column taller and the translate would
     * push the icon up by half the label's height -- so an item showing state
     * would sit higher than a bare one beside it, at the same y. The label hangs
     * below instead, out of flow, and every icon lands on its own y.
     */
    .item > .label {
      position: absolute;
      top: calc(100% + 2px);
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    /* Label-only items (showIcon: false) have no badge to hang under, so the
       absolute label would drop to y + 2px on a zero-height item. Put it back
       in flow so it becomes the item's box and centers on (x, y) as before. */
    .label.inflow {
      position: static;
      transform: none;
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
    /* Icon motion while the entity is active (issue #48). */
    ha-icon.anim-spin {
      animation: fp-icon-spin 2s linear infinite;
    }
    ha-icon.anim-pulse {
      animation: fp-icon-pulse 1.6s ease-in-out infinite;
    }
    @keyframes fp-icon-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes fp-icon-pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      ha-icon.anim-spin,
      ha-icon.anim-pulse {
        animation: none;
      }
    }
    .label {
      /* Positioning (out-of-flow anchor + inflow fallback) lives in the
         .item > .label rules above, from #41. */
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
ue([
  Pe({ attribute: !1 })
], P.prototype, "hass", 2);
ue([
  w()
], P.prototype, "_config", 2);
ue([
  w()
], P.prototype, "_activeFloorId", 2);
P = ue([
  bt("easy-floorplan-card")
], P);
const ee = 26, cn = 0.75;
function dn(e, t, i, n = cn) {
  const r = e.find((l) => l.id === t);
  if (!r) return;
  const o = [];
  i !== 2 && o.push({ x: r.x1, y: r.y1, which: 1 }), i !== 1 && o.push({ x: r.x2, y: r.y2, which: 2 });
  const s = [];
  for (const l of e)
    if (l.id !== r.id)
      for (const a of [1, 2]) {
        const c = a === 1 ? l.x1 : l.x2, f = a === 1 ? l.y1 : l.y2, d = o.find((u) => Math.hypot(c - u.x, f - u.y) <= n);
        d && s.push({ id: l.id, end: a, which: d.which, x0: c, y0: f });
      }
  return s.length ? s : void 0;
}
function Dt(e, t, i, n) {
  let r = null, o = n;
  for (const s of e)
    for (const l of [
      { x: s.x1, y: s.y1 },
      { x: s.x2, y: s.y2 }
    ]) {
      const a = Math.hypot(t - l.x, i - l.y);
      a < o && (o = a, r = { x: l.x, y: l.y });
    }
  return r;
}
function hn(e, t, i, n, r, o, s, l, a = ee) {
  if (s) return { x: o(n), y: o(r) };
  const c = Dt(e, n, r, a);
  if (c) return c;
  const f = n - t, d = r - i, u = Math.tan(l * Math.PI / 180);
  return Math.abs(d) <= Math.abs(f) * u ? { x: o(n), y: i } : Math.abs(f) <= Math.abs(d) * u ? { x: t, y: o(r) } : { x: o(n), y: o(r) };
}
function pn(e, t) {
  const i = Math.min(t.x0, t.x1), n = Math.max(t.x0, t.x1), r = Math.min(t.y0, t.y1), o = Math.max(t.y0, t.y1), s = (a, c) => a >= i && a <= n && c >= r && c <= o, l = [];
  for (const a of e.walls)
    s((a.x1 + a.x2) / 2, (a.y1 + a.y2) / 2) && l.push({ kind: "wall", id: a.id });
  for (const a of e.openings) s(a.x, a.y) && l.push({ kind: "opening", id: a.id });
  for (const a of e.items) s(a.x, a.y) && l.push({ kind: "item", id: a.id });
  for (const a of e.texts) s(a.x, a.y) && l.push({ kind: "text", id: a.id });
  for (const a of e.furniture) s(a.x, a.y) && l.push({ kind: "furniture", id: a.id });
  for (const a of e.trackers ?? [])
    s(a.x + a.w / 2, a.y + a.h / 2) && l.push({ kind: "tracker", id: a.id });
  return l;
}
function un(e, t, i, n) {
  return {
    walls: e.walls.map((r) => {
      const o = n.get(`wall:${r.id}`);
      return o && o.kind === "wall" ? { ...r, x1: o.x1 + t, y1: o.y1 + i, x2: o.x2 + t, y2: o.y2 + i } : r;
    }),
    openings: e.openings.map((r) => {
      const o = n.get(`opening:${r.id}`);
      return o && o.kind === "pt" ? { ...r, x: o.x + t, y: o.y + i } : r;
    }),
    items: e.items.map((r) => {
      const o = n.get(`item:${r.id}`);
      return o && o.kind === "pt" ? { ...r, x: o.x + t, y: o.y + i } : r;
    }),
    texts: e.texts.map((r) => {
      const o = n.get(`text:${r.id}`);
      return o && o.kind === "pt" ? { ...r, x: o.x + t, y: o.y + i } : r;
    }),
    furniture: e.furniture.map((r) => {
      const o = n.get(`furniture:${r.id}`);
      return o && o.kind === "pt" ? { ...r, x: o.x + t, y: o.y + i } : r;
    }),
    trackers: (e.trackers ?? []).map((r) => {
      const o = n.get(`tracker:${r.id}`);
      return o && o.kind === "pt" ? { ...r, x: o.x + t, y: o.y + i } : r;
    })
  };
}
function dt(e) {
  return "text" in e.selector || "number" in e.selector;
}
function fn(e, t, i) {
  const n = {};
  for (const r of i)
    t[r.name] !== e[r.name] && (n[r.name] = t[r.name]);
  return n;
}
function ht(e, t) {
  const i = {};
  for (const n of t) {
    if (!(n.name in e)) continue;
    let r = e[n.name];
    if ("text" in n.selector || "icon" in n.selector || "entity" in n.selector)
      (r === "" || r == null) && (r = n.required ? "" : void 0);
    else if ("number" in n.selector) {
      const o = typeof r == "string" && r !== "" ? Number(r) : r;
      if (typeof o != "number" || !Number.isFinite(o)) {
        if (n.required) continue;
        r = void 0;
      } else {
        const s = n.selector.number;
        let l = n.name === "angle" ? (o % 360 + 360) % 360 : o;
        s.min !== void 0 && l < s.min && (l = s.min), s.max !== void 0 && l > s.max && (l = s.max), r = l;
      }
    } else "boolean" in n.selector && (r = !!r);
    i[n.name] = r;
  }
  return i;
}
const L = (e) => e, Y = () => ({
  name: "angle",
  label: "Angle",
  selector: { number: { min: 0, max: 360, step: 1, mode: "slider", unit_of_measurement: "°" } }
}), $ = (e, t) => ({ value: e, label: t }), E = (...e) => ({
  select: { mode: "dropdown", options: e }
}), Ht = [
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
], te = {
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
function mn(e) {
  const t = F(e), i = Pt(e), n = [
    { name: "type", label: "Type", selector: E($("door", "Door"), $("window", "Window")) },
    {
      name: "motion",
      label: "Motion",
      selector: E(
        $("swing", "Swing"),
        $("slide", "Slide"),
        $("roll", "Roll up (garage / shutter)")
      )
    },
    { name: "length", label: "Length", required: !0, selector: { number: { min: 1, mode: "box" } } }
  ];
  return e.type === "door" && t === "swing" && n.push({
    name: "hinge",
    label: "Hinge",
    selector: E($("left", "Left"), $("right", "Right"))
  }), t === "swing" && n.push({
    name: "opens",
    label: "Opens",
    selector: E($("this", "This side"), $("other", "Other side"))
  }), t === "slide" && (i !== "biparting" && n.push({
    name: "slide",
    label: "Slide",
    selector: E($("left", "To left"), $("right", "To right"))
  }), n.push({
    name: "style",
    label: "Style",
    selector: E(
      $("single", "Single"),
      $("bypass", "Bypass (stack)"),
      $("biparting", "Biparting (split)")
    )
  })), n.push({
    name: "entity",
    label: "Entity",
    helper: "Type and motion follow the entity's device class",
    selector: { entity: { filter: [{ domain: ["binary_sensor", "cover"] }] } }
  }), e.entity && n.push({ name: "invert", label: "Invert", selector: { boolean: {} } }), n.push(Y()), {
    fields: n,
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
    toPatch(r) {
      const o = {};
      for (const [s, l] of Object.entries(r))
        s === "motion" ? (o.motion = l === "slide" || l === "roll" ? l : void 0, l !== "slide" && (o.sliderStyle = void 0)) : s === "hinge" || s === "slide" ? o.flipH = l === "right" || void 0 : s === "opens" ? o.flipV = l === "other" || void 0 : s === "style" ? o.sliderStyle = l === "single" ? void 0 : l : s === "invert" ? o.invert = l || void 0 : o[s] = l;
      return o;
    }
  };
}
function gn(e) {
  const t = e.display ?? "badge", i = [
    { name: "entity", label: "Entity", required: !0, selector: { entity: {} } },
    {
      name: "secondaryEntity",
      label: "Second entity",
      helper: "Shown next to the primary state",
      selector: { entity: {} }
    },
    { name: "icon", label: "Icon", selector: { icon: { placeholder: be(e.kind) } } },
    { name: "name", label: "Name", selector: { text: {} } },
    {
      name: "size",
      label: "Size",
      selector: { number: { min: 16, max: 160, step: 2, mode: "slider", unit_of_measurement: "px" } }
    },
    Y(),
    {
      name: "display",
      label: "Display",
      selector: E(
        $("badge", "Icon badge"),
        $("ripple", "Ripple"),
        $("iconRipple", "Icon + ripple")
      )
    },
    {
      name: "iconAnimation",
      label: "Animate icon",
      helper: "Plays only while the entity is active",
      selector: E(
        $("auto", "Auto (fan spins; media & vacuum pulse)"),
        $("none", "None"),
        $("spin", "Spin"),
        $("pulse", "Pulse")
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
      name: "showName",
      label: "Show name",
      helper: "Adds the device's name to the label line",
      selector: { boolean: {} }
    }
  ), (e.showName || (e.showState ?? e.kind === "sensor")) && i.push({
    name: "labelSize",
    label: "Label size",
    selector: { number: { min: 8, max: 40, step: 1, mode: "slider", unit_of_measurement: "px" } }
  }), i.push(
    {
      name: "tap_action",
      label: "Tap action",
      selector: { ui_action: { default_action: Lt(e.entity).action } }
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
      size: e.size ?? re,
      angle: e.angle ?? 0,
      display: t,
      iconAnimation: e.iconAnimation ?? "auto",
      rippleSize: e.rippleSize ?? X,
      showIcon: e.showIcon ?? !0,
      showState: e.showState ?? !1,
      showName: e.showName ?? !1,
      labelSize: e.labelSize ?? St,
      tap_action: e.tap_action,
      hold_action: e.hold_action,
      double_tap_action: e.double_tap_action
    },
    toPatch: L
  };
}
function yn(e) {
  return {
    fields: [
      { name: "text", label: "Text", required: !0, selector: { text: {} } },
      {
        name: "size",
        label: "Size",
        selector: { number: { min: 8, max: 200, mode: "slider", unit_of_measurement: "px" } }
      },
      Y()
    ],
    data: { text: e.text, size: e.size ?? oe, angle: e.angle ?? 0 },
    toPatch: L
  };
}
function _n(e) {
  return {
    fields: [
      {
        name: "type",
        label: "Type",
        selector: {
          select: {
            mode: "dropdown",
            options: Ht.map((t) => ({ value: t, label: te[t] }))
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
          selector: E($("right", "right"), $("left", "left"))
        }
      ] : [],
      { name: "w", label: "Width", required: !0, selector: { number: { min: 10, mode: "box" } } },
      { name: "h", label: "Height", required: !0, selector: { number: { min: 10, mode: "box" } } },
      Y()
    ],
    data: e.type === "sectional" ? { type: e.type, hand: e.hand ?? "right", w: e.w, h: e.h, angle: e.angle ?? 0 } : { type: e.type, w: e.w, h: e.h, angle: e.angle ?? 0 },
    toPatch: L
  };
}
function $n(e) {
  return {
    fields: [
      { name: "w", label: "Width", required: !0, selector: { number: { min: 10, mode: "box" } } },
      { name: "h", label: "Height", required: !0, selector: { number: { min: 10, mode: "box" } } },
      { name: "x", label: "X", required: !0, selector: { number: { mode: "box" } } },
      { name: "y", label: "Y", required: !0, selector: { number: { mode: "box" } } },
      Y(),
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
      dotSize: e.dotSize ?? Oe
    },
    toPatch: L
  };
}
function xn(e) {
  const t = (i, n) => ({
    name: i,
    label: n,
    required: !0,
    selector: { number: { mode: "box" } }
  });
  return {
    fields: [t("x1", "Start X"), t("y1", "Start Y"), t("x2", "End X"), t("y2", "End Y")],
    data: { x1: Math.round(e.x1), y1: Math.round(e.y1), x2: Math.round(e.x2), y2: Math.round(e.y2) },
    toPatch: L
  };
}
function bn(e) {
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
    data: { title: e.title ?? "", width: e.width, height: e.height, grid: e.grid ?? Ie },
    toPatch: L
  };
}
function vn(e) {
  return {
    fields: [
      {
        name: "rotation",
        label: "Rotate display",
        helper: "Rotates the live card only — editing stays as drawn",
        selector: E($("0", "0°"), $("90", "90°"), $("180", "180°"), $("270", "270°"))
      }
    ],
    data: { rotation: String(It(e.rotation)) },
    toPatch: (t) => "rotation" in t ? (
      // Stored as a number; 0 means "not rotated", so keep it out of the YAML.
      { ...t, rotation: t.rotation === "0" ? void 0 : Number(t.rotation) }
    ) : t
  };
}
function wn(e) {
  const t = [
    { name: "image", label: "Bg image", helper: "/local/floorplan.png or URL", selector: { text: {} } }
  ];
  return e.image && t.push({
    name: "imageOpacity",
    label: "Image opacity",
    selector: { number: { min: 0, max: 1, step: 0.05, mode: "slider" } }
  }), { fields: t, data: { image: e.image ?? "", imageOpacity: e.imageOpacity ?? 1 }, toPatch: L };
}
var kn = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, v = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Sn(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && kn(t, i, r), r;
};
const En = (e) => e.label, An = (e) => e.helper, _e = {
  select: { icon: "mdi:cursor-default", label: "Select" },
  wall: { icon: "mdi:wall", label: "Wall" },
  door: { icon: "mdi:door", label: "Door" },
  window: { icon: "mdi:window-closed-variant", label: "Window" },
  tracker: { icon: "mdi:crosshairs-gps", label: "Tracker" }
}, Tn = {
  wall: "mdi:wall",
  opening: "mdi:door",
  item: "mdi:lightbulb-outline",
  text: "mdi:format-text",
  furniture: "mdi:sofa-outline",
  tracker: "mdi:crosshairs-gps"
}, pt = 35, Cn = 10;
function ut(e) {
  return e.some((t) => {
    const i = t, n = i.tagName?.toLowerCase();
    return n === "input" || n === "textarea" || n === "select" || n === "ha-form" || n === "ha-entity-picker" || n === "ha-icon-picker" || i.isContentEditable === !0;
  });
}
let x = class extends H {
  constructor() {
    super(...arguments), this._wallMaskId = `fp-edit-wall-mask-${x._nextWallMaskId++}`, this._watchedEntities = /* @__PURE__ */ new Set(), this._tool = "select", this._selection = [], this._draft = null, this._draftTracker = null, this._freeWalls = !1, this._defaultOpeningLength = 60, this._marquee = null, this._history = [], this._future = [], this._zoom = 1, this._floorMenuOpen = !1, this._addMenuOpen = !1, this._projectOpen = !1, this._fullscreen = !1, this._drag = null, this._pinchPts = /* @__PURE__ */ new Map(), this._pinch = null, this._gesturePointer = null, this._marqueeAdd = !1, this._clipboard = null, this._onKeyDown = (e) => this._handleKeyDown(e), this._onHostKeyDown = (e) => {
      e.key !== "Escape" || !this._fullscreen || ut(e.composedPath()) && (e.preventDefault(), e.stopPropagation(), this._canvasWrap?.focus());
    }, this._onFocusIn = (e) => {
      this._fullscreen && !e.composedPath().includes(this) && (this._fullscreen = !1);
    }, this._preventGesture = (e) => e.preventDefault(), this._onWrapPointerDown = (e) => {
      if (e.pointerType !== "touch" || (this._pinchPts.set(e.pointerId, { x: e.clientX, y: e.clientY }), this._pinchPts.size !== 2)) return;
      this._cancelGesture();
      const t = this._canvasWrap, i = t?.getBoundingClientRect(), [n, r] = [...this._pinchPts.values()];
      this._pinch = {
        d0: Math.max(Math.hypot(r.x - n.x, r.y - n.y), 1),
        z0: this._zoom,
        cx: (n.x + r.x) / 2 - (i?.left ?? 0) + (t?.scrollLeft ?? 0),
        cy: (n.y + r.y) / 2 - (i?.top ?? 0) + (t?.scrollTop ?? 0)
      }, e.stopPropagation();
    }, this._onWrapPointerMove = (e) => {
      if (!this._pinch || !this._pinchPts.has(e.pointerId) || (this._pinchPts.set(e.pointerId, { x: e.clientX, y: e.clientY }), this._pinchPts.size < 2)) return;
      e.preventDefault(), e.stopPropagation();
      const [t, i] = [...this._pinchPts.values()], n = this._pinch;
      this._setZoom(n.z0 * (Math.hypot(i.x - t.x, i.y - t.y) / n.d0)), this.updateComplete.then(() => {
        const r = this._canvasWrap;
        if (!r || this._pinch !== n) return;
        const o = r.getBoundingClientRect(), s = this._zoom / n.z0;
        r.scrollLeft = n.cx * s - ((t.x + i.x) / 2 - o.left), r.scrollTop = n.cy * s - ((t.y + i.y) / 2 - o.top);
      });
    }, this._onWrapPointerEnd = (e) => {
      e.pointerType === "touch" && (this._pinchPts.delete(e.pointerId), this._pinchPts.size < 2 && (this._pinch = null));
    }, this._liveEditKey = null, this._onEditorPointerDown = () => {
      this._liveEditKey = null;
    }, this._gridCache = null;
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this._onKeyDown, !0), this.addEventListener("keydown", this._onHostKeyDown), window.addEventListener("focusin", this._onFocusIn);
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this._onKeyDown, !0), this.removeEventListener("keydown", this._onHostKeyDown), window.removeEventListener("focusin", this._onFocusIn), this._resetPinch(), super.disconnectedCallback();
  }
  setConfig(e) {
    const t = { ...vi(e.type || "custom:easy-floorplan-card"), ...e }, i = Fe(t).map((n) => structuredClone(n));
    this._config = {
      ...t,
      floors: i,
      walls: [],
      openings: [],
      items: [],
      texts: [],
      furniture: [],
      trackers: []
    }, (!this._activeFloorId || !i.some((n) => n.id === this._activeFloorId)) && (this._activeFloorId = t.defaultFloor && i.some((n) => n.id === t.defaultFloor) ? t.defaultFloor : i[0].id), this._lastEmitted && e !== this._lastEmitted && !$e(e, this._lastEmitted) && (this._history = [], this._future = [], this._liveEditKey = null), this._watchedEntities = xe(this._config);
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
    const i = (n) => n.floors;
    return i(t) !== i(this.hass) ? !0 : kt(t, this.hass, this._watchedEntities);
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
    const t = this._config.floors ?? [], i = t.find((n) => n.id === this._activeFloorId) ?? t[0];
    return t.map((n) => i && n.id === i.id ? { ...n, ...e } : n);
  }
  firstUpdated() {
    this._ensureHaComponents();
    for (const t of ["ha-form", "ha-entity-picker", "ha-icon-picker"])
      customElements.get(t) || customElements.whenDefined(t).then(() => this.requestUpdate());
    const e = this._canvasWrap;
    if (e) {
      e.addEventListener("pointerdown", this._onWrapPointerDown, { capture: !0 }), e.addEventListener("pointermove", this._onWrapPointerMove, { capture: !0 }), e.addEventListener("pointerup", this._onWrapPointerEnd, { capture: !0 }), e.addEventListener("pointercancel", this._onWrapPointerEnd, { capture: !0 });
      for (const t of ["gesturestart", "gesturechange", "gestureend"])
        e.addEventListener(t, this._preventGesture);
    }
  }
  /**
   * Defensive pinch-state reset (review feedback on #57). The listeners
   * themselves stay attached on purpose: they live on an element inside our
   * own shadow root (no leak — they die with the instance), and HA's dialog
   * reparents the editor, which fires disconnected/connected without a second
   * firstUpdated — removing them here would permanently kill pinch after a
   * reparent. Clearing the *points* is what matters: a pointerup lost to the
   * reparent would leave a stale entry behind, and the next single tap would
   * read as a phantom second finger.
   */
  _resetPinch() {
    this._pinchPts.clear(), this._pinch = null;
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
    return this._config.grid ?? Ie;
  }
  /**
   * Resolved placement snap step. `snap` is tri-state in the config: unset
   * means "follow the grid" (the default behaviour), `0` is free placement,
   * any other number is a custom step. See {@link resolveSnap}.
   */
  get _resolvedSnap() {
    return bi(this._config.snap, this.grid);
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
        snap: t && t > 0 ? t : ge(et, this.grid)
      });
    }
  }
  /** Grid update plus a custom-snap rescale so its percentage of the grid is preserved. */
  _gridPatch(e) {
    const t = { grid: e };
    if (this._snapMode === "custom") {
      const i = tt(this._config.snap, this.grid);
      t.snap = ge(i, e);
    }
    return t;
  }
  _snap(e) {
    const t = this._resolvedSnap;
    return t > 0 ? Math.round(e / t) * t : e;
  }
  _toVirtual(e, t = !0) {
    const n = this._svg.getScreenCTM();
    if (!n) return { x: 0, y: 0 };
    const r = new DOMPoint(e.clientX, e.clientY).matrixTransform(n.inverse());
    return t ? { x: this._snap(r.x), y: this._snap(r.y) } : { x: r.x, y: r.y };
  }
  /** Nearest existing wall endpoint within ENDPOINT_SNAP, or null. */
  _nearestCorner(e, t) {
    return Dt(this._floor().walls, e, t, ee);
  }
  /** Snap a raw point to a nearby existing wall endpoint, else to the snap step. */
  _snapWallPoint(e, t) {
    return this._nearestCorner(e, t) ?? { x: this._snap(e), y: this._snap(t) };
  }
  /**
   * Like {@link _snapWallPoint}, but ignores endpoints in `moving` (keys
   * `${wallId}:${end}`) — the corner cluster being dragged must not attract
   * itself.
   */
  _snapWallPointExcluding(e, t, i) {
    let n = null, r = ee;
    for (const o of this._floor().walls)
      for (const s of [1, 2]) {
        if (i.has(`${o.id}:${s}`)) continue;
        const l = s === 1 ? o.x1 : o.x2, a = s === 1 ? o.y1 : o.y2, c = Math.hypot(e - l, t - a);
        c < r && (r = c, n = { x: l, y: a });
      }
    return n ?? { x: this._snap(e), y: this._snap(t) };
  }
  /** See {@link snapWallEnd}: corners win, then axis gravity, then the snap step. */
  _snapWallEnd(e, t, i, n) {
    return hn(
      this._floor().walls,
      e,
      t,
      i,
      n,
      (r) => this._snap(r),
      this._freeWalls,
      Cn,
      ee
    );
  }
  _emit(e) {
    this._config = e, this._watchedEntities = xe(e);
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
    for (const n of t) i.some((r) => r.kind === n.kind && r.id === n.id) || i.push(n);
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
    if (ut(i)) return;
    const n = e.ctrlKey || e.metaKey, r = e.key.toLowerCase();
    if (!!(this._drag || this._draft || this._draftTracker || this._marquee) && e.key !== "Escape" && !(n && r === "c")) return;
    if (n && r === "c") {
      this._selection.length && (e.preventDefault(), this._copy());
      return;
    }
    if (n && r === "v") {
      this._clipboard && (e.preventDefault(), this._paste());
      return;
    }
    if (n && r === "d") {
      this._selection.length && (e.preventDefault(), this._duplicate());
      return;
    }
    if (n && r === "z") {
      e.preventDefault(), e.shiftKey ? this._redo() : this._undo();
      return;
    }
    if (n && r === "y") {
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
    const l = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1]
    }[e.key];
    if (!l) return;
    e.preventDefault();
    const a = e.shiftKey ? this.grid : this._resolvedSnap || 1;
    this._nudge(l[0] * a, l[1] * a);
  }
  _nudge(e, t) {
    if (!this._selection.length) return;
    const i = this._floor(), n = this._idsOfKind("wall"), r = this._idsOfKind("opening"), o = this._idsOfKind("item"), s = this._idsOfKind("text"), l = this._idsOfKind("furniture"), a = this._idsOfKind("tracker");
    this._commitFloor({
      walls: i.walls.map(
        (c) => n.has(c.id) ? { ...c, x1: c.x1 + e, y1: c.y1 + t, x2: c.x2 + e, y2: c.y2 + t } : c
      ),
      openings: i.openings.map((c) => r.has(c.id) ? { ...c, x: c.x + e, y: c.y + t } : c),
      items: i.items.map((c) => o.has(c.id) ? { ...c, x: c.x + e, y: c.y + t } : c),
      texts: i.texts.map((c) => s.has(c.id) ? { ...c, x: c.x + e, y: c.y + t } : c),
      furniture: i.furniture.map(
        (c) => l.has(c.id) ? { ...c, x: c.x + e, y: c.y + t } : c
      ),
      trackers: (i.trackers ?? []).map(
        (c) => a.has(c.id) ? { ...c, x: c.x + e, y: c.y + t } : c
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
      const i = this._snap(t.x), n = this._snap(t.y);
      this._draftTracker = { x0: i, y0: n, x1: i, y1: n }, this._gesturePointer = e.pointerId, this._capturePointer(e);
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
          const i = { id: S("wall"), ...t };
          this._commitFloor({ walls: [...this._floor().walls, i] }), this._selection = [{ kind: "wall", id: i.id }];
        }
        return;
      }
      if (this._tool === "tracker" && this._draftTracker) {
        const t = this._draftTracker;
        this._draftTracker = null, this._releasePointer(e);
        const i = Math.min(t.x0, t.x1), n = Math.min(t.y0, t.y1), r = Math.abs(t.x1 - t.x0), o = Math.abs(t.y1 - t.y0);
        r >= this.grid / 2 && o >= this.grid / 2 && this._addTracker(i, n, r, o);
        return;
      }
      if (this._marquee) {
        const t = this._marquee;
        if (this._marquee = null, this._releasePointer(e), !(Math.hypot(t.x1 - t.x0, t.y1 - t.y0) > 4)) {
          this._marqueeAdd || this._clearSel();
          return;
        }
        const n = this._elementsInRect(t);
        this._selection = this._marqueeAdd ? this._mergeSel(this._selection, n) : n, this._liveEditKey = null;
        return;
      }
      this._drag && (this._drag = null, this._releasePointer(e));
    }
  }
  /** All active-floor elements whose center lies inside the marquee rect. */
  _elementsInRect(e) {
    return pn(this._floor(), e);
  }
  // ---- dragging existing elements ----------------------------------------
  _startDrag(e, t, i) {
    this._tool === "select" && (e.stopPropagation(), this._gesturePointer === null && (this._canvasWrap?.focus(), i ? this._selectOne(t) : this._selectForPointer(e, t), this._drag = {
      primary: t,
      start: this._toVirtual(e, !1),
      orig: this._snapshotSelection(),
      endpoint: i
    }, t.kind === "wall" && (this._drag.attached = this._attachedCorners(t.id, i)), this._gesturePointer = e.pointerId, this._capturePointer(e)));
  }
  /** See {@link attachedCorners}: shared room corners that stretch with this wall. */
  _attachedCorners(e, t) {
    return dn(this._floor().walls, e, t);
  }
  /** Capture the start positions of every selected element on the active floor. */
  _snapshotSelection() {
    const e = this._floor(), t = /* @__PURE__ */ new Map();
    for (const i of this._selection)
      if (i.kind === "wall") {
        const n = e.walls.find((r) => r.id === i.id);
        n && t.set(`wall:${n.id}`, { kind: "wall", x1: n.x1, y1: n.y1, x2: n.x2, y2: n.y2 });
      } else if (i.kind === "opening") {
        const n = e.openings.find((r) => r.id === i.id);
        n && t.set(`opening:${n.id}`, { kind: "pt", x: n.x, y: n.y });
      } else if (i.kind === "item") {
        const n = e.items.find((r) => r.id === i.id);
        n && t.set(`item:${n.id}`, { kind: "pt", x: n.x, y: n.y });
      } else if (i.kind === "text") {
        const n = e.texts.find((r) => r.id === i.id);
        n && t.set(`text:${n.id}`, { kind: "pt", x: n.x, y: n.y });
      } else if (i.kind === "furniture") {
        const n = e.furniture.find((r) => r.id === i.id);
        n && t.set(`furniture:${n.id}`, { kind: "pt", x: n.x, y: n.y });
      } else {
        const n = (e.trackers ?? []).find((r) => r.id === i.id);
        n && t.set(`tracker:${n.id}`, { kind: "pt", x: n.x, y: n.y });
      }
    return t;
  }
  _applyDrag(e) {
    const t = this._drag, i = this._toVirtual(e, !1);
    if (!t.moved) {
      if (Math.hypot(i.x - t.start.x, i.y - t.start.y) <= 4) return;
      t.moved = !0, t.priorFuture = this._future, this._pushHistory(), t.snapshot = this._history[this._history.length - 1];
    }
    const n = this._floor();
    if (t.endpoint) {
      const f = e.altKey ? [] : t.attached ?? [], d = /* @__PURE__ */ new Set([
        `${t.primary.id}:${t.endpoint}`,
        ...f.map((y) => `${y.id}:${y.end}`)
      ]), u = this._snapWallPointExcluding(i.x, i.y, d), h = n.walls.map((y) => {
        let _ = y;
        y.id === t.primary.id && (_ = t.endpoint === 1 ? { ..._, x1: u.x, y1: u.y } : { ..._, x2: u.x, y2: u.y });
        for (const b of f)
          b.id === y.id && (_ = b.end === 1 ? { ..._, x1: u.x, y1: u.y } : { ..._, x2: u.x, y2: u.y });
        return _;
      });
      this._emitFloor({ walls: h });
      return;
    }
    if (this._selection.length === 1 && t.primary.kind === "opening") {
      const f = t.orig.get(`opening:${t.primary.id}`);
      if (f && f.kind === "pt") {
        const d = f.x + (i.x - t.start.x), u = f.y + (i.y - t.start.y), h = lt(d, u, n.walls, pt), y = n.openings.map(
          (_) => _.id === t.primary.id ? h ? { ..._, x: h.x, y: h.y, angle: h.angle } : { ..._, x: this._snap(d), y: this._snap(u) } : _
        );
        this._emitFloor({ openings: y });
        return;
      }
    }
    const r = t.orig.get(`${t.primary.kind}:${t.primary.id}`);
    if (!r) return;
    const o = r.kind === "wall" ? r.x1 : r.x, s = r.kind === "wall" ? r.y1 : r.y, l = this._snap(o + (i.x - t.start.x)) - o, a = this._snap(s + (i.y - t.start.y)) - s;
    let c = this._applyDelta(l, a, t.orig);
    if (t.attached?.length && !e.altKey) {
      const f = (c.walls ?? n.walls).map((d) => {
        let u = d;
        for (const h of t.attached)
          h.id !== d.id || t.orig.has(`wall:${h.id}`) || (u = h.end === 1 ? { ...u, x1: h.x0 + l, y1: h.y0 + a } : { ...u, x2: h.x0 + l, y2: h.y0 + a });
        return u;
      });
      c = { ...c, walls: f };
    }
    this._emitFloor(c);
  }
  /** Translate every snapshotted element by (dx, dy). */
  _applyDelta(e, t, i) {
    return un(this._floor(), e, t, i);
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
    const n = this._floor(), r = lt(t, i, n.walls, pt), o = {
      id: S(e),
      type: e,
      x: r?.x ?? t,
      y: r?.y ?? i,
      // User-editable from the door/window context bar so opening size can be
      // set BEFORE placing (the previous hardcoded 60 forced place-then-resize).
      length: this._defaultOpeningLength,
      angle: r?.angle ?? 0
    };
    this._commitFloor({ openings: [...n.openings, o] }), this._selection = [{ kind: "opening", id: o.id }], this._tool = "select";
  }
  _addItem(e) {
    const t = {
      id: S("item"),
      entity: "",
      x: this._snap(this._config.width / 2),
      y: this._snap(this._config.height / 2),
      kind: e,
      showState: e === "sensor",
      showIcon: !0,
      size: re
    };
    this._commitFloor({ items: [...this._floor().items, t] }), this._selection = [{ kind: "item", id: t.id }], this._tool = "select";
  }
  _addFurniture(e) {
    const t = Qe[e], i = {
      id: S("furn"),
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
  _addTracker(e, t, i, n) {
    const r = {
      id: S("tracker"),
      x: e,
      y: t,
      w: i,
      h: n,
      angle: 0,
      dotSize: Oe
    };
    this._commitFloor({ trackers: [...this._floor().trackers ?? [], r] }), this._selection = [{ kind: "tracker", id: r.id }], this._tool = "select";
  }
  _addText() {
    const e = {
      id: S("text"),
      x: this._snap(this._config.width / 2),
      y: this._snap(this._config.height / 2),
      text: "Label",
      size: oe
    };
    this._commitFloor({ texts: [...this._floor().texts, e] }), this._selection = [{ kind: "text", id: e.id }], this._tool = "select";
  }
  _deleteSelected() {
    if (!this._selection.length) return;
    const e = this._floor(), t = this._idsOfKind("wall"), i = this._idsOfKind("opening"), n = this._idsOfKind("item"), r = this._idsOfKind("text"), o = this._idsOfKind("furniture"), s = this._idsOfKind("tracker");
    this._commitFloor({
      walls: e.walls.filter((l) => !t.has(l.id)),
      openings: e.openings.filter((l) => !i.has(l.id)),
      items: e.items.filter((l) => !n.has(l.id)),
      texts: e.texts.filter((l) => !r.has(l.id)),
      furniture: e.furniture.filter((l) => !o.has(l.id)),
      trackers: (e.trackers ?? []).filter((l) => !s.has(l.id))
    }), this._clearSel();
  }
  // ---- clipboard (copy / paste / duplicate) ------------------------------
  _copy() {
    if (!this._selection.length) return;
    const e = this._floor(), t = this._idsOfKind("wall"), i = this._idsOfKind("opening"), n = this._idsOfKind("item"), r = this._idsOfKind("text"), o = this._idsOfKind("furniture"), s = this._idsOfKind("tracker");
    this._clipboard = structuredClone({
      walls: e.walls.filter((l) => t.has(l.id)),
      openings: e.openings.filter((l) => i.has(l.id)),
      items: e.items.filter((l) => n.has(l.id)),
      texts: e.texts.filter((l) => r.has(l.id)),
      furniture: e.furniture.filter((l) => o.has(l.id)),
      trackers: (e.trackers ?? []).filter((l) => s.has(l.id))
    });
  }
  /** Paste the clipboard onto the active floor, offset by one snap step, with fresh ids. */
  _paste() {
    if (!this._clipboard) return;
    const e = structuredClone(this._clipboard), t = this._resolvedSnap || this.grid, i = this._floor(), n = e.walls.map((c) => ({
      ...c,
      id: S("wall"),
      x1: c.x1 + t,
      y1: c.y1 + t,
      x2: c.x2 + t,
      y2: c.y2 + t
    })), r = e.openings.map((c) => ({
      ...c,
      id: S(c.type),
      x: c.x + t,
      y: c.y + t
    })), o = e.items.map((c) => ({
      ...c,
      id: S("item"),
      x: c.x + t,
      y: c.y + t
    })), s = e.texts.map((c) => ({
      ...c,
      id: S("text"),
      x: c.x + t,
      y: c.y + t
    })), l = e.furniture.map((c) => ({
      ...c,
      id: S("furn"),
      x: c.x + t,
      y: c.y + t
    })), a = (e.trackers ?? []).map((c) => ({
      ...c,
      id: S("tracker"),
      x: c.x + t,
      y: c.y + t
    }));
    this._commitFloor({
      walls: [...i.walls, ...n],
      openings: [...i.openings, ...r],
      items: [...i.items, ...o],
      texts: [...i.texts, ...s],
      furniture: [...i.furniture, ...l],
      trackers: [...i.trackers ?? [], ...a]
    }), this._selection = [
      ...n.map((c) => ({ kind: "wall", id: c.id })),
      ...r.map((c) => ({ kind: "opening", id: c.id })),
      ...o.map((c) => ({ kind: "item", id: c.id })),
      ...s.map((c) => ({ kind: "text", id: c.id })),
      ...l.map((c) => ({ kind: "furniture", id: c.id })),
      ...a.map((c) => ({ kind: "tracker", id: c.id }))
    ], this._tool = "select";
  }
  _duplicate() {
    this._copy(), this._paste();
  }
  // ---- floors -------------------------------------------------------------
  /** Add a floor that reuses the current floor's walls (fresh ids) and nothing else. */
  _addFloor() {
    const e = this._floor().walls.map((r) => ({ ...r, id: S("wall") })), t = (this._config.floors?.length ?? 1) + 1, i = wi(`Floor ${t}`, e), n = [...this._config.floors ?? [], i];
    this._activeFloorId = i.id, this._clearSel(), this._commit({ ...this._config, floors: n });
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
    const t = it(this.hass).find((i) => i.floor_id === e);
    this._commit({
      ...this._config,
      floors: (this._config.floors ?? []).map(
        (i) => i.id === this._activeFloorId ? { ...i, haFloor: t?.floor_id, ...t ? { name: t.name } : {} } : i
      )
    });
  }
  /** HA-floor link row for the floor gear popover; hidden when HA exposes no floors. */
  _renderHaFloorRow(e) {
    const t = it(this.hass);
    return t.length ? p`
      <div class="pop-row">
        <label>HA floor</label>
        <select
          .value=${e?.haFloor ?? ""}
          @change=${(i) => this._linkHaFloor(i.target.value)}
        >
          <option value="" ?selected=${!e?.haFloor}>(not linked)</option>
          ${t.map(
      (i) => p`<option value=${i.floor_id} ?selected=${e?.haFloor === i.floor_id}>
                ${i.name}
              </option>`
    )}
        </select>
      </div>
    ` : p`${g}`;
  }
  _deleteFloor() {
    const e = this._config.floors ?? [];
    if (e.length <= 1) return;
    const t = e.findIndex((n) => n.id === this._activeFloorId), i = e.filter((n) => n.id !== this._activeFloorId);
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
    const n = (this._floor().trackers ?? []).find((o) => o.id === e);
    if (!n) return;
    if (i === null) {
      this._updateTracker(e, { [t]: void 0 });
      return;
    }
    const r = n[t] ?? { entity: "", min: 0, max: 5 };
    this._updateTracker(e, { [t]: { ...r, ...i } });
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
    const n = `${e}:${t}:${Object.keys(i).sort().join(",")}`;
    this._liveEditKey !== n && this._pushHistory(n);
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
  _applyElementPatch(e, t, i, n) {
    switch (e) {
      case "opening":
        n ? this._updateOpeningLive(t, i) : this._updateOpening(t, i);
        break;
      case "item":
        n ? this._updateItemLive(t, i) : this._updateItem(t, i);
        break;
      case "text":
        n ? this._updateTextLive(t, i) : this._updateText(t, i);
        break;
      case "furniture":
        n ? this._updateFurnitureLive(t, i) : this._updateFurniture(t, i);
        break;
      case "tracker":
        n ? this._updateTrackerLive(t, i) : this._updateTracker(t, i);
        break;
      case "wall":
        n ? this._updateWallLive(t, i) : this._updateWall(t, i);
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
        const i = t.walls.find((n) => n.id === e.id);
        return i ? `Wall · ${Math.round(Math.hypot(i.x2 - i.x1, i.y2 - i.y1))} units` : "Wall";
      }
      case "opening": {
        const i = t.openings.find((n) => n.id === e.id);
        return i ? `${i.type === "door" ? "Door" : "Window"} · ${Math.round(i.length)} units` : "Opening";
      }
      case "item": {
        const i = t.items.find((n) => n.id === e.id);
        return i?.entity ? `Device · ${i.entity}` : "Device";
      }
      case "text": {
        const n = t.texts.find((r) => r.id === e.id)?.text ?? "";
        return n ? `Text · “${n.length > 24 ? `${n.slice(0, 24)}…` : n}”` : "Text";
      }
      case "furniture": {
        const i = t.furniture.find((r) => r.id === e.id);
        if (!i) return "Furniture";
        const n = te[i.type];
        return `${n.charAt(0).toUpperCase()}${n.slice(1)} · ${Math.round(i.w)}×${Math.round(i.h)}`;
      }
      default: {
        const i = (t.trackers ?? []).find((n) => n.id === e.id);
        return i ? `Tracker · ${Math.round(i.w)}×${Math.round(i.h)}` : "Tracker";
      }
    }
  }
  _renderGrid() {
    const { width: e, height: t } = this._config, i = this.grid, n = `${e}x${t}x${i}`;
    if (this._gridCache?.key === n) return this._gridCache.lines;
    const r = [];
    for (let o = 0; o <= e; o += i)
      r.push(m`<line x1=${o} y1="0" x2=${o} y2=${t} class="grid" />`);
    for (let o = 0; o <= t; o += i)
      r.push(m`<line x1="0" y1=${o} x2=${e} y2=${o} class="grid" />`);
    return this._gridCache = { key: n, lines: r }, r;
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
      t = "Wall", i = p`
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
      t = "Tracker", i = p`
        <span class="ctx-hint"
          >Drag on the canvas to draw the tracked area; bind one or two
          distance sensors in the Element editor.</span
        >
      `;
    else if (e === "door" || e === "window")
      t = e === "door" ? "Door" : "Window", i = p`
        <label class="ctx-field">
          Length
          <input
            class="num"
            type="number"
            min="1"
            .value=${String(this._defaultOpeningLength)}
            title="Default length applied to the next ${e} you place"
            @change=${(n) => {
        this._defaultOpeningLength = Math.max(
          1,
          Number(n.target.value) || this._defaultOpeningLength
        );
      }}
          />
        </label>
        <span class="ctx-hint">Click on a wall to drop a ${e}; it snaps onto the wall.</span>
      `;
    else {
      t = "Select";
      const n = this._selection.length;
      i = n === 0 ? p`<span class="ctx-hint"
              >Click an element to select it, or drag a box to select several.</span
            >` : p`
              <span class="ctx-count">${n} selected</span>
              <span class="ctx-hint">Properties and actions are in the Element section below.</span>
            `;
    }
    return p`
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
    const e = this._snapMode, t = tt(this._config.snap, this.grid), i = [
      { id: "grid", label: "On" },
      { id: "off", label: "Off" },
      { id: "custom", label: "Custom" }
    ], n = e === "grid" ? `Snapping to the ${this.grid}-unit grid.` : e === "off" ? "No snapping — free placement." : `Snap = ${t}% of grid (${this._resolvedSnap} units).`;
    return p`
      <span class="ctx-field-label">Snap</span>
      <div class="seg" role="group" aria-label="Snap mode">
        ${i.map(
      (r) => p`
            <button
              class=${e === r.id ? "active" : ""}
              aria-pressed=${e === r.id}
              title=${r.id === "grid" ? "Snap to the grid" : r.id === "off" ? "Free placement" : "Custom step (% of grid)"}
              @click=${() => this._setSnapMode(r.id)}
            >
              ${r.label}
            </button>
          `
    )}
      </div>
      ${e === "custom" ? p`<input
              class="num"
              type="number"
              min="1"
              step="5"
              .value=${String(t)}
              title="Custom snap step, as a percentage of the grid"
              @change=${(r) => {
      const o = Math.max(
        1,
        Number(r.target.value) || et
      );
      this._patchConfig({ snap: ge(o, this.grid) });
    }}
            /><span class="ctx-field-label">%</span>` : g}
      <span class="ctx-hint">${n}</span>
    `;
  }
  render() {
    if (!this._config) return p`${g}`;
    const e = this._config, t = this._floor(), i = e.floors ?? [], n = !t.walls.length && !t.openings.length && !t.items.length && !t.texts.length && !t.furniture.length && !(t.trackers ?? []).length;
    return p`
      <div
        class="editor ${this._fullscreen ? "fullscreen" : ""}"
        popover=${this._fullscreen ? "manual" : g}
        @pointerdown=${this._onEditorPointerDown}
      >
        ${this._floorMenuOpen || this._addMenuOpen ? p`<div
              class="pop-backdrop"
              @click=${() => {
      this._floorMenuOpen = !1, this._addMenuOpen = !1;
    }}
            ></div>` : g}
        <div class="toolbar">
          <!-- Tools — modes; exactly one is active at a time -->
          <div class="seg" role="group" aria-label="Tool">
            ${["select", "wall", "door", "window", "tracker"].map(
      (r) => p`
                <button
                  class=${this._tool === r ? "active" : ""}
                  aria-pressed=${this._tool === r}
                  title=${_e[r].label}
                  @click=${() => {
        this._tool = r, this._draft = null, this._draftTracker = null;
      }}
                >
                  <ha-icon icon=${_e[r].icon}></ha-icon>${_e[r].label}
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
            ${this._addMenuOpen ? this._renderAddMenu() : g}
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
            <select
              @change=${(r) => {
      this._switchFloor(r.target.value), this._canvasWrap?.focus();
    }}
            >
              ${i.map(
      (r) => p`<option value=${r.id} ?selected=${r.id === this._activeFloorId}>${r.name}</option>`
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
            ${this._floorMenuOpen ? p`<div class="pop">
                  ${this._renderHaFloorRow(t)}
                  <div class="pop-row">
                    <label>Rename</label>
                    <input
                      class="floor-name"
                      type="text"
                      .value=${t?.name ?? ""}
                      @change=${(r) => this._renameFloor(this._activeFloorId, r.target.value)}
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
                </div>` : g}
          </span>
        </div>

        ${this._renderContextBar()}

        <div class="workspace">
        <div class="canvas-outer">
        <div class="canvas-wrap" tabindex="0" @wheel=${this._onCanvasWheel}>
          <div class="stage" style="aspect-ratio: ${k(e.width, se)} / ${k(
      e.height,
      ae
    )}; width:${this._zoom * 100}%;">
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
              ${t.image ? m`<image href=${t.image} x="0" y="0" width=${e.width} height=${e.height}
                            preserveAspectRatio="none" opacity=${t.imageOpacity ?? 1} />` : g}
              ${this._renderGrid()}
              ${t.furniture.map((r) => this._renderFurnitureSel(r))}
              ${Ft(t.openings, e.width, e.height, this._wallMaskId)}
              ${t.walls.map((r) => this._renderWall(r))}
              ${K(
      // Keyed by id: switching floors must create fresh DOM. Reused
      // nodes would CSS-transition from the previous floor's opening
      // state — a window briefly plays a door swing (issue #50).
      t.openings,
      (r, o) => r.id || o,
      (r) => this._renderOpeningSel(r)
    )}
              ${K(
      t.trackers ?? [],
      (r, o) => r.id || o,
      (r) => this._renderTrackerSel(r)
    )}
              ${this._draftTracker ? m`<rect class="tracker-draft"
                              x=${Math.min(this._draftTracker.x0, this._draftTracker.x1)}
                              y=${Math.min(this._draftTracker.y0, this._draftTracker.y1)}
                              width=${Math.abs(this._draftTracker.x1 - this._draftTracker.x0)}
                              height=${Math.abs(this._draftTracker.y1 - this._draftTracker.y0)}
                              rx="4" />` : g}
              ${this._draft ? m`<line x1=${this._draft.x1} y1=${this._draft.y1}
                              x2=${this._draft.x2} y2=${this._draft.y2}
                              class="wall draft" mask=${`url(#${this._wallMaskId})`}
                              stroke-width=${N} />` : g}
              ${this._marquee ? m`<rect x=${Math.min(this._marquee.x0, this._marquee.x1)}
                              y=${Math.min(this._marquee.y0, this._marquee.y1)}
                              width=${Math.abs(this._marquee.x1 - this._marquee.x0)}
                              height=${Math.abs(this._marquee.y1 - this._marquee.y0)}
                              class="marquee" />` : g}
            </svg>
            <div class="items">
              ${t.texts.map((r) => this._renderTextOverlay(r, e))}
              ${t.items.map((r) => this._renderItemOverlay(r, e))}
            </div>
          </div>
        </div>
        ${n && !this._draft && !this._draftTracker ? p`<div class="empty-hint">
              <div>
                <b>Draw your first room:</b> pick the <b>Wall</b> tool and drag on the canvas.<br />
                Then drop doors, windows and devices onto it.
              </div>
            </div>` : g}
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
    return customElements.get("ha-form") ? p`<ha-form
        .hass=${this.hass}
        .data=${e.data}
        .schema=${e.fields}
        .computeLabel=${En}
        .computeHelper=${An}
        @value-changed=${(i) => {
      i.stopPropagation();
      const n = fn(e.data, i.detail.value, e.fields), r = ht(n, e.fields), o = Object.keys(r);
      if (!o.length) return;
      const s = o.length === 1 && dt(e.fields.find((l) => l.name === o[0]));
      t(e.toPatch(r), s);
    }}
      ></ha-form>` : p`${e.fields.map((i) => this._renderFallbackField(e, i, t))}`;
  }
  _applyFallback(e, t, i, n, r) {
    const o = ht({ [t.name]: i }, e.fields);
    t.name in o && r(e.toPatch(o), n && dt(t));
  }
  /** One plain-input row per schema field — the outside-HA / load-failure path. */
  _renderFallbackField(e, t, i) {
    const n = e.data[t.name], r = t.selector;
    if ("select" in r) {
      const o = r.select.options;
      return p`<div class="row">
        <label>${t.label}</label>
        <select
          .value=${String(n ?? "")}
          @change=${(s) => this._applyFallback(e, t, s.target.value, !1, i)}
        >
          ${o.map(
        (s) => p`<option value=${s.value} ?selected=${s.value === n}>${s.label}</option>`
      )}
        </select>
      </div>`;
    }
    if ("boolean" in r)
      return p`<div class="row">
        <label>${t.label}</label>
        <input
          type="checkbox"
          .checked=${!!n}
          @change=${(o) => this._applyFallback(e, t, o.target.checked, !1, i)}
        />
      </div>`;
    if ("number" in r) {
      const o = r.number, s = o.mode === "slider";
      return p`<div class="row">
        <label>${t.label}</label>
        ${s ? p`<input
              type="range"
              min=${o.min ?? 0}
              max=${o.max ?? 100}
              step=${o.step ?? 1}
              .value=${String(n ?? o.min ?? 0)}
              @input=${(l) => this._applyFallback(e, t, Number(l.target.value), !0, i)}
            />` : g}
        <input
          class="num"
          type="number"
          min=${o.min ?? g}
          max=${o.max ?? g}
          step=${o.step ?? g}
          .value=${String(n ?? "")}
          @change=${(l) => {
        const a = l.target;
        this._applyFallback(
          e,
          t,
          a.value === "" ? void 0 : Number(a.value),
          !1,
          i
        ), a.value = String(e.data[t.name] ?? "");
      }}
        />
      </div>`;
    }
    if ("entity" in r) {
      const o = r.entity.filter;
      return p`<div class="row wide">
        <label>${t.label}</label>
        ${this._renderEntityPicker(
        String(n ?? ""),
        (s) => this._applyFallback(e, t, s, !1, i),
        o?.[0]?.domain
      )}
      </div>`;
    }
    return "icon" in r ? p`<div class="row wide">
        <label>${t.label}</label>
        <input
          type="text"
          placeholder=${r.icon.placeholder ?? "mdi:…"}
          .value=${String(n ?? "")}
          @change=${(o) => this._applyFallback(e, t, o.target.value, !1, i)}
        />
      </div>` : "ui_action" in r ? p`${g}` : p`<div class="row">
      <label>${t.label}</label>
      <input
        type="text"
        .value=${String(n ?? "")}
        @input=${(o) => this._applyFallback(e, t, o.target.value, !0, i)}
      />
    </div>`;
  }
  _renderEntityPicker(e, t, i) {
    return customElements.get("ha-entity-picker") ? p`<ha-entity-picker
        .hass=${this.hass}
        .value=${e}
        .includeDomains=${i}
        allow-custom-entity
        @value-changed=${(n) => t(n.detail.value ?? "")}
      ></ha-entity-picker>` : p`<input
      type="text"
      placeholder="sensor.example"
      .value=${e}
      @change=${(n) => t(n.target.value)}
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
    return p`
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
          ${Ht.map((t) => {
      const i = Qe[t], n = Math.max(i.w, i.h) * 0.25 + 6, r = `${-i.w / 2 - n} ${-i.h / 2 - n} ${i.w + n * 2} ${i.h + n * 2}`;
      return p`
              <button
                class="furn-cell"
                title=${te[t]}
                @click=${() => {
        this._addFurniture(t), e();
      }}
              >
                <svg viewBox=${r}>
                  ${ve({ type: t, x: 0, y: 0, w: i.w, h: i.h })}
                </svg>
                <span>${te[t]}</span>
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
      return p`
        <section class="edit-area">
          <h3 class="section-title">Element</h3>
          <p class="hint">Select an element on the canvas to edit its properties here.</p>
        </section>
      `;
    const i = e > 1 ? `${e} elements selected` : this._selectionSummary(t), n = e > 1 ? "mdi:select-group" : Tn[t.kind];
    return p`
      <section class="edit-area">
        <div class="edit-head">
          <ha-icon icon=${n}></ha-icon>
          <span class="edit-title">${i}</span>
          <span class="head-spacer"></span>
          <button aria-label="Duplicate" title="Duplicate (Ctrl/Cmd+D)" @click=${this._duplicate}>
            <ha-icon icon="mdi:content-duplicate"></ha-icon>
          </button>
          <button class="danger" aria-label="Delete" title="Delete (Del)" @click=${this._deleteSelected}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${e > 1 ? p`<p class="hint">
              Edit elements one at a time. Drag any selected element to move the whole group.
            </p>` : p`<div class="rows">${this._renderSelectionEditor()}</div>`}
      </section>
    `;
  }
  _renderWall(e) {
    const t = this._isSel("wall", e.id);
    return m`
      <g>
        <line x1=${e.x1} y1=${e.y1} x2=${e.x2} y2=${e.y2}
              class="wall-hit"
              @pointerdown=${(i) => this._startDrag(i, { kind: "wall", id: e.id })} />
        <line x1=${e.x1} y1=${e.y1} x2=${e.x2} y2=${e.y2}
              class="wall ${t ? "selected" : ""}"
              mask=${`url(#${this._wallMaskId})`}
              stroke-width=${N} stroke-linecap="round" />
        ${t ? m`
                <circle cx=${e.x1} cy=${e.y1} r="9" class="handle"
                        @pointerdown=${(i) => this._startDrag(i, { kind: "wall", id: e.id }, 1)} />
                <circle cx=${e.x2} cy=${e.y2} r="9" class="handle"
                        @pointerdown=${(i) => this._startDrag(i, { kind: "wall", id: e.id }, 2)} />` : g}
      </g>`;
  }
  _renderOpeningSel(e) {
    const t = this._isSel("opening", e.id);
    return m`
      <g class="opening-hit"
         @pointerdown=${(i) => this._startDrag(i, { kind: "opening", id: e.id })}>
        ${Ot(e, {
      color: t ? "var(--primary-color, #03a9f4)" : "var(--primary-text-color)",
      open: Le(e),
      // Draw sliding / rolling openings partly open in the editor so the
      // motion is visible — closed, both look like a plain band, which
      // would make the Motion / Slide / Style controls appear inert.
      amount: F(e) !== "swing" ? 0.55 : void 0
    })}
      </g>`;
  }
  /**
   * Render a Tracker in the editor SVG with its zone outline visible (so the
   * user can grab/resize it) plus a hit overlay for drag-to-move and a dashed
   * selection rectangle when active.
   */
  _renderTrackerSel(e) {
    const t = this._isSel("tracker", e.id), i = de(this.hass?.states, e.xSensor?.entity), n = de(this.hass?.states, e.ySensor?.entity), r = le(this.hass?.states, e.xSensor?.presence), o = le(this.hass?.states, e.ySensor?.presence);
    return m`
      <g class="tracker-hit ${t ? "selected" : ""}"
         @pointerdown=${(s) => this._startDrag(s, { kind: "tracker", id: e.id })}>
        ${zt(e, {
      editing: !0,
      xReading: i,
      yReading: n,
      xPresent: r,
      yPresent: o
    })}
        <rect x=${e.x} y=${e.y} width=${e.w} height=${e.h}
              transform="rotate(${e.angle ?? 0} ${e.x + e.w / 2} ${e.y + e.h / 2})"
              class="tracker-hit-rect" />
        ${t ? m`<rect x=${e.x - 4} y=${e.y - 4}
                        width=${e.w + 8} height=${e.h + 8}
                        transform="rotate(${e.angle ?? 0} ${e.x + e.w / 2} ${e.y + e.h / 2})"
                        class="tracker-outline" />` : g}
      </g>`;
  }
  _renderFurnitureSel(e) {
    const t = this._isSel("furniture", e.id);
    return m`
      <g class="furn-hit ${t ? "selected" : ""}"
         @pointerdown=${(i) => this._startDrag(i, { kind: "furniture", id: e.id })}>
        ${ve(e)}
        ${t ? m`<rect x=${e.x - e.w / 2 - 4} y=${e.y - e.h / 2 - 4}
                        width=${e.w + 8} height=${e.h + 8}
                        transform="rotate(${e.angle ?? 0} ${e.x} ${e.y})"
                        class="furn-outline" />` : g}
      </g>`;
  }
  _renderItemOverlay(e, t) {
    const i = this._isSel("item", e.id), n = e.entity ? this.hass?.states[e.entity] : void 0, r = Tt(e, n, e.entity ? this.hass?.entities?.[e.entity]?.icon : void 0), o = e.name || e.entity || e.kind, s = k(e.size, re), l = e.showIcon ?? !0, a = e.display ?? "badge", c = e.rippleColor ?? "var(--primary-color, #03a9f4)", f = e.rippleSize ?? X, d = At(e, n?.state), u = p`<div
      class="badge ${l ? "" : "ghost"}"
      style="width:${s}px;height:${s}px;transform:rotate(${k(e.angle, 0)}deg);"
    >
      <ha-icon
        class=${d ? `anim-${d}` : ""}
        icon=${r}
        style="--mdc-icon-size:${Ct(s)}px;"
      ></ha-icon>
    </div>`;
    let h;
    return a === "ripple" ? h = ce(!0, c, f) : a === "iconRipple" ? h = p`<div class="stack">
        ${ce(!0, c, f)}
        <div class="stack-icon">${u}</div>
      </div>` : h = u, p`
      <div
        class="edit-item ${i ? "selected" : ""}"
        style="left:${e.x / t.width * 100}%; top:${e.y / t.height * 100}%;"
        @pointerdown=${(y) => this._onOverlayDown(y, { kind: "item", id: e.id })}
        @pointermove=${this._onOverlayMove}
        @pointerup=${this._onOverlayUp}
        @pointercancel=${this._onPointerCancel}
      >
        ${h}
        <!-- The editor label always shows (identification while editing);
             only its size previews the card's labelSize (issue #59). -->
        <span class="ilabel" style="font-size:${e.labelSize != null ? Et(e.labelSize) : 11}px;">${o}</span>
      </div>
    `;
  }
  _renderTextOverlay(e, t) {
    const i = this._isSel("text", e.id);
    return p`
      <div
        class="edit-text ${i ? "selected" : ""}"
        style="left:${e.x / t.width * 100}%; top:${e.y / t.height * 100}%;
               font-size:${k(e.size, oe)}px;
               color:${Z(e.color, "var(--primary-text-color)")};
               transform:translate(-50%,-50%) rotate(${k(e.angle, 0)}deg);"
        @pointerdown=${(n) => this._onOverlayDown(n, { kind: "text", id: e.id })}
        @pointermove=${this._onOverlayMove}
        @pointerup=${this._onOverlayUp}
        @pointercancel=${this._onPointerCancel}
      >
        ${e.text || "…"}
      </div>
    `;
  }
  _renderPanel() {
    return p`
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
          ${this._projectOpen ? g : p`<span class="section-summary"
                >${this._config.title || "Untitled"} · ${this._config.width}×${this._config.height}</span
              >`}
        </button>
        ${this._projectOpen ? this._renderPanelBody() : g}
      </section>
    `;
  }
  _renderPanelBody() {
    return p`
      <div class="rows panel-body">
        ${this._renderForm(bn(this._config), (e, t) => {
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
        ${this._renderForm(wn(this._floor()), (e, t) => {
      t ? this._patchFloorLive(e) : this._commitFloor(e);
    })}
        ${this._renderForm(
      vn(this._config),
      (e) => this._patchConfig(e)
    )}
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
    if (!e || this._selection.length !== 1) return p`${g}`;
    if (e.kind === "opening") {
      const t = this._floor().openings.find((i) => i.id === e.id);
      return t ? p`
        ${this._renderForm(mn(t), (i, n) => {
        if ("entity" in i) {
          const r = i.entity, o = r ? this.hass?.states[r]?.attributes?.device_class : void 0;
          i = { ...i, ...o ? Ni(o) : {} };
        }
        this._applyElementPatch("opening", t.id, i, n);
      })}
        ${t.entity ? p`<div class="row">
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
            </div>` : g}
      ` : p`${g}`;
    }
    if (e.kind === "item") {
      const t = this._floor().items.find((i) => i.id === e.id);
      return t ? p`
        ${this._renderForm(gn(t), (i, n) => {
        "entity" in i && typeof i.entity == "string" && (i = { ...i, kind: zi(i.entity) }), this._applyElementPatch("item", t.id, i, n);
      })}
        ${(t.display ?? "badge") !== "badge" ? p`<div class="row">
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
            </div>` : g}
      ` : p`${g}`;
    }
    if (e.kind === "text") {
      const t = this._floor().texts.find((i) => i.id === e.id);
      return t ? p`
        ${this._renderForm(
        yn(t),
        (i, n) => this._applyElementPatch("text", t.id, i, n)
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
      ` : p`${g}`;
    }
    if (e.kind === "furniture") {
      const t = this._floor().furniture.find((i) => i.id === e.id);
      return t ? p`
        ${this._renderForm(
        _n(t),
        (i, n) => this._applyElementPatch("furniture", t.id, i, n)
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
      ` : p`${g}`;
    }
    if (e.kind === "tracker") {
      const t = (this._floor().trackers ?? []).find((i) => i.id === e.id);
      return t ? p`
        ${this._renderTrackerSensorRows(t, "xSensor", "X sensor")}
        ${this._renderTrackerSensorRows(t, "ySensor", "Y sensor")}
        ${this._renderForm(
        $n(t),
        (i, n) => this._applyElementPatch("tracker", t.id, i, n)
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
      ` : p`${g}`;
    }
    if (e.kind === "wall") {
      const t = this._floor().walls.find((n) => n.id === e.id);
      if (!t) return p`${g}`;
      const i = Math.round(Math.hypot(t.x2 - t.x1, t.y2 - t.y1));
      return p`
        ${this._renderForm(
        xn(t),
        (n, r) => this._applyElementPatch("wall", t.id, n, r)
      )}
        <div class="row">
          <label>Length</label>
          <input
            class="num"
            type="number"
            min="1"
            .value=${String(i)}
            @change=${(n) => {
        const r = n.target, o = Number(r.value);
        if (r.value === "" || !(o >= 1)) {
          r.value = String(i);
          return;
        }
        const s = t.x2 - t.x1, l = t.y2 - t.y1, a = Math.hypot(s, l), c = a > 0 ? s / a : 1, f = a > 0 ? l / a : 0;
        this._updateWall(t.id, {
          x2: Math.round(t.x1 + c * o),
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
    return p`${g}`;
  }
  /**
   * Editor rows for one of a tracker's two sensor mappings (X or Y). Entity
   * picker is always shown; min / max / invert appear once a sensor entity is
   * set so the panel stays compact while empty.
   */
  _renderTrackerSensorRows(e, t, i) {
    const n = e[t];
    return p`
      <div class="row wide">
        <label>${i}</label>
        ${this._renderEntityPicker(
      n?.entity ?? "",
      (r) => {
        r ? this._updateTrackerSensor(e.id, t, { entity: r }) : this._updateTrackerSensor(e.id, t, null);
      },
      ["sensor", "input_number", "number"]
    )}
      </div>
      ${n ? p`<div class="row">
            <label>${i} range</label>
            <input
              class="num"
              type="number"
              step="0.01"
              title="Reading at the near edge"
              .value=${String(n.min)}
              @change=${(r) => {
      const o = r.target, s = Number(o.value);
      o.value !== "" && Number.isFinite(s) ? this._updateTrackerSensor(e.id, t, { min: s }) : o.value = String(n.min);
    }}
            />
            <input
              class="num"
              type="number"
              step="0.01"
              title="Reading at the far edge"
              .value=${String(n.max)}
              @change=${(r) => {
      const o = r.target, s = Number(o.value);
      o.value !== "" && Number.isFinite(s) ? this._updateTrackerSensor(e.id, t, { max: s }) : o.value = String(n.max);
    }}
            />
            <label class="inline-check">
              <input
                type="checkbox"
                .checked=${n.invert ?? !1}
                @change=${(r) => this._updateTrackerSensor(e.id, t, {
      invert: r.target.checked || void 0
    })}
              />
              invert
            </label>
          </div>
          <div class="row wide">
            <label>${i} presence</label>
            ${this._renderEntityPicker(
      n.presence?.entity ?? "",
      (r) => this._updateTrackerSensor(e.id, t, {
        presence: r ? { entity: r, invert: n.presence?.invert } : void 0
      }),
      ["binary_sensor", "input_boolean", "device_tracker"]
    )}
            ${n.presence ? p`<label class="inline-check" title="Treat 'off' as detected">
                  <input
                    type="checkbox"
                    .checked=${n.presence.invert ?? !1}
                    @change=${(r) => this._updateTrackerSensor(e.id, t, {
      presence: {
        entity: n.presence.entity,
        invert: r.target.checked || void 0
      }
    })}
                  />
                  invert
                </label>` : g}
          </div>` : g}
    `;
  }
};
x._nextWallMaskId = 0;
x.styles = mt`
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
    /* Roll-up curtain: scaleY must shrink onto the band's own centerline
       (the track), not the SVG origin. */
    .fp-roll-curtain {
      transform-box: fill-box;
      transform-origin: center;
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
    /* Icon motion while the entity is active (issue #48) — matches the card. */
    ha-icon.anim-spin {
      animation: fp-icon-spin 2s linear infinite;
    }
    ha-icon.anim-pulse {
      animation: fp-icon-pulse 1.6s ease-in-out infinite;
    }
    @keyframes fp-icon-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes fp-icon-pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      ha-icon.anim-spin,
      ha-icon.anim-pulse {
        animation: none;
      }
    }
    .ilabel {
      /* Out of flow, hanging below the badge: the label must not change the
         element's box, so badges anchor on (x, y) whether or not a label
         renders — icons stay aligned (issue #34) and match the card. */
      position: absolute;
      top: calc(100% + 2px);
      left: 50%;
      transform: translateX(-50%);
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
v([
  Pe({ attribute: !1 })
], x.prototype, "hass", 2);
v([
  w()
], x.prototype, "_config", 2);
v([
  w()
], x.prototype, "_tool", 2);
v([
  w()
], x.prototype, "_selection", 2);
v([
  w()
], x.prototype, "_activeFloorId", 2);
v([
  w()
], x.prototype, "_draft", 2);
v([
  w()
], x.prototype, "_draftTracker", 2);
v([
  w()
], x.prototype, "_freeWalls", 2);
v([
  w()
], x.prototype, "_defaultOpeningLength", 2);
v([
  w()
], x.prototype, "_marquee", 2);
v([
  w()
], x.prototype, "_history", 2);
v([
  w()
], x.prototype, "_future", 2);
v([
  w()
], x.prototype, "_zoom", 2);
v([
  w()
], x.prototype, "_floorMenuOpen", 2);
v([
  w()
], x.prototype, "_addMenuOpen", 2);
v([
  w()
], x.prototype, "_projectOpen", 2);
v([
  w()
], x.prototype, "_fullscreen", 2);
v([
  Me(".editor")
], x.prototype, "_editorEl", 2);
v([
  Me("svg")
], x.prototype, "_svg", 2);
v([
  Me(".canvas-wrap")
], x.prototype, "_canvasWrap", 2);
x = v([
  bt("easy-floorplan-card-editor")
], x);
const Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FloorplanCardEditor() {
    return x;
  }
}, Symbol.toStringTag, { value: "Module" })), Mn = "0.7.2", we = window;
we.customCards = we.customCards || [];
we.customCards.push({
  type: "easy-floorplan-card",
  name: "Easy Floorplan",
  description: "Draw a floorplan with walls, doors, windows, furniture and text, then place device/light controls with a visual editor.",
  preview: !1,
  documentationURL: "https://github.com/nicosandller/easy-floorplan"
});
console.info(
  `%c EASY-FLOORPLAN %c ${Mn} `,
  "background:#03a9f4;color:#fff",
  "color:#03a9f4"
);
export {
  P as FloorplanCard
};
