import React from "react";

const UserInfoForm = ({ user, onLogout }) => {
  const { fullName } = user;

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h2>Bienvenido, {fullName.split(" ")[0]}.</h2>
      {/* Mostrar las opciones del menú aquí */}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default UserInfoForm;
