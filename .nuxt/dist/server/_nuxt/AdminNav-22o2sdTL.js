import { ref, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { createClient } from "@supabase/supabase-js";
import { _ as _export_sfc, u as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
const _sfc_main$1 = {
  __name: "AdminLogin",
  __ssrInlineRender: true,
  emits: ["login-success"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    createClient(config.public.supabaseUrl, config.public.supabaseAnonKey);
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-login" }, _attrs))} data-v-de14be69><h2 data-v-de14be69>Login</h2><input${ssrRenderAttr("value", email.value)} type="email" placeholder="E-Mail" data-v-de14be69><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Passwort" data-v-de14be69><div class="error-msg" data-v-de14be69>${ssrInterpolate(errorMsg.value)}</div><button data-v-de14be69>Login</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-de14be69"]]);
const _sfc_main = {
  __name: "AdminNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "admin-nav" }, _attrs))} data-v-a1f626bd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin-bewerbung",
        class: "nav-link",
        "exact-active-class": "active-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Bewerbungen`);
          } else {
            return [
              createTextVNode("Bewerbungen")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin-kontakt",
        class: "nav-link",
        "exact-active-class": "active-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontaktanfragen`);
          } else {
            return [
              createTextVNode("Kontaktanfragen")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="logout-btn" data-v-a1f626bd>Logout</button></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1f626bd"]]);
export {
  AdminLogin as A,
  AdminNav as a
};
//# sourceMappingURL=AdminNav-22o2sdTL.js.map
