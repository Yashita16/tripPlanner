import {createContext , useContext , useState} from 'react';



const   AuthContext=createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};


const AuthProvider=({children})=>{
   
   const [user,setuser]=useState(null);
   var value={user,setuser};

  return (
    <AuthContext.Provider value={value}> 
      {children}
   </AuthContext.Provider>

  )
}

export default AuthProvider;