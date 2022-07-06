import Layout from '@/layout'
export default [
  {
    path: '/advertiser',
    component: Layout,
    name: 'advertiser',
    redirect: '/advertiser/apiofferupdate',
    meta: {
      title: 'Advertiser',
      elSvgIcon: 'MagicStick',
      code: 10
    },
    children: [
      {
        path: 'offer',
        name: 'advertiserlist',
        component: () => import('@/views/self-advertiser/offer'),
        redirect: '/advertiser/offer/list',
        meta: {
          title: 'Advertiser List',
          elSvgIcon: 'Edit',
          code: 100
        },
        children: [
          {
            path: 'list',
            name: 'advertiser-offer-list',
            component: () => import('@/views/self-advertiser/offer/list'),
            meta: {
              title: 'Offer List',
              elSvgIcon: 'Edit',
              code: 1000
            }
          },
          {
            path: 'create',
            name: 'advertiser-offer-create',
            component: () => import('@/views/self-advertiser/offer/details'),
            meta: {
              title: 'Create Offer',
              code: 1001
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'advertiser-offer-edit',
            component: () => import('@/views/self-advertiser/offer/details'),
            meta: {
              title: 'Edit Offer',
              code: 1002
            },
            hidden: true
          },
        ]
      },
      {
        path: 'apiofferupdate',
        name: 'api-offer-update',
        component: () => import('@/views/self-advertiser/api-offer-update'),
        redirect: '/advertiser/apiofferupdate/list',
        meta: {
          title: 'Api Offer Update',
          elSvgIcon: 'Edit',
          code: 101
        },
        children: [
          {
            path: 'list',
            name: 'api-offer-update-list',
            component: () => import('@/views/self-advertiser/api-offer-update/list'),
            meta: {
              title: 'Api Offer Update',
              elSvgIcon: 'Edit',
              code: 1010
            }
          }
        ]
      }
    ]
  }
]
