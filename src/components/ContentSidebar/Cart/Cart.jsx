import HeaderSidebar from "@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { BsCart3 } from "react-icons/bs";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function Cart() {
  const {
    container,
    boxContent,
    total,
    container_BtnCart,
    containerListProductCart,
    overLayLoading,
  } = styles;

  const { listProductCart, isLoading } = useContext(SidebarContext);
  console.log(isLoading);

  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar
          icon={<BsCart3 style={{ fontSize: "25px" }} />}
          title="CART"
        />
        {isLoading ? (
          <LoadingTextCommon />
        ) : (
          listProductCart.map((item, index) => {
            return (
              <ItemProduct
                key={index}
                src={item.images[0]}
                nameProduct={item.name}
                priceProduct={item.price}
                skuProduct={item.sku}
                sizeProduct={item.size}
                quantity={item.quantity}
                productId={item.productId}
                userId={item.userId}
              />
            );
          })
        )}
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
