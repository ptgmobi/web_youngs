import Layout from '@/layout'
export default [
  {
    path: '/publisher',
    component: Layout,
    redirect: '/report',
    name: 'Publisher',
    meta: {
      title: 'Publisher',
      icon: 'table',
      code: 2
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/self-publisher/overview'),
        meta: {
          title: 'Overview',
          icon: 'dashboard',
          code: 20
        }
      },
      {
        path: 'report',
        name: 'Report',
        component: () => import('@/views/self-publisher/report'),
        meta: {
          title: 'Report',
          icon: 'el-icon-data-line',
          code: 21
        }
      }
    ]
  }
]
