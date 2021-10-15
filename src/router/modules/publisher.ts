import Layout from '@/layout'
export default [
  {
    path: '/',
    component: Layout,
    redirect: '/overview',
    name: 'Publisher',
    meta: { title: 'Publisher', icon: 'table' },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/self-publisher/overview'),
        meta: { title: 'Overview', icon: 'dashboard' }
      },
      {
        path: 'report',
        name: 'Report',
        component: () => import('@/views/self-publisher/report'),
        meta: { title: 'Report', icon: 'edit' }
      }
    ]
  }
]