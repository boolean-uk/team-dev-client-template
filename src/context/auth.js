import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Header from "../components/header";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import useAuth from "../hooks/useAuth";
import { createProfile, login, register } from "../service/apiClient";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (logout) {
      localStorage.removeItem("token");
      setToken(null);
      setLogout(false);
      navigate("/login", { state: null });
      return;
    }

    if (!storedToken && location.pathname !== "/login") {
      const redirectState = location.state || { from: location };

      navigate("/login", {
        state: redirectState,
      });
    }

    if (storedToken && !token) {
      setToken(storedToken);
    }

    if (storedToken && token && location.state) {
      navigate(location.state.from.pathname);
    }
  }, [location.state?.from?.pathname, navigate, logout, location, token]);

  const handleLogin = async (email, password) => {
    const res = await login(email, password);

    if (!res.data.token) {
      throw new Error(res.data.error)
    }

    localStorage.setItem("token", res.data.token);

    setToken(res.token);
    const redirectPath = location.state?.from?.pathname || "/";
    navigate(redirectPath);
  };

  const handleLogout = () => {
    setLogout(true);
  };

  const handleRegister = async (email, password) => {
    const res = await register(email, password);
    setToken(res.data.token);

    navigate("/verification");
  };

  const handleCreateProfile = async (firstName, lastName, githubUrl, bio, role, specialism, cohort, startDate, endDate, mobile, password) => {
    const { userId } = jwtDecode(token)

    await createProfile(userId, firstName, lastName, githubUrl, bio, role, specialism, cohort, startDate, endDate, mobile, password)

    localStorage.setItem("token", token);
    navigate("/");
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    onCreateProfile: handleCreateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }

  return (
    <div className="container">
      <Header />
      <Navigation />
      <Modal />
      {children}
    </div>
  );
};

export { AuthContext, AuthProvider, ProtectedRoute };
