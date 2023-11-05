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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const response = await fetch(`${rootUrl}/users/${user}`);
    const data = await response.json();
    if (data.login) {
      setUser(data);
    } else {
      calculateReqs();
      showError(true, "Invalid User Name. Try again with proper name");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    calculateReqs();
  }, []);

  return (
    <appContext.Provider
      value={{ user, followers, repos, limit, error, getUser, isLoading }}
    >
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
