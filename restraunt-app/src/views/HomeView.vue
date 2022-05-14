<template>
  <main>
    <div class="home-title">
      <h1>Home PAge , Welcome ...</h1>
    </div>
  </main>
</template>

<script>
import SignUp from "../components/SignUp.vue";

export default {
  components: {
    SignUp,
  },
  mounted() {
    let user = localStorage.getItem("user_info");

    if (!user) {
      this.$router.push({ name: "signUp" });
    }
  },
};
</script>


<style>
.home-title {
  margin: 10rem auto 0;
  width: fit-content;
  text-align: center;
}
</style>