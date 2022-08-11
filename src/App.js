import { Routes, Route } from "react-router-dom";
import AddCard from "./components/addCard/AddCard";
import Help from "./components/help/Help";
import HomePage from "./components/mainPage/homePage/HomePage";
import MyCards from "./components/myCards/MyCards";
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
        <Route path="/mycards" element={<MyCards />}></Route>
        <Route path="/addcard" element={<AddCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
