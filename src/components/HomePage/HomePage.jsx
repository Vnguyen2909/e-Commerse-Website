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
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadlingListProduct />
      </div>
    </>
  );
}

export default HomePage;
