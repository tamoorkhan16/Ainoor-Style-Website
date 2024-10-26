import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Accessories/BjjGiBelts/bb1.jpg",
    title: "Brown Bjj Gi Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGiBelts/bb2.jpg",
    title: "Blue Bjj Gi Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGiBelts/bb3.jpg",
    title: "Purple Bjj Gi Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGiBelts/bb6.png",
    title: "White Bjj Gi Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGiBelts/bb5.jpg",
    title: "Black Bjj Gi Belt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGiBelts/bb4.jpg",
    title: "Set of Bjj Gi Belts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },


];
function AccBjjGiBelts() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Bjj Gi Belts</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AccBjjGiBelts;
