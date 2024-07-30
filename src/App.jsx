import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Loading from "./pages/loading";
import Verification from "./pages/verification";
import Profile from "./pages/profile";
import { AuthProvider, ProtectedRoute } from "./context/auth";
import { ModalProvider } from "./context/modal";
import { CurrentUserProvider } from "./context/currentUser";
import Welcome from "./pages/welcome";
import AllSearchResults from "./pages/allSearchResults";

const App = () => {
  return (
    <>
      <AuthProvider>
        <CurrentUserProvider>
          <ModalProvider>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="loading" element={<Loading />} />
              <Route path="verification" element={<Verification />} />

              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="welcome"
                element={
                  <ProtectedRoute disabledNav={true}>
                    <Welcome />
                  </ProtectedRoute>
                }
              />
              <Route path="/search-results" element={<AllSearchResults />} />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
            </Routes>
          </ModalProvider>
        </CurrentUserProvider>
      </AuthProvider>
    </>
  );
};

export default App;
