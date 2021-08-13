<template>
  <div ref="indicator" class="HeroIndicator bounce">
    <p class="HeroIndicator-text">View my work</p>
    <img
      class="HeroIndicator-chevron"
      src="@/assets/icons/bottom-chevron.svg"
    />
  </div>
</template>

<script>
const delay = 2000;

export default {
  name: "HeroIndicator",
  mounted() {
    const indicator = this.$refs.indicator;

    indicator.style.opacity = "0";
    setTimeout(function() {
      indicator.style.opacity = "0.7";
    }, delay);
  }
};
</script>

<style lang="scss" scoped>
.HeroIndicator {
  margin-bottom: 32px;
  transition: opacity 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.HeroIndicator-text {
  color: $secondary;
  margin-bottom: 8px;
}

.HeroIndicator-chevron {
  height: 8px;
}

.bounce {
  animation: bounce-anim 2s ease 4s infinite;
  transform-origin: bottom;
}

@keyframes bounce-anim {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(0);
  }
  65% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
