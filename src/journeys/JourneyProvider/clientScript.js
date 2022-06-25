/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-void */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-bitwise */
/* eslint-disable no-cond-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-shadow */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint no-param-reassign: 0 */
/* eslint no-underscore-dangle: 0 */
/* eslint wrap-iife: 0 */
const clientScriptInvoker = (company, formHost) => {
  console.log(company,formHost)
  !(function (e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string'))
          for (const o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        const t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0));
  })([
    function (e, t) {
      !(function (e, t, n, r) {
        let o;
        let a;
        const i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '';
        function u() {
          try {
            const e = typeof this.response === 'string' ? JSON.parse(this.response) : this.response;
            if (!e.data) throw new Error();
            const n = e.data;
            const r = n.cdn;
            const i = n.api;
            (o = r), (a = i);
            const u = t.createElement('script');
            (u.async = !0),
              (u.src = ''.concat(o, '/loader.journey.js')),
              (u.type = 'text/javascript'),
              t.getElementsByTagName('head')[0].appendChild(u);
          } catch (e) {
            throw new Error('Journey: failed to retrieve metadata');
          }
        }
        const c = new XMLHttpRequest();
        c.addEventListener('load', u),
          c.open('GET', ''.concat(r, '/').concat(i, '/metadata'), !0),
          (c.responseType = 'json'),
          c.send();
          console.log("sdfs")
        const d = {};
        (e[n] = {
          init(e) {
            const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (d.initOptions = t), (d.initFormId = e);
          },
        }),
          (e.__journeyLoaderReady___ = function (t, r) {
            console.log(o,a,i,d,e,n,t)
            r(o, a, i, d), (e[n] = t);
          });
      })(window, document, 'Journey', `${formHost}`, company);
    },
  ]);
};

export default clientScriptInvoker;
