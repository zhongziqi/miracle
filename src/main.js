import Vue from 'vue'
import App from './App'
import router from './router'
// 注册全局cookie
import cookie from './jslib/cookie'
Vue.prototype.$cookie = cookie;
// 注册全局公共方法
import magicBox from './jslib/magicBox'
Vue.prototype.$magicBox = magicBox;
// 注册全局公共axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 注册mint-ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 注册全局过滤器
import vueFilter from './jslib/vueFilter'
//
window.api='http://120.78.165.81/miracle/public/api';
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


// wechat share
// router.afterEach((to, from, next) => {
//     console.log(to, '触发路由卫士_to');
//     // 获取code
//     const token = cookie.get('token');
//     const level = cookie.get('level');
//     const mobile = cookie.get('mobile');
//     axios({
//           url:window.api+'/invite/index',
//           method: 'post',
//           headers:{token:token},
//           data:{level:level,mobile:mobile},
//       })
//       .then((response)=>{
//           wechat_config(response.data.data.code);
//       })
//       .catch((error)=>{
//           console.log(error)
//       })
//       // 微信初始化配置
//       function wechat_config(code){
//             axios({
//              url:window.api+'/user/getWxSignature',
//              method:"post",
//              data:{url:"http://qiun7g.natappfree.cc/#/qrCode"}
//            })
//            .then((res)=>{
//                wx.config({
//                 appId: res.data.data.data.appID,
//                 timestamp:String(res.data.data.data.timeStamp),
//                 nonceStr: res.data.data.data.nonceStr,
//                 signature: res.data.data.data.signature,
//                 jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
//               })
//               // 微信多个分享
//               wechat_share(code);
//             })
//             .catch((error)=>{
//                 console.log(error)
//               });
//       }
//       // 获取参数
//       function getQueryString(name) {
//         var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//         var r = window.location.search.substr(1).match(reg);
//         if (r != null) {
//             return unescape(r[2]);
//         }
//         return null;
//       }
//       // 微信多个分享
//       function wechat_share(code){
//         // alert(code);
//         if (getQueryString("from")=="timeline") {
//             window.location.href = window.location.href.replace("?from=timeline&isappinstalled=0","");
//             window.location.href = window.location.href.replace("?from=timeline","");
//         }else if (getQueryString("from")=="groupmessage") {
//             window.location.href = window.location.href.replace("?from=groupmessage&isappinstalled=0","");
//             window.location.href = window.location.href.replace("?from=groupmessage","");
//         }else if (getQueryString("from")=="singlemessage") {
//             window.location.href = window.location.href.replace("?from=singlemessage&isappinstalled=0","");
//             window.location.href = window.location.href.replace("?from=singlemessage","");
//         }
//
//         var redirectUrl = "http://" + location.hostname + '/'
//
//         let url2 = redirectUrl+'#'+ to.fullPath+'?code=';
//         // console.log(code,'share_friend');
//         wx.ready(function(){
//           wx.onMenuShareAppMessage({
//               title: 'MiracleQ', // 分享标题
//               desc: 'MiracleQ', // 分享描述
//               link: url2+code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//               imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
//               success:function(res){
//                 console.log(res,'weixin');
//               },
//               trigger:function(res){
//                 console.log(res,'分享给好友成功');
//               }
//           });
//           wx.onMenuShareTimeline({
//               title: 'MiracleQ', // 分享标题
//               link: url2+code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//               imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
//               success:function(res){
//                 console.log(res,'weixin');
//               },
//               trigger:function(res){
//                 console.log(res,'分享到朋友圈成功');
//               }
//           });
//           wx.onMenuShareQQ({
//               title: 'MiracleQ', // 分享标题
//               desc: 'MiracleQ', // 分享描述
//               link: url2+code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//               imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
//               success:function(res){
//                 console.log(res,'weixin');
//               },
//               trigger:function(res){
//                 console.log(res,'分享到qq成功');
//               }
//           });
//           wx.onMenuShareWeibo({
//               title: 'MiracleQ', // 分享标题
//               desc: 'MiracleQ', // 分享描述
//               link: url2+code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//               imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
//               success:function(res){
//                 console.log(res,'weixin');
//               },
//               trigger:function(res){
//                 console.log(res,'分享到腾讯微博成功');
//               }
//           });
//           wx.onMenuShareQZone({
//               title: 'MiracleQ', // 分享标题
//               desc: 'MiracleQ', // 分享描述
//               link: url2+code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//               imgUrl: 'http://wx.qlogo.cn/mmopen/gAKwH9mOWfHhcvtRBcIjozImbBJtQPao6QdFeAW3uT3PyZQbmjKTZFJYp4SPHnaEgicjacGMXImjjwf1RF0lOPMQeicpAaLlU9/64',
//               success:function(res){
//                 console.log(res,'weixin');
//               },
//               trigger:function(res){
//                 console.log(res,'分享到qq空间成功');
//               }
//           });
//       })
//       }
//   })
