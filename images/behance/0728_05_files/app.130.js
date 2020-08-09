(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 130 ], {
    490: function(e, t, i) {
        var a = i(781);
        "string" == typeof a && (a = [ [ e.i, a, "" ] ]), a.locals && (e.exports = a.locals);
        (0, i(185).default)("8fc2c684", a, !0, {});
    },
    771: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = i(13), s = i(16), r = i(779), n = "viewcount_updated", l = "progress", o = "livestream_ended", d = "stream_health_update", u = "HIGH", c = "LOW", h = "NONE", f = s.default.extend({
            data: function() {
                return {
                    isMounted: !1,
                    loggingInterval: 0,
                    currentTime: 0,
                    lastLogTime: 0
                };
            },
            props: {
                iframeUrl: {
                    type: String,
                    required: !0
                },
                suppressViewCount: {
                    type: Boolean,
                    default: !1
                },
                disableUi: {
                    type: Boolean,
                    default: !1
                },
                isDashboard: {
                    type: Boolean,
                    default: !1
                },
                muted: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    required: !0
                },
                pauseWhenHidden: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                handlePostmessage: function(e) {
                    try {
                        var t = void 0;
                        if ("string" == typeof e.data && (t = JSON.parse(e.data)), "livestream" !== t.source) return;
                        if (!t.type) return;
                        switch (t.type) {
                          case n:
                            this.$emit("updateViewcount", t.viewcount), this.$emit("updateUniqueViewcount", t.unique_viewers);
                            break;

                          case l:
                            this.currentTime = t.current_time, this.$emit("progress", t.current_time);
                            break;

                          case o:
                            this.$emit("livestreamEnded");
                            break;

                          case d:
                            if (t.payload.error_level === t.payload.last_error_level) break;
                            this.$emit("connectivityErrorChanged", t.payload.error_level), t.payload.error_level !== u && t.payload.error_level !== c || this.$emit("connectivityError"), 
                            t.payload.error_level === h && this.$emit("connectivityErrorCleared");
                        }
                    } catch (e) {
                        return;
                    }
                },
                videoPlayerVisibilityChanged: function(e) {
                    this.pauseWhenHidden && Object(r.default)({
                        source: "livestream",
                        action: e ? "play" : "pause"
                    }, "*", this.$refs.iframe.contentWindow), this.$emit("videoVisibilityChanged");
                },
                handlePageVisibilityChange: function() {
                    if (this.pauseWhenHidden) {
                        var e = "visible" === document.visibilityState;
                        Object(r.default)({
                            source: "livestream",
                            action: e ? "play" : "pause"
                        }, "*", this.$refs.iframe.contentWindow);
                    }
                    this.$emit("pageVisibilityChanged");
                },
                bindAnalytics: function() {
                    var e = this;
                    clearInterval(this.loggingInterval);
                    var t = !0, i = function() {
                        var i = Math.round(1e3 * e.currentTime);
                        e.$emit("analytics", {
                            current_time_ms: i,
                            last_time_ms: e.lastLogTime,
                            ping_time_interval_ms: 1e4,
                            tab_focused: "visible" === document.visibilityState,
                            full_screen: document.fullscreen,
                            is_first_log: t
                        }), t = !1, e.lastLogTime = i;
                    };
                    this.loggingInterval = window.setInterval(i, 1e4), i();
                }
            },
            computed: {
                iframeUrlWithParams: function() {
                    if (this.iframeUrl) {
                        var e = new URL(this.iframeUrl), t = new URLSearchParams(e.search.slice(1));
                        if (this.isMounted) {
                            var i = new URLSearchParams(a.default.location.search).get("t");
                            i && t.append("t", i);
                        }
                        this.suppressViewCount && t.append("suppress_view_count", "true"), this.disableUi && t.append("disable_ui", "true"), 
                        this.isDashboard && t.append("dashboard", "true"), this.muted && t.append("muted", "true");
                        var s = t.toString() ? "?" + t.toString() : "";
                        return "" + e.origin + e.pathname + s + e.hash;
                    }
                }
            },
            mounted: function() {
                this.isMounted = !0, a.default.addEventListener("visibilitychange", this.handlePageVisibilityChange, !1), 
                a.default.addEventListener("message", this.handlePostmessage, !1), this.bindAnalytics();
            },
            beforeDestroy: function() {
                a.default.removeEventListener("visibilitychange", this.handlePageVisibilityChange), 
                a.default.removeEventListener("message", this.handlePostmessage), clearInterval(this.loggingInterval);
            }
        }), p = i(780), v = i(64);
        var m = Object(v.default)(f, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {
                directives: [ {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: this.videoPlayerVisibilityChanged,
                    expression: "videoPlayerVisibilityChanged"
                } ],
                class: this.$style.video,
                attrs: {
                    "data-ut": "iframe-container"
                }
            }, [ this.isMounted ? t("iframe", {
                ref: "iframe",
                class: this.$style.video,
                attrs: {
                    src: this.iframeUrlWithParams,
                    title: this.title,
                    allow: "autoplay; picture-in-picture",
                    allowfullscreen: "1"
                }
            }) : this._e() ]);
        }, [], !1, function(e) {
            this.$style = p.default.locals || p.default;
        }, null, null);
        t.default = m.exports;
    },
    779: function(e, t, i) {
        e.exports = i(2)(206);
    },
    780: function(e, t, i) {
        "use strict";
        var a = i(490), s = i.n(a);
        t.default = s.a;
    },
    781: function(e, t, i) {
        (t = e.exports = i(184)(!1)).push([ e.i, ".VideoPlayer-video-k5Z {\n  background: #000;\n  height: 100%;\n  width: 100%;\n}\n", "" ]), 
        t.locals = {
            video: "VideoPlayer-video-k5Z"
        };
    }
} ]);