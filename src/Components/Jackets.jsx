import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Images/Leather/Jackets/mj1.jpeg",
    title: "Lavendard Brown Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj2.jpeg",
    title: "Dean Black Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj3.jpeg",
    title: "Zen Matte Black Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj4.jpeg",
    title: "Charcoal Black Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj5.jpeg",
    title: "Coconut Laether Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj6.jpeg",
    title: "Dart Jet Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Leather/Jackets/mj7.jpeg",
  //   title: "Product 7",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Leather/Jackets/mj8.jpeg",
    title: "Black Out Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj9.jpeg",
    title: "Vino Tinto Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj10.jpeg",
    title: "Dark Jet Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Leather/Jackets/mj11.jpeg",
  //   title: "Product 11",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Leather/Jackets/mj12.jpeg",
  //   title: "Product 12",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Leather/Jackets/mj13.jpeg",
  //   title: "Product 13",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Leather/Jackets/mj14.jpeg",
  //   title: "Product 14",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  // {
  //   image: "/Images/Leather/Jackets/mj15.jpeg",
  //   title: "Product 15",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Leather/Jackets/mj16.jpeg",
    title: "Carbon Fiber Laether Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj17.jpeg",
    title: "Brown Bramble Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj18.jpeg",
    title: "BoltGun Metal Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Leather/Jackets/mj19.jpeg",
  //   title: "Product 19",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Leather/Jackets/mj20.jpeg",
    title: "Chinese Ink Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mj21.jpeg",
    title: "Dark  Charcoal Leather Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  // {
  //   image: "/Images/Leather/Jackets/wj1.jpeg",
  //   title: "Product 22",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["#000000", "#ffffff", "#0000FF"],
  // },
  {
    image: "/Images/Leather/Jackets/wj2.jpeg",
    title: "Female Leather Jacket - Spicy Hue",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/wj3.jpeg",
    title: "Female Leather Jacket - Reef Gold",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/wj4.jpeg",
    title: "Female Leather Jacket - Refined Chinati",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/wj5.jpeg",
    title: "Female Leather Jacket - Heath",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/wj6.jpeg",
    title: "Female Leather Jacket - Sun Dried Tomato",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn1.jpeg",
    title: "Satin Deep Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn2.jpeg",
    title: "Heavy Heart Black & White Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn3.jpeg",
    title: "Siyah Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn4.jpeg",
    title: "Nero Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn5.jpeg",
    title: "Satin Deep Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn6.jpeg",
    title: "Laed in the Dark Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn7.jpeg",
    title: "Chaos Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn8.jpeg",
    title: "Female Leather Jacket -Sunken Ship ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn9.jpeg",
    title: "Deep Sea Turtle Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn10.jpeg",
    title: "Thamar Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn11.jpeg",
    title: "Satin Deep Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn12.jpeg",
    title: "Eerie Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn13.jpeg",
    title: "Inkwell Inception Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn14.jpeg",
    title: "Wild Boar Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn15.jpeg",
    title: "Heartwood Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn16.jpeg",
    title: "Incubus Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn17.jpeg",
    title: "Dark Charcoal Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn18.jpeg",
    title: "Thamar Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn19.jpeg",
    title: "Female Leather Jacket - Chromaphobic Black",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn22.jpeg",
    title: "Chaos Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn25.jpeg",
    title: "The End Leather Jacket without Sleeves ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn20.jpeg",
    title: "Mole Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn21.jpeg",
    title: "Caviar Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
 
  {
    image: "/Images/Leather/Jackets/jn23.jpeg",
    title: "Tobago Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn24.jpeg",
    title: "Loulou Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

  {
    image: "/Images/Leather/Jackets/jn26.jpeg",
    title: "Polished Mahogany Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn27.jpeg",
    title: "Off Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn28.jpeg",
    title: "Aloeswood Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn29.jpeg",
    title: "Rogan Josh Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/jn30.jpeg",
    title: "Dark Moon Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn1.png",
    title: "Olive Leaf Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn2.png",
    title: "Volcanic Stone Green Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn3.png",
    title: "Mayan Chocolate Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn4.png",
    title: "Mocha Delight Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn5.png",
    title: "Satin Deep Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn6.png",
    title: "Seal Brown Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn7.png",
    title: "Back in Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn8.png",
    title: "Piano Black Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn9.png",
    title: "Brown Pod Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },
  {
    image: "/Images/Leather/Jackets/mjn10.png",
    title: "Raven Leather Jacket ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#0000FF"],
  },

];

function Jackets() {
  return (
    <>
      <div className="outer_product_container">
        <h2>Jackets</h2>
        <div className="product_container">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Jackets;
