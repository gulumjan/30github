import React from "react";
import Myself from "./position/About";
import Gallery from "./gallery/Gallery";
import MarineLife from "./marine/MarineLife";
import Conservation from "./conservation/Conservation";

const HomePage = () => {
  return (
    <>
      <Myself />
      <Gallery />
      <MarineLife />
      <Conservation />
    </>
  );
};

export default HomePage;
