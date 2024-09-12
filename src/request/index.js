import axios from "axios";
import JSONBig from 'json-bigint'
import { URL_TYPE } from '../const/const.common'
import { message as Message } from "antd";

const isDev = process.env.NODE_ENV === 'development'

const { BASE_URL, FILE_URL } = window.globalConfig || {}

export const baseURL = isDev ? process.env.REACT_APP_BASE_URL : BASE_URL

export const fileURL = isDev ? process.env.REACT_APP_FILE_URL : FILE_URL


const service = axios.create({
    timeout: 15000
})

service.defaults.transformResponse = [(data) => {
    return JSONBig.parse(data)
}]

//封装请求头
service.interceptors.request.use(config => {
    const { urlType } = config
    switch (urlType) {
        case URL_TYPE.BUSINESS:
            config.baseURL = baseURL
            break;
        case URL_TYPE.FILE:
            config.baseURL = fileURL
            break;
        default:
            config.baseURL = baseURL
    }
    return config;
}, error => {
    return Promise.reject(error)
})

//封装响应
service.interceptors.response.use(
    response => {
        const { status, data: { code, message } } = response

        if (status == 200) {
            if (code != 0 || code != 200) {
                Message.error(message)
            }

            return response
        }
    },
    error => {
        let message = ""
        // 处理异常情况，根据项目实际情况处理或不处理
        if (error && error.response) {
            // 根据约定的响应码处理
            switch (error.response.status) {
                case 403:
                    message = '拒绝访问';
                    break;
                case 502:
                    message = '服务器端出错';
                    break;
                default:
                    message = `连接错误${error.response.status}`;
            }
        } else {
            // 超时处理
            message = '服务器响应超时，请刷新当前页';
        }

        Message.error(message)
        return Promise.resolve(error.response);
    }
);


// request
const request = (url, options = {}, urlType = URL_TYPE.BUSINESS) => {
    let method = options.method || 'get';
    let params = options.params || {};

    if (method.toLocaleLowerCase() === 'get') {
        return new Promise((resolve, reject) => {
            service
                .get(url, {
                    params: params,
                }, { urlType })
                .then(res => {
                    if (res && res.data) {
                        resolve(res.data);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    } else {
        return new Promise((resolve, reject) => {
            service
                .post(url, params, { urlType })
                .then(res => {
                    if (res && res.data) {
                        resolve(res.data);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};


export default request