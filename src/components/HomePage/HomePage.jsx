import MyHeader from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadlingListProduct from "../HeadlingListProduct/HeadlingListProduct";

function HomePage() {
  const { container } = styles;
  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadlingListProduct />
    </>
    // <div className={container}>

    // </div>
  );
}

export default HomePage;
