import Layout from '@/layout'
export default [
  {
    path: '/buzz',
    redirect: '/buzz/buzz-index',
    component: Layout,
    name: 'buzz',
    meta: {
      title: 'buzz',
      icon: 'el-icon-cpu',
      roles: [],
    },
    children: [
      {
        path: 'buzz-index',
        name: 'buzz-index',
        component: () => import('@/views/self-buzz/buzz'),
        meta: {
          title: 'buzz',
          icon: 'dashboard',
          roles: [],
        }
      },
      {
        path: 'buzz-create',
        name: 'create',
        component: () => import('@/views/self-buzz/buzz/details'),
        meta: {
          title: 'create',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'buzz-edit/:id',
        name: 'edit',
        component: () => import('@/views/self-buzz/buzz/details'),
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
