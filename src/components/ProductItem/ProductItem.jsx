import styles from "./styles.module.scss";
import { HiOutlineEye } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import reloadicon from "@icons/svgs/reload.svg";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomepage = true,
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState("");
  // console.log(isShowGrid);

  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceClass,
    boxSize,
    size,
    textCenter,
    boxButton,
    content,
    containerItem,
    largImg,
    isActiveSize,
    btnClear,
  } = styles;

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose("");
  };
  useEffect(() => {
    if (isHomepage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomepage, ourShopStore?.isShowGrid]);
  // console.log(sizeChoose);

  return (
    <div className={isShowGrid ? "" : containerItem}>
      <div className={cls(boxImg, { [largImg]: !isShowGrid })}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhenHover} />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <IoMdHeartEmpty />
          </div>
          <div className={boxIcon}>
            <BsBag />
          </div>
          <div className={boxIcon}>
            <TfiReload />
          </div>
          <div className={boxIcon}>
            <HiOutlineEye />
          </div>
        </div>
      </div>
      <div className={isShowGrid ? "" : content}>
        {!isHomepage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}

        {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            Clear
          </div>
        )}

        <div className={cls(title, { [textCenter]: !isHomepage })}>{name}</div>
        {!isHomepage && (
          <div className={textCenter} style={{ color: "#888" }}>
            Brand 01
          </div>
        )}
        <div
          className={cls(priceClass, { [textCenter]: !isHomepage })}
          style={{ color: isHomepage ? "#333" : "#888" }}
        >
          ${price}
        </div>

        {!isHomepage && (
          <div className={boxButton}>
            <Button content={"ADD TO CART"} size="small" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
