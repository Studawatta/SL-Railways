import { useEffect, useRef, useState } from "react";
import { r1, r2, r3, r4 } from "../../assets";

const Carousel = () => {
  const [counter, setCounter] = useState(0);

  const img01Ref = useRef();
  const img02Ref = useRef();
  const img03Ref = useRef();
  const img04Ref = useRef();

  const sliderImages = [img01Ref, img02Ref, img03Ref, img04Ref];

  const next = () => {
    if (counter < sliderImages.length - 1) {
      sliderImages[counter].current.style.animation =
        "next01 1s ease-in forwards";
      sliderImages[counter + 1].current.style.animation =
        "next02 1s ease-in forwards";
      setCounter(counter + 1);
    } else {
      sliderImages[0].current.style.animation = "next02 1s ease-in forwards";
      sliderImages[sliderImages.length - 1].current.style.animation =
        "next01 1s ease-in forwards";
      setCounter(0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      next();
    }, 5000);
  }, [counter]);
  const imageStyle = " absolute h-[820px] min-w-full  object-cover";

  return (
    <div className=" relative h-[820px] w-full overflow-hidden bg-red-400 ">
      <img
        src={r1}
        alt="sliderImage"
        className={`${imageStyle} left-0`}
        ref={img01Ref}
      />
      <img
        src={r2}
        alt="sliderImage"
        className={`${imageStyle} left-full`}
        ref={img02Ref}
      />
      <img
        src={r3}
        alt="sliderImage"
        className={`${imageStyle} left-full`}
        ref={img03Ref}
      />
      <img
        src={r4}
        alt="sliderImage"
        className={`${imageStyle} left-full`}
        ref={img04Ref}
      />

      {/* NAVIGATOR */}
      <div className="absolute bottom-60 left-0 right-0 mx-auto flex h-5 w-28 items-center justify-between">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full  ${
              counter === index ? "bg-slate-500" : "bg-slate-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
