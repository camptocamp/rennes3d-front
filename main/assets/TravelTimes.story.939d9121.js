import { aw as defineComponent, ax as reactive, ay as onMounted, az as openBlock, aA as createElementBlock, aD as createBaseVNode, aE as createVNode, aI as withCtx, aB as Fragment, aC as renderList, aF as createBlock, aK as createTextVNode, aH as resolveComponent } from "./vendor.fa8a4419.js";
import { a as apiClientService } from "./api.client.3234d4f4.js";
import { U as UiTravelTime } from "./UiTravelTime.88f75258.js";
import { U as UiOverflowContainer } from "./UiOverflowContainer.6630f314.js";
import { U as UiLinkMetis } from "./UiLinkMetis.385db8eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./lines.f3fb9c7c.js";
import "./photo3.1c8fee27.js";
import "./IconLine.feb74a00.js";
import "./informationIcon.70adcac2.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TravelTimes",
  setup(__props, { expose }) {
    expose();
    const state = reactive({
      travelTimes: null
    });
    onMounted(async () => {
      state.travelTimes = await apiClientService.fetchTravelTime();
    });
    const __returned__ = { state, UiTravelTime, UiOverflowContainer, UiLinkMetis };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center p-0 gap-2.5" };
const _hoisted_2 = { class: "flex flex-col items-start gap-3 pt-0 pr-9 pb-0 pl-0" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans font-bold text-lg leading-6" }, " Vos futurs temps de parcours ", -1);
const _hoisted_4 = { class: "flex flex-row items-start gap-2" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Voir plus");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createVNode($setup["UiOverflowContainer"], { class: "w-[402px]" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.travelTimes, (travelTime) => {
              return openBlock(), createBlock($setup["UiTravelTime"], {
                class: "w-72 flex-none",
                key: travelTime.line,
                newDuration: travelTime.new,
                oldDuration: travelTime.old,
                lineNumber: travelTime.line,
                startStation: travelTime.start,
                endStation: travelTime.end
              }, null, 8, ["newDuration", "oldDuration", "lineNumber", "startStation", "endStation"]);
            }), 128))
          ])
        ]),
        _: 1
      }),
      createVNode($setup["UiLinkMetis"], {
        arrowStrokeColor: "stroke-red-600",
        underlineColor: "bg-red-600"
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })
    ])
  ]);
}
_sfc_main$1.__file = "src/components/home/TravelTimes.vue";
const TravelTimes = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/home/TravelTimes.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TravelTimes.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { TravelTimes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "TravelTime",
    layout: {
      type: "grid",
      width: 500
    },
    group: "sidepanel"
  }, {
    default: withCtx(() => [
      createVNode($setup["TravelTimes"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/TravelTimes.story.vue";
const TravelTimes_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/home/TravelTimes.story.vue"]]);
export {
  TravelTimes_story as default
};
