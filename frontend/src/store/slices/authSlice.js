import { createSlice } from "@reduxjs/toolkit";
import cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    status: "idle",
    error: null,
    isProfileSet: false,
  },
  reducers: {
    signOut(state) {
      cookies.remove("accessToken") && cookies.remove("refreshToken");
      state.isAuthenticated = false;
      state.user = null;
    },
    checkAuth(state) {
      const token = cookies.get("accessToken");
      if (token) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    checkProfile(state, action) {
      if (state.user.isProfileSet) {
        state.isProfileSet = true;
      } else {
        state.isProfileSet = false;
      }
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { signOut, checkAuth, setUser, checkProfile } = authSlice.actions;
export default authSlice.reducer;
