// UserContext.js
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Obtener el usuario almacenado en el localStorage, si existe
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const defaultUser = storedUser || {
    id: "",
  };

  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    // Almacenar el usuario en el localStorage cada vez que cambie
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const updateUser = (newUserData) => {
    console.log(newUserData)
    setUser({
      id: newUserData,
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
