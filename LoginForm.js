import React, { useState } from "react";


const Loginform = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Validar las credenciales aquí (ejemplo simplificado)
    if (username === "usuario" && pin === "1234") {
      onLogin({ fullName: "Nombre Apellido", username: "usuario" });
    } else {
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          PIN:
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Loginform;
