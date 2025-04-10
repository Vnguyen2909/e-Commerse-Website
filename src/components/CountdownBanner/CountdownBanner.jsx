import styles from "./styles.module.scss";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Button from "@components/Button/Button";

function CountdownBanner() {
  const { container, containerTimer, title, boxBtn } = styles;
  const targetDate = "2025-05-30";
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The classics make a comeback</p>
      <div className={boxBtn}>
        <Button size="small" content="Shop now" />
      </div>
    </div>
  );
}

export default CountdownBanner;
