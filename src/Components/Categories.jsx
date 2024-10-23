import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate =useNavigate();
  return (
    <>
      <main className="categories_outer_container">
        <section className="categories_section">
          <figure className="categories_box" onClick={()=>{navigate("/Men's Wear/Men's TrackSuits")}}>
            <img src="Images\Categories\Track_Suit.jpg" alt="" />
            <button className="category_button" >
              <span class="box">Track Suits</span>
              
            </button>

          </figure>
          <figure className="categories_box"  onClick={()=>{navigate("/Leather/Jackets")}}>
            <img src="Images\Categories\Leather.jpg" alt="" />
            <button className="category_button">
              <span class="box">Jackets</span>
              
            </button>
          </figure>
        </section>
        <section className="categories_section" onClick={()=>{navigate("/Accessories/Bjj Gi")}}>
          <figure className="categories_box">
            <img src="Images\Categories\Bjj_Gi.jpg" alt="" />
            <button className="category_button">
              <span class="box">Bjj Gi</span>
              
            </button>
          </figure>
        </section>
      </main>
    </>
  );
}

export default Categories;
