<template>
  <div class="section Reviews">
    <h2 class="header">Testimonials</h2>
    <h5 class="subheader">
      Reviews from some of my past clients and colleagues:
    </h5>
    <div class="Reviews-container" ref="container">
      <div
        class="Review-container"
        v-for="review in reviews"
        :key="review.reviewer"
        ref="reviewContainers"
      >
        <div class="Review-textContainer">
          <span class="Review-quote">“</span>
          <p class="Review-text" v-html="review.review"></p>
        </div>
        <h5 class="Review-reviewerName">– {{ review.reviewer }}</h5>
        <h6 class="Review-reviewerTitle" v-html="review.reviewerTitle" />
      </div>
    </div>
    <div class="Review-bottomContainer">
      <button
        class="Review-button Review-leftButton"
        @click="leftButtonTapped"
        ref="leftButton"
      >
        <img src="@/assets/icons/left-arrow-white.svg" />
      </button>
      <p class="Review-progress" ref="progressLabel"></p>
      <button
        class="Review-button Review-rightButton"
        @click="rightButtonTapped"
        ref="rightButton"
      >
        <img src="@/assets/icons/right-arrow-white.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import reviewData from "./reviews.js";

const numberOfReviews = reviewData.reviews.length;
let reviewIndex = 0;

function leftButtonTapped() {
  reviewIndex = Math.max(0, reviewIndex - 1);
  updateUI.call(this);
}

function rightButtonTapped() {
  reviewIndex = Math.min(numberOfReviews - 1, reviewIndex + 1);
  updateUI.call(this);
}

function updateUI() {
  this.$refs.progressLabel.innerText = `${reviewIndex + 1}/${numberOfReviews}`;
  this.$refs.leftButton.disabled = reviewIndex == 0;
  this.$refs.rightButton.disabled = reviewIndex == numberOfReviews - 1;
  const firstReview = this.$refs.container.children[0];
  firstReview.style.marginLeft = `-${reviewIndex * 100}%`;
}

export default {
  name: "Reviews",
  data: () => {
    return reviewData;
  },
  methods: {
    leftButtonTapped,
    rightButtonTapped
  },
  mounted: updateUI
};
</script>

<style lang="scss">
@import "./Reviews.scss";
</style>
