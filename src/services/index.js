import axios from 'axios'
import { getCookie } from './user';

const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"

export const instance = axios.create({
    baseURL: staticServerUrl+ "/api",
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