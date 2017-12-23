<template lang="html">
  <div class="">
    <img class="login" src="../../assets/img/bg_login.jpg" alt="">
    <div class="box_tab box_radius box_center">
      <img src="../../assets/img/ic_login_name.png" alt="">
      <input type="text" name="" value="" placeholder="请输入账户/用户名">
    </div>
    <div class="box_tab box_radius box_center">
      <img src="../../assets/img/ic_login_password.png" alt="">
      <input type="text" name="" value="" placeholder="请输入密码">
    </div>
    <div class="box_tab box_radius box_center text_center login_">
      登录
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  mounted(){
    this.$magicBox.title('用户登录');
  }
}
</script>

<style lang="css" scoped>
  .login{width: 100%;height: 3.58rem;}
  .box_tab{margin-top: .3rem;width: 6.29rem;height: .96rem;line-height: .96rem;background: #fff;box-shadow: 0 .05rem .12rem 0 rgba(217,226,233,.24);}
  .box_tab>img{width: .4rem;margin-left: .3rem;margin-right: .3rem;}
  .box_tab>input{border-left: 1px solid #E0E0E0;padding-left: .22rem;color: #9B9B9B;font-size: .3rem;}
  .login_{color: #fff;background: #FF007F ;box-shadow: 0 .04rem .06rem 0 rgba(255,0,127,.27);margin-top: .53rem;}
</style>
