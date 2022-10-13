<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/addresto">Add restaurant</router-link>

    <a @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: black;
  overflow: hidden;
}
.nav a {
  float: left;
  color: white;
  padding: 14px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>