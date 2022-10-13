<template>
  <Header />
  <h1>hello {{ name }} welcome on home page</h1>
  <table border="1">
    <tr>
      <td>id</td>
      <td>name</td>

      <td>contact</td>

      <td>address</td>
      <td>actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/updateresto' + item.id">update</router-link>
        <button @click="deleteresto(item.id)">delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteresto(id) {
      let result = await axios.delete("http://localhost:3000/restaurants" + id);
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user.info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      console.warn(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
td {
  width: 160px;
  height: 40px;
}
</style>