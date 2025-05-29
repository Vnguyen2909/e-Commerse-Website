import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import styles from "../styles.module.scss";
import cls from "classnames";
import { useContext } from "react";
import { OurShopContext } from "@conetxts/OurShopProvider";
import SelectBox from "@pages/OurShop/components/SelectBox";

function Filter() {
  const { containerFilter, boxIcon, boxLeft, boxRight, selectBox, show, sort } =
    styles;

  const { showsOptions, sortsOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    // console.log(value);
    // console.log(type);
    if (type === "sort") {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };

  const hanldeGetShowGrid = (type) => {
    console.log(type);
    setIsShowGrid(type === "grid");
  };

  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        {/* <select className={cls(selectBox, sort)}>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select> */}
        <SelectBox
          options={sortsOptions}
          getValue={getValueSelect}
          type="sort"
        />

        <div className={boxIcon}>
          <TfiLayoutGrid4
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => hanldeGetShowGrid("grid")}
          />
          <div
            style={{ height: "20px", width: "1px", backgroundColor: "#e1e1e1" }}
          />
          <CiCircleList
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => hanldeGetShowGrid("list")}
          />
        </div>
      </div>
      <div className={boxRight}>
        <div style={{ fontSize: "14px", color: "#555" }}>Show</div>
        {/* <select className={cls(selectBox, show)}>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select> */}
        <SelectBox
          options={showsOptions}
          getValue={getValueSelect}
          type="show"
        />
      </div>
    </div>
  );
}

export default Filter;
