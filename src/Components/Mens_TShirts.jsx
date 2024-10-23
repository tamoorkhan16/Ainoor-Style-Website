import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/TShirts/p1.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p2.jpg",
    title: "Product 2",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p3.jpeg",
    title: "Product 3",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p4.jpg",
    title: "Product 4",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p5.jpeg",
    title: "Product 5",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p6.jpg",
    title: "Product 6",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p7.jpeg",
    title: "Product 7",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p8.jpg",
    title: "Product 8",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p9.jpeg",
    title: "Product 9",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p10.jpg",
    title: "Product 10",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p11.jpeg",
    title: "Product 11",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p12.jpg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p13.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p14.jpg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p15.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p16.jpg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p17.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p18.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p19.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p20.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function Mens_TShirts() {
  return (
    <>
    <div className="outer_product_container">
        <h2>T Shirts</h2>
      <div className="product_container">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Mens_TShirts;
