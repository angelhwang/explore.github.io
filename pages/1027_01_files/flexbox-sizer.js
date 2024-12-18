(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 51 ], {
    1105: function(t, e, i) {
        "use strict";
        i.r(e), i.d(e, "default", (function() {
            return h;
        }));
        i(52), i(23), i(32), i(192), i(24);
        var r = i(338), n = i.n(r);
        i(21), i(66), i(83), i(107), i(44), i(195), i(85), i(11), i(84), i(45), i(46);
        function o(t) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        var s = 0, d = function() {
            function t(e, i) {
                var r = i.window, o = i.maxRatio, a = i.breakpoints;
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this._$grid = e, this._eventNS = ".flexbox-sizer-" + s++, this._$window = n()(r), 
                this._maxRatio = o, this._breakpoints = a, this.refresh(), this._bind();
            }
            var e, i, r;
            return e = t, (i = [ {
                key: "refresh",
                value: function() {
                    this._setGridData(), this._autoSizeGrid();
                }
            }, {
                key: "destroy",
                value: function() {
                    this._$window.off(this._eventNS);
                }
            }, {
                key: "_bind",
                value: function() {
                    var t = this;
                    this._$window.on("refresh-grids" + this._eventNS, (function() {
                        return t.refresh();
                    })), this._$window.on("resize" + this._eventNS, (function() {
                        return t._autoSizeGrid();
                    })), this._$window.on("orientationchange" + this._eventNS, (function() {
                        return t._autoSizeGrid();
                    }));
                }
            }, {
                key: "_getBreakpointModifier",
                value: function(t) {
                    return this._breakpoints.reduce((function(e, i) {
                        return i.width >= t && i.width < e.width ? i : e;
                    }), {
                        width: 1 / 0,
                        modifier: 1
                    }).modifier;
                }
            }, {
                key: "_getCssFloat",
                value: function(t, e) {
                    return parseFloat(window.getComputedStyle(t[0])[e]);
                }
            }, {
                key: "_autoSizeGrid",
                value: function() {
                    var t = this._$grid.css("boxSizing"), e = 2 * this._getCssFloat(this._$grid, "border-left-width"), i = 2 * this._getCssFloat(this._$grid, "padding-left"), r = this._getCssFloat(this._$grid, "width"), n = "border-box" !== t ? r : r - e - i;
                    this._recalcWidths(this._$grid, n);
                }
            }, {
                key: "_setGridData",
                value: function() {
                    this._gridData = this._getGridData(this._$grid);
                }
            }, {
                key: "_getGridData",
                value: function(t) {
                    var e = [];
                    return t.find(".js-grid-item-container").each((function() {
                        var t = n()(this), i = t.data("height") || t.height(), r = t.data("width") || t.width(), o = t.outerWidth(!0) - t.width(), a = t.data("flex-grow"), s = Math.round(a * i / r);
                        e.push({
                            $item: t,
                            flexWidth: a,
                            nonContentWidth: o,
                            flexHeight: s
                        });
                    })), e;
                }
            }, {
                key: "_recalcWidths",
                value: function(t, e) {
                    var i = this._gridData, r = this._getGridModifierData(i, e, 2), n = r.flexModifier, o = r.averageRowHeight, a = n < 2;
                    this._adjustWidths(i, a ? n : 1), this._toggleGridSpacer(t, !1);
                    var s = t.find(".js-grid-item-container").last().height();
                    this._toggleGridSpacer(t, !a || s / o > 2.5), this._setImageSizes(i), t.addClass("grid--ready");
                }
            }, {
                key: "_getGridModifierData",
                value: function(t, e, i) {
                    for (var r, n = this._getBreakpointModifier(e), a = 1, s = 0, d = 1 / 0, u = 1, h = -1; d / u > this._maxRatio && a < i; ) {
                        a = (1 + s * (h *= -1)) * n;
                        var f = o(this._getRowHeights(t, e, a).reverse());
                        d = f[0], u = (r = f.slice(1)).reduce((function(t, e) {
                            return t + e;
                        }), 0) / r.length, s += .005;
                    }
                    return {
                        averageRowHeight: u,
                        flexModifier: a
                    };
                }
            }, {
                key: "_setImageSizes",
                value: function(t) {
                    t.forEach((function(t) {
                        var e = t.$item, i = e.width();
                        e.find("img").attr({
                            sizes: i + "px",
                            "data-sizes": i + "px"
                        });
                    }));
                }
            }, {
                key: "_getRowHeights",
                value: function(t, e, i) {
                    return this._getGridDimensions(t, e, i).map((function(t) {
                        return t[0].height;
                    }));
                }
            }, {
                key: "_getGridDimensions",
                value: function(t, e, i) {
                    var r = [], n = [], o = e;
                    function a() {
                        var t = [], i = n.reduce((function(t, e) {
                            return t + e.modifiedFlexWidth;
                        }), 0), o = e / i;
                        n.length && (n.forEach((function(e) {
                            var i = e.modifiedFlexWidth * o, r = e.modifiedFlexHeight * o;
                            t.push({
                                width: i,
                                height: r
                            });
                        })), r.push(t)), n = [];
                    }
                    return t.forEach((function(t) {
                        var r = i * t.flexWidth + t.nonContentWidth, s = i * t.flexHeight;
                        o >= r ? o -= r : (a(), o = e - r), n.push({
                            modifiedFlexWidth: r,
                            modifiedFlexHeight: s
                        });
                    })), a(), r;
                }
            }, {
                key: "_adjustWidths",
                value: function(t, e) {
                    t.forEach((function(t) {
                        var i = t.$item, r = t.flexWidth, n = e * r;
                        i.width(n), i.css("flexGrow", "" + n);
                    }));
                }
            }, {
                key: "_toggleGridSpacer",
                value: function(t, e) {
                    var i = e ? "block" : "none";
                    t.find(".js-grid-spacer").toggleClass("grid__item-spacer", e).css({
                        display: i
                    });
                }
            } ]) && a(e.prototype, i), r && a(e, r), t;
        }();
        function u(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        var h = function() {
            function t(e) {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this.grids = n()(e.context).find(e.gridSelector).toArray().map((function(t) {
                    return new d(n()(t), e);
                }));
            }
            var e, i, r;
            return e = t, r = [ {
                key: "init",
                value: function(e) {
                    return new t(Object.assign({
                        window: window,
                        context: document.body,
                        gridSelector: ".js-grid-main",
                        maxRatio: 1.5,
                        breakpoints: [ {
                            width: 1325,
                            modifier: 220 / 260
                        }, {
                            width: 1024,
                            modifier: 170 / 260
                        }, {
                            width: 768,
                            modifier: .5
                        }, {
                            width: 540,
                            modifier: 90 / 260
                        } ]
                    }, e));
                }
            } ], (i = [ {
                key: "refresh",
                value: function() {
                    this.grids.forEach((function(t) {
                        return t.refresh();
                    }));
                }
            }, {
                key: "destroy",
                value: function() {
                    this.grids.forEach((function(t) {
                        return t.destroy();
                    }));
                }
            } ]) && u(e.prototype, i), r && u(e, r), t;
        }();
    }
} ]);
//# sourceMappingURL=flexbox-sizer.js.map