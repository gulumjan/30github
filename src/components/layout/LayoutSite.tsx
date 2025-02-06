import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  return (
    <section className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default LayoutSite;
