<template>
  <div class="amap-page-container">
    <el-amap
      ref="map"
      vid="amapDemo"
      :center="center"
      :zoom="zoom"
      :plugin="plugin"
      :events="events"
      class="amap-demo"
    ></el-amap>

    <div class="toolbar">
      <button @click="getMap()">get map</button>
      <div id="address">
        我的位置是：
        <span id="adr"></span>
      </div>
    </div>
  </div>
</template>

  <style>
.amap-demo {
  height: 300px;
  width: 400px;
}
#address {
  width: 400px;
  height: 200px;
}
</style>

  <script>
// NPM 方式
// import { AMapManager } from 'vue-amap';
// CDN 方式
// let amapManager = new VueAMap.AMapManager();
export default {
  data() {
    let self = this;
    return {
      dizhi: "",
      positions: {
        lng: "",
        lat: "",
        address: "",
        loaded: false
      },
      zoom: 12,
      center: [120.2, 30.26667],
      events: {
        init: o => {
          // console.log(o.getCenter());
          // console.log(self.$refs.map.$$getInstance());
          // o.getCity(result => {
          //   this.dizhi = result;
          //   console.log(this.dizhi);
          // });
          o.getCurrentPosition((status, result) => {
            // console.log(result);  //  能获取定位的所有信息
            if (result && result.position) {
              self.str = result.formattedAddress;
              self.positions.address = self.str.substring(
              self.str.indexOf("市") + 1
              );
              self.positions.lng = result.position.lng;
              self.positions.lat = result.position.lat;
              self.positions.loaded = true;
              self.$nextTick();
              // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
              self.$store.commit("POSITION", self.positions);
              // console.log(self.positions);
              sessionStorage.setItem("id", JSON.stringify(self.positions));
            }
          });
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert("map clicked");
        }
      },

      plugin: [
        {
          pName: "Geolocation",
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            }
          }
        }
      ]
    };
  },

  methods: {
    getMap() {
      // str = this.dizhi.province + this.dizhi.city + this.dizhi.district;
      // document.getElementById("adr").innerHTML = str;
    }
  }
};
</script>