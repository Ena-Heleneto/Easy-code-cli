var bi = Object.create, je = Object.defineProperty, Ai = Object.getOwnPropertyDescriptor, jr = Object.getOwnPropertyNames, Bi = Object.getPrototypeOf, Ri = Object.prototype.hasOwnProperty, xi = (t, e, r) => e in t ? je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, P = (t, e) => function() {
  return t && (e = (0, t[jr(t)[0]])(t = 0)), e;
}, x = (t, e) => function() {
  return e || (0, t[jr(t)[0]])((e = { exports: {} }).exports, e), e.exports;
}, ln = (t, e) => {
  for (var r in e)
    je(t, r, { get: e[r], enumerable: !0 });
}, fn = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of jr(e))
      !Ri.call(t, i) && i !== r && je(t, i, { get: () => e[i], enumerable: !(n = Ai(e, i)) || n.enumerable });
  return t;
}, V = (t, e, r) => (r = t != null ? bi(Bi(t)) : {}, fn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? je(r, "default", { value: t, enumerable: !0 }) : r,
  t
)), cn = (t) => fn(je({}, "__esModule", { value: !0 }), t), Xe = (t, e, r) => (xi(t, typeof e != "symbol" ? e + "" : e, r), r), Nr = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Qr = (t, e, r) => (Nr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Ti = (t, e, r, n) => (Nr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Re = (t, e, r) => (Nr(t, e, "access private method"), r);
function hn() {
  throw new Error("setTimeout has not been defined");
}
function Dn() {
  throw new Error("clearTimeout has not been defined");
}
function pn(t) {
  if (ne === setTimeout)
    return setTimeout(t, 0);
  if ((ne === hn || !ne) && setTimeout)
    return ne = setTimeout, setTimeout(t, 0);
  try {
    return ne(t, 0);
  } catch {
    try {
      return ne.call(null, t, 0);
    } catch {
      return ne.call(this, t, 0);
    }
  }
}
function Si(t) {
  if (ie === clearTimeout)
    return clearTimeout(t);
  if ((ie === Dn || !ie) && clearTimeout)
    return ie = clearTimeout, clearTimeout(t);
  try {
    return ie(t);
  } catch {
    try {
      return ie.call(null, t);
    } catch {
      return ie.call(this, t);
    }
  }
}
function ki() {
  !Ce || !ye || (Ce = !1, ye.length ? re = ye.concat(re) : Ue = -1, re.length && dn());
}
function dn() {
  if (!Ce) {
    var t = pn(ki);
    Ce = !0;
    for (var e = re.length; e; ) {
      for (ye = re, re = []; ++Ue < e; )
        ye && ye[Ue].run();
      Ue = -1, e = re.length;
    }
    ye = null, Ce = !1, Si(t);
  }
}
function Mi(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  re.push(new gn(t, e)), re.length === 1 && !Ce && pn(dn);
}
function gn(t, e) {
  this.fun = t, this.array = e;
}
function pe() {
}
function Li(t) {
  throw new Error("process.binding is not supported");
}
function Ii() {
  return "/";
}
function Ui(t) {
  throw new Error("process.chdir is not supported");
}
function Pi() {
  return 0;
}
function $i(t) {
  var e = mn.call(ve) * 1e-3, r = Math.floor(e), n = Math.floor(e % 1 * 1e9);
  return t && (r = r - t[0], n = n - t[1], n < 0 && (r--, n += 1e9)), [r, n];
}
function Oi() {
  var t = /* @__PURE__ */ new Date(), e = t - wn;
  return e / 1e3;
}
var ne, ie, re, Ce, ye, Ue, Xr, Zr, et, rt, tt, nt, it, ut, ot, st, at, lt, ft, ct, ht, Dt, ve, mn, wn, z, dr, v = P({
  "node_modules/.pnpm/@esbuild-plugins+node-globals-polyfill@0.2.3_esbuild@0.17.19/node_modules/@esbuild-plugins/node-globals-polyfill/process.js"() {
    ne = hn, ie = Dn, typeof globalThis.setTimeout == "function" && (ne = setTimeout), typeof globalThis.clearTimeout == "function" && (ie = clearTimeout), re = [], Ce = !1, Ue = -1, gn.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, Xr = "browser", Zr = "browser", et = !0, rt = {}, tt = [], nt = "", it = {}, ut = {}, ot = {}, st = pe, at = pe, lt = pe, ft = pe, ct = pe, ht = pe, Dt = pe, ve = globalThis.performance || {}, mn = ve.now || ve.mozNow || ve.msNow || ve.oNow || ve.webkitNow || function() {
      return (/* @__PURE__ */ new Date()).getTime();
    }, wn = /* @__PURE__ */ new Date(), z = {
      nextTick: Mi,
      title: Xr,
      browser: et,
      env: rt,
      argv: tt,
      version: nt,
      versions: it,
      on: st,
      addListener: at,
      once: lt,
      off: ft,
      removeListener: ct,
      removeAllListeners: ht,
      emit: Dt,
      binding: Li,
      cwd: Ii,
      chdir: Ui,
      umask: Pi,
      hrtime: $i,
      platform: Zr,
      release: ut,
      config: ot,
      uptime: Oi
    }, dr = {}, Object.keys(dr).forEach((t) => {
      const e = t.split(".");
      let r = z;
      for (let n = 0; n < e.length; n++) {
        const i = e[n];
        n === e.length - 1 ? r[i] = dr[t] : r = r[i] || (r[i] = {});
      }
    });
  }
});
function _n() {
  sr = !0;
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, r = t.length; e < r; ++e)
    K[e] = t[e], q[t.charCodeAt(e)] = e;
  q["-".charCodeAt(0)] = 62, q["_".charCodeAt(0)] = 63;
}
function ji(t) {
  sr || _n();
  var e, r, n, i, o, u, l = t.length;
  if (l % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  o = t[l - 2] === "=" ? 2 : t[l - 1] === "=" ? 1 : 0, u = new xn(l * 3 / 4 - o), n = o > 0 ? l - 4 : l;
  var s = 0;
  for (e = 0, r = 0; e < n; e += 4, r += 3)
    i = q[t.charCodeAt(e)] << 18 | q[t.charCodeAt(e + 1)] << 12 | q[t.charCodeAt(e + 2)] << 6 | q[t.charCodeAt(e + 3)], u[s++] = i >> 16 & 255, u[s++] = i >> 8 & 255, u[s++] = i & 255;
  return o === 2 ? (i = q[t.charCodeAt(e)] << 2 | q[t.charCodeAt(e + 1)] >> 4, u[s++] = i & 255) : o === 1 && (i = q[t.charCodeAt(e)] << 10 | q[t.charCodeAt(e + 1)] << 4 | q[t.charCodeAt(e + 2)] >> 2, u[s++] = i >> 8 & 255, u[s++] = i & 255), u;
}
function Ni(t) {
  return K[t >> 18 & 63] + K[t >> 12 & 63] + K[t >> 6 & 63] + K[t & 63];
}
function Yi(t, e, r) {
  for (var n, i = [], o = e; o < r; o += 3)
    n = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(Ni(n));
  return i.join("");
}
function pt(t) {
  sr || _n();
  for (var e, r = t.length, n = r % 3, i = "", o = [], u = 16383, l = 0, s = r - n; l < s; l += u)
    o.push(
      Yi(
        t,
        l,
        l + u > s ? s : l + u
      )
    );
  return n === 1 ? (e = t[r - 1], i += K[e >> 2], i += K[e << 4 & 63], i += "==") : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i += K[e >> 10], i += K[e >> 4 & 63], i += K[e << 2 & 63], i += "="), o.push(i), o.join("");
}
function Ze() {
  return g.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function ae(t, e) {
  if (Ze() < e)
    throw new RangeError("Invalid typed array length");
  return g.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = g.prototype) : (t === null && (t = new g(e)), t.length = e), t;
}
function g(t, e, r) {
  if (!g.TYPED_ARRAY_SUPPORT && !(this instanceof g))
    return new g(t, e, r);
  if (typeof t == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return Rr(this, t);
  }
  return vn(this, t, e, r);
}
function vn(t, e, r, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? zi(t, e, r, n) : typeof e == "string" ? Wi(t, e, r) : Hi(t, e);
}
function En(t) {
  if (typeof t != "number")
    throw new TypeError('"size" argument must be a number');
  if (t < 0)
    throw new RangeError('"size" argument must not be negative');
}
function qi(t, e, r, n) {
  return En(e), e <= 0 ? ae(t, e) : r !== void 0 ? typeof n == "string" ? ae(t, e).fill(r, n) : ae(t, e).fill(r) : ae(t, e);
}
function Rr(t, e) {
  if (En(e), t = ae(t, e < 0 ? 0 : Yr(e) | 0), !g.TYPED_ARRAY_SUPPORT)
    for (var r = 0; r < e; ++r)
      t[r] = 0;
  return t;
}
function Wi(t, e, r) {
  if ((typeof r != "string" || r === "") && (r = "utf8"), !g.isEncoding(r))
    throw new TypeError('"encoding" must be a valid string encoding');
  var n = yn(e, r) | 0;
  t = ae(t, n);
  var i = t.write(e, r);
  return i !== n && (t = t.slice(0, i)), t;
}
function xr(t, e) {
  var r = e.length < 0 ? 0 : Yr(e.length) | 0;
  t = ae(t, r);
  for (var n = 0; n < r; n += 1)
    t[n] = e[n] & 255;
  return t;
}
function zi(t, e, r, n) {
  if (e.byteLength, r < 0 || e.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  return r === void 0 && n === void 0 ? e = new Uint8Array(e) : n === void 0 ? e = new Uint8Array(e, r) : e = new Uint8Array(e, r, n), g.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = g.prototype) : t = xr(t, e), t;
}
function Hi(t, e) {
  if (Z(e)) {
    var r = Yr(e.length) | 0;
    return t = ae(t, r), t.length === 0 || e.copy(t, 0, 0, r), t;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || fu(e.length) ? ae(t, 0) : xr(t, e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return xr(t, e.data);
  }
  throw new TypeError(
    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
  );
}
function Yr(t) {
  if (t >= Ze())
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" + Ze().toString(16) + " bytes"
    );
  return t | 0;
}
function Z(t) {
  return !!(t != null && t._isBuffer);
}
function yn(t, e) {
  if (Z(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var r = t.length;
  if (r === 0)
    return 0;
  for (var n = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
      case void 0:
        return er(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return r * 2;
      case "hex":
        return r >>> 1;
      case "base64":
        return An(t).length;
      default:
        if (n)
          return er(t).length;
        e = ("" + e).toLowerCase(), n = !0;
    }
}
function Gi(t, e, r) {
  var n = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, e >>>= 0, r <= e))
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return nu(this, e, r);
      case "utf8":
      case "utf-8":
        return Cn(this, e, r);
      case "ascii":
        return ru(this, e, r);
      case "latin1":
      case "binary":
        return tu(this, e, r);
      case "base64":
        return Zi(this, e, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return iu(this, e, r);
      default:
        if (n)
          throw new TypeError("Unknown encoding: " + t);
        t = (t + "").toLowerCase(), n = !0;
    }
}
function de(t, e, r) {
  var n = t[e];
  t[e] = t[r], t[r] = n;
}
function dt(t, e, r, n, i) {
  if (t.length === 0)
    return -1;
  if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
    if (i)
      return -1;
    r = t.length - 1;
  } else if (r < 0)
    if (i)
      r = 0;
    else
      return -1;
  if (typeof e == "string" && (e = g.from(e, n)), Z(e))
    return e.length === 0 ? -1 : gt(t, e, r, n, i);
  if (typeof e == "number")
    return e = e & 255, g.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(
      t,
      e,
      r
    ) : Uint8Array.prototype.lastIndexOf.call(
      t,
      e,
      r
    ) : gt(t, [e], r, n, i);
  throw new TypeError("val must be string, number or Buffer");
}
function gt(t, e, r, n, i) {
  var o = 1, u = t.length, l = e.length;
  if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (t.length < 2 || e.length < 2)
      return -1;
    o = 2, u /= 2, l /= 2, r /= 2;
  }
  function s(D, p) {
    return o === 1 ? D[p] : D.readUInt16BE(p * o);
  }
  var a;
  if (i) {
    var f = -1;
    for (a = r; a < u; a++)
      if (s(t, a) === s(e, f === -1 ? 0 : a - f)) {
        if (f === -1 && (f = a), a - f + 1 === l)
          return f * o;
      } else
        f !== -1 && (a -= a - f), f = -1;
  } else
    for (r + l > u && (r = u - l), a = r; a >= 0; a--) {
      for (var c = !0, h = 0; h < l; h++)
        if (s(t, a + h) !== s(e, h)) {
          c = !1;
          break;
        }
      if (c)
        return a;
    }
  return -1;
}
function Vi(t, e, r, n) {
  r = Number(r) || 0;
  var i = t.length - r;
  n ? (n = Number(n), n > i && (n = i)) : n = i;
  var o = e.length;
  if (o % 2 !== 0)
    throw new TypeError("Invalid hex string");
  n > o / 2 && (n = o / 2);
  for (var u = 0; u < n; ++u) {
    var l = parseInt(e.substr(u * 2, 2), 16);
    if (isNaN(l))
      return u;
    t[r + u] = l;
  }
  return u;
}
function Ji(t, e, r, n) {
  return or(
    er(e, t.length - r),
    t,
    r,
    n
  );
}
function Fn(t, e, r, n) {
  return or(au(e), t, r, n);
}
function Ki(t, e, r, n) {
  return Fn(t, e, r, n);
}
function Qi(t, e, r, n) {
  return or(An(e), t, r, n);
}
function Xi(t, e, r, n) {
  return or(
    lu(e, t.length - r),
    t,
    r,
    n
  );
}
function Zi(t, e, r) {
  return e === 0 && r === t.length ? pt(t) : pt(t.slice(e, r));
}
function Cn(t, e, r) {
  r = Math.min(t.length, r);
  for (var n = [], i = e; i < r; ) {
    var o = t[i], u = null, l = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (i + l <= r) {
      var s, a, f, c;
      switch (l) {
        case 1:
          o < 128 && (u = o);
          break;
        case 2:
          s = t[i + 1], (s & 192) === 128 && (c = (o & 31) << 6 | s & 63, c > 127 && (u = c));
          break;
        case 3:
          s = t[i + 1], a = t[i + 2], (s & 192) === 128 && (a & 192) === 128 && (c = (o & 15) << 12 | (s & 63) << 6 | a & 63, c > 2047 && (c < 55296 || c > 57343) && (u = c));
          break;
        case 4:
          s = t[i + 1], a = t[i + 2], f = t[i + 3], (s & 192) === 128 && (a & 192) === 128 && (f & 192) === 128 && (c = (o & 15) << 18 | (s & 63) << 12 | (a & 63) << 6 | f & 63, c > 65535 && c < 1114112 && (u = c));
      }
    }
    u === null ? (u = 65533, l = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n.push(u), i += l;
  }
  return eu(n);
}
function eu(t) {
  var e = t.length;
  if (e <= Tr)
    return String.fromCharCode.apply(String, t);
  for (var r = "", n = 0; n < e; )
    r += String.fromCharCode.apply(
      String,
      t.slice(n, n += Tr)
    );
  return r;
}
function ru(t, e, r) {
  var n = "";
  r = Math.min(t.length, r);
  for (var i = e; i < r; ++i)
    n += String.fromCharCode(t[i] & 127);
  return n;
}
function tu(t, e, r) {
  var n = "";
  r = Math.min(t.length, r);
  for (var i = e; i < r; ++i)
    n += String.fromCharCode(t[i]);
  return n;
}
function nu(t, e, r) {
  var n = t.length;
  (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
  for (var i = "", o = e; o < r; ++o)
    i += su(t[o]);
  return i;
}
function iu(t, e, r) {
  for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
    i += String.fromCharCode(n[o] + n[o + 1] * 256);
  return i;
}
function L(t, e, r) {
  if (t % 1 !== 0 || t < 0)
    throw new RangeError("offset is not uint");
  if (t + e > r)
    throw new RangeError("Trying to access beyond buffer length");
}
function j(t, e, r, n, i, o) {
  if (!Z(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < o)
    throw new RangeError('"value" argument is out of bounds');
  if (r + n > t.length)
    throw new RangeError("Index out of range");
}
function qe(t, e, r, n) {
  e < 0 && (e = 65535 + e + 1);
  for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
    t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> (n ? i : 1 - i) * 8;
}
function We(t, e, r, n) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
    t[r + i] = e >>> (n ? i : 3 - i) * 8 & 255;
}
function bn(t, e, r, n, i, o) {
  if (r + n > t.length)
    throw new RangeError("Index out of range");
  if (r < 0)
    throw new RangeError("Index out of range");
}
function mt(t, e, r, n, i) {
  return i || bn(
    t,
    e,
    r,
    4
  ), Rn(t, e, r, n, 23, 4), r + 4;
}
function wt(t, e, r, n, i) {
  return i || bn(
    t,
    e,
    r,
    8
  ), Rn(t, e, r, n, 52, 8), r + 8;
}
function uu(t) {
  if (t = ou(t).replace(Tn, ""), t.length < 2)
    return "";
  for (; t.length % 4 !== 0; )
    t = t + "=";
  return t;
}
function ou(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function su(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function er(t, e) {
  e = e || 1 / 0;
  for (var r, n = t.length, i = null, o = [], u = 0; u < n; ++u) {
    if (r = t.charCodeAt(u), r > 55295 && r < 57344) {
      if (!i) {
        if (r > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (u + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), i = r;
        continue;
      }
      r = (i - 55296 << 10 | r - 56320) + 65536;
    } else
      i && (e -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, r < 128) {
      if ((e -= 1) < 0)
        break;
      o.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0)
        break;
      o.push(r >> 6 | 192, r & 63 | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0)
        break;
      o.push(
        r >> 12 | 224,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else if (r < 1114112) {
      if ((e -= 4) < 0)
        break;
      o.push(
        r >> 18 | 240,
        r >> 12 & 63 | 128,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function au(t) {
  for (var e = [], r = 0; r < t.length; ++r)
    e.push(t.charCodeAt(r) & 255);
  return e;
}
function lu(t, e) {
  for (var r, n, i, o = [], u = 0; u < t.length && !((e -= 2) < 0); ++u)
    r = t.charCodeAt(u), n = r >> 8, i = r % 256, o.push(i), o.push(n);
  return o;
}
function An(t) {
  return ji(uu(t));
}
function or(t, e, r, n) {
  for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
    e[i + r] = t[i];
  return i;
}
function fu(t) {
  return t !== t;
}
function cu(t) {
  return t != null && (!!t._isBuffer || Bn(t) || hu(t));
}
function Bn(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function hu(t) {
  return typeof t.readFloatLE == "function" && typeof t.slice == "function" && Bn(t.slice(0, 0));
}
function ze(t, e, r, n, i) {
  var o, u, l = i * 8 - n - 1, s = (1 << l) - 1, a = s >> 1, f = -7, c = r ? i - 1 : 0, h = r ? -1 : 1, D = t[e + c];
  for (c += h, o = D & (1 << -f) - 1, D >>= -f, f += l; f > 0; o = o * 256 + t[e + c], c += h, f -= 8)
    ;
  for (u = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; u = u * 256 + t[e + c], c += h, f -= 8)
    ;
  if (o === 0)
    o = 1 - a;
  else {
    if (o === s)
      return u ? NaN : (D ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, n), o = o - a;
  }
  return (D ? -1 : 1) * u * Math.pow(2, o - n);
}
function Rn(t, e, r, n, i, o) {
  var u, l, s, a = o * 8 - i - 1, f = (1 << a) - 1, c = f >> 1, h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, D = n ? 0 : o - 1, p = n ? 1 : -1, m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0, u = f) : (u = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), u + c >= 1 ? e += h / s : e += h * Math.pow(2, 1 - c), e * s >= 2 && (u++, s /= 2), u + c >= f ? (l = 0, u = f) : u + c >= 1 ? (l = (e * s - 1) * Math.pow(2, i), u = u + c) : (l = e * Math.pow(2, c - 1) * Math.pow(2, i), u = 0)); i >= 8; t[r + D] = l & 255, D += p, l /= 256, i -= 8)
    ;
  for (u = u << i | l, a += i; a > 0; t[r + D] = u & 255, D += p, u /= 256, a -= 8)
    ;
  t[r + D - p] |= m * 128;
}
var K, q, xn, sr, Tr, Tn, Du = P({
  "node_modules/.pnpm/@esbuild-plugins+node-globals-polyfill@0.2.3_esbuild@0.17.19/node_modules/@esbuild-plugins/node-globals-polyfill/Buffer.js"() {
    v(), E(), K = [], q = [], xn = typeof Uint8Array < "u" ? Uint8Array : Array, sr = !1, g.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : !0, g.poolSize = 8192, g._augment = function(t) {
      return t.__proto__ = g.prototype, t;
    }, g.from = function(t, e, r) {
      return vn(null, t, e, r);
    }, g.kMaxLength = Ze(), g.TYPED_ARRAY_SUPPORT && (g.prototype.__proto__ = Uint8Array.prototype, g.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && g[Symbol.species]), g.alloc = function(t, e, r) {
      return qi(null, t, e, r);
    }, g.allocUnsafe = function(t) {
      return Rr(null, t);
    }, g.allocUnsafeSlow = function(t) {
      return Rr(null, t);
    }, g.isBuffer = cu, g.compare = function(e, r) {
      if (!Z(e) || !Z(r))
        throw new TypeError("Arguments must be Buffers");
      if (e === r)
        return 0;
      for (var n = e.length, i = r.length, o = 0, u = Math.min(n, i); o < u; ++o)
        if (e[o] !== r[o]) {
          n = e[o], i = r[o];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    }, g.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, g.concat = function(e, r) {
      if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e.length === 0)
        return g.alloc(0);
      var n;
      if (r === void 0)
        for (r = 0, n = 0; n < e.length; ++n)
          r += e[n].length;
      var i = g.allocUnsafe(r), o = 0;
      for (n = 0; n < e.length; ++n) {
        var u = e[n];
        if (!Z(u))
          throw new TypeError('"list" argument must be an Array of Buffers');
        u.copy(i, o), o += u.length;
      }
      return i;
    }, g.byteLength = yn, g.prototype._isBuffer = !0, g.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r = 0; r < e; r += 2)
        de(this, r, r + 1);
      return this;
    }, g.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r = 0; r < e; r += 4)
        de(this, r, r + 3), de(this, r + 1, r + 2);
      return this;
    }, g.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r = 0; r < e; r += 8)
        de(this, r, r + 7), de(this, r + 1, r + 6), de(this, r + 2, r + 5), de(this, r + 3, r + 4);
      return this;
    }, g.prototype.toString = function() {
      var e = this.length | 0;
      return e === 0 ? "" : arguments.length === 0 ? Cn(this, 0, e) : Gi.apply(this, arguments);
    }, g.prototype.equals = function(e) {
      if (!Z(e))
        throw new TypeError("Argument must be a Buffer");
      return this === e ? !0 : g.compare(this, e) === 0;
    }, g.prototype.compare = function(e, r, n, i, o) {
      if (!Z(e))
        throw new TypeError("Argument must be a Buffer");
      if (r === void 0 && (r = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), r < 0 || n > e.length || i < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (i >= o && r >= n)
        return 0;
      if (i >= o)
        return -1;
      if (r >= n)
        return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e)
        return 0;
      for (var u = o - i, l = n - r, s = Math.min(u, l), a = this.slice(i, o), f = e.slice(r, n), c = 0; c < s; ++c)
        if (a[c] !== f[c]) {
          u = a[c], l = f[c];
          break;
        }
      return u < l ? -1 : l < u ? 1 : 0;
    }, g.prototype.includes = function(e, r, n) {
      return this.indexOf(e, r, n) !== -1;
    }, g.prototype.indexOf = function(e, r, n) {
      return dt(this, e, r, n, !0);
    }, g.prototype.lastIndexOf = function(e, r, n) {
      return dt(this, e, r, n, !1);
    }, g.prototype.write = function(e, r, n, i) {
      if (r === void 0)
        i = "utf8", n = this.length, r = 0;
      else if (n === void 0 && typeof r == "string")
        i = r, n = this.length, r = 0;
      else if (isFinite(r))
        r = r | 0, isFinite(n) ? (n = n | 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var o = this.length - r;
      if ((n === void 0 || n > o) && (n = o), e.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      for (var u = !1; ; )
        switch (i) {
          case "hex":
            return Vi(this, e, r, n);
          case "utf8":
          case "utf-8":
            return Ji(this, e, r, n);
          case "ascii":
            return Fn(this, e, r, n);
          case "latin1":
          case "binary":
            return Ki(this, e, r, n);
          case "base64":
            return Qi(this, e, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Xi(this, e, r, n);
          default:
            if (u)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), u = !0;
        }
    }, g.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    }, Tr = 4096, g.prototype.slice = function(e, r) {
      var n = this.length;
      e = ~~e, r = r === void 0 ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);
      var i;
      if (g.TYPED_ARRAY_SUPPORT)
        i = this.subarray(e, r), i.__proto__ = g.prototype;
      else {
        var o = r - e;
        i = new g(o, void 0);
        for (var u = 0; u < o; ++u)
          i[u] = this[u + e];
      }
      return i;
    }, g.prototype.readUIntLE = function(e, r, n) {
      e = e | 0, r = r | 0, n || L(e, r, this.length);
      for (var i = this[e], o = 1, u = 0; ++u < r && (o *= 256); )
        i += this[e + u] * o;
      return i;
    }, g.prototype.readUIntBE = function(e, r, n) {
      e = e | 0, r = r | 0, n || L(e, r, this.length);
      for (var i = this[e + --r], o = 1; r > 0 && (o *= 256); )
        i += this[e + --r] * o;
      return i;
    }, g.prototype.readUInt8 = function(e, r) {
      return r || L(e, 1, this.length), this[e];
    }, g.prototype.readUInt16LE = function(e, r) {
      return r || L(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, g.prototype.readUInt16BE = function(e, r) {
      return r || L(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, g.prototype.readUInt32LE = function(e, r) {
      return r || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    }, g.prototype.readUInt32BE = function(e, r) {
      return r || L(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, g.prototype.readIntLE = function(e, r, n) {
      e = e | 0, r = r | 0, n || L(e, r, this.length);
      for (var i = this[e], o = 1, u = 0; ++u < r && (o *= 256); )
        i += this[e + u] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
    }, g.prototype.readIntBE = function(e, r, n) {
      e = e | 0, r = r | 0, n || L(e, r, this.length);
      for (var i = r, o = 1, u = this[e + --i]; i > 0 && (o *= 256); )
        u += this[e + --i] * o;
      return o *= 128, u >= o && (u -= Math.pow(2, 8 * r)), u;
    }, g.prototype.readInt8 = function(e, r) {
      return r || L(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    }, g.prototype.readInt16LE = function(e, r) {
      r || L(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, g.prototype.readInt16BE = function(e, r) {
      r || L(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, g.prototype.readInt32LE = function(e, r) {
      return r || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, g.prototype.readInt32BE = function(e, r) {
      return r || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, g.prototype.readFloatLE = function(e, r) {
      return r || L(e, 4, this.length), ze(this, e, !0, 23, 4);
    }, g.prototype.readFloatBE = function(e, r) {
      return r || L(e, 4, this.length), ze(this, e, !1, 23, 4);
    }, g.prototype.readDoubleLE = function(e, r) {
      return r || L(e, 8, this.length), ze(this, e, !0, 52, 8);
    }, g.prototype.readDoubleBE = function(e, r) {
      return r || L(e, 8, this.length), ze(this, e, !1, 52, 8);
    }, g.prototype.writeUIntLE = function(e, r, n, i) {
      if (e = +e, r = r | 0, n = n | 0, !i) {
        var o = Math.pow(2, 8 * n) - 1;
        j(this, e, r, n, o, 0);
      }
      var u = 1, l = 0;
      for (this[r] = e & 255; ++l < n && (u *= 256); )
        this[r + l] = e / u & 255;
      return r + n;
    }, g.prototype.writeUIntBE = function(e, r, n, i) {
      if (e = +e, r = r | 0, n = n | 0, !i) {
        var o = Math.pow(2, 8 * n) - 1;
        j(this, e, r, n, o, 0);
      }
      var u = n - 1, l = 1;
      for (this[r + u] = e & 255; --u >= 0 && (l *= 256); )
        this[r + u] = e / l & 255;
      return r + n;
    }, g.prototype.writeUInt8 = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 1, 255, 0), g.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[r] = e & 255, r + 1;
    }, g.prototype.writeUInt16LE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 2, 65535, 0), g.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255, this[r + 1] = e >>> 8) : qe(this, e, r, !0), r + 2;
    }, g.prototype.writeUInt16BE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 2, 65535, 0), g.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = e & 255) : qe(this, e, r, !1), r + 2;
    }, g.prototype.writeUInt32LE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 4, 4294967295, 0), g.TYPED_ARRAY_SUPPORT ? (this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = e & 255) : We(this, e, r, !0), r + 4;
    }, g.prototype.writeUInt32BE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 4, 4294967295, 0), g.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255) : We(this, e, r, !1), r + 4;
    }, g.prototype.writeIntLE = function(e, r, n, i) {
      if (e = +e, r = r | 0, !i) {
        var o = Math.pow(2, 8 * n - 1);
        j(this, e, r, n, o - 1, -o);
      }
      var u = 0, l = 1, s = 0;
      for (this[r] = e & 255; ++u < n && (l *= 256); )
        e < 0 && s === 0 && this[r + u - 1] !== 0 && (s = 1), this[r + u] = (e / l >> 0) - s & 255;
      return r + n;
    }, g.prototype.writeIntBE = function(e, r, n, i) {
      if (e = +e, r = r | 0, !i) {
        var o = Math.pow(2, 8 * n - 1);
        j(this, e, r, n, o - 1, -o);
      }
      var u = n - 1, l = 1, s = 0;
      for (this[r + u] = e & 255; --u >= 0 && (l *= 256); )
        e < 0 && s === 0 && this[r + u + 1] !== 0 && (s = 1), this[r + u] = (e / l >> 0) - s & 255;
      return r + n;
    }, g.prototype.writeInt8 = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 1, 127, -128), g.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[r] = e & 255, r + 1;
    }, g.prototype.writeInt16LE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 2, 32767, -32768), g.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255, this[r + 1] = e >>> 8) : qe(this, e, r, !0), r + 2;
    }, g.prototype.writeInt16BE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 2, 32767, -32768), g.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = e & 255) : qe(this, e, r, !1), r + 2;
    }, g.prototype.writeInt32LE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 4, 2147483647, -2147483648), g.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24) : We(this, e, r, !0), r + 4;
    }, g.prototype.writeInt32BE = function(e, r, n) {
      return e = +e, r = r | 0, n || j(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), g.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255) : We(this, e, r, !1), r + 4;
    }, g.prototype.writeFloatLE = function(e, r, n) {
      return mt(this, e, r, !0, n);
    }, g.prototype.writeFloatBE = function(e, r, n) {
      return mt(this, e, r, !1, n);
    }, g.prototype.writeDoubleLE = function(e, r, n) {
      return wt(this, e, r, !0, n);
    }, g.prototype.writeDoubleBE = function(e, r, n) {
      return wt(this, e, r, !1, n);
    }, g.prototype.copy = function(e, r, n, i) {
      if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= e.length && (r = e.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);
      var o = i - n, u;
      if (this === e && n < r && r < i)
        for (u = o - 1; u >= 0; --u)
          e[u + r] = this[u + n];
      else if (o < 1e3 || !g.TYPED_ARRAY_SUPPORT)
        for (u = 0; u < o; ++u)
          e[u + r] = this[u + n];
      else
        Uint8Array.prototype.set.call(
          e,
          this.subarray(n, n + o),
          r
        );
      return o;
    }, g.prototype.fill = function(e, r, n, i) {
      if (typeof e == "string") {
        if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), e.length === 1) {
          var o = e.charCodeAt(0);
          o < 256 && (e = o);
        }
        if (i !== void 0 && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !g.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
      } else
        typeof e == "number" && (e = e & 255);
      if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= r)
        return this;
      r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
      var u;
      if (typeof e == "number")
        for (u = r; u < n; ++u)
          this[u] = e;
      else {
        var l = Z(e) ? e : er(new g(e, i).toString()), s = l.length;
        for (u = 0; u < n - r; ++u)
          this[u + r] = l[u % s];
      }
      return this;
    }, Tn = /[^+\/0-9A-Za-z-_]/g;
  }
}), E = P({
  "node_modules/.pnpm/@esbuild-plugins+node-globals-polyfill@0.2.3_esbuild@0.17.19/node_modules/@esbuild-plugins/node-globals-polyfill/_buffer.js"() {
    Du();
  }
});
/*! Bundled license information:

@esbuild-plugins/node-globals-polyfill/Buffer.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
function fe() {
}
function B() {
  B.init.call(this);
}
function Sn(t) {
  return t._maxListeners === void 0 ? B.defaultMaxListeners : t._maxListeners;
}
function pu(t, e, r) {
  if (e)
    t.call(r);
  else
    for (var n = t.length, i = Ne(t, n), o = 0; o < n; ++o)
      i[o].call(r);
}
function du(t, e, r, n) {
  if (e)
    t.call(r, n);
  else
    for (var i = t.length, o = Ne(t, i), u = 0; u < i; ++u)
      o[u].call(r, n);
}
function gu(t, e, r, n, i) {
  if (e)
    t.call(r, n, i);
  else
    for (var o = t.length, u = Ne(t, o), l = 0; l < o; ++l)
      u[l].call(r, n, i);
}
function mu(t, e, r, n, i, o) {
  if (e)
    t.call(r, n, i, o);
  else
    for (var u = t.length, l = Ne(t, u), s = 0; s < u; ++s)
      l[s].call(r, n, i, o);
}
function wu(t, e, r, n) {
  if (e)
    t.apply(r, n);
  else
    for (var i = t.length, o = Ne(t, i), u = 0; u < i; ++u)
      o[u].apply(r, n);
}
function _t(t, e, r, n) {
  var i, o, u;
  if (typeof r != "function")
    throw new TypeError('"listener" argument must be a function');
  if (o = t._events, o ? (o.newListener && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), o = t._events), u = o[e]) : (o = t._events = new fe(), t._eventsCount = 0), !u)
    u = o[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = o[e] = n ? [r, u] : [u, r] : n ? u.unshift(r) : u.push(r), !u.warned && (i = Sn(t), i && i > 0 && u.length > i)) {
    u.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + e + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = e, l.count = u.length, _u(l);
  }
  return t;
}
function _u(t) {
  typeof console.warn == "function" ? console.warn(t) : console.log(t);
}
function vt(t, e, r) {
  var n = !1;
  function i() {
    t.removeListener(e, i), n || (n = !0, r.apply(t, arguments));
  }
  return i.listener = r, i;
}
function Et(t) {
  var e = this._events;
  if (e) {
    var r = e[t];
    if (typeof r == "function")
      return 1;
    if (r)
      return r.length;
  }
  return 0;
}
function vu(t, e) {
  for (var r = e, n = r + 1, i = t.length; n < i; r += 1, n += 1)
    t[r] = t[n];
  t.pop();
}
function Ne(t, e) {
  for (var r = new Array(e); e--; )
    r[e] = t[e];
  return r;
}
function Eu(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
var yu, Ae, qr = P({
  "node-modules-polyfills:events"() {
    v(), E(), fe.prototype = /* @__PURE__ */ Object.create(null), Ae = B, B.EventEmitter = B, B.usingDomains = !1, B.prototype.domain = void 0, B.prototype._events = void 0, B.prototype._maxListeners = void 0, B.defaultMaxListeners = 10, B.init = function() {
      this.domain = null, B.usingDomains && yu.active, (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new fe(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, B.prototype.setMaxListeners = function(e) {
      if (typeof e != "number" || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
      return this._maxListeners = e, this;
    }, B.prototype.getMaxListeners = function() {
      return Sn(this);
    }, B.prototype.emit = function(e) {
      var r, n, i, o, u, l, s, a = e === "error";
      if (l = this._events, l)
        a = a && l.error == null;
      else if (!a)
        return !1;
      if (s = this.domain, a) {
        if (r = arguments[1], s)
          r || (r = new Error('Uncaught, unspecified "error" event')), r.domainEmitter = this, r.domain = s, r.domainThrown = !1, s.emit("error", r);
        else {
          if (r instanceof Error)
            throw r;
          var f = new Error('Uncaught, unspecified "error" event. (' + r + ")");
          throw f.context = r, f;
        }
        return !1;
      }
      if (n = l[e], !n)
        return !1;
      var c = typeof n == "function";
      switch (i = arguments.length, i) {
        case 1:
          pu(n, c, this);
          break;
        case 2:
          du(n, c, this, arguments[1]);
          break;
        case 3:
          gu(n, c, this, arguments[1], arguments[2]);
          break;
        case 4:
          mu(n, c, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (o = new Array(i - 1), u = 1; u < i; u++)
            o[u - 1] = arguments[u];
          wu(n, c, this, o);
      }
      return !0;
    }, B.prototype.addListener = function(e, r) {
      return _t(this, e, r, !1);
    }, B.prototype.on = B.prototype.addListener, B.prototype.prependListener = function(e, r) {
      return _t(this, e, r, !0);
    }, B.prototype.once = function(e, r) {
      if (typeof r != "function")
        throw new TypeError('"listener" argument must be a function');
      return this.on(e, vt(this, e, r)), this;
    }, B.prototype.prependOnceListener = function(e, r) {
      if (typeof r != "function")
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(e, vt(this, e, r)), this;
    }, B.prototype.removeListener = function(e, r) {
      var n, i, o, u, l;
      if (typeof r != "function")
        throw new TypeError('"listener" argument must be a function');
      if (i = this._events, !i)
        return this;
      if (n = i[e], !n)
        return this;
      if (n === r || n.listener && n.listener === r)
        --this._eventsCount === 0 ? this._events = new fe() : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
      else if (typeof n != "function") {
        for (o = -1, u = n.length; u-- > 0; )
          if (n[u] === r || n[u].listener && n[u].listener === r) {
            l = n[u].listener, o = u;
            break;
          }
        if (o < 0)
          return this;
        if (n.length === 1) {
          if (n[0] = void 0, --this._eventsCount === 0)
            return this._events = new fe(), this;
          delete i[e];
        } else
          vu(n, o);
        i.removeListener && this.emit("removeListener", e, l || r);
      }
      return this;
    }, B.prototype.removeAllListeners = function(e) {
      var r, n;
      if (n = this._events, !n)
        return this;
      if (!n.removeListener)
        return arguments.length === 0 ? (this._events = new fe(), this._eventsCount = 0) : n[e] && (--this._eventsCount === 0 ? this._events = new fe() : delete n[e]), this;
      if (arguments.length === 0) {
        for (var i = Object.keys(n), o = 0, u; o < i.length; ++o)
          u = i[o], u !== "removeListener" && this.removeAllListeners(u);
        return this.removeAllListeners("removeListener"), this._events = new fe(), this._eventsCount = 0, this;
      }
      if (r = n[e], typeof r == "function")
        this.removeListener(e, r);
      else if (r)
        do
          this.removeListener(e, r[r.length - 1]);
        while (r[0]);
      return this;
    }, B.prototype.listeners = function(e) {
      var r, n, i = this._events;
      return i ? (r = i[e], r ? typeof r == "function" ? n = [r.listener || r] : n = Eu(r) : n = []) : n = [], n;
    }, B.listenerCount = function(t, e) {
      return typeof t.listenerCount == "function" ? t.listenerCount(e) : Et.call(t, e);
    }, B.prototype.listenerCount = Et, B.prototype.eventNames = function() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
  }
});
function kn() {
  throw new Error("setTimeout has not been defined");
}
function Mn() {
  throw new Error("clearTimeout has not been defined");
}
function Ln(t) {
  if (ue === setTimeout)
    return setTimeout(t, 0);
  if ((ue === kn || !ue) && setTimeout)
    return ue = setTimeout, setTimeout(t, 0);
  try {
    return ue(t, 0);
  } catch {
    try {
      return ue.call(null, t, 0);
    } catch {
      return ue.call(this, t, 0);
    }
  }
}
function Fu(t) {
  if (oe === clearTimeout)
    return clearTimeout(t);
  if ((oe === Mn || !oe) && clearTimeout)
    return oe = clearTimeout, clearTimeout(t);
  try {
    return oe(t);
  } catch {
    try {
      return oe.call(null, t);
    } catch {
      return oe.call(this, t);
    }
  }
}
function Cu() {
  !be || !Fe || (be = !1, Fe.length ? te = Fe.concat(te) : Pe = -1, te.length && In());
}
function In() {
  if (!be) {
    var t = Ln(Cu);
    be = !0;
    for (var e = te.length; e; ) {
      for (Fe = te, te = []; ++Pe < e; )
        Fe && Fe[Pe].run();
      Pe = -1, e = te.length;
    }
    Fe = null, be = !1, Fu(t);
  }
}
function G(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  te.push(new Un(t, e)), te.length === 1 && !be && Ln(In);
}
function Un(t, e) {
  this.fun = t, this.array = e;
}
function ge() {
}
function bu(t) {
  throw new Error("process.binding is not supported");
}
function Au() {
  return "/";
}
function Bu(t) {
  throw new Error("process.chdir is not supported");
}
function Ru() {
  return 0;
}
function xu(t) {
  var e = Pn.call(Ee) * 1e-3, r = Math.floor(e), n = Math.floor(e % 1 * 1e9);
  return t && (r = r - t[0], n = n - t[1], n < 0 && (r--, n += 1e9)), [r, n];
}
function Tu() {
  var t = /* @__PURE__ */ new Date(), e = t - $n;
  return e / 1e3;
}
var ue, oe, te, be, Fe, Pe, yt, Ft, Ct, bt, At, Bt, Rt, xt, Tt, St, kt, Mt, Lt, It, Ut, Pt, Ee, Pn, $n, $t, $e, ar = P({
  "node-modules-polyfills:process"() {
    v(), E(), ue = kn, oe = Mn, typeof globalThis.setTimeout == "function" && (ue = setTimeout), typeof globalThis.clearTimeout == "function" && (oe = clearTimeout), te = [], be = !1, Pe = -1, Un.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, yt = "browser", Ft = "browser", Ct = !0, bt = {}, At = [], Bt = "", Rt = {}, xt = {}, Tt = {}, St = ge, kt = ge, Mt = ge, Lt = ge, It = ge, Ut = ge, Pt = ge, Ee = globalThis.performance || {}, Pn = Ee.now || Ee.mozNow || Ee.msNow || Ee.oNow || Ee.webkitNow || function() {
      return (/* @__PURE__ */ new Date()).getTime();
    }, $n = /* @__PURE__ */ new Date(), $t = {
      nextTick: G,
      title: yt,
      browser: Ct,
      env: bt,
      argv: At,
      version: Bt,
      versions: Rt,
      on: St,
      addListener: kt,
      once: Mt,
      off: Lt,
      removeListener: It,
      removeAllListeners: Ut,
      emit: Pt,
      binding: bu,
      cwd: Au,
      chdir: Bu,
      umask: Ru,
      hrtime: xu,
      platform: Ft,
      release: xt,
      config: Tt,
      uptime: Tu
    }, $e = $t;
  }
}), gr, Be, Su = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    v(), E(), typeof Object.create == "function" ? gr = function(e, r) {
      e.super_ = r, e.prototype = Object.create(r.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : gr = function(e, r) {
      e.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }, Be = gr;
  }
});
function ku(t) {
  if (!zr(t)) {
    for (var e = [], r = 0; r < arguments.length; r++)
      e.push(he(arguments[r]));
    return e.join(" ");
  }
  for (var r = 1, n = arguments, i = n.length, o = String(t).replace(Yn, function(l) {
    if (l === "%%")
      return "%";
    if (r >= i)
      return l;
    switch (l) {
      case "%s":
        return String(n[r++]);
      case "%d":
        return Number(n[r++]);
      case "%j":
        try {
          return JSON.stringify(n[r++]);
        } catch {
          return "[Circular]";
        }
      default:
        return l;
    }
  }), u = n[r]; r < i; u = n[++r])
    Wr(u) || !Ye(u) ? o += " " + u : o += " " + he(u);
  return o;
}
function On(t, e) {
  if (ce(globalThis.process))
    return function() {
      return On(t, e).apply(this, arguments);
    };
  if ($e.noDeprecation === !0)
    return t;
  var r = !1;
  function n() {
    if (!r) {
      if ($e.throwDeprecation)
        throw new Error(e);
      $e.traceDeprecation ? console.trace(e) : console.error(e), r = !0;
    }
    return t.apply(this, arguments);
  }
  return n;
}
function Mu(t) {
  if (ce(Er) && (Er = $e.env.NODE_DEBUG || ""), t = t.toUpperCase(), !Le[t])
    if (new RegExp("\\b" + t + "\\b", "i").test(Er)) {
      var e = 0;
      Le[t] = function() {
        var r = ku.apply(null, arguments);
        console.error("%s %d: %s", t, e, r);
      };
    } else
      Le[t] = function() {
      };
  return Le[t];
}
function he(t, e) {
  var r = {
    seen: [],
    stylize: Iu
  };
  return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), jn(e) ? r.showHidden = e : e && Yu(r, e), ce(r.showHidden) && (r.showHidden = !1), ce(r.depth) && (r.depth = 2), ce(r.colors) && (r.colors = !1), ce(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = Lu), rr(r, t, r.depth);
}
function Lu(t, e) {
  var r = he.styles[e];
  return r ? "\x1B[" + he.colors[r][0] + "m" + t + "\x1B[" + he.colors[r][1] + "m" : t;
}
function Iu(t, e) {
  return t;
}
function Uu(t) {
  var e = {};
  return t.forEach(function(r, n) {
    e[r] = !0;
  }), e;
}
function rr(t, e, r) {
  if (t.customInspect && e && vr(e.inspect) && // Filter out the util module, it's inspect function is special
  e.inspect !== he && // Also filter out any prototype objects using the circular check.
  !(e.constructor && e.constructor.prototype === e)) {
    var n = e.inspect(r, t);
    return zr(n) || (n = rr(t, n, r)), n;
  }
  var i = Pu(t, e);
  if (i)
    return i;
  var o = Object.keys(e), u = Uu(o);
  if (t.showHidden && (o = Object.getOwnPropertyNames(e)), _r(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
    return mr(e);
  if (o.length === 0) {
    if (vr(e)) {
      var l = e.name ? ": " + e.name : "";
      return t.stylize("[Function" + l + "]", "special");
    }
    if (wr(e))
      return t.stylize(RegExp.prototype.toString.call(e), "regexp");
    if (Ot(e))
      return t.stylize(Date.prototype.toString.call(e), "date");
    if (_r(e))
      return mr(e);
  }
  var s = "", a = !1, f = ["{", "}"];
  if (ju(e) && (a = !0, f = ["[", "]"]), vr(e)) {
    var c = e.name ? ": " + e.name : "";
    s = " [Function" + c + "]";
  }
  if (wr(e) && (s = " " + RegExp.prototype.toString.call(e)), Ot(e) && (s = " " + Date.prototype.toUTCString.call(e)), _r(e) && (s = " " + mr(e)), o.length === 0 && (!a || e.length == 0))
    return f[0] + s + f[1];
  if (r < 0)
    return wr(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
  t.seen.push(e);
  var h;
  return a ? h = $u(t, e, r, u, o) : h = o.map(function(D) {
    return Sr(t, e, r, u, D, a);
  }), t.seen.pop(), Ou(h, s, f);
}
function Pu(t, e) {
  if (ce(e))
    return t.stylize("undefined", "undefined");
  if (zr(e)) {
    var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return t.stylize(r, "string");
  }
  if (Nu(e))
    return t.stylize("" + e, "number");
  if (jn(e))
    return t.stylize("" + e, "boolean");
  if (Wr(e))
    return t.stylize("null", "null");
}
function mr(t) {
  return "[" + Error.prototype.toString.call(t) + "]";
}
function $u(t, e, r, n, i) {
  for (var o = [], u = 0, l = e.length; u < l; ++u)
    Nn(e, String(u)) ? o.push(Sr(
      t,
      e,
      r,
      n,
      String(u),
      !0
    )) : o.push("");
  return i.forEach(function(s) {
    s.match(/^\d+$/) || o.push(Sr(
      t,
      e,
      r,
      n,
      s,
      !0
    ));
  }), o;
}
function Sr(t, e, r, n, i, o) {
  var u, l, s;
  if (s = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }, s.get ? s.set ? l = t.stylize("[Getter/Setter]", "special") : l = t.stylize("[Getter]", "special") : s.set && (l = t.stylize("[Setter]", "special")), Nn(n, i) || (u = "[" + i + "]"), l || (t.seen.indexOf(s.value) < 0 ? (Wr(r) ? l = rr(t, s.value, null) : l = rr(t, s.value, r - 1), l.indexOf(`
`) > -1 && (o ? l = l.split(`
`).map(function(a) {
    return "  " + a;
  }).join(`
`).substr(2) : l = `
` + l.split(`
`).map(function(a) {
    return "   " + a;
  }).join(`
`))) : l = t.stylize("[Circular]", "special")), ce(u)) {
    if (o && i.match(/^\d+$/))
      return l;
    u = JSON.stringify("" + i), u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u = u.substr(1, u.length - 2), u = t.stylize(u, "name")) : (u = u.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u = t.stylize(u, "string"));
  }
  return u + ": " + l;
}
function Ou(t, e, r) {
  var n = t.reduce(function(i, o) {
    return o.indexOf(`
`) >= 0, i + o.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  return n > 60 ? r[0] + (e === "" ? "" : e + `
 `) + " " + t.join(`,
  `) + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1];
}
function ju(t) {
  return Array.isArray(t);
}
function jn(t) {
  return typeof t == "boolean";
}
function Wr(t) {
  return t === null;
}
function Nu(t) {
  return typeof t == "number";
}
function zr(t) {
  return typeof t == "string";
}
function ce(t) {
  return t === void 0;
}
function wr(t) {
  return Ye(t) && Hr(t) === "[object RegExp]";
}
function Ye(t) {
  return typeof t == "object" && t !== null;
}
function Ot(t) {
  return Ye(t) && Hr(t) === "[object Date]";
}
function _r(t) {
  return Ye(t) && (Hr(t) === "[object Error]" || t instanceof Error);
}
function vr(t) {
  return typeof t == "function";
}
function Hr(t) {
  return Object.prototype.toString.call(t);
}
function Yu(t, e) {
  if (!e || !Ye(e))
    return t;
  for (var r = Object.keys(e), n = r.length; n--; )
    t[r[n]] = e[r[n]];
  return t;
}
function Nn(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var Yn, Le, Er, Me = P({
  "node-modules-polyfills:util"() {
    v(), E(), ar(), Su(), Yn = /%[sdj%]/g, Le = {}, he.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, he.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
  }
});
function qn() {
  fr = !0;
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, r = t.length; e < r; ++e)
    Q[e] = t[e], W[t.charCodeAt(e)] = e;
  W["-".charCodeAt(0)] = 62, W["_".charCodeAt(0)] = 63;
}
function qu(t) {
  fr || qn();
  var e, r, n, i, o, u, l = t.length;
  if (l % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  o = t[l - 2] === "=" ? 2 : t[l - 1] === "=" ? 1 : 0, u = new Zn(l * 3 / 4 - o), n = o > 0 ? l - 4 : l;
  var s = 0;
  for (e = 0, r = 0; e < n; e += 4, r += 3)
    i = W[t.charCodeAt(e)] << 18 | W[t.charCodeAt(e + 1)] << 12 | W[t.charCodeAt(e + 2)] << 6 | W[t.charCodeAt(e + 3)], u[s++] = i >> 16 & 255, u[s++] = i >> 8 & 255, u[s++] = i & 255;
  return o === 2 ? (i = W[t.charCodeAt(e)] << 2 | W[t.charCodeAt(e + 1)] >> 4, u[s++] = i & 255) : o === 1 && (i = W[t.charCodeAt(e)] << 10 | W[t.charCodeAt(e + 1)] << 4 | W[t.charCodeAt(e + 2)] >> 2, u[s++] = i >> 8 & 255, u[s++] = i & 255), u;
}
function Wu(t) {
  return Q[t >> 18 & 63] + Q[t >> 12 & 63] + Q[t >> 6 & 63] + Q[t & 63];
}
function zu(t, e, r) {
  for (var n, i = [], o = e; o < r; o += 3)
    n = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(Wu(n));
  return i.join("");
}
function jt(t) {
  fr || qn();
  for (var e, r = t.length, n = r % 3, i = "", o = [], u = 16383, l = 0, s = r - n; l < s; l += u)
    o.push(zu(t, l, l + u > s ? s : l + u));
  return n === 1 ? (e = t[r - 1], i += Q[e >> 2], i += Q[e << 4 & 63], i += "==") : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i += Q[e >> 10], i += Q[e >> 4 & 63], i += Q[e << 2 & 63], i += "="), o.push(i), o.join("");
}
function He(t, e, r, n, i) {
  var o, u, l = i * 8 - n - 1, s = (1 << l) - 1, a = s >> 1, f = -7, c = r ? i - 1 : 0, h = r ? -1 : 1, D = t[e + c];
  for (c += h, o = D & (1 << -f) - 1, D >>= -f, f += l; f > 0; o = o * 256 + t[e + c], c += h, f -= 8)
    ;
  for (u = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; u = u * 256 + t[e + c], c += h, f -= 8)
    ;
  if (o === 0)
    o = 1 - a;
  else {
    if (o === s)
      return u ? NaN : (D ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, n), o = o - a;
  }
  return (D ? -1 : 1) * u * Math.pow(2, o - n);
}
function Wn(t, e, r, n, i, o) {
  var u, l, s, a = o * 8 - i - 1, f = (1 << a) - 1, c = f >> 1, h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, D = n ? 0 : o - 1, p = n ? 1 : -1, m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0, u = f) : (u = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), u + c >= 1 ? e += h / s : e += h * Math.pow(2, 1 - c), e * s >= 2 && (u++, s /= 2), u + c >= f ? (l = 0, u = f) : u + c >= 1 ? (l = (e * s - 1) * Math.pow(2, i), u = u + c) : (l = e * Math.pow(2, c - 1) * Math.pow(2, i), u = 0)); i >= 8; t[r + D] = l & 255, D += p, l /= 256, i -= 8)
    ;
  for (u = u << i | l, a += i; a > 0; t[r + D] = u & 255, D += p, u /= 256, a -= 8)
    ;
  t[r + D - p] |= m * 128;
}
function tr() {
  return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function le(t, e) {
  if (tr() < e)
    throw new RangeError("Invalid typed array length");
  return d.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = d.prototype) : (t === null && (t = new d(e)), t.length = e), t;
}
function d(t, e, r) {
  if (!d.TYPED_ARRAY_SUPPORT && !(this instanceof d))
    return new d(t, e, r);
  if (typeof t == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return kr(this, t);
  }
  return zn(this, t, e, r);
}
function zn(t, e, r, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Vu(t, e, r, n) : typeof e == "string" ? Gu(t, e, r) : Ju(t, e);
}
function Hn(t) {
  if (typeof t != "number")
    throw new TypeError('"size" argument must be a number');
  if (t < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Hu(t, e, r, n) {
  return Hn(e), e <= 0 ? le(t, e) : r !== void 0 ? typeof n == "string" ? le(t, e).fill(r, n) : le(t, e).fill(r) : le(t, e);
}
function kr(t, e) {
  if (Hn(e), t = le(t, e < 0 ? 0 : Gr(e) | 0), !d.TYPED_ARRAY_SUPPORT)
    for (var r = 0; r < e; ++r)
      t[r] = 0;
  return t;
}
function Gu(t, e, r) {
  if ((typeof r != "string" || r === "") && (r = "utf8"), !d.isEncoding(r))
    throw new TypeError('"encoding" must be a valid string encoding');
  var n = Gn(e, r) | 0;
  t = le(t, n);
  var i = t.write(e, r);
  return i !== n && (t = t.slice(0, i)), t;
}
function Mr(t, e) {
  var r = e.length < 0 ? 0 : Gr(e.length) | 0;
  t = le(t, r);
  for (var n = 0; n < r; n += 1)
    t[n] = e[n] & 255;
  return t;
}
function Vu(t, e, r, n) {
  if (e.byteLength, r < 0 || e.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  return r === void 0 && n === void 0 ? e = new Uint8Array(e) : n === void 0 ? e = new Uint8Array(e, r) : e = new Uint8Array(e, r, n), d.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = d.prototype) : t = Mr(t, e), t;
}
function Ju(t, e) {
  if (ee(e)) {
    var r = Gr(e.length) | 0;
    return t = le(t, r), t.length === 0 || e.copy(t, 0, 0, r), t;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || Do(e.length) ? le(t, 0) : Mr(t, e);
    if (e.type === "Buffer" && Lr(e.data))
      return Mr(t, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Gr(t) {
  if (t >= tr())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + tr().toString(16) + " bytes");
  return t | 0;
}
function ee(t) {
  return !!(t != null && t._isBuffer);
}
function Gn(t, e) {
  if (ee(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var r = t.length;
  if (r === 0)
    return 0;
  for (var n = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
      case void 0:
        return nr(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return r * 2;
      case "hex":
        return r >>> 1;
      case "base64":
        return Qn(t).length;
      default:
        if (n)
          return nr(t).length;
        e = ("" + e).toLowerCase(), n = !0;
    }
}
function Ku(t, e, r) {
  var n = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, e >>>= 0, r <= e))
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return oo(this, e, r);
      case "utf8":
      case "utf-8":
        return Jn(this, e, r);
      case "ascii":
        return io(this, e, r);
      case "latin1":
      case "binary":
        return uo(this, e, r);
      case "base64":
        return to(this, e, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return so(this, e, r);
      default:
        if (n)
          throw new TypeError("Unknown encoding: " + t);
        t = (t + "").toLowerCase(), n = !0;
    }
}
function me(t, e, r) {
  var n = t[e];
  t[e] = t[r], t[r] = n;
}
function Nt(t, e, r, n, i) {
  if (t.length === 0)
    return -1;
  if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
    if (i)
      return -1;
    r = t.length - 1;
  } else if (r < 0)
    if (i)
      r = 0;
    else
      return -1;
  if (typeof e == "string" && (e = d.from(e, n)), ee(e))
    return e.length === 0 ? -1 : Yt(t, e, r, n, i);
  if (typeof e == "number")
    return e = e & 255, d.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : Yt(t, [e], r, n, i);
  throw new TypeError("val must be string, number or Buffer");
}
function Yt(t, e, r, n, i) {
  var o = 1, u = t.length, l = e.length;
  if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (t.length < 2 || e.length < 2)
      return -1;
    o = 2, u /= 2, l /= 2, r /= 2;
  }
  function s(D, p) {
    return o === 1 ? D[p] : D.readUInt16BE(p * o);
  }
  var a;
  if (i) {
    var f = -1;
    for (a = r; a < u; a++)
      if (s(t, a) === s(e, f === -1 ? 0 : a - f)) {
        if (f === -1 && (f = a), a - f + 1 === l)
          return f * o;
      } else
        f !== -1 && (a -= a - f), f = -1;
  } else
    for (r + l > u && (r = u - l), a = r; a >= 0; a--) {
      for (var c = !0, h = 0; h < l; h++)
        if (s(t, a + h) !== s(e, h)) {
          c = !1;
          break;
        }
      if (c)
        return a;
    }
  return -1;
}
function Qu(t, e, r, n) {
  r = Number(r) || 0;
  var i = t.length - r;
  n ? (n = Number(n), n > i && (n = i)) : n = i;
  var o = e.length;
  if (o % 2 !== 0)
    throw new TypeError("Invalid hex string");
  n > o / 2 && (n = o / 2);
  for (var u = 0; u < n; ++u) {
    var l = parseInt(e.substr(u * 2, 2), 16);
    if (isNaN(l))
      return u;
    t[r + u] = l;
  }
  return u;
}
function Xu(t, e, r, n) {
  return lr(nr(e, t.length - r), t, r, n);
}
function Vn(t, e, r, n) {
  return lr(co(e), t, r, n);
}
function Zu(t, e, r, n) {
  return Vn(t, e, r, n);
}
function eo(t, e, r, n) {
  return lr(Qn(e), t, r, n);
}
function ro(t, e, r, n) {
  return lr(ho(e, t.length - r), t, r, n);
}
function to(t, e, r) {
  return e === 0 && r === t.length ? jt(t) : jt(t.slice(e, r));
}
function Jn(t, e, r) {
  r = Math.min(t.length, r);
  for (var n = [], i = e; i < r; ) {
    var o = t[i], u = null, l = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (i + l <= r) {
      var s, a, f, c;
      switch (l) {
        case 1:
          o < 128 && (u = o);
          break;
        case 2:
          s = t[i + 1], (s & 192) === 128 && (c = (o & 31) << 6 | s & 63, c > 127 && (u = c));
          break;
        case 3:
          s = t[i + 1], a = t[i + 2], (s & 192) === 128 && (a & 192) === 128 && (c = (o & 15) << 12 | (s & 63) << 6 | a & 63, c > 2047 && (c < 55296 || c > 57343) && (u = c));
          break;
        case 4:
          s = t[i + 1], a = t[i + 2], f = t[i + 3], (s & 192) === 128 && (a & 192) === 128 && (f & 192) === 128 && (c = (o & 15) << 18 | (s & 63) << 12 | (a & 63) << 6 | f & 63, c > 65535 && c < 1114112 && (u = c));
      }
    }
    u === null ? (u = 65533, l = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n.push(u), i += l;
  }
  return no(n);
}
function no(t) {
  var e = t.length;
  if (e <= Ir)
    return String.fromCharCode.apply(String, t);
  for (var r = "", n = 0; n < e; )
    r += String.fromCharCode.apply(
      String,
      t.slice(n, n += Ir)
    );
  return r;
}
function io(t, e, r) {
  var n = "";
  r = Math.min(t.length, r);
  for (var i = e; i < r; ++i)
    n += String.fromCharCode(t[i] & 127);
  return n;
}
function uo(t, e, r) {
  var n = "";
  r = Math.min(t.length, r);
  for (var i = e; i < r; ++i)
    n += String.fromCharCode(t[i]);
  return n;
}
function oo(t, e, r) {
  var n = t.length;
  (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
  for (var i = "", o = e; o < r; ++o)
    i += fo(t[o]);
  return i;
}
function so(t, e, r) {
  for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
    i += String.fromCharCode(n[o] + n[o + 1] * 256);
  return i;
}
function I(t, e, r) {
  if (t % 1 !== 0 || t < 0)
    throw new RangeError("offset is not uint");
  if (t + e > r)
    throw new RangeError("Trying to access beyond buffer length");
}
function N(t, e, r, n, i, o) {
  if (!ee(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < o)
    throw new RangeError('"value" argument is out of bounds');
  if (r + n > t.length)
    throw new RangeError("Index out of range");
}
function Ge(t, e, r, n) {
  e < 0 && (e = 65535 + e + 1);
  for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
    t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> (n ? i : 1 - i) * 8;
}
function Ve(t, e, r, n) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
    t[r + i] = e >>> (n ? i : 3 - i) * 8 & 255;
}
function Kn(t, e, r, n, i, o) {
  if (r + n > t.length)
    throw new RangeError("Index out of range");
  if (r < 0)
    throw new RangeError("Index out of range");
}
function qt(t, e, r, n, i) {
  return i || Kn(t, e, r, 4), Wn(t, e, r, n, 23, 4), r + 4;
}
function Wt(t, e, r, n, i) {
  return i || Kn(t, e, r, 8), Wn(t, e, r, n, 52, 8), r + 8;
}
function ao(t) {
  if (t = lo(t).replace(ei, ""), t.length < 2)
    return "";
  for (; t.length % 4 !== 0; )
    t = t + "=";
  return t;
}
function lo(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function fo(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function nr(t, e) {
  e = e || 1 / 0;
  for (var r, n = t.length, i = null, o = [], u = 0; u < n; ++u) {
    if (r = t.charCodeAt(u), r > 55295 && r < 57344) {
      if (!i) {
        if (r > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (u + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), i = r;
        continue;
      }
      r = (i - 55296 << 10 | r - 56320) + 65536;
    } else
      i && (e -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, r < 128) {
      if ((e -= 1) < 0)
        break;
      o.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0)
        break;
      o.push(
        r >> 6 | 192,
        r & 63 | 128
      );
    } else if (r < 65536) {
      if ((e -= 3) < 0)
        break;
      o.push(
        r >> 12 | 224,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else if (r < 1114112) {
      if ((e -= 4) < 0)
        break;
      o.push(
        r >> 18 | 240,
        r >> 12 & 63 | 128,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function co(t) {
  for (var e = [], r = 0; r < t.length; ++r)
    e.push(t.charCodeAt(r) & 255);
  return e;
}
function ho(t, e) {
  for (var r, n, i, o = [], u = 0; u < t.length && !((e -= 2) < 0); ++u)
    r = t.charCodeAt(u), n = r >> 8, i = r % 256, o.push(i), o.push(n);
  return o;
}
function Qn(t) {
  return qu(ao(t));
}
function lr(t, e, r, n) {
  for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
    e[i + r] = t[i];
  return i;
}
function Do(t) {
  return t !== t;
}
function po(t) {
  return t != null && (!!t._isBuffer || Xn(t) || go(t));
}
function Xn(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function go(t) {
  return typeof t.readFloatLE == "function" && typeof t.slice == "function" && Xn(t.slice(0, 0));
}
var Q, W, Zn, fr, zt, Lr, Ht, Ir, ei, Vr = P({
  "node-modules-polyfills:buffer"() {
    v(), E(), Q = [], W = [], Zn = typeof Uint8Array < "u" ? Uint8Array : Array, fr = !1, zt = {}.toString, Lr = Array.isArray || function(t) {
      return zt.call(t) == "[object Array]";
    }, Ht = 50, d.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : !0, tr(), d.poolSize = 8192, d._augment = function(t) {
      return t.__proto__ = d.prototype, t;
    }, d.from = function(t, e, r) {
      return zn(null, t, e, r);
    }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array), d.alloc = function(t, e, r) {
      return Hu(null, t, e, r);
    }, d.allocUnsafe = function(t) {
      return kr(null, t);
    }, d.allocUnsafeSlow = function(t) {
      return kr(null, t);
    }, d.isBuffer = po, d.compare = function(e, r) {
      if (!ee(e) || !ee(r))
        throw new TypeError("Arguments must be Buffers");
      if (e === r)
        return 0;
      for (var n = e.length, i = r.length, o = 0, u = Math.min(n, i); o < u; ++o)
        if (e[o] !== r[o]) {
          n = e[o], i = r[o];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    }, d.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, d.concat = function(e, r) {
      if (!Lr(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e.length === 0)
        return d.alloc(0);
      var n;
      if (r === void 0)
        for (r = 0, n = 0; n < e.length; ++n)
          r += e[n].length;
      var i = d.allocUnsafe(r), o = 0;
      for (n = 0; n < e.length; ++n) {
        var u = e[n];
        if (!ee(u))
          throw new TypeError('"list" argument must be an Array of Buffers');
        u.copy(i, o), o += u.length;
      }
      return i;
    }, d.byteLength = Gn, d.prototype._isBuffer = !0, d.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r = 0; r < e; r += 2)
        me(this, r, r + 1);
      return this;
    }, d.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r = 0; r < e; r += 4)
        me(this, r, r + 3), me(this, r + 1, r + 2);
      return this;
    }, d.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r = 0; r < e; r += 8)
        me(this, r, r + 7), me(this, r + 1, r + 6), me(this, r + 2, r + 5), me(this, r + 3, r + 4);
      return this;
    }, d.prototype.toString = function() {
      var e = this.length | 0;
      return e === 0 ? "" : arguments.length === 0 ? Jn(this, 0, e) : Ku.apply(this, arguments);
    }, d.prototype.equals = function(e) {
      if (!ee(e))
        throw new TypeError("Argument must be a Buffer");
      return this === e ? !0 : d.compare(this, e) === 0;
    }, d.prototype.inspect = function() {
      var e = "", r = Ht;
      return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">";
    }, d.prototype.compare = function(e, r, n, i, o) {
      if (!ee(e))
        throw new TypeError("Argument must be a Buffer");
      if (r === void 0 && (r = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), r < 0 || n > e.length || i < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (i >= o && r >= n)
        return 0;
      if (i >= o)
        return -1;
      if (r >= n)
        return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e)
        return 0;
      for (var u = o - i, l = n - r, s = Math.min(u, l), a = this.slice(i, o), f = e.slice(r, n), c = 0; c < s; ++c)
        if (a[c] !== f[c]) {
          u = a[c], l = f[c];
          break;
        }
      return u < l ? -1 : l < u ? 1 : 0;
    }, d.prototype.includes = function(e, r, n) {
      return this.indexOf(e, r, n) !== -1;
    }, d.prototype.indexOf = function(e, r, n) {
      return Nt(this, e, r, n, !0);
    }, d.prototype.lastIndexOf = function(e, r, n) {
      return Nt(this, e, r, n, !1);
    }, d.prototype.write = function(e, r, n, i) {
      if (r === void 0)
        i = "utf8", n = this.length, r = 0;
      else if (n === void 0 && typeof r == "string")
        i = r, n = this.length, r = 0;
      else if (isFinite(r))
        r = r | 0, isFinite(n) ? (n = n | 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var o = this.length - r;
      if ((n === void 0 || n > o) && (n = o), e.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      for (var u = !1; ; )
        switch (i) {
          case "hex":
            return Qu(this, e, r, n);
          case "utf8":
          case "utf-8":
            return Xu(this, e, r, n);
          case "ascii":
            return Vn(this, e, r, n);
          case "latin1":
          case "binary":
            return Zu(this, e, r, n);
          case "base64":
            return eo(this, e, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ro(this, e, r, n);
          default:
            if (u)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), u = !0;
        }
    }, d.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    }, Ir = 4096, d.prototype.slice = function(e, r) {
      var n = this.length;
      e = ~~e, r = r === void 0 ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);
      var i;
      if (d.TYPED_ARRAY_SUPPORT)
        i = this.subarray(e, r), i.__proto__ = d.prototype;
      else {
        var o = r - e;
        i = new d(o, void 0);
        for (var u = 0; u < o; ++u)
          i[u] = this[u + e];
      }
      return i;
    }, d.prototype.readUIntLE = function(e, r, n) {
      e = e | 0, r = r | 0, n || I(e, r, this.length);
      for (var i = this[e], o = 1, u = 0; ++u < r && (o *= 256); )
        i += this[e + u] * o;
      return i;
    }, d.prototype.readUIntBE = function(e, r, n) {
      e = e | 0, r = r | 0, n || I(e, r, this.length);
      for (var i = this[e + --r], o = 1; r > 0 && (o *= 256); )
        i += this[e + --r] * o;
      return i;
    }, d.prototype.readUInt8 = function(e, r) {
      return r || I(e, 1, this.length), this[e];
    }, d.prototype.readUInt16LE = function(e, r) {
      return r || I(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, d.prototype.readUInt16BE = function(e, r) {
      return r || I(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, d.prototype.readUInt32LE = function(e, r) {
      return r || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    }, d.prototype.readUInt32BE = function(e, r) {
      return r || I(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, d.prototype.readIntLE = function(e, r, n) {
      e = e | 0, r = r | 0, n || I(e, r, this.length);
      for (var i = this[e], o = 1, u = 0; ++u < r && (o *= 256); )
        i += this[e + u] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
    }, d.prototype.readIntBE = function(e, r, n) {
      e = e | 0, r = r | 0, n || I(e, r, this.length);
      for (var i = r, o = 1, u = this[e + --i]; i > 0 && (o *= 256); )
        u += this[e + --i] * o;
      return o *= 128, u >= o && (u -= Math.pow(2, 8 * r)), u;
    }, d.prototype.readInt8 = function(e, r) {
      return r || I(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    }, d.prototype.readInt16LE = function(e, r) {
      r || I(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, d.prototype.readInt16BE = function(e, r) {
      r || I(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, d.prototype.readInt32LE = function(e, r) {
      return r || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, d.prototype.readInt32BE = function(e, r) {
      return r || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, d.prototype.readFloatLE = function(e, r) {
      return r || I(e, 4, this.length), He(this, e, !0, 23, 4);
    }, d.prototype.readFloatBE = function(e, r) {
      return r || I(e, 4, this.length), He(this, e, !1, 23, 4);
    }, d.prototype.readDoubleLE = function(e, r) {
      return r || I(e, 8, this.length), He(this, e, !0, 52, 8);
    }, d.prototype.readDoubleBE = function(e, r) {
      return r || I(e, 8, this.length), He(this, e, !1, 52, 8);
    }, d.prototype.writeUIntLE = function(e, r, n, i) {
      if (e = +e, r = r | 0, n = n | 0, !i) {
        var o = Math.pow(2, 8 * n) - 1;
        N(this, e, r, n, o, 0);
      }
      var u = 1, l = 0;
      for (this[r] = e & 255; ++l < n && (u *= 256); )
        this[r + l] = e / u & 255;
      return r + n;
    }, d.prototype.writeUIntBE = function(e, r, n, i) {
      if (e = +e, r = r | 0, n = n | 0, !i) {
        var o = Math.pow(2, 8 * n) - 1;
        N(this, e, r, n, o, 0);
      }
      var u = n - 1, l = 1;
      for (this[r + u] = e & 255; --u >= 0 && (l *= 256); )
        this[r + u] = e / l & 255;
      return r + n;
    }, d.prototype.writeUInt8 = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[r] = e & 255, r + 1;
    }, d.prototype.writeUInt16LE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255, this[r + 1] = e >>> 8) : Ge(this, e, r, !0), r + 2;
    }, d.prototype.writeUInt16BE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = e & 255) : Ge(this, e, r, !1), r + 2;
    }, d.prototype.writeUInt32LE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = e & 255) : Ve(this, e, r, !0), r + 4;
    }, d.prototype.writeUInt32BE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255) : Ve(this, e, r, !1), r + 4;
    }, d.prototype.writeIntLE = function(e, r, n, i) {
      if (e = +e, r = r | 0, !i) {
        var o = Math.pow(2, 8 * n - 1);
        N(this, e, r, n, o - 1, -o);
      }
      var u = 0, l = 1, s = 0;
      for (this[r] = e & 255; ++u < n && (l *= 256); )
        e < 0 && s === 0 && this[r + u - 1] !== 0 && (s = 1), this[r + u] = (e / l >> 0) - s & 255;
      return r + n;
    }, d.prototype.writeIntBE = function(e, r, n, i) {
      if (e = +e, r = r | 0, !i) {
        var o = Math.pow(2, 8 * n - 1);
        N(this, e, r, n, o - 1, -o);
      }
      var u = n - 1, l = 1, s = 0;
      for (this[r + u] = e & 255; --u >= 0 && (l *= 256); )
        e < 0 && s === 0 && this[r + u + 1] !== 0 && (s = 1), this[r + u] = (e / l >> 0) - s & 255;
      return r + n;
    }, d.prototype.writeInt8 = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[r] = e & 255, r + 1;
    }, d.prototype.writeInt16LE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255, this[r + 1] = e >>> 8) : Ge(this, e, r, !0), r + 2;
    }, d.prototype.writeInt16BE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = e & 255) : Ge(this, e, r, !1), r + 2;
    }, d.prototype.writeInt32LE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24) : Ve(this, e, r, !0), r + 4;
    }, d.prototype.writeInt32BE = function(e, r, n) {
      return e = +e, r = r | 0, n || N(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255) : Ve(this, e, r, !1), r + 4;
    }, d.prototype.writeFloatLE = function(e, r, n) {
      return qt(this, e, r, !0, n);
    }, d.prototype.writeFloatBE = function(e, r, n) {
      return qt(this, e, r, !1, n);
    }, d.prototype.writeDoubleLE = function(e, r, n) {
      return Wt(this, e, r, !0, n);
    }, d.prototype.writeDoubleBE = function(e, r, n) {
      return Wt(this, e, r, !1, n);
    }, d.prototype.copy = function(e, r, n, i) {
      if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= e.length && (r = e.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);
      var o = i - n, u;
      if (this === e && n < r && r < i)
        for (u = o - 1; u >= 0; --u)
          e[u + r] = this[u + n];
      else if (o < 1e3 || !d.TYPED_ARRAY_SUPPORT)
        for (u = 0; u < o; ++u)
          e[u + r] = this[u + n];
      else
        Uint8Array.prototype.set.call(
          e,
          this.subarray(n, n + o),
          r
        );
      return o;
    }, d.prototype.fill = function(e, r, n, i) {
      if (typeof e == "string") {
        if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), e.length === 1) {
          var o = e.charCodeAt(0);
          o < 256 && (e = o);
        }
        if (i !== void 0 && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !d.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
      } else
        typeof e == "number" && (e = e & 255);
      if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= r)
        return this;
      r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
      var u;
      if (typeof e == "number")
        for (u = r; u < n; ++u)
          this[u] = e;
      else {
        var l = ee(e) ? e : nr(new d(e, i).toString()), s = l.length;
        for (u = 0; u < n - r; ++u)
          this[u + r] = l[u % s];
      }
      return this;
    }, ei = /[^+\/0-9A-Za-z-_]/g;
  }
});
function we() {
  this.head = null, this.tail = null, this.length = 0;
}
var ri, mo = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js"() {
    v(), E(), Vr(), ri = we, we.prototype.push = function(t) {
      var e = { data: t, next: null };
      this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
    }, we.prototype.unshift = function(t) {
      var e = { data: t, next: this.head };
      this.length === 0 && (this.tail = e), this.head = e, ++this.length;
    }, we.prototype.shift = function() {
      if (this.length !== 0) {
        var t = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
    }, we.prototype.clear = function() {
      this.head = this.tail = null, this.length = 0;
    }, we.prototype.join = function(t) {
      if (this.length === 0)
        return "";
      for (var e = this.head, r = "" + e.data; e = e.next; )
        r += t + e.data;
      return r;
    }, we.prototype.concat = function(t) {
      if (this.length === 0)
        return d.alloc(0);
      if (this.length === 1)
        return this.head.data;
      for (var e = d.allocUnsafe(t >>> 0), r = this.head, n = 0; r; )
        r.data.copy(e, n), n += r.data.length, r = r.next;
      return e;
    };
  }
});
function wo(t) {
  if (t && !ti(t))
    throw new Error("Unknown encoding: " + t);
}
function Oe(t) {
  switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), wo(t), this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2, this.detectIncompleteChar = vo;
      break;
    case "base64":
      this.surrogateSize = 3, this.detectIncompleteChar = Eo;
      break;
    default:
      this.write = _o;
      return;
  }
  this.charBuffer = new d(6), this.charReceived = 0, this.charLength = 0;
}
function _o(t) {
  return t.toString(this.encoding);
}
function vo(t) {
  this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0;
}
function Eo(t) {
  this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0;
}
var ti, yo = P({
  "node-modules-polyfills:string_decoder"() {
    v(), E(), Vr(), ti = d.isEncoding || function(t) {
      switch (t && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;
        default:
          return !1;
      }
    }, Oe.prototype.write = function(t) {
      for (var e = ""; this.charLength; ) {
        var r = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
        if (t.copy(this.charBuffer, this.charReceived, 0, r), this.charReceived += r, this.charReceived < this.charLength)
          return "";
        t = t.slice(r, t.length), e = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var i = e.charCodeAt(e.length - 1);
        if (i >= 55296 && i <= 56319) {
          this.charLength += this.surrogateSize, e = "";
          continue;
        }
        if (this.charReceived = this.charLength = 0, t.length === 0)
          return e;
        break;
      }
      this.detectIncompleteChar(t);
      var n = t.length;
      this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, n), n -= this.charReceived), e += t.toString(this.encoding, 0, n);
      var n = e.length - 1, i = e.charCodeAt(n);
      if (i >= 55296 && i <= 56319) {
        var o = this.surrogateSize;
        return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), t.copy(this.charBuffer, 0, 0, o), e.substring(0, n);
      }
      return e;
    }, Oe.prototype.detectIncompleteChar = function(t) {
      for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
        var r = t[t.length - e];
        if (e == 1 && r >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (e <= 2 && r >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (e <= 3 && r >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = e;
    }, Oe.prototype.end = function(t) {
      var e = "";
      if (t && t.length && (e = this.write(t)), this.charReceived) {
        var r = this.charReceived, n = this.charBuffer, i = this.encoding;
        e += n.slice(0, r).toString(i);
      }
      return e;
    };
  }
});
function Fo(t, e, r) {
  if (typeof t.prependListener == "function")
    return t.prependListener(e, r);
  !t._events || !t._events[e] ? t.on(e, r) : Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
}
function Co(t, e) {
  return t.listeners(e).length;
}
function ni(t, e) {
  t = t || {}, this.objectMode = !!t.objectMode, e instanceof H && (this.objectMode = this.objectMode || !!t.readableObjectMode);
  var r = t.highWaterMark, n = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = r || r === 0 ? r : n, this.highWaterMark = ~~this.highWaterMark, this.buffer = new ri(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (this.decoder = new Oe(t.encoding), this.encoding = t.encoding);
}
function S(t) {
  if (!(this instanceof S))
    return new S(t);
  this._readableState = new ni(t, this), this.readable = !0, t && typeof t.read == "function" && (this._read = t.read), Ae.call(this);
}
function Gt(t, e, r, n, i) {
  var o = Bo(e, r);
  if (o)
    t.emit("error", o);
  else if (r === null)
    e.reading = !1, Ro(t, e);
  else if (e.objectMode || r && r.length > 0)
    if (e.ended && !i) {
      var u = new Error("stream.push() after EOF");
      t.emit("error", u);
    } else if (e.endEmitted && i) {
      var l = new Error("stream.unshift() after end event");
      t.emit("error", l);
    } else {
      var s;
      e.decoder && !i && !n && (r = e.decoder.write(r), s = !e.objectMode && r.length === 0), i || (e.reading = !1), s || (e.flowing && e.length === 0 && !e.sync ? (t.emit("data", r), t.read(0)) : (e.length += e.objectMode ? 1 : r.length, i ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && ir(t))), xo(t, e);
    }
  else
    i || (e.reading = !1);
  return bo(e);
}
function bo(t) {
  return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
}
function Ao(t) {
  return t >= Ur ? t = Ur : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
}
function Vt(t, e) {
  return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = Ao(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
}
function Bo(t, e) {
  var r = null;
  return !g.isBuffer(e) && typeof e != "string" && e !== null && e !== void 0 && !t.objectMode && (r = new TypeError("Invalid non-string/buffer chunk")), r;
}
function Ro(t, e) {
  if (!e.ended) {
    if (e.decoder) {
      var r = e.decoder.end();
      r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
    }
    e.ended = !0, ir(t);
  }
}
function ir(t) {
  var e = t._readableState;
  e.needReadable = !1, e.emittedReadable || (A("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? G(Jt, t) : Jt(t));
}
function Jt(t) {
  A("emit readable"), t.emit("readable"), Jr(t);
}
function xo(t, e) {
  e.readingMore || (e.readingMore = !0, G(To, t, e));
}
function To(t, e) {
  for (var r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (A("maybeReadMore read 0"), t.read(0), r !== e.length); )
    r = e.length;
  e.readingMore = !1;
}
function So(t) {
  return function() {
    var e = t._readableState;
    A("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, e.awaitDrain === 0 && t.listeners("data").length && (e.flowing = !0, Jr(t));
  };
}
function ko(t) {
  A("readable nexttick read 0"), t.read(0);
}
function Mo(t, e) {
  e.resumeScheduled || (e.resumeScheduled = !0, G(Lo, t, e));
}
function Lo(t, e) {
  e.reading || (A("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), Jr(t), e.flowing && !e.reading && t.read(0);
}
function Jr(t) {
  var e = t._readableState;
  for (A("flow", e.flowing); e.flowing && t.read() !== null; )
    ;
}
function Kt(t, e) {
  if (e.length === 0)
    return null;
  var r;
  return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.head.data : r = e.buffer.concat(e.length), e.buffer.clear()) : r = Io(t, e.buffer, e.decoder), r;
}
function Io(t, e, r) {
  var n;
  return t < e.head.data.length ? (n = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : t === e.head.data.length ? n = e.shift() : n = r ? Uo(t, e) : Po(t, e), n;
}
function Uo(t, e) {
  var r = e.head, n = 1, i = r.data;
  for (t -= i.length; r = r.next; ) {
    var o = r.data, u = t > o.length ? o.length : t;
    if (u === o.length ? i += o : i += o.slice(0, t), t -= u, t === 0) {
      u === o.length ? (++n, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(u));
      break;
    }
    ++n;
  }
  return e.length -= n, i;
}
function Po(t, e) {
  var r = g.allocUnsafe(t), n = e.head, i = 1;
  for (n.data.copy(r), t -= n.data.length; n = n.next; ) {
    var o = n.data, u = t > o.length ? o.length : t;
    if (o.copy(r, r.length - t, 0, u), t -= u, t === 0) {
      u === o.length ? (++i, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(u));
      break;
    }
    ++i;
  }
  return e.length -= i, r;
}
function yr(t) {
  var e = t._readableState;
  if (e.length > 0)
    throw new Error('"endReadable()" called on non-empty stream');
  e.endEmitted || (e.ended = !0, G($o, e, t));
}
function $o(t, e) {
  !t.endEmitted && t.length === 0 && (t.endEmitted = !0, e.readable = !1, e.emit("end"));
}
function Oo(t, e) {
  for (var r = 0, n = t.length; r < n; r++)
    e(t[r], r);
}
function Qt(t, e) {
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
var A, Ur, ii = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js"() {
    v(), E(), qr(), Me(), mo(), yo(), cr(), ar(), S.ReadableState = ni, A = Mu("stream"), Be(S, Ae), S.prototype.push = function(t, e) {
      var r = this._readableState;
      return !r.objectMode && typeof t == "string" && (e = e || r.defaultEncoding, e !== r.encoding && (t = g.from(t, e), e = "")), Gt(this, r, t, e, !1);
    }, S.prototype.unshift = function(t) {
      var e = this._readableState;
      return Gt(this, e, t, "", !0);
    }, S.prototype.isPaused = function() {
      return this._readableState.flowing === !1;
    }, S.prototype.setEncoding = function(t) {
      return this._readableState.decoder = new Oe(t), this._readableState.encoding = t, this;
    }, Ur = 8388608, S.prototype.read = function(t) {
      A("read", t), t = parseInt(t, 10);
      var e = this._readableState, r = t;
      if (t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended))
        return A("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? yr(this) : ir(this), null;
      if (t = Vt(t, e), t === 0 && e.ended)
        return e.length === 0 && yr(this), null;
      var n = e.needReadable;
      A("need readable", n), (e.length === 0 || e.length - t < e.highWaterMark) && (n = !0, A("length less than watermark", n)), e.ended || e.reading ? (n = !1, A("reading or ended", n)) : n && (A("do read"), e.reading = !0, e.sync = !0, e.length === 0 && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = Vt(r, e)));
      var i;
      return t > 0 ? i = Kt(t, e) : i = null, i === null ? (e.needReadable = !0, t = 0) : e.length -= t, e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && yr(this)), i !== null && this.emit("data", i), i;
    }, S.prototype._read = function(t) {
      this.emit("error", new Error("not implemented"));
    }, S.prototype.pipe = function(t, e) {
      var r = this, n = this._readableState;
      switch (n.pipesCount) {
        case 0:
          n.pipes = t;
          break;
        case 1:
          n.pipes = [n.pipes, t];
          break;
        default:
          n.pipes.push(t);
          break;
      }
      n.pipesCount += 1, A("pipe count=%d opts=%j", n.pipesCount, e);
      var i = !e || e.end !== !1, o = i ? l : f;
      n.endEmitted ? G(o) : r.once("end", o), t.on("unpipe", u);
      function u(_) {
        A("onunpipe"), _ === r && f();
      }
      function l() {
        A("onend"), t.end();
      }
      var s = So(r);
      t.on("drain", s);
      var a = !1;
      function f() {
        A("cleanup"), t.removeListener("close", p), t.removeListener("finish", m), t.removeListener("drain", s), t.removeListener("error", D), t.removeListener("unpipe", u), r.removeListener("end", l), r.removeListener("end", f), r.removeListener("data", h), a = !0, n.awaitDrain && (!t._writableState || t._writableState.needDrain) && s();
      }
      var c = !1;
      r.on("data", h);
      function h(_) {
        A("ondata"), c = !1;
        var R = t.write(_);
        R === !1 && !c && ((n.pipesCount === 1 && n.pipes === t || n.pipesCount > 1 && Qt(n.pipes, t) !== -1) && !a && (A("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, c = !0), r.pause());
      }
      function D(_) {
        A("onerror", _), w(), t.removeListener("error", D), Co(t, "error") === 0 && t.emit("error", _);
      }
      Fo(t, "error", D);
      function p() {
        t.removeListener("finish", m), w();
      }
      t.once("close", p);
      function m() {
        A("onfinish"), t.removeListener("close", p), w();
      }
      t.once("finish", m);
      function w() {
        A("unpipe"), r.unpipe(t);
      }
      return t.emit("pipe", r), n.flowing || (A("pipe resume"), r.resume()), t;
    }, S.prototype.unpipe = function(t) {
      var e = this._readableState;
      if (e.pipesCount === 0)
        return this;
      if (e.pipesCount === 1)
        return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this), this);
      if (!t) {
        var r = e.pipes, n = e.pipesCount;
        e.pipes = null, e.pipesCount = 0, e.flowing = !1;
        for (var i = 0; i < n; i++)
          r[i].emit("unpipe", this);
        return this;
      }
      var o = Qt(e.pipes, t);
      return o === -1 ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit("unpipe", this), this);
    }, S.prototype.on = function(t, e) {
      var r = Ae.prototype.on.call(this, t, e);
      if (t === "data")
        this._readableState.flowing !== !1 && this.resume();
      else if (t === "readable") {
        var n = this._readableState;
        !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && ir(this) : G(ko, this));
      }
      return r;
    }, S.prototype.addListener = S.prototype.on, S.prototype.resume = function() {
      var t = this._readableState;
      return t.flowing || (A("resume"), t.flowing = !0, Mo(this, t)), this;
    }, S.prototype.pause = function() {
      return A("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (A("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
    }, S.prototype.wrap = function(t) {
      var e = this._readableState, r = !1, n = this;
      t.on("end", function() {
        if (A("wrapped end"), e.decoder && !e.ended) {
          var u = e.decoder.end();
          u && u.length && n.push(u);
        }
        n.push(null);
      }), t.on("data", function(u) {
        if (A("wrapped data"), e.decoder && (u = e.decoder.write(u)), !(e.objectMode && u == null) && !(!e.objectMode && (!u || !u.length))) {
          var l = n.push(u);
          l || (r = !0, t.pause());
        }
      });
      for (var i in t)
        this[i] === void 0 && typeof t[i] == "function" && (this[i] = function(u) {
          return function() {
            return t[u].apply(t, arguments);
          };
        }(i));
      var o = ["error", "close", "destroy", "pause", "resume"];
      return Oo(o, function(u) {
        t.on(u, n.emit.bind(n, u));
      }), n._read = function(u) {
        A("wrapped _read", u), r && (r = !1, t.resume());
      }, n;
    }, S._fromList = Kt;
  }
});
function jo() {
}
function No(t, e, r) {
  this.chunk = t, this.encoding = e, this.callback = r, this.next = null;
}
function Pr(t, e) {
  Object.defineProperty(this, "buffer", {
    get: On(function() {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  }), t = t || {}, this.objectMode = !!t.objectMode, e instanceof H && (this.objectMode = this.objectMode || !!t.writableObjectMode);
  var r = t.highWaterMark, n = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = r || r === 0 ? r : n, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
  var i = t.decodeStrings === !1;
  this.decodeStrings = !i, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(o) {
    Vo(e, o);
  }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new ai(this);
}
function U(t) {
  if (!(this instanceof U) && !(this instanceof H))
    return new U(t);
  this._writableState = new Pr(t, this), this.writable = !0, t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev)), B.call(this);
}
function Yo(t, e) {
  var r = new Error("write after end");
  t.emit("error", r), G(e, r);
}
function qo(t, e, r, n) {
  var i = !0, o = !1;
  return r === null ? o = new TypeError("May not write null values to stream") : !d.isBuffer(r) && typeof r != "string" && r !== void 0 && !e.objectMode && (o = new TypeError("Invalid non-string/buffer chunk")), o && (t.emit("error", o), G(n, o), i = !1), i;
}
function Wo(t, e, r) {
  return !t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = d.from(e, r)), e;
}
function zo(t, e, r, n, i) {
  r = Wo(e, r, n), d.isBuffer(r) && (n = "buffer");
  var o = e.objectMode ? 1 : r.length;
  e.length += o;
  var u = e.length < e.highWaterMark;
  if (u || (e.needDrain = !0), e.writing || e.corked) {
    var l = e.lastBufferedRequest;
    e.lastBufferedRequest = new No(r, n, i), l ? l.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
  } else
    $r(t, e, !1, o, r, n, i);
  return u;
}
function $r(t, e, r, n, i, o, u) {
  e.writelen = n, e.writecb = u, e.writing = !0, e.sync = !0, r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1;
}
function Ho(t, e, r, n, i) {
  --e.pendingcb, r ? G(i, n) : i(n), t._writableState.errorEmitted = !0, t.emit("error", n);
}
function Go(t) {
  t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
}
function Vo(t, e) {
  var r = t._writableState, n = r.sync, i = r.writecb;
  if (Go(r), e)
    Ho(t, r, n, e, i);
  else {
    var o = oi(r);
    !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && ui(t, r), n ? G(Xt, t, r, o, i) : Xt(t, r, o, i);
  }
}
function Xt(t, e, r, n) {
  r || Jo(t, e), e.pendingcb--, n(), si(t, e);
}
function Jo(t, e) {
  e.length === 0 && e.needDrain && (e.needDrain = !1, t.emit("drain"));
}
function ui(t, e) {
  e.bufferProcessing = !0;
  var r = e.bufferedRequest;
  if (t._writev && r && r.next) {
    var n = e.bufferedRequestCount, i = new Array(n), o = e.corkedRequestsFree;
    o.entry = r;
    for (var u = 0; r; )
      i[u] = r, r = r.next, u += 1;
    $r(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new ai(e);
  } else {
    for (; r; ) {
      var l = r.chunk, s = r.encoding, a = r.callback, f = e.objectMode ? 1 : l.length;
      if ($r(t, e, !1, f, l, s, a), r = r.next, e.writing)
        break;
    }
    r === null && (e.lastBufferedRequest = null);
  }
  e.bufferedRequestCount = 0, e.bufferedRequest = r, e.bufferProcessing = !1;
}
function oi(t) {
  return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
}
function Zt(t, e) {
  e.prefinished || (e.prefinished = !0, t.emit("prefinish"));
}
function si(t, e) {
  var r = oi(e);
  return r && (e.pendingcb === 0 ? (Zt(t, e), e.finished = !0, t.emit("finish")) : Zt(t, e)), r;
}
function Ko(t, e, r) {
  e.ending = !0, si(t, e), r && (e.finished ? G(r) : t.once("finish", r)), e.ended = !0, t.writable = !1;
}
function ai(t) {
  var e = this;
  this.next = null, this.entry = null, this.finish = function(r) {
    var n = e.entry;
    for (e.entry = null; n; ) {
      var i = n.callback;
      t.pendingcb--, i(r), n = n.next;
    }
    t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
  };
}
var li = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js"() {
    v(), E(), Me(), Vr(), qr(), cr(), ar(), U.WritableState = Pr, Be(U, B), Pr.prototype.getBuffer = function() {
      for (var e = this.bufferedRequest, r = []; e; )
        r.push(e), e = e.next;
      return r;
    }, U.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    }, U.prototype.write = function(t, e, r) {
      var n = this._writableState, i = !1;
      return typeof e == "function" && (r = e, e = null), d.isBuffer(t) ? e = "buffer" : e || (e = n.defaultEncoding), typeof r != "function" && (r = jo), n.ended ? Yo(this, r) : qo(this, n, t, r) && (n.pendingcb++, i = zo(this, n, t, e, r)), i;
    }, U.prototype.cork = function() {
      var t = this._writableState;
      t.corked++;
    }, U.prototype.uncork = function() {
      var t = this._writableState;
      t.corked && (t.corked--, !t.writing && !t.corked && !t.finished && !t.bufferProcessing && t.bufferedRequest && ui(this, t));
    }, U.prototype.setDefaultEncoding = function(e) {
      if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + e);
      return this._writableState.defaultEncoding = e, this;
    }, U.prototype._write = function(t, e, r) {
      r(new Error("not implemented"));
    }, U.prototype._writev = null, U.prototype.end = function(t, e, r) {
      var n = this._writableState;
      typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null), t != null && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), !n.ending && !n.finished && Ko(this, n, r);
    };
  }
});
function H(t) {
  if (!(this instanceof H))
    return new H(t);
  S.call(this, t), U.call(this, t), t && t.readable === !1 && (this.readable = !1), t && t.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", Qo);
}
function Qo() {
  this.allowHalfOpen || this._writableState.ended || G(Xo, this);
}
function Xo(t) {
  t.end();
}
var Fr, Je, Ke, cr = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js"() {
    for (v(), E(), Me(), ar(), ii(), li(), Be(H, S), Fr = Object.keys(U.prototype), Ke = 0; Ke < Fr.length; Ke++)
      Je = Fr[Ke], H.prototype[Je] || (H.prototype[Je] = U.prototype[Je]);
  }
});
function Zo(t) {
  this.afterTransform = function(e, r) {
    return es(t, e, r);
  }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
}
function es(t, e, r) {
  var n = t._transformState;
  n.transforming = !1;
  var i = n.writecb;
  if (!i)
    return t.emit("error", new Error("no writecb in Transform class"));
  n.writechunk = null, n.writecb = null, r != null && t.push(r), i(e);
  var o = t._readableState;
  o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark);
}
function X(t) {
  if (!(this instanceof X))
    return new X(t);
  H.call(this, t), this._transformState = new Zo(this);
  var e = this;
  this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.once("prefinish", function() {
    typeof this._flush == "function" ? this._flush(function(r) {
      en(e, r);
    }) : en(e);
  });
}
function en(t, e) {
  if (e)
    return t.emit("error", e);
  var r = t._writableState, n = t._transformState;
  if (r.length)
    throw new Error("Calling transform done when ws.length != 0");
  if (n.transforming)
    throw new Error("Calling transform done when still transforming");
  return t.push(null);
}
var fi = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js"() {
    v(), E(), cr(), Me(), Be(X, H), X.prototype.push = function(t, e) {
      return this._transformState.needTransform = !1, H.prototype.push.call(this, t, e);
    }, X.prototype._transform = function(t, e, r) {
      throw new Error("Not implemented");
    }, X.prototype._write = function(t, e, r) {
      var n = this._transformState;
      if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, X.prototype._read = function(t) {
      var e = this._transformState;
      e.writechunk !== null && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
    };
  }
});
function Se(t) {
  if (!(this instanceof Se))
    return new Se(t);
  X.call(this, t);
}
var rs = P({
  "node_modules/.pnpm/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js"() {
    v(), E(), fi(), Me(), Be(Se, X), Se.prototype._transform = function(t, e, r) {
      r(null, t);
    };
  }
}), ci = {};
ln(ci, {
  Duplex: () => H,
  PassThrough: () => Se,
  Readable: () => S,
  Stream: () => J,
  Transform: () => X,
  Writable: () => U,
  default: () => hi
});
function J() {
  Ae.call(this);
}
var hi, ts = P({
  "node-modules-polyfills:stream"() {
    v(), E(), qr(), Me(), cr(), ii(), li(), fi(), rs(), Be(J, Ae), J.Readable = S, J.Writable = U, J.Duplex = H, J.Transform = X, J.PassThrough = Se, J.Stream = J, hi = J, J.prototype.pipe = function(t, e) {
      var r = this;
      function n(f) {
        t.writable && t.write(f) === !1 && r.pause && r.pause();
      }
      r.on("data", n);
      function i() {
        r.readable && r.resume && r.resume();
      }
      t.on("drain", i), !t._isStdio && (!e || e.end !== !1) && (r.on("end", u), r.on("close", l));
      var o = !1;
      function u() {
        o || (o = !0, t.end());
      }
      function l() {
        o || (o = !0, typeof t.destroy == "function" && t.destroy());
      }
      function s(f) {
        if (a(), Ae.listenerCount(this, "error") === 0)
          throw f;
      }
      r.on("error", s), t.on("error", s);
      function a() {
        r.removeListener("data", n), t.removeListener("drain", i), r.removeListener("end", u), r.removeListener("close", l), r.removeListener("error", s), t.removeListener("error", s), r.removeListener("end", a), r.removeListener("close", a), t.removeListener("close", a);
      }
      return r.on("end", a), r.on("close", a), t.on("close", a), t.emit("pipe", r), t;
    };
  }
}), ns = x({
  "node-modules-polyfills-commonjs:stream"(t, e) {
    v(), E();
    var r = (ts(), cn(ci));
    if (r && r.default) {
      e.exports = r.default;
      for (let n in r)
        e.exports[n] = r[n];
    } else
      r && (e.exports = r);
  }
}), is = x({
  "node_modules/.pnpm/mute-stream@1.0.0/node_modules/mute-stream/lib/index.js"(t, e) {
    v(), E();
    var r = ns(), n, i, o, u, l, s = class extends r {
      constructor(a = {}) {
        super(a), pr(this, i), pr(this, u), pr(this, n, null), this.writable = this.readable = !0, this.muted = !1, this.on("pipe", this._onpipe), this.replace = a.replace, this._prompt = a.prompt || null, this._hadControl = !1;
      }
      get isTTY() {
        return Qr(this, n) !== null ? Qr(this, n) : Re(this, i, o).call(this, "isTTY", !1);
      }
      // basically just get replace the getter/setter with a regular value
      set isTTY(a) {
        Ti(this, n, a);
      }
      get rows() {
        return Re(this, i, o).call(this, "rows");
      }
      get columns() {
        return Re(this, i, o).call(this, "columns");
      }
      mute() {
        this.muted = !0;
      }
      unmute() {
        this.muted = !1;
      }
      _onpipe(a) {
        this._src = a;
      }
      pipe(a, f) {
        return this._dest = a, super.pipe(a, f);
      }
      pause() {
        if (this._src)
          return this._src.pause();
      }
      resume() {
        if (this._src)
          return this._src.resume();
      }
      write(a) {
        if (this.muted) {
          if (!this.replace)
            return !0;
          if (a.match(/^\u001b/))
            return a.indexOf(this._prompt) === 0 && (a = a.slice(this._prompt.length), a = a.replace(/./g, this.replace), a = this._prompt + a), this._hadControl = !0, this.emit("data", a);
          this._prompt && this._hadControl && a.indexOf(this._prompt) === 0 && (this._hadControl = !1, this.emit("data", this._prompt), a = a.slice(this._prompt.length)), a = a.toString().replace(/./g, this.replace);
        }
        this.emit("data", a);
      }
      end(a) {
        this.muted && (a && this.replace ? a = a.toString().replace(/./g, this.replace) : a = null), a && this.emit("data", a), this.emit("end");
      }
      destroy(...a) {
        return Re(this, u, l).call(this, "destroy", ...a);
      }
      destroySoon(...a) {
        return Re(this, u, l).call(this, "destroySoon", ...a);
      }
      close(...a) {
        return Re(this, u, l).call(this, "close", ...a);
      }
    };
    n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakSet(), o = function(a, f) {
      return this._dest ? this._dest[a] : this._src ? this._src[a] : f;
    }, u = /* @__PURE__ */ new WeakSet(), l = function(a, ...f) {
      var c, h;
      typeof ((c = this._dest) == null ? void 0 : c[a]) == "function" && this._dest[a](...f), typeof ((h = this._src) == null ? void 0 : h[a]) == "function" && this._src[a](...f);
    }, e.exports = s;
  }
}), Di = {};
ln(Di, {
  ReadStream: () => di,
  WriteStream: () => gi,
  default: () => mi,
  isatty: () => pi
});
function pi() {
  return !1;
}
function di() {
  throw new Error("tty.ReadStream is not implemented");
}
function gi() {
  throw new Error("tty.ReadStream is not implemented");
}
var mi, us = P({
  "node-modules-polyfills:tty"() {
    v(), E(), mi = {
      isatty: pi,
      ReadStream: di,
      WriteStream: gi
    };
  }
}), os = x({
  "node-modules-polyfills-commonjs:tty"(t, e) {
    v(), E();
    var r = (us(), cn(Di));
    if (r && r.default) {
      e.exports = r.default;
      for (let n in r)
        e.exports[n] = r[n];
    } else
      r && (e.exports = r);
  }
}), wi = x({
  "node_modules/.pnpm/cli-width@4.0.0/node_modules/cli-width/index.js"(t, e) {
    v(), E(), e.exports = n;
    function r(i) {
      const o = {
        defaultWidth: 0,
        output: z.stdout,
        tty: os()
      };
      return i ? (Object.keys(o).forEach(function(u) {
        i[u] || (i[u] = o[u]);
      }), i) : o;
    }
    function n(i) {
      const o = r(i);
      if (o.output.getWindowSize)
        return o.output.getWindowSize()[0] || o.defaultWidth;
      if (o.tty.getWindowSize)
        return o.tty.getWindowSize()[1] || o.defaultWidth;
      if (o.output.columns)
        return o.output.columns;
      if (z.env.CLI_WIDTH) {
        const u = parseInt(z.env.CLI_WIDTH, 10);
        if (!isNaN(u) && u !== 0)
          return u;
      }
      return o.defaultWidth;
    }
  }
}), ss = x({
  "node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js"(t, e) {
    v(), E(), e.exports = ({ onlyFirst: r = !1 } = {}) => {
      const n = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(n, r ? void 0 : "g");
    };
  }
}), Kr = x({
  "node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js"(t, e) {
    v(), E();
    var r = ss();
    e.exports = (n) => typeof n == "string" ? n.replace(r(), "") : n;
  }
}), as = x({
  "node_modules/.pnpm/is-fullwidth-code-point@3.0.0/node_modules/is-fullwidth-code-point/index.js"(t, e) {
    v(), E();
    var r = (n) => Number.isNaN(n) ? !1 : n >= 4352 && (n <= 4447 || // Hangul Jamo
    n === 9001 || // LEFT-POINTING ANGLE BRACKET
    n === 9002 || // RIGHT-POINTING ANGLE BRACKET
    // CJK Radicals Supplement .. Enclosed CJK Letters and Months
    11904 <= n && n <= 12871 && n !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
    12880 <= n && n <= 19903 || // CJK Unified Ideographs .. Yi Radicals
    19968 <= n && n <= 42182 || // Hangul Jamo Extended-A
    43360 <= n && n <= 43388 || // Hangul Syllables
    44032 <= n && n <= 55203 || // CJK Compatibility Ideographs
    63744 <= n && n <= 64255 || // Vertical Forms
    65040 <= n && n <= 65049 || // CJK Compatibility Forms .. Small Form Variants
    65072 <= n && n <= 65131 || // Halfwidth and Fullwidth Forms
    65281 <= n && n <= 65376 || 65504 <= n && n <= 65510 || // Kana Supplement
    110592 <= n && n <= 110593 || // Enclosed Ideographic Supplement
    127488 <= n && n <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
    131072 <= n && n <= 262141);
    e.exports = r, e.exports.default = r;
  }
}), ls = x({
  "node_modules/.pnpm/emoji-regex@8.0.0/node_modules/emoji-regex/index.js"(t, e) {
    v(), E(), e.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
}), _i = x({
  "node_modules/.pnpm/string-width@4.2.3/node_modules/string-width/index.js"(t, e) {
    v(), E();
    var r = Kr(), n = as(), i = ls(), o = (u) => {
      if (typeof u != "string" || u.length === 0 || (u = r(u), u.length === 0))
        return 0;
      u = u.replace(i(), "  ");
      let l = 0;
      for (let s = 0; s < u.length; s++) {
        const a = u.codePointAt(s);
        a <= 31 || a >= 127 && a <= 159 || a >= 768 && a <= 879 || (a > 65535 && s++, l += n(a) ? 2 : 1);
      }
      return l;
    };
    e.exports = o, e.exports.default = o;
  }
}), fs = x({
  "node_modules/.pnpm/ansi-escapes@4.3.2/node_modules/ansi-escapes/index.js"(t, e) {
    v(), E();
    var r = e.exports;
    e.exports.default = r;
    var n = "\x1B[", i = "\x1B]", o = "\x07", u = ";", l = z.env.TERM_PROGRAM === "Apple_Terminal";
    r.cursorTo = (s, a) => {
      if (typeof s != "number")
        throw new TypeError("The `x` argument is required");
      return typeof a != "number" ? n + (s + 1) + "G" : n + (a + 1) + ";" + (s + 1) + "H";
    }, r.cursorMove = (s, a) => {
      if (typeof s != "number")
        throw new TypeError("The `x` argument is required");
      let f = "";
      return s < 0 ? f += n + -s + "D" : s > 0 && (f += n + s + "C"), a < 0 ? f += n + -a + "A" : a > 0 && (f += n + a + "B"), f;
    }, r.cursorUp = (s = 1) => n + s + "A", r.cursorDown = (s = 1) => n + s + "B", r.cursorForward = (s = 1) => n + s + "C", r.cursorBackward = (s = 1) => n + s + "D", r.cursorLeft = n + "G", r.cursorSavePosition = l ? "\x1B7" : n + "s", r.cursorRestorePosition = l ? "\x1B8" : n + "u", r.cursorGetPosition = n + "6n", r.cursorNextLine = n + "E", r.cursorPrevLine = n + "F", r.cursorHide = n + "?25l", r.cursorShow = n + "?25h", r.eraseLines = (s) => {
      let a = "";
      for (let f = 0; f < s; f++)
        a += r.eraseLine + (f < s - 1 ? r.cursorUp() : "");
      return s && (a += r.cursorLeft), a;
    }, r.eraseEndLine = n + "K", r.eraseStartLine = n + "1K", r.eraseLine = n + "2K", r.eraseDown = n + "J", r.eraseUp = n + "1J", r.eraseScreen = n + "2J", r.scrollUp = n + "S", r.scrollDown = n + "T", r.clearScreen = "\x1Bc", r.clearTerminal = z.platform === "win32" ? `${r.eraseScreen}${n}0f` : (
      // 1. Erases the screen (Only done in case `2` is not supported)
      // 2. Erases the whole screen including scrollback buffer
      // 3. Moves cursor to the top-left position
      // More info: https://www.real-world-systems.com/docs/ANSIcode.html
      `${r.eraseScreen}${n}3J${n}H`
    ), r.beep = o, r.link = (s, a) => [
      i,
      "8",
      u,
      u,
      a,
      o,
      s,
      i,
      "8",
      u,
      u,
      o
    ].join(""), r.image = (s, a = {}) => {
      let f = `${i}1337;File=inline=1`;
      return a.width && (f += `;width=${a.width}`), a.height && (f += `;height=${a.height}`), a.preserveAspectRatio === !1 && (f += ";preserveAspectRatio=0"), f + ":" + s.toString("base64") + o;
    }, r.iTerm = {
      setCwd: (s = z.cwd()) => `${i}50;CurrentDir=${s}${o}`,
      annotation: (s, a = {}) => {
        let f = `${i}1337;`;
        const c = typeof a.x < "u", h = typeof a.y < "u";
        if ((c || h) && !(c && h && typeof a.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return s = s.replace(/\|/g, ""), f += a.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", a.length > 0 ? f += (c ? [s, a.length, a.x, a.y] : [a.length, s]).join("|") : f += s, f + o;
      }
    };
  }
}), cs = x({
  "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(t, e) {
    v(), E(), e.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
  }
}), vi = x({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(t, e) {
    v(), E();
    var r = cs(), n = {};
    for (const u of Object.keys(r))
      n[r[u]] = u;
    var i = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    e.exports = i;
    for (const u of Object.keys(i)) {
      if (!("channels" in i[u]))
        throw new Error("missing channels property: " + u);
      if (!("labels" in i[u]))
        throw new Error("missing channel labels property: " + u);
      if (i[u].labels.length !== i[u].channels)
        throw new Error("channel and label counts mismatch: " + u);
      const { channels: l, labels: s } = i[u];
      delete i[u].channels, delete i[u].labels, Object.defineProperty(i[u], "channels", { value: l }), Object.defineProperty(i[u], "labels", { value: s });
    }
    i.rgb.hsl = function(u) {
      const l = u[0] / 255, s = u[1] / 255, a = u[2] / 255, f = Math.min(l, s, a), c = Math.max(l, s, a), h = c - f;
      let D, p;
      c === f ? D = 0 : l === c ? D = (s - a) / h : s === c ? D = 2 + (a - l) / h : a === c && (D = 4 + (l - s) / h), D = Math.min(D * 60, 360), D < 0 && (D += 360);
      const m = (f + c) / 2;
      return c === f ? p = 0 : m <= 0.5 ? p = h / (c + f) : p = h / (2 - c - f), [D, p * 100, m * 100];
    }, i.rgb.hsv = function(u) {
      let l, s, a, f, c;
      const h = u[0] / 255, D = u[1] / 255, p = u[2] / 255, m = Math.max(h, D, p), w = m - Math.min(h, D, p), _ = function(R) {
        return (m - R) / 6 / w + 1 / 2;
      };
      return w === 0 ? (f = 0, c = 0) : (c = w / m, l = _(h), s = _(D), a = _(p), h === m ? f = a - s : D === m ? f = 1 / 3 + l - a : p === m && (f = 2 / 3 + s - l), f < 0 ? f += 1 : f > 1 && (f -= 1)), [
        f * 360,
        c * 100,
        m * 100
      ];
    }, i.rgb.hwb = function(u) {
      const l = u[0], s = u[1];
      let a = u[2];
      const f = i.rgb.hsl(u)[0], c = 1 / 255 * Math.min(l, Math.min(s, a));
      return a = 1 - 1 / 255 * Math.max(l, Math.max(s, a)), [f, c * 100, a * 100];
    }, i.rgb.cmyk = function(u) {
      const l = u[0] / 255, s = u[1] / 255, a = u[2] / 255, f = Math.min(1 - l, 1 - s, 1 - a), c = (1 - l - f) / (1 - f) || 0, h = (1 - s - f) / (1 - f) || 0, D = (1 - a - f) / (1 - f) || 0;
      return [c * 100, h * 100, D * 100, f * 100];
    };
    function o(u, l) {
      return (u[0] - l[0]) ** 2 + (u[1] - l[1]) ** 2 + (u[2] - l[2]) ** 2;
    }
    i.rgb.keyword = function(u) {
      const l = n[u];
      if (l)
        return l;
      let s = 1 / 0, a;
      for (const f of Object.keys(r)) {
        const c = r[f], h = o(u, c);
        h < s && (s = h, a = f);
      }
      return a;
    }, i.keyword.rgb = function(u) {
      return r[u];
    }, i.rgb.xyz = function(u) {
      let l = u[0] / 255, s = u[1] / 255, a = u[2] / 255;
      l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92, s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92, a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92;
      const f = l * 0.4124 + s * 0.3576 + a * 0.1805, c = l * 0.2126 + s * 0.7152 + a * 0.0722, h = l * 0.0193 + s * 0.1192 + a * 0.9505;
      return [f * 100, c * 100, h * 100];
    }, i.rgb.lab = function(u) {
      const l = i.rgb.xyz(u);
      let s = l[0], a = l[1], f = l[2];
      s /= 95.047, a /= 100, f /= 108.883, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116, f = f > 8856e-6 ? f ** (1 / 3) : 7.787 * f + 16 / 116;
      const c = 116 * a - 16, h = 500 * (s - a), D = 200 * (a - f);
      return [c, h, D];
    }, i.hsl.rgb = function(u) {
      const l = u[0] / 360, s = u[1] / 100, a = u[2] / 100;
      let f, c, h;
      if (s === 0)
        return h = a * 255, [h, h, h];
      a < 0.5 ? f = a * (1 + s) : f = a + s - a * s;
      const D = 2 * a - f, p = [0, 0, 0];
      for (let m = 0; m < 3; m++)
        c = l + 1 / 3 * -(m - 1), c < 0 && c++, c > 1 && c--, 6 * c < 1 ? h = D + (f - D) * 6 * c : 2 * c < 1 ? h = f : 3 * c < 2 ? h = D + (f - D) * (2 / 3 - c) * 6 : h = D, p[m] = h * 255;
      return p;
    }, i.hsl.hsv = function(u) {
      const l = u[0];
      let s = u[1] / 100, a = u[2] / 100, f = s;
      const c = Math.max(a, 0.01);
      a *= 2, s *= a <= 1 ? a : 2 - a, f *= c <= 1 ? c : 2 - c;
      const h = (a + s) / 2, D = a === 0 ? 2 * f / (c + f) : 2 * s / (a + s);
      return [l, D * 100, h * 100];
    }, i.hsv.rgb = function(u) {
      const l = u[0] / 60, s = u[1] / 100;
      let a = u[2] / 100;
      const f = Math.floor(l) % 6, c = l - Math.floor(l), h = 255 * a * (1 - s), D = 255 * a * (1 - s * c), p = 255 * a * (1 - s * (1 - c));
      switch (a *= 255, f) {
        case 0:
          return [a, p, h];
        case 1:
          return [D, a, h];
        case 2:
          return [h, a, p];
        case 3:
          return [h, D, a];
        case 4:
          return [p, h, a];
        case 5:
          return [a, h, D];
      }
    }, i.hsv.hsl = function(u) {
      const l = u[0], s = u[1] / 100, a = u[2] / 100, f = Math.max(a, 0.01);
      let c, h;
      h = (2 - s) * a;
      const D = (2 - s) * f;
      return c = s * f, c /= D <= 1 ? D : 2 - D, c = c || 0, h /= 2, [l, c * 100, h * 100];
    }, i.hwb.rgb = function(u) {
      const l = u[0] / 360;
      let s = u[1] / 100, a = u[2] / 100;
      const f = s + a;
      let c;
      f > 1 && (s /= f, a /= f);
      const h = Math.floor(6 * l), D = 1 - a;
      c = 6 * l - h, h & 1 && (c = 1 - c);
      const p = s + c * (D - s);
      let m, w, _;
      switch (h) {
        default:
        case 6:
        case 0:
          m = D, w = p, _ = s;
          break;
        case 1:
          m = p, w = D, _ = s;
          break;
        case 2:
          m = s, w = D, _ = p;
          break;
        case 3:
          m = s, w = p, _ = D;
          break;
        case 4:
          m = p, w = s, _ = D;
          break;
        case 5:
          m = D, w = s, _ = p;
          break;
      }
      return [m * 255, w * 255, _ * 255];
    }, i.cmyk.rgb = function(u) {
      const l = u[0] / 100, s = u[1] / 100, a = u[2] / 100, f = u[3] / 100, c = 1 - Math.min(1, l * (1 - f) + f), h = 1 - Math.min(1, s * (1 - f) + f), D = 1 - Math.min(1, a * (1 - f) + f);
      return [c * 255, h * 255, D * 255];
    }, i.xyz.rgb = function(u) {
      const l = u[0] / 100, s = u[1] / 100, a = u[2] / 100;
      let f, c, h;
      return f = l * 3.2406 + s * -1.5372 + a * -0.4986, c = l * -0.9689 + s * 1.8758 + a * 0.0415, h = l * 0.0557 + s * -0.204 + a * 1.057, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : f * 12.92, c = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92, h = h > 31308e-7 ? 1.055 * h ** (1 / 2.4) - 0.055 : h * 12.92, f = Math.min(Math.max(0, f), 1), c = Math.min(Math.max(0, c), 1), h = Math.min(Math.max(0, h), 1), [f * 255, c * 255, h * 255];
    }, i.xyz.lab = function(u) {
      let l = u[0], s = u[1], a = u[2];
      l /= 95.047, s /= 100, a /= 108.883, l = l > 8856e-6 ? l ** (1 / 3) : 7.787 * l + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116;
      const f = 116 * s - 16, c = 500 * (l - s), h = 200 * (s - a);
      return [f, c, h];
    }, i.lab.xyz = function(u) {
      const l = u[0], s = u[1], a = u[2];
      let f, c, h;
      c = (l + 16) / 116, f = s / 500 + c, h = c - a / 200;
      const D = c ** 3, p = f ** 3, m = h ** 3;
      return c = D > 8856e-6 ? D : (c - 16 / 116) / 7.787, f = p > 8856e-6 ? p : (f - 16 / 116) / 7.787, h = m > 8856e-6 ? m : (h - 16 / 116) / 7.787, f *= 95.047, c *= 100, h *= 108.883, [f, c, h];
    }, i.lab.lch = function(u) {
      const l = u[0], s = u[1], a = u[2];
      let f;
      f = Math.atan2(a, s) * 360 / 2 / Math.PI, f < 0 && (f += 360);
      const h = Math.sqrt(s * s + a * a);
      return [l, h, f];
    }, i.lch.lab = function(u) {
      const l = u[0], s = u[1], f = u[2] / 360 * 2 * Math.PI, c = s * Math.cos(f), h = s * Math.sin(f);
      return [l, c, h];
    }, i.rgb.ansi16 = function(u, l = null) {
      const [s, a, f] = u;
      let c = l === null ? i.rgb.hsv(u)[2] : l;
      if (c = Math.round(c / 50), c === 0)
        return 30;
      let h = 30 + (Math.round(f / 255) << 2 | Math.round(a / 255) << 1 | Math.round(s / 255));
      return c === 2 && (h += 60), h;
    }, i.hsv.ansi16 = function(u) {
      return i.rgb.ansi16(i.hsv.rgb(u), u[2]);
    }, i.rgb.ansi256 = function(u) {
      const l = u[0], s = u[1], a = u[2];
      return l === s && s === a ? l < 8 ? 16 : l > 248 ? 231 : Math.round((l - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(l / 255 * 5) + 6 * Math.round(s / 255 * 5) + Math.round(a / 255 * 5);
    }, i.ansi16.rgb = function(u) {
      let l = u % 10;
      if (l === 0 || l === 7)
        return u > 50 && (l += 3.5), l = l / 10.5 * 255, [l, l, l];
      const s = (~~(u > 50) + 1) * 0.5, a = (l & 1) * s * 255, f = (l >> 1 & 1) * s * 255, c = (l >> 2 & 1) * s * 255;
      return [a, f, c];
    }, i.ansi256.rgb = function(u) {
      if (u >= 232) {
        const c = (u - 232) * 10 + 8;
        return [c, c, c];
      }
      u -= 16;
      let l;
      const s = Math.floor(u / 36) / 5 * 255, a = Math.floor((l = u % 36) / 6) / 5 * 255, f = l % 6 / 5 * 255;
      return [s, a, f];
    }, i.rgb.hex = function(u) {
      const s = (((Math.round(u[0]) & 255) << 16) + ((Math.round(u[1]) & 255) << 8) + (Math.round(u[2]) & 255)).toString(16).toUpperCase();
      return "000000".substring(s.length) + s;
    }, i.hex.rgb = function(u) {
      const l = u.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!l)
        return [0, 0, 0];
      let s = l[0];
      l[0].length === 3 && (s = s.split("").map((D) => D + D).join(""));
      const a = parseInt(s, 16), f = a >> 16 & 255, c = a >> 8 & 255, h = a & 255;
      return [f, c, h];
    }, i.rgb.hcg = function(u) {
      const l = u[0] / 255, s = u[1] / 255, a = u[2] / 255, f = Math.max(Math.max(l, s), a), c = Math.min(Math.min(l, s), a), h = f - c;
      let D, p;
      return h < 1 ? D = c / (1 - h) : D = 0, h <= 0 ? p = 0 : f === l ? p = (s - a) / h % 6 : f === s ? p = 2 + (a - l) / h : p = 4 + (l - s) / h, p /= 6, p %= 1, [p * 360, h * 100, D * 100];
    }, i.hsl.hcg = function(u) {
      const l = u[1] / 100, s = u[2] / 100, a = s < 0.5 ? 2 * l * s : 2 * l * (1 - s);
      let f = 0;
      return a < 1 && (f = (s - 0.5 * a) / (1 - a)), [u[0], a * 100, f * 100];
    }, i.hsv.hcg = function(u) {
      const l = u[1] / 100, s = u[2] / 100, a = l * s;
      let f = 0;
      return a < 1 && (f = (s - a) / (1 - a)), [u[0], a * 100, f * 100];
    }, i.hcg.rgb = function(u) {
      const l = u[0] / 360, s = u[1] / 100, a = u[2] / 100;
      if (s === 0)
        return [a * 255, a * 255, a * 255];
      const f = [0, 0, 0], c = l % 1 * 6, h = c % 1, D = 1 - h;
      let p = 0;
      switch (Math.floor(c)) {
        case 0:
          f[0] = 1, f[1] = h, f[2] = 0;
          break;
        case 1:
          f[0] = D, f[1] = 1, f[2] = 0;
          break;
        case 2:
          f[0] = 0, f[1] = 1, f[2] = h;
          break;
        case 3:
          f[0] = 0, f[1] = D, f[2] = 1;
          break;
        case 4:
          f[0] = h, f[1] = 0, f[2] = 1;
          break;
        default:
          f[0] = 1, f[1] = 0, f[2] = D;
      }
      return p = (1 - s) * a, [
        (s * f[0] + p) * 255,
        (s * f[1] + p) * 255,
        (s * f[2] + p) * 255
      ];
    }, i.hcg.hsv = function(u) {
      const l = u[1] / 100, s = u[2] / 100, a = l + s * (1 - l);
      let f = 0;
      return a > 0 && (f = l / a), [u[0], f * 100, a * 100];
    }, i.hcg.hsl = function(u) {
      const l = u[1] / 100, a = u[2] / 100 * (1 - l) + 0.5 * l;
      let f = 0;
      return a > 0 && a < 0.5 ? f = l / (2 * a) : a >= 0.5 && a < 1 && (f = l / (2 * (1 - a))), [u[0], f * 100, a * 100];
    }, i.hcg.hwb = function(u) {
      const l = u[1] / 100, s = u[2] / 100, a = l + s * (1 - l);
      return [u[0], (a - l) * 100, (1 - a) * 100];
    }, i.hwb.hcg = function(u) {
      const l = u[1] / 100, a = 1 - u[2] / 100, f = a - l;
      let c = 0;
      return f < 1 && (c = (a - f) / (1 - f)), [u[0], f * 100, c * 100];
    }, i.apple.rgb = function(u) {
      return [u[0] / 65535 * 255, u[1] / 65535 * 255, u[2] / 65535 * 255];
    }, i.rgb.apple = function(u) {
      return [u[0] / 255 * 65535, u[1] / 255 * 65535, u[2] / 255 * 65535];
    }, i.gray.rgb = function(u) {
      return [u[0] / 100 * 255, u[0] / 100 * 255, u[0] / 100 * 255];
    }, i.gray.hsl = function(u) {
      return [0, 0, u[0]];
    }, i.gray.hsv = i.gray.hsl, i.gray.hwb = function(u) {
      return [0, 100, u[0]];
    }, i.gray.cmyk = function(u) {
      return [0, 0, 0, u[0]];
    }, i.gray.lab = function(u) {
      return [u[0], 0, 0];
    }, i.gray.hex = function(u) {
      const l = Math.round(u[0] / 100 * 255) & 255, a = ((l << 16) + (l << 8) + l).toString(16).toUpperCase();
      return "000000".substring(a.length) + a;
    }, i.rgb.gray = function(u) {
      return [(u[0] + u[1] + u[2]) / 3 / 255 * 100];
    };
  }
}), hs = x({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(t, e) {
    v(), E();
    var r = vi();
    function n() {
      const l = {}, s = Object.keys(r);
      for (let a = s.length, f = 0; f < a; f++)
        l[s[f]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      return l;
    }
    function i(l) {
      const s = n(), a = [l];
      for (s[l].distance = 0; a.length; ) {
        const f = a.pop(), c = Object.keys(r[f]);
        for (let h = c.length, D = 0; D < h; D++) {
          const p = c[D], m = s[p];
          m.distance === -1 && (m.distance = s[f].distance + 1, m.parent = f, a.unshift(p));
        }
      }
      return s;
    }
    function o(l, s) {
      return function(a) {
        return s(l(a));
      };
    }
    function u(l, s) {
      const a = [s[l].parent, l];
      let f = r[s[l].parent][l], c = s[l].parent;
      for (; s[c].parent; )
        a.unshift(s[c].parent), f = o(r[s[c].parent][c], f), c = s[c].parent;
      return f.conversion = a, f;
    }
    e.exports = function(l) {
      const s = i(l), a = {}, f = Object.keys(s);
      for (let c = f.length, h = 0; h < c; h++) {
        const D = f[h];
        s[D].parent !== null && (a[D] = u(D, s));
      }
      return a;
    };
  }
}), Ds = x({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(t, e) {
    v(), E();
    var r = vi(), n = hs(), i = {}, o = Object.keys(r);
    function u(s) {
      const a = function(...f) {
        const c = f[0];
        return c == null ? c : (c.length > 1 && (f = c), s(f));
      };
      return "conversion" in s && (a.conversion = s.conversion), a;
    }
    function l(s) {
      const a = function(...f) {
        const c = f[0];
        if (c == null)
          return c;
        c.length > 1 && (f = c);
        const h = s(f);
        if (typeof h == "object")
          for (let D = h.length, p = 0; p < D; p++)
            h[p] = Math.round(h[p]);
        return h;
      };
      return "conversion" in s && (a.conversion = s.conversion), a;
    }
    o.forEach((s) => {
      i[s] = {}, Object.defineProperty(i[s], "channels", { value: r[s].channels }), Object.defineProperty(i[s], "labels", { value: r[s].labels });
      const a = n(s);
      Object.keys(a).forEach((c) => {
        const h = a[c];
        i[s][c] = l(h), i[s][c].raw = u(h);
      });
    }), e.exports = i;
  }
}), Ei = x({
  "node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js"(t, e) {
    v(), E();
    var r = (c, h) => (...D) => `\x1B[${c(...D) + h}m`, n = (c, h) => (...D) => {
      const p = c(...D);
      return `\x1B[${38 + h};5;${p}m`;
    }, i = (c, h) => (...D) => {
      const p = c(...D);
      return `\x1B[${38 + h};2;${p[0]};${p[1]};${p[2]}m`;
    }, o = (c) => c, u = (c, h, D) => [c, h, D], l = (c, h, D) => {
      Object.defineProperty(c, h, {
        get: () => {
          const p = D();
          return Object.defineProperty(c, h, {
            value: p,
            enumerable: !0,
            configurable: !0
          }), p;
        },
        enumerable: !0,
        configurable: !0
      });
    }, s, a = (c, h, D, p) => {
      s === void 0 && (s = Ds());
      const m = p ? 10 : 0, w = {};
      for (const [_, R] of Object.entries(s)) {
        const C = _ === "ansi16" ? "ansi" : _;
        _ === h ? w[C] = c(D, m) : typeof R == "object" && (w[C] = c(R[h], m));
      }
      return w;
    };
    function f() {
      const c = /* @__PURE__ */ new Map(), h = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      h.color.gray = h.color.blackBright, h.bgColor.bgGray = h.bgColor.bgBlackBright, h.color.grey = h.color.blackBright, h.bgColor.bgGrey = h.bgColor.bgBlackBright;
      for (const [D, p] of Object.entries(h)) {
        for (const [m, w] of Object.entries(p))
          h[m] = {
            open: `\x1B[${w[0]}m`,
            close: `\x1B[${w[1]}m`
          }, p[m] = h[m], c.set(w[0], w[1]);
        Object.defineProperty(h, D, {
          value: p,
          enumerable: !1
        });
      }
      return Object.defineProperty(h, "codes", {
        value: c,
        enumerable: !1
      }), h.color.close = "\x1B[39m", h.bgColor.close = "\x1B[49m", l(h.color, "ansi", () => a(r, "ansi16", o, !1)), l(h.color, "ansi256", () => a(n, "ansi256", o, !1)), l(h.color, "ansi16m", () => a(i, "rgb", u, !1)), l(h.bgColor, "ansi", () => a(r, "ansi16", o, !0)), l(h.bgColor, "ansi256", () => a(n, "ansi256", o, !0)), l(h.bgColor, "ansi16m", () => a(i, "rgb", u, !0)), h;
    }
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: f
    });
  }
}), ps = x({
  "node_modules/.pnpm/wrap-ansi@6.2.0/node_modules/wrap-ansi/index.js"(t, e) {
    v(), E();
    var r = _i(), n = Kr(), i = Ei(), o = /* @__PURE__ */ new Set([
      "\x1B",
      ""
    ]), u = 39, l = (h) => `${o.values().next().value}[${h}m`, s = (h) => h.split(" ").map((D) => r(D)), a = (h, D, p) => {
      const m = [...D];
      let w = !1, _ = r(n(h[h.length - 1]));
      for (const [R, C] of m.entries()) {
        const T = r(C);
        if (_ + T <= p ? h[h.length - 1] += C : (h.push(C), _ = 0), o.has(C))
          w = !0;
        else if (w && C === "m") {
          w = !1;
          continue;
        }
        w || (_ += T, _ === p && R < m.length - 1 && (h.push(""), _ = 0));
      }
      !_ && h[h.length - 1].length > 0 && h.length > 1 && (h[h.length - 2] += h.pop());
    }, f = (h) => {
      const D = h.split(" ");
      let p = D.length;
      for (; p > 0 && !(r(D[p - 1]) > 0); )
        p--;
      return p === D.length ? h : D.slice(0, p).join(" ") + D.slice(p).join("");
    }, c = (h, D, p = {}) => {
      if (p.trim !== !1 && h.trim() === "")
        return "";
      let m = "", w = "", _;
      const R = s(h);
      let C = [""];
      for (const [T, O] of h.split(" ").entries()) {
        p.trim !== !1 && (C[C.length - 1] = C[C.length - 1].trimLeft());
        let y = r(C[C.length - 1]);
        if (T !== 0 && (y >= D && (p.wordWrap === !1 || p.trim === !1) && (C.push(""), y = 0), (y > 0 || p.trim === !1) && (C[C.length - 1] += " ", y++)), p.hard && R[T] > D) {
          const F = D - y, b = 1 + Math.floor((R[T] - F - 1) / D);
          Math.floor((R[T] - 1) / D) < b && C.push(""), a(C, O, D);
          continue;
        }
        if (y + R[T] > D && y > 0 && R[T] > 0) {
          if (p.wordWrap === !1 && y < D) {
            a(C, O, D);
            continue;
          }
          C.push("");
        }
        if (y + R[T] > D && p.wordWrap === !1) {
          a(C, O, D);
          continue;
        }
        C[C.length - 1] += O;
      }
      p.trim !== !1 && (C = C.map(f)), m = C.join(`
`);
      for (const [T, O] of [...m].entries()) {
        if (w += O, o.has(O)) {
          const F = parseFloat(/\d[^m]*/.exec(m.slice(T, T + 4)));
          _ = F === u ? null : F;
        }
        const y = i.codes.get(Number(_));
        _ && y && (m[T + 1] === `
` ? w += l(y) : O === `
` && (w += l(_)));
      }
      return w;
    };
    e.exports = (h, D, p) => String(h).normalize().replace(/\r\n/g, `
`).split(`
`).map((m) => c(m, D, p)).join(`
`);
  }
}), ds = x({
  "node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/browser.js"(t, e) {
    v(), E(), e.exports = {
      stdout: !1,
      stderr: !1
    };
  }
}), gs = x({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/util.js"(t, e) {
    v(), E();
    var r = (i, o, u) => {
      let l = i.indexOf(o);
      if (l === -1)
        return i;
      const s = o.length;
      let a = 0, f = "";
      do
        f += i.substr(a, l - a) + o + u, a = l + s, l = i.indexOf(o, a);
      while (l !== -1);
      return f += i.substr(a), f;
    }, n = (i, o, u, l) => {
      let s = 0, a = "";
      do {
        const f = i[l - 1] === "\r";
        a += i.substr(s, (f ? l - 1 : l) - s) + o + (f ? `\r
` : `
`) + u, s = l + 1, l = i.indexOf(`
`, s);
      } while (l !== -1);
      return a += i.substr(s), a;
    };
    e.exports = {
      stringReplaceAll: r,
      stringEncaseCRLFWithFirstIndex: n
    };
  }
}), ms = x({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/templates.js"(t, e) {
    v(), E();
    var r = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, n = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, i = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, o = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, u = /* @__PURE__ */ new Map([
      ["n", `
`],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function l(c) {
      const h = c[0] === "u", D = c[1] === "{";
      return h && !D && c.length === 5 || c[0] === "x" && c.length === 3 ? String.fromCharCode(parseInt(c.slice(1), 16)) : h && D ? String.fromCodePoint(parseInt(c.slice(2, -1), 16)) : u.get(c) || c;
    }
    function s(c, h) {
      const D = [], p = h.trim().split(/\s*,\s*/g);
      let m;
      for (const w of p) {
        const _ = Number(w);
        if (!Number.isNaN(_))
          D.push(_);
        else if (m = w.match(i))
          D.push(m[2].replace(o, (R, C, T) => C ? l(C) : T));
        else
          throw new Error(`Invalid Chalk template style argument: ${w} (in style '${c}')`);
      }
      return D;
    }
    function a(c) {
      n.lastIndex = 0;
      const h = [];
      let D;
      for (; (D = n.exec(c)) !== null; ) {
        const p = D[1];
        if (D[2]) {
          const m = s(p, D[2]);
          h.push([p].concat(m));
        } else
          h.push([p]);
      }
      return h;
    }
    function f(c, h) {
      const D = {};
      for (const m of h)
        for (const w of m.styles)
          D[w[0]] = m.inverse ? null : w.slice(1);
      let p = c;
      for (const [m, w] of Object.entries(D))
        if (Array.isArray(w)) {
          if (!(m in p))
            throw new Error(`Unknown Chalk style: ${m}`);
          p = w.length > 0 ? p[m](...w) : p[m];
        }
      return p;
    }
    e.exports = (c, h) => {
      const D = [], p = [];
      let m = [];
      if (h.replace(r, (w, _, R, C, T, O) => {
        if (_)
          m.push(l(_));
        else if (C) {
          const y = m.join("");
          m = [], p.push(D.length === 0 ? y : f(c, D)(y)), D.push({ inverse: R, styles: a(C) });
        } else if (T) {
          if (D.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          p.push(f(c, D)(m.join(""))), m = [], D.pop();
        } else
          m.push(O);
      }), p.push(m.join("")), D.length > 0) {
        const w = `Chalk template literal is missing ${D.length} closing bracket${D.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(w);
      }
      return p.join("");
    };
  }
}), hr = x({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js"(t, e) {
    v(), E();
    var r = Ei(), { stdout: n, stderr: i } = ds(), {
      stringReplaceAll: o,
      stringEncaseCRLFWithFirstIndex: u
    } = gs(), { isArray: l } = Array, s = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ], a = /* @__PURE__ */ Object.create(null), f = (y, F = {}) => {
      if (F.level && !(Number.isInteger(F.level) && F.level >= 0 && F.level <= 3))
        throw new Error("The `level` option should be an integer from 0 to 3");
      const b = n ? n.level : 0;
      y.level = F.level === void 0 ? b : F.level;
    }, c = class {
      constructor(y) {
        return h(y);
      }
    }, h = (y) => {
      const F = {};
      return f(F, y), F.template = (...b) => T(F.template, ...b), Object.setPrototypeOf(F, D.prototype), Object.setPrototypeOf(F.template, F), F.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      }, F.template.Instance = c, F.template;
    };
    function D(y) {
      return h(y);
    }
    for (const [y, F] of Object.entries(r))
      a[y] = {
        get() {
          const b = _(this, w(F.open, F.close, this._styler), this._isEmpty);
          return Object.defineProperty(this, y, { value: b }), b;
        }
      };
    a.visible = {
      get() {
        const y = _(this, this._styler, !0);
        return Object.defineProperty(this, "visible", { value: y }), y;
      }
    };
    var p = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const y of p)
      a[y] = {
        get() {
          const { level: F } = this;
          return function(...b) {
            const k = w(r.color[s[F]][y](...b), r.color.close, this._styler);
            return _(this, k, this._isEmpty);
          };
        }
      };
    for (const y of p) {
      const F = "bg" + y[0].toUpperCase() + y.slice(1);
      a[F] = {
        get() {
          const { level: b } = this;
          return function(...k) {
            const M = w(r.bgColor[s[b]][y](...k), r.bgColor.close, this._styler);
            return _(this, M, this._isEmpty);
          };
        }
      };
    }
    var m = Object.defineProperties(() => {
    }, {
      ...a,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(y) {
          this._generator.level = y;
        }
      }
    }), w = (y, F, b) => {
      let k, M;
      return b === void 0 ? (k = y, M = F) : (k = b.openAll + y, M = F + b.closeAll), {
        open: y,
        close: F,
        openAll: k,
        closeAll: M,
        parent: b
      };
    }, _ = (y, F, b) => {
      const k = (...M) => l(M[0]) && l(M[0].raw) ? R(k, T(k, ...M)) : R(k, M.length === 1 ? "" + M[0] : M.join(" "));
      return Object.setPrototypeOf(k, m), k._generator = y, k._styler = F, k._isEmpty = b, k;
    }, R = (y, F) => {
      if (y.level <= 0 || !F)
        return y._isEmpty ? "" : F;
      let b = y._styler;
      if (b === void 0)
        return F;
      const { openAll: k, closeAll: M } = b;
      if (F.indexOf("\x1B") !== -1)
        for (; b !== void 0; )
          F = o(F, b.close, b.open), b = b.parent;
      const De = F.indexOf(`
`);
      return De !== -1 && (F = u(F, M, k, De)), k + F + M;
    }, C, T = (y, ...F) => {
      const [b] = F;
      if (!l(b) || !l(b.raw))
        return F.join(" ");
      const k = F.slice(1), M = [b.raw[0]];
      for (let De = 1; De < b.length; De++)
        M.push(
          String(k[De - 1]).replace(/[{}\\]/g, "\\$&"),
          String(b.raw[De])
        );
      return C === void 0 && (C = ms()), C(y, M.join(""));
    };
    Object.defineProperties(D.prototype, a);
    var O = D();
    O.supportsColor = n, O.stderr = D({ level: i ? i.level : 0 }), O.stderr.supportsColor = i, e.exports = O;
  }
}), ws = x({
  "node_modules/.pnpm/cli-spinners@2.9.0/node_modules/cli-spinners/spinners.json"(t, e) {
    e.exports = {
      dots: {
        interval: 80,
        frames: [
          "⠋",
          "⠙",
          "⠹",
          "⠸",
          "⠼",
          "⠴",
          "⠦",
          "⠧",
          "⠇",
          "⠏"
        ]
      },
      dots2: {
        interval: 80,
        frames: [
          "⣾",
          "⣽",
          "⣻",
          "⢿",
          "⡿",
          "⣟",
          "⣯",
          "⣷"
        ]
      },
      dots3: {
        interval: 80,
        frames: [
          "⠋",
          "⠙",
          "⠚",
          "⠞",
          "⠖",
          "⠦",
          "⠴",
          "⠲",
          "⠳",
          "⠓"
        ]
      },
      dots4: {
        interval: 80,
        frames: [
          "⠄",
          "⠆",
          "⠇",
          "⠋",
          "⠙",
          "⠸",
          "⠰",
          "⠠",
          "⠰",
          "⠸",
          "⠙",
          "⠋",
          "⠇",
          "⠆"
        ]
      },
      dots5: {
        interval: 80,
        frames: [
          "⠋",
          "⠙",
          "⠚",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠲",
          "⠴",
          "⠦",
          "⠖",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠓",
          "⠋"
        ]
      },
      dots6: {
        interval: 80,
        frames: [
          "⠁",
          "⠉",
          "⠙",
          "⠚",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠲",
          "⠴",
          "⠤",
          "⠄",
          "⠄",
          "⠤",
          "⠴",
          "⠲",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠚",
          "⠙",
          "⠉",
          "⠁"
        ]
      },
      dots7: {
        interval: 80,
        frames: [
          "⠈",
          "⠉",
          "⠋",
          "⠓",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠖",
          "⠦",
          "⠤",
          "⠠",
          "⠠",
          "⠤",
          "⠦",
          "⠖",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠓",
          "⠋",
          "⠉",
          "⠈"
        ]
      },
      dots8: {
        interval: 80,
        frames: [
          "⠁",
          "⠁",
          "⠉",
          "⠙",
          "⠚",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠲",
          "⠴",
          "⠤",
          "⠄",
          "⠄",
          "⠤",
          "⠠",
          "⠠",
          "⠤",
          "⠦",
          "⠖",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠓",
          "⠋",
          "⠉",
          "⠈",
          "⠈"
        ]
      },
      dots9: {
        interval: 80,
        frames: [
          "⢹",
          "⢺",
          "⢼",
          "⣸",
          "⣇",
          "⡧",
          "⡗",
          "⡏"
        ]
      },
      dots10: {
        interval: 80,
        frames: [
          "⢄",
          "⢂",
          "⢁",
          "⡁",
          "⡈",
          "⡐",
          "⡠"
        ]
      },
      dots11: {
        interval: 100,
        frames: [
          "⠁",
          "⠂",
          "⠄",
          "⡀",
          "⢀",
          "⠠",
          "⠐",
          "⠈"
        ]
      },
      dots12: {
        interval: 80,
        frames: [
          "⢀⠀",
          "⡀⠀",
          "⠄⠀",
          "⢂⠀",
          "⡂⠀",
          "⠅⠀",
          "⢃⠀",
          "⡃⠀",
          "⠍⠀",
          "⢋⠀",
          "⡋⠀",
          "⠍⠁",
          "⢋⠁",
          "⡋⠁",
          "⠍⠉",
          "⠋⠉",
          "⠋⠉",
          "⠉⠙",
          "⠉⠙",
          "⠉⠩",
          "⠈⢙",
          "⠈⡙",
          "⢈⠩",
          "⡀⢙",
          "⠄⡙",
          "⢂⠩",
          "⡂⢘",
          "⠅⡘",
          "⢃⠨",
          "⡃⢐",
          "⠍⡐",
          "⢋⠠",
          "⡋⢀",
          "⠍⡁",
          "⢋⠁",
          "⡋⠁",
          "⠍⠉",
          "⠋⠉",
          "⠋⠉",
          "⠉⠙",
          "⠉⠙",
          "⠉⠩",
          "⠈⢙",
          "⠈⡙",
          "⠈⠩",
          "⠀⢙",
          "⠀⡙",
          "⠀⠩",
          "⠀⢘",
          "⠀⡘",
          "⠀⠨",
          "⠀⢐",
          "⠀⡐",
          "⠀⠠",
          "⠀⢀",
          "⠀⡀"
        ]
      },
      dots13: {
        interval: 80,
        frames: [
          "⣼",
          "⣹",
          "⢻",
          "⠿",
          "⡟",
          "⣏",
          "⣧",
          "⣶"
        ]
      },
      dots8Bit: {
        interval: 80,
        frames: [
          "⠀",
          "⠁",
          "⠂",
          "⠃",
          "⠄",
          "⠅",
          "⠆",
          "⠇",
          "⡀",
          "⡁",
          "⡂",
          "⡃",
          "⡄",
          "⡅",
          "⡆",
          "⡇",
          "⠈",
          "⠉",
          "⠊",
          "⠋",
          "⠌",
          "⠍",
          "⠎",
          "⠏",
          "⡈",
          "⡉",
          "⡊",
          "⡋",
          "⡌",
          "⡍",
          "⡎",
          "⡏",
          "⠐",
          "⠑",
          "⠒",
          "⠓",
          "⠔",
          "⠕",
          "⠖",
          "⠗",
          "⡐",
          "⡑",
          "⡒",
          "⡓",
          "⡔",
          "⡕",
          "⡖",
          "⡗",
          "⠘",
          "⠙",
          "⠚",
          "⠛",
          "⠜",
          "⠝",
          "⠞",
          "⠟",
          "⡘",
          "⡙",
          "⡚",
          "⡛",
          "⡜",
          "⡝",
          "⡞",
          "⡟",
          "⠠",
          "⠡",
          "⠢",
          "⠣",
          "⠤",
          "⠥",
          "⠦",
          "⠧",
          "⡠",
          "⡡",
          "⡢",
          "⡣",
          "⡤",
          "⡥",
          "⡦",
          "⡧",
          "⠨",
          "⠩",
          "⠪",
          "⠫",
          "⠬",
          "⠭",
          "⠮",
          "⠯",
          "⡨",
          "⡩",
          "⡪",
          "⡫",
          "⡬",
          "⡭",
          "⡮",
          "⡯",
          "⠰",
          "⠱",
          "⠲",
          "⠳",
          "⠴",
          "⠵",
          "⠶",
          "⠷",
          "⡰",
          "⡱",
          "⡲",
          "⡳",
          "⡴",
          "⡵",
          "⡶",
          "⡷",
          "⠸",
          "⠹",
          "⠺",
          "⠻",
          "⠼",
          "⠽",
          "⠾",
          "⠿",
          "⡸",
          "⡹",
          "⡺",
          "⡻",
          "⡼",
          "⡽",
          "⡾",
          "⡿",
          "⢀",
          "⢁",
          "⢂",
          "⢃",
          "⢄",
          "⢅",
          "⢆",
          "⢇",
          "⣀",
          "⣁",
          "⣂",
          "⣃",
          "⣄",
          "⣅",
          "⣆",
          "⣇",
          "⢈",
          "⢉",
          "⢊",
          "⢋",
          "⢌",
          "⢍",
          "⢎",
          "⢏",
          "⣈",
          "⣉",
          "⣊",
          "⣋",
          "⣌",
          "⣍",
          "⣎",
          "⣏",
          "⢐",
          "⢑",
          "⢒",
          "⢓",
          "⢔",
          "⢕",
          "⢖",
          "⢗",
          "⣐",
          "⣑",
          "⣒",
          "⣓",
          "⣔",
          "⣕",
          "⣖",
          "⣗",
          "⢘",
          "⢙",
          "⢚",
          "⢛",
          "⢜",
          "⢝",
          "⢞",
          "⢟",
          "⣘",
          "⣙",
          "⣚",
          "⣛",
          "⣜",
          "⣝",
          "⣞",
          "⣟",
          "⢠",
          "⢡",
          "⢢",
          "⢣",
          "⢤",
          "⢥",
          "⢦",
          "⢧",
          "⣠",
          "⣡",
          "⣢",
          "⣣",
          "⣤",
          "⣥",
          "⣦",
          "⣧",
          "⢨",
          "⢩",
          "⢪",
          "⢫",
          "⢬",
          "⢭",
          "⢮",
          "⢯",
          "⣨",
          "⣩",
          "⣪",
          "⣫",
          "⣬",
          "⣭",
          "⣮",
          "⣯",
          "⢰",
          "⢱",
          "⢲",
          "⢳",
          "⢴",
          "⢵",
          "⢶",
          "⢷",
          "⣰",
          "⣱",
          "⣲",
          "⣳",
          "⣴",
          "⣵",
          "⣶",
          "⣷",
          "⢸",
          "⢹",
          "⢺",
          "⢻",
          "⢼",
          "⢽",
          "⢾",
          "⢿",
          "⣸",
          "⣹",
          "⣺",
          "⣻",
          "⣼",
          "⣽",
          "⣾",
          "⣿"
        ]
      },
      sand: {
        interval: 80,
        frames: [
          "⠁",
          "⠂",
          "⠄",
          "⡀",
          "⡈",
          "⡐",
          "⡠",
          "⣀",
          "⣁",
          "⣂",
          "⣄",
          "⣌",
          "⣔",
          "⣤",
          "⣥",
          "⣦",
          "⣮",
          "⣶",
          "⣷",
          "⣿",
          "⡿",
          "⠿",
          "⢟",
          "⠟",
          "⡛",
          "⠛",
          "⠫",
          "⢋",
          "⠋",
          "⠍",
          "⡉",
          "⠉",
          "⠑",
          "⠡",
          "⢁"
        ]
      },
      line: {
        interval: 130,
        frames: [
          "-",
          "\\",
          "|",
          "/"
        ]
      },
      line2: {
        interval: 100,
        frames: [
          "⠂",
          "-",
          "–",
          "—",
          "–",
          "-"
        ]
      },
      pipe: {
        interval: 100,
        frames: [
          "┤",
          "┘",
          "┴",
          "└",
          "├",
          "┌",
          "┬",
          "┐"
        ]
      },
      simpleDots: {
        interval: 400,
        frames: [
          ".  ",
          ".. ",
          "...",
          "   "
        ]
      },
      simpleDotsScrolling: {
        interval: 200,
        frames: [
          ".  ",
          ".. ",
          "...",
          " ..",
          "  .",
          "   "
        ]
      },
      star: {
        interval: 70,
        frames: [
          "✶",
          "✸",
          "✹",
          "✺",
          "✹",
          "✷"
        ]
      },
      star2: {
        interval: 80,
        frames: [
          "+",
          "x",
          "*"
        ]
      },
      flip: {
        interval: 70,
        frames: [
          "_",
          "_",
          "_",
          "-",
          "`",
          "`",
          "'",
          "´",
          "-",
          "_",
          "_",
          "_"
        ]
      },
      hamburger: {
        interval: 100,
        frames: [
          "☱",
          "☲",
          "☴"
        ]
      },
      growVertical: {
        interval: 120,
        frames: [
          "▁",
          "▃",
          "▄",
          "▅",
          "▆",
          "▇",
          "▆",
          "▅",
          "▄",
          "▃"
        ]
      },
      growHorizontal: {
        interval: 120,
        frames: [
          "▏",
          "▎",
          "▍",
          "▌",
          "▋",
          "▊",
          "▉",
          "▊",
          "▋",
          "▌",
          "▍",
          "▎"
        ]
      },
      balloon: {
        interval: 140,
        frames: [
          " ",
          ".",
          "o",
          "O",
          "@",
          "*",
          " "
        ]
      },
      balloon2: {
        interval: 120,
        frames: [
          ".",
          "o",
          "O",
          "°",
          "O",
          "o",
          "."
        ]
      },
      noise: {
        interval: 100,
        frames: [
          "▓",
          "▒",
          "░"
        ]
      },
      bounce: {
        interval: 120,
        frames: [
          "⠁",
          "⠂",
          "⠄",
          "⠂"
        ]
      },
      boxBounce: {
        interval: 120,
        frames: [
          "▖",
          "▘",
          "▝",
          "▗"
        ]
      },
      boxBounce2: {
        interval: 100,
        frames: [
          "▌",
          "▀",
          "▐",
          "▄"
        ]
      },
      triangle: {
        interval: 50,
        frames: [
          "◢",
          "◣",
          "◤",
          "◥"
        ]
      },
      binary: {
        interval: 80,
        frames: [
          "010010",
          "001100",
          "100101",
          "111010",
          "111101",
          "010111",
          "101011",
          "111000",
          "110011",
          "110101"
        ]
      },
      arc: {
        interval: 100,
        frames: [
          "◜",
          "◠",
          "◝",
          "◞",
          "◡",
          "◟"
        ]
      },
      circle: {
        interval: 120,
        frames: [
          "◡",
          "⊙",
          "◠"
        ]
      },
      squareCorners: {
        interval: 180,
        frames: [
          "◰",
          "◳",
          "◲",
          "◱"
        ]
      },
      circleQuarters: {
        interval: 120,
        frames: [
          "◴",
          "◷",
          "◶",
          "◵"
        ]
      },
      circleHalves: {
        interval: 50,
        frames: [
          "◐",
          "◓",
          "◑",
          "◒"
        ]
      },
      squish: {
        interval: 100,
        frames: [
          "╫",
          "╪"
        ]
      },
      toggle: {
        interval: 250,
        frames: [
          "⊶",
          "⊷"
        ]
      },
      toggle2: {
        interval: 80,
        frames: [
          "▫",
          "▪"
        ]
      },
      toggle3: {
        interval: 120,
        frames: [
          "□",
          "■"
        ]
      },
      toggle4: {
        interval: 100,
        frames: [
          "■",
          "□",
          "▪",
          "▫"
        ]
      },
      toggle5: {
        interval: 100,
        frames: [
          "▮",
          "▯"
        ]
      },
      toggle6: {
        interval: 300,
        frames: [
          "ဝ",
          "၀"
        ]
      },
      toggle7: {
        interval: 80,
        frames: [
          "⦾",
          "⦿"
        ]
      },
      toggle8: {
        interval: 100,
        frames: [
          "◍",
          "◌"
        ]
      },
      toggle9: {
        interval: 100,
        frames: [
          "◉",
          "◎"
        ]
      },
      toggle10: {
        interval: 100,
        frames: [
          "㊂",
          "㊀",
          "㊁"
        ]
      },
      toggle11: {
        interval: 50,
        frames: [
          "⧇",
          "⧆"
        ]
      },
      toggle12: {
        interval: 120,
        frames: [
          "☗",
          "☖"
        ]
      },
      toggle13: {
        interval: 80,
        frames: [
          "=",
          "*",
          "-"
        ]
      },
      arrow: {
        interval: 100,
        frames: [
          "←",
          "↖",
          "↑",
          "↗",
          "→",
          "↘",
          "↓",
          "↙"
        ]
      },
      arrow2: {
        interval: 80,
        frames: [
          "⬆️ ",
          "↗️ ",
          "➡️ ",
          "↘️ ",
          "⬇️ ",
          "↙️ ",
          "⬅️ ",
          "↖️ "
        ]
      },
      arrow3: {
        interval: 120,
        frames: [
          "▹▹▹▹▹",
          "▸▹▹▹▹",
          "▹▸▹▹▹",
          "▹▹▸▹▹",
          "▹▹▹▸▹",
          "▹▹▹▹▸"
        ]
      },
      bouncingBar: {
        interval: 80,
        frames: [
          "[    ]",
          "[=   ]",
          "[==  ]",
          "[=== ]",
          "[ ===]",
          "[  ==]",
          "[   =]",
          "[    ]",
          "[   =]",
          "[  ==]",
          "[ ===]",
          "[====]",
          "[=== ]",
          "[==  ]",
          "[=   ]"
        ]
      },
      bouncingBall: {
        interval: 80,
        frames: [
          "( ●    )",
          "(  ●   )",
          "(   ●  )",
          "(    ● )",
          "(     ●)",
          "(    ● )",
          "(   ●  )",
          "(  ●   )",
          "( ●    )",
          "(●     )"
        ]
      },
      smiley: {
        interval: 200,
        frames: [
          "😄 ",
          "😝 "
        ]
      },
      monkey: {
        interval: 300,
        frames: [
          "🙈 ",
          "🙈 ",
          "🙉 ",
          "🙊 "
        ]
      },
      hearts: {
        interval: 100,
        frames: [
          "💛 ",
          "💙 ",
          "💜 ",
          "💚 ",
          "❤️ "
        ]
      },
      clock: {
        interval: 100,
        frames: [
          "🕛 ",
          "🕐 ",
          "🕑 ",
          "🕒 ",
          "🕓 ",
          "🕔 ",
          "🕕 ",
          "🕖 ",
          "🕗 ",
          "🕘 ",
          "🕙 ",
          "🕚 "
        ]
      },
      earth: {
        interval: 180,
        frames: [
          "🌍 ",
          "🌎 ",
          "🌏 "
        ]
      },
      material: {
        interval: 17,
        frames: [
          "█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "███████▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "████████▁▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "██████████▁▁▁▁▁▁▁▁▁▁",
          "███████████▁▁▁▁▁▁▁▁▁",
          "█████████████▁▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁▁██████████████▁▁▁▁",
          "▁▁▁██████████████▁▁▁",
          "▁▁▁▁█████████████▁▁▁",
          "▁▁▁▁██████████████▁▁",
          "▁▁▁▁██████████████▁▁",
          "▁▁▁▁▁██████████████▁",
          "▁▁▁▁▁██████████████▁",
          "▁▁▁▁▁██████████████▁",
          "▁▁▁▁▁▁██████████████",
          "▁▁▁▁▁▁██████████████",
          "▁▁▁▁▁▁▁█████████████",
          "▁▁▁▁▁▁▁█████████████",
          "▁▁▁▁▁▁▁▁████████████",
          "▁▁▁▁▁▁▁▁████████████",
          "▁▁▁▁▁▁▁▁▁███████████",
          "▁▁▁▁▁▁▁▁▁███████████",
          "▁▁▁▁▁▁▁▁▁▁██████████",
          "▁▁▁▁▁▁▁▁▁▁██████████",
          "▁▁▁▁▁▁▁▁▁▁▁▁████████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁███████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁██████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████",
          "█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "███▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "████▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "██████▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "████████▁▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "███████████▁▁▁▁▁▁▁▁▁",
          "████████████▁▁▁▁▁▁▁▁",
          "████████████▁▁▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁▁▁█████████████▁▁▁▁",
          "▁▁▁▁▁████████████▁▁▁",
          "▁▁▁▁▁████████████▁▁▁",
          "▁▁▁▁▁▁███████████▁▁▁",
          "▁▁▁▁▁▁▁▁█████████▁▁▁",
          "▁▁▁▁▁▁▁▁█████████▁▁▁",
          "▁▁▁▁▁▁▁▁▁█████████▁▁",
          "▁▁▁▁▁▁▁▁▁█████████▁▁",
          "▁▁▁▁▁▁▁▁▁▁█████████▁",
          "▁▁▁▁▁▁▁▁▁▁▁████████▁",
          "▁▁▁▁▁▁▁▁▁▁▁████████▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁███████▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁███████▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁███████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁███████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁"
        ]
      },
      moon: {
        interval: 80,
        frames: [
          "🌑 ",
          "🌒 ",
          "🌓 ",
          "🌔 ",
          "🌕 ",
          "🌖 ",
          "🌗 ",
          "🌘 "
        ]
      },
      runner: {
        interval: 140,
        frames: [
          "🚶 ",
          "🏃 "
        ]
      },
      pong: {
        interval: 80,
        frames: [
          "▐⠂       ▌",
          "▐⠈       ▌",
          "▐ ⠂      ▌",
          "▐ ⠠      ▌",
          "▐  ⡀     ▌",
          "▐  ⠠     ▌",
          "▐   ⠂    ▌",
          "▐   ⠈    ▌",
          "▐    ⠂   ▌",
          "▐    ⠠   ▌",
          "▐     ⡀  ▌",
          "▐     ⠠  ▌",
          "▐      ⠂ ▌",
          "▐      ⠈ ▌",
          "▐       ⠂▌",
          "▐       ⠠▌",
          "▐       ⡀▌",
          "▐      ⠠ ▌",
          "▐      ⠂ ▌",
          "▐     ⠈  ▌",
          "▐     ⠂  ▌",
          "▐    ⠠   ▌",
          "▐    ⡀   ▌",
          "▐   ⠠    ▌",
          "▐   ⠂    ▌",
          "▐  ⠈     ▌",
          "▐  ⠂     ▌",
          "▐ ⠠      ▌",
          "▐ ⡀      ▌",
          "▐⠠       ▌"
        ]
      },
      shark: {
        interval: 120,
        frames: [
          "▐|\\____________▌",
          "▐_|\\___________▌",
          "▐__|\\__________▌",
          "▐___|\\_________▌",
          "▐____|\\________▌",
          "▐_____|\\_______▌",
          "▐______|\\______▌",
          "▐_______|\\_____▌",
          "▐________|\\____▌",
          "▐_________|\\___▌",
          "▐__________|\\__▌",
          "▐___________|\\_▌",
          "▐____________|\\▌",
          "▐____________/|▌",
          "▐___________/|_▌",
          "▐__________/|__▌",
          "▐_________/|___▌",
          "▐________/|____▌",
          "▐_______/|_____▌",
          "▐______/|______▌",
          "▐_____/|_______▌",
          "▐____/|________▌",
          "▐___/|_________▌",
          "▐__/|__________▌",
          "▐_/|___________▌",
          "▐/|____________▌"
        ]
      },
      dqpb: {
        interval: 100,
        frames: [
          "d",
          "q",
          "p",
          "b"
        ]
      },
      weather: {
        interval: 100,
        frames: [
          "☀️ ",
          "☀️ ",
          "☀️ ",
          "🌤 ",
          "⛅️ ",
          "🌥 ",
          "☁️ ",
          "🌧 ",
          "🌨 ",
          "🌧 ",
          "🌨 ",
          "🌧 ",
          "🌨 ",
          "⛈ ",
          "🌨 ",
          "🌧 ",
          "🌨 ",
          "☁️ ",
          "🌥 ",
          "⛅️ ",
          "🌤 ",
          "☀️ ",
          "☀️ "
        ]
      },
      christmas: {
        interval: 400,
        frames: [
          "🌲",
          "🎄"
        ]
      },
      grenade: {
        interval: 80,
        frames: [
          "،  ",
          "′  ",
          " ´ ",
          " ‾ ",
          "  ⸌",
          "  ⸊",
          "  |",
          "  ⁎",
          "  ⁕",
          " ෴ ",
          "  ⁓",
          "   ",
          "   ",
          "   "
        ]
      },
      point: {
        interval: 125,
        frames: [
          "∙∙∙",
          "●∙∙",
          "∙●∙",
          "∙∙●",
          "∙∙∙"
        ]
      },
      layer: {
        interval: 150,
        frames: [
          "-",
          "=",
          "≡"
        ]
      },
      betaWave: {
        interval: 80,
        frames: [
          "ρββββββ",
          "βρβββββ",
          "ββρββββ",
          "βββρβββ",
          "ββββρββ",
          "βββββρβ",
          "ββββββρ"
        ]
      },
      fingerDance: {
        interval: 160,
        frames: [
          "🤘 ",
          "🤟 ",
          "🖖 ",
          "✋ ",
          "🤚 ",
          "👆 "
        ]
      },
      fistBump: {
        interval: 80,
        frames: [
          "🤜　　　　🤛 ",
          "🤜　　　　🤛 ",
          "🤜　　　　🤛 ",
          "　🤜　　🤛　 ",
          "　　🤜🤛　　 ",
          "　🤜✨🤛　　 ",
          "🤜　✨　🤛　 "
        ]
      },
      soccerHeader: {
        interval: 80,
        frames: [
          " 🧑⚽️       🧑 ",
          "🧑  ⚽️      🧑 ",
          "🧑   ⚽️     🧑 ",
          "🧑    ⚽️    🧑 ",
          "🧑     ⚽️   🧑 ",
          "🧑      ⚽️  🧑 ",
          "🧑       ⚽️🧑  ",
          "🧑      ⚽️  🧑 ",
          "🧑     ⚽️   🧑 ",
          "🧑    ⚽️    🧑 ",
          "🧑   ⚽️     🧑 ",
          "🧑  ⚽️      🧑 "
        ]
      },
      mindblown: {
        interval: 160,
        frames: [
          "😐 ",
          "😐 ",
          "😮 ",
          "😮 ",
          "😦 ",
          "😦 ",
          "😧 ",
          "😧 ",
          "🤯 ",
          "💥 ",
          "✨ ",
          "　 ",
          "　 ",
          "　 "
        ]
      },
      speaker: {
        interval: 160,
        frames: [
          "🔈 ",
          "🔉 ",
          "🔊 ",
          "🔉 "
        ]
      },
      orangePulse: {
        interval: 100,
        frames: [
          "🔸 ",
          "🔶 ",
          "🟠 ",
          "🟠 ",
          "🔶 "
        ]
      },
      bluePulse: {
        interval: 100,
        frames: [
          "🔹 ",
          "🔷 ",
          "🔵 ",
          "🔵 ",
          "🔷 "
        ]
      },
      orangeBluePulse: {
        interval: 100,
        frames: [
          "🔸 ",
          "🔶 ",
          "🟠 ",
          "🟠 ",
          "🔶 ",
          "🔹 ",
          "🔷 ",
          "🔵 ",
          "🔵 ",
          "🔷 "
        ]
      },
      timeTravel: {
        interval: 100,
        frames: [
          "🕛 ",
          "🕚 ",
          "🕙 ",
          "🕘 ",
          "🕗 ",
          "🕖 ",
          "🕕 ",
          "🕔 ",
          "🕓 ",
          "🕒 ",
          "🕑 ",
          "🕐 "
        ]
      },
      aesthetic: {
        interval: 80,
        frames: [
          "▰▱▱▱▱▱▱",
          "▰▰▱▱▱▱▱",
          "▰▰▰▱▱▱▱",
          "▰▰▰▰▱▱▱",
          "▰▰▰▰▰▱▱",
          "▰▰▰▰▰▰▱",
          "▰▰▰▰▰▰▰",
          "▰▱▱▱▱▱▱"
        ]
      },
      dwarfFortress: {
        interval: 80,
        frames: [
          " ██████£££  ",
          "☺██████£££  ",
          "☺██████£££  ",
          "☺▓█████£££  ",
          "☺▓█████£££  ",
          "☺▒█████£££  ",
          "☺▒█████£££  ",
          "☺░█████£££  ",
          "☺░█████£££  ",
          "☺ █████£££  ",
          " ☺█████£££  ",
          " ☺█████£££  ",
          " ☺▓████£££  ",
          " ☺▓████£££  ",
          " ☺▒████£££  ",
          " ☺▒████£££  ",
          " ☺░████£££  ",
          " ☺░████£££  ",
          " ☺ ████£££  ",
          "  ☺████£££  ",
          "  ☺████£££  ",
          "  ☺▓███£££  ",
          "  ☺▓███£££  ",
          "  ☺▒███£££  ",
          "  ☺▒███£££  ",
          "  ☺░███£££  ",
          "  ☺░███£££  ",
          "  ☺ ███£££  ",
          "   ☺███£££  ",
          "   ☺███£££  ",
          "   ☺▓██£££  ",
          "   ☺▓██£££  ",
          "   ☺▒██£££  ",
          "   ☺▒██£££  ",
          "   ☺░██£££  ",
          "   ☺░██£££  ",
          "   ☺ ██£££  ",
          "    ☺██£££  ",
          "    ☺██£££  ",
          "    ☺▓█£££  ",
          "    ☺▓█£££  ",
          "    ☺▒█£££  ",
          "    ☺▒█£££  ",
          "    ☺░█£££  ",
          "    ☺░█£££  ",
          "    ☺ █£££  ",
          "     ☺█£££  ",
          "     ☺█£££  ",
          "     ☺▓£££  ",
          "     ☺▓£££  ",
          "     ☺▒£££  ",
          "     ☺▒£££  ",
          "     ☺░£££  ",
          "     ☺░£££  ",
          "     ☺ £££  ",
          "      ☺£££  ",
          "      ☺£££  ",
          "      ☺▓££  ",
          "      ☺▓££  ",
          "      ☺▒££  ",
          "      ☺▒££  ",
          "      ☺░££  ",
          "      ☺░££  ",
          "      ☺ ££  ",
          "       ☺££  ",
          "       ☺££  ",
          "       ☺▓£  ",
          "       ☺▓£  ",
          "       ☺▒£  ",
          "       ☺▒£  ",
          "       ☺░£  ",
          "       ☺░£  ",
          "       ☺ £  ",
          "        ☺£  ",
          "        ☺£  ",
          "        ☺▓  ",
          "        ☺▓  ",
          "        ☺▒  ",
          "        ☺▒  ",
          "        ☺░  ",
          "        ☺░  ",
          "        ☺   ",
          "        ☺  &",
          "        ☺ ☼&",
          "       ☺ ☼ &",
          "       ☺☼  &",
          "      ☺☼  & ",
          "      ‼   & ",
          "     ☺   &  ",
          "    ‼    &  ",
          "   ☺    &   ",
          "  ‼     &   ",
          " ☺     &    ",
          "‼      &    ",
          "      &     ",
          "      &     ",
          "     &   ░  ",
          "     &   ▒  ",
          "    &    ▓  ",
          "    &    £  ",
          "   &    ░£  ",
          "   &    ▒£  ",
          "  &     ▓£  ",
          "  &     ££  ",
          " &     ░££  ",
          " &     ▒££  ",
          "&      ▓££  ",
          "&      £££  ",
          "      ░£££  ",
          "      ▒£££  ",
          "      ▓£££  ",
          "      █£££  ",
          "     ░█£££  ",
          "     ▒█£££  ",
          "     ▓█£££  ",
          "     ██£££  ",
          "    ░██£££  ",
          "    ▒██£££  ",
          "    ▓██£££  ",
          "    ███£££  ",
          "   ░███£££  ",
          "   ▒███£££  ",
          "   ▓███£££  ",
          "   ████£££  ",
          "  ░████£££  ",
          "  ▒████£££  ",
          "  ▓████£££  ",
          "  █████£££  ",
          " ░█████£££  ",
          " ▒█████£££  ",
          " ▓█████£££  ",
          " ██████£££  ",
          " ██████£££  "
        ]
      }
    };
  }
}), _s = x({
  "node_modules/.pnpm/cli-spinners@2.9.0/node_modules/cli-spinners/index.js"(t, e) {
    v(), E();
    var r = Object.assign({}, ws()), n = Object.keys(r);
    Object.defineProperty(r, "random", {
      get() {
        const i = Math.floor(Math.random() * n.length), o = n[i];
        return r[o];
      }
    }), e.exports = r;
  }
}), vs = x({
  "node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js"(t, e) {
    v(), E();
    var r = /[|\\{}()[\]^$+*?.]/g;
    e.exports = function(n) {
      if (typeof n != "string")
        throw new TypeError("Expected a string");
      return n.replace(r, "\\$&");
    };
  }
}), Es = x({
  "node_modules/.pnpm/figures@3.2.0/node_modules/figures/index.js"(t, e) {
    v(), E();
    var r = vs(), { platform: n } = z, i = {
      tick: "✔",
      cross: "✖",
      star: "★",
      square: "▇",
      squareSmall: "◻",
      squareSmallFilled: "◼",
      play: "▶",
      circle: "◯",
      circleFilled: "◉",
      circleDotted: "◌",
      circleDouble: "◎",
      circleCircle: "ⓞ",
      circleCross: "ⓧ",
      circlePipe: "Ⓘ",
      circleQuestionMark: "?⃝",
      bullet: "●",
      dot: "․",
      line: "─",
      ellipsis: "…",
      pointer: "❯",
      pointerSmall: "›",
      info: "ℹ",
      warning: "⚠",
      hamburger: "☰",
      smiley: "㋡",
      mustache: "෴",
      heart: "♥",
      nodejs: "⬢",
      arrowUp: "↑",
      arrowDown: "↓",
      arrowLeft: "←",
      arrowRight: "→",
      radioOn: "◉",
      radioOff: "◯",
      checkboxOn: "☒",
      checkboxOff: "☐",
      checkboxCircleOn: "ⓧ",
      checkboxCircleOff: "Ⓘ",
      questionMarkPrefix: "?⃝",
      oneHalf: "½",
      oneThird: "⅓",
      oneQuarter: "¼",
      oneFifth: "⅕",
      oneSixth: "⅙",
      oneSeventh: "⅐",
      oneEighth: "⅛",
      oneNinth: "⅑",
      oneTenth: "⅒",
      twoThirds: "⅔",
      twoFifths: "⅖",
      threeQuarters: "¾",
      threeFifths: "⅗",
      threeEighths: "⅜",
      fourFifths: "⅘",
      fiveSixths: "⅚",
      fiveEighths: "⅝",
      sevenEighths: "⅞"
    }, o = {
      tick: "√",
      cross: "×",
      star: "*",
      square: "█",
      squareSmall: "[ ]",
      squareSmallFilled: "[█]",
      play: "►",
      circle: "( )",
      circleFilled: "(*)",
      circleDotted: "( )",
      circleDouble: "( )",
      circleCircle: "(○)",
      circleCross: "(×)",
      circlePipe: "(│)",
      circleQuestionMark: "(?)",
      bullet: "*",
      dot: ".",
      line: "─",
      ellipsis: "...",
      pointer: ">",
      pointerSmall: "»",
      info: "i",
      warning: "‼",
      hamburger: "≡",
      smiley: "☺",
      mustache: "┌─┐",
      heart: i.heart,
      nodejs: "♦",
      arrowUp: i.arrowUp,
      arrowDown: i.arrowDown,
      arrowLeft: i.arrowLeft,
      arrowRight: i.arrowRight,
      radioOn: "(*)",
      radioOff: "( )",
      checkboxOn: "[×]",
      checkboxOff: "[ ]",
      checkboxCircleOn: "(×)",
      checkboxCircleOff: "( )",
      questionMarkPrefix: "？",
      oneHalf: "1/2",
      oneThird: "1/3",
      oneQuarter: "1/4",
      oneFifth: "1/5",
      oneSixth: "1/6",
      oneSeventh: "1/7",
      oneEighth: "1/8",
      oneNinth: "1/9",
      oneTenth: "1/10",
      twoThirds: "2/3",
      twoFifths: "2/5",
      threeQuarters: "3/4",
      threeFifths: "3/5",
      threeEighths: "3/8",
      fourFifths: "4/5",
      fiveSixths: "5/6",
      fiveEighths: "5/8",
      sevenEighths: "7/8"
    };
    n === "linux" && (i.questionMarkPrefix = "?");
    var u = n === "win32" ? o : i, l = (s) => {
      if (u === i)
        return s;
      for (const [a, f] of Object.entries(i))
        f !== u[a] && (s = s.replace(new RegExp(r(f), "g"), u[a]));
      return s;
    };
    e.exports = Object.assign(l, u), e.exports.main = i, e.exports.windows = o;
  }
});
v();
E();
v();
E();
v();
E();
var ys = {};
v();
E();
var Fs = class extends Promise {
  constructor() {
    super(...arguments), Xe(this, "cancel", () => {
    });
  }
}, Cs = V(is(), 1);
v();
E();
var bs = V(wi(), 1), As = V(Kr(), 1), Bs = V(_i(), 1), _e = V(fs(), 1);
v();
E();
var Rs = V(ps(), 1), rn = (t, e) => t.split(`
`).map((r) => (0, Rs.default)(r, e, { trim: !1, hard: !0 }).split(`
`)).flat().map((r) => r.trimEnd()).join(`
`), tn = (t) => t.split(`
`).length, nn = (t) => t.split(`
`).pop() ?? "", xs = class {
  constructor(t) {
    Xe(this, "rl"), Xe(this, "height", 0), Xe(this, "extraLinesUnderPrompt", 0), this.rl = t, this.rl = t;
  }
  render(t, e = "") {
    this.clean(), this.rl.output.unmute();
    const r = nn(t), n = (0, As.default)(r);
    let i = n;
    this.rl.line.length && (i = i.slice(0, -this.rl.line.length)), this.rl.setPrompt(i);
    const o = this.rl._getCursorPos(), u = (0, bs.default)({ defaultWidth: 80, output: this.rl.output });
    t = rn(t, u), e = rn(e, u), n.length % u === 0 && (t += `
`);
    let l = t + (e ? `
` + e : "");
    const a = Math.floor(n.length / u) - o.rows + (e ? tn(e) : 0);
    a > 0 && (l += _e.default.cursorUp(a));
    const f = (0, Bs.default)(nn(l));
    f > 0 && (l += _e.default.cursorBackward(f)), o.cols > 0 && (l += _e.default.cursorForward(o.cols)), this.extraLinesUnderPrompt = a, this.height = tn(l), this.rl.output.write(l), this.rl.output.mute();
  }
  clean() {
    this.rl.output.unmute(), this.rl.output.write([
      this.extraLinesUnderPrompt > 0 ? _e.default.cursorDown(this.extraLinesUnderPrompt) : "",
      _e.default.eraseLines(this.height)
    ].join("")), this.extraLinesUnderPrompt = 0, this.rl.output.mute();
  }
  clearContent() {
    this.rl.output.unmute(), this.rl.output.write([
      this.extraLinesUnderPrompt > 0 ? _e.default.cursorDown(this.extraLinesUnderPrompt) : "",
      `
`
    ].join("")), this.rl.output.mute();
  }
  done() {
    this.rl.setPrompt(""), this.rl.output.unmute(), this.rl.output.write(_e.default.cursorShow), this.rl.output.end(), this.rl.close();
  }
};
v();
E();
async function Ts(t) {
  const e = typeof t.message == "function" ? t.message() : t.message;
  return {
    validate: () => !0,
    ...t,
    message: await e
  };
}
v();
E();
var un = V(hr(), 1), Ss = V(_s(), 1), Cr = Ss.default.dots;
function ks(t = !1) {
  const [e, r] = Ie(0);
  if (Ci(() => {
    if (t) {
      const n = setTimeout(() => {
        r(e + 1);
      }, Cr.interval);
      return () => clearTimeout(n);
    }
  }, [t, e]), t) {
    const n = e % Cr.frames.length;
    return un.default.yellow(Cr.frames[n]);
  }
  return un.default.green("?");
}
v();
E();
var Ms = (t) => t.name === "backspace", Ls = (t) => t.name === "enter" || t.name === "return";
v();
E();
V(hr(), 1);
V(wi(), 1);
v();
E();
V(hr(), 1);
V(Es(), 1);
var se = [], Dr = [], ur = [], ke = 0, xe = () => {
}, Te;
function on() {
  se.length = 0, Dr.length = 0, ur.length = 0, ke = 0, xe = () => {
  }, Te = void 0;
}
function yi(t) {
  const e = Dr[t];
  typeof e == "function" && e();
}
function Fi(t) {
  return (...r) => {
    let n = !1;
    const i = xe;
    xe = () => {
      n = !0;
    };
    const o = t(...r);
    return n && i(), xe = i, o;
  };
}
function Ie(t) {
  const e = ke;
  return ke++, e in se || (typeof t == "function" ? se[e] = t() : se[e] = t), [
    se[e],
    (r) => {
      se[e] !== r && (se[e] = r, xe());
    }
  ];
}
function Ci(t, e) {
  const r = Te;
  if (!r)
    throw new Error("useEffect must be used within a prompt");
  const n = ke;
  ke++;
  const i = se[n];
  let o = !0;
  i && (o = e.some((u, l) => !Object.is(u, i[l]))), o && ur.push(Fi(() => {
    yi(n);
    const u = t(r);
    if (u != null && typeof u != "function")
      throw new Error("useEffect return value must be a cleanup function or nothing.");
    Dr[n] = u;
  })), se[n] = e;
}
function Is(t) {
  const e = Te;
  if (!e)
    throw new Error("useKeypress must be used within a prompt");
  Ci(() => {
    const r = Fi((n, i) => {
      t(i, e);
    });
    return e.input.on("keypress", r), () => {
      e.input.removeListener("keypress", r);
    };
  }, [t]);
}
function Us(t) {
  return (r, n) => {
    if (Te)
      throw new Error(`An inquirer prompt is already running.
Make sure you await the result of the previous prompt before calling another prompt.`);
    const i = (n == null ? void 0 : n.input) ?? z.stdin, o = new Cs.default();
    o.pipe((n == null ? void 0 : n.output) ?? z.stdout), Te = ys.createInterface({
      terminal: !0,
      input: i,
      output: o
    });
    const u = new xs(Te);
    let l = () => {
    };
    const s = new Fs((a, f) => {
      const c = () => {
        try {
          let w = Dr.length;
          for (; w--; )
            yi(w);
        } catch (w) {
          f(w);
        }
        n != null && n.clearPromptOnDone ? u.clean() : u.clearContent(), u.done(), on(), z.removeListener("SIGINT", D);
      };
      l = () => {
        c(), f(new Error("Prompt was canceled"));
      };
      let h = !0;
      const D = () => {
        h && (h = !1, c(), f(new Error("User force closed the prompt with CTRL+C")));
      };
      z.on("SIGINT", D);
      const p = (w) => {
        setImmediate(() => {
          c(), a(w);
        });
      }, m = (w) => {
        ke = 0, ur.length = 0, xe = () => m(w);
        try {
          const _ = t(w, p);
          for (const T of ur)
            T();
          const [R, C] = typeof _ == "string" ? [_] : _;
          u.render(R, C);
        } catch (_) {
          c(), f(_);
        }
      };
      Ts(r).then(m, f);
    });
    return s.catch(() => {
      on();
    }), s.cancel = l, s;
  };
}
var Qe = V(hr(), 1), Ps = Us((t, e) => {
  const [r, n] = Ie("pending"), [i = "", o] = Ie(t.default), [u, l] = Ie(void 0), [s, a] = Ie(""), c = ks(r === "loading");
  Is(async (w, _) => {
    if (r === "pending")
      if (Ls(w)) {
        const R = s || i;
        n("loading");
        const C = await t.validate(R);
        C === !0 ? (a(R), n("done"), e(R)) : (_.write(s), l(C || "You must provide a valid value"), n("pending"));
      } else
        Ms(w) && !s ? o(void 0) : w.name === "tab" && !s ? (o(void 0), _.clearLine(0), _.write(i), a(i)) : (a(_.line), l(void 0));
  });
  const h = Qe.default.bold(t.message);
  let D = s;
  typeof t.transformer == "function" && (D = t.transformer(s, { isFinal: r === "done" })), r === "done" && (D = Qe.default.cyan(D));
  let p = "";
  i && r !== "done" && !s && (p = Qe.default.dim(` (${i})`));
  let m = "";
  return u && (m = Qe.default.red(`> ${u}`)), [`${c} ${h}${p} ${D}`, m];
});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
v();
E();
v();
E();
var Y = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
}, sn = {
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: Y.fatal
  },
  error: {
    level: Y.error
  },
  // Level 1
  warn: {
    level: Y.warn
  },
  // Level 2
  log: {
    level: Y.log
  },
  // Level 3
  info: {
    level: Y.info
  },
  success: {
    level: Y.success
  },
  fail: {
    level: Y.fail
  },
  ready: {
    level: Y.info
  },
  start: {
    level: Y.info
  },
  box: {
    level: Y.info
  },
  // Level 4
  debug: {
    level: Y.debug
  },
  // Level 5
  trace: {
    level: Y.trace
  },
  // Verbose
  verbose: {
    level: Y.verbose
  }
};
function br(t) {
  return t !== null && typeof t == "object";
}
function Or(t, e, r = ".", n) {
  if (!br(e))
    return Or(t, {}, r, n);
  const i = Object.assign({}, e);
  for (const o in t) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const u = t[o];
    u != null && (n && n(i, o, u, r) || (Array.isArray(u) && Array.isArray(i[o]) ? i[o] = [...u, ...i[o]] : br(u) && br(i[o]) ? i[o] = Or(
      u,
      i[o],
      (r ? `${r}.` : "") + o.toString(),
      n
    ) : i[o] = u));
  }
  return i;
}
function $s(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((r, n) => Or(r, n, "", t), {})
  );
}
var Os = $s();
function js(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Ns(t) {
  return !(!js(t) || !t.message && !t.args || t.stack);
}
var Ar = !1, an = [], $ = class {
  constructor(t = {}) {
    const e = t.types || sn;
    this.options = Os(
      {
        ...t,
        defaults: { ...t.defaults },
        level: Br(t.level, e),
        reporters: [...t.reporters || []]
      },
      {
        types: sn,
        throttle: 1e3,
        throttleMin: 5,
        formatOptions: {
          date: !0,
          colors: !1,
          compact: !0
        }
      }
    );
    for (const r in e) {
      const n = {
        type: r,
        ...this.options.defaults,
        ...e[r]
      };
      this[r] = this._wrapLogFn(n), this[r].raw = this._wrapLogFn(
        n,
        !0
      );
    }
    this.options.mockFn && this.mockTypes(), this._lastLog = {};
  }
  get level() {
    return this.options.level;
  }
  set level(t) {
    this.options.level = Br(
      t,
      this.options.types,
      this.options.level
    );
  }
  prompt(t, e) {
    if (!this.options.prompt)
      throw new Error("prompt is not supported!");
    return this.options.prompt(t, e);
  }
  create(t) {
    const e = new $({
      ...this.options,
      ...t
    });
    return this._mockFn && e.mockTypes(this._mockFn), e;
  }
  withDefaults(t) {
    return this.create({
      ...this.options,
      defaults: {
        ...this.options.defaults,
        ...t
      }
    });
  }
  withTag(t) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + t : t
    });
  }
  addReporter(t) {
    return this.options.reporters.push(t), this;
  }
  removeReporter(t) {
    if (t) {
      const e = this.options.reporters.indexOf(t);
      if (e >= 0)
        return this.options.reporters.splice(e, 1);
    } else
      this.options.reporters.splice(0);
    return this;
  }
  setReporters(t) {
    return this.options.reporters = Array.isArray(t) ? t : [t], this;
  }
  wrapAll() {
    this.wrapConsole(), this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole(), this.restoreStd();
  }
  wrapConsole() {
    for (const t in this.options.types)
      console["__" + t] || (console["__" + t] = console[t]), console[t] = this[t].raw;
  }
  restoreConsole() {
    for (const t in this.options.types)
      console["__" + t] && (console[t] = console["__" + t], delete console["__" + t]);
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log"), this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(t, e) {
    t && (t.__write || (t.__write = t.write), t.write = (r) => {
      this[e].raw(String(r).trim());
    });
  }
  restoreStd() {
    this._restoreStream(this.options.stdout), this._restoreStream(this.options.stderr);
  }
  _restoreStream(t) {
    t && t.__write && (t.write = t.__write, delete t.__write);
  }
  pauseLogs() {
    Ar = !0;
  }
  resumeLogs() {
    Ar = !1;
    const t = an.splice(0);
    for (const e of t)
      e[0]._logFn(e[1], e[2]);
  }
  mockTypes(t) {
    const e = t || this.options.mockFn;
    if (this._mockFn = e, typeof e == "function")
      for (const r in this.options.types)
        this[r] = e(r, this.options.types[r]) || this[r], this[r].raw = this[r];
  }
  _wrapLogFn(t, e) {
    return (...r) => {
      if (Ar) {
        an.push([this, t, r, e]);
        return;
      }
      return this._logFn(t, r, e);
    };
  }
  _logFn(t, e, r) {
    if ((t.level || 0) > this.level)
      return !1;
    const n = {
      date: /* @__PURE__ */ new Date(),
      args: [],
      ...t,
      level: Br(t.level, this.options.types)
    };
    !r && e.length === 1 && Ns(e[0]) ? Object.assign(n, e[0]) : n.args = [...e], n.message && (n.args.unshift(n.message), delete n.message), n.additional && (Array.isArray(n.additional) || (n.additional = n.additional.split(`
`)), n.args.push(`
` + n.additional.join(`
`)), delete n.additional), n.type = typeof n.type == "string" ? n.type.toLowerCase() : "log", n.tag = typeof n.tag == "string" ? n.tag : "";
    const i = (u = !1) => {
      const l = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && l > 0) {
        const s = [...this._lastLog.object.args];
        l > 1 && s.push(`(repeated ${l} times)`), this._log({ ...this._lastLog.object, args: s }), this._lastLog.count = 1;
      }
      u && (this._lastLog.object = n, this._log(n));
    };
    clearTimeout(this._lastLog.timeout);
    const o = this._lastLog.time && n.date ? n.date.getTime() - this._lastLog.time.getTime() : 0;
    if (this._lastLog.time = n.date, o < this.options.throttle)
      try {
        const u = JSON.stringify([
          n.type,
          n.tag,
          n.args
        ]), l = this._lastLog.serialized === u;
        if (this._lastLog.serialized = u, l && (this._lastLog.count = (this._lastLog.count || 0) + 1, this._lastLog.count > this.options.throttleMin)) {
          this._lastLog.timeout = setTimeout(
            i,
            this.options.throttle
          );
          return;
        }
      } catch {
      }
    i(!0);
  }
  _log(t) {
    for (const e of this.options.reporters)
      e.log(t, {
        options: this.options
      });
  }
};
function Br(t, e = {}, r = 3) {
  return t === void 0 ? r : typeof t == "number" ? t : e[t] && e[t].level !== void 0 ? e[t].level : r;
}
$.prototype.add = $.prototype.addReporter;
$.prototype.remove = $.prototype.removeReporter;
$.prototype.clear = $.prototype.removeReporter;
$.prototype.withScope = $.prototype.withTag;
$.prototype.mock = $.prototype.mockTypes;
$.prototype.pause = $.prototype.pauseLogs;
$.prototype.resume = $.prototype.resumeLogs;
function Ys(t = {}) {
  return new $(t);
}
var qs = class {
  constructor(t) {
    this.options = { ...t }, this.defaultColor = "#7f8c8d", this.levelColorMap = {
      0: "#c0392b",
      // Red
      1: "#f39c12",
      // Yellow
      3: "#00BCD4"
      // Cyan
    }, this.typeColorMap = {
      success: "#2ecc71"
      // Green
    };
  }
  _getLogFn(t) {
    return t < 1 ? console.__error || console.error : t === 1 ? console.__warn || console.warn : console.__log || console.log;
  }
  log(t) {
    const e = this._getLogFn(t.level), r = t.type === "log" ? "" : t.type, n = t.tag || "", o = `
      background: ${this.typeColorMap[t.type] || this.levelColorMap[t.level] || this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `, u = `%c${[n, r].filter(Boolean).join(":")}`;
    typeof t.args[0] == "string" ? e(
      `${u}%c ${t.args[0]}`,
      o,
      // Empty string as style resets to default console style
      "",
      ...t.args.slice(1)
    ) : e(u, o, ...t.args);
  }
};
function Ws(t = {}) {
  return Ys({
    reporters: t.reporters || [new qs({})],
    prompt(r, n = {}) {
      return n.type === "confirm" ? Promise.resolve(confirm(r)) : Promise.resolve(prompt(r));
    },
    ...t
  });
}
var zs = Ws();
async function Hs() {
  const t = await Ps({ message: "请输入模块名称" });
  zs.info(["模块名称", t]);
}
export {
  Hs as default
};
