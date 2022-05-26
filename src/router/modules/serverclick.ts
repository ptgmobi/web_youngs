import Layout from '@/layout'
export default [
  {
    path: '/serverclick',
    redirect: '/serverclick/overallsetting/index',
    component: Layout,
    name: 'serverclick',
    meta: {
      title: 'Server Click',
      elSvgIcon: 'MagicStick',
      code: 6
    },
    children: [
      {
        path: 'overallsetting',
        name: 'overallsetting',
        component: () => import('@/views/self-server-click/overall-setting'),
        redirect: '/serverclick/overallsetting/list',
        meta: {
          title: 'Overall Setting',
          elSvgIcon: 'Edit',
          code: 60
        },
        children: [
          {
            path: 'list',
            name: 'overall-setting-list',
            component: () => import('@/views/self-server-click/overall-setting/list'),
            meta: {
              title: 'Overall Setting List'
            },
            hidden: true
          }
        ]
      },
      {
        path: 'devicepackage',
        name: 'devicepackage',
        component: () => import('@/views/self-server-click/device-package'),
        redirect: '/serverclick/devicepackage/list',
        meta: {
          title: 'Device Package',
          elSvgIcon: 'Edit',
          code: 61
        },
        children: [
          {
            path: 'list',
            name: 'device-package-list',
            component: () => import('@/views/self-server-click/device-package/list'),
            meta: {
              title: 'Device Package List'
            },
            hidden: true
          }
        ]
      }
    ]
  }
]
