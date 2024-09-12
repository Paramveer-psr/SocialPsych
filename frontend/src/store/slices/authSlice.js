import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    logout(state) {
      cookies.remove("accessToken");
      state.isAuthenticated = false;
      state.user = null;
    },
    checkAuth(state, actions) {
      const token = cookies.get("accessToken");
      console.log(token);
      if (token) {
        console.log(token);
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
  },
});

export const { logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
