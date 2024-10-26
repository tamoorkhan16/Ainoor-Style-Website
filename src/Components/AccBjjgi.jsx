import React from "react";

import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Accessories/BjjGi/bj1.jpg",
    title: "Fuji Lightweight BJJ Gi - White ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj2.png",
    title: "Fuji Lightweight BJJ Gi - Rangitoto ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj3.png",
    title: "Fuji Lightweight BJJ Gi - Blue ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj4.jpg",
    title: "Fuji Lightweight BJJ Gi - Army Green ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj5.jpg",
    title: "Fuji Lightweight BJJ Gi - Red ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj6.jpg",
    title: "Fuji Lightweight BJJ Gi - Black & White ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj7.jpg",
    title: "Fuji Lightweight BJJ Gi - Purple ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj8.jpg",
    title: "Fuji Lightweight BJJ Gi - Greenland Green ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj9.jpeg",
    title: "Fuji Lightweight BJJ Gi - Grey ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj10.jpeg",
    title: "Fuji Lightweight BJJ Gi - Black ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj11.jpeg",
    title: "Fuji Lightweight BJJ Gi - Black ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj12.jpeg",
    title: "Fuji Lightweight BJJ Gi - White",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj13.jpeg",
    title: "Fuji Lightweight BJJ Gi - Set of Three Colors ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/bj14.jpeg",
    title: "Fuji Lightweight BJJ Gi - Set of Five Colors ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj1.png",
    title: "Kid Fuji Lightweight BJJ Gi - Blue ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj2.png",
    title: "Kid Fuji Lightweight BJJ Gi - Yellow ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj3.png",
    title: "Kid Fuji Lightweight BJJ Gi - White ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj4.jpg",
    title: "Kid Fuji Lightweight BJJ Gi - Purple ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj5.png",
    title: "Kid Fuji Lightweight BJJ Gi - Black ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj6.png",
    title: "Kid Fuji Lightweight BJJ Gi - Red ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj7.jpg",
    title: "Kid Fuji Lightweight BJJ Gi - Black ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj8.jpg",
    title: "Kid Fuji Lightweight BJJ Gi - Pink ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj9.jpg",
    title: "Kid Fuji Lightweight BJJ Gi - Grey ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj10.jpg",
    title: "Kid Fuji Lightweight BJJ Gi - Blue",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/cbj11.jpeg",
    title: "Kid Fuji Lightweight BJJ Gi - Sky Blue ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj1.png",
    title: "Female Fuji Lightweight BJJ Gi - Purple ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj2.jpg",
    title: "Female Fuji Lightweight BJJ Gi - White ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj3.jpg",
    title: "Female Fuji Lightweight BJJ Gi - Pink ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj4.jpg",
    title: "Female Fuji Lightweight BJJ Gi - Blue ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj5.png",
    title: "Female Fuji Lightweight BJJ Gi - Black ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj6.jpg",
    title: "Female Fuji Lightweight BJJ Gi - Black ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/BjjGi/fbj7.jpg",
    title: "Female Fuji Lightweight BJJ Gi - Army Green ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];

function AccBjjgi() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Bjj Gi's</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AccBjjgi;
