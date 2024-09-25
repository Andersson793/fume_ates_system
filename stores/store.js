export const useWebsiteStore = defineStore("websiteStore", {
  state: () => ({
    id: useId(),
    currentPage: "Home",
    description: "",
  }),
});
