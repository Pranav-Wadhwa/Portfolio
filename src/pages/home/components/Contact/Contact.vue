<template>
  <div class="Contact section" id="contact">
    <div class="Contact-container">
      <h2 class="header Contact-header">Contact</h2>
      <h5 class="subheader">
        Feel free to reach out if you're interested in working together!
      </h5>
      <div class="Contact-links">
        <a
          class="Contact-link"
          v-for="(contact, index) in contactInfo"
          :key="index"
          :href="contact.link"
        >
          <img
            class="Contact-icon"
            :src="require('@/assets/' + contact.icon)"
          />
          <div class="Contact-textBox">
            <p class="Contact-title">{{ contact.title }}</p>
            <p class="Contact-subtitle">{{ contact.subtitle }}</p>
          </div>
          <div class="Contact-spacer" />
          <img
            class="Contact-arrow"
            src="@/assets/icons/right-arrow-white.svg"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import contactData from "./contact.js";

export default {
  name: "Contact",
  data: function() {
    return contactData;
  }
};
</script>

<style lang="scss">
@import "./Contact.scss";
</style>
