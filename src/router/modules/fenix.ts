import Layout from '@/layout'
export default [
  {
    path: '/fenix',
    redirect: '/fenix/fenix-index',
    component: Layout,
    name: 'fenix',
    meta: {
      title: 'Fenix',
      icon: 'el-icon-cpu',
      roles: [],
    },
    children: [
      {
        path: 'fenix-index',
        name: 'fenix-index',
        component: () => import('@/views/self-fenix/fenix'),
        meta: {
          title: 'Fenix Publisher',
          icon: 'dashboard',
          roles: [],
        }
      },
      {
        path: 'fenix-create',
        name: 'create',
        component: () => import('@/views/self-fenix/fenix/details'),
        meta: {
          title: 'create',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'fenix-edit/:id',
        name: 'edit',
        component: () => import('@/views/self-fenix/fenix/details'),
        meta: {
          title: 'edit',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      }
    ]
  }
]
