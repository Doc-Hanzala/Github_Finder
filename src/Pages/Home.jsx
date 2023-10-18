import Info from "../Components/Info";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import User from "../Components/User";
import Repos from '../Components/Repos'

const Home = () => {
  return (
    <main>
        <Navbar/>
        <Search/>
        <Info/>
        <User/>
        <Repos/>
    </main>
  )
};

export default Home;
