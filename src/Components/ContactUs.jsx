import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
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
    <div className="contact-container">
      {!submitted ? (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <div className="input-group">
            <input type="text" name="from_name" required />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="from_email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea name="message" required></textarea>
            <label>Message</label>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You for Contacting Us!</h2>
          <p>We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
