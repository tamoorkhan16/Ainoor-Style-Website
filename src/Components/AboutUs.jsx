import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h2>About Us</h2>
        <p> We are dedicated to providing the best products and services to our customers. Our journey started with a simple vision: to offer a seamless and enjoyable shopping experience for everyone. Over the years, we’ve grown into a trusted name in the e-commerce industry, known for our commitment to quality, customer satisfaction, and innovation.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Ainoor, our mission is to make online shopping easy, accessible, and enjoyable for everyone.
          We strive to offer high-quality products at affordable prices, along with exceptional customer service.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Customer First</h3>
            <p>We prioritize the needs of our customers in everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Honesty and transparency are at the core of our business.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace new ideas and constantly seek to improve our products and services.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>We offer top-notch products that meet the highest standards of quality.</p>
          </div>
        </div>
      </section>

      {/* <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </section> */}

      <section className="about-achievements">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>1M+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="achievement-card">
            <h3>500+</h3>
            <p>Products Sold</p>
          </div>
          <div className="achievement-card">
            <h3>10+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="achievement-card">
            <h3>5 Stars</h3>
            <p>Average Customer Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
