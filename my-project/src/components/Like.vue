<template>
  <div id="like">
      <div class="status">
        <button @click="regeister()">
          <span>注册</span>
          </button>
        <button @click="login()"><span>登录</span></button>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Like',
  data(){
    return{

    }
  },
  methods:{
    regeister(){
       this.$router.push({
          path: 'User/Regeister/'
          // query: {type: music}
        })
    },
    login(){
       this.$router.push({
          path: 'User/Login/'
          // query: {type: music}
        })
    }
   
  }
}
</script>

<style>
.status{
  background-color: black;
  width: 100%;
  height: 150px;
}
.status button{
  border-radius: 30%;
  background-color: white;
  width: 100px;
  height: 50px;
  filter:alpha(opacity 30); 
  opacity:0.3;
  margin: 20px 30px;
  text-align: center;
}
.status span{
  color: black;
  opacity:1;
}
</style>