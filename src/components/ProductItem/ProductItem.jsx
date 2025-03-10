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
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
          alt=""
        />
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg"
          alt=""
          className={showImgWhenHover}
        />
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
      <div className={title}>10K Yellow Gold</div>
      <div className={priceClass}>$99.99</div>
    </div>
  );
}

export default ProductItem;
