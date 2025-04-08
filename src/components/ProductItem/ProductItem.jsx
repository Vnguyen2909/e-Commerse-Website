import styles from "./styles.module.scss";
import { HiOutlineEye } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import reloadicon from "@icons/svgs/reload.svg";

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceClass,
  } = styles;

  return (
    <div>
      <div className={boxImg}>
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
      <div className={title}>{name}</div>
      <div className={priceClass}>${price}</div>
    </div>
  );
}

export default ProductItem;
