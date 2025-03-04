import BoxIcon from "./Boxicon/Boxicon";
import styles from "./styles.module.scss";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import Logo from "@icons/images/logo.png";

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    containerLogo,
    container,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(0, 2).map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href} />
              );
            })}
          </div>
        </div>
        <div className={containerLogo}>
          <img src={Logo} alt="Logo" style={{ width: "18%" }} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href} />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(2).map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
