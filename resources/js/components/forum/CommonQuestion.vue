<template>
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
          <div class="common-question">What the fuck am I doing with my life?</div>
        </div>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small">
              <i class="fa fa-reply" title="Reply"></i>
            </span>
          </a>
          <a class="level-item">
            <span class="icon is-small">
              <i class="fa fa-heart liked" @click="likeQuestion" title="Like"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
    <!-- <div class="media-right">
            <button class="delete"></button>
    </div>-->
  </article>
</template>
<script>
export default {
  methods: {
    likeQuestion(event) {
      //need Id parameter
      console.log(event);
      $(event.target).toggleClass("isLiked");
      // event.originalTarget.classList.toggleClass('liked')
    }
  }
};
</script>

