/*! For license information please see Recommendations.~bba3b34b.js.LICENSE.txt */
(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 1 ], {
    540: function(e, r, i) {
        var n, t;
        void 0 === (t = "function" == typeof (n = function() {
            var e, r, i, n, t, l = "2.0.6", o = {}, a = {}, s = {
                currentLocale: "en",
                zeroFormat: null,
                nullFormat: null,
                defaultFormat: "0,0",
                scalePercentBy100: !0
            }, u = {
                currentLocale: s.currentLocale,
                zeroFormat: s.zeroFormat,
                nullFormat: s.nullFormat,
                defaultFormat: s.defaultFormat,
                scalePercentBy100: s.scalePercentBy100
            };
            function c(e, r) {
                this._input = e, this._value = r;
            }
            return (e = function(i) {
                var n, t, l, a;
                if (e.isNumeral(i)) n = i.value(); else if (0 === i || void 0 === i) n = 0; else if (null === i || r.isNaN(i)) n = null; else if ("string" == typeof i) if (u.zeroFormat && i === u.zeroFormat) n = 0; else if (u.nullFormat && i === u.nullFormat || !i.replace(/[^0-9]+/g, "").length) n = null; else {
                    for (t in o) if ((a = "function" == typeof o[t].regexps.unformat ? o[t].regexps.unformat() : o[t].regexps.unformat) && i.match(a)) {
                        l = o[t].unformat;
                        break;
                    }
                    n = (l = l || e._.stringToNumber)(i);
                } else n = Number(i) || null;
                return new c(i, n);
            }).version = l, e.isNumeral = function(e) {
                return e instanceof c;
            }, e._ = r = {
                numberToFormat: function(r, i, n) {
                    var t, l, o, s, u, c, m, d = a[e.options.currentLocale], b = !1, f = !1, h = 0, g = "", y = 1e12, p = 1e9, v = 1e6, _ = 1e3, F = "", x = !1;
                    if (r = r || 0, l = Math.abs(r), e._.includes(i, "(") ? (b = !0, i = i.replace(/[\(|\)]/g, "")) : (e._.includes(i, "+") || e._.includes(i, "-")) && (u = e._.includes(i, "+") ? i.indexOf("+") : r < 0 ? i.indexOf("-") : -1, 
                    i = i.replace(/[\+|\-]/g, "")), e._.includes(i, "a") && (t = !!(t = i.match(/a(k|m|b|t)?/)) && t[1], 
                    e._.includes(i, " a") && (g = " "), i = i.replace(new RegExp(g + "a[kmbt]?"), ""), 
                    l >= y && !t || "t" === t ? (g += d.abbreviations.trillion, r /= y) : l < y && l >= p && !t || "b" === t ? (g += d.abbreviations.billion, 
                    r /= p) : l < p && l >= v && !t || "m" === t ? (g += d.abbreviations.million, r /= v) : (l < v && l >= _ && !t || "k" === t) && (g += d.abbreviations.thousand, 
                    r /= _)), e._.includes(i, "[.]") && (f = !0, i = i.replace("[.]", ".")), o = r.toString().split(".")[0], 
                    s = i.split(".")[1], c = i.indexOf(","), h = (i.split(".")[0].split(",")[0].match(/0/g) || []).length, 
                    s ? (e._.includes(s, "[") ? (s = (s = s.replace("]", "")).split("["), F = e._.toFixed(r, s[0].length + s[1].length, n, s[1].length)) : F = e._.toFixed(r, s.length, n), 
                    o = F.split(".")[0], F = e._.includes(F, ".") ? d.delimiters.decimal + F.split(".")[1] : "", 
                    f && 0 === Number(F.slice(1)) && (F = "")) : o = e._.toFixed(r, 0, n), g && !t && Number(o) >= 1e3 && g !== d.abbreviations.trillion) switch (o = String(Number(o) / 1e3), 
                    g) {
                      case d.abbreviations.thousand:
                        g = d.abbreviations.million;
                        break;

                      case d.abbreviations.million:
                        g = d.abbreviations.billion;
                        break;

                      case d.abbreviations.billion:
                        g = d.abbreviations.trillion;
                    }
                    if (e._.includes(o, "-") && (o = o.slice(1), x = !0), o.length < h) for (var k = h - o.length; k > 0; k--) o = "0" + o;
                    return c > -1 && (o = o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + d.delimiters.thousands)), 
                    0 === i.indexOf(".") && (o = ""), m = o + F + (g || ""), b ? m = (b && x ? "(" : "") + m + (b && x ? ")" : "") : u >= 0 ? m = 0 === u ? (x ? "-" : "+") + m : m + (x ? "-" : "+") : x && (m = "-" + m), 
                    m;
                },
                stringToNumber: function(e) {
                    var r, i, n, t = a[u.currentLocale], l = e, o = {
                        thousand: 3,
                        million: 6,
                        billion: 9,
                        trillion: 12
                    };
                    if (u.zeroFormat && e === u.zeroFormat) i = 0; else if (u.nullFormat && e === u.nullFormat || !e.replace(/[^0-9]+/g, "").length) i = null; else {
                        for (r in i = 1, "." !== t.delimiters.decimal && (e = e.replace(/\./g, "").replace(t.delimiters.decimal, ".")), 
                        o) if (n = new RegExp("[^a-zA-Z]" + t.abbreviations[r] + "(?:\\)|(\\" + t.currency.symbol + ")?(?:\\))?)?$"), 
                        l.match(n)) {
                            i *= Math.pow(10, o[r]);
                            break;
                        }
                        i *= (e.split("-").length + Math.min(e.split("(").length - 1, e.split(")").length - 1)) % 2 ? 1 : -1, 
                        e = e.replace(/[^0-9\.]+/g, ""), i *= Number(e);
                    }
                    return i;
                },
                isNaN: function(e) {
                    return "number" == typeof e && isNaN(e);
                },
                includes: function(e, r) {
                    return -1 !== e.indexOf(r);
                },
                insert: function(e, r, i) {
                    return e.slice(0, i) + r + e.slice(i);
                },
                reduce: function(e, r) {
                    if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                    if ("function" != typeof r) throw new TypeError(r + " is not a function");
                    var i, n = Object(e), t = n.length >>> 0, l = 0;
                    if (3 === arguments.length) i = arguments[2]; else {
                        for (;l < t && !(l in n); ) l++;
                        if (l >= t) throw new TypeError("Reduce of empty array with no initial value");
                        i = n[l++];
                    }
                    for (;l < t; l++) l in n && (i = r(i, n[l], l, n));
                    return i;
                },
                multiplier: function(e) {
                    var r = e.toString().split(".");
                    return r.length < 2 ? 1 : Math.pow(10, r[1].length);
                },
                correctionFactor: function() {
                    return Array.prototype.slice.call(arguments).reduce((function(e, i) {
                        var n = r.multiplier(i);
                        return e > n ? e : n;
                    }), 1);
                },
                toFixed: function(e, r, i, n) {
                    var t, l, o, a, s = e.toString().split("."), u = r - (n || 0);
                    return t = 2 === s.length ? Math.min(Math.max(s[1].length, u), r) : u, o = Math.pow(10, t), 
                    a = (i(e + "e+" + t) / o).toFixed(t), n > r - t && (l = new RegExp("\\.?0{1," + (n - (r - t)) + "}$"), 
                    a = a.replace(l, "")), a;
                }
            }, e.options = u, e.formats = o, e.locales = a, e.locale = function(e) {
                return e && (u.currentLocale = e.toLowerCase()), u.currentLocale;
            }, e.localeData = function(e) {
                if (!e) return a[u.currentLocale];
                if (e = e.toLowerCase(), !a[e]) throw new Error("Unknown locale : " + e);
                return a[e];
            }, e.reset = function() {
                for (var e in s) u[e] = s[e];
            }, e.zeroFormat = function(e) {
                u.zeroFormat = "string" == typeof e ? e : null;
            }, e.nullFormat = function(e) {
                u.nullFormat = "string" == typeof e ? e : null;
            }, e.defaultFormat = function(e) {
                u.defaultFormat = "string" == typeof e ? e : "0.0";
            }, e.register = function(e, r, i) {
                if (r = r.toLowerCase(), this[e + "s"][r]) throw new TypeError(r + " " + e + " already registered.");
                return this[e + "s"][r] = i, i;
            }, e.validate = function(r, i) {
                var n, t, l, o, a, s, u, c;
                if ("string" != typeof r && (r += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", r)), 
                (r = r.trim()).match(/^\d+$/)) return !0;
                if ("" === r) return !1;
                try {
                    u = e.localeData(i);
                } catch (r) {
                    u = e.localeData(e.locale());
                }
                return l = u.currency.symbol, a = u.abbreviations, n = u.delimiters.decimal, t = "." === u.delimiters.thousands ? "\\." : u.delimiters.thousands, 
                !(null !== (c = r.match(/^[^\d]+/)) && (r = r.substr(1), c[0] !== l) || null !== (c = r.match(/[^\d]+$/)) && (r = r.slice(0, -1), 
                c[0] !== a.thousand && c[0] !== a.million && c[0] !== a.billion && c[0] !== a.trillion) || (s = new RegExp(t + "{2}"), 
                r.match(/[^\d.,]/g) || (o = r.split(n)).length > 2 || (o.length < 2 ? !o[0].match(/^\d+.*\d$/) || o[0].match(s) : 1 === o[0].length ? !o[0].match(/^\d+$/) || o[0].match(s) || !o[1].match(/^\d+$/) : !o[0].match(/^\d+.*\d$/) || o[0].match(s) || !o[1].match(/^\d+$/))));
            }, e.fn = c.prototype = {
                clone: function() {
                    return e(this);
                },
                format: function(r, i) {
                    var n, t, l, a = this._value, s = r || u.defaultFormat;
                    if (i = i || Math.round, 0 === a && null !== u.zeroFormat) t = u.zeroFormat; else if (null === a && null !== u.nullFormat) t = u.nullFormat; else {
                        for (n in o) if (s.match(o[n].regexps.format)) {
                            l = o[n].format;
                            break;
                        }
                        t = (l = l || e._.numberToFormat)(a, s, i);
                    }
                    return t;
                },
                value: function() {
                    return this._value;
                },
                input: function() {
                    return this._input;
                },
                set: function(e) {
                    return this._value = Number(e), this;
                },
                add: function(e) {
                    var i = r.correctionFactor.call(null, this._value, e);
                    function n(e, r, n, t) {
                        return e + Math.round(i * r);
                    }
                    return this._value = r.reduce([ this._value, e ], n, 0) / i, this;
                },
                subtract: function(e) {
                    var i = r.correctionFactor.call(null, this._value, e);
                    function n(e, r, n, t) {
                        return e - Math.round(i * r);
                    }
                    return this._value = r.reduce([ e ], n, Math.round(this._value * i)) / i, this;
                },
                multiply: function(e) {
                    function i(e, i, n, t) {
                        var l = r.correctionFactor(e, i);
                        return Math.round(e * l) * Math.round(i * l) / Math.round(l * l);
                    }
                    return this._value = r.reduce([ this._value, e ], i, 1), this;
                },
                divide: function(e) {
                    function i(e, i, n, t) {
                        var l = r.correctionFactor(e, i);
                        return Math.round(e * l) / Math.round(i * l);
                    }
                    return this._value = r.reduce([ this._value, e ], i), this;
                },
                difference: function(r) {
                    return Math.abs(e(this._value).subtract(r).value());
                }
            }, e.register("locale", "en", {
                delimiters: {
                    thousands: ",",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    var r = e % 10;
                    return 1 == ~~(e % 100 / 10) ? "th" : 1 === r ? "st" : 2 === r ? "nd" : 3 === r ? "rd" : "th";
                },
                currency: {
                    symbol: "$"
                }
            }), e.register("format", "bps", {
                regexps: {
                    format: /(BPS)/,
                    unformat: /(BPS)/
                },
                format: function(r, i, n) {
                    var t, l = e._.includes(i, " BPS") ? " " : "";
                    return r *= 1e4, i = i.replace(/\s?BPS/, ""), t = e._.numberToFormat(r, i, n), e._.includes(t, ")") ? ((t = t.split("")).splice(-1, 0, l + "BPS"), 
                    t = t.join("")) : t = t + l + "BPS", t;
                },
                unformat: function(r) {
                    return +(1e-4 * e._.stringToNumber(r)).toFixed(15);
                }
            }), n = {
                base: 1024,
                suffixes: [ "B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB" ]
            }, t = "(" + (t = (i = {
                base: 1e3,
                suffixes: [ "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ]
            }).suffixes.concat(n.suffixes.filter((function(e) {
                return i.suffixes.indexOf(e) < 0;
            }))).join("|")).replace("B", "B(?!PS)") + ")", e.register("format", "bytes", {
                regexps: {
                    format: /([0\s]i?b)/,
                    unformat: new RegExp(t)
                },
                format: function(r, t, l) {
                    var o, a, s, u = e._.includes(t, "ib") ? n : i, c = e._.includes(t, " b") || e._.includes(t, " ib") ? " " : "";
                    for (t = t.replace(/\s?i?b/, ""), o = 0; o <= u.suffixes.length; o++) if (a = Math.pow(u.base, o), 
                    s = Math.pow(u.base, o + 1), null === r || 0 === r || r >= a && r < s) {
                        c += u.suffixes[o], a > 0 && (r /= a);
                        break;
                    }
                    return e._.numberToFormat(r, t, l) + c;
                },
                unformat: function(r) {
                    var t, l, o = e._.stringToNumber(r);
                    if (o) {
                        for (t = i.suffixes.length - 1; t >= 0; t--) {
                            if (e._.includes(r, i.suffixes[t])) {
                                l = Math.pow(i.base, t);
                                break;
                            }
                            if (e._.includes(r, n.suffixes[t])) {
                                l = Math.pow(n.base, t);
                                break;
                            }
                        }
                        o *= l || 1;
                    }
                    return o;
                }
            }), e.register("format", "currency", {
                regexps: {
                    format: /(\$)/
                },
                format: function(r, i, n) {
                    var t, l, o = e.locales[e.options.currentLocale], a = {
                        before: i.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                        after: i.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                    };
                    for (i = i.replace(/\s?\$\s?/, ""), t = e._.numberToFormat(r, i, n), r >= 0 ? (a.before = a.before.replace(/[\-\(]/, ""), 
                    a.after = a.after.replace(/[\-\)]/, "")) : r < 0 && !e._.includes(a.before, "-") && !e._.includes(a.before, "(") && (a.before = "-" + a.before), 
                    l = 0; l < a.before.length; l++) switch (a.before[l]) {
                      case "$":
                        t = e._.insert(t, o.currency.symbol, l);
                        break;

                      case " ":
                        t = e._.insert(t, " ", l + o.currency.symbol.length - 1);
                    }
                    for (l = a.after.length - 1; l >= 0; l--) switch (a.after[l]) {
                      case "$":
                        t = l === a.after.length - 1 ? t + o.currency.symbol : e._.insert(t, o.currency.symbol, -(a.after.length - (1 + l)));
                        break;

                      case " ":
                        t = l === a.after.length - 1 ? t + " " : e._.insert(t, " ", -(a.after.length - (1 + l) + o.currency.symbol.length - 1));
                    }
                    return t;
                }
            }), e.register("format", "exponential", {
                regexps: {
                    format: /(e\+|e-)/,
                    unformat: /(e\+|e-)/
                },
                format: function(r, i, n) {
                    var t = ("number" != typeof r || e._.isNaN(r) ? "0e+0" : r.toExponential()).split("e");
                    return i = i.replace(/e[\+|\-]{1}0/, ""), e._.numberToFormat(Number(t[0]), i, n) + "e" + t[1];
                },
                unformat: function(r) {
                    var i = e._.includes(r, "e+") ? r.split("e+") : r.split("e-"), n = Number(i[0]), t = Number(i[1]);
                    function l(r, i, n, t) {
                        var l = e._.correctionFactor(r, i);
                        return r * l * (i * l) / (l * l);
                    }
                    return t = e._.includes(r, "e-") ? t *= -1 : t, e._.reduce([ n, Math.pow(10, t) ], l, 1);
                }
            }), e.register("format", "ordinal", {
                regexps: {
                    format: /(o)/
                },
                format: function(r, i, n) {
                    var t = e.locales[e.options.currentLocale], l = e._.includes(i, " o") ? " " : "";
                    return i = i.replace(/\s?o/, ""), l += t.ordinal(r), e._.numberToFormat(r, i, n) + l;
                }
            }), e.register("format", "percentage", {
                regexps: {
                    format: /(%)/,
                    unformat: /(%)/
                },
                format: function(r, i, n) {
                    var t, l = e._.includes(i, " %") ? " " : "";
                    return e.options.scalePercentBy100 && (r *= 100), i = i.replace(/\s?\%/, ""), t = e._.numberToFormat(r, i, n), 
                    e._.includes(t, ")") ? ((t = t.split("")).splice(-1, 0, l + "%"), t = t.join("")) : t = t + l + "%", 
                    t;
                },
                unformat: function(r) {
                    var i = e._.stringToNumber(r);
                    return e.options.scalePercentBy100 ? .01 * i : i;
                }
            }), e.register("format", "time", {
                regexps: {
                    format: /(:)/,
                    unformat: /(:)/
                },
                format: function(e, r, i) {
                    var n = Math.floor(e / 60 / 60), t = Math.floor((e - 60 * n * 60) / 60), l = Math.round(e - 60 * n * 60 - 60 * t);
                    return n + ":" + (t < 10 ? "0" + t : t) + ":" + (l < 10 ? "0" + l : l);
                },
                unformat: function(e) {
                    var r = e.split(":"), i = 0;
                    return 3 === r.length ? (i += 60 * Number(r[0]) * 60, i += 60 * Number(r[1]), i += Number(r[2])) : 2 === r.length && (i += 60 * Number(r[0]), 
                    i += Number(r[1])), Number(i);
                }
            }), e;
        }) ? n.call(r, i, r, e) : n) || (e.exports = t);
    },
    545: function(e, r, i) {
        var n, t, l;
        t = [ i(540) ], void 0 === (l = "function" == typeof (n = function(e) {
            var r;
            e.register("locale", "bg", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "хил",
                    million: "млн",
                    billion: "млрд",
                    trillion: "трлн"
                },
                ordinal: function(e) {
                    return "";
                },
                currency: {
                    symbol: "лв"
                }
            }), e.register("locale", "chs", {
                delimiters: {
                    thousands: ",",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "千",
                    million: "百万",
                    billion: "十亿",
                    trillion: "兆"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "¥"
                }
            }), e.register("locale", "cs", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "tis.",
                    million: "mil.",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function() {
                    return ".";
                },
                currency: {
                    symbol: "Kč"
                }
            }), e.register("locale", "da-dk", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "mio",
                    billion: "mia",
                    trillion: "b"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "DKK"
                }
            }), e.register("locale", "de-ch", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "CHF"
                }
            }), e.register("locale", "de", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "en-au", {
                delimiters: {
                    thousands: ",",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    var r = e % 10;
                    return 1 == ~~(e % 100 / 10) ? "th" : 1 === r ? "st" : 2 === r ? "nd" : 3 === r ? "rd" : "th";
                },
                currency: {
                    symbol: "$"
                }
            }), e.register("locale", "en-gb", {
                delimiters: {
                    thousands: ",",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    var r = e % 10;
                    return 1 == ~~(e % 100 / 10) ? "th" : 1 === r ? "st" : 2 === r ? "nd" : 3 === r ? "rd" : "th";
                },
                currency: {
                    symbol: "£"
                }
            }), e.register("locale", "en-za", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    var r = e % 10;
                    return 1 == ~~(e % 100 / 10) ? "th" : 1 === r ? "st" : 2 === r ? "nd" : 3 === r ? "rd" : "th";
                },
                currency: {
                    symbol: "R"
                }
            }), e.register("locale", "es-es", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "mm",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    var r = e % 10;
                    return 1 === r || 3 === r ? "er" : 2 === r ? "do" : 7 === r || 0 === r ? "mo" : 8 === r ? "vo" : 9 === r ? "no" : "to";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "es", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "mm",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    var r = e % 10;
                    return 1 === r || 3 === r ? "er" : 2 === r ? "do" : 7 === r || 0 === r ? "mo" : 8 === r ? "vo" : 9 === r ? "no" : "to";
                },
                currency: {
                    symbol: "$"
                }
            }), e.register("locale", "et", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: " tuh",
                    million: " mln",
                    billion: " mld",
                    trillion: " trl"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "fi", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "M",
                    billion: "G",
                    trillion: "T"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "fr-ca", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "M",
                    billion: "G",
                    trillion: "T"
                },
                ordinal: function(e) {
                    return 1 === e ? "er" : "e";
                },
                currency: {
                    symbol: "$"
                }
            }), e.register("locale", "fr-ch", {
                delimiters: {
                    thousands: "'",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return 1 === e ? "er" : "e";
                },
                currency: {
                    symbol: "CHF"
                }
            }), e.register("locale", "fr", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return 1 === e ? "er" : "e";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "hu", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "E",
                    million: "M",
                    billion: "Mrd",
                    trillion: "T"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: " Ft"
                }
            }), e.register("locale", "it", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "mila",
                    million: "mil",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return "º";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "ja", {
                delimiters: {
                    thousands: ",",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "千",
                    million: "百万",
                    billion: "十億",
                    trillion: "兆"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "¥"
                }
            }), e.register("locale", "lv", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: " tūkst.",
                    million: " milj.",
                    billion: " mljrd.",
                    trillion: " trilj."
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "nl-be", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: " mln",
                    billion: " mld",
                    trillion: " bln"
                },
                ordinal: function(e) {
                    var r = e % 100;
                    return 0 !== e && r <= 1 || 8 === r || r >= 20 ? "ste" : "de";
                },
                currency: {
                    symbol: "€ "
                }
            }), e.register("locale", "nl-nl", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "mln",
                    billion: "mrd",
                    trillion: "bln"
                },
                ordinal: function(e) {
                    var r = e % 100;
                    return 0 !== e && r <= 1 || 8 === r || r >= 20 ? "ste" : "de";
                },
                currency: {
                    symbol: "€ "
                }
            }), e.register("locale", "no", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "kr"
                }
            }), e.register("locale", "pl", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "tys.",
                    million: "mln",
                    billion: "mld",
                    trillion: "bln"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "PLN"
                }
            }), e.register("locale", "pt-br", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "mil",
                    million: "milhões",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return "º";
                },
                currency: {
                    symbol: "R$"
                }
            }), e.register("locale", "pt-pt", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "m",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function(e) {
                    return "º";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "ru-ua", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "тыс.",
                    million: "млн",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function() {
                    return ".";
                },
                currency: {
                    symbol: "₴"
                }
            }), e.register("locale", "ru", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "тыс.",
                    million: "млн.",
                    billion: "млрд.",
                    trillion: "трлн."
                },
                ordinal: function() {
                    return ".";
                },
                currency: {
                    symbol: "руб."
                }
            }), e.register("locale", "sk", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "tis.",
                    million: "mil.",
                    billion: "b",
                    trillion: "t"
                },
                ordinal: function() {
                    return ".";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "sl", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "k",
                    million: "mio",
                    billion: "mrd",
                    trillion: "trilijon"
                },
                ordinal: function() {
                    return ".";
                },
                currency: {
                    symbol: "€"
                }
            }), e.register("locale", "th", {
                delimiters: {
                    thousands: ",",
                    decimal: "."
                },
                abbreviations: {
                    thousand: "พัน",
                    million: "ล้าน",
                    billion: "พันล้าน",
                    trillion: "ล้านล้าน"
                },
                ordinal: function(e) {
                    return ".";
                },
                currency: {
                    symbol: "฿"
                }
            }), r = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            }, e.register("locale", "tr", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "bin",
                    million: "milyon",
                    billion: "milyar",
                    trillion: "trilyon"
                },
                ordinal: function(e) {
                    if (0 === e) return "'ıncı";
                    var i = e % 10, n = e % 100 - i, t = e >= 100 ? 100 : null;
                    return r[i] || r[n] || r[t];
                },
                currency: {
                    symbol: "₺"
                }
            }), e.register("locale", "uk-ua", {
                delimiters: {
                    thousands: " ",
                    decimal: ","
                },
                abbreviations: {
                    thousand: "тис.",
                    million: "млн",
                    billion: "млрд",
                    trillion: "блн"
                },
                ordinal: function() {
                    return "";
                },
                currency: {
                    symbol: "₴"
                }
            }), e.register("locale", "vi", {
                delimiters: {
                    thousands: ".",
                    decimal: ","
                },
                abbreviations: {
                    thousand: " nghìn",
                    million: " triệu",
                    billion: " tỷ",
                    trillion: " nghìn tỷ"
                },
                ordinal: function() {
                    return ".";
                },
                currency: {
                    symbol: "₫"
                }
            });
        }) ? n.apply(r, t) : n) || (e.exports = l);
    }
} ]);
//# sourceMappingURL=Recommendations.~bba3b34b.js.map