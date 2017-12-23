<template lang="html">
  <div class="bg">
    <img src="../../assets/img/certifications.png" alt="">
    <p class="one font">兹授权：&nbsp;&nbsp;&nbsp;&nbsp;edison</p>
    <div class="two ">
      <p class="font">被授权级别:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="title_head font">总代</span></p>
      <p class="font">被授权方手机:&nbsp;&nbsp;&nbsp;18888888888</p>
      <p class="font">被授权方微信:&nbsp;&nbsp;&nbsp;18888888888</p>
      <p class="font">被授权方编号:&nbsp;&nbsp;&nbsp;18888888888</p>
    </div>
    <p class="three font">授权日期：&nbsp;&nbsp;2017-04-04-2018-01-01</p>
    <div class="box_center download text_center box_radius">
      下载该证书
    </div>
  </div>
</template>

<script>
export default {
  name:'myCertification',
  mounted(){
    this.$magicBox.title('我的证书');
  }
}
</script>

<style lang="css" scoped>
  .download{width: 3.52rem;height: .88rem;line-height: .88rem;border: .02rem solid #FF007F;color: #ff007f;margin-top: .3rem;}
  .bg{position: relative;}
  .bg>img{width: 100%;height: auto;}
  .font{font-family: 'yahei';font-weight: bold;color: #000}
  .one{position: absolute;top: 4rem;left: .6rem;font-size: .24rem;}
  .two{position: absolute;top:5.9rem;left:1rem;font-size: .22rem;}
  .two>p{margin-bottom: .05rem;}
  .title_head{font-size: .3rem;}
  .three{position: absolute;top: 9.5rem;right: .8rem;text-align: right;font-size: .2rem;}
</style>
