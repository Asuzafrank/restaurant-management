<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img class="logo" src="../assets/sign.png" alt="" />
  <h1>login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter your email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <button @click="login">Login</button>
    <p>
      don't have an account ? <router-link to="/sign-up">Sign up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let results = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (results.status === 200 && results.data.length > 0) {
        // alert("signup Success!");
        localStorage.setItem("user.info", JSON.stringify(results.data[0]));
        this.$router.push({ name: "Home" });
        console.log(results);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user.info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
