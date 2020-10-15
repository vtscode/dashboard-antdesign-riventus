import interceptor from './interceptors';
import { defaultPathDomain } from "../utils";
// auth/local==> login , req_json => {"identifier":"riventus","password":"12345678"}
export const headers = {
  'Accept': 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
  'Access-Control-Allow-Origin': true
};
export const configRequest = (method, url, data) => {
  return { headers ,method, url: `${defaultPathDomain}${url}`, data };
};

export default {
  get : async (url) => {
    const conf = configRequest('get', url);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      throw err;
    }
  },
  post: async (url, params) => {
    
    const conf = configRequest('post', url, params);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      throw err;
    }
  },
  patch: async (url, params) => {
    
    const conf = configRequest('patch', url, params);
    try {
      const { data } = await interceptor.create({}).request(conf);
      return data;
    } catch (err) {
      throw err;
    }
  },
  put: async (url, params) => {
    
    const conf = configRequest('put', url, params);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      throw err;
    }
  },
  delete: async (url, params) => {
    
    const conf = configRequest('delete', url, params);
    try {
      const { data } = await interceptor.request(conf);
      return data;
    } catch (err) {
      throw err;
    }
  }
};