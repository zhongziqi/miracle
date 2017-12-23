<template lang="html">
  <div class="bg">
    <div class="bg_img relative">
      <img src="../../assets/img/Artboard3.png" alt="">
      <p class="position_top text_center">邀请你成为总代</p>
    </div>
    <div class="input_title box_center">
      <b class="inline"></b>
      <span>请填写您的名字</span>
    </div>
    <input class="box_center phone_number block" type="text" placeholder="请输入您的名字…" name="" value="">
    <div class="input_title box_center">
      <b class="inline"></b>
      <span>请填写您的手机号</span>
    </div>
    <input class="box_center phone_number block" type="text" placeholder="请输入11位手机号码…" name="" value="">
    <div class="input_title box_center">
      <b class="inline"></b>
      <span>请填写您的微信号</span>
    </div>
    <input class="box_center phone_number block" type="text" placeholder="请输入您的微信号…" name="" value="">
    <div class="text_center box_center btn box_radius">
      填好了
    </div>
  </div>
</template>

<script>
export default {
  name:'table',
  mounted(){
    alert(window.location.href);
  }
}
</script>

<style lang="css" scoped>
  .bg_img>img{width: 100%;height: 3.06rem;}
  .bg_img>p{color: #fff;font-size: .34rem;top: 1rem;}
  .btn{border: .02rem solid #FF007F;color: #ff007f;width: 3.52rem;height: .88rem;line-height: .88rem;margin-top: .74rem;}
</style>
