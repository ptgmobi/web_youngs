import Layout from '@/layout'
export default [
  {
    path: '/password',
    component: Layout,
    name: '/password',
    hidden: true,
    redirect: '/password/password-change',
    meta: {
      title: '密码',
      icon: 'el-icon-s-order',
      roles: []
    },
    children: [
      {
        path: 'password-change',
        component: () => import('@/views/self-password/index'),
        name: 'password-change',
        meta: {
          title: '修改密码',
          roles: []
        }
      }
    ]
  }
]
