import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
export const contextProvider = createContext(null);
const AuthProvider = ({ children }) => {
const [loader,setLoader]=useState(true)
    const provider =new GoogleAuthProvider()

    const googleLogin=()=>{
        return signInWithPopup(auth,provider)
    }
  const createUser = (email, password) => {
     return  createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser=(email,password)=>{
  return  signInWithEmailAndPassword(auth ,email,password)
  }

//   const authState=()=>{
//     onAuthStateChanged(auth,currentUser=>{
// console.log('this is the current user',currentUser)

//     })
//   }

  const allData = { createUser ,googleLogin,loader,signInUser
 };
  return (
    <contextProvider.Provider value={allData}>
      {children}
    </contextProvider.Provider>
  );
};

export default AuthProvider;
