import logo from "../../assets/img/logo_v2_white.png"
import authApi from "../../services/authApi"
import {
  Background,
  CloseIcon,
  ContentContainer,
  ExitIcon,
  MenuContainer,
} from "./style"
import { useContext } from "react"
import UserContext from "../../Context/UserContext.js"
import { useNavigate } from "react-router-dom"

export default function SideBar({ hidden, setHidden }) {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  function logOut() {
    const confirmed = window.confirm("Sair?")
    if (confirmed) {
      authApi
        .logOut(user.token)
        .then(() => {
          navigate("/")
          setUser({})
          localStorage.removeItem("user")
        })
        .catch((err) => alert(err.response.data))
    }
  }

  function Page(page) {
    navigate(page)
  }

  return (
    <>
      <Background
        visibility={hidden ? "none" : ""}
        onClick={() => (hidden ? "" : setHidden(!hidden))}
      >
        <CloseIcon />
      </Background>

      <MenuContainer visibility={hidden ? "-280px" : ""}>
        <ContentContainer>
          <div>
            <span>
              <ExitIcon
                onClick={
                  user.userName
                    ? () => logOut()
                    : () => alert(`Você não está logado`)
                }
              />
            </span>
            <p onClick={() => Page(!user.userName && "/login")}>
              {user.userName ? `Olá, ${user.userName}` : `Olá, faça seu login`}
            </p>
          </div>
          {/*
          <StyledLink>Categoria 1</StyledLink>
          <StyledLink>Categoria 2</StyledLink>
          <StyledLink>Categoria 3</StyledLink>
              */}
        </ContentContainer>

        <img
          alt="logo"
          src={logo}
          onClick={() => (hidden ? "" : setHidden(!hidden))}
        />
      </MenuContainer>
    </>
  )
}
