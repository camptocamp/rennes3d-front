import { aw as defineComponent, aL as computed, az as openBlock, aA as createElementBlock, aM as normalizeClass, aD as createBaseVNode, aE as createVNode, aJ as toDisplayString, aH as resolveComponent, aF as createBlock, aI as withCtx } from "./vendor.fa8a4419.js";
import { I as IconLine } from "./IconLine.feb74a00.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IconTwoDirectionArrow",
  props: {
    strokeColor: {
      type: String,
      default: "stroke-neutral-400"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const styleClass = computed(() => {
      return props.strokeColor;
    });
    const __returned__ = { props, styleClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.5 7H0.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.5 4L0.5 7L3.5 10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10.5 4L13.5 7L10.5 10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_1$1,
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: normalizeClass($setup.styleClass)
  }, _hoisted_4$1, 2);
}
_sfc_main$2.__file = "src/components/ui/icons/IconTwoDirectionArrow.vue";
const IconTwoDirectionArrow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconTwoDirectionArrow.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiLineDescription",
  props: {
    line: {
      type: Number,
      required: true
    },
    name: String,
    start: String,
    end: String,
    frequency: Number
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, IconLine, IconTwoDirectionArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center px-0 py-3 gap-3 font-dm-sans" };
const _hoisted_2 = { class: "flex flex-col items-start p-0 grow" };
const _hoisted_3 = { class: "text-base font-bold" };
const _hoisted_4 = { class: "flex items-center p-0 gap-2" };
const _hoisted_5 = { class: "text-sm font-normal text-neutral-800" };
const _hoisted_6 = { class: "text-sm font-normal text-neutral-800" };
const _hoisted_7 = { class: "flex flex-col items-start p-0 px-2 py-3 border border-slate-200 rounded" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs text-neutral-700 font-normal" }, "Toutes les", -1);
const _hoisted_9 = { class: "font-bold text-sm text-neutral-800" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["IconLine"], {
      line: $props.line,
      size: "xl"
    }, null, 8, ["line"]),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, toDisplayString($setup.props.name), 1),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString($setup.props.start), 1),
        createVNode($setup["IconTwoDirectionArrow"]),
        createBaseVNode("div", _hoisted_6, toDisplayString($setup.props.end), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_7, [
      _hoisted_8,
      createBaseVNode("div", _hoisted_9, toDisplayString($setup.props.frequency) + " min ", 1)
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
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["UiLineDescriptionVue"], {
        line: state.id,
        name: state.name,
        start: state.start,
        end: state.end,
        frequency: state.frequency
      }, null, 8, ["line", "name", "start", "end", "frequency"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLineDescription.story.vue";
const UiLineDescription_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLineDescription.story.vue"]]);
export {
  UiLineDescription_story as default
};
