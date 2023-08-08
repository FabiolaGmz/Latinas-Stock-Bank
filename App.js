import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserInfoForm from "./UserInfoForm";
import "./Loginform.css"; 


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Technolatinas - Aplicación de Acciones</h1>
      </header>
      {isLoggedIn ? (
        <UserInfoForm user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <div className="login-form-container">
          <Loginform onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
