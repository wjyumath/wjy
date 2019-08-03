<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
export default {
     name:'my-li',
    data(){
       
        return{

        }
    }
}
</script>

<style scoped>
 li{
  list-style: none;
  width: 33.3%;
  float: left;
  text-align: center;
  height: 100px;
  margin: 10px 0;
  position: relative;
}
</style>
