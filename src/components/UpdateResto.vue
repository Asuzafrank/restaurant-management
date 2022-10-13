<template>
  <Header />
  <h1>hello user welcome on update restaurant page</h1>
  <form class="update">
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
    <button type="button" @click="updateRestaurant">update restaturant</button>
  </form>
</template>
<script>
import Header from "./Header";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "UpdateResto",
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
    async updateRestaurant() {
      let result = await axios.put(
        "http://localhost:3000/restaurants" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user.info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants" + this.$route.params.id
    );
    // console.warn(this.$route.params.id);
    console.warn(result.data);
    this.restaurant.result.data;
  },
};
</script>