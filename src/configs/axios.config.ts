import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.API_BASE_URL,
});

axiosInstance.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
	(response) => response.data,
	(error) => Promise.reject(error),
);

export default axiosInstance;
