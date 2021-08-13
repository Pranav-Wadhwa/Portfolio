import { createApp } from "vue";
import App from "./Detail.vue";
import simpl from "@/data/simpl.js";

createApp(App, {
  project: simpl
}).mount("#app");
