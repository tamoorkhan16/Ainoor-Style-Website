import React from 'react';


const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-container">
      <h2 className="shipping-title">Shipping Policy</h2>

      <section className="shipping-section">
        {/* <h2>Order Processing</h2> */}
        <p>
          All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
        </p>
      </section>

      <section className="shipping-section">
        <h2>Domestic Shipping Rates and Estimates</h2>
        <p>
          We offer flat rate shipping to domestic destinations. Shipping charges for your order will be calculated and displayed at checkout.
        </p>
        <ul>
          <li>Standard Shipping: $5.99 (3-5 business days)</li>
          <li>Express Shipping: $15.99 (1-2 business days)</li>
        </ul>
      </section>

      <section className="shipping-section">
        <h2>International Shipping</h2>
        <p>
          We offer international shipping to the following countries: [List countries]. Please note that your order may be subject to import duties and taxes, which are incurred once a shipment reaches your destination country. [Your Website Name] is not responsible for these charges if they are applied and are your responsibility as the customer.
        </p>
        <ul>
          <li>Standard International Shipping: $19.99 (7-14 business days)</li>
          <li>Express International Shipping: $39.99 (3-7 business days)</li>
        </ul>
      </section>

      
    </div>
  );
};

export default ShippingPolicy;
