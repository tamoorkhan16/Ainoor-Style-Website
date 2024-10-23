import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Prevents negative quantity
    updateQuantity(id, quantity);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ display: 'flex', marginBottom: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '1rem' }} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div>
                    <label>Quantity: </label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
          <button>Proceed to Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
