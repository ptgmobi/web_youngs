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
      code: 3
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
          code: 30
        }
      },
      {
        path: 'create',
        name: 'buzz-create',
        component: () => import('@/views/self-buzz/buzz/details'),
        meta: {
          title: 'Buzz Create',
          icon: 'dashboard',
          code: 31
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
          code: 32
        },
        hidden: true
      },
      {
        path: 'old-buzz',
        name: 'old-buzz-index',
        redirect: '/buzz/old-buzz/list',
        component: () => import('@/views/self-buzz/old-buzz/index'),
        meta: {
          title: 'Old Buzz Index',
          icon: 'dashboard',
          code: 33
        },
        children: [
          {
            path: 'list',
            name: 'old-buzz-list',
            component: () => import('@/views/self-buzz/old-buzz/list'),
            meta: {
              title: 'Old Buzz List',
              code: 330
            },
            hidden: true
          },
          {
            path: 'create',
            name: 'old-buzz-create',
            component: () => import('@/views/self-buzz/old-buzz/details'),
            meta: {
              title: 'Old Buzz Create',
              icon: 'dashboard',
              code: 331
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'old-buzz-edit',
            component: () => import('@/views/self-buzz/old-buzz/details'),
            meta: {
              title: 'Old Buzz Edit',
              icon: 'dashboard',
              code: 332
            },
            hidden: true
          },
        ]
      },
    ]
  }
]
