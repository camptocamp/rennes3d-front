import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode, aK as createTextVNode } from "./vendor.77a15fa7.js";
import { U as UiLinkPrimary } from "./UiLinkPrimary.b4d6307c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkPrimary.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiLinkPrimary };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Voir plus");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Voir plus");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Link Primary",
    layout: {
      type: "grid",
      width: 500
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default color" }, {
        default: withCtx(() => [
          createVNode($setup["UiLinkPrimary"], {
            url: "https://www.camptocamp.com/en",
            class: "w-fit"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["url"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Red 600" }, {
        default: withCtx(() => [
          createVNode($setup["UiLinkPrimary"], {
            url: "https://www.camptocamp.com/en",
            class: "w-fit",
            arrowStrokeColor: "stroke-red-600",
            underlineColor: "bg-red-600"
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["url"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLinkPrimary.story.vue";
const UiLinkPrimary_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLinkPrimary.story.vue"]]);
export {
  UiLinkPrimary_story as default
};
