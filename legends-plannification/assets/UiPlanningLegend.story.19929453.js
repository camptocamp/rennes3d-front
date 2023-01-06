var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, aM as normalizeClass, aH as createBaseVNode, aS as normalizeStyle, aJ as toDisplayString, ax as resolveComponent, ay as createBlock, az as withCtx, aB as createVNode } from "./vendor.26b648b1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiPlanningLegend",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    highlightedItemId: String
  },
  emits: ["update-line-planning-state"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const setLinePlanningState = (item) => {
      emit("update-line-planning-state", item);
    };
    function isHighlighted(item) {
      return props.highlightedItemId == null || props.highlightedItemId == item.id;
    }
    const __returned__ = { props, emit, setLinePlanningState, isHighlighted };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "h-44 w-48 flex flex-col bg-white rounded-lg shadow-lg" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "ml-3.5" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item.id,
        onClick: ($event) => $setup.setLinePlanningState(item),
        class: normalizeClass(["flex-1 flex items-center relative hover:font-medium mx-4 cursor-pointer", { "text-neutral-500": !$setup.isHighlighted(item) }])
      }, [
        createBaseVNode("div", {
          style: normalizeStyle({
            borderLeft: "5px",
            borderLeftStyle: "solid",
            borderLeftColor: $setup.isHighlighted(item) ? item.color : item.deemphasizedColor
          }),
          class: "flex shadow-lg"
        }, " \xA0 ", 4),
        createBaseVNode("div", _hoisted_3, toDisplayString(item.printValue), 1)
      ], 10, _hoisted_2);
    }), 128))
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiPlanningLegend.vue";
const UIPlanningLegend = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiPlanningLegend.vue"]]);
const _LinePlanningStateTypes = class {
  constructor(id, printValue, color, deemphasizedColor) {
    this.id = id;
    this.printValue = printValue;
    this.color = color;
    this.deemphasizedColor = deemphasizedColor;
  }
  toString() {
    return this.printValue;
  }
};
let LinePlanningStateTypes = _LinePlanningStateTypes;
__publicField(LinePlanningStateTypes, "UNSTARTED", new _LinePlanningStateTypes(
  "unStarted",
  "Non commenc\xE9",
  "#858585",
  "#bebebe"
));
__publicField(LinePlanningStateTypes, "UNDER_CONSTRUCTION", new _LinePlanningStateTypes(
  "underConstruction",
  "En travaux",
  "#F43F5E",
  "#FDA4AF"
));
__publicField(LinePlanningStateTypes, "CONSTRUCTION_FINISHED", new _LinePlanningStateTypes(
  "constructionFinished",
  "Travaux finalis\xE9s",
  "#FACC15",
  "#FEF08A"
));
__publicField(LinePlanningStateTypes, "COMMISIONING", new _LinePlanningStateTypes(
  "commisioning",
  "Mise en service",
  "#65A30D",
  "#BEF264"
));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPlanningLegend.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        items: [
          LinePlanningStateTypes.UNSTARTED,
          LinePlanningStateTypes.UNDER_CONSTRUCTION,
          LinePlanningStateTypes.CONSTRUCTION_FINISHED,
          LinePlanningStateTypes.COMMISIONING
        ]
      };
    }
    const __returned__ = { initState, UIPlanningLegend, LinePlanningStateTypes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UIPlanningLegend",
    layout: {
      type: "grid",
      width: 500
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "All selected",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UIPlanningLegend"], {
            items: state.items,
            "highlighted-item-id": void 0
          }, null, 8, ["items"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "One selected",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UIPlanningLegend"], {
            items: state.items,
            "highlighted-item-id": $setup.LinePlanningStateTypes.UNSTARTED.id
          }, null, 8, ["items", "highlighted-item-id"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiPlanningLegend.story.vue";
const UiPlanningLegend_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiPlanningLegend.story.vue"]]);
export {
  UiPlanningLegend_story as default
};
