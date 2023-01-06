import { aw as defineComponent, aA as openBlock, aE as createElementBlock, aB as createVNode, aH as createBaseVNode, aF as Fragment, aG as renderList, aM as normalizeClass, ax as resolveComponent, ay as createBlock, az as withCtx, aR as hstEvent } from "./vendor.77a15fa7.js";
import { U as UiPanelControlButton } from "./UiPanelControlButton.d698c93c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { p as photo1, a as photo2, b as photo3 } from "./photo3.1c8fee27.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiPhotoGalery",
  props: {
    galleryShown: {
      type: Boolean,
      default: true
    },
    photos: {
      type: Array,
      default: () => []
    }
  },
  emits: ["toggleEvent"],
  setup(__props, { expose, emit }) {
    expose();
    function sendEvent() {
      emit("toggleEvent");
    }
    const __returned__ = { emit, sendEvent, UiPanelControlButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-col items-center justify-end p-0" };
const _hoisted_2 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode($setup["UiPanelControlButton"], {
      "is-open": $props.galleryShown,
      "anchor-position": "bottom",
      onClick: $setup.sendEvent
    }, null, 8, ["is-open"]),
    createBaseVNode("div", {
      class: normalizeClass(["flex flex-row items-start p-3 gap-3 w-auto h-56 bg-white rounded-l-xl rounded-r-xl rounded-t-none rounded-b-none", { hidden: !$props.galleryShown }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.photos.slice(0, 3), (photo) => {
        return openBlock(), createElementBlock("img", {
          key: photo,
          src: photo,
          class: "w-64 h-52"
        }, null, 8, _hoisted_2);
      }), 128))
    ], 2)
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiPhotoGalery.vue";
const UiPhotoGalery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiPhotoGalery.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiPhotoGalery.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        galleryShown: true,
        photos: [photo1, photo2, photo3]
      };
    }
    const __returned__ = { initState, hstEvent, UiPhotoGalery };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-gray-100" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiPhotoGalery",
    layout: {
      type: "grid",
      width: 900
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["UiPhotoGalery"], {
          galleryShown: state.galleryShown,
          photos: state.photos,
          onToggleEvent: _cache[0] || (_cache[0] = ($event) => $setup.hstEvent("Toggle event fired", $event))
        }, null, 8, ["galleryShown", "photos"])
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiPhotoGalery.story.vue";
const UiPhotoGalery_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/rennes3d-front/rennes3d-front/src/components/ui/UiPhotoGalery.story.vue"]]);
export {
  UiPhotoGalery_story as default
};
