<template>
  <div class="container">
    <div class="upper-subcontainer">
      <img
        src="../assets/logo.png"
        alt="logo"
        srcset=""
        class="logo img-thumbnail"
      />
      <h1>Sigin In</h1>
    </div>

    <!-- form -->
    <div class="form-container">
      <!-- errors -->
      <div class="mb-3 col-md-6 er-color">{{ wrongCredentials }}</div>
      <div class="mb-3 col-md-6">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>

      <div class="mb-3 col-md-6">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>

      <div class="bottom-subcontainer">
        <button class="btn btn-primary" @click="signIn">Login</button>
        <router-link :to="{ name: 'signUp' }" style="margin-left: 1rem">
          Sign Up page
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      wrongCredentials: null,
    };
  },

  mounted() {
    let user = localStorage.getItem("user_info");

    if (user) {
      this.$router.push({ name: "home" });
    }
  },

  methods: {
    async signIn() {
      // http://localhost:3000/users?email=jkashdjhs&password=jksdfhjsdhfjksdf
      this.wrongCredentials = null;

      // get user data
      let resultData = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      // check if this user is exist and api success
      if (resultData.data.length == 0) {
        this.wrongCredentials = "Wrong Credentials";
      } else if (resultData.data.length > 0 && resultData.status == 200) {
        localStorage.setItem("user_info", JSON.stringify(resultData.data));
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style>
</style>