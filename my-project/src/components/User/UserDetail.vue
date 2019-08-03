<template>
  <div>
    <nav-bar title="我是用户详情"></nav-bar>
    <div>
      <div class="bg"></div>
      <div class="image">
        <span>上传头像</span>
      </div>
      <div class="reg">
        <mt-field label="昵称" placeholder="请设置昵称" v-model="msg.username"></mt-field>
        <mt-field label="兴趣" placeholder="Input website" v-model="msg.website"></mt-field>
        <mt-field label="年龄" placeholder="Input number" type="number" v-model="msg.number"></mt-field>
        <mt-field label="生日" placeholder="Input birthday" type="date" v-model="msg.birthday"></mt-field>
        <mt-field
          label="简介"
          placeholder="介绍一下自己吧"
          type="textarea"
          rows="4"
          v-model="msg.introduction"
        ></mt-field>
        <mt-button type="primary" @click="commit()" size="large">提交</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import storage from "../../localstorage";
export default {
  name: "UserDetail",
  data() {
    return {
      msg: {
        username: "",
        website: "",
        number: "",
        birthday: "",
        introduction: "",
        tel: "",
        password: ""
      },
      list: [],
      username: "",
      website: "",
      number: "",
      birthday: "",
      introduction: ""
    };
  },
  created() {
    (this.msg.tel = this.$route.query.tel),
      (this.msg.password = this.$route.query.password);
    // console.log(this.tel)
  },
  mounted() {
    //生命周期方法： 即vue页面刷新时执行
    var list = storage.get("list"); //获取localStorage存储里的数据
    if (list) {
      this.list = list; //把本地存储数据赋给list数组
    }
  },
  methods: {
    commit() {
      this.list.push(this.msg); //把输入框内容添加到list数组中
      storage.set("list", this.list); //保存到localStorage本地存储中
      this.msg = {
        username: "",
        website: "",
        number: "",
        birthday: "",
        introduction: "",
        tel: this.tel,
        password: this.password
      }; //恢复msg变量为空

      this.$router.push({
        path: "../../Home/Home/"
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
.image {
  width: 100px;
  height: 100px;
  top: 100px;
  left: 120px;
  margin: auto;
  background-color: rgb(204, 115, 115);
  border-radius: 50%;
  position: absolute;
  text-align: center;
  line-height: 100px;
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
