import { RouterTy } from '@/types/router'
import Layout from '@/layout'
export default {
  path: '/writing-demo',
  component: Layout,
  meta: { title: 'Writing Demo', icon: 'eye-open' },
  alwaysShow: true,
  children: [
    {
      path: 'hook',
      component: () => import('@/views/example/hook/Hook.vue'),
      name: 'Hook',
      meta: { title: 'Hook-Demo' }
    },
    {
      path: 'vuex-use',
      component: () => import('@/views/example/vuex-use/VuexUse.vue'),
      name: 'VuexUse',
      meta: { title: 'Vuex-Demo' }
    },
    {
      path: 'mock-test',
      component: () => import('@/views/example/mock-test/MockTest.vue'),
      name: 'MockTest',
      meta: { title: 'Mock-Demo' }
    },
    {
      path: 'svg-icon',
      component: () => import('@/views/example/svg-icon/SvgIcon.vue'),
      name: 'SvgIcon',
      meta: { title: 'Svg-Demo' }
    },
    {
      path: 'parent-children',
      component: () => import('@/views/example/parent-children/Parent.vue'),
      name: 'Parent',
      meta: { title: 'Parent-Children' }
    }
  ]
}
