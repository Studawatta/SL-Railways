import { useState } from "react";
import { Footer, Navbar } from "../../components";
import { Gallery, ImageSlider, Landing } from "../../modules";

const Home = () => {
  const [showImageSlider, setShowImageSlider] = useState(false);
  return (
    <>
      <div className={`${showImageSlider ? "bg-black/10" : ""}`}>
        <Navbar />
        <Landing />
        <Gallery show={setShowImageSlider} />
      </div>
      {showImageSlider ? <ImageSlider show={setShowImageSlider} /> : ""}
    </>
  );
};

export default Home;
