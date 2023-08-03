import axios from 'axios'
const staticServerUrl = process.env.REACT_APP_PATH || ""

export const instance = axios.create({
  baseURL:staticServerUrl,
  timeout: 1000,
  headers: {
      "Content-Type":"application/json"
  }
})
export const cartsInstance = axios.create({
  baseURL:staticServerUrl,
  timeout: 1000,
  headers: {
      "Content-Type":"application/json"
  }
})

// api 요청할 때 중간 요청을 가로채서 에러 처리하려면
// instance 에서 어떤api요청을 보내든 간에 로컬 스토리지 안에서 토큰을 받아온다. 
cartsInstance.interceptors.request.use((config)=>{  
  const token = localStorage.getItem('token');
  if (token){
      config.headers["Authorization"] = token 
  }
  return config
})

