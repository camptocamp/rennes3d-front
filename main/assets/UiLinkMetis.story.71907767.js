import { aw as defineComponent, aH as resolveComponent, aF as createBlock, aI as withCtx, az as openBlock, aE as createVNode, aK as createTextVNode } from "./vendor.fa8a4419.js";
import { U as UiLinkMetis } from "./UiLinkMetis.385db8eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkMetis.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiLinkMetis };
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
    title: "Link Metis",
    layout: {
      type: "grid",
      width: 500
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default color" }, {
        default: withCtx(() => [
          createVNode($setup["UiLinkMetis"], { class: "w-fit" }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Red 600" }, {
        default: withCtx(() => [
          createVNode($setup["UiLinkMetis"], {
            class: "w-fit",
            arrowStrokeColor: "stroke-red-600",
            underlineColor: "bg-red-600"
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLinkMetis.story.vue";
const UiLinkMetis_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLinkMetis.story.vue"]]);
export {
  UiLinkMetis_story as default
};
