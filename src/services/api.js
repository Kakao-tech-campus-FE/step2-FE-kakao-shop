import axios from "axios";


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  method: 'POST',
  timeout: 1000,
  header: {
    'Content-type': "applicaion/json",
  }
})

instance.interceptors.request.use((config)=>{

  return config;
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
    }
  )

export const register = (data) => {
    const { email, password, username } = data
    return instance.post("/join", {
      email,
      password,
      username,
    })
  }

  export const login = (data) => {
    const { email, password } = data
    return instance.post("/login",{
      email,
      password,
    })
  }


  export const emailCheck = (email) => {
    return instance.post("/check",{
      email,
    })
  }
