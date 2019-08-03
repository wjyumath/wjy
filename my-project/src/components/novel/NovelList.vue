<template>
  <div id="novellist">
        <nav-bar title="最新音乐"></nav-bar>
        <div class="music" >
            <ul>
                <li v-for="(music,index) in musicList" :key="index" >
                    <a href="#" @click="handel(index)">
                        <img :src="music.bg_pic" alt="">
                        <div class="musiccontent">
                            <div>{{music.name}}</div>
                            <div>{{music.comment}}</div>
                        </div>
                    </a>
                         
                </li>
            </ul>
        </div>
    <router-view/>
  </div>
</template>

<script>
export default{
  data(){
    return{
      musicList:'',
      selected:'',
      index:0

    }
  },
   created(){
       this.$axios({
            method:'get',
            url:'https://api.apiopen.top/musicRankings'
        }).then(res=>{
            this.musicList=res.data.result
            console.log(this.musicList)
        }).catch(function(err){
            console.log(err)
        })
   },
  methods:{
      handel(music){
          console.log(music)
          this.$router.push({
          path: 'Details/',
          query: {index: music}
        })
      }
  }

}
</script>

<style>
.music ul{
    margin-right: 30px;
    text-align: center;
}
.music li{
    margin: 0;
    list-style: none;
    width: 100%;
    height: 200px;
    position: relative;
}
.music li img{
    width: 100px;
    height: 120px;
    /* background-color: brown; */
    float: left;
    margin-right: 0px;
    margin: 5px 5px;
}
.music li a{
    text-decoration-line: none;
}
.musiccontent div{
    font-size: 18px;
    color: black;
}
.musiccontent p{
    font-size: 10px;
    color: darkgray;
    float: left;
}

</style>