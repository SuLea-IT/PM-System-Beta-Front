import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://your-backend-url.com/api', // 在这里设置你的后端URL
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 添加认证token
        // config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // 处理全局的错误
        return Promise.reject(error);
    }
);

export default axiosInstance;
