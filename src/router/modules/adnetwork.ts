import Layout from '@/layout'
export default [
  {
    path: '/adnetwork',
    redirect: '/adnetwork/buzz',
    component: Layout,
    name: 'adnetwork',
    meta: {
      title: 'adnetwork',
      icon: 'el-icon-cpu',
      roles: [],
    },
    children: [
      {
        path: 'buzz',
        name: 'buzz',
        component: () => import('@/views/self-adnetwork/buzz'),
        meta: {
          title: 'buzz',
          icon: 'dashboard',
          roles: [],
        }
      },
      {
        path: 'buzz-create',
        name: 'create',
        component: () => import('@/views/self-adnetwork/buzz/details'),
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
        component: () => import('@/views/self-adnetwork/buzz/details'),
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
