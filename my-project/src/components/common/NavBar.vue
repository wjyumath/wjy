<template>
    <div class="cms-s-hearder">
        <h1 @click="goback">&nbsp<</h1>
        <h2 class="page-title">{{title}}</h2>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
     props:['title'],
    data(){
        return{

        }
    },
    methods:{
       
            
        goback(){
                this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.cms-s-hearder{
    height: 40px;
    /* position: relative; */
    /* margin-top: 10px; */
}
.page-title{
    margin-left: 25%;
}
h1,h2{
    display: inline-block;
    /* margin-bottom: 0; */
    line-height: 40px;
    text-align: center;
    margin-top: 5px;
}
</style>
