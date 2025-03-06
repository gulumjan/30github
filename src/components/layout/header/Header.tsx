import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>OceanExplorer</div>
          <nav className={scss.nav}>
            <Link href="#marine-life" scroll={false}>
              Marine Life
            </Link>
            <Link href="#conservation" scroll={false}>
              Conservation
            </Link>
            <Link href="#gallery" scroll={false}>
              Gallery
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
