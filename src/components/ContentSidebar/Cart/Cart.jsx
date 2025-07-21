import HeaderSidebar from "@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { BsCart3 } from "react-icons/bs";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import cls from "classnames";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    container,
    total,
    container_BtnCart,
    isEmpty,
    boxEmpty,
    textEmpty,
    boxBtnEmpty,
    containerListItem,
    price,
  } = styles;

  const { listProductCart, isLoading, setIsOpen } = useContext(SidebarContext);
  console.log(listProductCart);
  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate("/OurShop");
    setIsOpen(false);
  };

  const subTotal = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  console.log(subTotal);

  return (
    <div className={cls(container, { [isEmpty]: !listProductCart.length })}>
      <HeaderSidebar
        icon={<BsCart3 style={{ fontSize: "25px" }} />}
        title="CART"
      />
      {listProductCart.length ? (
        <div className={containerListItem}>
          <div>
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
              <p className={price}>${subTotal.toFixed(2)}</p>
            </div>
            <div className={container_BtnCart}>
              <Button content={"View Wish Listt"} />
              <Button content={"Add All To Cart"} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div className={textEmpty}>No products in the cart</div>
          <div className={boxBtnEmpty}>
            <Button
              content={"Return to Shop"}
              size="small"
              onClick={handleNavigateToShop}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
