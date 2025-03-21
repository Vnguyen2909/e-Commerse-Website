import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "../CountdownBanner/CountdownBanner";
import ProductItem from "../ProductItem/ProductItem";

function HeadlingListProduct({ data }) {
  const { container, containerTimer } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerTimer}>
          {data.map((item, index) => (
            <ProductItem
              key={item.id || index}
              src={item.images[2]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadlingListProduct;
