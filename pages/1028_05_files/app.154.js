(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 154 ], {
    1108: function(e, t, o) {
        var n = o(1454);
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, o(189).default)("0c7fc80d", n, !0, {});
    },
    1452: function(e, t, o) {
        var n = o(1935);
        "string" == typeof n && (n = [ [ e.i, n, "" ] ]), n.locals && (e.exports = n.locals);
        (0, o(189).default)("6f19714f", n, !0, {});
    },
    1453: function(e, t, o) {
        "use strict";
        var n = o(1108), a = o.n(n);
        t.default = a.a;
    },
    1454: function(e, t, o) {
        (t = e.exports = o(188)(!1)).push([ e.i, ".MessageBanner-communitySupport-275 {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e1e1e1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 13px;\n  font-weight: bold;\n  height: 35px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 7;\n}\n@media (max-width: 1024px) {\n.MessageBanner-communitySupport-275 {\n      display: none;\n}\n}\n.MessageBanner-communitySupport-275 .focus-visible {\n    outline: 2px solid #0057ff;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-close-1Oy {\n    cursor: pointer;\n    position: absolute;\n    right: 8px;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR {\n    display: block;\n    fill: #707070;\n    height: 8.6px;\n    width: 8.6px;\n}\n.MessageBanner-communitySupport-275 .MessageBanner-icon-3nR:hover {\n      fill: #191919;\n}\n@media (min-width: 1025px) {\n.design-update-2020 .has-message #top-panel {\n    padding-top: 93px;\n}\n}\n@media (min-width: 1025px) {\n.has-message .rf-primary-nav.rf-primary-nav--main {\n    top: 35px;\n}\n}\n@media (min-width: 1025px) {\n.has-message #top-panel {\n    padding-top: 95px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1080px) {\n.has-message .rf-primary-nav--mobile {\n    top: 35px;\n}\n}\n", "" ]), 
        t.locals = {
            communitySupport: "MessageBanner-communitySupport-275",
            close: "MessageBanner-close-1Oy",
            icon: "MessageBanner-icon-3nR"
        };
    },
    1872: function(e, t, o) {
        "use strict";
        o(21), o(22), o(23), o(105), o(29), o(30), o(25), o(110), o(24);
        var n = o(359), a = o(15), i = o(10), r = o(39), s = o(81), l = o(5);
        function c(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), o.push.apply(o, n);
            }
            return o;
        }
        function p(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var d = {
            components: {
                CloseIcon: n.default
            },
            data: function() {
                return {
                    canShowMessage: !1,
                    analyticsChannel: "community_message_banner",
                    maxURL: "https://max.adobe.com",
                    liveURL: "https://www.behance.net/adobelive",
                    voteUrl: "https://www.vote.org"
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(o), !0).forEach((function(t) {
                        p(e, t, o[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    }));
                }
                return e;
            }({}, Object(s.mapState)([ "gates" ]), {
                messageBannerCookie: function() {
                    return this.gates.message_banner ? i.COOKIE.VOTE_BANNER : this.gates.max_banner ? i.COOKIE.MAX_BANNER : void 0;
                },
                isUSTimezone: function() {
                    return l.default.getTimeZone().includes("America");
                }
            }),
            mounted: function() {
                this.canShowMessage = !a.default.getCookie(this.messageBannerCookie);
            },
            watch: {
                canShowMessage: function(e) {
                    e && (this.gates.max_banner || this.gates.message_banner && this.isUSTimezone) ? document.body.classList.add("has-message") : document.body.classList.remove("has-message");
                }
            },
            methods: {
                closeMessage: function() {
                    this.canShowMessage = !1, a.default.setCookie(this.messageBannerCookie, "true", {
                        expires: 14
                    });
                },
                trackLinkClick: function(e) {
                    r.default.custom(this.analyticsChannel, "link clicked", {
                        link: e
                    });
                }
            }
        }, f = o(1453), u = o(65);
        var y = Object(u.default)(d, (function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return e.canShowMessage && (e.gates.max_banner || e.gates.message_banner && e.isUSTimezone) ? o("div", {
                ref: "message",
                class: e.$style.communitySupport,
                attrs: {
                    "data-ut": "community-message-banner"
                }
            }, [ e.gates.message_banner && !e.gates.max_banner ? o("span", {
                domProps: {
                    innerHTML: e._s(e.$translate("community-vote-message-banner", "It's almost Election Day! <a href='{voteUrl}' target='_blank' class='link'>Register to vote</a> for the 2020 US Election. Learn more at <a href='{voteUrl}' target='_blank' class='link'>vote.org</a>.", {
                        voteUrl: this.voteUrl
                    }))
                }
            }) : e._e(), e.gates.max_banner ? o("span", [ e._v(" " + e._s(e.$translate("community-max-message-banner", "Join the livestream for Adobe Max, our annual creativity conference! Tune in with us this week at")) + " "), o("a", {
                attrs: {
                    href: e.maxURL,
                    target: "_blank",
                    "data-ut": "community-nmax-url"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.maxURL);
                    }
                }
            }, [ e._v("Adobe Max") ]), e._v(" " + e._s(e.$translate("max_banner_or", "or ")) + " "), o("a", {
                attrs: {
                    href: e.liveURL,
                    target: "_blank"
                },
                on: {
                    click: function(t) {
                        return e.trackLinkClick(e.liveURL);
                    }
                }
            }, [ e._v("Adobe Live") ]), e._v(". ") ]) : e._e(), o("span", {
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
            }, [ o("CloseIcon", {
                class: e.$style.icon
            }) ], 1) ]) : e._e();
        }), [], !1, (function(e) {
            this.$style = f.default.locals || f.default;
        }), null, null);
        t.a = y.exports;
    },
    1934: function(e, t, o) {
        "use strict";
        var n = o(1452), a = o.n(n);
        t.default = a.a;
    },
    1935: function(e, t, o) {
        (t = e.exports = o(188)(!1)).push([ e.i, ".InfinityFooter-footerInfinity-2xv {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fff;\n  border-top: 1px solid #e1e1e1;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  height: 33px;\n  left: 0;\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n@media (max-width: 1024px) {\n.InfinityFooter-footerInfinity-2xv {\n      display: none;\n}\n}\n.InfinityFooter-footerInfinity-2xv .focus-visible {\n    outline: 1px solid #0057ff;\n    outline-offset: 2px;\n}\n.InfinityFooter-footerInfinity-2xv .InfinityFooter-tooltipMore-2Yo {\n    width: 195px;\n}\n.InfinityFooter-footerInfinity-2xv .InfinityFooter-tooltipMore-2Yo .InfinityFooter-footerSelectorItem-uTJ {\n      padding-right: 7px;\n}\n.InfinityFooter-footerSelector-U7S {\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  color: #696969;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 0;\n  margin-top: -7.5px;\n  padding: calc(7.5px * 2) 25px 7.5px;\n  position: relative;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n.InfinityFooter-footerSelector-U7S {\n      display: none;\n}\n}\n.InfinityFooter-footerSelector-U7S::before {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    border-right: 1px #afafaf solid;\n    content: '';\n    height: 15px;\n    margin-top: 5px;\n    position: absolute;\n    right: 0;\n    width: 1px;\n}\n.InfinityFooter-footerSelector-U7S::after {\n    content: '';\n    display: inline-block;\n    left: 3px;\n    position: relative;\n    top: -2px;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 3px solid #696969;\n    height: 0;\n    width: 0;\n}\n.InfinityFooter-footerSelector-U7S:hover::after {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.InfinityFooter-footerSelectorItem-uTJ {\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #696969;\n  display: -webkit-box;\n  display: flex;\n}\n.InfinityFooter-footerSelectorItem-uTJ.InfinityFooter-selected-l2V {\n    background: #0057ff;\n    color: #fff;\n}\n.InfinityFooter-footerSelectorItem-uTJ:hover {\n    background: #0057ff;\n    color: #fff;\n}\n.InfinityFooter-footerSelectorLinks-2hX {\n  color: inherit;\n  display: -webkit-box;\n  display: flex;\n  padding: 6px 20px;\n  width: 100%;\n}\n.InfinityFooter-footerSelectorLinks-2hX:hover {\n    text-decoration: none;\n}\n.InfinityFooter-footerLinks-4ab {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 20px;\n  list-style: none;\n  padding-left: 20px;\n}\n.InfinityFooter-skipContent-37S {\n  color: #fff;\n  font-size: 11px;\n  font-weight: bold;\n  left: -100%;\n  padding: 0 10px;\n  position: absolute;\n  text-decoration: none;\n  text-transform: uppercase;\n  top: 2px;\n}\n.InfinityFooter-skipContent-37S.focus-visible {\n    color: #0057ff;\n    left: 16px;\n    outline: 1px solid #0057ff;\n    outline-offset: 2px;\n}\n.InfinityFooter-footerLink-2xU {\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: bold;\n  color: #696969;\n  margin-right: 10px;\n}\n.InfinityFooter-footerLink-2xU:hover {\n    color: #0057ff;\n    text-decoration: none;\n}\n.InfinityFooter-tooltipContainer-3-B {\n  display: block;\n}\n.InfinityFooter-adobeLogo-2ZO {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  margin-right: 25px;\n  position: fixed;\n  right: 0;\n}\n.InfinityFooter-adobeLogo-2ZO .InfinityFooter-icon-30G {\n  position: relative;\n  top: 2px;\n  width: 60px;\n}\n.InfinityFooter-adobeLogo-2ZO:hover .InfinityFooter-icon-30G {\n  fill: #707070;\n}\n", "" ]), 
        t.locals = {
            footerInfinity: "InfinityFooter-footerInfinity-2xv",
            tooltipMore: "InfinityFooter-tooltipMore-2Yo",
            footerSelectorItem: "InfinityFooter-footerSelectorItem-uTJ",
            footerSelector: "InfinityFooter-footerSelector-U7S",
            selected: "InfinityFooter-selected-l2V",
            footerSelectorLinks: "InfinityFooter-footerSelectorLinks-2hX",
            footerLinks: "InfinityFooter-footerLinks-4ab",
            skipContent: "InfinityFooter-skipContent-37S",
            footerLink: "InfinityFooter-footerLink-2xU",
            tooltipContainer: "InfinityFooter-tooltipContainer-3-B",
            adobeLogo: "InfinityFooter-adobeLogo-2ZO",
            icon: "InfinityFooter-icon-30G"
        };
    },
    2779: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o(17), a = o(1859), i = o(0), r = o(81), s = o(355), l = o(606), c = o(26), p = o(5), d = [ {
            key: "footer_link_careers",
            url: c.URL_CAREERS,
            label: p.default.translate("footer_link_careers", "Careers at Behance"),
            e2eKey: "e2e-FooterInfinity-more-link-careers",
            text: "Careers at Behance"
        }, {
            key: "footer_link_portfolio",
            url: "https://portfolio.adobe.com/?promoid=ZKD5FJ7P&mv=other",
            label: p.default.translate("footer_link_portfolio", "Adobe Portfolio"),
            e2eKey: "e2e-FooterInfinity-more-link-portfolio",
            text: "Adobe Portfolio"
        }, {
            key: "footer_link_blog",
            url: c.URL_BEHANCE_BLOG,
            label: p.default.translate("footer_link_blog", "Blog"),
            e2eKey: "e2e-FooterInfinity-more-link-blog",
            text: "Blog"
        }, {
            key: "footer_link_poweredby",
            url: c.URL_POWERED_BY,
            label: p.default.translate("footer_link_poweredby", "Powered By"),
            e2eKey: "e2e-FooterInfinity-more-link-poweredby",
            text: "Powered By"
        }, {
            key: "footer_link_ccTips",
            url: c.URL_NNU,
            label: p.default.translate("footer_link_ccTips", "Creative Career Tips"),
            e2eKey: "e2e-FooterInfinity-more-link-career-tips",
            text: "Creative Career Tips"
        }, {
            key: "footer_link_downloadapp",
            url: c.URL_APPS,
            label: p.default.translate("footer_link_downloadapp", "Download the App"),
            e2eKey: "e2e-FooterInfinity-more-link-app",
            text: "Download the App"
        } ], f = [ {
            label: p.default.translate("footer_terms", "TOU"),
            url: c.URL_TERMS,
            text: "TOU",
            key: "footer_terms",
            e2eKey: "e2e-FooterInfinity-link-terms"
        }, {
            label: p.default.translate("footer_privacy", "Privacy"),
            url: c.URL_PRIVACY,
            text: "Privacy",
            key: "footer_privacy",
            e2eKey: "e2e-FooterInfinity-link-privacy"
        }, {
            label: p.default.translate("footer_community", "Community"),
            url: c.URL_COMMUNITY_GUIDELINES,
            text: "Community",
            key: "footer_community",
            e2eKey: "e2e-FooterInfinity-link-community"
        }, {
            label: p.default.translate("footer_faq", "Help"),
            url: c.URL_NETWORK_SUPPORT,
            text: "Help",
            key: "footer_faq",
            e2eKey: "e2e-FooterInfinity-link-help"
        } ], u = o(122), y = o(1923), g = o(16), m = o(10), b = o(1102), v = o(39), _ = o(15), h = n.default.extend({
            components: {
                Tooltip: s.a,
                DownloadAppModal: b.a,
                AdobeLockup2020: y.a
            },
            props: {
                isInFocus: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    footer: null,
                    LOCALES: c.LOCALES,
                    FOOTER_MORE_LINKS: d,
                    FOOTER_LINKS: f,
                    URL_ADOBE_CREATIVE_CLOUD_HOME: c.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    downloadAppOpen: !1
                };
            },
            beforeCreate: function() {
                this.$store.registerModule("footer", l.default, {
                    preserveState: !!this.$store.state.footer
                }), this.$store.registerModule("downloadAppModal", u.b);
            },
            watch: {
                isInFocus: function(e) {
                    e ? this.$refs.root.focus() : this.$refs.root.blur();
                }
            },
            methods: Object(i.__assign)(Object(i.__assign)({
                languageSelectChanged: function(e) {
                    var t = e;
                    _.default.setCookie(m.COOKIE.LANGUAGE_SETTING, t, {
                        expires: 365
                    }), v.default.custom("localization", "Language changed by user", {
                        locale: t
                    }), g.default.reloadLocation();
                }
            }, Object(r.mapActions)("downloadAppModal", {
                sendSMS: u.a.SEND_SMS_ACTION,
                resetSMSStatus: u.a.RESET_SMS_SENT_STATUS_ACTION
            })), {
                closeDownloadModal: function() {
                    this.downloadAppOpen = !1, v.default.custom("footer", "Download app modal closed by user");
                },
                openDownloadModal: function() {
                    this.downloadAppOpen = !0, v.default.custom("footer", "Download app modal clicked by user");
                }
            }),
            computed: Object(i.__assign)(Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({}, Object(r.mapState)("user", {
                isLoggedIn: function(e) {
                    return Boolean(e.loggedInUser);
                }
            })), Object(r.mapState)({
                sendSMSStatusCode: function(e) {
                    return e.downloadAppModal.sendSMSStatusCode;
                }
            })), Object(r.mapState)("translation", {
                locale: function(e) {
                    return e.localization.LOCALE;
                }
            })), {
                currentLocale: function() {
                    var e = this, t = c.LOCALES.find((function(t) {
                        return t.code === e.locale;
                    }));
                    return t || c.LOCALES[0];
                },
                beforeDestroy: function() {
                    this.$store.unregisterModule("footer"), this.$store.unregisterModule("downloadAppModal");
                }
            })
        }), k = o(1934), x = o(65);
        var C = Object(x.default)(h, (function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {
                ref: "root",
                class: [ e.$style.footerInfinity, "js-footer", "InfinityFooter__global-selector" ],
                attrs: {
                    tabindex: "0"
                }
            }, [ o("div", {
                attrs: {
                    "data-ut": "skip-container"
                }
            }, [ o("a", {
                class: e.$style.skipContent,
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.$emit("skipToMainContent");
                    }
                }
            }, [ e._v(e._s(e.$translate("footer_jump_to_top", "Jump to Main Content"))) ]) ]), o("div", {
                class: e.$style.footerItems,
                attrs: {
                    tabindex: "0"
                }
            }, [ o("Tooltip", {
                class: e.$style.tooltipWrapper,
                attrs: {
                    position: "top",
                    alignment: "left",
                    alignmentOffset: 20,
                    horizontalPadding: 0,
                    toggleMethod: "hover",
                    isOpen: !1,
                    "data-ut": "more-behance-tooltip"
                }
            }, [ o("div", {
                class: [ e.$style.footerSelector, e.$style.footerSelectorMore, "qa-more-link-container", "e2e-FooterInfinity-link-container" ]
            }, [ e._v(" " + e._s(e.$translate("footer_more_behance", "More Behance")) + " ") ]), o("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("ul", {
                class: [ e.$style.tooltipMore ],
                attrs: {
                    "data-ut": "footer-more-select"
                }
            }, e._l(e.FOOTER_MORE_LINKS, (function(t) {
                return o("li", {
                    key: t.key,
                    class: e.$style.footerSelectorItem,
                    attrs: {
                        "data-ut": "link-select-option"
                    }
                }, [ "footer_link_downloadapp" === t.key ? o("a", {
                    class: e.$style.footerSelectorLinks,
                    attrs: {
                        "aria-label": t.key,
                        "aria-haspopup": "true",
                        "data-ut": "open-modal-option"
                    },
                    on: {
                        click: e.openDownloadModal
                    }
                }, [ e._v(" " + e._s(e.$translate(t.key, t.text)) + " ") ]) : o("a", {
                    class: [ e.$style.footerSelectorLinks, t.e2eKey ],
                    attrs: {
                        href: t.url,
                        target: "_blank",
                        "aria-label": t.key
                    }
                }, [ e._v(e._s(e.$translate(t.key, t.text)) + " ") ]) ]);
            })), 0) ]) ]) ], 1), o("div", {
                class: e.$style.footerItems
            }, [ o("Tooltip", {
                class: e.$style.tooltipWrapper,
                attrs: {
                    position: "top",
                    alignment: "center",
                    toggleMethod: "hover",
                    horizontalPadding: 0,
                    isOpen: !1,
                    "data-ut": "language-tooltip"
                }
            }, [ o("p", {
                class: [ e.$style.footerSelector, "qa-language-selector", "e2e-FooterInfinity-language-selector" ]
            }, [ e._v(" " + e._s(e.currentLocale.label) + " ") ]), o("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("ul", {
                class: e.$style.tooltipContainer,
                attrs: {
                    "data-ut": "footer-language-select"
                }
            }, e._l(e.LOCALES, (function(t) {
                var n;
                return o("li", {
                    key: t.code,
                    class: [ e.$style.footerSelectorItem, (n = {}, n[e.$style.selected] = t.code === e.currentLocale.code, 
                    n) ],
                    attrs: {
                        "data-ut": "language-select-option"
                    }
                }, [ o("a", {
                    class: e.$style.footerSelectorLinks,
                    attrs: {
                        href: "",
                        "aria-label": t.code,
                        "data-language-locale": t.code,
                        "aria-labelledby": t.code
                    },
                    on: {
                        click: function(o) {
                            return e.languageSelectChanged(t.code);
                        },
                        keypress: function(o) {
                            return !o.type.indexOf("key") && e._k(o.keyCode, "enter", 13, o.key, "Enter") ? null : e.languageSelectChanged(t.code);
                        }
                    }
                }, [ e._v(e._s(t.label) + " ") ]) ]);
            })), 0) ]) ]) ], 1), o("div", {
                class: e.$style.footerItems,
                attrs: {
                    "data-ut": "footer-link-container"
                }
            }, [ o("ul", {
                class: e.$style.footerLinks,
                attrs: {
                    "data-ut": "footer-link-select"
                }
            }, [ e._l(e.FOOTER_LINKS, (function(t) {
                return o("li", {
                    key: t.label,
                    attrs: {
                        "data-ut": "footer-select-option"
                    }
                }, [ o("a", {
                    class: [ e.$style.footerLink, t.e2eKey ],
                    attrs: {
                        "aria-label": t.key,
                        href: t.url,
                        target: "_blank"
                    }
                }, [ e._v(e._s(e.$translate(t.key, t.text))) ]) ]);
            })), o("li", {
                key: "AdChoices"
            }, [ o("a", {
                class: [ e.$style.footerLink, "js-privacy-personalize" ],
                attrs: {
                    "data-ut": "footer-choices-select-option",
                    "aria-label": "AdChoices",
                    "aria-haspopup": "true",
                    href: "javascript:void(0)"
                }
            }) ]) ], 2) ]), o("div", {
                class: e.$style.adobeLogo,
                attrs: {
                    "data-ut": "logo-container"
                }
            }, [ o("a", {
                attrs: {
                    href: e.URL_ADOBE_CREATIVE_CLOUD_HOME,
                    target: "_blank",
                    title: "Adobe Creative Cloud",
                    "aria-label": "Adobe Creative Cloud"
                }
            }, [ o("AdobeLockup2020", {
                class: e.$style.icon
            }) ], 1) ]), o("portal", {
                attrs: {
                    "target-el": ".js-vue-apps-modal-portal"
                }
            }, [ o("DownloadAppModal", {
                attrs: {
                    "data-ut": "download-app",
                    showModal: e.downloadAppOpen,
                    isLoggedIn: e.isLoggedIn
                },
                on: {
                    closeModal: e.closeDownloadModal,
                    appLinkRequested: e.sendSMS,
                    smsSuccessMessageRead: e.resetSMSStatus
                }
            }) ], 1) ], 1);
        }), [], !1, (function(e) {
            this.$style = k.default.locals || k.default;
        }), null, null).exports, S = o(1872), I = n.default.extend({
            components: {
                PrimaryNav: a.a,
                InfinityFooter: C,
                MessageBanner: S.a
            },
            data: function() {
                return {
                    footerInFocus: !1
                };
            },
            methods: {
                toggleFooterFocus: function() {
                    this.footerInFocus = !this.footerInFocus;
                },
                handleContentFocus: function() {
                    this.$refs.content.focus();
                }
            }
        }), O = Object(x.default)(I, (function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", [ o("MessageBanner", {
                attrs: {
                    "data-ut": "message-banner"
                }
            }), o("PrimaryNav", {
                attrs: {
                    "data-ut": "primary-nav"
                },
                on: {
                    skipToMainContent: e.handleContentFocus,
                    skipToFooter: e.toggleFooterFocus
                }
            }), o("div", {
                staticClass: "slide-panel js-top-panel",
                attrs: {
                    id: "top-panel"
                }
            }, [ o("div", {
                ref: "content",
                staticClass: "js-site-content site-content e2e-site-content",
                attrs: {
                    tabindex: "0",
                    id: "site-content",
                    "data-ut": "main-content"
                }
            }, [ o("router-view") ], 1), o("InfinityFooter", {
                attrs: {
                    "data-ut": "footer",
                    isInFocus: e.footerInFocus
                },
                on: {
                    skipToMainContent: e.handleContentFocus
                }
            }) ], 1), o("div", {
                staticClass: "vue-portal-target js-vue-overlay-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-apps-modal-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-add-story-modal-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-error-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-story-modal-portal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-mobile-app-upsell"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-popup"
            }), o("div", {
                staticClass: "js-vue-project-view-mount"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-livestream-killswitch-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-livestream-report-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-livestream-share-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-report-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-share-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-moodboard-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-moodboard-recommendations-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-notif"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-profile-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-version-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-preview-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-publishing-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-advanced-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-crop-dialog"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-navigation-modal"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-creative-fields"
            }), o("div", {
                staticClass: "vue-portal-target js-vue-project-editor-copyright-modal"
            }) ], 1);
        }), [], !1, null, null, null);
        t.default = O.exports;
    },
    358: function(e, t, o) {
        e.exports = o(2)(62);
    },
    606: function(e, t, o) {
        "use strict";
        var n, a;
        o.r(t), o.d(t, "ACTIONS", (function() {
            return i;
        }));
        var i = {
            USER_CLICKED_OPEN_APPS_LINK: "USER_CLICKED_OPEN_APPS_LINK",
            USER_CLICKED_CLOSE_APPS_MODAL: "USER_CLICKED_CLOSE_APPS_MODAL"
        }, r = "TOGGLE_APPS_MODAL", s = {
            namespaced: !0,
            state: function() {
                return {
                    isAppModalOpen: !1,
                    isAppModalEnabled: !0
                };
            },
            actions: (n = {}, n[i.USER_CLICKED_OPEN_APPS_LINK] = function(e) {
                var t = e.state, o = e.commit;
                t.isAppModalEnabled && o(r);
            }, n[i.USER_CLICKED_CLOSE_APPS_MODAL] = function(e) {
                var t = e.state, o = e.commit;
                t.isAppModalEnabled && o(r);
            }, n),
            mutations: (a = {}, a[r] = function(e) {
                e.isAppModalOpen = !e.isAppModalOpen;
            }, a)
        };
        t.default = s;
    }
} ]);
//# sourceMappingURL=app.154.js.map