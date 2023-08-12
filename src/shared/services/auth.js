import axios from 'axios';
import config, { BS_CONFIG } from './apisConfig';

const baseUrl = `${BS_CONFIG.BASE_URL}/api`;

const axiosURLs = axios.create({
  baseURL: baseUrl,
});

// signup Api
export const signupApi = async (payload) => {
  return await axiosURLs.post(config.auth.signup, payload);
};

// login
export const loginApi = async (payload) => {
  return await axiosURLs.post(config.auth.login, payload);
};
