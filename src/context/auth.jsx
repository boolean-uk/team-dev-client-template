import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import useAuth from "../hooks/useAuth";
import { createProfile, login, register } from "../service/apiClient";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Modal from "../components/modal";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");
  const [openMenus, setOpenMenus] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.body.addEventListener("click", () => {setOpenMenus(false)})
  }, [openMenus])

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      navigate(location.state?.from?.pathname || "/");
    }
  }, [location.state?.from?.pathname, navigate]);

  const handleLogin = async (email, password) => {
    try {
      const res = await login(email, password);

      if (res.data.error) {
        setError(res.data.error);
        return;
      }

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate(location.state?.from?.pathname || "/");
        setError("");
        return;
      }
      setError("Login failed");
      navigate("/login");
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setError("");
  };

  const handleRegister = async (email, password) => {
    try {
      const res = await register(email, password);
      if (res.data.error) {
        setError(res.data.error);
        return;
      }
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      navigate("/verification");
      setError("");
    } catch (error) {
      setError("An error occurred during registration");
    }
  };

  const handleCreateProfile = async (
    firstName,
    lastName,
    username,
    githubUsername,
    mobile,
    bio
  ) => {
    try {
      const { userId } = jwt_decode(token);

      const res = await createProfile(
        userId,
        firstName,
        lastName,
        username,
        githubUsername,
        mobile,
        bio
      );

      if (res.status === "success") {
        navigate("/");
        return;
      }
      setError("Failed to create profile");
    } catch (error) {
      setError("An error occurred during profile creation");
    }
  };

  const value = {
    token,
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    onCreateProfile: handleCreateProfile,
    openMenus,
    setOpenMenus,
    error,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
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
