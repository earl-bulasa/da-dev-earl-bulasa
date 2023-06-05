import { AxiosRequestConfig } from 'axios';

const config:AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_API_BASE_URL || "https://localhost:8000"}/api/`,
  headers: {
    "Content-Type": 'application/json',
  },
  responseType: 'json',
};

export default config;
