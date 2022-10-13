<template>
  <img class="logo" src="../assets/sign.png" alt="" />
  <h1>sign up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter your name" />
    <input type="text" v-model="email" placeholder="Enter your email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <button @click="signUp">sign up</button>
    <p>
      already have an account ? <router-link to="/login">login</router-link>
    </p>
  </div>
</template>
    

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.warn(result);
      if (result.status === 201) {
        alert("signup Success!");
        localStorage.setItem("user.info", JSON.stringify(result));
        this.$router.push({ name: "Home" });
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

<style>
</style>