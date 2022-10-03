import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';

const rooReducer = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rooReducer,
  });
};

export type RootState = ReturnType<typeof rooReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
