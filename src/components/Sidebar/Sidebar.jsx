import { useContext } from "react";
import styles from "./styles.module.scss";
import { SidebarContext } from "@/contexts/SidebarProvider";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";
import Login from "@components/ContentSidebar/Login/Login";
import Compare from "@components/ContentSidebar/Compare/Compare";
import WishList from "@components/ContentSidebar/Wishlist/Wishlist";
import Cart from "@components/ContentSidebar/Cart/Cart";

function SideBar() {
  const { container, overlay, sideBar, slideSidebar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SidebarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(type);

  const handleRenderContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      case "compare":
        return <Compare />;
      case "wishlist":
        return <WishList />;
      case "cart":
        return <Cart />;
        break;

      default:
        return null;
        break;
    }
  };

  // console.log(type);
  return (
    <div className={container}>
      <div className={classNames({ [overlay]: isOpen })} />
      <div className={classNames(sideBar, { [slideSidebar]: isOpen })}>
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
  );
}

export default SideBar;
