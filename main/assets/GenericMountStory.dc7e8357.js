import { X as defineAsyncComponent, Y as Comp4, Z as useDark, _ as useToggle, $ as markRaw, R as reactive, d as defineComponent, k as ref, a0 as watchEffect, o as openBlock, c as createBlock, m as mergeProps, a1 as resolveDynamicComponent, q as createCommentVNode } from "./vendor.4ccb373b.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/rennes3d-front/main/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./UiButton.story.2dca32cb.js"), true ? ["assets/UiButton.story.2dca32cb.js","assets/vendor.4ccb373b.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./UiLineDescription.story.45aeccce.js"), true ? ["assets/UiLineDescription.story.45aeccce.js","assets/vendor.4ccb373b.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./UiNetworkFigure.story.eed94a3f.js"), true ? ["assets/UiNetworkFigure.story.eed94a3f.js","assets/vendor.4ccb373b.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./UiTravelTime.story.98d38103.js"), true ? ["assets/UiTravelTime.story.98d38103.js","assets/vendor.4ccb373b.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
let files = [
  { "id": "src-components-ui-uibutton-story-vue", "path": ["UiButton"], "filePath": "src/components/ui/UiButton.story.vue", "story": { "id": "src-components-ui-uibutton-story-vue", "title": "UiButton", "group": "map", "layout": { "type": "grid", "width": 200 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-ui-uibutton-story-vue-0", "title": "Text Button", "icon": null, "iconColor": null }, { "id": "src-components-ui-uibutton-story-vue-1", "title": "Icon Button", "icon": "lucide:camera", "iconColor": null }] }, "supportPluginId": "vue3", "index": 0, component: Comp0 },
  { "id": "src-components-ui-uilinedescription-story-vue", "path": ["UiLineDescription"], "filePath": "src/components/ui/UiLineDescription.story.vue", "story": { "id": "src-components-ui-uilinedescription-story-vue", "title": "UiLineDescription", "group": "homepage", "layout": { "type": "grid", "width": 400 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1 },
  { "id": "src-components-ui-uinetworkfigure-story-vue", "path": ["UiNetworkFigure"], "filePath": "src/components/ui/UiNetworkFigure.story.vue", "story": { "id": "src-components-ui-uinetworkfigure-story-vue", "title": "UiNetworkFigure", "group": "homepage", "layout": { "type": "grid", "width": 200 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2 },
  { "id": "src-components-ui-uitraveltime-story-vue", "path": ["UiTravelTime"], "filePath": "src/components/ui/UiTravelTime.story.vue", "story": { "id": "src-components-ui-uitraveltime-story-vue", "title": "UiTravelTime", "group": "homepage", "layout": { "type": "grid", "width": 400 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3 },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/home/runner/work/rennes3d-front/rennes3d-front/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 4, component: Comp4 }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 4 }] }, { "group": true, "id": "homepage", "title": "Homepage", "children": [{ "title": "UiLineDescription", "index": 1 }, { "title": "UiNetworkFigure", "index": 2 }, { "title": "UiTravelTime", "index": 3 }] }, { "group": true, "id": "map", "title": "Map", "children": [{ "title": "UiButton", "index": 0 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/rennes3d-front/rennes3d-front/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" } }], "outDir": "/home/runner/work/rennes3d-front/rennes3d-front/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }, { "id": "homepage", "title": "Homepage" }, { "id": "map", "title": "Map" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "hash", "vite": { "base": "/rennes3d-front/main/" }, "viteIgnorePlugins": [], "setupFile": "/src/histoire-setup.ts" };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.4ccb373b.js").then((n) => n.aG), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor.4ccb373b.js").then((n) => n.aH), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
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
        mountComponent.value = markRaw(pluginModule.MountStory);
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
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};
