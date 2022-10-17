import Layout from '@/layout'
export default [
  {
    path: '/advertiser',
    redirect: '/advertiser/list',
    component: Layout,
    name: 'advertiser',
    meta: {
      title: 'advertiser',
      elSvgIcon: 'Setting',
      code: 12
    },
    children: [
      {
        path: 'list',
        name: 'advertiser-list',
        component: () => import('@/views/dsp-advertiser/advertiser/list'),
        default: true,
        meta: {
          title: 'Advertiser',
          elSvgIcon: 'Edit',
          code: 30,
          cachePage: true,
          leaveRmCachePage: false
        }
      },
      {
        path: 'create',
        name: 'advertiser-create',
        component: () => import('@/views/dsp-advertiser/advertiser/details'),
        meta: {
          title: 'Advertiser Create',
          code: 31
        },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'advertiser-edit',
        component: () => import('@/views/dsp-advertiser/advertiser/details'),
        meta: {
          title: 'Advertiser Edit',
          code: 32
        },
        hidden: true
      },
    ]
  }
]
