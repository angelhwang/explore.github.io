(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 149, 29, 30 ], {
    1069: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0), r = n(53), s = n(601);
        t.default = {
            actions: Object(o.__assign)({}, Object(r.a)("footer", [ s.ACTIONS.USER_CLICKED_OPEN_APPS_LINK, s.ACTIONS.USER_CLICKED_CLOSE_APPS_MODAL ], "analytics"))
        };
    },
    1107: function(e, t, n) {
        "use strict";
        n.r(t);
        n(22), n(21), n(23), n(29), n(30), n(25), n(24);
        var o = n(81), r = n(121), s = n(0), a = n(53), i = {
            actions: Object(s.__assign)({}, Object(a.a)("downloadAppModal", [ r.a.SMS_SENT_SUCCESS_ACTION ], "analytics"))
        }, l = n(601);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    p(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var d = {
            components: {
                DownloadAppModal: n(1108).a
            },
            computed: c({}, Object(o.mapState)({
                isLoggedIn: function(e) {
                    return Boolean(e.user.loggedInUser);
                },
                isAppModalOpen: function(e) {
                    return e.footer.isAppModalOpen;
                },
                sendSMSStatusCode: function(e) {
                    return e.downloadAppModal.sendSMSStatusCode;
                }
            })),
            beforeCreate: function() {
                this.$store.registerModule("downloadAppModal", r.b), this.$store.registerModule("downloadAppModalAnalytics", i);
            },
            beforeDestory: function() {
                this.$store.unregisterModule("downloadAppModal"), this.$store.unregisterModule("downloadAppModalAnalytics");
            },
            methods: c({}, Object(o.mapActions)("footer", {
                closeAppsModal: l.ACTIONS.USER_CLICKED_CLOSE_APPS_MODAL
            }), {}, Object(o.mapActions)("downloadAppModal", {
                sendSMS: r.a.SEND_SMS_ACTION,
                resetSMSStatus: r.a.RESET_SMS_SENT_STATUS_ACTION
            }))
        }, f = n(65), b = Object(f.default)(d, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("portal", {
                attrs: {
                    "target-el": ".js-vue-apps-modal-portal"
                }
            }, [ n("DownloadAppModal", {
                attrs: {
                    showModal: e.isAppModalOpen,
                    sendSMSStatusCode: e.sendSMSStatusCode,
                    isLoggedIn: e.isLoggedIn
                },
                on: {
                    closeModal: e.closeAppsModal,
                    appLinkRequested: e.sendSMS,
                    smsSuccessMessageRead: e.resetSMSStatus
                }
            }) ], 1);
        }), [], !1, null, null, null);
        t.default = b.exports;
    },
    1113: function(e, t, n) {
        var o = n(1456);
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]), o.locals && (e.exports = o.locals);
        (0, n(192).default)("0c7fc80d", o, !0, {});
    },
    1114: function(e, t, n) {
        "use strict";
        n(22), n(66), n(83), n(21), n(23), n(44), n(29), n(30), n(25), n(10), n(12), n(82), 
        n(45), n(24), n(46), n(43);
        var o = n(355), r = n.n(o), s = n(601);
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function(t) {
                    l(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                var n = [], o = !0, r = !1, s = void 0;
                try {
                    for (var a, i = e[Symbol.iterator](); !(o = (a = i.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); o = !0) ;
                } catch (e) {
                    r = !0, s = e;
                } finally {
                    try {
                        o || null == i.return || i.return();
                    } finally {
                        if (r) throw s;
                    }
                }
                return n;
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function c(e, t, n, o, r, s, a) {
            try {
                var i = e[s](a), l = i.value;
            } catch (e) {
                return void n(e);
            }
            i.done ? t(l) : Promise.resolve(l).then(o, r);
        }
        function p(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(o, r) {
                    var s = e.apply(t, n);
                    function a(e) {
                        c(s, o, r, a, i, "next", e);
                    }
                    function i(e) {
                        c(s, o, r, a, i, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        var d = ".js-apps-modal";
        function f() {
            return (f = p(regeneratorRuntime.mark((function e(t) {
                var o, r, s, a, l, c, p, d, f, b, m, g, O, h, y, S;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Promise.all([ Promise.all([ n.e(7), n.e(17), n.e(29) ]).then(n.bind(null, 1107)), Promise.resolve().then(n.bind(null, 17)), Promise.resolve().then(n.bind(null, 81)), Promise.resolve().then(n.bind(null, 122)), Promise.resolve().then(n.bind(null, 125)), Promise.resolve().then(n.t.bind(null, 113, 7)), Promise.resolve().then(n.t.bind(null, 126, 7)), Promise.resolve().then(n.bind(null, 47)), Promise.resolve().then(n.bind(null, 123)), n.e(30).then(n.bind(null, 601)), n.e(30).then(n.bind(null, 1069)) ]);

                      case 2:
                        return o = e.sent, r = u(o, 11), s = r[0].default, a = r[1].default, l = r[2].default, 
                        c = r[3].default, p = r[4].default, d = r[5].default, f = r[6].default, b = r[7].default, 
                        m = r[8].default, g = r[9].default, O = r[10].default, a.use(l), a.use(f), h = new l.Store({
                            modules: {
                                translation: c,
                                user: m,
                                footer: g,
                                footerAnalytics: O
                            }
                        }), y = {
                            config: t
                        }, h.replaceState(d({}, i({}, h.state, {
                            user: {
                                loggedInUser: b.isLoggedIn()
                            }
                        }), y)), p(a).setLocalization(h, y.config.LOCALIZATION), (S = new a(i({}, s, {
                            store: h
                        }))).$mount(".js-vue-overlay-portal"), e.abrupt("return", S.$store);

                      case 25:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })))).apply(this, arguments);
        }
        function b(e) {
            e.preventDefault(), this.$store.dispatch("footer/" + s.ACTIONS.USER_CLICKED_OPEN_APPS_LINK);
        }
        t.a = r.a.extend({
            init: function(e) {
                var t = this, n = e.$store, o = e.config;
                n ? (this.$store = n, this.openAppsModalHandler = b.bind(this)) : function(e) {
                    return f.apply(this, arguments);
                }(o).then((function(e) {
                    t.$store = e;
                }));
            },
            bind: function() {
                var e;
                null === (e = document.querySelector(d)) || void 0 === e || e.addEventListener("click", this.openAppsModalHandler);
            },
            unbind: function() {
                var e;
                null === (e = document.querySelector(d)) || void 0 === e || e.removeEventListener("click", this.openAppsModalHandler);
            }
        });
    },
    1455: function(e, t, n) {
        "use strict";
        var o = n(1113), r = n.n(o);
        t.default = r.a;
    },
    1456: function(e, t, n) {
        (t = e.exports = n(191)(!1)).push([ e.i, ".MessageBanner-communitySupport-275 {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e1e1e1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 13px;\n  font-weight: bold;\n  height: 35px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 6;\n}\n@media (max-width: 1024px) {\n.MessageBanner-communitySupport-275 {\n      display: none;\n}\n}\n.MessageBanner-communitySupport-275 .focus-visible {\n    outline: 2px solid #0057ff;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-close-1Oy {\n    cursor: pointer;\n    position: absolute;\n    right: 8px;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR {\n    display: block;\n    fill: #707070;\n    height: 8.6px;\n    width: 8.6px;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR:hover {\n      fill: #191919;\n}\n@media (min-width: 1025px) {\n.design-update-2020 .has-message #top-panel {\n    padding-top: 93px;\n}\n}\n@media (min-width: 1025px) {\n.has-message .rf-primary-nav.rf-primary-nav--main {\n    top: 35px;\n}\n}\n@media (min-width: 1025px) {\n.has-message #top-panel {\n    padding-top: 95px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1080px) {\n.has-message .rf-primary-nav--mobile {\n    top: 35px;\n}\n}\n", "" ]), 
        t.locals = {
            communitySupport: "MessageBanner-communitySupport-275",
            close: "MessageBanner-close-1Oy",
            icon: "MessageBanner-icon-3nR"
        };
    },
    1885: function(e, t, n) {
        "use strict";
        var o = {
            components: {
                CloseIcon: n(353).default
            },
            data: function() {
                return {
                    voteUrl: "https://www.vote.org",
                    canShowMessage: !1
                };
            },
            mounted: function() {
                this.canShowMessage = !0;
            },
            watch: {
                canShowMessage: function(e) {
                    e ? document.body.classList.add("has-message") : document.body.classList.remove("has-message");
                }
            },
            methods: {
                closeMessage: function() {
                    this.canShowMessage = !1;
                }
            }
        }, r = n(1455), s = n(65);
        var a = Object(s.default)(o, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.canShowMessage ? n("div", {
                ref: "message",
                class: e.$style.communitySupport,
                attrs: {
                    "data-ut": "community-message-banner"
                }
            }, [ n("span", {
                domProps: {
                    innerHTML: e._s(e.$translate("community-vote-message-banner", "It's almost Election Day! <a href='{voteUrl}' target='_blank' class='link'>Register to vote</a> for the 2020 US Election. Learn more at <a href='{voteUrl}' target='_blank' class='link'>vote.org</a>.", {
                        voteUrl: this.voteUrl
                    }))
                }
            }), n("span", {
                class: e.$style.close,
                attrs: {
                    tabindex: "0",
                    "data-ut": "message-close-icon"
                },
                on: {
                    click: e.closeMessage,
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.closeMessage(t);
                    }
                }
            }, [ n("CloseIcon", {
                class: e.$style.icon
            }) ], 1) ]) : e._e();
        }), [], !1, (function(e) {
            this.$style = r.default.locals || r.default;
        }), null, null);
        t.a = a.exports;
    },
    1886: function(e, t, n) {
        "use strict";
        n(22), n(21), n(23), n(29), n(30), n(25), n(24);
        var o = n(81), r = n(601), s = n(1069), a = n(1107), i = n(1114);
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var c = {
            components: {
                DownloadAppModalLayout: a.default
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        u(e, t, n[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }));
                }
                return e;
            }({}, Object(o.mapState)({
                isAppModalEnabled: function(e) {
                    return e.footer.isAppModalEnabled;
                }
            })),
            data: function() {
                return {
                    footer: null
                };
            },
            beforeCreate: function() {
                this.$store.registerModule("footer", r.default, {
                    preserveState: !!this.$store.state.footer
                }), this.$store.registerModule("footerAnalytics", s.default, {
                    preserveState: !!this.$store.state.footerAnalytics
                });
            },
            mounted: function() {
                this.isAppModalEnabled && (this.footer = i.a.init({
                    $store: this.$store
                }));
            },
            beforeDestroy: function() {
                this.isAppModalEnabled && this.footer.destroy(), this.$store.unregisterModule("footer"), 
                this.$store.unregisterModule("footerAnalytics");
            }
        }, p = n(65), d = Object(p.default)(c, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.isAppModalEnabled ? n("DownloadAppModalLayout", {
                ref: "appsModal"
            }) : e._e();
        }), [], !1, null, null, null);
        t.a = d.exports;
    },
    2909: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0), r = n(17), s = n(1886), a = n(1885), i = n(81), l = r.default.extend({
            components: {
                Footer: s.a,
                MessageBanner: a.a
            },
            computed: Object(o.__assign)({}, Object(i.mapState)([ "gates" ]))
        }), u = n(65), c = Object(u.default)(l, (function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [ e.gates.message_banner ? n("portal", {
                attrs: {
                    "target-el": ".js-vue-message-portal"
                }
            }, [ n("MessageBanner") ], 1) : e._e(), n("router-view"), n("Footer") ], 1);
        }), [], !1, null, null, null);
        t.default = c.exports;
    },
    351: function(e, t, n) {
        e.exports = n(2)(62);
    },
    353: function(e, t, n) {
        e.exports = n(2)(315);
    },
    355: function(e, t, n) {
        e.exports = n(2)(61);
    },
    601: function(e, t, n) {
        "use strict";
        var o, r;
        n.r(t), n.d(t, "ACTIONS", (function() {
            return s;
        }));
        var s = {
            USER_CLICKED_OPEN_APPS_LINK: "USER_CLICKED_OPEN_APPS_LINK",
            USER_CLICKED_CLOSE_APPS_MODAL: "USER_CLICKED_CLOSE_APPS_MODAL"
        }, a = "TOGGLE_APPS_MODAL", i = {
            namespaced: !0,
            state: function() {
                return {
                    isAppModalOpen: !1,
                    isAppModalEnabled: !0
                };
            },
            actions: (o = {}, o[s.USER_CLICKED_OPEN_APPS_LINK] = function(e) {
                var t = e.state, n = e.commit;
                t.isAppModalEnabled && n(a);
            }, o[s.USER_CLICKED_CLOSE_APPS_MODAL] = function(e) {
                var t = e.state, n = e.commit;
                t.isAppModalEnabled && n(a);
            }, o),
            mutations: (r = {}, r[a] = function(e) {
                e.isAppModalOpen = !e.isAppModalOpen;
            }, r)
        };
        t.default = i;
    }
} ]);
//# sourceMappingURL=app.149.js.map