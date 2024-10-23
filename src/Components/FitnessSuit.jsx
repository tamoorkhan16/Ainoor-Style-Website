import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/FitnessSuit/f1.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f2.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f3.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f4.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f5.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f6.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f7.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f8.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f9.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f10.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f11.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f12.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f13.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f14.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  
];

function FitnessSuit() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Fitness Suits</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FitnessSuit;
