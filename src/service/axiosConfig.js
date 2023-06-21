import axios from 'axios';


// 开发环境前端服务地址
const devBaseURL = "http://127.0.0.1.3000/";
// 生产环境前端服务地址
const proBaseURL = "https://127.0.0.1.3000/";
const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
// 请求超时时间
const TIMEOUT = 20000;


console.info("当前环境的 BASE_URL: %s", BASE_URL);

// 自定义配置创建一个新的 axios 实例，名为 service
const service = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {'X-Custom-Header': 'foobar'}
});


// 统一设置请求头
service.defaults.headers.post['Content-Type'] = 'application/json';

// 配置 request 拦截器
service.interceptors.request.use(config => {
    // 发送网络请求时, 在界面的中间位置显示Loading的组件,使用ant-design插件，这里不再赘述

    //var token = cookie.load('token')//获取本地存储的token
    // 判断cookie有没有存储token，有的话加入到请求头里
    //if (token) {
    //   config.headers['token'] = token//在请求头中加入token
    // }
    // 如果还需要在请求头内添加其他内容可以自己添加 [] 内为自定义的字段名 = 后的内容为字段名对应的内容
    //config.headers['api'] = api

    //请求携带的信息
    config.headers = {
        'Content-Type': 'application/json',
        'x-token': '需要使用的token',
        ...config.headers,
    };
    return config;
}, err => {
    //...关闭加载loading的组件，显示消息提示弹窗
    return err;
});

// http response 拦截器
service.interceptors.response.use(response => {
    // return res;
    if (response.statusText === 'OK') {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data.msg)
    }
}, error => {
    console.log(error);
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                // 如401我就让用户返回登录页面，清除本地token
                // this.props.history.push('/login');
                console.log("未登录...");
                break;
            case 403:
                console.log("接口未授权...");
                break;
            case 500:
                console.log("接口异常...");
                break;
            default:
                console.log("其他错误信息");
        }
        // return err;
        return Promise.reject(error);
    } else {
        return Promise.reject('请求超时, 请刷新重试')
    }
});

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        service({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        service({
            method: 'post',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export default service;
