import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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