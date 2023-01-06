import { aw as defineComponent, az as openBlock, aA as createElementBlock, aO as renderSlot, aH as resolveComponent, aF as createBlock, aI as withCtx, aE as createVNode, aK as createTextVNode, aD as createBaseVNode } from "./vendor.fa8a4419.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiIconButton",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    disabled: $props.disabled,
    class: "shadow-lg w-12 h-12 bg-white items-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "src/components/ui/UiIconButton.vue";
const UiIconButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiIconButton.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiIconButton.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        disabled: false,
        active: false
      };
    }
    const __returned__ = { initState, UiIconButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Click ");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "12",
      cy: "13",
      r: "3"
    })
  ])
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "12",
      cy: "13",
      r: "3"
    })
  ])
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "pl-2" }, "Text", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiIconButton",
    layout: {
      type: "grid",
      width: 200
    },
    group: "map"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Text Button",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiIconButton"], {
            disabled: state.disabled,
            active: state.active
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 2
          }, 1032, ["disabled", "active"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Icon Button",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiIconButton"], {
            disabled: state.disabled,
            active: state.active
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 2
          }, 1032, ["disabled", "active"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Icon and text Button",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiIconButton"], {
            disabled: state.disabled,
            active: state.active
          }, {
            default: withCtx(() => [
              _hoisted_3,
              _hoisted_4
            ]),
            _: 2
          }, 1032, ["disabled", "active"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiIconButton.story.vue";
const UiIconButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiIconButton.story.vue"]]);
export {
  UiIconButton_story as default
};
