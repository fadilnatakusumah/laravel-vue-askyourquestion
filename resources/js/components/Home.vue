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
      title: ""
    };
  },
  methods: {
    setUrl() {
      const { path } = this.$router.history.current;
      let getPath = path;
      getPath = getPath.substring(1, getPath.length);
      getPath = getPath.charAt(0).toUpperCase() + getPath.substring(1);
      this.title = getPath;
    }
  },
  beforeMount() {
    this.setUrl();
  },
  beforeUpdate() {
    this.setUrl();
  },
  watch: {
    title: function() {}
  }
  // methods: {
  //   setTitle() {
  //     const { path } = this.$router.history.current;
  //     let getPath = path;

  //     getPath = getPath.substring(1, getPath.length);
  //     getPath = getPath.charAt(0).toUpperCase() + getPath.substring(1);
  //     return getPath;
  //   }
  // },
};
</script>

<style scoped>
.background-gray {
  background-color: #f8f8f8;
  min-height: 400px;
}
.fade-enter-to,
.fade-leave-to {
  opacity: 1;
  transition: 1.5s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave {
  transition: 1.5s;
  opacity: 0;
}
</style>
