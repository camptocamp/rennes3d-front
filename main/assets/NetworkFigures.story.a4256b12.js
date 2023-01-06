import { aw as defineComponent, ax as reactive, ay as onMounted, az as openBlock, aA as createElementBlock, aB as Fragment, aC as renderList, aD as createBaseVNode, aE as createVNode, aF as createBlock, aG as createCommentVNode, aH as resolveComponent, aI as withCtx } from "./vendor.a0de00eb.js";
import { a as apiClientService, U as UiVerticalSeparator } from "./UiVerticalSeparator.f96ac9d6.js";
import { U as UiNetworkFigure } from "./UiNetworkFigure.cbb02c71.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./photo3.1c8fee27.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NetworkFigures",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      networkFigures: null
    });
    onMounted(async () => {
      state.networkFigures = await apiClientService.fetchNetworkFigure();
    });
    function getLength(networkFigures) {
      if (networkFigures == null) {
        return 0;
      }
      return networkFigures.length;
    }
    const __returned__ = { state, getLength, UiNetworkFigure, UiVerticalSeparator };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row px-4 py-3 gap-3 bg-slate-50 border rounded-lg border-slate-100 items-center" };
const _hoisted_2 = { class: "w-[110px] grow" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.networkFigures, (networkFigure, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: networkFigure.id
      }, [
        createBaseVNode("article", _hoisted_2, [
          createVNode($setup["UiNetworkFigure"], {
            figure: networkFigure.figure,
            description: networkFigure.description,
            unit: networkFigure.unit,
            icon: networkFigure.icon,
            moreInformation: networkFigure.moreInformation
          }, null, 8, ["figure", "description", "unit", "icon", "moreInformation"])
        ]),
        index + 1 < $setup.getLength($setup.state.networkFigures) ? (openBlock(), createBlock($setup["UiVerticalSeparator"], { key: 0 })) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ]);
}
_sfc_main$1.__file = "src/components/home/NetworkFigures.vue";
const NetworkFigures = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/home/NetworkFigures.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NetworkFigures.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { NetworkFigures };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Network Figures",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage"
  }, {
    default: withCtx(() => [
      createVNode($setup["NetworkFigures"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/NetworkFigures.story.vue";
const NetworkFigures_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/home/NetworkFigures.story.vue"]]);
export {
  NetworkFigures_story as default
};
