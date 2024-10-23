import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
function NavigationBar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <>
      <nav>

        <Sidebar/>
        <div className="logo">
          <img
            src="\Images\Logo\Logo_Image.png"
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <form onSubmit={handleSearch} className="search_section">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, categories, etc."
                />
                <div className="icon-container">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </form>
            </li>
            {/* <li>
             <a href="">
                <div className="icon-container">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </a>
            </li>  */}
            {/* <li>
              <a href="">
                <div className="icon-container">
                  <i className="fa-solid fa-user"></i>
                </div>
              </a>
            </li> */}
            {/* <li>
              <a href="/Cart">
                <div className="icon-container">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
