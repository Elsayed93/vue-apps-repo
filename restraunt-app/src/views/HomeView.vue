<template>
  <main>
    <div class="home-title">
      <Header />

      <div class="content">
        <h1>Home PAge , Welcome ...</h1>
      </div>
    </div>
  </main>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    SignUp,
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user_info");

    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>


<style>
.home-title {
  margin: 0rem auto;
  width: fit-content;
  text-align: center;
}

.content {
  margin-top: 10rem;
}

/* for header component */
.home-nav {
  display: flex;
  justify-content: space-between;
  background-color: #4e4e4e;
  color: white;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
}

.home-nav a {
  padding: 1rem;
  color: white;
  text-decoration: none;
}

.home-nav a:hover {
  color: white !important;
  background-color: grey;
  text-decoration: none;
}
</style>