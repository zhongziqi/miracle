<template lang="html">
  <div class="bg">


  <div class="invite_frame box_center box_radius">
    <div class="position_top">
      <div class="bg_title">
        <img class="box_center block" src="../../assets/img/title_11.png" alt="">
        <p class="position_top">我邀请的人</p>
      </div>
    </div>
    <div class="overflow tab">
        <div class="fl">
          <img class="circle_img avatar" src="../../assets/img/test_avater.jpg" alt="">
        </div>
        <div class="fl name">
          <p>陈大杰</p>
          <p><img src="../../assets/img/ic_man1.png" alt=""><span>联合创始人</span>  </p>
        </div>
        <div class="fr text_center" @click='upload'>
          升级
        </div>
    </div>
    <div class="overflow tab">
        <div class="fl">
          <img class="circle_img avatar" src="../../assets/img/test_avater.jpg" alt="">
        </div>
        <div class="fl name">
          <p>陈大杰</p>
          <p><img src="../../assets/img/ic_man3.png" alt=""><span>总代</span>  </p>
        </div>
        <div class="fr text_center" @click='upload'>
          升级
        </div>
    </div>
    <div class="overflow tab">
        <div class="fl">
          <img class="circle_img avatar" src="../../assets/img/test_avater.jpg" alt="">
        </div>
        <div class="fl name">
          <p>陈大杰</p>
          <p><img src="../../assets/img/ic_man2.png" alt=""><span>合伙人</span>  </p>
        </div>
        <div class="fr text_center" @click='upload'>
          升级
        </div>
    </div>
    <div class="overflow tab">
        <div class="fl">
          <img class="circle_img avatar" src="../../assets/img/test_avater.jpg" alt="">
        </div>
        <div class="fl name">
          <p>陈大杰</p>
          <p><img src="../../assets/img/ic_vip.png" alt=""><span>VIP</span>  </p>
        </div>
        <div class="fr text_center" @click='upload'>
          升级
        </div>
    </div>

  </div>
    </div>
</template>

<script>
export default {
  name:'invitedPerson',
  mounted(){
    this.$magicBox.title('我邀请的人');
  },
  methods:{
    upload(){
      this.$router.push({path:'uploadPermission'})
    }
  }
}
</script>

<style lang="css" scoped>
  .invite_frame{padding-top: .33rem;border: .02rem solid rgba(255,0,127,.51);width: 7.18rem;margin-top: .9rem;position: relative;}
  .position_top{top:-1rem!important;}
  .bg_title>p{margin-top: 1.55rem!important;}
  .overflow{height: 1.75rem;line-height: 1.75rem;}
  .avatar{width: 1.02rem;height: 1.02rem;}
  .name{margin-top: 0.4rem;margin-left: .4rem;}
  .name>p:first-child{height: .45rem;line-height: .45rem;word-spacing: .01rem;color: #4a4a4a;}
  .name>p:last-child{height: .4rem;line-height: .4rem;color: #c1c1c1;font-size: .28rem;margin-top: .11rem;}
  .name>p:last-child>img{width: .3rem;height: .3rem;object-fit: cover;margin-right: .076rem;vertical-align: text-top;}
  .overflow>.fr{margin-top: .54rem;width: 1.47rem;height: .67rem;line-height: .67rem;border: .02rem solid #FF007F;border-radius: .36rem;color:#FF007F;}
  .tab{padding-left: .32rem;padding-right: .32rem;border-bottom: 1px solid #E5E5E5;}
</style>
