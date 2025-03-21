import styles from "./styles.module.scss";
import eyeicon from "@icons/svgs/eye.svg";
import hearticon from "@icons/svgs/heart.svg";
import carticon from "@icons/svgs/cart.svg";
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
            <img src={eyeicon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={eyeicon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={eyeicon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={eyeicon} alt="" />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceClass}>${price}</div>
    </div>
  );
}

export default ProductItem;
