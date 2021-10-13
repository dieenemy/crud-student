import axios from 'axios';
import queryString from 'queryString';

const axiosInstance = axios.create({
    baseURL: '',
    paramsSerializer: (params) => queryString(params)
});

axiosInstance.interceptors.request.use(
    async (config) => {
        config.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        return config;
    },
    err => {
        Promise.reject(err);
    }
)


axiosInstance.interceptors.response.use(
    (response) => {
        if(response && response.data) {
            return response.data
        }
    },
    err => {
        Promise.reject(err);
    }
)

export default axiosInstance;