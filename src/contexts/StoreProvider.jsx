import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getInfo } from "@/apis/authService";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get("userId"));

  const handelLogOut = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    Cookies.remove("userId");
    setUserInfo(null);
    window.location.reload();
  };

  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          //   console.log(res);
          setUserInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  console.log(setUserInfo);
  return (
    <StoreContext.Provider value={{ userInfo, handelLogOut, setUserId }}>
      {children}
    </StoreContext.Provider>
  );
};
