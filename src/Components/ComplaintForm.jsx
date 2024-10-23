import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ComplaintForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ui3roqh', 'template_h33wnp3', form.current, {
        publicKey: 'LtS2v1KaFL9z0uBTM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setSubmitted(true);
  };

  return (
    <div className="complaint-container">
      {!submitted ? (
        <form className="complaint-form"  ref={form} onSubmit={sendEmail}>
          <h2>Submit a Complaint</h2>
          <p>If you’re facing any issues, please let us know below.</p>
          
          <div className="input-group">
            <input type="text" name="from_name" required />
            <label>Name</label>
          </div>
          
          <div className="input-group">
            <input type="email" name="from_email" required />
            <label>Email</label>
          </div>
          
          {/* <div className="input-group">
            <input type="text" name="orderId" required />
            <label>Order ID</label>
          </div> */}
          
          <div className="input-group">
            <textarea name="message" required></textarea>
            <label>Complaint Details</label>
          </div>
          
          <button type="submit" className="submit-btn">Submit Complaint</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You for Your Complaint</h2>
          <p>We will look into the matter and get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default ComplaintForm;
