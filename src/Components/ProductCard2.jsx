import React from "react";

function ProductCard2({ product }) {
  return (
    <>
      <div className="product-card product-card2">
        <div className="image-container image-container2">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <h2>{product.title}</h2>
      </div>
    </>
  );
}

export default ProductCard2;
