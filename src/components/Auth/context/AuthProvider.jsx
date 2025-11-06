import React, { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
import { useState } from 'react'
import { useEffect } from 'react'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {

   //localStorage.clear()
     const [userData, setUserData] = useState(null)
    
    useEffect(() => {
      setLocalStorage()
     const {employees,admin}=getLocalStorage()
     setUserData({employees,admin})

    },[])
    

  return (
    <div>
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    </div>
  )
}

export default AuthProvider

// src/components/Auth/context/AuthProvider.jsx
// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
