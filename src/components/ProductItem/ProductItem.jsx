import styles from "./styles.module.scss";
import { HiOutlineEye } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import Cookies from "js-cookie";
import { SidebarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomepage = true,
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState("");
  // console.log(isShowGrid);
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get("userId");
  const { setIsOpen, setType, handleGetListProducts } =
    useContext(SidebarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceClass,
    boxSize,
    size,
    textCenter,
    boxButton,
    content,
    containerItem,
    largImg,
    isActiveSize,
    btnClear,
  } = styles;

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose("");
  };

  const handleAddToCard = () => {
    console.log(userId);
    if (!userId) {
      setIsOpen(true);
      setType("login");
      toast.warning("Please login to add product to cart");
      return;
    }

    if (!sizeChoose) {
      toast.warning("Please choose size product");
      return;
    }

    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose,
    };

    // console.log(data);
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType("cart");
        toast.success("Add Product to cart successfully");
        setIsLoading(false);
        handleGetListProducts(userId, "cart");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Add Product to cart failed!");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isHomepage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomepage, ourShopStore?.isShowGrid]);
  // console.log(sizeChoose);

  return (
    <div className={isShowGrid ? "" : containerItem}>
      <div className={cls(boxImg, { [largImg]: !isShowGrid })}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhenHover} />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <IoMdHeartEmpty />
          </div>
          <div className={boxIcon}>
            <BsBag />
          </div>
          <div className={boxIcon}>
            <TfiReload />
          </div>
          <div className={boxIcon}>
            <HiOutlineEye />
          </div>
        </div>
      </div>
      <div className={isShowGrid ? "" : content}>
        {!isHomepage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}

        {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            Clear
          </div>
        )}

        <div className={cls(title, { [textCenter]: !isHomepage })}>{name}</div>
        {!isHomepage && (
          <div className={textCenter} style={{ color: "#888" }}>
            Brand 01
          </div>
        )}
        <div
          className={cls(priceClass, { [textCenter]: !isHomepage })}
          style={{ color: isHomepage ? "#333" : "#888" }}
        >
          ${price}
        </div>

        {!isHomepage && (
          <div className={boxButton}>
            <Button
              content={isLoading ? <LoadingTextCommon /> : "ADD TO CART"}
              onClick={handleAddToCard}
              size="small"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
