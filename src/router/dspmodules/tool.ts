import Layout from '@/layout'
export default [
  {
    path: '/tool',
    redirect: '/tool/advsetting',
    component: Layout,
    name: 'tool',
    meta: {
      title: 'Tool',
      elSvgIcon: 'Setting',
      code: 12
    },
    children: [
      {
        path: 'advsetting',
        name: 'advsetting',
        component: () => import('@/views/dsp-tool/dsp-advsetting'),
        redirect: '/tool/advsetting/list',
        meta: {
          title: 'Adv Setting List',
          elSvgIcon: 'Edit',
          code: 120
        },
        children: [
          {
            path: 'list',
            name: 'adv-setting-list',
            component: () => import('@/views/dsp-tool/dsp-advsetting/list'),
            meta: {
              title: 'Adv Setting List',
              elSvgIcon: 'Edit',
              code: 1200
            }
          },
          {
            path: 'create',
            name: 'adv-setting-create',
            component: () => import('@/views/dsp-tool/dsp-advsetting/details'),
            meta: {
              title: 'Create Adv Setting',
              elSvgIcon: 'Edit',
              code: 1201
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adv-setting-edit',
            component: () => import('@/views/dsp-tool/dsp-advsetting/details'),
            meta: {
              title: 'Edit Adv Setting',
              code: 1202
            },
            hidden: true
          },
        ]
      },
      {
        path: 'adxsetting',
        name: 'adxsetting',
        component: () => import('@/views/dsp-tool/dsp-adxsetting'),
        redirect: '/tool/adxsetting/list',
        meta: {
          title: 'Adx Setting List',
          elSvgIcon: 'Edit',
          code: 121
        },
        children: [
          {
            path: 'list',
            name: 'adx-setting-list',
            component: () => import('@/views/dsp-tool/dsp-adxsetting/list'),
            meta: {
              title: 'Adx Setting List',
              elSvgIcon: 'Edit',
              code: 1210
            }
          },
          {
            path: 'create',
            name: 'adx-setting-create',
            component: () => import('@/views/dsp-tool/dsp-adxsetting/details'),
            meta: {
              title: 'Create Adx Setting',
              elSvgIcon: 'Edit',
              code: 1211
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adx-setting-edit',
            component: () => import('@/views/dsp-tool/dsp-adxsetting/details'),
            meta: {
              title: 'Edit Adx Setting',
              code: 1212
            },
            hidden: true
          },
        ]
      },
    ]
  }
]
