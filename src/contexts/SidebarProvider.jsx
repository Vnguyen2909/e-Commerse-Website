import { createContext, useState } from "react";
import { getCart } from "@/apis/cartService";
// import Cookies from "js-cookie";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [listProductCart, setListProductCart] = useState([]);
  // const userId = Cookies.get("userId");

  const handleGetListProducts = (userId, type) => {
    if (userId && type === "cart") {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((err) => {
          setListProductCart([]);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleGetListProducts,
    listProductCart,
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
