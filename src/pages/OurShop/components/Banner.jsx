import styles from "../styles.module.scss";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Button from "@components/Button/Button";

function Banner() {
  const { containerBanner, contentBox, countdownBox, title, boxBtn } = styles;
  const targetDate = "2025-05-30";
  return (
    <div className={containerBanner}>
      <div className={contentBox}>
        <div className={countdownBox}>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className={title}>The Classics Make A Comeback</div>

        <div className={boxBtn}>
          <Button className={boxBtn} size="small" content={"Buy Now"} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
