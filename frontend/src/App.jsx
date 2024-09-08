import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";

function App() {
  const isLoggedIn = false;
  // const navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/"
                element={isLoggedIn ? <Home /> : <Navigate to="/sign-in" />}
              />
            </>
          ) : (
            <>
              <Route path="/sign-in" element={<Navigate to="/" />} />
              <Route path="/sign-up" element={<Navigate to="/" />} />
              <Route
                path="/"
                element={isLoggedIn ? <Home /> : <Navigate to="/sign-in" />}
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
