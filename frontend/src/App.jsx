import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth, checkProfile } from "./store/slices/authSlice";
import Dashboard from "./routes/Dashboard";
import ProfilePage from "./routes/ProfilePage";
import { io } from "socket.io-client";
import SetProfile from "./routes/SetProfile";
import Chat from "./routes/Chat";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isProfileSet } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(checkProfile());
  }, [dispatch]);

  useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.on("connection", () => {
      console.log("A user connected", socket.id);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/" element={<Navigate to="/sign-in" />} />
              {/* <Route path="/set-profile" element={<SetProfile />} /> */}
            </>
          ) : (
            <>
              {!isProfileSet ? (
                <>
                  <Route path="/set-profile" element={<SetProfile />} />
                  <Route path="*" element={<Navigate to="/set-profile" />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Home />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/chat" element={<Chat />} />
                  </Route>
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
