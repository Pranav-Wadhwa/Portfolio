<template>
  <div class="section Hero">
    <div class="Hero-spacer" />
    <div class="Hero-container">
      <p class="Hero-upperText">Hi, I'm</p>
      <div class="Hero-mainLine">
        <h1 class="Hero-header">Pranav Wadhwa.</h1>
      </div>
      <p class="Hero-desc">
        I’m a software engineer and a student at Virginia Tech. I have
        experience with both iOS and full-stack web app development as well as
        algorithm thinking and Artificial Intelligence. Feel free to reach out
        if you’re interested in working together!
      </p>
      <div class="Hero-ctaContainer">
        <a class="button Hero-cta Hero-cta" href="#contact" target="_self">
          <div class="Hero-ctaBorder" />
          <div class="Hero-ctaText">Get in touch</div>
          <div class="Hero-ctaBackground" />
        </a>
        <a
          class="button Hero-cta Hero-ctaUnfilled"
          href="#Projects"
          target="_self"
        >
          <div class="Hero-ctaBorder" />
          <div class="Hero-ctaText">View my work</div>
          <div class="Hero-ctaBackground" />
        </a>
      </div>
    </div>
    <div class="Hero-spacer" />
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
@import "./Hero.scss";
</style>
