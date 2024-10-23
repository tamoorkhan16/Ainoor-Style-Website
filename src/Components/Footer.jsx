import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="row1">
          <div className="col des">
            <h3>
              Contact Us{" "}
              <div className="underlined">
                <span></span>
              </div>
            </h3>

            <div className="footer_contact_us">
              <address className="footer_ngoDescription_para">
51031 Nishtar Abad, Sialkot, Punjab, Pakistan
              </address>

              <div className="footer_contact">
                <a href="mailto:ainoorrajput14@gmail.com">
                  ainoorrajput14@gmail.com
                </a>
              </div>
              <div className="footer_contact">
                <a href="tel:+923466604644">+92 346 6604644</a>
              </div>
            </div>
          </div>

          <div className="col information">
            <h3>
              Information{" "}
              <div className="underlined">
                <span></span>
              </div>
            </h3>
            <div className="footer_infolinks">
              <div>
                <a href="/FAQs" className="menu__link">
                  FAQs
                </a>
              </div>
              {/* <div>
                <a href="/Tracking Order" className="menu__link">
                  Order Status
                </a>
              </div> */}

              <div>
                <a href="/Shipping Policy" className="menu__link">
                  Shipping Policy
                </a>
              </div>
              <div>
                <a href="/Exchange and Returns" className="menu__link">
                  Exchange and Returns
                </a>
              </div>
            </div>
          </div>

          <div className="col ccare">
            <h3>
              Customer Care{" "}
              <div className="underlined">
                <span></span>
              </div>
            </h3>
            <div className="footer_infolinks">
              <div>
                <a href="/ContactUs" className="menu__link">
                  Contact Us
                </a>
              </div>

              <div>
                <a href="/AboutUs" className="menu__link">
                  About Ainoor
                </a>
              </div>

            
              <div>
                <a href="/ComplaintForm" className="menu__link">
                  Complaint Form
                </a>
              </div>
              {/* <div>
                <a href="/CustomerFeedback" className="menu__link">
                  Customer Feedback
                </a>
              </div> */}
             
            </div>
          </div>

          <div className="col newsletter">
            <h3>
              Newsletter{" "}
              <div className="underlined">
                <span></span>
              </div>
            </h3>
            <form>
              <i className="fa fa-envelope"></i>
              <input
                className="email"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email id"
              />
              <button type="submit">
                <i className="fa fa-arrow-right"></i>
              </button>
            </form>

            <div className="row2">
              <div className="links">
                <ul className="footer_social_links">
                  <li className="icon-content">
                    <a
                      href="https://www.facebook.com/"
                      aria-label="Facebook"
                      data-social="Facebook"
                    >
                      <div className="filled"></div>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <div className="tooltip">Facebook</div>
                  </li>
                  <li className="icon-content">
                    <a
                      href="https://www.instagram.com/"
                      aria-label="Instagram"
                      data-social="Instagram"
                    >
                      <div className="filled"></div>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <div className="tooltip">Instagram</div>
                  </li>
                  <li className="icon-content">
                    <a
                      href="https://Whatsapp.com/"
                      aria-label="WhatsApp"
                      data-social="WhatsApp"
                    >
                      <div className="filled"></div>
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <div className="tooltip">WhatsApp</div>
                  </li>
                  <li className="icon-content">
                    <a
                      href="https://linkedin.com/"
                      aria-label="LinkedIn"
                      data-social="LinkedIn"
                    >
                      <div className="filled"></div>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                  </li>
                  <li className="icon-content">
                    <a
                      href="https://email.com/"
                      aria-label="Email"
                      data-social="Email"
                    >
                      <div className="filled"></div>
                      <i className="fa-regular fa-envelope"></i>
                    </a>
                    <div className="tooltip">Email</div>
                  </li>
                  <li className="icon-content">
                    <a href="https://X.com/" aria-label="X" data-social="X">
                      <div className="filled"></div>
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <div className="tooltip">X</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="center copyright">
          All &copy;Copyrights are reserved by Ainoor
        </p>
      </footer>
    </>
  );
}

export default Footer;
