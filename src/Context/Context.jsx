import { createContext, useContext, useState } from "react";
import User from "../MockData/User";
import Followers from "../MockData/Followers";
import Repos from "../MockData/Repos";

export const appContext = createContext();
export const useGlobalContext = () => useContext(appContext);

const rootUrl = "https://api.github.com";

function AppProvider({ children }) {
  const [user, setUser] = useState(User);
  const [followers, setFollowers] = useState(Followers);
  const [repos, setRepos] = useState(Repos);

  return (
    <appContext.Provider value={{ user, followers,repos }}>
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
