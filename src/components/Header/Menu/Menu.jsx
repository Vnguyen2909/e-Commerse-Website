import { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { StoreContext } from "@/contexts/storeProvider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SidebarContext);
  const { userInfo, handelLogOut } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const navigate = useNavigate();

  const handelClickShowMenu = () => {
    if (content === "Sign in" && !userInfo) {
      setIsOpen(true);
      setType("login");
    } else if (content === "Contacts") {
      setIsOpen(true);
      setType("contact");
    }

    if (content === "Our Shop") {
      navigate("/OurShop");
    }
  };

  const handelRenderText = (content) => {
    if (content === "Sign in" && userInfo) {
      return `Hello: ${userInfo?.username}`;
    } else {
      return content;
    }
  };

  const handelHover = () => {
    console.log(content);
    if (content === "Sign in" && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onClick={handelClickShowMenu}
      onMouseEnter={handelHover}
    >
      {handelRenderText(content)}
      {isShowSubMenu && (
        <div
          className={subMenu}
          onMouseLeave={() => setIsShowSubMenu(false)}
          onClick={handelLogOut}
        >
          Log out
        </div>
      )}
    </div>
  );
}

export default Menu;
