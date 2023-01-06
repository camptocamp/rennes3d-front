import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.77a15fa7.js";
import { U as UiPanelControlButton } from "./UiPanelControlButton.d698c93c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPanelControlButton.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiPanelControlButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Panel Control Button",
    layout: {
      type: "grid",
      width: 500
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Attached to Left - Open" }, {
        default: withCtx(() => [
          createVNode($setup["UiPanelControlButton"], {
            isOpen: true,
            "anchor-position": "left"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Attached to Left - Closed" }, {
        default: withCtx(() => [
          createVNode($setup["UiPanelControlButton"], {
            isOpen: false,
            "anchor-position": "left"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Attached to Bottom - Open" }, {
        default: withCtx(() => [
          createVNode($setup["UiPanelControlButton"], {
            isOpen: true,
            "anchor-position": "bottom"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Attached to Bottom - Closed" }, {
        default: withCtx(() => [
          createVNode($setup["UiPanelControlButton"], {
            isOpen: false,
            "anchor-position": "bottom"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiPanelControlButton.story.vue";
const UiPanelControlButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiPanelControlButton.story.vue"]]);
export {
  UiPanelControlButton_story as default
};
