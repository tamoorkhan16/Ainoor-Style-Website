import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/BoxerShorts/bs1.jpeg",
    title: "Black & Red Boxer Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/BoxerShorts/bs2.jpeg",
    title: "Black & White Boxer Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/BoxerShorts/bs3.jpeg",
    title: "Red & White Boxer Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/BoxerShorts/bs4.jpeg",
    title: "Blue & White Boxer Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/BoxerShorts/bs5.jpeg",
    title: "Red & White Boxer Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MeshShorts/ms1.jpeg",
    title: "Black Men's Sportwear Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Mens/MeshShorts/ms2.jpeg",
  //   title: "Blue Men's Sportwear Short",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Mens/MeshShorts/ms3.jpeg",
    title: "Green Men's Sportwear Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MeshShorts/ms4.jpeg",
    title: "Grey Men's Sportwear Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MeshShorts/ms5.jpeg",
    title: "Blue Men's Sportwear Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MMAShorts/mmas1.jpeg",
    title: "Red Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MMAShorts/mmas2.jpeg",
    title: "Black Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MMAShorts/mmas3.jpeg",
    title: "Quincy Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MMAShorts/mmas4.jpeg",
    title: "Blue Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MMAShorts/mmas5.jpeg",
    title: "Black & White Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/MMAShorts/mmas6.jpeg",
    title: "White Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Mens/MMAShorts/mmas7.jpeg",
  //   title: "Red Mixed Martial Arts Short",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },

  {
    image: "/Images/Mens/MMAShorts/mmas9.jpeg",
    title: "Blue Mixed Martial Arts Short",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function Shorts() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Shorts</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shorts;
