import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  role: string;
  isLogin: boolean;
}

const initialState: UserState = {
  role: '',
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    setIsLogin(state) {
      state.isLogin = true;
    },
    setLogout(state) {
      state.isLogin = false;
    },
  },
});

export default userSlice.reducer;
