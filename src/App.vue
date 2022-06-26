<template>
  <div class="app">
    <MyHeader title="购物车" background="brown" color="white"></MyHeader>
    <MyGoods
      :goodList="goodList"
      v-for="item in goodList"
      :key="item.goods_id"
      :goods="item"
    ></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyGoods from '@/components/MyGoods.vue'
import axios from 'axios'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyGoods
  },
  data() {
    return {
      goodList: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const res = await axios({ url: '/api/cart' })
      this.goodList = res.data.list
      console.log(this.goodList)
    }
  }
}
</script>

<style>
.app {
  padding: 50px 0 50px 0;
}
</style>
