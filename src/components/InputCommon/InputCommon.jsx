import { useState } from "react";
import styles from "./styles.module.scss";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";

function InputCommon({ label, type, isRequire = false }) {
  const { container, labelInput, boxInput, boxIcon } = styles;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequire && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
