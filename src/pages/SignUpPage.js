import SignScreen from "../style/signPages/SignScreen.js"
import LogoContainer from "../style/signPages/LogoContainer.js"
import { useState } from "react"
import authApi from "../services/authApi.js"
import { useNavigate } from "react-router-dom"
import StyledLink from "../style/signPages/StyledLink.js"
import logo from "../assets/img/logo_v2_white.png"

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const navigate = useNavigate()
  function handleForm(e) {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, password, passwordConfirm } = form
    const body = { name, email, password }
    if (passwordConfirm !== password) {
      alert("Senhas precisam ser iguais")
      setForm({ ...form, password: "", passwordConfirm: "" })
      return
    }
    authApi
      .signUp(body)
      .then((res) => {
        alert(res.data)
        navigate("/login")
      })
      .catch((err) => {
        alert(err.response.data)
        if (err.response.status === 409) {
          setForm({ ...form, email: "" })
        }
      })
  }

  return (
    <SignScreen>
      <LogoContainer>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </LogoContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NOME"
          name="name"
          value={form.name}
          onChange={handleForm}
          required
        ></input>
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
        <input
          type="password"
          placeholder="CONFIRME SUA SENHA"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleForm}
          required
        ></input>
        <button type="submit">Cadastrar</button>
      </form>
      <StyledLink to="/login">Já possui login? Clique aqui!</StyledLink>
    </SignScreen>
  )
}
