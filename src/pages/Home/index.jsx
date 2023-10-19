import { Footer, Navbar } from "../../components";
import { Contact, Gallery, History, Landing, OurServices } from "../../modules";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative  w-full">
        <Landing />
        <Gallery />
        <History />
        <OurServices />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
