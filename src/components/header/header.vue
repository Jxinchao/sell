<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {  // 通过props接收seller值
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin" /* 要使用公共的方法的时候就需要先引入 */
  .header
    color: #ffffff
    background: #000
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size 0px
      .avatar
        display: inline-block
      .content
        display: inline-block
        margin-left 14px
        font-size: 14px
        .title
          margin: 2px 0px 8px 0
          .brand
            width: 30px
            height: 18px
            vertical-align:top
            display: inline-block
            bg-image('images/brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            line-height: 18px
            font-weight: bold
</style>
