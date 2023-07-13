import axios from 'axios'

const instance = axios.create({
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
        if(error.response.status === "401"){
            localStorage.removeItem('token') // 토큰을 지워서 정상 처리 처럼 보내줄 수도 있다. 
            window.location.href = "/login"
            return Promise.resolve()
        }
        return Promise.reject(error.response)  // 명시적 에러 처리 
    }
)

// 회원가입이라는 버튼이 눌리면 
// data라는 payload 안에 엉뚱한 값이 들어가는 것을 방지하기 위해 명확히 지정해줌 
export const register = (data) => {
    const {email, password, username } = data;
    return instance.post('/join', {
        email,
        password,
        username
    })
}

// 로그인 버튼이 눌리면 동작
export const login = (data) =>{
    const {email, password} = data
    return instance.post('/login',{
        email,
        password
    })
}