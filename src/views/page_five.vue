<template>
  <div id="main">
  	<div class="top"></div>
    <div class="content">
      <problem></problem>
      <contact></contact>
      <selfservice></selfservice>
    </div>
  	<service></service>
  </div>
</template>

<script>
  import service from '../components/service.vue'
  import problem from '../components/problem.vue'
  import contact from '../components/contact.vue'
  import selfservice from '../components/self-service.vue'
  export default {
    components:{
      service,
      contact,
      problem,
      selfservice
    }
  }
</script>

<style>
  .top{
      height: 620px;
      background-size: auto 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-image: url(http://static.smartisanos.cn/service/assets/images/top.5dc20d0b797aa46fec1a159a016751c7.jpg);
      background-color: #131313;
      position: relative;
      top: -90px;
      margin-bottom: -90px;
  }
  .content {
      clear: both;
      width: 1220px;
      min-height: 600px;
      padding: 0 0 25px;
      margin: 0 auto;
  }
</style>
