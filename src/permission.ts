import router, { asyncRoutes } from '@/router'
// import store from './store'
import settings from './settings'
import { getToken, setToken } from '@/utils/auth'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/getPageTitle'
import { RouterRowTy } from '~/router'
import { useUserStore } from '@/store/user'
import { usePermissionStore } from '@/store/permission'
// import { handleRouteTree } from '@/utils/format'
import _ from 'lodash'

const whiteList = ['/login', '/404', '/401'] // no redirect whitelist
router.beforeEach(async (to: any, from, next: any) => {
  // console.log('route', from.path, to.path)
  // console.log(to.matched.length)
  // start progress bar
  if (settings.isNeedNprogress) NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)
  /*
   * 总的来说：过滤动态路由
   * 1.是否与token 没有去登录页 ,有 如果要去登录页则重定向到首页。没有, 重新定向到登录页
   * 2.判断是否权限筛选,是,直接放行。没有，筛选动态路由后，添加动态路由然后放行，
   * */
  //set tmp token when setting isNeedLogin false
  if (!settings.isNeedLogin) setToken(settings.tmpToken)
  const hasToken: string | null = getToken()
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/', replace: true })
    } else {
      //是否获取过用户信息
      const isGetUserInfo: boolean = permissionStore.isGetUserInfo
      // const isGetUserInfo: boolean = store.state.permission.isGetUserInfo
      if (isGetUserInfo) {
        next()
      } else {
        // try {
          let accessRoutes: any = []
          if (settings.isNeedLogin) {
            // get user info
            // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
            // ! code start
            // const userInfo: any = await userStore.getInfo()
            const userInfo: any = await userStore.getInfo()
            // const userInfo: any = await store.dispatch('user/getInfo')
            const { menu } = userInfo
            const roles = [...menu]
            // ! code end
            // const roles = ['admin']
            accessRoutes = await permissionStore.generateRoutes(roles)
            // accessRoutes = await store.dispatch('permission/generateRoutes', roles)
            // console.log(accessRoutes)
          } else {
            accessRoutes = asyncRoutes
          }
          // setting constRouters and accessRoutes to vuex , in order to sideBar for using
          // store.commit('permission/M_routes', accessRoutes)
          permissionStore.M_routes(accessRoutes)
          // dynamically add accessible routes
          //router4 addRoutes destroyed
          accessRoutes.forEach((route: RouterRowTy) => {
            router.addRoute(route)
          })
          //already get userInfo
          // store.commit('permission/M_isGetUserInfo', true)
          permissionStore.M_isGetUserInfo(true)
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        // } catch (err) {
        //   console.log(err)
        //   // await store.dispatch('user/resetToken')
        //   await userStore.resetState()
        //   // await store.dispatch('user/resetState')
        //   next(`/login?redirect=${to.path}`)
        //   if (settings.isNeedNprogress) NProgress.done()
        // }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      if (settings.isNeedNprogress) NProgress.done()
    }
  }
})

router.afterEach(() => {
  if (settings.isNeedNprogress) NProgress.done()
})
