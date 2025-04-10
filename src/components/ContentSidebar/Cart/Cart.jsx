import HeaderSidebar from "@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { BsCart3 } from "react-icons/bs";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Cart() {
  const { container, boxContent, total, container_BtnCart } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar
          icon={<BsCart3 style={{ fontSize: "25px" }} />}
          title="CART"
        />
        <ItemProduct />
      </div>
      <div>
        <div className={total}>
          <p>Subtotal: </p>
          <p>$199.98</p>
        </div>
        <div className={container_BtnCart}>
          <Button content={"View Wish Listt"} />
          <Button content={"Add All To Cart"} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
