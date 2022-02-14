/*vuex ts*/
import { RouterTy } from '@/types/router'
import { ObjTy } from '@/types/common'

interface StateTy {
  app: AppTy
  permission: PermissionTy
  user: UserTy
  element: UserTy
  id: UserTy
}

interface UserTy {
  username: string
  avatar: string
  roles: Array<string>
  email: string
  id: string
  token: string
  element: Array<string>
}

interface AppTy {
  sidebar: {
    opened: boolean
    //opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    // withoutAnimation: false
  }
  device: string
  settings: ObjTy
  cachedViews: Array<string>
  cachedInclude: Array<string>
  cachedExclude: Array<string>
}
interface PermissionTy {
  isGetUserInfo: boolean //是否已经设置了权限
  routes: RouterTy //将过滤后的异步路由和静态路由集合
  addRoutes: RouterTy //过滤后的异步路由
}
