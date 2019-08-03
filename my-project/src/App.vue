<template>

<div>
  <mt-header class="header" title="I am WhailFill"></mt-header>
  <router-view/>
  <mt-tabbar v-model="selected">
  <mt-tab-item  id="Home" fixed>
    <img slot="icon" src="./assets/images/shouye.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="Movie">
    <img slot="icon" src="./assets/images/movie.png">
    视频
  </mt-tab-item>
  <mt-tab-item id="Cart">
    <img slot="icon" src="./assets/images/cart.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="Like">
    <img slot="icon" src="./assets/images/like.png">
    喜欢
  </mt-tab-item>
</mt-tabbar>
</div>
</template>

<script>
export default{
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected(newV,oleV){
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style scoped>
.header{
  /* position: fixed; */
  /* margin-top: -10px; */
  width: 100%;
}
.mint-tabbar{
  position: fixed;
}
</style>
