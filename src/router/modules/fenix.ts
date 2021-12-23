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
      roles: []
    },
    children: [
      {
        path: 'fenix',
        name: 'fenix-index',
        component: () => import('@/views/self-fenix/fenix'),
        redirect: '/fenix/fenix/list',
        meta: {
          title: 'Fenix Publisher',
          roles: []
        },
        children: [
          {
            path: 'list',
            name: 'fenix-fenix-list',
            component: () => import('@/views/self-fenix/fenix/list'),
            meta: {
              title: 'Fenix Publisher List',
              roles: []
            },
            hidden: true
          },
          {
            path: 'create',
            name: 'fenix-fenix-create',
            component: () => import('@/views/self-fenix/fenix/details'),
            meta: {
              title: 'Fenix Publisher Create',
              roles: []
            },
            hidden: true
          },
          {
            path: 'edit/:id',
            name: 'fenix-fenix-edit',
            component: () => import('@/views/self-fenix/fenix/details'),
            meta: {
              title: 'Fenix Publisher Edit',
              roles: []
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
          roles: []
        },
        children: [
          {
            path: 'list',
            name: 'fenix-offer-list',
            component: () => import('@/views/self-fenix/offer/list'),
            meta: {
              title: 'Fenix Offer List',
              roles: []
            },
            hidden: true
          },
          {
            path: 'create',
            name: 'fenix-offer-create',
            component: () => import('@/views/self-fenix/offer/details'),
            meta: {
              title: 'Fenix Offer Create',
              roles: []
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
              roles: []
            },
            hidden: true
          }
        ]
      }
    ]
  }
]
