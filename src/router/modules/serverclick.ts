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
            name: 'fenix-fenix-list',
            component: () => import('@/views/self-server-click/overall-setting/list'),
            meta: {
              title: 'Overall Setting List',
              code: 600
            },
            hidden: true
          },
          {
            path: 'create',
            name: 'fenix-fenix-create',
            component: () => import('@/views/self-server-click/overall-setting/details'),
            meta: {
              title: 'Overall Setting Create',
              code: 601
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'fenix-fenix-edit',
            component: () => import('@/views/self-server-click/overall-setting/details'),
            meta: {
              title: 'Overall Setting Edit',
              code: 602
            },
            hidden: true
          }
        ]
      }
    ]
  }
]
