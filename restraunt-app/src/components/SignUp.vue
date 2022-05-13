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

      <button type="submit" class="btn btn-primary" @click="signUp">
        Submit
      </button>
    </div>
  </div>
  <div>
    <p>{{ userInfo.email }}</p>
    <p>{{ userInfo.password }}</p>
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
      userInfo: {},
    };
  },

  methods: {
    signUp() {
      console.log("signup", this.email, this.password);
      // Send a POST request
      let user = axios({
        method: "post",
        url: "http://localhost:3000/users",

        data: {
          email: this.email,
          password: this.password,
        },
      });

      user.then((res) => {
        console.log(res);
        localStorage.setItem("user_info", JSON.stringify(res));
      });

      let userInfo = localStorage.getItem("user_info");
      this.userInfo = JSON.parse(userInfo).data;
    },
  },
};
</script>

<style>
.upper-subcontainer {
  margin: 5rem auto 0;
  /* margin-top: 5rem; */
  /* border: solid; */
  width: 50%;
  text-align: center;
}

.logo {
  width: 20%;
}

.form-container {
  position: relative;
  left: 325px;
  margin-top: 5rem;
}
</style>