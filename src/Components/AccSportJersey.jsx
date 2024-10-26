import React from "react";
import ProductCard from "./ProductCard";

const products = [
  // {
  //   image: "/Images/Accessories/SportJersey/sg1.png",
  //   title: "Sport Jersey",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Accessories/SportJersey/sg2.png",
    title: "VictoryFit Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/SportJersey/sg9.png",
    title: "BoltForce Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/SportJersey/sg7.png",
    title: "EdgeFit Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/SportJersey/sg3.png",
    title: "FastTrack Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/SportJersey/sg4.png",
    title: "StriveWear Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/SportJersey/sg5.png",
    title: "PowerFlex Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/SportJersey/sg6.png",
    title: "PrimePlay Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Accessories/SportJersey/sg8.png",
    title: "SwiftWear Sport Jersey",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

];
function AccSportJersey() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Sport Jersey</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AccSportJersey;
