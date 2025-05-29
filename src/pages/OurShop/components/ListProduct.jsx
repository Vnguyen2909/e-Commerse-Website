import MainLayout from "@components/Layout/Layout";
import { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";
import LoadingTextCommon from "@/components/LoadingTextCommon/LoadingTextCommon";

function ListProducts() {
  const { containerProduct, sectionListProduct, boxBtnLoadMore, rotate } =
    styles;
  const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
    useContext(OurShopContext);
  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <div className={isShowGrid ? containerProduct : ""}>
              {products.map((item, index) => (
                <ProductItem
                  key={item.id || index}
                  src={item.images[0]}
                  prevSrc={item.images[1]}
                  name={item.name}
                  price={item.price}
                  details={item}
                  isHomepage={false}
                />
              ))}
            </div>

            {products.length < total && (
              <div className={boxBtnLoadMore}>
                <Button
                  content={
                    isLoadMore ? <LoadingTextCommon /> : "LOAD MORE PRODUCT"
                  }
                  onClick={handleLoadMore}
                  size="small"
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
}

export default ListProducts;
