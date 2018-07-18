<template>
  <div>
    <content>
      <div class="page">
      <div class="page-hd">
        <div class="header">
          <div class="header-left">
            <a href="javascript:history.go(-1)" class="left-arrow"></a>
          </div>
          <div class="header-title">个人中心</div>
          <div class="header-right">
            <a href="javascript:;" class="more_icon">
              <img src="../../assets/images/amore1.png" alt="" />
            </a>
            <div class="right_menu">
              <div class="x_title" id="report">举报</div>
              <div class="x_title" id="blacklist">加入黑名单</div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-bd" style="height: 100%;overflow:hidden">
        <!-- 页面内容-->
        <div class="bscroll">
          <div class="weui-top my-top" >
            <div class="weui-top_img">
              <img src="../../assets/images/tx00.jpg" alt="" />
            </div>
            <div class="weui-top_name">
              <div class="x_title">~小情调天使~</div>
              <div class="m_title">ID: 1522322811</div>
            </div>
          </div>

          <div class="weui-cells mt0 border-none">
            <a class="weui-cell weui-cell_access" href="红包动态-我发出的红包.html">
              <div class="weui-cell__img">
                <img src="../../assets/images/my_icon1.png" class="my_icon" alt="" />
              </div>
              <div class="weui-cell__bd">
                <div class="x_title">红包动态</div>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="在线客服.html">
              <div class="weui-cell__img">
                <img src="../../assets/images/my_icon2.png" class="my_icon" alt="" />
              </div>
              <div class="weui-cell__bd">
                <div class="x_title">在线客服</div>
              </div>
              <div class="weui-cell__ft">
                <div class="x_text">工作日09:00~18:30</div>
              </div>
            </a>
            <a class="weui-cell weui-cell_access" href="意见反馈.html">
              <div class="weui-cell__img">
                <img src="../../assets/images/my_icon3.png" class="my_icon" alt="" />
              </div>
              <div class="weui-cell__bd">
                <div class="x_title">意见反馈</div>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access" href="黑名单.html">
              <div class="weui-cell__img">
                <img src="../../assets/images/my_icon4.png" class="my_icon" alt="" />
              </div>
              <div class="weui-cell__bd">
                <div class="x_title">用户黑名单</div>
              </div>
              <div class="weui-cell__ft"></div>
            </a>
          </div>

          <div class="weui-cell">
            <div class="weui-cell__bd pd20">
              <a href="javascript:;" class="weui-btn weui-btn_primary">{{this.$route.params}}</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </content>
  </div>
</template>

<script>
  export default {
    components: {
      name: 'content'
    }
  }
</script>

<style scoped>

</style>
