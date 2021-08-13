<template>
  <div class="DetailBox">
    <p class="DetailBox-header">{{ detail.header }}</p>
    <p class="DetailBox-body">{{ detail.body }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["detail"]
};
</script>

<style lang="scss">
@import "./DetailBox.scss";
</style>
