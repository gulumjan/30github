import { FC } from "react";
import scss from "./Myself.module.scss";

const Myself: FC = () => {
  return (
    <section className={scss.Myself}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default Myself;
