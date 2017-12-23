<template lang="html">
  <div class="bg">
    <p class="title_bg"></p>
    <div class="position_top text_center">
      <img src="../../assets/img/bg_my.png" alt="">
      <div class="avatar_cover position_top">
        <img class="circle_img" :src="info_box.icon" alt="">
        <p class="decoration_line box_center"></p>
        <p class="box_center name"><span v-text='info_box.username'></span><span class="box_radius" >{{info_box.level | level}}</span></p>
      </div>
    </div>
    <div class="tab_father position_top">
      <div class="tab_cover " @click='invitied_person' v-if='info_box.level==1||info_box.level==2||info_box.level==3'>
        <div class="tab_list overflow">
          <div class="fl">
            <img src="../../assets/img/ic_invited.png" alt="">
          </div>
          <div class="fl">
            <p>我邀请的人</p>
            <p>The Person Invited</p>
          </div>
          <div class="fr">
            <img src="../../assets/img/ic_next.png" alt="">
          </div>
        </div>
      </div>
      <div class="tab_cover  certificate" @click='my_certification' v-if='info_box.level==1||info_box.level==2||info_box.level==3'>
        <div class="tab_list overflow">
          <div class="fl">
            <img src="../../assets/img/ic_certificate.png" alt="">
          </div>
          <div class="fl">
            <p>我的证书</p>
            <p>My Certificate</p>
          </div>
          <div class="fr">
            <img src="../../assets/img/ic_next.png" alt="">
          </div>
        </div>
      </div>
      <div class="tab_cover  chart" @click='price_tag' >
        <div class="tab_list overflow">
          <div class="fl">
            <img src="../../assets/img/ic_price.png" alt="">
          </div>
          <div class="fl">
            <p>价格图</p>
            <p>Price Chart</p>
          </div>
          <div class="fr">
            <img src="../../assets/img/ic_next.png" alt="">
          </div>
        </div>
      </div>
      <div class="box_center text_center btn box_radius" @click='invite' v-if='info_box.level==1||info_box.level==2||info_box.level==3'>
        邀请
      </div>
    </div>

    <p v-if='info_box.level==1||info_box.level==2||info_box.level==3' class="text_center box_center position_bottom">- 深圳市琦迹生物科技有限公司 -</p>
  </div>
</template>

<script>

export default {
  name:'center',
  data(){
    return{
      wechat_code:'',
      info_box:{icon:'../../assets/img/test_avater.jpg',username:"Miracle"}
    }
  },
  mounted(){
    this.$magicBox.title('miracle');
    // 微信登录相关
    this.get_code('code');
    this.get_token();

    //
    // const token = '245a0924e1ae2de5fea5de7ae7113c42'
    // this.$cookie.set('token',token);
    // this.get_user_info(token);

  },
  methods:{
    to_wechat_link(){
      window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx52d87e30aa3c198c&redirect_uri=http%3a%2f%2fqiun7g.natappfree.cc&response_type=code&scope=snsapi_userinfo&#wechat_redirect'
    },
    // 获取token
    get_token(){
      var token = this.$cookie.get('token');
      if(token=='' && this.wechat_code==''){
        this.to_wechat_link();
      }else if(token==''&&this.wechat_code!=''){
        this.get_user_token();
      }else{
        console.log(token,'已经记录了token');
        this.get_user_info(token);
      }
    },
    get_user_token(){
         var api = window.api;
         this.$axios({
             url:api+'/user/authLogin',
             method: 'post',
             data:{
               code:this.wechat_code
             },
           })
           .then((response)=>{
             // 获取登录用户信息
             // 如果还没有token的话就存储（防止）
             this.$cookie.set('token',response.data.data.token);
             console.log(response,'用code换取token');
             this.get_user_info(response.data.data.token);
           })
           .catch((error)=>{
             console.log(error)
           })
    },
    get_user_info(token){
      this.$magicBox.start_loading();
      var api = window.api;
      this.$axios({
          url:api+'/user/info',
          method: 'post',
          headers:{token:token}
        })
        .then((response)=>{
          this.$magicBox.stop_loading();
          // 获取登录用户信息
          if(response.data.data.info.level==0){
            this.$router.push({path:'error'})
          }
          this.info_box=response.data.data.info;
          this.$cookie.set('level',response.data.data.info.level);
          console.log(response);
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    // 获取微信链接上的code
    get_code(name){
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null){return this.wechat_code=unescape(r[2]);}else{ return this.wechat_code='';}
    },
    invitied_person(){
      this.$router.push({path:'invitedPerson'});
    },
    my_certification(){
      this.$router.push({path:'myCertification'});
    },
    price_tag(){
      this.$router.push({path:'price'});
    },
    invite(){
      this.$router.push({path:'invitation'});
    }
  }
}
</script>

<style lang="css" scoped>
  .title_bg{height: .78rem;background: #1E2325;width: 100%;}
  .position_top>img{width: 7.07rem;}
  .avatar_cover{top: .6rem;}
  .avatar_cover>img{width: 1.07rem;height: 1.07rem;border: 1px solid #fff;}
  .decoration_line{border-bottom: .02rem solid #fff;width: .32rem;margin-top: .35rem;}
  .name{line-height: .42rem;height: .42rem;color: #fff;margin-top: .23rem;}
  .name>span:last-child{margin-left: .1rem;border: 1px solid #fff;height: .4rem;line-height: .4rem;padding: .1rem;font-size: .25rem;}
  .tab_list{margin-bottom: .3rem;padding-left: .5rem;padding-right: .5rem;height: 1.48rem;width: 100%;background: #fff;box-shadow: 0 0.015rem 0.1rem 0.1rem rgba(217,226,233,.3);}
  .tab_list .fl img{width: 1.07rem;height: 1.07rem;margin-top: .15rem;}
  .tab_list .fl>p:first-child{color: #515151 ;font-size: .28rem;line-height: .4rem;}
  .tab_list .fl>p:last-child{color: #C4C4C4;font-size: .26rem;line-height: .37rem;}
  .tab_list>.fl:nth-child(2){margin-top: .35rem;margin-left: .4rem;}
  .tab_list>.fr img{margin-top: .55rem; width: .4rem;}
  /* .tab_cover{top: 3.1rem;}
  .certificate{top:4.8rem;}
  .chart{top: 6rem;} */
  .tab_father{top: 3rem;}
  .btn{border:.02rem solid #FF007F;width: 3.52rem;height: .88rem;line-height: .88rem;color: #FF007F;margin-top: .45rem;}
  .position_bottom{color: #999;bottom: .17rem;font-size: .24rem;}
</style>
