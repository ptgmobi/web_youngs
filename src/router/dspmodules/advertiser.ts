import Layout from '@/layout'
export default [
  {
    path: '/advertiser',
    redirect: '/advertiser/list',
    component: Layout,
    name: 'advertiser',
    meta: {
      title: 'Advertiser',
      elSvgIcon: 'Setting',
      code: 100000
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
          code: 100001,
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
          code: 100002
        },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'advertiser-edit',
        component: () => import('@/views/dsp-advertiser/advertiser/details'),
        meta: {
          title: 'Advertiser Edit',
          code: 100003
        },
        hidden: true
      },
    ]
  }
]
