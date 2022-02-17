import Layout from '@/layout'
export default [
  {
    path: '/buzz',
    // redirect: '/buzz/list',
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
          title: 'Buzz',
          elSvgIcon: 'Edit',
          code: 30,
          cachePage: true,
          leaveRmCachePage: false
        }
      },
      {
        path: 'create',
        name: 'buzz-create',
        component: () => import('@/views/self-buzz/buzz/details'),
        meta: {
          title: 'Buzz Create',
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
          code: 32
        },
        hidden: true
      },
      {
        path: 'old-buzz',
        name: 'old-buzz',
        component: () => import('@/views/self-buzz/old-buzz/list'),
        meta: {
          title: 'Old Buzz',
          elSvgIcon: 'Edit',
          code: 33,
          cachePage: true,
          leaveRmCachePage: false
        }
      },
      {
        path: 'old-buzz-create',
        name: 'old-buzz-create',
        component: () => import('@/views/self-buzz/old-buzz/details'),
        meta: {
          title: 'Old Buzz Create',
          icon: 'dashboard',
          code: 34
        },
        hidden: true
      },
      {
        path: 'old-buzz-edit/:id',
        name: 'old-buzz-edit',
        component: () => import('@/views/self-buzz/old-buzz/details'),
        meta: {
          title: 'Old Buzz Edit',
          icon: 'dashboard',
          code: 35
        },
        hidden: true
      },
      // {
      //   path: 'old-buzz',
      //   name: 'old-buzz',
      //   redirect: '/buzz/old-buzz/list',
      //   component: () => import('@/views/self-buzz/old-buzz/routeindex'),
      //   meta: {
      //     title: 'Old Buzz',
      //     elSvgIcon: 'Edit',
      //     code: 33,
      //     cachePage: true,
      //     leaveRmCachePage: false
      //   },
      //   children: [
      //     {
      //       path: 'list',
      //       name: 'old-buzz-list',
      //       component: () => import('@/views/self-buzz/old-buzz/list'),
      //       meta: {
      //         title: 'Old Buzz List',
      //         elSvgIcon: 'Edit',
      //         code: 330,
      //         cachePage: true,
      //         leaveRmCachePage: false
      //       },
      //       hidden: true
      //     },
      //     {
      //       path: 'create',
      //       name: 'old-buzz-create',
      //       // component: () => import('@/views/self-buzz/old-buzz/details'),
      //       component: () => import('@/views/self-buzz/old-buzz/test'),
      //       meta: {
      //         title: 'Old Buzz Create',
      //         icon: 'dashboard',
      //         code: 331
      //       },
      //       hidden: true
      //     },
      //     {
      //       path: 'edit/:id',
      //       name: 'old-buzz-edit',
      //       // component: () => import('@/views/self-buzz/old-buzz/details'),
      //       component: () => import('@/views/self-buzz/old-buzz/test'),
      //       meta: {
      //         title: 'Old Buzz Edit',
      //         icon: 'dashboard',
      //         code: 332
      //       },
      //       hidden: true
      //     },
      //   ]
      // },
    ]
  }
]
