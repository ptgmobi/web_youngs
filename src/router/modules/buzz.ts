import Layout from '@/layout'
export default [
  {
    path: '/buzz',
    redirect: '/buzz/list',
    component: Layout,
    name: 'buzz',
    meta: {
      title: 'Buzz',
      elSvgIcon: 'MagicStick',
      roles: [],
    },
    children: [
      // {
      //   path: 'buzz',
      //   redirect: '/buzz/buzz/list',
      //   name: 'buzz-index',
      //   component: () => import('@/views/self-buzz/buzz/index'),
      //   meta: {
      //     title: 'Buzz',
      //     icon: 'dashboard',
      //     roles: [],
      //   }
      // },
      {
        path: 'list',
        name: 'buzz-list',
        component: () => import('@/views/self-buzz/buzz/list'),
        default: true,
        meta: {
          title: 'Buzz List',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'create',
        name: 'buzz-create',
        component: () => import('@/views/self-buzz/buzz/details'),
        meta: {
          title: 'Buzz Create',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'buzz-edit',
        component: () => import('@/views/self-buzz/buzz/details'),
        meta: {
          title: 'Buzz Edit',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      }
    ]
  }
]
