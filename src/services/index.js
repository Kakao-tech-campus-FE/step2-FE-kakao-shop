import axios from "axios";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: staticServerUrl + "/api",
  timeout: 1000,
  header: {
    'Content-type': "applicaion/json",
  }
})

instance.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token')
  if(token !== 'null'){
    config.headers.authorization = token
  }

  return config;
})

instance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res)
  },
  (error) => {
    return Promise.reject(error.response)
    }
  )

export default instance