import React from 'react'
import ProductCard from "./ProductCard";

const products = [
    {
        image: "/Images/Leather/Jackets/mj1.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj2.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj3.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj4.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj5.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj6.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj7.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj8.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj9.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj10.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj11.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj12.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj13.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj14.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj15.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj16.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj17.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj18.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj19.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj20.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },
      {
        image: "/Images/Leather/Jackets/mj21.jpeg",
        title: "Product 1",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#ffffff", "#0000FF"],
      },   
  ];
function Mens_Jackets() {
  return (
    <>
           <div className="outer_product_container">
        <h2>Mens's Jackets</h2>
      <div className="product_container">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      </div>
    </>
  )
}

export default Mens_Jackets
