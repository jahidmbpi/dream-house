/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  // registation validatation
  const createUser = (emai, password) => {
    return createUserWithEmailAndPassword(auth, emai, password);
  };

  // login validatation

  const login = (emai, password) => {
    return signInWithEmailAndPassword(auth, emai, password);
  };

  // logOut validatation
  const Logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("onAuthStateChanged user", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { createUser, login, user, Logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
