import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import "./output.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/sign-in" element={<SignI />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
