import router, { asyncRoutes } from '@/router'
import store from './store'
import settings from './settings'
import { getToken } from '@/utils/auth'
import { RouterRowTy, RouterTy } from '@/types/router'
import { ObjTy } from '@/types/common'
import { handleRouteTree } from '@/utils/format'

router.beforeEach(async (to: ObjTy, from: ObjTy, next: any) => {
  /*
   * 正常流程如下:主要有两大点token和role
   * 1.是否与token 没有去登录页 ,有 如果要去登录页则重定向到首页。没有, 重新定向到登录页
   * 2.判断是否权限筛选,是,直接放行。没有，筛选动态路由后，添加动态路由然后放行，
   * */
  let token: string
  if (settings.isNeedLogin) {
    token = getToken()
  } else {
    token = 'temp_token'
  }
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const isPermission: boolean = store.state.permission.isSettingPermission
      // let isPermission = true
      if (isPermission) {
        next()
      } else {
        try {
          const userInfo = await store.dispatch('user/getInfo')
          //过滤权限
          const permissionCodeArr: Array<number> = await reqPermission()
          const asyncRoutesAf: RouterTy = await filterPermissionFunc(permissionCodeArr, asyncRoutes)
          // const asyncRoutesAf = handleRouteTree(asyncRoutes, userInfo)
          //保存过滤后的路由到vuex中供菜单使用
          store.commit('permission/M_routes', asyncRoutesAf)
          store.commit('permission/M_isSettingPermission', true)
          //...to 路由加载完后再放行,防止白屏
          //replace: true只是一个设置信息，告诉VUE本次操作后，不能通过浏览器后退按钮，返回前一个路由。=
          //vue3.0中addRoutes被销毁了
          console.log('asyncRoutesAf', asyncRoutesAf)
          asyncRoutesAf.forEach((route) => {
            router.addRoute(route)
          })
          next({ ...to, replace: true })
        } catch (err) {
          console.log(err)
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    console.log('去登录页')
    if (to.path.indexOf('/login') !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
  //写具体路径时会造成死循环
  // next({ path: '/' });
})

//权限过滤方法
function filterPermissionFunc(permissionCodeArr: Array<number>, asyncRoutes: RouterTy): Promise<RouterTy> {
  return new Promise((resolve) => {
    const filterRouter: RouterTy = []
    asyncRoutes.forEach(async (routeItem: RouterRowTy) => {
      if (!routeItem.hidden) {
        //判断children
        if (routeItem.children) {
          routeItem.children = await filterPermissionFunc(permissionCodeArr, routeItem.children)
        }
        filterRouter.push(routeItem)
      }
    })
    resolve(filterRouter)
  })
}

//此处模拟请求权限数据
function reqPermission(): Promise<Array<number>> {
  return new Promise((resolve) => {
    resolve([1, 2, 3, 4, 5])
  })
}

router.afterEach(() => {
  // next();
  // console.log("路由后拦截afterEach");
})
