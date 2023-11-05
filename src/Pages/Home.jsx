import Info from "../Components/Info";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import User from "../Components/User";
import Repos from "../Components/Repos";
import { useGlobalContext } from "../Context/Context";
import loading from "../assets/images/preloader.gif";

const Home = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loading} alt="loading" className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Home;
