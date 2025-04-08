import HeaderSidebar from "@components/ContentSidebar/components/HeaderSidebar";
import { TfiReload } from "react-icons/tfi";
import styles from "./styles.module.scss";

function Comapare() {
  const { container } = styles;
  return (
    <div className={container}>
      <HeaderSidebar icon={<TfiReload />} title="Compare" />
    </div>
  );
}

export default Comapare;
