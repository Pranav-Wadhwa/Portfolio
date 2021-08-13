<template>
  <a
    class="Project"
    :style="{
      background: project.color
    }"
    :href="'/' + project.refName"
  >
    <div class="Project-bg" />

    <div class="Project-content">
      <div class="Project-header">
        <div class="Project-text">
          <h4 class="Project-title">{{ project.title }}</h4>
          <h5 class="Project-tagline">{{ project.tagline }}</h5>
        </div>
      </div>
      <div class="Project-spacer"></div>
      <div class="Project-imgContainer">
        <img
          class="Project-previewImg"
          :class="project.previewStyle"
          :src="require('@/assets/previews/' + project.refName + '.png')"
        />
      </div>
      <div class="Project-spacer"></div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Project",
  props: ["project"]
};
</script>

<style lang="scss">
@import "./Project.scss";
@import "./ProjectHoverPreviews.scss";
</style>
