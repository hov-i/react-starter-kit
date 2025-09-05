// src/lib/api.ts
import axios, { AxiosRequestConfig, Method } from "axios";

const instance = axios.create({
  baseURL: "", // 배포 url
  timeout: 60000,
});

const request = (
  method: Method,
  url: string,
  options: AxiosRequestConfig = {}
) => {
  return instance({
    method,
    url,
    ...options,
  });
};

const api = {
  get(url: string, params: Record<string, unknown>) {
    return request("GET", url, {
      params,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  },

  post(url: string, params: Record<string, unknown>) {
    const { files, ...queryParams } = params;

    return request("POST", url, {
      params: queryParams,
      data: files,
      headers: { "Content-Type": "application/json" },
    });
  },

  put(url: string, params: Record<string, unknown>) {
    return request("PUT", url, {
      data: params,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  delete(url: string, params: Record<string, unknown>) {
    return request("DELETE", url, {
      data: params,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  postBlob(url: string, params: Record<string, unknown>) {
    return request("POST", url, {
      data: params,
      responseType: "blob",
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default api;
