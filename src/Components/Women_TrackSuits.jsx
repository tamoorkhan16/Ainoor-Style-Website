import React from 'react'
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Women/TrackSuits/wts1.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts2.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts3.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts4.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts5.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts6.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts7.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts8.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts9.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts10.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts11.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts12.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts13.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts14.jpg",
    title: "Product 1",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },


];

function Women_TrackSuits() {
  return (
    <>
         <div className="outer_product_container">
        <h2>TrackSuits</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Women_TrackSuits
