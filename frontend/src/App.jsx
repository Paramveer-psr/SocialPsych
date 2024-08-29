import { useState } from "react";

import "./output.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SignIn /> */}
      <SignUp />
    </>
  );
}

export default App;
