import AuthContext from "../Context/AuthContext";
import { useState, useEffect } from "react";
import { fetchMe } from "../api/authorization";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });
  // const [loggedIn, setLoggedIn] = useState(false);

  //CHANGED FROM THIS CODE BELOW
  useEffect(() => {
    async function getMe() {
      const me = await fetchMe();
      setUser(me);
    }
    getMe();
  }, []);

  // useEffect(() => {
  //   const getMe = async () => {
  //     const me = await fetchMe();
  //     if (me.loggedIn === false) {
  //       setUser({ username: "guest user" });
  //     } else {
  //       setUser(me);
  //       setLoggedIn(true);
  //     }
  //   };
  //   getMe();
  // }, [loggedIn]);

  //, loggedIn, setLoggedIn
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
