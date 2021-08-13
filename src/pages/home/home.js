import { createApp } from "vue";
import App from "./Home.vue";

import simpl from "@/data/simpl.js";
import gap from "@/data/gap.js";
import yourfood from "@/data/yourfood.js";
import biopath from "@/data/biopath.js";
import upright from "@/data/upright.js";
import lecture from "@/data/lecture_noted.js";
import delfi from "@/data/delfi.js";
import flybuy from "@/data/flybuy.js";

const projectData = [
  upright,
  yourfood,
  simpl,
  lecture,
  gap,
  biopath,
  delfi,
  flybuy
];

createApp(App, {
  projectData
}).mount("#app");
