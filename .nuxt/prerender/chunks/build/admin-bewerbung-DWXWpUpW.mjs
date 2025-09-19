import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/vue/server-renderer/index.mjs';
import { ref, useSSRContext } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/vue/index.mjs';
import { A as AdminLogin, a as AdminNav } from './AdminNav-22o2sdTL.mjs';
import { createClient } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/@supabase/supabase-js/dist/main/index.js';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/devalue/index.js';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "admin-bewerbung",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey);
    const isLoggedIn = ref(false);
    const bewerbungen = ref([]);
    function handleLoginSuccess() {
      isLoggedIn.value = true;
      ladeBewerbungen();
    }
    const ladeBewerbungen = async () => {
      const { data, error } = await supabase.from("bewerbungen").select("*");
      if (!error) {
        bewerbungen.value = data;
      } else {
        console.error("Fehler beim Laden der Bewerbungen:", error);
      }
    };
    const logout = async () => {
      await supabase.auth.signOut();
      isLoggedIn.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bcd6e4d6>`);
      if (!isLoggedIn.value) {
        _push(ssrRenderComponent(AdminLogin, { onLoginSuccess: handleLoginSuccess }, null, _parent));
      } else {
        _push(`<div data-v-bcd6e4d6>`);
        _push(ssrRenderComponent(AdminNav, { onLogout: logout }, null, _parent));
        _push(`<h2 class="section-title" data-v-bcd6e4d6>Eingegangene Bewerbungen</h2><table class="admin-table" data-v-bcd6e4d6><thead data-v-bcd6e4d6><tr data-v-bcd6e4d6><th data-v-bcd6e4d6>Name</th><th data-v-bcd6e4d6>Email</th><th data-v-bcd6e4d6>Studiengang</th><th data-v-bcd6e4d6>Zeugnis</th><th data-v-bcd6e4d6>Nachricht</th><th data-v-bcd6e4d6>Status</th><th data-v-bcd6e4d6>Aktionen</th></tr></thead><tbody data-v-bcd6e4d6><!--[-->`);
        ssrRenderList(bewerbungen.value, (b) => {
          _push(`<tr data-v-bcd6e4d6><td data-v-bcd6e4d6>${ssrInterpolate(b.Vorname)} ${ssrInterpolate(b.nachname)}</td><td data-v-bcd6e4d6>${ssrInterpolate(b.email)}</td><td data-v-bcd6e4d6>${ssrInterpolate(b.studiengang)}</td><td data-v-bcd6e4d6>`);
          if (b.Zeugnisse_url) {
            _push(`<a${ssrRenderAttr("href", b.Zeugnisse_url)} target="_blank" data-v-bcd6e4d6>PDF \xF6ffnen</a>`);
          } else {
            _push(`<span data-v-bcd6e4d6>-</span>`);
          }
          _push(`</td><td data-v-bcd6e4d6>${ssrInterpolate(b.Nachricht)}</td><td data-v-bcd6e4d6><select data-v-bcd6e4d6><option value="neu" data-v-bcd6e4d6${ssrIncludeBooleanAttr(Array.isArray(b.status) ? ssrLooseContain(b.status, "neu") : ssrLooseEqual(b.status, "neu")) ? " selected" : ""}>neu</option><option value="angenommen" data-v-bcd6e4d6${ssrIncludeBooleanAttr(Array.isArray(b.status) ? ssrLooseContain(b.status, "angenommen") : ssrLooseEqual(b.status, "angenommen")) ? " selected" : ""}>angenommen</option><option value="abgelehnt" data-v-bcd6e4d6${ssrIncludeBooleanAttr(Array.isArray(b.status) ? ssrLooseContain(b.status, "abgelehnt") : ssrLooseEqual(b.status, "abgelehnt")) ? " selected" : ""}>abgelehnt</option></select></td><td data-v-bcd6e4d6><button class="btn-delete" data-v-bcd6e4d6>L\xF6schen</button></td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-bewerbung.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adminBewerbung = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bcd6e4d6"]]);

export { adminBewerbung as default };
//# sourceMappingURL=admin-bewerbung-DWXWpUpW.mjs.map
