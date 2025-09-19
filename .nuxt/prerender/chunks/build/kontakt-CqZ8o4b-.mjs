import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './Footer-D8HdEtin.mjs';
import { reactive, ref, useSSRContext } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/index.mjs';
import { ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/server-renderer/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ofetch/dist/node.mjs';
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
import './server.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "kontakt",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      telefon: "",
      betreff: "",
      nachricht: ""
    });
    const successMsg = ref("");
    const errorMsg = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Empfehlungbanner = __nuxt_component_0;
      const _component_SocialMeda = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[--><div><h2 style="${ssrRenderStyle({ "text-align": "center", "margin-top": "60px", "font-size": "2em" })}"> Sie haben Fragen? </h2><section class="form-page"><div class="form-container"><h1 class="section-title">Kontaktformular</h1><form class="form"><div class="form-group"><label for="name">Name:</label><input type="text" id="name"${ssrRenderAttr("value", form.name)} required></div><div class="form-group"><label for="email">E-Mail:</label><input type="email" id="email"${ssrRenderAttr("value", form.email)} required></div><div class="form-group"><label for="telefon">Telefonnummer (optional):</label><input type="tel" id="telefon"${ssrRenderAttr("value", form.telefon)} placeholder="z.\u202FB. 0151 12345678"></div><div class="form-group"><label for="betreff">Anliegen:</label><select id="betreff" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, "") : ssrLooseEqual(form.betreff, "")) ? " selected" : ""}>Bitte w\xE4hlen</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Studienberatung</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Bewerbung</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Zulassung &amp; Immatrikulation</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Finanzierung &amp; BAf\xF6G</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Anerkennung von Leistungen</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Technische Probleme</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Online-Plattformen (Moodle, HISinOne etc.)</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Pr\xFCfungen &amp; Noten</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Veranstaltungen &amp; Stundenplan</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Sonstiges</option></select></div><div class="form-group"><label for="nachricht">Nachricht:</label><textarea id="nachricht" rows="5" required>${ssrInterpolate(form.nachricht)}</textarea></div><button type="submit" class="btn-form">Absenden</button></form>`);
      if (successMsg.value) {
        _push(`<div style="${ssrRenderStyle({ "color": "green", "margin-top": "15px" })}">${ssrInterpolate(successMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMsg.value) {
        _push(`<div style="${ssrRenderStyle({ "color": "red", "margin-top": "15px" })}">${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
      _push(ssrRenderComponent(_component_Empfehlungbanner, null, null, _parent));
      _push(ssrRenderComponent(_component_SocialMeda, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kontakt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=kontakt-CqZ8o4b-.mjs.map
