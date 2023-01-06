import { b as clientSupportPlugins } from "./GenericMountStory.9600b150.js";
import { d as defineComponent, r as ref, W as watchEffect, o as openBlock, q as createBlock, X as mergeProps, Y as resolveDynamicComponent, h as createCommentVNode, V as markRaw, v as isRef, a as unref } from "./vendor.fa8a4419.js";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericRenderStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.RenderStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
const isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
  const unwrappedValue = isRef(val) ? unref(val) : val;
  if (typeof unwrappedValue === "symbol") {
    return unwrappedValue.toString();
  }
  if (!isObject(unwrappedValue)) {
    return unwrappedValue;
  }
  if (seen.has(unwrappedValue)) {
    return seen.get(unwrappedValue);
  }
  if (Array.isArray(unwrappedValue)) {
    const result = [];
    seen.set(unwrappedValue, result);
    let list = unwrappedValue.map((value) => toRawDeep(value, clean, seen));
    if (clean) {
      list = list.filter((value) => typeof value !== "function");
    }
    result.push(...list);
    return result;
  } else {
    const result = {};
    seen.set(unwrappedValue, result);
    toRawObject(unwrappedValue, result, clean, seen);
    return result;
  }
}
const toRawObject = (obj, target, clean = false, seen = /* @__PURE__ */ new WeakMap()) => {
  Object.keys(obj).forEach((key) => {
    if (clean && typeof obj[key] === "function") {
      return;
    }
    target[key] = toRawDeep(obj[key], clean, seen);
  });
};
export {
  _sfc_main as _,
  toRawDeep as t
};
