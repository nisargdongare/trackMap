import axios from 'axios';
import {AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://93fabb95840c.ngrok.io',
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `abc ${token}`;
        }
        return config;
    },

    (err) => {
        return Promise.reject(err);
    }
);

export default instance;