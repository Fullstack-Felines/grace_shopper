import AuthContext from "../Context/AuthContext";
import { useState, useEffect } from "react";
import { fetchMe } from "../api/authorization";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getMe() {
      const me = await fetchMe();
      setUser(me);
    }
    getMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
