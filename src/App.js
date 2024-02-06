import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Cohort from "./pages/cohort";
import Login from "./pages/login";
import Register from "./pages/register";
import Loading from "./pages/loading";
import Verification from "./pages/verification";
import { AuthProvider, ProtectedRoute } from "./context/auth";
import { ModalProvider } from "./context/modal";
import Welcome from "./pages/welcome";

const App = () => {
	return (
		<>
			<AuthProvider>
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
												<Route
                            path="my-cohort"
                            element={
                                <ProtectedRoute disabledNav={true}>
                                    <Cohort />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </ModalProvider>
			</AuthProvider>
		</>
	);
};

export default App;
