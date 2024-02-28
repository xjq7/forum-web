import Axios from 'axios';
import { message } from 'antd';

const instance = Axios.create({
  baseURL: '' as string,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    const token = localStorage.getItem('token');
    newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    const { code, message: msg } = data;
    if (code === 2) {
      message.error(msg);
      localStorage.clear();
      setTimeout(() => {
        location.replace('/login');
      }, 1000);
      return Promise.reject(data);
    }

    if (code !== 0) {
      message.error(msg);
      return Promise.reject(data);
    }

    if (status !== 200) {
      message.error('请求出错');
      return Promise.reject(data);
    }
    return data;
  },
  (err) => {
    const { status } = err.response;
    message.error(err.message);
    if (status === 401) {
      message.error('登录已过期，请重新登录');
      localStorage.clear();
      setTimeout(() => {
        location.replace('/login');
      }, 1000);
    }
    return Promise.reject(err);
  }
);

export const get = function (url: string, data?: any): any {
  return instance.get(url, { params: data });
};

export const del = function (url: string, data?: any): any {
  return instance.delete(url, { params: data });
};

export const put = function (url: string, data?: any): any {
  return instance.put(url, data);
};

export const post = function (url: string, data?: any, config?: any): any {
  return instance.post(url, data, { ...config });
};

export default { get, post, delete: del, put };
