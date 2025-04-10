import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register, signIn, getInfo } from "@/apis/authService";
import Cookies from "js-cookie";

function Login() {
  const { container, title, boxRememberMe, container_Btnlogin } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

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
            console.log(res);
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      } else if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
          })
          .cath((err) => {
            console.log(err);
            // toast.error(err.response.data.message);
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

  useEffect(() => {
    getInfo();
  }, []);

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
            // onClick={() => toast.success("Login Success")}
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
