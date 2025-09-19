import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './Footer-D8HdEtin.mjs';
import { ref, useSSRContext } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { u as useRuntimeConfig } from './server.mjs';
import { createClient } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/@supabase/supabase-js/dist/main/index.js';
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
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = publicAssetsURL("/assets/icon_student_1.png");
const _imports_1 = publicAssetsURL("/assets/icon_student_2.png");
const _sfc_main = {
  __name: "bewerbung",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    createClient(config.public.supabaseUrl, config.public.supabaseAnonKey);
    const step = ref(1);
    const vorname = ref("");
    const nachname = ref("");
    const email = ref("");
    const studiengang = ref("");
    const abschluss = ref("");
    const studienform = ref("");
    const nachricht = ref("");
    ref(null);
    const feedback = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Empfehlungbanner = __nuxt_component_0;
      const _component_SocialMeda = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bewerbung-header" style="${ssrRenderStyle({ "margin-bottom": "20px" })}"><div class="icon-row"><img${ssrRenderAttr("src", _imports_0)} alt="Icon links" class="bewerbung-icon"><h1 class="bewerbung-title">Bewerbung f\xFCr deinen Studienplatz</h1><img${ssrRenderAttr("src", _imports_1)} alt="Icon rechts" class="bewerbung-icon"></div></section><section class="form-page"><div class="form-container"><h2 class="section-title">Bewerbungsformular</h2><form>`);
      if (step.value === 1) {
        _push(`<div><div class="form-group"><label for="vorname">Vorname:</label><input type="text" id="vorname"${ssrRenderAttr("value", vorname.value)} required></div><div class="form-group"><label for="nachname">Nachname:</label><input type="text" id="nachname"${ssrRenderAttr("value", nachname.value)} required></div><div class="form-group"><label for="email">E-Mail:</label><input type="email" id="email"${ssrRenderAttr("value", email.value)} required></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<div><div class="form-group"><label for="studiengang">Studiengang:</label><select id="studiengang" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "") : ssrLooseEqual(studiengang.value, "")) ? " selected" : ""}>Bitte w\xE4hlen</option><option value="Informatik"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Informatik") : ssrLooseEqual(studiengang.value, "Informatik")) ? " selected" : ""}>Informatik</option><option value="Wirtschaft"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Wirtschaft") : ssrLooseEqual(studiengang.value, "Wirtschaft")) ? " selected" : ""}>Wirtschaft</option><option value="Design"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Design") : ssrLooseEqual(studiengang.value, "Design")) ? " selected" : ""}>Design</option><option value="Betriebswirtschaftslehre"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Betriebswirtschaftslehre") : ssrLooseEqual(studiengang.value, "Betriebswirtschaftslehre")) ? " selected" : ""}>Betriebswirtschaftslehre</option><option value="Bauingenieurwesen"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Bauingenieurwesen") : ssrLooseEqual(studiengang.value, "Bauingenieurwesen")) ? " selected" : ""}>Bauingenieurwesen</option><option value="Maschinenbau"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Maschinenbau") : ssrLooseEqual(studiengang.value, "Maschinenbau")) ? " selected" : ""}>Maschinenbau</option><option value="Elektrotechnik"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Elektrotechnik") : ssrLooseEqual(studiengang.value, "Elektrotechnik")) ? " selected" : ""}>Elektrotechnik</option><option value="Medieninformatik"${ssrIncludeBooleanAttr(Array.isArray(studiengang.value) ? ssrLooseContain(studiengang.value, "Medieninformatik") : ssrLooseEqual(studiengang.value, "Medieninformatik")) ? " selected" : ""}>Medieninformatik</option></select></div><div class="form-group"><label for="abschluss">Abschluss:</label><select id="abschluss" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(abschluss.value) ? ssrLooseContain(abschluss.value, "") : ssrLooseEqual(abschluss.value, "")) ? " selected" : ""}>Bitte w\xE4hlen</option><option value="Bachelor"${ssrIncludeBooleanAttr(Array.isArray(abschluss.value) ? ssrLooseContain(abschluss.value, "Bachelor") : ssrLooseEqual(abschluss.value, "Bachelor")) ? " selected" : ""}>Bachelor</option><option value="Master"${ssrIncludeBooleanAttr(Array.isArray(abschluss.value) ? ssrLooseContain(abschluss.value, "Master") : ssrLooseEqual(abschluss.value, "Master")) ? " selected" : ""}>Master</option></select></div><div class="form-group"><label for="studienform">Studienform:</label><select id="studienform" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(studienform.value) ? ssrLooseContain(studienform.value, "") : ssrLooseEqual(studienform.value, "")) ? " selected" : ""}>Bitte w\xE4hlen</option><option value="Praesenz"${ssrIncludeBooleanAttr(Array.isArray(studienform.value) ? ssrLooseContain(studienform.value, "Praesenz") : ssrLooseEqual(studienform.value, "Praesenz")) ? " selected" : ""}>Pr\xE4senzstudium</option><option value="Online"${ssrIncludeBooleanAttr(Array.isArray(studienform.value) ? ssrLooseContain(studienform.value, "Online") : ssrLooseEqual(studienform.value, "Online")) ? " selected" : ""}>Online-Studium</option></select></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 3) {
        _push(`<div><div class="form-group"><label for="zeugnisse">Zeugnisse hochladen (PDF, max. 5MB):</label><input type="file" id="zeugnisse" accept=".pdf"><button type="button">Datei entfernen</button></div><div class="form-group"><label for="nachricht">Nachricht:</label><textarea id="nachricht" rows="5" required>${ssrInterpolate(nachricht.value)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="button-group" style="${ssrRenderStyle({ "margin-top": "20px" })}"><button type="button"${ssrIncludeBooleanAttr(step.value === 1) ? " disabled" : ""} style="${ssrRenderStyle({ "margin-right": "10px" })}"> Zur\xFCck </button>`);
      if (step.value < 3) {
        _push(`<button type="button">Weiter</button>`);
      } else {
        _push(`<button type="submit" class="btn-form">Bewerbung absenden</button>`);
      }
      _push(`</div></form>`);
      if (feedback.value) {
        _push(`<p style="${ssrRenderStyle({ "text-align": "center", "margin-top": "20px" })}">${ssrInterpolate(feedback.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><div class="white-gap"></div>`);
      _push(ssrRenderComponent(_component_Empfehlungbanner, null, null, _parent));
      _push(ssrRenderComponent(_component_SocialMeda, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bewerbung.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bewerbung-D0Gccf93.mjs.map
