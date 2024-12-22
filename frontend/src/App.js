import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Signup from "./components/Signup";
import Login from "./components/Login";
import VideoGrid from "./components/VideoGrid";
import VideoForm from "./components/VideoForm";
import "./styles/global.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Check if token exists
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          {/* Main Content Route */}
          <Route path="/" element={<MainContent />} />

          {/* Public Routes */}
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <Signup setAuth={setIsAuthenticated} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login setAuth={setIsAuthenticated} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          {/* Private Route */}
          <Route
            path="/home"
            element={
              isAuthenticated ? <VideoGrid /> : <Navigate to="/login" />
            }
          />

          {/* Default Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <VideoForm />
      </div>
    </Router>
  );
};

export default App;


