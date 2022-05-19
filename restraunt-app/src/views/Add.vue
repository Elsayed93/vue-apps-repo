<template>
  <main>
    <div class="home-title">
      <Header />
      <Content page="Add"/> 
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";

export default {
  name: "Add",
  components: {
    Header,
    Content
  },
  mounted() {
    let user = localStorage.getItem("user_info");

    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>