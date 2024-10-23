import React, { useState, useEffect } from "react";

const Notice = () => {
  const [showNotice, setShowNotice] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // For fade-out animation

  // Handle close notice with fade-out effect
  const handleCloseNotice = () => {
    setFadeOut(true);
    // Delay the actual hiding until the fade-out animation finishes
    setTimeout(() => {
      setShowNotice(false);
    }, 300); // Match this duration with the CSS animation time
  };

  return (
    <>
      {showNotice && (
        <div className={`notice-overlay ${fadeOut ? "fade-out" : "fade-in"}`}>
          <div className="notice-container">
            <button className="close-btnn" onClick={handleCloseNotice}>
              ×
            </button>
            <h2>Important Notice</h2>
            <p>
              Welcome to our store! Please note that we exclusively accept bulk
              orders for our products. To ensure you receive items tailored to
              your specific requirements, including size, color, and design, we
              encourage you to contact us directly. </p>  <p>For inquiries or to place a
              custom bulk order, feel free to reach out via email at{" "}
              <a href="mailto:ainoorrajput14@gmail.com">
                ainoorrajput14@gmail.com
              </a>{" "}
              or call us at  <a href="tel:+923466604644">+92 346 6604644</a>. Our team is ready to assist you in fulfilling
              your needs with precision and quality. </p> <p> We appreciate your
              understanding and look forward to serving you.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Notice;
