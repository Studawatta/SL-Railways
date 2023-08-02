import { useEffect, useState } from "react";

const useOutSideClick = (ref) => {
  const [outSideClick, setOutSideClick] = useState(false);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOutSideClick(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [ref]);
  return outSideClick;
};

export default useOutSideClick;
