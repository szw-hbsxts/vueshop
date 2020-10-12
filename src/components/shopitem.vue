<template>
  <div class="item" >
    <!-- <p>item.name</p> -->
   <div>
      <div class="item-img">
        <img :alt="item.sku_info[0].title" :src="item.sku_info[itemindex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
      </div>
      <h6>{{ item.name }}</h6>
      <h3 >{{ item.name_title }}</h3>
      <div class="params-colors">
        <ul class="colors-list">

          <li v-for="(color,ind) in item.sku_info">
          <a href="javascript:;" :titl='color.spec_json.show_name' v-on:click="tab(ind)">
          <img :src="'http://img01.smartisanos.cn/'+color.spec_json.image+'/20X20.jpg'">
          </a>
          </li>

        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <router-link :to="{name:'item',query:{itemId:item.sku_info[itemindex].sku_id}}">查看详情</router-link>
        </span>
        <span class="item-blue-btn" v-on:click="addCarpanelData(item.sku_info[itemindex])">加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{ item.price }}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <router-link :to="{name:'item',query:{itemId:item.sku_info[itemindex].sku_id}}"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        itemindex : 0
      }
    },
    props:{
      item : Object
    },
    methods:{
      tab(ind){
        this.itemindex = ind
        console.log(ind)
      },
      addCarpanelData(data){
        this.$store.commit('addCarpanelData',data)
      }

    }
  }
</script>

<style>
</style>
