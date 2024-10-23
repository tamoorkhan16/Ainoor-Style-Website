import React, { useState } from "react";

function CategorySection() {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (category) => {
    setShowDropdown(category);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  return (
    <section className="category_outer_container">
      <ul className="category_outer_container_ul">
        <li
          onMouseEnter={() => handleMouseEnter("men")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="category_link">Men's Wear</button>
          <div
            className={`dropdown_menu ${showDropdown === "men" ? "open" : ""}`}
          >
            <div className="dropdown_image">
              <img
                src="/Images/Categories_Dropdown/Men_Category.jpg"
                alt="Men Fashion"
              />
            </div>
            <ul className="dropdown_links">
              <li>
                <a href="/Men's Wear/Men's T-Shirts">T-Shirts</a>
              </li>
              <li>
                <a href="/Men's Wear/Fitness Suit">Fitness Suits</a>
              </li>

              <li>
                <a href="/Men's Wear/Sweat Shirts">Sweat Shirts</a>
              </li>
            </ul>
            <ul className="dropdown_links">
              <li>
                <a href="/Men's Wear/Men's TrackSuits">Track Suits</a>
              </li>
              <li>
                <a href="/Men's Wear/Hoodies">Hoodies</a>
              </li>

              <li>
                <a href="/Men's Wear/Shorts">Shorts</a>
              </li>
            </ul>
          </div>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("women")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="category_link">Women's Wear</button>
          <div
            className={`dropdown_menu ${
              showDropdown === "women" ? "open" : ""
            }`}
          >
            <div className="dropdown_image">
              <img
                src="/Images/Categories_Dropdown/Women_Category.jpg"
                alt="Women Fashion"
              />
            </div>
            <ul className="dropdown_links">
              <li>
                <a href="/Women's Wear/Women's Gym Suits">Gym Suits</a>
              </li>
              <li>
                <a href="/Women's Wear/Women's T-Shirts">T-Shirts</a>
              </li>
              <li>
                <a href="/Women's Wear/Women's Sweat Suits">Sweat Suits</a>
              </li>
            </ul>
            <ul className="dropdown_links">
              <li>
                <a href="/Women's Wear/Women's TrackSuits">Track Suits</a>
              </li>

              <li>
                <a href="/Women's Wear/Women's Sports Bra">Sports Bra</a>
              </li>
            </ul>
          </div>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("leather")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="category_link">Leather</button>
          <div
            className={`dropdown_menu ${
              showDropdown === "leather" ? "open" : ""
            }`}
          >
            <div className="dropdown_image">
              <img
                src="/Images/Categories_Dropdown/Leather_Category.jpeg"
                alt="Leather"
              />
            </div>
            <ul className="dropdown_links">
              <li>
                <a href="/Leather/Jackets">Jackets</a>
              </li>
              <li>
                <a href="/Leather/Coats">Coats</a>
              </li>
              <li>
                <a href="/Leather/Pants">Pants</a>
              </li>
            </ul>
            <ul className="dropdown_links">
              <li>
                <a href="/Leather/Belts">Belts</a>
              </li>
              {/* <li>
                <a href="#">Sport Jersey</a>
              </li> */}
              <li>
                <a href="/Leather/Gloves">Gloves</a>
              </li>
            </ul>
          </div>
        </li>
        {/* <li
          onMouseEnter={() => handleMouseEnter("bjjgi")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="category_link">Bjj Gi</button>
          <div
            className={`dropdown_menu ${
              showDropdown === "bjjgi" ? "open" : ""
            }`}
          >
            <div className="dropdown_image">
              <img
                src="/Images/Categories_Dropdown/Bjjgi.jpg"
                alt="Bjj Gi"
              />
            </div>
            <ul className="dropdown_links">
              <li>
                <a href="#">Uniforms</a>
              </li>
              <li>
                <a href="#">Bjj Gi Jackets</a>
              </li>
              <li>
                <a href="#">Bjj Gi Patches</a>
              </li>
            </ul>
            <ul className="dropdown_links">
              <li>
                <a href="#">Bjj Gi Pants</a>
              </li>
              <li>
                <a href="#">Bjj Gi Belts</a>
              </li>
            </ul>
          </div>
        </li> */}
        {/* <li
          onMouseEnter={() => handleMouseEnter("accessories")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="category_link">Accessories</button>
          <div
            className={`dropdown_menu dropdown_s1menu ${
              showDropdown === "accessories" ? "open" : ""
            }`}
          >
            <div className="dropdown_image">
              <img
                src="/Images/Categories_Dropdown/Accessories_Category.jpg"
                alt="Accessories"
              />
            </div>
            <ul className="dropdown_links">
              <li>
                <a href="#">Gloves</a>
              </li>
              <li>
                <a href="#">Belts</a>
              </li>
              <li>
                <a href="#">Caps</a>
              </li>
            </ul>
          </div>
        </li> */}
        <li
          onMouseEnter={() => handleMouseEnter("accessories")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="category_link">Accessories</button>
          <div
            className={`dropdown_menu dropdown_s2menu ${
              showDropdown === "accessories" ? "open" : ""
            }`}
          >
            <div className="dropdown_image">
              <img
                src="/Images/Categories_Dropdown/RashGuard.jpg"
                alt="Rash Guards"
              />
            </div>
            <ul className="dropdown_links">
              
              <li>
                <a href="/Accessories/Rash Guards">Rash Guards</a>
              </li>
              <li>
                <a href="/Accessories/Bjj Gi">Bjj Gi</a>
              </li>
              <li>
                <a href="/Accessories/Gloves">Gloves</a>
              </li>
            </ul>
            <ul className="dropdown_links">
              <li>
                <a href="/Accessories/Sport Jersey">Sport Jersey</a>
              </li>
              <li>
                <a href="/Accessories/Bjj Gi Belts">Bjj Gi Belts</a>
              </li>
         
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default CategorySection;
