import { aw as defineComponent, az as openBlock, aA as createElementBlock, aD as createBaseVNode, aJ as toDisplayString, aG as createCommentVNode } from "./vendor.fa8a4419.js";
import { i as informationIcon } from "./informationIcon.70adcac2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiNetworkFigure",
  props: {
    figure: Number,
    description: String,
    unit: String,
    icon: String,
    moreInformation: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, informationIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col font-dm-sans" };
const _hoisted_2 = { class: "flex items-center p-0 gap-2" };
const _hoisted_3 = { class: "leading-8 grow font-bold" };
const _hoisted_4 = { class: "text-2xl" };
const _hoisted_5 = { class: "ml-1" };
const _hoisted_6 = {
  key: 0,
  class: "grow-0"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "flex items-center p-0" };
const _hoisted_9 = { class: "font-normal text-sm grow mr-1" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("span", _hoisted_4, toDisplayString($setup.props.figure), 1),
        createBaseVNode("span", _hoisted_5, toDisplayString($setup.props.unit), 1)
      ]),
      $setup.props.icon ? (openBlock(), createElementBlock("div", _hoisted_6, [
        createBaseVNode("img", {
          class: "w-9 h-9",
          src: $setup.props.icon
        }, null, 8, _hoisted_7)
      ])) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, toDisplayString($setup.props.description), 1),
      $setup.props.moreInformation ? (openBlock(), createElementBlock("div", _hoisted_10, [
        createBaseVNode("img", { src: $setup.informationIcon }, null, 8, _hoisted_11)
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main.__file = "src/components/ui/UiNetworkFigure.vue";
const UiNetworkFigure = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiNetworkFigure.vue"]]);
export {
  UiNetworkFigure as U
};
