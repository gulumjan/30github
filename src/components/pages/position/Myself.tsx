import { FC } from "react";
import scss from "./Myself.module.scss";

const Myself: FC = () => {
  return (
    <section className={scss.Myself}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1 className={scss.intro}>Zakirova Gulumzhan</h1>
            <h1>
              <span>Frontend Developer</span>
            </h1>
            <p>
              {" "}
              laboriosam soluta repudiandae. Quis ducimus illo aliquam magni
              distinctio rem commodi cum quaerat minus? Exercitationem,
              accusamus. Officia error distinctio rem minima cum voluptatem
              quidem. Aperiam ex iusto aut vero! Iste ullam ex quam quas
              voluptas labore mollitia ratione dolorum amet corporis inventore
              eum soluta blanditiis officia aliquid aut magni iusto veritatis
              nihil, dicta voluptates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
