<template>
  <div>
    <header-component :title="title"></header-component>
    <div class="background-gray">
      <div class="container">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      title: "Welcome"
    };
  },
  mounted() {
    const { path } = this.$router.history.current;
    let getPath = path;

    getPath = getPath.substring(1, getPath.length);
    getPath = getPath.charAt(0).toUpperCase() + getPath.substring(1);
    this.title = getPath;
  }
};
</script>

<style scoped>
.background-gray {
  background-color: #f8f8f8;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
