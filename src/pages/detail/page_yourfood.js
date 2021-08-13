import { createApp } from "vue";
import App from "./Detail.vue";
import yourfood from "@/data/yourfood.js";

createApp(App, {
  project: yourfood
}).mount("#app");
