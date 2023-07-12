import axios from "axios";
import store from '../store/store.js'

const new_axios = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    "Accept":"application/json"
    // Authorization: "Bearer token123",
  },
});

new_axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${store.state.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default new_axios;
