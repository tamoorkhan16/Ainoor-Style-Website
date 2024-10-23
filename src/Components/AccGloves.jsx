import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Accessories/Gloves/g1.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g2.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g3.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g4.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g5.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g6.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g7.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g8.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/Gloves/g9.png",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];
function AccGloves() {
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

export default AccGloves;
