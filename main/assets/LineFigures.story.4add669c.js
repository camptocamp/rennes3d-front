import { aw as defineComponent, ax as reactive, ay as onMounted, az as openBlock, aA as createElementBlock, aB as Fragment, aC as renderList, aD as createBaseVNode, aE as createVNode, aF as createBlock, aG as createCommentVNode, aH as resolveComponent, aI as withCtx } from "./vendor.fa8a4419.js";
import { a as apiClientService } from "./api.client.3234d4f4.js";
import { U as UiNetworkFigure } from "./UiNetworkFigure.172c185f.js";
import { U as UiVerticalSeparator } from "./UiVerticalSeparator.101cc3f4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./lines.f3fb9c7c.js";
import "./photo3.1c8fee27.js";
import "./informationIcon.70adcac2.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LineFigures",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      lineFigures: null
    });
    onMounted(async () => {
      state.lineFigures = await apiClientService.fetchLineFigure();
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
const _hoisted_1 = { class: "flex flex-row px-4 py-3 gap-3 bg-slate-50 border rounded-lg border-slate-100" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.lineFigures, (networkFigure, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: networkFigure.id
      }, [
        createBaseVNode("article", null, [
          createVNode($setup["UiNetworkFigure"], {
            figure: networkFigure.figure,
            description: networkFigure.description,
            unit: networkFigure.unit,
            icon: networkFigure.icon,
            moreInformation: networkFigure.moreInformation,
            class: "w-28 h-20"
          }, null, 8, ["figure", "description", "unit", "icon", "moreInformation"])
        ]),
        index + 1 < $setup.getLength($setup.state.lineFigures) ? (openBlock(), createBlock($setup["UiVerticalSeparator"], { key: 0 })) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ]);
}
_sfc_main$1.__file = "src/components/line/LineFigures.vue";
const LineFigures = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/line/LineFigures.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineFigures.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { LineFigures };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "LineFigure",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["LineFigures"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/line/LineFigures.story.vue";
const LineFigures_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/line/LineFigures.story.vue"]]);
export {
  LineFigures_story as default
};
