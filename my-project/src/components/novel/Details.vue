<template>
  <div id="detail" >
      <nav-bar title="详情" fixed></nav-bar>
    <router-view/>
    <div class="news">
            <ul>
                <li  v-for="(content,index) in  contents" :key="index" >
                    <!-- <div > -->
                        <a href="#">
                            <img :src="content.pic_small" alt="">
                            <div class="content">
                                <div><span>歌名：</span>{{content.title}}</div>
                                <div><span>作者：</span>{{content.author}}</div>
                                <div><span>专辑：</span>{{content.album_title}}</div>
                            </div>
                        </a>
                    <!-- </div> -->
                        
                    
                         
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import { debug } from 'util';
import { connect } from 'net';
export default {
  name: 'Movie',
  data(){
      return{
          contentList:'',
          index:0,
          contents:''
      }
  },
    created(){
        // debugger;
        this.index = this.$route.query.index
        console.log(this.index)
       this.$axios({
            method:'get',
            url:'https://api.apiopen.top/musicRankings'
        }).then(res=>{
            
            this.contentList=res.data.result
            console.log(this.contentList)
            for(var i=0;i<this.contentList.length;i++){
                if(this.index==i){
                   this.contents=this.contentList[i].content
                   console.log(this.contents)
                }
            }
            
        }).catch(function(err){
            console.log(err)
        })
   },
//    created(){
      
//       // 获取详情数据
//     //   getGdDetail({musicIndex: this.index})
//     //     .then(res => {
//     //       console.log(res)
//     //       this.personInfo = res.query_result.content
//     //     })
//    },
   methods:{
    
   }
}
</script>

<style>
.news ul{
    margin-right: 30px;
    text-align: center;
}
.news li{
    margin: 0;
    list-style: none;
    width: 100%;
    height: 130px;
    position: relative;
}
.news li img{
    width: 100px;
    height: 120px;
    float: left;
    margin-right: 20px;
    /* margin: 5px 5px; */
}
.news li a{
    text-decoration-line: none;
}
.content div{
    font-size: 15px;
    color: black;
    text-align: left;
}
.content div span{
    color: darkgray;
}

</style>