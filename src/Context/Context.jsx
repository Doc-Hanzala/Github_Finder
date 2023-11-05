import { createContext, useContext, useState } from "react";
import User from "../MockData/User";
import Followers from "../MockData/Followers";
import Repos from "../MockData/Repos";
import { useEffect } from "react";

export const appContext = createContext();
export const useGlobalContext = () => useContext(appContext);

const rootUrl = "https://api.github.com";

function AppProvider({ children }) {
  const [user, setUser] = useState(User);
  const [followers, setFollowers] = useState(Followers);
  const [repos, setRepos] = useState(Repos);
  const [limit, setLimit] = useState();
  const [error, setError] = useState({ show: false, msg: "" });

  // calculating Reqs Limit
  const calculateReqs = async () => {
    const response = await fetch(`${rootUrl}/rate_limit`);
    const data = await response.json();
    let {
      rate: { remaining },
    } = data;
    setLimit(remaining);

    if (remaining === 0) {
      showError(true, "You have exceeded the rate Limit. Try after 1 hour");
    }
  };

  // Showing Errors
  function showError(show = false, msg = "") {
    setError({ show, msg });
  }

  const getUser = async (user) => {
    const response = await fetch(`${rootUrl}/users/${user}`);
    const data = await response.json()
    setUser(data)
  };
  useEffect(() => {
    calculateReqs();
  }, []);

  return (
    <appContext.Provider value={{ user, followers, repos, limit, error,getUser }}>
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
