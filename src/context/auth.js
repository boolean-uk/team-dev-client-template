import { createContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from '../components/header';
import Modal from '../components/modal';
import Navigation from '../components/navigation';
import useAuth from '../hooks/useAuth';
import { createProfile, login, register } from '../service/apiClient';

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      navigate(location.pathname || '/');
    } else {
      navigate('/login');
    }
  }, []);

  const handleLogin = async (email, password) => {
    const res = await login(email, password);

    if (!res.data.token) {
      return navigate('/login');
    }

    localStorage.setItem('token', res.data.token);

    setToken(res.data.token);
    setUserCredentials({ email, password });
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUserCredentials({ email: '', password: '' });
  };

  const handleRegister = async (email, password) => {
    const res = await register(email, password);
    setToken(res.data.token);
    setUserCredentials({ email, password });

    navigate('/verification');
  };

  const handleCreateProfile = async (
    firstName,
    lastName,
    username,
    githubUrl,
    bio,
    profilePicture
  ) => {
    const { userId } = jwt_decode(token);

    await createProfile(userId, firstName, lastName, username, githubUrl, bio, profilePicture);

    localStorage.setItem('token', token);
    navigate('/');
  };

  const value = {
    token,
    userCredentials,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    onCreateProfile: handleCreateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  if (!token) {
    return <Navigate to={'/login'} replace state={{ from: location }} />;
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
