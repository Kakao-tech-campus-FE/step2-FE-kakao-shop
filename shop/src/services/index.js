import axios from 'axios'

export const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type":"application/json"
    }
})

// api 요청할 때 중간 요청을 가로채서 에러 처리하려면
// instance 에서 어떤api요청을 보내든 간에 로컬 스토리지 안에서 토큰을 받아온다. 
instance.interceptors.request.use((config)=>{  
    const token = localStorage.getItem('token');
    if (token){
        config.headers["Authorization"] = `Bearer ${token}` 
    }
    return config
})

// response단에서 에러를 처리하고 싶으면 
instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error.response)  // 명시적 에러 처리 
    }
)
