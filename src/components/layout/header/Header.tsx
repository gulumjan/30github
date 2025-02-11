import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>ZakDev</div>
          <nav className={scss.nav}>
            <Link href="#about" scroll={false}>
              About
            </Link>
            <Link href="#projects" scroll={false}>
              Projects
            </Link>
            <Link href="#contact" scroll={false}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
