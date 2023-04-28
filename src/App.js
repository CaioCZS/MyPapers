import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.js"
import SignUpPage from "./pages/SignUpPage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/cadastro" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
