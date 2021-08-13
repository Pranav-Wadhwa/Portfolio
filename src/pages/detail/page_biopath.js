import { createApp } from "vue";
import App from "./Detail.vue";
import biopath from "@/data/biopath.js";

createApp(App, {
  project: biopath
}).mount("#app");
