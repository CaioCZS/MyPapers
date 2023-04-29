import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage/index.js";
import Item from "./pages/Item/index.js";
import UserContext from "./Context/UserContext.js";
import { useState } from "react";

function App() {
  const lsUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(lsUser ? lsUser : {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/item/:id" element={<Item />}></Route>
        <Route path="/carrinho" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/cadastro" element={<SignUpPage />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}
export default App;
