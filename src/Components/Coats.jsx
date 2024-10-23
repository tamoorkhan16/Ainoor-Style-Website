import React from 'react'
import ProductCard from "./ProductCard";

const products = [
    {
      image: "/Images/Leather/Coats/c1.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c2.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c3.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
         
       
    {
      image: "/Images/Leather/Coats/c5.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c6.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c7.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c8.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c9.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c10.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c11.jpeg",
      title: "Product 1",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
  ];


function Coats() {
  return (
    <>
          <div className="outer_product_container">
        <h2>Coats</h2>
      <div className="product_container">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      </div>
    </>
  )
}

export default Coats
