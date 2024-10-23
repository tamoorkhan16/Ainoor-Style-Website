import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/TrackSuits/t1.jpeg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t2.jpeg",
    title: "Product 2",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t3.jpeg",
    title: "Product 3",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t4.jpeg",
    title: "Product 4",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t5.jpeg",
    title: "Product 5",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t6.jpeg",
    title: "Product 6",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t7.jpeg",
    title: "Product 7",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t8.jpeg",
    title: "Product 8",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t9.jpeg",
    title: "Product 9",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t10.jpeg",
    title: "Product 10",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t11.jpeg",
    title: "Product 11",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t12.jpeg",
    title: "Product 12",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t13.jpeg",
    title: "Product 13",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t14.jpeg",
    title: "Product 14",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];


function Mens_TrackSuits() {
  return (
    <>
      <div className="outer_product_container">
        <h2>TrackSuits</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Mens_TrackSuits;
