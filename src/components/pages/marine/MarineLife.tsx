"use client";
import { FC } from "react";
import Image from "next/image";
import scss from "./MarineLife.module.scss";
import { useGetEpicQuery } from "@/redux/api/product";

const marineData = [
  {
    id: 1,
    name: "Dolphin",
    description:
      "Dolphins are intelligent marine mammals known for their playful behavior and strong social bonds.",
  },
  {
    id: 2,
    name: "Sea Turtle",
    description:
      "Sea turtles have existed for millions of years and play a crucial role in marine ecosystems.",
  },
  {
    id: 3,
    name: "Clownfish",
    description:
      "Clownfish live among sea anemones and are known for their bright colors and symbiotic relationship with anemones.",
  },
];

const MarineLife: FC = () => {
  const { data } = useGetEpicQuery();
  console.log("🚀 ~ data:", data);
  return (
    <section id="marine-life" className={scss.marineLife}>
      <div className="container">
        <h2 className={scss.title}>Marine Life</h2>
        <Image
          src="https://e360.yale.edu/assets/site/_1500x1500_fit_center-center_80/pexels-matt-botha-4777690.jpg"
          alt="Marine Life"
          width={600}
          height={400}
          className={scss.image}
        />
        <div className={scss.grid}>
          {marineData.map((species) => (
            <div key={species.id} className={scss.card}>
              <h3 className={scss.name}>{species.name}</h3>
              <p className={scss.description}>{species.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarineLife;
