import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";

function ItemProduct() {
  const { container, boxContent, title, price, boxClose, size, SKU } = styles;
  return (
    <div className={container}>
      <img
        src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg"
        alt=""
      />
      <div className={boxClose}>
        <IoMdClose style={{ fontSize: "20px" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>title of product</div>
        <div className={size}>Size: M</div>
        <div className={price}>$199.99</div>
        <div className={SKU}>SKU: 12349</div>
      </div>
    </div>
  );
}

export default ItemProduct;
