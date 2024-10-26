import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/TShirts/p1.jpeg",
    title: "Black Jiujitsu T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p2.jpg",
    title: "Solid Pink T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p3.jpeg",
    title: "Jiujitsu Panda T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p4.jpg",
    title: "Solid Maroon T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p5.jpeg",
    title: "Jiujitsu Black T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p6.jpg",
    title: "Solid Blue T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p7.jpeg",
    title: "Jiujitsu Black T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p8.jpg",
    title: "Solid Green T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p9.jpeg",
    title: "Jiijitsu Logo T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p10.jpg",
    title: "Solid Orange T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p11.jpeg",
    title: "Jiujitsu Black T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p12.jpg",
    title: "Solid Purple T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p13.jpeg",
    title: "Anatomy Skull T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p14.jpg",
    title: "Solid White T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p15.jpeg",
    title: "Halloween T-Shirt ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Mens/TShirts/p16.jpg",
  //   title: "Product 12",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Mens/TShirts/p17.jpeg",
    title: "Pictured Black T-Shirt ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p18.jpeg",
    title: "Jiujitsu Black T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p19.jpeg",
    title: "New Jiujitsu T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TShirts/p20.jpeg",
    title: "Chess Jiujitsu T-Shirt",
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
