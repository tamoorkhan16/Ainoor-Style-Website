import React from 'react'
import ProductCard from "./ProductCard";

const products = [
    {
      image: "/Images/Leather/Coats/c1.jpeg",
      title: "Delighted Chimp Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c2.jpeg",
      title: "Orion Grey Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c3.jpeg",
      title: "Dark Wood Grain Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
         
       
    {
      image: "/Images/Leather/Coats/c5.jpeg",
      title: "Dark Danger Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c6.jpeg",
      title: "Monks Robe Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c7.jpeg",
      title: "Black Lacquer Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c8.jpeg",
      title: "Carnaby Tan Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c9.jpeg",
      title: "Gluon Grey Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c10.jpeg",
      title: "Shoe Wax Leather Coat",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
       
    {
      image: "/Images/Leather/Coats/c11.jpeg",
      title: "Raven Black Leather Coat",
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
