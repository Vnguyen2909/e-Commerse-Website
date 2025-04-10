import HeaderSidebar from "@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { CiHeart } from "react-icons/ci";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function WishList() {
  const { container, boxContent, container_BtnWishList } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar
          icon={<CiHeart style={{ fontSize: "25px" }} />}
          title="WISH LIST"
        />
        <ItemProduct />
      </div>
      <div className={container_BtnWishList}>
        <Button content={"View Wish Listt"} />
        <Button content={"Add All To Cart"} isPrimary={false} />
      </div>
    </div>
  );
}

export default WishList;
