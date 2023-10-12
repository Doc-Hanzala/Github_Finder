import Info from "../Components/Info";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import User from "../Components/User";

const Home = () => {
  return (
    <main>
        <Navbar/>
        <Search/>
        <Info/>
        <User/>
    </main>
  )
};

export default Home;
