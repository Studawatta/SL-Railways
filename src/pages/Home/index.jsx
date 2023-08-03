import { Footer, Navbar } from "../../components";
import { Gallery, Landing } from "../../modules";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Gallery />
    </div>
  );
};

export default Home;
