import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { createClient } from "@supabase/supabase-js";
import { _ as _export_sfc, u as useRuntimeConfig } from "../server.mjs";
import "./client-only-f9vl-ohA.js";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/klona/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/hookable/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/unctx/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/radix3/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/ufo/dist/index.mjs";
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
export {
  login as default
};
//# sourceMappingURL=login-IQ8x30Oe.js.map
