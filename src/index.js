import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ResetStyle from "./style/ResetStyle.js"
import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./style/GlobalStyle.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
