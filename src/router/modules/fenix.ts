import Layout from '@/layout'
export default [
  {
    path: '/fenix',
    redirect: '/fenix/fenix',
    component: Layout,
    name: 'fenix',
    meta: {
      title: 'Fenix',
      icon: 'el-icon-cpu',
      roles: [],
    },
    children: [
      {
        path: 'fenix',
        name: 'fenix-index',
        component: () => import('@/views/self-fenix/fenix'),
        meta: {
          title: 'Fenix Publisher',
          icon: 'dashboard',
          roles: [],
        }
      },
      {
        path: 'fenix-create',
        name: 'fenix-create',
        component: () => import('@/views/self-fenix/fenix/details'),
        meta: {
          title: 'create',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'fenix-edit/:id',
        name: 'fenix-edit',
        component: () => import('@/views/self-fenix/fenix/details'),
        meta: {
          title: 'edit',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'offer',
        name: 'fenix-offer',
        component: () => import('@/views/self-fenix/offer'),
        meta: {
          title: 'Fenix Offer',
          icon: 'dashboard',
          roles: [],
        }
      },
      {
        path: 'offer-create',
        name: 'fenix-offer-create',
        component: () => import('@/views/self-fenix/offer/details'),
        meta: {
          title: 'edit',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      },
      {
        path: 'offer-edit/:id',
        name: 'fenix-offer-edit',
        component: () => import('@/views/self-fenix/offer/details'),
        meta: {
          title: 'edit',
          icon: 'dashboard',
          roles: [],
        },
        hidden: true
      }
    ]
  }
]
