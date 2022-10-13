<template>
  <Header />
  <h1>hello user welcome on add restaurant page</h1>
  <form class="add">
    <input
      type="text"
      name=""
      placeholder="Enter name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name=""
      placeholder="Enter address"
      v-model="restaurant.address"
    />

    <input
      type="text"
      name=""
      placeholder="Enter contact"
      v-model="restaurant.contact"
    />
    <button type="button" @click="addRestaurant">add new restaturant</button>
  </form>
</template>
<script>
import Header from "./Header";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "AddResto",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant);
      let result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }

      console.warn(result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user.info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>