import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aH as createBaseVNode, aO as renderSlot, ax as resolveComponent, ay as createBlock, az as withCtx, aB as createVNode, aK as createTextVNode } from "./vendor.77a15fa7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "relative w-fit" };
const _hoisted_2 = ["href"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("a", {
      href: $setup.props.url,
      class: "font-normal text-xs text-neutral-500 before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 before:bg-neutral-500 hover:before:w-full hover:before:left-0",
      target: "_blank"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_2)
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiLinkFooter.vue";
const UiLinkFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLinkFooter.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiLinkFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Camptocamp.com");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Link Footer",
    layout: {
      type: "grid",
      width: 500
    },
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiLinkFooter"], { url: "https://camptocamp.com" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["url"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiLinkFooter.story.vue";
const UiLinkFooter_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiLinkFooter.story.vue"]]);
export {
  UiLinkFooter_story as default
};
