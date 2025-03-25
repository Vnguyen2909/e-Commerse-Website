import MyHeader from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadlingListProduct from "../HeadlingListProduct/HeadlingListProduct";
import { useEffect, useState } from "react";
import { getProduct } from "@/apis/productService";
import PopularProduct from "../popularProduct/popularProduct";
import SaleHomePgae from "../SaleHomepage/SaleHomepage";

function HomePage() {
  const [ListProducts, setListProducts] = useState([]);
  useEffect(() => {
    getProduct().then((res) => {
      setListProducts(res.contents);
    });
  }, []);
  console.log(ListProducts);
  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadlingListProduct data={ListProducts.slice(0, 2)} />
      <PopularProduct data={ListProducts.slice(2, ListProducts.length)} />
      <SaleHomePgae />
    </>
    // <div className={container}>

    // </div>
  );
}

export default HomePage;
