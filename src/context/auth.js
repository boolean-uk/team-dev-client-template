import { createContext, useEffect, useState } from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import Header from "../components/header"
import Modal from "../components/modal"
import Navigation from "../components/navigation"
import useAuth from "../hooks/useAuth"
import { createProfile, login, register } from "../service/apiClient"
import jwt_decode from "jwt-decode"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")

    if (storedToken) {
      setToken(storedToken)
      navigate(location.state?.from?.pathname || "/")
    }
  }, [location.state?.from?.pathname, navigate])

  const handleLogin = async (email, password) => {
    const res = await login(email, password)

    if (!res.data.token) {
      return navigate("/login")
    }

    localStorage.setItem("token", res.data.token)

    setToken(res.token)
    navigate(location.state?.from?.pathname || "/")
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  const handleRegister = async (email, password) => {
    const res = await register(email, password)
    setToken(res.data.token)

    navigate("/verification")
  }

  const handleCreateProfile = async (
    firstName,
    lastName,
    username,
    githubUrl,
    mobile,
    bio
  ) => {
    const { userId } = jwt_decode(token)

    localStorage.setItem("token", token)

    await createProfile(
      userId,
      firstName,
      lastName,
      username,
      githubUrl,
      mobile,
      bio
    )

    navigate("/")
  }

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    onCreateProfile: handleCreateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()
  const location = useLocation()

  if (!token) {
    return <Navigate to={"/login"} replace state={{ from: location }} />
  }

  return (
    <div className="container">
      <Header />
      <Navigation />
      <Modal />
      {children}
    </div>
  )
}

export { AuthContext, AuthProvider, ProtectedRoute }
