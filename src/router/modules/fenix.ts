import Layout from '@/layout'
export default [
  {
    path: '/fenix',
    redirect: '/fenix/fenix/list',
    component: Layout,
    name: 'fenix',
    meta: {
      title: 'Fenix',
      elSvgIcon: 'MagicStick',
      code: 4
    },
    children: [
      {
        path: 'fenix',
        name: 'fenix-index',
        component: () => import('@/views/self-fenix/fenix'),
        redirect: '/fenix/fenix/list',
        meta: {
          title: 'Fenix Publisher',
          elSvgIcon: 'Edit',
          code: 40
        },
        children: [
          {
            path: 'list',
            name: 'fenix-fenix-list',
            component: () => import('@/views/self-fenix/fenix/list'),
            meta: {
              title: 'Fenix Publisher List',
              code: 400
            },
            hidden: true
          },
          {
            path: 'create',
            name: 'fenix-fenix-create',
            component: () => import('@/views/self-fenix/fenix/details'),
            meta: {
              title: 'Fenix Publisher Create',
              code: 401
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'fenix-fenix-edit',
            component: () => import('@/views/self-fenix/fenix/details'),
            meta: {
              title: 'Fenix Publisher Edit',
              code: 402
            },
            hidden: true
          }
        ]
      },
      {
        path: 'offer',
        name: 'fenix-offer',
        component: () => import('@/views/self-fenix/offer/index'),
        redirect: '/fenix/offer/list',
        meta: {
          title: 'Fenix Offer',
          elSvgIcon: 'Edit',
          code: 41,
          cachePage: true,
          leaveRmCachePage: true
        },
        children: [
          {
            path: 'list',
            name: 'fenix-offer-list',
            component: () => import('@/views/self-fenix/offer/list'),
            meta: {
              title: 'Fenix Offer List',
              code: 410,
              cachePage: true,
              leaveRmCachePage: true
            },
            hidden: true
          },
          {
            path: 'create',
            name: 'fenix-offer-create',
            component: () => import('@/views/self-fenix/offer/details'),
            meta: {
              title: 'Fenix Offer Create',
              code: 411
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'fenix-offer-edit',
            component: () => import('@/views/self-fenix/offer/details'),
            meta: {
              title: 'Fenix Offer Edit',
              icon: 'dashboard',
              code: 412
            },
            hidden: true
          }
        ]
      }
    ]
  }
]
