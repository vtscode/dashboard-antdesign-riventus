import interceptor from './interceptors';
import { initURL } from "../utils";

export const headers = {
  'Accept': '*/*',
  'Content-Type': 'application/json',
};
export const configRequest = (method, url, data) => {
  return { headers ,method, url: `${initURL}${url}`, data };
};

export default {
  get : async (url) => {
    const conf = configRequest('get', url);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  post: async (url, params) => {
    
    const conf = configRequest('post', url, params);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  patch: async (url, params) => {
    
    const conf = configRequest('patch', url, params);
    try {
      const { data } = await interceptor.create({}).request(conf);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  put: async (url, params) => {
    
    const conf = configRequest('put', url, params);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (url, params) => {
    
    const conf = configRequest('delete', url, params);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};