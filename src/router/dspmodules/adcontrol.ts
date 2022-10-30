import Layout from '@/layout'
export default [
  {
    path: '/adcontrol',
    component: Layout,
    name: 'adcontrol',
    meta: {
      title: '广告管理',
      elSvgIcon: 'Setting',
      code: 110000
    },
    children: [
      {
        path: 'adv',
        name: 'adcontrol-adv',
        component: () => import('@/views/dsp-adcontrol/adv'),
        meta: {
          title: '广告主',
          elSvgIcon: 'Edit',
          code: 110100,
          cachePage: true,
          leaveRmCachePage: false
        }
      },
      // 广告系列
      {
        path: 'adseries',
        name: 'adcontrol-series',
        component: () => import('@/views/dsp-adcontrol/adseries'),
        redirect: '/adcontrol/adseries/list',
        meta: {
          title: '广告系列sheet',
          elSvgIcon: 'Edit',
          code: 110200,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'adcontrol-adseries-list',
            component: () => import('@/views/dsp-adcontrol/adseries/list'),
            meta: {
              title: '广告系列sheet',
              elSvgIcon: 'Edit',
              code: 110201,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'adcontrol-adseries-create',
            component: () => import('@/views/dsp-adcontrol/adseries/details'),
            meta: {
              title: '新建广告系列',
              code: 110202
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adcontrol-adseries-edit',
            component: () => import('@/views/dsp-adcontrol/adseries/details'),
            meta: {
              title: '修改广告系列',
              code: 110203
            },
            hidden: true
          },
        ]
      },
      // 广告组
      {
        path: 'adgroup',
        redirect: '/adcontrol/adgroup/list',
        name: 'adcontrol-adgroup',
        component: () => import('@/views/dsp-adcontrol/adgroup'),
        meta: {
          title: '广告组sheet',
          elSvgIcon: 'Edit',
          code: 110300,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'adcontrol-adgroup-list',
            component: () => import('@/views/dsp-adcontrol/adgroup/list'),
            default: true,
            meta: {
              title: '广告组sheet',
              elSvgIcon: 'Edit',
              code: 110301,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'adcontrol-adgroup-create',
            component: () => import('@/views/dsp-adcontrol/adgroup/details'),
            meta: {
              title: '新建广告组',
              code: 110302
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adcontrol-adgroup-edit',
            component: () => import('@/views/dsp-adcontrol/adgroup/details'),
            meta: {
              title: '修改广告组',
              code: 110303
            },
            hidden: true
          },
        ]
      },
      // 广告
      {
        path: 'ad',
        redirect: '/adcontrol/ad/list',
        name: 'adcontrol-ad',
        component: () => import('@/views/dsp-adcontrol/ad'),
        meta: {
          title: '广告sheet',
          elSvgIcon: 'Edit',
          code: 110400,
          cachePage: true,
          leaveRmCachePage: false
        },
        children: [
          {
            path: 'list',
            name: 'adcontrol-ad-list',
            component: () => import('@/views/dsp-adcontrol/ad/list'),
            default: true,
            meta: {
              title: '广告sheet',
              elSvgIcon: 'Edit',
              code: 110401,
              cachePage: true,
              leaveRmCachePage: false
            }
          },
          {
            path: 'create',
            name: 'adcontrol-ad-create',
            component: () => import('@/views/dsp-adcontrol/ad/details'),
            meta: {
              title: '新建广告',
              code: 110402
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adcontrol-ad-edit',
            component: () => import('@/views/dsp-adcontrol/ad/details'),
            meta: {
              title: '修改广告',
              code: 110403
            },
            hidden: true
          },
        ]
      },
    ]
  }
]
