import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pedalstart-3lsy.onrender.com/api',
});

// Add a request interceptor to include token in headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
