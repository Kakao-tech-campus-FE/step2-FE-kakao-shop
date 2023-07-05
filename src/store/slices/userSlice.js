// slices : 각각의 reducer에 해당하는 파일들
// createSlice를 통해 slice를 만든다
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
}

const userSlice = createSlice({
    // name에 들어가는 값이 구분자(key 역할)가 된다(다른 slice와 겹치치 않아야 한다)
    name: "user",
    initialState,

    // reducers : 상태를 전달하는 함수
    // set함수를 통해 전달된 데이터들은 모두 payload에 담겨져서 전달된다
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
    },
})

// slice를 만들면 actions이 return 된다.
// actions 안에는 reducers 안의 내용물들이 있다.
// 아래 구문은 userSlice의 reducers 중에 setEmail만 가져와서 사용하는 것이다.
export const { setEmail } = userSlice.actions;

// reducer 자체도 export 해주어야 한다!
export default userSlice.reducer;