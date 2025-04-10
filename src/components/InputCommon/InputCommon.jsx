import { useState } from "react";
import styles from "./styles.module.scss";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";

function InputCommon({ label, type, isRequire = false, ...props }) {
  const { container, labelInput, boxInput, boxIcon, errMsg } = styles;
  const { formik, id } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isErr = formik.touched[id] && formik.errors[id];
  const messageErr = formik.errors[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequire && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id] || ""}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
          </div>
        )}
        {isErr && <div className={errMsg}>{messageErr}</div>}
      </div>
    </div>
  );
}

export default InputCommon;
