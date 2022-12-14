import Layout from '@/layout'
export default [
  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      elSvgIcon: 'DataLine',
      code: 5
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/self-dashboard/overview'),
        meta: {
          title: 'Overview',
          elSvgIcon: 'Histogram',
          code: 50,
          cachePage: true,
          leaveRmCachePage: true
        }
      },
      {
        path: 'profit',
        name: 'Profit',
        component: () => import('@/views/self-dashboard/profit'),
        meta: {
          title: 'Profit Report',
          elSvgIcon: 'Histogram',
          code: 51,
          cachePage: true,
          leaveRmCachePage: true
        }
      }
    ]
  }
]
