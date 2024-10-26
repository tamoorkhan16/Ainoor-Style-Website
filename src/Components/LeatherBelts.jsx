import React from "react";

import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Leather/Belts/b1.png",
    title: "Rampant Rhubarb Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b2.png",
    title: "Dark Clove Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b3.png",
    title: "Italian Roast Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b4.png",
    title: "Polished Mahogany Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b5.png",
    title: "Painted Bark Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b6.png",
    title: "Thamar Black Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b7.png",
    title: "Chocolate Hazelnut Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b8.png",
    title: "Dark Sienna Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Belts/b9.png",
    title: "Dark Tone Ink Leather Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function LeatherBelts() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Belts</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LeatherBelts;
