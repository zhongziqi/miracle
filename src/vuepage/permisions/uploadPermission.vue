<template lang="html">
  <div class="bg">
    <div class="bg_title">
      <img class="box_center block" src="../../assets/img/title_11.png" alt="">
      <p class="position_top">请选择要升级的身份</p>
    </div>
    <div class="box_tab box_radius box_center clear overflow" @click="upload('联合创始人')">
      <div class="fl">
        <img src="../../assets/img/ic_man1.png" alt="">
        <span>联合创始人</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" alt="">
      </div>
    </div>
    <div class="box_tab box_radius box_center clear overflow" @click="upload('合伙人')">
      <div class="fl">
        <img src="../../assets/img/ic_man2.png" alt="">
        <span>合伙人</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" alt="">
      </div>
    </div>
    <div class="box_tab box_radius box_center clear overflow" @click="upload('总代')">
      <div class="fl">
        <img src="../../assets/img/ic_man3.png" alt="">
        <span>总代</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" alt="">
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="pop_frame " v-show='show_pop'>
      <div class="frame box_radius position_center">
        <div class="content box_center">
          <img class="block box_center" src="../../assets/img/Artboard2.png" alt="">
          <p class="tips_content text_center">确定将 黄小妮 升级为{{id}}吗？</p>
          <p class="btns"><span class="inline text_center" @click='show_pop=false'>取消</span><span class="inline text_center" @click='confirm'>确认</span> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'uploadPermission',
  data(){
    return{
      show_pop:false,
      id:''
    }
  },
  mounted(){
    this.$magicBox.title('权限升级');
  },
  methods:{
    upload(id){
      this.id=id;
      this.show_pop=true;
    },
    confirm(){
      this.$router.push({path:'succInvited'})
    }
  }
}
</script>

<style lang="css" scoped>
  .bg{background:url('../../assets/img/bg_1.jpg');height: 35rem;}
  .pop_frame img{width: 3rem;}
  /* .box_tab{margin-bottom: .28rem;width: 7rem;height: 1.22rem;line-height: 1.22rem;background: #fff;background: #fff;box-shadow: 0 .06rem .08rem 0 rgba(190,190,190,.24);}
  .box_tab .fl>img{width: 1.1rem;margin-left: .2rem;margin-right: .1rem;}
  .box_tab .fr>img{width: .46rem;margin-right: .46rem;} */
</style>
