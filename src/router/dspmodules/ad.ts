import Layout from '@/layout'
export default [
  {
    path: '/ad',
    redirect: '/ad/adseries',
    component: Layout,
    name: 'ad',
    meta: {
      title: '广告管理',
      elSvgIcon: 'Setting',
      code: 110000
    },
    children: [
      {
        path: 'adseries',
        redirect: '/ad/adseries/list',
        name: 'ad-series',
        component: () => import('@/views/dsp-ad/adseries'),
        meta: {
          title: '广告系列sheet',
          elSvgIcon: 'Edit',
          code: 110100,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'ad-list',
            component: () => import('@/views/dsp-ad/adseries/list'),
            default: true,
            meta: {
              title: '广告系列sheet',
              elSvgIcon: 'Edit',
              code: 110101,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'ad-create',
            component: () => import('@/views/dsp-ad/adseries/details'),
            meta: {
              title: '新建广告系列',
              code: 110102
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'ad-edit',
            component: () => import('@/views/dsp-ad/adseries/details'),
            meta: {
              title: '修改广告系列',
              code: 110103
            },
            hidden: true
          },
        ]
      },
      
    ]
  }
]
