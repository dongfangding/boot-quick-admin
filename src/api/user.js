import request from '@/utils/request'

/**
 * 登录
 * @param data
 */
export function login(data) {
  return request({
    url: 'sysUser/loginByPassword',
    method: 'post',
    data
  })
}

/**
 * 获取当前登录用户信息
 * @param data
 */
export function getInfo(data) {
  return request({
    url: '/sysUser/currentUser',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/sysUser/currentUser',
    method: 'post'
  })
}

/**
 * 生成验证码
 * @param data
 */
export function generateCaptcha(data) {
  return request({
    url: '/sysUser/generateCaptcha',
    method: 'post',
    data
  })
}

/**
 * 当前用户左侧菜单
 * @param
 */
export function buildUserMenuTree(data) {
  return request({
    url: '/sysRoleMenu/buildUserMenuTree',
    method: 'post',
    data
  })
}

/**
 * 系统用户分页
 * @param
 */
export function sysUserPageList(data) {
  return request({
    url: 'sysUser/pageList',
    method: 'post',
    data
  })
}

/**
 * 重置系统用户密码
 * @param
 */
export function sysUserResetPassword(data) {
  return request({
    url: 'sysUser/resetPassword',
    method: 'post',
    data
  })
}

/**
 * 用户激活禁用状态切换
 * @param
 */
export function sysUserActiveSwitch(data) {
  return request({
    url: 'sysUser/activeSwitch',
    method: 'post',
    data
  })
}

/**
 * 新增系统用户
 * @param
 */
 export function createSysUser(data) {
  return request({
    url: 'sysUser/create',
    method: 'post',
    data
  })
}

/**
 * 编辑系统用户
 * @param
 */
 export function updateSysUser(data) {
  return request({
    url: 'sysUser/update',
    method: 'post',
    data
  })
}

