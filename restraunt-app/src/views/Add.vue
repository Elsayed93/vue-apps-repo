<template>
  <main>
    <div class="home-title">
      <Header />
      <Content page="Add" @action-clicked="addClick" />

      <div class="container col-md-6 mt-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Restaurant Name</label
          >
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            v-model="restaurant.name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputContact" class="form-label">contact</label>
          <input
            type="text"
            class="form-control"
            v-model="restaurant.contact"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputAddress" class="form-label">Address</label>
          <input
            type="text"
            class="form-control"
            v-model="restaurant.address"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";
import axios from "axios";

export default {
  name: "Add",
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
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    addClick() {
      axios
        .post("http://localhost:3000/restaurants", {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        })

        .then((response) => {
          if (response.status === 201) {
            localStorage.setItem("added-success", "Added Successfully");
            this.$router.push({ name: "home" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>