import { useContext } from "react";
import styles from "../styles.module.scss";
import { SidebarContext } from "@/contexts/SidebarProvider";

function Menu({ content, href }) {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SidebarContext);

  const handelClickShowMenu = () => {
    if (content === "Sign in") {
      setIsOpen(true);
      setType("login");
    } else if (content === "Contacts") {
      setIsOpen(true);
      setType("contact");
    }
  };
  return (
    <div className={menu} onClick={handelClickShowMenu}>
      {content}
    </div>
  );
}

export default Menu;
