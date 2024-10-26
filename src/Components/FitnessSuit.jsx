import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/FitnessSuit/f1.jpeg",
    title: "Titan Flex Performance Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f2.jpeg",
    title: "Green & Black FlowFit Performance",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f3.jpeg",
    title: " Green TempoRush Fitwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  // {
  //   image: "/Images/Mens/FitnessSuit/f4.jpeg",
  //   title: "Product 1",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  
  // {
  //   image: "/Images/Mens/FitnessSuit/f5.jpeg",
  //   title: "Product 1",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  
  {
    image: "/Images/Mens/FitnessSuit/f6.jpeg",
    title: "Cartoon Animated Fitness Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f7.jpeg",
    title: "Dragon Animated Fitness Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f8.jpeg",
    title: "Dragon Animated Black Fitness Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f9.jpeg",
    title: "Dragon Animated Red Fitness Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f10.jpeg",
    title: "White Dragon Animated Fitness Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Mens/FitnessSuit/f11.jpeg",
    title: "Smart Black Fitness Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  // {
  //   image: "/Images/Mens/FitnessSuit/f12.jpeg",
  //   title: "Product 1",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  
  // {
  //   image: "/Images/Mens/FitnessSuit/f13.jpeg",
  //   title: "Product 1",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  
  {
    image: "/Images/Mens/FitnessSuit/f14.jpeg",
    title: "Colorful Dragon Animated Fitness Suit",
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
