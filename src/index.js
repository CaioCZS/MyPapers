import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ResetStyle from "./style/ResetStyle.js"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
