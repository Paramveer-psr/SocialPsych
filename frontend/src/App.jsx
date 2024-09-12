import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
    console.log(isAuthenticated);
  }, [dispatch]);
  // const navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/"
                element={
                  isAuthenticated ? <Home /> : <Navigate to="/sign-in" />
                }
              />
            </>
          ) : (
            <>
              <Route path="/sign-in" element={<Navigate to="/" />} />
              <Route path="/sign-up" element={<Navigate to="/" />} />
              <Route
                path="/"
                element={
                  isAuthenticated ? <Home /> : <Navigate to="/sign-in" />
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
