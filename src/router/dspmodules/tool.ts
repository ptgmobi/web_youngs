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
      code: 3
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
          code: 70
        },
        children: [
          {
            path: 'list',
            name: 'adv-setting-list',
            component: () => import('@/views/dsp-tool/dsp-advsetting/list'),
            meta: {
              title: 'Adv Setting List',
              elSvgIcon: 'Edit',
              code: 700
            }
          },
          {
            path: 'create',
            name: 'adv-setting-create',
            component: () => import('@/views/dsp-tool/dsp-advsetting/details'),
            meta: {
              title: 'Create Adv Setting',
              elSvgIcon: 'Edit',
              code: 701
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adv-setting-edit',
            component: () => import('@/views/dsp-tool/dsp-advsetting/details'),
            meta: {
              title: 'Edit Adv Setting',
              code: 702
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
          code: 70
        },
        children: [
          {
            path: 'list',
            name: 'adx-setting-list',
            component: () => import('@/views/dsp-tool/dsp-adxsetting/list'),
            meta: {
              title: 'Adx Setting List',
              elSvgIcon: 'Edit',
              code: 700
            }
          },
          {
            path: 'create',
            name: 'adx-setting-create',
            component: () => import('@/views/dsp-tool/dsp-adxsetting/details'),
            meta: {
              title: 'Create Adx Setting',
              elSvgIcon: 'Edit',
              code: 701
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'adx-setting-edit',
            component: () => import('@/views/dsp-tool/dsp-adxsetting/details'),
            meta: {
              title: 'Edit Adx Setting',
              code: 702
            },
            hidden: true
          },
        ]
      },
    ]
  }
]
