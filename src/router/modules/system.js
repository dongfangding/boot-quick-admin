/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: '/system/sys-user-list',
  name: 'system',
  meta: {
    title: '系统管理',
    icon: 'peoples'
  },
  children: [
    {
      path: 'sys-user-list',
      component: () => import('@/views/system/sys-user-list'),
      name: 'SysUserList',
      meta: { title: '系统用户' }
    }
  ]
}
export default systemRouter
