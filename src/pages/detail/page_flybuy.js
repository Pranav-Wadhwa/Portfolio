import { createApp } from "vue";
import App from "./Detail.vue";
import flybuy from "@/data/flybuy.js";

createApp(App, {
  project: flybuy
}).mount("#app");
