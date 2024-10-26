import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Women/GymSuits/gms1.png",
    title: "Black Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms2.png",
    title: "Light Grey Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms3.png",
    title: "Black Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms4.png",
    title: "Dark Grey Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms5.png",
    title: "Black Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms6.png",
    title: "Purple Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms7.png",
    title: "Black Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/GymSuits/gms8.png",
    title: "Dark Blue Women Gym Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
 
];
function Women_GymSuits() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Gym Suits</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Women_GymSuits;
