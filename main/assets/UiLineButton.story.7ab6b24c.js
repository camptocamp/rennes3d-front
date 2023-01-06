import { aw as defineComponent, aL as computed, aA as openBlock, aE as createElementBlock, aM as normalizeClass, aH as createBaseVNode, aJ as toDisplayString, aB as createVNode, ax as resolveComponent, ay as createBlock, az as withCtx } from "./vendor.659cff80.js";
import { g as getColor } from "./color.85593954.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChevronArrowRight",
  props: {
    strokeColor: {
      type: String,
      default: "stroke-black"
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
  d: "M9 5.25L15.75 12L9 18.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(["stroke-2", $setup.styleClass]),
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2$1, 2);
}
_sfc_main$2.__file = "src/components/ui/icons/ChevronArrowRight.vue";
const ChevronArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/ChevronArrowRight.vue"]]);
const _sfc_main$1 = defineComponent({
  __name: "UiLineButton",
  props: {
    line: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    chevron: {
      type: Boolean,
      default: false
    },
    corner: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const buttonStyle = computed(() => {
      let bgColor = getColor("bg", props.line, 600);
      if (!props.active) {
        bgColor = "bg-white";
      }
      let cornerStyle = "rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl";
      cornerStyle = cornerStyle.replace(
        `rounded-${props.corner}-xl`,
        `rounded-${props.corner}-none`
      );
      return [bgColor, cornerStyle];
    });
    const textStyle = computed(() => {
      if (props.active) {
        return "text-white";
      }
      const textColor = getColor("text", props.line, 600);
      return [textColor];
    });
    const arrowStrokeColor = computed(() => {
      if (props.active) {
        return "stroke-white";
      }
      const strokeColor = getColor("stroke", props.line, 600);
      return strokeColor;
    });
    const __returned__ = { props, buttonStyle, textStyle, arrowStrokeColor, ChevronArrowRight };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([$setup.buttonStyle, "flex items-center py-0.5 px-2 gap-1 shadow-lg min-w-fit"])
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["font-bold font-dm-sans text-sm text-center items-center", $setup.textStyle])
    }, toDisplayString("T" + $setup.props.line), 3),
    createVNode($setup["ChevronArrowRight"], {
      class: normalizeClass({ hidden: !$setup.props.chevron }),
      strokeColor: $setup.arrowStrokeColor
    }, null, 8, ["class", "strokeColor"])
  ], 2);
}
_sfc_main$1.__file = "src/components/map/buttons/UiLineButton.vue";
const UiLineButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/map/buttons/UiLineButton.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLineButton.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiLineButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_2 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_3 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_4 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_5 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_6 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_7 = { class: "bg-gray-200 p-2 w-fit" };
const _hoisted_8 = { class: "bg-gray-200 p-2 w-fit" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Line Buttons",
    layout: {
      type: "grid",
      width: 200
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "T1 - Active - no chevron" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["UiLineButton"], {
              line: 1,
              chevron: false,
              active: true,
              corner: "tl"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "T2 - Active - chevron" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["UiLineButton"], {
              line: 2,
              chevron: true,
              active: true,
              corner: "tr"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "T3 - Active - chevron" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["UiLineButton"], {
              line: 3,
              chevron: true,
              active: true,
              corner: "br"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "T4 - Active - no chevron" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["UiLineButton"], {
              line: 4,
              chevron: false,
              active: true,
              corner: "bl"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "T1 - Inactive - chevron",
        class: "bg-red-400"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode($setup["UiLineButton"], {
              line: 1,
              chevron: true,
              active: false,
              corner: "tl"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "T2 - Inactive - no chevron" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6, [
            createVNode($setup["UiLineButton"], {
              line: 2,
              chevron: false,
              active: false,
              corner: "tr"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "T3 - Inactive - no chevron" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7, [
            createVNode($setup["UiLineButton"], {
              line: 3,
              chevron: false,
              active: false,
              corner: "br"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "T4 - Inactive - chevron",
        class: "bg-red-400"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_8, [
            createVNode($setup["UiLineButton"], {
              line: 4,
              chevron: true,
              active: false,
              corner: "bl"
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/map/buttons/UiLineButton.story.vue";
const UiLineButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/map/buttons/UiLineButton.story.vue"]]);
export {
  UiLineButton_story as default
};
