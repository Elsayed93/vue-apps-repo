<template>
  <main>
    <div class="home-title">
      <Header />

      <Content page="Update" @action-clicked="clickUpdate" />

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
  name: "Update",
  props: ["id"],
  components: {
    Header,
    Content,
  },
  mounted() {
    let user = localStorage.getItem("user_info");

    if (!user) {
      this.$router.push({ name: "Login" });
    }

    // get the restaurant info
    axios({
      method: "get",
      url: "http://localhost:3000/restaurants/" + this.id,
    }).then((response) => {
      console.log("res", response);
      if (response.status == 200) {
        console.log("this", this);
        this.restaurant.name = response.data.name;
        this.restaurant.contact = response.data.contact;
        this.restaurant.address = response.data.address;
      }
    });
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
    clickUpdate() {
      // console.warn(this.restaurant);
      axios
        .put("http://localhost:3000/restaurants/" + this.id, {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        })
        .then((res) => {
          console.log("after updated", res);
          if (res.status == 200) {
            localStorage.setItem(
              "updated-successfully",
              "Data Updated Successfully"
            );

            this.$router.push({ name: "home" });
          }
        });
    },
  },
};
</script>