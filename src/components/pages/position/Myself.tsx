import { FC } from "react";
import scss from "./Myself.module.scss";

const Myself: FC = () => {
  return (
    <section className={scss.Myself}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <p>I am Gulumzhan</p>
            <h1>
              Frontend Developer <br />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
