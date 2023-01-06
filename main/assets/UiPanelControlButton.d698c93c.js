import { aw as defineComponent, aL as computed, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aM as normalizeClass } from "./vendor.77a15fa7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const arrowTopLine = "/rennes3d-front/main/assets/arrow-top-line.597adf9a.svg";
const arrowRightLine = "/rennes3d-front/main/assets/arrow-right-line.d40afa1d.svg";
const arrowBottomLine = "/rennes3d-front/main/assets/arrow-bottom-line.bb37fce0.svg";
const arrowLeftLine = "/rennes3d-front/main/assets/arrow-left-line.d6fd437a.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPanelControlButton",
  props: {
    isOpen: {
      type: Boolean,
      default: true
    },
    anchorPosition: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const arrowIcon = computed(() => {
      switch (props.anchorPosition) {
        case "top": {
          return props.isOpen ? arrowTopLine : arrowBottomLine;
        }
        case "right": {
          return props.isOpen ? arrowRightLine : arrowLeftLine;
        }
        case "bottom": {
          return props.isOpen ? arrowBottomLine : arrowTopLine;
        }
        case "left": {
          return props.isOpen ? arrowLeftLine : arrowRightLine;
        }
        default:
          return "";
      }
    });
    const styleClass = computed(() => {
      switch (props.anchorPosition) {
        case "top": {
          return "rounded-b-xl w-12 h-8 py-2 px-4";
        }
        case "right": {
          return "rounded-l-xl w-8 h-12 py-4 px-2";
        }
        case "bottom": {
          return "rounded-t-xl w-12 h-8 py-2 px-4";
        }
        case "left": {
          return "rounded-r-xl w-8 h-12 py-4 px-2";
        }
        default:
          return "";
      }
    });
    const __returned__ = { props, arrowIcon, styleClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["flex justify-center items-center gap-4 bg-white shadow", $setup.styleClass])
  }, [
    createBaseVNode("img", { src: $setup.arrowIcon }, null, 8, _hoisted_1)
  ], 2);
}
_sfc_main.__file = "src/components/ui/UiPanelControlButton.vue";
const UiPanelControlButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiPanelControlButton.vue"]]);
export {
  UiPanelControlButton as U
};
