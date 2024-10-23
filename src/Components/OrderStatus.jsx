import React, { useState } from 'react';

const OrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock function to simulate fetching order status
  const fetchOrderStatus = () => {
    setLoading(true);
    setTimeout(() => {
      // Mocked response
      setOrderStatus({
        id: orderId,
        status: 'Shipped', // Example statuses: 'Processing', 'Shipped', 'Delivered', 'Cancelled'
        estimatedDelivery: 'Sept 15, 2024',
      });
      setLoading(false);
    }, 2000);
  };

  const handleCheckStatus = () => {
    if (orderId) {
      fetchOrderStatus();
    } else {
      alert('Please enter a valid order ID.');
    }
  };

  return (
    <div className="order-status-container">
      <h1>Track Your Order</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button className='oder_status_button' onClick={handleCheckStatus}>Check Status</button>
      </div>

      {loading && <p className="loading">Checking your order status...</p>}

      {orderStatus && (
        <div className="status-info">
          <h2>Order ID: {orderStatus.id}</h2>
          <p>Status: <span className={orderStatus.status.toLowerCase()}>{orderStatus.status}</span></p>
          {orderStatus.status === 'Shipped' && (
            <p>Estimated Delivery: {orderStatus.estimatedDelivery}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
