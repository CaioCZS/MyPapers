import SignScreen from "../style/signPages/SignScreen.js"
import LogoContainer from "../style/signPages/LogoContainer.js"
import { useState } from "react"
import authApi from "../services/authApi.js"

export default function SignUpPage() {
  const [form, setForm] = useState({ email: "", password: "", name: "" })

  function handleForm(e) {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    authApi
      .signUp(form)
      .then((res) => alert(res.data))
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
        <h1>LOGO</h1>
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
        <button type="submit">Cadastrar</button>
      </form>
    </SignScreen>
  )
}
