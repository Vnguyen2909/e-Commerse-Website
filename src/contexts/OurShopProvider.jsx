import { createContext, useEffect, useState } from "react";
import { getProduct } from "@/apis/productService";

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
  const sortsOptions = [
    {
      label: "Default Sorting",
      value: "0",
    },
    {
      label: "Sort by Popularity",
      value: "1",
    },
    {
      label: "Sort by average rating",
      value: "2",
    },
    {
      label: "Sort by latest",
      value: "3",
    },
    {
      label: "Sort by price: low to hight",
      value: "4",
    },
    {
      label: "Sort by price: hight to low",
      value: "5",
    },
  ];

  const showsOptions = [
    { label: "8", value: "8" },
    { label: "12", value: "12" },
    { label: "All", value: "all" },
  ];

  const [sortId, setSortId] = useState("0");
  const [showId, setShowId] = useState("8");
  const [isShowGrid, setIsShowGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleLoadMore = () => {
    const query = {
      sortType: sortId,
      page: +page + 1,
      limit: showId,
    };

    setIsLoadMore(true);

    getProduct(query)
      .then((res) => {
        setProducts((prev) => {
          return [...prev, ...res.contents];
        }),
          setPage(+res.page),
          setTotal(+res.total),
          setIsLoadMore(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadMore(false);
      });
  };

  const values = {
    sortsOptions,
    showsOptions,
    setSortId,
    setShowId,
    setIsShowGrid,
    isShowGrid,
    products,
    isLoading,
    handleLoadMore,
    total,
    isLoadMore,
  };

  useEffect(() => {
    const query = {
      sortType: sortId,
      page: "1",
      limit: showId,
    };
    setIsLoading(true);
    getProduct(query)
      .then((res) => {
        setProducts(res.contents);
        setTotal(res.total);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [sortId, showId]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
