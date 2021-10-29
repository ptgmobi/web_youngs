import Layout from '@/layout'
export default [
  {
    path: '/administer',
    redirect: 'noRedirect',
    component: Layout,
    name: 'administer',
    meta: {
      title: '后台管理',
      icon: 'el-icon-s-tools',
      roles: [],
      code: 3
    },
    children: [
      {
        path: 'administer-user',
        component: () => import('@/views/self-administer/user/index'),
        name: 'administer-user',
        meta: {
          title: '用户管理',
          roles: [],
          code: 9
        }
      },
      {
        id: '10',
        path: 'administer-power',
        component: () => import('@/views/self-administer/power/index'),
        name: 'administer-power',
        meta: {
          title: '权限管理',
          roles: [],
          code: 10
        }
      },
      {
        path: 'administer-role',
        component: () => import('@/views/self-administer/role/index'),
        name: 'administer-role',
        meta: {
          title: '角色管理',
          roles: [],
          code: 11
        }
      },
      {
        path: 'administer-station',
        component: () => import('@/views/self-administer/station/index'),
        name: 'administer-station',
        meta: {
          title: '岗位管理',
          roles: [],
          code: 12
        }
      },
      {
        path: 'administer-project',
        component: () => import('@/views/self-administer/project/index'),
        name: 'administer-project',
        meta: {
          title: '项目管理',
          roles: [],
          code: 13
        }
      }
    ]
  }
]
