// 开发环境前端服务地址
const devBaseURL = "http://127.0.0.1.3000";
// 生产环境前端服务地址
const proBaseURL = "https://127.0.0.1.3000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
// 请求超时时间
export const TIMEOUT = 20000;


