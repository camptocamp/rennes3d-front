import { ar as defineComponent, as as openBlock, at as createElementBlock, aB as createBaseVNode, aC as toDisplayString, av as normalizeClass, aw as resolveComponent, ax as createBlock, ay as withCtx, az as createVNode } from "./vendor.4ccb373b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiTravelTime",
  props: {
    newDuration: Number,
    oldDuration: Number,
    lineNumber: Number,
    startStation: String,
    endStation: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row items-center px-0 py-12 gap-2.5 w-80 h-20 bg-neutral-200 rounded-md" };
const _hoisted_2 = { class: "box-border flex flex-col justify-center items-start p-0 w-24 h-20 border-r border-r-neutral-300 border-solid" };
const _hoisted_3 = { class: "h-8 w-6 flex gap-1 items-baseline flex-row pl-3" };
const _hoisted_4 = { class: "text-sm leading-8 font-bold font-poppins" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs leading-4 font-medium font-poppins" }, "min", -1);
const _hoisted_6 = { class: "flex flex-col items-start h-7 w-16 pl-3" };
const _hoisted_7 = { class: "w-20 h-4 font-poppins not-italic font-medium text-xs leading-4 bg-neutral-200" };
const _hoisted_8 = { class: "flex flex-row items-center px-2 py-4 w-9 h-7 bg-neutral-300 rounded-2xl" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "box-border w-2 h-2 bg-white border-2 border-solid border-black origin-center rotate-90 rounded-full" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "box-border w-2 h-2 bg-white border-2 border-solid border-black origin-center rotate-90 rounded-full" }, null, -1);
const _hoisted_11 = [
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = { class: "flex flex-col items-start p-0 gap-1 w-28 h-12" };
const _hoisted_13 = { class: "flex flex-col justify-center items-start p-0 gap-1 w-28 h-12" };
const _hoisted_14 = { class: "w-28 h-5 font-poppins not-italic font-medium text-sm leading-5 text-black" };
const _hoisted_15 = { class: "w-28 h-5 font-poppins not-italic font-medium text-sm leading-5 text-black" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, toDisplayString($setup.props.newDuration), 1),
        _hoisted_5
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, " au lie de " + toDisplayString($setup.props.oldDuration), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_8, " T" + toDisplayString($setup.props.lineNumber), 1),
    createBaseVNode("div", {
      class: normalizeClass(["flex flex-row items-start p-0 gap-5 w-9 h-2 rounded origin-center rotate-90", "bg-t" + $setup.props.lineNumber + "-line"])
    }, _hoisted_11, 2),
    createBaseVNode("div", _hoisted_12, [
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("div", _hoisted_14, toDisplayString($setup.props.startStation), 1),
        createBaseVNode("div", _hoisted_15, toDisplayString($setup.props.endStation), 1)
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiTravelTime.vue";
const UiTravelTime = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTravelTime.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTravelTime.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        newDuration: 15,
        oldDuration: 40,
        lineNumber: 1,
        startStation: "JF Kennedy",
        endStation: "Br\xE9c\xE9"
      };
    }
    const __returned__ = { initState, UiTravelTime };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiTravelTime",
    layout: {
      type: "grid",
      width: 400
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiTravelTime"], {
        newDuration: state.newDuration,
        oldDuration: state.oldDuration,
        lineNumber: state.lineNumber,
        startStation: state.startStation,
        endStation: state.endStation
      }, null, 8, ["newDuration", "oldDuration", "lineNumber", "startStation", "endStation"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiTravelTime.story.vue";
const UiTravelTime_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTravelTime.story.vue"]]);
export {
  UiTravelTime_story as default
};
