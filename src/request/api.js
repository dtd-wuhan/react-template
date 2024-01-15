import request from './index'

export const getList = async (params) => {
    return await request('/api/primary/work/plan/getplanlist', { method: 'post', params })
}