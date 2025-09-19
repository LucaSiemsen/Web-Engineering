import { ref, mergeProps, useSSRContext } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-router/dist/vue-router.node.mjs';
import { createClient } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/@supabase/supabase-js/dist/main/index.js';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/devalue/index.js';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unctx/dist/index.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useRouter();
    createClient(
      config.public.supabaseUrl,
      config.public.supabaseAnonKey
    );
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-login" }, _attrs))} data-v-f440b7a8><h2 data-v-f440b7a8>Login</h2><input${ssrRenderAttr("value", email.value)} type="email" placeholder="E-Mail" data-v-f440b7a8><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Passwort" data-v-f440b7a8>`);
      if (errorMsg.value) {
        _push(`<div class="error-msg" data-v-f440b7a8>${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-f440b7a8>`);
      if (loading.value) {
        _push(`<span data-v-f440b7a8>Bitte warten...</span>`);
      } else {
        _push(`<span data-v-f440b7a8>Anmelden</span>`);
      }
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f440b7a8"]]);

export { login as default };
//# sourceMappingURL=login-IQ8x30Oe.mjs.map
