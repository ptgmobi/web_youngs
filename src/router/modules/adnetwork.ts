import Layout from '@/layout'
export default [
  {
    path: '/adnetwork',
    redirect: '/adnetwork/adnetworklist/index',
    component: Layout,
    name: 'adnetwork',
    meta: {
      title: 'Ad Network',
      elSvgIcon: 'MagicStick',
      code: 7
    },
    children: [
      {
        path: 'adnetworklist',
        name: 'adnetworklist',
        component: () => import('@/views/self-adnetwork/ad-network-list'),
        redirect: '/adnetwork/adnetworklist/list',
        meta: {
          title: 'Ad Network List',
          elSvgIcon: 'Edit',
          code: 70
        },
        children: [
          {
            path: 'list',
            name: 'ad-network-list',
            component: () => import('@/views/self-adnetwork/ad-network-list/list'),
            meta: {
              title: 'Ad Network List',
              elSvgIcon: 'Edit',
              code: 700
            }
          },
          {
            path: 'create',
            name: 'ad-network-create',
            component: () => import('@/views/self-adnetwork/ad-network-list/details'),
            meta: {
              title: 'Create Ad Network',
              elSvgIcon: 'Edit',
              code: 701
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'ad-network-edit',
            component: () => import('@/views/self-adnetwork/ad-network-list/details'),
            meta: {
              title: 'Edit Ad Network',
              code: 702
            },
            hidden: true
          },
        ]
      },
      {
        path: 'offersetting',
        name: 'offersetting',
        component: () => import('@/views/self-adnetwork/offer-setting'),
        redirect: '/danetwork/offersetting/list',
        meta: {
          title: 'Offer Setting',
          elSvgIcon: 'Edit',
          code: 71
        },
        children: [
          {
            path: 'list',
            name: 'offer-setting-list',
            component: () => import('@/views/self-adnetwork/offer-setting/list'),
            meta: {
              title: 'Offer Setting',
              elSvgIcon: 'Edit',
              code: 710
            }
          }
        ]
      }
    ]
  }
]
