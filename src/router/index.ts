import { createRouter, createWebHistory, createWebHashHistory, Router } from 'vue-router'
import Layout from '@/layout'
import { RouterTy } from '@/types/router'
// youngs
import test from './modules/test'
import dashboard from './modules/dashboard'
import publisher from './modules/publisher'
import administer from './modules/administer'
import buzz from './modules/buzz'
import fenix from './modules/fenix'
import password from './modules/password'
import serverclick from './modules/serverclick'
import danetwork from './modules/adnetwork'
import advertiser from './modules/advertiser'
import light from './modules/light'
// dsp
import tool from './dspmodules/tool'
import dspadvertiser from './dspmodules/advertiser'


const pageTitle = document.title
console.log(pageTitle)
let routerBox: any = []
let indexModule: any = ''
if (pageTitle === 'Youngs' || pageTitle === '') {
  window.pageTitle = 'Youngs'
  routerBox = [
    ...dashboard,
    ...publisher,
    ...light,
    ...buzz,
    ...fenix,
    ...administer,
    ...password,
    ...serverclick,
    ...danetwork,
    ...advertiser,
  ]
  indexModule = import('@/views/self-index/index')
}
if (pageTitle === 'Dsp') {
  window.pageTitle = 'Dsp'
  routerBox = [
    ...dspadvertiser,
    ...tool,
    ...administer
  ]
  indexModule = import('@/views/dsp-index/index')
}

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
    component: () => import('@/views/self-login/Login.vue'),
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
    // ! error
    // redirect: '/dashboard/overview',
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => indexModule,
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: {
          title: 'index',
          elSvgIcon: 'HomeFilled'
        },
        hidden: true
      }
    ]
  },
  // {
  //   path: '/setting-switch',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/setting-switch'),
  //       name: 'SettingSwitch',
  //       meta: { title: 'Setting Switch', icon: 'example' }
  //     }
  //   ]
  // }
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: '/error-log/list',
  //   meta: { title: 'ErrorLog', icon: 'bug' },
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/error-log'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log' }
  //     },
  //     {
  //       path: 'error-log-test',
  //       component: () => import('@/views/error-log/ErrorLogTest.vue'),
  //       name: 'ErrorLogTest',
  //       meta: { title: 'ErrorLog Test' }
  //     }
  //   ]
  // },
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */

export const asyncRoutes: RouterTy = [
  ...routerBox,
  // 404 page must be placed at the end !!!
  // using pathMatch install of "*" in vue-router 4.0
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]
console.log(asyncRoutes)
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
