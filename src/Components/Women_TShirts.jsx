import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Women/TShirts/ts1.jpeg",
    title: "Purple T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Women/TShirts/ts2.jpeg",
  //   title: "T-Shirt",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Women/TShirts/ts3.jpeg",
  //   title: "T-Shirt",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Women/TShirts/ts4.jpeg",
    title: "Grey T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Women/TShirts/ts5.jpeg",
  //   title: "T-Shirt",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Women/TShirts/ts7.jpg",
    title: "Black T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts8.jpg",
    title: "Glam Girl T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts9.jpg",
    title: "Black T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Women/TShirts/ts10.jpg",
  //   title: "T-Shirt",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Women/TShirts/ts6.jpeg",
    title: "Grey T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts11.jpg",
    title: "Blue T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts12.jpg",
    title: "Pink T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts13.jpg",
    title: "Cute & Cozy T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts14.jpg",
    title: "Azureish White T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TShirts/ts15.jpg",
    title: "Blue Lovely T-Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Women/TShirts/ts16.jpg",
  //   title: "T-Shirt",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  
  
];

function Women_TShirts() {
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

export default Women_TShirts;
