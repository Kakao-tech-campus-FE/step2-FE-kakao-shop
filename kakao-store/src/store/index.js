import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productsReducer from './slices/productSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducer = combineReducers({
  user: userReducer,
  prodocts: productsReducer,
});

const peristedReducer = persistReducer(persistConfig, reducer);

// 실습멘토님이 도움주신 부분!

const store = configureStore({
  reducer: peristedReducer,
  // redux는 non-serializable한 데이터를 state나 action에 넣지 말아야하는데, react-persist에서 계속 체크하게 됩니다.
  // 그러니까 serializable 체크 설정을 끄셔야됩니다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// react-persist를 쓰시면 persistStore도 같이 설정해주셔야 됩니다.
// 그리고 App.js 파일에서 <PersistGate>로 감싸주셔야 돼요. 지금 확인해보니까 로컬스토리지에서 값이 전혀 변화되지 않습니다.
// react-persist의 사용법을 좀 더 공부하시면 좋을 것 같습니다.
export const persistor = persistStore(store);

export default store;
