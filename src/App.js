import { Routes, Route } from "react-router-dom";
import Help from "./components/help/Help";
import HomePage from "./components/mainPage/homePage/HomePage";
import Settings from "./components/settings/Settings";

import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
