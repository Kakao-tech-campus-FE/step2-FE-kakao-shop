import axios from 'axios'
import { getCookie } from './user';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000*20,
    headers: {
        "Content-Type":"application/json"
    }
})

instance.interceptors.request.use((config)=>{  
    const token = getCookie().token;
    if (token){
        config.headers["Authorization"] = `${token}`;
    }
    return config
})

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)  
    }
)
export const duplicate = (data) => {
    const email = data;
    return instance.post("/check", {
      email,
    });
  };