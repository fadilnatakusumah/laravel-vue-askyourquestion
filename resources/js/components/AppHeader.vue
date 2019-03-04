<template>
  <div>
    <section class="hero is-small is-info">
      <div class="hero-body">
        <div class="container header">
          <div class="left-container">
            <h1 class="title">
              <router-link to="/">Ask Your Question!</router-link>
            </h1>
            <h2 class="subtitle">and feel free to answers anyone's question</h2>
          </div>
          <div class="right-container">
            <p class="title-text">{{title}}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <navbar-component></navbar-component>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
<style scoped>
.header {
  display: inline-flex;
}
.left-container{
  padding-right: 20px;
}
.right-container{
  padding-left: 20px;
  border-left: solid 5px white;
}
.title-text{
  font-size: 60px;
}
</style>



 