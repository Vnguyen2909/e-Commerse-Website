import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "../CountdownBanner/CountdownBanner";

function HeadlingListProduct() {
  const targetDate = "2025-03-07";
  const { container, conatinerTimer } = styles;
  return (
    <MainLayout>
      {/* {<CountdownTimer targetDate={targetDate} />} */}
      <div className={container}>
        <CountdownBanner />
        <div>Count down</div>
        <div className={conatinerTimer}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadlingListProduct;
