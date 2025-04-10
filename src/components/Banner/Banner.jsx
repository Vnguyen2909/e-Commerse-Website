import Button from "../Button/Button";
import styles from "./styles.module.scss";

function Banner() {
  const { container, content, title, des, btnBanner } = styles;

  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille</h1>
        <div className={des}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button className={btnBanner} size="small" content={"Go to shop"} />
      </div>
    </div>
  );
}

export default Banner;
