import { N as createRouter, _ as __vitePreload, O as createWebHistory, P as createWebHashHistory, i as defineStore, r as ref, c as computed } from "./vendor.1b083f15.js";
import { h as histoireConfig } from "./GenericMountStory.ef1759e7.js";
const base = "/rennes3d-front/main/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.aecfa06b.js"), true ? ["assets/HomeView.aecfa06b.js","assets/GenericMountStory.ef1759e7.js","assets/vendor.1b083f15.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.865d6cfd.js"), true ? ["assets/StoryView.865d6cfd.js","assets/vendor.1b083f15.js","assets/MobileOverlay.4b14c88d.js","assets/BaseEmpty.5e0d9e53.js","assets/state.cb714ecd.js","assets/GenericMountStory.ef1759e7.js","assets/events.8c3f6b7b.js"] : void 0)
    }
  ]
});
const useStoryStore = defineStore("story", () => {
  const stories = ref([]);
  function setStories(value) {
    stories.value = value;
  }
  const currentStory = computed(() => stories.value.find((s) => s.id === router.currentRoute.value.params.storyId));
  const currentVariant = computed(() => {
    var _a;
    return (_a = currentStory.value) == null ? void 0 : _a.variants.find((v) => v.id === router.currentRoute.value.query.variantId);
  });
  const maps = computed(() => {
    const storyMap = /* @__PURE__ */ new Map();
    const variantMap = /* @__PURE__ */ new Map();
    for (const story of stories.value) {
      storyMap.set(story.id, story);
      for (const variant of story.variants) {
        variantMap.set(`${story.id}:${variant.id}`, variant);
      }
    }
    return {
      stories: storyMap,
      variants: variantMap
    };
  });
  function getStoryById(id) {
    return maps.value.stories.get(id);
  }
  function getVariantById(idWithStoryId) {
    return maps.value.variants.get(idWithStoryId);
  }
  return {
    stories,
    setStories,
    currentStory,
    currentVariant,
    getStoryById,
    getVariantById
  };
});
export {
  base as b,
  router as r,
  useStoryStore as u
};
