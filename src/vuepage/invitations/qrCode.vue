<template lang="html">
  <div class="bg">
    <div class="img_parent position_center">
      <img src="../../assets/img/bg_share.jpg" alt="">
      <div class="qrcode position_top">
        <!-- <img class="box_center block" :src="code_url" alt=""> -->
        <div class="box_center" id='qrcode'>

        </div>
        <p class="text_center">请点击“…”进行分享～</p>
      </div>
    </div>
    <div class="pop_frame" @click='show_pop=false' v-show='show_pop'>
      <img src="../../assets/img/img_share2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'qrCode',
  data(){
    return {
      show_pop:true,
      code_url:'',
      wechat_code:""
    }
  },
  mounted(){
    const token = this.$cookie.get('token');
    const level = this.$cookie.get('level');
    const mobile = this.$cookie.get('mobile');

    // 生成二维码图片
    this.get_img(token,level,mobile)

  },
  methods:{

    wechat_config(exCode){
          this.$axios({
           url:window.api+'/user/getWxSignature',
           method:"post",
           data:{url:"http://qiun7g.natappfree.cc/#/qrCode"}
         })
         .then((res)=>{
             wx.config({
              appId: res.data.data.data.appID,
              timestamp:String(res.data.data.data.timeStamp),
              nonceStr: res.data.data.data.nonceStr,
              signature: res.data.data.data.signature,
              jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
            })
            // 微信多个分享
            this.wechat_share(exCode);
          })
          .catch((error)=>{
              console.log(error)
            });
    },
    wechat_share(code){
        if (this.$magicBox.get_url_params("from")=="timeline") {
            window.location.href = window.location.href.replace("?from=timeline&isappinstalled=0","");
            window.location.href = window.location.href.replace("?from=timeline","");
        }else if (this.$magicBox.get_url_params("from")=="groupmessage") {
            window.location.href = window.location.href.replace("?from=groupmessage&isappinstalled=0","");
            window.location.href = window.location.href.replace("?from=groupmessage","");
        }else if (this.$magicBox.get_url_params("from")=="singlemessage") {
            window.location.href = window.location.href.replace("?from=singlemessage&isappinstalled=0","");
            window.location.href = window.location.href.replace("?from=singlemessage","");
        }

        var redirectUrl = "http://" + location.hostname + '/'
        let url2 = redirectUrl+'#'+ this.$route.fullPath+'?code=';
        alert(url2,'url2');
        wx.ready(function(){
          wx.onMenuShareAppMessage({
              title: 'MiracleQ', // 分享标题
              desc: 'MiracleQ', // 分享描述
              link: url2+exCode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
              success:function(res){
                console.log(res,'weixin');
              },
              trigger:function(res){
                console.log(res,'分享给好友成功');
              }
          });
          wx.onMenuShareTimeline({
              title: 'MiracleQ', // 分享标题
              link: url2+exCode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
              success:function(res){
                console.log(res,'weixin');
              },
              trigger:function(res){
                console.log(res,'分享到朋友圈成功');
              }
          });
          wx.onMenuShareQQ({
              title: 'MiracleQ', // 分享标题
              desc: 'MiracleQ', // 分享描述
              link: url2+exCode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
              success:function(res){
                console.log(res,'weixin');
              },
              trigger:function(res){
                console.log(res,'分享到qq成功');
              }
          });
          wx.onMenuShareWeibo({
              title: 'MiracleQ', // 分享标题
              desc: 'MiracleQ', // 分享描述
              link: url2+exCode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
              success:function(res){
                console.log(res,'weixin');
              },
              trigger:function(res){
                console.log(res,'分享到腾讯微博成功');
              }
          });
          wx.onMenuShareQZone({
              title: 'MiracleQ', // 分享标题
              desc: 'MiracleQ', // 分享描述
              link: url2+exCode, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
              success:function(res){
                console.log(res,'weixin');
              },
              trigger:function(res){
                console.log(res,'分享到qq空间成功');
              }
          });
      })

    },
    get_img(token,level,mobile){
      var api = window.api;
      this.$axios({
          url:api+'/invite/index',
          method: 'post',
          headers:{token:token},
          data:{level:level,mobile:mobile},
        }).then((response)=>{
          jQuery('#qrcode').qrcode({width: 4.04*qrSize,height: 4.04*qrSize,text:" http://uja4w3.natappfree.cc/#/table?code="+response.data.data.code});
          //流程
          // --1：正常流程
          // --2: 好友打开
          // --3：非好友打开
          // 当为流程1
          alert(this.$cookie.get('token'),'enter');
          if(this.$cookie.get('token')){
            this.wechat_config(response.data.data.code);
          // 当为流程2&3
          }else{
            this.get_code('code');
            this.get_token();
          }

        })
        .catch((error)=>{
          console.log(error)
        })
    },
    // 微信登录
    to_wechat_link(){
      window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx52d87e30aa3c198c&redirect_uri=http%3a%2f%2fuja4w3.natappfree.cc&response_type=code&scope=snsapi_userinfo&#wechat_redirect'
    },
    // 获取token
    get_token(code){
      var token = this.$cookie.get('token');
      if(token=='' && this.wechat_code==''){
        this.to_wechat_link();
      }else if(token==''&&this.wechat_code!=''){
        this.get_user_token();
      }else{
        console.log(token,'已经记录了token');
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
             // console.log(response,'用code换取token');
             // this.get_user_info(response.data.data.token);
             this.$cookie.set('token',response.data.data.token);
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
    }
}}
</script>

<style lang="css" scoped>
  .img_parent>img{width: 100%;height: 100%;}
  .qrcode{margin-top: 4.3rem;}
  .position_top>img,.position_top>div{width: 4.04rem;height: 4.07rem;margin-bottom: .67rem;}
  .position_top>p{color: #333;font-size: .34rem;word-spacing: .01rem;}
  .pop_frame>img{position: absolute;right: .3rem; top: .3rem; width: 6rem;}
  /* .qrcode{padding-top: .5rem;} */
</style>
