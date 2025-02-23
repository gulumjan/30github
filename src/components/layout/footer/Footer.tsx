import { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          Footer
          <nav>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="">Author</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
