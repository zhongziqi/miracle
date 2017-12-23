<template lang="html">
  <div class="bg">
    <div class="bg_title">
      <img class="box_center block" src="../../assets/img/title_11.png" alt="">
      <p class="position_top">请选择邀请身份</p>
    </div>
    <div class="box_tab box_radius box_center clear overflow" @click="select(0)" v-if="level==1">
      <div class="fl">
        <img src="../../assets/img/ic_man1.png" alt="">
        <span>联合创始人</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" v-show='select_index!=0' alt="">
        <img src="../../assets/img/ic_select_pic.png" v-show='select_index==0' alt="">
      </div>
    </div>
    <div class="box_tab box_radius box_center clear overflow" @click='select(1)'  v-if="level==1||level==2">
      <div class="fl">
        <img src="../../assets/img/ic_man2.png" alt="">
        <span>合伙人</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" v-show='select_index!=1' alt="">
        <img src="../../assets/img/ic_select_pic.png" v-show='select_index==1' alt="">

      </div>
    </div>
    <div class="box_tab box_radius box_center clear overflow" @click='select(2)'  v-if="level==1||level==2||level==3">
      <div class="fl">
        <img src="../../assets/img/ic_man3.png" alt="">
        <span>总代</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" v-show='select_index!=2' alt="">
        <img src="../../assets/img/ic_select_pic.png" v-show='select_index==2' alt="">
      </div>
    </div>
     <div class="box_tab box_radius box_center clear overflow" @click='select(3)'>
      <div class="fl">
        <img src="../../assets/img/ic_vip.png" alt="">
        <span>VIP</span>
      </div>
      <div class="fr">
        <img src="../../assets/img/ic_select.png" v-show='select_index!=3' alt="">
        <img src="../../assets/img/ic_select_pic.png" v-show='select_index==3' alt="">

      </div>
    </div>
    <div class="input_title box_center">
      <b class="inline"></b>
      <span>请填写被邀请者的手机号</span>
    </div>
    <input v-model='phone' class="box_center phone_number block" type="text" placeholder="请输入11位手机号码…" name="" value="">
    <div class="makeqr text_center box_radius box_center" @click='makeqr'>
      生成二维码
    </div>
  </div>
</template>

<script>

export default {
  name:'invitation',
  data(){
    return {
      select_index:0,
      level:'',
      phone:''
    }
  },
  mounted(){
    this.$magicBox.title('邀请');
    // 获取level
    this.level = this.$cookie.get('level');
    this.select_index=this.level-1;
  },
  methods:{
    select(index){
      this.select_index = index;
    },

    makeqr(){
      // console.log(this.$magicBox.phone(this.phone));
      if(this.$magicBox.phone(this.phone)==null){
        this.$magicBox.tips('请输入手机号码','middle',1500);
        return false;
      }else if(this.$magicBox.phone(this.phone)==false){
        this.$magicBox.tips('请输入正确的手机号码','middle',1500);
        return false;
      }else{
        this.$router.push({path:'qrCode'});
        this.$cookie.set('level',this.select_index+2);
        this.$cookie.set('mobile',this.phone);

        // this.invite();
      }
    }
  }
}
</script>

<style lang="css" scoped>
  /* .input_title{line-height: .45rem;height: .45rem;width: 7rem;margin-top: .44rem;}
  .input_title>b{width: .12rem;height: .12rem;background: #F00A6B;border-radius: 50%;}
  .input_title>span{color: #4a4a4a;margin-left: .18rem;}
  .phone_number{width: 6.54rem;height: .94rem;line-height: .94rem;margin-top: .3rem;background: #fff;border: 2px solid #FDD2D8;border-radius: .16rem;color: #C1C1C1;font-size: .28rem;padding-left: .4rem;} */
  .makeqr{width: 3.52rem;height: .88rem;line-height: .88rem;margin-top: .38rem;border:.02rem solid #FF007F;color: #ff007f;}
</style>
