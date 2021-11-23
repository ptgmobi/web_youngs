import Layout from '@/layout'
export default [
  {
    path: '/',
    component: Layout,
    redirect: '/report',
    name: 'Publisher',
    meta: {
      title: 'Publisher',
      icon: 'table',
      roles: [],
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/self-publisher/overview'),
        meta: { title:
          'Overview',
          icon: 'dashboard',
          roles: [],
        }
      },
      {
        path: 'report',
        name: 'Report',
        component: () => import('@/views/self-publisher/report'),
        meta: {
          title: 'Report',
          icon: 'el-icon-data-line',
          roles: [],
        }
      }
    ]
  }
]
