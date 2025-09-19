import { a as __nuxt_component_0, _ as _export_sfc } from './server.mjs';
import { withCtx, createTextVNode, ref, mergeProps, useSSRContext } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2 } from './Footer-D8HdEtin.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/devalue/index.js';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/unhead/dist/plugins.mjs';

const _imports_0 = publicAssetsURL("/assets/fh-kiel_eingang-zum-campus-dietrichsdorf_hannaboerm_klein.jpg");
const _imports_1 = publicAssetsURL("/assets/orte_3.jpg");
const _imports_2 = publicAssetsURL("/assets/csm_talent_transfair_1_dca3ae81f4.webp");
const _sfc_main$1 = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = ref([
      {
        frage: "Wie bewerbe ich mich f\xFCr ein Studium an der FH Kiel?",
        antwort: "\xDCber unser Onlineformular auf dieser Website. Zeugnisse und Lebenslauf hochladen \u2013 fertig!",
        aktiv: false
      },
      {
        frage: "Welche Voraussetzungen muss ich erf\xFCllen?",
        antwort: "Allgemeine Hochschulreife oder Fachhochschulreife. Teilweise Sprachkenntnisse je nach Studiengang n\xF6tig.",
        aktiv: false
      },
      {
        frage: "Kann ich auch im Ausland studieren?",
        antwort: "Ja! \xDCber Erasmus kannst du ein oder zwei Semester an einer unserer Partnerhochschulen verbringen.",
        aktiv: false
      },
      {
        frage: "Wie hoch sind die Studiengeb\xFChren?",
        antwort: "An der FH Kiel f\xE4llt nur ein Semesterbeitrag an, keine zus\xE4tzlichen Studiengeb\xFChren!",
        aktiv: false
      },
      {
        frage: "Welche Studieng\xE4nge werden angeboten?",
        antwort: "Technik, Wirtschaft, Sozialwesen, Medien, Agrarwirtschaft \u2013 und viele mehr!",
        aktiv: false
      },
      {
        frage: "Wann ist die Bewerbungsfrist?",
        antwort: "F\xFCr das Wintersemester meist bis 15. Juli, f\xFCr das Sommersemester bis 15. Januar.",
        aktiv: false
      },
      {
        frage: "Gibt es auch duale Studieng\xE4nge?",
        antwort: "Ja, wir bieten verschiedene duale Studieng\xE4nge in Kooperation mit Unternehmen an.",
        aktiv: false
      }
    ]);
    ref([]);
    const answerHeights = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq-container" }, _attrs))} data-v-65d386b3><!--[-->`);
      ssrRenderList(faqs.value, (frage, index) => {
        _push(`<div class="faq-item" data-v-65d386b3><button class="faq-question" data-v-65d386b3><span class="${ssrRenderClass([{ open: frage.aktiv }, "arrow"])}" data-v-65d386b3>\u25B8</span> ${ssrInterpolate(frage.frage)}</button><div class="faq-answer" style="${ssrRenderStyle({ maxHeight: frage.aktiv ? answerHeights.value[index] + "px" : "0", paddingTop: frage.aktiv ? "15px" : "0", paddingBottom: frage.aktiv ? "15px" : "0" })}" data-v-65d386b3>${ssrInterpolate(frage.antwort)}</div></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FAQ = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-65d386b3"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="hero"><div class="hero-text"><h1>Unsere Studieng\xE4nge \u2013 Deine Zukunft!</h1><p>Starte deine Karriere an unserer Hochschule!</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/bewerbung",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Jetzt Bewerben`);
          } else {
            return [
              createTextVNode("Jetzt Bewerben")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><main class="content"><section class="section"><h2 class="section-title">Warum die Fachhochschule Kiel?</h2><p class="intro-text"> Praxisnah studieren an einem der modernsten Campus Deutschlands. International vernetzt, innovativ, weltoffen \u2013 werde Teil unserer Community! </p><div class="cards"><div class="card"><h3>Karrierechancen</h3><p>Top-Ausbildung f\xFCr deinen erfolgreichen Start in Unternehmen weltweit.</p></div><div class="card"><h3>Campusleben</h3><p>Moderne Lernr\xE4ume, vielf\xE4ltige Freizeitangebote und ein wundersch\xF6ner Standort direkt an der Kieler F\xF6rde.</p></div><div class="card"><h3>Internationalit\xE4t</h3><p>Erlebe Auslandserfahrungen mit unseren Erasmus-Partnerhochschulen weltweit.</p></div></div></section><section class="info-section"><div class="info-content"><img${ssrRenderAttr("src", _imports_0)} alt="Campus FH Kiel" class="info-image"><div class="info-text"><h2>Campusleben</h2><p>Unser Campus bietet moderne Lernumgebungen und eine tolle Lage an der Schwentine.</p></div></div></section><section class="info-section"><div class="info-content"><img${ssrRenderAttr("src", _imports_1)} alt="Internationales Zentrum FH Kiel" class="info-image"><div class="info-text"><h2>Internationales Programm</h2><p>Studieren weltweit mit unseren Erasmus-Partnerschaften und dem Internationalen Zentrum in Kiel.</p></div></div></section><section class="info-section"><div class="info-content"><img${ssrRenderAttr("src", _imports_2)} alt="Karrierechancen FH Kiel" class="info-image"><div class="info-text"><h2>Karrierechancen</h2><p>Top-Ausbildung f\xFCr deinen erfolgreichen Start in Unternehmen weltweit. Besuche unsere Karriere-Events und starte durch!</p></div></div></section><section class="section faq"><h2 class="section-title">Fragen &amp; Antworten zum Studium</h2>`);
      _push(ssrRenderComponent(FAQ, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(__nuxt_component_0$1, null, null, _parent));
      _push(ssrRenderComponent(__nuxt_component_1, null, null, _parent));
      _push(`<div class="white-gap"></div></main>`);
      _push(ssrRenderComponent(__nuxt_component_2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BHvm-jfA.mjs.map
