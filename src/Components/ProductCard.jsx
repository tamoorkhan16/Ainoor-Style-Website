import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <h2>{product.title}</h2>
      
      {/* Size options */}
      {/* <div className="options"> */}
        {/* <div className="size-options">
          <h4>Select Size</h4>
          {product.sizes.map((size) => (
            <button 
              key={size} 
              className={`size-button ${selectedSize === size ? 'selected' : ''}`} 
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div> */}

        {/* Color options */}
        {/* <div className="color-options">
          <h4>Select Color</h4>
          {product.colors.map((color) => (
            <button 
              key={color} 
              className={`color-button ${selectedColor === color ? 'selected' : ''}`} 
              style={{ backgroundColor: color }} 
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div> */}
      {/* </div> */}

      {/* Add to Cart */}
      {/* <button className="add-to-cart">Add to Cart</button> */}
    </div>
  );
};

export default ProductCard;
