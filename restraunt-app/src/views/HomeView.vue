<template>
  <main>
    <div class="home-title">
      <Header />
      <Content page="Home"/>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";

export default {
  components: {
    Header,
    Content,
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
  /* width: fit-content; */
  text-align: center;
}

.content {
  margin-top: 10rem;
}

/* for header component */
.home-nav {
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
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