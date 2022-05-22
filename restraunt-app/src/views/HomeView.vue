<template>
  <main class="container">
    <div class="home-title">
      <Header />
      <h2 v-if="userEmail">Hello {{ userEmail }}</h2>

      <div
        style="background-color: green; color: white"
        class="success-added"
        v-if="addedSuccessfully"
      >
        {{ addedSuccessfully }}
      </div>
      <!-- all restaurants -->
      <div class="all-restaurants">
        <div
          class="restaurant-box"
          v-for="rest in restaurants"
          :key="rest"
          style="display: inline-block; margin: 1rem"
        >
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">{{ rest.name }}</h5>
              <p class="card-text">
                {{ rest.address }}
              </p>
              <a href="#" class="card-link"> {{ rest.contact }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
// import Content from "../components/Content.vue";

export default {
  components: {
    Header,
    // Content,
  },
  data() {
    return {
      userEmail: null,
      restaurants: null,
      addedSuccessfully: null,
    };
  },
  mounted() {
    let user = localStorage.getItem("user_info");
    this.userEmail = JSON.parse(user)[0].email;

    if (!user) this.$router.push({ name: "Login" });

    //
    let added_success_message = localStorage.getItem("added-success");
    if (added_success_message) {
      this.addedSuccessfully = added_success_message;
      localStorage.removeItem("added-success");
    }

    // get all restaurants
    async function getUser(_this) {
      try {
        const response = await axios.get("http://localhost:3000/restaurants");
        console.log("rest", response);
        if (response.status) {
          console.log("this", _this);
          _this.restaurants = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    }

    getUser(this);
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

.success-added {
  background-color: green;
  color: white;
  padding: 0.5rem;
  /* width: fit-content; */
  width: 50%;
  position: relative;
  left: 6rem;
}
</style>