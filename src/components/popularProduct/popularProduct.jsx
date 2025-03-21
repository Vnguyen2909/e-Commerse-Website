import MainLayout from "../Layout/Layout";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./styles.module.scss";

function PopularProduct({ data }) {
  const { container } = styles;
  console.log(data);
  return (
    <>
      <MainLayout>
        <div className={container}>
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
      </MainLayout>
    </>
  );
}

export default PopularProduct;
