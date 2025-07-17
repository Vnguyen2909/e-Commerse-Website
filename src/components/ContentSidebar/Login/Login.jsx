import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register, signIn, getInfo } from "@/apis/authService";
import Cookies from "js-cookie";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { StoreContext } from "@/contexts/storeProvider";

function Login() {
  const { container, title, boxRememberMe, container_Btnlogin } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsOpen, handleGetListProducts } = useContext(SidebarContext);
  const { setUserId } = useContext(StoreContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      ConfirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;
      if (isRegister) {
        setIsLoading(true);
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message || "Register success");
            setIsRegister(false);
            formik.resetForm();
          })
          .catch((err) => {
            console.error("Error response:", err.response);
            toast.error(err?.response?.data?.message || "Register failed");
            setIsLoading(false);
          });
      } else if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            if (!res || !res.data) {
              toast.error("Unexpected response from server");
              return;
            }
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("userId", id);
            Cookies.set("refreshToken", refreshToken);
            toast.success("Sign in successfully");
            setIsOpen(false);
            handleGetListProducts(id, "cart");
          })
          .catch(() => {
            toast.error("Sign in failed");
            setIsLoading(false);
          });
      }
    },
  });

  // console.log(formik.errors);
  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          label="Username or Email"
          type="text"
          isRequire
          id="email"
          formik={formik}
        />
        <InputCommon
          label="Password"
          type="password"
          isRequire
          id="password"
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            label="Confirm Password"
            type="password"
            isRequire
            id="ConfirmPassword"
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}

        <div className={container_Btnlogin}>
          <Button
            content={
              isLoading ? "Loading..." : isRegister ? "Register" : "Login"
            }
            type="submit"
          />
        </div>
      </form>
      <div className={container_Btnlogin}>
        <Button
          content={
            isRegister ? "Already have an account?" : "Don't have an account?"
          }
          type="submit"
          isPrimary={false}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}

export default Login;
