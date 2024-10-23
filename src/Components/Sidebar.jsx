import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setisMenuClicked] = useState(false);
  // Hamburger Menu Function
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burgerBar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burgerBar unclicked");
      setMenuClass("menu hidden");
    }
    setisMenuClicked(!isMenuClicked);
  };

  //   Handle Category

  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      name: "Men's Wear",
      subcategories: [
        { name: "T-Shirts", link: "/Men's Wear/Men's T-Shirts" },
        { name: "Fitness Suits", link: "/Men's Wear/Fitness Suit" },
        { name: "Sweat Shirts", link: "/Men's Wear/Sweat Shirts" },
        { name: "Track Suits", link: "/Men's Wear/Men's TrackSuits" },
        { name: "Hoodies", link: "/Men's Wear/Hoodies" },
        { name: "Shorts", link: "/Men's Wear/Shorts" },
      ],
    },
    {
      name: "Women's Wear",
      subcategories: [
        { name: "Gym Suits", link: "/Women's Wear/Women's Gym Suits" },
        { name: "T-Shirts", link: "/Women's Wear/Women's T-Shirts" },
        { name: "Sweat Suits", link: "/Women's Wear/Women's Sweat Suits" },
        { name: "Track Suits", link: "/Women's Wear/Women's TrackSuits" },
        { name: "Sports Bra", link: "/Women's Wear/Women's Sports Bra" },
   
      ],
    },
    {
      name: "Leather",
      subcategories: [
        { name: "Jackets", link: "/Leather/Jackets" },
        { name: "Coats", link: "/Leather/Coats" },
        { name: "Pants", link: "/Leather/Pants" },
        { name: "Gloves", link: "/Leather/Gloves" },
        { name: "Belts", link: "/Leather/Belts" },
 
      ],
    },
    {
      name: "Accessories",
      subcategories: [
        { name: "Rash Guards", link: "/Accessories/Rash Guards" },
        { name: "Bjj Gi", link: "/Accessories/Bjj Gi" },
        { name: "Gloves", link: "/Accessories/Gloves" },
        { name: "Sport Jersey", link: "/Accessories/Sport Jersey" },
        { name: "Bjj Gi Belts", link: "/Accessories/Bjj Gi Belts" },
  
      ],
    },
  ];

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <>
      <header>
        <div className="navigation-bar">
          <div className="hamburger">
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>
          </div>
        </div>
        <div className={menuClass}>

            <nav className="menu">
          <ul>

          {categories.map((category) => (
          <li key={category.name}>
            <button onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </button>
            {openCategory === category.name && ( // Only show submenu if the category is open
              <ul className="submenu">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.name}>
                    <a href={subcategory.link}>{subcategory.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
            {/* <li>
              <a className="menu-link" href="/Home">
                Men's Wear
              </a>
            </li>

            <li>
              <a className="menu-link" href="/Profile">
                Women's Wear
              </a>
            </li>
            <li>
              <a className="menu-link" href="/Events">
                Leather
              </a>
            </li>

            <li>
              <a className="menu-link" href="/Signup">
                Accessories
              </a>
            </li> */}
          </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavigationBar;
