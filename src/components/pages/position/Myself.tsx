import { FC } from "react";
import scss from "./Myself.module.scss";

const Myself: FC = () => {
  return (
    <section className={scss.Myself}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <p className={scss.intro}>I am Gulumzhan</p>
            <h1>
              <span>Frontend Developer</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
