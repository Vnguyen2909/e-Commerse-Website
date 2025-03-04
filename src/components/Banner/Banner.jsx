import Button from "../Button/Button";
import styles from "./styles.module.scss";

function Banner() {
  const { container, content, title, des } = styles;

  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>Store Nguyen Vi</h1>
        <div className={des}>
          Make skdsjd dksdksdjskd ksdjsdk skdjskdjsdk sdkjsd ksdj sdkj sdkj
        </div>
        <Button content={"Go to shop"} />
      </div>
    </div>
  );
}

export default Banner;
