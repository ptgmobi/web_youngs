import Layout from '@/layout'
export default [
  {
    path: '/light',
    redirect: '/light/list',
    component: Layout,
    name: 'light',
    meta: {
      title: 'Light',
      elSvgIcon: 'MagicStick',
      code: 11
    },
    children: [
      {
        path: 'list',
        name: 'light-list',
        component: () => import('@/views/self-light/light/list'),
        default: true,
        meta: {
          title: 'light',
          elSvgIcon: 'Edit',
          code: 110,
          cachePage: true,
          leaveRmCachePage: false
        }
      },
      {
        path: 'create',
        name: 'light-create',
        component: () => import('@/views/self-light/light/details'),
        meta: {
          title: 'light Create',
          code: 111
        },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'light-edit',
        component: () => import('@/views/self-light/light/details'),
        meta: {
          title: 'light Edit',
          code: 112
        },
        hidden: true
      }
    ]
  }
]
