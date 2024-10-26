import React from "react";
import ProductCard from "./ProductCard";

const products = [
  // {
  //   image: "/Images/Women/SportsBra/sb1.jpeg",
  //   title: "Sports Bra",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Women/SportsBra/sb2.jpeg",
    title: "Black Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Women/SportsBra/sb3.jpeg",
  //   title: "Sports Bra",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Women/SportsBra/sb4.jpeg",
    title: "Grey Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SportsBra/sb5.jpeg",
    title: "Pink Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SportsBra/sb6.jpeg",
    title: "Flex fit Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SportsBra/sb7.jpeg",
    title: "Pink Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SportsBra/sb8.jpeg",
    title: "Stretchable Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SportsBra/sb9.jpeg",
    title: "Free Flex Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Women/SportsBra/sb10.jpeg",
  //   title: "Sports Bra",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Women/SportsBra/sb11.jpeg",
    title: "Flexible Fit Sports Bra",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];
function Women_SportsBra() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Sports Bra</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Women_SportsBra;
