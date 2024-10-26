import React from 'react'
import ProductCard from "./ProductCard";

const products = [
    {
      image: "/Images/Mens/Hoodies/h1.jpeg",
      title: "Skin and Black Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h2.png",
      title: "White & Black Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h3.jpeg",
      title: "Grey and Black Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h6.png",
      title: "Dark Green Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h7.jpeg",
      title: "SleekStreet Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h8.png",
      title: "Green Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h4.png",
      title: "Black & Gray Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h5.jpeg",
      title: "Red & Black Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h9.jpeg",
      title: "Black & Grey Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h10.png",
      title: "Blue & White Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h11.png",
      title: "Light Brown Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h12.png",
      title: "Sky Blue Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h13.png",
      title: "Black & White Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h14.png",
      title: "Blue Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h15.png",
      title: "Red & White Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h16.png",
      title: "Grey & White Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h17.png",
      title: "Yellow & Skin Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h18.png",
      title: "Grey Hoodie",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#000000", "#ffffff", "#0000FF"],
    },    
    {
      image: "/Images/Mens/Hoodies/h19.png",
      title: "Black & White Hoodie",
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
