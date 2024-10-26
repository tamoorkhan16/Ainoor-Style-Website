import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Leather/Pants/lp1.jpg",
    title: "Pueblo Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Pants/lp2.jpg",
    title: "The End Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Leather/Pants/lp3.jpg",
  //   title: "Leather Pant",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Leather/Pants/lp4.jpg",
    title: "Jet Black Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Leather/Pants/lp5.jpg",
  //   title: "Leather Pant",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Leather/Pants/lp6.jpg",
    title: "Black Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Pants/lp7.jpg",
    title: "The End Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Pants/lp8.jpg",
    title: "Sun Dried Tomato Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Pants/lp9.jpg",
    title: "Noble Black Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Pants/lp10.jpg",
    title: "Scorched Leather Pant",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function LeatherPants() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Pants</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LeatherPants;
