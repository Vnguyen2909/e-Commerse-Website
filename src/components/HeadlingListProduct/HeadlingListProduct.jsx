import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "../CountdownBanner/CountdownBanner";
import ProductItem from "../ProductItem/ProductItem";

function HeadlingListProduct() {
  const { container, containerTimer } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerTimer}>
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadlingListProduct;
