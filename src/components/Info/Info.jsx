import MainLayout from "../Layout/Layout";
import { datInfo } from "./contants";
import Inforcard from "./InfoCard/InfoCard";
import styles from "./styles.module.scss";

function Info() {
  const { container } = styles;
  return (
    <MainLayout>
      <div className={container}>
        {datInfo.map((item, index) => {
          return (
            <Inforcard
              key={index}
              content={item.title}
              description={item.description}
              src={item.src}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Info;
