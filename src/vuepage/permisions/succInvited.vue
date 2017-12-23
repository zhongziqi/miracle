<template lang="html">
  <div class="bg">
    <img class="box_center block" src="../../assets/img/Artboard2.png" alt="">
    <p class="box_center text_center">您已成功将黄小妮升级为联合创始人～</p>
    <p class="box_center box_radius m_box_center" @click='back'>回到首页</p>
  </div>
</template>

<script>
export default {
  name:'succInvited',
  mounted(){
    this.$magicBox.title('权限升级');
  },
  methods:{
    back(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="css" scoped>
  body{background: #fff!important;}
  img{width: 3.6rem;padding-top: .8rem;}
  .bg{background:url('../../assets/img/bg_1.jpg');height: 35rem;}
  .text_center{margin-top: .3rem;margin-bottom: .7rem;letter-spacing: .01rem;}
</style>
