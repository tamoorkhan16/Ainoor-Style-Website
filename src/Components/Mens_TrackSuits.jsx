import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/TrackSuits/t1.jpeg",
    title: "Red and Grey TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t2.jpeg",
    title: "Red and Black TrackSuit ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t3.jpeg",
    title: "Grey and Black TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t4.jpeg",
    title: "Grey & Black TrackSuit with Black Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t5.jpeg",
    title: "Blue and Yellow TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t6.jpeg",
    title: "Maroon and Dark Grey TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t7.jpeg",
    title: "Sky Blue and Dark Blue TrackSuit ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Mens/TrackSuits/t8.jpeg",
  //   title: "Product 8",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Mens/TrackSuits/t9.jpeg",
  //   title: "Product 9",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Mens/TrackSuits/t10.jpeg",
    title: "Blue and White TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t11.jpeg",
    title: "Navy and White TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t12.jpeg",
    title: "Unique Black and Grey TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t13.jpeg",
    title: "Grey and Black Line TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/TrackSuits/t14.jpeg",
    title: "Navy and Sky Blue TrackSuit",
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
