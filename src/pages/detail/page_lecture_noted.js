import { createApp } from "vue";
import App from "./Detail.vue";
import lecture from "@/data/lecture_noted.js";

createApp(App, {
  project: lecture
}).mount("#app");
