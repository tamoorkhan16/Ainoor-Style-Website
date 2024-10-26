import React from "react";
import ProductCard from "./ProductCard";

const products = [
  // {
  //   image: "/Images/Accessories/RashGuards/rsh1.jpg",
  //   title: "Rash Guard",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Accessories/RashGuards/rsh2.jpg",
    title: "Storm Skin Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh3.jpg",
    title: "Wave Proof Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh4.jpg",
    title: "Tidal Force Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh6.jpg",
    title: "Hydro Armor Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh5.jpg",
    title: "Edge Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  
  {
    image: "/Images/Accessories/RashGuards/rsh8.jpg",
    title: "Flex Shield Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh9.jpg",
    title: "Aqua Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh10.jpg",
    title: "Shield Craft Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh11.jpg",
    title: "Aqua Edge Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh12.jpg",
    title: "Vital Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh13.jpg",
    title: "Shark Skin Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh14.jpg",
    title: "Ocean Armour",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh15.jpg",
    title: "Aqua Elite Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Accessories/RashGuards/rsh16.jpg",
    title: "Hydro Flex Rash Guard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
];
function AccRashGuards() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Rash Guards</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AccRashGuards;
