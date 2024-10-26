import React from 'react'
import ProductCard2 from './ProductCard2';

const products = [
  {
    image: "/Images/Women/SweatSuits/ss1.jpg",
    title: "Pink Velvet shinny Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss2.jpg",
    title: "Blue Whale shinny Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss3.jpg",
    title: "Sugar Rush Colored Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss4.jpg",
    title: "Grey shinny Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss5.jpg",
    title: "Chocolate shinny Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
 
  {
    image: "/Images/Women/SweatSuits/ss8.jpg",
    title: "April Love shinny Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss9.jpg",
    title: "Pink Velvet Shinny Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss10.jpg",
    title: "Stizza Shinny  Sweat Suit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/SweatSuits/ss11.jpg",
    title: "Kid Shinny Sweat Suit",
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
            <ProductCard2 key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Women_SweatSuits
