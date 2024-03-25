import { useState, createContext, useContext, useEffect } from "react";

export const userContext = createContext();


function UserProvider({ children }) {
    const [user, setUser] = useState(null);

  function registerUser(newUser) {
    setUser({
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
    });
  }

  return (
    <userContext.Provider value={{ user, setUser, registerUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;