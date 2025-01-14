import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Mens/SweatShirts/ss1.jpg",
    title: "Light Blue Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss2.jpg",
    title: "Black Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss3.jpg",
    title: "Light Pink Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss4.jpg",
    title: "Hoodie Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss5.jpg",
    title: "Red Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss6.jpg",
    title: "Cream Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss7.jpg",
    title: "Black Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss8.jpg",
    title: "Off-White Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Mens/SweatShirts/ss9.jpg",
    title: "Yellow Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Mens/SweatShirts/ss10.jpg",
  //   title: "Product 1",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Mens/SweatShirts/ss11.jpg",
  //   title: "Product 1",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Mens/SweatShirts/ss12.jpg",
    title: "Zinc Sweat Shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function SweatShirts() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Sweat Shirts</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SweatShirts;
