(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 45 ], {
    1407: function(e, t, n) {
        "use strict";
        n(195);
        var i = n(342), o = n.n(i), s = n(821), r = n.n(s), a = n(811), u = n.n(a), c = n(1408), l = n.n(c), m = n(16), p = o()("<div>");
        function d(e) {
            return ~e.indexOf("&lt;") ? p.html(e).text() : e;
        }
        var f, _ = r.a.extend({
            template: u()(l.a, o.a),
            templateData: function() {
                return {
                    message: "Oops, an error occurred. | <a class='js-reload'>Please Refesh.</a>"
                };
            },
            render: function(e) {
                return e = e ? {
                    message: d(e)
                } : null, this._super(e);
            },
            rendered: function() {
                this.$view.on("click", ".js-reload", (function() {
                    m.default.reloadLocation();
                })).show();
            },
            hide: function() {
                return this.$view && this.$view.hide();
            }
        }), h = {
            init: function(e) {
                return f = new _(e);
            },
            show: function(e) {
                f && f.render(e);
            },
            hide: function() {
                f && f.hide();
            },
            Errorline: _
        };
        t.a = h;
    },
    1408: function(e, t, n) {
        var i = n(357), o = {}, s = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="error'), i.s(i.f("containerClasses", e, t, 1), e, t, 0, 38, 44, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                })), e.pop()), i.b('">'), i.b("\n" + n), i.b('  <span class="error__copy">'), i.b(i.t(i.f("message", e, t, 0))), 
                i.b("</span>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="error{{#containerClasses}} {{.}}{{/containerClasses}}">\n  <span class="error__copy">{{{message}}}</span>\n</div>\n', i);
        s.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (s = o, r = t, Object.keys(r).reduce((function(e, t) {
                return e[t] = r[t], e;
            }), s)), n);
            var s, r;
        }, e.exports = s.render.bind(s), e.exports.template = s;
    },
    2623: function(e, t, n) {
        var i, o;
        i = [ n(342), n(1054) ], void 0 === (o = function(e) {
            "use strict";
            var t = /(?:^|[^\w])@(\w+)/;
            return e.widget("be.automention", e.be.autosuggest, {
                _create: function() {
                    this._super(), this._on(this.element, {
                        mouseup: this.check,
                        input: this.check,
                        keyup: this.check,
                        blur: this._clear
                    }), this.menu.element.addClass("mention-menu");
                },
                _mention: {
                    value: "",
                    start: 0,
                    end: 0
                },
                _last: null,
                _value: function(e) {
                    if (!e) return this._mention.value;
                    var t = this._super(), n = t.indexOf("@", this._mention.start) + 1;
                    e = t.substring(0, n) + e, " " !== t.charAt(this._mention.end) && (e += " "), e += t.substring(this._mention.end), 
                    this._super(e), this.element.trigger("input");
                },
                _clear: function() {
                    this._last = null;
                },
                check: function(e) {
                    if (this.element.is(document.activeElement)) {
                        var n, i, o, s = document.activeElement.value, r = document.activeElement.selectionStart;
                        r && s && (i = s.lastIndexOf(" ", r - 1), o = ~(o = s.indexOf(" ", r)) ? o : 1 / 0, 
                        n = s.substring(i, o), n = (n = t.exec(n)) && n[1], this._last !== n && (this._mention.value = n || "", 
                        this._mention.start = i, this._mention.end = o, this.search(null, e), this._trigger("value", e, n)), 
                        this._last = n);
                    }
                }
            }), e.extend(e.be.automention, {
                usernameMatch: t
            }), e.be.automention;
        }.apply(t, i)) || (e.exports = o);
    },
    2625: function(e, t, n) {
        var i = n(357), o = {}, s = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b("<div>"), i.b("\n" + n), i.b('  <p class="popup-title">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 45, 94, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_title|Comment Guidelines");
                })), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('  <p class="popup-subtitle">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 155, 235, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_subtitle|Before you comment, please read the guidelines");
                })), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('  <div class="popoup-image">'), 
                i.b("\n" + n), i.b('    <img src="'), i.b(i.v(i.f("assetsUrl", e, t, 0))), i.b('img/comments/comment-guidelines.png" srcset="'), 
                i.b(i.v(i.f("assetsUrl", e, t, 0))), i.b("img/comments/comment-guidelines.png, "), 
                i.b(i.v(i.f("assetsUrl", e, t, 0))), i.b('img/comments/comment-guidelines@2x.png 2x">'), 
                i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b('  <div class="popup__guidelines">'), 
                i.b("\n" + n), i.b('    <h4 class="popup__guidelines-header">'), i.s(i.f("translate", e, t, 1), e, t, 0, 560, 611, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_header_topic|Stay On-Topic");
                })), e.pop()), i.b("</h4>"), i.b("\n" + n), i.b('    <p class="popup__guidelines-guideline">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 688, 907, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_text_topic|Comments must be about the creative work in the project that you are commenting on. Don't use comments on someone else's project to promote your own work or to link to other websites.");
                })), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('    <p class="popup__guidelines-guideline">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 983, 1124, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_text_off_topic|We consider off-topic posts 'spam' and we deactivate accounts that repeatedly violate this guideline.");
                })), e.pop()), i.b("</p>"), i.b("\n" + n), i.b('    <h4 class="popup__guidelines-header">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 1198, 1251, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_header_respect|Be Respectful");
                })), e.pop()), i.b("</h4>"), i.b("\n" + n), i.b('    <p class="popup__guidelines-guideline">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 1328, 1527, "{{ }}") && (i.rs(e, t, (function(e, t, n) {
                    n.b("comment_guidelines_popup_text_respect|Although we are all for free expression, we ask that you keep your comments constructive and respectful. We don't tolerate abusive, vulgar or insulting comments.");
                })), e.pop()), i.b("</p>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div>\n  <p class="popup-title">{{#translate}}comment_guidelines_popup_title|Comment Guidelines{{/translate}}</p>\n  <p class="popup-subtitle">{{#translate}}comment_guidelines_popup_subtitle|Before you comment, please read the guidelines{{/translate}}</p>\n  <div class="popoup-image">\n    <img src="{{assetsUrl}}img/comments/comment-guidelines.png" srcset="{{assetsUrl}}img/comments/comment-guidelines.png, {{assetsUrl}}img/comments/comment-guidelines@2x.png 2x">\n  </div>\n  <div class="popup__guidelines">\n    <h4 class="popup__guidelines-header">{{#translate}}comment_guidelines_popup_header_topic|Stay On-Topic{{/translate}}</h4>\n    <p class="popup__guidelines-guideline">{{#translate}}comment_guidelines_popup_text_topic|Comments must be about the creative work in the project that you are commenting on. Don\'t use comments on someone else\'s project to promote your own work or to link to other websites.{{/translate}}</p>\n    <p class="popup__guidelines-guideline">{{#translate}}comment_guidelines_popup_text_off_topic|We consider off-topic posts \'spam\' and we deactivate accounts that repeatedly violate this guideline.{{/translate}}</p>\n    <h4 class="popup__guidelines-header">{{#translate}}comment_guidelines_popup_header_respect|Be Respectful{{/translate}}</h4>\n    <p class="popup__guidelines-guideline">{{#translate}}comment_guidelines_popup_text_respect|Although we are all for free expression, we ask that you keep your comments constructive and respectful. We don\'t tolerate abusive, vulgar or insulting comments.{{/translate}}</p>\n  </div>\n</div>\n', i);
        s.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (s = o, r = t, Object.keys(r).reduce((function(e, t) {
                return e[t] = r[t], e;
            }), s)), n);
            var s, r;
        }, e.exports = s.render.bind(s), e.exports.template = s;
    },
    2804: function(e, t, n) {
        "use strict";
        n.r(t);
        n(22), n(66), n(84), n(52), n(44), n(192), n(11), n(45), n(46);
        var i, o = n(342), s = n.n(o), r = n(121), a = n.n(r), u = n(366), c = n.n(u), l = (n(21), 
        n(23), n(29), n(30), n(25), n(815), n(82), n(83), n(193), n(24), n(1407)), m = (n(40), 
        n(195), n(32), n(197), n(85), n(545)), p = n.n(m), d = n(1), f = {
            global: "/v2/users?mentions=1",
            local: ""
        }, _ = 2, h = 5, g = function(e) {
            return this[e];
        }, b = function(e) {
            var t = this.toLocaleLowerCase();
            return 0 === e.first_name.toLocaleLowerCase().indexOf(t) || 0 === e.last_name.toLocaleLowerCase().indexOf(t) || 0 === e.username.toLocaleLowerCase().indexOf(t);
        }, v = function(e) {
            return Object.keys(this).map(g, this).filter(b, e);
        }, y = function(e) {
            return v.call(e, this);
        };
        function x(e) {
            return i = function(e) {
                for (var t = {}, n = 0; n < e.length; ++n) t[e[n].id] = e[n];
                return t;
            }(e);
        }
        function O() {
            var e;
            return i ? (e = new p.a).resolve(i) : e = Object(d.default)(f.local).then(x), e;
        }
        function w(e) {
            return O().then(y.bind(e));
        }
        var E = function e(t, n) {
            var i, o;
            return (e._cache = e._cache || {})[t] = e._cache[t] || {}, n.length < _ && (o = []), 
            e._cache[t][n] && (o = e._cache[t][n]), o ? ((i = new p.a).resolve(o), i) : Object(d.default)({
                url: t,
                data: {
                    q: n
                }
            }).then((function(i) {
                return o = i.users, e._cache[t][n] = o, o;
            }));
        }.bind(null, f.global), j = {
            init: function(e) {
                return e.maxResults && (h = e.maxResults), e.minLength && (_ = e.minLength), e.local && (f.local = e.local), 
                i = null, this;
            },
            getLocal: O,
            source: function(e, t) {
                var n = [ w, E ].map((function(t) {
                    return t(e.term);
                })), i = [];
                function o() {
                    var e, n;
                    t((e = i, n = {}, e.filter((function(e) {
                        return !(e.id in n) && (n[e.id] = e, !0);
                    }))).slice(0, h));
                }
                n.reduce((function(e, t) {
                    return (e ? e.then((function() {
                        return t;
                    })) : t).then((function(e) {
                        e.forEach((function(e) {
                            e.value = e.username;
                        })), i = i.concat(e), o();
                    }));
                }), null).then(null, o);
            }
        }, C = n(968), T = n.n(C), S = n(2623), R = n.n(S);
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, i);
            }
            return n;
        }
        function $(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var L = function(e, t) {
            if (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        $(e, t, n[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }));
                }
                return e;
            }({
                maxMentions: 5
            }, t), j.init(t), e.length) {
                var n = new RegExp(R.a.usernameMatch.source, "g");
                e.parent().addClass("ui-front").end().one("focus", j.getLocal).automention({
                    delay: 500,
                    itemTemplate: T.a,
                    source: j.source,
                    appendTo: t.appendTo
                }).on("automentionopen", (function() {
                    var e, i, o = this.value, r = {}, a = s()(this);
                    o.replace(n, (function(e, t) {
                        r[e] = t;
                    })), Object.keys(r).length > t.maxMentions && (e = a.data("beAutomention"), (i = a.data("errorbar") || new l.a.Errorline(e.menu.element)).render("<strong>You may only mention " + t.maxMentions + " users</strong>"), 
                    i.$view.prependTo(e.menu.element), a.data("errorbar", i));
                }));
            }
        }, D = n(1910), P = n(572).a.extend({
            _submit: function(e) {
                var t = this;
                return this._super(e).then((function() {
                    t.$form.find(":input").val("").removeAttr("checked selected");
                }));
            }
        }), I = n(5), U = n(495), M = n(2625), A = n.n(M), N = n(27), F = n(26);
        function W(e) {
            return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        t.default = c.a.extend({
            _total: 0,
            _guidelinesWarningMsg: I.default.translate("comment_guidelines_warning", 'Your comment doesn\'t follow our <a href="/misc/community#comments" target="_blank">comment guidelines.</a>'),
            init: function(e, t) {
                var n = this, i = e instanceof s.a ? e : s()(e);
                this._$context = i, this._id = Number(i[0].dataset.id), this._$view = i.find(".js-post-comment-block"), 
                this._$commentText = i.find(".js-comment-textarea"), this._$commentWarning = i.find(".js-comment-warning"), 
                this._$formItemContainer = i.find(".js-comment-form-item-container"), this._$submit = i.find(".js-submit"), 
                this._commentContainer = this._initCommentContainer(), this._config = t || {}, this._sessionId = a()(), 
                this._$commentText.on("focus", (function() {
                    return n.trigger("input.focus");
                })), this._$commentText.on("blur", (function() {
                    return n.trigger("input.blur");
                }));
            },
            bind: function() {
                L(this._$commentText, {
                    local: "/mentions/project/" + this._id
                }), this._bindForm(), this._commentContainer.get();
            },
            unbind: function() {
                this._form && this._form.destroy(), this._commentContainer.destroy(), this._$view && this._$view.remove();
            },
            _setTotal: function(e) {
                this._total = e, this._$context.find(".js-comments-total").text(e ? "(" + e + ")" : "");
            },
            _initCommentContainer: function() {
                var e, t = this, n = this._id, i = this, o = ".js-see-more", s = this._$context.find(o);
                return e = D.b.extend({
                    moreSelector: o
                }).init(this._$context, {
                    type: "project",
                    entity_id: n
                }, (function(e) {
                    s.toggleClass("hide", !e.more), i._setTotal(+e.total);
                })), this.listenTo(e, "remove", (function() {
                    this._setTotal(this._total - 1), i.trigger("removed");
                })), this.listenTo(e, D.a.childHasFocus, (function() {
                    return t.trigger(D.a.childHasFocus);
                })), this.listenTo(e, D.a.childLostFocus, (function() {
                    return t.trigger(D.a.childLostFocus);
                })), e;
            },
            _logValidationError: function(e) {
                var t = e.http_code, n = e.messages, i = void 0 === n ? [] : n, o = e.code;
                return N.default.info("analytics", "comment failed validation", {
                    project_id: this._id,
                    reason: i.length ? i[0].message : null,
                    httpResponseCode: t,
                    code: o,
                    isBlockedRateLimitViolation: o === this._config.COMMENT_ERROR_CODES.ERROR_VALIDATION,
                    session_id: this._sessionId
                }), N.default.send();
            },
            _bindForm: function() {
                var e = this, t = this._id;
                this._$submit.length && (this._form = P.extend({
                    hideButtonText: I.default.translate("comments_hidebutton_posting", "Posting..."),
                    _findFormError: function(t) {
                        t.comment && "object" !== W(t.responseJSON) && e._setFormInErrorState(t.comment), 
                        this._super(t);
                    },
                    hideButtons: function() {},
                    _setDisabled: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        e._$context.find(".js-posting").toggleClass("hide", !t), e._$submit.toggleClass("hide", t);
                    },
                    showButtons: function() {
                        this._setDisabled(!1);
                    }
                }).init(this._$view).on("success", (function() {
                    var t = this;
                    this.showButtons(), N.default.info("analytics", "comment submitted", {
                        project_id: e._id,
                        session_id: e._sessionId
                    }), N.default.send().then((function() {
                        return t.trigger("loggedSuccess");
                    })), e._sessionId = a()();
                })), this._form.handlers.length = 0, this._form.commit = function(n) {
                    return n.data.entity_id = t, e._form._setDisabled(), this.then((function(t) {
                        !function(t) {
                            if (!t.id || !t.user) throw t;
                            e._commentContainer.add({
                                id: t.id,
                                user: t.user,
                                comment: t.comment,
                                posted_on: I.default.translate("comments_just_now", "Just now"),
                                permissions: [ 3e3 ]
                            }), e._setTotal(e._total + 1), e.trigger("added");
                        }(t), e._removeFormFromErrorState();
                    })).catch((function(t) {
                        return e._setFormInErrorState(t.responseJSON), e._logValidationError(t.responseJSON);
                    })), this;
                }, this._$commentText.on("change", (function() {
                    e._removeFormFromErrorState();
                })), this._bindCommentGuidelines());
            },
            _bindCommentGuidelines: function() {
                var e = this;
                this._$commentText.on("focus", (function() {
                    e._config.USER_HAS_ACKNOWLEDGED_GUIDELINES_POPUP || (e._$commentText.blur(), N.default.info("analytics", "comment guidelines rendered", {
                        project_id: e._id
                    }), Object(U.default)({
                        classes: [ "popup-comment-guidelines qa-popup-comment-guidelines" ],
                        html: A()({
                            assetsUrl: F.ASSETS_URL
                        }),
                        hideClose: !0,
                        buttons: [ {
                            label: I.default.translate("comments_got_it", "Got it!"),
                            classes: [ "js-confirm" ]
                        } ]
                    }).then((function() {
                        return e._config.USER_HAS_ACKNOWLEDGED_GUIDELINES_POPUP = !0, N.default.info("analytics", "comment guidelines acknowledged", {
                            project_id: e._id
                        }), Object(d.default)({
                            method: "POST",
                            url: "/v2/users/me/flags/comment_guidelines_popup"
                        }).then((function() {
                            e.trigger("commentGuidelinesAcknowledged");
                        }));
                    })), s()(".js-blocking-div").off());
                }));
            },
            _formatErrorMessage: function(e) {
                if ("string" == typeof e) return I.default.translateErrorMessage(e);
                if ("object" === W(e)) {
                    var t = e.http_code, n = e.messages, i = void 0 === n ? [] : n;
                    return t === this._config.COMMENT_ERROR_CODES.TOO_MANY_REQUESTS && i.length && i[0].message ? i[0].message : this._guidelinesWarningMsg;
                }
                return "";
            },
            _setFormInErrorState: function(e) {
                "object" === W(e) && e.http_code === this._config.COMMENT_ERROR_CODES.TOO_MANY_REQUESTS && e.code === this._config.COMMENT_ERROR_CODES.ERROR_VALIDATION && this._showRateLimitPopup(e), 
                e.http_code !== F.HTTP_CODE_EXPECTATION_FAILURE && this._$commentWarning.removeClass("hide").html(this._formatErrorMessage(e)), 
                this._$formItemContainer.addClass("form-item-error");
            },
            _removeFormFromErrorState: function() {
                this._$commentWarning.addClass("hide").html(""), this._$formItemContainer.removeClass("form-item-error");
            },
            _showRateLimitPopup: function() {
                var e = "\n      <p>" + I.default.translate("comment_ratelimit_popup_text_violation", 'Your comments have repeatedly violated our <a href="/misc/community#comments" target="_blank">community guidelines</a>. Continued violation of these guidelines may result in a permanent ban.') + "</p>\n      <p>" + I.default.translate("comment_ratelimit_popup_text_appreciate", "We appreciate your understanding.") + "</p>\n      <p>" + I.default.translate("comment_ratelimit_popup_text_contact", 'If you have questions or believe this was shown in error, please <a href="https://help.behance.net" target="_blank">contact us</a>.') + "</p>\n    ";
                Object(U.default)({
                    classes: [ "popup-comment-ratelimit" ],
                    title: I.default.translate("comment_ratelimit_popup_title", "You've reached the comment limit"),
                    html: e,
                    buttons: [ {
                        label: I.default.translate("comments_got_it_no_exclamation", "Got it"),
                        classes: [ "js-confirm" ]
                    } ]
                });
            }
        });
    },
    742: function(e, t, n) {
        e.exports = n(2)(81);
    },
    815: function(e, t, n) {
        var i = n(125), o = n(206), s = n(213), r = n(209), a = n(126).f, u = n(742).f, c = n(816), l = n(817), m = n(818), p = n(207), d = n(107), f = n(208).set, _ = n(210), h = n(477)("match"), g = o.RegExp, b = g.prototype, v = /a/g, y = /a/g, x = new g(v) !== v, O = m.UNSUPPORTED_Y;
        if (i && s("RegExp", !x || O || d((function() {
            return y[h] = !1, g(v) != v || g(y) == y || "/a/i" != g(v, "i");
        })))) {
            for (var w = function(e, t) {
                var n, i = this instanceof w, o = c(e), s = void 0 === t;
                if (!i && o && e.constructor === w && s) return e;
                x ? o && !s && (e = e.source) : e instanceof w && (s && (t = l.call(e)), e = e.source), 
                O && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var a = r(x ? new g(e, t) : g(e, t), i ? this : b, w);
                return O && n && f(a, {
                    sticky: n
                }), a;
            }, E = function(e) {
                e in w || a(w, e, {
                    configurable: !0,
                    get: function() {
                        return g[e];
                    },
                    set: function(t) {
                        g[e] = t;
                    }
                });
            }, j = u(g), C = 0; j.length > C; ) E(j[C++]);
            b.constructor = w, w.prototype = b, p(o, "RegExp", w);
        }
        _("RegExp");
    },
    816: function(e, t, n) {
        e.exports = n(2)(191);
    },
    817: function(e, t, n) {
        e.exports = n(2)(189);
    },
    818: function(e, t, n) {
        e.exports = n(2)(319);
    },
    821: function(e, t, n) {
        e.exports = n(2)(212);
    },
    851: function(e, t, n) {
        e.exports = n(2)(329);
    },
    968: function(e, t, n) {
        var i = n(357), o = {
            "bestyleguide/_avatar": n(453).template
        }, s = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="ui-menu-item">'), i.b("\n" + n), i.b('  <div class="mention-user-wrap">'), 
                i.b("\n" + n), i.b(i.rp("<bestyleguide/_avatar0", e, t, "")), i.b('    <div class="mention-displayname e2e-User-displayname">'), 
                i.b(i.v(i.f("display_name", e, t, 0))), i.b("</div>"), i.b("\n" + n), i.b('    <div class="mention-minor">@'), 
                i.b(i.v(i.f("username", e, t, 0))), i.b("</div>"), i.b("\n" + n), i.b("  </div>"), 
                i.b("\n" + n), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        src: function(e, t, n, i) {
                            n.b(n.v(n.d("images.50", e, t, 0)));
                        },
                        srcLarge: function(e, t, n, i) {
                            n.b(n.v(n.d("images.115", e, t, 0)));
                        }
                    }
                }
            },
            subs: {}
        }, '<li class="ui-menu-item">\n  <div class="mention-user-wrap">\n    {{<bestyleguide/_avatar}}\n      {{$src}}{{images.50}}{{/src}}\n      {{$srcLarge}}{{images.115}}{{/srcLarge}}\n    {{/bestyleguide/_avatar}}\n    <div class="mention-displayname e2e-User-displayname">{{display_name}}</div>\n    <div class="mention-minor">@{{username}}</div>\n  </div>\n</li>\n', i);
        s.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (s = o, r = t, Object.keys(r).reduce((function(e, t) {
                return e[t] = r[t], e;
            }), s)), n);
            var s, r;
        }, e.exports = s.render.bind(s), e.exports.template = s;
    }
} ]);
//# sourceMappingURL=CommentSection.js.map