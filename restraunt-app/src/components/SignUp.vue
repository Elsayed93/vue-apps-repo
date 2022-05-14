<template>
  <div class="container">
    <div class="upper-subcontainer">
      <img
        src="../assets/logo.png"
        alt="logo"
        srcset=""
        class="logo img-thumbnail"
      />
      <h1>Sigin Up</h1>
    </div>

    <!-- form -->
    <div class="form-container">
      <div class="mb-3 col-md-6">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>

        <div id="email-error" class="er-color">
          {{ emailError }}
        </div>
      </div>

      <div class="mb-3 col-md-6">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
        <div id="email-error" class="er-color">
          {{ passwordError }}
        </div>
      </div>

      <div class="bottom-subcontainer">
        <button type="submit" class="btn btn-primary" @click="signUp">
          Sign Up
        </button>

        <router-link :to="{ name: 'Login' }" style="margin-left: 1rem">
          Log In Page
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      emailError: null,
      passwordError: null,
    };
  },

  mounted() {
    let user = localStorage.getItem("user_info");

    if (user) {
      this.$router.push({ name: "home" });
    }
  },

  methods: {
    signUp() {
      this.emailError = null;
      this.passwordError = null;

      // check email and password
      if (this.email == "") {
        this.emailError = "Please Enter Your Email";
      }
      console.log(this.emailError);

      if (this.password == "") {
        this.passwordError = "Please Enter Your Password";
      }

      console.log(this.emailError == null && this.passwordError == null);
      if (this.emailError == null && this.passwordError == null) {
        // Send a POST request
        let user = axios({
          method: "post",
          url: "http://localhost:3000/users",

          data: {
            email: this.email,
            password: this.password,
          },
        });

        user
          .then((res) => {
            localStorage.setItem("user_info", JSON.stringify(res));
          })
          .then(() => {
            this.$router.push({ name: "home" });
          });
      }
    },
  },
};
</script>

<style>
.er-color {
  color: red;
}
</style>