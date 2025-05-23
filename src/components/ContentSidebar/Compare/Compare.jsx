import HeaderSidebar from "@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar";
import { TfiReload } from "react-icons/tfi";
import styles from "./styles.module.scss";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Compare() {
  const { container, boxContent, container_BtnCompare } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar
          icon={<TfiReload style={{ fontSize: "25px" }} />}
          title="COMPARE"
        />
        <ItemProduct />
      </div>
      <div className={container_BtnCompare}>
        <Button content="View Compare" />
      </div>
    </div>
  );
}

export default Compare;
