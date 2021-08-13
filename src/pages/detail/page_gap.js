import { createApp } from "vue";
import App from "./Detail.vue";
import gap from "@/data/gap.js";

createApp(App, {
  project: gap
}).mount("#app");
