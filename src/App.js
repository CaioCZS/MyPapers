import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.js"
import SignUpPage from "./pages/SignUpPage.js"
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/carrinho" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/cadastro" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  )

export default App;
