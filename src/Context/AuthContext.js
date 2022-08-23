import { createContext } from "react";

// const AuthContext = createContext({});
const AuthContext = createContext({ loggedIn: false }); //CHANGED FROM THIS TO ABOVE

export default AuthContext;
