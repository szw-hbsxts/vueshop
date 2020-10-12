<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
     <li v-for="(list,num) in slideList" :key="list.id" v-show="list.id===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a href="list.clickUrl">
          <img :src="list.img" :alt="list.desc" />
        </a>
        <h1>001</h1>
      </li>
<!--      <li><span>测试</span></li> -->
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,gs) in slideList.length" @mouseover="chang(gs)" :class="{'active':gs===currentIndex}"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        slideList:[
          {
            'id':0,
            'clickUrl': '#',
            'desc': '第一张图',
            'img':  require('../assets/img/p1.png')
          },
          {
            'id':1,
            'clickUrl': '#',
            'desc': '第二张图',
            'img': require('../assets/img/p2.png')
          },
          {
            'id':2,
            'clickUrl': '#',
            'desc': '第三张图',
            'img': require('../assets/img/p3.png')
          }
        ],
        currentIndex:0,
        timer:''
      }
    },
    methods:{
      //开始
      go(){
        this.timer = setInterval(() => {
          this.autoPIay()
        },4000)
      },
      //停止
      stop(){
        clearInterval(this.timer)
        this.timer = null
      },
      //改变
      chang(gs){
        this.currentIndex = gs
      },
      //自动
      autoPIay(){
        this.currentIndex ++
        if(this.currentIndex > this.slideList.length - 1){
          this.currentIndex = 0
        }
      }
    },
    created(){
      //异步处理
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPIay()
        },4000)
      })
    }
  }
</script>

<style>
  .carousel-wrap {
     height: 453px;
     width: 100%;
     overflow: hidden;
     background-color: #fff;
     border-radius: 10px;
  }

  .slide-ul {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .slide-ul li {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .carousel-items {
    position: absolute;
    z-index: 10;
    top: 380px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
  }

  .carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .carousel-items .active {
    background-color: orange;
  }

  .list-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
  }

  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }

  .list-enter {
    transform: translateX(100%)
  }

  .list-leave {
    transform: translateX(0)
  }
</style>
