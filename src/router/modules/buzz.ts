import Layout from '@/layout'
export default [
  {
    path: '/buzz',
    redirect: '/buzz/old-buzz',
    component: Layout,
    name: 'buzz',
    meta: {
      title: 'Buzz',
      elSvgIcon: 'MagicStick',
      code: 3
    },
    children: [
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
      // old-buzz
      {
        path: 'old-buzz',
        name: 'old-buzz',
        component: () => import('@/views/self-buzz/old-buzz/list'),
        meta: {
          title: 'Old Buzz',
          elSvgIcon: 'Edit',
          code: 33,
          cachePage: true,
          leaveRmCachePage: true
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
      // buzz sync
      {
        path: 'buzz-sync',
        name: 'buzz-sync',
        component: () => import('@/views/self-buzz/buzz-sync/list'),
        meta: {
          title: 'Buzz Sync',
          elSvgIcon: 'Edit',
          code: 36,
          cachePage: true,
          leaveRmCachePage: true
        }
      },
      {
        path: 'buzz-sync-create',
        name: 'buzz-sync-create',
        component: () => import('@/views/self-buzz/buzz-sync/details'),
        meta: {
          title: 'Buzz Sync Create',
          icon: 'dashboard',
          code: 37
        },
        hidden: true
      },
      {
        path: 'buzz-sync-edit/:id',
        name: 'buzz-sync-edit',
        component: () => import('@/views/self-buzz/buzz-sync/details'),
        meta: {
          title: 'Buzz Sync Edit',
          icon: 'dashboard',
          code: 38
        },
        hidden: true
      },
    ]
  }
]
