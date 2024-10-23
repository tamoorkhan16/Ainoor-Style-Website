import React from 'react'
import ProductCard from "./ProductCard";

const products = [
    {
      image: "/Images/Mens/Hoodies/h1.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h2.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h3.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h4.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h5.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h6.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h7.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h8.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h9.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h10.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h11.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h12.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h13.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h14.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h15.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h16.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h17.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h18.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h19.png",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
  ];
  

function Hoodies() {
  return (
    <>
       <div className="outer_product_container">
        <h2>Hoodies</h2>
      <div className="product_container">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      </div>
    </>
  )
}

export default Hoodies
