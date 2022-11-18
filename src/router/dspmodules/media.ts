import Layout from '@/layout'
export default [
  {
    path: '/media',
    component: Layout,
    name: 'media',
    meta: {
      title: '媒体管理',
      elSvgIcon: 'Setting',
      code: 120000
    },
    children: [
      // 自定义媒体列表
      {
        path: 'custom',
        name: 'media-custom',
        component: () => import('@/views/dsp-media/custom'),
        redirect: '/media/custom/list',
        meta: {
          title: '自定义媒体列表',
          elSvgIcon: 'Edit',
          code: 120100,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'media-custom-list',
            component: () => import('@/views/dsp-media/custom/list'),
            meta: {
              title: '自定义媒体列表',
              elSvgIcon: 'Edit',
              code: 120101,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'media-custom-create',
            component: () => import('@/views/dsp-media/custom/details'),
            meta: {
              title: '新建媒体列表',
              code: 120102
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'media-custom-edit',
            component: () => import('@/views/dsp-media/custom/details'),
            meta: {
              title: '修改媒体列表',
              code: 120103
            },
            hidden: true
          },
        ]
      },
      // 公共媒体黑名单
      {
        path: 'public',
        redirect: '/media/public/list',
        name: 'media-public',
        component: () => import('@/views/dsp-media/public'),
        meta: {
          title: '公共媒体黑名单',
          elSvgIcon: 'Edit',
          code: 120200,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'media-public-list',
            component: () => import('@/views/dsp-media/public/list'),
            default: true,
            meta: {
              title: '公共媒体黑名单',
              elSvgIcon: 'Edit',
              code: 120201,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'media-public-create',
            component: () => import('@/views/dsp-media/public/details'),
            meta: {
              title: '新建媒体黑名单',
              code: 120202
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'media-public-edit',
            component: () => import('@/views/dsp-media/public/details'),
            meta: {
              title: '修改媒体黑名单',
              code: 120203
            },
            hidden: true
          },
        ]
      },
    ]
  }
]
