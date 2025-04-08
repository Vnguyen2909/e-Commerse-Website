import styles from "../styles.module.scss";
import fbicon from "@icons/svgs/faecbook.svg";
import insicon from "@icons/svgs/instagram.svg";
import hearticon from "@icons/svgs/heart.svg";
import carticon from "@icons/svgs/cart.svg";
import { PiShoppingCartThin } from "react-icons/pi";
import reloadicon from "@icons/svgs/reload.svg";

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbicon;
      case "ins":
        return insicon;
      case "cart":
        return carticon;
      case "heart":
        return hearticon;
      case "reload":
        return reloadicon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
