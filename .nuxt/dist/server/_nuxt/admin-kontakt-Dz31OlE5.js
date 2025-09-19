import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { A as AdminLogin, a as AdminNav } from "./AdminNav-22o2sdTL.js";
import { createClient } from "@supabase/supabase-js";
import { _ as _export_sfc, u as useRuntimeConfig } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Web-Engineering_repo/node_modules/hookable/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Web-Engineering_repo/node_modules/unctx/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Web-Engineering_repo/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Web-Engineering_repo/node_modules/radix3/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Web-Engineering_repo/node_modules/defu/dist/defu.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Web-Engineering_repo/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "admin-kontakt",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey);
    const isLoggedIn = ref(false);
    const kontakte = ref([]);
    function handleLoginSuccess() {
      isLoggedIn.value = true;
      ladeKontakte();
    }
    const ladeKontakte = async () => {
      const { data, error } = await supabase.from("kontakte").select("*");
      if (!error) {
        kontakte.value = data;
      } else {
        console.error("Fehler beim Laden der Kontakte:", error);
      }
    };
    const logout = async () => {
      await supabase.auth.signOut();
      isLoggedIn.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-23534227>`);
      if (!isLoggedIn.value) {
        _push(ssrRenderComponent(AdminLogin, { onLoginSuccess: handleLoginSuccess }, null, _parent));
      } else {
        _push(`<div data-v-23534227>`);
        _push(ssrRenderComponent(AdminNav, { onLogout: logout }, null, _parent));
        _push(`<h2 class="section-title" data-v-23534227>Kontaktanfragen</h2><table class="admin-table" data-v-23534227><thead data-v-23534227><tr data-v-23534227><th data-v-23534227>Name</th><th data-v-23534227>Email</th><th data-v-23534227>Telefon</th><th data-v-23534227>Betreff</th><th data-v-23534227>Nachricht</th><th data-v-23534227>Aktionen</th></tr></thead><tbody data-v-23534227><!--[-->`);
        ssrRenderList(kontakte.value, (k) => {
          _push(`<tr data-v-23534227><td data-v-23534227>${ssrInterpolate(k.name)}</td><td data-v-23534227>${ssrInterpolate(k.email)}</td><td data-v-23534227>${ssrInterpolate(k.telefon || "-")}</td><td data-v-23534227>${ssrInterpolate(k.betreff)}</td><td data-v-23534227>${ssrInterpolate(k.nachricht)}</td><td data-v-23534227><button class="btn-delete" data-v-23534227>Löschen</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-kontakt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adminKontakt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23534227"]]);
export {
  adminKontakt as default
};
//# sourceMappingURL=admin-kontakt-Dz31OlE5.js.map
