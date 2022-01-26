import Layout from '@/layout'
export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: 'overview',
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'dashboard',
      code: 5
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/self-dashboard/overview'),
        meta: {
          title: 'Overview',
          icon: 'dashboard',
          code: 50
        }
      }
    ]
  }
]
