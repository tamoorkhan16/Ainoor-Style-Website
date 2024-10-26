import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Leather/Gloves/g1.jpeg",
    title: "FoxFire Brown Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g2.jpeg",
    title: "Dark Catacombs Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g3.png",
    title: "Black Stallion Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g4.jpeg",
    title: "Shadow Mountain Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g5.png",
    title: "Oceanic Noir Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g6.jpeg",
    title: "Carbon Fiber Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g7.png",
    title: "Corbeau Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g8.jpeg",
    title: "Set of Colored Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g9.jpeg",
    title: "Verfied Black Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g10.jpeg",
    title: "Matt Black Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g11.jpeg",
    title: "Terra Brun Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g12.jpeg",
    title: "Ochre Red Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Gloves/g13.jpeg",
    title: "Burnt Bamboo Leather Gloves",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function LeatherGloves() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Gloves</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LeatherGloves;
