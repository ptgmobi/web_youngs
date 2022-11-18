import Layout from '@/layout'
export default [
  {
    path: '/campaign',
    redirect: '/campaign/administration',
    component: Layout,
    name: 'campaign',
    meta: {
      title: '创意中心',
      elSvgIcon: 'Setting',
      code: 140000
    },
    children: [
      {
        path: 'administration',
        name: 'campaign-administration',
        component: () => import('@/views/dsp-campaign/administration'),
        redirect: '/campaign/administration/list',
        meta: {
          title: '创意管理',
          elSvgIcon: 'Edit',
          code: 140100,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'campaign-administration-list',
            component: () => import('@/views/dsp-campaign/administration/list'),
            meta: {
              title: '创意管理',
              elSvgIcon: 'Edit',
              code: 140101,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'campaign-administration-create',
            component: () => import('@/views/dsp-campaign/administration/details'),
            meta: {
              title: '新建创意',
              code: 140102
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'campaign-administration-edit',
            component: () => import('@/views/dsp-campaign/administration/details'),
            meta: {
              title: '修改创意',
              code: 140103
            },
            hidden: true
          },
        ]
      },
      {
        path: 'dpa',
        redirect: '/campaign/dpa/list',
        name: 'campaign-dpa',
        component: () => import('@/views/dsp-campaign/dpa'),
        meta: {
          title: 'DPA模板管理',
          elSvgIcon: 'Edit',
          code: 140200,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'campaign-dpa-list',
            component: () => import('@/views/dsp-campaign/dpa/list'),
            default: true,
            meta: {
              title: 'DPA模板管理',
              elSvgIcon: 'Edit',
              code: 140201,
              cachePage: true,
              leaveRmCachePage: false
            }
          }
        ]
      }
    ]
  }
]
