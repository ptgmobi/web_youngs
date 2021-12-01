import { createRouter, createWebHistory, createWebHashHistory, Router } from 'vue-router'
import Layout from '@/layout'
import { RouterTy } from '@/types/router'
// import test from './modules/test'
import publisher from './modules/publisher'
import administer from './modules/administer'
import buzz from './modules/buzz'
import fenix from './modules/fenix'
import password from './modules/password'

export const constantRoutes: RouterTy = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/buzz',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/self-index/index'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'index', elSvgIcon: 'HomeFilled' }
      }
    ]
  },
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTy = [
  ...publisher,
  ...buzz,
  ...fenix,
  ...administer,
  ...password,
  // 404 page must be placed at the end !!!
  // using pathMatch install of "*" in vue-router 4.0
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]
// console.log(process.env)
const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

// export function resetRouter() {
//   const newRouter = createRouter({
//     history: createWebHashHistory(),
//     scrollBehavior: () => ({ top: 0 }),
//     routes: constantRoutes
//   })
// }

export default router
