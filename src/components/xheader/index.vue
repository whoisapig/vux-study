<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">首页</x-header>
    <actionsheet
      v-model="showMenus"
      :show-cancel="true"
      :menus="menus"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>
  </div>
</template>

<script>
  import { XHeader, Actionsheet, ButtonTab, ButtonTabItem } from 'vux'

  export default {
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    methods: {
      log (str) {
        console.log(str)
      },
      click (key, menuItem) {
        console.log(menuItem)
        console.log(key)
      }
    }
  }
</script>

<style scoped>

</style>
