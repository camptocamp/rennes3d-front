import { aw as defineComponent, aH as resolveComponent, aF as createBlock, aI as withCtx, az as openBlock, aE as createVNode } from "./vendor.fa8a4419.js";
import { I as IconLine } from "./IconLine.feb74a00.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconLine.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { IconLine };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "LineIcon",
    layout: {
      type: "grid",
      width: 200
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Small" }, {
        default: withCtx(() => [
          createVNode($setup["IconLine"], {
            line: 1,
            size: "s"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Medium" }, {
        default: withCtx(() => [
          createVNode($setup["IconLine"], {
            line: 2,
            size: "m"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Large" }, {
        default: withCtx(() => [
          createVNode($setup["IconLine"], {
            line: 3,
            size: "l"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Extra Large" }, {
        default: withCtx(() => [
          createVNode($setup["IconLine"], {
            line: 4,
            size: "xl"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/icons/IconLine.story.vue";
const IconLine_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconLine.story.vue"]]);
export {
  IconLine_story as default
};
