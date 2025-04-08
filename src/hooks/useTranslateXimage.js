import useScrollHandling from '@hooks/useScrollHandling'
import { useEffect, useState } from 'react';
const useTranslateXImage = () =>{
    const {scrollDriction, scrollPosition} = useScrollHandling();
    const [translateXPosition, setTranslateXPorsition] = useState(80);
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

    useEffect(()=>{
        HandleTranslateX();
    },[scrollPosition])

    return {
        translateXPosition
    }
}

export default useTranslateXImage;