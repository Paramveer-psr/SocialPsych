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
      cookies.remove("accessToken");
      state.isAuthenticated = false;
      state.user = null;
      state.isProfileSet = false;
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
      state.isProfileSet = state.user?.isProfileSet || false;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.isProfileSet = action.payload?.isProfileSet || false;
    },
    setProfileStatus(state, action) {
      state.isProfileSet = action.payload;
    },
  },
});

export const { signOut, checkAuth, checkProfile, setUser, setProfileStatus } =
  authSlice.actions;
export default authSlice.reducer;
