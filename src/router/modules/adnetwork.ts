import Layout from '@/layout'
export default {
  path: '/adnetwork',
  component: Layout,
  name: 'adnetwork',
  meta: { title: 'adnetwork', icon: 'el-icon-cpu' },
  children: [
    {
      path: 'buzz',
      name: 'buzz',
      component: () => import('@/views/self-adnetwork/buzz'),
      meta: { title: 'buzz', icon: 'dashboard' }
    },
    {
      path: 'buzz-create',
      name: 'create',
      component: () => import('@/views/self-adnetwork/buzz/details'),
      meta: { title: 'create', icon: 'dashboard' },
      hidden: true
    },
    {
      path: 'buzz-edit/:id',
      name: 'edit',
      component: () => import('@/views/self-adnetwork/buzz/details'),
      meta: { title: 'edit', icon: 'dashboard' },
      hidden: true
    }
  ]
}
