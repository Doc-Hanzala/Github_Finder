import { createContext, useContext, useState } from "react";
import User from '../MockData/User'
import Followers from '../MockData/Followers'

export const appContext = createContext();
export const useGlobalContext = () => useContext(appContext);


const rootUrl = 'https://api.github.com'

function AppProvider({ children }) {
  const [user,setUser] = useState(User)
  const [followers,setFollowers] = useState(Followers)

  return <appContext.Provider value={{user,followers}}>{children}</appContext.Provider>;
}

export default AppProvider;
