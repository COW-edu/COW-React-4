import axios from 'axios';
import { getCookie } from './cookies';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", 
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getCookie("accessToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance; 
