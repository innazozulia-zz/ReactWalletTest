import { Routes, Route } from "react-router-dom";
import HomePage from "./components/mainPage/homePage/HomePage";

import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
