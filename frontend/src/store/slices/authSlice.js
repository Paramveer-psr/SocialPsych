import { createSlice } from "@reduxjs/toolkit";
import cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    status: "idle",
    error: null,
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
        // console.log(token);
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
});

export const { signOut, checkAuth } = authSlice.actions;
export default authSlice.reducer;
