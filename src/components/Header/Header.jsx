import BoxIcon from "./Boxicon/Boxicon";
import styles from "./styles.module.scss";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import Logo from "@icons/images/logo1.png";
import useScrollHandling from "@hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { BsCart3 } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    containerLogo,
    container,
    fixedHeader,
    topHeader,
    boxIcon,
  } = styles;

  const { scrollPosition } = useScrollHandling();

  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen, setType } = useContext(SidebarContext);
  // console.log(isOpen);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    // if (scrollPosition > 80) {
    //   setFixedPosition(true);
    // } else {
    //   setFixedPosition(false);
    // }

    // setFixedPosition(scrollPosition > 80 ? true : false);
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
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
          <img src={Logo} alt="Logo" style={{ width: "50%" }} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item, index) => {
              return (
                <Menu
                  key={index}
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload onClick={() => handleOpenSideBar("compare")} />
            <BsHeart onClick={() => handleOpenSideBar("wishlist")} />
            <BsCart3 onClick={() => handleOpenSideBar("cart")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
