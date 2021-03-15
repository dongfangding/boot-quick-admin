import request from '@/utils/request'

/**
 * 获取字典
 * @param dictCode
 */
export function getDictByCode(dictCode) {
  return request({
    url: 'sysDict/getDictByCode',
    method: 'post',
    data: {
      'dictCode': dictCode
    }
  })
}

