import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import useTranslateXImage from "./TranslateXimage";

function SaleHomePgae() {
  const { container, title, des, boxBtn, boxImg, imgsale } = styles;

  const { translateXPosition, HandleTranslateX, scrollPosition } =
    useTranslateXImage();

  useEffect(() => {
    HandleTranslateX();
  }, [scrollPosition]);

  // console.log(scrollDriction);
  // console.log(translateXPosition);

  return (
    <div className={container}>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          className={imgsale}
          src="	https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div>
          <Button content={"Read more"} isPrimary={false} className={boxBtn} />
        </div>
      </div>
      <div
        className={boxImg}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          className={imgsale}
          src="	https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SaleHomePgae;
