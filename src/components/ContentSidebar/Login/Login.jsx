import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";

function Login() {
  const { container, title, boxRememberMe, container_Btnlogin } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon label="Username or Email" type="text" isRequire />
      <InputCommon label="Password" type="password" isRequire />
      <div className={boxRememberMe}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <div className={container_Btnlogin}>
        <Button content="Login" />
      </div>
    </div>
  );
}

export default Login;
