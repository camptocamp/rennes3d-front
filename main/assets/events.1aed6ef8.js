import { i as defineStore, E as reactive, r as ref, k as watch } from "./vendor.77a15fa7.js";
import { u as useStoryStore } from "./story.5ea2f54d.js";
import "./GenericMountStory.1fbd32a3.js";
const useEventsStore = defineStore("events", () => {
  const storyStore = useStoryStore();
  const events = reactive([]);
  const unseen = ref(0);
  function addEvent(event) {
    events.push(event);
    unseen.value++;
  }
  function reset() {
    events.length = 0;
    unseen.value = 0;
  }
  watch(() => {
    var _a;
    return (_a = storyStore.currentVariant) == null ? void 0 : _a.id;
  }, () => {
    reset();
  });
  return {
    addEvent,
    reset,
    events,
    unseen
  };
});
export {
  useEventsStore
};
