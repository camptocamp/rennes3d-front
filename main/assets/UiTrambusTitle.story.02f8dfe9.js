import { aw as defineComponent, az as openBlock, aA as createElementBlock, aD as createBaseVNode, aE as createVNode, aH as resolveComponent, aF as createBlock, aI as withCtx } from "./vendor.fa8a4419.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const trambusLogo = "/rennes3d-front/main/assets/trambusLogo.8574c85f.png";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiTrambusLogo",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { trambusLogo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "h-14 w-14 flex flex-col justify-center" };
const _hoisted_2$1 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("img", { src: $setup.trambusLogo }, null, 8, _hoisted_2$1)
  ]);
}
_sfc_main$2.__file = "src/components/ui/UiTrambusLogo.vue";
const UiTrambusLogo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTrambusLogo.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiTrambusTitle",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiTrambusLogo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-start p-0 gap-2 w-4/5 h-28 font-poppins" };
const _hoisted_2 = { class: "flex flex-row items-start p-0 gap-2 h-14" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-bold text-4xl w-80 h-14 justify-center flex flex-col" }, " Reseau Trambus ", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "font-light text-base leading-6" }, " D\xE9couvrez et contribuez au futur r\xE9seau de transport de Rennes M\xE9tropole ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["UiTrambusLogo"]),
      _hoisted_3
    ]),
    _hoisted_4
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
