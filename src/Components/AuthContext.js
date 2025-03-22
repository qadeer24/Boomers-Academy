import { createContext, useState, useContext } from "react";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [LoginisActive, setLoginIsActive] = useState(false);

  const toggleLogin = () => {
    setLoginIsActive((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ LoginisActive, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};


// Custom hook to use the context
export const useAuth = () => {
    return useContext(AuthContext);
  };