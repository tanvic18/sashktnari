import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignupPage"; // Your Signup component
import Login from "./pages/LoginPage"; // Your Login component
import Dashboard from "./pages/DashboardPage"; // Your protected Dashboard component
import PrivateRoute from "./PrivateRoute"; // PrivateRoute component
import { AuthProvider } from "./AuthProvider"; // AuthProvider for context
import UserProfileForm from "./pages/UserProfileForm"; 
import SectionList from './pages/SectionList';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                    {/* Correctly wrapping SectionList in a Route */}
                    <Route path="/section-list" element={<SectionList />} />
                    
                    {/* Correcting UserProfileForm route */}
                    <Route path="/user-profile" element={<UserProfileForm />} />
                    
                    {/* PrivateRoute applied to Dashboard */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
