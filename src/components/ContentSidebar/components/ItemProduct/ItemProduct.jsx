import { deleteItem } from "@/apis/cartService";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity,
  productId,
  userId,
}) {
  const {
    container,
    boxContent,
    title,
    price,
    boxClose,
    size,
    SKU,
    overLayLoading,
  } = styles;
  const [isDelete, setIsDelete] = useState(false);
  const { handleGetListProducts } = useContext(SidebarContext);

  const handleRemoveItem = () => {
    setIsDelete(true);
    deleteItem({
      productId,
      userId,
    })
      .then((res) => {
        setIsDelete(false);
        handleGetListProducts(userId, "cart");
      })
      .catch((error) => {
        setIsDelete(false);
      });
  };
  return (
    <div className={container}>
      <img src={src} alt="" />
      <div className={boxClose} onClick={handleRemoveItem}>
        <IoMdClose style={{ fontSize: "20px" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        <div className={size}>Size: {sizeProduct}</div>
        <div className={price}>
          {""}
          {quantity} x ${priceProduct}
        </div>
        <div className={SKU}>SKU: {skuProduct}</div>
      </div>

      {isDelete && (
        <div className={overLayLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default ItemProduct;
