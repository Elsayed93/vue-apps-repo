<template>
  <div class="home-nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'Add' }">Add Restaurant</router-link>
    <!-- <router-link :to="{ name: 'Update', params: { id: 1 } }"
      >Update</router-link
    > -->
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