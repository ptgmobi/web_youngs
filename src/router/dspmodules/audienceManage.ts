import Layout from '@/layout'
export default [
  {
    path: '/audienceManage',
    component: Layout,
    name: 'audience-manage',
    redirect: '/audienceManage/list',
    meta: {
      title: '受众包管理',
      elSvgIcon: 'Setting',
      code: 130000
    },
    children: [
      {
        path: 'list',
        name: 'audience-manage-advertiser-list',
        component: () => import('@/views/dsp-audience-manage/advertiser/list'),
        default: true,
        meta: {
          title: '受众包管理',
          elSvgIcon: 'Setting',
          code: 130001,
          cachePage: true,
          leaveRmCachePage: false
        }
      },
      {
        path: 'create',
        name: 'audience-manage-advertiser-create',
        component: () => import('@/views/dsp-audience-manage/advertiser/details'),
        meta: {
          title: 'Create',
          code: 130002
        },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'audience-manage-advertiser-edit',
        component: () => import('@/views/dsp-audience-manage/advertiser/details'),
        meta: {
          title: 'Edit',
          code: 130003
        },
        hidden: true
      },
    ]
  }
]
