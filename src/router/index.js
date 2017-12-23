import Vue from 'vue'
import Router from 'vue-router'
// 登陆
const login =()=> import('../vuepage/login/login')
// 证书
const myCertification =()=> import('../vuepage/certification/myCertification')
// 邀请
const invitation =()=> import('../vuepage/invitations/invitation')
const qrCode =()=> import('../vuepage/invitations/qrCode')
// 权限
const succInvited =()=> import('../vuepage/permisions/succInvited')
const uploadPermission =()=> import('../vuepage/permisions/uploadPermission')
const invitedPerson =()=> import('../vuepage/permisions/invitedPerson')
// 个人中心
const center =()=> import('../vuepage/personalCenter/center')
// 价格图
const price =()=> import('../vuepage/pricePicture/price')
// 其他
const table =()=> import('../vuepage/others/table')
const error =()=> import('../vuepage/others/error')

// vue  router setting
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name:'center',
      component: center
    },
    {
      path: '/error',
      name:'error',
      component: error
    },
    {
      path: '/myCertification',
      name:'myCertification',
      component: myCertification
    },
    {
      path: '/price',
      name:'price',
      component: price
    },
    {
      path: '/qrCode',
      name:'qrCode',
      component: qrCode
    },
    {
      path: '/table',
      name:'table',
      component: table
    },

    {
      path: '/invitation',
      name:'invitation',
      component: invitation
    },
    {
      path: '/invitedPerson',
      name:'invitedPerson',
      component: invitedPerson
    },
    {
      path: '/uploadPermission',
      name:'uploadPermission',
      component: uploadPermission
    },
    {
      path: '/login',
      name:'login',
      component: login
    },
    {
      path: '/succInvited',
      name:'succInvited',
      component: succInvited
    }
  ]
})
