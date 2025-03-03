"use client";
import { FC } from "react";
import scss from "./Gallery.module.scss";
import { useGetEpicQuery } from "@/redux/api/product";

const Gallery: FC = () => {
  const { data } = useGetEpicQuery();
  const media = [
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Coral Reef",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Deep Blue Sea",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
    {
      type: "image",
      src: "https://i.pinimg.com/736x/41/db/81/41db81b86ab1b5f7bb423472d7fd73dd.jpg",
      alt: "Marine Life",
    },
  ];

  return (
    <section className={scss.Gallery}>
      <div className="container">
        <h2>Gallerry</h2>

        <p>Explore the wonders of the ocean through images and videos.</p>
        <div className={scss.scroll_container}>
          {data?.map((item, index) => (
            <div key={index} className={scss.item}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
