import { createApp } from "vue";
import App from "./Detail.vue";
import delfi from "@/data/delfi.js";

createApp(App, {
  project: delfi
}).mount("#app");
