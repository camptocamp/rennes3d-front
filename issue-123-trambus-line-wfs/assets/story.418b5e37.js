import { N as createRouter, _ as __vitePreload, O as createWebHistory, P as createWebHashHistory, i as defineStore, r as ref, c as computed } from "./vendor.fb28610c.js";
import { h as histoireConfig } from "./GenericMountStory.c6866bf7.js";
const base = "/rennes3d-front/issue-123-trambus-line-wfs/";
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
      component: () => __vitePreload(() => import("./HomeView.b0e7e8b1.js"), true ? ["assets/HomeView.b0e7e8b1.js","assets/GenericMountStory.c6866bf7.js","assets/vendor.fb28610c.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.158c11d6.js"), true ? ["assets/StoryView.158c11d6.js","assets/vendor.fb28610c.js","assets/MobileOverlay.3ef2cd7f.js","assets/BaseEmpty.a29e5dc6.js","assets/state.e7d0e362.js","assets/GenericMountStory.c6866bf7.js","assets/events.df60ff59.js"] : void 0)
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
