import { aw as defineComponent, ax as openBlock, ay as createElementBlock, aG as createBaseVNode, aH as toDisplayString, aB as resolveComponent, aC as createBlock, aD as withCtx, aE as createVNode } from "./vendor.1b083f15.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const arrowForward = "/rennes3d-front/main/assets/arrow-forward.cef30fe2.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiLineDescription",
  props: {
    id: Number,
    name: String,
    start: String,
    end: String,
    frequency: Number
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, arrowForward };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center px-3 py-0 gap-4 w-96 h-20 border-b border-solid border-b-neutral-300 font-dm-sans" };
const _hoisted_2 = { class: "flex items-center px-4 py-4 w-14 h-14 bg-neutral-300 rounded-2xl text-4xl" };
const _hoisted_3 = { class: "w-20 h-6 text-xl" };
const _hoisted_4 = { class: "flex items-center p-0 gap-3 w-44 h-4" };
const _hoisted_5 = { class: "w-24 h-4 text-sm leading-4" };
const _hoisted_6 = { class: "w-4 h-4" };
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "w-9 h-4 text-sm leading-4" };
const _hoisted_9 = { class: "flex flex-col items-start p-0 w-14 h-10" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs leading-4" }, "Toutes les", -1);
const _hoisted_11 = { class: "font-bold text-xl leading-7" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, toDisplayString($setup.props.id), 1),
    createBaseVNode("div", null, [
      createBaseVNode("div", _hoisted_3, toDisplayString($setup.props.name), 1),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString($setup.props.start), 1),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("img", { src: $setup.arrowForward }, null, 8, _hoisted_7)
        ]),
        createBaseVNode("div", _hoisted_8, toDisplayString($setup.props.end), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_9, [
      _hoisted_10,
      createBaseVNode("div", _hoisted_11, toDisplayString($setup.props.frequency) + " min", 1)
    ])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiLineDescription.vue";
const UiLineDescriptionVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLineDescription.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineDescription.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        id: 1,
        name: "Ligne T1",
        start: "Stade Rennais",
        end: "Br\xE9c\xE9",
        frequency: 7
      };
    }
    const __returned__ = { initState, UiLineDescriptionVue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiLineDescription",
    layout: {
      type: "grid",
      width: 400
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiLineDescriptionVue"], {
        id: state.id,
        name: state.name,
        start: state.start,
        end: state.end,
        frequency: state.frequency
      }, null, 8, ["id", "name", "start", "end", "frequency"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLineDescription.story.vue";
const UiLineDescription_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLineDescription.story.vue"]]);
export {
  UiLineDescription_story as default
};
