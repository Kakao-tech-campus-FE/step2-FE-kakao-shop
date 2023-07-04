// redux에서 관리하는 모든 상태는 하나의 store에서 관리한다.
// store를 생성할 때는 createStore()를 사용한다.
// createStore()는 첫 번째 인자로 reducer를 받는다.
// reducer는 상태를 변경하는 함수이다.
// reducer는 state와 action을 인자로 받는다.
// state는 현재 상태이고, action은 상태를 변경하는데 필요한 정보를 담고 있다.
// reducer는 state를 직접 변경하지 않고, 새로운 state를 반환한다.
// reducer는 순수 함수이다.
// 순수 함수는 외부의 상태를 변경하지 않고, 동일한 인자가 들어오면 항상 동일한 값을 반환한다.
// reducer는 default로 state를 반환한다.
//

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
const store = configureStore({
    reducer: {
        // User reducer : email
        // Products reducer : products
        user: userReducer
    }
});


export default store;