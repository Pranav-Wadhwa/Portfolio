<template>
  <div class="Detail-container">
    <Nav />
    <h1 class="Detail-title">{{ project.title }}</h1>
    <h2 class="Detail-subtitle">{{ project.tagline }}</h2>
    <div class="Detail-linkContainer">
      <a
        class="Detail-link"
        v-for="link in project.links"
        v-bind:key="link.url"
        :href="link.url"
        :style="styleObject"
      >
        {{ link.text }}
      </a>
    </div>
    <img
      class="Detail-screenshots"
      :src="require('@/assets/screenshots/' + project.refName + '.png')"
    />
    <div class="DetailBox-container">
      <DetailBox
        v-for="detail in project.details"
        v-bind:key="detail.header"
        :detail="detail"
      />
    </div>
    <div
      class="Detail-section"
      v-for="description in project.descriptions"
      v-bind:key="description.header"
    >
      <h4 class="Detail-sectionHeader">{{ description.header }}</h4>
      <p class="Detail-sectionBody" v-html="description.body"></p>
    </div>
    <div class="Detail-section">
      <h4 class="Detail-sectionHeader">Tools Used</h4>
      <div class="Detail-toolsContainer">
        <p class="Detail-tool" v-for="tool in project.tools" :key="tool">
          {{ tool }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav.vue";
import DetailBox from "./components/DetailBox/DetailBox.vue";

export default {
  name: "App",
  components: {
    Nav,
    DetailBox
  },
  computed: {
    styleObject() {
      if (typeof this.project.colorLight != "undefined") {
        return {
          "--project-color": this.project.colorLight
        };
      }
      return {
        "--project-color": this.project.color
      };
    }
  },
  props: ["project"]
};
</script>

<style lang="scss">
@import "@/styles/_starter.scss";
@import "./Detail.scss";
</style>
