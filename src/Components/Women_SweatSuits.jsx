import React from 'react'
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Women/SweatSuits/ss1.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss2.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss3.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss4.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss5.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
 
  {
    image: "/Images/Women/SweatSuits/ss8.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss9.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss10.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss11.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

];

function Women_SweatSuits() {
  return (
    <>
      
      <div className="outer_product_container">
        <h2>Sweat Suits</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Women_SweatSuits
