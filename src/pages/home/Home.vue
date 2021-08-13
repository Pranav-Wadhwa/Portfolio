<template>
  <div>
    <Hero />
    <Projects :projectsData="projectData" />
    <Reviews />
    <Contact />
  </div>
</template>

<script>
import Hero from "./components/Hero/Hero.vue";
import Projects from "./components/Projects/Projects.vue";
import Contact from "./components/Contact/Contact.vue";
import Reviews from "./components/Reviews/Reviews.vue";

export default {
  name: "App",
  components: {
    Hero,
    Projects,
    Reviews,
    Contact
  },
  props: ["projectData"]
};
</script>

<style lang="scss">
@import "@/styles/_starter.scss";
</style>
