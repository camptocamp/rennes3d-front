import { aw as defineComponent, aN as ref, ay as onMounted, az as openBlock, aA as createElementBlock, aB as Fragment, aC as renderList, aD as createBaseVNode, aM as normalizeClass, aJ as toDisplayString, aU as pushScopeId, aV as popScopeId, aH as resolveComponent, aF as createBlock, aI as withCtx, aE as createVNode } from "./vendor.fa8a4419.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const UiTimeline_vue_vue_type_style_index_0_scoped_a17183b5_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiTimeline",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["selected-date"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    let circle = ref(null);
    let container = ref(null);
    let selectedIndexRef = ref(0);
    onMounted(() => {
      selectedIndexRef.value = props.selectedIndex;
      translateCircle(selectedIndexRef.value);
    });
    const translateCircle = (index) => {
      var _a, _b;
      selectedIndexRef.value = index;
      const circleSize = (_a = circle.value) == null ? void 0 : _a.getBoundingClientRect().width;
      const parentSize = (_b = container.value) == null ? void 0 : _b.getBoundingClientRect().width;
      if (!circleSize || !parentSize)
        return;
      const numberOfSections = props.items.length;
      const sectionWidth = parentSize / numberOfSections;
      const distance = Math.round(sectionWidth * (index + 0.5) - circleSize / 2);
      if (circle.value) {
        circle.value.style.left = `${distance}px`;
      }
    };
    const getDate = (index) => {
      const { year, semester } = props.items[index];
      if (year && semester) {
        return new Date(year, semester * 6, 1);
      }
      return void 0;
    };
    const toString = (timelineItem) => {
      return `Semestre ${timelineItem.semester} ${timelineItem.year}`;
    };
    const setselectedIndex = (index) => {
      selectedIndexRef.value = index;
      translateCircle(index);
      emit("selected-date", getDate(index));
    };
    const __returned__ = { props, emit, circle, container, selectedIndexRef, translateCircle, getDate, toString, setselectedIndex };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-a17183b5"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "w-[78rem] h-32 bg-white relative flex text-black",
  ref: "container"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-2 w-2 bg-gray-400 rounded-full" }, null, -1));
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = {
  class: "bottom-[calc(2rem-13px)] circle h-[30px] w-[30px] z-10 shadow border-gray-400 border-[0.2px] bg-white rounded-full absolute",
  ref: "circle"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: "flex-1 flex justify-center items-center relative pb-4 hover:font-medium"
      }, [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(["text-center cursor-pointer", [$props.selectedIndex === index ? "font-bold" : " "]]),
            onClick: () => $setup.setselectedIndex(index)
          }, [
            createBaseVNode("p", null, toDisplayString($setup.toString(item)), 1)
          ], 10, _hoisted_2)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["h-[0.05rem] w-full mt-4 bg-gray-400 flex items-center absolute bottom-8", [
            0 === index ? "first-step w-1/2 ml-[50%] !justify-start" : "justify-center",
            $props.items.length - 1 === index ? "last-step w-1/2 mr-[50%] !justify-end" : "justify-center"
          ]])
        }, _hoisted_4, 2)
      ]);
    }), 128)),
    createBaseVNode("div", _hoisted_5, null, 512)
  ], 512);
}
_sfc_main$1.__file = "src/components/ui/UiTimeline.vue";
const UiTimeline = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-a17183b5"], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTimeline.vue"]]);
const timeLineFixtures = () => [
  {
    semester: 1,
    year: 2025
  },
  {
    semester: 2,
    year: 2025
  },
  {
    semester: 1,
    year: 2026
  },
  {
    semester: 2,
    year: 2026
  },
  {
    semester: 1,
    year: 2027
  },
  {
    semester: 2,
    year: 2027
  },
  {
    semester: 1,
    year: 2028
  },
  {
    semester: 2,
    year: 2028
  },
  {
    semester: 1,
    year: 2029
  },
  {
    semester: 2,
    year: 2029
  },
  {
    semester: 1,
    year: 2030
  },
  {
    semester: 2,
    year: 2030
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTimeline.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        items: timeLineFixtures(),
        itemsPrototype: [
          {
            semester: 1,
            year: 2025
          },
          {
            semester: 2,
            year: 2025
          },
          {
            semester: 1,
            year: 2026
          },
          {
            semester: 2,
            year: 2026
          },
          {
            semester: 1,
            year: 2027
          }
        ]
      };
    }
    const __returned__ = { initState, UiTimeline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiTimeline",
    layout: {
      type: "grid",
      width: 1350
    },
    group: "homepage"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Current",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiTimeline"], {
            items: state.items
          }, null, 8, ["items"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "With diffrent items",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiTimeline"], {
            items: state.itemsPrototype
          }, null, 8, ["items"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiTimeline.story.vue";
const UiTimeline_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiTimeline.story.vue"]]);
export {
  UiTimeline_story as default
};
