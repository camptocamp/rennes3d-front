import { aw as defineComponent, ax as resolveComponent, ay as createBlock, az as withCtx, aA as openBlock, aB as createVNode } from "./vendor.77a15fa7.js";
import { N as NetworkFigures } from "./NetworkFigures.a4d6dc20.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./api.client.3234d4f4.js";
import "./lines.f3fb9c7c.js";
import "./photo3.1c8fee27.js";
import "./UiNetworkFigure.85cea110.js";
import "./informationIcon.70adcac2.js";
import "./UiVerticalSeparator.695a9a3e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NetworkFigures.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { NetworkFigures };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Network Figures",
    layout: {
      type: "grid",
      width: 450
    },
    group: "sidepanel"
  }, {
    default: withCtx(() => [
      createVNode($setup["NetworkFigures"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/NetworkFigures.story.vue";
const NetworkFigures_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/home/NetworkFigures.story.vue"]]);
export {
  NetworkFigures_story as default
};
