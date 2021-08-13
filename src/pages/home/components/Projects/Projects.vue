<template>
  <div class="Projects section" id="Projects">
    <h2 class="header">My Work</h2>
    <h5 class="subheader">
      Take a look at some of my best personal and freelance projects.
    </h5>
    <div class="Projects-container">
      <Project
        v-for="project in projectsData"
        v-bind:key="project.refName"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";

export default {
  name: "Projects",
  components: {
    Project
  },
  props: ["projectsData"]
};
</script>

<style lang="scss">
@import "./Projects.scss";
</style>
