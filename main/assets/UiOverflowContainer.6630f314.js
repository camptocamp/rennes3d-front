import { aw as defineComponent, aN as ref, az as openBlock, aA as createElementBlock, aD as createBaseVNode, aO as renderSlot } from "./vendor.fa8a4419.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const leftArrow = "/rennes3d-front/main/assets/arrows-left.9f9ebcc8.svg";
const rightArrow = "/rennes3d-front/main/assets/arrows-right.34cf0823.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiOverflowContainer",
  setup(__props, { expose }) {
    expose();
    const scrollBar = ref(null);
    const currentScrollPosition = ref(0);
    function scroll(amount) {
      var _a, _b, _c, _d;
      const currentScroll = ((_a = scrollBar.value) == null ? void 0 : _a.scrollLeft) || 0;
      (_b = scrollBar.value) == null ? void 0 : _b.scrollTo({
        left: currentScroll + amount,
        behavior: "smooth"
      });
      const maxScroll = (((_c = scrollBar.value) == null ? void 0 : _c.scrollWidth) || 0) - (((_d = scrollBar.value) == null ? void 0 : _d.clientWidth) || 0);
      currentScrollPosition.value = currentScrollPosition.value.valueOf() + amount;
      if (currentScrollPosition.value < 0) {
        currentScrollPosition.value = 0;
      } else if (currentScrollPosition.value > maxScroll) {
        currentScrollPosition.value = maxScroll;
      }
    }
    const __returned__ = { scrollBar, currentScrollPosition, scroll, leftArrow, rightArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = {
  ref: "scrollBar",
  class: "flex p-0 gap-3 items-start overflow-x-auto scrollbar-hide"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ], 512),
    createBaseVNode("button", {
      class: "absolute z-10 bg-white w-9 h-9 shadow-lg top-1/2 left-2 transform -translate-y-1/2 rounded-lg flex items-start p-2.5",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.scroll(-250))
    }, [
      createBaseVNode("img", { src: $setup.leftArrow }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("button", {
      class: "absolute z-10 bg-white w-9 h-9 shadow-lg top-1/2 right-2 transform -translate-y-1/2 rounded-lg flex items-start p-2.5",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.scroll(250))
    }, [
      createBaseVNode("img", { src: $setup.rightArrow }, null, 8, _hoisted_4)
    ])
  ]);
}
_sfc_main.__file = "src/components/ui/UiOverflowContainer.vue";
const UiOverflowContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiOverflowContainer.vue"]]);
export {
  UiOverflowContainer as U
};
