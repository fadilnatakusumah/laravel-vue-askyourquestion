<template>
  <section class="section question">
    <!-- latest Question -->
    <div class="card">
      <div class="card-header">
        <p class="card-header-title title-latest">Latest Questions!</p>
      </div>
      <div class="card-content">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://neramac.com/wp-content/uploads/2018/04/dummy-profile-pic-1.jpg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <div>
                <strong>John Smith</strong>
                <!-- Name of user -->
                <!-- <small>@johnsmith</small> -->
                <small>31m</small>
                <!-- Time of question maded -->
                <br>
                <div class="latest-question">What the fuck am I doing with my life?</div>
                <!-- <small>
                    <span class="mr-4"><i class="fa fa-reply"></i> Reply </span>
                    <span><i class="fa fa-heart"></i> Like</span>
                </small>-->
              </div>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-reply"></i>
                  </span>
                </a>
                <!-- <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-retweet"></i>
                  </span>
                </a>-->
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-heart"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <!-- <div class="media-right">
            <button class="delete"></button>
          </div>-->
        </article>
      </div>
    </div>

    <!-- End of latest Question -->
    <!-- common question -->
    <div class="card card-common">
      <div class="card-header">
        <p class="card-header-title">Random questions</p>
      </div>
      <div class="card-content">
        <common-questions></common-questions>
        <common-questions></common-questions>
      </div>
    </div>
    <!-- end of common question -->
  </section>
</template>
<script>
import CommonQuestion from "./CommonQuestion";

export default {
  components: {
    "common-questions": CommonQuestion
  },
};
</script>
<style scoped>
.title-latest {
  font-size: 30px;
  font-weight: bold;
}
.question {
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.latest-question {
  font-size: 26px;
  font-weight: 600;
}
.common-question {
  font-size: 16px;
  font-weight: 600;
}
.card-common {
  margin-top: 15px;
}
.isLiked {
  color: red;
}
</style>

