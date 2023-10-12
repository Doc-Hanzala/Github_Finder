import { createContext, useContext } from "react";

export const appContext = createContext();
export const useGlobalContext = () => useContext(appContext);


const rootUrl = 'https://api.github.com'

function AppProvider({ children }) {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
}

export default AppProvider;
