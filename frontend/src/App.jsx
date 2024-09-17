import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/slices/authSlice";
import Dashboard from "./routes/Dashboard";
import ProfilePage from "./routes/ProfilePage";
import { io } from "socket.io-client";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
    //console.log(isAuthenticated);
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
            </>
          ) : (
            <>
              <Route path="/" element={<Home />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>

              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
