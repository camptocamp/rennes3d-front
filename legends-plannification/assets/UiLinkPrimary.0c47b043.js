import { aw as defineComponent, aL as computed, aA as openBlock, aE as createElementBlock, aM as normalizeClass, aH as createBaseVNode, aO as renderSlot, aB as createVNode } from "./vendor.26b648b1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IconArrow",
  props: {
    strokeColor: {
      type: String,
      default: "stroke-neutral-900"
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
  d: "M0.5 7H13.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 10.5L13.5 7L10 3.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = [
  _hoisted_1$1,
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass($setup.styleClass),
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_3, 2);
}
_sfc_main$1.__file = "src/components/ui/icons/IconArrow.vue";
const IconArrow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconArrow.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkPrimary",
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    arrowStrokeColor: {
      type: String,
      default: "stroke-neutral-900"
    },
    underlineColor: {
      type: String,
      default: "bg-neutral-900"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const styleClass = computed(() => {
      return `before:${props.underlineColor}`;
    });
    const __returned__ = { props, styleClass, IconArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["href", "title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: "flex pt-0 pr-0 pb-1 pl-0 gap-1 items-center grow-0 relative",
    href: $setup.props.url,
    target: "_blank",
    title: $setup.props.title
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["font-dm-sans text-base font-semibold before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0", $setup.styleClass])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    createVNode($setup["IconArrow"], {
      class: "w-5 h-5",
      strokeColor: $setup.props.arrowStrokeColor
    }, null, 8, ["strokeColor"])
  ], 8, _hoisted_1);
}
_sfc_main.__file = "src/components/ui/UiLinkPrimary.vue";
const UiLinkPrimary = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLinkPrimary.vue"]]);
export {
  UiLinkPrimary as U
};
