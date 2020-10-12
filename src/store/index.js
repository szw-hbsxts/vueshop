//引入vue和vuex文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建一个仓库
let store = new Vuex.Store({
  state:{
    //存放数据
    carPanelData: [],
    maxOff: false,
    carShow: false,
    ball: {
      show: false, //默认隐藏
      el:null,  //点击那个
      img: ''
    }
  },
  getters:{
    //数量
    totleCount(state){
      let count = 0
      state.carPanelData.forEach(goods => {
        count += goods.count
      })
      return count
    },
    //价格
    totlePrice(state){
      let price = 0
      state.carPanelData.forEach(goods => {
        price += goods.count * goods.price
      })
      return price
    }
  },
  mutations: {
    addCarpanelData(state,data){
      //判断购物车是否添加过该商品
      let boff = true

      state.carPanelData.forEach(goods => {
        //判断id是否存在
        if(goods.sku_id === data.sku_id){
          //存数量加一
          goods.count ++
          if(goods.count > data.limit_num){
            goods.count --
            state.maxOff = true
            boff = false
            return
          }
          boff = false
          state.carShow = true
          state.ball.show = true
          state.ball.img = data.ali_image+'?x-oss-process=image/resize,w_36/quality,Q_80/format,webp'
          state.ball.el = event.path[0]
        }
      })
      //商品没有添加存储数据
      if(boff){
        let goodsData = data
        state.carShow = true
        Vue.set(goodsData,'count',1)
        state.carPanelData.push(goodsData)
        state.ball.show = true
        state.ball.img = data.ali_image+'?x-oss-process=image/resize,w_36/quality,Q_80/format,webp'
        state.ball.el = event.path[0]
      }
    },
    //删除商品
    deleteCar(state,id){
      state.carPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          state.carPanelData.splice(index,1)
          return
        }
      })
    },
    //关闭提示
    closePrompt(state){
      state.maxOff = false
    },
    //显示购物车
    carshowhandle(state){
      state.carShow = true
    },
    //隐藏购物车
    hideshowhandle(state){
      setTimeout(() => {
        state.carShow = false
      },500)
    }
  }
})

//将store 暴露
export default store
