import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aB as createVNode, ax as resolveComponent, ay as createBlock, az as withCtx } from "./vendor.77a15fa7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { N as NetworkFigures } from "./NetworkFigures.a4d6dc20.js";
import "./api.client.3234d4f4.js";
import "./lines.f3fb9c7c.js";
import "./photo3.1c8fee27.js";
import "./UiNetworkFigure.85cea110.js";
import "./informationIcon.70adcac2.js";
import "./UiVerticalSeparator.695a9a3e.js";
const trambusIcon = "/rennes3d-front/main/assets/trambus-icon.3ac9cc07.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiTrambusLogo",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { trambusIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", {
    src: $setup.trambusIcon,
    alt: ""
  }, null, 8, _hoisted_1$1);
}
_sfc_main$2.__file = "src/components/ui/UiTrambusLogo.vue";
const UiTrambusLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTrambusLogo.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiTrambusTitle",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiTrambusLogo, NetworkFigures };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col p-0 gap-3 font-dm-sans" };
const _hoisted_2 = { class: "flex items-center p-0 gap-2.5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-bold text-3xl text-center" }, "R\xE9seau Trambus", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "font-medium text-sm text-neutral-800" }, " D\xE9couvrez et contribuez au futur r\xE9seau de transport de Rennes M\xE9tropole ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["UiTrambusLogo"], { class: "h-14 w-14" }),
      _hoisted_3
    ]),
    _hoisted_4,
    createVNode($setup["NetworkFigures"])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiTrambusTitle.vue";
const UiTrambusTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTrambusTitle.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTrambusTitle.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiTrambusTitle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiTrambusTitle",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiTrambusTitle"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiTrambusTitle.story.vue";
const UiTrambusTitle_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTrambusTitle.story.vue"]]);
export {
  UiTrambusTitle_story as default
};
