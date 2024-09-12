import request from './index'

export const getList = async (params) => {
    return await request('/gsp/mark/layer/getLayers', { method: 'get', params })
}