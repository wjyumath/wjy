<template>
  <div id="movie">
    <nav-bar title="最新视频"></nav-bar>
    <div class="video">
      <ul>
        <li v-for="(video,index) in videoList" :key="index">
          <!-- 视频播放窗口 -->
          <div class="test_two_box" v-on:click="initVideo(index)">
            <video :id="'myVideo'+index" class="video-js">
              <source
                src="https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <img :src="video.data.icon" />
          <div class="videocontent">
            <div>{{video.data.description}}</div>
            <div>{{video.data.title}}</div>
            <img id="fx" src="../assets/images/fenxiang.png" @click="actionSheet(video.data)" />
          </div>
        </li>
      </ul>
      <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
        <div id="share" class="social-share" disabled="diandian"
            data-sites= "qq,wechat,weibo,qzone"
            :data-title= "111"
            @click="btn($event)">
        </div>
      </mt-popup>
    </div>
    <router-view />
  </div>
</template>


<script >
export default {
  name: "Movie",
  data() {
    return {
      videoList: "",
      popupVisible: false,
      index:'',
      fenxiang:{}
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "https://api.apiopen.top/videoCategory"
    })
      .then(res => {
        this.videoList = res.data.result.itemList;
        console.log(this.videoList);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    initVideo(index) {
      //初始化视频方法
      let myPlayer = this.$video("myVideo" + index, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "375px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "200px"
      });
    },
    actionSheet(data) {
      this.popupVisible = true;
      this.fenxiang=data
    },
    btn(event){
      console.log(event.currentTarget);
      var myDom = event.currentTarget;
      myDom.setAttribute('data-title',this.fenxiang.title);
      console.log(myDom);
    }
  }
};
</script>

<style>
.video ul {
  width: 100%;
  margin-right: 30px;
  padding-left: 20px;
}
.video-js {
  width: 330px;
  height: 200px;
}
.video li {
  list-style: none;
  width: 375px;
  height: 350px;
  position: relative;
}
.video li img {
  width: 100px;
  height: 120px;
  float: left;
  margin-right: 0px;
  margin: 5px 5px;
}
.video li a {
  text-decoration-line: none;
}
.videocontent div {
  width: 330px;
  font-size: 18px;
  color: black;
}
.videocontent p {
  font-size: 10px;
  color: darkgray;
  float: left;
}
#fx {
  width: 40px;
  height: 40px;
}
#share {
  width: 414px;
  font-size: 18px;
  color: #333;
  background-color: #fff;
}

</style>
