<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <h1 class="nav-logo">
        <a href="javascript:;"></a>
        </h1>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd><span class="ng-scope"></span></dd>
                  <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                  <li class="order"><a href="javascript:;">我的订单</a></li>
                  <li class="support"><a href="javascript:;">售后服务</a></li>
                  <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                  <li class="information"><a href="javascript:;">账户资料</a></li>
                  <li class="address"><a href="javascript:;">收货地址</a></li>
                  <li class="logout"><a href="javascript:;">退出</a></li>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <Carpanel></Carpanel>
        </ul>
        <ul class="nav-list">
          <li><a href="javascript:;">在线商城</a></li>
          <li><a href="javascript:;">坚果 Pro</a></li>
          <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
          <li><a href="javascript:;">Smartisan OS</a></li>
          <li><a href="javascript:;">欢喜云</a></li>
          <li><a href="javascript:;">应用下载</a></li>
          <li><a href="javascript:;">官方论坛</a></li>
        </ul>
      </div>
    </div>
    <div class="nav-sub " :class="{active:state}">
      <div class="nav-sub-wrapper">
        <div class="container">
        <ul class="nav-list">
          <li><router-link to="/">首页</router-link></li>
          <li @mouseover="add" @mouseout="del"><router-link to="">手机</router-link></li>
          <li><router-link to="/Pageone">“足迹系列”手感膜</router-link></li>
          <li class="active"><router-link to="/Shop">官方配件</router-link></li>
          <li><router-link to="/Pagetwo">周边产品</router-link></li>
          <li><router-link to="/Pagethree">第三方配件</router-link></li>
          <li><router-link to="/Pagefour">全部商品</router-link></li>
          <li><router-link to="/Pagefive">服务</router-link></li>
          </ul>
        </div>
      </div>
      <Phone></Phone>
    </div>
  </div>
</template>

<script>
  import Carpanel from './car-panel'
  import Phone from './phone'
  export default{
    data(){
      return{
        state:false
      }
    },
    components: {
      Carpanel,
      Phone
    },
    methods:{
      add(){
        this.state = true
      },
      del(){
        this.state = false
      }
    }
  }
</script>

<style>
</style>
