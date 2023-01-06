import { aw as defineComponent, az as openBlock, aA as createElementBlock, aF as createBlock, aP as resolveDynamicComponent, aG as createCommentVNode, aD as createBaseVNode, aO as renderSlot, aJ as toDisplayString, aQ as createStaticVNode, aH as resolveComponent, aI as withCtx, aE as createVNode, aK as createTextVNode } from "./vendor.fa8a4419.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    notification: {
      type: Number
    },
    icon: {
      type: Object
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = ["disabled"];
const _hoisted_2$2 = { class: "m-auto font-semibold" };
const _hoisted_3$2 = {
  key: 1,
  class: "m-auto mx-1 rounded bg-red-500 px-2 text-white"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", { disabled: $props.disabled }, [
    $props.icon ? (openBlock(), createBlock(resolveDynamicComponent($props.icon), {
      key: 0,
      role: "img",
      class: "m-auto mr-2"
    })) : createCommentVNode("v-if", true),
    createBaseVNode("span", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "default")
    ]),
    $props.notification ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString($props.notification), 1)) : createCommentVNode("v-if", true)
  ], 8, _hoisted_1$2);
}
_sfc_main$2.__file = "src/components/ui/UiButton.vue";
const UiButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiButton.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14",
  height: "14",
  width: "14"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g><path d="M1.5,2.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1v-9a1,1,0,0,0-1-1h-2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><line x1="0.5" y1="6.5" x2="13.5" y2="6.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></line><line x1="3.5" y1="0.5" x2="3.5" y2="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></line><line x1="10.5" y1="0.5" x2="10.5" y2="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></line><line x1="3.5" y1="2.5" x2="8.5" y2="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></line></g>', 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
_sfc_main$1.__file = "src/components/ui/icons/IconCalendar.vue";
const IconCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/icons/IconCalendar.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiButton.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        disabled: false,
        active: false
      };
    }
    const __returned__ = { initState, UiButton, IconCalendar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Planning du projet ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Bouton ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Bouton ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Bouton ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiButton",
    layout: {
      type: "grid",
      width: 300
    },
    group: "map"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Floating: Icon, text, notif",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-floating",
            icon: $setup.IconCalendar,
            notification: 3,
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Floating: Icon, text",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-floating",
            icon: $setup.IconCalendar,
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Floating: text",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-floating",
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "primary: Icon, text, notif",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-primary",
            icon: $setup.IconCalendar,
            notification: 3,
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "primary: Icon, text",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-primary",
            icon: $setup.IconCalendar,
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "primary: text",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-primary",
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "secondary: Icon, text, notif",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-secondary",
            icon: $setup.IconCalendar,
            notification: 3,
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "secondary: Icon, text",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-secondary",
            icon: $setup.IconCalendar,
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "secondary: text",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-regular-size ui-btn-secondary",
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Floating: small",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-small-size ui-btn-floating",
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Primary: small",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-small-size ui-btn-primary",
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Secondary: small",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(() => [
          createVNode($setup["UiButton"], {
            class: "ui-btn-small-size ui-btn-secondary",
            disabled: false
          }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiButton.story.vue";
const UiButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiButton.story.vue"]]);
export {
  UiButton_story as default
};
