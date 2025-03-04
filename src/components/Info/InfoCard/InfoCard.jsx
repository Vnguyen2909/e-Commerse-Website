import styles from "../styles.module.scss";

function Inforcard({ content, description, src }) {
  const { containerCard, containerContent, des, title } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt="" />
      <div className={containerContent}>
        <span className={title}>{content}</span>
        <span className={des}>{description}</span>
      </div>
    </div>
  );
}

export default Inforcard;
