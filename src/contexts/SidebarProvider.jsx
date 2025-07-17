import { createContext, useEffect, useState } from "react";
import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [listProductCart, setListProductCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userId = Cookies.get("userId");

  const handleGetListProducts = (userId, type) => {
    if (userId && type === "cart") {
      setIsLoading(true);
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setListProductCart([]);
          setIsLoading(false);
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
    isLoading,
  };

  useEffect(() => {
    handleGetListProducts(userId, "cart");
  }, []);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
