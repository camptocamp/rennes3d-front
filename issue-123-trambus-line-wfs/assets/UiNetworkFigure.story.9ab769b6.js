import { aw as defineComponent, ax as openBlock, ay as createElementBlock, aG as createBaseVNode, aH as toDisplayString, aB as resolveComponent, aC as createBlock, aD as withCtx, aE as createVNode } from "./vendor.fb28610c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiNetworkFigure",
  props: {
    figure: Number,
    description: String,
    unit: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-32 h-24" };
const _hoisted_2 = { class: "text-black font-bold font-poppins not-italic leading-none" };
const _hoisted_3 = { class: "text-4xl px-1" };
const _hoisted_4 = { class: "text-base px-1" };
const _hoisted_5 = { class: "text-base text-black font-medium font-poppins not-italic leading-none" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("span", _hoisted_3, toDisplayString($setup.props.figure), 1),
      createBaseVNode("span", _hoisted_4, toDisplayString($setup.props.unit), 1)
    ]),
    createBaseVNode("div", _hoisted_5, toDisplayString($setup.props.description), 1)
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiNetworkFigure.vue";
const UiNetworkFigure = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiNetworkFigure.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiNetworkFigure.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        figure: 128,
        description: "New lines",
        unit: "km"
      };
    }
    const __returned__ = { initState, UiNetworkFigure };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiNetworkFigure",
    layout: {
      type: "grid",
      width: 200
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiNetworkFigure"], {
        figure: state.figure,
        description: state.description,
        unit: state.unit
      }, null, 8, ["figure", "description", "unit"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiNetworkFigure.story.vue";
const UiNetworkFigure_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiNetworkFigure.story.vue"]]);
export {
  UiNetworkFigure_story as default
};
