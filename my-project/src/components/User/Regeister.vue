<template>
  <div>
    <nav-bar title="我是注册"></nav-bar>
    <div>
      <div class="bg"></div>
      
      <div class="reg">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="repassword"></mt-field>
         <mt-button type="primary" @click="gonext(phone,password)" size="large">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regeister",
  data() {
    return {
      phone: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    gonext(phone, mima) {
      //1 .手机号校验
      var tel = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      var myPhone = this.phone.trim();
      console.log(myPhone);
      if (myPhone == "") {
        alert("请输入手机号");
        return;
      }
      if (!tel.test(myPhone)) {
        alert("手机号格式错误");
        return;
      }

      // 2. 密码与再次输入密码内容验证
      var myPassword = this.password.trim();
      var myRepassword = this.repassword.trim();
      if (myPassword != myRepassword) {
        alert("密码输入不一致");
        return;
      }
      this.$router.push({
        path: "../UserDetail/",
        query: { tel: phone, password: mima }
      });
    }
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