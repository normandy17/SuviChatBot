/* eslint-disable no-undef */
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
const chatbotScriptInvoker = () => {
  !(function (t, e, n, r, o) {
    let a;
    let i;
    const c = new XMLHttpRequest();
    c.addEventListener('load', function () {
      try {
        const t = typeof this.response === 'string' ? JSON.parse(this.response) : this.response;
        if (!t.data) throw new Error();
        const n = t.data.cdn;
        (a = n), (i = t.data);
        const r = e.createElement('script');
        (r.async = !0),
          (r.src = ''.concat(a, '/interactbot.js')),
          (r.type = 'text/javascript'),
          e.getElementsByTagName('head')[0].appendChild(r);
      } catch (t) {
        throw new Error('Coognitive: failed to retrieve metadata');
      }
    }),
      c.open('GET', ''.concat(r, '/api/v1/').concat(o, '/metadata'), !0),
      (c.responseType = 'json'),
      c.send();
    const u = { on: {} };
    (t[n] = {
      init(t) {
        return (u.init = t);
      },
      render(t) {
        return (u.render = t);
      },
      reinit() {},
      open() {},
      close() {},
      toggle() {},
      destroy() {},
      on(t, e) {
        t && typeof e === 'function' && (Array.isArray(u.on[t]) || (u.on[t] = []), u.on[t].push(e));
      },
    }),
      (t.__interactbotLoaderReady__ = function (e, r) {
        r(a, i, o, u), (t[n] = e);
      });
  })(window, document, 'Interactbot', 'https://widget-dev.sapienspaas.com', '626e5ad796aacd00b315ec78');
  if (!window.botInit) {
    Interactbot.init({ botId: '626e5ad796aacd00b315ec78' });
    window.botInit = true;
  }
};

export default chatbotScriptInvoker;
