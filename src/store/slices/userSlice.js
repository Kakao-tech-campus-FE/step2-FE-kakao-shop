import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login,register } from "../../services/user";
import { setCookie } from "../../services/user";

const initialState = {
    email: null,
    loginTime: null,
    token: null,
};

const staticServerUrl = "https://user-app.krampoline.com/k070a976b7d47a"

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
    },
        logout: (state) => {
        state.email = null;
        state.token = null;
      },
      setUserInfo: (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
      }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.loading = false;
            state.email=action.payload.email;
            state.token = action.payload.token;
            setCookie({email: action.payload.email, token: action.payload.token})
            // localStorage.setItem("token",action.payload.token)
            
            
        });
        builder.addCase(loginRequest.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(registerRequest.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(registerRequest.fulfilled, (state, action) => {
            state.loading = false;
            window.location.href = staticServerUrl + "/";
            alert("회원가입이 완료되었습니다.")
          });
          builder.addCase(registerRequest.rejected, (state, action) => {
            state.loading = false;
            alert(action.error.message)
          });
    },
});

export const loginRequest = createAsyncThunk(
    staticServerUrl + "/api/login",
    async(data)=>{
        const {email, password}=data;
        const response=await login({email, password}); // action.payload

        return{
            email,
            token:response.headers.authorization
        }
        
    }
);

export const registerRequest = createAsyncThunk(
    staticServerUrl + "/api/join",
    async(data)=>{
        const {email, password, username}=data;
        const response=await register({email, password, username}); // action.payload
        console.log(email)
        return response.data
        
        
    }
);




export const { logout, setEmail, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
