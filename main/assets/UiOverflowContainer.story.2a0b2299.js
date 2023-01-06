import { aw as defineComponent, aH as resolveComponent, aF as createBlock, aI as withCtx, az as openBlock, aE as createVNode, aD as createBaseVNode, aA as createElementBlock, aC as renderList, aB as Fragment, aJ as toDisplayString } from "./vendor.fa8a4419.js";
import { U as UiOverflowContainer } from "./UiOverflowContainer.6630f314.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiOverflowContainer.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiOverflowContainer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row items-start w-96 gap-2" };
const _hoisted_2 = { class: "" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Overflow Container",
    layout: {
      type: "grid",
      width: 500
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Test" }, {
        default: withCtx(() => [
          createVNode($setup["UiOverflowContainer"], null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(5, (index) => {
                  return createBaseVNode("div", {
                    class: "h-16 w-72 border-2 flex-none bg-green-400 flex justify-center items-center",
                    key: index
                  }, [
                    createBaseVNode("div", _hoisted_2, toDisplayString(index), 1)
                  ]);
                }), 64))
              ])
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
_sfc_main.__file = "src/components/ui/UiOverflowContainer.story.vue";
const UiOverflowContainer_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiOverflowContainer.story.vue"]]);
export {
  UiOverflowContainer_story as default
};
