import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from "./Footer-D8HdEtin.js";
import { reactive, ref, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nuxt/paths";
import "../server.mjs";
import "ofetch";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/hookable/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/unctx/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/radix3/dist/index.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/defu/dist/defu.mjs";
import "C:/Users/lucas/Desktop/Studium/8. Semester/Web-Engineering/Abgabe_Web/node_modules/ufo/dist/index.mjs";
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
      _push(`<!--[--><div><h2 style="${ssrRenderStyle({ "text-align": "center", "margin-top": "60px", "font-size": "2em" })}"> Sie haben Fragen? </h2><section class="form-page"><div class="form-container"><h1 class="section-title">Kontaktformular</h1><form class="form"><div class="form-group"><label for="name">Name:</label><input type="text" id="name"${ssrRenderAttr("value", form.name)} required></div><div class="form-group"><label for="email">E-Mail:</label><input type="email" id="email"${ssrRenderAttr("value", form.email)} required></div><div class="form-group"><label for="telefon">Telefonnummer (optional):</label><input type="tel" id="telefon"${ssrRenderAttr("value", form.telefon)} placeholder="z. B. 0151 12345678"></div><div class="form-group"><label for="betreff">Anliegen:</label><select id="betreff" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, "") : ssrLooseEqual(form.betreff, "")) ? " selected" : ""}>Bitte wählen</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Studienberatung</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Bewerbung</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Zulassung &amp; Immatrikulation</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Finanzierung &amp; BAföG</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Anerkennung von Leistungen</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Technische Probleme</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Online-Plattformen (Moodle, HISinOne etc.)</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Prüfungen &amp; Noten</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Veranstaltungen &amp; Stundenplan</option><option${ssrIncludeBooleanAttr(Array.isArray(form.betreff) ? ssrLooseContain(form.betreff, null) : ssrLooseEqual(form.betreff, null)) ? " selected" : ""}>Sonstiges</option></select></div><div class="form-group"><label for="nachricht">Nachricht:</label><textarea id="nachricht" rows="5" required>${ssrInterpolate(form.nachricht)}</textarea></div><button type="submit" class="btn-form">Absenden</button></form>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=kontakt-CqZ8o4b-.js.map
