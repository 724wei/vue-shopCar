<template>
  <div class="app">
    <MyHeader></MyHeader>
    <MyGoods></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyGoods from '@/components/MyGoods.vue'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyGoods
  },
  data() {
    return {}
  }
}
</script>

<style>
.app {
  padding: 50px 0 50px 0;
}
</style>
