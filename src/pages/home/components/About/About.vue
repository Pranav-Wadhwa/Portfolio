<template>
  <div class="About section">
    <div class="About-container">
      <div class="About-left">
        <h2 class="header About-header">About Me</h2>
        <img
          class="About-picture"
          alt="Pranav Wadhwa Profile Picture"
          :src="require('@/assets/' + picture)"
        />
        <p class="About-bio" v-html="bio" />
      </div>
      <div class="About-right">
        <h3 class="About-subheader">Professional Experience</h3>
        <div
          class="AboutSection-container"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <p class="AboutSection-title">
            {{ experience.title }} —
            <a class="AboutSection-url" v-bind:href="experience.companyURL">{{
              experience.company
            }}</a>
          </p>

          <p class="AboutSection-time">
            {{ experience.time }}
          </p>
        </div>

        <h3 class="About-subheader">Education</h3>
        <div
          class="AboutSection-container"
          v-for="(education, index) in educations"
          :key="index"
        >
          <p class="AboutSection-title">
            {{ education.school }}
          </p>

          <p class="AboutSection-time">
            {{ education.time }}
          </p>
        </div>

        <h3 class="About-subheader">Skills</h3>
        <div class="About-skillsContainer">
          <div
            class="About-skill"
            v-for="(skill, index) in skills"
            :key="index"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutData from "./about.js";

export default {
  name: "About",
  data: function() {
    return aboutData;
  }
};
</script>

<style lang="scss">
@import "./About.scss";
</style>
