import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Header from "../components/header";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import useAuth from "../hooks/useAuth";
import { createProfile, login, register } from "../service/apiClient";
import jwt_decode from "jwt-decode"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	
	const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

    useEffect(() => {

      const storedToken = localStorage.getItem('token')

      if (storedToken && !token) {
          setToken(storedToken)
          navigate("/")
      }
      if (token) {
        const decoded = jwt_decode(token)
        setUserId(decoded.userId)
      }
    }, [navigate, token])


	const handleLogin = async (email, password) => {
		const res = await login(email, password)

        if (!res.data.token) {
            return navigate("/login")
        }

        localStorage.setItem('token', res.data.token)

		setToken(res.data.token)
		navigate("/")
	};

	const handleLogout = () => {
        localStorage.removeItem('token')
		setToken(null)
	};

    const handleRegister = async (email, password) => {
        const res = await register(email, password)
		setToken(res.data.token)

        navigate("/verification")
    }

    const handleCreateProfile = async (firstName, lastName, githubUrl, bio) => {
        const { userId } = jwt_decode(token)

        await createProfile(userId, firstName, lastName, githubUrl, bio)

        localStorage.setItem('token', token)
        navigate('/')
    }

  const value = {
    token,
    userId,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    onCreateProfile: handleCreateProfile
  };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

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
