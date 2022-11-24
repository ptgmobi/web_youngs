import Layout from '@/layout'
export default [
  {
    path: '/report',
    component: Layout,
    name: 'report',
    redirect: '/report/a',
    meta: {
      title: '数据报表',
      elSvgIcon: 'Histogram',
      code: 150000
    },
    children: [
      {
        path: 'a',
        name: 'report-a',
        component: () => import('@/views/dsp-report/a'),
        redirect: '/report/a/list',
        meta: {
          title: '多维度报表',
          elSvgIcon: 'Histogram',
          code: 150100,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'report-a-list',
            component: () => import('@/views/dsp-report/a/list'),
            default: true,
            meta: {
              title: '多维度报表',
              elSvgIcon: 'Histogram',
              code: 150101,
              cachePage: true,
              leaveRmCachePage: false
            }
          }
        ]
      },
    ]
  }
]
