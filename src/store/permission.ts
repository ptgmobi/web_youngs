import { defineStore } from 'pinia'
import { RouteItemTy, RouterRowTy, RouterTy } from '~/router'
import { asyncRoutes, constantRoutes } from '@/router'
import settings from '@/settings'
import { PermissionTy } from '~/store'

/**
 * Use meta.code to determine if the current user has permission
 * @param codeArr
 * @param routeItem
 */
function hasCodePermission(codeArr: Array<number>, routeItem: RouteItemTy) {
  const type = process.env.NODE_ENV
  if (type === 'serve-dev') {
    return true
  } else {
    if (routeItem.meta && routeItem.meta.code) {
      return codeArr.includes(routeItem.meta.code) || routeItem.hidden
    } else {
      return true
    }
  }
  
}
/**
 * Use meta.code to determine if the current user has permission
 * @param codeArr
 * @param asyncRoutes
 */
function filterRouterByCodeArr(codeArr: Array<number>, asyncRoutes: RouterTy): Promise<RouterTy> {
  return new Promise((resolve) => {
    const filterRouter: RouterTy = []
    asyncRoutes.forEach(async (routeItem: RouterRowTy) => {
      if (hasCodePermission(codeArr, routeItem)) {
        if (routeItem.children) {
          routeItem.children = await filterRouterByCodeArr(codeArr, routeItem.children)
        }
        filterRouter.push(routeItem)
      }
    })
    resolve(filterRouter)
  })
}

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles: Array<string>, route: RouteItemTy) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta?.roles?.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes: RouterTy, roles: Array<string>) {
  const res: RouterTy = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

export const usePermissionStore = defineStore('permission', {
  /***
   *?????????????????? data????????? ,???????????????????????????
   * 1????????????????????????
   */
  state: () => {
    return {
      isGetUserInfo: false, // get userInfo
      routes: [], //????????????????????????????????????????????????
      addRoutes: [] //????????????????????????
    } as PermissionTy
  },

  /***
   *??????????????????????????????????????????)???????????????
   */
  actions: {
    M_routes(routes: RouterTy) {
      this.$patch((state) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
      })
    },
    M_isGetUserInfo(data: boolean) {
      this.$patch((state) => {
        state.isGetUserInfo = data
      })
    },
    generateRoutes(roles: Array<string>) {
      return new Promise(async (resolve) => {
        let accessedRoutes
        if (settings.permissionMode === 'roles') {
          //filter by role
          if (roles.includes('admin')) {
            accessedRoutes = asyncRoutes || []
          } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
          }
        } else {
          const codeArr: any = [...roles]
          //filter by codeArr
          //req code arr
          // let codeArr: any = localStorage.getItem('codeArr')
          // if (codeArr) {
          //   codeArr = JSON.parse(codeArr)
          // } else {
          //   localStorage.setItem('codeArr', JSON.stringify([1]))
          //   codeArr = localStorage.getItem('codeArr')
          // }
          accessedRoutes = await filterRouterByCodeArr(codeArr, asyncRoutes)
        }
        // commit('M_routes', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
})
