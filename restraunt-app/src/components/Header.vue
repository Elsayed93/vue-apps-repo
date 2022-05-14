<template>
  <div class="home-nav">
    <a href="#">Home</a>
    <a>Add Restaurant</a>
    <a>Update</a>
    <a href="#" @click.prevent="logout">Logout</a>
  </div>
  <h1>Header</h1>
</template>

<script>
export default {
  name: "Header",

  methods: {
    logout() {
      localStorage.removeItem("user_info");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
</style>