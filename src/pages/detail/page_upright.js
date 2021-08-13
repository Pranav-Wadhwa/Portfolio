import { createApp } from "vue";
import App from "./Detail.vue";
import upright from "@/data/upright.js";

createApp(App, {
  project: upright
}).mount("#app");
