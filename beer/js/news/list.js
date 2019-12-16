! function(e) {
	function __webpack_require__(n) {
		if(t[n]) return t[n].exports;
		var r = t[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
	}
	var t = {};
	__webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
		__webpack_require__.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: n
		})
	}, __webpack_require__.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return __webpack_require__.d(t, "a", t), t
	}, __webpack_require__.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, __webpack_require__.p = "//mtd.jd.com/demo/bulletin", __webpack_require__(__webpack_require__.s = 63)
}([function(e, t, n) {
	e.exports = n(9)["default"], e.exports["default"] = e.exports
}, function(e, t) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch(r) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function(e, t) {
	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function parseUri(e) {
		for(var t = o.parser[o.strictMode ? "strict" : "loose"].exec(e), n = {}, r = 14; r--;) n[o.key[r]] = t[r] || "";
		return n[o.q.name] = {}, n[o.key[12]].replace(o.q.parser, function(e, t, r) {
			t && (n[o.q.name][t] = r)
		}), n
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		r = function(e) {
			for(var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
				for(var o = n[r];
					" " === o.charAt(0);) o = o.substring(1, o.length);
				if(0 === o.indexOf(t)) return o.substring(t.length, o.length)
			}
			return null
		};
	t["default"] = {
		exposeLog: function() {
			function exposeLog(e, t) {
				var n = e.text,
					r = n === undefined ? null : n,
					o = e.biclk,
					i = o === undefined ? null : o,
					a = e.desc,
					u = a === undefined ? null : a,
					l = e.url,
					s = l === undefined ? null : l,
					c = e.mcinfo,
					d = c === undefined ? null : c,
					f = t.rept,
					p = t.poi,
					h = t.theme,
					m = h === undefined ? null : h,
					g = t.source,
					v = g === undefined ? null : g,
					y = p.split(""),
					b = y.lastIndexOf("_"); - 1 !== b && (y[b] = "|", p = y.join("")), window.expLogJSON && window.expLogJSON("pc_news", "basic", JSON.stringify({
					rept: f,
					poi: p,
					text: r,
					biclk: i,
					desc: u,
					url: s,
					mcinfo: d,
					theme: m,
					source: v
				}))
			}
			return exposeLog
		}(),
		clickLog: function() {
			function clickLog(e, t) {
				var n = e.text,
					r = n === undefined ? null : n,
					o = e.biclk,
					i = o === undefined ? null : o,
					a = e.desc,
					u = a === undefined ? null : a,
					l = e.url,
					s = l === undefined ? null : l,
					c = e.mcinfo,
					d = c === undefined ? null : c,
					f = t.rept,
					p = t.poi,
					h = t.theme,
					m = h === undefined ? null : h,
					g = t.source,
					v = g === undefined ? null : g,
					y = p.split(""),
					b = y.lastIndexOf("_"); - 1 !== b && (y[b] = "|", p = y.join("")), window.log && window.log("pc_news", "basic", f, p, r, s, u, m, d, i, v)
			}
			return clickLog
		}(),
		getWindowWidth: function() {
			function getWindowWidth() {
				return "CSS1Compat" === document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth
			}
			return getWindowWidth
		}(),
		getWindowHeight: function() {
			function getWindowHeight() {
				return "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
			}
			return getWindowHeight
		}(),
		getScrollHeight: function() {
			function getScrollHeight() {
				var e = 0,
					t = 0;
				return document.body && (e = document.body.scrollHeight), document.documentElement && (t = document.documentElement.scrollHeight), e - t > 0 ? e : t
			}
			return getScrollHeight
		}(),
		getScrollTop: function() {
			function getScrollTop() {
				var e = 0,
					t = 0;
				return document.body && (e = document.body.scrollTop), document.documentElement && (t = document.documentElement.scrollTop), e - t > 0 ? e : t
			}
			return getScrollTop
		}(),
		debounce: function() {
			function debounce(e, t, n) {
				var r = void 0,
					o = void 0,
					i = void 0,
					a = void 0,
					u = void 0,
					l = function() {
						function later() {
							var l = +new Date - a;
							l < t && l >= 0 ? r = setTimeout(later, t - l) : (r = null, n || (u = e.apply(i, o), r || (i = null, o = null)))
						}
						return later
					}();
				return function() {
					function debounced() {
						i = this, o = arguments, a = +new Date;
						var s = n && !r;
						return r || (r = setTimeout(l, t)), s && (u = e.apply(i, o), i = null, o = null), u
					}
					return debounced
				}()
			}
			return debounce
		}(),
		throttle: function() {
			function throttle(e, t, n) {
				t || (t = 250);
				var r = +new Date,
					o = void 0;
				return function() {
					var i = n || this,
						a = +new Date,
						u = arguments;
					r && a < r + t ? (clearTimeout(o), o = setTimeout(function() {
						r = a, e.apply(i, u)
					}, t)) : (r = a, e.apply(i, u))
				}
			}
			return throttle
		}(),
		getQueryParamValue: function() {
			function getQueryParamValue(e) {
				return new i(e).data.queryKey
			}
			return getQueryParamValue
		}(),
		getAnnouncementListURL: function() {
			function getAnnouncementListURL(e) {
				return "//kuaibao.jd.com/noticelist"
			}
			return getAnnouncementListURL
		}(),
		getAnnouncementDetailURL: function() {
			function getAnnouncementDetailURL(e) {
				return "//kuaibao.jd.com/notice?id=" + e
			}
			return getAnnouncementDetailURL
		}(),
		getBulletinListURL: function() {
			function getBulletinListURL() {
				return "//kuaibao.jd.com"
			}
			return getBulletinListURL
		}(),
		getBulletinItemURL: function() {
			function getBulletinItemURL(e) {
				return "//kuaibao.jd.com/article?id=" + e
			}
			return getBulletinItemURL
		}(),
		getPin: function() {
			function getPin(e) {
				var t = "";
				return e && t || (t = r("pin") || t), t
			}
			return getPin
		}(),
		getJda: function() {
			function getJda(e) {
				var t = "";
				return e && t || (t = r("__jda") || t), t
			}
			return getJda
		}(),
		getUuid: function() {
			function getUuid(e) {
				var t = "";
				if(!e || !this.getPin()) {
					t = (r("__jda") || "").split(".")[1] || t
				}
				return t
			}
			return getUuid
		}()
	};
	var o = {
			strictMode: !1,
			key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
			q: {
				name: "queryKey",
				parser: /(?:^|&)([^&=]*)=?([^&]*)/g
			},
			parser: {
				strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
				loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
			}
		},
		i = function() {
			function Uri(e) {
				_classCallCheck(this, Uri), this.url = e, this.data = parseUri(e)
			}
			return n(Uri, [{
				key: "getQueryParamValue",
				value: function() {
					function getQueryParamValue(e) {
						return this.data.queryKey[e]
					}
					return getQueryParamValue
				}()
			}, {
				key: "replaceQueryParam",
				value: function() {
					function replaceQueryParam(e, t) {
						void 0 !== t ? this.data.queryKey[e] = t.toString() : delete this.data.queryKey[e]
					}
					return replaceQueryParam
				}()
			}, {
				key: "getKeyValue",
				value: function() {
					function getKeyValue(e) {
						return this.data[e]
					}
					return getKeyValue
				}()
			}, {
				key: "toString",
				value: function() {
					function toString() {
						var e = this.data.protocol + "://" + this.data.authority + this.data.path;
						if(this.data.queryKey) {
							e += "?";
							var t = [];
							for(var n in this.data.queryKey) t.push(n + "=" + this.data.queryKey[n]);
							e += t.join("&")
						}
						return e
					}
					return toString
				}()
			}]), Uri
		}()
}, function(e, t, n) {
	"use strict";
	e.exports = n(10).polyfill()
}, function(e, t, n) {
	"use strict";
	n(12).polyfill()
}, function(e, t, n) {
	"use strict";

	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}
	t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = undefined;
	var r = n(16),
		o = _interopRequireDefault(r),
		i = n(37),
		a = _interopRequireDefault(i),
		u = n(38),
		l = _interopRequireDefault(u),
		s = n(39),
		c = _interopRequireDefault(s),
		d = n(20),
		f = _interopRequireDefault(d),
		p = n(19);
	_interopRequireDefault(p);
	t.createStore = o["default"], t.combineReducers = a["default"], t.bindActionCreators = l["default"], t.applyMiddleware = c["default"], t.compose = f["default"]
}, function(e, t) {
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = {
		getDownloadSpeed: function() {
			function getDownloadSpeed() {
				try {
					if((window.performance || window.webkitPerformance || {}).timing) {
						var e = $("html").html().length,
							t = e / 1024,
							n = performance.timing.responseEnd - performance.timing.requestStart;
						return Math.round(.25 * t / (n / 1e3))
					}
				} catch(r) {}
				return 0
			}
			return getDownloadSpeed
		}(),
		getRank: function() {
			function getRank() {
				var e = this.getDownloadSpeed();
				return e < 25 ? 31 : e < 50 ? 32 : e < 75 ? 33 : e < 100 ? 34 : e < 150 ? 35 : e < 200 ? 36 : e < 250 ? 37 : e < 300 ? 38 : e < 350 ? 39 : e < 400 ? 40 : e < 450 ? 41 : e < 500 ? 42 : e < 1e3 ? 43 : 44
			}
			return getRank
		}(),
		getSpeedInfo: function() {
			function getSpeedInfo() {
				var e = Math.floor(100 * Math.random()),
					t = this.getDownloadSpeed(),
					n = window.pageConfig || {},
					r = n && n.O2_REPORT;
				return void 0 !== r && "number" == typeof r || (r = 100), r > 0 && e >= 0 && e <= r && t > 0 ? "s" + this.getRank() + "=" + t + "&s50=" + t : ""
			}
			return getSpeedInfo
		}(),
		getScreenSection: function() {
			function getScreenSection() {
				var e = document.documentElement.clientWidth;
				return e >= 1190 ? 68 : e >= 990 ? 69 : 70
			}
			return getScreenSection
		}(),
		getScreenRatio: function() {
			function getScreenRatio() {
				var e = window.screen.width,
					t = window.screen.height,
					n = {
						51: {
							width: 800,
							height: 600
						},
						52: {
							width: 960,
							height: 640
						},
						53: {
							width: 1024,
							height: 768
						},
						54: {
							width: 1136,
							height: 640
						},
						55: {
							width: 1152,
							height: 864
						},
						56: {
							width: 1280,
							height: 768
						},
						57: {
							width: 1280,
							height: 800
						},
						58: {
							width: 1280,
							height: 960
						},
						59: {
							width: 1280,
							height: 1024
						},
						60: {
							width: 1366,
							height: 768
						},
						61: {
							width: 1440,
							height: 900
						},
						62: {
							width: 1600,
							height: 1024
						},
						63: {
							width: 1600,
							height: 1200
						},
						64: {
							width: 1920,
							height: 1080
						},
						65: {
							width: 1920,
							height: 1200
						},
						66: {
							width: 2560,
							height: 1440
						},
						67: {
							width: 2560,
							height: 1600
						}
					};
				for(var r in n)
					if(e === n[r].width && t === n[r].height) return r
			}
			return getScreenRatio
		}(),
		getBrowser: function() {
			function getBrowser() {
				var e, t = {},
					n = navigator.userAgent.toLowerCase();
				return(e = n.match(/rv:([\d.]+)\) like gecko/)) ? t.ie = e[1] : (e = n.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = n.match(/metasr/)) ? t.sougou = !0 : (e = n.match(/qqbrowser/)) ? t.qq = !0 : (e = n.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : (e = n.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = n.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = n.match(/ipad/)) && (t.ipad = !0), t.chrome ? 11 : t.firefox ? 12 : t.safari ? 13 : t.opera ? 14 : t.ie ? "6.0" === t.ie ? 15 : "7.0" === t.ie ? 16 : "8.0" === t.ie ? 17 : "9.0" === t.ie ? 18 : "10.0" === t.ie ? 19 : "11.0" === t.ie ? 20 : 21 : t.sougou ? 22 : t.qq ? 23 : t.ipad ? 24 : 25
			}
			return getBrowser
		}(),
		getBaseData: function() {
			function getBaseData() {
				var e = window["_REPORT_"],
					t = e && e["START"],
					n = [];
				if(e && t) {
					var r = e["CSS"],
						o = e["FS"],
						i = e["JS"],
						a = e["DOM"];
					r && n.push("s72=" + (r.getTime() - t.getTime())), o && n.push("s73=" + (o.getTime() - t.getTime())), i && n.push("s74=" + (i.getTime() - t.getTime())), a && n.push("s75=" + (a.getTime() - t.getTime())), n.push("s76=" + ((new Date).getTime() - t.getTime()))
				}
				return n.join("&")
			}
			return getBaseData
		}(),
		getRetina: function() {
			function getRetina() {
				return window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches ? "s71=1" : ""
			}
			return getRetina
		}(),
		processRetina: function() {
			function processRetina() {
				var e = this.getRetina();
				e && this.processCore(e)
			}
			return processRetina
		}(),
		getSystem: function() {
			function getSystem() {
				var e = navigator.userAgent.toLowerCase();
				if(-1 !== e.indexOf("macintosh") || -1 !== e.indexOf("mac os x")) return 6;
				if(-1 !== e.indexOf("linux")) return 7;
				var t = {
					"nt 5.1": 1,
					"nt 5.2": 1,
					"nt 6.0": 2,
					"nt 6.1": 3,
					"nt 6.2": 4,
					"nt 6.3": 4,
					"nt 6.4": 5,
					"nt 10.0": 5
				};
				for(var n in t)
					if(-1 !== e.indexOf(n)) return t[n];
				return 8
			}
			return getSystem
		}(),
		_getErrorInfo: function() {
			function _getErrorInfo(e) {
				var t = [];
				t.push("s" + this.getSystem() + "=1"), t.push("s" + this.getBrowser() + "=1"), t.push("s30=1");
				var n = this.getDownloadSpeed();
				return n > 0 && t.push("s" + this.getRank() + "=" + n), t.push("s" + (50 + e) + "=1"), t.join("&")
			}
			return _getErrorInfo
		}(),
		processBackup: function() {
			function processBackup(e) {
				this.pBackupId && this.processCore(this._getErrorInfo(e), this.pBackupId)
			}
			return processBackup
		}(),
		processHidedFloor: function() {
			function processHidedFloor(e) {
				this.pFloorId && this.processCore(this._getErrorInfo(e), this.pFloorId)
			}
			return processHidedFloor
		}(),
		processTempl: function() {
			function processTempl(e) {
				this.pTemplId && this.processCore(this._getErrorInfo(e), this.pTemplId)
			}
			return processTempl
		}(),
		processSpeed: function() {
			function processSpeed() {
				var e = this.getSpeedInfo();
				e && this.processCore(e)
			}
			return processSpeed
		}(),
		processJsError: function() {
			function processJsError() {
				var e = window,
					t = window.pageConfig || {},
					n = Math.floor(100 * Math.random()),
					r = t && t.O2_ERROR_REPORT;
				void 0 !== r && "number" == typeof r || (r = 100), r > 0 && n >= 0 && n <= r && $(e).bind("error.o2report", function(t, n, r, o, i) {
					var a = "";
					if(o = o || e.event && e.event.errorCharacter || 0, i && i.stack) t = i.stack.toString();
					else if(arguments.callee) {
						for(var u = [t], l = arguments.callee.caller, s = 3; l && --s > 0 && (u.push(l.toString()), l !== l.caller);) l = l.caller;
						t = u.join(",")
					}
					if(a = JSON.stringify(t) + (n ? ";URL:" + n : "") + (r ? ";Line:" + r : "") + (o ? ";Column:" + o : ""), e.lastErrMsg) {
						if(e.lastErrMsg.indexOf(t) > -1) return;
						e.lastErrMsg += "|" + t
					} else e.lastErrMsg = t;
					setTimeout(function() {
						a = encodeURIComponent(a), (new Image).src = "//wq.jd.com/webmonitor/collect/badjs.json?Content=" + a + "&t=" + Math.random()
					}, 1e3)
				})
			}
			return processJsError
		}(),
		_firstReport: !1,
		processAllData: function() {
			function processAllData() {
				if(!this._firstReport) {
					this._firstReport = !0;
					var e = this.getSpeedInfo(),
						t = this.getRetina();
					if(t || e) {
						var n = this.getBaseData(),
							r = this.getBrowser(),
							o = this.getScreenRatio(),
							i = this.getSystem(),
							a = [];
						a.push("s" + i + "=1"), a.push("s" + r + "=1"), a.push("s30=1"), e && a.push(e), o && a.push("s" + o + "=1"), a.push("s" + this.getScreenSection() + "=1"), t && a.push(t), n && a.push(n), this.processCore(a.join("&"))
					}
				}
			}
			return processAllData
		}(),
		image: null,
		processCore: function() {
			function processCore(e, t) {
				var n = t || this.pid;
				this.image = new Image, this.image.src = "//fd.3.cn/cesu/r?pid=" + n + "&" + e + "&_=" + (new Date).getTime()
			}
			return processCore
		}(),
		debug: function() {
			function debug(e) {
				"undefined" != typeof console.log && console.log(e)
			}
			return debug
		}(),
		pid: 0,
		pFloorId: 0,
		pBackupId: 0,
		pTemplId: 0,
		init: function() {
			function init(e, t, n, r) {
				var o = this;
				if(!e) return void o.debug("pageId must be provided!");
				o.pid = e, o.pFloorId = n, o.pBackupId = t, o.pTemplId = r, $(window).bind("load.o2report", function() {
					o.processAllData()
				}), o.processJsError()
			}
			return init
		}()
	};
	window.o2Report = n, t["default"] = n
}, function(e, t, n) {
	var r, o;
	! function() {
		"use strict";

		function classNames() {
			for(var e = [], t = 0; t < arguments.length; t++) {
				var r = arguments[t];
				if(r) {
					var o = typeof r;
					if("string" === o || "number" === o) e.push(r);
					else if(Array.isArray(r) && r.length) {
						var i = classNames.apply(null, r);
						i && e.push(i)
					} else if("object" === o)
						for(var a in r) n.call(r, a) && r[a] && e.push(a)
				}
			}
			return e.join(" ")
		}
		var n = {}.hasOwnProperty;
		void 0 !== e && e.exports ? (classNames["default"] = classNames, e.exports = classNames) : (r = [], (o = function() {
			return classNames
		}.apply(t, r)) !== undefined && (e.exports = o))
	}()
}, , function(e, t, n) {
	"use strict";

	function noop() {}

	function isNumber(e) {
		return "number" == typeof e
	}

	function isString(e) {
		return "string" == typeof e
	}

	function isFunction(e) {
		return "function" == typeof e
	}

	function isBoolean(e) {
		return !0 === e || !1 === e
	}

	function isUndefined(e) {
		return e === undefined
	}

	function shallowEqual(e, t) {
		if(null === e || null === t) return !1;
		if(Object.is(e, t)) return !0;
		var n = e ? Object.keys(e) : [],
			r = t ? Object.keys(t) : [];
		if(n.length !== r.length) return !1;
		for(var o = 0; o < n.length; o++) {
			var i = n[o];
			if(!t.hasOwnProperty(i) || !Object.is(e[i], t[i])) return !1
		}
		return !0
	}

	function isAttrAnEvent(e) {
		return "o" === e[0] && "n" === e[1]
	}

	function extend(e, t) {
		if(!t) return e;
		for(var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		return e
	}

	function clone(e) {
		return extend({}, e)
	}

	function isNullOrUndef(e) {
		return e === undefined || null === e
	}

	function isInvalid(e) {
		return isNullOrUndef(e) || !0 === e || !1 === e
	}

	function isVNode(e) {
		return !isNullOrUndef(e) && 2 === e.vtype
	}

	function isVText(e) {
		return !isNullOrUndef(e) && 1 === e.vtype
	}

	function isComponent(e) {
		return !isInvalid(e) && e.isReactComponent === y
	}

	function isWidget(e) {
		return !isNullOrUndef(e) && (12 & e.vtype) > 0
	}

	function isPortal(e, t) {
		return(32 & e) > 0
	}

	function isComposite(e) {
		return !isNullOrUndef(e) && 4 === e.vtype
	}

	function isValidElement(e) {
		return !isNullOrUndef(e) && e.vtype
	}

	function noop$1() {}

	function attachEvent(e, t, n) {
		if((t = fixEvent(e, t)) === w) return void processOnPropertyChangeEvent(e, n);
		var r = E.get(t);
		if(1 === T[t]) {
			r || (r = new m);
			var o = attachEventToNode(e, t, r);
			E.set(t, r), isFunction(n) && r.set(e, {
				eventHandler: n,
				event: o
			})
		} else r || (r = {
			items: new m
		}, r.event = attachEventToDocument(u, t, r), E.set(t, r)), isFunction(n) && (C && (e.onclick = noop$1), r.items.set(e, n))
	}

	function detachEvent(e, t, n) {
		if((t = fixEvent(e, t)) !== w) {
			var r = E.get(t);
			if(1 === T[t] && r) {
				var o = r.get(e);
				if(o) {
					e.removeEventListener(parseEventName(t), o.event, !1);
					var i = r.size;
					r["delete"](e) && 0 === i && E["delete"](t)
				}
			} else if(r && r.items) {
				var a = r.items;
				a["delete"](e) && 0 === a.size && (u.removeEventListener(parseEventName(t), r.event, !1), E["delete"](t))
			}
		}
	}

	function propertyChangeHandler(e) {
		if("value" === e.propertyName) {
			var t = e.target || e.srcElement,
				n = t.value;
			n !== P && (P = n, isFunction(A) && A.call(t, e))
		}
	}

	function processOnPropertyChangeEvent(e, t) {
		A = t, k || (k = !0, u.addEventListener("focusin", function() {
			unbindOnPropertyChange(), bindOnPropertyChange(e)
		}, !1), u.addEventListener("focusout", unbindOnPropertyChange, !1))
	}

	function bindOnPropertyChange(e) {
		O = e, P = e.value, j = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(O, "value", {
			get: function() {
				return j.get.call(this)
			},
			set: function(e) {
				P = e, j.set.call(this, e)
			}
		}), O.addEventListener("propertychange", propertyChangeHandler, !1)
	}

	function unbindOnPropertyChange() {
		O && (delete O.value, O.removeEventListener("propertychange", propertyChangeHandler, !1), O = null, P = null, j = null)
	}

	function detectCanUseOnInputNode(e) {
		var t = e.nodeName && e.nodeName.toLowerCase(),
			n = e.type;
		return "input" === t && /text|password/.test(n) || "textarea" === t
	}

	function fixEvent(e, t) {
		return t = "onDoubleClick" === t ? "ondblclick" : "onTouchTap" === t ? "onclick" : "onChange" === t && detectCanUseOnInputNode(e) ? _ in window ? _ : w : t.toLowerCase()
	}

	function parseEventName(e) {
		return e.substr(2)
	}

	function stopPropagation() {
		this.cancelBubble = !0, this.stopImmediatePropagation()
	}

	function dispatchEvent(e, t, n, r, o) {
		var i = n.get(t);
		if((!i || (r--, o.currentTarget = t, Object.defineProperties(e, {
				nativeEvent: {
					value: e
				}
			}), i(e), !e.cancelBubble)) && r > 0) {
			var a = t.parentNode;
			if(null === a || "click" === e.type && 1 === a.nodeType && a.disabled) return;
			dispatchEvent(e, a, n, r, o)
		}
	}

	function attachEventToDocument(e, t, n) {
		var r = function(e) {
			var t = n.items,
				r = t.size;
			if(r > 0) {
				var o = {
					currentTarget: e.target
				};
				try {
					Object.defineProperties(e, {
						currentTarget: {
							configurable: !0,
							get: function() {
								return o.currentTarget
							}
						},
						stopPropagation: {
							value: stopPropagation
						}
					})
				} catch(i) {}
				dispatchEvent(e, e.target, n.items, r, o)
			}
		};
		return e.addEventListener(parseEventName(t), r, !1), r
	}

	function attachEventToNode(e, t, n) {
		var r = function(t) {
			var r = n.get(e);
			if(r && r.eventHandler) {
				var o = {
					currentTarget: e
				};
				Object.defineProperties(t, {
					currentTarget: {
						configurable: !0,
						get: function() {
							return o.currentTarget
						}
					}
				}), r.eventHandler(t)
			}
		};
		return e.addEventListener(parseEventName(t), r, !1), r
	}

	function unmountChildren(e, t) {
		if(s(e))
			for(var n = 0, r = e.length; n < r; n++) unmount(e[n], t);
		else unmount(e, t)
	}

	function unmount(e, t) {
		if(!isInvalid(e)) {
			var n = e.vtype,
				r = 4 & n ? e.component.dom : e.dom;
			if((12 & n) > 0) R.beforeUnmount(e), e.destroy();
			else if((2 & n) > 0) {
				var o = e.props,
					i = e.children,
					a = e.ref;
				unmountChildren(i);
				for(var u in o) isAttrAnEvent(u) && detachEvent(r, u, o[u]);
				null !== a && b.detach(e, a, r)
			} else 32 & n && unmountChildren(e.children, e.type);
			isNullOrUndef(t) || isNullOrUndef(r) || t.removeChild(r)
		}
	}

	function patch(e, t, n, r, o) {
		if(n = e && e.dom || n, isVText(t) && isVText(e)) return patchVText(e, t);
		var i;
		if(isSameVNode(e, t)) isVNode(t) ? (o = isNullOrUndef(o) ? e.isSvg : o, o && (t.isSvg = o), patchProps(n, t.props, e.props, e, o), patchChildren(n, e.children, t.children, r, o), null !== t.ref && b.update(e, t, n), i = n) : isWidget(t) && (i = t.update(e, t, r, n), R.afterUpdate(t)), t.dom = i;
		else {
			var a = n.parentNode,
				u = n.nextSibling;
			unmount(e, a), i = createElement(t, o, r), null !== t && (t.dom = i), null !== a && a.insertBefore(i, null !== t && 32 & t.vtype ? null : u)
		}
		return i
	}

	function patchArrayChildren(e, t, n, r, o) {
		var i = t.length,
			a = n.length;
		if(0 === i) {
			if(a > 0)
				for(var u = 0; u < a; u++) mountChild(n[u], e, r, o)
		} else 0 === a ? (unmountChildren(t), e.textContent = "") : isKeyed(t, n) ? patchKeyedChildren(t, n, e, r, o, i, a) : patchNonKeyedChildren(e, t, n, r, o, i, a)
	}

	function patchChildren(e, t, n, r, o) {
		if(t !== n) {
			var i = s(t),
				a = s(n);
			i && a ? patchArrayChildren(e, t, n, r, o) : i || a ? i && !a ? patchArrayChildren(e, t, [n], r, o) : !i && a && patchArrayChildren(e, [t], n, r, o) : patch(t, n, e, r, o)
		}
	}

	function patchNonKeyedChildren(e, t, n, r, o, i, a) {
		for(var u = Math.min(i, a), l = 0; l < u;) patch(t[l], n[l], e, r, o), l++;
		if(i < a)
			for(l = u; l < a; l++) null !== e && e.appendChild(createElement(n[l], o, r));
		else if(i > a)
			for(l = u; l < i; l++) unmount(t[l], e)
	}

	function patchKeyedChildren(e, t, n, r, o, i, a) {
		var u, l, s, c, d, f, p, h = i - 1,
			g = a - 1,
			v = 0,
			y = 0,
			b = e[v],
			_ = t[y],
			w = e[h],
			C = t[g];
		e: {
			for(; b.key === _.key;) {
				if(patch(b, _, n, r, o), v++, y++, v > h || y > g) break e;
				b = e[v], _ = t[y]
			}
			for(; w.key === C.key;) {
				if(patch(w, C, n, r, o), h--, g--, v > h || y > g) break e;
				w = e[h], C = t[g]
			}
		}
		if(v > h) {
			if(y <= g)
				for(f = g + 1, d = f < a ? t[f].dom : null; y <= g;) p = t[y], y++, attachNewNode(n, createElement(p, o, r), d)
		} else if(y > g)
			for(; v <= h;) unmount(e[v++], n);
		else {
			var E = h - v + 1,
				T = g - y + 1,
				k = new Array(T);
			for(u = 0; u < T; u++) k[u] = -1;
			var S = !1,
				x = 0,
				O = 0;
			if(T <= 4 || E * T <= 16) {
				for(u = v; u <= h; u++)
					if(s = e[u], O < T)
						for(l = y; l <= g; l++)
							if(c = t[l], s.key === c.key) {
								k[l - y] = u, x > l ? S = !0 : x = l, patch(s, c, n, r, o), O++, e[u] = null;
								break
							}
			} else {
				var P = new m;
				for(u = y; u <= g; u++) P.set(t[u].key, u);
				for(u = v; u <= h; u++) s = e[u], O < T && (l = P.get(s.key)) !== undefined && (c = t[l], k[l - y] = u, x > l ? S = !0 : x = l, patch(s, c, n, r, o), O++, e[u] = null)
			}
			if(E === i && 0 === O)
				for(unmountChildren(e), n.textContent = ""; y < T;) p = t[y], y++, attachNewNode(n, createElement(p, o, r), null);
			else {
				for(u = E - O; u > 0;) null !== (s = e[v++]) && (unmount(s, n), u--);
				if(S) {
					var j = lis(k);
					for(l = j.length - 1, u = T - 1; u >= 0; u--) - 1 === k[u] ? (x = u + y, p = t[x], f = x + 1, attachNewNode(n, createElement(p, o, r), f < a ? t[f].dom : null)) : l < 0 || u !== j[l] ? (x = u + y, p = t[x], f = x + 1, attachNewNode(n, p.dom, f < a ? t[f].dom : null)) : l--
				} else if(O !== T)
					for(u = T - 1; u >= 0; u--) - 1 === k[u] && (x = u + y, p = t[x], f = x + 1, attachNewNode(n, createElement(p, o, r), f < a ? t[f].dom : null))
			}
		}
	}

	function attachNewNode(e, t, n) {
		isNullOrUndef(n) ? e.appendChild(t) : e.insertBefore(t, n)
	}

	function lis(e) {
		var t = e.slice(),
			n = [];
		n.push(0);
		for(var r, o, i = 0, a = e.length; i < a; ++i)
			if(-1 !== e[i]) {
				var u = n[n.length - 1];
				if(e[u] < e[i]) t[i] = u, n.push(i);
				else {
					for(r = 0, o = n.length - 1; r < o;) {
						var l = (r + o) / 2 | 0;
						e[n[l]] < e[i] ? r = l + 1 : o = l
					}
					e[i] < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i)
				}
			}
		for(r = n.length, o = n[r - 1]; r-- > 0;) n[r] = o, o = t[o];
		return n
	}

	function isKeyed(e, t) {
		return t.length > 0 && !isNullOrUndef(t[0]) && !isNullOrUndef(t[0].key) && e.length > 0 && !isNullOrUndef(e[0]) && !isNullOrUndef(e[0].key)
	}

	function isSameVNode(e, t) {
		return !(isInvalid(e) || isInvalid(t) || s(e) || s(t)) && (e.type === t.type && e.key === t.key)
	}

	function patchVText(e, t) {
		var n = e.dom;
		if(null !== n) {
			var r = t.text;
			return t.dom = n, e.text !== r && (n.nodeValue = r), n
		}
	}

	function setStyle(e, t, n) {
		return isNullOrUndef(n) || isNumber(n) && isNaN(n) ? void(e[t] = "") : "float" === t ? (e["cssFloat"] = n, void(e["styleFloat"] = n)) : void(e[t] = !isNumber(n) || D.test(t) ? n : n + "px")
	}

	function patchEvent(e, t, n, r) {
		t !== n && (isFunction(t) && detachEvent(r, e, t), attachEvent(r, e, n))
	}

	function patchStyle(e, t, n) {
		var r, o, i = n.style;
		if(isString(t)) return void(i.cssText = t);
		if(isNullOrUndef(e) || isString(e))
			for(r in t) o = t[r], setStyle(i, r, o);
		else
			for(r in t)(o = t[r]) !== e[r] && setStyle(i, r, o)
	}

	function patchProp(e, t, n, r, o, i) {
		if(n !== r || "value" === t) {
			if("className" === t && (t = "class"), 1 === L[t]) return;
			if("class" !== t || i)
				if("dangerouslySetInnerHTML" === t) {
					var a = n && n.__html,
						u = r && r.__html;
					a !== u && (isNullOrUndef(u) || (isValidElement(o) && o.children !== v && (unmountChildren(o.children), o.children = []), e.innerHTML = u))
				} else if(isAttrAnEvent(t)) patchEvent(t, n, r, e);
			else if("style" === t) patchStyle(n, r, e);
			else if("list" !== t && "type" !== t && !i && t in e) setProperty(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
			else if(isNullOrUndef(r) || !1 === r) e.removeAttribute(t);
			else {
				var l = I.DOMAttributeNamespaces[t];
				if(i && l)
					if(r) e.setAttributeNS(l, t, r);
					else {
						var s = t.indexOf(":"),
							c = s > -1 ? t.substr(s + 1) : t;
						e.removeAttributeNS(l, c)
					}
				else isFunction(r) || e.setAttribute(t, r)
			} else e.className = r
		}
	}

	function setProperty(e, t, n) {
		try {
			e[t] = n
		} catch(r) {}
	}

	function patchProps(e, t, n, r, o) {
		for(var i in n) {
			var a = n[i];
			isNullOrUndef(t[i]) && !isNullOrUndef(a) && (isAttrAnEvent(i) ? detachEvent(e, i, a) : "dangerouslySetInnerHTML" === i ? e.textContent = "" : "className" === i ? e.removeAttribute("class") : e.removeAttribute(i))
		}
		for(var u in t) patchProp(e, u, n[u], t[u], r, o)
	}

	function createElement(e, t, n, r) {
		var o;
		if(isValidElement(e)) {
			var i = e.vtype;
			12 & i ? (o = e.init(n, r), R.afterMount(e)) : 1 & i ? (o = u.createTextNode(e.text), e.dom = o) : 2 & i ? o = mountVNode$1(e, t, n, r) : 16 & i ? o = e.dom : isPortal(i, e) && (e.type.appendChild(createElement(e.children, t, n, r)), o = u.createTextNode(""))
		} else if(isString(e) || isNumber(e)) o = u.createTextNode(e);
		else if(isNullOrUndef(e) || isBoolean(e)) o = u.createTextNode("");
		else {
			if(!s(e)) throw new Error("Unsupported VNode.");
			o = u.createDocumentFragment(), e.forEach(function(e) {
				if(!isInvalid(e)) {
					var i = createElement(e, t, n, r);
					i && o.appendChild(i)
				}
			})
		}
		return o
	}

	function mountVNode$1(e, t, n, r) {
		e.isSvg ? t = !0 : "svg" === e.type ? t = !0 : l || (t = !1), t && (e.namespace = U, e.isSvg = t);
		var o = t ? u.createElementNS(e.namespace, e.type) : u.createElement(e.type);
		setProps(o, e, t), "foreignObject" === e.type && (t = !1);
		var i = e.children;
		if(s(i))
			for(var a = 0, c = i.length; a < c; a++) mountChild(i[a], o, n, t, r);
		else mountChild(i, o, n, t, r);
		return e.dom = o, null !== e.ref && b.attach(e, e.ref, o), o
	}

	function mountChild(e, t, n, r, o) {
		e.parentContext = n || y;
		var i = createElement(e, r, n, o);
		null !== i && t.appendChild(i)
	}

	function setProps(e, t, n) {
		var r = t.props;
		for(var o in r) patchProp(e, o, null, r[o], null, n)
	}

	function createVText(e) {
		return {
			text: e,
			vtype: 1,
			dom: null
		}
	}

	function createVoid() {
		return {
			dom: u.createTextNode(""),
			vtype: 16
		}
	}

	function errorCatcher(e, t) {
		try {
			return e()
		} catch(n) {
			errorHandler(t, n)
		}
	}

	function errorHandler(e, t) {
		for(var n;;) {
			if(isFunction(e.componentDidCatch)) {
				n = e;
				break
			}
			if(!e._parentComponent) break;
			e = e._parentComponent
		}
		if(!n) throw t;
		var r = n._disable;
		n._disable = !1, n.componentDidCatch(t), n._disable = r
	}

	function mountVNode(e, t, n) {
		return createElement(e, !1, t, n)
	}

	function mountComponent(e, t, n) {
		var r = e.ref;
		e.component = new e.type(e.props, t);
		var o = e.component;
		isComponent(n) && (o._parentComponent = n), isFunction(o.componentWillMount) && (errorCatcher(function() {
			o.componentWillMount()
		}, o), o.state = o.getState()), o._dirty = !1;
		var i = renderComponent(o);
		o._rendered = i, isFunction(o.componentDidMount) && q.push(o), isNullOrUndef(r) || b.attach(e, r, o.dom);
		var a = e.dom = o.dom = mountVNode(i, getChildContext(o, t), o);
		return o._disable = !1, a
	}

	function mountStatelessComponent(e, t) {
		return e._rendered = e.type(e.props, t), e.dom = mountVNode(e._rendered, t)
	}

	function getChildContext(e, t) {
		return e.getChildContext ? extend(t, e.getChildContext()) : t
	}

	function renderComponent(e) {
		g.current = e;
		var t;
		return errorCatcher(function() {
			t = e.render()
		}, e), isNumber(t) || isString(t) ? t = createVText(t) : isUndefined(t) && (t = createVoid()), g.current = null, t
	}

	function flushMount() {
		if(q.length) {
			var e = q.slice(0);
			q.length = 0, e.forEach(function(e) {
				isFunction(e) ? e() : e.componentDidMount && errorCatcher(function() {
					e.componentDidMount()
				}, e)
			})
		}
	}

	function reRenderComponent(e, t) {
		var n = t.component = e.component,
			r = t.props,
			o = n.context;
		return n._disable = !0, isFunction(n.componentWillReceiveProps) && errorCatcher(function() {
			n.componentWillReceiveProps(r, o)
		}, n), n._disable = !1, n.prevProps = n.props, n.prevState = n.state, n.prevContext = n.context, n.props = r, n.context = o, isNullOrUndef(t.ref) || b.update(e, t), updateComponent(n), n.dom
	}

	function reRenderStatelessComponent(e, t, n, r) {
		var o = e._rendered,
			i = t.type(t.props, n);
		return t._rendered = i, t.dom = patch(o, i, r, n)
	}

	function updateComponent(e, t) {
		void 0 === t && (t = !1);
		var n = e.dom,
			r = e.props,
			o = e.getState(),
			i = e.context,
			a = e.prevProps || r,
			u = e.prevState || o,
			l = e.prevContext || i;
		e.props = a, e.context = l;
		var s = !1;
		if(!t && isFunction(e.shouldComponentUpdate) && !1 === e.shouldComponentUpdate(r, o, i) ? s = !0 : isFunction(e.componentWillUpdate) && errorCatcher(function() {
				e.componentWillUpdate(r, o, i)
			}, e), e.props = r, e.state = o, e.context = i, e._dirty = !1, !s) {
			var c = e._rendered,
				d = renderComponent(e),
				f = getChildContext(e, i);
			e.dom = patch(c, d, n, f), e._rendered = d, isFunction(e.componentDidUpdate) && errorCatcher(function() {
				e.componentDidUpdate(a, u, i)
			}, e)
		}
		if(e.prevProps = e.props, e.prevState = e.state, e.prevContext = e.context, e._pendingCallbacks)
			for(; e._pendingCallbacks.length;) e._pendingCallbacks.pop().call(e);
		flushMount()
	}

	function unmountComponent(e) {
		var t = e.component;
		isFunction(t.componentWillUnmount) && errorCatcher(function() {
			t.componentWillUnmount()
		}, t), t._disable = !0, unmount(t._rendered), isNullOrUndef(e.ref) || b.detach(e, e.ref, e.dom)
	}

	function unmountStatelessComponent(e) {
		unmount(e._rendered)
	}

	function enqueueRender(e) {
		!e._dirty && (e._dirty = !0) && 1 === F.push(e) && d(rerender)
	}

	function rerender() {
		var e, t = F;
		for(F = []; e = t.pop();) e._dirty && updateComponent(e)
	}

	function render(e, t, n) {
		if(!t) throw new Error(t + " should be a DOM Element");
		var r, o = t._component;
		return R.roots.push(e), o !== undefined ? (R.roots = R.roots.filter(function(e) {
			return e !== o
		}), r = patch(o, e, t, {})) : (r = mountVNode(e, {}), t.appendChild(r)), t && (t._component = e), flushMount(), n && n(), isComposite(e) ? e.component : r
	}

	function createVNode(e, t, n, r, o, i, a) {
		return {
			type: e,
			key: r || null,
			vtype: 2,
			props: t || y,
			children: n,
			namespace: o || null,
			_owner: i,
			dom: null,
			ref: a || null
		}
	}

	function h(e, t, n) {
		var r;
		return t.children && (n || (n = t.children)), s(n) ? (r = [], addChildren(r, n, e)) : isString(n) || isNumber(n) ? n = createVText(String(n)) : isValidElement(n) || (n = v), t.children = r !== undefined ? r : n, createVNode(e, t, t.children, t.key, t.namespace, t.owner, t.ref)
	}

	function addChildren(e, t, n) {
		if(isString(t) || isNumber(t)) e.push(createVText(String(t)));
		else if(isValidElement(t)) e.push(t);
		else if(s(t))
			for(var r = 0; r < t.length; r++) addChildren(e, t[r], n)
	}

	function transformPropsForRealTag(e, t) {
		var n = {};
		for(var r in t) {
			var o = t[r];
			if("defaultValue" !== r) {
				var i = I.DOMAttributeNames[r];
				i && i !== r ? n[i] = o : n[r] = o
			} else n.value = t.value || t.defaultValue
		}
		return n
	}

	function transformPropsForComponent(e, t) {
		var n = {};
		for(var r in e) {
			var o = e[r];
			n[r] = o
		}
		if(t)
			for(var i in t) isUndefined(n[i]) && (n[i] = t[i]);
		return n
	}

	function createElement$2(e, t) {
		for(var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
		var o = n;
		n && (1 === n.length ? o = n[0] : 0 === n.length && (o = undefined));
		var i;
		return isString(e) ? (i = transformPropsForRealTag(e, t), i.owner = g.current, h(e, i, o)) : isFunction(e) ? (i = transformPropsForComponent(t, e.defaultProps), i.children && i.children !== v || (i.children = o || v), i.owner = g.current, e.prototype && e.prototype.render ? new V(e, i) : new W(e, i)) : e
	}

	function cloneElement(e, t) {
		for(var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
		if(isVText(e)) return createVText(e.text);
		if(isString(e)) return createVText(e);
		var o = clone(extend(clone(e.props), t));
		e.namespace && (o.namespace = e.namespace), 4 & e.vtype && !isNullOrUndef(e.ref) && (o.ref = e.ref);
		var i = (arguments.length > 2 ? [].slice.call(arguments, 2) : e.children || o.children) || [];
		if(i.length && 1 === i.length && (i = n[0]), s(e)) return e.map(function(e) {
			return cloneElement(e)
		});
		var a = createElement$2(e.type, o);
		if(s(i)) {
			var u = i.map(function(e) {
				return cloneElement(e, e.props)
			});
			0 === u.length && (u = v), isVNode(a) && (a.children = u), a.props.children = u
		} else i && (isVNode(a) && (a.children = i), a.props.children = cloneElement(i, i.props));
		return a
	}

	function flatten(e, t) {
		for(var n = 0, r = e.length; n < r; n++) {
			var o = e[n];
			s(o) ? flatten(o, t) : t.push(o)
		}
		return t
	}

	function hydrate(e, t, n) {
		if(null !== t) {
			for(var r = t.lastChild; r;) {
				var o = r.previousSibling;
				t.removeChild(r), r = o
			}
			return render(e, t, n)
		}
	}

	function createPortal(e, t) {
		return {
			type: t,
			vtype: 32,
			children: e,
			dom: null
		}
	}

	function unmountComponentAtNode(e) {
		var t = e._component;
		return !!isValidElement(t) && (unmount(t, e), delete e._component, !0)
	}

	function findDOMNode(e) {
		return e && e.dom || e
	}

	function createFactory(e) {
		return createElement$2.bind(null, e)
	}

	function unstable_renderSubtreeIntoContainer(e, t, n, r) {
		var o = createElement$2(K, {
				context: e.context
			}, t),
			i = render(o, n);
		return r && r.call(i), i
	}

	function isValidElement$1(e) {
		return isValidElement(e) && (6 & e.vtype) > 0
	}
	var r, o = function() {
			var e;
			if(void 0 !== o) e = o;
			else if("undefined" != typeof self) e = self;
			else try {
				e = Function("return this")()
			} catch(t) {
				throw new Error("global object is unavailable in this environment")
			}
			return e
		}(),
		i = "undefined" != typeof window,
		a = {
			createElement: noop,
			createElementNS: noop,
			createTextNode: noop
		},
		u = i ? document : a,
		l = isFunction(u.createAttributeNS),
		s = Array.isArray,
		c = "Promise" in o;
	c && (r = Promise.resolve());
	var d = function(e) {
		for(var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
		if(e = isFunction(e) ? e.bind.apply(e, [null].concat(t)) : e, c) return r.then(e);
		("requestAnimationFrame" in o ? requestAnimationFrame : setTimeout)(e)
	};
	Object.is = Object.is || function(e, t) {
		return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
	};
	var f = function() {
		this.cache = [], this.size = 0
	};
	f.prototype.set = function(e, t) {
		var n = this,
			r = this.cache.length;
		if(!r) return this.cache.push({
			k: e,
			v: t
		}), void(this.size += 1);
		for(var o = 0; o < r; o++) {
			var i = n.cache[o];
			if(i.k === e) return void(i.v = t)
		}
		this.cache.push({
			k: e,
			v: t
		}), this.size += 1
	}, f.prototype.get = function(e) {
		var t = this,
			n = this.cache.length;
		if(n)
			for(var r = 0; r < n; r++) {
				var o = t.cache[r];
				if(o.k === e) return o.v
			}
	}, f.prototype.has = function(e) {
		var t = this,
			n = this.cache.length;
		if(!n) return !1;
		for(var r = 0; r < n; r++) {
			if(t.cache[r].k === e) return !0
		}
		return !1
	}, f.prototype["delete"] = function(e) {
		for(var t = this, n = this.cache.length, r = 0; r < n; r++) {
			if(t.cache[r].k === e) return t.cache.splice(r, 1), t.size -= 1, !0
		}
		return !1
	}, f.prototype.clear = function() {
		var e = this,
			t = this.cache.length;
		if(this.size = 0, t)
			for(; t;) e.cache.pop(), t--
	};
	var p, m = "Map" in o ? Map : f,
		g = {
			current: null
		},
		v = [],
		y = {};
	! function(e) {
		e[e["Text"] = 1] = "Text", e[e["Node"] = 2] = "Node", e[e["Composite"] = 4] = "Composite", e[e["Stateless"] = 8] = "Stateless", e[e["Void"] = 16] = "Void", e[e["Portal"] = 32] = "Portal"
	}(p || (p = {}));
	var b = {
			update: function(e, t, n) {
				var r = null != e && e.ref,
					o = null != t && t.ref;
				r !== o && (isFunction(r) && isFunction(o) || this.detach(e, r, e.dom), this.attach(t, o, n))
			},
			attach: function(e, t, n) {
				var r = isComposite(e) ? e.component : n;
				if(isFunction(t)) t(r);
				else if(isString(t)) {
					var o = e._owner;
					o && isFunction(o.render) && (o.refs[t] = r)
				}
			},
			detach: function(e, t, n) {
				var r = isComposite(e) ? e.component : n;
				if(isFunction(t)) t(null);
				else if(isString(t)) {
					var o = e._owner;
					o.refs[t] === r && isFunction(o.render) && delete o.refs[t]
				}
			}
		},
		_ = "oninput",
		w = "onpropertychange",
		C = i && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
		E = new m,
		T = {
			onmousemove: 1,
			ontouchmove: 1,
			onmouseleave: 1,
			onmouseenter: 1,
			onload: 1,
			onunload: 1,
			onscroll: 1,
			onfocus: 1,
			onblur: 1,
			onrowexit: 1,
			onbeforeunload: 1,
			onstop: 1,
			ondragdrop: 1,
			ondragenter: 1,
			ondragexit: 1,
			ondraggesture: 1,
			ondragover: 1,
			oncontextmenu: 1,
			onerror: 1,
			onabort: 1,
			oncanplay: 1,
			oncanplaythrough: 1,
			ondurationchange: 1,
			onemptied: 1,
			onended: 1,
			onloadeddata: 1,
			onloadedmetadata: 1,
			onloadstart: 1,
			onencrypted: 1,
			onpause: 1,
			onplay: 1,
			onplaying: 1,
			onprogress: 1,
			onratechange: 1,
			onseeking: 1,
			onseeked: 1,
			onstalled: 1,
			onsuspend: 1,
			ontimeupdate: 1,
			onvolumechange: 1,
			onwaiting: 1
		};
	T[w] = 1;
	var k = !1;
	if(i && navigator.userAgent.indexOf("MSIE 9") >= 0) {
		var S = [],
			x = [];
		u.addEventListener("selectionchange", function() {
			var e = u.activeElement;
			if(detectCanUseOnInputNode(e)) {
				var t = S.indexOf(e),
					n = S[t] || S.push(e);
				if(n.value !== x[t]) {
					var r = u.createEvent("CustomEvent");
					r.initCustomEvent("input", !0, !0, undefined), x[t] = n.value, e.dispatchEvent(r)
				}
			}
		})
	}
	"undefined" == typeof Event || Event.prototype.persist || (Event.prototype.persist = noop$1);
	var O, P, j, A, R = {
			afterMount: noop$1,
			afterUpdate: noop$1,
			beforeUnmount: noop$1,
			roots: [],
			debug: !1
		},
		N = {
			ev: "http://www.w3.org/2001/xml-events",
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace"
		},
		M = {
			accentHeight: "accent-height",
			accumulate: 0,
			additive: 0,
			alignmentBaseline: "alignment-baseline",
			allowReorder: "allowReorder",
			alphabetic: 0,
			amplitude: 0,
			arabicForm: "arabic-form",
			ascent: 0,
			attributeName: "attributeName",
			attributeType: "attributeType",
			autoReverse: "autoReverse",
			azimuth: 0,
			baseFrequency: "baseFrequency",
			baseProfile: "baseProfile",
			baselineShift: "baseline-shift",
			bbox: 0,
			begin: 0,
			bias: 0,
			by: 0,
			calcMode: "calcMode",
			capHeight: "cap-height",
			clip: 0,
			clipPath: "clip-path",
			clipRule: "clip-rule",
			clipPathUnits: "clipPathUnits",
			colorInterpolation: "color-interpolation",
			colorInterpolationFilters: "color-interpolation-filters",
			colorProfile: "color-profile",
			colorRendering: "color-rendering",
			contentScriptType: "contentScriptType",
			contentStyleType: "contentStyleType",
			cursor: 0,
			cx: 0,
			cy: 0,
			d: 0,
			decelerate: 0,
			descent: 0,
			diffuseConstant: "diffuseConstant",
			direction: 0,
			display: 0,
			divisor: 0,
			dominantBaseline: "dominant-baseline",
			dur: 0,
			dx: 0,
			dy: 0,
			edgeMode: "edgeMode",
			elevation: 0,
			enableBackground: "enable-background",
			end: 0,
			evEvent: "ev:event",
			exponent: 0,
			externalResourcesRequired: "externalResourcesRequired",
			fill: 0,
			fillOpacity: "fill-opacity",
			fillRule: "fill-rule",
			filter: 0,
			filterRes: "filterRes",
			filterUnits: "filterUnits",
			floodColor: "flood-color",
			floodOpacity: "flood-opacity",
			focusable: 0,
			fontFamily: "font-family",
			fontSize: "font-size",
			fontSizeAdjust: "font-size-adjust",
			fontStretch: "font-stretch",
			fontStyle: "font-style",
			fontVariant: "font-variant",
			fontWeight: "font-weight",
			format: 0,
			from: 0,
			fx: 0,
			fy: 0,
			g1: 0,
			g2: 0,
			glyphName: "glyph-name",
			glyphOrientationHorizontal: "glyph-orientation-horizontal",
			glyphOrientationVertical: "glyph-orientation-vertical",
			glyphRef: "glyphRef",
			gradientTransform: "gradientTransform",
			gradientUnits: "gradientUnits",
			hanging: 0,
			horizAdvX: "horiz-adv-x",
			horizOriginX: "horiz-origin-x",
			ideographic: 0,
			imageRendering: "image-rendering",
			"in": 0,
			in2: 0,
			intercept: 0,
			k: 0,
			k1: 0,
			k2: 0,
			k3: 0,
			k4: 0,
			kernelMatrix: "kernelMatrix",
			kernelUnitLength: "kernelUnitLength",
			kerning: 0,
			keyPoints: "keyPoints",
			keySplines: "keySplines",
			keyTimes: "keyTimes",
			lengthAdjust: "lengthAdjust",
			letterSpacing: "letter-spacing",
			lightingColor: "lighting-color",
			limitingConeAngle: "limitingConeAngle",
			local: 0,
			markerEnd: "marker-end",
			markerMid: "marker-mid",
			markerStart: "marker-start",
			markerHeight: "markerHeight",
			markerUnits: "markerUnits",
			markerWidth: "markerWidth",
			mask: 0,
			maskContentUnits: "maskContentUnits",
			maskUnits: "maskUnits",
			mathematical: 0,
			mode: 0,
			numOctaves: "numOctaves",
			offset: 0,
			opacity: 0,
			operator: 0,
			order: 0,
			orient: 0,
			orientation: 0,
			origin: 0,
			overflow: 0,
			overlinePosition: "overline-position",
			overlineThickness: "overline-thickness",
			paintOrder: "paint-order",
			panose1: "panose-1",
			pathLength: "pathLength",
			patternContentUnits: "patternContentUnits",
			patternTransform: "patternTransform",
			patternUnits: "patternUnits",
			pointerEvents: "pointer-events",
			points: 0,
			pointsAtX: "pointsAtX",
			pointsAtY: "pointsAtY",
			pointsAtZ: "pointsAtZ",
			preserveAlpha: "preserveAlpha",
			preserveAspectRatio: "preserveAspectRatio",
			primitiveUnits: "primitiveUnits",
			r: 0,
			radius: 0,
			refX: "refX",
			refY: "refY",
			renderingIntent: "rendering-intent",
			repeatCount: "repeatCount",
			repeatDur: "repeatDur",
			requiredExtensions: "requiredExtensions",
			requiredFeatures: "requiredFeatures",
			restart: 0,
			result: 0,
			rotate: 0,
			rx: 0,
			ry: 0,
			scale: 0,
			seed: 0,
			shapeRendering: "shape-rendering",
			slope: 0,
			spacing: 0,
			specularConstant: "specularConstant",
			specularExponent: "specularExponent",
			speed: 0,
			spreadMethod: "spreadMethod",
			startOffset: "startOffset",
			stdDeviation: "stdDeviation",
			stemh: 0,
			stemv: 0,
			stitchTiles: "stitchTiles",
			stopColor: "stop-color",
			stopOpacity: "stop-opacity",
			strikethroughPosition: "strikethrough-position",
			strikethroughThickness: "strikethrough-thickness",
			string: 0,
			stroke: 0,
			strokeDasharray: "stroke-dasharray",
			strokeDashoffset: "stroke-dashoffset",
			strokeLinecap: "stroke-linecap",
			strokeLinejoin: "stroke-linejoin",
			strokeMiterlimit: "stroke-miterlimit",
			strokeOpacity: "stroke-opacity",
			strokeWidth: "stroke-width",
			surfaceScale: "surfaceScale",
			systemLanguage: "systemLanguage",
			tableValues: "tableValues",
			targetX: "targetX",
			targetY: "targetY",
			textAnchor: "text-anchor",
			textDecoration: "text-decoration",
			textRendering: "text-rendering",
			textLength: "textLength",
			to: 0,
			transform: 0,
			u1: 0,
			u2: 0,
			underlinePosition: "underline-position",
			underlineThickness: "underline-thickness",
			unicode: 0,
			unicodeBidi: "unicode-bidi",
			unicodeRange: "unicode-range",
			unitsPerEm: "units-per-em",
			vAlphabetic: "v-alphabetic",
			vHanging: "v-hanging",
			vIdeographic: "v-ideographic",
			vMathematical: "v-mathematical",
			values: 0,
			vectorEffect: "vector-effect",
			version: 0,
			vertAdvY: "vert-adv-y",
			vertOriginX: "vert-origin-x",
			vertOriginY: "vert-origin-y",
			viewBox: "viewBox",
			viewTarget: "viewTarget",
			visibility: 0,
			widths: 0,
			wordSpacing: "word-spacing",
			writingMode: "writing-mode",
			x: 0,
			xHeight: "x-height",
			x1: 0,
			x2: 0,
			xChannelSelector: "xChannelSelector",
			xlinkActuate: "xlink:actuate",
			xlinkArcrole: "xlink:arcrole",
			xlinkHref: "xlink:href",
			xlinkRole: "xlink:role",
			xlinkShow: "xlink:show",
			xlinkTitle: "xlink:title",
			xlinkType: "xlink:type",
			xmlBase: "xml:base",
			xmlId: "xml:id",
			xmlns: 0,
			xmlnsXlink: "xmlns:xlink",
			xmlLang: "xml:lang",
			xmlSpace: "xml:space",
			y: 0,
			y1: 0,
			y2: 0,
			yChannelSelector: "yChannelSelector",
			z: 0,
			zoomAndPan: "zoomAndPan"
		},
		I = {
			Properties: {},
			DOMAttributeNamespaces: {
				"ev:event": N.ev,
				"xlink:actuate": N.xlink,
				"xlink:arcrole": N.xlink,
				"xlink:href": N.xlink,
				"xlink:role": N.xlink,
				"xlink:show": N.xlink,
				"xlink:title": N.xlink,
				"xlink:type": N.xlink,
				"xml:base": N.xml,
				"xml:id": N.xml,
				"xml:lang": N.xml,
				"xml:space": N.xml
			},
			DOMAttributeNames: {}
		};
	Object.keys(M).forEach(function(e) {
		I.Properties[e] = 0, M[e] && (I.DOMAttributeNames[e] = M[e])
	});
	var L = {
			children: 1,
			key: 1,
			ref: 1,
			owner: 1
		},
		D = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
		U = "http://www.w3.org/2000/svg",
		q = [],
		F = [],
		H = function(e, t) {
			this._dirty = !0, this._disable = !0, this._pendingStates = [], this.isReactComponent = y, this.state || (this.state = {}), this.props = e || {}, this.context = t || y, this.refs = {}
		};
	H.prototype.setState = function(e, t) {
		e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), this._disable || enqueueRender(this)
	}, H.prototype.getState = function() {
		var e = this,
			t = this,
			n = t._pendingStates,
			r = t.state,
			o = t.props;
		if(!n.length) return r;
		var i = clone(r),
			a = n.concat();
		return this._pendingStates.length = 0, a.forEach(function(t) {
			isFunction(t) && (t = t.call(e, r, o)), extend(i, t)
		}), i
	}, H.prototype.forceUpdate = function(e) {
		isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), updateComponent(this, !0)
	}, H.prototype.render = function(e, t, n) {};
	var B = function(e) {
			function PureComponent() {
				e.apply(this, arguments), this.isPureComponent = !0
			}
			return e && (PureComponent.__proto__ = e), PureComponent.prototype = Object.create(e && e.prototype), PureComponent.prototype.constructor = PureComponent, PureComponent.prototype.shouldComponentUpdate = function(e, t) {
				return !shallowEqual(this.props, e) || !shallowEqual(this.state, t)
			}, PureComponent
		}(H),
		V = function(e, t) {
			this.vtype = 4, this.type = e, this.name = e.name || e.toString().match(/^function\s*([^\s(]+)/)[1], e.displayName = this.name, this._owner = t.owner, delete t.owner, (this.ref = t.ref) && delete t.ref, this.props = t, this.key = t.key, this.dom = null
		};
	V.prototype.init = function(e, t) {
		return mountComponent(this, e, t)
	}, V.prototype.update = function(e, t, n, r) {
		return reRenderComponent(e, this)
	}, V.prototype.destroy = function() {
		unmountComponent(this)
	};
	var W = function(e, t) {
		this.vtype = 8, this.type = e, this._owner = t.owner, delete t.owner, this.props = t, this.key = t.key
	};
	W.prototype.init = function(e) {
		return mountStatelessComponent(this, e)
	}, W.prototype.update = function(e, t, n, r) {
		var o = t.props,
			i = t.context,
			a = o.onShouldComponentUpdate;
		return isFunction(a) && !a(e.props, o, i) ? (t._rendered = e._rendered, r) : reRenderStatelessComponent(e, this, n, r)
	}, W.prototype.destroy = function() {
		unmountStatelessComponent(this)
	};
	var z = {
			map: function(e, t, n) {
				return isNullOrUndef(e) ? e : (e = z.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
			},
			forEach: function(e, t, n) {
				if(!isNullOrUndef(e)) {
					e = z.toArray(e), n && n !== e && (t = t.bind(n));
					for(var r = 0, o = e.length; r < o; r++) {
						t(isInvalid(e[r]) ? null : e[r], r, e)
					}
				}
			},
			count: function(e) {
				return e = z.toArray(e), e.length
			},
			only: function(e) {
				if(e = z.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
				return e[0]
			},
			toArray: function(e) {
				if(isNullOrUndef(e)) return [];
				if(s(e)) {
					var t = [];
					return flatten(e, t), t
				}
				return v.concat(e)
			}
		},
		K = function(e) {
			function WrapperComponent() {
				e.apply(this, arguments)
			}
			return e && (WrapperComponent.__proto__ = e), WrapperComponent.prototype = Object.create(e && e.prototype), WrapperComponent.prototype.constructor = WrapperComponent, WrapperComponent.prototype.getChildContext = function() {
				return this.props.context
			}, WrapperComponent.prototype.render = function() {
				return this.props.children
			}, WrapperComponent
		}(H),
		$ = d,
		J = {
			Children: z,
			Component: H,
			PureComponent: B,
			createElement: createElement$2,
			cloneElement: cloneElement,
			render: render,
			nextTick: d,
			options: R,
			findDOMNode: findDOMNode,
			isValidElement: isValidElement$1,
			unmountComponentAtNode: unmountComponentAtNode,
			createPortal: createPortal,
			unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
			hydrate: hydrate,
			createFactory: createFactory,
			unstable_batchedUpdates: $
		};
	t.Children = z, t.Component = H, t.PureComponent = B, t.createElement = createElement$2, t.cloneElement = cloneElement, t.render = render, t.nextTick = d, t.options = R, t.findDOMNode = findDOMNode, t.isValidElement = isValidElement$1, t.unmountComponentAtNode = unmountComponentAtNode, t.createPortal = createPortal, t.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer, t.hydrate = hydrate, t.createFactory = createFactory, t.unstable_batchedUpdates = $, t["default"] = J
}, function(e, t, n) {
	(function(t, n) {
		! function(t, n) {
			e.exports = n()
		}(0, function() {
			"use strict";

			function objectOrFunction(e) {
				var t = typeof e;
				return null !== e && ("object" === t || "function" === t)
			}

			function isFunction(e) {
				return "function" == typeof e
			}

			function setScheduler(e) {
				a = e
			}

			function setAsap(e) {
				u = e
			}

			function useVertxTimer() {
				return void 0 !== i ? function() {
					i(flush)
				} : useSetTimeout()
			}

			function useSetTimeout() {
				var e = setTimeout;
				return function() {
					return e(flush, 1)
				}
			}

			function flush() {
				for(var e = 0; e < o; e += 2) {
					(0, p[e])(p[e + 1]), p[e] = undefined, p[e + 1] = undefined
				}
				o = 0
			}

			function then(e, t) {
				var n = this,
					r = new this.constructor(noop);
				r[m] === undefined && makePromise(r);
				var o = n._state;
				if(o) {
					var i = arguments[o - 1];
					u(function() {
						return invokeCallback(o, r, i, n._result)
					})
				} else subscribe(n, r, e, t);
				return r
			}

			function resolve$1(e) {
				var t = this;
				if(e && "object" == typeof e && e.constructor === t) return e;
				var n = new t(noop);
				return resolve(n, e), n
			}

			function noop() {}

			function selfFulfillment() {
				return new TypeError("You cannot resolve a promise with itself")
			}

			function cannotReturnOwn() {
				return new TypeError("A promises callback cannot return that same promise.")
			}

			function tryThen(e, t, n, r) {
				try {
					e.call(t, n, r)
				} catch(o) {
					return o
				}
			}

			function handleForeignThenable(e, t, n) {
				u(function(e) {
					var r = !1,
						o = tryThen(n, t, function(n) {
							r || (r = !0, t !== n ? resolve(e, n) : fulfill(e, n))
						}, function(t) {
							r || (r = !0, reject(e, t))
						}, "Settle: " + (e._label || " unknown promise"));
					!r && o && (r = !0, reject(e, o))
				}, e)
			}

			function handleOwnThenable(e, t) {
				t._state === v ? fulfill(e, t._result) : t._state === y ? reject(e, t._result) : subscribe(t, undefined, function(t) {
					return resolve(e, t)
				}, function(t) {
					return reject(e, t)
				})
			}

			function handleMaybeThenable(e, t, n) {
				t.constructor === e.constructor && n === then && t.constructor.resolve === resolve$1 ? handleOwnThenable(e, t) : n === undefined ? fulfill(e, t) : isFunction(n) ? handleForeignThenable(e, t, n) : fulfill(e, t)
			}

			function resolve(e, t) {
				if(e === t) reject(e, selfFulfillment());
				else if(objectOrFunction(t)) {
					var n = void 0;
					try {
						n = t.then
					} catch(r) {
						return void reject(e, r)
					}
					handleMaybeThenable(e, t, n)
				} else fulfill(e, t)
			}

			function publishRejection(e) {
				e._onerror && e._onerror(e._result), publish(e)
			}

			function fulfill(e, t) {
				e._state === g && (e._result = t, e._state = v, 0 !== e._subscribers.length && u(publish, e))
			}

			function reject(e, t) {
				e._state === g && (e._state = y, e._result = t, u(publishRejection, e))
			}

			function subscribe(e, t, n, r) {
				var o = e._subscribers,
					i = o.length;
				e._onerror = null, o[i] = t, o[i + v] = n, o[i + y] = r, 0 === i && e._state && u(publish, e)
			}

			function publish(e) {
				var t = e._subscribers,
					n = e._state;
				if(0 !== t.length) {
					for(var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ? invokeCallback(n, r, o, i) : o(i);
					e._subscribers.length = 0
				}
			}

			function invokeCallback(e, t, n, r) {
				var o = isFunction(n),
					i = void 0,
					a = void 0,
					u = !0;
				if(o) {
					try {
						i = n(r)
					} catch(l) {
						u = !1, a = l
					}
					if(t === i) return void reject(t, cannotReturnOwn())
				} else i = r;
				t._state !== g || (o && u ? resolve(t, i) : !1 === u ? reject(t, a) : e === v ? fulfill(t, i) : e === y && reject(t, i))
			}

			function initializePromise(e, t) {
				try {
					t(function(t) {
						resolve(e, t)
					}, function(t) {
						reject(e, t)
					})
				} catch(n) {
					reject(e, n)
				}
			}

			function nextId() {
				return b++
			}

			function makePromise(e) {
				e[m] = b++, e._state = undefined, e._result = undefined, e._subscribers = []
			}

			function validationError() {
				return new Error("Array Methods must be provided an Array")
			}

			function all(e) {
				return new _(this, e).promise
			}

			function race(e) {
				var t = this;
				return new t(r(e) ? function(n, r) {
					for(var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
				} : function(e, t) {
					return t(new TypeError("You must pass an array to race."))
				})
			}

			function reject$1(e) {
				var t = this,
					n = new t(noop);
				return reject(n, e), n
			}

			function needsResolver() {
				throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
			}

			function needsNew() {
				throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
			}

			function polyfill() {
				var e = void 0;
				if(void 0 !== n) e = n;
				else if("undefined" != typeof self) e = self;
				else try {
					e = Function("return this")()
				} catch(o) {
					throw new Error("polyfill failed because global object is unavailable in this environment")
				}
				var t = e.Promise;
				if(t) {
					var r = null;
					try {
						r = Object.prototype.toString.call(t.resolve())
					} catch(o) {}
					if("[object Promise]" === r && !t.cast) return
				}
				e.Promise = w
			}
			var e = void 0;
			e = Array.isArray ? Array.isArray : function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};
			var r = e,
				o = 0,
				i = void 0,
				a = void 0,
				u = function(e, t) {
					p[o] = e, p[o + 1] = t, 2 === (o += 2) && (a ? a(flush) : h())
				},
				l = "undefined" != typeof window ? window : undefined,
				s = l || {},
				c = s.MutationObserver || s.WebKitMutationObserver,
				d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
				f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
				p = new Array(1e3),
				h = void 0;
			h = d ? function() {
				return function() {
					return t.nextTick(flush)
				}
			}() : c ? function() {
				var e = 0,
					t = new c(flush),
					n = document.createTextNode("");
				return t.observe(n, {
						characterData: !0
					}),
					function() {
						n.data = e = ++e % 2
					}
			}() : f ? function() {
				var e = new MessageChannel;
				return e.port1.onmessage = flush,
					function() {
						return e.port2.postMessage(0)
					}
			}() : l === undefined ? function() {
				try {
					var e = Function("return this")().require("vertx");
					return i = e.runOnLoop || e.runOnContext, useVertxTimer()
				} catch(t) {
					return useSetTimeout()
				}
			}() : useSetTimeout();
			var m = Math.random().toString(36).substring(2),
				g = void 0,
				v = 1,
				y = 2,
				b = 0,
				_ = function() {
					function Enumerator(e, t) {
						this._instanceConstructor = e, this.promise = new e(noop), this.promise[m] || makePromise(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? fulfill(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && fulfill(this.promise, this._result))) : reject(this.promise, validationError())
					}
					return Enumerator.prototype._enumerate = function(e) {
						for(var t = 0; this._state === g && t < e.length; t++) this._eachEntry(e[t], t)
					}, Enumerator.prototype._eachEntry = function(e, t) {
						var n = this._instanceConstructor,
							r = n.resolve;
						if(r === resolve$1) {
							var o = void 0,
								i = void 0,
								a = !1;
							try {
								o = e.then
							} catch(l) {
								a = !0, i = l
							}
							if(o === then && e._state !== g) this._settledAt(e._state, t, e._result);
							else if("function" != typeof o) this._remaining--, this._result[t] = e;
							else if(n === w) {
								var u = new n(noop);
								a ? reject(u, i) : handleMaybeThenable(u, e, o), this._willSettleAt(u, t)
							} else this._willSettleAt(new n(function(t) {
								return t(e)
							}), t)
						} else this._willSettleAt(r(e), t)
					}, Enumerator.prototype._settledAt = function(e, t, n) {
						var r = this.promise;
						r._state === g && (this._remaining--, e === y ? reject(r, n) : this._result[t] = n), 0 === this._remaining && fulfill(r, this._result)
					}, Enumerator.prototype._willSettleAt = function(e, t) {
						var n = this;
						subscribe(e, undefined, function(e) {
							return n._settledAt(v, t, e)
						}, function(e) {
							return n._settledAt(y, t, e)
						})
					}, Enumerator
				}(),
				w = function() {
					function Promise(e) {
						this[m] = nextId(), this._result = this._state = undefined, this._subscribers = [], noop !== e && ("function" != typeof e && needsResolver(), this instanceof Promise ? initializePromise(this, e) : needsNew())
					}
					return Promise.prototype["catch"] = function(e) {
						return this.then(null, e)
					}, Promise.prototype["finally"] = function(e) {
						var t = this,
							n = t.constructor;
						return isFunction(e) ? t.then(function(t) {
							return n.resolve(e()).then(function() {
								return t
							})
						}, function(t) {
							return n.resolve(e()).then(function() {
								throw t
							})
						}) : t.then(e, e)
					}, Promise
				}();
			return w.prototype.then = then, w.all = all, w.race = race, w.resolve = resolve$1, w.reject = reject$1, w._setScheduler = setScheduler, w._setAsap = setAsap, w._asap = u, w.polyfill = polyfill, w.Promise = w, w
		})
	}).call(t, n(11), n(1))
}, function(e, t) {
	function defaultSetTimout() {
		throw new Error("setTimeout has not been defined")
	}

	function defaultClearTimeout() {
		throw new Error("clearTimeout has not been defined")
	}

	function runTimeout(e) {
		if(n === setTimeout) return setTimeout(e, 0);
		if((n === defaultSetTimout || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
		try {
			return n(e, 0)
		} catch(t) {
			try {
				return n.call(null, e, 0)
			} catch(t) {
				return n.call(this, e, 0)
			}
		}
	}

	function runClearTimeout(e) {
		if(r === clearTimeout) return clearTimeout(e);
		if((r === defaultClearTimeout || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
		try {
			return r(e)
		} catch(t) {
			try {
				return r.call(null, e)
			} catch(t) {
				return r.call(this, e)
			}
		}
	}

	function cleanUpNextTick() {
		u && i && (u = !1, i.length ? a = i.concat(a) : l = -1, a.length && drainQueue())
	}

	function drainQueue() {
		if(!u) {
			var e = runTimeout(cleanUpNextTick);
			u = !0;
			for(var t = a.length; t;) {
				for(i = a, a = []; ++l < t;) i && i[l].run();
				l = -1, t = a.length
			}
			i = null, u = !1, runClearTimeout(e)
		}
	}

	function Item(e, t) {
		this.fun = e, this.array = t
	}

	function noop() {}
	var n, r, o = e.exports = {};
	! function() {
		try {
			n = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
		} catch(e) {
			n = defaultSetTimout
		}
		try {
			r = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
		} catch(e) {
			r = defaultClearTimeout
		}
	}();
	var i, a = [],
		u = !1,
		l = -1;
	o.nextTick = function(e) {
		var t = new Array(arguments.length - 1);
		if(arguments.length > 1)
			for(var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		a.push(new Item(e, t)), 1 !== a.length || u || runTimeout(drainQueue)
	}, Item.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = noop, o.addListener = noop, o.once = noop, o.off = noop, o.removeListener = noop, o.removeAllListeners = noop, o.emit = noop, o.prependListener = noop, o.prependOnceListener = noop, o.listeners = function(e) {
		return []
	}, o.binding = function(e) {
		throw new Error("process.binding is not supported")
	}, o.cwd = function() {
		return "/"
	}, o.chdir = function(e) {
		throw new Error("process.chdir is not supported")
	}, o.umask = function() {
		return 0
	}
}, function(e, t, n) {
	"use strict";

	function assign(e, t) {
		if(e === undefined || null === e) throw new TypeError("Cannot convert first argument to object");
		for(var n = Object(e), r = 1; r < arguments.length; r++) {
			var o = arguments[r];
			if(o !== undefined && null !== o)
				for(var i = Object.keys(Object(o)), a = 0, u = i.length; a < u; a++) {
					var l = i[a],
						s = Object.getOwnPropertyDescriptor(o, l);
					s !== undefined && s.enumerable && (n[l] = o[l])
				}
		}
		return n
	}

	function polyfill() {
		Object.assign || Object.defineProperty(Object, "assign", {
			enumerable: !1,
			configurable: !0,
			writable: !0,
			value: assign
		})
	}
	e.exports = {
		assign: assign,
		polyfill: polyfill
	}
}, function(e, t, n) {
	(function(t) {
		! function(t, n) {
			e.exports = n()
		}(0, function() {
			"use strict";

			function toObject(e) {
				if(null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
				return Object(e)
			}

			function serializeParams(e) {
				return e ? Object.keys(e).map(function(t) {
					return t + "=" + i(e[t])
				}).join("&") : ""
			}

			function isFunction(e) {
				return "function" == typeof e
			}

			function getUrlQueryParamByName(e, t) {
				e || (e = window.location.href), t = t.replace(/[[]]/g, "\\$&");
				var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
					r = n.exec(e);
				return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
			}

			function updateQueryStringParamByName(e, t, n) {
				var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
					o = -1 !== e.indexOf("?") ? "&" : "?";
				return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + o + t + "=" + n
			}

			function jsonp$1(e, t, n) {
				if(isFunction(e) ? (n = e, t = {}) : e && "object" === (void 0 === e ? "undefined" : s(e)) && (n = t, t = e || {}, e = t.url), isFunction(t) && (n = t, t = {}), t || (t = {}), t = o({}, v, t), e = e || t.url, n = n || f, e && "string" == typeof e) {
					var r = generateJsonpUrlWithParams(e, t.params),
						i = getDataFromStore({
							useStore: t.useStore,
							storeKey: r,
							storeCheck: t.storeCheck,
							storeCheckKey: t.storeCheckKey,
							storeSign: t.storeSign,
							dataCheck: t.dataCheck
						});
					if(i) {
						if(n(null, i), !jsonp$1.promiseClose && d) return new Promise(function(e) {
							return e(i)
						})
					} else {
						if(t.originalUrl = r, !jsonp$1.promiseClose && d) return new Promise(function(e, o) {
							fetchData(r, t, function(t, r) {
								if(t) return n(t), o(t);
								n(null, r), e(r)
							})
						});
						fetchData(r, t, n)
					}
				} else if(n(new Error("Param url is needed!")), !jsonp$1.promiseClose && d) return new Promise(function(e, t) {
					return t(new Error("Param url is needed!"))
				})
			}

			function generateJsonpUrlWithParams(e, t) {
				return t = "string" == typeof t ? t : serializeParams(t), e += (~e.indexOf("?") ? "&" : "?") + t, e = e.replace("?&", "?")
			}

			function fetchData(e, t, n) {
				function cleanup(e) {
					s.parentNode && s.parentNode.removeChild(s), c[e] = f, clearTimeout(c["timer_" + e])
				}
				var r = t.originalUrl,
					o = t.charset,
					i = getUrlQueryParamByName(e, t.jsonp),
					a = "?" !== i && i || t.name || "__jsonp" + y++,
					u = arguments[3] || null;
				i ? "?" === i && (e = updateQueryStringParamByName(e, t.jsonp, p(a))) : e += ("&" === e.split("").pop() ? "" : "&") + t.jsonp + "=" + p(a), t.cache || (e += ("&" === e.split("").pop() ? "" : "&") + "_=" + (new Date).getTime()), clearTimeout(c["timer_" + a]);
				var l = c[a];
				c[a] = function(e) {
					if(l && l(e), cleanup(a), u && (e.__$$backupCall = u), t.dataCheck) {
						if(!1 !== t.dataCheck(e)) return setDataToStore({
							useStore: t.useStore,
							storeKey: r,
							data: e
						}), n(null, e);
						!1 === fallback(r, t, n) && n(new Error("Data check error, and no fallback"))
					} else setDataToStore({
						useStore: t.useStore,
						storeKey: r,
						data: e
					}), n(null, e)
				};
				var s = appendScriptTagToHead({
						url: e,
						charset: o
					}),
					d = null != t.timeout ? t.timeout : g;
				c["timer_" + a] = setTimeout(function() {
					return cleanup(a), "number" == typeof t.retryTimes && t.retryTimes > 0 ? (t.retryTimes--, fetchData(r, t, n)) : !1 === fallback(r, t, n) ? n(new Error("Timeout and no data return")) : void 0
				}, d)
			}

			function storeCheckFn(e, t, n) {
				return !!(e && t && n) && (e[t] && e[t] === n)
			}

			function getDataFromStore(e) {
				var t = e.useStore,
					n = e.storeKey,
					r = e.storeCheck,
					o = e.storeCheckKey,
					i = e.storeSign,
					a = e.dataCheck;
				if(t = !!t && l.enabled) {
					var u = l.get(n);
					if((r = r || storeCheckFn)(u, o, i) && (!a || u && a && !1 !== a(u))) return u
				}
				return null
			}

			function getDataFromStoreWithoutCheck(e) {
				var t = e.useStore,
					n = e.storeKey,
					r = e.dataCheck;
				if(t = !!t && l.enabled) {
					var o = l.get(n);
					if(!r || o && r && !1 !== r(o)) return o
				}
				return null
			}

			function setDataToStore(e) {
				var t = e.useStore,
					n = e.storeKey,
					r = e.data;
				(t = !!t && l.enabled) && l.set(n, r)
			}

			function fallback(e, t, n) {
				var r = t.backup,
					o = void 0;
				if(r) {
					if("string" == typeof r) return delete t.backup, o = generateJsonpUrlWithParams(r, t.params), fetchData(o, t, n, {
						backup: r
					});
					if(Array.isArray(r) && r.length) {
						var i = r.shift();
						return o = generateJsonpUrlWithParams(i, t.params), fetchData(o, t, n, {
							backup: i
						})
					}
				}
				var a = getDataFromStoreWithoutCheck({
					useStore: t.useStore,
					storeKey: e,
					dataCheck: t.dataCheck
				});
				return !!a && (n(null, a), !0)
			}

			function appendScriptTagToHead(e) {
				var t = e.url,
					n = e.charset;
				if(h) {
					var r = h.createElement("script");
					return r.type = "text/javascript", n && (r.charset = n), r.src = t, m.appendChild(r), r
				}
			}
			var e = Object.getOwnPropertySymbols,
				n = Object.prototype.hasOwnProperty,
				r = Object.prototype.propertyIsEnumerable,
				o = function() {
					try {
						if(!Object.assign) return !1;
						var e = new String("abc");
						if(e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
						for(var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
						if("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
								return t[e]
							}).join("")) return !1;
						var r = {};
						return "abcdefghijklmnopqrst".split("").forEach(function(e) {
							r[e] = e
						}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
					} catch(o) {
						return !1
					}
				}() ? Object.assign : function(t, o) {
					for(var i, a, u = toObject(t), l = 1; l < arguments.length; l++) {
						i = Object(arguments[l]);
						for(var s in i) n.call(i, s) && (u[s] = i[s]);
						if(e) {
							a = e(i);
							for(var c = 0; c < a.length; c++) r.call(i, a[c]) && (u[a[c]] = i[a[c]])
						}
					}
					return u
				},
				i = encodeURIComponent,
				a = "undefined" != typeof window ? window : t,
				u = a["localStorage"],
				l = {
					disabled: !1,
					set: function(e, t) {
						return void 0 === t ? l.remove(e) : (u.setItem(e, l.serialize(t)), t)
					},
					get: function(e, t) {
						var n = l.deserialize(u.getItem(e));
						return void 0 === n ? t : n
					},
					remove: function(e) {
						u.removeItem(e)
					},
					clear: function() {
						u.clear()
					},
					has: function(e) {
						return void 0 !== l.get(e)
					},
					forEach: function(e) {
						for(var t = 0; t < u.length; t++) {
							var n = u.key(t);
							e(n, l.get(n))
						}
					},
					getAll: function() {
						var e = {};
						return l.forEach(function(t, n) {
							e[t] = n
						}), e
					},
					serialize: function(e) {
						return JSON.stringify(e)
					},
					deserialize: function(e) {
						if("string" == typeof e) try {
							return JSON.parse(e)
						} catch(t) {
							return e || void 0
						}
					}
				};
			try {
				l.set("__store__", "__store__"), "__store__" !== l.get("__store__") && (l.disabled = !0), l.remove("__store__")
			} catch(b) {
				l.disabled = !0
			}
			l.enabled = !l.disabled;
			var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				c = "undefined" != typeof window ? window : t,
				d = function() {
					return "Promise" in c && s(isFunction(Promise))
				}(),
				f = function() {},
				p = encodeURIComponent,
				h = c.document,
				m = h ? h.head || h.getElementsByTagName("head")[0] : null,
				g = 2e3,
				v = {
					timeout: g,
					retryTimes: 2,
					backup: null,
					params: {},
					jsonp: "callback",
					name: null,
					cache: !1,
					useStore: !1,
					storeCheck: null,
					storeSign: null,
					storeCheckKey: null,
					dataCheck: null,
					charset: "UTF-8"
				},
				y = (new Date).getTime();
			return jsonp$1
		})
	}).call(t, n(1))
}, function(e, t, n) {
	e.exports = n(25)["default"], e.exports["default"] = e.exports
}, , function(e, t, n) {
	"use strict";

	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function createStore(e, t, n) {
		function ensureCanMutateNextListeners() {
			c === s && (c = s.slice())
		}

		function getState() {
			return l
		}

		function subscribe(e) {
			if("function" != typeof e) throw new Error("Expected listener to be a function.");
			var t = !0;
			return ensureCanMutateNextListeners(), c.push(e),
				function() {
					if(t) {
						t = !1, ensureCanMutateNextListeners();
						var n = c.indexOf(e);
						c.splice(n, 1)
					}
				}
		}

		function dispatch(e) {
			if(!(0, o["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
			if("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
			if(d) throw new Error("Reducers may not dispatch actions.");
			try {
				d = !0, l = i(l, e)
			} finally {
				d = !1
			}
			for(var t = s = c, n = 0; n < t.length; n++) {
				(0, t[n])()
			}
			return e
		}

		function replaceReducer(e) {
			if("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
			i = e, dispatch({
				type: u.INIT
			})
		}

		function observable() {
			var e, t = subscribe;
			return e = {
				subscribe: function(e) {
					function observeState() {
						e.next && e.next(getState())
					}
					if("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
					return observeState(), {
						unsubscribe: t(observeState)
					}
				}
			}, e[a["default"]] = function() {
				return this
			}, e
		}
		var r;
		if("function" == typeof t && void 0 === n && (n = t, t = undefined), void 0 !== n) {
			if("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
			return n(createStore)(e, t)
		}
		if("function" != typeof e) throw new Error("Expected the reducer to be a function.");
		var i = e,
			l = t,
			s = [],
			c = s,
			d = !1;
		return dispatch({
			type: u.INIT
		}), r = {
			dispatch: dispatch,
			subscribe: subscribe,
			getState: getState,
			replaceReducer: replaceReducer
		}, r[a["default"]] = observable, r
	}
	t.__esModule = !0, t.ActionTypes = undefined, t["default"] = createStore;
	var r = n(17),
		o = _interopRequireDefault(r),
		i = n(34),
		a = _interopRequireDefault(i),
		u = t.ActionTypes = {
			INIT: "@@redux/INIT"
		}
}, function(e, t, n) {
	function isPlainObject(e) {
		if(!i(e) || r(e) != a) return !1;
		var t = o(e);
		if(null === t) return !0;
		var n = c.call(t, "constructor") && t.constructor;
		return "function" == typeof n && n instanceof n && s.call(n) == d
	}
	var r = n(26),
		o = n(31),
		i = n(33),
		a = "[object Object]",
		u = Function.prototype,
		l = Object.prototype,
		s = u.toString,
		c = l.hasOwnProperty,
		d = s.call(Object);
	e.exports = isPlainObject
}, function(e, t, n) {
	var r = n(27),
		o = r.Symbol;
	e.exports = o
}, function(e, t, n) {
	"use strict";

	function warning(e) {
		"undefined" != typeof console && "function" == typeof console.error && console.error(e);
		try {
			throw new Error(e)
		} catch(t) {}
	}
	t.__esModule = !0, t["default"] = warning
}, function(e, t, n) {
	"use strict";

	function compose() {
		for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return 0 === t.length ? function(e) {
			return e
		} : 1 === t.length ? t[0] : t.reduce(function(e, t) {
			return function() {
				return e(t.apply(undefined, arguments))
			}
		})
	}
	t.__esModule = !0, t["default"] = compose
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function requestArticleList(e, t) {
		return {
			type: "REQUEST_ARTICLE_" + e + "_" + t,
			data: null
		}
	}

	function receiveArticleList(e, t, n) {
		return {
			type: "RECEIVE_ARTICLE_" + e + "_" + t,
			data: n
		}
	}

	function errorArticleList(e) {
		return {
			type: "ERROR_ARTICLE_" + e
		}
	}

	function requestArticleTabs() {
		return {
			type: "REQUEST_TABS_ARTICLE",
			data: null
		}
	}

	function receiveArticleTabs(e) {
		return {
			type: "RECEIVE_TABS_ARTICLE",
			data: e
		}
	}

	function changeCurTabId(e) {
		return {
			type: "CHANGE_TAB_ARTICLE",
			data: e
		}
	}

	function requestAnnouncments() {
		return {
			type: "REQUEST_ANNOUNCMENT",
			data: null
		}
	}

	function receiveAnnouncments(e) {
		return {
			type: "RECEIVE_ANNOUNCMENT",
			data: e
		}
	}

	function requestArticle(e) {
		return {
			type: "REQUEST_ARTICLE",
			data: e
		}
	}

	function receiveArticle(e) {
		return {
			type: "RECEIVE_ARTICLE",
			data: e
		}
	}

	function errorArticle() {
		return {
			type: "ERROR_ARTICLE",
			data: null
		}
	}

	function requestMoreHotList() {
		return {
			type: "REQUEST_MORE_HOT",
			data: null
		}
	}

	function receiveMoreHotList(e) {
		return {
			type: "RECEIVE_MORE_HOT",
			data: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.fetchHots = t.fetchArticleDetail = t.fetchAnnouncments = t.fetchArticleTabs = t.fetchArticleList = undefined, t.requestArticleList = requestArticleList, t.receiveArticleList = receiveArticleList, t.errorArticleList = errorArticleList, t.requestArticleTabs = requestArticleTabs, t.receiveArticleTabs = receiveArticleTabs, t.changeCurTabId = changeCurTabId, t.requestAnnouncments = requestAnnouncments, t.receiveAnnouncments = receiveAnnouncments, t.requestArticle = requestArticle, t.receiveArticle = receiveArticle, t.errorArticle = errorArticle, t.requestMoreHotList = requestMoreHotList, t.receiveMoreHotList = receiveMoreHotList;
	var r = n(13),
		o = _interopRequireDefault(r),
		i = n(47),
		a = _interopRequireDefault(i),
		u = n(2),
		l = _interopRequireDefault(u),
		s = n(6),
		c = _interopRequireDefault(s),
		d = t.fetchArticleList = function(e, t, n, r) {
			return function(i) {
				return i(requestArticleList(e, t)), (0, o["default"])(a["default"]["ARTICLE_LIST"], {
					params: {
						action: 1,
						page: t,
						type: n,
						innerLink: r,
						pin: l["default"].getPin(),
						uuid: l["default"].getUuid(),
						jda: l["default"].getJda()
					},
					name: "articlelist",
					headers: {
						"Accept": "text/javascript"
					}
				}).then(function(n) {
					if(0 === n["code"]) {
						var r = n && n.data || [],
							o = Array.isArray(r) ? r : [];
						i(receiveArticleList(e, t, o))
					} else i(errorArticleList(e))
				})["catch"](function() {
					i(errorArticleList(e))
				})
			}
		};
	t.fetchArticleTabs = function(e) {
		return function(t) {
			return t(requestArticleTabs()), (0, o["default"])(a["default"]["ARTICLE_TABS"], {
				name: "tabs",
				params: {
					pin: l["default"].getPin(),
					uuid: l["default"].getUuid(),
					jda: l["default"].getJda()
				},
				headers: {
					"Accept": "text/javascript"
				},
				backup: "//storage.jd.com/b6cccd6d987f91d4/40b3eeacbf.js"
			}).then(function(n) {
				if(0 === n["code"]) {
					var r = n && n.data || [],
						o = r,
						i = r[0].id;
					t(receiveArticleTabs(o)), t(d(i, 1, 2, e))
				} else t(receiveArticleTabs([]));
				n.data.__$$backupCall && c["default"].processBackup(1)
			})["catch"](function() {
				t(receiveArticleTabs([])), c["default"].processBackup(1), c["default"].processHidedFloor(1)
			})
		}
	}, t.fetchAnnouncments = function() {
		return function(e) {
			return e(requestAnnouncments()), (0, o["default"])(a["default"]["ANNOUNCMENT_LIST"], {
				params: {
					areaId: 1,
					num: 5,
					format: "jsonp"
				},
				name: "annolist",
				headers: {
					"Accept": "text/javascript"
				}
			}).then(function(t) {
				if(0 === t["code"]) {
					var n = t && t.data || [];
					e(receiveAnnouncments(n))
				} else e(receiveAnnouncments([]))
			})["catch"](function() {
				e(receiveAnnouncments(["error"]))
			})
		}
	}, t.fetchArticleDetail = function(e) {
		return function(t) {
			return t(requestArticle()), (0, o["default"])(a["default"]["ARTICLE_DETAIL"], {
				params: {
					id: e,
					pin: l["default"].getPin(),
					uuid: l["default"].getUuid(),
					jda: l["default"].getJda()
				},
				name: "detail",
				headers: {
					"Accept": "text/javascript"
				}
			}).then(function(e) {
				if(0 === e["code"]) {
					var n = e && e.data || [],
						r = n;
					t(receiveArticle(r)), t(receiveMoreHotList(r.similarArticle))
				} else t(errorArticle())
			})["catch"](function() {
				t(errorArticle())
			})
		}
	}, t.fetchHots = function(e, t) {
		return function(e) {
			return e(requestMoreHotList()), (0, o["default"])(a["default"]["MORE_HOTS"], {
				name: "morelist",
				headers: {
					"Accept": "text/javascript"
				}
			}).then(function(t) {
				if(200 === t["status"]) {
					var n = t && t.data || [];
					e(receiveMoreHotList(n))
				} else e(receiveMoreHotList({}))
			})["catch"](function() {
				e(receiveMoreHotList({}))
			})
		}
	}
}, , , , function(e, t, n) {
	"use strict";
	(function(e) {
		function proptype() {}

		function createListenerCollection() {
			var e = [],
				t = [];
			return {
				clear: function() {
					t = k, e = k
				},
				notify: function() {
					for(var n = e = t, r = 0; r < n.length; r++) n[r]()
				},
				get: function() {
					return t
				},
				subscribe: function(n) {
					var r = !0;
					return t === e && (t = e.slice()), t.push(n),
						function() {
							r && e !== k && (r = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1))
						}
				}
			}
		}

		function noop() {}

		function makeSelectorStateful(e, t) {
			var n = {
				run: function(r) {
					try {
						var o = e(t.getState(), r);
						(o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null)
					} catch(i) {
						n.shouldComponentUpdate = !0, n.error = i
					}
				}
			};
			return n
		}

		function connectAdvanced(e) {
			var t, n, o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
				i = o.getDisplayName,
				a = i === undefined ? function(e) {
					return "ConnectAdvanced(" + e + ")"
				} : i,
				s = o.methodName,
				m = s === undefined ? "connectAdvanced" : s,
				g = o.renderCountProp,
				v = g === undefined ? undefined : g,
				y = o.shouldHandleStateChanges,
				b = y === undefined || y,
				_ = o.storeKey,
				w = _ === undefined ? "store" : _,
				C = o.withRef,
				E = C !== undefined && C,
				k = p(o, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
				S = w + "Subscription",
				j = O++,
				A = (t = {}, t[w] = l, t[S] = u, t),
				R = (n = {}, n[S] = u, n);
			return function(t) {
				var n = t.displayName || t.name || "Component",
					o = a(n),
					i = d({}, k, {
						getDisplayName: a,
						methodName: m,
						renderCountProp: v,
						shouldHandleStateChanges: b,
						storeKey: w,
						withRef: E,
						displayName: o,
						wrappedComponentName: n,
						WrappedComponent: t
					}),
					u = function(n) {
						function Connect(e, t) {
							c(this, Connect);
							var r = h(this, n.call(this, e, t));
							return r.version = j, r.state = {}, r.renderCount = 0, r.store = e[w] || t[w], r.propsMode = Boolean(e[w]), r.setWrappedInstance = r.setWrappedInstance.bind(r), r.initSelector(), r.initSubscription(), r
						}
						return f(Connect, n), Connect.prototype.getChildContext = function() {
							var e, t = this.propsMode ? null : this.subscription;
							return e = {}, e[S] = t || this.context[S], e
						}, Connect.prototype.componentDidMount = function() {
							b && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
						}, Connect.prototype.componentWillReceiveProps = function(e) {
							this.selector.run(e)
						}, Connect.prototype.shouldComponentUpdate = function() {
							return this.selector.shouldComponentUpdate
						}, Connect.prototype.componentWillUnmount = function() {
							this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = noop, this.store = null, this.selector.run = noop, this.selector.shouldComponentUpdate = !1
						}, Connect.prototype.getWrappedInstance = function() {
							return this.wrappedInstance
						}, Connect.prototype.setWrappedInstance = function(e) {
							this.wrappedInstance = e
						}, Connect.prototype.initSelector = function() {
							var t = e(this.store.dispatch, i);
							this.selector = makeSelectorStateful(t, this.store), this.selector.run(this.props)
						}, Connect.prototype.initSubscription = function() {
							if(b) {
								var e = (this.propsMode ? this.props : this.context)[S];
								this.subscription = new x(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
							}
						}, Connect.prototype.onStateChange = function() {
							this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(P)) : this.notifyNestedSubs()
						}, Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
							this.componentDidUpdate = undefined, this.notifyNestedSubs()
						}, Connect.prototype.isSubscribed = function() {
							return Boolean(this.subscription) && this.subscription.isSubscribed()
						}, Connect.prototype.addExtraProps = function(e) {
							if(!(E || v || this.propsMode && this.subscription)) return e;
							var t = d({}, e);
							return E && (t.ref = this.setWrappedInstance), v && (t[v] = this.renderCount++), this.propsMode && this.subscription && (t[S] = this.subscription), t
						}, Connect.prototype.render = function() {
							var e = this.selector;
							if(e.shouldComponentUpdate = !1, e.error) throw e.error;
							return r.createElement(t, this.addExtraProps(e.props))
						}, Connect
					}(r.Component);
				return u.WrappedComponent = t, u.displayName = o, u.childContextTypes = R, u.contextTypes = A, u.propTypes = A, T(u, t)
			}
		}

		function is(e, t) {
			return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t
		}

		function shallowEqual(e, t) {
			if(is(e, t)) return !0;
			if("object" !== (void 0 === e ? "undefined" : s(e)) || null === e || "object" !== (void 0 === t ? "undefined" : s(t)) || null === t) return !1;
			var n = Object.keys(e),
				r = Object.keys(t);
			if(n.length !== r.length) return !1;
			for(var o = 0; o < n.length; o++)
				if(!j.call(t, n[o]) || !is(e[n[o]], t[n[o]])) return !1;
			return !0
		}

		function wrapMapToPropsConstant(e) {
			return function(t, n) {
				function constantSelector() {
					return r
				}
				var r = e(t, n);
				return constantSelector.dependsOnOwnProps = !1, constantSelector
			}
		}

		function getDependsOnOwnProps(e) {
			return null !== e.dependsOnOwnProps && e.dependsOnOwnProps !== undefined ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
		}

		function wrapMapToPropsFunc(e, t) {
			return function(t, n) {
				var r = function(e, t) {
					return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
				};
				return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
					r.mapToProps = e, r.dependsOnOwnProps = getDependsOnOwnProps(e);
					var o = r(t, n);
					return "function" == typeof o && (r.mapToProps = o, r.dependsOnOwnProps = getDependsOnOwnProps(o), o = r(t, n)), o
				}, r
			}
		}

		function whenMapDispatchToPropsIsFunction(e) {
			return "function" == typeof e ? wrapMapToPropsFunc(e, "mapDispatchToProps") : undefined
		}

		function whenMapDispatchToPropsIsMissing(e) {
			return e ? undefined : wrapMapToPropsConstant(function(e) {
				return {
					dispatch: e
				}
			})
		}

		function whenMapDispatchToPropsIsObject(e) {
			return e && "object" === (void 0 === e ? "undefined" : s(e)) ? wrapMapToPropsConstant(function(t) {
				return o.bindActionCreators(e, t)
			}) : undefined
		}

		function whenMapStateToPropsIsFunction(e) {
			return "function" == typeof e ? wrapMapToPropsFunc(e, "mapStateToProps") : undefined
		}

		function whenMapStateToPropsIsMissing(e) {
			return e ? undefined : wrapMapToPropsConstant(function() {
				return {}
			})
		}

		function defaultMergeProps(e, t, n) {
			return d({}, n, e, t)
		}

		function wrapMergePropsFunc(e) {
			return function(t, n) {
				var r = (n.displayName, n.pure),
					o = n.areMergedPropsEqual,
					i = !1,
					a = void 0;
				return function(t, n, u) {
					var l = e(t, n, u);
					return i ? r && o(l, a) || (a = l) : (i = !0, a = l), a
				}
			}
		}

		function whenMergePropsIsFunction(e) {
			return "function" == typeof e ? wrapMergePropsFunc(e) : undefined
		}

		function whenMergePropsIsOmitted(e) {
			return e ? undefined : function() {
				return defaultMergeProps
			}
		}

		function impureFinalPropsSelectorFactory(e, t, n, r) {
			return function(o, i) {
				return n(e(o, i), t(r, i), i)
			}
		}

		function pureFinalPropsSelectorFactory(e, t, n, r, o) {
			function handleFirstCall(o, i) {
				return s = o, c = i, d = e(s, c), f = t(r, c), p = n(d, f, c), l = !0, p
			}

			function handleNewPropsAndNewState() {
				return d = e(s, c), t.dependsOnOwnProps && (f = t(r, c)), p = n(d, f, c)
			}

			function handleNewProps() {
				return e.dependsOnOwnProps && (d = e(s, c)), t.dependsOnOwnProps && (f = t(r, c)), p = n(d, f, c)
			}

			function handleNewState() {
				var t = e(s, c),
					r = !u(t, d);
				return d = t, r && (p = n(d, f, c)), p
			}

			function handleSubsequentCalls(e, t) {
				var n = !a(t, c),
					r = !i(e, s);
				return s = e, c = t, n && r ? handleNewPropsAndNewState() : n ? handleNewProps() : r ? handleNewState() : p
			}
			var i = o.areStatesEqual,
				a = o.areOwnPropsEqual,
				u = o.areStatePropsEqual,
				l = !1,
				s = void 0,
				c = void 0,
				d = void 0,
				f = void 0,
				p = void 0;
			return function(e, t) {
				return l ? handleSubsequentCalls(e, t) : handleFirstCall(e, t)
			}
		}

		function finalPropsSelectorFactory(e, t) {
			var n = t.initMapStateToProps,
				r = t.initMapDispatchToProps,
				o = t.initMergeProps,
				i = p(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
				a = n(e, i),
				u = r(e, i),
				l = o(e, i);
			return(i.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory)(a, u, l, e, i)
		}

		function match(e, t, n) {
			for(var r = t.length - 1; r >= 0; r--) {
				var o = t[r](e);
				if(o) return o
			}
			return function(t, r) {
				throw new Error("Invalid value of type " + (void 0 === e ? "undefined" : s(e)) + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
			}
		}

		function strictEqual(e, t) {
			return e === t
		}
		var r = n(0),
			o = n(5);
		proptype.isRequired = proptype;
		var i = function() {
				return proptype
			},
			a = {
				element: i,
				func: i,
				shape: i,
				instanceOf: i
			},
			u = a.shape({
				trySubscribe: a.func.isRequired,
				tryUnsubscribe: a.func.isRequired,
				notifyNestedSubs: a.func.isRequired,
				isSubscribed: a.func.isRequired
			}),
			l = a.shape({
				subscribe: a.func.isRequired,
				dispatch: a.func.isRequired,
				getState: a.func.isRequired
			}),
			s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			c = (function() {
				function AwaitValue(e) {
					this.value = e
				}

				function AsyncGenerator(e) {
					function send(e, r) {
						return new Promise(function(o, i) {
							var a = {
								key: e,
								arg: r,
								resolve: o,
								reject: i,
								next: null
							};
							n ? n = n.next = a : (t = n = a, resume(e, r))
						})
					}

					function resume(t, n) {
						try {
							var r = e[t](n),
								o = r.value;
							o instanceof AwaitValue ? Promise.resolve(o.value).then(function(e) {
								resume("next", e)
							}, function(e) {
								resume("throw", e)
							}) : settle(r.done ? "return" : "normal", r.value)
						} catch(i) {
							settle("throw", i)
						}
					}

					function settle(e, r) {
						switch(e) {
							case "return":
								t.resolve({
									value: r,
									done: !0
								});
								break;
							case "throw":
								t.reject(r);
								break;
							default:
								t.resolve({
									value: r,
									done: !1
								})
						}
						t = t.next, t ? resume(t.key, t.arg) : n = null
					}
					var t, n;
					this._invoke = send, "function" != typeof e["return"] && (this["return"] = undefined)
				}
				"function" == typeof Symbol && Symbol.asyncIterator && (AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
					return this
				}), AsyncGenerator.prototype.next = function(e) {
					return this._invoke("next", e)
				}, AsyncGenerator.prototype["throw"] = function(e) {
					return this._invoke("throw", e)
				}, AsyncGenerator.prototype["return"] = function(e) {
					return this._invoke("return", e)
				}
			}(), function(e, t) {
				if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}),
			d = Object.assign || function(e) {
				for(var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			},
			f = function(e, t) {
				if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			},
			p = function(e, t) {
				var n = {};
				for(var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			},
			h = function(e, t) {
				if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			},
			m = function() {
				var e, t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "store",
					n = arguments[1],
					o = n || t + "Subscription",
					i = function(e) {
						function Provider(n, r) {
							c(this, Provider);
							var o = h(this, e.call(this, n, r));
							return o[t] = n.store, o
						}
						return f(Provider, e), Provider.prototype.getChildContext = function() {
							var e;
							return e = {}, e[t] = this[t], e[o] = null, e
						}, Provider.prototype.render = function() {
							return r.Children.only(this.props.children)
						}, Provider
					}(r.Component);
				return i.propTypes = {
					store: l.isRequired,
					children: a.element.isRequired
				}, i.childContextTypes = (e = {}, e[t] = l.isRequired, e[o] = u, e), i
			}(),
			g = {
				childContextTypes: !0,
				contextTypes: !0,
				defaultProps: !0,
				displayName: !0,
				getDefaultProps: !0,
				mixins: !0,
				propTypes: !0,
				type: !0
			},
			v = {
				name: !0,
				length: !0,
				prototype: !0,
				caller: !0,
				callee: !0,
				arguments: !0,
				arity: !0
			},
			y = Object.defineProperty,
			b = Object.getOwnPropertyNames,
			_ = Object.getOwnPropertySymbols,
			w = Object.getOwnPropertyDescriptor,
			C = Object.getPrototypeOf,
			E = C && C(Object),
			T = function hoistNonReactStatics(e, t, n) {
				if("string" != typeof t) {
					if(E) {
						var r = C(t);
						r && r !== E && hoistNonReactStatics(e, r, n)
					}
					var o = b(t);
					_ && (o = o.concat(_(t)));
					for(var i = 0; i < o.length; ++i) {
						var a = o[i];
						if(!(g[a] || v[a] || n && n[a])) {
							var u = w(t, a);
							try {
								y(e, a, u)
							} catch(l) {}
						}
					}
					return e
				}
				return e
			},
			k = null,
			S = {
				notify: function() {}
			},
			x = function() {
				function Subscription(e, t, n) {
					c(this, Subscription), this.store = e, this.parentSub = t, this.onStateChange = n, this.unsubscribe = null, this.listeners = S
				}
				return Subscription.prototype.addNestedSub = function(e) {
					return this.trySubscribe(), this.listeners.subscribe(e)
				}, Subscription.prototype.notifyNestedSubs = function() {
					this.listeners.notify()
				}, Subscription.prototype.isSubscribed = function() {
					return Boolean(this.unsubscribe)
				}, Subscription.prototype.trySubscribe = function() {
					this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = createListenerCollection())
				}, Subscription.prototype.tryUnsubscribe = function() {
					this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = S)
				}, Subscription
			}(),
			O = 0,
			P = {},
			j = Object.prototype.hasOwnProperty,
			A = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e,
			R = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
			N = (A || R || Function("return this")(), Function.prototype),
			M = N.toString,
			I = (M.call(Object), [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]),
			L = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing],
			D = [whenMergePropsIsFunction, whenMergePropsIsOmitted],
			U = function() {
				var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
					t = e.connectHOC,
					n = t === undefined ? connectAdvanced : t,
					r = e.mapStateToPropsFactories,
					o = r === undefined ? L : r,
					i = e.mapDispatchToPropsFactories,
					a = i === undefined ? I : i,
					u = e.mergePropsFactories,
					l = u === undefined ? D : u,
					s = e.selectorFactory,
					c = s === undefined ? finalPropsSelectorFactory : s;
				return function(e, t, r) {
					var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
						u = i.pure,
						s = u === undefined || u,
						f = i.areStatesEqual,
						h = f === undefined ? strictEqual : f,
						m = i.areOwnPropsEqual,
						g = m === undefined ? shallowEqual : m,
						v = i.areStatePropsEqual,
						y = v === undefined ? shallowEqual : v,
						b = i.areMergedPropsEqual,
						_ = b === undefined ? shallowEqual : b,
						w = p(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
						C = match(e, o, "mapStateToProps"),
						E = match(t, a, "mapDispatchToProps"),
						T = match(r, l, "mergeProps");
					return n(c, d({
						methodName: "connect",
						getDisplayName: function(e) {
							return "Connect(" + e + ")"
						},
						shouldHandleStateChanges: Boolean(e),
						initMapStateToProps: C,
						initMapDispatchToProps: E,
						initMergeProps: T,
						pure: s,
						areStatesEqual: h,
						areOwnPropsEqual: g,
						areStatePropsEqual: y,
						areMergedPropsEqual: _
					}, w))
				}
			}(),
			q = {
				Provider: m,
				connect: U,
				connectAdvanced: connectAdvanced
			};
		t.Provider = m, t.connect = U, t.connectAdvanced = connectAdvanced, t["default"] = q
	}).call(t, n(1))
}, function(e, t, n) {
	function baseGetTag(e) {
		return null == e ? e === undefined ? u : a : l && l in Object(e) ? o(e) : i(e)
	}
	var r = n(18),
		o = n(29),
		i = n(30),
		a = "[object Null]",
		u = "[object Undefined]",
		l = r ? r.toStringTag : undefined;
	e.exports = baseGetTag
}, function(e, t, n) {
	var r = n(28),
		o = "object" == typeof self && self && self.Object === Object && self,
		i = r || o || Function("return this")();
	e.exports = i
}, function(e, t, n) {
	(function(t) {
		var n = "object" == typeof t && t && t.Object === Object && t;
		e.exports = n
	}).call(t, n(1))
}, function(e, t, n) {
	function getRawTag(e) {
		var t = i.call(e, u),
			n = e[u];
		try {
			e[u] = undefined;
			var r = !0
		} catch(l) {}
		var o = a.call(e);
		return r && (t ? e[u] = n : delete e[u]), o
	}
	var r = n(18),
		o = Object.prototype,
		i = o.hasOwnProperty,
		a = o.toString,
		u = r ? r.toStringTag : undefined;
	e.exports = getRawTag
}, function(e, t) {
	function objectToString(e) {
		return r.call(e)
	}
	var n = Object.prototype,
		r = n.toString;
	e.exports = objectToString
}, function(e, t, n) {
	var r = n(32),
		o = r(Object.getPrototypeOf, Object);
	e.exports = o
}, function(e, t) {
	function overArg(e, t) {
		return function(n) {
			return e(t(n))
		}
	}
	e.exports = overArg
}, function(e, t) {
	function isObjectLike(e) {
		return null != e && "object" == typeof e
	}
	e.exports = isObjectLike
}, function(e, t, n) {
	"use strict";
	(function(e, r) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o, i = n(36),
			a = function(e) {
				return e && e.__esModule ? e : {
					"default": e
				}
			}(i);
		o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
		var u = (0, a["default"])(o);
		t["default"] = u
	}).call(t, n(1), n(35)(e))
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, function(e, t, n) {
	"use strict";

	function symbolObservablePonyfill(e) {
		var t, n = e.Symbol;
		return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t["default"] = symbolObservablePonyfill
}, function(e, t, n) {
	"use strict";

	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function getUndefinedStateErrorMessage(e, t) {
		var n = t && t.type;
		return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
	}

	function assertReducerShape(e) {
		Object.keys(e).forEach(function(t) {
			var n = e[t];
			if(void 0 === n(undefined, {
					type: r.ActionTypes.INIT
				})) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
			var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
			if(void 0 === n(undefined, {
					type: o
				})) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
		})
	}

	function combineReducers(e) {
		for(var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
			var o = t[r];
			"function" == typeof e[o] && (n[o] = e[o])
		}
		var i = Object.keys(n),
			a = void 0;
		try {
			assertReducerShape(n)
		} catch(u) {
			a = u
		}
		return function() {
			var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				t = arguments[1];
			if(a) throw a;
			for(var r = !1, o = {}, u = 0; u < i.length; u++) {
				var l = i[u],
					s = n[l],
					c = e[l],
					d = s(c, t);
				if(void 0 === d) {
					var f = getUndefinedStateErrorMessage(l, t);
					throw new Error(f)
				}
				o[l] = d, r = r || d !== c
			}
			return r ? o : e
		}
	}
	t.__esModule = !0, t["default"] = combineReducers;
	var r = n(16),
		o = n(17),
		i = (_interopRequireDefault(o), n(19));
	_interopRequireDefault(i)
}, function(e, t, n) {
	"use strict";

	function bindActionCreator(e, t) {
		return function() {
			return t(e.apply(undefined, arguments))
		}
	}

	function bindActionCreators(e, t) {
		if("function" == typeof e) return bindActionCreator(e, t);
		if("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
		for(var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
			var i = n[o],
				a = e[i];
			"function" == typeof a && (r[i] = bindActionCreator(a, t))
		}
		return r
	}
	t.__esModule = !0, t["default"] = bindActionCreators
}, function(e, t, n) {
	"use strict";

	function applyMiddleware() {
		for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return function(e) {
			return function(n, o, a) {
				var u = e(n, o, a),
					l = u.dispatch,
					s = [],
					c = {
						getState: u.getState,
						dispatch: function(e) {
							return l(e)
						}
					};
				return s = t.map(function(e) {
					return e(c)
				}), l = i["default"].apply(undefined, s)(u.dispatch), r({}, u, {
					dispatch: l
				})
			}
		}
	}
	t.__esModule = !0;
	var r = Object.assign || function(e) {
		for(var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	};
	t["default"] = applyMiddleware;
	var o = n(20),
		i = function(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}(o)
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(5),
		o = n(41),
		i = _interopRequireDefault(o),
		a = n(42),
		u = _interopRequireDefault(a),
		l = [i["default"]],
		s = function(e) {
			return(0, r.createStore)(u["default"], e, r.applyMiddleware.apply(undefined, l))
		};
	t["default"] = s
}, function(e, t, n) {
	"use strict";

	function createThunkMiddleware(e) {
		return function(t) {
			var n = t.dispatch,
				r = t.getState;
			return function(t) {
				return function(o) {
					return "function" == typeof o ? o(n, r, e) : t(o)
				}
			}
		}
	}
	t.__esModule = !0;
	var r = createThunkMiddleware();
	r.withExtraArgument = createThunkMiddleware, t["default"] = r
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(5);
	n(3), n(4);
	var o = n(43),
		i = _interopRequireDefault(o),
		a = n(44),
		u = _interopRequireDefault(a),
		l = (0, r.combineReducers)({
			hotListReducer: i["default"],
			hotDetailReducer: u["default"]
		});
	t["default"] = l
}, function(e, t, n) {
	function _defineProperty(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function articleList() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : i,
			t = arguments[1],
			n = t.type.split("_"),
			o = r(n, 4),
			a = o[0],
			u = o[1],
			l = o[2],
			s = o[3],
			c = t.data;
		switch([a, u].join("_")) {
			case "REQUEST_ARTICLE":
				return Object.assign({}, e, _defineProperty({}, "list_" + l + "_data", Object.assign({}, e["list_" + l + "_data"], {
					isFetching: !0,
					isError: !1
				})));
			case "RECEIVE_ARTICLE":
				return Object.assign({}, e, _defineProperty({}, "list_" + l + "_data", {
					lastUpdated: Date.now(),
					isFetching: !1,
					lastIdx: s,
					dataList: e["list_" + l + "_data"]["dataList"] ? e["list_" + l + "_data"]["dataList"].concat(c) : c,
					isFinish: !c.length || s >= 15,
					isError: !1
				}));
			case "ERROR_ARTICLE":
				return Object.assign({}, e, _defineProperty({}, "list_" + l + "_data", {
					isError: !0
				}));
			default:
				return e
		}
	}

	function tabBar() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a,
			t = arguments[1],
			n = t.type,
			r = t.data;
		switch(n) {
			case "REQUEST_TABS_ARTICLE":
				return Object.assign({}, e, {
					isFetching: !0
				});
			case "RECEIVE_TABS_ARTICLE":
				return Object.assign({}, e, {
					lastUpdated: Date.now(),
					isFetching: !1,
					tabs: r,
					curTabId: r[0].id,
					isFinish: !r.length
				});
			case "CHANGE_TAB_ARTICLE":
				return Object.assign({}, e, {
					curTabId: r
				});
			default:
				return e
		}
	}

	function announcmentList() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : u,
			t = arguments[1],
			n = t.type,
			r = t.data;
		switch(n) {
			case "REQUEST_ANNOUNCMENT":
				return Object.assign({}, e, {
					isFetching: !0
				});
			case "RECEIVE_ANNOUNCMENT":
				return Object.assign({}, e, {
					lastUpdated: Date.now(),
					isFetching: !1,
					dataList: e["dataList"] ? e["dataList"].concat(r) : r,
					isFinish: !r.length || "error" === r[0]
				});
			default:
				return e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
		function sliceIterator(e, t) {
			var n = [],
				r = !0,
				o = !1,
				i = undefined;
			try {
				for(var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
			} catch(l) {
				o = !0, i = l
			} finally {
				try {
					!r && u["return"] && u["return"]()
				} finally {
					if(o) throw i
				}
			}
			return n
		}
		return function(e, t) {
			if(Array.isArray(e)) return e;
			if(Symbol.iterator in Object(e)) return sliceIterator(e, t);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}();
	n(3), n(4);
	var o = n(5),
		i = {
			list_1_data: {
				lastIdx: 0,
				lastUpdated: 0,
				dataList: [],
				isFetching: !1,
				isFinish: !1,
				isError: !1
			}
		},
		a = {
			curTabId: 1,
			tabs: [{
				name: "精选",
				id: 1
			}],
			isFetching: !1,
			isFinish: !1
		},
		u = {
			lastIdx: 0,
			lastUpdated: 0,
			dataList: [],
			isFetching: !1,
			isFinish: !1
		};
	t["default"] = (0, o.combineReducers)({
		articleList: articleList,
		tabBar: tabBar,
		announcmentList: announcmentList
	})
}, function(e, t, n) {
	function articleDetail() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o,
			t = arguments[1],
			n = t.type,
			r = t.data;
		switch(n) {
			case "REQUEST_ARTICLE":
				return Object.assign({}, e, {
					isFetching: !0
				});
			case "RECEIVE_ARTICLE":
				return Object.assign({}, e, {
					isFetching: !1,
					data: r
				});
			case "ERROR_ARTICLE":
				return Object.assign({}, e, {
					isError: !0
				});
			default:
				return e
		}
	}

	function moreHotList() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : i,
			t = arguments[1],
			n = t.type,
			r = t.data;
		switch(n) {
			case "REQUEST_MORE_HOT":
				return Object.assign({}, e, {
					isFetching: !0
				});
			case "RECEIVE_MORE_HOT":
				return Object.assign({}, e, {
					isFetching: !1,
					dataList: r
				});
			default:
				return e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(5);
	n(3), n(4);
	var o = {
			isFetching: !1,
			isError: !1,
			data: {}
		},
		i = {
			isFetching: !1,
			dataList: []
		};
	t["default"] = (0, r.combineReducers)({
		articleDetail: articleDetail,
		moreHotList: moreHotList
	})
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(7),
		u = _interopRequireDefault(a),
		l = n(46),
		s = _interopRequireDefault(l),
		c = function(e) {
			function LazyImg() {
				_classCallCheck(this, LazyImg);
				var e = _possibleConstructorReturn(this, (LazyImg.__proto__ || Object.getPrototypeOf(LazyImg)).apply(this, arguments));
				return e.state = {
					src: e.props.lazySrc,
					lazySrc: e.props.src,
					loaded: !1
				}, e.load = e.load.bind(e), e
			}
			return _inherits(LazyImg, e), r(LazyImg, [{
				key: "done",
				value: function() {
					function done() {
						var e = this.props.src;
						this.setState({
							src: e,
							loaded: !0
						})
					}
					return done
				}()
			}, {
				key: "load",
				value: function() {
					function load() {
						var e = this,
							t = this.props.src,
							n = new Image,
							r = !1;
						if(n.onload = function() {
								if(r) return n.onload = null, void e.done();
								e.done(), r = !0, n.onload = null
							}, n.src = t, n.complete) {
							if(r) return n.onload = null, void this.done();
							this.done(), r = !0, n.onload = null
						}
					}
					return load
				}()
			}, {
				key: "componentDidMount",
				value: function() {
					function componentDidMount() {
						this.load()
					}
					return componentDidMount
				}()
			}, {
				key: "getInitState",
				value: function() {
					function getInitState(e, t) {
						this.setState({
							src: e.lazySrc,
							lazySrc: e.src,
							loaded: !1
						}, t)
					}
					return getInitState
				}()
			}, {
				key: "componentWillReceiveProps",
				value: function() {
					function componentWillReceiveProps(e) {
						var t = this;
						e.src !== this.props.src && this.getInitState(e, function() {
							setTimeout(t.load.bind(t), 150)
						})
					}
					return componentWillReceiveProps
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						var e = this.state,
							t = e.src,
							n = e.lazySrc,
							r = e.loaded,
							o = this.props,
							a = o.className,
							l = o.alt,
							c = o.logClstag,
							d = o.logText,
							f = o.logUrl,
							p = o.logDesc,
							h = o.logMcinfo,
							m = o.logBiclk,
							g = o.logTheme;
						return i["default"].createElement("div", {
							className: (0, u["default"])(s["default"].lazyimg, r && s["default"].lazyimg_loaded, a)
						}, i["default"].createElement("img", {
							src: t,
							"data-lazy-src": n,
							className: s["default"].lazyimg_img,
							alt: l,
							clstag: c,
							"data-log-text": d,
							"data-log-url": f,
							"data-log-desc": p,
							"data-log-mcinfo": h,
							"data-log-biclk": m,
							"data-log-theme": g
						}))
					}
					return render
				}()
			}]), LazyImg
		}(i["default"].Component);
	c.defaultProps = {
		lazySrc: "//misc.360buyimg.com/lib/skin/e/i/error-jd.gif",
		alt: "加载图"
	}, t["default"] = c
}, function(e, t) {
	e.exports = {
		"lazyimg": "_3VbmUI3ZuVpoS7-YNYXcJo",
		"lazyimg_img": "_1ly13xh54Zg8BuvNqyKAZW",
		"lazyimg_loaded": "c7DNzkcG7rbA6gFkZPklM"
	}
}, function(e, t) {
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t["default"] = {
		ARTICLE_LIST: "//lapi.jd.com/news/list?source=pc-news-channel",
		ARTICLE_TABS: "//lapi.jd.com/news/tab?source=pc-news-channel",
		ANNOUNCMENT_LIST: "//papi-service.jd.com/ads/index/index",
		MORE_HOTS: "//api.mockon.jd.com/mock/bW9ja29uX2Jhc2U2NF9zYWx0NDgw",
		ARTICLE_DETAIL: "//lapi.jd.com/news/detail?source=pc-news-channel"
	}
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _defineProperty(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(7),
		u = _interopRequireDefault(a),
		l = n(49),
		s = _interopRequireDefault(l),
		c = n(2),
		d = _interopRequireDefault(c),
		f = function(e) {
			function BackToTop() {
				_classCallCheck(this, BackToTop);
				var e = _possibleConstructorReturn(this, (BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).apply(this, arguments));
				return e.state = {}, e.onClickHandle = e.onClickHandle.bind(e), e.onScrollHandle = e.onScrollHandle.bind(e), e
			}
			return _inherits(BackToTop, e), r(BackToTop, [{
				key: "componentDidMount",
				value: function() {
					function componentDidMount() {
						this.onResizeHandle(), this.listener = d["default"].debounce(this.onScrollHandle, 300).bind(this), this.resizeListener = d["default"].debounce(this.onResizeHandle, 300).bind(this), window.addEventListener("scroll", this.listener), window.addEventListener("resize", this.resizeListener), this.btnExpLogHandle()
					}
					return componentDidMount
				}()
			}, {
				key: "componentWillUnmount",
				value: function() {
					function componentWillUnmount() {
						window.removeEventListener("scroll", this.listener), window.removeEventListener("resize", this.resizeListener)
					}
					return componentWillUnmount
				}()
			}, {
				key: "btnExpLogHandle",
				value: function() {
					function btnExpLogHandle() {
						var e = this.props.logData;
						undefined;
						d["default"].exposeLog({}, {
							rept: "impr",
							poi: "index|top|null"
						})
					}
					return btnExpLogHandle
				}()
			}, {
				key: "onClickHandle",
				value: function() {
					function onClickHandle() {
						document.body.scrollTop = document.documentElement.scrollTop = 0
					}
					return onClickHandle
				}()
			}, {
				key: "onScrollHandle",
				value: function() {
					function onScrollHandle() {
						var e = d["default"].getScrollTop;
						e() > 211 ? $(this.goToTop).fadeIn(200) : e() <= 211 && $(this.goToTop).fadeOut(200)
					}
					return onScrollHandle
				}()
			}, {
				key: "onResizeHandle",
				value: function() {
					function onResizeHandle() {
						(0, d["default"].getWindowWidth)() < 1190 ? this.setState({
							st1190class: !0
						}) : this.setState({
							st1190class: !1
						})
					}
					return onResizeHandle
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						var e = this,
							t = this.props.className,
							n = this.state.st1190class;
						return i["default"].createElement("div", {
							className: (0, u["default"])(s["default"].backToTop, t, _defineProperty({}, s["default"].st1190, n)),
							onClick: this.onClickHandle.bind(this),
							ref: function() {
								function ref(t) {
									e.goToTop = t
								}
								return ref
							}()
						}, i["default"].createElement("a", {
							href: "javascript:;",
							className: s["default"].backToTop_top,
							clstag: "index|top_null",
							"data-log-text": null,
							"data-log-url": null,
							"data-log-desc": null,
							"data-log-mcinfo": null,
							"data-log-biclk": null,
							"data-log-theme": null
						}))
					}
					return render
				}()
			}]), BackToTop
		}(i["default"].PureComponent);
	t["default"] = f
}, function(e, t) {
	e.exports = {
		"backToTop": "_1JVId4uj51BaEhKpAlszvD",
		"st1190": "cs8VZgDn0tMfzLqrqXdWb",
		"backToTop_top": "us6soBq6xndYy2z4CsZz8"
	}
}, , , , , , , , , , , , , , function(e, t, n) {
	e.exports = n(64)
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(14),
		u = n(65),
		l = _interopRequireDefault(u),
		s = n(40),
		c = _interopRequireDefault(s),
		d = n(66),
		f = _interopRequireDefault(d),
		p = n(70),
		h = _interopRequireDefault(p),
		m = n(48),
		g = _interopRequireDefault(m),
		v = n(2),
		y = _interopRequireDefault(v);
	_interopRequireDefault(n(6))["default"].init(1464, 1465, 1466);
	var b = (0, c["default"])(),
		_ = function(e) {
			function List() {
				_classCallCheck(this, List);
				var e = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
				return e.state = {}, e
			}
			return _inherits(List, e), r(List, [{
				key: "clickLogHandle",
				value: function() {
					function clickLogHandle(e) {
						var t = e.target;
						if(t.getAttribute("clstag")) {
							var n = "" + t.getAttribute("clstag"),
								r = t.getAttribute("data-log-text"),
								o = t.getAttribute("data-log-url"),
								i = t.getAttribute("data-log-desc"),
								a = t.getAttribute("data-log-mcinfo"),
								u = t.getAttribute("data-log-biclk"),
								l = t.getAttribute("data-log-theme");
							y["default"].clickLog({
								text: r,
								biclk: u,
								desc: i,
								url: o,
								mcinfo: a
							}, {
								rept: "clk",
								poi: n,
								theme: l
							})
						}
					}
					return clickLogHandle
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						return i["default"].createElement("div", {
							className: l["default"].list,
							onClick: this.clickLogHandle.bind(this)
						}, i["default"].createElement("div", {
							className: l["default"].container
						}, i["default"].createElement(f["default"], null), i["default"].createElement(h["default"], null), i["default"].createElement(g["default"], null)))
					}
					return render
				}()
			}]), List
		}(i["default"].Component);
	i["default"].render(i["default"].createElement(a.Provider, {
		store: b
	}, i["default"].createElement(_, null)), document.getElementById("J_container"))
}, function(e, t) {
	e.exports = {
		"list": "_2F8zhWYDQZ0r-aOB6zIJB",
		"container": "_38HGaB4IadhG047SQW9FpB"
	}
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _defineProperty(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(14),
		u = n(7),
		l = _interopRequireDefault(u),
		s = n(67),
		c = _interopRequireDefault(s),
		d = n(21),
		f = n(68),
		p = _interopRequireDefault(f),
		h = n(2),
		m = _interopRequireDefault(h),
		g = function(e) {
			function Hotlist() {
				_classCallCheck(this, Hotlist);
				var e = _possibleConstructorReturn(this, (Hotlist.__proto__ || Object.getPrototypeOf(Hotlist)).apply(this, arguments));
				return e.state = {
					tabFixTop: !1,
					curTabIdx: "01"
				}, e.tabsBuilder = e.tabsBuilder.bind(e), e.contentBuilder = e.contentBuilder.bind(e), e.onScrollHandle = e.onScrollHandle.bind(e), e.tabOnClickHandle = e.tabOnClickHandle.bind(e), e
			}
			return _inherits(Hotlist, e), r(Hotlist, [{
				key: "componentWillMount",
				value: function() {
					function componentWillMount() {
						this.fetchTabs()
					}
					return componentWillMount
				}()
			}, {
				key: "componentDidMount",
				value: function() {
					function componentDidMount() {
						this.tabExpLogHandle(), this.listener = m["default"].throttle(this.onScrollHandle.bind(this), 50, this), this.listenerAdd = m["default"].throttle(this.onScrollHandleAdd.bind(this), 300, this), window.addEventListener("scroll", this.listener), window.addEventListener("scroll", this.listenerAdd)
					}
					return componentDidMount
				}()
			}, {
				key: "componentWillUnmount",
				value: function() {
					function componentWillUnmount() {
						window.removeEventListener("scroll", this.listener), window.removeEventListener("scroll", this.listenerAdd)
					}
					return componentWillUnmount
				}()
			}, {
				key: "fetchTabs",
				value: function() {
					function fetchTabs() {
						var e = this.props.dispatch,
							t = document.location.href,
							n = m["default"].getQueryParamValue(t),
							r = n["ids"];
						if(r) {
							var o = r.split(",");
							e((0, d.fetchArticleTabs)('["' + o[0] + '","' + o[1] + '"]'))
						} else e((0, d.fetchArticleTabs)())
					}
					return fetchTabs
				}()
			}, {
				key: "getCurrentTabType",
				value: function() {
					function getCurrentTabType(e) {
						for(var t = this.props.tabBar.tabs, n = t === undefined ? [] : t, r = null, o = 0, i = n.length; o < i; o++) {
							if(n[o].id === e) {
								r = n[o].jump.type || null;
								break
							}
						}
						return r
					}
					return getCurrentTabType
				}()
			}, {
				key: "shouldFetchArticleListData",
				value: function() {
					function shouldFetchArticleListData() {
						var e = this.props.tabBar.curTabId,
							t = this.props,
							n = t.dispatch,
							r = t.articleList,
							o = r["list_" + e + "_data"];
						o.isFetching || o.isFinish || n((0, d.fetchArticleList)(e, parseInt(r["list_" + e + "_data"].lastIdx) + 1, this.getCurrentTabType(e)))
					}
					return shouldFetchArticleListData
				}()
			}, {
				key: "tabsBuilder",
				value: function() {
					function tabsBuilder(e) {
						var t = this,
							n = e.tabs,
							r = n === undefined ? [] : n,
							o = e.curTabId;
						return ["精选", "手机", "数码", "汽车", "运动", "型男", "家居", "美食", "女神", "亲子", "家电", "休闲"].map(function(e, n) {
							var a = r.filter(function(t) {
								return t.title === e
							});
							if(a.length) {
								var u = a[0],
									s = u.id,
									d = u.title,
									f = u.url,
									p = f === undefined ? null : f,
									h = u.desc,
									m = h === undefined ? null : h,
									g = u.mcinfo,
									v = g === undefined ? null : g,
									y = u.biclk,
									b = y === undefined ? null : y,
									_ = u.theme,
									w = _ === undefined ? null : _;
								return i["default"].createElement("li", {
									className: (0, l["default"])(_defineProperty({}, c["default"].selected, o === s)),
									key: n,
									clstag: "indx|tag_" + [Math.floor((n + 1) / 10), (n + 1) % 10].join(""),
									"data-log-text": d,
									"data-log-url": p,
									"data-log-desc": m,
									"data-log-mcinfo": v,
									"data-log-biclk": b,
									"data-log-theme": w,
									onClick: function() {
										function onClick(e) {
											t.setState({
												curTabIdx: n + 1
											}), t.tabOnClickHandle(e, s)
										}
										return onClick
									}()
								}, d)
							}
						})
					}
					return tabsBuilder
				}()
			}, {
				key: "contentBuilder",
				value: function() {
					function contentBuilder(e, t) {
						var n = this.props.tabBar,
							r = n.curTabId,
							o = n.tabs,
							a = e["list_" + t + "_data"] || {},
							u = a.dataList,
							s = u === undefined ? [] : u,
							d = a.isFinish,
							f = d !== undefined && d,
							h = a.isError,
							g = h !== undefined && h,
							v = o.filter(function(e) {
								return e.id === t
							})[0]["title"],
							y = ["精选", "手机", "数码", "汽车", "运动", "型男", "家居", "美食", "女神", "亲子", "家电", "休闲"],
							b = y.indexOf(v) + 1;
						return !s.length && f ? i["default"].createElement("div", {
							className: (0, l["default"])({
								lazyload: !0
							})
						}) : i["default"].createElement("ul", {
							id: "list-" + t,
							style: {
								display: t === r ? "block" : "none"
							}
						}, g ? i["default"].createElement("div", {
							className: c["default"].error
						}) : "", s.map(function(e, t) {
							var n = e.title,
								r = e.articleId,
								o = e.pageViewStr,
								a = e.authorId,
								u = n,
								l = m["default"].getBulletinItemURL(r),
								s = "01-" + r + "-" + a + "-" + o;
							return i["default"].createElement(p["default"], {
								key: e.articleId,
								data: e,
								logData: {
									text: u,
									biclk: null,
									desc: null,
									url: l,
									mcinfo: s,
									curTabId: b,
									index: t
								}
							})
						}, this))
					}
					return contentBuilder
				}()
			}, {
				key: "tabOnClickHandle",
				value: function() {
					function tabOnClickHandle(e) {
						for(var t = this.props, n = t.dispatch, r = t.articleList, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
						var u = i[0];
						this.scrollToTop(), r["list_" + u + "_data"] || n((0, d.fetchArticleList)(u, 1, this.getCurrentTabType(u))), n((0, d.changeCurTabId)(u))
					}
					return tabOnClickHandle
				}()
			}, {
				key: "onScrollHandle",
				value: function() {
					function onScrollHandle() {
						var e = m["default"].getScrollTop,
							t = m["default"].getWindowWidth,
							n = e(),
							r = this.listContent,
							o = this.tabBar,
							i = r.offsetTop;
						n > i ? (o.style.position = "fixed", t() < 1200 ? o.style.left = "-" + (window.scrollX - 5) + "px" : o.style.left = "auto") : n <= i && (o.style.position = "absolute", o.style.left = "auto", o.style.top = "0px")
					}
					return onScrollHandle
				}()
			}, {
				key: "onScrollHandleAdd",
				value: function() {
					function onScrollHandleAdd() {
						var e = m["default"].getScrollTop,
							t = m["default"].getWindowHeight,
							n = m["default"].getScrollHeight;
						e() + t() > n() - 700 && (this.scrollTop = document.documentElement.scrollTop, this.shouldFetchArticleListData())
					}
					return onScrollHandleAdd
				}()
			}, {
				key: "tabExpLogHandle",
				value: function() {
					function tabExpLogHandle() {
						for(var e = ["精选", "手机", "数码", "汽车", "运动", "型男", "家居", "美食", "女神", "亲子", "家电", "休闲"], t = 0; t < e.length; t++) m["default"].exposeLog({
							text: e[t]
						}, {
							rept: "impr",
							poi: "indx|tag|null"
						})
					}
					return tabExpLogHandle
				}()
			}, {
				key: "scrollToTop",
				value: function() {
					function scrollToTop() {
						document.documentElement.scrollTop = "0px"
					}
					return scrollToTop
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						var e = this,
							t = this.props,
							n = t.tabBar,
							r = n === undefined ? [] : n,
							o = t.articleList,
							a = o === undefined ? [] : o,
							u = this.state.tabFixTop,
							s = this.tabsBuilder(r);
						return i["default"].createElement("div", {
							className: c["default"].hotlist
						}, i["default"].createElement("div", {
							className: c["default"].title
						}, "热文推荐"), i["default"].createElement("div", {
							className: c["default"].mainContent,
							ref: function() {
								function ref(t) {
									e.listContent = t
								}
								return ref
							}()
						}, i["default"].createElement("div", {
							className: (0, l["default"])(c["default"].tabBar, c["default"].tab_fix_top),
							ref: function() {
								function ref(t) {
									e.tabBar = t
								}
								return ref
							}()
						}, i["default"].createElement("ul", null, s)), i["default"].createElement("div", {
							className: (0, l["default"])(c["default"].listWrap, _defineProperty({}, c["default"].marginTop, u))
						}, r.tabs.map(function(t) {
							return e.contentBuilder(a, t.id)
						}), i["default"].createElement("div", {
							className: (0, l["default"])(c["default"].loading, _defineProperty({}, c["default"].hidden, this.showMore))
						}, i["default"].createElement("i", {
							className: c["default"].points
						})))))
					}
					return render
				}()
			}, {
				key: "showMore",
				get: function() {
					function get() {
						var e = this.props,
							t = e.tabBar,
							n = e.articleList,
							r = t.curTabId,
							o = n["list_" + r + "_data"];
						return o.isFinish || o.isError
					}
					return get
				}()
			}]), Hotlist
		}(i["default"].Component),
		v = function(e) {
			return e["hotListReducer"]
		};
	t["default"] = (0, a.connect)(v)(g)
}, function(e, t) {
	e.exports = {
		"hotlist": "IvjZqRSudOxVCMNXYObxY",
		"title": "_2Kb8-nplK47lBDl_iifFWM",
		"mainContent": "_3UTyE_Gn2xrh3jkrQR2kXj",
		"tabBar": "_3E7ERIDGoXWTOZbydVVMv",
		"selected": "_22B8YPpa0q_CmMi1q6bhTY",
		"tab_fix_top": "pad6DeFCammJHAP7MsOui",
		"error": "_3vJkCpR8ypV1tuOY19KsC9",
		"listWrap": "_3oESJEbA6EDqNUcNu8namk",
		"marginTop": "_3mw6ovXTHKaSYr-tri6twk",
		"points": "r4B9zGJtoslgl0EiPw4-B",
		"loading": "_2fu68yozXJ70599sifCiNb",
		"hidden": "_3IyN8ibFJtaxrp65KkT11H"
	}
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(45),
		u = _interopRequireDefault(a),
		l = n(2),
		s = _interopRequireDefault(l),
		c = n(69),
		d = _interopRequireDefault(c),
		f = function(e) {
			function HotItem() {
				_classCallCheck(this, HotItem);
				var e = _possibleConstructorReturn(this, (HotItem.__proto__ || Object.getPrototypeOf(HotItem)).apply(this, arguments));
				return e.state = {}, e.getViewAmount = e.getViewAmount.bind(e), e
			}
			return _inherits(HotItem, e), r(HotItem, [{
				key: "getViewAmount",
				value: function() {
					function getViewAmount() {
						var e = this.props.data.pageView;
						return +e > 1e4 ? parseFloat(e).toPrecision(2).split("e")[0] + "万" : e
					}
					return getViewAmount
				}()
			}, {
				key: "componentDidMount",
				value: function() {
					function componentDidMount() {
						this.itemExpLogHandle()
					}
					return componentDidMount
				}()
			}, {
				key: "itemExpLogHandle",
				value: function() {
					function itemExpLogHandle() {
						var e = this.props,
							t = e.logData,
							n = t === undefined ? {} : t,
							r = e.data,
							o = r.title,
							i = r.articleId,
							a = r.authorId,
							u = r.pageViewStr,
							l = n.curTabId,
							c = n.index,
							d = "indx|news#" + [Math.floor(l / 10), l % 10].join("") + "|" + [Math.floor((c + 1) / 10), (c + 1) % 10].join("");
						s["default"].exposeLog({
							text: o,
							url: s["default"].getBulletinItemURL(i),
							mcinfo: "01-" + i + "-" + a + "-" + u
						}, {
							rept: "impr",
							poi: d
						})
					}
					return itemExpLogHandle
				}()
			}, {
				key: "getPreviewUrl",
				value: function() {
					function getPreviewUrl(e) {
						var t = e.split("jfs"),
							n = $("html").hasClass("o2_retina") || $("html").hasClass("jd_retina") ? "s460x300_jfs" : "s230x150_jfs",
							r = /!q70.jpg/.test(t[1]) ? "" : "!q70.jpg";
						return [t[0], n, t[1], r].join("")
					}
					return getPreviewUrl
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						var e = this.props,
							t = e.data,
							n = e.logData,
							r = n === undefined ? {} : n,
							o = e.key,
							a = t.articleId,
							l = t.indexImage,
							c = t.title,
							f = t.summary,
							p = t.pageViewStr,
							h = r.text,
							m = h === undefined ? c : h,
							g = r.biclk,
							v = g === undefined ? null : g,
							y = r.desc,
							b = y === undefined ? null : y,
							_ = r.url,
							w = _ === undefined ? s["default"].getBulletinItemURL(a) : _,
							C = r.mcinfo,
							E = C === undefined ? null : C,
							T = r.theme,
							k = T === undefined ? null : T,
							S = r.curTabId,
							x = r.index,
							O = p;
						return i["default"].createElement("li", {
							className: d["default"].hotItem,
							key: o,
							clstag: "indx|news#" + [Math.floor(S / 10), S % 10].join("") + "_" + [Math.floor((x + 1) / 10), (x + 1) % 10].join("") + "c",
							"data-log-text": m,
							"data-log-url": w,
							"data-log-desc": b,
							"data-log-mcinfo": E,
							"data-log-biclk": v,
							"data-log-theme": k,
							"data-article-id": a
						}, i["default"].createElement("a", {
							href: s["default"].getBulletinItemURL(a),
							target: "_blank"
						}, i["default"].createElement("div", {
							className: d["default"].preview
						}, i["default"].createElement(u["default"], {
							src: this.getPreviewUrl(l),
							alt: "预览图",
							logClstag: "indx|news#" + [Math.floor(S / 10), S % 10].join("") + "_" + [Math.floor((x + 1) / 10), (x + 1) % 10].join("") + "a",
							logText: m,
							logUrl: w,
							logDesc: b,
							logMcinfo: E,
							logBiclk: v,
							logTheme: k
						})), i["default"].createElement("div", {
							className: d["default"].content
						}, i["default"].createElement("div", {
							className: d["default"].title,
							clstag: "indx|news#" + [Math.floor(S / 10), S % 10].join("") + "_" + [Math.floor((x + 1) / 10), (x + 1) % 10].join("") + "b",
							"data-log-text": m,
							"data-log-url": w,
							"data-log-desc": b,
							"data-log-mcinfo": E,
							"data-log-biclk": v,
							"data-log-theme": k
						}, c), i["default"].createElement("div", {
							className: d["default"].description,
							clstag: "indx|news#" + [Math.floor(S / 10), S % 10].join("") + "_" + [Math.floor((x + 1) / 10), (x + 1) % 10].join("") + "c",
							"data-log-text": m,
							"data-log-url": w,
							"data-log-desc": b,
							"data-log-mcinfo": E,
							"data-log-biclk": v,
							"data-log-theme": k
						}, f), i["default"].createElement("div", {
							className: d["default"].info
						}, i["default"].createElement("i", {
							className: d["default"].previewIcon,
							alt: "预览图标",
							srcset: ""
						}), i["default"].createElement("span", {
							className: d["default"].viewAmount
						}, O)))))
					}
					return render
				}()
			}]), HotItem
		}(i["default"].PureComponent);
	t["default"] = f
}, function(e, t) {
	e.exports = {
		"hotItem": "_22Oix1ELZz1MDoP6GMIm0F",
		"content": "_3A06q0i5gFYApDhhEM4i78",
		"preview": "_1gK3wUGCGeMVxu-32dF4Im",
		"previewLogMask": "_3lKMV_UKE9P_cg0ggbdCjY",
		"previewIcon": "_39y50OSUYKr_vWt7tlfs0L",
		"title": "_27CzaCw-p0CS-ah_PEIDAm",
		"description": "_3HHIrt8tpulw42bJ1C_C88",
		"info": "_38Vhv85N2DiTbaSwANgnVl",
		"viewAmount": "_1xKc-vI6-n3vtpB_wqPm08"
	}
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(7),
		u = _interopRequireDefault(a),
		l = n(14),
		s = n(71),
		c = _interopRequireDefault(s),
		d = n(21),
		f = n(72),
		p = _interopRequireDefault(f),
		h = n(2),
		m = _interopRequireDefault(h),
		g = function(e) {
			function Announcmentlist() {
				_classCallCheck(this, Announcmentlist);
				var e = _possibleConstructorReturn(this, (Announcmentlist.__proto__ || Object.getPrototypeOf(Announcmentlist)).apply(this, arguments));
				return e.state = {
					fixTop: !1
				}, e.onScrollHandle = e.onScrollHandle.bind(e), e
			}
			return _inherits(Announcmentlist, e), r(Announcmentlist, [{
				key: "componentWillMount",
				value: function() {
					function componentWillMount() {
						this.fetchContent()
					}
					return componentWillMount
				}()
			}, {
				key: "componentDidMount",
				value: function() {
					function componentDidMount() {}
					return componentDidMount
				}()
			}, {
				key: "componentWillUnmount",
				value: function() {
					function componentWillUnmount() {}
					return componentWillUnmount
				}()
			}, {
				key: "fetchContent",
				value: function() {
					function fetchContent() {
						(0, this.props.dispatch)((0, d.fetchAnnouncments)())
					}
					return fetchContent
				}()
			}, {
				key: "contentBuilder",
				value: function() {
					function contentBuilder() {
						var e = this.props.announcmentList,
							t = e.dataList,
							n = t === undefined ? [] : t,
							r = e.isFinish,
							o = ["会员体系", "物流相关", "品牌入驻"];
						return r !== undefined && r && "error" === n[0] ? i["default"].createElement("div", {
							className: c["default"].error
						}) : n.sort(function(e, t) {
							return t.isTop - e.isTop
						}).map(function(e, t) {
							var n = e.title,
								r = e.id,
								a = n,
								u = m["default"].getAnnouncementDetailURL(r),
								l = "02-" + e.id + "-0" + (o.indexOf(e.type_name) + 1) + "-" + e.created;
							return i["default"].createElement(p["default"], {
								logData: {
									text: a,
									biclk: null,
									desc: null,
									url: u,
									mcinfo: l,
									index: t
								},
								data: e
							})
						})
					}
					return contentBuilder
				}()
			}, {
				key: "onScrollHandle",
				value: function() {
					function onScrollHandle() {
						var e = m["default"].getScrollTop;
						e() > 211 ? this.setState({
							fixTop: !0,
							positionTop: e() + "px"
						}) : e() < 211 && this.setState({
							fixTop: !1,
							positionTop: "0px"
						})
					}
					return onScrollHandle
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						var e = this.state.positionTop,
							t = this.props.announcmentList,
							n = t.dataList,
							r = n === undefined ? [] : n,
							o = t.isFinish,
							a = o !== undefined && o,
							l = void 0;
						return l = !r.length && a ? i["default"].createElement("div", {
							className: (0, u["default"])(c["default"].empty)
						}, "暂无公告") : i["default"].createElement("div", null, i["default"].createElement("ul", {
							className: (0, u["default"])(c["default"].list, {
								"lazyload": this.props.announcmentList.isFetching
							})
						}, this.contentBuilder()), i["default"].createElement("a", {
							href: m["default"].getAnnouncementListURL(),
							target: "_blank"
						}, i["default"].createElement("div", {
							className: c["default"].more,
							clstag: "indx|notice_c",
							"data-log-text": null,
							"data-log-url": null,
							"data-log-desc": null,
							"data-log-mcinfo": null,
							"data-log-biclk": null,
							"data-log-theme": null
						}, "更多公告 ", i["default"].createElement("i", {
							className: c["default"].moreIcon,
							alt: "",
							srcset: ""
						})))), i["default"].createElement("div", {
							className: (0, u["default"])(c["default"].announcmentlist),
							style: {
								top: e
							}
						}, i["default"].createElement("div", {
							className: c["default"].title
						}, "京东公告"), i["default"].createElement("div", {
							className: c["default"].content
						}, l))
					}
					return render
				}()
			}]), Announcmentlist
		}(i["default"].Component),
		v = function(e) {
			return e["hotListReducer"]
		};
	t["default"] = (0, l.connect)(v)(g)
}, function(e, t) {
	e.exports = {
		"announcmentlist": "VEiuYgNosisjeHonfo41s",
		"title": "_11J5Rws6qdg1GEA5U24Jct",
		"content": "_2cedIVnsnTzWo8wk7QCCJp",
		"list": "_2bILJlN3ntRs-VnjQdio86",
		"more": "_3JdPFPAqw_66v8fQtccJZq",
		"error": "_3RQS7J6Ibo9ZOfi184yNCd",
		"moreIcon": "UB2pqNmqH_15RXQ7bYyt0",
		"empty": "_1ZIarYtKVV2Mjkmod6M8F6"
	}
}, function(e, t, n) {
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function _classCallCheck(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function _possibleConstructorReturn(e, t) {
		if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function _inherits(e, t) {
		if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function defineProperties(e, t) {
				for(var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, t, n) {
				return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
			}
		}(),
		o = n(0),
		i = _interopRequireDefault(o),
		a = n(7),
		u = _interopRequireDefault(a),
		l = n(73),
		s = _interopRequireDefault(l),
		c = n(2),
		d = _interopRequireDefault(c),
		f = function(e) {
			function AnnouncmentItem() {
				_classCallCheck(this, AnnouncmentItem);
				var e = _possibleConstructorReturn(this, (AnnouncmentItem.__proto__ || Object.getPrototypeOf(AnnouncmentItem)).apply(this, arguments));
				return e.state = {}, e
			}
			return _inherits(AnnouncmentItem, e), r(AnnouncmentItem, [{
				key: "componentDidMount",
				value: function() {
					function componentDidMount() {
						this.titleExpLogHandle()
					}
					return componentDidMount
				}()
			}, {
				key: "titleExpLogHandle",
				value: function() {
					function titleExpLogHandle() {
						var e = this.props,
							t = e.logData,
							n = t === undefined ? {} : t,
							r = e.data,
							o = r.title,
							i = r.id,
							a = n.mcinfo,
							u = n.index,
							l = "indx|notice|" + [Math.floor((u + 1) / 10), (u + 1) % 10].join("");
						d["default"].exposeLog({
							text: o,
							url: d["default"].getAnnouncementDetailURL(i),
							mcinfo: a
						}, {
							rept: "impr",
							poi: l
						})
					}
					return titleExpLogHandle
				}()
			}, {
				key: "titleLogHandle",
				value: function() {
					function titleLogHandle() {
						var e = this.props.logData,
							t = e === undefined ? {} : e,
							n = t.index,
							r = "indx|notice|" + [Math.floor((n + 1) / 10), (n + 1) % 10].join("") + "a";
						this.repter({
							rept: "clk",
							poi: r
						})
					}
					return titleLogHandle
				}()
			}, {
				key: "descriptionLogHandle",
				value: function() {
					function descriptionLogHandle() {
						var e = this.props.logData,
							t = e === undefined ? {} : e,
							n = t.index,
							r = "indx|notice|" + [Math.floor((n + 1) / 10), (n + 1) % 10].join("") + "b";
						this.repter({
							rept: "clk",
							poi: r
						})
					}
					return descriptionLogHandle
				}()
			}, {
				key: "render",
				value: function() {
					function render() {
						var e = this.props.data,
							t = e.title,
							n = e.content,
							r = e.created,
							o = e.type_name,
							a = e.id,
							l = this.props.logData,
							c = l.text,
							f = l.url,
							p = l.desc,
							h = l.mcinfo,
							m = l.biclk,
							g = l.theme,
							v = l.index;
						return i["default"].createElement("div", {
							className: s["default"].announcmentItem
						}, i["default"].createElement("a", {
							className: s["default"].displayBlock,
							href: d["default"].getAnnouncementDetailURL(a),
							target: "_blank"
						}, i["default"].createElement("div", {
							className: s["default"].title,
							clstag: "indx|notice_" + [Math.floor((v + 1) / 10), (v + 1) % 10].join("") + "a",
							"data-log-text": c,
							"data-log-url": f,
							"data-log-desc": p,
							"data-log-mcinfo": h,
							"data-log-biclk": m,
							"data-log-theme": g
						}, t), i["default"].createElement("div", {
							className: (0, u["default"])(s["default"].description)
						}, i["default"].createElement("div", {
							className: s["default"].ellipsifyText,
							clstag: "indx|notice_" + [Math.floor((v + 1) / 10), (v + 1) % 10].join("") + "b",
							"data-log-text": c,
							"data-log-url": f,
							"data-log-desc": p,
							"data-log-mcinfo": h,
							"data-log-biclk": m,
							"data-log-theme": g
						}, n ? n.trim() : "")), i["default"].createElement("div", {
							className: s["default"].info
						}, i["default"].createElement("span", {
							className: s["default"].date
						}, r), "|", i["default"].createElement("span", {
							className: s["default"].owner
						}, o))))
					}
					return render
				}()
			}]), AnnouncmentItem
		}(i["default"].PureComponent);
	t["default"] = f
}, function(e, t) {
	e.exports = {
		"announcmentItem": "Rjm1fi2uDQ29fICwEWj2W",
		"title": "_32LbOozgzRr-CdfOtxlcwB",
		"description": "_1G3OSZQEgnpvX6rSmYZCx3",
		"ellipsify": "x5-VKGVhcwWt3tF8gh9Um",
		"ellipsify-text": "_2-1-tnRqQokfgkBarMrrI8",
		"info": "_3maGj8l7_1QAeVtAXHct38",
		"date": "_1gqm-nQBsogw_PAhhmQOlw",
		"owner": "zdrSFF9rSBJRasL0BqYfp",
		"displayBlock": "_3kk_C2Lj_rHTJR7XJg_-_U"
	}
}]);