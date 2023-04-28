import SignScreen from "../style/signPages/SignScreen.js"
import LogoContainer from "../style/signPages/LogoContainer.js"
import { useContext, useState } from "react"
import authApi from "../services/authApi.js"
import { useNavigate } from "react-router-dom"
import UserContext from "../Context/UserContext.js"

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const { setUser } = useContext(UserContext)
  function handleForm(e) {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    authApi
      .login(form)
      .then((res) => {
        const userTkn = res.data
        setUser(userTkn)
        localStorage.setItem("user", JSON.stringify(userTkn))
        navigate("/")
      })
      .catch((err) => {
        alert(err.response.data)
        setForm({ email: "", password: "" })
      })
  }

  return (
    <SignScreen>
      <LogoContainer>
        <h1>LOGO</h1>
      </LogoContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="EMAIL"
          name="email"
          value={form.email}
          onChange={handleForm}
          required
        ></input>
        <input
          type="password"
          placeholder="SENHA"
          name="password"
          value={form.password}
          onChange={handleForm}
          required
        ></input>
        <button type="submit">Entrar</button>
      </form>
    </SignScreen>
  )
}
