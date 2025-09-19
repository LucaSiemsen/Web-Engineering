import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0$1 = publicAssetsURL("/assets/studycheck-banner.jpeg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "empfehlung-banner",
    style: { "text-align": "center", "margin-top": "60px" }
  }, _attrs))}><img${ssrRenderAttr("src", _imports_0$1)} alt="Beliebteste Hochschule 2025" style="${ssrRenderStyle({ "max-width": "100%", "width": "500px", "border-radius": "8px", "box-shadow": "0 2px 8px rgba(0, 0, 0, 0.15)" })}"></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Empfehlungbanner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/assets/icons8-instagram-100.png");
const _imports_1 = publicAssetsURL("/assets/icons8-youtube-quadratisch-100.png");
const _imports_2 = publicAssetsURL("/assets/icons8-linkedin-100.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 style="${ssrRenderStyle({ "text-align": "center" })}">Unsere Sozialen Medien</h2><section class="social-links"><a href="https://www.instagram.com/fachhochschule_kiel/" target="_blank" aria-label="Instagram"><img${ssrRenderAttr("src", _imports_0)} alt="Instagram Icon"></a><a href="https://www.youtube.com/channel/UCtArkI5RpS0MpLf0jxqWsPg" target="_blank" aria-label="YouTube"><img${ssrRenderAttr("src", _imports_1)} alt="YouTube Icon"></a><a href="https://www.linkedin.com/school/fachhochschule-kiel/" target="_blank" aria-label="LinkedIn"><img${ssrRenderAttr("src", _imports_2)} alt="LinkedIn Icon"></a></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialMeda.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><p>© 2025 Hochschule Bewerbung | Fachhochschule Kiel</p></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_1 as a,
  __nuxt_component_2 as b
};
//# sourceMappingURL=Footer-D8HdEtin.js.map
