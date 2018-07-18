<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar style="position:fixed">
      <tabbar-item>
        <img slot="icon" src="../assets/images/bottom_icon01_lh.png">
        <span slot="label">收红包</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../assets//images/bottom_icon02_lh.png">
        <span slot="label">钱包</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../assets//images/my_icon4.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>

<style lang="less">
  .tabbar-icon {
    font-size: 23px;
    line-height: 27px;
  }
</style>
