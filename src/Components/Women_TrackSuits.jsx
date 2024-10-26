import React from 'react'
import ProductCard2 from './ProductCard2';

const products = [
  {
    image: "/Images/Women/TrackSuits/wts1.jpg",
    title: "Dark Green TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts2.jpg",
    title: "Pink TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts3.jpg",
    title: "Velvet Pink TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts4.jpg",
    title: "Lavendar TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts5.jpg",
    title: "Black TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts6.jpg",
    title: "Purple TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts7.jpg",
    title: "Light Pink TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts8.jpg",
    title: "Olive Drab TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts9.jpg",
    title: "Blue TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts10.jpg",
    title: "Pink TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts12.jpg",
    title: "Maroon TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts13.jpg",
    title: "Pink TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts11.jpg",
    title: "Maroon & White TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Women/TrackSuits/wts14.jpg",
    title: "Mulberry TrackSuit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },


];

function Women_TrackSuits() {
  return (
    <>
         <div className="outer_product_container">
        <h2>TrackSuits</h2>
        <div className="product_container ">
          {products.map((item, index) => (
            <ProductCard2 key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Women_TrackSuits
