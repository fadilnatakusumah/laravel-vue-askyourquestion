<template>
  <div class="section" style="display: flex; justify-content: center">
    <div class="card">
      <form v-on:submit.prevent="loginHandler">
        <div class="card-content">
          <!-- <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
          </div>-->
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                v-model="form.email"
                required
                placeholder="Email input"
              >
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <!-- <span class="icon is-small is-right">
              <i class="fa fa-exclamation-triangle"></i>
              </span>-->
            </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="password"
                v-model="form.password"
                required
                placeholder="Password input"
              >
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
              <!-- <span class="icon is-small is-right">
              <i class="fa fa-exclamation-triangle"></i>
              </span>-->
            </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <button class="button is-primary" type="submit">Log in</button>
          </p>
          <!-- <p class="card-footer-item">
          <a class="button is-primary">Primary</a>
          </p>-->
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginHandler(event) {
      axios
        .post("/api/auth/login", this.form)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.card {
  width: 40%;
}
</style>
