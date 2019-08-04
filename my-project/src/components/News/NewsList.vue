<template>
  <div id="newslist">
    <nav-bar title="新闻列表"></nav-bar>
    <!-- <mt-navbar v-model="selected">
            <mt-tab-item id="1">科技</mt-tab-item>
            <mt-tab-item id="2">财经</mt-tab-item>
            <mt-tab-item id="3">汽车</mt-tab-item>
    </mt-navbar>-->
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
      <ul>
        <!-- <li v-for="item in list">{{ item }}</li> -->
        <li v-for="(newlist,index) in newsList" :key="index">
          <a href="#">
            <img :src="newlist.picInfo.url" alt />
            <div class="content">
              <span>{{newlist.title}}</span>
              <p>{{newlist.digest}}......</p>
              <!-- <span></span> -->
              <div class="time">
                <div class="p1">来源:{{newlist.source}}</div>
                <div class="p2">发表时间:{{newlist.ptime}}</div>
                <!-- <p >来源:{{newlist.source}}</p>
                <p >发表时间:{{newlist.ptime}}</p>-->
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">狗兵洋...</span>
      </div>
    </mt-loadmore>
    <!-- <div class="news">
      <ul>
        <li v-for="(newlist,index) in newsList" :key="index">
          <a href="#">
            <img :src="newlist.picInfo.url" alt />
            <div class="content">
              <span>{{newlist.title}}</span>
              <p>{{newlist.digest}}......</p>
              <div class="time">
                <div class="p1">来源:{{newlist.source}}</div>
                <div class="p2">发表时间:{{newlist.ptime}}</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>-->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: "",
      topStatus:''
    };
  },
  created() {
    //   请求数据方法
    this.initData();
  },
  methods: {
    // 加载数据
    initData() {
      this.$axios({
        method: "get",
        url: "https://www.apiopen.top/journalismApi"
      })
        .then(res => {
          this.newsList = res.data.data.money;
          console.log(this.newsList);
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    //下拉触发刷新
    loadTop() {
      this.initData();
      this.$refs.loadmore.onTopLoaded();
      
    },
     handleTopChange(status){
            this.topStatus = status;
        },
  }
};
</script>

<style>
.news {
  margin-bottom: 100px;
}
.news ul {
  margin-right: 16px;
  padding-left: 20px;
}
.news li {
  margin-right: 30px;
  list-style: none;
  width: 100%;
  height: 150px;
  position: relative;
}
.news li img {
  width: 40px;
  height: 40px;
  background-color: brown;
  float: left;
  margin-right: 20px;
  margin: 5px 5px;
}
.news li a {
  text-decoration-line: none;
}
.content span {
  /* text-align: left; */
  font-size: 20px;
}
.content p {
  display: block;
  color: black;
  margin: 5px 0;
  text-indent: 35px;
}
.time div {
  display: inline-block;
  font-size: 10px;
  color: darkgray;
  /* float: left; */
}
.p1 {
  width: 100px;
  padding-right: 20px;
  /* margin-left: 10px; */
}
.p2 {
  width: 200px;
  margin-right: 0px;
  /* padding-left: 30px; */
}
</style>