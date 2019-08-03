<template>
  <div id="home">
     <mt-swipe class="mint-swipe" :auto="2000" >
        <mt-swipe-item><img src="../../assets/images/11.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/33.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/22.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <router-view/>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index"> 
          <router-link :to="grid.router">
            <span :class="grid.className"></span>
            <div>{{grid.title}}</div>
          </router-link>
        </my-li>
      </my-ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      grids:[
        { className:'cms-news',title:'新闻资讯',router:{name:'news.list'}},
        { className:'cms-lala',title:'图文分享',router:{name:'novel.list'}},
        { className:'cms-haha',title:'新闻资讯',router:{name:'news.list'}},
        { className:'cms-heihei',title:'新闻资讯',router:{name:'news.list'}},
        { className:'cms-xixi',title:'新闻资讯',router:{name:'news.list'}},
        { className:'cms-lala',title:'兰溪我们',router:{name:'news.list'}}

      ]
    }
  }
}
</script>
<style>
.mint-swipe{
  height: 200px;
}

/* my-li span{
  width: 50px;
  height: 50px;
  margin: 10px 0;
  display: inline-block;
  background-repeat: round;
} */
.cms-news{
  width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: round;
  background-image: url('../../assets/images/shouye.png')
}
.cms-lala{
   width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: round;
  background-image: url('../../assets/images/hua.png')
}
.cms-haha{
   width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: round;
  background-image: url('../../assets/images/wode-red.png')
}
.cms-heihei{
   width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: round;
  background-image: url('../../assets/images/milaoshu.png')
}
.cms-xixi{
   width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: round;
  background-image: url('../../assets/images/icon-test.png')
}
.cms-lala{
   width: 50px;
  height: 50px;
  display: inline-block;
  background-repeat: round;
  background-image: url('../../assets/images/hua-red.png')
}




</style>
