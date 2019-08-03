<template>
  <div>
    <nav-bar title="我是用户详情"></nav-bar>
    <div>
      <div class="bg"></div>
      <div class="reg">
        <!-- <input type="text" > -->
        <!-- <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field> -->
        <mt-field label="昵称" placeholder="请设置昵称" v-model="username"></mt-field>
        <mt-field label="兴趣" placeholder="Input website" type="url" v-model="website"></mt-field>
        <mt-field label="年龄" placeholder="Input number" type="number" v-model="number"></mt-field>
        <mt-field label="生日" placeholder="Input birthday" type="date" v-model="birthday"></mt-field>
        <mt-field label="简介" placeholder="介绍一下自己吧" type="textarea" rows="4" v-model="introduction"></mt-field>
        <button @click="gonext()">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserDetail",
  data() {
    return {
      username: "",
      website: "",
      number: "",
      birthday: "",
      introduction: "",
      password: "",
      tel: ""
    };
  },
  created() {
      this.tel = this.$route.query.tel,
      this.password = this.$route.query.password,
      console.log(this.password)
      console.log(this.tel)
  }
};
</script>
<style>
.bg {
  width: 100%;
  height: 750px;
  background-image: url("../../assets/images/bg.jpg");
  /* background-repeat: round; */
  z-index: -1;
  position: relative;
  -webkit-filter: blur(5px);
  filter: blur(5px);
}
.reg {
  width: 90%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
