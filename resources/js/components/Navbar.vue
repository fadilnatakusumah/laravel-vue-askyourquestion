<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        @click="toggleClass"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/forum">Forum</router-link>
        <router-link class="navbar-item" to="/">Ask Question</router-link>
        <router-link class="navbar-item" to="/">Category</router-link>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider">
                <a class="navbar-item">Report an issue</a>
              </div>
        </div>-->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <a class="button is-primary">
              <strong>Sign up</strong>
            </a>-->
            <button class="button is-light" v-if="isLoggedIn" @click="logoutHandler">Log out</button>
              <router-link class="button is-primary" v-else to='/login'>Log in</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn: User.isLoggedIn()
    };
  },
  methods: {
    toggleClass: function() {
      var burger = document.querySelector(".navbar-burger");
      var navbar = document.querySelector(".navbar-menu");
      burger.classList.toggle("is-active");
      navbar.classList.toggle("is-active");
    },
    logoutHandler() {
      const check = confirm("Are you sure you want to log out?");
      if (check) {
        alert("Logout");
        User.logout();
        return this.$router.push('/login');
      } else {
        alert("Cancel");
      }
    }
  },
  beforeUpdate(){
      console.log('is logged in?', this.isLoggedIn);
  }
};
</script>
<style scoped>
.navbar {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
