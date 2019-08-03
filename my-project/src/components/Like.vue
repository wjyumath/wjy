<template>
  <div id="like">
    <div class="status">
        <mt-button class="mt-button" type="primary" size="small" @click="regeister()">注册</mt-button>
        <mt-button class="mt-button" type="primary" size="small" @click="login()">登录</mt-button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Like",
  data() {
    return {};
  },
  methods: {
    regeister() {
      this.$router.push({
        path: "User/Regeister/"
        // query: {type: music}
      });
    },
    login() {
      this.$router.push({
        path: "User/Login/"
        // query: {type: music}
      });
    }
  }
};
</script>

<style>
.status {
  background-color: pink;
  width: 100%;
  height: 150px;
}
.mt-button {
  border-radius: 10%;
  width: 100px;
  height: 50px;
  text-align: center;
  margin-top: 50px;
  margin-left: 55px;
}
/* .status span{
  color: black;
  opacity:1;
} */
</style>