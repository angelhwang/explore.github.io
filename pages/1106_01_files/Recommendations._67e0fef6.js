(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 0 ], {
    1880: function(e, t, r) {
        var n = r(107), a = r(477), s = r(506), i = a("iterator");
        e.exports = !n((function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, r = "";
            return e.pathname = "c%20d", t.forEach((function(e, n) {
                t.delete("b"), r += n + e;
            })), s && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[i] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host;
        }));
    },
    1978: function(e, t, r) {
        "use strict";
        var n = 2147483647, a = /[^\0-\u007E]/, s = /[.\u3002\uFF0E\uFF61]/g, i = "Overflow: input needs wider integers to process", o = Math.floor, u = String.fromCharCode, h = function(e) {
            return e + 22 + 75 * (e < 26);
        }, l = function(e, t, r) {
            var n = 0;
            for (e = r ? o(e / 700) : e >> 1, e += o(e / t); e > 455; n += 36) e = o(e / 35);
            return o(n + 36 * e / (e + 38));
        }, f = function(e) {
            var t, r, a = [], s = (e = function(e) {
                for (var t = [], r = 0, n = e.length; r < n; ) {
                    var a = e.charCodeAt(r++);
                    if (a >= 55296 && a <= 56319 && r < n) {
                        var s = e.charCodeAt(r++);
                        56320 == (64512 & s) ? t.push(((1023 & a) << 10) + (1023 & s) + 65536) : (t.push(a), 
                        r--);
                    } else t.push(a);
                }
                return t;
            }(e)).length, f = 128, c = 0, p = 72;
            for (t = 0; t < e.length; t++) (r = e[t]) < 128 && a.push(u(r));
            var g = a.length, v = g;
            for (g && a.push("-"); v < s; ) {
                var m = n;
                for (t = 0; t < e.length; t++) (r = e[t]) >= f && r < m && (m = r);
                var d = v + 1;
                if (m - f > o((n - c) / d)) throw RangeError(i);
                for (c += (m - f) * d, f = m, t = 0; t < e.length; t++) {
                    if ((r = e[t]) < f && ++c > n) throw RangeError(i);
                    if (r == f) {
                        for (var y = c, w = 36; ;w += 36) {
                            var b = w <= p ? 1 : w >= p + 26 ? 26 : w - p;
                            if (y < b) break;
                            var R = y - b, k = 36 - b;
                            a.push(u(h(b + R % k))), y = o(R / k);
                        }
                        a.push(u(h(y))), p = l(c, d, v == g), c = 0, ++v;
                    }
                }
                ++c, ++f;
            }
            return a.join("");
        };
        e.exports = function(e) {
            var t, r, n = [], i = e.toLowerCase().replace(s, ".").split(".");
            for (t = 0; t < i.length; t++) r = i[t], n.push(a.test(r) ? "xn--" + f(r) : r);
            return n.join(".");
        };
    },
    1979: function(e, t, r) {
        "use strict";
        r(43);
        var n = r(67), a = r(525), s = r(1880), i = r(207), o = r(225), u = r(217), h = r(556), l = r(208), f = r(135), c = r(215), p = r(218), g = r(528), v = r(200), m = r(139), d = r(224), y = r(538), w = r(1980), b = r(529), R = r(477), k = a("fetch"), L = a("Headers"), U = R("iterator"), S = "URLSearchParams", A = "URLSearchParamsIterator", q = l.set, B = l.getterFor(S), P = l.getterFor(A), x = /\+/g, E = Array(4), j = function(e) {
            return E[e - 1] || (E[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
        }, I = function(e) {
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return e;
            }
        }, C = function(e) {
            var t = e.replace(x, " "), r = 4;
            try {
                return decodeURIComponent(t);
            } catch (e) {
                for (;r; ) t = t.replace(j(r--), I);
                return t;
            }
        }, F = /[!'()~]|%20/g, O = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        }, T = function(e) {
            return O[e];
        }, D = function(e) {
            return encodeURIComponent(e).replace(F, T);
        }, J = function(e, t) {
            if (t) for (var r, n, a = t.split("&"), s = 0; s < a.length; ) (r = a[s++]).length && (n = r.split("="), 
            e.push({
                key: C(n.shift()),
                value: C(n.join("="))
            }));
        }, $ = function(e) {
            this.entries.length = 0, J(this.entries, e);
        }, M = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments");
        }, N = h((function(e, t) {
            q(this, {
                type: A,
                iterator: w(B(e).entries),
                kind: t
            });
        }), "Iterator", (function() {
            var e = P(this), t = e.kind, r = e.iterator.next(), n = r.value;
            return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [ n.key, n.value ]), 
            r;
        })), z = function() {
            f(this, z, S);
            var e, t, r, n, a, s, i, o, u, h = arguments.length > 0 ? arguments[0] : void 0, l = this, p = [];
            if (q(l, {
                type: S,
                entries: p,
                updateURL: function() {},
                updateSearchParams: $
            }), void 0 !== h) if (m(h)) if ("function" == typeof (e = b(h))) for (r = (t = e.call(h)).next; !(n = r.call(t)).done; ) {
                if ((i = (s = (a = w(v(n.value))).next).call(a)).done || (o = s.call(a)).done || !s.call(a).done) throw TypeError("Expected sequence with length 2");
                p.push({
                    key: i.value + "",
                    value: o.value + ""
                });
            } else for (u in h) c(h, u) && p.push({
                key: u,
                value: h[u] + ""
            }); else J(p, "string" == typeof h ? "?" === h.charAt(0) ? h.slice(1) : h : h + "");
        }, Z = z.prototype;
        o(Z, {
            append: function(e, t) {
                M(arguments.length, 2);
                var r = B(this);
                r.entries.push({
                    key: e + "",
                    value: t + ""
                }), r.updateURL();
            },
            delete: function(e) {
                M(arguments.length, 1);
                for (var t = B(this), r = t.entries, n = e + "", a = 0; a < r.length; ) r[a].key === n ? r.splice(a, 1) : a++;
                t.updateURL();
            },
            get: function(e) {
                M(arguments.length, 1);
                for (var t = B(this).entries, r = e + "", n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;
                return null;
            },
            getAll: function(e) {
                M(arguments.length, 1);
                for (var t = B(this).entries, r = e + "", n = [], a = 0; a < t.length; a++) t[a].key === r && n.push(t[a].value);
                return n;
            },
            has: function(e) {
                M(arguments.length, 1);
                for (var t = B(this).entries, r = e + "", n = 0; n < t.length; ) if (t[n++].key === r) return !0;
                return !1;
            },
            set: function(e, t) {
                M(arguments.length, 1);
                for (var r, n = B(this), a = n.entries, s = !1, i = e + "", o = t + "", u = 0; u < a.length; u++) (r = a[u]).key === i && (s ? a.splice(u--, 1) : (s = !0, 
                r.value = o));
                s || a.push({
                    key: i,
                    value: o
                }), n.updateURL();
            },
            sort: function() {
                var e, t, r, n = B(this), a = n.entries, s = a.slice();
                for (a.length = 0, r = 0; r < s.length; r++) {
                    for (e = s[r], t = 0; t < r; t++) if (a[t].key > e.key) {
                        a.splice(t, 0, e);
                        break;
                    }
                    t === r && a.push(e);
                }
                n.updateURL();
            },
            forEach: function(e) {
                for (var t, r = B(this).entries, n = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), a = 0; a < r.length; ) n((t = r[a++]).value, t.key, this);
            },
            keys: function() {
                return new N(this, "keys");
            },
            values: function() {
                return new N(this, "values");
            },
            entries: function() {
                return new N(this, "entries");
            }
        }, {
            enumerable: !0
        }), i(Z, U, Z.entries), i(Z, "toString", (function() {
            for (var e, t = B(this).entries, r = [], n = 0; n < t.length; ) e = t[n++], r.push(D(e.key) + "=" + D(e.value));
            return r.join("&");
        }), {
            enumerable: !0
        }), u(z, S), n({
            global: !0,
            forced: !s
        }, {
            URLSearchParams: z
        }), s || "function" != typeof k || "function" != typeof L || n({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(e) {
                var t, r, n, a = [ e ];
                return arguments.length > 1 && (m(t = arguments[1]) && (r = t.body, g(r) === S && ((n = t.headers ? new L(t.headers) : new L).has("content-type") || n.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), 
                t = d(t, {
                    body: y(0, String(r)),
                    headers: y(0, n)
                }))), a.push(t)), k.apply(this, a);
            }
        }), e.exports = {
            URLSearchParams: z,
            getState: B
        };
    },
    1980: function(e, t, r) {
        var n = r(200), a = r(529);
        e.exports = function(e) {
            var t = a(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return n(t.call(e));
        };
    },
    507: function(e, t, r) {
        "use strict";
        r(45);
        var n, a = r(67), s = r(124), i = r(1880), o = r(206), u = r(552), h = r(207), l = r(135), f = r(215), c = r(553), p = r(554), g = r(555).codeAt, v = r(1978), m = r(217), d = r(1979), y = r(208), w = o.URL, b = d.URLSearchParams, R = d.getState, k = y.set, L = y.getterFor("URL"), U = Math.floor, S = Math.pow, A = "Invalid scheme", q = "Invalid host", B = "Invalid port", P = /[A-Za-z]/, x = /[\d+\-.A-Za-z]/, E = /\d/, j = /^(0x|0X)/, I = /^[0-7]+$/, C = /^\d+$/, F = /^[\dA-Fa-f]+$/, O = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, T = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, D = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, J = /[\u0009\u000A\u000D]/g, $ = function(e, t) {
            var r, n, a;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return q;
                if (!(r = N(t.slice(1, -1)))) return q;
                e.host = r;
            } else if (V(e)) {
                if (t = v(t), O.test(t)) return q;
                if (null === (r = M(t))) return q;
                e.host = r;
            } else {
                if (T.test(t)) return q;
                for (r = "", n = p(t), a = 0; a < n.length; a++) r += K(n[a], Z);
                e.host = r;
            }
        }, M = function(e) {
            var t, r, n, a, s, i, o, u = e.split(".");
            if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
            for (r = [], n = 0; n < t; n++) {
                if ("" == (a = u[n])) return e;
                if (s = 10, a.length > 1 && "0" == a.charAt(0) && (s = j.test(a) ? 16 : 8, a = a.slice(8 == s ? 1 : 2)), 
                "" === a) i = 0; else {
                    if (!(10 == s ? C : 8 == s ? I : F).test(a)) return e;
                    i = parseInt(a, s);
                }
                r.push(i);
            }
            for (n = 0; n < t; n++) if (i = r[n], n == t - 1) {
                if (i >= S(256, 5 - t)) return null;
            } else if (i > 255) return null;
            for (o = r.pop(), n = 0; n < r.length; n++) o += r[n] * S(256, 3 - n);
            return o;
        }, N = function(e) {
            var t, r, n, a, s, i, o, u = [ 0, 0, 0, 0, 0, 0, 0, 0 ], h = 0, l = null, f = 0, c = function() {
                return e.charAt(f);
            };
            if (":" == c()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++h;
            }
            for (;c(); ) {
                if (8 == h) return;
                if (":" != c()) {
                    for (t = r = 0; r < 4 && F.test(c()); ) t = 16 * t + parseInt(c(), 16), f++, r++;
                    if ("." == c()) {
                        if (0 == r) return;
                        if (f -= r, h > 6) return;
                        for (n = 0; c(); ) {
                            if (a = null, n > 0) {
                                if (!("." == c() && n < 4)) return;
                                f++;
                            }
                            if (!E.test(c())) return;
                            for (;E.test(c()); ) {
                                if (s = parseInt(c(), 10), null === a) a = s; else {
                                    if (0 == a) return;
                                    a = 10 * a + s;
                                }
                                if (a > 255) return;
                                f++;
                            }
                            u[h] = 256 * u[h] + a, 2 != ++n && 4 != n || h++;
                        }
                        if (4 != n) return;
                        break;
                    }
                    if (":" == c()) {
                        if (f++, !c()) return;
                    } else if (c()) return;
                    u[h++] = t;
                } else {
                    if (null !== l) return;
                    f++, l = ++h;
                }
            }
            if (null !== l) for (i = h - l, h = 7; 0 != h && i > 0; ) o = u[h], u[h--] = u[l + i - 1], 
            u[l + --i] = o; else if (8 != h) return;
            return u;
        }, z = function(e) {
            var t, r, n, a;
            if ("number" == typeof e) {
                for (t = [], r = 0; r < 4; r++) t.unshift(e % 256), e = U(e / 256);
                return t.join(".");
            }
            if ("object" == typeof e) {
                for (t = "", n = function(e) {
                    for (var t = null, r = 1, n = null, a = 0, s = 0; s < 8; s++) 0 !== e[s] ? (a > r && (t = n, 
                    r = a), n = null, a = 0) : (null === n && (n = s), ++a);
                    return a > r && (t = n, r = a), t;
                }(e), r = 0; r < 8; r++) a && 0 === e[r] || (a && (a = !1), n === r ? (t += r ? ":" : "::", 
                a = !0) : (t += e[r].toString(16), r < 7 && (t += ":")));
                return "[" + t + "]";
            }
            return e;
        }, Z = {}, H = c({}, Z, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }), X = c({}, H, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }), G = c({}, X, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }), K = function(e, t) {
            var r = g(e, 0);
            return r > 32 && r < 127 && !f(t, e) ? e : encodeURIComponent(e);
        }, Q = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        }, V = function(e) {
            return f(Q, e.scheme);
        }, W = function(e) {
            return "" != e.username || "" != e.password;
        }, Y = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
        }, _ = function(e, t) {
            var r;
            return 2 == e.length && P.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r);
        }, ee = function(e) {
            var t;
            return e.length > 1 && _(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
        }, te = function(e) {
            var t = e.path, r = t.length;
            !r || "file" == e.scheme && 1 == r && _(t[0], !0) || t.pop();
        }, re = function(e) {
            return "." === e || "%2e" === e.toLowerCase();
        }, ne = {}, ae = {}, se = {}, ie = {}, oe = {}, ue = {}, he = {}, le = {}, fe = {}, ce = {}, pe = {}, ge = {}, ve = {}, me = {}, de = {}, ye = {}, we = {}, be = {}, Re = {}, ke = {}, Le = {}, Ue = function(e, t, r, a) {
            var s, i, o, u, h, l = r || ne, c = 0, g = "", v = !1, m = !1, d = !1;
            for (r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, 
            e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(D, "")), 
            t = t.replace(J, ""), s = p(t); c <= s.length; ) {
                switch (i = s[c], l) {
                  case ne:
                    if (!i || !P.test(i)) {
                        if (r) return A;
                        l = se;
                        continue;
                    }
                    g += i.toLowerCase(), l = ae;
                    break;

                  case ae:
                    if (i && (x.test(i) || "+" == i || "-" == i || "." == i)) g += i.toLowerCase(); else {
                        if (":" != i) {
                            if (r) return A;
                            g = "", l = se, c = 0;
                            continue;
                        }
                        if (r && (V(e) != f(Q, g) || "file" == g && (W(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                        if (e.scheme = g, r) return void (V(e) && Q[e.scheme] == e.port && (e.port = null));
                        g = "", "file" == e.scheme ? l = me : V(e) && a && a.scheme == e.scheme ? l = ie : V(e) ? l = le : "/" == s[c + 1] ? (l = oe, 
                        c++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = Re);
                    }
                    break;

                  case se:
                    if (!a || a.cannotBeABaseURL && "#" != i) return A;
                    if (a.cannotBeABaseURL && "#" == i) {
                        e.scheme = a.scheme, e.path = a.path.slice(), e.query = a.query, e.fragment = "", 
                        e.cannotBeABaseURL = !0, l = Le;
                        break;
                    }
                    l = "file" == a.scheme ? me : ue;
                    continue;

                  case ie:
                    if ("/" != i || "/" != s[c + 1]) {
                        l = ue;
                        continue;
                    }
                    l = fe, c++;
                    break;

                  case oe:
                    if ("/" == i) {
                        l = ce;
                        break;
                    }
                    l = be;
                    continue;

                  case ue:
                    if (e.scheme = a.scheme, i == n) e.username = a.username, e.password = a.password, 
                    e.host = a.host, e.port = a.port, e.path = a.path.slice(), e.query = a.query; else if ("/" == i || "\\" == i && V(e)) l = he; else if ("?" == i) e.username = a.username, 
                    e.password = a.password, e.host = a.host, e.port = a.port, e.path = a.path.slice(), 
                    e.query = "", l = ke; else {
                        if ("#" != i) {
                            e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                            e.path = a.path.slice(), e.path.pop(), l = be;
                            continue;
                        }
                        e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                        e.path = a.path.slice(), e.query = a.query, e.fragment = "", l = Le;
                    }
                    break;

                  case he:
                    if (!V(e) || "/" != i && "\\" != i) {
                        if ("/" != i) {
                            e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                            l = be;
                            continue;
                        }
                        l = ce;
                    } else l = fe;
                    break;

                  case le:
                    if (l = fe, "/" != i || "/" != g.charAt(c + 1)) continue;
                    c++;
                    break;

                  case fe:
                    if ("/" != i && "\\" != i) {
                        l = ce;
                        continue;
                    }
                    break;

                  case ce:
                    if ("@" == i) {
                        v && (g = "%40" + g), v = !0, o = p(g);
                        for (var y = 0; y < o.length; y++) {
                            var w = o[y];
                            if (":" != w || d) {
                                var b = K(w, G);
                                d ? e.password += b : e.username += b;
                            } else d = !0;
                        }
                        g = "";
                    } else if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && V(e)) {
                        if (v && "" == g) return "Invalid authority";
                        c -= p(g).length + 1, g = "", l = pe;
                    } else g += i;
                    break;

                  case pe:
                  case ge:
                    if (r && "file" == e.scheme) {
                        l = ye;
                        continue;
                    }
                    if (":" != i || m) {
                        if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && V(e)) {
                            if (V(e) && "" == g) return q;
                            if (r && "" == g && (W(e) || null !== e.port)) return;
                            if (u = $(e, g)) return u;
                            if (g = "", l = we, r) return;
                            continue;
                        }
                        "[" == i ? m = !0 : "]" == i && (m = !1), g += i;
                    } else {
                        if ("" == g) return q;
                        if (u = $(e, g)) return u;
                        if (g = "", l = ve, r == ge) return;
                    }
                    break;

                  case ve:
                    if (!E.test(i)) {
                        if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && V(e) || r) {
                            if ("" != g) {
                                var R = parseInt(g, 10);
                                if (R > 65535) return B;
                                e.port = V(e) && R === Q[e.scheme] ? null : R, g = "";
                            }
                            if (r) return;
                            l = we;
                            continue;
                        }
                        return B;
                    }
                    g += i;
                    break;

                  case me:
                    if (e.scheme = "file", "/" == i || "\\" == i) l = de; else {
                        if (!a || "file" != a.scheme) {
                            l = be;
                            continue;
                        }
                        if (i == n) e.host = a.host, e.path = a.path.slice(), e.query = a.query; else if ("?" == i) e.host = a.host, 
                        e.path = a.path.slice(), e.query = "", l = ke; else {
                            if ("#" != i) {
                                ee(s.slice(c).join("")) || (e.host = a.host, e.path = a.path.slice(), te(e)), l = be;
                                continue;
                            }
                            e.host = a.host, e.path = a.path.slice(), e.query = a.query, e.fragment = "", l = Le;
                        }
                    }
                    break;

                  case de:
                    if ("/" == i || "\\" == i) {
                        l = ye;
                        break;
                    }
                    a && "file" == a.scheme && !ee(s.slice(c).join("")) && (_(a.path[0], !0) ? e.path.push(a.path[0]) : e.host = a.host), 
                    l = be;
                    continue;

                  case ye:
                    if (i == n || "/" == i || "\\" == i || "?" == i || "#" == i) {
                        if (!r && _(g)) l = be; else if ("" == g) {
                            if (e.host = "", r) return;
                            l = we;
                        } else {
                            if (u = $(e, g)) return u;
                            if ("localhost" == e.host && (e.host = ""), r) return;
                            g = "", l = we;
                        }
                        continue;
                    }
                    g += i;
                    break;

                  case we:
                    if (V(e)) {
                        if (l = be, "/" != i && "\\" != i) continue;
                    } else if (r || "?" != i) if (r || "#" != i) {
                        if (i != n && (l = be, "/" != i)) continue;
                    } else e.fragment = "", l = Le; else e.query = "", l = ke;
                    break;

                  case be:
                    if (i == n || "/" == i || "\\" == i && V(e) || !r && ("?" == i || "#" == i)) {
                        if (".." === (h = (h = g).toLowerCase()) || "%2e." === h || ".%2e" === h || "%2e%2e" === h ? (te(e), 
                        "/" == i || "\\" == i && V(e) || e.path.push("")) : re(g) ? "/" == i || "\\" == i && V(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && _(g) && (e.host && (e.host = ""), 
                        g = g.charAt(0) + ":"), e.path.push(g)), g = "", "file" == e.scheme && (i == n || "?" == i || "#" == i)) for (;e.path.length > 1 && "" === e.path[0]; ) e.path.shift();
                        "?" == i ? (e.query = "", l = ke) : "#" == i && (e.fragment = "", l = Le);
                    } else g += K(i, X);
                    break;

                  case Re:
                    "?" == i ? (e.query = "", l = ke) : "#" == i ? (e.fragment = "", l = Le) : i != n && (e.path[0] += K(i, Z));
                    break;

                  case ke:
                    r || "#" != i ? i != n && ("'" == i && V(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : K(i, Z)) : (e.fragment = "", 
                    l = Le);
                    break;

                  case Le:
                    i != n && (e.fragment += K(i, H));
                }
                c++;
            }
        }, Se = function(e) {
            var t, r, n = l(this, Se, "URL"), a = arguments.length > 1 ? arguments[1] : void 0, i = String(e), o = k(n, {
                type: "URL"
            });
            if (void 0 !== a) if (a instanceof Se) t = L(a); else if (r = Ue(t = {}, String(a))) throw TypeError(r);
            if (r = Ue(o, i, null, t)) throw TypeError(r);
            var u = o.searchParams = new b, h = R(u);
            h.updateSearchParams(o.query), h.updateURL = function() {
                o.query = String(u) || null;
            }, s || (n.href = qe.call(n), n.origin = Be.call(n), n.protocol = Pe.call(n), n.username = xe.call(n), 
            n.password = Ee.call(n), n.host = je.call(n), n.hostname = Ie.call(n), n.port = Ce.call(n), 
            n.pathname = Fe.call(n), n.search = Oe.call(n), n.searchParams = Te.call(n), n.hash = De.call(n));
        }, Ae = Se.prototype, qe = function() {
            var e = L(this), t = e.scheme, r = e.username, n = e.password, a = e.host, s = e.port, i = e.path, o = e.query, u = e.fragment, h = t + ":";
            return null !== a ? (h += "//", W(e) && (h += r + (n ? ":" + n : "") + "@"), h += z(a), 
            null !== s && (h += ":" + s)) : "file" == t && (h += "//"), h += e.cannotBeABaseURL ? i[0] : i.length ? "/" + i.join("/") : "", 
            null !== o && (h += "?" + o), null !== u && (h += "#" + u), h;
        }, Be = function() {
            var e = L(this), t = e.scheme, r = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin;
            } catch (e) {
                return "null";
            }
            return "file" != t && V(e) ? t + "://" + z(e.host) + (null !== r ? ":" + r : "") : "null";
        }, Pe = function() {
            return L(this).scheme + ":";
        }, xe = function() {
            return L(this).username;
        }, Ee = function() {
            return L(this).password;
        }, je = function() {
            var e = L(this), t = e.host, r = e.port;
            return null === t ? "" : null === r ? z(t) : z(t) + ":" + r;
        }, Ie = function() {
            var e = L(this).host;
            return null === e ? "" : z(e);
        }, Ce = function() {
            var e = L(this).port;
            return null === e ? "" : String(e);
        }, Fe = function() {
            var e = L(this), t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
        }, Oe = function() {
            var e = L(this).query;
            return e ? "?" + e : "";
        }, Te = function() {
            return L(this).searchParams;
        }, De = function() {
            var e = L(this).fragment;
            return e ? "#" + e : "";
        }, Je = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            };
        };
        if (s && u(Ae, {
            href: Je(qe, (function(e) {
                var t = L(this), r = String(e), n = Ue(t, r);
                if (n) throw TypeError(n);
                R(t.searchParams).updateSearchParams(t.query);
            })),
            origin: Je(Be),
            protocol: Je(Pe, (function(e) {
                var t = L(this);
                Ue(t, String(e) + ":", ne);
            })),
            username: Je(xe, (function(e) {
                var t = L(this), r = p(String(e));
                if (!Y(t)) {
                    t.username = "";
                    for (var n = 0; n < r.length; n++) t.username += K(r[n], G);
                }
            })),
            password: Je(Ee, (function(e) {
                var t = L(this), r = p(String(e));
                if (!Y(t)) {
                    t.password = "";
                    for (var n = 0; n < r.length; n++) t.password += K(r[n], G);
                }
            })),
            host: Je(je, (function(e) {
                var t = L(this);
                t.cannotBeABaseURL || Ue(t, String(e), pe);
            })),
            hostname: Je(Ie, (function(e) {
                var t = L(this);
                t.cannotBeABaseURL || Ue(t, String(e), ge);
            })),
            port: Je(Ce, (function(e) {
                var t = L(this);
                Y(t) || ("" == (e = String(e)) ? t.port = null : Ue(t, e, ve));
            })),
            pathname: Je(Fe, (function(e) {
                var t = L(this);
                t.cannotBeABaseURL || (t.path = [], Ue(t, e + "", we));
            })),
            search: Je(Oe, (function(e) {
                var t = L(this);
                "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), 
                t.query = "", Ue(t, e, ke)), R(t.searchParams).updateSearchParams(t.query);
            })),
            searchParams: Je(Te),
            hash: Je(De, (function(e) {
                var t = L(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", 
                Ue(t, e, Le)) : t.fragment = null;
            }))
        }), h(Ae, "toJSON", (function() {
            return qe.call(this);
        }), {
            enumerable: !0
        }), h(Ae, "toString", (function() {
            return qe.call(this);
        }), {
            enumerable: !0
        }), w) {
            var $e = w.createObjectURL, Me = w.revokeObjectURL;
            $e && h(Se, "createObjectURL", (function(e) {
                return $e.apply(w, arguments);
            })), Me && h(Se, "revokeObjectURL", (function(e) {
                return Me.apply(w, arguments);
            }));
        }
        m(Se, "URL"), a({
            global: !0,
            forced: !i,
            sham: !s
        }, {
            URL: Se
        });
    }
} ]);
//# sourceMappingURL=Recommendations.~67e0fef6.js.map