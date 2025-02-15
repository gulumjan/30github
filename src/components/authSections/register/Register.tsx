import { FC } from "react";
import scss from "./Register.module.scss";

const Register: FC = () => {
  return (
    <section className={scss.Register}>
      <div className="container">
        <div className={scss.content}>Register</div>
      </div>
    </section>
  );
};

export default Register;
