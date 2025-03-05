import { FC } from "react";
import scss from "./Conservation.module.scss";

const Conservation: FC = () => {
  return (
    <section id="conservation" className={scss.conservation}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.textBlock}>
            <h2 className={scss.title}>Protecting Marine Life</h2>
            <p className={scss.description}>
              Oceans cover over 70% of our planet and play a crucial role in
              sustaining life. However, pollution, overfishing, and climate
              change threaten marine ecosystems. Our mission is to raise
              awareness and take action to preserve marine biodiversity.
            </p>
            <ul className={scss.list}>
              <li>🌊 Reduce plastic waste and ocean pollution</li>
              <li>🐠 Support sustainable fishing practices</li>
              <li>🏝️ Protect coral reefs and marine habitats</li>
              <li>🤝 Join conservation initiatives worldwide</li>
            </ul>
            <ul className={scss.list}>
              <li>🌊 Reduce plastic waste and ocean pollution</li>
              <li>🐠 Support sustainable fishing practices</li>
              <li>🏝️ Protect coral reefs and marine habitats</li>
              <li>🤝 Join conservation initiatives worldwide</li>
            </ul>
            <a href="#join-us" className={scss.button}>
              Join the Movement
            </a>
          </div>
          <div className={scss.imageBlock}>
            <img
              src="https://i.pinimg.com/1200x/e7/f4/95/e7f495f1fa1805310a0107f47979d578.jpg"
              alt="Marine Conservation"
              className={scss.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conservation;
