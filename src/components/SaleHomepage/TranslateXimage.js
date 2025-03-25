import { useState, useEffect, useRef } from "react";

const useTranslateXImage = () => {
const [scrollDriction, setScrollDrection] = useState(null);

  const previousScrollPosition = useRef(0);

  const [translateXPosition, setTranslateXPorsition] = useState(80);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDrection("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDrection("up");
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const HandleTranslateX = () => {
    if (scrollDriction === "down" && scrollPosition >= 1500) {
      setTranslateXPorsition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDriction === "up") {
      setTranslateXPorsition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  return {
    translateXPosition, HandleTranslateX, scrollPosition
  }
}

export default useTranslateXImage;