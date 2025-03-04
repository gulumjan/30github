import { FC } from "react";
import scss from "./About.module.scss";

const About: FC = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>
              Welcome to Zakirova <span>Marine Life</span>
            </h1>
            <p>
              Explore the depths of the ocean and discover the incredible world
              of marine life. From vibrant coral reefs to the mysterious
              creatures of the deep, our website brings you closer to the oceans
              wonders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
