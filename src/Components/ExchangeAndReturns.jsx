import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ExchangeAndReturns = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  // Toggle the form visibility when the button is clicked
  const handleShowForm = () => {
    setShowForm((prev) => !prev);  // This will properly toggle the form
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ui3roqh',  // Replace with your actual service ID
        'template_egt5hfs', // Replace with your actual template ID
        form.current,
        'LtS2v1KaFL9z0uBTM'  // Replace with your actual public key
      )
      .then(
        () => {
          setSubmitted(true);  // Set submitted to true only after successful email sending
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="exchange-returns-container">
      <h2 className="exchange-returns-title animate-fade-in">Exchange & Returns Policy</h2>

      <section className="exchange-section animate-fade-in">
        <h2>Return Policy</h2>
        <p>
          At Ainoor, we want you to love what you ordered! If you're not completely satisfied, you have <strong>30 days</strong> from the delivery date to return the item.
          The returned product must be in original condition—unworn, unwashed, with all tags intact.
        </p>
        <p>
          Refunds are issued via the original payment method. Please note that shipping costs are non-refundable. 
          For more details on how to initiate your return, contact us at <a className='linkemail' href="mailto:ainoorrajput14@gmail.com">ainoorrajput14@gmail.com</a>.
        </p>
      </section>

      {/* Other Sections... */}

      <section className="exchange-section animate-fade-in">
        <h2>Exchange Policy</h2>
        <p>
          We offer free exchanges within <strong>30 days</strong> of receiving your order. If you want to swap your item for a different size or color, 
          exchanges are subject to availability.
        </p>
        <button className="exchange-btn" onClick={handleShowForm}>
          Start an Exchange
        </button>
      </section>

      {/* Check if showForm is true, then display the form */}
      {showForm && (
        <section className="exchange-section animate-fade-in">
          <h2>Return/Exchange Form</h2>

          {!submitted ? (
            <form className="return-exchange-form" ref={form} onSubmit={sendEmail}>
              <label>
                Email:
                <input type="email" name="from_email" placeholder="Enter Email" required />
              </label>
              <label>
                Reason for Return/Exchange:
                <textarea name="message" placeholder="Describe the issue or reason for exchange" required></textarea>
              </label>
              <label>
                Desired Action:
                <select name="action" required>
                  <option value="exchange">Exchange</option>
                  <option value="return">Return</option>
                </select>
              </label>
              <button type="submit" className="form-submit-btn">Submit Request</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h2>Thank You for Contacting Us!</h2>
              <p> You’ll receive an update from us shortly</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default ExchangeAndReturns;
