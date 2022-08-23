import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const useAuth = () => {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  // const { user, setUser } = useContext(AuthContext); CHANGED

  return {
    user,
    setUser,
    //CHANGED BELOW
    loggedIn,
    setLoggedIn,
  };
};

export default useAuth;
