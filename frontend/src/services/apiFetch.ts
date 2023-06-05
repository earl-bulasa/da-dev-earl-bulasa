import axios from "axios";
import config from "./apiConfig";
import Endpoint from "../types/EndPoint";
import ToDo from "../types/ToDo";
import { AxiosResponse } from 'axios';

export * from "./apiEndpoints";

function apiFetch<Response>(endpoint: Partial<Endpoint>) {
  const headers = Object.assign(config.headers || {}, endpoint.headers || {});
  return axios<Response>({
    ...config,
    ...endpoint,
    ...headers,
    validateStatus: (status) => {
      return status < 500;
    },
  })
    .then((r) => {
      
      return { status: r.status, data: r.data };
    })
    .catch((e) => {
      const error = {
        error: e.status,
        message: `Caught an error: Failed to ${endpoint.method} information`,
      };
      throw error;
    });
}

export default apiFetch;
